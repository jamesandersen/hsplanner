/*global angular: false */
export default (function () {
    'use strict';

    return ['$window',
        function ($window) {
			
			function getPersistentItem(key) {
				return localStorage.getItem(key);
			}
			
			function setPersistentItem(key, value) {
				localStorage.setItem(key, value);
			}
			
			function removePersistentItem(key) {
				localStorage.removeItem(key);
			}
			
			return {
				getPersistentItem: getPersistentItem,
				setPersistentItem: setPersistentItem,
				removePersistentItem: removePersistentItem
			}
		}];
}());