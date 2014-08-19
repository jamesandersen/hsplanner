(function () {
    'use strict';
    angular.module('myApp').controller('HeaderCtrl', ['$scope', '$log', 'hsAuthService',
        function ($scope, $log, auth) {
            $scope.logout = auth.logout;
        }]);
}());