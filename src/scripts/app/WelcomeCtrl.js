/*jslint plusplus: true */
/*global angular: false, moment: false */

(function () {
    'use strict';
    angular.module('myApp').controller('WelcomeCtrl', ['$scope', '$log', '$q', '$modal', 'UserData', 'MathUtil', 'hsAuthService', 'hsCalendarService',
        function ($scope, $log, $q, $modal, UserData, MathUtil, auth, calendars) {
            $scope.testVar = 'some scope data';
            $scope.login = auth.login;

            $scope.subjects = ['Spanish', 'Writing', 'History', 'Math'];
            $scope.studentEventLists = [];

            function addEvent(studentEventList, calendarId, eventResource) {
                var start = moment(eventResource.start.dateTime),
                    end = moment(eventResource.end.dateTime);
                studentEventList.events.push({
                    assignment: eventResource.summary,
                    day: start.dayOfYear(),
                    start: start,
                    end: end,
                    startMinutes: start.hours() * 60 + start.minutes(),
                    endMinutes: end.hours() * 60 + end.minutes(),
                    fmtTime: start.format('hh:mma'),
                    calendarId: calendarId,
                    eventId: eventResource.id,
                    etag: eventResource.etag
                });
                $log.log('creating ' + eventResource.summary + ' event for ' + studentEventList.student.name);
            }

            function fetchStudentEvents(calendarList, nextSyncToken) {
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
                            eventListPromises.push(calendars.getEventList(calendar.id));
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
                    minIncrement = 30,
                    today = moment().startOf('day'),
                    nonStudentList = { nonStudent: true, events: [] }; // what minutes increments to show
                angular.forEach($scope.studentEventLists, function (list) {
                    angular.forEach(list.events, function (evt) {
                        minTime = Math.min(minTime, evt.startMinutes);
                        maxTime = Math.max(maxTime, evt.endMinutes);
                    });
                });

                minTime = MathUtil.floor(minTime, minIncrement);
                maxTime = MathUtil.ceiling(maxTime, minIncrement);
                today.add(minTime, 'minutes');
                while (minTime < maxTime) {
                    nonStudentList.events.push({
                        time: minTime, // 8:30 * 60,
                        assignment: today.format('hh:mma')
                    });

                    minTime += minIncrement;
                    today.add(minIncrement, 'minutes');
                }

                $scope.studentEventLists.unshift(nonStudentList);
            }

            $scope.getData = function () {
                $scope.studentEventLists = [];
                calendars.getCalendarList().then(function (data) {
                    $scope.data = data;
                    fetchStudentEvents(data.items, data.nextSyncToken).then(addNonStudentList);
                }, function (error) {
                    $log.error(error);
                });
            };





            $scope.setActiveList = function (activeStudent) {
                angular.forEach($scope.students, function (student) {
                    student.active = student === activeStudent;
                });
                $scope.activeStudent = activeStudent;
            };

            $scope.openEventModal = function (event) {
                var modalInstance = $modal.open({
                    templateUrl: 'views/event_detail_modal.html',
                    controller: 'ModalInstanceCtrl',
                    resolve: {
                        event: function () {
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

    angular.module('myApp').controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'hsCalendarService', 'event',
        function ($scope, $modalInstance, calendars, event) {
            $scope.event = event;

            $scope.setSpanish = function () {
                calendars.patchEvent(event.calendarId, event.eventId, event.etag, {
                    extendedProperties: {
                        private: {
                            subject: 'Spanish'
                        },
                        shared: {}
                    }
                });
            };

            $scope.ok = function () {
                $modalInstance.close(event);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }]);
}());
