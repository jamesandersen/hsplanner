/*global angular: false */

//require("angular");
(function () {
    'use strict';

    var app = angular.module('hsp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngMdIcons', 'hsp.common', 'hsp.auth', 'hsp.schedule']);
    angular.module('hsp.auth').constant('CLIENT_ID', '<!-- @secret client_id -->');
    angular.module('hsp.common').constant('BASE_URL', 'https://localhost:9002');
    app.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: '/components/schedule/schedule.html',
                    controller: 'ScheduleCtrl',
                    resolve: {
                        token: ['hsAuthService', function (hsAuthService) {
                            return hsAuthService.afterLogin();
                        }]
                    }
                })
                .when('/profile', {
                    templateUrl: '/components/auth/profile.html',
                    controller: 'ProfileCtrl'
                })
                .when('/event-detail', {
                    templateUrl: '/components/schedule/event-detail.html',
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
                auth.afterLogin().then(function (accessToken) {
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
