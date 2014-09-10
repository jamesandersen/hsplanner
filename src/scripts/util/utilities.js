/*global angular: false */
(function () {
    'use strict';

    // keep track of data that will ultimately need to kept and retrieved from elsewhere
    var utilMod = angular.module('hsUtilities', []);
    utilMod.constant('MathUtil', {
        ceiling: function (num, increment) {
            return Math.ceil(num / increment) * increment;
        },
        floor: function (num, increment) {
            return Math.floor(num / increment) * increment;
        }
    });

    utilMod.constant('Util', {
        safeRead: function () {
            var args = Array.prototype.slice.call(arguments),
                obj = args.shift(),
                i = 0;

            for (i = 0; i < args.length; i++) {
                if (angular.isUndefined(obj) || obj === null || !obj.hasOwnProperty(args[i])) {
                    return obj;
                }
                obj = obj[args[i]];
            }
            return obj;
        }
    });
}());
