/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

(function () {
    'use strict';
    angular.module('myApp').controller('WelcomeCtrl', ['$scope', '$log', '$q', '$modal', 'UserData', 'Util', 'MathUtil', 'hsAuthService', 'hsCalendarService',
        function ($scope, $log, $q, $modal, UserData, Util, MathUtil, auth, calendars) {
            var startRange = moment().startOf('day'),
                endRange = moment().endOf('day'),
                calendarList = null;

            function getSubject(evtResource) {
                var subjectId = Util.safeRead(evtResource, 'extendedProperties', 'private', 'subjectId');
                return UserData.subjects.find(function (sub) { return sub.id === subjectId; });
            }

            function addEvent(studentEventList, calendarId, eventResource) {
                var start = moment(eventResource.start.dateTime),
                    end = moment(eventResource.end.dateTime);
                studentEventList.events.push({
                    day: start.dayOfYear(),
                    start: start,
                    end: end,
                    startMinutes: start.hours() * 60 + start.minutes(),
                    endMinutes: end.hours() * 60 + end.minutes(),
                    fmtTime: start.format('hh:mma'),
                    calendarId: calendarId,
                    subject: getSubject(eventResource),
                    resource: eventResource
                });
                $log.log('creating ' + eventResource.summary + ' event for ' + studentEventList.student.name);
            }

            function fetchStudentEvents(calendarList, nextSyncToken) {
                $scope.studentEventLists = [];
                var deferred = $q.defer(),
                    pendingStudents = 0;
                angular.forEach(UserData.students, function (student) {
                    var studentEventList = {
                            student: student,
                            events: []
                        },
                        eventListPromises = [];
                    $scope.studentEventLists.push(studentEventList);
                    angular.forEach(student.calendarIDs, function (studentCalendarId) {
                        var calendar = calendarList.find(function (cal, idx) {
                            return cal.id === studentCalendarId;
                        });
                        if (calendar) {
                            eventListPromises.push(calendars.getEventList(calendar.id, startRange.format(), endRange.format()));
                        }
                    });

                    if (eventListPromises.length) {
                        // fetch the events for the student's calendars
                        pendingStudents++;
                        $q.all(eventListPromises).then(function (resultsArray) {
                            deferred.notify(student.name + ' data retrieved');
                            pendingStudents--;
                            angular.forEach(resultsArray, function (eventListResult) {
                                angular.forEach(eventListResult.items, function (evtResource) {
                                    addEvent(studentEventList, eventListResult.calendarId, evtResource);
                                });
                            });

                            if (pendingStudents === 0) {
                                deferred.resolve(true);
                            }
                        }, function (rejections) {
                            deferred.reject('Error fetching events for ' + student.name + ': ' + rejections);
                        });
                    }
                });

                return deferred.promise;
            }

            /** Determine the time range of the events and add a "non student" list  */
            function addNonStudentList() {
                var minTime = 24 * 60 - 1,
                    maxTime = 0,
                    blockOffset = 0,
                    minutesPerBlock = 30,
                    today = moment().startOf('day'),
                    nonStudentList = {
                        nonStudent: true,
                        events: [],
                        student: {
                            name: startRange.format('ddd MMM D')
                        }
                    }; // what minutes increments to show
                angular.forEach($scope.studentEventLists, function (list) {
                    angular.forEach(list.events, function (evt) {
                        minTime = Math.min(minTime, evt.startMinutes);
                        maxTime = Math.max(maxTime, evt.endMinutes);
                    });
                });

                minTime = MathUtil.floor(minTime, minutesPerBlock);
                maxTime = MathUtil.ceiling(maxTime, minutesPerBlock);

                // set the blockOffset property on each event to indicate where it'll be positioned
                angular.forEach($scope.studentEventLists, function (list) {
                    angular.forEach(list.events, function (evt) {
                        evt.blockOffset = Math.round(MathUtil.floor(evt.startMinutes - minTime, minutesPerBlock) / minutesPerBlock);
                        minTime = Math.min(minTime, evt.startMinutes);
                        maxTime = Math.max(maxTime, evt.endMinutes);
                    });
                });

                today.add(minTime, 'minutes');

                while (minTime < maxTime) {
                    nonStudentList.events.push({
                        time: minTime, // 8:30 * 60,
                        resource: {
                            summary: today.format('hh:mma')
                        },
                        blockOffset: blockOffset
                    });

                    blockOffset++;
                    minTime += minutesPerBlock;
                    today.add(minutesPerBlock, 'minutes');
                }

                $scope.studentEventLists.unshift(nonStudentList);
            }

            $scope.testVar = 'some scope data';
            $scope.login = auth.login;

            $scope.studentEventLists = [];

            $scope.changeDay = function (increment) {
                startRange.add('days', increment);
                endRange.add('days', increment);
                fetchStudentEvents(calendarList.items, calendarList.nextSyncToken).then(addNonStudentList);
            };

            $scope.getData = function () {

                calendars.getCalendarList().then(function (data) {
                    calendarList = data;
                    fetchStudentEvents(calendarList.items, calendarList.nextSyncToken).then(addNonStudentList);
                }, function (error) {
                    $log.error(error);
                });
            };

            $scope.setActiveList = function (activeStudent) {
                angular.forEach($scope.studentEventLists, function (student) {
                    student.active = student === activeStudent;
                });
                $scope.activeStudent = activeStudent;
            };

            $scope.openEventModal = function (event) {
                var modalInstance = $modal.open({
                    templateUrl: 'views/event_detail_modal.html',
                    controller: 'ModalInstanceCtrl',
                    resolve: {
                        evt: function () {
                            return event;
                        }
                    }
                });

                modalInstance.result.then(function (selectedItem) {
                    $scope.selected = selectedItem;
                }, function () {
                    $log.info('Modal dismissed at: ' + new Date());
                });
            };

        }]);
}());
