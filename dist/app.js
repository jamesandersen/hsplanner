webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(8);
	__webpack_require__(9);
	module.exports = __webpack_require__(11);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	(function () {
	    "use strict";
	
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
	    if (!Array.prototype.find) {
	        Object.defineProperty(Array.prototype, "find", {
	            enumerable: false,
	            configurable: true,
	            writable: true,
	            value: (function (_value) {
	                var _valueWrapper = function value(_x) {
	                    return _value.apply(this, arguments);
	                };
	
	                _valueWrapper.toString = function () {
	                    return _value.toString();
	                };
	
	                return _valueWrapper;
	            })(function (predicate) {
	                if (this === null) {
	                    throw new TypeError("Array.prototype.find called on null or undefined");
	                }
	                if (typeof predicate !== "function") {
	                    throw new TypeError("predicate must be a function");
	                }
	                var list = Object(this),
	                    length = list.length >>> 0,
	                    thisArg = arguments[1],
	                    value;
	
	                for (var i = 0; i < length; i++) {
	                    value = list[i];
	                    if (predicate.call(thisArg, value, i, list)) {
	                        return value;
	                    }
	                }
	                return undefined;
	            })
	        });
	    }
	
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
	    if (!Array.prototype.findIndex) {
	        Object.defineProperty(Array.prototype, "findIndex", {
	            enumerable: false,
	            configurable: true,
	            writable: true,
	            value: (function (_value) {
	                var _valueWrapper = function value(_x) {
	                    return _value.apply(this, arguments);
	                };
	
	                _valueWrapper.toString = function () {
	                    return _value.toString();
	                };
	
	                return _valueWrapper;
	            })(function (predicate) {
	                if (this == null) {
	                    throw new TypeError("Array.prototype.find called on null or undefined");
	                }
	                if (typeof predicate !== "function") {
	                    throw new TypeError("predicate must be a function");
	                }
	                var list = Object(this);
	                var length = list.length >>> 0;
	                var thisArg = arguments[1];
	                var value;
	
	                for (var i = 0; i < length; i++) {
	                    value = list[i];
	                    if (predicate.call(thisArg, value, i, list)) {
	                        return i;
	                    }
	                }
	                return -1;
	            })
	        });
	    }
	
	    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
	    if (!String.prototype.startsWith) {
	        Object.defineProperty(String.prototype, "startsWith", {
	            enumerable: false,
	            configurable: false,
	            writable: false,
	            value: function value(searchString, position) {
	                position = position || 0;
	                return this.lastIndexOf(searchString, position) === position;
	            }
	        });
	    }
	})();

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {/*** IMPORTS FROM imports-loader ***/
	var common = __webpack_require__(16);
	var auth = __webpack_require__(17);
	var navigation = __webpack_require__(18);
	var schedule = __webpack_require__(19);
	
	"use strict";
	
	/*global angular: false */
	
	//require("angular");
	(function () {
	    "use strict";
	
	    var app = angular.module("hsp", ["ngRoute", "ngAnimate", "ngMaterial", "ngMdIcons", "hsp.common", "hsp.auth", "hsp.navigation", "hsp.schedule"]);
	    angular.module("hsp.auth").constant("CLIENT_ID", "<!-- @secret client_id -->");
	
	    // DEBUG and PRODUCTION are defined by the webpack define plugin
	    if (true) {
	        angular.module("hsp.common").constant("BASE_URL", "https://localhost:9002");
	    }
	
	    if (false) {
	        angular.module("hsp.common").constant("BASE_URL", "https://home-school.azurewebsites.net");
	    }
	
	    app.config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {
	        $locationProvider.html5Mode(true);
	
	        $routeProvider.when("/", {
	            templateUrl: "components/schedule/schedule.html",
	            controller: "ScheduleCtrl as schedule",
	            resolve: {
	                token: ["hsAuthService", function (hsAuthService) {
	                    return hsAuthService.afterLogin();
	                }]
	            }
	        }).when("/profile", {
	            templateUrl: "components/auth/profile.html",
	            controller: "ProfileCtrl"
	        }).when("/event-detail", {
	            templateUrl: "components/schedule/event-detail.html",
	            controller: "EventDetailCtrl"
	        }).when("/login", {
	            templateUrl: "components/auth/login.html",
	            controller: "LoginCtrl"
	        }).otherwise({
	            redirectTo: "/"
	        });
	    }]);
	
	    app.config(["$httpProvider", function ($httpProvider) {
	        $httpProvider.interceptors.push("calendarHttpInterceptor");
	    }]);
	
	    app.config(["$mdThemingProvider", function ($mdThemingProvider) {
	        $mdThemingProvider.theme("default"); //.dark();
	    }]);
	
	    app.run(["hsAuthService", "$location", "$log", function (auth, $location, $log) {
	        auth.loadGoogleAPI().then(function (isGoogleAPILoaded) {
	            auth.afterLogin().then(function (accessToken) {}, function (authError) {
	                $log.warn("not signed in at startup: " + authError);
	                // not signed in, redirect to login screen
	                $location.url("/login?dst=" + encodeURIComponent($location.url()));
	            });
	        }, function (rejection) {
	            $log.warn("google api not loaded: " + rejection);
	        });
	    }]);
	})();
	
	// token is available so we're signed in
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {"use strict";
	
	/*global angular: false */
	
	// require all .js files in the directory unless they end with _test.js
	//("angular");
	//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);
	
	angular.module("hsp.common", []);
	
	angular.module("hsp.common").constant("MathUtil", __webpack_require__(31));
	angular.module("hsp.common").constant("Util", __webpack_require__(32));
	angular.module("hsp.common").constant("Events", __webpack_require__(33));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {"use strict";
	
	/*global angular: false */
	
	// require all .js files in the directory unless they end with _test.js
	__webpack_require__(29);
	
	var authModule = angular.module("hsp.auth", ["ngResource", "ngMaterial"]);
	
	angular.module("hsp.auth").constant("authEvents", {
	    AUTHENTICATION_CHANGE: "AUTHENTICATION_CHANGE"
	});
	
	angular.module("hsp.auth").factory("hsAuthService", __webpack_require__(34));
	angular.module("hsp.auth").controller("HeaderCtrl", __webpack_require__(35));
	angular.module("hsp.auth").controller("LoginCtrl", __webpack_require__(36));
	angular.module("hsp.auth").controller("ProfileCtrl", __webpack_require__(37));
	angular.module("hsp.auth").factory("Profile", __webpack_require__(38));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {"use strict";
	
	/*global angular: false */
	
	// require all .js files in the directory unless they end with _test.js
	//("angular");
	//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);
	
	angular.module("hsp.navigation", ["ngResource", "ngMaterial", "hsp.auth"]);
	
	angular.module("hsp.navigation").controller("SideNavCtrl", __webpack_require__(39));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {"use strict";
	
	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };
	
	/*global angular: false */
	
	// require all .js files in the directory unless they end with _test.js
	//require.context(".", false, /^(.(?!_test))+?\.(js|html)$/);
	__webpack_require__(30);
	
	var gcs = _interopRequireWildcard(__webpack_require__(40));
	
	angular.module("hsp.schedule", ["hsp.auth"]);
	
	angular.module("hsp.schedule").controller("EventDetailCtrl", __webpack_require__(41));
	angular.module("hsp.schedule").constant("CALENDAR_BASE_URI", gcs.BASE_URI);
	angular.module("hsp.schedule").factory("hsCalendarService", gcs.hsCalendarService);
	angular.module("hsp.schedule").factory("calendarHttpInterceptor", gcs.calendarHttpInterceptor);
	angular.module("hsp.schedule").filter("hasEvents", __webpack_require__(42));
	angular.module("hsp.schedule").controller("ScheduleCtrl", __webpack_require__(43));
	angular.module("hsp.schedule").factory("ScheduleModel", __webpack_require__(44));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./login.html": 47,
		"./profile.html": 48
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 29;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./event-detail.html": 49,
		"./schedule.html": 50
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 30;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	module.exports = {
	    ceiling: function ceiling(num, increment) {
	        return Math.ceil(num / increment) * increment;
	    },
	    floor: function floor(num, increment) {
	        return Math.floor(num / increment) * increment;
	    }
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {"use strict";
	
	/*global angular: false */
	/*jslint plusplus: true */
	
	module.exports = (function () {
	    "use strict";
	
	    return {
	        safeRead: function safeRead(target, propertyPath) {
	            var path = propertyPath.split("."),
	                obj = target,
	                i = 0;
	
	            for (i = 0; i < path.length; i++) {
	                if (angular.isUndefined(obj) || obj === null || !obj.hasOwnProperty(path[i])) {
	                    return undefined;
	                }
	                obj = obj[path[i]];
	            }
	            return obj;
	        },
	        safeSet: function safeSet(target, propertyPath, propertyValue) {
	            if (angular.isObject(target)) {
	                var path = propertyPath.split("."),
	                    context = target,
	                    i = 0;
	                for (i = 0; i < path.length; i++) {
	                    if (i < path.length - 1) {
	                        if (angular.isUndefined(context[path[i]])) {
	                            context[path[i]] = {};
	                        } else if (!angular.isObject(context[path[i]])) {
	                            throw "Cannot set on non-object path segment: " + path[i];
	                        }
	                    } else {
	                        context[path[i]] = propertyValue;
	                        return;
	                    }
	
	                    context = context[path[i]];
	                }
	            }
	        }
	    };
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*global angular: false */
	/*jslint plusplus: true */
	
	module.exports = (function () {
	    "use strict";
	
	    return {
	        CHANGE_DAY: "CHANGE_DAY"
	
	    };
	})();

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*global angular: false, gapi: false */
	
	module.exports = (function () {
	    "use strict";
	
	    return ["$window", "$document", "$location", "$rootScope", "$q", "$log", "$http", "$mdDialog", "CLIENT_ID", "authEvents", "Profile", function ($window, $document, $location, $rootScope, $q, $log, $http, $mdDialog, CLIENT_ID, authEvents, Profile) {
	
	        var access_token = null,
	            profile = null,
	            userData = null,
	            signed_in = false,
	            expiration = null,
	            gplusAPILoaded = false,
	            gplusSignInParams = {
	            clientid: CLIENT_ID,
	            cookiepolicy: "single_host_origin",
	            callback: "onAuthResult",
	            scope: "https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/calendar"
	        },
	            pendingGoogleAPIDeferred = null,
	            pendingTokenDeferred = null,
	            pendingLoginDeferred = null;
	
	        function onGooglePlusAPILoad() {
	            $log.info("google plus API loaded");
	            gplusAPILoaded = true;
	            delete $window.onAPILoad;
	
	            pendingGoogleAPIDeferred.resolve(true);
	        }
	
	        function updateSignedIn(isSignedIn) {
	            var change = false;
	            if (isSignedIn && !signed_in) {
	                signed_in = true;
	                change = true;
	            } else if (!isSignedIn && signed_in) {
	                signed_in = false;
	                change = true;
	            }
	
	            if (change) {
	                $rootScope.$broadcast(authEvents.AUTHENTICATION_CHANGE, signed_in);
	            }
	        }
	
	        /* will be called once immediately after google api is loaded */
	        function onGooglePlusAuthCallback(result) {
	            delete result["g-oauth-window"];
	
	            $log.debug("google plus API auth callback: " + JSON.stringify(result));
	            if (!result.status.signed_in) {
	                // for some reason result.hasOwnProperty is undefined
	                $log.error("authentication error: " + result.error);
	                finishLogin(false, result);
	
	                if (pendingTokenDeferred) {
	                    pendingTokenDeferred.reject(result.error);
	                    pendingTokenDeferred = null;
	                }
	
	                /*if (!result.status.google_logged_in) {
	                    // Could customize the experience if we know they're a google user
	                    // but not yet signed into our app
	                }*/
	            } else {
	                expiration = new Date();
	                expiration.setMilliseconds(expiration.getMilliseconds() + result.expires_in);
	                $log.info("successful login; access token expires at " + expiration.toLocaleTimeString());
	
	                $http.get("https://www.googleapis.com/plus/v1/people/me", {
	                    headers: {
	                        Authorization: "Bearer " + result.access_token
	                    }
	                }).success(function (data, status, headers, config) {
	                    // this callback will be called asynchronously
	                    // when the response is available
	
	                    userData = Profile.get({ userId: data.id }, function (hspUserData) {
	                        finishLogin(true, result, data, hspUserData);
	                    }, function (response) {
	                        if (response.status == 404) {
	                            // user has logged in but we don't have any profile data for them
	                            // prompt for information required for HSP profile
	
	                            $mdDialog.show({
	                                //targetEvent: $event,
	                                templateUrl: "components/auth/profile.html",
	                                controller: "ProfileCtrl",
	                                //onComplete: afterShowAnimation,
	                                locals: { employee: "User Name" }
	                            }).then(function (newHspUserData) {
	                                // TODO: call to persist this data
	                                finishLogin(true, result, data, newHspUserData);
	                            }, function (cancellation) {
	                                finishLogin(false, result, data);
	                            });
	                        } else {
	                            // some other error occurred
	                            finishLogin(false, result, data);
	                        }
	                    });
	                }).error(function (data, status, headers, config) {
	                    // called asynchronously if an error occurs
	                    // or server returns response with an error status.
	                    $log.error("Error getting profile information");
	                    finishLogin(false, result, data);
	                });
	
	                if (pendingTokenDeferred) {
	                    pendingTokenDeferred.resolve(access_token);
	                    pendingTokenDeferred = null;
	                }
	            }
	        }
	
	        function finishLogin(success, authResult, googleProfile, hspProfile) {
	            access_token = authResult.access_token;
	            profile = googleProfile;
	            userData = hspProfile;
	
	            if (pendingLoginDeferred) {
	                if (success) {
	                    pendingLoginDeferred.resolve(access_token);
	                } else {
	                    pendingLoginDeferred.reject(authResult ? authResult.error : "failed to gather login data");
	                }
	
	                pendingLoginDeferred = null;
	            }
	
	            updateSignedIn(success);
	        }
	
	        function initGooglePlusAuth() {
	            // global function for the API to callback
	            $window.onAPILoad = onGooglePlusAPILoad;
	            $window.onAuthResult = onGooglePlusAuthCallback;
	
	            var po = $document[0].createElement("script"),
	                s = $document[0].getElementsByTagName("script")[0];
	            po.type = "text/javascript";
	            po.async = true;
	            po.setAttribute("parsetags", "explicit");
	            po.src = "https://apis.google.com/js/client:plusone.js?onload=onAPILoad";
	
	            s.parentNode.insertBefore(po, s);
	
	            pendingGoogleAPIDeferred = $q.defer();
	
	            // we may be able to resolve the token promise right
	            // when the gapi loads and invokes the auth callback
	            pendingTokenDeferred = $q.defer();
	
	            return pendingGoogleAPIDeferred.promise;
	        }
	
	        function login() {
	            if (gplusAPILoaded) {
	                gapi.auth.signIn(gplusSignInParams);
	            }
	        }
	
	        function afterLogin() {
	            if (access_token) {
	                return $q.when(access_token);
	            }
	
	            return pendingGoogleAPIDeferred.promise.then(function () {
	                if (!pendingLoginDeferred) {
	                    pendingLoginDeferred = $q.defer();
	                }
	
	                return pendingLoginDeferred.promise;
	            }, function (rejection) {
	                return $q.reject(rejection);
	            });
	        }
	
	        function logout() {
	            if (gplusAPILoaded) {
	                gapi.auth.signOut();
	                access_token = expiration = null;
	                $location.path("/login");
	            }
	        }
	
	        function getToken() {
	            if (access_token && expiration > new Date()) {
	                return $q.when(access_token);
	            }
	
	            // token is no longer valid, clear it out
	            access_token = expiration = null;
	
	            if (pendingTokenDeferred) {
	                return pendingTokenDeferred.promise;
	            } else {
	                return $q.reject("no token available, please login");
	            }
	        }
	
	        return {
	            login: login,
	            afterLogin: afterLogin,
	            logout: logout,
	            loadGoogleAPI: initGooglePlusAuth,
	            getToken: getToken,
	            getProfile: function getProfile() {
	                return profile;
	            },
	            getUserData: function getUserData() {
	                return userData;
	            }
	        };
	    }];
	})();

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*jslint plusplus: true, es5: true */
	/*global angular: false, moment: false */
	
	module.exports = (function () {
	    "use strict";
	    return ["$scope", "$rootScope", "$log", "$mdSidenav", "ScheduleModel", "Events", "hsAuthService", "authEvents", function ($scope, $rootScope, $log, $mdSidenav, ScheduleModel, Events, auth, authEvents) {
	        var dateFormat = "MMMM Do";
	        $scope.currentDay = ScheduleModel.getStart().format(dateFormat);
	        $scope.signed_in = false;
	        $scope.$on(authEvents.AUTHENTICATION_CHANGE, function (event, signed_in) {
	            $scope.signed_in = signed_in;
	            $scope.profile = auth.getProfile();
	            $scope.profileImgSrc = $scope.profile ? $scope.profile.image.url.replace(/sz=\d+/, "sz=36") : null;
	        });
	
	        $scope.logout = auth.logout;
	
	        $scope.toggleNav = function () {
	            $mdSidenav("left").toggle();
	        };
	
	        $scope.changeDay = function (increment) {
	            $rootScope.$broadcast(Events.CHANGE_DAY, increment);
	            $scope.currentDay = ScheduleModel.getStart().format(dateFormat);
	        };
	    }];
	})();

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*global angular: false, gapi: false, onLoginSuccess: false, onLoginFailed: false */
	
	module.exports = (function () {
	    "use strict";
	    return ["$scope", "$location", "$log", "hsAuthService", function ($scope, $location, $log, auth) {
	        auth.loadGoogleAPI().then(function (isGoogleAPILoaded) {
	            // not signed in so we need the login button
	            gapi.signin.render("google-login");
	
	            auth.afterLogin().then(onLoginSuccess, onLoginFailed);
	        }, function (rejection) {
	            $log.error("Google API not loaded");
	        });
	
	        function onLoginSuccess(accessToken) {
	            var search = $location.search();
	            $location.url(search.hasOwnProperty("dst") ? decodeURIComponent(search.dst) : "/");
	        }
	
	        function onLoginFailed(authError) {
	            $log.error("login failed: " + authError);
	            auth.afterLogin().then(onLoginSuccess, onLoginFailed);
	        }
	    }];
	})();

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*jslint plusplus: true, es5: true */
	/*global angular: false, moment: false */
	
	module.exports = (function () {
	    "use strict";
	    return ["$scope", "$log", "$mdDialog", "hsAuthService", function ($scope, $log, $mdDialog, auth) {
	        $scope.getData = function () {
	            $log.log("get data");
	        };
	
	        $scope.closeDialog = function () {
	            var newData = {
	                id: "112678812700708466620",
	                name: "Ellaroo",
	                calendarIDs: ["jander.me_vhfj574k3cb837tgqe6vrv6e0g@group.calendar.google.com"],
	
	                subjects: [{
	                    id: "abc",
	                    summary: "Spanish",
	                    bgcolor: "#33691e"
	                }, {
	                    id: "def",
	                    summary: "Writing",
	                    bgcolor: "#ff5722"
	                }, {
	                    id: "ghi",
	                    summary: "History",
	                    bgcolor: "#004d40"
	                }, {
	                    id: "jkl",
	                    summary: "Math",
	                    bgcolor: "#0091ea"
	                }]
	            };
	
	            $mdDialog.hide(newData);
	        };
	    }];
	})();

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*global angular: false */
	
	module.exports = (function () {
	    "use strict";
	
	    // keep track of data that will ultimately need to kept and retrieved from elsewhere
	    return ["$resource", "BASE_URL", function ($resource, BASE_URL) {
	
	        // define profile resource
	        return $resource(BASE_URL + "/profiles/:userId", {
	            userId: "@userId"
	        }, {
	            charge: {
	                method: "POST",
	                params: {
	                    charge: true
	                }
	            }
	        });
	    }];
	})();

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*jslint plusplus: true, es5: true */
	/*global angular: false, moment: false */
	
	module.exports = (function () {
	    "use strict";
	    return ["$scope", "$rootScope", "$log", "$mdSidenav", "ScheduleModel", "Events", "hsAuthService", "authEvents", function ($scope, $rootScope, $log, $mdSidenav, ScheduleModel, Events, auth, authEvents) {
	        $scope.signed_in = false;
	        $scope.$on(authEvents.AUTHENTICATION_CHANGE, function (event, signed_in) {
	            $scope.signed_in = signed_in;
	            $scope.profile = auth.getProfile();
	            $scope.profileImgSrc = $scope.profile ? $scope.profile.image.url.replace(/sz=\d+/, "sz=80") : null;
	        });
	
	        $scope.logout = auth.logout;
	
	        $scope.toggleNav = function () {
	            $mdSidenav("left").toggle();
	        };
	    }];
	})();

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(moment, angular) {"use strict";
	
	var BASE_URI = "https://www.googleapis.com/calendar/v3";
	
	exports.BASE_URI = BASE_URI;
	var hsCalendarService = ["$http", "$q", "$log", "hsAuthService", "CALENDAR_BASE_URI", function ($http, $q, $log, auth, baseUri) {
	
	    var localEvents = {};
	
	    function getCalendarList() {
	        return $http.get(baseUri + "/users/me/calendarList").success(function (data, status, headers, config) {}).error(function (data, status, headers, config) {}).then(function (result) {
	            return result.data;
	        }, function (error) {
	            return $q.reject(error);
	        });
	    }
	
	    function getEventList(calendarId, timeMin, timeMax) {
	        var now = null;
	        return $http.get(baseUri + "/calendars/" + calendarId + "/events", {
	            params: {
	                timeMin: timeMin || moment().startOf("day").format(),
	                timeMax: timeMax || moment().endOf("day").format(),
	                singleEvents: true // avoid headache of recurring events
	            }
	        }).success(function (data, status, headers, config) {
	            // this callback will be called asynchronously
	            // when the response is available
	            angular.forEach(data.items, function (evt) {
	                // facilitate future updates by tracking the calendar id this event belongs to
	                evt.calendarId = calendarId;
	
	                localEvents[evt.id] = evt;
	            });
	
	            data.calendarId = calendarId;
	        }).error(function (data, status, headers, config) {}).then(function (result) {
	            return result.data;
	        }, function (error) {
	            return $q.reject(error);
	        });
	    }
	
	    function getEvent(eventId) {
	        if (angular.isUndefined(eventId)) {
	            return null;
	        }
	
	        return localEvents[eventId] !== undefined ? localEvents[eventId] : null;
	    }
	
	    /**
	     * Get a calendar event.
	     * @param {string} eventId
	     * @param {string} calendarId
	     * @return {Promise<event>}
	     */
	    function fetchEvent(eventId, calendarId) {
	        return $http({
	            method: "GET",
	            url: baseUri + "/calendars/" + calendarId + "/events/" + eventId
	        }).then(function (result) {
	            var evt = result.data;
	            // facilitate future updates by tracking the calendar id this event belongs to
	            evt.calendarId = calendarId;
	            localEvents[evt.id] = evt;
	
	            return evt;
	        }, function (error) {
	            $log.error(error);
	            return $q.reject(error);
	        });
	    }
	
	    /**
	    * Get an instance of a recurring event.
	    * @param {string} calendarId
	    * @param {Object} event
	    * @param {string} start
	    * @param {string} end
	    * @return {Promise<event>}
	    */
	    function getInstance(evt, start, end) {
	        return $http({
	            method: "GET",
	            url: baseUri + "/calendars/" + evt.calendarId + "/events/" + evt.id + "/instances",
	            params: { timeMin: start.format(), timeMax: end.format(), maxResults: 1 }
	        }).then(function (result) {
	            // select just the instance to return from the promise
	            if (result.data.items.length) {
	                result.data.items[0].calendarId = evt.calendarId;
	                return result.data.items[0];
	            }
	
	            return $q.reject("No event instances returned");
	        }, function (error) {
	            $log.error(error);
	            return $q.reject(error);
	        });
	    }
	
	    /**
	    * Patch an event.
	    * @param {string} calendarId
	    * @param {(Object|string)} evtResourceOrId An event to patch or the id of a cached event
	    * @param {Object} patch The patch object to apply to t
	    * @param {boolean} patchParent Optional. Whether to patch the recurrent parent or to customize and instance
	    * @param {string} start Required when patching instances of recurring events. The start datetime for the instance filter.
	    * @param {string} end Required when patching instances of recurring events. The end datetime for the instance filter.
	    * @return {Promise<event>}
	    */
	    function patchEvent(evtResourceOrId, patch, patchParent, start, end) {
	        var evtResource = evtResourceOrId,
	            resourceToPatch;
	        // attempt to used a cached event resource an id string is passed in
	        if (angular.isString(evtResource)) {
	            if (localEvents[evtResource] !== undefined) {
	                evtResource = localEvents[evtResource];
	            } else {
	                return $q.reject("Cached event with id " + evtResource + " not found");
	            }
	        }
	
	        resourceToPatch = $q.when(evtResource);
	        if (evtResource.recurrence && !patchParent) {
	            // we got a recurring event but only want to modify an instance
	            resourceToPatch = getInstance(evtResource, start, end);
	        } else if (evtResource.recurringEventId && patchParent) {
	            resourceToPatch = fetchEvent(evtResource.recurringEventId, evtResource.calendarId);
	        }
	
	        return resourceToPatch.then(function (evt) {
	            // evt is the resource to patch
	            resourceToPatch = evt;
	            return $http({
	                url: baseUri + "/calendars/" + evt.calendarId + "/events/" + evt.id,
	                method: "PATCH",
	                headers: {
	                    "If-Match": evt.etag
	                },
	                data: patch
	            }).success(function (data, status, headers, config, statusText) {
	
	                angular.extend(resourceToPatch, data);
	
	                // keep cache updated
	                if (localEvents[evt.id] !== undefined) {
	                    localEvents[evt.id] = evt;
	                }
	            }).then(function (result) {
	                return resourceToPatch;
	            }, function (error) {
	                return $q.reject(error);
	            });
	        });
	    }
	
	    return {
	        getCalendarList: getCalendarList,
	        getEventList: getEventList,
	        getEvent: getEvent,
	        patchEvent: patchEvent
	    };
	}];
	
	exports.hsCalendarService = hsCalendarService;
	var calendarHttpInterceptor = ["$injector", "CALENDAR_BASE_URI", "$log", "$q", function ($injector, CALENDAR_BASE_URI, $log, $q) {
	    var authServiceRef;
	    return {
	        request: function (config) {
	            if (!authServiceRef) {
	                // need to use $injector here to avoid a circular dependency
	                authServiceRef = $injector.get("hsAuthService");
	            }
	
	            if (config.url.startsWith(CALENDAR_BASE_URI)) {
	                // attach a google OAuth token to the outgoing request
	                return authServiceRef.getToken().then(function (token) {
	                    // do something on success
	                    angular.extend(config.headers, {
	                        Authorization: "Bearer " + token
	                    });
	                    return config;
	                }, function (rejection) {
	                    $log.error("Error getting token: " + rejection);
	                    return $q.reject(rejection);
	                });
	            } else {
	                return config;
	            }
	        }
	    };
	}];
	exports.calendarHttpInterceptor = calendarHttpInterceptor;
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*global angular: false, moment: false */

	// this callback will be called asynchronously
	// when the response is available

	// called asynchronously if an error occurs
	// or server returns response with an error status.

	// called asynchronously if an error occurs
	// or server returns response with an error status.
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(14)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(angular) {"use strict";
	
	/*jslint plusplus: true, es5: true */
	/*global angular: false, moment: false */
	
	module.exports = (function () {
	    "use strict";
	    return ["$scope", "$location", "$q", "$mdDialog", "ScheduleModel", "hsAuthService", "hsCalendarService", "Util", function ($scope, $location, $q, $mdDialog, ScheduleModel, hsAuthService, calendars, Util) {
	        var patch = {
	            extendedProperties: {
	                "private": {}
	            }
	        },
	
	        // if we're looking at a customized instance of a recurring event
	        // certain properties should be saved back to the recurring event
	        // instead of the customized instance.
	        recurringParentPatch = null,
	            patchUpdated = false,
	            recurringParentPatchUpdated = false,
	            UserData;
	
	        hsAuthService.afterLogin().then(function () {
	            UserData = hsAuthService.getUserData();
	            $scope.subjects = UserData.subjects;
	            $scope.evt = setupEvent(ScheduleModel.getActiveEventViewState());
	            // create a patch object for the parent recurring event if applicable
	            if ($scope.evt.resource.recurringEventId) {
	                recurringParentPatch = angular.copy(patch);
	            }
	        });
	
	        function setupEvent(evtViewState) {
	            var parentEvt = calendars.getEvent(evtViewState.resource.recurringEventId),
	                subjectId = Util.safeRead(parentEvt || evtViewState.resource, "extendedProperties.private.subjectId");
	            if (angular.isDefined(subjectId)) {
	                evtViewState.subject = UserData.subjects.find(function (sub) {
	                    return sub.id === subjectId;
	                });
	            }
	
	            return evtViewState;
	        }
	
	        function setProperty(propertyName, propertyValue) {
	            if (recurringParentPatch !== null && propertyName.indexOf("subjectId") >= 0) {
	                Util.safeSet(recurringParentPatch, propertyName, propertyValue);
	                recurringParentPatchUpdated = true;
	            } else {
	                Util.safeSet(patch, propertyName, propertyValue);
	                patchUpdated = true;
	            }
	        }
	
	        $scope.onSubjectChange = function () {
	            setProperty("extendedProperties.private.subjectId", $scope.evt.subject ? $scope.evt.subject.id : null);
	        };
	
	        $scope.onSummaryChange = function () {
	            setProperty("summary", $scope.evt.resource.summary);
	        };
	
	        $scope.onDescriptionChange = function () {
	            setProperty("description", $scope.evt.resource.description);
	        };
	
	        $scope.toggleCompletion = ScheduleModel.toggleCompletion.apply(null, [$scope.evt]);
	
	        $scope.ok = function () {
	            var finishPromise = $q.when(false),
	                patches = [],
	                evt = $scope.evt;
	            if ((patchUpdated || recurringParentPatchUpdated) && $scope.evtForm.$valid) {
	                if (patchUpdated) {
	                    patches.push(ScheduleModel.patchEvent(evt, patch, false));
	                }
	
	                if (recurringParentPatchUpdated) {
	                    patches.push(ScheduleModel.patchEvent(evt, recurringParentPatch, true));
	                }
	                finishPromise = $q.all(patches);
	            }
	
	            finishPromise.then(function (results) {
	                $location.url("/");
	            });
	        };
	
	        $scope.cancel = function () {
	            $location.url("/");
	        };
	    }];
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/*jslint plusplus: true, es5: true */
	/*global angular: false, moment: false */
	
	module.exports = function () {
	    return function (eventLists) {
	        return eventLists.suppressEvents ? eventLists.filter(function (list) {
	            return list.isTimeAxis;
	        }) : eventLists;
	    };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(moment, angular) {"use strict";
	
	/*jslint plusplus: true, es5: true */
	/*global angular: false, moment: false */
	
	module.exports = (function () {
	    "use strict";
	    return ["$scope", "$log", "$q", "$timeout", "$location", "$mdDialog", "Events", "ScheduleModel", "Profile", "Util", "MathUtil", "hsAuthService", "hsCalendarService", function ($scope, $log, $q, $timeout, $location, $mdDialog, Events, ScheduleModel, Profile, Util, MathUtil, auth, calendars) {
	        // reasonable defaults
	        var lastMinTime = 480,
	            // 8am
	        lastMaxTime = 1020; // 5pm
	
	        this.taskMode = true;
	
	        /** Determine the time range of the events and add a "non student" list  */
	        function prepareEvents(eventsByStudentID) {
	            var minTime = 24 * 60 - 1,
	                maxTime = 0,
	                blockOffset = 0,
	                minutesPerBlock = 15,
	                pixelsPerBlock = 25,
	                today = moment().startOf("day"),
	                lists = $scope.studentEventLists.slice(0),
	                // a copy of the current data
	            timeAxis = lists.find(function (evtList, idx) {
	                return evtList.isTimeAxis;
	            });
	
	            // ensure we have a "non-student" list which is the time axis
	            if (!timeAxis) {
	                timeAxis = {
	                    isTimeAxis: true,
	                    student: {}
	                };
	                lists.unshift(timeAxis);
	            }
	
	            timeAxis.summary = ScheduleModel.getStart().format("dddd");
	            timeAxis.student.name = ScheduleModel.getStart().format("M/D");
	
	            angular.forEach(eventsByStudentID, function (events, studentId) {
	                var list = lists.find(function (evtList, idx) {
	                    return evtList.student.userId === studentId;
	                });
	                if (!list) {
	                    // we don't have an event list created for this student yet
	                    var userData = auth.getUserData(),
	
	                    // student users won't have a students array... TODO: more explicit way to identify student
	                    student = userData.students ? userData.students.find(function (stdnt) {
	                        return stdnt.userId === studentId;
	                    }) : userData;
	                    lists.push({
	                        student: student,
	                        events: []
	                    });
	                }
	
	                // calculate min/max time for events
	                angular.forEach(events, function (evt) {
	                    minTime = Math.min(minTime, evt.startMinutes);
	                    maxTime = Math.max(maxTime, evt.endMinutes);
	                });
	            });
	
	            minTime = MathUtil.floor(minTime, minutesPerBlock * 4);
	            maxTime = MathUtil.ceiling(maxTime, minutesPerBlock * 4);
	            $scope.scheduleTotalBlocks = Math.round(maxTime - minTime) / minutesPerBlock * pixelsPerBlock + "px";
	
	            // set the blockOffset property on each event to indicate where it'll be positioned
	            if (minTime < maxTime) {
	                lastMinTime = minTime;
	                lastMaxTime = maxTime;
	            } else {
	                minTime = lastMinTime;
	                maxTime = lastMaxTime;
	            }
	
	            angular.forEach(lists, function (list) {
	                if (list.isTimeAxis) {
	                    return;
	                }
	
	                list.events = [];
	                angular.forEach(eventsByStudentID[list.student.userId], function (evt) {
	                    evt.blockOffset = Math.round(MathUtil.floor(evt.startMinutes - minTime, minutesPerBlock) / minutesPerBlock) * pixelsPerBlock + "px";
	                    evt.duration = MathUtil.floor(evt.endMinutes - evt.startMinutes, minutesPerBlock) / minutesPerBlock * pixelsPerBlock + "px";
	                    minTime = Math.min(minTime, evt.startMinutes);
	                    maxTime = Math.max(maxTime, evt.endMinutes);
	
	                    // now that the evt has blockOffset and duration add it to the list array
	                    // delaying this as long as possible this helps avoid unsightly flicker in the UI
	                    list.events.push(evt);
	                });
	            });
	
	            today.minutes(minTime);
	
	            // generate axis events
	            timeAxis.events = [];
	            while (minTime < maxTime) {
	                timeAxis.events.push({
	                    duration: 4 * pixelsPerBlock + "px", // 8:30 * 60,
	                    blockOffset: blockOffset * pixelsPerBlock + "px",
	                    resource: {
	                        summary: today.format("ha") }
	                });
	
	                blockOffset += 4;
	                minTime += minutesPerBlock * 4;
	                today.add(minutesPerBlock * 4, "minutes");
	            }
	
	            return lists;
	        }
	
	        $scope.login = auth.login;
	        $scope.animateForward = false;
	        $scope.studentEventLists = [];
	
	        $scope.$on(Events.CHANGE_DAY, function (event, increment) {
	            //$scope.changeDay = function (increment) {
	            ScheduleModel.changeDay(increment);
	
	            // change direction of animation
	            $scope.animateForward = increment > 0;
	            $scope.changingDay = true;
	            // use $timeout to ensure the animation direction is set before
	            // triggering animation
	            $timeout(function () {
	                // set a flag which will be used by a filter applied to the repeater
	                // to artificially hide the event lists so leave animations are triggered
	                $scope.studentEventLists.suppressEvents = true;
	                var start = new Date();
	                ScheduleModel.fetchStudentEvents().then(prepareEvents).then(function (updatedLists) {
	                    var elapsed = new Date().getTime() - start.getTime();
	                    $timeout(function () {
	                        // then remove that flag to trigger enter animations
	                        $scope.studentEventLists = updatedLists;
	                        $scope.changingDay = false;
	                    }, Math.max(0, 500 - elapsed), true);
	                });
	            }, 0, true);
	        });
	
	        $scope.getData = function () {
	            auth.afterLogin().then(function (access_token) {
	                ScheduleModel.fetchStudentEvents().then(prepareEvents).then(function (updatedLists) {
	                    $scope.studentEventLists = updatedLists;
	                    if (updatedLists.length == 2) {
	                        $scope.activeStudent = updatedLists[1];
	                        $scope.activeStudent.active = true;
	                    }
	                }, function (error) {
	                    $log.error(error);
	                });
	            });
	        };
	
	        $scope.setActiveList = function (activeStudent) {
	            if (activeStudent && activeStudent.isTimeAxis) return;
	
	            angular.forEach($scope.studentEventLists, function (student) {
	                student.active = student === activeStudent;
	            });
	            $scope.activeStudent = activeStudent;
	        };
	
	        $scope.openEvent = function (evtViewState) {
	            ScheduleModel.setActiveEvent(evtViewState);
	            $location.url("/event-detail");
	        };
	
	        $scope.toggleComplete = ScheduleModel.toggleCompletion;
	    }];
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(14)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(moment, angular) {"use strict";
	
	/*jslint plusplus: true, es5: true */
	/*global angular: false, moment: false */
	
	module.exports = (function () {
	    "use strict";
	    return ["$q", "$log", "hsAuthService", "hsCalendarService", "Util", function ($q, $log, hsAuthService, calendars, Util) {
	        var userCalendarList = null,
	            activeEventViewState = null,
	            start = moment().startOf("day"),
	            end = moment().endOf("day");
	
	        function getUserCalendars() {
	            if (userCalendarList) {
	                return $q.when(userCalendarList);
	            }
	
	            return calendars.getCalendarList().then(function (data) {
	                userCalendarList = data;
	                return userCalendarList;
	            }, function (error) {
	                $log.error(error);
	                return $q.reject(error);
	            });
	        }
	
	        function getSubject(evtResource) {
	            var subjectId = Util.safeRead(evtResource, "extendedProperties.private.subjectId");
	            return hsAuthService.getUserData().subjects.find(function (sub) {
	                return sub.id === subjectId;
	            });
	        }
	
	        function buildEventViewState(evtResource) {
	            var start = moment(evtResource.start.dateTime),
	                end = moment(evtResource.end.dateTime);
	
	            $log.log("creating " + evtResource.summary + " event");
	            return {
	                day: start.dayOfYear(),
	                start: start,
	                end: end,
	                startMinutes: start.hours() * 60 + start.minutes(),
	                endMinutes: end.hours() * 60 + end.minutes(),
	                fmtTime: start.format("hh:mma"),
	                subject: getSubject(evtResource),
	                completion: Util.safeRead(evtResource, "extendedProperties.private.completion"),
	                resource: evtResource,
	                editable: angular.isArray(hsAuthService.getUserData().students)
	            };
	        }
	
	        function patchEvent(evtViewState, patch, patchParent) {
	            evtViewState.updating = true;
	            return calendars.patchEvent(evtViewState.resource, patch, patchParent, start, end).then(function (evt) {
	                evtViewState.resource = evt;
	                evtViewState.updating = false;
	                return evtViewState;
	            }, function (error) {
	                evtViewState.updating = false;
	                return $q.reject(error);
	            });
	        }
	
	        function toggleCompletion(evtViewState) {
	            if (!evtViewState) {
	                return;
	            }return patchEvent(evtViewState, {
	                extendedProperties: {
	                    "private": {
	                        completion: !Util.safeRead(evtViewState.resource, "extendedProperties.private.completion") ? moment().format() : null
	                    }
	                }
	            }, false).then(function (updatedEvtViewState) {
	
	                evtViewState.completion = Util.safeRead(updatedEvtViewState.resource, "extendedProperties.private.completion");
	                return evtViewState;
	            });
	        }
	
	        function fetchStudentEvents(calendarList, nextSyncToken) {
	
	            return getUserCalendars().then(function (calendarList) {
	                var deferred = $q.defer(),
	                    eventsByStudentID = {},
	                    pendingStudents = 0,
	                    userData = hsAuthService.getUserData();
	
	                // loop over students to fetch events for each
	                angular.forEach(userData.students || [userData], function (student) {
	                    eventsByStudentID[student.userId] = [];
	                    var eventListPromises = [];
	
	                    // build up a list of promises for events from the student's calendar(s)
	                    angular.forEach(student.calendarIDs, function (studentCalendarId) {
	                        var calendar = calendarList.items.find(function (cal, idx) {
	                            return cal.id === studentCalendarId;
	                        });
	                        if (calendar) {
	                            eventListPromises.push(calendars.getEventList(calendar.id, start.format(), end.format()));
	                        }
	                    });
	
	                    if (eventListPromises.length) {
	                        // fetch the events for the student's calendar(s)
	                        pendingStudents++;
	                        $q.all(eventListPromises).then(function (resultsArray) {
	                            deferred.notify(student.name + " data retrieved");
	                            pendingStudents--;
	                            angular.forEach(resultsArray, function (eventListResult) {
	                                angular.forEach(eventListResult.items, function (evtResource) {
	
	                                    eventsByStudentID[student.userId].push(buildEventViewState(evtResource));
	                                });
	                            });
	
	                            if (pendingStudents === 0) {
	                                // we've now retrieved data from all students
	                                deferred.resolve(eventsByStudentID);
	                            }
	                        }, function (rejections) {
	                            deferred.reject("Error fetching events for " + student.name + ": " + rejections);
	                        });
	                    }
	                });
	                return deferred.promise;
	            });
	        }
	
	        return {
	            fetchStudentEvents: fetchStudentEvents,
	            changeDay: function changeDay(increment) {
	                start.add("days", increment);
	                end.add("days", increment);
	            },
	            setActiveEvent: function setActiveEvent(evt) {
	                activeEventViewState = evt;
	            },
	            patchEvent: patchEvent,
	            toggleCompletion: toggleCompletion,
	            getActiveEventViewState: function getActiveEventViewState() {
	                return activeEventViewState;
	            },
	            getStart: function getStart() {
	                return start;
	            },
	            getEnd: function getEnd() {
	                return end;
	            }
	        };
	    }];
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10), __webpack_require__(14)))

/***/ },
/* 45 */,
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "components/auth/login.html"

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "components/auth/profile.html"

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "components/schedule/event-detail.html"

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "components/schedule/schedule.html"

/***/ }
]);
//# sourceMappingURL=app.js.map