/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

export default (function () {
    'use strict';
    return ['$scope', '$log', '$q', '$timeout', '$location', '$mdDialog', 'ScheduleModel', 'Profile', 'Util', 'MathUtil', 'hsAuthService', 'hsCalendarService',
        function ($scope, $log, $q, $timeout, $location, $mdDialog, ScheduleModel, Profile, Util, MathUtil, auth, calendars) {
            // reasonable defaults
            var lastMinTime = 480, // 8am
                lastMaxTime = 1020; // 5pm

            this.taskMode = true;

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

                timeAxis.summary = ScheduleModel.getStart().format('dddd');
                timeAxis.student.name = ScheduleModel.getStart().format('M/D');

                angular.forEach(eventsByStudentID, function (events, studentId) {
                    var list = lists.find(function (evtList, idx) { return evtList.student.id === studentId; });
                    if (!list) {
                        // we don't have an event list created for this student yet
                        var userData = auth.getUserData(),
                            student = userData.students
                                ? userData.students.find(function (stdnt) { return stdnt.id === studentId; })
                                : userData;
                        lists.push({
                            student: student,
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
                        blockOffset: blockOffset * pixelsPerBlock + 'px',
                        resource: {
                            summary: today.format('ha'),
                        }
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
                ScheduleModel.changeDay(increment);

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
                    ScheduleModel.fetchStudentEvents().then(prepareEvents).then(function (updatedLists) {
                        var elapsed = (new Date()).getTime() - start.getTime();
                        $timeout(function () {
                            // then remove that flag to trigger enter animations
                            $scope.studentEventLists = updatedLists;
                            $scope.changingDay = false;
                        }, Math.max(0, 500 - elapsed), true);
                    });
                }, 0, true);
            };

            $scope.getData = function ()
            {
                auth.afterLogin().then(function(access_token) {
                    ScheduleModel.fetchStudentEvents().then(prepareEvents).then(function (updatedLists) {
                        $scope.studentEventLists = updatedLists;
                        if (updatedLists.length == 2) {
                            $scope.activeStudent = updatedLists[1];
                            $scope.activeStudent.active = true;
                        }

                    }, function (error) {
                        $log.error(error);
                    });
                });
            };

            $scope.setActiveList = function (activeStudent) {
                if (activeStudent && activeStudent.isTimeAxis) return;

                angular.forEach($scope.studentEventLists, function (student) {
                    student.active = student === activeStudent;
                });
                $scope.activeStudent = activeStudent;
            };

            $scope.openEvent = function (evtViewState) {
                ScheduleModel.setActiveEvent(evtViewState);
                $location.url('/event-detail');
            };

            $scope.toggleComplete = ScheduleModel.toggleCompletion;
        }];
}());
