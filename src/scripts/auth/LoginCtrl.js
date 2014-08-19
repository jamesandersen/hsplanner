(function () {
    'use strict';
    angular.module('hsAuth').controller('LoginCtrl', ['$scope', '$location', '$log', 'hsAuthService',
        function ($scope, $location, $log, auth) {
            // not signed in so we need the login button
            gapi.signin.render('google-login');

            auth.afterLogin().then(function (accessToken) {
                $location.path('/main');
            }, function (authError) {
                $log.error('login failed: ' + authError);
            });
        }]);
}());