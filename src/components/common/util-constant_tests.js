/*jslint es5: true */
/*global angular: false, describe: false, it: false, beforeEach: false, module: false, expect: false, inject: false */
require('./_common.js');
require('angular-mocks');
describe("Utilities Modules", function () {
    'use strict';
    beforeEach(angular.mock.module('hsp.common'));
    //beforeEach(angular.mock.module('App'));

    it('should pass a test', function () {
        expect(2).toBe(2);
    });

    it('should have a Util service', inject(['Util',
        function (Util) {
            expect(Util).toBeDefined();
        }]));

    it('Util.safeRead should work', inject(['Util',
        function (Util) {
            var obj = {
                    extendedProperties: {
                        private: {
                            subjectId: 3
                        }
                    }
                },
                val = Util.safeRead(obj, 'extendedProperties.private.subjectId'),
                nonVal1 = Util.safeRead(obj, 'foo.bar.blah'),
                nonVal2 = Util.safeRead(obj, 'extendedProperties.private.foo');

            expect(val).toBe(3);
            expect(nonVal1).toBeUndefined();
            expect(nonVal2).toBeUndefined();
        }]));

    it('Util.safeSet should work', inject(['Util',
        function (Util) {
            var obj = {};
            Util.safeSet(obj, 'extendedProperties.private.subjectId', 3);

            expect(obj.extendedProperties).toBeDefined();
            expect(obj.extendedProperties.private).toBeDefined();
            expect(obj.extendedProperties.private.subjectId).toBe(3);
        }]));
});
