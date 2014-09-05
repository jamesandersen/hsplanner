/*global angular: false */
(function () {
    'use strict';

    // keep track of data that will ultimately need to kept and retrieved from elsewhere
    angular.module('myApp').constant('UserData', {
        students: [
            {
                name: "Ella",
                calendarIDs: ["jander.me_vhfj574k3cb837tgqe6vrv6e0g@group.calendar.google.com"]
            },
            {
                name: "Nina",
                calendarIDs: ["jander.me_dmq4di5r67vgkn78u6etvsqa1c@group.calendar.google.com"]
            },
            {
                name: "Phoebe",
                calendarIDs: ["jander.me_1e0uquv8m1lh260s4b0i7h2s7o@group.calendar.google.com"]
            }
        ],
        subjects: ['Spanish', 'Writing', 'History', 'Math']
    });
}());
