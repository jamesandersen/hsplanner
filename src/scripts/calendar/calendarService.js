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
                            // facilitate future updates by tracking the calendar id this event belongs to
                            evt.calendarId = calendarId;

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

            /**
            * Get an instance of a recurring event.
            * @param {string} calendarId
            * @param {Object} event
            * @param {string} start
            * @param {string} end
            * @return {Promise<event>}
            */
            function getInstance(calendarId, event, start, end) {
                return $http({
                    method: 'GET',
                    url: baseUri + '/calendars/' + calendarId + '/events/' + event.id + '/instances',
                    params: { timeMin: start.format(), timeMax: end.format(), maxResults: 1 }
                }).then(function (result) {
                    // select just the instance to return from the promise
                    return result.data.items[0];
                });
            }

            /**
            * Patch an event.
            * @param {string} calendarId
            * @param {(Object|string)} evtResourceOrId An event to patch or the id of a cached event
            * @param {Object} patch The patch object to apply to t
            * @param {boolean} patchParent Optional. Whether to patch the recurrent parent or to customize and instance
            * @param {string} start Required when patching instances of recurring events. The start datetime for the instance filter.
            * @param {string} end Required when patching instances of recurring events. The end datetime for the instance filter.
            * @return {Promise<event>}
            */
            function patchEvent(calendarId, evtResourceOrId, patch, patchParent, start, end) {
                var evtResource = evtResourceOrId;
                // attempt to used a cached event resource an id string is passed in
                if (angular.isString(evtResource)) {
                    if (evtResource in localEvents) {
                        evtResource = localEvents[evtResource];
                    } else {
                        return $q.reject('Cached event with id ' + evtResource + ' not found');
                    }
                }

                var resourceToPatch = $q.when(evtResource);
                if (evtResource.recurrence && !patchParent) {
                    // we got a recurring event but only want to modify an instance
                    resourceToPatch = getInstance(calendarId, evtResource, start, end);
                }

                return resourceToPatch.then(function (evt) {
                    // evt is the resource to patch
                    return $http({
                        url: baseUri + '/calendars/' + calendarId + '/events/' + evt.id,
                        method: 'PATCH',
                        headers: {
                            'If-Match': evt.etag
                        },
                        data: patch
                    }).success(function (data, status, headers, config, statusText) {
                        angular.extend(evt, data);

                        // keep cache updated
                        if (evt.id in localEvents) {
                            localEvents[evt.id] = evt;
                        }

                        // return the patched event
                        return evt;
                    }).then(function (result) {
                        return result.data;
                    }, function (error) {
                        return $q.reject(error);
                    });
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
