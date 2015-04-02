/*global angular: false, gapi: false, onLoginSuccess: false, onLoginFailed: false */
export default (function () {
    'use strict';
    return ['$scope', '$location', '$log', 'hsAuthService',
        function ($scope, $location, $log, auth) {
            auth.loadGoogleAPI().then(function (isGoogleAPILoaded) {
                // not signed in so we need the login button
                gapi.signin.render('google-login');

                auth.afterLogin().then(onLoginSuccess, onLoginFailed);
            }, function (rejection) {
                $log.error('Google API not loaded');
            });

            function onLoginSuccess(accessToken) {
                var search = $location.search();
                $location.url(search.hasOwnProperty('dst') ? decodeURIComponent(search.dst) : '/');
            }

            function onLoginFailed(authError) {
                $log.error('login failed: ' + authError);
                auth.afterLogin().then(onLoginSuccess, onLoginFailed);
            }

        }];
}());
