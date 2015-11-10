/*global angular: false, gapi: false, onLoginSuccess: false, onLoginFailed: false */
export default (function () {
    'use strict';
    return ['$scope', '$location', '$routeParams', '$log', 'hsAuthService',
        function ($scope, $location, $routeParams, $log, auth) {
            var controller = this;
            controller.errMessage = '';
            
            controller.login= function() {
                controller.loading = true;
                auth.afterLogin(true, $routeParams.ecode)
                .then(function (accessToken) {
                        var search = $location.search();
                        $location.url(search.hasOwnProperty('dst') ? decodeURIComponent(search.dst) : '/');
                    })
                .catch(function (authError) {
                    $log.error('login failed: ' + authError);
                    controller.errMessage = authError;
                })
                .finally(function() { controller.loading = false; });
            }
            
            if($routeParams.ecode) {
                controller.login();
            } else {
                // see if we can auto-login
                auth.getToken().then(controller.login);
            }
        }];
}());