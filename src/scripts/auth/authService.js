var angular = require('angular');
modName = 'hsAuth',
mod = angular.module(modName, []);

mod.factory('hsAuthService', ['$window', '$document', '$location', '$q', '$log', '$http', 'CLIENT_ID',
    function ($window, $document, $location, $q, $log, $http, CLIENT_ID) {

        var access_token = null,
            refresh_token = null,
            expiration = null,
            gplusAPILoaded = false,
            gplusSignInParams = {
                'clientid': CLIENT_ID,
                'cookiepolicy': 'single_host_origin',
                'callback': 'onAuthResult',
                'scope': 'profile https://www.googleapis.com/auth/calendar'
            },
            pendingTokenDeferred;

        function getToken() {
            if (access_token && expiration > new Date()) {
                return $q.when(access_token);
            } else if (pendingTokenDeferred) {
                return pendingTokenDeferred.promise;
            } else {
                return $q.reject("no token available, please login");
            }
        }

        function login() {
            if (gplusAPILoaded) {
                pendingTokenDeferred = $q.defer();
                gapi.auth.signIn(gplusSignInParams);
            }
        }

        function initGooglePlusAuth() {
            // global function for the API to callback
            $window.onAPILoad = onGooglePlusAPILoad;
            $window.onAuthResult = onGooglePlusAuthCallback;

            var po = $document[0].createElement('script');
            po.type = 'text/javascript';
            po.async = true;
            po.setAttribute('parsetags', 'explicit');
            po.src = 'https://apis.google.com/js/client:plusone.js?onload=onAPILoad';
            var s = $document[0].getElementsByTagName('script')[0];
            s.parentNode.insertBefore(po, s);
        }

        function onGooglePlusAPILoad() {
            $log.info('google plus API loaded');
            gplusAPILoaded = true;
            delete $window.onAPILoad;
            gapi.signin.render('google-login')
        }

        function onGooglePlusAuthCallback(result) {
            $log.debug('google plus API auth callback: ' + JSON.stringify(result));
            if (!result['status']['signed_in']) {
                // for some reason result.hasOwnProperty is undefined
                $log.error('authentication error: ' + result.error);
                if (pendingTokenDeferred) {
                    pendingTokenDeferred.reject(result.error);
                }
            } else {
                access_token = result.access_token;
                expiration = new Date();
                expiration.setMilliseconds(expiration.getMilliseconds() + result.expires_in);
                $log.info('successful login; access token expires at ' + expiration.toLocaleTimeString());
                if (pendingTokenDeferred) {
                    pendingTokenDeferred.resolve(access_token);
                }
            }
        }

        return {
            login: login,
            loadGoogleAPI: initGooglePlusAuth,
            getToken: getToken,
            test: 'foo bar from auth'
        };
    }]);

mod.name = modName;
module.exports = mod;