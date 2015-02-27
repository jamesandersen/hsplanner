/*global angular: false */

// require all .js files in the directory unless they end with _test.js
require.context(".", false, /^(.(?!_test))+?\.js$/);

angular.module('hsp.common', []);
