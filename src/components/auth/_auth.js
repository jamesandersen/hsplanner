/*global angular: false */

// require all .js files in the directory unless they end with _test.js
require.context(".", true, /^(.(?!_test))+?\.(html|svg)$/);

var authModule = angular.module('hsp.auth', ['ngResource', 'ngMaterial', 'hsp.common']);

angular.module('hsp.auth').constant('authEvents', {
    AUTHENTICATION_CHANGE: 'AUTHENTICATION_CHANGE'
});

angular.module('hsp.auth').factory('hsAuthService', require('./auth-service.js'));
angular.module('hsp.auth').controller('HeaderCtrl', require('./header-controller.js'));
angular.module('hsp.auth').controller('LoginCtrl', require('./login-controller.js'));
angular.module('hsp.auth').controller('ProfileCtrl', require('./profile-controller.js'));
angular.module('hsp.auth').factory('Profile', require('./profile-service.js'));
