/*global angular: false, regexp: true */
(function () {
    'use strict';
    angular.module('hsp.mock').run(['$httpBackend', function ($httpBackend) {

        var profiles = {},
            profileUrlRegex = /^\/profile\/(\d+)$/;

        // james
        profiles['117787249652700998593'] = {
            userId: '117787249652700998593',
            students: [
                {
                    id: "2342342",
                    name: "Ella",
                    calendarIDs: ["jander.me_vhfj574k3cb837tgqe6vrv6e0g@group.calendar.google.com"]
                },
                {
                    id: "aewaef",
                    name: "Nina",
                    calendarIDs: ["jander.me_dmq4di5r67vgkn78u6etvsqa1c@group.calendar.google.com"]
                },
                {
                    id: "erweafe2",
                    name: "Phoebe",
                    calendarIDs: ["jander.me_1e0uquv8m1lh260s4b0i7h2s7o@group.calendar.google.com"]
                }
            ],
            subjects: [
                {
                    id: 'abc',
                    summary: 'Spanish',
                    bgcolor: '#33691e'
                },
                {
                    id: 'def',
                    summary: 'Writing',
                    bgcolor: '#ff5722'
                },
                {
                    id: 'ghi',
                    summary: 'History',
                    bgcolor: '#004d40'
                },
                {
                    id: 'jkl',
                    summary: 'Math',
                    bgcolor: '#0091ea'
                }
            ]
        };

        // Ella
        /*profiles['117787249652700998593'] = {
            userId: '117787249652700998593',
            students: [],
            subjects: [
                {
                    id: 'abc',
                    summary: 'Spanish',
                    bgcolor: '#33691e'
                },
                {
                    id: 'def',
                    summary: 'Writing',
                    bgcolor: '#ff5722'
                },
                {
                    id: 'ghi',
                    summary: 'History',
                    bgcolor: '#004d40'
                },
                {
                    id: 'jkl',
                    summary: 'Math',
                    bgcolor: '#0091ea'
                }
            ]
        };*/

        // returns the current list of users

        $httpBackend.whenGET(profileUrlRegex).respond(function (method, url, data) {
            var match = profileUrlRegex.exec(url);
            // [status code, data, headers object, status text]
            return [200, profiles[match[1]], {}];
        });

        // adds a new phone to the phones array
        $httpBackend.whenGET(/^\/components\/[\w\/]+\.html/).passThrough();

        $httpBackend.whenGET(/^https:\/\/www\.googleapis\.com\//).passThrough();
    }]);
}());
