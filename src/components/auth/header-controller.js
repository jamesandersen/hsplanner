/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */
export default (function () {
    'use strict';
    return ['$scope', '$rootScope', '$log', '$mdSidenav', 'ScheduleModel', 'Events', 'hsAuthService', 'authEvents',
        function ($scope, $rootScope, $log, $mdSidenav, ScheduleModel, Events, auth, authEvents) {
            var dateFormat = 'MMMM Do';
            $scope.currentDay = ScheduleModel.getStart().format(dateFormat);
            $scope.signed_in = false;
            $scope.$on(authEvents.AUTHENTICATION_CHANGE, function (event, signed_in) {
                $scope.signed_in = signed_in;
                $scope.profile = auth.getProfile();
                $scope.profileImgSrc = $scope.profile ? $scope.profile.image.url.replace(/sz=\d+/, 'sz=36') : null;
            });

            $scope.logout = auth.logout;

            $scope.toggleNav = function() {
                $mdSidenav('left').toggle();
            }

            $scope.changeDay = function (increment) {
                $rootScope.$broadcast(Events.CHANGE_DAY, increment);
                $scope.currentDay = ScheduleModel.getStart().format(dateFormat);
            }

        }];
}());
