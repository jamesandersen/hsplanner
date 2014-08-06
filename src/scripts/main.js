'use strict';

var angular = require('angular');
var authModule = require('./auth/authService');
var calendarModule = require('./calendar/calendarService');

var app = angular.module('myApp', [authModule.name, calendarModule.name]);
angular.module(authModule.name).constant('CLIENT_ID', '<!-- @secret client_id -->');
app.controller('WelcomeCtrl', require('./controllers/WelcomeCtrl'));

app.config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.html5Mode(true);

        /*$routeProvider
    .when('/', {
      templateUrl: '/partials/template1.html', 
      controller: 'ctrl1'
    })
    .when('/tags/:tagId', {
      templateUrl: '/partials/template2.html', 
      controller:  'ctrl2'
    })
    .when('/another', {
      templateUrl: '/partials/template1.html', 
      controller:  'ctrl1'
    })
    .otherwise({ redirectTo: '/' }); */
}]);

app.run(['hsAuthService',
    function (auth) {
        auth.loadGoogleAPI();
    }]);