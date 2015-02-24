/*global angular: false */
(function () {
    'use strict';

    // keep track of data that will ultimately need to kept and retrieved from elsewhere
    angular.module('hsp.auth').factory('Profile', ['$resource', 'BASE_URL',
        function ($resource, BASE_URL) {

            // define profile resource
            return $resource(BASE_URL + '/profiles/:userId', {
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
