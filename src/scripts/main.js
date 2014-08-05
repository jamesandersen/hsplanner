'use strict';

var angular = require('angular');
var authModule = require('./auth/authService');

var app = angular.module('myApp', [authModule.name]);
angular.module(authModule.name).constant('AUTH_URI', '<!-- @secret auth_uri -->');
angular.module(authModule.name).constant('TOKEN_URI', '<!-- @secret token_uri -->');
angular.module(authModule.name).constant('CLIENT_ID', '<!-- @secret client_id -->');
angular.module(authModule.name).constant('CLIENT_SECRET', '<!-- @secret client_secret -->');
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
        auth.checkOAuth2();
    }]);