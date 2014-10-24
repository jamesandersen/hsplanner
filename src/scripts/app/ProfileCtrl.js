(function () {
    'use strict';
    angular.module('myApp').controller('ProfileCtrl', ['$scope', '$log', 'hsAuthService',
        function ($scope, $log, auth) {
            $scope.getData = function () {
                calendars.getCalendarList().then(function (data) {
                    $scope.data = data;
                }, function (error) {
                    $log.error(error);
                });
            };
        }]);
}());