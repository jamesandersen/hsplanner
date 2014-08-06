'use strict';

module.exports = ['$scope', '$log', 'hsAuthService', 'hsCalendarService',
    function ($scope, $log, auth, calendars) {
        $scope.testVar = 'some scope data';
        $scope.login = function () {
            auth.login()
        };

        $scope.getData = function () {
            calendars.getCalendarList().then(function (data) {
                $scope.data = data;
            }, function (error) {
                $log.error(error);
            });
        }
}];