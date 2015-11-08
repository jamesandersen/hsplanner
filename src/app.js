/*global angular: false */

//require("angular");
(function () {
    'use strict';

    var app = angular.module('hsp', ['ngRoute', 'ngAnimate', 'ngMaterial', 'ngMdIcons', 'hsp.common', 'hsp.auth', 'hsp.navigation', 'hsp.google-client', 'hsp.schedule']);
    angular.module('hsp.auth').constant('CLIENT_ID', '<!-- @secret client_id -->');

    // DEBUG and PRODUCTION are defined by the webpack define plugin
    if(DEBUG) {
        angular.module('hsp.common').constant('BASE_URL', 'https://localhost:9002');
    }

    if(PRODUCTION) {
        angular.module('hsp.common').constant('BASE_URL', 'https://home-school.azurewebsites.net');
    }

    app.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            //$locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'components/schedule/schedule.html',
                    controller: 'ScheduleCtrl as schedule'
                })
                .when('/profile', {
                    templateUrl: 'components/auth/profile.html',
                    controller: 'ProfileCtrl'
                })
                .when('/event-detail', {
                    templateUrl: 'components/schedule/event-detail.html',
                    controller: 'EventDetailCtrl'
                })
                .when('/login', {
                    templateUrl: 'components/auth/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'Ctrl'
                })
                .when('/ec/:ecode', {
                    templateUrl: 'components/auth/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'Ctrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);

    app.config(["$httpProvider",
        function ($httpProvider) {
            $httpProvider.interceptors.push('calendarHttpInterceptor');
        }]);

    app.config(["$mdThemingProvider", function($mdThemingProvider) {
        $mdThemingProvider.theme('default'); //.dark();
    }]);

    /*app.run(['hsAuthService', '$location', '$log',
        function (auth, $location, $log) {
            var path = $location.path();
        }]); */
}());
