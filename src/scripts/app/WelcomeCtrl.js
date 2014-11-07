/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

(function () {
    'use strict';
    angular.module('myApp').controller('WelcomeCtrl', ['$scope', '$log', '$q', '$timeout', '$location', '$modal', 'ActiveEvent', 'UserData', 'Util', 'MathUtil', 'hsAuthService', 'hsCalendarService',
        function ($scope, $log, $q, $timeout, $location, $modal, ActiveEvent, UserData, Util, MathUtil, auth, calendars) {
            var startRange = moment().startOf('day'),
                endRange = moment().endOf('day'),
                calendarList = null,

                // reasonable defaults
                lastMinTime = 480, // 8am
                lastMaxTime = 1020; // 5pm

            function getSubject(evtResource) {
                var subjectId = Util.safeRead(evtResource, 'extendedProperties.private.subjectId');
                return UserData.subjects.find(function (sub) { return sub.id === subjectId; });
            }

            function buildEvent(calendarId, eventResource) {
                var start = moment(eventResource.start.dateTime),
                    end = moment(eventResource.end.dateTime);

                $log.log('creating ' + eventResource.summary + ' event');
                return {
                    day: start.dayOfYear(),
                    start: start,
                    end: end,
                    startMinutes: start.hours() * 60 + start.minutes(),
                    endMinutes: end.hours() * 60 + end.minutes(),
                    fmtTime: start.format('hh:mma'),
                    calendarId: calendarId,
                    subject: getSubject(eventResource),
                    resource: eventResource
                };
            }

            function fetchStudentEvents(calendarList, nextSyncToken) {
                var deferred = $q.defer(),
                    eventsByStudentID = {},
                    pendingStudents = 0;

                // loop over students to fetch events for each
                angular.forEach(UserData.students, function (student) {
                    eventsByStudentID[student.id] = [];
                    var eventListPromises = [];

                    // build up a list of promises for events from the student's calendar(s)
                    angular.forEach(student.calendarIDs, function (studentCalendarId) {
                        var calendar = calendarList.find(function (cal, idx) {
                            return cal.id === studentCalendarId;
                        });
                        if (calendar) {
                            eventListPromises.push(calendars.getEventList(calendar.id, startRange.format(), endRange.format()));
                        }
                    });

                    if (eventListPromises.length) {
                        // fetch the events for the student's calendar(s)
                        pendingStudents++;
                        $q.all(eventListPromises).then(function (resultsArray) {
                            deferred.notify(student.name + ' data retrieved');
                            pendingStudents--;
                            angular.forEach(resultsArray, function (eventListResult) {
                                angular.forEach(eventListResult.items, function (evtResource) {
                                    eventsByStudentID[student.id].push(buildEvent(eventListResult.calendarId, evtResource));
                                });
                            });

                            if (pendingStudents === 0) {
                                // we've now retrieved data from all students
                                deferred.resolve(eventsByStudentID);
                            }
                        }, function (rejections) {
                            deferred.reject('Error fetching events for ' + student.name + ': ' + rejections);
                        });
                    }
                });

                return deferred.promise;
            }

            /** Determine the time range of the events and add a "non student" list  */
            function prepareEvents(eventsByStudentID) {
                var minTime = 24 * 60 - 1,
                    maxTime = 0,
                    blockOffset = 0,
                    minutesPerBlock = 15,
                    pixelsPerBlock = 25,
                    today = moment().startOf('day'),
                    lists = $scope.studentEventLists.slice(0), // a copy of the current data
                    timeAxis = lists.find(function (evtList, idx) { return evtList.isTimeAxis; });

                // ensure we have a "non-student" list which is the time axis
                if (!timeAxis) {
                    timeAxis = {
                        isTimeAxis: true,
                        student: { }
                    };
                    lists.unshift(timeAxis);
                }

                timeAxis.summary = startRange.format('dddd');
                timeAxis.student.name = startRange.format('M/D');

                angular.forEach(eventsByStudentID, function (events, studentId) {
                    var list = lists.find(function (evtList, idx) { return evtList.student.id === studentId; });
                    if (!list) {
                        // we don't have an event list created for this student yet
                        lists.push({
                            student: UserData.students.find(function (stdnt) { return stdnt.id === studentId; }),
                            events: []
                        });
                    }

                    // calculate min/max time for events
                    angular.forEach(events, function (evt) {
                        minTime = Math.min(minTime, evt.startMinutes);
                        maxTime = Math.max(maxTime, evt.endMinutes);
                    });
                });

                minTime = MathUtil.floor(minTime, minutesPerBlock * 4);
                maxTime = MathUtil.ceiling(maxTime, minutesPerBlock * 4);
                $scope.scheduleTotalBlocks = Math.round(maxTime - minTime) / minutesPerBlock * pixelsPerBlock + 'px';

                // set the blockOffset property on each event to indicate where it'll be positioned
                if (minTime < maxTime) {
                    lastMinTime = minTime;
                    lastMaxTime = maxTime;
                } else {
                    minTime = lastMinTime;
                    maxTime = lastMaxTime;
                }

                angular.forEach(lists, function (list) {
                    if (list.isTimeAxis) { return; }

                    list.events = [];
                    angular.forEach(eventsByStudentID[list.student.id], function (evt) {
                        evt.blockOffset = Math.round(MathUtil.floor(evt.startMinutes - minTime, minutesPerBlock) / minutesPerBlock) * pixelsPerBlock + 'px';
                        evt.duration = MathUtil.floor(evt.endMinutes - evt.startMinutes, minutesPerBlock) / minutesPerBlock *  pixelsPerBlock + 'px';
                        minTime = Math.min(minTime, evt.startMinutes);
                        maxTime = Math.max(maxTime, evt.endMinutes);

                        // now that the evt has blockOffset and duration add it to the list array
                        // delaying this as long as possible this helps avoid unsightly flicker in the UI
                        list.events.push(evt);
                    });
                });

                today.minutes(minTime);

                // generate axis events
                timeAxis.events = [];
                while (minTime < maxTime) {
                    timeAxis.events.push({
                        duration: 4 * pixelsPerBlock + 'px', // 8:30 * 60,
                        resource: {
                            summary: today.format('ha')
                        },
                        blockOffset: blockOffset * pixelsPerBlock + 'px'
                    });

                    blockOffset += 4;
                    minTime += minutesPerBlock * 4;
                    today.add(minutesPerBlock * 4, 'minutes');
                }

                return lists;
            }

            $scope.login = auth.login;
            $scope.animateForward = false;
            $scope.studentEventLists = [];

            $scope.changeDay = function (increment) {
                startRange.add('days', increment);
                endRange.add('days', increment);

                // change direction of animation
                $scope.animateForward = increment > 0;
                $scope.changingDay = true;
                // use $timeout to ensure the animation direction is set before
                // triggering animation
                $timeout(function () {
                    // set a flag which will be used by a filter applied to the repeater
                    // to artificially hide the event lists so leave animations are triggered
                    $scope.studentEventLists.suppressEvents = true;
                    var start = new Date();
                    fetchStudentEvents(calendarList.items, calendarList.nextSyncToken).then(prepareEvents).then(function (updatedLists) {
                        var elapsed = (new Date()).getTime() - start.getTime();
                        $timeout(function () {
                            // then remove that flag to trigger enter animations
                            $scope.studentEventLists = updatedLists;
                            $scope.changingDay = false;
                        }, Math.max(0, 500 - elapsed), true);
                    });
                }, 0, true);
            };

            $scope.getData = function () {

                calendars.getCalendarList().then(function (data) {
                    calendarList = data;
                    fetchStudentEvents(calendarList.items, calendarList.nextSyncToken).then(prepareEvents).then(function (updatedLists) {
                        $scope.studentEventLists = updatedLists;
                    });
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
                ActiveEvent.setActiveEvent(event.resource, startRange, endRange);
                $location.url('/event-detail');

                /*
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
                });*/
            };

        }]);

    angular.module('myApp').filter('hasEvents', function () {
        return function (eventLists) {
            return eventLists.suppressEvents ? eventLists.filter(function (list) { return list.isTimeAxis; }) : eventLists;
        };
    });
}());
