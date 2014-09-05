/*global angular: false */
(function () {
    'use strict';

    // keep track of data that will ultimately need to kept and retrieved from elsewhere
    angular.module('hsUtilities', []).constant('MathUtil', {
        ceiling: function (num, increment) {
            return Math.ceil(num / increment) * increment;
        },
        floor: function (num, increment) {
            return Math.floor(num / increment) * increment;
        }
    });
}());
