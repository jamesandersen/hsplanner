/*global angular: false */
/*jslint plusplus: true */

export default (function () {
    'use strict';
	return ['$log', '$injector', function($log, $injector) {
		var $mdToast;
		
		function normalizeException(error, cause) {
			if(error.hasOwnProperty('result') && error.hasOwnProperty('status')) {
				return normalizeException(error.result, cause);
			}
			
			if(error.hasOwnProperty("error")) {
				// handle Google API error
				var message = `${error.error.message} (${error.error.code})`;
				if(error.error.hasOwnProperty('errors') && Array.isArray(error.error.errors)) {
					error.error.errors.forEach(function(err) {
						message += `\n- ${err.message} (${err.domain})`;
					})
				}
				return {
					message: message,
					cause: cause
				}
			} else {
				return {
					message: error.toString(),
					cause: cause
				};
			}
		}
		
		return function(exception, cause) {
			var errInfo = normalizeException(exception, cause);
			var logMessage = `${errInfo.cause ? errInfo.cause + ' - ' : ''}${errInfo.message}`;
			$log.error(logMessage);
			
			if(typeof exception === "object") {
				$log.error("Error details: %o", exception);
			}
			
			if(!$mdToast) {
				$mdToast = $injector.get('$mdToast');
			}
			
			$mdToast.showSimple(logMessage);
		};
	}];
}());