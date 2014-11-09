/*global angular: false */
(function () {
    'use strict';

    // keep track of data that will ultimately need to kept and retrieved from elsewhere
    angular.module('hsp.auth').constant('UserData', {
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
            { id: 'abc', summary: 'Spanish', bgcolor: '#33691e' },
            { id: 'def', summary: 'Writing', bgcolor: '#ff5722 ' },
            { id: 'ghi', summary: 'History', bgcolor: '#004d40 ' },
            { id: 'jkl', summary: 'Math', bgcolor: '#0091ea ' }
        ]
    });
}());
