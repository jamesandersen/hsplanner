/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */
export default (function () {
    'use strict';
    return ['$scope', '$log', 'hsAuthService',
        function ($scope, $log, auth) {
            $scope.getData = function () {
                $log.log('get data');
            };
        }];
}());
