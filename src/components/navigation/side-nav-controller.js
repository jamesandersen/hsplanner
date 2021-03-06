/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */
export default (function () {
    'use strict';
    return ['$scope', '$rootScope', '$log', '$mdSidenav', 'ScheduleModel', 'Events', 'hsAuthService', 'authEvents', 'hsDriveService',
        function ($scope, $rootScope, $log, $mdSidenav, ScheduleModel, Events, auth, authEvents, driveService) {
            $scope.signed_in = false;
            $scope.$on(authEvents.AUTHENTICATION_CHANGE, function (event, signed_in) {
                $scope.signed_in = signed_in;
                $scope.profile = auth.getProfile();
                $scope.profileImgSrc = $scope.profile ? $scope.profile.image.url.replace(/sz=\d+/, 'sz=80') : null;
            });

            $scope.logout = function() {
                $mdSidenav('left').close();
                auth.logout();
            }

            $scope.toggleNav = function() {
                $mdSidenav('left').toggle();
            }

            $scope.testDrive = function() {
                driveService.getFileList().then(function(result) {
                    $scope.files = result.result.items;
                });
            }

        }];
}());
