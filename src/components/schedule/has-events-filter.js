/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */
export default function () {
        return function (eventLists) {
            return eventLists.suppressEvents ? eventLists.filter(function (list) {
                return list.isTimeAxis;
            }) : eventLists;
        };
    };
