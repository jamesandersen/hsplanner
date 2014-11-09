/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */
(function () {
    'use strict';
    angular.module('hsp.schedule').controller('ProfileCtrl', ['$scope', '$log', 'hsAuthService',
        function ($scope, $log, auth) {
            $scope.getData = function () {
                $log.log('get data');
            };
        }]);
}());
