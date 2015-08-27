/*global angular: false */

// require all .js files in the directory unless they end with _test.js
//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);
require.context(".", false, /^(.(?!_test))+?\.html$/);

import * as ds from './google-drive-service.js';
import * as cs from './google-calendar-service.js';

angular.module('hsp.google-client', ['hsp.auth']);

angular.module('hsp.google-client').constant('DRIVE_BASE_URI', ds.BASE_URI);
angular.module('hsp.google-client').factory('hsDriveService', ds.hsDriveService);
angular.module('hsp.google-client').controller('DriveSelectionCtrl', require('./drive-selection-controller.js'));

angular.module('hsp.google-client').constant('CALENDAR_BASE_URI', cs.BASE_URI);
angular.module('hsp.google-client').factory('hsCalendarService', cs.hsCalendarService);
angular.module('hsp.google-client').factory('calendarHttpInterceptor', cs.calendarHttpInterceptor);