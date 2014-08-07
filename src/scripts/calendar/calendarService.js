angular.module('hsCalendar', ['hsAuth']).factory('hsCalendarService', ['$http', '$q', '$log', 'hsAuthService',
    function ($http, $q, $log, auth) {
        var baseUri = 'https://www.googleapis.com/calendar/v3';

        function getCalendarList() {
            return auth.getToken().then(function (token) {

                return $http.get(baseUri + '/users/me/calendarList', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                }).then(function (result) {
                        return result.data;
                    },
                    function (error) {
                        return $q.reject(error)
                    });
                //return ['this', 'is', 'some', 'data'];
            }, function (error) {
                $log.error(error);
                return $q.reject(error);
            });
        }

        return {
            getCalendarList: getCalendarList
        };
    }]);