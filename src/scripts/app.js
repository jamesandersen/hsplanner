/*global angular: false */
(function () {
    'use strict';

    var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'hsp.common', 'hsp.auth', 'hsp.schedule']);
    angular.module('hsp.auth').constant('CLIENT_ID', '<!-- @secret client_id -->');

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
                .when('/event-detail', {
                    templateUrl: '/views/event_detail.html',
                    controller: 'EventDetailCtrl'
                })
                .when('/login', {
                    templateUrl: '/views/login.html',
                    controller: 'LoginCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);

    app.config(["$httpProvider",
        function ($httpProvider) {
            $httpProvider.interceptors.push('calendarHttpInterceptor');
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
}());