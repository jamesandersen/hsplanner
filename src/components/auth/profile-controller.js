/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */
export default (function () {
    'use strict';
    return ['$scope', '$log', '$mdDialog', 'hsAuthService',
        function ($scope, $log, $mdDialog, auth) {
            $scope.getData = function () {
                $log.log('get data');
            };

            $scope.closeDialog = function() {
                var newData = {
                    "id": "112678812700708466620",
                    "name": "Ellaroo",
                    "calendarIDs": [
                        "jander.me_vhfj574k3cb837tgqe6vrv6e0g@group.calendar.google.com"
                    ],

                    "subjects": [
                        {
                            "id": "abc",
                            "summary": "Spanish",
                            "bgcolor": "#33691e"
                        },
                        {
                            "id": "def",
                            "summary": "Writing",
                            "bgcolor": "#ff5722"
                        },
                        {
                            "id": "ghi",
                            "summary": "History",
                            "bgcolor": "#004d40"
                        },
                        {
                            "id": "jkl",
                            "summary": "Math",
                            "bgcolor": "#0091ea"
                        }
                    ]
                }

                $mdDialog.hide(newData);
            }
        }];
}());
