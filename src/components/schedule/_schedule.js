/*global angular: false */

// require all .js files in the directory unless they end with _test.js
//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);

import * as gcs from './google-calendar-service.js';

angular.module('hsp.schedule', ['hsp.auth']);

angular.module('hsp.schedule').controller('EventDetailCtrl', require('./event-detail-controller.js'));
angular.module('hsp.schedule').constant('CALENDAR_BASE_URI', gcs.BASE_URI);
angular.module('hsp.schedule').factory('hsCalendarService', gcs.hsCalendarService);
angular.module('hsp.schedule').factory('calendarHttpInterceptor', gcs.calendarHttpInterceptor);
angular.module('hsp.schedule').filter('hasEvents', require('./has-events-filter.js'));
angular.module('hsp.schedule').controller('ScheduleCtrl', require('./schedule-controller.js'));
angular.module('hsp.schedule').factory('ScheduleModel', require('./schedule-model.js'));
