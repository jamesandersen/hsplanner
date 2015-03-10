/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */
export default (function () {
    'use strict';
    return ['$scope', '$log', 'hsAuthService', 'authEvents',
        function ($scope, $log, auth, authEvents) {

            $scope.signed_in = false;
            $scope.$on(authEvents.AUTHENTICATION_CHANGE, function (event, signed_in) {
                $scope.signed_in = signed_in;
                $scope.profile = auth.getProfile();
                $scope.profileImgSrc = $scope.profile ? $scope.profile.image.url.replace(/sz=\d+/, 'sz=36') : null;
            });

            $scope.logout = auth.logout;


        }];
}());
