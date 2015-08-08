/*global angular: false */

// require all .js files in the directory unless they end with _test.js
//("angular");
//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);

angular.module('hsp.navigation', ['ngResource', 'ngMaterial', 'hsp.auth']);

angular.module('hsp.navigation').controller('SideNavCtrl', require('./side-nav-controller.js'));
