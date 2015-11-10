/*global angular: false, gapi: false */

export default (function () {
    'use strict';

    return ['$window', '$document', '$location', '$rootScope', '$q', '$log', '$http', '$mdDialog', 'BASE_URL', 'authEvents', 'hsStorageService', 'Profile',
        function ($window, $document, $location, $rootScope, $q, $log, $http, $mdDialog, BASE_URL, authEvents, storage, Profile) {
            const TOKEN_KEY = "TOKEN_KEY";
            const TOKEN_EXPIRATION_KEY = "TOKEN_EXPIRATION_KEY";

            var access_token = null,
                profile = null,
                expiration = null,
                profilePromise = null;
                
            // attempt to load from localStorage
            if (!access_token && !expiration) {
                expiration = new Date(parseInt(storage.getPersistentItem(TOKEN_EXPIRATION_KEY)));
                if(expiration > new Date()) {
                    access_token = storage.getPersistentItem(TOKEN_KEY);
                } else {
                    expiration = null;
                    storage.removePersistentItem(TOKEN_KEY);
                    storage.removePersistentItem(TOKEN_EXPIRATION_KEY);
                }
            }

            function afterLogin(login, ecode) {
                if (access_token) {
                    // we've already got a token so we must be logged in
                    return $q.when(access_token);
                } else if (ecode){
                    // we don't have a token yet but have our auth code
                    return getProfile(ecode);
                } else if(login) {
                    // user has now opted to login
                    // get a redirect URL for the user to login via Google
                    return $http.get(BASE_URL + '/users/login').then(function(response) {
                        $window.location.href = response.data;
                        return $q.reject('redirecting for login');
                    });
                } else {
                    // redirect to login screen
                    $location.path('/login');
                    return $q.reject("Not logged in");
                }
            }
            
            function getProfile(ecode) {
                if (profilePromise) {
                    return profilePromise;
                } else if (profile != null) {
                    return $q.when(access_token);
                }
                
                profilePromise = $http.get(BASE_URL + '/users/profile', {
                        headers: {
                            'Authorization': access_token ? "Bearer " + access_token : "ECode " + ecode
                        }
                    }).then(function (result) {
                        profile = result.data;
                        if(ecode) {
                            // update localStorage and local variables if there's a token_expiry property
                            storage.setPersistentItem(TOKEN_KEY, profile.access_token);
                            storage.setPersistentItem(TOKEN_EXPIRATION_KEY, profile.token_expiry)
                            access_token = profile.access_token;
                            expiration = new Date(profile.token_expiry);
                            delete profile.token_expiry;
                            delete profile.access_token;
                        }
                        
                        profilePromise = null;
                        $rootScope.$broadcast(authEvents.AUTHENTICATION_CHANGE, true);
                        return access_token;
                    }, function (rejection) {
                        if(rejection.status == 404) {
                            return createProfile();
                        } else {
                            // some other error occurred
                            return $q.reject(rejection);
                        }
                    });
                    
                return profilePromise;
            }
            
            function createProfile() {
                // user has logged in but we don't have any profile data for them
                // prompt for information required for HSP profile
                return $mdDialog.show({
                    //targetEvent: $event,
                    templateUrl: 'components/auth/profile.html',
                    controller: 'ProfileCtrl',
                    //onComplete: afterShowAnimation,
                    locals: { employee: "User Name" }
                }).then(function(newHspUserData) {
                    // TODO: call to persist this data
                    finishLogin(true, result, data, newHspUserData);
                }, function(cancellation) {
                    finishLogin(false, result, data);
                });
            }

            function logout() {
                access_token = expiration = null;
                storage.removePersistentItem(TOKEN_KEY);
                storage.removePersistentItem(TOKEN_EXPIRATION_KEY);
                $rootScope.$broadcast(authEvents.AUTHENTICATION_CHANGE, false);
                $location.path('/login');
            }

            function getToken() {
                if (profilePromise) {
                    return profilePromise;
                } else if (access_token && expiration > new Date()) {
                    return getProfile();
                }

                // token is no longer valid, clear it out
                access_token = expiration = null;

                return $q.reject("no token available, please login");
            }

            return {
                afterLogin: afterLogin,
                logout: logout,
                getToken: getToken,
                getProfile: function () { return profile.me; },
                getUserData: function () { return profile.profile; }
            };
        }];
}());