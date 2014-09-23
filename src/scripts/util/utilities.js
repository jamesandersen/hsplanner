/*global angular: false */
/*jslint plusplus: true */

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
        safeRead: function (target, propertyPath) {
            var path = propertyPath.split('.'),
                obj = target,
                i = 0;

            for (i = 0; i < path.length; i++) {
                if (angular.isUndefined(obj) || obj === null || !obj.hasOwnProperty(path[i])) {
                    return undefined;
                }
                obj = obj[path[i]];
            }
            return obj;
        },
        safeSet: function (target, propertyPath, propertyValue) {
            if (angular.isObject(target)) {
                var path = propertyPath.split('.'),
                    context = target,
                    i = 0;
                for (i = 0; i < path.length; i++) {
                    if (i < path.length - 1) {
                        if (angular.isUndefined(context[path[i]])) {
                            context[path[i]] = {};
                        } else if (!angular.isObject(context[path[i]])) {
                            throw 'Cannot set on non-object path segment: ' + path[i];
                        }
                    } else {
                        context[path[i]] = propertyValue;
                        return;
                    }

                    context = context[path[i]];
                }
            }
        }
    });
}());
