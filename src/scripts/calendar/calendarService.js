/*global angular: false, moment: false */
(function () {
    'use strict';

    var calendarModule = angular.module('hsCalendar', ['hsAuth']);

    calendarModule.constant('CALENDAR_BASE_URI', 'https://www.googleapis.com/calendar/v3');

    calendarModule.factory('hsCalendarService', ['$http', '$q', '$log', 'hsAuthService', 'CALENDAR_BASE_URI',
        function ($http, $q, $log, auth, baseUri) {

            var localEvents = {};

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
                            return $q.reject(error);
                        });
            }

            function getEventList(calendarId, timeMin, timeMax) {
                var now = null;
                return $http.get(baseUri + '/calendars/' + calendarId + '/events', {
                    params: {
                        timeMin: timeMin || moment().startOf('day').format(),
                        timeMax: timeMax || moment().endOf('day').format()
                    }
                }).
                    success(function (data, status, headers, config) {
                        // this callback will be called asynchronously
                        // when the response is available
                        angular.forEach(data.items, function (evt) {
                            localEvents[evt.id] = evt;

                            if (evt.recurringEventId) {
                                evt.recurringEvent = data.items.find(function (ev) { return ev.id === evt.recurringEventId; });
                                evt.recurringEvent.linked = true;
                            }
                        });

                        // remove the "parent" event when we have specific customized instances in this set
                        data.items = data.items.filter(function (evt) { return !evt.linked; });
                        data.calendarId = calendarId;
                    }).
                    error(function (data, status, headers, config) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    }).then(function (result) {
                        return result.data;
                    },
                        function (error) {
                            return $q.reject(error);
                        });
            }

            function getEvent(eventId) {
                if (angular.isUndefined(eventId)) { return null; }

                return eventId in localEvents ? localEvents[eventId] : null;
            }

            function patchEvent(calendarId, evtResourceOrId, patch) {
                var evtResource = evtResourceOrId;
                // attempt to used a cached event resource if only an id is passed in
                if (angular.isString(evtResourceOrId)) {
                    if (evtResourceOrId in localEvents) {
                        evtResource = localEvents[evtResourceOrId];
                    } else {
                        return $q.reject('Cached event with id ' + evtResourceOrId + ' not found');
                    }
                }

                return $http({
                    url: baseUri + '/calendars/' + calendarId + '/events/' + evtResource.id,
                    method: 'PATCH',
                    headers: {
                        'If-Match': evtResource.etag
                    },
                    data: patch
                }).
                    success(function (data, status, headers, config, statusText) {
                        // this callback will be called asynchronously
                        // when the response is available
                        if (evtResource.id in localEvents) {
                            angular.extend(localEvents[evtResource.id], data);
                        }
                    }).
                    error(function (data, status, headers, config, statusText) {
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                    }).then(function (result) {
                        return result.data;
                    },
                        function (error) {
                            return $q.reject(error);
                        });
            }

            return {
                getCalendarList: getCalendarList,
                getEventList: getEventList,
                getEvent: getEvent,
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

}());
