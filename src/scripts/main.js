'use strict';

var app = angular.module('myApp', ['ngRoute', 'hsAuth', 'hsCalendar']);
angular.module('hsAuth').constant('CLIENT_ID', '<!-- @secret client_id -->');

app.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: '/views/main.html',
                controller: 'WelcomeCtrl'
            })
            .when('/profile', {
                templateUrl: '/views/profile.html',
                controller: 'ProfileCtrl'
            })
            .when('/login', {
                templateUrl: '/views/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
}]);

app.run(['hsAuthService', '$location', '$log',
    function (auth, $location, $log) {
        auth.loadGoogleAPI().then(function (isGoogleAPILoaded) {
            auth.getToken().then(function (accessToken) {
                // token is available so we're signed in
            }, function (authError) {
                $log.warn('not signed in at startup: ' + authError);
                // not signed in, redirect to login screen
                $location.url('/login?dst=' + encodeURIComponent($location.url()));
            });
        }, function (rejection) {
            $log.warn('google api not loaded: ' + rejection);
        });
    }]);