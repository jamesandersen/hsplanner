angular.module('hsAuth', []).factory('hsAuthService', ['$window', '$document', '$location', '$q', '$log', '$http', 'CLIENT_ID',
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
            pendingGoogleAPIDeferred = null,
            pendingTokenDeferred = null,
            pendingLoginDeferred = null;

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

            pendingGoogleAPIDeferred = $q.defer();

            // we may be able to resolve the token promise right
            // when the gapi loads and invokes the auth callback
            pendingTokenDeferred = $q.defer();

            return pendingGoogleAPIDeferred.promise;
        }

        function onGooglePlusAPILoad() {
            $log.info('google plus API loaded');
            gplusAPILoaded = true;
            delete $window.onAPILoad;

            pendingGoogleAPIDeferred.resolve(true);
        }

        /* will be called once immediately after google api is loaded */
        function onGooglePlusAuthCallback(result) {
            $log.debug('google plus API auth callback: ' + JSON.stringify(result));
            if (!result['status']['signed_in']) {
                // for some reason result.hasOwnProperty is undefined
                $log.error('authentication error: ' + result.error);

                if (pendingLoginDeferred && result.error != 'immediate_failed') {
                    pendingLoginDeferred.reject(result.error);
                    pendingLoginDeferred = null;
                }

                if (pendingTokenDeferred) {
                    pendingTokenDeferred.reject(result.error);
                    pendingTokenDeferred = null;
                }

                if (!result['status']['google_logged_in']) {
                    // Could customize the experience if we know they're a google user
                    // but not yet signed into our app
                }
            } else {
                access_token = result.access_token;
                expiration = new Date();
                expiration.setMilliseconds(expiration.getMilliseconds() + result.expires_in);
                $log.info('successful login; access token expires at ' + expiration.toLocaleTimeString());

                if (pendingLoginDeferred) {
                    pendingLoginDeferred.resolve(access_token);
                    pendingLoginDeferred = null;
                }

                if (pendingTokenDeferred) {
                    pendingTokenDeferred.resolve(access_token);
                    pendingTokenDeferred = null;
                }
            }
        }

        function login() {
            if (gplusAPILoaded) {;
                gapi.auth.signIn(gplusSignInParams);
            }
        }

        function afterLogin() {
            return pendingGoogleAPIDeferred.promise.then(function () {
                if (!pendingLoginDeferred) {
                    pendingLoginDeferred = $q.defer();
                }

                return pendingLoginDeferred.promise;
            }, function (rejection) {
                return $q.reject(rejection);
            });
        }

        function logout() {
            if (gplusAPILoaded) {
                gapi.auth.signOut();
                access_token = expiration = null;
                $location.path('/login');
            }
        }

        function getToken() {
            if (access_token && expiration > new Date()) {
                return $q.when(access_token);
            }

            // token is no longer valid, clear it out
            access_token = expiration = null;

            if (pendingTokenDeferred) {
                return pendingTokenDeferred.promise;
            } else {
                return $q.reject("no token available, please login");
            }
        }

        return {
            login: login,
            afterLogin: afterLogin,
            logout: logout,
            loadGoogleAPI: initGooglePlusAuth,
            getToken: getToken
        };
    }]);