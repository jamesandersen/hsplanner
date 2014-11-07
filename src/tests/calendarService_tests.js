/*jslint es5: true */
/*global angular: false, describe: false, it: false, beforeEach: false, afterEach: false, module: false, expect: false, inject: false, $httpBackend: false */

describe("hsCalendar Module", function () {
    'use strict';

    var $httpBackend,
        calendarData = [{
            "kind": "calendar#calendarListEntry",
            "id": "testCalendarId",
            "summary": "Test Calendar",
            "description": "This calendar is my personal calendar"
        }];

    beforeEach(module('hsCalendar'));
    beforeEach(module('ngMock'));

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should have a calendar service', inject(['hsCalendarService',
        function (calendars) {
            expect(calendars).toBeDefined();
        }]));

    it('getCalendarList should call api', inject(['hsCalendarService', '$httpBackend',
        function (calendars, $httpBackend) {
            $httpBackend.expect('GET', /\/users\/me\/calendarList/).respond(200, {
                "items": calendarData
            });
            calendars.getCalendarList().then(function (responseData) {
                expect(responseData.items.length).toBe(1);
                expect(responseData.items[0].id).toBe(calendarData[0].id);
            });
            $httpBackend.flush();
        }]));
});
