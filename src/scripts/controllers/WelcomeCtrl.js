'use strict';

module.exports = ['$scope', 'hsAuthService',
    function ($scope, auth) {
        $scope.testVar = auth.test;
        $scope.login = function () {
            auth.login()
        };
}];