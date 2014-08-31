var calendarModule = angular.module('hsCalendar', ['hsAuth']);

calendarModule.constant('CALENDAR_BASE_URI', 'https://www.googleapis.com/calendar/v3');

calendarModule.factory('hsCalendarService', ['$http', '$q', '$log', 'hsAuthService', 'CALENDAR_BASE_URI',
    function ($http, $q, $log, auth, baseUri) {

        function getCalendarList() {
            return $http.get(baseUri + '/users/me/calendarList').
            success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            }).then(function (result) {
                    return result.data;
                },
                function (error) {
                    return $q.reject(error)
                });
        }

        function getEventList(calendarId) {
            return $http.get(baseUri + '/calendars/' + calendarId + '/events').
            success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            }).then(function (result) {
                    result.data.calendarId = calendarId;
                    return result.data;
                },
                function (error) {
                    return $q.reject(error)
                });
        }

        function patchEvent(calendarId, eventId, etag, patch) {
            return $http({
                url: baseUri + '/calendars/' + calendarId + '/events/' + eventId,
                method: 'PATCH',
                headers: {
                  'If-Match': etag
                },
                data: patch
            }).
            success(function (data, status, headers, config, statusText) {
                // this callback will be called asynchronously
                // when the response is available
            }).
            error(function (data, status, headers, config, statusText) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            }).then(function (result) {
                    return result.data;
                },
                function (error) {
                    return $q.reject(error)
                });
        }

        return {
            getCalendarList: getCalendarList,
            getEventList: getEventList,
            patchEvent: patchEvent
        };
    }]);

calendarModule.factory('calendarHttpInterceptor', ['$injector', 'CALENDAR_BASE_URI', '$log', '$q',
    function ($injector, CALENDAR_BASE_URI, $log, $q) {
        var authServiceRef;
        return {
            'request': function (config) {
                if (!authServiceRef) {
                    // need to use $injector here to avoid a circular dependency
                    authServiceRef = $injector.get('hsAuthService');
                }

                if (config.url.startsWith(CALENDAR_BASE_URI)) {
                    // attach a google OAuth token to the outgoing request
                    return authServiceRef.getToken().then(function (token) {
                        // do something on success
                        angular.extend(config.headers, {
                            Authorization: 'Bearer ' + token
                        });
                        return config;
                    }, function (rejection) {
                        $log.error('Error getting token: ' + rejection);
                        return $q.reject(rejection);
                    });
                } else {
                    return config;
                }
            }
        };
}]);
