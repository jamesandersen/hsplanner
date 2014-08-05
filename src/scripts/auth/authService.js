var angular = require('angular');
modName = 'hsAuth',
mod = angular.module('hsAuth', []);

// TODO: Update for Google+ sign-in flow: https://developers.google.com/+/web/signin/javascript-flow
mod.factory('hsAuthService', ['$window', '$location', '$log', '$http', 'AUTH_URI', 'TOKEN_URI', 'CLIENT_ID', 'CLIENT_SECRET',
    function ($window, $location, $log, $http, AUTH_URI, TOKEN_URI, CLIENT_ID, CLIENT_SECRET) {

        var access_token = null,
            refresh_token = null,
            expiration = null;

        function login() {
            var url = AUTH_URI + '?' +
                'scope=profile&' +
                'state=app_specific_state&' +
                'redirect_uri=http%3A%2F%2Flocalhost:9001%2Foauth2callback&' +
                'response_type=code&' +
                'client_id=' + CLIENT_ID;

            $window.location = url;
        }

        function handleOAuth2Callback() {
            var path = $location.path();
            $log.log('initializing application; path=' + path);
            if (path.indexOf('/oauth2callback') == 0) {
                // handle OAuth2 callback
                var params = $location.search(),
                    state = params.state;

                if (params.error) {
                    $log.error('Error on OAuth2 callback: ' + params.error);
                } else if (params.code) {
                    // exchange for token
                    var url = TOKEN_URI + '?' +
                        'code=' + params.code + '&' +
                        'client_id=' + CLIENT_ID + '&' +
                        'client_secret=' + CLIENT_SECRET + '&' +
                        'redirect_uri=http%3A%2F%2Flocalhost:9001%2Foauth2callback&' +
                        'grant_type=authorization_code';
                    $http.post(url).success(function (data, status, headers, config, statusText) {
                        access_token = data.access_token;
                        refresh_token = data.refresh_token;
                        expiration = new Date();
                        expiration.setMilliseconds(expiration.getMilliseconds + data.expires_in);
                        $log.info('successful login; access token expires at ' + expiration.toLocaleTimeString());
                        $location.path('/');
                    });

                }
            }
        }

        return {
            login: login,
            checkOAuth2: handleOAuth2Callback,
            test: 'foo bar from auth'
        };
            }]);

mod.name = 'hsAuth';
module.exports = mod;