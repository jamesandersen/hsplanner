/*global angular: false */
(function () {
    'use strict';

    // keep track of data that will ultimately need to kept and retrieved from elsewhere
    angular.module('hsp.auth').factory('Profile', ['$resource',
        function ($resource) {

            // Define CreditCard class
            return $resource('/profile/:userId', {
                userId: '@userId'
            }, {
                charge: {
                    method: 'POST',
                    params: {
                        charge: true
                    }
                }
            });
        }]);
}());
