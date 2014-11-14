/*global angular: false, gapi: false */
(function () {
    'use strict';

    angular.module('hsp.auth').constant('authEvents', {
        AUTHENTICATION_CHANGE: 'AUTHENTICATION_CHANGE'
    });

    angular.module('hsp.auth').factory('hsAuthService', ['$window', '$document', '$location', '$rootScope', '$q', '$log', '$http', 'CLIENT_ID', 'authEvents', 'Profile',
        function ($window, $document, $location, $rootScope, $q, $log, $http, CLIENT_ID, authEvents, Profile) {

            var access_token = null,
                profile = null,
                userData = null,
                signed_in = false,
                expiration = null,
                gplusAPILoaded = false,
                gplusSignInParams = {
                    'clientid': CLIENT_ID,
                    'cookiepolicy': 'single_host_origin',
                    'callback': 'onAuthResult',
                    'scope': 'https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/calendar'
                },
                pendingGoogleAPIDeferred = null,
                pendingTokenDeferred = null,
                pendingLoginDeferred = null;

            function onGooglePlusAPILoad() {
                $log.info('google plus API loaded');
                gplusAPILoaded = true;
                delete $window.onAPILoad;

                pendingGoogleAPIDeferred.resolve(true);
            }

            function updateSignedIn(isSignedIn) {
                var change = false;
                if (isSignedIn && !signed_in) {
                    signed_in = true;
                    change = true;
                } else if (!isSignedIn && signed_in) {
                    signed_in = false;
                    change = true;
                }

                if (change) {
                    $rootScope.$broadcast(authEvents.AUTHENTICATION_CHANGE, signed_in);
                }
            }

            /* will be called once immediately after google api is loaded */
            function onGooglePlusAuthCallback(result) {
                $log.debug('google plus API auth callback: ' + JSON.stringify(result));
                if (!result.status.signed_in) {
                    // for some reason result.hasOwnProperty is undefined
                    $log.error('authentication error: ' + result.error);
                    updateSignedIn(false);
                    if (pendingLoginDeferred && result.error !== 'immediate_failed') {
                        pendingLoginDeferred.reject(result.error);
                        pendingLoginDeferred = null;
                    }

                    if (pendingTokenDeferred) {
                        pendingTokenDeferred.reject(result.error);
                        pendingTokenDeferred = null;
                    }

                    /*if (!result.status.google_logged_in) {
                        // Could customize the experience if we know they're a google user
                        // but not yet signed into our app
                    }*/
                } else {
                    access_token = result.access_token;
                    expiration = new Date();
                    expiration.setMilliseconds(expiration.getMilliseconds() + result.expires_in);
                    $log.info('successful login; access token expires at ' + expiration.toLocaleTimeString());


                    $http.get('https://www.googleapis.com/plus/v1/people/me', {
                        headers: {
                            Authorization: 'Bearer ' + access_token
                        }
                    })
                        .success(function (data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available
                            userData = Profile.get({ userId: data.id }, function (profileData) {
                                userData = profileData;
                                profile = data;
                                updateSignedIn(true);

                                if (pendingLoginDeferred) {
                                    pendingLoginDeferred.resolve(access_token);
                                    pendingLoginDeferred = null;
                                }
                            });

                        }).
                        error(function (data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                            $log.error('Error getting profile information');
                        });



                    if (pendingTokenDeferred) {
                        pendingTokenDeferred.resolve(access_token);
                        pendingTokenDeferred = null;
                    }
                }
            }

            function initGooglePlusAuth() {
                // global function for the API to callback
                $window.onAPILoad = onGooglePlusAPILoad;
                $window.onAuthResult = onGooglePlusAuthCallback;

                var po = $document[0].createElement('script'),
                    s = $document[0].getElementsByTagName('script')[0];
                po.type = 'text/javascript';
                po.async = true;
                po.setAttribute('parsetags', 'explicit');
                po.src = 'https://apis.google.com/js/client:plusone.js?onload=onAPILoad';

                s.parentNode.insertBefore(po, s);

                pendingGoogleAPIDeferred = $q.defer();

                // we may be able to resolve the token promise right
                // when the gapi loads and invokes the auth callback
                pendingTokenDeferred = $q.defer();

                return pendingGoogleAPIDeferred.promise;
            }

            function login() {
                if (gplusAPILoaded) {
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
                getToken: getToken,
                getProfile: function () { return profile; },
                getUserData: function () { return userData; }
            };
        }]);
}());
