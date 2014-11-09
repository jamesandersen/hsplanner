/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */
(function () {
    'use strict';
    angular.module('hsp.schedule').filter('hasEvents', function () {
        return function (eventLists) {
            return eventLists.suppressEvents ? eventLists.filter(function (list) {
                return list.isTimeAxis;
            }) : eventLists;
        };
    });
}());
