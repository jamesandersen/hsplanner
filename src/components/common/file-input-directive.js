export default (function () {
    'use strict';
    return ['$log', function($log) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var onChangeHandler = scope.$eval(attrs.onFileChange);
                if(angular.isFunction(onChangeHandler)) {
                    element.bind('change', function(evt) {
                        onChangeHandler.apply(undefined, [element[0].files, evt]);
                    });
                } else {
                    $log.warn('onFileChange doesn\'t evaluate to a function');
                }

            }
        };
    }];
}());
