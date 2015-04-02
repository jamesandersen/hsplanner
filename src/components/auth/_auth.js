/*global angular: false */

// require all .js files in the directory unless they end with _test.js
require.context(".", false, /^(.(?!_test))+?\.(html)$/);

var authModule = angular.module('hsp.auth', ['ngResource']);

angular.module('hsp.auth').constant('authEvents', {
    AUTHENTICATION_CHANGE: 'AUTHENTICATION_CHANGE'
});

angular.module('hsp.auth').factory('hsAuthService', require('./auth-service.js'));
angular.module('hsp.auth').controller('HeaderCtrl', require('./header-controller.js'));
angular.module('hsp.auth').controller('LoginCtrl', require('./login-controller.js'));
angular.module('hsp.auth').controller('ProfileCtrl', require('./profile-controller.js'));
angular.module('hsp.auth').factory('Profile', require('./profile-service.js'));
