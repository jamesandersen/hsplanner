/*global angular: false, gapi: false, onLoginSuccess: false, onLoginFailed: false */
export default (function () {
    'use strict';
    return ['$scope', '$location', '$log', 'hsAuthService',
        function ($scope, $location, $log, auth) {
            this.errMessage = '';
            
            this.login= function() {
                auth.afterLogin().then(onLoginSuccess, onLoginFailed);
            }

            function onLoginSuccess(accessToken) {
                var search = $location.search();
                $location.url(search.hasOwnProperty('dst') ? decodeURIComponent(search.dst) : '/');
            }

            function onLoginFailed(authError) {
                $log.error('login failed: ' + authError);
                this.errMessage = authError;
            }

        }];
}());
