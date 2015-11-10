/*global angular: false */

// require all .js files in the directory unless they end with _test.js
//("angular");
//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);

angular.module('hsp.common', []);

angular.module('hsp.common').constant('MathUtil', require('./math-util-constant.js'));
angular.module('hsp.common').constant('Util', require('./util-constant.js'));
angular.module('hsp.common').constant('Events', require('./event-constant.js'));
angular.module('hsp.common').factory('hsStorageService', require('./storage-service.js'));
angular.module('hsp.common').factory('$exceptionHandler', require('./exception-handling.js'));
angular.module('hsp.common').directive('onFileChange', require('./file-input-directive.js'));
