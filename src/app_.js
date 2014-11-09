/*global angular: false */
(function () {
    'use strict';

    var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'hsp.common', 'hsp.auth', 'hsp.schedule']);
    angular.module('hsp.auth').constant('CLIENT_ID', '653295052579-6017j2a7ine0cn35dpinu9j5uv0mftk3.apps.googleusercontent.com');

    app.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: '/components/schedule/schedule.html',
                    controller: 'WelcomeCtrl'
                })
                .when('/profile', {
                    templateUrl: '/components/auth/profile.html',
                    controller: 'ProfileCtrl'
                })
                .when('/event-detail', {
                    templateUrl: '/components/schedule/event_detail.html',
                    controller: 'EventDetailCtrl'
                })
                .when('/login', {
                    templateUrl: '/components/auth/login.html',
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
