/*global angular: false */

// require all .js files in the directory unless they end with _test.js
//("angular");
//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);

angular.module('hsp.common', []);

angular.module('hsp.common').constant('MathUtil', require('./math-util-constant.js'));
angular.module('hsp.common').constant('Util', require('./util-constant.js'));
