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
        /*.when('/tags/:tagId', {
      templateUrl: '/partials/template2.html', 
      controller:  'ctrl2'
    })*/
        .when('/login', {
            templateUrl: '/views/login.html',
            controller: 'LoginCtrl'
        })
            .otherwise({
                redirectTo: '/'
            });
}]);

app.run(['hsAuthService',
    function (auth) {
        auth.loadGoogleAPI();
    }]);