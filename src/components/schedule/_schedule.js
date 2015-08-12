/*global angular: false */

// require all .js files in the directory unless they end with _test.js
//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);
require.context(".", false, /^(.(?!_test))+?\.html$/);

angular.module('hsp.schedule', ['hsp.auth', 'hsp.google-client']);

angular.module('hsp.schedule').controller('EventDetailCtrl', require('./event-detail-controller.js'));

angular.module('hsp.schedule').filter('hasEvents', require('./has-events-filter.js'));
angular.module('hsp.schedule').controller('ScheduleCtrl', require('./schedule-controller.js'));
angular.module('hsp.schedule').factory('ScheduleModel', require('./schedule-model.js'));
