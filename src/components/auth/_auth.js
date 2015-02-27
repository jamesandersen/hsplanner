/*global angular: false */

// require all .js files in the directory unless they end with _test.js
require.context(".", false, /^(.(?!_test))+?\.js$/);

var authModule = angular.module('hsp.auth', ['ngResource']);
