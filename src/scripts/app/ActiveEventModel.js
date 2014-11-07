/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

(function () {
    'use strict';
    angular.module('myApp').factory('ActiveEvent', ['$q', '$modal', 'UserData', 'hsCalendarService', 'Util',
        function ($scope, $location, $routeParams, $q, $modal, UserData, calendars, Util) {
            var eventResource = null,
                start = null,
                end = null;

            return {
                setActiveEvent: function (evt, startTime, endTime) {
                    eventResource = evt;
                    start = startTime;
                    end = endTime;
                },
                getEvent: function () { return eventResource; },
                getStart: function () { return start; },
                getEnd: function () { return end; }
            };
        }]);
}());
