'use strict';

var app = angular.module('myApp', ['ngRoute', 'hsAuth', 'hsCalendar']);
angular.module('hsAuth').constant('CLIENT_ID', '<!-- @secret client_id -->');

app.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                templateUrl: '/views/entry.html',
                controller: 'EntryCtrl'
            })
            .when('/main', {
                templateUrl: '/views/main.html',
                controller: 'WelcomeCtrl'
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
        auth.trySignOn().then(function (accessToken) {
            // signed in
            $location.path('/main');
        }, function (rejection) {
            $log.warn('not signed in at startup: ' + rejection);
            // not signed in, redirect to login screen
            $location.path('/login');
        });
    }]);