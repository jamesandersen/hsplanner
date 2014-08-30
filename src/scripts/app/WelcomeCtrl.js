/*global angular: false */
(function () {
    'use strict';
    angular.module('myApp').controller('WelcomeCtrl', ['$scope', '$log', '$q', 'hsAuthService', 'hsCalendarService',
        function ($scope, $log, $q, auth, calendars) {
            $scope.testVar = 'some scope data';
            $scope.login = function () {
                auth.login();
            };

            $scope.getData = function () {
                calendars.getCalendarList().then(function (data) {
                    $scope.data = data;
                    fetchStudentEvents(data.items, data.nextSyncToken);
                }, function (error) {
                    $log.error(error);
                });
            };

            function fetchStudentEvents(calendarList, nextSyncToken) {
                angular.forEach($scope.students, function (student) {
                    var eventListPromises = [];
                    angular.forEach(student.calendarIDs, function (studentCalendarId) {
                        var calendar = calendarList.find(function (cal, idx) {
                            return cal.id == studentCalendarId;
                        });
                        if (calendar) {
                            eventListPromises.push(calendars.getEventList(calendar.id));
                        }
                    });

                    if (eventListPromises.length) {
                        // fetch the events for the student's calendars
                        $q.all(eventListPromises).then(function (resultsArray) {
                            angular.forEach(resultsArray, function (eventListResult) {
                                angular.forEach(eventListResult.items, function (evtResource) {
                                    addEvent(student, evtResource);
                                });
                            });
                        }, function (rejections) {
                            $log.error('Error fetching events for ' + student.name + ': ' + rejections);
                        });
                    }
                });
            }

            function addEvent(student, eventResource) {
                if(!student.events) student.events = [];

                var date = new Date(Date.parse(eventResource.start.dateTime));
                student.events.push({
                    assignment: eventResource.summary,
                   day: date.getDate(),
                   time: date.getHours() * 60 + date.getMinutes()
                });
                $log.log('creating ' + eventResource.summary + ' event for ' + student.name);
            }

            $scope.setActiveStudent = function (activeStudent) {
                angular.forEach($scope.students, function (student) {
                    student.active = student === activeStudent;
                });
                $scope.activeStudent = activeStudent;
            };

            $scope.students = [
                {
                    name: null,
                    nonStudent: true,

                    events: [
                        {
                            time: 510, // 8:30 * 60,
                            assignment: "8:30"
                        },
                        {
                            time: 570, // 9:30 * 60,
                            assignment: "9:30"
                        }
                    ]
                },
                {
                    name: "Ella",
                    calendarIDs: ["jander.me_vhfj574k3cb837tgqe6vrv6e0g@group.calendar.google.com"]
                },
                {
                    name: "Nina",
                    calendarIDs: ["jander.me_dmq4di5r67vgkn78u6etvsqa1c@group.calendar.google.com"]
                },
                {
                    name: "Phoebe",
                    calendarIDs: ["jander.me_1e0uquv8m1lh260s4b0i7h2s7o@group.calendar.google.com"]
                }
            ];
        }]);
}());
