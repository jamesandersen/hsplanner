/*global angular: false */
export default (function () {
    'use strict';

    // keep track of data that will ultimately need to kept and retrieved from elsewhere
    return ['$resource', 'BASE_URL',
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
        }];
}());
