/*global angular: false */
(function () {
    'use strict';
    angular.module('myApp').controller('WelcomeCtrl', ['$scope', '$log', 'hsAuthService', 'hsCalendarService',
        function ($scope, $log, auth, calendars) {
            $scope.testVar = 'some scope data';
            $scope.login = function () {
                auth.login();
            };

            $scope.getData = function () {
                calendars.getCalendarList().then(function (data) {
                    $scope.data = data;
                }, function (error) {
                    $log.error(error);
                });
            };

            $scope.setActiveStudent = function (activeStudent) {
                angular.forEach($scope.students, function (student) { student.active = student === activeStudent; });
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
                    active: true,
                    events: [
                        {
                            time: 510, // 8:30 * 60,
                            subject: "History",
                            assignment: "Read pg. 34"
                        },
                        {
                            time: 570, // 8:30 * 60,
                            subject: "Math",
                            assignment: "Do Worksheet 7"
                        }
                    ]
                },
                {
                    name: "Nina",
                    events: [
                        {
                            time: 510, // 8:30 * 60,
                            subject: "History",
                            assignment: "Read pg. 34"
                        },
                        {
                            time: 570, // 8:30 * 60,
                            subject: "Math",
                            assignment: "Do Worksheet 7"
                        }
                    ]
                },
                {
                    name: "Phoebe",
                    events: [
                        {
                            time: 510, // 8:30 * 60,
                            subject: "History",
                            assignment: "Read pg. 34"
                        },
                        {
                            time: 570, // 8:30 * 60,
                            subject: "Math",
                            assignment: "Do Worksheet 7"
                        }
                    ]
                }
            ];
        }]);
}());
