/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);
/******/
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;
/******/ 			script.src = __webpack_require__.p + "" + {"1":"385ba2bd52ef789b6203","2":"947ab7bbb031b06bece3"}[chunkId] + ".js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(4);
	__webpack_require__(7);
	module.exports = __webpack_require__(9);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 AngularJS v1.4.0-rc.1
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
	m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
	f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
	d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
	(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
	d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
	e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
	h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
	q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
	//# sourceMappingURL=angular-route.min.js.map


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 AngularJS v1.4.0-rc.1
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(E,t,U){'use strict';function ra(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function sa(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;V(a)&&(a=a.join(" "));V(b)&&(b=b.join(" "));return a+" "+b}function Aa(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Z(a,b,c){var d="";a=V(a)?a:a&&S(a)&&a.length?a.split(/\s+/):[];f(a,function(a,u){a&&0<a.length&&(d+=0<u?" ":"",d+=c?b+a:a+b)});return d}function Ba(a){return 1===a.nodeType?C(a):0===
	a.length?[]:1===a.length?1===a[0].nodeType&&a:C(ia(a))}function ia(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ca(a,b,c){f(b,function(b){a.addClass(b,c)})}function Da(a,b,c){f(b,function(b){a.removeClass(b,c)})}function fa(a){return function(b,c){c.addClass&&(Ca(a,b,c.addClass),c.addClass=null);c.removeClass&&(Da(a,b,c.removeClass),c.removeClass=null)}}function ga(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||J;a.domOperation=function(){a.$$domOperationFired=
	!0;b();b=J};a.$$prepared=!0}return a}function aa(a,b){ta(a,b);ua(a,b)}function ta(a,b){b.from&&(a.css(b.from),b.from=null)}function ua(a,b){b.to&&(a.css(b.to),b.to=null)}function P(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),g=(b.removeClass||"")+" "+(c.removeClass||"");a=Ea(a.attr("class"),d,g);va(b,c);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ea(a,b,c){function d(a){S(a)&&(a=a.split(" "));var b={};f(a,function(a){a.length&&(b[a]=
	!0)});return b}var g={};a=d(a);b=d(b);f(b,function(a,b){g[b]=1});c=d(c);f(c,function(a,b){g[b]=1===g[b]?null:-1});var u={addClass:"",removeClass:""};f(g,function(b,c){var d,g;1===b?(d="addClass",g=!a[c]):-1===b&&(d="removeClass",g=a[c]);g&&(u[d].length&&(u[d]+=" "),u[d]+=c)});return u}function wa(a,b,c){var d=Object.create(null),g=a.getComputedStyle(b)||{};f(c,function(a,b){var c=g[a];if(c){var x=c.charAt(0);if("-"===x||"+"===x||0<=x)c=Fa(c);0===c&&(c=null);d[b]=c}});return d}function Fa(a){var b=
	0;a=a.split(/\s*,\s*/);f(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ja(a){return 0===a||null!=a}function xa(a,b){var c=N,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function ha(a,b){var c=b?"-"+b+"s":"";ba(a,[ca,c]);return[ca,c]}function ka(a,b){var c=b?"paused":"",d=T+"PlayState";ba(a,[d,c]);return[d,c]}function ba(a,b){a.style[b[0]]=b[1]}function ya(){var a=Object.create(null);return{flush:function(){a=
	Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}var J=t.noop,va=t.extend,C=t.element,f=t.forEach,V=t.isArray,S=t.isString,la=t.isObject,Ga=t.isUndefined,Ha=t.isDefined,Ia=t.isFunction,ma=t.isElement,N,na,T,oa;E.ontransitionend===U&&E.onwebkittransitionend!==U?(N="WebkitTransition",na="webkitTransitionEnd transitionend"):(N="transition",na="transitionend");E.onanimationend===U&&E.onwebkitanimationend!==
	U?(T="WebkitAnimation",oa="webkitAnimationEnd animationend"):(T="animation",oa="animationend");var pa=T+"Delay",qa=T+"Duration",ca=N+"Delay";E=N+"Duration";var Ja={transitionDuration:E,transitionDelay:ca,transitionProperty:N+"Property",animationDuration:qa,animationDelay:pa,animationIterationCount:T+"IterationCount"},Ka={transitionDuration:E,transitionDelay:ca,animationDuration:qa,animationDelay:pa};t.module("ngAnimate",[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;
	t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFMutex",["$$rAF",function(a){return function(){var b=!1;a(function(){b=!0});return function(c){b?c():a(c)}}}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(a,b){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=b();this._state=0}c.chain=function(a,b){function c(){if(B===a.length)b(!0);else a[B](function(a){!1===
	a?b(!1):(B++,c())})}var B=0;c()};c.all=function(a,b){function c(u){r=r&&u;++B===a.length&&b(r)}var B=0,r=!0;f(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:J,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
	"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(f(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
	0,this._state=2)}};return c}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a,b,c,r){return d[a].some(function(a){return a(b,c,r)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});
	d.skip.push(function(a,b,c){return c.structural&&!b.structural});d.cancel.push(function(a,b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(d,u,B,r,x,h,K,s,da){function F(a,b){var c=a[0],e=[],l=k[b];l&&f(l,function(a){a.node.contains(c)&&e.push(a.callback)});return e}function W(a,b,c,e){d(function(){f(F(b,
	a),function(a){a(b,c,e)})})}function L(a,Q,p){function w(b,c,e,l){W(c,a,e,l);b.progress(c,e,l)}function d(b){za(a,p);aa(a,p);p.domOperation();g.complete(!b)}a=Ba(a);var k=a[0];p=ga(p);var Y=a.parent(),g=new K;if(!k)return g.end(),g;V(p.addClass)&&(p.addClass=p.addClass.join(" "));V(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.from&&!la(p.from)&&(p.from=null);p.to&&!la(p.to)&&(p.to=null);var n=[k.className,p.addClass,p.removeClass].join(" ");if(!La(n))return d(),g;var r=0<=["enter","move",
	"leave"].indexOf(Q),f=!D||l.get(k),n=!f&&m.get(k)||{},x=!!n.state;f||x&&1==n.state||(f=!e(a,Y,Q));if(f)return d(),g;r&&H(a);f={structural:r,element:a,event:Q,options:p,runner:g};if(x){if(b("skip",a,f,n)){if(2===n.state)return d(),g;P(a,n.options,p);return n.runner}if(b("cancel",a,f,n))2===n.state?n.runner.end():P(a,f.options,n.options);else if(b("join",a,f,n))if(2===n.state)P(a,p,{});else return Q=f.event=n.event,p=P(a,n.options,f.options),g}else P(a,p,{});(x=f.structural)||(x="animate"===f.event&&
	0<Object.keys(f.options.to||{}).length||c(f.options));if(!x)return d(),g;z(Y);var s=(n.counter||0)+1;f.counter=s;I(a,1,f);u.$$postDigest(function(){var b=m.get(k),e=!b,b=b||{},l=a.parent()||[],D=0<l.length&&("animate"===b.event||b.structural||c(b.options));if(e||b.counter!==s||!D){if(e&&(za(a,p),aa(a,p)),e||r&&b.event!==Q)p.domOperation(),g.end()}else Q=!b.structural&&c(b.options,!0)?"setClass":b.event,z(l),I(a,2),b=h(a,Q,b.options),b.done(function(b){d(!b);(b=m.get(k))&&b.counter===s&&A(a);w(g,Q,
	"close",{})}),g.setHost(b),w(g,Q,"start",{})});return g}function H(a){a=a[0].querySelectorAll("[data-ng-animate]");f(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=m.get(a);switch(b){case 2:c.runner.end();case 1:c&&m.remove(a)}})}function A(a){a=a.length?a[0]:a;a.removeAttribute("data-ng-animate");m.remove(a)}function v(a,b){a=a.length?a[0]:a;b=b.length?b[0]:b;return a===b}function z(a){a=a[0];do{if(!a||1!==a.nodeType)break;var b=m.get(a);if(b){var e=a;!b.structural&&c(b.options)&&
	(2===b.state&&b.runner.end(),A(e))}a=a.parentNode}while(1)}function e(a,b,c){var e=c=!1,D=!1,d;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){e||(e=v(b,B));a=b[0];if(1!==a.nodeType)break;var k=m.get(a)||{};D||(D=k.structural||l.get(a));if(Ga(d)||!0===d)a=b.data("$$ngAnimateChildren"),Ha(a)&&(d=a);if(D&&!1===d)break;e||(e=v(b,B),e||(a=b.data("$ngAnimatePin"))&&(b=a));c||(c=v(b,w));b=b.parent()}return(!D||d)&&e&&c}function I(a,b,c){c=c||{};c.state=b;a=a.length?a[0]:a;a.setAttribute("data-ng-animate",
	b);c=(b=m.get(a))?va(b,c):c;m.put(a,c)}var m=new x,l=new x,D=null,Y=u.$watch(function(){return 0===s.totalPendingRequests},function(a){a&&(Y(),u.$$postDigest(function(){u.$$postDigest(function(){null===D&&(D=!0)})}))}),w=C(r[0].body),k={},n=a.classNameFilter(),La=n?function(a){return n.test(a)}:function(){return!0},za=fa(da);return{on:function(a,b,c){b=ia(b);k[a]=k[a]||[];k[a].push({node:b,callback:c})},off:function(a,b,c){function e(a,b,c){var l=ia(b);return a.filter(function(a){return!(a.node===
	l&&(!c||a.callback===c))})}var l=k[a];l&&(k[a]=1===arguments.length?null:e(l,b,c))},pin:function(a,b){ra(ma(a),"element","not an element");ra(ma(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,e){c=c||{};c.domOperation=e;return L(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!D;else if(ma(a)){var e=a.length?a[0]:a,d=l.get(e);1===c?b=!d:(b=!!b)?d&&l.remove(e):l.put(e,!0)}else b=D=!!a;return b}}}]}]).provider("$$animation",["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}
	var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner",function(a,g,u,B){var r=[],x=fa(a);return function(h,K,s){function da(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];f(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function F(a){var b=[],c={};f(a,function(a,e){var l=a.element[0],d=0<=["enter","move"].indexOf(a.event),l=a.structural?da(l):[];if(l.length){var k=d?"to":"from";f(l,
	function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][k]={animationID:e,element:C(a)}})}else b.push(a)});var e={},d={};f(c,function(c,g){var m=c.from,z=c.to;if(m&&z){var f=a[m.animationID],p=a[z.animationID],I=m.animationID.toString();if(!d[I]){var Y=d[I]={start:function(){f.start();p.start()},close:function(){f.close();p.close()},classes:W(f.classes,p.classes),from:f,to:p,anchors:[]};Y.classes.length?b.push(Y):(b.push(f),b.push(p))}d[I].anchors.push({out:m.element,"in":z.element})}else m=
	m?m.animationID:z.animationID,z=m.toString(),e[z]||(e[z]=!0,b.push(a[m]))});return b}function W(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],e=0;e<a.length;e++){var d=a[e];if("ng-"!==d.substring(0,3))for(var m=0;m<b.length;m++)if(d===b[m]){c.push(d);break}}return c.join(" ")}function L(a){for(var b=c.length-1;0<=b;b--){var e=c[b];if(u.has(e)&&(e=u.get(e)(a)))return e}}function H(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function A(){var a=
	b(h);!a||"leave"===K&&s.$$domOperationFired||a.end()}function v(b){h.off("$destroy",A);h.removeData("$$animationRunner");x(h,s);aa(h,s);s.domOperation();m&&a.removeClass(h,m);h.removeClass("ng-animate");e.complete(!b)}s=ga(s);var z=0<=["enter","move","leave"].indexOf(K),e=new B({end:function(){v()},cancel:function(){v(!0)}});if(!c.length)return v(),e;h.data("$$animationRunner",e);var I=sa(h.attr("class"),sa(s.addClass,s.removeClass)),m=s.tempClasses;m&&(I+=" "+m,s.tempClasses=null);r.push({element:h,
	classes:I,event:K,structural:z,options:s,start:function(){h.addClass("ng-animate");m&&a.addClass(h,m)},close:v});h.on("$destroy",A);if(1<r.length)return e;g.$$postDigest(function(){var a=[];f(r,function(c){b(c.element)&&a.push(c)});r.length=0;f(F(a),function(a){var b=a.start,c=a.close,e=L(a);(e=e&&e.start)?(b(),b=e(),b.done(function(a){c(!a)}),H(a,b)):c()})});return e}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=ya(),c=ya();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout",
	"$document","$sniffer","$$rAF",function(a,g,u,B,r,x,h){function K(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++L))+"-"+a.getAttribute("class")+"-"+b}function s(z,e,f,m){var l;0<b.count(f)&&(l=c.get(f),l||(e=Z(e,"-stagger"),g.addClass(z,e),l=wa(a,z,m),l.animationDuration=Math.max(l.animationDuration,0),l.transitionDuration=Math.max(l.transitionDuration,0),g.removeClass(z,e),c.put(f,l)));return l||{}}function da(a){A&&A();v.push(a);A=h(function(){A=null;b.flush();
	c.flush();for(var a=H.offsetWidth+1,d=0;d<v.length;d++)v[d](a);v.length=0})}function F(c,e,f){e=b.get(f);e||(e=wa(a,c,Ja),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(f,e);c=e;f=c.animationDelay;e=c.transitionDelay;c.maxDelay=f&&e?Math.max(f,e):f||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var W=fa(g),L=0,H=r[0].body,A,v=[];return function(a,c){function d(){l()}function m(){l(!0)}function l(b){if(!(H||L&&v)){H=
	!0;v=!1;g.removeClass(a,X);g.removeClass(a,U);ka(w,!1);ha(w,!1);f(k,function(a){w.style[a[0]]=""});W(a,c);aa(a,c);if(c.onDone)c.onDone();p&&p.complete(!b)}}function D(a){q.blockTransition&&ha(w,a);q.blockKeyframeAnimation&&ka(w,!!a)}function r(){function b(){if(!H){D(!1);f(k,function(a){w.style[a[0]]=a[1]});W(a,c);g.addClass(a,U);if(q.recalculateTimingStyles){ea=w.className+" "+X;$=K(w,ea);y=F(w,ea,$);O=y.maxDelay;t=Math.max(O,0);G=y.maxDuration;if(0===G){l();return}q.hasTransitions=0<y.transitionDuration;
	q.hasAnimations=0<y.animationDuration}if(q.applyTransitionDelay||q.applyAnimationDelay){O="boolean"!==typeof c.delay&&ja(c.delay)?parseFloat(c.delay):O;t=Math.max(O,0);var n;q.applyTransitionDelay&&(y.transitionDelay=O,n=[ca,O+"s"],k.push(n),w.style[n[0]]=n[1]);q.applyAnimationDelay&&(y.animationDelay=O,n=[pa,O+"s"],k.push(n),w.style[n[0]]=n[1])}J=1E3*t;E=1E3*G;if(c.easing){var r=c.easing;q.hasTransitions&&(n=N+"TimingFunction",k.push([n,r]),w.style[n]=r);q.hasAnimations&&(n=T+"TimingFunction",k.push([n,
	r]),w.style[n]=r)}y.transitionDuration&&p.push(na);y.animationDuration&&p.push(oa);h=Date.now();a.on(p.join(" "),m);B(d,J+1.5*E);ua(a,c)}}function d(){l()}function m(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-h,0)>=J&&b>=G&&(L=!0,l())}if(!H){var h,p=[],n=function(a){if(L)v&&a&&(v=!1,l());else if(v=!a,y.animationDuration)if(a=ka(w,v),v)k.push(a);else{var b=k,c=b.indexOf(a);0<=a&&b.splice(c,1)}},x=0<
	S&&(y.transitionDuration&&0===R.transitionDuration||y.animationDuration&&0===R.animationDuration)&&Math.max(R.animationDelay,R.transitionDelay);x?B(b,Math.floor(x*S*1E3),!1):b();A.resume=function(){n(!0)};A.pause=function(){n(!1)}}}var w=a[0];c=ga(c);var k=[],n=a.attr("class"),h=Aa(c),H,v,L,p,A,t,J,G,E;if(0===c.duration||!x.animations&&!x.transitions)l();else{var C=c.event&&V(c.event)?c.event.join(" "):c.event,P="",M="";C&&c.structural?P=Z(C,"ng-",!0):C&&(P=C);c.addClass&&(M+=Z(c.addClass,"-add"));
	c.removeClass&&(M.length&&(M+=" "),M+=Z(c.removeClass,"-remove"));c.applyClassesEarly&&M.length&&(W(a,c),M="");var X=[P,M].join(" ").trim(),ea=n+" "+X,U=Z(X,"-active"),n=h.to&&0<Object.keys(h.to).length;if(!n&&!X)return l(),!1;var $,R;0<c.stagger?(h=parseFloat(c.stagger),R={transitionDelay:h,animationDelay:h,transitionDuration:0,animationDuration:0}):($=K(w,ea),R=s(w,X,$,Ka));g.addClass(a,X);c.transitionStyle&&(h=[N,c.transitionStyle],ba(w,h),k.push(h));0<=c.duration&&(h=0<w.style[N].length,h=xa(c.duration,
	h),ba(w,h),k.push(h));c.keyframeStyle&&(h=[T,c.keyframeStyle],ba(w,h),k.push(h));var S=R?0<=c.staggerIndex?c.staggerIndex:b.count($):0;(C=0===S)&&ha(w,9999);var y=F(w,ea,$),O=y.maxDelay;t=Math.max(O,0);G=y.maxDuration;var q={};q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==y.transitionProperty;q.applyTransitionDuration=n&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=c.duration&&
	q.hasAnimations;q.applyTransitionDelay=ja(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ja(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<M.length;if(q.applyTransitionDuration||q.applyAnimationDuration)G=c.duration?parseFloat(c.duration):G,q.applyTransitionDuration&&(q.hasTransitions=!0,y.transitionDuration=G,h=0<w.style[N+"Property"].length,k.push(xa(G,h))),q.applyAnimationDuration&&(q.hasAnimations=!0,y.animationDuration=G,k.push([qa,G+"s"]));if(0===G&&!q.recalculateTimingStyles)return l(),
	!1;0<y.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||C);J=1E3*t;E=1E3*G;c.skipBlocking||(q.blockTransition=0<y.transitionDuration,q.blockKeyframeAnimation=0<y.animationDuration&&0<R.animationDelay&&0===R.animationDuration);ta(a,c);q.blockTransition||ha(w,!1);D(G);return{end:d,start:function(){if(!H)return A={end:d,cancel:m,resume:null,pause:null},p=new u(A),da(r),p}}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");
	this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(a,c,d,g,u,B){function r(a){return a.replace(/\bng-\S+\b/g,"")}function x(a,b){S(a)&&(a=a.split(" "));S(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function h(c,h,g){function K(a){var b={},c=a[0].getBoundingClientRect();f(["width","height","top","left"],function(a){var e=c[a];switch(a){case "top":e+=t.scrollTop;break;case "left":e+=t.scrollLeft}b[a]=Math.floor(e)+
	"px"});return b}function v(){var c=r(g.attr("class")),c=x(c,u);return a(e,{to:K(g),addClass:"ng-anchor-in "+c,removeClass:"ng-anchor-out "+u,delay:!0})}function s(){e.remove();h.removeClass("ng-animate-shim");g.removeClass("ng-animate-shim")}var e=C(h[0].cloneNode(!0)),u=r(e.attr("class")||"");c=Z(c,"-anchor");h.addClass("ng-animate-shim");g.addClass("ng-animate-shim");e.addClass("ng-animate-anchor");e.addClass(c);F.append(e);var m;c=a(e,{addClass:"ng-anchor-out",delay:!0,from:K(h)});if(!c&&(m=v(),
	!m))return s();var l=c||m;return{start:function(){function a(){c&&c.end()}var b,c=l.start();c.done(function(){c=null;if(!m&&(m=v()))return c=m.start(),c.done(function(){c=null;s();b.complete()}),c;s();b.complete()});return b=new d({end:a,cancel:a})}}}function K(a,b,c,g){var r=s(a),x=s(b),e=[];f(g,function(a){(a=h(c,a.out,a["in"]))&&e.push(a)});if(r||x||0!==e.length)return{start:function(){function a(){f(b,function(a){a.end()})}var b=[];r&&b.push(r.start());x&&b.push(x.start());f(e,function(a){b.push(a.start())});
	var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function s(c){var d=c.element,f=c.options||{};f.structural=c.structural;f.applyClassesEarly=f.structural;f.event=c.event;"leave"===f.event&&c.domOperation&&(f.onDone=c.domOperation);return a(d,f)}if(!B.animations&&!B.transitions)return J;var t=u[0].body;c=g[0];var F=C(t.parentNode===c?t:c);return function(a){return a.from&&a.to?K(a.from,a.to,a.classes,a.anchors):s(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=
	["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(b,c,d,g){function u(c){c=V(c)?c:c.split(" ");for(var d=[],f={},g=0;g<c.length;g++){var s=c[g],u=a.$$registeredAnimations[s];u&&!f[s]&&(d.push(b.get(u)),f[s]=!0)}return d}var t=fa(g);return function(a,b,d,g){function s(){g.domOperation();t(a,g)}function C(a,b,c,d,e){switch(c){case "animate":b=[b,d.from,d.to,e];break;case "setClass":b=[b,L,H,e];break;case "addClass":b=[b,L,e];break;case "removeClass":b=[b,H,e];break;default:b=[b,e]}b.push(d);
	a=a.apply(a,b);return Ia(a)?a:J}function F(a,b,d,e,g){var k=[];f(e,function(e){var f=e[g];f&&k.push(function(){var e,g,k=!1,h=function(a){k||(k=!0,(g||J)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});g=C(f,a,b,d,function(a){h(!1===a)});return e})});return k}function E(a,b,d,e,g){var k=F(a,b,d,e,g);if(0===k.length){var h,r;"beforeSetClass"===g?(h=F(a,"removeClass",d,e,"beforeRemoveClass"),r=F(a,"addClass",d,e,"beforeAddClass")):"setClass"===g&&(h=F(a,"removeClass",d,e,
	"removeClass"),r=F(a,"addClass",d,e,"addClass"));h&&(k=k.concat(h));r&&(k=k.concat(r))}if(0!==k.length)return function(a){var b=[];k.length&&f(k,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){f(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&la(d)&&(g=d,d=null);g=ga(g);d||(d=a.attr("class")||"",g.addClass&&(d+=" "+g.addClass),g.removeClass&&(d+=" "+g.removeClass));var L=g.addClass,H=g.removeClass,A=u(d),v,z;if(A.length){var e,I;"leave"==b?(I="leave",e="afterLeave"):
	(I="before"+b.charAt(0).toUpperCase()+b.substr(1),e=b);"enter"!==b&&"move"!==b&&(v=E(a,b,g,A,I));z=E(a,b,g,A,e)}if(v||z)return{start:function(){function b(c){f=!0;s();aa(a,g);h.complete(c)}var d,e=[];v&&e.push(function(a){d=v(a)});e.length?e.push(function(a){s();a(!0)}):s();z&&e.push(function(a){d=z(a)});var f=!1,h=new c({end:function(){f||((d||J)(void 0),b(void 0))},cancel:function(){f||((d||J)(!0),b(!0))}});c.chain(e,b);return h}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");
	this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),t=d(a.to);if(b||t)return{start:function(){function a(){return function(){f(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());t&&d.push(t.start());c.all(d,function(a){g.complete(a)});var g=new c({end:a(),cancel:a()});return g}}}else return d(a)}}]}])})(window,window.angular);
	//# sourceMappingURL=angular-animate.min.js.map


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 AngularJS v1.4.0-rc.1
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var w=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
	this.$get=["$http","$q",function(q,h){function t(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function v(x,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){u(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw w("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
	{},this)}var G=new t(x,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,y,m,x){var n={},f,l,z;switch(arguments.length){case 4:z=x,l=m;case 3:case 2:if(u(y)){if(u(a)){l=a;z=y;break}l=y;z=m}else{n=a;f=y;l=m;break}case 1:u(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw w("badargs",arguments.length);}var t=this instanceof e,p=t?f:b.isArray?[]:new e(f),
	A={},v=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(A[a]=H(b))});g&&(A.data=f);G.setUrlParams(A,s({},c(f,b.params||{}),n),b.url);n=q(A).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw w("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object");b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):(D(c,p),p.$promise=
	g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(z||E)(a);return h.reject(a)});n=n.then(function(a){var b=v(a);(l||E)(b,a.headers);return b},C);return t?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){u(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return v(x,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,u=d.isFunction;t.prototype={setUrlParams:function(f,g,l){var m=this,c=l||m.template,h,
	e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw w("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),c=c.replace(new RegExp(":"+
	k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return v}]})})(window,window.angular);
	//# sourceMappingURL=angular-resource.min.js.map


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Angular Material Design
	 * https://github.com/angular/material
	 * @license MIT
	 * v0.9.0
	 */
	function BackdropDirective(e){return e}function MdBottomSheetDirective(){return{restrict:"E"}}function MdBottomSheetProvider(e){function t(e,t,r,a,i,d,c,l,m){function s(n,o,m){o=r.extractElementByName(o,"md-bottom-sheet"),f=i('<md-backdrop class="md-opaque md-bottom-sheet-backdrop">')(n),f.on("click",function(){a(c.cancel)}),d.inherit(f,m.parent),e.enter(f,m.parent,null);var s=new p(o,m.parent);return m.bottomSheet=s,m.targetEvent&&angular.element(m.targetEvent.target).blur(),d.inherit(s.element,m.parent),m.disableParentScroll&&(m.lastOverflow=m.parent.css("overflow"),m.parent.css("overflow","hidden")),e.enter(s.element,m.parent).then(function(){var e=angular.element(o[0].querySelector("button")||o[0].querySelector("a")||o[0].querySelector("[ng-click]"));e.focus(),m.escapeToClose&&(m.rootElementKeyupCallback=function(e){e.keyCode===t.KEY_CODE.ESCAPE&&a(c.cancel)},l.on("keyup",m.rootElementKeyupCallback))})}function u(t,n,o){var r=o.bottomSheet;return e.leave(f),e.leave(r.element).then(function(){o.disableParentScroll&&(o.parent.css("overflow",o.lastOverflow),delete o.lastOverflow),r.cleanup(),o.targetEvent&&angular.element(o.targetEvent.target).focus()})}function p(e,r){function i(n){e.css(t.CSS.TRANSITION_DURATION,"0ms")}function d(n){var r=n.pointer.distanceY;5>r&&(r=Math.max(-o,r/2)),e.css(t.CSS.TRANSFORM,"translate3d(0,"+(o+r)+"px,0)")}function l(o){if(o.pointer.distanceY>0&&(o.pointer.distanceY>20||Math.abs(o.pointer.velocityY)>n)){var r=e.prop("offsetHeight")-o.pointer.distanceY,i=Math.min(r/o.pointer.velocityY*.75,500);e.css(t.CSS.TRANSITION_DURATION,i+"ms"),a(c.cancel)}else e.css(t.CSS.TRANSITION_DURATION,""),e.css(t.CSS.TRANSFORM,"")}var s=m.register(r,"drag",{horizontal:!1});return r.on("$md.dragstart",i).on("$md.drag",d).on("$md.dragend",l),{element:e,cleanup:function(){s(),r.off("$md.dragstart",i).off("$md.drag",d).off("$md.dragend",l)}}}var f;return{themable:!0,targetEvent:null,onShow:s,onRemove:u,escapeToClose:!0,disableParentScroll:!0}}var n=.5,o=80;return t.$inject=["$animate","$mdConstant","$mdUtil","$timeout","$compile","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","targetEvent"],options:t})}function MdButtonDirective(e,t,n,o){function r(e){return angular.isDefined(e.href)||angular.isDefined(e.ngHref)||angular.isDefined(e.ngLink)||angular.isDefined(e.uiSref)}function a(e,t){return r(t)?'<a class="md-button" ng-transclude></a>':'<button class="md-button" ng-transclude></button>'}function i(a,i,d){var c=i[0];t(i),e.attachButtonBehavior(a,i);var l=c.textContent.trim();l||n.expect(i,"aria-label"),r(d)&&angular.isDefined(d.ngDisabled)&&a.$watch(d.ngDisabled,function(e){i.attr("tabindex",e?-1:0)}),i.on("click",function(e){d.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),a.mouseActive=!1,i.on("mousedown",function(){a.mouseActive=!0,o(function(){a.mouseActive=!1},100)}).on("focus",function(){a.mouseActive===!1&&i.addClass("md-focused")}).on("blur",function(){i.removeClass("md-focused")})}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:i}}function mdCardDirective(e){return{restrict:"E",link:function(t,n,o){e(n)}}}function MdCheckboxDirective(e,t,n,o,r,a,i){function d(t,d){return d.type="checkbox",d.tabindex=d.tabindex||"0",t.attr("role",d.type),function(t,d,l,m){function s(e,n,o){l[e]&&t.$watch(l[e],function(e){o[e]&&d.attr(n,o[e])})}function u(e){var t=e.which||e.keyCode;(t===o.KEY_CODE.SPACE||t===o.KEY_CODE.ENTER)&&(e.preventDefault(),d.hasClass("md-focused")||d.addClass("md-focused"),p(e))}function p(e){d[0].hasAttribute("disabled")||t.$apply(function(){var t=l.ngChecked?l.checked:!m.$viewValue;m.$setViewValue(t,e&&e.type),m.$render()})}function f(){m.$viewValue?d.addClass(c):d.removeClass(c)}m=m||a.fakeNgModel(),r(d),l.ngChecked&&t.$watch(t.$eval.bind(t,l.ngChecked),m.$setViewValue.bind(m)),s("ngDisabled","tabindex",{"true":"-1","false":l.tabindex}),n.expectWithText(d,"aria-label"),e.link.pre(t,{on:angular.noop,0:{}},l,[m]),t.mouseActive=!1,d.on("click",p).on("keypress",u).on("mousedown",function(){t.mouseActive=!0,i(function(){t.mouseActive=!1},100)}).on("focus",function(){t.mouseActive===!1&&d.addClass("md-focused")}).on("blur",function(){d.removeClass("md-focused")}),m.$render=f}}e=e[0];var c="md-checked";return{restrict:"E",transclude:!0,require:"?ngModel",priority:210,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d}}function mdContentDirective(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,n,o){n[0];e(n),t.$broadcast("$mdContentLoaded",n),iosScrollFix(n[0])}}}function iosScrollFix(e){angular.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}function MdDialogDirective(e,t){return{restrict:"E",link:function(n,o,r){t(o),e(function(){var e=o[0].querySelector("md-dialog-content");e&&e.scrollHeight>e.clientHeight&&o.addClass("md-content-overflow")})}}}function MdDialogProvider(e){function t(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}">','<md-dialog-content role="document" tabIndex="0">','<h2 class="md-title">{{ dialog.title }}</h2>',"<p>{{ dialog.content }}</p>","</md-dialog-content>",'<div class="md-actions">','<md-button ng-if="dialog.$type == \'confirm\'" ng-click="dialog.abort()" class="md-primary">',"{{ dialog.cancel }}","</md-button>",'<md-button ng-click="dialog.hide()" class="md-primary">',"{{ dialog.ok }}","</md-button>","</div>","</md-dialog>"].join(""),controller:function(){this.hide=function(){e.hide(!0)},this.abort=function(){e.cancel()}},controllerAs:"dialog",bindToController:!0,theme:t.defaultTheme()}}function n(e,t,n,o,r,a,i,d,c,l,m){function s(e){var t=document.querySelector("md-dialog");t&&!t.contains(e.target)&&(e.stopImmediatePropagation(),t.focus())}function u(e,l,m){function u(){var e=l[0].querySelector(".dialog-close");if(!e){var t=l[0].querySelectorAll(".md-actions button");e=t[t.length-1]}return angular.element(e)}angular.element(t[0].body).addClass("md-dialog-is-showing"),l=n.extractElementByName(l,"md-dialog"),m.parent=angular.element(m.parent),m.popInTarget=angular.element((m.targetEvent||{}).target);var p=u();if(m.hasBackdrop){var h=m.parent[0]==t[0].body&&t[0].documentElement&&t[0].documentElement.scrollTop?angular.element(t[0].documentElement):m.parent,E=h.prop("scrollTop");m.backdrop=angular.element('<md-backdrop class="md-dialog-backdrop md-opaque">'),m.backdrop.css("top",E+"px"),r.inherit(m.backdrop,m.parent),c.enter(m.backdrop,m.parent),l.css("top",E+"px")}var v="dialog",M=p;return"alert"===m.$type&&(v="alertdialog",M=l.find("md-dialog-content")),f(l.find("md-dialog"),v,m),document.addEventListener("focus",s,!0),m.disableParentScroll&&(m.lastOverflow=m.parent.css("overflow"),m.parent.css("overflow","hidden")),b(l,m.parent,m.popInTarget&&m.popInTarget.length&&m.popInTarget).then(function(){g(l,!0),m.escapeToClose&&(m.rootElementKeyupCallback=function(e){e.keyCode===o.KEY_CODE.ESCAPE&&i(a.cancel)},d.on("keyup",m.rootElementKeyupCallback)),m.clickOutsideToClose&&(m.dialogClickOutsideCallback=function(e){e.target===l[0]&&i(a.cancel)},l.on("click",m.dialogClickOutsideCallback)),m.focusOnOpen&&M.focus()})}function p(e,n,o){return angular.element(t[0].body).removeClass("md-dialog-is-showing"),o.backdrop&&c.leave(o.backdrop),o.disableParentScroll&&(o.parent.css("overflow",o.lastOverflow),delete o.lastOverflow),o.escapeToClose&&d.off("keyup",o.rootElementKeyupCallback),o.clickOutsideToClose&&n.off("click",o.dialogClickOutsideCallback),g(n,!1),document.removeEventListener("focus",s,!0),E(n,o.parent,o.popInTarget&&o.popInTarget.length&&o.popInTarget).then(function(){n.remove(),o.popInTarget&&o.popInTarget.focus()})}function f(t,o,r){t.attr({role:o,tabIndex:"-1"});var a=t.find("md-dialog-content");0===a.length&&(a=t);var i=t.attr("id")||"dialog_"+n.nextUid();a.attr("id",i),t.attr("aria-describedby",i),r.ariaLabel?e.expect(t,"aria-label",r.ariaLabel):e.expectAsync(t,"aria-label",function(){var e=a.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")})}function h(e,t){return-1!==t.indexOf(e.nodeName)?!0:void 0}function g(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var r=e.parentNode.children,a=0;a<r.length;a++)e===r[a]||h(r[a],["SCRIPT","STYLE"])||r[a].setAttribute(o,t);n(e=e.parentNode)}}var o="aria-hidden";e=e[0],n(e)}function b(e,t,r){var a=e.find("md-dialog");return t.append(e),v(a,r),l(function(){a.addClass("transition-in").css(o.CSS.TRANSFORM,"")}),n.transitionEndPromise(a)}function E(e,t,o){var r=e.find("md-dialog");return r.addClass("transition-out").removeClass("transition-in"),v(r,o),n.transitionEndPromise(r)}function v(e,t){if(t){var n=t[0].getBoundingClientRect(),r=e[0].getBoundingClientRect(),a=Math.min(.5,n.width/r.width),i=Math.min(.5,n.height/r.height);e.css(o.CSS.TRANSFORM,"translate3d("+(-r.left+n.left+n.width/2-r.width/2)+"px,"+(-r.top+n.top+n.height/2-r.height/2)+"px,0) scale("+a+","+i+")")}}return{hasBackdrop:!0,isolateScope:!0,onShow:u,onRemove:p,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,focusOnOpen:!0,disableParentScroll:!0,transformTemplate:function(e){return'<div class="md-dialog-container">'+e+"</div>"}}}return t.$inject=["$mdDialog","$mdTheming"],n.$inject=["$mdAria","$document","$mdUtil","$mdConstant","$mdTheming","$mdDialog","$timeout","$rootElement","$animate","$$rAF","$q"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","parent"],options:n}).addPreset("alert",{methods:["title","content","ariaLabel","ok","theme"],options:t}).addPreset("confirm",{methods:["title","content","ariaLabel","ok","cancel","theme"],options:t})}function MdDividerDirective(e){return{restrict:"E",link:e}}function GridListDirective(e,t,n,o){function r(r,a,i,d){function c(){for(var e in t.MEDIA)o(e),o.getQuery(t.MEDIA[e]).addListener(A);return o.watchResponsiveAttributes(["md-cols","md-row-height"],i,m)}function l(){d.layoutDelegate=angular.noop,C();for(var e in t.MEDIA)o.getQuery(t.MEDIA[e]).removeListener(A)}function m(e){null==e?d.invalidateLayout():o(e)&&d.invalidateLayout()}function s(e){var t=h(),o={tileSpans:g(t),colCount:b(),rowMode:M(),rowHeight:v(),gutter:E()};if(e||!angular.equals(o,T)){var i=n(o.colCount,o.tileSpans,t).map(function(e,n){return{grid:{element:a,style:f(o.colCount,n,o.gutter,o.rowMode,o.rowHeight)},tiles:e.map(function(e,n){return{element:angular.element(t[n]),style:p(e.position,e.spans,o.colCount,o.rowCount,o.gutter,o.rowMode,o.rowHeight)}})}}).reflow().performance();r.mdOnLayout({$event:{performance:i}}),T=o}}function u(e){return y+e+w}function p(e,t,n,o,r,a,i){var d=1/n*100,c=(n-1)/n,l=k({share:d,gutterShare:c,gutter:r}),m={left:N({unit:l,offset:e.col,gutter:r}),width:x({unit:l,span:t.col,gutter:r}),paddingTop:"",marginTop:"",top:"",height:""};switch(a){case"fixed":m.top=N({unit:i,offset:e.row,gutter:r}),m.height=x({unit:i,span:t.row,gutter:r});break;case"ratio":var s=d/i,u=k({share:s,gutterShare:c,gutter:r});m.paddingTop=x({unit:u,span:t.row,gutter:r}),m.marginTop=N({unit:u,offset:e.row,gutter:r});break;case"fit":var p=(o-1)/o,s=1/o*100,u=k({share:s,gutterShare:p,gutter:r});m.top=N({unit:u,offset:e.row,gutter:r}),m.height=x({unit:u,span:t.row,gutter:r})}return m}function f(e,t,n,o,r){var a={height:"",paddingBottom:""};switch(o){case"fixed":a.height=x({unit:r,span:t,gutter:n});break;case"ratio":var i=1===e?0:(e-1)/e,d=1/e*100,c=d*(1/r),l=k({share:c,gutterShare:i,gutter:n});a.paddingBottom=x({unit:l,span:t,gutter:n});break;case"fit":}return a}function h(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName})}function g(e){return[].map.call(e,function(e){var t=angular.element(e).controller("mdGridTile");return{row:parseInt(o.getResponsiveAttribute(t.$attrs,"md-rowspan"),10)||1,col:parseInt(o.getResponsiveAttribute(t.$attrs,"md-colspan"),10)||1}})}function b(){var e=parseInt(o.getResponsiveAttribute(i,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function E(){return $(o.getResponsiveAttribute(i,"md-gutter")||1)}function v(){var e=o.getResponsiveAttribute(i,"md-row-height");switch(M()){case"fixed":return $(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function M(){var e=o.getResponsiveAttribute(i,"md-row-height");return"fit"==e?"fit":-1!==e.indexOf(":")?"ratio":"fixed"}function $(e){return/\D$/.test(e)?e:e+"px"}a.attr("role","list"),d.layoutDelegate=s;var A=angular.bind(d,d.invalidateLayout),C=c();r.$on("$destroy",l);var T,y=e.startSymbol(),w=e.endSymbol(),k=e(u("share")+"% - ("+u("gutter")+" * "+u("gutterShare")+")"),N=e("calc(("+u("unit")+" + "+u("gutter")+") * "+u("offset")+")"),x=e("calc(("+u("unit")+") * "+u("span")+" + ("+u("span")+" - 1) * "+u("gutter")+")")}return{restrict:"E",controller:GridListController,scope:{mdOnLayout:"&"},link:r}}function GridListController(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e,this.layoutDelegate=angular.noop}function GridLayoutFactory(e){function t(t,n){var a,i,d,c,l,m;return c=e.time(function(){i=o(t,n)}),a={layoutInfo:function(){return i},map:function(t){return l=e.time(function(){var e=a.layoutInfo();d=t(e.positioning,e.rowCount)}),a},reflow:function(t){return m=e.time(function(){var e=t||r;e(d.grid,d.tiles)}),a},performance:function(){return{tileCount:n.length,layoutTime:c,mapTime:l,reflowTime:m,totalTime:c+l+m}}}}function n(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function o(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var i=0,m=0;m-i<t.col;)d>=e?o():(i=l.indexOf(0,d),-1!==i&&-1!==(m=a(i+1))?d=m+1:(i=m=0,o()));return r(i,t.col,t.row),d=i+t.col,{col:i,row:c}}function o(){d=0,c++,r(0,e,-1)}function r(e,t,n){for(var o=e;e+t>o;o++)l[o]=Math.max(l[o]+n,0)}function a(e){var t;for(t=e;t<l.length;t++)if(0!==l[t])return t;return t===l.length?t:void 0}function i(){for(var t=[],n=0;e>n;n++)t.push(0);return t}var d=0,c=0,l=i();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:c+Math.max.apply(Math,l)}}var r=n;return t.animateWith=function(e){r=angular.isFunction(e)?e:n},t}function GridTileDirective(e){function t(t,n,o,r){n.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],o,angular.bind(r,r.invalidateLayout));r.invalidateTiles(),t.$on("$destroy",function(){a(),r.invalidateLayout()}),angular.isDefined(t.$parent.$index)&&t.$watch(function(){return t.$parent.$index},function(e,t){e!==t&&r.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:t}}function GridTileCaptionDirective(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}function mdIconDirective(e,t,n){function o(e,t){return t.mdFontIcon?'<span class="md-font" ng-class="fontIcon"></span>':""}function r(o,r,a){function i(){var e=r.parent();return e.attr("aria-label")||e.text()?!0:e.parent().attr("aria-label")||e.parent().text()?!0:!1}t(r);var d=a.alt||o.fontIcon||o.svgIcon,c=a.$normalize(a.$attr.mdSvgIcon||a.$attr.mdSvgSrc||"");""==a.alt||i()?n.expect(r,"aria-hidden","true"):(n.expect(r,"aria-label",d),n.expect(r,"role","img")),c&&a.$observe(c,function(t){r.empty(),t&&e(t).then(function(e){r.append(e)})})}return{scope:{fontIcon:"@mdFontIcon",svgIcon:"@mdSvgIcon",svgSrc:"@mdSvgSrc"},restrict:"E",template:o,link:r}}function MdIconProvider(){}function ConfigurationItem(e,t){this.url=e,this.iconSize=t||config.defaultIconSize}function MdIconService(e,t,n,o,r){function a(t){return function(n){return h[t]=s(n)?n:new u(n,e[t]),h[t].clone()}}function i(t){var o=e[t];return o?c(o.url).then(function(e){return new u(e,o)}):n.reject(t)}function d(t){function o(e){var o=t.slice(t.lastIndexOf(":")+1),r=e.querySelector("#"+o);return r?new u(r,a):n.reject(t)}var r=t.substring(0,t.lastIndexOf(":"))||"$default",a=e[r];return a?c(a.url).then(o):n.reject(t)}function c(e){return t.get(e,{cache:r}).then(function(e){return angular.element("<div>").append(e.data).find("svg")[0]})}function l(e){var t;return angular.isString(e)&&(t="icon "+e+" not found",o.warn(t)),n.reject(t||e)}function m(e){var t=angular.isString(e)?e:e.message||e.data||e.statusText;return o.warn(t),n.reject(t)}function s(e){return angular.isDefined(e.element)&&angular.isDefined(e.config)}function u(e,t){"svg"!=e.tagName&&(e=angular.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=t,this.prepare()}function p(){var t=this.config?this.config.iconSize:e.defaultIconSize;angular.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+t+" "+t},function(e,t){this.element.setAttribute(t,e)},this),angular.forEach({"pointer-events":"none",display:"block"},function(e,t){this.element.style[t]=e},this)}function f(){return this.element.cloneNode(!0)}var h={},g=/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;return u.prototype={clone:f,prepare:p},function(e){return e=e||"",h[e]?n.when(h[e].clone()):g.test(e)?c(e).then(a(e)):(-1==e.indexOf(":")&&(e="$default:"+e),i(e)["catch"](d)["catch"](l)["catch"](m).then(a(e)))}}function mdListDirective(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function mdListItemDirective(e,t,n){var o=["md-checkbox","md-switch"];return{restrict:"E",controller:"MdListController",compile:function(r,a){function i(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=r.find(t)[0])&&!e.hasAttribute("aria-label")){var a=r.find("p")[0];if(!a)return;e.setAttribute("aria-label","Toggle "+a.textContent)}}function d(t){var n;if("div"==t?(n=angular.element('<div class="md-no-style md-list-item-inner">'),n.append(r.contents()),r.addClass("md-proxy-focus")):(n=angular.element('<md-button class="md-no-style"><div class="md-list-item-inner"></div></md-button>'),n[0].setAttribute("ng-click",r[0].getAttribute("ng-click")),r[0].removeAttribute("ng-click"),n.children().eq(0).append(r.contents())),r[0].setAttribute("tabindex","-1"),r.append(n),u&&u.hasAttribute("ng-click")){e.expect(u,"aria-label");var o=angular.element('<md-button class="md-secondary-container md-icon-button">');o.attr("ng-click",u.getAttribute("ng-click")),u.removeAttribute("ng-click"),u.setAttribute("tabindex","-1"),u.classList.remove("md-secondary"),o.append(u),u=o[0]}u&&(u.hasAttribute("ng-click")||a.ngClick&&c(u))&&(r.addClass("md-with-secondary"),r.append(u))}function c(e){return-1!=o.indexOf(e.nodeName.toLowerCase())}function l(e,r,a,i){function d(){var e=r.children();e.length&&!e[0].hasAttribute("ng-click")&&angular.forEach(o,function(e){angular.forEach(m.querySelectorAll(e),function(e){l.push(e)})})}function c(){(l.length||s)&&(r.addClass("md-clickable"),i.attachRipple(e,angular.element(r[0].querySelector(".md-no-style"))))}var l=[],m=r[0].firstElementChild,s=m&&m.hasAttribute("ng-click");d(),c(),r.hasClass("md-proxy-focus")&&l.length&&angular.forEach(l,function(t){t=angular.element(t),e.mouseActive=!1,t.on("mousedown",function(){e.mouseActive=!0,n(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&r.addClass("md-focused"),t.on("blur",function n(){r.removeClass("md-focused"),t.off("blur",n)})})}),s||l.length||m.addEventListener("keypress",function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName){var n=e.which||e.keyCode;n==t.KEY_CODE.SPACE&&(m.click(),e.preventDefault(),e.stopPropagation())}}),r.off("click"),r.off("keypress"),l.length&&m&&r.children().eq(0).on("click",function(e){m.contains(e.target)&&angular.forEach(l,function(t){e.target===t||t.contains(e.target)||angular.element(t).triggerHandler("click")})})}var m,s,u=r[0].querySelector(".md-secondary");if(r[0].setAttribute("role","listitem"),a.ngClick)d("button");else{for(var p,f=0;p=o[f];++f)if(s=r[0].querySelector(p)){m=!0;break}m?d("div"):r.addClass("md-no-proxy")}return i(),l}}}function MdListController(e,t,n){function o(e,t){var o={};n.attachListControlBehavior(e,t,o)}var r=this;r.attachRipple=o}function MdProgressCircularDirective(e,t){function n(e){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),o}function o(n,o,a){t(o);var i=o[0],d=a.mdDiameter||48,c=d/48;i.style[e.CSS.TRANSFORM]="scale("+c+")",a.$observe("value",function(e){var t=r(e);o.attr("aria-valuenow",t)})}function r(e){return Math.max(0,Math.min(e||0,100))}return{restrict:"E",template:'<div class="md-spinner-wrapper"><div class="md-inner"><div class="md-gap"></div><div class="md-left"><div class="md-half-circle"></div></div><div class="md-right"><div class="md-half-circle"></div></div></div></div>',compile:n}}function MdProgressLinearDirective(e,t,n){function o(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),r}function r(o,r,i){n(r);var d=r[0].querySelector(".md-bar1").style,c=r[0].querySelector(".md-bar2").style,l=angular.element(r[0].querySelector(".md-container"));i.$observe("value",function(e){if("query"!=i.mdMode){var n=a(e);r.attr("aria-valuenow",n),c[t.CSS.TRANSFORM]=transforms[n]}}),i.$observe("mdBufferValue",function(e){d[t.CSS.TRANSFORM]=transforms[a(e)]}),e(function(){l.addClass("md-ready")})}function a(e){return e>100?100:0>e?0:Math.ceil(e||0)}return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:o}}function mdRadioGroupDirective(e,t,n,o){function r(r,a,i,d){function c(){a.hasClass("md-focused")||a.addClass("md-focused")}function l(n){var o=n.which||n.keyCode;switch(o){case t.KEY_CODE.LEFT_ARROW:case t.KEY_CODE.UP_ARROW:n.preventDefault(),m.selectPrevious(),c();break;case t.KEY_CODE.RIGHT_ARROW:case t.KEY_CODE.DOWN_ARROW:n.preventDefault(),m.selectNext(),c();break;case t.KEY_CODE.ENTER:var r=angular.element(e.getClosest(a[0],"form"));r.length>0&&r.triggerHandler("submit")}}n(a);var m=d[0],s=d[1]||e.fakeNgModel();m.init(s),r.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",l).on("mousedown",function(e){r.mouseActive=!0,o(function(){r.mouseActive=!1},100)}).on("focus",function(){r.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function i(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=angular.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);-1!==t&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return d(this.$element,1)},selectPrevious:function(){return d(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)}}}function d(t,n){var o=e.iterator(t[0].querySelectorAll("md-radio-button"),!0);if(o.count()){var r=function(e){return!angular.element(e).attr("disabled")},a=t[0].querySelector("md-radio-button.md-checked"),i=o[0>n?"previous":"next"](a,r)||o.first();angular.element(i).triggerHandler("click")}}return a.prototype=i(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function mdRadioButtonDirective(e,t,n){function o(o,a,i,d){function c(e){a[0].hasAttribute("disabled")||o.$apply(function(){d.setViewValue(i.value,e&&e.type)})}function l(){var e=d.getViewValue()==i.value;e!==s&&(s=e,a.attr("aria-checked",e),e?(a.addClass(r),d.setActiveDescendant(a.attr("id"))):a.removeClass(r))}function m(n,o){function r(){return i.id||"radio_"+t.nextUid()}o.ariaId=r(),n.attr({id:o.ariaId,role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var s;n(a),m(a,o),d.add(l),i.$observe("value",l),a.on("click",c).on("$destroy",function(){d.remove(l)})}var r="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}function SelectDirective(e,t,n,o,r,a,i){function d(r,d){var c=r.find("md-select-label").remove();if(c.length){if(!c[0].firstElementChild){var l=angular.element("<span>");l.append(c.contents()),c.append(l)}}else c=angular.element("<md-select-label><span></span></md-select-label>");if(c.append('<span class="md-select-icon" aria-hidden="true"></span>'),c.addClass("md-select-label"),c.attr("id","select_label_"+t.nextUid()),r.find("md-content").length||r.append(angular.element("<md-content>").append(r.contents())),d.mdOnOpen&&r.find("md-content").prepend(angular.element("<md-progress-circular>").attr("md-mode","indeterminate").attr("ng-hide","$$loadingAsyncDone").wrap("<div>").parent()),d.name){var m=angular.element('<select class="md-visually-hidden">');m.attr({name:"."+d.name,"ng-model":d.ngModel,"aria-hidden":"true",tabindex:"-1"});var s=r.find("md-option");angular.forEach(s,function(e){var t=angular.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?t.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&t.attr("value",e.getAttribute("value")),m.append(t)}),r.parent().append(m)}var u='<div class="md-select-menu-container"><md-select-menu '+(angular.isDefined(d.multiple)?"multiple":"")+">"+r.html()+"</md-select-menu></div>";return r.empty().append(c),d.tabindex=d.tabindex||"0",function(r,d,c,l){function m(){var e=d.attr("placeholder");e||(e=d.find("md-select-label").text()),o.expect(d,"aria-label",e)}function s(){E&&(M=M||E.find("md-select-menu").controller("mdSelectMenu"),$.setLabelText(M.selectedLabels()))}function p(){E=angular.element(u);var e=E.find("md-select-menu");e.data("$ngModelController",A),e.data("$mdSelectController",$),v=r.$new(),E=a(E)(v),M=E.find("md-select-menu").controller("mdSelectMenu")}function f(e){var t=[32,13,38,40];if(-1!=t.indexOf(e.keyCode))e.preventDefault(),h(e);else if(e.keyCode<=90&&e.keyCode>=31){e.preventDefault();var n=M.optNodeForKeyboardSearch(e);if(!n)return;var o=angular.element(n).controller("mdOption");M.isMultiple||M.deselect(Object.keys(M.selected)[0]),M.select(o.hashKey,o.value),M.refreshViewValue(),A.$render()}}function h(){r.$evalAsync(function(){g=!0,e.show({scope:v,preserveScope:!0,skipCompile:!0,element:E,target:d[0],hasBackdrop:!0,loadingAsync:c.mdOnOpen?r.$eval(c.mdOnOpen)||!0:!1}).then(function(e){g=!1})})}var g,b,E,v,M,$=l[0],A=l[1],C=l[2],T=d.find("md-select-label"),y=0!==T.text().length;if(p(),n(d),c.name&&C){var w=d.parent()[0].querySelector('select[name=".'+c.name+'"]');C.$removeControl(angular.element(w).controller())}var k=A.$render;A.$render=function(){k(),s()},$.setLabelText=function(e){if(!y){$.setIsPlaceholder(!e),e=e||c.placeholder||"";var t=y?T:T.children().eq(0);t.text(e)}},$.setIsPlaceholder=function(e){e?T.addClass("md-placeholder"):T.removeClass("md-placeholder")},r.$$postDigest(function(){m(),s()});var N;c.$observe("ngMultiple",function(e){N&&N();var t=i(e);N=r.$watch(function(){return t(r)},function(e,t){(void 0!==e||void 0!==t)&&(e?d.attr("multiple","multiple"):d.removeAttr("multiple"),E&&(M.setMultiple(e),k=A.$render,A.$render=function(){k(),s()},M.refreshViewValue(),A.$render()))})}),c.$observe("disabled",function(e){"string"==typeof e&&(e=!0),(void 0===b||b!==e)&&(b=e,e?(d.attr({tabindex:-1,"aria-disabled":"true"}),d.off("click",h),d.off("keydown",f)):(d.attr({tabindex:c.tabindex,"aria-disabled":"false"}),d.on("click",h),d.on("keydown",f)))}),c.disabled||c.ngDisabled||(d.attr({tabindex:c.tabindex,"aria-disabled":"false"}),d.on("click",h),d.on("keydown",f)),d.attr({role:"combobox",id:"select_"+t.nextUid(),"aria-expanded":"false"}),r.$on("$destroy",function(){g?e.cancel().then(function(){E.remove()}):E.remove()})}}return{restrict:"E",require:["mdSelect","ngModel","?^form"],compile:d,controller:function(){}}}function SelectMenuDirective(e,t,n){function o(e,o,r,a){function i(){o.attr({id:"select_menu_"+t.nextUid(),role:"listbox","aria-multiselectable":l.isMultiple?"true":"false"})}function d(e){(13==e.keyCode||32==e.keyCode)&&c(e)}function c(n){var o=t.getClosest(n.target,"md-option"),r=o&&angular.element(o).data("$mdOptionController");if(o&&r){var a=l.hashGetter(r.value),i=angular.isDefined(l.selected[a]);e.$apply(function(){l.isMultiple?i?l.deselect(a):l.select(a,r.value):i||(l.deselect(Object.keys(l.selected)[0]),l.select(a,r.value)),l.refreshViewValue()})}}var l=a[0],m=a[1];n(o),o.on("click",c),o.on("keypress",d),m&&l.init(m),i()}function r(t,n,o){function r(){var e=i.ngModel.$modelValue||i.ngModel.$viewValue;if(angular.isArray(e)){var t=Object.keys(i.selected),n=e.map(i.hashGetter),o=t.filter(function(e){return-1===n.indexOf(e)});o.forEach(i.deselect),n.forEach(function(t,n){i.select(t,e[n])})}}function a(){var e=i.ngModel.$viewValue||i.ngModel.$modelValue;Object.keys(i.selected).forEach(i.deselect),i.select(i.hashGetter(e),e)}var i=this;i.isMultiple=angular.isDefined(n.multiple),i.selected={},i.options={},t.$watch(function(){return i.options},function(){i.ngModel.$render()},!0);var d;i.setMultiple=function(e){function o(e,t){return angular.isArray(e||t||[])}var c=i.ngModel;i.isMultiple=e,d&&d(),i.isMultiple?(c.$validators["md-multiple"]=o,c.$render=r,t.$watchCollection(n.ngModel,function(e){o(e)&&r(e)})):(delete c.$validators["md-multiple"],c.$render=a)};var c,l,m,s="",u=300;i.optNodeForKeyboardSearch=function(e){c&&clearTimeout(c),c=setTimeout(function(){c=void 0,s="",m=void 0,l=void 0},u),s+=String.fromCharCode(e.keyCode);var t=new RegExp("^"+s,"i");l||(l=o.find("md-option"),m=new Array(l.length),angular.forEach(l,function(e,t){m[t]=e.textContent.trim()}));for(var n=0;n<m.length;++n)if(t.test(m[n]))return l[n]},i.init=function(n){if(i.ngModel=n,n.$options&&n.$options.trackBy){var o={},r=e(n.$options.trackBy);i.hashGetter=function(e,n){return o.$value=e,r(n||t,o)}}else i.hashGetter=function(e){return angular.isObject(e)?"$$object_"+(e.$$mdSelectId||(e.$$mdSelectId=++selectNextId)):e};i.setMultiple(i.isMultiple)},i.selectedLabels=function(){var e=nodesToArray(o[0].querySelectorAll("md-option[selected]"));return e.length?e.map(function(e){return e.textContent}).join(", "):""},i.select=function(e,t){var n=i.options[e];n&&n.setSelected(!0),i.selected[e]=t},i.deselect=function(e){var t=i.options[e];t&&t.setSelected(!1),delete i.selected[e]},i.addOption=function(e,t){if(angular.isDefined(i.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+t.value+'" found.');i.options[e]=t,angular.isDefined(i.selected[e])&&(i.select(e,t.value),i.refreshViewValue())},i.removeOption=function(e){delete i.options[e]},i.refreshViewValue=function(){var e,t=[];for(var n in i.selected)t.push((e=i.options[n])?e.value:i.selected[n]);i.ngModel.$setViewValue(i.isMultiple?t:t[0])}}return r.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu","?ngModel"],controller:r,link:{pre:o}}}function OptionDirective(e,t){function n(e,t){return e.append(angular.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",t.tabindex||"0"),o}function o(n,o,r,a){function i(e,t){
	var o=l.hashGetter(t,n),r=l.hashGetter(e,n);c.hashKey=r,c.value=e,l.removeOption(o,c),l.addOption(r,c)}function d(){o.attr({role:"option","aria-selected":"false",id:"select_option_"+t.nextUid()})}var c=a[0],l=a[1];angular.isDefined(r.ngValue)?n.$watch(r.ngValue,i):angular.isDefined(r.value)?i(r.value):n.$watch(function(){return o.text()},i),n.$$postDigest(function(){r.$observe("selected",function(e){angular.isDefined(e)&&(e?(l.isMultiple||l.deselect(Object.keys(l.selected)[0]),l.select(c.hashKey,c.value)):l.deselect(c.hashKey),l.refreshViewValue(),l.ngModel.$render())})}),e.attachButtonBehavior(n,o),d(),n.$on("$destroy",function(){l.removeOption(c.hashKey,c)})}function r(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return r.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:r,compile:n}}function OptgroupDirective(){function e(e,t){var n=e.find("label");n.length||(n=angular.element("<label>"),e.prepend(n)),t.label&&n.text(t.label)}return{restrict:"E",compile:e}}function SelectProvider(e){function t(e,t,r,a,i,d,c){function l(n,o,l){function m(){l.target.attr("aria-expanded","true")}function u(){function r(e){var t=nodesToArray(p),n=t.indexOf(l.focusedNode);-1===n?n=0:"next"===e&&n<t.length-1?n++:"prev"===e&&n>0&&n--;var o=l.focusedNode=t[n];o&&o.focus()}function i(){r("next")}function d(){r("prev")}function c(){m.isMultiple||(l.restoreFocus=!0,n.$evalAsync(function(){e.hide(m.ngModel.$viewValue)}))}if(!l.isRemoved){var m=l.selectEl.controller("mdSelectMenu")||{};o.addClass("md-clickable"),l.backdrop&&l.backdrop.on("click",function(t){t.preventDefault(),t.stopPropagation(),l.restoreFocus=!1,n.$apply(e.cancel)}),l.selectEl.on("keydown",function(o){switch(o.keyCode){case t.KEY_CODE.SPACE:case t.KEY_CODE.ENTER:var r=a.getClosest(o.target,"md-option");r&&(l.selectEl.triggerHandler({type:"click",target:r}),o.preventDefault());break;case t.KEY_CODE.TAB:case t.KEY_CODE.ESCAPE:o.preventDefault(),l.restoreFocus=!0,n.$apply(e.cancel)}}),l.selectEl.on("keydown",function(e){switch(e.keyCode){case t.KEY_CODE.UP_ARROW:return d();case t.KEY_CODE.DOWN_ARROW:return i();default:if(e.keyCode>=31&&e.keyCode<=90){var n=l.selectEl.controller("mdSelectMenu").optNodeForKeyboardSearch(e);n&&n.focus()}}}),l.selectEl.on("click",c),l.selectEl.on("keydown",function(e){(32==e.keyCode||13==e.keyCode)&&c()})}}if(!l.target)throw new Error('$mdSelect.show() expected a target element in options.target but got "'+l.target+'"!');angular.extend(l,{isRemoved:!1,target:angular.element(l.target),parent:angular.element(l.parent),selectEl:o.find("md-select-menu"),contentEl:o.find("md-content"),backdrop:l.hasBackdrop&&angular.element('<md-backdrop class="md-select-backdrop md-click-catcher">')}),l.resizeFn=function(){r(function(){r(function(){s(n,o,l)})})},angular.element(c).on("resize",l.resizeFn),angular.element(c).on("orientationchange",l.resizeFn),m(),o.removeClass("md-leave");var p=l.selectEl[0].getElementsByTagName("md-option");return l.loadingAsync&&l.loadingAsync.then?l.loadingAsync.then(function(){n.$$loadingAsyncDone=!0,r(function(){r(function(){l.isRemoved||s(n,o,l)})})}):l.loadingAsync&&(n.$$loadingAsyncDone=!0),l.disableParentScroll&&!a.getClosest(l.target,"MD-DIALOG")?l.restoreScroll=a.disableScrollAround(l.target):l.disableParentScroll=!1,d(u,75,!1),l.backdrop&&(i.inherit(l.backdrop,l.parent),l.parent.append(l.backdrop)),l.parent.append(o),r(function(){r(function(){l.isRemoved||s(n,o,l)})}),a.transitionEndPromise(l.selectEl,{timeout:350})}function m(e,t,n){n.isRemoved=!0,t.addClass("md-leave").removeClass("md-clickable"),n.target.attr("aria-expanded","false"),angular.element(c).off("resize",n.resizeFn),angular.element(c).off("orientationchange",n.resizefn),n.resizeFn=void 0;var o=n.selectEl.controller("mdSelect");return o&&o.setLabelText(n.selectEl.controller("mdSelectMenu").selectedLabels()),a.transitionEndPromise(t,{timeout:350}).then(function(){t.removeClass("md-active"),n.backdrop&&n.backdrop.remove(),t[0].parentNode===n.parent[0]&&n.parent[0].removeChild(t[0]),n.disableParentScroll&&n.restoreScroll(),n.restoreFocus&&n.target.focus()})}function s(e,i,d){var l,m=i[0],s=d.target[0].firstElementChild.firstElementChild,u=d.parent[0],p=d.selectEl[0],f=d.contentEl[0],h=u.getBoundingClientRect(),g=s.getBoundingClientRect(),b=!1,E={left:h.left+SELECT_EDGE_MARGIN,top:SELECT_EDGE_MARGIN,bottom:h.height-SELECT_EDGE_MARGIN,right:h.width-SELECT_EDGE_MARGIN-(a.floatingScrollbars()?16:0)},v={top:g.top-E.top,left:g.left-E.left,right:E.right-(g.left+g.width),bottom:E.bottom-(g.top+g.height)},M=h.width-2*SELECT_EDGE_MARGIN,$=f.scrollHeight>f.offsetHeight,A=p.querySelector("md-option[selected]"),C=p.getElementsByTagName("md-option"),T=p.getElementsByTagName("md-optgroup");l=A?A:T.length?T[0]:C.length?C[0]:f.firstElementChild||f,f.offsetWidth>M&&(f.style["max-width"]=M+"px"),b&&(f.style["min-width"]=g.width+"px"),$&&p.classList.add("md-overflow");var y=p.getBoundingClientRect(),w=o(l);if(l){var k=c.getComputedStyle(l);w.paddingLeft=parseInt(k.paddingLeft,10)||0,w.paddingRight=parseInt(k.paddingRight,10)||0}var N=l;if("MD-OPTGROUP"===(N.tagName||"").toUpperCase()&&(N=C[0]||f.firstElementChild||f),$){var x=f.offsetHeight/2;f.scrollTop=w.top+w.height/2-x,v.top<x?f.scrollTop=Math.min(w.top,f.scrollTop+x-v.top):v.bottom<x&&(f.scrollTop=Math.max(w.top+w.height-y.height,f.scrollTop-x+v.bottom))}var _,H,S;b?(_=g.left,H=g.top+g.height,S="50% 0",H+y.height>E.bottom&&(H=g.top-y.height,S="50% 100%")):(_=g.left+w.left-w.paddingLeft,H=Math.floor(g.top+g.height/2-w.height/2-w.top+f.scrollTop),S=w.left+g.width/2+"px "+(w.top+w.height/2-f.scrollTop)+"px 0px",m.style.minWidth=g.width+w.paddingLeft+w.paddingRight+"px");var D=m.getBoundingClientRect();m.style.left=n(E.left,_,E.right-D.width)+"px",m.style.top=n(E.top,H,E.bottom-D.height)+"px",p.style[t.CSS.TRANSFORM_ORIGIN]=S,p.style[t.CSS.TRANSFORM]="scale("+Math.min(g.width/y.width,1)+","+Math.min(g.height/y.height,1)+")",r(function(){i.addClass("md-active"),p.style[t.CSS.TRANSFORM]="",N&&(d.focusedNode=N,N.focus())})}return{parent:"body",onShow:l,onRemove:m,hasBackdrop:!0,disableParentScroll:!0,themable:!0}}function n(e,t,n){return Math.max(e,Math.min(t,n))}function o(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}return t.$inject=["$mdSelect","$mdConstant","$$rAF","$mdUtil","$mdTheming","$timeout","$window"],e("$mdSelect").setDefaults({methods:["target"],options:t})}function nodesToArray(e){for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t}function SidenavService(e,t){return function(n){function o(){return e.when(n).then(function(e){return i=e,e})}var r,a="SideNav '"+n+"' is not available!",i=e.get(n);return i||e.notFoundError(n),r={isOpen:function(){return i&&i.isOpen()},isLockedOpen:function(){return i&&i.isLockedOpen()},toggle:function(){return i?i.toggle():t.reject(a)},open:function(){return i?i.open():t.reject(a)},close:function(){return i?i.close():t.reject(a)},then:function(e){var n=i?t.when(i):o();return n.then(e||angular.noop)}}}}function SidenavFocusDirective(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){o.focusElement(t)}}}function SidenavDirective(e,t,n,o,r,a,i,d,c,l){function m(m,s,u,p){function f(e,n){m.isLockedOpen=e,e===n?s.toggleClass("md-locked-open",!!e):t[e?"addClass":"removeClass"](s,"md-locked-open"),y.toggleClass("md-locked-open",!!e)}function h(e){var n=s.parent();n[e?"on":"off"]("keydown",E),y[e?"on":"off"]("click",v),e&&($=l[0].activeElement);var o=p.focusElement();return g(e),A=c.all([e?t.enter(y,n):t.leave(y),t[e?"removeClass":"addClass"](s,"md-closed")]).then(function(){m.isOpen&&o&&o.focus()})}function g(e){var t=s.parent();e?(M=t.css("overflow"),t.css("overflow","hidden")):angular.isDefined(M)&&(t.css("overflow",M),M=void 0)}function b(t){if(m.isOpen==t)return c.when(!0);var n=c.defer();return m.isOpen=t,e(function(){A.then(function(e){m.isOpen||($&&$.focus(),$=null),n.resolve(e)})},0,!1),n.promise}function E(e){var t=e.keyCode===a.KEY_CODE.ESCAPE;return t?v(e):c.when(!0)}function v(e){return e.preventDefault(),e.stopPropagation(),p.close()}var M,$=null,A=c.when(!0),C=n(u.mdIsLockedOpen),T=function(){return C(m.$parent,{$media:function(e){return o.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),r(e)},$mdMedia:r})},y=i('<md-backdrop class="md-sidenav-backdrop md-opaque ng-enter">')(m);s.on("$destroy",p.destroy),d.inherit(y,s),m.$watch(T,f),m.$watch("isOpen",h),p.$toggleOpen=b,p.focusElement(p.focusElement()||s)}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed"),e.attr("tabIndex","-1"),m}}}function SidenavController(e,t,n,o,r){var a,i=this;i.isOpen=function(){return!!e.isOpen},i.isLockedOpen=function(){return!!e.isLockedOpen},i.open=function(){return i.$toggleOpen(!0)},i.close=function(){return i.$toggleOpen(!1)},i.toggle=function(){return i.$toggleOpen(!e.isOpen)},i.focusElement=function(e){return angular.isDefined(e)&&(a=e),a},i.$toggleOpen=function(){return r.when(e.isOpen)},i.destroy=o.register(i,n.mdComponentId)}function SliderDirective(e,t,n,o,r,a,i,d){function c(e,t){return e.attr({tabIndex:0,role:"slider"}),n.expect(e,"aria-label"),l}function l(n,c,l,m){function s(){b(),$(),g()}function u(e){Y=parseFloat(e),c.attr("aria-valuemin",e),s()}function p(e){W=parseFloat(e),c.attr("aria-valuemax",e),s()}function f(e){z=parseFloat(e),g()}function h(e){c.attr("aria-disabled",!!e)}function g(){if(angular.isDefined(l.mdDiscrete)){var e=Math.floor((W-Y)/z);if(!X){var n=t.getComputedStyle(G[0]);X=angular.element('<canvas style="position:absolute;">'),Z=X[0].getContext("2d"),Z.fillStyle=n.backgroundColor||"black",G.append(X)}var o=E();X[0].width=o.width,X[0].height=o.height;for(var r,a=0;e>=a;a++)r=Math.floor(o.width*(a/e)),Z.fillRect(r-1,0,2,o.height)}}function b(){Q=j[0].getBoundingClientRect()}function E(){return U(),Q}function v(e){if(!c[0].hasAttribute("disabled")){var t;e.keyCode===r.KEY_CODE.LEFT_ARROW?t=-z:e.keyCode===r.KEY_CODE.RIGHT_ARROW&&(t=z),t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),n.$evalAsync(function(){M(m.$viewValue+t)}))}}function M(e){m.$setViewValue(A(C(e)))}function $(){isNaN(m.$viewValue)&&(m.$viewValue=m.$modelValue);var e=(m.$viewValue-Y)/(W-Y);n.modelValue=m.$viewValue,c.attr("aria-valuenow",m.$viewValue),T(e),B.text(m.$viewValue)}function A(e){return angular.isNumber(e)?Math.max(Y,Math.min(W,e)):void 0}function C(e){return angular.isNumber(e)?Math.round(e/z)*z:void 0}function T(e){q.css("width",100*e+"%"),F.css("left",100*e+"%"),c.toggleClass("md-min",0===e)}function y(e){if(!R()){c.addClass("active"),c[0].focus(),b();var t=I(D(e.pointer.x)),o=A(C(t));n.$apply(function(){M(o),T(O(o))})}}function w(e){if(!R()){c.removeClass("dragging active");var t=I(D(e.pointer.x)),o=A(C(t));n.$apply(function(){M(o),$()})}}function k(e){R()||(J=!0,e.stopPropagation(),c.addClass("dragging"),_(e))}function N(e){J&&(e.stopPropagation(),_(e))}function x(e){J&&(e.stopPropagation(),J=!1)}function _(e){ee?S(e.pointer.x):H(e.pointer.x)}function H(e){n.$evalAsync(function(){M(I(D(e)))})}function S(e){var t=I(D(e)),n=A(C(t));T(D(e)),B.text(n)}function D(e){return Math.max(0,Math.min(1,(e-Q.left)/Q.width))}function I(e){return Y+e*(W-Y)}function O(e){return(e-Y)/(W-Y)}a(c),m=m||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]};var L=l.ngDisabled&&d(l.ngDisabled),R=L?function(){return L(n.$parent)}:angular.noop,P=angular.element(c[0].querySelector(".md-thumb")),B=angular.element(c[0].querySelector(".md-thumb-text")),F=P.parent(),j=angular.element(c[0].querySelector(".md-track-container")),q=angular.element(c[0].querySelector(".md-track-fill")),G=angular.element(c[0].querySelector(".md-track-ticks")),U=o.throttle(b,5e3);l.min?l.$observe("min",u):u(0),l.max?l.$observe("max",p):p(100),l.step?l.$observe("step",f):f(1);var V=angular.noop;l.ngDisabled&&(V=n.$parent.$watch(l.ngDisabled,h)),i.register(c,"drag"),c.on("keydown",v).on("$md.pressdown",y).on("$md.pressup",w).on("$md.dragstart",k).on("$md.drag",N).on("$md.dragend",x),setTimeout(s);var K=e.throttle(s);angular.element(t).on("resize",K),n.$on("$destroy",function(){angular.element(t).off("resize",K),V()}),m.$render=$,m.$viewChangeListeners.push($),m.$formatters.push(A),m.$formatters.push(C);var Y,W,z,X,Z,Q={};b();var J=!1,ee=angular.isDefined(l.mdDiscrete)}return{scope:{},require:"?ngModel",template:'<div class="md-slider-wrapper">        <div class="md-track-container">          <div class="md-track"></div>          <div class="md-track md-track-fill"></div>          <div class="md-track-ticks"></div>        </div>        <div class="md-thumb-container">          <div class="md-thumb"></div>          <div class="md-focus-thumb"></div>          <div class="md-focus-ring"></div>          <div class="md-sign">            <span class="md-thumb-text"></span>          </div>          <div class="md-disabled-thumb"></div>        </div>      </div>',compile:c}}function MdSticky(e,t,n,o,r){function a(e){function n(e,t){t.addClass("md-sticky-clone"),t.css("top",f+"px");var n={element:e,clone:t};return p.items.push(n),s.parent().prepend(n.clone),u(),function(){p.items.forEach(function(t,n){t.element[0]===e[0]&&(p.items.splice(n,1),t.clone.remove())}),u()}}function r(){p.items.forEach(a),p.items=p.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=s.prop("scrollTop"),n=p.items.length-1;n>=0;n--)if(t>p.items[n].top){e=p.items[n];break}c(e)}function a(e){var t=e.element[0];for(e.top=0,e.left=0;t&&t!==s[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t=t.offsetParent;e.height=e.element.prop("offsetHeight"),e.clone.css("margin-left",e.left+"px")}function i(){var e=s.prop("scrollTop"),t=e>(i.prevScrollTop||0);i.prevScrollTop=e,0===e?c(null):t&&p.next?p.next.top-e<=0?c(p.next):p.current&&(p.next.top-e<=p.next.height?m(p.current,p.next.top-p.next.height-e):m(p.current,null)):!t&&p.current&&(e<p.current.top&&c(p.prev),p.current&&p.next&&(e>=p.next.top-p.current.height?m(p.current,p.next.top-e-p.current.height):m(p.current,null)))}function c(e){if(p.current!==e){p.current&&(m(p.current,null),l(p.current,null)),e&&l(e,"active"),p.current=e;var t=p.items.indexOf(e);p.next=p.items[t+1],p.prev=p.items[t-1],l(p.next,"next"),l(p.prev,"prev")}}function l(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function m(e,n){e&&(null===n||void 0===n?e.translateY&&(e.translateY=null,e.clone.css(t.CSS.TRANSFORM,"")):(e.translateY=n,e.clone.css(t.CSS.TRANSFORM,"translate3d("+e.left+"px,"+n+"px,0)")))}var s=e.$element,u=o.throttle(r);d(s),s.on("$scrollstart",u),s.on("$scroll",i);var p,f=s.prop("offsetTop");return p={prev:null,current:null,next:null,items:[],add:n,refreshElements:r}}function i(t){var n,o=angular.element("<div>");e[0].body.appendChild(o[0]);for(var r=["sticky","-webkit-sticky"],a=0;a<r.length;++a)if(o.css({position:r[a],top:0,"z-index":2}),o.css("position")==r[a]){n=r[a];break}return o.remove(),n}function d(e){function t(){+r.now()-a>i?(n=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),o(t))}var n,a,i=200;e.on("scroll touchmove",function(){n||(n=!0,o(t),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),a=+r.now()})}var c=i();return function(e,t,n){var o=t.controller("mdContent");if(o)if(c)t.css({position:c,top:0,"z-index":2});else{var r=o.$element.data("$$sticky");r||(r=a(o),o.$element.data("$$sticky",r));var i=r.add(t,n||t.clone());e.$on("$destroy",i)}}}function MdSubheaderDirective(e,t,n){return{restrict:"E",replace:!0,transclude:!0,template:'<h2 class="md-subheader"><div class="md-subheader-inner"><span class="md-subheader-content"></span></div></h2>',compile:function(o,r,a){var i=o[0].outerHTML;return function(o,r,d){function c(e){return angular.element(e[0].querySelector(".md-subheader-content"))}n(r),a(o,function(e){c(r).append(e)}),r.hasClass("md-no-sticky")||a(o,function(a){var d=t(angular.element(i))(o);n(d),c(d).append(a),e(o,r,d)})}}}}function getDirective(e){function t(e){function t(t,r,a){var i=e(a[n]);r.on(o,function(e){t.$apply(function(){i(t,{$event:e})})})}return{restrict:"A",link:t}}var n="md"+e,o="$md."+e.toLowerCase();return t.$inject=["$parse"],t}function MdSwitch(e,t,n,o,r,a,i,d){function c(e,t){var o=l.compile(e,t);return e.addClass("md-dragging"),function(e,t,c,l){function m(n){f(e)||(n.stopPropagation(),t.addClass("md-dragging"),b={width:h.prop("offsetWidth")},t.removeClass("transition"))}function s(e){if(b){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/b.width,n=l.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),h.css(r.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),b.translate=n}}function u(e){if(b){e.stopPropagation(),t.removeClass("md-dragging"),h.css(r.CSS.TRANSFORM,"");var n=l.$viewValue?b.translate<.5:b.translate>.5;n&&p(!l.$viewValue),b=null}}function p(t){e.$apply(function(){l.$setViewValue(t),l.$render()})}l=l||n.fakeNgModel();var f=a(c.ngDisabled),h=angular.element(t[0].querySelector(".md-thumb-container")),g=angular.element(t[0].querySelector(".md-container"));i(function(){t.removeClass("md-dragging")}),o(e,t,c,l),angular.isDefined(c.ngDisabled)&&e.$watch(f,function(e){t.attr("tabindex",e?-1:0)}),d.register(g,"drag"),g.on("$md.dragstart",m).on("$md.drag",s).on("$md.dragend",u);var b}}var l=e[0];return{restrict:"E",priority:210,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:"?ngModel",compile:c}}function MdToastDirective(){return{restrict:"E"}}function MdToastProvider(e){function t(e,t,o,r){function a(a,i,c){return i=r.extractElementByName(i,"md-toast"),n=c.content,i.addClass(c.position.split(" ").map(function(e){return"md-"+e}).join(" ")),c.parent.addClass(d(c.position)),c.onSwipe=function(t,n){i.addClass("md-"+t.type.replace("$md.","")),e(o.cancel)},i.on("$md.swipeleft $md.swiperight",c.onSwipe),t.enter(i,c.parent)}function i(e,n,o){return n.off("$md.swipeleft $md.swiperight",o.onSwipe),o.parent.removeClass(d(o.position)),t.leave(n)}function d(e){return"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom")}return{onShow:a,onRemove:i,position:"bottom left",themable:!0,hideDelay:3e3}}var n,o=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule"],options:t}).addPreset("simple",{argOption:"content",methods:["content","action","highlightAction","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){var o={template:['<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">',"<span flex>{{ toast.content }}</span>",'<md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()" ng-class="{\'md-highlight\': toast.highlightAction}">',"{{ toast.action }}","</md-button>","</md-toast>"].join(""),controller:["$scope",function(t){var o=this;t.$watch(function(){return n},function(){o.content=n}),this.resolve=function(){e.hide()}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0};return o}]}).addMethod("updateContent",function(e){n=e});return t.$inject=["$timeout","$animate","$mdToast","$mdUtil"],o}function mdToolbarDirective(e,t,n,o,r,a){return{restrict:"E",controller:angular.noop,link:function(i,d,c){function l(){function o(t,n){d.parent()[0]===n.parent()[0]&&(u&&u.off("scroll",g),n.on("scroll",g),n.attr("scroll-shrink","true"),u=n,e(l))}function l(){s=d.prop("offsetHeight"),u.css("margin-top",-s*h+"px"),m()}function m(e){var n=e?e.target.scrollTop:f;b(),p=Math.min(s/h,Math.max(0,p+n-f)),d.css(t.CSS.TRANSFORM,"translate3d(0,"+-p*h+"px,0)"),u.css(t.CSS.TRANSFORM,"translate3d(0,"+(s-p)*h+"px,0)"),f=n,d.hasClass("md-whiteframe-z1")?p||a(function(){r.removeClass(d,"md-whiteframe-z1")}):p&&a(function(){r.addClass(d,"md-whiteframe-z1")})}var s,u,p=0,f=0,h=c.mdShrinkSpeedFactor||.5,g=e.throttle(m),b=n.debounce(l,5e3);i.$on("$mdContentLoaded",o)}o(d),angular.isDefined(c.mdScrollShrink)&&l()}}}function MdTooltipDirective(e,t,n,o,r,a,i,d,c){function l(l,u,p){function f(){h(),b(),M(),g()}function h(){angular.isDefined(p.mdDelay)||(l.delay=m)}function g(){l.$watch("visible",function(e){e?A():C()}),l.$on("$destroy",function(){l.visible=!1,u.remove(),angular.element(t).off("resize",H)})}function b(){u.detach(),u.attr("role","tooltip"),u.attr("id",p.id||"tooltip_"+r.nextUid())}function E(){for(var e=u.parent();"none"==t.getComputedStyle(e[0])["pointer-events"];)e=e.parent();return e}function v(){for(var e=u.parent()[0];e&&e!==i[0]&&e!==document.body&&(!e.tagName||"md-content"!=e.tagName.toLowerCase());)e=e.parentNode;return e}function M(){var e=l.hasOwnProperty("autohide")?l.autohide:p.hasOwnProperty("mdAutohide");y.on("focus mouseenter touchstart",function(){$(!0)}),y.on("blur mouseleave touchend touchcancel",function(){(o[0].activeElement!==y[0]||e)&&$(!1)}),angular.element(t).on("resize",H)}function $(t){$.value=!!t,$.queued||(t?($.queued=!0,e(function(){l.visible=$.value,$.queued=!1},l.delay)):e(function(){l.visible=!1}))}function A(){_.append(u);var e=t.getComputedStyle(u[0]);return angular.isDefined(e.display)&&"none"==e.display?void u.detach():(y.attr("aria-describedby",u.attr("id")),T(),void angular.forEach([u,w,k],function(e){d.addClass(e,"md-show")}))}function C(){y.removeAttr("aria-describedby"),c.all([d.removeClass(k,"md-show"),d.removeClass(w,"md-show"),d.removeClass(u,"md-show")]).then(function(){l.visible||u.detach()})}function T(){function e(){var e="left"===N||"right"===N?2*Math.sqrt(Math.pow(o.width,2)+Math.pow(o.height/2,2)):2*Math.sqrt(Math.pow(o.width/2,2)+Math.pow(o.height,2)),t="left"===N?{left:100,top:50}:"right"===N?{left:0,top:50}:"top"===N?{left:50,top:100}:{left:50,top:0};w.css({width:e+"px",height:e+"px",left:t.left+"%",top:t.top+"%"})}function t(e){var t={left:e.left,top:e.top};return t.left=Math.min(t.left,_.prop("scrollWidth")-o.width-s),t.left=Math.max(t.left,s),t.top=Math.min(t.top,_.prop("scrollHeight")-o.height-s),t.top=Math.max(t.top,s),t}function n(e){return"left"===e?{left:a.left-o.width-s,top:a.top+a.height/2-o.height/2}:"right"===e?{left:a.left+a.width+s,top:a.top+a.height/2-o.height/2}:"top"===e?{left:a.left+a.width/2-o.width/2,top:a.top-o.height-s}:{left:a.left+a.width/2-o.width/2,top:a.top+a.height+s}}var o=r.offsetRect(u,_),a=r.offsetRect(y,_),i=n(N);N?i=t(i):i.top>u.prop("offsetParent").scrollHeight-o.height-s&&(i=t(n("top"))),u.css({top:i.top+"px",left:i.left+"px"}),e()}a(u);var y=E(),w=angular.element(u[0].getElementsByClassName("md-background")[0]),k=angular.element(u[0].getElementsByClassName("md-content")[0]),N=p.mdDirection,x=v(),_=angular.element(x||document.body),H=n.throttle(function(){l.visible&&T()});return f()}var m=300,s=8;return{restrict:"E",transclude:!0,priority:210,template:'        <div class="md-background"></div>        <div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible",delay:"=?mdDelay",autohide:"=?mdAutohide"},link:l}}function MdAutocompleteCtrl(e,t,n,o,r,a,i,d,c){function l(){p(),r(function(){f(),u(),s()})}function m(){function e(){var e=q.ul.getBoundingClientRect(),n={};e.right>o.right-MENU_PADDING&&(n.left=t.right-e.width+"px"),q.$.ul.css(n)}if(!q)return r(m,0,!1);var t=q.wrap.getBoundingClientRect(),n=q.snap.getBoundingClientRect(),o=q.root.getBoundingClientRect(),a=n.bottom-o.top,i=o.bottom-n.top,d=t.left-o.left,c=t.width,l={left:d+"px",minWidth:c+"px",maxWidth:Math.max(t.right-o.left,o.right-t.left)-MENU_PADDING+"px"};a>i&&o.height-t.bottom-MENU_PADDING<MAX_HEIGHT?(l.top="auto",l.bottom=i+"px",l.maxHeight=Math.min(MAX_HEIGHT,t.top-o.top-MENU_PADDING)+"px"):(l.top=a+"px",l.bottom="auto",l.maxHeight=Math.min(MAX_HEIGHT,o.bottom-t.bottom-MENU_PADDING)+"px"),q.$.ul.css(l),r(e,0,!1)}function s(){q.$.root.length&&(a(q.$.ul),q.$.ul.detach(),q.$.root.append(q.$.ul),d.pin&&d.pin(q.$.ul,c))}function u(){e.autofocus&&q.input.focus()}function p(){var t=parseInt(e.delay,10)||0;e.$watch("searchText",t?n.debounce($,t):$),v(b),e.$watch("selectedItem",E),e.$watch("$mdAutocompleteCtrl.hidden",function(e,t){!e&&t&&m()}),angular.element(i).on("resize",m)}function f(){q={main:t[0],ul:t.find("ul")[0],input:t.find("input")[0],wrap:t.find("md-autocomplete-wrap")[0],root:document.body},q.li=q.ul.getElementsByTagName("li"),q.snap=h(),q.$=g(q)}function h(){for(var e=t;e.length;e=e.parent())if(angular.isDefined(e.attr("md-autocomplete-snap")))return e[0];return q.wrap}function g(e){var t={};for(var n in e)t[n]=angular.element(e[n]);return t}function b(t,n){t&&(e.searchText=w(t)),e.itemChange&&t!==n&&e.itemChange(k(t))}function E(e,t){for(var n=0;n<K.length;++n)K[n](e,t)}function v(e){-1==K.indexOf(e)&&K.push(e)}function M(e){var t=K.indexOf(e);-1!=t&&K.splice(t,1)}function $(t,n){B.index=N(),t!==n&&t!==w(e.selectedItem)&&(e.selectedItem=null,e.textChange&&t!==n&&e.textChange(k(e.selectedItem)),H()?P():(B.loading=!1,B.matches=[],B.hidden=x(),O()))}function A(){Y=!1,V||(B.hidden=!0)}function C(){Y=!0,angular.isString(e.searchText)||(e.searchText=""),e.minLength>0||(B.hidden=x(),B.hidden||P())}function T(e){switch(e.keyCode){case o.KEY_CODE.DOWN_ARROW:if(B.loading)return;e.preventDefault(),B.index=Math.min(B.index+1,B.matches.length-1),R(),L();break;case o.KEY_CODE.UP_ARROW:if(B.loading)return;e.preventDefault(),B.index=B.index<0?B.matches.length-1:Math.max(0,B.index-1),R(),L();break;case o.KEY_CODE.TAB:case o.KEY_CODE.ENTER:if(B.hidden||B.loading||B.index<0||B.matches.length<1)return;e.preventDefault(),S(B.index);break;case o.KEY_CODE.ESCAPE:B.matches=[],B.hidden=!0,B.index=N()}}function y(){return angular.isNumber(e.minLength)?e.minLength:1}function w(t){return t&&e.itemText?e.itemText(k(t)):t}function k(e){if(e){var t={};return B.itemName&&(t[B.itemName]=e),t}}function N(){return e.autoselect?0:-1}function x(){return H()?void 0:!0}function _(){return w(B.matches[B.index])}function H(){return e.searchText.length>=y()}function S(t){e.selectedItem=B.matches[t],e.searchText=w(e.selectedItem)||e.searchText,B.hidden=!0,B.index=0,B.matches=[]}function D(){e.searchText="",S(-1);var t=document.createEvent("CustomEvent");t.initCustomEvent("input",!0,!0,{value:e.searchText}),q.input.dispatchEvent(t),q.input.focus()}function I(t){function n(n){U[r]=n,B.loading=!1,t===e.searchText&&(G=null,B.matches=n,B.hidden=x(),O(),m())}var o=e.$parent.$eval(j),r=t.toLowerCase();angular.isArray(o)?n(o):(B.loading=!0,o.success&&o.success(n),o.then&&o.then(n),o.error&&o.error(function(){B.loading=!1}))}function O(){if(!B.hidden)switch(B.matches.length){case 0:return B.messages.splice(0);case 1:return B.messages.push({display:"There is 1 match available."});default:return B.messages.push({display:"There are "+B.matches.length+" matches available."})}}function L(){B.messages.push({display:_()})}function R(){var e=q.li[B.index],t=e.offsetTop,n=t+e.offsetHeight,o=q.ul.clientHeight;t<q.ul.scrollTop?q.ul.scrollTop=t:n>q.ul.scrollTop+o&&(q.ul.scrollTop=n-o)}function P(){var t=e.searchText,n=t.toLowerCase();G&&G.cancel&&(G.cancel(),G=null),!e.noCache&&U[n]?(B.matches=U[n],O()):I(t),B.hidden=x()}var B=this,F=e.itemsExpr.split(/ in /i),j=F[1],q=null,G=null,U={},V=!1,K=[],Y=!1;return B.scope=e,B.parent=e.$parent,B.itemName=F[0],B.matches=[],B.loading=!1,B.hidden=!0,B.index=null,B.messages=[],B.id=n.nextUid(),B.keydown=T,B.blur=A,B.focus=C,B.clear=D,B.select=S,B.getCurrentDisplayValue=_,B.registerSelectedItemWatcher=v,B.unregisterSelectedItemWatcher=M,B.listEnter=function(){V=!0},B.listLeave=function(){V=!1,Y||(B.hidden=!0)},B.mouseUp=function(){q.input.focus()},l()}function MdAutocomplete(e,t){function n(n,o,r){r.$observe("disabled",function(e){n.isDisabled=e}),t.initOptionalProperties(n,r,{searchText:null,selectedItem:null}),e(o)}return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",link:n,scope:{name:"@",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass"},template:function(e,t){function n(){var t=e.find("md-item-template").remove();return t.length?t.html():e.html()}function o(){var t=e.find("md-not-found").remove();return t.length?t.html():""}var r=n(),a=o();return'        <md-autocomplete-wrap role="listbox">          <md-input-container ng-if="floatingLabel">            <label>{{floatingLabel}}</label>            <input type="text"                id="fl-input-{{$mdAutocompleteCtrl.id}}"                name="{{name}}"                autocomplete="off"                ng-disabled="isDisabled"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur()"                ng-focus="$mdAutocompleteCtrl.focus()"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{floatingLabel}}"                aria-autocomplete="list"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>          </md-input-container>          <input type="text"              id="input-{{$mdAutocompleteCtrl.id}}"              name="{{name}}"              ng-if="!floatingLabel"              autocomplete="off"              ng-disabled="isDisabled"              ng-model="$mdAutocompleteCtrl.scope.searchText"              ng-keydown="$mdAutocompleteCtrl.keydown($event)"              ng-blur="$mdAutocompleteCtrl.blur()"              ng-focus="$mdAutocompleteCtrl.focus()"              placeholder="{{placeholder}}"              aria-owns="ul-{{$mdAutocompleteCtrl.id}}"              aria-label="{{placeholder}}"              aria-autocomplete="list"              aria-haspopup="true"              aria-activedescendant=""              aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>          <button              type="button"              tabindex="-1"              ng-if="$mdAutocompleteCtrl.scope.searchText && !isDisabled"              ng-click="$mdAutocompleteCtrl.clear()">            <md-icon md-svg-icon="md-cancel"></md-icon>            <span class="md-visually-hidden">Clear</span>          </button>          <md-progress-linear              ng-if="$mdAutocompleteCtrl.loading"              md-mode="indeterminate"></md-progress-linear>          <ul role="presentation"              class="md-autocomplete-suggestions {{menuClass || \'\'}}"              id="ul-{{$mdAutocompleteCtrl.id}}"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()">            <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"                ng-class="{ selected: index === $mdAutocompleteCtrl.index }"                ng-hide="$mdAutocompleteCtrl.hidden"                ng-click="$mdAutocompleteCtrl.select(index)"                md-autocomplete-list-item="$mdAutocompleteCtrl.itemName">                '+r+"            </li>            "+function(){return a?'<li ng-if="!$mdAutocompleteCtrl.matches.length"                        ng-hide="$mdAutocompleteCtrl.hidden"                        md-autocomplete-parent-scope>'+a+"</li>":""}()+'          </ul>        </md-autocomplete-wrap>        <aria-status            class="md-visually-hidden"            role="status"            aria-live="assertive">          <p ng-repeat="message in $mdAutocompleteCtrl.messages">{{message.display}}</p>        </aria-status>';
	
	}}}function MdHighlightCtrl(e,t,n){function o(e){return e?e.replace(/[\\\^\$\*\+\?\.\(\)\|\{\}\[\]]/g,"\\$&"):e}function r(e,t){var n="";return t.indexOf("^")>=1&&(n+="^"),n+=e,t.indexOf("$")>=1&&(n+="$"),new RegExp(o(n),t.replace(/[\$\^]/g,""))}var a=t.attr("md-highlight-text"),i=n(t.text())(e),d=t.attr("md-highlight-flags")||"",c=e.$watch(a,function(e){var n=r(e,d),o=i.replace(n,'<span class="highlight">$&</span>');t.html(o)});t.on("$destroy",function(){c()})}function MdHighlight(){return{terminal:!0,scope:!1,controller:"MdHighlightCtrl"}}function MdAutocompleteListItem(e,t){function n(n,o,r){var a=n.$parent.$mdAutocompleteCtrl,i=a.parent.$new(!1,a.parent),d=a.scope.$eval(r.mdAutocompleteListItem);i[d]=n.item,e(o.contents())(i),o.attr({role:"option",id:"item_"+t.nextUid()})}return{terminal:!0,link:n,scope:!1}}function MdAutocompleteParentScope(e,t){function n(t,n,o){var r=t.$parent.$mdAutocompleteCtrl;e(n.contents())(r.parent)}return{restrict:"A",terminal:!0,link:n,scope:!1}}function MdChip(e){function t(t,n){return t.append(DELETE_HINT_TEMPLATE),function(t,n,o,r){n.addClass("md-chip"),e(n),r&&angular.element(n[0].querySelector(".md-chip-content")).on("blur",function(){r.selectedChip=-1})}}return{restrict:"E",require:"^?mdChips",compile:t}}function MdChipRemove(e){function t(t,n,o,r){n.on("click",function(e){t.$apply(function(){r.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,ariaHidden:!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}function MdChipTransclude(e,t){function n(t,n,o){var r=t.$parent.$mdChipsCtrl,a=r.parent.$new(!1,r.parent);a.$$replacedScope=t,a.$chip=t.$chip,a.$mdChipsCtrl=r,n.html(r.$scope.$eval(o.mdChipTransclude)),e(n.contents())(a)}return{restrict:"EA",terminal:!0,link:n,scope:!1}}function MdChipsCtrl(e,t,n,o,r){this.$timeout=r,this.$mdConstant=t,this.$scope=e,this.parent=e.$parent,this.$log=n,this.$element=o,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useMdOnAppend=!1}function MdChips(e,t,n,o){function r(r,a){function i(e){if(a.ngModel){var t=d[0].querySelector(e);return t&&t.outerHTML}}var d=a.$mdUserTemplate;a.$mdUserTemplate=null;var c=i("[md-chip-remove]")||CHIP_REMOVE_TEMPLATE,l=i("md-chip-template")||CHIP_DEFAULT_TEMPLATE,m=i("md-autocomplete")||i("input")||CHIP_INPUT_TEMPLATE,s=d.find("md-chip");return function(r,i,d,u){t.initOptionalProperties(r,a),e(i);var p=u[0];if(p.chipContentsTemplate=l,p.chipRemoveTemplate=c,p.chipInputTemplate=m,i.attr({ariaHidden:!0,tabindex:-1}).on("focus",function(){p.onFocus()}),a.ngModel&&(p.configureNgModel(i.controller("ngModel")),d.mdOnAppend&&p.useMdOnAppendExpression(),m!=CHIP_INPUT_TEMPLATE&&o(function(){0===m.indexOf("<md-autocomplete")&&p.configureAutocomplete(i.find("md-autocomplete").controller("mdAutocomplete")),p.configureUserInput(i.find("input"))})),s.length>0){var f=n(s)(r.$parent);o(function(){i.find("md-chips-wrap").prepend(f)})}}}return{template:function(e,t){return t.$mdUserTemplate=e.clone(),MD_CHIPS_TEMPLATE},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:r,scope:{readonly:"=readonly",placeholder:"@",secondaryPlaceholder:"@",mdOnAppend:"&",deleteHint:"@",deleteButtonLabel:"@",requireMatch:"=?mdRequireMatch"}}}function MdContactChipsCtrl(){this.selectedItem=null,this.searchText=""}function MdContactChips(e,t){function n(n,o){return function(n,r,a,i){t.initOptionalProperties(n,o),e(r),r.attr("tabindex","-1")}}return{template:function(e,t){return MD_CONTACT_CHIPS_TEMPLATE},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:n,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",filterSelected:"=",contacts:"=ngModel",requireMatch:"=?mdRequireMatch"}}}function MdTab(){function e(e,t,n,o){function r(){function e(){return n.label}function o(){var e=t.find("md-tab-label");return e.length?e.remove().html():void 0}function r(){var e=t.html();return t.empty(),e}n.label||(t.find("md-tab-label")[0]||t[0]).innerHTML;return e()||o()||r()}function a(){var e=t.find("md-tab-body"),o=e.length?e.html():n.label?t.html():null;return e.length?e.remove():n.label&&t.empty(),o}if(o){var i=t.parent()[0].getElementsByTagName("md-tab"),d=Array.prototype.indexOf.call(i,t[0]),c=o.insertTab({scope:e,parent:e.$parent,index:d,template:a(),label:r()},d);e.select=e.select||angular.noop,e.deselect=e.deselect||angular.noop,e.$watch("active",function(e){e&&o.select(c.getIndex())}),e.$watch("disabled",function(){o.refreshIndex()}),e.$on("$destroy",function(){o.removeTab(c)})}}return{require:"^?mdTabs",terminal:!0,scope:{label:"@",active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"},link:e}}function MdTabItem(){function e(e,t,n,o){o&&o.attachRipple(e,t)}return{require:"^?mdTabs",link:e}}function MdTabScroll(e){return{restrict:"A",compile:function(t,n){var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}function MdTabsController(e,t,n,o,r,a,i,d){function c(){e.$watch("selectedIndex",C),e.$watch("$mdTabsCtrl.focusIndex",f),e.$watch("$mdTabsCtrl.offsetLeft",p),e.$watch("$mdTabsCtrl.hasContent",l),angular.element(n).on("resize",function(){e.$apply(b)}),o(w,0,!1),o(y,0,!1)}function l(e){t[e?"removeClass":"addClass"]("md-no-tab-content")}function m(){var e={};return e.wrapper=t[0].getElementsByTagName("md-tabs-wrapper")[0],e.canvas=e.wrapper.getElementsByTagName("md-tabs-canvas")[0],e.paging=e.canvas.getElementsByTagName("md-pagination-wrapper")[0],e.tabs=e.paging.getElementsByTagName("md-tab-item"),e.dummies=e.canvas.getElementsByTagName("md-dummy-tab"),e.inkBar=e.paging.getElementsByTagName("md-ink-bar")[0],e.contentsWrapper=t[0].getElementsByTagName("md-tabs-content-wrapper")[0],e.contents=e.contentsWrapper.getElementsByTagName("md-tab-content"),e}function s(t){switch(t.keyCode){case r.KEY_CODE.LEFT_ARROW:t.preventDefault(),u(-1,!0);break;case r.KEY_CODE.RIGHT_ARROW:t.preventDefault(),u(1,!0);break;case r.KEY_CODE.SPACE:case r.KEY_CODE.ENTER:t.preventDefault(),j||(e.selectedIndex=F.focusIndex)}F.lastClick=!1}function u(t,n){var o,r=n?F.focusIndex:e.selectedIndex;for(o=r+t;F.tabs[o]&&F.tabs[o].scope.disabled;o+=t);F.tabs[o]&&(n?F.focusIndex=o:e.selectedIndex=o)}function p(t){var n=_()?"":"-"+t+"px";angular.element(q.paging).css("left",n),e.$broadcast("$mdTabsPaginationChanged")}function f(e,t){e!==t&&q.tabs[e]&&(g(),h())}function h(){q.dummies[F.focusIndex].focus()}function g(){if(!_()){var e=q.tabs[F.focusIndex],t=e.offsetLeft,n=e.offsetWidth+t;F.offsetLeft=Math.max(F.offsetLeft,I(n-q.canvas.clientWidth)),F.offsetLeft=Math.min(F.offsetLeft,I(t))}}function b(){F.lastSelectedIndex=e.selectedIndex,F.offsetLeft=I(F.offsetLeft),o(w,0,!1)}function E(){G.forEach(function(e){o(e)}),G=[]}function v(t,n){var o={getIndex:function(){return F.tabs.indexOf(r)},isActive:function(){return this.getIndex()===e.selectedIndex},isLeft:function(){return this.getIndex()<e.selectedIndex},isRight:function(){return this.getIndex()>e.selectedIndex},hasFocus:function(){return!F.lastClick&&F.hasFocus&&this.getIndex()===F.focusIndex},id:i.nextUid()},r=angular.extend(o,t);return angular.isDefined(n)?F.tabs.splice(n,0,r):F.tabs.push(r),E(),M(),r}function M(){var e=!1;angular.forEach(F.tabs,function(t){t.template&&(e=!0)}),F.hasContent=e}function $(e){F.tabs.splice(e.getIndex(),1),A(),o(function(){w(),F.offsetLeft=I(F.offsetLeft)})}function A(){e.selectedIndex=N(e.selectedIndex),F.focusIndex=N(F.focusIndex)}function C(t,n){t!==n&&(e.selectedIndex=N(t),F.lastSelectedIndex=n,w(),y(),e.$broadcast("$mdTabsChanged"),F.tabs[n]&&F.tabs[n].scope.deselect(),F.tabs[t]&&F.tabs[t].scope.select())}function T(){T.watcher||(T.watcher=e.$watch(function(){o(function(){T.watcher&&t.prop("offsetParent")&&(T.watcher(),T.watcher=null,e.$apply(b))},0,!1)}))}function y(){if(!e.dynamicHeight)return t.css("height","");if(!F.tabs.length)return G.push(y);var n=q.contents[e.selectedIndex],o=n?n.offsetHeight:0,r=q.wrapper.offsetHeight,a=o+r,i=t.prop("clientHeight");i!==a&&(j=!0,d.animate(t,{height:i+"px"},{height:a+"px"}).then(function(){t.css("height",""),j=!1}))}function w(){if(!F.tabs.length)return G.push(w);if(!t.prop("offsetParent"))return T();var n=e.selectedIndex,o=q.paging.offsetWidth,r=q.tabs[n],a=r.offsetLeft,i=o-a-r.offsetWidth;k(),angular.element(q.inkBar).css({left:a+"px",right:i+"px"})}function k(){var t=e.selectedIndex,n=F.lastSelectedIndex,o=angular.element(q.inkBar);o.removeClass("md-left md-right"),angular.isNumber(n)&&(n>t?o.addClass("md-left"):t>n&&o.addClass("md-right"))}function N(e){var t,n,o=Math.max(F.tabs.length-e,e);for(t=0;o>=t;t++){if(n=F.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=F.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function x(){switch(e.stretchTabs){case"always":return!0;case"never":return!1;default:return!H()&&n.matchMedia("(max-width: 600px)").matches}}function _(){return e.centerTabs&&!H()}function H(){if(e.noPagination)return!1;var n=t.prop("clientWidth");return angular.forEach(q.tabs,function(e){n-=e.offsetWidth}),0>n}function S(t){j||(F.focusIndex=e.selectedIndex=t),F.lastClick=!0}function D(e){H()&&(e.preventDefault(),F.offsetLeft=I(F.offsetLeft-e.wheelDelta))}function I(e){if(!q.tabs.length||!H())return 0;var t=q.tabs[q.tabs.length-1],n=t.offsetLeft+t.offsetWidth;return e=Math.max(0,e),e=Math.min(n-q.canvas.clientWidth,e)}function O(){var e,t,n=q.canvas.clientWidth,o=n+F.offsetLeft;for(e=0;e<q.tabs.length&&(t=q.tabs[e],!(t.offsetLeft+t.offsetWidth>o));e++);F.offsetLeft=I(t.offsetLeft)}function L(){var e,t;for(e=0;e<q.tabs.length&&(t=q.tabs[e],!(t.offsetLeft+t.offsetWidth>=F.offsetLeft));e++);F.offsetLeft=I(t.offsetLeft+t.offsetWidth-q.canvas.clientWidth)}function R(){return F.offsetLeft>0}function P(){var e=q.tabs[q.tabs.length-1];return e&&e.offsetLeft+e.offsetWidth>q.canvas.clientWidth+F.offsetLeft}function B(e,t){var n={colorElement:angular.element(q.inkBar)};a.attachTabBehavior(e,t,n)}var F=this,j=!1,q=m(),G=[];F.scope=e,F.parent=e.$parent,F.tabs=[],F.lastSelectedIndex=null,F.focusIndex=0,F.offsetLeft=0,F.hasContent=!1,F.hasFocus=!1,F.lastClick=!1,F.redirectFocus=h,F.attachRipple=B,F.shouldStretchTabs=x,F.shouldPaginate=H,F.shouldCenterTabs=_,F.insertTab=v,F.removeTab=$,F.select=S,F.scroll=D,F.nextPage=O,F.previousPage=L,F.keydown=s,F.canPageForward=P,F.canPageBack=R,F.refreshIndex=A,F.incrementSelectedIndex=u,F.updateInkBarStyles=w,c()}function MdTabs(e,t,n){return{scope:{noPagination:"=?mdNoPagination",dynamicHeight:"=?mdDynamicHeight",centerTabs:"=?mdCenterTabs",selectedIndex:"=?mdSelected",stretchTabs:"@?mdStretchTabs"},template:function(e,t){return t.$mdTabsTemplate=e.html(),'        <md-tabs-wrapper ng-class="{ \'md-stretch-tabs\': $mdTabsCtrl.shouldStretchTabs() }">          <md-tab-data></md-tab-data>          <md-prev-button              tabindex="-1"              role="button"              aria-label="Previous Page"              aria-disabled="{{!$mdTabsCtrl.canPageBack()}}"              ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }"              ng-if="$mdTabsCtrl.shouldPaginate()"              ng-click="$mdTabsCtrl.previousPage()">            <md-icon md-svg-icon="md-tabs-arrow"></md-icon>          </md-prev-button>          <md-next-button              tabindex="-1"              role="button"              aria-label="Next Page"              aria-disabled="{{!$mdTabsCtrl.canPageForward()}}"              ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }"              ng-if="$mdTabsCtrl.shouldPaginate()"              ng-click="$mdTabsCtrl.nextPage()">            <md-icon md-svg-icon="md-tabs-arrow"></md-icon>          </md-next-button>          <md-tabs-canvas              tabindex="0"              aria-activedescendant="tab-item-{{$mdTabsCtrl.tabs[$mdTabsCtrl.focusIndex].id}}"              ng-focus="$mdTabsCtrl.redirectFocus()"              ng-class="{                  \'md-paginated\': $mdTabsCtrl.shouldPaginate(),                  \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs()              }"              ng-keydown="$mdTabsCtrl.keydown($event)"              role="tablist">            <md-pagination-wrapper                ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs() }"                md-tab-scroll="$mdTabsCtrl.scroll($event)">              <md-tab-item                  tabindex="-1"                  class="md-tab"                  style="max-width: {{ tabWidth ? tabWidth + \'px\' : \'none\' }}"                  ng-repeat="tab in $mdTabsCtrl.tabs"                  role="tab"                  aria-controls="tab-content-{{tab.id}}"                  aria-selected="{{tab.isActive()}}"                  aria-disabled="{{tab.scope.disabled || \'false\'}}"                  ng-click="$mdTabsCtrl.select(tab.getIndex())"                  ng-class="{                      \'md-active\':    tab.isActive(),                      \'md-focused\':   tab.hasFocus(),                      \'md-disabled\':  tab.scope.disabled                  }"                  ng-disabled="tab.scope.disabled"                  md-swipe-left="$mdTabsCtrl.nextPage()"                  md-swipe-right="$mdTabsCtrl.previousPage()"                  md-template="tab.label"                  md-scope="tab.parent"></md-tab-item>              <md-ink-bar ng-hide="noInkBar"></md-ink-bar>            </md-pagination-wrapper>            <div class="md-visually-hidden md-dummy-wrapper">              <md-dummy-tab                  tabindex="-1"                  id="tab-item-{{tab.id}}"                  role="tab"                  aria-controls="tab-content-{{tab.id}}"                  aria-selected="{{tab.isActive()}}"                  aria-disabled="{{tab.scope.disabled || \'false\'}}"                  ng-focus="$mdTabsCtrl.hasFocus = true"                  ng-blur="$mdTabsCtrl.hasFocus = false"                  ng-repeat="tab in $mdTabsCtrl.tabs"                  md-template="tab.label"                  md-scope="tab.parent"></md-dummy-tab>            </div>          </md-tabs-canvas>        </md-tabs-wrapper>        <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent">          <md-tab-content              id="tab-content-{{tab.id}}"              role="tabpanel"              aria-labelledby="tab-item-{{tab.id}}"              md-swipe-left="$mdTabsCtrl.incrementSelectedIndex(1)"              md-swipe-right="$mdTabsCtrl.incrementSelectedIndex(-1)"              ng-if="$mdTabsCtrl.hasContent"              ng-repeat="(index, tab) in $mdTabsCtrl.tabs"               md-template="tab.template"              md-scope="tab.parent"              ng-class="{                \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null,                \'md-active\':        tab.isActive(),                \'md-left\':          tab.isLeft(),                \'md-right\':         tab.isRight(),                \'md-no-scroll\':     dynamicHeight              }"></md-tab-content>        </md-tabs-content-wrapper>      '},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",link:function(o,r,a){function i(e){var t=r.find("md-tab-data");t.html(e),n(t.contents())(o.$parent)}i(a.$mdTabsTemplate),delete a.$mdTabsTemplate,t.initOptionalProperties(o,a),a.$observe("mdNoBar",function(e){o.noInkBar=angular.isDefined(e)}),o.selectedIndex=angular.isNumber(o.selectedIndex)?o.selectedIndex:0,e(r)}}}function MdTemplate(e){function t(t,n,o,r){r&&(n.html(t.template),e(n.contents())(t.compileScope))}return{restrict:"A",link:t,scope:{template:"=mdTemplate",compileScope:"=mdScope"},require:"^?mdTabs"}}angular.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.gestures","material.core.theming.palette","material.core.theming","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.content","material.components.dialog","material.components.divider","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.progressCircular","material.components.progressLinear","material.components.radioButton","material.components.select","material.components.sidenav","material.components.slider","material.components.sticky","material.components.subheader","material.components.swipe","material.components.switch","material.components.tabs","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.whiteframe"]),function(){"use strict";function e(e,n){e.decorator("$$rAF",["$delegate",t]),n.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("red").backgroundPalette("grey")}function t(e){return e.throttle=function(t){var n,o,r,a;return function(){n=arguments,a=this,r=t,o||(o=!0,e(function(){r.apply(a,n),o=!1}))}},e}angular.module("material.core",["material.core.gestures","material.core.theming"]).config(e),e.$inject=["$provide","$mdThemingProvider"]}(),function(){"use strict";function e(e,t){function n(e){return o?"webkit"+e.charAt(0).toUpperCase()+e.substring(1):e}var o=/webkit/i.test(t.vendorPrefix);return{KEY_CODE:{ENTER:13,ESCAPE:27,SPACE:32,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(o?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(o?" webkitAnimationEnd":""),TRANSFORM:n("transform"),TRANSFORM_ORIGIN:n("transformOrigin"),TRANSITION:n("transition"),TRANSITION_DURATION:n("transitionDuration"),ANIMATION_PLAY_STATE:n("animationPlayState"),ANIMATION_DURATION:n("animationDuration"),ANIMATION_NAME:n("animationName"),ANIMATION_TIMING:n("animationTimingFunction"),ANIMATION_DIRECTION:n("animationDirection")},MEDIA:{sm:"(max-width: 600px)","gt-sm":"(min-width: 600px)",md:"(min-width: 600px) and (max-width: 960px)","gt-md":"(min-width: 960px)",lg:"(min-width: 960px) and (max-width: 1200px)","gt-lg":"(min-width: 1200px)"},MEDIA_PRIORITY:["gt-lg","lg","gt-md","md","gt-sm","sm"]}}angular.module("material.core").factory("$mdConstant",e),e.$inject=["$$rAF","$sniffer"]}(),function(){function e(e,t){function n(){return[].concat(b)}function o(){return b.length}function r(e){return b.length&&e>-1&&e<b.length}function a(e){return e?r(s(e)+1):!1}function i(e){return e?r(s(e)-1):!1}function d(e){return r(e)?b[e]:null}function c(e,t){return b.filter(function(n){return n[e]===t})}function l(e,t){return e?(angular.isNumber(t)||(t=b.length),b.splice(t,0,e),s(e)):-1}function m(e){u(e)&&b.splice(s(e),1)}function s(e){return b.indexOf(e)}function u(e){return e&&s(e)>-1}function p(){return b.length?b[0]:null}function f(){return b.length?b[b.length-1]:null}function h(e,n,o,a){o=o||g;for(var i=s(n);;){if(!r(i))return null;var d=i+(e?-1:1),c=null;if(r(d)?c=b[d]:t&&(c=e?f():p(),d=s(c)),null===c||d===a)return null;if(o(c))return c;angular.isUndefined(a)&&(a=d),i=d}}var g=function(){return!0};e&&!angular.isArray(e)&&(e=Array.prototype.slice.call(e)),t=!!t;var b=e||[];return{items:n,count:o,inRange:r,contains:u,indexOf:s,itemAt:d,findBy:c,add:l,remove:m,first:p,last:f,next:angular.bind(null,h,!1),previous:angular.bind(null,h,!0),hasPrevious:i,hasNext:a}}angular.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,t,n){function o(e){var t=s[e];angular.isUndefined(t)&&(t=s[e]=r(e));var n=p[t];return angular.isUndefined(n)&&(n=a(t)),n}function r(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=u[e]=n.matchMedia(e);return t.addListener(i),p[t.media]=!!t.matches}function i(e){t.$evalAsync(function(){p[e.media]=!!e.matches})}function d(e){return u[e]}function c(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var r=e.MEDIA_PRIORITY[o];if(u[s[r]].matches){var a=m(t,n+"-"+r);if(t[a])return t[a]}}return t[m(t,n)]}function l(t,n,o){var r=[];return t.forEach(function(t){var a=m(n,t);n[a]&&r.push(n.$observe(a,angular.bind(void 0,o,null)));for(var i in e.MEDIA){if(a=m(n,t+"-"+i),!n[a])return;r.push(n.$observe(a,angular.bind(void 0,o,i)))}}),function(){r.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var s={},u={},p={},f={};return o.getResponsiveAttribute=c,o.getQuery=d,o.watchResponsiveAttributes=l,o}angular.module("material.core").factory("$mdMedia",e),e.$inject=["$mdConstant","$rootScope","$window"]}(),function(){"use strict";var e=["0","0","0"];angular.module("material.core").factory("$mdUtil",["$cacheFactory","$document","$timeout","$q","$window","$mdConstant",function(t,n,o,r,a,i){function d(e){return e[0]||e}var c;return c={now:window.performance?angular.bind(window.performance,window.performance.now):Date.now,clientRect:function(e,t,n){var o=d(e);t=d(t||o.offsetParent||document.body);var r=o.getBoundingClientRect(),a=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:r.left-a.left,top:r.top-a.top,width:r.width,height:r.height}},offsetRect:function(e,t){return c.clientRect(e,t,!0)},disableScrollAround:function(e){function t(){f?d.attr("style",f):d[0].removeAttribute("style"),b.css("position","static");var e=a.getComputedStyle(d[0]);o(e);var t=d[0].clientWidth;"border-box"==e.boxSizing&&(t-=parseFloat(e.paddingLeft,10),t-=parseFloat(e.paddingRight,10)),g.css({"max-width":t+"px"}),d.css("position","relative"),b.css("position","absolute")}function o(e){var t=!c.floatingScrollbars()&&"hidden"!=e.overflowY&&(b[0].clientHeight>l.clientHeight||E),n=-1*(u-parseFloat(h.paddingTop,10));d.css("padding-top","0px"),t&&d.css("overflow-y","scroll"),b.css("top",n+"px");var o=parseFloat(e.height,10);return"border-box"==e.boxSizing&&(o-=parseFloat(e.paddingTop,10),o-=parseFloat(e.paddingBottom,10)),g.css("height",o+"px"),t}function r(e){return e instanceof angular.element&&(e=e[0]),e.scrollHeight>e.offsetHeight}for(var i,d,l,m,s=e instanceof angular.element?e[0]:e;s=this.getClosest(s,"MD-CONTENT",!0);)r(s)?d=angular.element(s):i=s;d||(d=angular.element(!i||n[0].body.scrollTop||n[0].documentElement.scrollTop?n[0].body:i)),"BODY"==d[0].nodeName&&n[0].documentElement.scrollTop?(l=n[0].documentElement,m=!0):l=d[0];var u=l.scrollTop,p=l.clientWidth,f=d.attr("style"),h=a.getComputedStyle(d[0]),g=angular.element('<div class="md-virtual-scroll-container"><div class="md-virtual-scroller"></div></div>'),b=g.children().eq(0);b.append(d[0].childNodes),d.append(g);var E=p<l.clientWidth;return o(h),b.attr("layout-margin",d.attr("layout-margin")),b.css({display:h.display,"-webkit-flex-direction":h.webkitFlexDirection,"-ms-flex-direction":h.msFlexDirection,"flex-direction":h.flexDirection,"-webkit-align-items":h.webkitAlignItems,"-ms-flex-align":h.msFlexAlign,"align-items":h.alignItems,"-webkit-justify-content":h.webkitJustifyContent,"-ms-flex-pack":h.msFlexPack,"justify-content":h.justifyContent,"-webkit-flex":h.webkitFlex,"-ms-flex":h.msFlex,flex:h.flex}),/flex$/.test(h.display)&&b.css("height","100%"),t(),angular.element(a).on("resize",t),function(){d.append(b[0].childNodes),g.remove(),angular.element(a).off("resize",t),d.attr("style",f||!1),m?n[0].documentElement.scrollTop=u:d[0].scrollTop=u}},floatingScrollbars:function(){if(void 0===this.floatingScrollbars.cached){var e=angular.element('<div style="width: 100%; z-index: -1; position: absolute; height: 35px; overflow-y: scroll"><div style="height: 60;"></div></div>');n[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(e){var t=e[0]||e;document.addEventListener("click",function o(e){e.target===t&&e.$focus&&(t.focus(),e.stopImmediatePropagation(),e.preventDefault(),t.removeEventListener("click",o))},!0);var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!1,!0,window,{},0,0,0,0,!1,!1,!1,!1,0,null),n.$material=!0,n.$focus=!0,t.dispatchEvent(n)},transitionEndPromise:function(e,t){function n(t){t&&t.target!==e[0]||(e.off(i.CSS.TRANSITIONEND,n),a.resolve())}t=t||{};var a=r.defer();return e.on(i.CSS.TRANSITIONEND,n),t.timeout&&o(n,t.timeout),a.promise},fakeNgModel:function(){return{$fake:!0,$setTouched:angular.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:angular.noop}},debounce:function(e,t,n,r){var a;return function(){var i=n,d=Array.prototype.slice.call(arguments);o.cancel(a),a=o(function(){a=void 0,e.apply(i,d)},t||10,r)}},throttle:function(e,t){var n;return function(){var o=this,r=arguments,a=c.now();(!n||a-n>t)&&(e.apply(o,r),n=a)}},time:function(e){var t=c.now();return e(),c.now()-t},nextUid:function(){for(var t,n=e.length;n;){if(n--,t=e[n].charCodeAt(0),57==t)return e[n]="A",e.join("");if(90!=t)return e[n]=String.fromCharCode(t+1),e.join("");e[n]="0"}return e.unshift("0"),e.join("")},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,t,n){if(e instanceof angular.element&&(e=e[0]),t=t.toUpperCase(),n&&(e=e.parentNode),!e)return null;do if(e.nodeName===t)return e;while(e=e.parentNode);return null},extractElementByName:function(e,t){for(var n=0,o=e.length;o>n;n++)if(e[n].nodeName.toLowerCase()===t)return angular.element(e[n]);return e},initOptionalProperties:function(e,t,n){n=n||{},angular.forEach(e.$$isolateBindings,function(o,r){if(o.optional&&angular.isUndefined(e[r])){var a=t.hasOwnProperty(t.$normalize(o.attrName));e[r]=angular.isDefined(n[r])?n[r]:a}})}}}]),angular.element.prototype.focus=angular.element.prototype.focus||function(){return this.length&&this[0].focus(),this},angular.element.prototype.blur=angular.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){"use strict";function e(e,t,n){function o(e,n,o){var r=e[0]||e;!r||r.hasAttribute(n)&&0!==r.getAttribute(n).length||d(r,n)||(o=angular.isString(o)?o.trim():"",o.length?e.attr(n,o):t.warn('ARIA: Attribute "',n,'", required for accessibility, is missing on node:',r))}function r(t,n,r){e(function(){o(t,n,r())})}function a(e,t){r(e,t,function(){return i(e)})}function i(e){return e.text().trim()}function d(e,t){function o(e){var t=e.currentStyle?e.currentStyle:n.getComputedStyle(e);return"none"===t.display}var r=e.hasChildNodes(),a=!1;if(r)for(var i=e.childNodes,d=0;d<i.length;d++){var c=i[d];1===c.nodeType&&c.hasAttribute(t)&&(o(c)||(a=!0))}return a}return{expect:o,expectAsync:r,expectWithText:a}}angular.module("material.core").service("$mdAria",e),e.$inject=["$$rAF","$log","$window"]}(),function(){"use strict";function e(e,t,n,o,r,a){this.compile=function(i){var d=i.templateUrl,c=i.template||"",l=i.controller,m=i.controllerAs,s=i.resolve||{},u=i.locals||{},p=i.transformTemplate||angular.identity,f=i.bindToController;return angular.forEach(s,function(e,t){s[t]=angular.isString(e)?n.get(e):n.invoke(e)}),angular.extend(s,u),s.$template=d?t.get(d,{cache:a}).then(function(e){return e.data}):e.when(c),e.all(s).then(function(e){var t=p(e.$template),n=i.element||angular.element("<div>").html(t.trim()).contents(),a=o(n);return{locals:e,element:n,link:function(t){if(e.$scope=t,l){var o=r(l,e,!0);f&&angular.extend(o.instance,e);var i=o();n.data("$ngControllerController",i),n.children().data("$ngControllerController",i),m&&(t[m]=i)}return a(t)}}})}}angular.module("material.core").service("$mdCompiler",e),e.$inject=["$q","$http","$injector","$compile","$controller","$templateCache"]}(),function(e){"use strict";function t(){}function n(t,n,o){function r(e,t,n){var o=u[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(u).join(", "));return o.registerElement(e,n)}function a(e,n){var o=new t(e);return angular.extend(o,n),u[e]=o,s}var d=navigator.userAgent||navigator.vendor||window.opera,l=d.match(/ipad|iphone|ipod/i),m=d.match(/android/i),s={handler:a,register:r,isHijackingClicks:(l||m)&&!e&&!p};return s.isHijackingClicks&&s.handler("click",{options:{maxDistance:6},onEnd:function(e,t){t.distance<this.state.options.maxDistance&&this.dispatchEvent(e,"click")}}),s.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){o.cancel(this.state.timeout)},onStart:function(e,t){return this.state.registeredParent?(this.state.pos={x:t.x,y:t.y},void(this.state.timeout=o(angular.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=i(e),c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:n.throttle(function(e){this.state.isRunning&&(c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(c(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){if(Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance){var n="left"==t.directionX?"$md.swipeleft":"$md.swiperight";this.dispatchEvent(e,n)}}})}function o(e){this.name=e,this.state={}}function r(t){function n(e,t,n){n=n||m;var o=new angular.element.Event(t);o.$material=!0,o.pointer=n,o.srcEvent=e,angular.extend(o,{clientX:n.x,clientY:n.y,screenX:n.x,screenY:n.y,pageX:n.x,pageY:n.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),angular.element(n.target).trigger(o)}function r(e,t,n){n=n||m;var o;"click"===t?(o=document.createEvent("MouseEvents"),o.initMouseEvent("click",!0,!0,window,e.detail,n.x,n.y,n.x,n.y,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget||null)):(o=document.createEvent("CustomEvent"),o.initCustomEvent(t,!0,!0,{})),o.$material=!0,o.pointer=n,o.srcEvent=e,n.target.dispatchEvent(o)}var a="undefined"!=typeof e&&angular.element===e;return o.prototype={options:{},dispatchEvent:a?n:r,onStart:angular.noop,onMove:angular.noop,onEnd:angular.noop,onCancel:angular.noop,start:function(e,t){if(!this.state.isRunning){
	var n=this.getNearestParent(e.target),o=n&&n.$mdGesture[this.name]||{};this.state={isRunning:!0,options:angular.extend({},this.options,o),registeredParent:n},this.onStart(e,t)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n)}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),n}},o}function a(e,t){function n(e,n){var o;for(var r in u)o=u[r],o instanceof t&&("start"===e&&o.cancel(),o[e](n,m))}function o(e){if(!m){var t=+Date.now();s&&!d(e,s)&&t-s.endTime<1500||(m=i(e),n("start",e))}}function r(e){m&&d(e,m)&&(c(e,m),n("move",e))}function a(e){m&&d(e,m)&&(c(e,m),m.endTime=+Date.now(),n("end",e),s=m,m=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!f&&e.isHijackingClicks&&(document.addEventListener("click",function(e){var t=0===e.clientX&&0===e.clientY;t||e.$material||(e.preventDefault(),e.stopPropagation())},!0),f=!0);var l="mousedown touchstart pointerdown",p="mousemove touchmove pointermove",h="mouseup mouseleave touchend touchcancel pointerup pointercancel";angular.element(document).on(l,o).on(p,r).on(h,a).on("$$mdGestureReset",function(){s=m=null})}function i(e){var t=l(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function d(e,t){return e&&t&&e.type.charAt(0)===t.type}function c(e,t){var n=l(e),o=t.x=n.pageX,r=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=r-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"up":t.distanceY<0?"down":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function l(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}var m,s,u={},p=!1,f=!1;angular.module("material.core.gestures",[]).provider("$mdGesture",t).factory("$$MdGestureHandler",r).run(a),t.prototype={skipClickHijack:function(){return p=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,o){return new n(e,t,o)}]},r.$inject=["$$rAF"],a.$inject=["$mdGesture","$$MdGestureHandler"]}(window.jQuery),function(){"use strict";function e(){function e(e){function t(e){return d.optionsFactory=e.options,d.methods=(e.methods||[]).concat(a),c}function n(e,t){return i[e]=t,c}function o(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return d.presets[t]={methods:n.methods.concat(a),optionsFactory:n.options,argOption:n.argOption},c}function r(t,n,o){function r(e){return e&&e._options&&(e=e._options),m.show(angular.extend({},l,e))}function a(t,n){var r={};return r[e]=s,o.invoke(t||function(){return n},{},r)}var c,l,m=t(),s={hide:m.hide,cancel:m.cancel,show:r};return c=d.methods||[],l=a(d.optionsFactory,{}),angular.forEach(i,function(e,t){s[t]=e}),angular.forEach(d.presets,function(e,t){function n(e){this._options=angular.extend({},o,e)}var o=a(e.optionsFactory,{}),r=(e.methods||[]).concat(c);if(angular.extend(o,{$type:t}),angular.forEach(r,function(e){n.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var i="show"+t.charAt(0).toUpperCase()+t.slice(1);s[i]=function(e){var n=s[t](e);return s.show(n)}}s[t]=function(t){return arguments.length&&e.argOption&&!angular.isObject(t)&&!angular.isArray(t)?(new n)[e.argOption](t):new n(t)}}),s}var a=["onHide","onShow","onRemove"],i={},d={presets:{}},c={setDefaults:t,addPreset:o,addMethod:n,$get:r};return c.addPreset("build",{methods:["controller","controllerAs","resolve","template","templateUrl","themable","transformTemplate","parent"]}),r.$inject=["$$interimElement","$animate","$injector"],c}function t(e,t,n,o,r,a,i,d,c){function l(e){return e&&angular.isString(e)?e.replace(/\{\{/g,m).replace(/}}/g,s):e}var m=i.startSymbol(),s=i.endSymbol(),u="{{"===m&&"}}"===s,p=u?angular.identity:l;return function(){function i(e){if(f.length)return u.cancel().then(function(){return i(e)});var t=new s(e);return f.push(t),t.show().then(function(){return t.deferred.promise})}function l(e){var t=f.shift();return t&&t.remove().then(function(){t.deferred.resolve(e)})}function m(e){var n=f.shift();return t.when(n&&n.remove().then(function(){n.deferred.reject(e)}))}function s(i){var l,m,s,f,h;return i=i||{},i=angular.extend({preserveScope:!1,scope:i.scope||n.$new(i.isolateScope),onShow:function(e,t,n){return a.enter(t,n.parent)},onRemove:function(e,n,o){return n&&a.leave(n)||t.when()}},i),i.template&&(i.template=p(i.template)),l={options:i,deferred:t.defer(),show:function(){var n;return n=i.skipCompile?t(function(e){e({locals:{},link:function(){return i.element}})}):d.compile(i),f=n.then(function(n){function a(){i.hideDelay&&(m=o(u.cancel,i.hideDelay))}if(angular.extend(n.locals,l.options),s=n.link(i.scope),angular.isFunction(i.parent)?i.parent=i.parent(i.scope,s,i):angular.isString(i.parent)&&(i.parent=angular.element(e[0].querySelector(i.parent))),!(i.parent||{}).length){var d;r[0]&&r[0].querySelector&&(d=r[0].querySelector(":not(svg) > body")),d||(d=r[0]),"#comment"==d.nodeName&&(d=e[0].body),i.parent=angular.element(d)}i.themable&&c(s);var p=i.onShow(i.scope,s,i);return t.when(p).then(function(){(i.onComplete||angular.noop)(i.scope,s,i),a()})},function(e){f=!0,l.deferred.reject(e)})},cancelTimeout:function(){m&&(o.cancel(m),m=void 0)},remove:function(){return l.cancelTimeout(),h=t.when(f).then(function(){var e=s?i.onRemove(i.scope,s,i):!0;return t.when(e).then(function(){i.preserveScope||i.scope.$destroy(),h=!0})})}}}var u,f=[];return u={show:i,hide:l,cancel:m}}}return e.$get=t,t.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$interpolate","$mdCompiler","$mdTheming"],e}angular.module("material.core").provider("$$interimElement",e)}(),function(){"use strict";function e(e,t){function n(e){return e&&""!==e}var o,r=[],a={};return o={notFoundError:function(t){e.error("No instance found for handle",t)},getInstances:function(){return r},get:function(e){if(!n(e))return null;var t,o,a;for(t=0,o=r.length;o>t;t++)if(a=r[t],a.$$mdHandle===e)return a;return null},register:function(e,t){function n(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}function o(){var n=a[t];n&&(n.resolve(e),delete a[t])}return t?(e.$$mdHandle=t,r.push(e),o(),n):angular.noop},when:function(e){if(n(e)){var r=t.defer(),i=o.get(e);return i?r.resolve(i):a[e]=r,r.promise}return t.reject("Invalid `md-component-id` value.")}}}angular.module("material.core").factory("$mdComponentRegistry",e),e.$inject=["$log","$q"]}(),function(){"use strict";function e(e){return{controller:angular.noop,link:function(t,n,o){o.hasOwnProperty("mdInkRippleCheckbox")?e.attachCheckboxBehavior(t,n):e.attachButtonBehavior(t,n)}}}function t(e,t){function n(e,t,n){return i(e,t,angular.extend({fullRipple:!0,isMenuItem:t.hasClass("md-menu-item"),center:!1,dimBackground:!0},n))}function o(e,t,n){return i(e,t,angular.extend({center:!0,dimBackground:!1,fitRipple:!0},n))}function r(e,t,n){return i(e,t,angular.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},n))}function a(e,t,n){return i(e,t,angular.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},n))}function i(n,o,r){function a(){var e=o.data("$mdRippleContainer");return e?e:(e=angular.element('<div class="md-ripple-container">'),o.append(e),o.data("$mdRippleContainer",e),e)}function i(e){function t(e){var t="#"===e.charAt(0)?e.substr(1):e,n=t.length/3,o=t.substr(0,n),r=t.substr(n,n),a=t.substr(2*n);return 1===n&&(o+=o,r+=r,a+=a),"rgba("+parseInt(o,16)+","+parseInt(r,16)+","+parseInt(a,16)+",0.1)"}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,"0.1)"):0===e.indexOf("rgb")?n(e):0===e.indexOf("#")?t(e):void 0}function d(e,n){g.splice(g.indexOf(e),1),0===g.length&&a().css({backgroundColor:""}),t(function(){e.remove()},n,!1)}function c(e){var t=g.indexOf(e),n=b[t]||{},o=g.length>1?!1:v,a=g.length>1?!1:M;o||n.animating||a?e.addClass("md-ripple-visible"):e&&(e.removeClass("md-ripple-visible"),r.outline&&e.css({width:p+"px",height:p+"px",marginLeft:-1*p+"px",marginTop:-1*p+"px"}),d(e,r.outline?450:650))}function l(n,d){function l(e){var t=angular.element('<div class="md-ripple" data-counter="'+h++ +'">');return g.unshift(t),b.unshift({animating:!0}),u.append(t),e&&t.css(e),t}function m(e,t){var n,o,a,i=u.prop("offsetWidth"),d=u.prop("offsetHeight");return r.isMenuItem?o=Math.sqrt(Math.pow(i,2)+Math.pow(d,2)):r.outline?(a=$.getBoundingClientRect(),e-=a.left,t-=a.top,i=Math.max(e,i-e),d=Math.max(t,d-t),o=2*Math.sqrt(Math.pow(i,2)+Math.pow(d,2))):(n=r.fullRipple?1.1:.8,o=Math.sqrt(Math.pow(i,2)+Math.pow(d,2))*n,r.fitRipple&&(o=Math.min(d,i,o))),o}function s(e,t,n){function o(e){return e.replace("rgba","rgb").replace(/,[^\),]+\)/,")")}var a=$.getBoundingClientRect(),i={backgroundColor:o(C),borderColor:o(C),width:e+"px",height:e+"px"};return r.outline?(i.width=0,i.height=0):i.marginLeft=i.marginTop=e*-.5+"px",r.center?i.left=i.top="50%":(i.left=Math.round((t-a.left)/u.prop("offsetWidth")*100)+"%",i.top=Math.round((n-a.top)/u.prop("offsetHeight")*100)+"%"),i}C=i(o.attr("md-ink-ripple"))||i(e.getComputedStyle(r.colorElement[0]).color||"rgb(0, 0, 0)");var u=a(),f=m(n,d),E=s(f,n,d),v=l(E),M=g.indexOf(v),A=b[M]||{};return p=f,A.animating=!0,t(function(){r.dimBackground&&u.css({backgroundColor:C}),v.addClass("md-ripple-placed md-ripple-scaled"),v.css(r.outline?{borderWidth:.5*f+"px",marginLeft:f*-.5+"px",marginTop:f*-.5+"px"}:{left:"50%",top:"50%"}),c(v),t(function(){A.animating=!1,c(v)},r.outline?450:225,!1)},0,!1),v}function m(e){u()&&(l(e.pointer.x,e.pointer.y),M=!0)}function s(){M=!1;var e=g[g.length-1];t(function(){c(e)},0,!1)}function u(){function e(e){return e&&e.hasAttribute&&e.hasAttribute("disabled")}var t=$.parentNode,n=t&&t.parentNode,o=n&&n.parentNode;return!(e($)||e(t)||e(n)||e(o))}if(o.controller("mdNoInk"))return angular.noop;r=angular.extend({colorElement:o,mousedown:!0,hover:!0,focus:!0,center:!1,mousedownPauseTime:150,dimBackground:!1,outline:!1,fullRipple:!0,isMenuItem:!1,fitRipple:!1},r);var p,f=o.controller("mdInkRipple")||{},h=0,g=[],b=[],E=o.attr("md-highlight"),v=!1,M=!1,$=o[0],A=o.attr("md-ripple-size"),C=i(o.attr("md-ink-ripple"))||i(r.colorElement.length&&e.getComputedStyle(r.colorElement[0]).color||"rgb(0, 0, 0)");switch(A){case"full":r.fullRipple=!0;break;case"partial":r.fullRipple=!1}return r.mousedown&&o.on("$md.pressdown",m).on("$md.pressup",s),f.createRipple=l,E&&n.$watch(E,function(e){v=e,v&&!g.length&&t(function(){l(0,0)},0,!1),angular.forEach(g,c)}),function(){o.off("$md.pressdown",m).off("$md.pressup",s),a().remove()}}return{attachButtonBehavior:n,attachCheckboxBehavior:o,attachTabBehavior:r,attachListControlBehavior:a,attach:i}}function n(){return function(){return{controller:angular.noop}}}angular.module("material.core").factory("$mdInkRipple",t).directive("mdInkRipple",e).directive("mdNoInk",n()).directive("mdNoBar",n()).directive("mdNoStretch",n()),e.$inject=["$mdInkRipple"],t.$inject=["$window","$timeout"]}(),function(){"use strict";angular.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900 A700",contrastStrongLightColors:"500 600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700 800"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200",contrastStrongLightColors:"300 400"},grey:{0:"#ffffff",50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",1000:"#000000",A100:"#ffffff",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300",contrastStrongLightColors:"400 500"}})}(),function(){"use strict";function e(e){function t(e,t){return t=t||{},c[e]=r(e,t),g}function n(e,t){return r(e,angular.extend({},c[e]||{},t))}function r(e,t){var n=A.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function a(e,t){if(l[e])return l[e];t=t||"default";var n="string"==typeof t?l[t]:t,o=new i(e);return n&&angular.forEach(n.colors,function(e,t){o.colors[t]={name:e.name,hues:angular.extend({},e.hues)}}),l[e]=o,o}function i(e){function t(e){if(e=0===arguments.length?!0:!!e,e!==n.isDark){n.isDark=e,n.foregroundPalette=n.isDark?u:s,n.foregroundShadow=n.isDark?p:f;var t=n.isDark?$:M,o=n.isDark?M:$;return angular.forEach(t,function(e,t){var r=n.colors[t],a=o[t];if(r)for(var i in r.hues)r.hues[i]===a[i]&&(r.hues[i]=e[i])}),n}}var n=this;n.name=e,n.colors={},n.dark=t,t(!1),E.forEach(function(e){var t=(n.isDark?$:M)[e];n[e+"Palette"]=function(o,r){var a=n.colors[e]={name:o,hues:angular.extend({},t,r)};return Object.keys(a.hues).forEach(function(e){if(!t[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",n.name).replace("%3",o).replace("%4",Object.keys(t).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(t){if(-1==A.indexOf(t))throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",t).replace("%2",n.name).replace("%3",e).replace("%4",o).replace("%5",A.join(", ")))}),n},n[e+"Color"]=function(){var t=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+e+"Color() has been deprecated. Use $mdThemingProviderTheme."+e+"Palette() instead."),n[e+"Palette"].apply(n,t)}})}function h(e,t){function n(e){return void 0===e||""===e?!0:void 0!==o.THEMES[e]}function o(t,n){void 0===n&&(n=t,t=void 0),void 0===t&&(t=e),o.inherit(n,n)}return o.inherit=function(o,r){function a(e){n(e)||t.warn("Attempted to use unregistered theme '"+e+"'. Register it with $mdThemingProvider.theme().");var r=o.data("$mdThemeName");r&&o.removeClass("md-"+r+"-theme"),o.addClass("md-"+e+"-theme"),o.data("$mdThemeName",e)}var i=r.controller("mdTheme"),d=o.attr("md-theme-watch");if((v||angular.isDefined(d))&&"false"!=d){var c=e.$watch(function(){return i&&i.$mdTheme||b},a);o.on("$destroy",c)}else{var l=i&&i.$mdTheme||b;a(l)}},o.THEMES=angular.extend({},l),o.defaultTheme=function(){return b},o.registered=n,o}c={},l={},m={};var g,b="default",v=!1;return angular.extend(c,e),h.$inject=["$rootScope","$log"],g={definePalette:t,extendPalette:n,theme:a,setDefaultTheme:function(e){b=e},alwaysWatchTheme:function(e){v=e},$get:h,_LIGHT_DEFAULT_HUES:M,_DARK_DEFAULT_HUES:$,_PALETTES:c,_THEMES:l,_parseRules:o,_rgba:d}}function t(e,t,n){return{priority:100,link:{pre:function(o,r,a){var i={$setTheme:function(t){e.registered(t)||n.warn("attempted to use unregistered theme '"+t+"'"),i.$mdTheme=t}};r.data("$mdThemeController",i),i.$setTheme(t(a.mdTheme)(o)),a.$observe("mdTheme",i.$setTheme)}}}}function n(e){return e}function o(e,t,n){a(e,t),n=n.replace(/THEME_NAME/g,e.name);var o=[],r=e.colors[t],i=new RegExp(".md-"+e.name+"-theme","g"),l=new RegExp("('|\")?{{\\s*("+t+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),m=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow)-?(\d\.?\d*)?\s*\}\}'?"?/g,s=c[r.name];return n=n.replace(m,function(t,n,o,r){return"foreground"===n?"shadow"==o?e.foregroundShadow:e.foregroundPalette[o]||e.foregroundPalette[1]:(0===o.indexOf("hue")&&(o=e.colors[n].hues[o]),d((c[e.colors[n].name][o]||"").value,r))}),angular.forEach(r.hues,function(t,r){var a=n.replace(l,function(e,n,o,r,a){return d(s[t]["color"===r?"value":"contrast"],a)});"default"!==r&&(a=a.replace(i,".md-"+e.name+"-theme.md-"+r)),o.push(a)}),o}function r(e){function t(e){var t=e.contrastDefaultColor,n=e.contrastLightColors||[],o=e.contrastStrongLightColors||[],r=e.contrastDarkColors||[];"string"==typeof n&&(n=n.split(" ")),"string"==typeof o&&(o=o.split(" ")),"string"==typeof r&&(r=r.split(" ")),delete e.contrastDefaultColor,delete e.contrastLightColors,delete e.contrastStrongLightColors,delete e.contrastDarkColors,angular.forEach(e,function(a,d){function c(){return"light"===t?r.indexOf(d)>-1?h:o.indexOf(d)>-1?b:g:n.indexOf(d)>-1?o.indexOf(d)>-1?b:g:h}if(!angular.isObject(a)){var l=i(a);if(!l)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",a).replace("%2",e.name).replace("%3",d));e[d]={value:l,contrast:c()}}})}var n=document.getElementsByTagName("head")[0];if(n){var r=n.firstElementChild;if(r){var a=e.has("$MD_THEME_CSS")?e.get("$MD_THEME_CSS"):"";angular.forEach(c,t);var d={},s=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.length}).map(function(e){return e.trim()+"}"}),u=new RegExp("md-("+E.join("|")+")","g");E.forEach(function(e){d[e]=""}),s.forEach(function(e){for(var t,n=(e.match(u),0);t=E[n];n++)if(e.indexOf(".md-"+t)>-1)return d[t]+=e;for(n=0;t=E[n];n++)if(e.indexOf(t)>-1)return d[t]+=e;return d[v]+=e}),angular.forEach(l,function(e){m[e.name]||(E.forEach(function(t){for(var a=o(e,t,d[t]);a.length;){var i=document.createElement("style");i.setAttribute("type","text/css"),i.appendChild(document.createTextNode(a.shift())),n.insertBefore(i,r)}}),e.colors.primary.name==e.colors.accent.name&&console.warn("$mdThemingProvider: Using the same palette for primary and accent. This violates the material design spec."),m[e.name]=!0)})}}}function a(e,t){if(!c[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(c).join(", ")))}function i(e){if(angular.isArray(e)&&3==e.length)return e;if(/^rgb/.test(e))return e.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==e.charAt(0)&&(e=e.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(e)){var t=e.length/3,n=e.substr(0,t),o=e.substr(t,t),r=e.substr(2*t);return 1===t&&(n+=n,o+=o,r+=r),[parseInt(n,16),parseInt(o,16),parseInt(r,16)]}}function d(e,t){return 4==e.length&&(e=angular.copy(e),t?e.pop():t=e.pop()),t&&("number"==typeof t||"string"==typeof t&&t.length)?"rgba("+e.join(",")+","+t+")":"rgb("+e.join(",")+")"}angular.module("material.core.theming",["material.core.theming.palette"]).directive("mdTheme",t).directive("mdThemable",n).provider("$mdTheming",e).run(r);var c,l,m,s={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.26)",4:"rgba(0,0,0,0.12)"},u={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.3)",4:"rgba(255,255,255,0.12)"},p="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",f="",h=i("rgba(0,0,0,0.87)"),g=i("rgba(255,255,255,0.87"),b=i("rgb(255,255,255)"),E=["primary","accent","warn","background"],v="primary",M={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"A100","hue-1":"300","hue-2":"800","hue-3":"900"}},$={background:{"default":"800","hue-1":"300","hue-2":"600","hue-3":"900"}};E.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};M[e]||(M[e]=t),$[e]||($[e]=t)});var A=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"];e.$inject=["$mdColorPalette"],t.$inject=["$mdTheming","$interpolate","$log"],n.$inject=["$mdTheming"],r.$inject=["$injector"]}(),angular.module("material.components.autocomplete",["material.core","material.components.icon"]),angular.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",BackdropDirective),BackdropDirective.$inject=["$mdTheming"],angular.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",MdBottomSheetDirective).provider("$mdBottomSheet",MdBottomSheetProvider),MdBottomSheetProvider.$inject=["$$interimElementProvider"],angular.module("material.components.button",["material.core"]).directive("mdButton",MdButtonDirective),MdButtonDirective.$inject=["$mdInkRipple","$mdTheming","$mdAria","$timeout"],angular.module("material.components.card",["material.core"]).directive("mdCard",mdCardDirective),mdCardDirective.$inject=["$mdTheming"],angular.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",MdCheckboxDirective),MdCheckboxDirective.$inject=["inputDirective","$mdInkRipple","$mdAria","$mdConstant","$mdTheming","$mdUtil","$timeout"],angular.module("material.components.chips",["material.core","material.components.autocomplete"]),angular.module("material.components.content",["material.core"]).directive("mdContent",mdContentDirective),mdContentDirective.$inject=["$mdTheming"],angular.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",MdDialogDirective).provider("$mdDialog",MdDialogProvider),MdDialogDirective.$inject=["$$rAF","$mdTheming"],MdDialogProvider.$inject=["$$interimElementProvider"],angular.module("material.components.divider",["material.core"]).directive("mdDivider",MdDividerDirective),MdDividerDirective.$inject=["$mdTheming"],angular.module("material.components.gridList",["material.core"]).directive("mdGridList",GridListDirective).directive("mdGridTile",GridTileDirective).directive("mdGridTileFooter",GridTileCaptionDirective).directive("mdGridTileHeader",GridTileCaptionDirective).factory("$mdGridLayout",GridLayoutFactory),GridListDirective.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],GridListController.$inject=["$timeout"],GridListController.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(angular.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}},GridLayoutFactory.$inject=["$mdUtil"],GridTileDirective.$inject=["$mdMedia"],angular.module("material.components.icon",["material.core"]).directive("mdIcon",mdIconDirective),mdIconDirective.$inject=["$mdIcon","$mdTheming","$mdAria"],angular.module("material.components.icon").provider("$mdIcon",MdIconProvider);var config={defaultIconSize:24};MdIconProvider.prototype={icon:function(e,t,n){return-1==e.indexOf(":")&&(e="$default:"+e),config[e]=new ConfigurationItem(t,n),this},iconSet:function(e,t,n){return config[e]=new ConfigurationItem(t,n),this},defaultIconSet:function(e,t){var n="$default";return config[n]||(config[n]=new ConfigurationItem(e,t)),config[n].iconSize=t||config.defaultIconSize,this},defaultIconSize:function(e){return config.defaultIconSize=e,this},preloadIcons:function(e){var t=this,n=[{id:"md-tabs-arrow",url:"md-tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"md-close",url:"md-close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"md-cancel",url:"md-cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'},{id:"md-menu",url:"md-menu.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100"><path d="M 50 0 L 100 14 L 92 80 L 50 100 L 8 80 L 0 14 Z" fill="#b2b2b2"></path><path d="M 50 5 L 6 18 L 13.5 77 L 50 94 Z" fill="#E42939"></path><path d="M 50 5 L 94 18 L 86.5 77 L 50 94 Z" fill="#B72833"></path><path d="M 50 7 L 83 75 L 72 75 L 65 59 L 50 59 L 50 50 L 61 50 L 50 26 Z" fill="#b2b2b2"></path><path d="M 50 7 L 17 75 L 28 75 L 35 59 L 50 59 L 50 50 L 39 50 L 50 26 Z" fill="#fff"></path></svg>'},{id:"md-toggle-arrow",url:"md-toggle-arrow-svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'}];n.forEach(function(n){t.icon(n.id,n.url),e.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache",function(e,t,n,o){return this.preloadIcons(o),new MdIconService(config,e,t,n,o)}]},function(){function e(e,t){function n(t,n,o){e(n)}function o(e,n,o){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setInvalid=function(e){n.toggleClass("md-input-invalid",!!e)},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}return o.$inject=["$scope","$element","$attrs"],{restrict:"E",link:n,controller:o}}function t(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){o&&!n.mdNoFloat&&(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function n(e,t,n){function o(o,r,a,i){function d(e){return m.setHasValue(!s.$isEmpty(e)),e}function c(){m.setHasValue(r.val().length>0||(r[0].validity||{}).badInput)}function l(){function n(e){return l(),e}function a(){c.style.height="auto",c.scrollTop=0;var e=i();e&&(c.style.height=e+"px")}function i(){var e=c.scrollHeight-c.offsetHeight;return c.offsetHeight+(e>0?e:0)}function d(e){c.scrollTop=0;var t=c.scrollHeight-c.offsetHeight,n=c.offsetHeight+t;c.style.height=n+"px"}var c=r[0],l=e.debounce(a,1);s?(s.$formatters.push(n),s.$viewChangeListeners.push(n)):l(),r.on("keydown input",l),r.on("scroll",d),angular.element(t).on("resize",l),o.$on("$destroy",function(){angular.element(t).off("resize",l)})}var m=i[0],s=i[1]||e.fakeNgModel(),u=angular.isDefined(a.readonly);if(m){if(m.input)throw new Error("<md-input-container> can only have *one* <input> or <textarea> child element!");m.input=r,m.label||n.expect(r,"aria-label",r.attr("placeholder")),r.addClass("md-input"),r.attr("id")||r.attr("id","input_"+e.nextUid()),"textarea"===r[0].tagName.toLowerCase()&&l();var p=m.isErrorGetter||function(){return s.$invalid&&s.$touched};o.$watch(p,m.setInvalid),
	s.$parsers.push(d),s.$formatters.push(d),r.on("input",c),u||r.on("focus",function(e){m.setFocused(!0)}).on("blur",function(e){m.setFocused(!1),c()}),o.$on("$destroy",function(){m.setFocused(!1),m.setHasValue(!1),m.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:o}}function o(e){function t(t,n,o,r){function a(e){return l.text((n.val()||e||"").length+"/"+i),e}var i,d=r[0],c=r[1],l=angular.element('<div class="md-char-counter">');o.$set("ngTrim","false"),c.element.append(l),d.$formatters.push(a),d.$viewChangeListeners.push(a),n.on("input keydown",function(){a()}),t.$watch(o.mdMaxlength,function(t){i=t,angular.isNumber(t)&&t>0?(l.parent().length||e.enter(l,c.element,angular.element(c.element[0].lastElementChild)),a()):e.leave(l)}),d.$validators["md-maxlength"]=function(e,t){return!angular.isNumber(i)||0>i?!0:(e||n.val()||t||"").length<=i}}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:t}}function r(e){function t(t,o,r,a){if(a&&-1==n.indexOf(o[0].nodeName)&&!angular.isDefined(a.element.attr("md-no-float"))){var i=r.placeholder;if(o.removeAttr("placeholder"),0==a.element.find("label").length){var d='<label ng-click="delegateClick()">'+i+"</label>";a.element.addClass("md-icon-float"),a.element.prepend(d)}else e.warn("The placeholder='"+i+"' will be ignored since this md-input-container has a child label element.")}}var n=["MD-SELECT"];return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:t}}angular.module("material.components.input",["material.core"]).directive("mdInputContainer",e).directive("label",t).directive("input",n).directive("textarea",n).directive("mdMaxlength",o).directive("placeholder",r),e.$inject=["$mdTheming","$parse"],n.$inject=["$mdUtil","$window","$mdAria"],o.$inject=["$animate"],r.$inject=["$log"]}(),angular.module("material.components.list",["material.core"]).controller("MdListController",MdListController).directive("mdList",mdListDirective).directive("mdListItem",mdListItemDirective),mdListDirective.$inject=["$mdTheming"],mdListItemDirective.$inject=["$mdAria","$mdConstant","$timeout"],MdListController.$inject=["$scope","$element","$mdInkRipple"],angular.module("material.components.progressCircular",["material.core"]).directive("mdProgressCircular",MdProgressCircularDirective),MdProgressCircularDirective.$inject=["$mdConstant","$mdTheming"],angular.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",MdProgressLinearDirective),MdProgressLinearDirective.$inject=["$$rAF","$mdConstant","$mdTheming"];var transforms=function(){function e(e){var t=e/100,n=(e-100)/2;return"translateX("+n.toString()+"%) scale("+t.toString()+", 1)"}for(var t=new Array(101),n=0;101>n;n++)t[n]=e(n);return t}();angular.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",mdRadioGroupDirective).directive("mdRadioButton",mdRadioButtonDirective),mdRadioGroupDirective.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],mdRadioButtonDirective.$inject=["$mdAria","$mdUtil","$mdTheming"];var SELECT_EDGE_MARGIN=8,selectNextId=0;angular.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",SelectDirective).directive("mdSelectMenu",SelectMenuDirective).directive("mdOption",OptionDirective).directive("mdOptgroup",OptgroupDirective).provider("$mdSelect",SelectProvider),SelectDirective.$inject=["$mdSelect","$mdUtil","$mdTheming","$mdAria","$interpolate","$compile","$parse"],SelectMenuDirective.$inject=["$parse","$mdUtil","$mdTheming"],OptionDirective.$inject=["$mdInkRipple","$mdUtil"],SelectProvider.$inject=["$$interimElementProvider"],angular.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",SidenavService).directive("mdSidenav",SidenavDirective).directive("mdSidenavFocus",SidenavFocusDirective).controller("$mdSidenavController",SidenavController),SidenavService.$inject=["$mdComponentRegistry","$q"],SidenavDirective.$inject=["$timeout","$animate","$parse","$log","$mdMedia","$mdConstant","$compile","$mdTheming","$q","$document"],SidenavController.$inject=["$scope","$element","$attrs","$mdComponentRegistry","$q"],angular.module("material.components.slider",["material.core"]).directive("mdSlider",SliderDirective),SliderDirective.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse"],angular.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",MdSticky),MdSticky.$inject=["$document","$mdConstant","$compile","$$rAF","$mdUtil"],angular.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",MdSubheaderDirective),MdSubheaderDirective.$inject=["$mdSticky","$compile","$mdTheming"],angular.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",getDirective("SwipeLeft")).directive("mdSwipeRight",getDirective("SwipeRight")),angular.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",MdSwitch),MdSwitch.$inject=["mdCheckboxDirective","$mdTheming","$mdUtil","$document","$mdConstant","$parse","$$rAF","$mdGesture"],angular.module("material.components.tabs",["material.core","material.components.icon"]),angular.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",MdToastDirective).provider("$mdToast",MdToastProvider),MdToastProvider.$inject=["$$interimElementProvider"],angular.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",mdToolbarDirective),mdToolbarDirective.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate","$timeout"],angular.module("material.components.tooltip",["material.core"]).directive("mdTooltip",MdTooltipDirective),MdTooltipDirective.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming","$rootElement","$animate","$q"],angular.module("material.components.whiteframe",[]),angular.module("material.components.autocomplete").controller("MdAutocompleteCtrl",MdAutocompleteCtrl);var ITEM_HEIGHT=41,MAX_HEIGHT=5.5*ITEM_HEIGHT,MENU_PADDING=8;MdAutocompleteCtrl.$inject=["$scope","$element","$mdUtil","$mdConstant","$timeout","$mdTheming","$window","$animate","$rootElement"],angular.module("material.components.autocomplete").directive("mdAutocomplete",MdAutocomplete),MdAutocomplete.$inject=["$mdTheming","$mdUtil"],angular.module("material.components.autocomplete").controller("MdHighlightCtrl",MdHighlightCtrl),MdHighlightCtrl.$inject=["$scope","$element","$interpolate"],angular.module("material.components.autocomplete").directive("mdHighlightText",MdHighlight),angular.module("material.components.autocomplete").directive("mdAutocompleteListItem",MdAutocompleteListItem),MdAutocompleteListItem.$inject=["$compile","$mdUtil"],angular.module("material.components.autocomplete").directive("mdAutocompleteParentScope",MdAutocompleteParentScope),MdAutocompleteParentScope.$inject=["$compile","$mdUtil"],angular.module("material.components.chips").directive("mdChip",MdChip);var DELETE_HINT_TEMPLATE='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>';MdChip.$inject=["$mdTheming"],angular.module("material.components.chips").directive("mdChipRemove",MdChipRemove),MdChipRemove.$inject=["$timeout"],angular.module("material.components.chips").directive("mdChipTransclude",MdChipTransclude),MdChipTransclude.$inject=["$compile","$mdUtil"],angular.module("material.components.chips").controller("MdChipsCtrl",MdChipsCtrl),MdChipsCtrl.$inject=["$scope","$mdConstant","$log","$element","$timeout"],MdChipsCtrl.prototype.inputKeydown=function(e){var t=this.getChipBuffer();switch(e.keyCode){case this.$mdConstant.KEY_CODE.ENTER:if(this.$scope.requireMatch||!t)break;e.preventDefault(),this.appendChip(t),this.resetChipBuffer();break;case this.$mdConstant.KEY_CODE.BACKSPACE:if(t)break;e.stopPropagation(),this.items.length&&this.selectAndFocusChipSafe(this.items.length-1)}},MdChipsCtrl.prototype.chipKeydown=function(e){if(!this.getChipBuffer())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;e.preventDefault(),this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),this.selectedChip<0&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},MdChipsCtrl.prototype.getPlaceholder=function(){var e=this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.placeholder:this.secondaryPlaceholder},MdChipsCtrl.prototype.removeAndSelectAdjacentChip=function(e){var t=this.getAdjacentChipIndex(e);this.removeChip(e),this.$timeout(function(){this.selectAndFocusChipSafe(t)}.bind(this))},MdChipsCtrl.prototype.resetSelectedChip=function(){this.selectedChip=-1},MdChipsCtrl.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},MdChipsCtrl.prototype.appendChip=function(e){this.items.indexOf(e)+1||(this.useMdOnAppend&&this.mdOnAppend&&(e=this.mdOnAppend({$chip:e})),this.items.push(e))},MdChipsCtrl.prototype.useMdOnAppendExpression=function(){this.useMdOnAppend=!0},MdChipsCtrl.prototype.getChipBuffer=function(){return this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer},MdChipsCtrl.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},MdChipsCtrl.prototype.removeChip=function(e){this.items.splice(e,1)},MdChipsCtrl.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.onFocus()},MdChipsCtrl.prototype.selectAndFocusChipSafe=function(e){return this.items.length?e===this.items.length?this.onFocus():(e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),void this.focusChip(e)):(this.selectChip(-1),void this.onFocus())},MdChipsCtrl.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?this.selectedChip=e:this.$log.warn("Selected Chip index out of bounds; ignoring.")},MdChipsCtrl.prototype.selectAndFocusChip=function(e){this.selectChip(e),-1!=e&&this.focusChip(e)},MdChipsCtrl.prototype.focusChip=function(e){this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content').focus()},MdChipsCtrl.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},MdChipsCtrl.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},MdChipsCtrl.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.resetSelectedChip()},MdChipsCtrl.prototype.onInputBlur=function(){this.inputHasFocus=!1},MdChipsCtrl.prototype.configureUserInput=function(e){this.userInputElement=e;var t=e.controller("ngModel");t!=this.ngModelCtrl&&(this.userInputNgModelCtrl=t);var n=this.$scope,o=this;e.attr({tabindex:0}).on("keydown",function(e){n.$apply(function(){o.inputKeydown(e)})}).on("focus",o.onInputFocus.bind(o)).on("blur",o.onInputBlur.bind(o))},MdChipsCtrl.prototype.configureAutocomplete=function(e){e.registerSelectedItemWatcher(function(e){e&&(this.appendChip(e),this.resetChipBuffer())}.bind(this)),this.$element.find("input").on("focus",this.onInputFocus.bind(this)).on("blur",this.onInputBlur.bind(this))},MdChipsCtrl.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0},angular.module("material.components.chips").directive("mdChips",MdChips);var MD_CHIPS_TEMPLATE='    <md-chips-wrap        ng-if="!$mdChipsCtrl.readonly || $mdChipsCtrl.items.length > 0"        ng-keydown="$mdChipsCtrl.chipKeydown($event)"        ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus() }"        class="md-chips">      <md-chip ng-repeat="$chip in $mdChipsCtrl.items"          index="{{$index}}"          ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index}">        <div class="md-chip-content"            tabindex="-1"            aria-hidden="true"            ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"            md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>        <div class="md-chip-remove-container"            md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>      </md-chip>      <div ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl"          class="md-chip-input-container"          md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>      </div>    </md-chips-wrap>',CHIP_INPUT_TEMPLATE='      <input          tabindex="0"          placeholder="{{$mdChipsCtrl.getPlaceholder()}}"          aria-label="{{$mdChipsCtrl.getPlaceholder()}}"          ng-model="$mdChipsCtrl.chipBuffer"          ng-focus="$mdChipsCtrl.onInputFocus()"          ng-blur="$mdChipsCtrl.onInputBlur()"          ng-keydown="$mdChipsCtrl.inputKeydown($event)">',CHIP_DEFAULT_TEMPLATE="    <span>{{$chip}}</span>",CHIP_REMOVE_TEMPLATE='    <button        class="md-chip-remove"        ng-if="!$mdChipsCtrl.readonly"        ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"        aria-hidden="true"        tabindex="-1">      <md-icon md-svg-icon="md-close"></md-icon>      <span class="md-visually-hidden">        {{$mdChipsCtrl.deleteButtonLabel}}      </span>    </button>';MdChips.$inject=["$mdTheming","$mdUtil","$compile","$timeout"],angular.module("material.components.chips").controller("MdContactChipsCtrl",MdContactChipsCtrl),MdContactChipsCtrl.prototype.queryContact=function(e){var t=this.contactQuery({$query:e});return this.filterSelected?t.filter(this.filterSelectedContacts.bind(this)):t},MdContactChipsCtrl.prototype.filterSelectedContacts=function(e){return-1==this.contacts.indexOf(e)},angular.module("material.components.chips").directive("mdContactChips",MdContactChips);var MD_CONTACT_CHIPS_TEMPLATE='    <md-chips class="md-contact-chips"        ng-model="$mdContactChipsCtrl.contacts"        md-require-match="$mdContactChipsCtrl.requireMatch"        md-autocomplete-snap>        <md-autocomplete            md-menu-class="md-contact-chips-suggestions"            md-selected-item="$mdContactChipsCtrl.selectedItem"            md-search-text="$mdContactChipsCtrl.searchText"            md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"            md-item-text="$mdContactChipsCtrl.mdContactName"            md-no-cache="$mdContactChipsCtrl.filterSelected"            md-autoselect            placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">          <div class="md-contact-suggestion">            <img                 ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                alt="{{item[$mdContactChipsCtrl.contactName]}}" />            <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText">              {{item[$mdContactChipsCtrl.contactName]}}            </span>            <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>          </div>        </md-autocomplete>        <md-chip-template>          <div class="md-contact-avatar">            <img                 ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                alt="{{$chip[$mdContactChipsCtrl.contactName]}}" />          </div>          <div class="md-contact-name">            {{$chip[$mdContactChipsCtrl.contactName]}}          </div>        </md-chip-template>    </md-chips>';MdContactChips.$inject=["$mdTheming","$mdUtil"],angular.module("material.components.tabs").directive("mdTab",MdTab),angular.module("material.components.tabs").directive("mdTabItem",MdTabItem),angular.module("material.components.tabs").directive("mdTabScroll",MdTabScroll),MdTabScroll.$inject=["$parse"],angular.module("material.components.tabs").controller("MdTabsController",MdTabsController),MdTabsController.$inject=["$scope","$element","$window","$timeout","$mdConstant","$mdInkRipple","$mdUtil","$animate"],angular.module("material.components.tabs").directive("mdTabs",MdTabs),MdTabs.$inject=["$mdTheming","$mdUtil","$compile"],angular.module("material.components.tabs").directive("mdTemplate",MdTemplate),MdTemplate.$inject=["$compile"],function(){angular.module("material.core").constant("$MD_THEME_CSS","/* mixin definition ; sets LTR and RTL within the same style call */md-autocomplete.md-THEME_NAME-theme {  background: '{{background-50}}'; }  md-autocomplete.md-THEME_NAME-theme button md-icon path {    fill: '{{background-600}}'; }  md-autocomplete.md-THEME_NAME-theme button:after {    background: '{{background-600-0.3}}'; }.md-autocomplete-suggestions.md-THEME_NAME-theme {  background: '{{background-50}}'; }  .md-autocomplete-suggestions.md-THEME_NAME-theme li {    color: '{{background-900}}'; }    .md-autocomplete-suggestions.md-THEME_NAME-theme li .highlight {      color: '{{background-600}}'; }    .md-autocomplete-suggestions.md-THEME_NAME-theme li:hover, .md-autocomplete-suggestions.md-THEME_NAME-theme li.selected {      background: '{{background-200}}'; }md-backdrop.md-opaque.md-THEME_NAME-theme {  background-color: '{{foreground-4-0.5}}'; }md-bottom-sheet.md-THEME_NAME-theme {  background-color: '{{background-50}}';  border-top-color: '{{background-300}}'; }  md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item {    color: '{{foreground-1}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    background-color: '{{background-50}}'; }  md-bottom-sheet.md-THEME_NAME-theme .md-subheader {    color: '{{foreground-1}}'; }a.md-button.md-THEME_NAME-theme, .md-button.md-THEME_NAME-theme {  border-radius: 3px; }  a.md-button.md-THEME_NAME-theme:not([disabled]):hover, .md-button.md-THEME_NAME-theme:not([disabled]):hover {    background-color: '{{background-500-0.2}}'; }  a.md-button.md-THEME_NAME-theme:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme:not([disabled]).md-focused {    background-color: '{{background-500-0.2}}'; }  a.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover, .md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover {    background-color: transparent; }  a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab md-icon, .md-button.md-THEME_NAME-theme.md-fab md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  a.md-button.md-THEME_NAME-theme.md-primary, .md-button.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }    a.md-button.md-THEME_NAME-theme.md-primary.md-raised, a.md-button.md-THEME_NAME-theme.md-primary.md-fab, .md-button.md-THEME_NAME-theme.md-primary.md-raised, .md-button.md-THEME_NAME-theme.md-primary.md-fab {      color: '{{primary-contrast}}';      background-color: '{{primary-color}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon {        color: '{{primary-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover {        background-color: '{{primary-color}}'; }      a.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused {        background-color: '{{primary-600}}'; }    a.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon {      color: '{{primary-color}}'; }  a.md-button.md-THEME_NAME-theme.md-fab, .md-button.md-THEME_NAME-theme.md-fab {    border-radius: 50%;    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon {      color: '{{accent-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover {      background-color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused {      background-color: '{{accent-A700}}'; }  a.md-button.md-THEME_NAME-theme.md-raised, .md-button.md-THEME_NAME-theme.md-raised {    color: '{{background-contrast}}';    background-color: '{{background-50}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]) .md-icon {      color: '{{background-contrast}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover {      background-color: '{{background-50}}'; }    a.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused {      background-color: '{{background-200}}'; }  a.md-button.md-THEME_NAME-theme.md-warn, .md-button.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }    a.md-button.md-THEME_NAME-theme.md-warn.md-raised, a.md-button.md-THEME_NAME-theme.md-warn.md-fab, .md-button.md-THEME_NAME-theme.md-warn.md-raised, .md-button.md-THEME_NAME-theme.md-warn.md-fab {      color: '{{warn-contrast}}';      background-color: '{{warn-color}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon {        color: '{{warn-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover {        background-color: '{{warn-color}}'; }      a.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused {        background-color: '{{warn-700}}'; }    a.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon {      color: '{{warn-color}}'; }  a.md-button.md-THEME_NAME-theme.md-accent, .md-button.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }    a.md-button.md-THEME_NAME-theme.md-accent.md-raised, a.md-button.md-THEME_NAME-theme.md-accent.md-fab, .md-button.md-THEME_NAME-theme.md-accent.md-raised, .md-button.md-THEME_NAME-theme.md-accent.md-fab {      color: '{{accent-contrast}}';      background-color: '{{accent-color}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon {        color: '{{accent-contrast}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover {        background-color: '{{accent-color}}'; }      a.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, a.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused, .md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused {        background-color: '{{accent-700}}'; }    a.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon, .md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon {      color: '{{accent-color}}'; }  a.md-button.md-THEME_NAME-theme[disabled], a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], a.md-button.md-THEME_NAME-theme.md-accent[disabled], a.md-button.md-THEME_NAME-theme.md-warn[disabled], .md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-accent[disabled], .md-button.md-THEME_NAME-theme.md-warn[disabled] {    color: '{{foreground-3}}';    cursor: not-allowed; }    a.md-button.md-THEME_NAME-theme[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, a.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon, .md-button.md-THEME_NAME-theme[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon, .md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon {      color: '{{foreground-3}}'; }  a.md-button.md-THEME_NAME-theme.md-raised[disabled], a.md-button.md-THEME_NAME-theme.md-fab[disabled], .md-button.md-THEME_NAME-theme.md-raised[disabled], .md-button.md-THEME_NAME-theme.md-fab[disabled] {    background-color: '{{foreground-4}}'; }  a.md-button.md-THEME_NAME-theme[disabled], .md-button.md-THEME_NAME-theme[disabled] {    background-color: transparent; }md-card.md-THEME_NAME-theme {  background-color: '{{background-color}}';  border-radius: 2px; }  md-card.md-THEME_NAME-theme .md-card-image {    border-radius: 2px 2px 0 0; }md-checkbox.md-THEME_NAME-theme .md-ripple {  color: '{{accent-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon {  background-color: '{{accent-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple {  color: '{{primary-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple {  color: '{{background-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon {  background-color: '{{primary-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple {  color: '{{warn-600}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-icon {  border-color: '{{foreground-2}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon {  background-color: '{{warn-color-0.87}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after {  border-color: '{{background-200}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-icon {  border-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon {  background-color: '{{foreground-3}}'; }md-checkbox.md-THEME_NAME-theme[disabled] .md-label {  color: '{{foreground-3}}'; }md-chips.md-THEME_NAME-theme .md-chips {  box-shadow: 0 1px '{{background-300}}'; }  md-chips.md-THEME_NAME-theme .md-chips.md-focused {    box-shadow: 0 2px '{{primary-color}}'; }md-chips.md-THEME_NAME-theme .md-chip {  background: '{{background-300}}';  color: '{{background-800}}'; }  md-chips.md-THEME_NAME-theme .md-chip.md-focused {    background: '{{primary-color}}';    color: '{{primary-contrast}}'; }    md-chips.md-THEME_NAME-theme .md-chip.md-focused md-icon {      color: '{{primary-contrast}}'; }md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path {  fill: '{{background-500}}'; }.md-contact-suggestion span.md-contact-email {  color: '{{background-400}}'; }md-content.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-dialog.md-THEME_NAME-theme {  border-radius: 4px;  background-color: '{{background-color}}'; }  md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions {    border-top-color: '{{foreground-4}}'; }md-divider.md-THEME_NAME-theme {  border-top-color: '{{foreground-4}}'; }md-icon.md-THEME_NAME-theme {  color: '{{foreground-2}}'; }  md-icon.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  md-icon.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  md-icon.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-input-container.md-THEME_NAME-theme .md-input {  color: '{{foreground-1}}';  border-color: '{{foreground-4}}';  text-shadow: '{{foreground-shadow}}'; }  md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder, md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder, md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder {    color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme > md-icon {  color: '{{foreground-1}}'; }md-input-container.md-THEME_NAME-theme label, md-input-container.md-THEME_NAME-theme .md-placeholder {  text-shadow: '{{foreground-shadow}}';  color: '{{foreground-3}}'; }md-input-container.md-THEME_NAME-theme ng-messages, md-input-container.md-THEME_NAME-theme [ng-message], md-input-container.md-THEME_NAME-theme [data-ng-message], md-input-container.md-THEME_NAME-theme [x-ng-message] {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label {  color: '{{foreground-2}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input {  border-color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon {  color: '{{primary-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input {  border-color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label {  color: '{{accent-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input {  border-color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid.md-input-focused label {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme.md-input-invalid ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid data-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid x-ng-message, md-input-container.md-THEME_NAME-theme.md-input-invalid [ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [data-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid [x-ng-message], md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter {  color: '{{warn-500}}'; }md-input-container.md-THEME_NAME-theme .md-input[disabled], [disabled] md-input-container.md-THEME_NAME-theme .md-input {  border-bottom-color: transparent;  color: '{{foreground-3}}';  background-image: linear-gradient(to right, '{{foreground-4}}' 0%, '{{foreground-4}}' 33%, transparent 0%);  background-image: -ms-linear-gradient(left, transparent 0%, '{{foreground-4}}' 100%); }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4 {  color: '{{foreground-1}}'; }md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p, md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p {  color: '{{foreground-2}}'; }md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style {  background-color: '{{background-100}}'; }md-list.md-THEME_NAME-theme md-list-item > md-icon {  color: '{{foreground-2}}'; }  md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight {    color: '{{primary-color}}'; }    md-list.md-THEME_NAME-theme md-list-item > md-icon.md-highlight.md-accent {      color: '{{accent-color}}'; }md-list.md-THEME_NAME-theme md-list-item button {  background-color: '{{background-color}}'; }  md-list.md-THEME_NAME-theme md-list-item button.md-button:not([disabled]):hover {    background-color: '{{background-color}}'; }md-progress-circular.md-THEME_NAME-theme {  background-color: transparent; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-gap {    border-top-color: '{{primary-color}}';    border-bottom-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-top-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-right .md-half-circle {    border-right-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme .md-inner .md-left .md-half-circle {    border-left-color: '{{primary-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-gap {    border-top-color: '{{warn-color}}';    border-bottom-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-top-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-right .md-half-circle {    border-right-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-warn .md-inner .md-left .md-half-circle {    border-left-color: '{{warn-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-gap {    border-top-color: '{{accent-color}}';    border-bottom-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle, md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-top-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-right .md-half-circle {    border-right-color: '{{accent-color}}'; }  md-progress-circular.md-THEME_NAME-theme.md-accent .md-inner .md-left .md-half-circle {    border-left-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme .md-container {  background-color: '{{primary-100}}'; }md-progress-linear.md-THEME_NAME-theme .md-bar {  background-color: '{{primary-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-container {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar {  background-color: '{{warn-color}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-container {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar {  background-color: '{{accent-color}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1 {  background-color: '{{warn-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before {  background: radial-gradient('{{warn-100}}' 0%, '{{warn-100}}' 16%, transparent 42%); }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1 {  background-color: '{{accent-100}}'; }md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before {  background: radial-gradient('{{accent-100}}' 0%, '{{accent-100}}' 16%, transparent 42%); }md-radio-button.md-THEME_NAME-theme .md-off {  border-color: '{{foreground-2}}'; }md-radio-button.md-THEME_NAME-theme .md-on {  background-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-off {  border-color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple {  color: '{{accent-color-0.87}}'; }md-radio-button.md-THEME_NAME-theme .md-container .md-ripple {  color: '{{accent-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on {  background-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off {  border-color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple {  color: '{{primary-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple {  color: '{{primary-600}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on {  background-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off {  border-color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple {  color: '{{warn-color-0.87}}'; }md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple, md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple {  color: '{{warn-600}}'; }md-radio-group.md-THEME_NAME-theme[disabled], md-radio-button.md-THEME_NAME-theme[disabled] {  color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off {    border-color: '{{foreground-3}}'; }  md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on, md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on {    border-color: '{{foreground-3}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before {  background-color: '{{accent-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked:not([disabled]).md-primary .md-container:before {  background-color: '{{primary-color-0.26}}'; }md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before {  background-color: '{{warn-color-0.26}}'; }md-select.md-THEME_NAME-theme.ng-invalid.ng-dirty .md-select-label {  color: '{{warn-500}}' !important;  border-bottom-color: '{{warn-500}}' !important; }md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label {  border-bottom-color: '{{primary-color}}';  color: '{{ foreground-1 }}'; }  md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-label.md-placeholder {    color: '{{ foreground-1 }}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-label {  border-bottom-color: '{{accent-color}}'; }md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-label {  border-bottom-color: '{{warn-color}}'; }md-select.md-THEME_NAME-theme[disabled] .md-select-label {  color: '{{foreground-3}}'; }  md-select.md-THEME_NAME-theme[disabled] .md-select-label.md-placeholder {    color: '{{foreground-3}}'; }md-select.md-THEME_NAME-theme .md-select-label {  border-bottom-color: '{{foreground-4}}'; }  md-select.md-THEME_NAME-theme .md-select-label.md-placeholder {    color: '{{foreground-2}}'; }md-select-menu.md-THEME_NAME-theme md-optgroup {  color: '{{foreground-2}}'; }  md-select-menu.md-THEME_NAME-theme md-optgroup md-option {    color: '{{foreground-1}}'; }md-select-menu.md-THEME_NAME-theme md-option[selected] {  color: '{{primary-500}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected]:focus {    color: '{{primary-600}}'; }  md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent {    color: '{{accent-500}}'; }    md-select-menu.md-THEME_NAME-theme md-option[selected].md-accent:focus {      color: '{{accent-600}}'; }md-select-menu.md-THEME_NAME-theme md-option:focus:not([selected]) {  background: '{{background-200}}'; }md-sidenav.md-THEME_NAME-theme {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track {  background-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme .md-track-ticks {  background-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-focus-thumb {  background-color: '{{foreground-2}}'; }md-slider.md-THEME_NAME-theme .md-focus-ring {  border-color: '{{foreground-4}}'; }md-slider.md-THEME_NAME-theme .md-disabled-thumb {  border-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme.md-min .md-thumb:after {  background-color: '{{background-color}}'; }md-slider.md-THEME_NAME-theme .md-track.md-track-fill {  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb:after {  border-color: '{{accent-color}}';  background-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-sign {  background-color: '{{accent-color}}'; }  md-slider.md-THEME_NAME-theme .md-sign:after {    border-top-color: '{{accent-color}}'; }md-slider.md-THEME_NAME-theme .md-thumb-text {  color: '{{accent-contrast}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill {  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after {  border-color: '{{warn-color}}';  background-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-sign {  background-color: '{{warn-color}}'; }  md-slider.md-THEME_NAME-theme.md-warn .md-sign:after {    border-top-color: '{{warn-color}}'; }md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text {  color: '{{warn-contrast}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill {  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after {  border-color: '{{primary-color}}';  background-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-sign {  background-color: '{{primary-color}}'; }  md-slider.md-THEME_NAME-theme.md-primary .md-sign:after {    border-top-color: '{{primary-color}}'; }md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text {  color: '{{primary-contrast}}'; }md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after {  border-color: '{{foreground-3}}'; }md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after {  background-color: '{{foreground-3}}'; }.md-subheader.md-THEME_NAME-theme {  color: '{{ foreground-2-0.23 }}';  background-color: '{{background-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-primary {    color: '{{primary-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-accent {    color: '{{accent-color}}'; }  .md-subheader.md-THEME_NAME-theme.md-warn {    color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme .md-thumb {  background-color: '{{background-50}}'; }md-switch.md-THEME_NAME-theme .md-bar {  background-color: '{{background-500}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-thumb {  background-color: '{{accent-color}}'; }md-switch.md-THEME_NAME-theme.md-checked .md-bar {  background-color: '{{accent-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before {  background-color: '{{accent-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb {  background-color: '{{primary-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar {  background-color: '{{primary-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before {  background-color: '{{primary-color-0.26}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb {  background-color: '{{warn-color}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar {  background-color: '{{warn-color-0.5}}'; }md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before {  background-color: '{{warn-color-0.26}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-thumb {  background-color: '{{background-400}}'; }md-switch.md-THEME_NAME-theme[disabled] .md-bar {  background-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: transparent;  border-color: '{{foreground-4}}'; }md-tabs.md-THEME_NAME-theme .md-paginator md-icon {  color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{accent-color}}';  background: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme .md-tab {  color: '{{foreground-2}}'; }  md-tabs.md-THEME_NAME-theme .md-tab[disabled] {    color: '{{foreground-3}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-active, md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    color: '{{primary-color}}'; }  md-tabs.md-THEME_NAME-theme .md-tab.md-focused {    background: '{{primary-color-0.1}}'; }  md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container {    color: '{{accent-100}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tabs-wrapper {  background-color: '{{accent-color}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]) {  color: '{{accent-100}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-focused {    color: '{{accent-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-accent md-tab-item:not([disabled]).md-focused {    background: '{{accent-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-accent md-ink-bar {  color: '{{primary-600-1}}';  background: '{{primary-600-1}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tabs-wrapper {  background-color: '{{primary-color}}'; }md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]) {  color: '{{primary-100}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-focused {    color: '{{primary-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-primary md-tab-item:not([disabled]).md-focused {    background: '{{primary-contrast-0.1}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tabs-wrapper {  background-color: '{{warn-color}}'; }md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]) {  color: '{{warn-100}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-active, md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-focused {    color: '{{warn-contrast}}'; }  md-tabs.md-THEME_NAME-theme.md-warn md-tab-item:not([disabled]).md-focused {    background: '{{warn-contrast-0.1}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{primary-color}}'; }md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{primary-100}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{primary-contrast}}'; }  md-toolbar > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{primary-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{accent-color}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{accent-100}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{accent-contrast}}'; }  md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{accent-contrast-0.1}}'; }md-toolbar.md-accent > md-tabs.md-THEME_NAME-theme md-ink-bar {  color: '{{primary-600-1}}';  background: '{{primary-600-1}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tabs-wrapper {  background-color: '{{warn-color}}'; }md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]) {  color: '{{warn-100}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-active, md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    color: '{{warn-contrast}}'; }  md-toolbar.md-warn > md-tabs.md-THEME_NAME-theme md-tab-item:not([disabled]).md-focused {    background: '{{warn-contrast-0.1}}'; }md-toast.md-THEME_NAME-theme {  background-color: #323232;  color: '{{background-50}}'; }  md-toast.md-THEME_NAME-theme .md-button {    color: '{{background-50}}'; }    md-toast.md-THEME_NAME-theme .md-button.md-highlight {      color: '{{primary-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-accent {        color: '{{accent-A200}}'; }      md-toast.md-THEME_NAME-theme .md-button.md-highlight.md-warn {        color: '{{warn-A200}}'; }md-toolbar.md-THEME_NAME-theme {  background-color: '{{primary-color}}';  color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme md-icon {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme .md-button {    color: '{{primary-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-accent {    background-color: '{{accent-color}}';    color: '{{accent-contrast}}'; }  md-toolbar.md-THEME_NAME-theme.md-warn {    background-color: '{{warn-color}}';    color: '{{warn-contrast}}'; }md-tooltip.md-THEME_NAME-theme {  color: '{{background-A100}}'; }  md-tooltip.md-THEME_NAME-theme .md-background {    background-color: '{{foreground-2}}'; }");
	
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 AngularJS v1.4.0-rc.1
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(y,u,z){'use strict';function s(f,k,p){n.directive(f,["$parse","$swipe",function(d,e){return function(l,m,g){function h(a){if(!b)return!1;var c=Math.abs(a.y-b.y);a=(a.x-b.x)*k;return q&&75>c&&0<a&&30<a&&.3>c/a}var c=d(g[f]),b,q,a=["touch"];u.isDefined(g.ngSwipeDisableMouse)||a.push("mouse");e.bind(m,{start:function(a,c){b=a;q=!0},cancel:function(a){q=!1},end:function(a,b){h(a)&&l.$apply(function(){m.triggerHandler(p);c(l,{$event:b})})}},a)}}])}var n=u.module("ngTouch",[]);n.factory("$swipe",
	[function(){function f(d){d=d.originalEvent||d;var e=d.touches&&d.touches.length?d.touches:[d];d=d.changedTouches&&d.changedTouches[0]||e[0];return{x:d.clientX,y:d.clientY}}function k(d,e){var l=[];u.forEach(d,function(d){(d=p[d][e])&&l.push(d)});return l.join(" ")}var p={mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},touch:{start:"touchstart",move:"touchmove",end:"touchend",cancel:"touchcancel"}};return{bind:function(d,e,l){var m,g,h,c,b=!1;l=l||["mouse","touch"];d.on(k(l,"start"),function(a){h=
	f(a);b=!0;g=m=0;c=h;e.start&&e.start(h,a)});var q=k(l,"cancel");if(q)d.on(q,function(a){b=!1;e.cancel&&e.cancel(a)});d.on(k(l,"move"),function(a){if(b&&h){var d=f(a);m+=Math.abs(d.x-c.x);g+=Math.abs(d.y-c.y);c=d;10>m&&10>g||(g>m?(b=!1,e.cancel&&e.cancel(a)):(a.preventDefault(),e.move&&e.move(d,a)))}});d.on(k(l,"end"),function(a){b&&(b=!1,e.end&&e.end(f(a),a))})}}}]);n.config(["$provide",function(f){f.decorator("ngClickDirective",["$delegate",function(k){k.shift();return k}])}]);n.directive("ngClick",
	["$parse","$timeout","$rootElement",function(f,k,p){function d(c,b,d){for(var a=0;a<c.length;a+=2){var e=c[a+1],g=d;if(25>Math.abs(c[a]-b)&&25>Math.abs(e-g))return c.splice(a,a+2),!0}return!1}function e(c){if(!(2500<Date.now()-m)){var b=c.touches&&c.touches.length?c.touches:[c],e=b[0].clientX,b=b[0].clientY;1>e&&1>b||h&&h[0]===e&&h[1]===b||(h&&(h=null),"label"===c.target.tagName.toLowerCase()&&(h=[e,b]),d(g,e,b)||(c.stopPropagation(),c.preventDefault(),c.target&&c.target.blur()))}}function l(c){c=
	c.touches&&c.touches.length?c.touches:[c];var b=c[0].clientX,d=c[0].clientY;g.push(b,d);k(function(){for(var a=0;a<g.length;a+=2)if(g[a]==b&&g[a+1]==d){g.splice(a,a+2);break}},2500,!1)}var m,g,h;return function(c,b,h){function a(){n=!1;b.removeClass("ng-click-active")}var k=f(h.ngClick),n=!1,r,s,v,w;b.on("touchstart",function(a){n=!0;r=a.target?a.target:a.srcElement;3==r.nodeType&&(r=r.parentNode);b.addClass("ng-click-active");s=Date.now();a=a.originalEvent||a;a=(a.touches&&a.touches.length?a.touches:
	[a])[0];v=a.clientX;w=a.clientY});b.on("touchmove",function(b){a()});b.on("touchcancel",function(b){a()});b.on("touchend",function(c){var k=Date.now()-s,f=c.originalEvent||c,t=(f.changedTouches&&f.changedTouches.length?f.changedTouches:f.touches&&f.touches.length?f.touches:[f])[0],f=t.clientX,t=t.clientY,x=Math.sqrt(Math.pow(f-v,2)+Math.pow(t-w,2));n&&750>k&&12>x&&(g||(p[0].addEventListener("click",e,!0),p[0].addEventListener("touchstart",l,!0),g=[]),m=Date.now(),d(g,f,t),r&&r.blur(),u.isDefined(h.disabled)&&
	!1!==h.disabled||b.triggerHandler("click",[c]));a()});b.onclick=function(a){};b.on("click",function(a,b){c.$apply(function(){k(c,{$event:b||a})})});b.on("mousedown",function(a){b.addClass("ng-click-active")});b.on("mousemove mouseup",function(a){b.removeClass("ng-click-active")})}}]);s("ngSwipeLeft",-1,"swipeleft");s("ngSwipeRight",1,"swiperight")})(window,window.angular);
	//# sourceMappingURL=angular-touch.min.js.map


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 AngularJS v1.3.15
	 (c) 2010-2014 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(r,n,s){'use strict';n.module("ngAria",["ng"]).provider("$aria",function(){function a(a,f,g){return function(b,c,d){var k=d.$normalize(f);e[k]&&!d[k]&&b.$watch(d[a],function(b){g&&(b=!b);c.attr(f,b)})}}var e={ariaHidden:!0,ariaChecked:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaMultiline:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0};this.config=function(a){e=n.extend(e,a)};this.$get=function(){return{config:function(a){return e[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow",
	"aria-hidden",!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",!1)}]).directive("ngModel",["$aria",function(a){function e(e,b,c){return a.config(b)&&!c.attr(e)}function h(a,b){return!b.attr("role")&&b.attr("type")===a&&"INPUT"!==b[0].nodeName}function f(a,b){var c=a.type,d=a.role;return"checkbox"===(c||d)||"menuitemcheckbox"===d?"checkbox":"radio"===(c||d)||"menuitemradio"===d?"radio":"range"===c||"progressbar"===d||"slider"===d?"range":"textbox"===(c||d)||
	"TEXTAREA"===b[0].nodeName?"multiline":""}return{restrict:"A",require:"?ngModel",priority:200,link:function(g,b,c,d){function k(){return d.$modelValue}function p(){return m?(m=!1,function(a){a=c.value==d.$viewValue;b.attr("aria-checked",a);b.attr("tabindex",0-!a)}):function(a){b.attr("aria-checked",c.value==d.$viewValue)}}function q(a){b.attr("aria-checked",!d.$isEmpty(d.$viewValue))}var l=f(c,b),m=e("tabindex","tabindex",b);switch(l){case "radio":case "checkbox":h(l,b)&&b.attr("role",l);e("aria-checked",
	"ariaChecked",b)&&g.$watch(k,"radio"===l?p():q);break;case "range":h(l,b)&&b.attr("role","slider");a.config("ariaValue")&&(c.min&&!b.attr("aria-valuemin")&&b.attr("aria-valuemin",c.min),c.max&&!b.attr("aria-valuemax")&&b.attr("aria-valuemax",c.max),b.attr("aria-valuenow")||g.$watch(k,function(a){b.attr("aria-valuenow",a)}));break;case "multiline":e("aria-multiline","ariaMultiline",b)&&b.attr("aria-multiline",!0)}m&&b.attr("tabindex",0);d.$validators.required&&e("aria-required","ariaRequired",b)&&
	g.$watch(function(){return d.$error.required},function(a){b.attr("aria-required",!!a)});e("aria-invalid","ariaInvalid",b)&&g.$watch(function(){return d.$invalid},function(a){b.attr("aria-invalid",!!a)})}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled")}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",link:function(a,e,h,f){e.attr("aria-live")||e.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,
	e){return{restrict:"A",compile:function(h,f){var g=e(f.ngClick,null,!0);return function(b,c,d){function e(b,a){if(-1!==a.indexOf(b[0].nodeName))return!0}var f=["BUTTON","A","INPUT","TEXTAREA"];c.attr("role")||e(c,f)||c.attr("role","button");a.config("tabindex")&&!c.attr("tabindex")&&c.attr("tabindex",0);if(a.config("bindKeypress")&&!d.ngKeypress&&!e(c,f))c.on("keypress",function(a){function c(){g(b,{$event:a})}32!==a.keyCode&&13!==a.keyCode||b.$apply(c)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(e,
	h,f){a.config("tabindex")&&!h.attr("tabindex")&&h.attr("tabindex",0)}}])})(window,window.angular);
	//# sourceMappingURL=angular-aria.min.js.map


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	angular.module("ngMdIcons",[]).directive("ngMdIcon",function(){var e={"3d_rotation":'<path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"/><path d="M16.57 12.2c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zm.39-3.16c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-8.55 5.92c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44.23-.19.42-.43.55-.72.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33z"/><path d="M12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"/>',
	accessibility:'<path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/><path d="M21 9h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>',account_balance:'<path d="M4 10v7h3v-7H4z"/><path d="M10 10v7h3v-7h-3z"/><path d="M2 22h19v-3H2v3z"/><path d="M16 10v7h3v-7h-3z"/><path d="M11.5 1L2 6v2h19V6l-9.5-5z"/>',account_balance_wallet:'<path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9z"/><path d="M16 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM12 16h10V8H12v8z"/>',
	account_box:'<path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/>',account_child:'<circle cx="12" cy="13.49" r="1.5"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2.5c1.24 0 2.25 1.01 2.25 2.25S13.24 9 12 9 9.75 7.99 9.75 6.75 10.76 4.5 12 4.5zm5 10.56v2.5c-.45.41-.96.77-1.5 1.05v-.68c0-.34-.17-.65-.46-.92-.65-.62-1.89-1.02-3.04-1.02-.96 0-1.96.28-2.65.73l-.17.12-.21.17c.78.47 1.63.72 2.54.82l1.33.15c.37.04.66.36.66.75 0 .29-.16.53-.4.66-.28.15-.64.09-.95.09-.35 0-.69-.01-1.03-.05-.5-.06-.99-.17-1.46-.33-.49-.16-.97-.38-1.42-.64-.22-.13-.44-.27-.65-.43l-.31-.24c-.04-.02-.28-.18-.28-.23v-4.28c0-1.58 2.63-2.78 5-2.78s5 1.2 5 2.78v1.78z"/>',
	account_circle:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',add_shopping_cart:'<path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3z"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/><path d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><path d="M7.17 14.75l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/>',
	alarm:'<path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72z"/><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85z"/><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8z"/><path d="M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-16c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>',alarm_add:'<path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85z"/><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72z"/><path d="M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-16c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/><path d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/>',
	alarm_off:'<path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"/>',
	alarm_on:'<path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72z"/><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85z"/><path d="M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-16c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/><path d="M10.54 14.53L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"/>',android:'<path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10z"/><path d="M3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8z"/><path d="M20.5 8c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5z"/><path d="M15 5h-1V4h1v1zm-5 0H9V4h1v1zm5.53-2.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84z"/>',
	announcement:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/>',aspect_ratio:'<path d="M19 12h-2v3h-3v2h5v-5z"/><path d="M7 9h3V7H5v5h2V9z"/><path d="M21 19.01H3V4.99h18v14.02zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',assessment:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>',assignment:'<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>',
	assignment_ind:'<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>',assignment_late:'<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>',
	assignment_returned:'<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"/>',assignment_return:'<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"/>',assignment_turned_in:'<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>',
	autorenew:'<path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6z"/><path d="M18.76 7.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/>',backup:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>',bookmark:'<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>',
	bookmark_outline:'<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>',book:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>',bug_report:'<path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/>',
	cached:'<path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4z"/><path d="M6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/>',check_circle:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',"class":'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>',
	credit_card:'<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>',dashboard:'<path d="M3 13h8V3H3v10z"/><path d="M3 21h8v-6H3v6z"/><path d="M13 21h8V11h-8v10z"/><path d="M13 3v6h8V3h-8z"/>',"delete":'<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12z"/><path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>',description:'<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>',
	dns:'<path d="M7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13-6H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/><path d="M7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm13-6H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"/>',done:'<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',done_all:'<path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7z"/><path d="M22.24 5.59L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41z"/><path d="M.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/>',
	event:'<path d="M17 12h-5v5h5v-5z"/><path d="M19 19H5V8h14v11zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2z"/>',exit_to_app:'<path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59z"/><path d="M19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',explore:'<path d="M12 10.9c-.61 0-1.1.49-1.1 1.1 0 .61.49 1.1 1.1 1.1.61 0 1.1-.49 1.1-1.1 0-.61-.49-1.1-1.1-1.1z"/><path d="M14.19 14.19L6 18l3.81-8.19L18 6l-3.81 8.19zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>',
	extension:'<path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>',face:'<path d="M14.69 17.1c-.74.58-1.7.9-2.69.9s-1.95-.32-2.69-.9c-.22-.17-.53-.13-.7.09-.17.22-.13.53.09.7.91.72 2.09 1.11 3.3 1.11s2.39-.39 3.31-1.1c.22-.17.26-.48.09-.7-.17-.23-.49-.26-.71-.1z"/><path d="M19.96 14.82c-1.09 3.74-4.27 6.46-8.04 6.46-3.78 0-6.96-2.72-8.04-6.47-1.19-.11-2.13-1.18-2.13-2.52 0-1.27.85-2.31 1.97-2.5 2.09-1.46 3.8-3.49 4.09-5.05v-.01c1.35 2.63 6.3 5.19 11.83 5.06l.3-.03c1.28 0 2.31 1.14 2.31 2.54 0 1.38-1.02 2.51-2.29 2.52zM12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z"/><path d="M16.5 12.5c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1zm-7 0c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z"/>',
	favorite:'<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',favorite_outline:'<path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/>',
	find_in_page:'<path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59z"/><path d="M9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"/>',find_replace:'<path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4z"/><path d="M16.64 15.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"/>',
	flip_to_back:'<path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"/>',flip_to_front:'<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"/>',
	get_app:'<path d="M19 9h-4V3H9v6H5l7 7 7-7z"/><path d="M5 18v2h14v-2H5z"/>',grade:'<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>',group_work:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',
	help:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>',highlight_remove:'<path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8z"/><path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/>',
	history:'<path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/><path d="M12 8v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>',home:'<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>',https:'<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>',
	info:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>',info_outline:'<path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M11 9h2V7h-2v2zm0 8h2v-6h-2v6z"/>',input:'<path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2z"/><path d="M11 16l4-4-4-4v3H1v2h10v3z"/>',invert_colors:'<path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>',
	label:'<path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"/>',label_outline:'<path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"/>',language:'<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>',
	launch:'<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>',list:'<path d="M3 9h2V7H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2z"/><path d="M7 13h14v-2H7v2z"/><path d="M7 17h14v-2H7v2z"/><path d="M7 7v2h14V7H7z"/>',lock:'<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>',
	lock_open:'<path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/><path d="M18 20H6V10h12v10zm0-12h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/>',lock_outline:'<path d="M18 20H6V10h12zM12 2.9c1.71 0 3.1 1.39 3.1 3.1v2H9V6l-.002-.008C8.998 4.282 10.29 2.9 12 2.9zM18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"/><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>',
	loyalty:'<path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"/>',markunread_mailbox:'<path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>',
	note_add:'<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"/>',open_in_browser:'<path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2z"/><path d="M12 10l-4 4h3v6h2v-6h3l-4-4z"/>',open_in_new:'<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>',open_with:'<path d="M10 9h4V6h3l-5-5-5 5h3v3z"/><path d="M9 10H6V7l-5 5 5 5v-3h3v-4z"/><path d="M23 12l-5-5v3h-3v4h3v3l5-5z"/><path d="M14 15h-4v3H7l5 5 5-5h-3v-3z"/>',
	pageview:'<path d="M11 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/><path d="M17.59 19l-3.83-3.83c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L19 17.59 17.59 19zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',payment:'<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>',perm_camera_mic:'<path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"/>',
	perm_contact_cal:'<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/>',perm_data_setting:'<path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5z"/><path d="M18.99 20.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.71-1.01c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83z"/>',
	perm_device_info:'<path d="M13 11h-2v6h2v-6zm0-4h-2v2h2V7z"/><path d="M17 19H7V5h10v14zm0-17.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"/>',perm_identity:'<path d="M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.9c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1-1.16 0-2.1-.94-2.1-2.1 0-1.16.94-2.1 2.1-2.1"/><path d="M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1"/>',perm_media:'<path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"/>',
	perm_phone_msg:'<path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/><path d="M12 3v10l3-3h6V3h-9z"/>',perm_scan_wifi:'<path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"/>',picture_in_picture:'<path d="M19 7h-8v6h8V7z"/><path d="M21 19.01H3V4.98h18v14.03zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2z"/>',
	polymer:'<path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"/>',print:'<path d="M19 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3 7H8v-5h8v5zm3-11H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3z"/><path d="M18 3H6v4h12V3z"/>',query_builder:'<path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.01-18C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>',
	question_answer:'<path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/><path d="M17 12V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>',receipt:'<path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/>',redeem:'<path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>',
	reorder:'<path d="M3 15h18v-2H3v2z"/><path d="M3 19h18v-2H3v2z"/><path d="M3 11h18V9H3v2z"/><path d="M3 5v2h18V5H3z"/>',report_problem:'<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>',restore:'<path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/><path d="M12 8v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>',room:'<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',
	schedule:'<path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.01-18C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>',search:'<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>',settings:'<path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>',
	settings_applications:'<path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M17.25 12c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69zM19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2z"/>',
	settings_backup_restore:'<path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"/><path d="M12 3c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>',settings_bluetooth:'<path d="M15 24h2v-2h-2v2zm-8 0h2v-2H7v2zm4 0h2v-2h-2v2z"/><path d="M14.88 14.29L13 16.17v-3.76l1.88 1.88zM13 3.83l1.88 1.88L13 7.59V3.83zm4.71 1.88L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29z"/>',
	settings_cell:'<path d="M15 24h2v-2h-2v2zm-4 0h2v-2h-2v2zm-4 0h2v-2H7v2z"/><path d="M16 16H8V4h8v12zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99z"/>',settings_display:'<path d="M21 19.01H3V4.99h18v14.02zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3V9zm-4 7h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16z"/>',settings_ethernet:'<path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24z"/><path d="M11 13h2v-2h-2v2zm6-2h-2v2h2v-2zM7 13h2v-2H7v2z"/><path d="M17.77 5.48l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/>',
	settings_input_antenna:'<path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7z"/><path d="M13 14.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3z"/><path d="M12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"/>',settings_input_component:'<path d="M1 16c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2z"/><path d="M13 2c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zM9 16c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2z"/><path d="M17 16c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2zm4-10V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2z"/>',
	settings_input_composite:'<path d="M1 16c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2z"/><path d="M13 2c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zM9 16c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2z"/><path d="M17 16c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2zm4-10V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2z"/>',settings_input_hdmi:'<path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"/>',
	settings_input_svideo:'<path d="M15 6.5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5z"/><path d="M12 21c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm0-20C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1z"/><path d="M15.5 15c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm2-5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>',
	settings_overscan:'<path d="M14 16h-4l2.01 2.5L14 16zm-8-6l-2.5 2.01L6 14v-4zm12 0v4l2.5-1.99L18 10zm-5.99-4.5L10 8h4l-1.99-2.5z"/><path d="M21 19.01H3V4.99h18v14.02zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',settings_phone:'<path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/><path d="M19 9v2h2V9h-2zm-2 0h-2v2h2V9zm-4 0h-2v2h2V9z"/>',
	settings_power:'<path d="M13 2h-2v10h2V2z"/><path d="M16.56 4.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56z"/><path d="M15 24h2v-2h-2v2zm-4 0h2v-2h-2v2zm-4 0h2v-2H7v2z"/>',settings_remote:'<path d="M12 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3-6H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1z"/><path d="M7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4c-1.93 0-3.68.78-4.95 2.05z"/><path d="M12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"/>',
	settings_voice:'<path d="M12 13c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3z"/><path d="M15 24h2v-2h-2v2zm-4 0h2v-2h-2v2zm-4 0h2v-2H7v2z"/><path d="M19 10h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"/>',shopping_basket:'<path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>',
	shopping_cart:'<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/><path d="M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1z"/><path d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>',shop:'<path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"/>',
	shop_two:'<path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"/>',speaker_notes:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"/>',spellcheck:'<path d="M6.43 11L8.5 5.48 10.57 11H6.43zm6.02 5h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3z"/><path d="M21.59 11.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"/>',
	stars:'<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>',star_rate:'<path d="M12 14.3l3.71 2.7-1.42-4.36L18 10h-4.55L12 5.5 10.55 10H6l3.71 2.64L8.29 17z"/>',store:'<path d="M20 4H4v2h16V4z"/><path d="M12 18H6v-4h6v4zm9-4v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1z"/>',subject:'<path d="M14 17H4v2h10v-2z"/><path d="M20 9H4v2h16V9z"/><path d="M4 15h16v-2H4v2z"/><path d="M4 5v2h16V5H4z"/>',
	supervisor_account:'<path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5z"/><path d="M9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3z"/><path d="M16.5 14c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75z"/><path d="M9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/>',swap_horiz:'<path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3z"/><path d="M21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>',swap_vert:'<path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/><path d="M9 3L5 6.99h3V14h2V6.99h3L9 3z"/>',
	swap_vert_circle:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"/>',system_update_tv:'<path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4z"/><path d="M21 3.5h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"/>',tab:'<path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"/>',tab_unselected:'<path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"/>',
	theaters:'<path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>',thumbs_up_down:'<path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6z"/><path d="M22.5 10h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"/>',
	thumb_down:'<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2z"/><path d="M19 3v12h4V3h-4z"/>',thumb_up:'<path d="M1 21h4V9H1v12z"/><path d="M23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>',
	toc:'<path d="M3 9h14V7H3v2z"/><path d="M3 13h14v-2H3v2z"/><path d="M3 17h14v-2H3v2z"/><path d="M19 13h2v-2h-2v2zm0-6v2h2V7h-2zm0 10h2v-2h-2v2z"/>',today:'<path d="M19 19H5V8h14v11zm0-16h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M7 10h5v5H7z"/>',track_changes:'<path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"/>',
	translate:'<path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04z"/><path d="M15.88 17l1.62-4.33L19.12 17h-3.24zm2.62-7h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12z"/>',trending_down:'<path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"/>',trending_neutral:'<path d="M22 12l-4-4v3H3v2h15v3z"/>',trending_up:'<path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>',
	turned_in:'<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>',turned_in_not:'<path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/>',verified_user:'<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>',view_agenda:'<path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1z"/><path d="M20 3H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"/>',
	view_array:'<path d="M4 18h3V5H4v13z"/><path d="M18 5v13h3V5h-3z"/><path d="M8 18h9V5H8v13z"/>',view_carousel:'<path d="M7 19h10V4H7v15z"/><path d="M2 17h4V6H2v11z"/><path d="M18 6v11h4V6h-4z"/>',view_column:'<path d="M10 18h5V5h-5v13z"/><path d="M4 18h5V5H4v13z"/><path d="M16 5v13h5V5h-5z"/>',view_day:'<path d="M2 21h19v-3H2v3z"/><path d="M20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"/><path d="M2 3v3h19V3H2z"/>',view_headline:'<path d="M4 15h17v-2H4v2z"/><path d="M4 19h17v-2H4v2z"/><path d="M4 11h17V9H4v2z"/><path d="M4 5v2h17V5H4z"/>',
	view_list:'<path d="M4 14h4v-4H4v4z"/><path d="M4 19h4v-4H4v4z"/><path d="M4 9h4V5H4v4z"/><path d="M9 14h12v-4H9v4z"/><path d="M9 19h12v-4H9v4z"/><path d="M9 5v4h12V5H9z"/>',view_module:'<path d="M4 11h5V5H4v6z"/><path d="M4 18h5v-6H4v6z"/><path d="M10 18h5v-6h-5v6z"/><path d="M16 18h5v-6h-5v6z"/><path d="M10 11h5V5h-5v6z"/><path d="M16 5v6h5V5h-5z"/>',view_quilt:'<path d="M10 18h5v-6h-5v6z"/><path d="M4 18h5V5H4v13z"/><path d="M16 18h5v-6h-5v6z"/><path d="M10 5v6h11V5H10z"/>',view_stream:'<path d="M4 18h17v-6H4v6z"/><path d="M4 5v6h17V5H4z"/>',
	view_week:'<path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/><path d="M20 5h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/><path d="M13 5h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/>',visibility:'<path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
	visibility_off:'<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>',
	wallet_giftcard:'<path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>',wallet_membership:'<path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"/>',
	wallet_travel:'<path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/>',work:'<path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>',error:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>',
	warning:'<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>',album:'<path d="M12 16.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 11c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>',av_timer:'<path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"/><path d="M11 3v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1z"/><path d="M18 12c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1z"/><path d="M6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"/>',
	closed_caption:'<path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 7H9.5v-.5h-2v3h2V13H11v1c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm7 0h-1.5v-.5h-2v3h2V13H18v1c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1z"/>',equalizer:'<path d="M10 20h4V4h-4v16z"/><path d="M4 20h4v-8H4v8z"/><path d="M16 9v11h4V9h-4z"/>',explicit:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"/>',
	fast_forward:'<path d="M4 18l8.5-6L4 6v12z"/><path d="M13 6v12l8.5-6L13 6z"/>',fast_rewind:'<path d="M11 18V6l-8.5 6 8.5 6z"/><path d="M11.5 12l8.5 6V6l-8.5 6z"/>',games:'<path d="M15 7.5V2H9v5.5l3 3 3-3z"/><path d="M7.5 9H2v6h5.5l3-3-3-3z"/><path d="M9 16.5V22h6v-5.5l-3-3-3 3z"/><path d="M16.5 9l-3 3 3 3H22V9h-5.5z"/>',hearing:'<path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2z"/><path d="M7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36z"/><path d="M11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"/>',
	high_quality:'<path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 11H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm7-1c0 .55-.45 1-1 1h-.75v1.5h-1.5V15H14c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v4zm-3.5-.5h2v-3h-2v3z"/>',loop:'<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8z"/><path d="M12 18c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>',
	mic:'<path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17.3 11c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>',mic_none:'<path d="M10.8 4.9c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2-.66 0-1.2-.54-1.2-1.2V4.9zM12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17.3 11c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>',
	mic_off:'<path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/>',movie:'<path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>',
	my_library_add:'<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>',my_library_books:'<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/>',my_library_music:'<path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 5h-3v5.5c0 1.38-1.12 2.5-2.5 2.5S10 13.88 10 12.5s1.12-2.5 2.5-2.5c.57 0 1.08.19 1.5.51V5h4v2zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/>',
	new_releases:'<path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"/>',not_interested:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>',
	pause:'<path d="M6 19h4V5H6v14z"/><path d="M14 5v14h4V5h-4z"/>',pause_circle_fill:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>',pause_circle_outline:'<path d="M9 16h2V8H9v8z"/><path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M13 16h2V8h-2v8z"/>',playlist_add:'<path d="M14 10H2v2h12v-2z"/><path d="M14 6H2v2h12V6z"/><path d="M18 14v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z"/><path d="M2 16h8v-2H2v2z"/>',
	play_arrow:'<path d="M8 5v14l11-7z"/>',play_circle_fill:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>',play_circle_outline:'<path d="M10 16.5l6-4.5-6-4.5v9z"/><path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>',play_shopping_bag:'<path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"/>',
	queue:'<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>',queue_music:'<path d="M15 6H3v2h12V6z"/><path d="M15 10H3v2h12v-2z"/><path d="M3 16h8v-2H3v2z"/><path d="M17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/>',radio:'<path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z"/>',
	recent_actors:'<path d="M17 19h2V5h-2v14zm4-14v14h2V5h-2z"/><path d="M12.5 17h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V17zM8 7.75c1.24 0 2.25 1.01 2.25 2.25S9.24 12.25 8 12.25 5.75 11.24 5.75 10 6.76 7.75 8 7.75zM14 5H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"/>',repeat:'<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7z"/><path d="M17 17H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>',repeat_one:'<path d="M7 7h10v3l4-4-4-4v3H5v6h2V7z"/><path d="M17 17H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/><path d="M13 15V9h-1l-2 1v1h1.5v4H13z"/>',
	replay:'<path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>',shuffle:'<path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41z"/><path d="M14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5z"/><path d="M14.83 13.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>',skip_next:'<path d="M6 18l8.5-6L6 6v12z"/><path d="M16 6v12h2V6h-2z"/>',skip_previous:'<path d="M6 6h2v12H6z"/><path d="M9.5 12l8.5 6V6z"/>',snooze:'<path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85z"/><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72z"/><path d="M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-16c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/><path d="M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9v2z"/>',
	stop:'<path d="M6 6h12v12H6z"/>',subtitles:'<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 12h4v2H4v-2zm10 6H4v-2h10v2zm6 0h-4v-2h4v2zm0-4H10v-2h10v2z"/>',surround_sound:'<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.76 16.24l-1.41 1.41C4.78 16.1 4 14.05 4 12c0-2.05.78-4.1 2.34-5.66l1.41 1.41C6.59 8.93 6 10.46 6 12s.59 3.07 1.76 4.24zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.66 1.66l-1.41-1.41C17.41 15.07 18 13.54 18 12s-.59-3.07-1.76-4.24l1.41-1.41C19.22 7.9 20 9.95 20 12c0 2.05-.78 4.1-2.34 5.66zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',
	videocam:'<path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>',videocam_off:'<path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"/>',video_collection:'<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/>',volume_down:'<path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/>',
	volume_mute:'<path d="M7 9v6h4l5 5V4l-5 5H7z"/>',volume_off:'<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>',volume_up:'<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>',
	web:'<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>',business:'<path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>',call:'<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>',
	call_end:'<path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/>',call_made:'<path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>',call_merge:'<path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41z"/><path d="M7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/>',
	call_missed:'<path d="M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z"/>',call_received:'<path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>',call_split:'<path d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4z"/><path d="M10 4H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z"/>',chat:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>',clear_all:'<path d="M5 13h14v-2H5v2z"/><path d="M3 17h14v-2H3v2z"/><path d="M7 7v2h14V7H7z"/>',
	comment:'<path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>',contacts:'<path d="M20 0H4v2h16V0z"/><path d="M4 24h16v-2H4v2z"/><path d="M17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17zM12 6.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>',dialer_sip:'<path d="M20 5h-1V4h1v1zm-2-2v5h1V6h2V3h-3zm-3 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm2-2h-1v5h1V3z"/><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>',
	dialpad:'<path d="M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M18 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/><path d="M12 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',
	dnd_on:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>',email:'<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',forum:'<path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"/><path d="M17 12V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>',
	import_export:'<path d="M9 3L5 6.99h3V14h2V6.99h3L9 3z"/><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/>',invert_colors_off:'<path d="M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z"/>',
	invert_colors_on:'<path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"/>',live_help:'<path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>',
	location_off:'<path d="M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z"/>',location_on:'<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',
	message:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>',messenger:'<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>',no_sim:'<path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"/>',phone:'<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>',
	portable_wifi_off:'<path d="M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z"/>',
	quick_contacts_dialer:'<path d="M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z"/>',quick_contacts_mail:'<path d="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"/>',
	ring_volume:'<path d="M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7z"/><path d="M21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55z"/><path d="M13 2h-2v5h2V2z"/><path d="M6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z"/>',
	stay_current_landscape:'<path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/>',stay_current_portrait:'<path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>',stay_primary_landscape:'<path d="M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z"/>',stay_primary_portrait:'<path d="M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>',
	swap_calls:'<path d="M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z"/>',textsms:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>',voicemail:'<path d="M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z"/>',
	vpn_key:'<path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>',add:'<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>',add_box:'<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>',add_circle:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>',add_circle_outline:'<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/><path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>',
	archive:'<path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/>',backspace:'<path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"/>',block:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"/>',
	clear:'<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',content_copy:'<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>',content_cut:'<path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/>',
	content_paste:'<path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"/>',create:'<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>',drafts:'<path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"/>',
	filter_list:'<path d="M10 18h4v-2h-4v2z"/><path d="M3 6v2h18V6H3z"/><path d="M6 13h12v-2H6v2z"/>',flag:'<path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>',forward:'<path d="M12 8V4l8 8-8 8v-4H4V8z"/>',gesture:'<path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"/>',
	inbox:'<path d="M19 15h-4c0 1.66-1.34 3-3 3s-3-1.34-3-3H4.99V5H19v10zm0-12H4.99c-1.1 0-1.98.9-1.98 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M16 10h-2V7h-4v3H8l4 4 4-4z"/>',link:'<path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1z"/><path d="M8 13h8v-2H8v2z"/><path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>',mail:'<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',
	markunread:'<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',redo:'<path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>',remove:'<path d="M19 13H5v-2h14v2z"/>',remove_circle:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>',remove_circle_outline:'<path d="M7 11v2h10v-2H7z"/><path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>',
	reply:'<path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>',reply_all:'<path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4z"/><path d="M13 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>',report:'<path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/>',save:'<path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/>',
	select_all:'<path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"/>',send:'<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>',sort:'<path d="M3 18h6v-2H3v2z"/><path d="M3 6v2h18V6H3z"/><path d="M3 13h12v-2H3v2z"/>',text_format:'<path d="M5 17v2h14v-2H5z"/><path d="M12 5.98L13.87 11h-3.74L12 5.98zM9.5 12.8h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2z"/>',
	undo:'<path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>',access_alarms:'<path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72z"/><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85z"/><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8z"/><path d="M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-16c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>',access_alarm:'<path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72z"/><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85z"/><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8z"/><path d="M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-16c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>',
	access_time:'<path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.01-18C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"/><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>',add_alarm:'<path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85z"/><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72z"/><path d="M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm0-16c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/><path d="M13 9h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/>',
	airplanemode_off:'<path d="M13 9V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v3.68l7.83 7.83L21 16v-2l-8-5zM3 5.27l4.99 4.99L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-3.73L18.73 21 20 19.73 4.27 4 3 5.27z"/>',airplanemode_on:'<path d="M10.18 9"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>',battery_20:'<path d="M7 17v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17H7z"/><path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h10V5.33z"/>',
	battery_30:'<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V15h10V5.33z"/><path d="M7 15v5.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V15H7z"/>',battery_50:'<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V13h10V5.33z"/><path d="M7 13v7.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13H7z"/>',battery_60:'<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h10V5.33z"/><path d="M7 11v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11H7z"/>',
	battery_80:'<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h10V5.33z"/><path d="M7 9v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9H7z"/>',battery_90:'<path fill-opacity=".3" d="M17 5.33C17 4.6 16.4 4 15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h10V5.33z"/><path d="M7 8v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8H7z"/>',battery_alert:'<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM13 18h-2v-2h2v2zm0-4h-2V9h2v5z"/>',
	battery_charging_20:'<path d="M11 20v-3H7v3.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V17h-4.4L11 20z"/><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V17h4v-2.5H9L13 7v5.5h2L12.6 17H17V5.33C17 4.6 16.4 4 15.67 4z"/>',battery_charging_30:'<path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v9.17h2L13 7v5.5h2l-1.07 2H17V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M11 20v-5.5H7v6.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V14.5h-3.07L11 20z"/>',
	battery_charging_50:'<path d="M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5h-2.53z"/><path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4z"/>',battery_charging_60:'<path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V11h3.87L13 7v4h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9l1.87-3.5H7v9.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V11h-4v1.5z"/>',
	battery_charging_80:'<path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V9h4.93L13 7v2h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9L11.93 9H7v11.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V9h-4v3.5z"/>',battery_charging_90:'<path fill-opacity=".3" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33V8h5.47L13 7v1h4V5.33C17 4.6 16.4 4 15.67 4z"/><path d="M13 12.5h2L11 20v-5.5H9L12.47 8H7v12.67C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V8h-4v4.5z"/>',
	battery_charging_full:'<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zM11 20v-5.5H9L13 7v5.5h2L11 20z"/>',battery_full:'<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>',battery_std:'<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>',
	battery_unknown:'<path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4zm-2.72 13.95h-1.9v-1.9h1.9v1.9zm1.35-5.26s-.38.42-.67.71c-.48.48-.83 1.15-.83 1.6h-1.6c0-.83.46-1.52.93-2l.93-.94c.27-.27.44-.65.44-1.06 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .66-.27 1.26-.7 1.69z"/>',bluetooth:'<path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>',
	bluetooth_connected:'<path d="M14.88 16.29L13 18.17v-3.76l1.88 1.88zM13 5.83l1.88 1.88L13 9.59V5.83zm4.71 1.88L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"/><path d="M19 10l-2 2 2 2 2-2-2-2z"/><path d="M7 12l-2-2-2 2 2 2 2-2z"/>',bluetooth_disabled:'<path d="M13 5.83l1.88 1.88-1.6 1.6 1.41 1.41 3.02-3.02L12 2h-1v5.03l2 2v-3.2zM5.41 4L4 5.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l4.29-4.29 2.3 2.29L20 18.59 5.41 4zM13 18.17v-3.76l1.88 1.88L13 18.17z"/>',
	bluetooth_searching:'<path d="M14.24 12.01l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32z"/><path d="M19.53 6.71l-1.26 1.26c.63 1.21.98 2.57.98 4.02 0 1.45-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19z"/><path d="M12.88 16.29L11 18.17v-3.76l1.88 1.88zM11 5.83l1.88 1.88L11 9.59V5.83zm4.71 1.88L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"/>',brightness_auto:'<path d="M10.85 12.65h2.3L12 9l-1.15 3.65zM20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM14.3 16l-.7-2h-3.2l-.7 2H7.8L11 7h2l3.2 9h-1.9z"/>',
	brightness_high:'<path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69z"/><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>',brightness_low:'<path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>',brightness_medium:'<path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/>',
	data_usage:'<path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95z"/><path d="M12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>',developer_mode:'<path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5z"/><path d="M15.41 16.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42z"/><path d="M10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17z"/><path d="M17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"/>',
	devices:'<path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>',dvr:'<path d="M21 17H3V5h18v12zm0-14H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2z"/><path d="M7 8H5v2h2V8zm12 0H8v2h11V8z"/><path d="M7 12H5v2h2v-2zm12 0H8v2h11v-2z"/>',gps_fixed:'<path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><path d="M12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm8.94-8c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06z"/>',
	gps_not_fixed:'<path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>',gps_off:'<path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"/>',
	location_disabled:'<path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06c-1.13.12-2.19.46-3.16.97l1.5 1.5C10.16 5.19 11.06 5 12 5c3.87 0 7 3.13 7 7 0 .94-.19 1.84-.52 2.65l1.5 1.5c.5-.96.84-2.02.97-3.15H23v-2h-2.06zM3 4.27l2.04 2.04C3.97 7.62 3.25 9.23 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c1.77-.2 3.38-.91 4.69-1.98L19.73 21 21 19.73 4.27 3 3 4.27zm13.27 13.27C15.09 18.45 13.61 19 12 19c-3.87 0-7-3.13-7-7 0-1.61.55-3.09 1.46-4.27l9.81 9.81z"/>',location_searching:'<path d="M20.94 11c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>',
	multitrack_audio:'<path d="M7 18h2V6H7v12z"/><path d="M11 22h2V2h-2v20z"/><path d="M3 14h2v-4H3v4z"/><path d="M15 18h2V6h-2v12z"/><path d="M19 10v4h2v-4h-2z"/>',network_cell:'<path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/>',network_wifi:'<path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"/>',nfc:'<path d="M20 20H4V4h16v16zm0-18H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/><path d="M18 6h-5c-1.1 0-2 .9-2 2v2.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z"/>',
	now_wallpaper:'<path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4z"/><path d="M10 13l-4 5h12l-3-4-2.03 2.71L10 13z"/><path d="M17 8.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5z"/><path d="M20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2z"/><path d="M20 20h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7z"/><path d="M4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"/>',now_widgets:'<path d="M13 13v8h8v-8h-8z"/><path d="M3 21h8v-8H3v8z"/><path d="M3 3v8h8V3H3z"/><path d="M16.66 1.69L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/>',screen_lock_landscape:'<path d="M19 17H5V7h14v10zm2-12H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"/><path d="M10.8 10c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zm-.8 6h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1z"/>',
	screen_lock_portrait:'<path d="M10.8 10c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2v1h-2.4v-1zm-.8 6h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1v-1c0-1.11-.9-2-2-2-1.11 0-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1z"/><path d="M17 19H7V5h10v14zm0-18H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"/>',screen_lock_rotation:'<path d="M23.25 12.77l-2.57-2.57-1.41 1.41 2.22 2.22-5.66 5.66L4.51 8.17l5.66-5.66 2.1 2.1 1.41-1.41L11.23.75c-.59-.59-1.54-.59-2.12 0L2.75 7.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12z"/><path d="M8.47 20.48C5.2 18.94 2.86 15.76 2.5 12H1c.51 6.16 5.66 11 11.95 11l.66-.03-3.81-3.82-1.33 1.33z"/><path d="M16.8 2.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V3h-3.4v-.5zM16 9h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1v-.5C21 1.12 19.88 0 18.5 0S16 1.12 16 2.5V3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z"/>',
	screen_rotation:'<path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32z"/><path d="M14.83 21.19L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-4.6-19.44c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75z"/><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"/>',sd_storage:'<path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"/>',
	settings_system_daydream:'<path d="M9 16h6.5c1.38 0 2.5-1.12 2.5-2.5S16.88 11 15.5 11h-.05c-.24-1.69-1.69-3-3.45-3-1.4 0-2.6.83-3.16 2.02h-.16C7.17 10.18 6 11.45 6 13c0 1.66 1.34 3 3 3z"/><path d="M21 19.01H3V4.99h18v14.02zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',signal_cellular_0_bar:'<path fill-opacity=".3" d="M2 22h20V2z"/>',signal_cellular_1_bar:'<path fill-opacity=".3" d="M2 22h20V2z"/><path d="M12 12L2 22h10z"/>',signal_cellular_2_bar:'<path fill-opacity=".3" d="M2 22h20V2z"/><path d="M14 10L2 22h12z"/>',
	signal_cellular_3_bar:'<path fill-opacity=".3" d="M2 22h20V2z"/><path d="M17 7L2 22h15z"/>',signal_cellular_4_bar:'<path d="M2 22h20V2z"/>',signal_cellular_connected_no_internet_0_bar:'<path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 22h2v-2h-2v2zm0-12v8h2v-8h-2z"/>',signal_cellular_connected_no_internet_1_bar:'<path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z"/>',signal_cellular_connected_no_internet_2_bar:'<path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/>',
	signal_cellular_connected_no_internet_3_bar:'<path fill-opacity=".3" d="M22 8V2L2 22h16V8z"/><path d="M17 22V7L2 22h15zm3-12v8h2v-8h-2zm0 12h2v-2h-2v2z"/>',signal_cellular_connected_no_internet_4_bar:'<path d="M20 18h2v-8h-2v8zm0 4h2v-2h-2v2zM2 22h16V8h4V2L2 22z"/>',signal_cellular_no_sim:'<path d="M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z"/>',signal_cellular_null:'<path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z"/>',
	signal_cellular_off:'<path d="M21 1l-8.59 8.59L21 18.18V1zM4.77 4.5L3.5 5.77l6.36 6.36L1 21h17.73l2 2L22 21.73 4.77 4.5z"/>',signal_wifi_0_bar:'<path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>',signal_wifi_1_bar:'<path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M6.67 14.86L12 21.49v.01l.01-.01 5.33-6.63C17.06 14.65 15.03 13 12 13s-5.06 1.65-5.33 1.86z"/>',
	signal_wifi_2_bar:'<path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M4.79 12.52l7.2 8.98H12l.01-.01 7.2-8.98C18.85 12.24 16.1 10 12 10s-6.85 2.24-7.21 2.52z"/>',signal_wifi_3_bar:'<path fill-opacity=".3" d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/><path d="M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54C20.04 10.62 16.81 8 12 8c-4.81 0-8.04 2.62-8.47 2.95z"/>',signal_wifi_4_bar:'<path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>',
	signal_wifi_off:'<path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/>',storage:'<path d="M4 17h2v2H4v-2zm-2 3h20v-4H2v4z"/><path d="M6 7H4V5h2v2zM2 4v4h20V4H2z"/><path d="M4 11h2v2H4v-2zm-2 3h20v-4H2v4z"/>',usb:'<path d="M15 7v4h1v2h-3V5h2l-3-4-3 4h2v8H8v-2.07c.7-.37 1.2-1.08 1.2-1.93 0-1.21-.99-2.2-2.2-2.2-1.21 0-2.2.99-2.2 2.2 0 .85.5 1.56 1.2 1.93V13c0 1.11.89 2 2 2h3v3.05c-.71.37-1.2 1.1-1.2 1.95 0 1.22.99 2.2 2.2 2.2 1.21 0 2.2-.98 2.2-2.2 0-.85-.49-1.58-1.2-1.95V15h3c1.11 0 2-.89 2-2v-2h1V7h-4z"/>',
	wifi_lock:'<path d="M20.5 9.5c.28 0 .55.04.81.08L24 6c-3.34-2.51-7.5-4-12-4S3.34 3.49 0 6l12 16 3.5-4.67V14.5c0-2.76 2.24-5 5-5z"/><path d="M22 16h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16zm1 0v-1.5c0-1.38-1.12-2.5-2.5-2.5S18 13.12 18 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z"/>',wifi_tethering:'<path d="M12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M18 13c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19z"/><path d="M12 3C6.48 3 2 7.48 2 13c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 18.53 4 15.96 4 13c0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z"/>',
	attach_file:'<path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>',attach_money:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>',
	border_all:'<path d="M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z"/>',border_bottom:'<path d="M9 11H7v2h2v-2zm4 4h-2v2h2v-2zM9 3H7v2h2V3zm4 8h-2v2h2v-2zM5 3H3v2h2V3zm8 4h-2v2h2V7zm4 4h-2v2h2v-2zm-4-8h-2v2h2V3zm4 0h-2v2h2V3zm2 10h2v-2h-2v2zm0 4h2v-2h-2v2zM5 7H3v2h2V7zm14-4v2h2V3h-2zm0 6h2V7h-2v2zM5 11H3v2h2v-2zM3 21h18v-2H3v2zm2-6H3v2h2v-2z"/>',border_clear:'<path d="M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"/>',
	border_color:'<path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z"/><path fill-opacity=".36" d="M0 20h24v4H0z"/>',border_horizontal:'<path d="M3 21h2v-2H3v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zm4 4h2v-2H7v2zM5 3H3v2h2V3zm4 0H7v2h2V3zm8 0h-2v2h2V3zm-4 4h-2v2h2V7zm0-4h-2v2h2V3zm6 14h2v-2h-2v2zm-8 4h2v-2h-2v2zm-8-8h18v-2H3v2zM19 3v2h2V3h-2zm0 6h2V7h-2v2zm-8 8h2v-2h-2v2zm4 4h2v-2h-2v2zm4 0h2v-2h-2v2z"/>',border_inner:'<path d="M3 21h2v-2H3v2zm4 0h2v-2H7v2zM5 7H3v2h2V7zM3 17h2v-2H3v2zM9 3H7v2h2V3zM5 3H3v2h2V3zm12 0h-2v2h2V3zm2 6h2V7h-2v2zm0-6v2h2V3h-2zm-4 18h2v-2h-2v2zM13 3h-2v8H3v2h8v8h2v-8h8v-2h-8V3zm6 18h2v-2h-2v2zm0-4h2v-2h-2v2z"/>',
	border_left:'<path d="M11 21h2v-2h-2v2zm0-4h2v-2h-2v2zm0-12h2V3h-2v2zm0 4h2V7h-2v2zm0 4h2v-2h-2v2zm-4 8h2v-2H7v2zM7 5h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2V3H3v18zM19 9h2V7h-2v2zm-4 12h2v-2h-2v2zm4-4h2v-2h-2v2zm0-14v2h2V3h-2zm0 10h2v-2h-2v2zm0 8h2v-2h-2v2zm-4-8h2v-2h-2v2zm0-8h2V3h-2v2z"/>',border_outer:'<path d="M13 7h-2v2h2V7zm0 4h-2v2h2v-2zm4 0h-2v2h2v-2zM3 3v18h18V3H3zm16 16H5V5h14v14zm-6-4h-2v2h2v-2zm-4-4H7v2h2v-2z"/>',border_right:'<path d="M7 21h2v-2H7v2zM3 5h2V3H3v2zm4 0h2V3H7v2zm0 8h2v-2H7v2zm-4 8h2v-2H3v2zm8 0h2v-2h-2v2zm-8-8h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm8 8h2v-2h-2v2zm4-4h2v-2h-2v2zm4-10v18h2V3h-2zm-4 18h2v-2h-2v2zm0-16h2V3h-2v2zm-4 8h2v-2h-2v2zm0-8h2V3h-2v2zm0 4h2V7h-2v2z"/>',
	border_style:'<path d="M15 21h2v-2h-2v2zm4 0h2v-2h-2v2zM7 21h2v-2H7v2zm4 0h2v-2h-2v2zm8-4h2v-2h-2v2zm0-4h2v-2h-2v2zM3 3v18h2V5h16V3H3zm16 6h2V7h-2v2z"/>',border_top:'<path d="M7 21h2v-2H7v2zm0-8h2v-2H7v2zm4 0h2v-2h-2v2zm0 8h2v-2h-2v2zm-8-4h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2v-2H3v2zm0-4h2V7H3v2zm8 8h2v-2h-2v2zm8-8h2V7h-2v2zm0 4h2v-2h-2v2zM3 3v2h18V3H3zm16 14h2v-2h-2v2zm-4 4h2v-2h-2v2zM11 9h2V7h-2v2zm8 12h2v-2h-2v2zm-4-8h2v-2h-2v2z"/>',border_vertical:'<path d="M3 9h2V7H3v2zm0-4h2V3H3v2zm4 16h2v-2H7v2zm0-8h2v-2H7v2zm-4 0h2v-2H3v2zm0 8h2v-2H3v2zm0-4h2v-2H3v2zM7 5h2V3H7v2zm12 12h2v-2h-2v2zm-8 4h2V3h-2v18zm8 0h2v-2h-2v2zm0-8h2v-2h-2v2zm0-10v2h2V3h-2zm0 6h2V7h-2v2zm-4-4h2V3h-2v2zm0 16h2v-2h-2v2zm0-8h2v-2h-2v2z"/>',
	format_align_center:'<path d="M7 15v2h10v-2H7z"/><path d="M3 21h18v-2H3v2z"/><path d="M3 13h18v-2H3v2z"/><path d="M7 7v2h10V7H7z"/><path d="M3 3v2h18V3H3z"/>',format_align_justify:'<path d="M3 21h18v-2H3v2z"/><path d="M3 17h18v-2H3v2z"/><path d="M3 13h18v-2H3v2z"/><path d="M3 9h18V7H3v2z"/><path d="M3 3v2h18V3H3z"/>',format_align_left:'<path d="M15 15H3v2h12v-2z"/><path d="M15 7H3v2h12V7z"/><path d="M3 13h18v-2H3v2z"/><path d="M3 21h18v-2H3v2z"/><path d="M3 3v2h18V3H3z"/>',format_align_right:'<path d="M3 21h18v-2H3v2z"/><path d="M9 17h12v-2H9v2z"/><path d="M3 13h18v-2H3v2z"/><path d="M9 9h12V7H9v2z"/><path d="M3 3v2h18V3H3z"/>',
	format_bold:'<path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>',format_clear:'<path d="M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z"/>',format_color_fill:'<path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"/><path fill-opacity=".36" d="M0 20h24v4H0z"/>',
	format_color_reset:'<path d="M18 14c0-4-6-10.8-6-10.8s-1.33 1.51-2.73 3.52l8.59 8.59c.09-.42.14-.86.14-1.31zm-.88 3.12L12.5 12.5 5.27 5.27 4 6.55l3.32 3.32C6.55 11.32 6 12.79 6 14c0 3.31 2.69 6 6 6 1.52 0 2.9-.57 3.96-1.5l2.63 2.63 1.27-1.27-2.74-2.74z"/>',format_color_text:'<path fill-opacity=".36" d="M0 20h24v4H0z"/><path d="M11 3L5.5 17h2.25l1.12-3h6.25l1.12 3h2.25L13 3h-2zm-1.38 9L12 5.67 14.38 12H9.62z"/>',format_indent_decrease:'<path d="M11 17h10v-2H11v2z"/><path d="M3 12l4 4V8l-4 4z"/><path d="M3 21h18v-2H3v2z"/><path d="M3 3v2h18V3H3z"/><path d="M11 9h10V7H11v2z"/><path d="M11 13h10v-2H11v2z"/>',
	format_indent_increase:'<path d="M3 21h18v-2H3v2z"/><path d="M3 8v8l4-4-4-4z"/><path d="M11 17h10v-2H11v2z"/><path d="M3 3v2h18V3H3z"/><path d="M11 9h10V7H11v2z"/><path d="M11 13h10v-2H11v2z"/>',format_italic:'<path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>',format_line_spacing:'<path d="M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7z"/><path d="M10 5v2h12V5H10z"/><path d="M10 19h12v-2H10v2z"/><path d="M10 13h12v-2H10v2z"/>',format_list_bulleted:'<path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M4 4.5c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5z"/><path d="M4 16.67c-.74 0-1.33.6-1.33 1.33 0 .73.6 1.33 1.33 1.33.73 0 1.33-.6 1.33-1.33 0-.73-.59-1.33-1.33-1.33z"/><path d="M7 19h14v-2H7v2z"/><path d="M7 13h14v-2H7v2z"/><path d="M7 5v2h14V5H7z"/>',
	format_list_numbered:'<path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1z"/><path d="M3 8h1V4H2v1h1v3z"/><path d="M2 11h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1z"/><path d="M7 5v2h14V5H7z"/><path d="M7 19h14v-2H7v2z"/><path d="M7 13h14v-2H7v2z"/>',format_paint:'<path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/>',format_quote:'<path d="M6 17h3l2-4V7H5v6h3z"/><path d="M14 17h3l2-4V7h-6v6h3z"/>',format_size:'<path d="M9 4v3h5v12h3V7h5V4H9z"/><path d="M3 12h3v7h3v-7h3V9H3v3z"/>',
	format_strikethrough:'<path d="M10 19h4v-3h-4v3z"/><path d="M5 4v3h5v3h4V7h5V4H5z"/><path d="M3 14h18v-2H3v2z"/>',format_textdirection_l_to_r:'<path d="M9 10v5h2V4h2v11h2V4h2V2H9C6.79 2 5 3.79 5 6s1.79 4 4 4z"/><path d="M21 18l-4-4v3H5v2h12v3l4-4z"/>',format_textdirection_r_to_l:'<path d="M10 10v5h2V4h2v11h2V4h2V2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4z"/><path d="M8 17v-3l-4 4 4 4v-3h12v-2H8z"/>',format_underline:'<path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6z"/><path d="M5 19v2h14v-2H5z"/>',
	functions:'<path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/>',insert_chart:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>',insert_comment:'<path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>',insert_drive_file:'<path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"/>',insert_emoticon:'<path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.01-18C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"/><path d="M15.5 11c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/><path d="M8.5 11c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/><path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>',
	insert_invitation:'<path d="M17 12h-5v5h5v-5z"/><path d="M19 19H5V8h14v11zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2z"/>',insert_link:'<path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1z"/><path d="M8 13h8v-2H8v2z"/><path d="M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>',insert_photo:'<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>',
	merge_type:'<path d="M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41z"/><path d="M7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/>',mode_comment:'<path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z"/>',mode_edit:'<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>',publish:'<path d="M5 4v2h14V4H5z"/><path d="M5 14h4v6h6v-6h4l-7-7-7 7z"/>',
	vertical_align_bottom:'<path d="M16 13h-3V3h-2v10H8l4 4 4-4z"/><path d="M4 19v2h16v-2H4z"/>',vertical_align_center:'<path d="M8 19h3v4h2v-4h3l-4-4-4 4z"/><path d="M16 5h-3V1h-2v4H8l4 4 4-4z"/><path d="M4 11v2h16v-2H4z"/>',vertical_align_top:'<path d="M8 11h3v10h2V11h3l-4-4-4 4z"/><path d="M4 3v2h16V3H4z"/>',wrap_text:'<path d="M4 19h6v-2H4v2z"/><path d="M20 5H4v2h16V5z"/><path d="M17 11H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"/>',attachment:'<path d="M7.5 18C4.46 18 2 15.54 2 12.5S4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v1.5H9.5c-.55 0-1 .45-1 1s.45 1 1 1H18c1.38 0 2.5-1.12 2.5-2.5S19.38 8.5 18 8.5H7.5c-2.21 0-4 1.79-4 4s1.79 4 4 4H17V18H7.5z"/>',
	cloud:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>',cloud_circle:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"/>',cloud_done:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"/>',
	cloud_download:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/>',cloud_off:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>',
	cloud_queue:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>',cloud_upload:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>',
	file_download:'<path d="M19 9h-4V3H9v6H5l7 7 7-7z"/><path d="M5 18v2h14v-2H5z"/>',file_upload:'<path d="M9 16h6v-6h4l-7-7-7 7h4z"/><path d="M5 18h14v2H5z"/>',folder:'<path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>',folder_open:'<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"/>',folder_shared:'<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"/>',
	cast:'<path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M1 18v3h3c0-1.66-1.34-3-3-3z"/><path d="M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z"/><path d="M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"/>',cast_connected:'<path d="M1 18v3h3c0-1.66-1.34-3-3-3z"/><path d="M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z"/><path d="M19 7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7z"/><path d="M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"/><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',
	computer:'<path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>',desktop_mac:'<path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>',desktop_windows:'<path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>',dock:'<path d="M8 23h8v-2H8v2z"/><path d="M16 15H8V5h8v10zm0-13.99L8 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"/>',
	gamepad:'<path d="M15 7.5V2H9v5.5l3 3 3-3z"/><path d="M7.5 9H2v6h5.5l3-3-3-3z"/><path d="M9 16.5V22h6v-5.5l-3-3-3 3z"/><path d="M16.5 9l-3 3 3 3H22V9h-5.5z"/>',headset:'<path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>',headset_mic:'<path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10c0-4.97-4.03-9-9-9z"/>',keyboard:'<path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/>',
	keyboard_alt:'<path d="M15.5 10c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5s.67 1.5 1.5 1.5z"/><path d="M8.5 10c.83 0 1.5-.67 1.5-1.5S9.33 7 8.5 7 7 7.67 7 8.5 7.67 10 8.5 10z"/><path d="M12 17c2.61 0 4.83-1.67 5.65-4H6.35c.82 2.33 3.04 4 5.65 4z"/><path d="M12 19c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.01-18C6.47 1 2 5.48 2 11s4.47 10 9.99 10C17.52 21 22 16.52 22 11S17.52 1 11.99 1z"/>',keyboard_arrow_down:'<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>',keyboard_arrow_left:'<path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>',
	keyboard_arrow_right:'<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>',keyboard_arrow_up:'<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>',keyboard_backspace:'<path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"/>',keyboard_capslock:'<path d="M12 8.41L16.59 13 18 11.59l-6-6-6 6L7.41 13 12 8.41z"/><path d="M6 18h12v-2H6v2z"/>',keyboard_control:'<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M18 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',
	keyboard_hide:'<path d="M20 3H4c-1.1 0-1.99.9-1.99 2L2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 3h2v2h-2V6zm0 3h2v2h-2V9zM8 6h2v2H8V6zm0 3h2v2H8V9zm-1 2H5V9h2v2zm0-3H5V6h2v2zm9 7H8v-2h8v2zm0-4h-2V9h2v2zm0-3h-2V6h2v2zm3 3h-2V9h2v2zm0-3h-2V6h2v2zm-7 15l4-4H8l4 4z"/>',keyboard_return:'<path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"/>',keyboard_tab:'<path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41z"/><path d="M20 6v12h2V6h-2z"/>',keyboard_voice:'<path d="M12 15c1.66 0 2.99-1.34 2.99-3L15 6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z"/><path d="M17.3 12c0 3-2.54 5.1-5.3 5.1S6.7 15 6.7 12H5c0 3.42 2.72 6.23 6 6.72V22h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>',
	laptop:'<path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>',laptop_chromebook:'<path d="M22 18V3H2v15H0v2h24v-2h-2zm-8 0h-4v-1h4v1zm6-3H4V5h16v10z"/>',laptop_mac:'<path d="M20 18c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2H0c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2h-4zM4 5h16v11H4V5zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>',laptop_windows:'<path d="M20 18v-1c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2v1H0v2h24v-2h-4zM4 5h16v10H4V5z"/>',
	memory:'<path d="M13 13h-2v-2h2v2zm2-4H9v6h6V9z"/><path d="M17 17H7V7h10v10zm4-6V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2z"/>',mouse:'<path d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93z"/><path d="M4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4z"/><path d="M11 1.07C7.05 1.56 4 4.92 4 9h7V1.07z"/>',phonelink:'<path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/>',
	phonelink_off:'<path d="M22 6V4H6.82l2 2H22zM1.92 1.65L.65 2.92l1.82 1.82C2.18 5.08 2 5.52 2 6v11H0v3h17.73l2.35 2.35 1.27-1.27L3.89 3.62 1.92 1.65zM4 6.27L14.73 17H4V6.27zM23 8h-6c-.55 0-1 .45-1 1v4.18l2 2V10h4v7h-2.18l3 3H23c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1z"/>',phone_android:'<path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"/>',phone_iphone:'<path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>',
	security:'<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>',sim_card:'<path d="M19.99 4c0-1.1-.89-2-1.99-2h-8L4 8v12c0 1.1.9 2 2 2h12.01c1.1 0 1.99-.9 1.99-2l-.01-16zM9 19H7v-2h2v2zm8 0h-2v-2h2v2zm-8-4H7v-4h2v4zm4 4h-2v-4h2v4zm0-6h-2v-2h2v2zm4 2h-2v-4h2v4z"/>',smartphone:'<path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>',speaker:'<path d="M12 20c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-16c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm5-2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/><path d="M12 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
	tablet:'<path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 1.99-.9 1.99-2L23 6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/>',tablet_android:'<path d="M18 0H6C4.34 0 3 1.34 3 3v18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3c0-1.66-1.34-3-3-3zm-4 22h-4v-1h4v1zm5.25-3H4.75V3h14.5v16z"/>',tablet_mac:'<path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/>',
	tv:'<path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>',watch:'<path d="M20 12c0-2.54-1.19-4.81-3.04-6.27L16 0H8l-.95 5.73C5.19 7.19 4 9.45 4 12s1.19 4.81 3.05 6.27L8 24h8l.96-5.73C18.81 16.81 20 14.54 20 12zM6 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6z"/>',add_to_photos:'<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"/>',
	adjust:'<path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2z"/><path d="M15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/>',assistant_photo:'<path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>',audiotrack:'<path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z"/>',blur_circular:'<path d="M10 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM7 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-3-3c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm3-6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm3 6c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-4c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm2-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-3.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>',
	blur_linear:'<path d="M5 17.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 13c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM3 21h18v-2H3v2zM5 9.5c.83 0 1.5-.67 1.5-1.5S5.83 6.5 5 6.5 3.5 7.17 3.5 8 4.17 9.5 5 9.5zm0 4c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM9 17c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8-.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM3 3v2h18V3H3zm14 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm0 4c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM13 9c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z"/>',
	blur_off:'<path d="M14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-.2 4.48l.2.02c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5l.02.2c.09.67.61 1.19 1.28 1.28zM14 3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-4 0c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm11 7c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm8 8c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-4c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm-4 13.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM2.5 5.27l3.78 3.78L6 9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l2.81 2.81c-.71.11-1.25.73-1.25 1.47 0 .83.67 1.5 1.5 1.5.74 0 1.36-.54 1.47-1.25l2.81 2.81c-.09-.03-.18-.06-.28-.06-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1c0-.1-.03-.19-.06-.28l3.78 3.78L20 20.23 3.77 4 2.5 5.27zM10 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm11-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM3 9.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 11c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3-3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5z"/>',
	blur_on:'<path d="M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>',
	brightness_1:'<circle cx="12" cy="12" r="10"/>',brightness_2:'<path d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/>',brightness_3:'<path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"/>',brightness_4:'<path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/>',
	brightness_5:'<path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>',brightness_6:'<path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"/>',brightness_7:'<path d="M12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm8-9.31V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69z"/><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>',
	brush:'<path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z"/><path d="M20.71 4.63l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>',camera:'<path d="M9.4 10.5l4.77-8.26C13.47 2.09 12.75 2 12 2c-2.4 0-4.6.85-6.32 2.25l3.66 6.35.06-.1z"/><path d="M21.54 9c-.92-2.92-3.15-5.26-6-6.34L11.88 9h9.66z"/><path d="M21.8 10h-7.49l.29.5 4.76 8.25C21 16.97 22 14.61 22 12c0-.69-.07-1.35-.2-2z"/><path d="M8.54 12l-3.9-6.75C3.01 7.03 2 9.39 2 12c0 .69.07 1.35.2 2h7.49l-1.15-2z"/><path d="M2.46 15c.92 2.92 3.15 5.26 6 6.34L12.12 15H2.46z"/><path d="M13.73 15l-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35-.93 1.6z"/>',
	camera_alt:'<circle cx="12" cy="12" r="3.2"/><path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"/>',camera_front:'<path d="M10 20H5v2h5v2l3-3-3-3v2z"/><path d="M14 20v2h5v-2h-5z"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-1.99.9-1.99 2S10.9 8 12 8z"/><path d="M7 2h10v10.5c0-1.67-3.33-2.5-5-2.5s-5 .83-5 2.5V2zm10-2H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/>',
	camera_rear:'<path d="M10 20H5v2h5v2l3-3-3-3v2z"/><path d="M14 20v2h5v-2h-5z"/><path d="M12 6c-1.11 0-2-.9-2-2s.89-2 1.99-2 2 .9 2 2C14 5.1 13.1 6 12 6zm5-6H7C5.9 0 5 .9 5 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/>',camera_roll:'<path d="M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h8V5h-8zm-2 13h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2zm4 9h-2v-2h2v2zm0-9h-2V7h2v2z"/>',center_focus_strong:'<path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4z"/><path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5z"/><path d="M19 3h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"/><path d="M19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/>',
	center_focus_weak:'<path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4z"/><path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5z"/><path d="M19 3h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"/><path d="M19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/><path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>',collections:'<path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>',colorize:'<path d="M20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.12-3.12c.4-.4.4-1.03.01-1.42zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/>',
	color_lens:'<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>',compare:'<path d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v2h2V1h-2v2zm0 15H5l5-6v6zm9-15h-5v2h5v13l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',
	control_point:'<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/><path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2z"/>',control_point_duplicate:'<path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3z"/><path d="M2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12z"/><path d="M15 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm0-16c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9z"/>',
	crop_16_9:'<path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>',crop:'<path d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h8v8z"/><path d="M7 17V1H5v4H1v2h4v10c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7z"/>',crop_3_2:'<path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"/>',crop_5_4:'<path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/>',crop_7_5:'<path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/>',
	crop_din:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>',crop_free:'<path d="M3 5v4h2V5h4V3H5c-1.1 0-2 .9-2 2z"/><path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4z"/><path d="M19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/><path d="M19 3h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"/>',crop_landscape:'<path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/>',crop_original:'<path d="M19 19H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M13.96 12.29l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>',
	crop_portrait:'<path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"/>',crop_square:'<path d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H6V6h12v12z"/>',dehaze:'<path d="M2 15.5v2h20v-2H2z"/><path d="M2 10.5v2h20v-2H2z"/><path d="M2 5.5v2h20v-2H2z"/>',details:'<path d="M3 4l9 16 9-16H3zm3.38 2h11.25L12 16 6.38 6z"/>',edit:'<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/><path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>',
	exposure:'<path d="M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z"/>',exposure_minus_1:'<path d="M4 11v2h8v-2H4zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3v13z"/>',exposure_minus_2:'<path d="M15.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17s.19-.79.19-1.18c0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H21v-1.71h-5.95zM2 11v2h8v-2H2z"/>',
	exposure_plus_1:'<path d="M10 7H8v4H4v2h4v4h2v-4h4v-2h-4V7zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3v13z"/>',exposure_plus_2:'<path d="M16.05 16.29l2.86-3.07c.38-.39.72-.79 1.04-1.18.32-.39.59-.78.82-1.17.23-.39.41-.78.54-1.17.13-.39.19-.79.19-1.18 0-.53-.09-1.02-.27-1.46-.18-.44-.44-.81-.78-1.11-.34-.31-.77-.54-1.26-.71-.51-.16-1.08-.24-1.72-.24-.69 0-1.31.11-1.85.32-.54.21-1 .51-1.36.88-.37.37-.65.8-.84 1.3-.18.47-.27.97-.28 1.5h2.14c.01-.31.05-.6.13-.87.09-.29.23-.54.4-.75.18-.21.41-.37.68-.49.27-.12.6-.18.96-.18.31 0 .58.05.81.15.23.1.43.25.59.43.16.18.28.4.37.65.08.25.13.52.13.81 0 .22-.03.43-.08.65-.06.22-.15.45-.29.7-.14.25-.32.53-.56.83-.23.3-.52.65-.88 1.03l-4.17 4.55V18H22v-1.71h-5.95zM8 7H6v4H2v2h4v4h2v-4h4v-2H8V7z"/>',
	exposure_zero:'<path d="M16.14 12.5c0 1-.1 1.85-.3 2.55-.2.7-.48 1.27-.83 1.7-.36.44-.79.75-1.3.95-.51.2-1.07.3-1.7.3-.62 0-1.18-.1-1.69-.3-.51-.2-.95-.51-1.31-.95-.36-.44-.65-1.01-.85-1.7-.2-.7-.3-1.55-.3-2.55v-2.04c0-1 .1-1.85.3-2.55.2-.7.48-1.26.84-1.69.36-.43.8-.74 1.31-.93C10.81 5.1 11.38 5 12 5c.63 0 1.19.1 1.7.29.51.19.95.5 1.31.93.36.43.64.99.84 1.69.2.7.3 1.54.3 2.55v2.04zm-2.11-2.36c0-.64-.05-1.18-.13-1.62-.09-.44-.22-.79-.4-1.06-.17-.27-.39-.46-.64-.58-.25-.13-.54-.19-.86-.19-.32 0-.61.06-.86.18s-.47.31-.64.58c-.17.27-.31.62-.4 1.06s-.13.98-.13 1.62v2.67c0 .64.05 1.18.14 1.62.09.45.23.81.4 1.09s.39.48.64.61.54.19.87.19c.33 0 .62-.06.87-.19s.46-.33.63-.61c.17-.28.3-.64.39-1.09.09-.45.13-.99.13-1.62v-2.66z"/>',
	filter_1:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 10h2V5h-4v2h2v8zm7-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>',filter:'<path d="M15.96 10.29l-2.75 3.54-1.96-2.36L8.5 15h11l-3.54-4.71zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>',filter_2:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-4-4h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2z"/>',
	filter_3:'<path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.1 0 2-.89 2-2z"/>',filter_4:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm12 10h2V5h-2v4h-2V5h-2v6h4v4zm6-14H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>',filter_5:'<path d="M21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm14 8v-2c0-1.11-.9-2-2-2h-2V7h4V5h-6v6h4v2h-4v2h4c1.1 0 2-.89 2-2z"/>',
	filter_6:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-2c0-1.11-.9-2-2-2h-2V7h4V5h-4c-1.1 0-2 .89-2 2v6c0 1.11.9 2 2 2zm0-4h2v2h-2v-2z"/>',filter_7:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2l4-8V5h-6v2h4l-4 8h2z"/>',filter_8:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zm-8-2h2c1.1 0 2-.89 2-2v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V7c0-1.11-.9-2-2-2h-2c-1.1 0-2 .89-2 2v1.5c0 .83.67 1.5 1.5 1.5-.83 0-1.5.67-1.5 1.5V13c0 1.11.9 2 2 2zm0-8h2v2h-2V7zm0 4h2v2h-2v-2z"/>',
	filter_9:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM15 5h-2c-1.1 0-2 .89-2 2v2c0 1.11.9 2 2 2h2v2h-4v2h4c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2zm0 4h-2V7h2v2z"/>',filter_9_plus:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm11 7V8c0-1.11-.9-2-2-2h-1c-1.1 0-2 .89-2 2v1c0 1.11.9 2 2 2h1v1H9v2h3c1.1 0 2-.89 2-2zm-3-3V8h1v1h-1zm10-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14v6z"/>',
	filter_b_and_w:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16l-7-8v8H5l7-8V5h7v14z"/>',filter_center_focus:'<path d="M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4z"/><path d="M5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5z"/><path d="M19 3h-4v2h4v4h2V5c0-1.1-.9-2-2-2z"/><path d="M19 19h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"/><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',filter_drama:'<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.61 5.64 5.36 8.04 2.35 8.36 0 10.9 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4h2c0-2.76-1.86-5.08-4.4-5.78C8.61 6.88 10.2 6 12 6c3.03 0 5.5 2.47 5.5 5.5v.5H19c1.65 0 3 1.35 3 3s-1.35 3-3 3z"/>',
	filter_frames:'<path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM18 8H6v10h12"/>',filter_hdr:'<path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>',filter_none:'<path d="M3 5H1v16c0 1.1.9 2 2 2h16v-2H3V5zm18-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/>',filter_tilt_shift:'<path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"/>',
	filter_vintage:'<path d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4 1.92-1.11 2.99-3.12 3-5.19-1.79-1.03-4.07-1.11-6 0-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55-1.92-1.11-4.2-1.03-6 0 0 2.07 1.07 4.08 3 5.19.28.16.57.29.86.4-.29.11-.58.24-.86.4-1.92 1.11-2.99 3.12-3 5.19 1.79 1.03 4.07 1.11 6 0 .28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54 1.92 1.11 4.2 1.03 6 0-.01-2.07-1.08-4.08-3-5.19zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>',
	flare:'<path d="M7 11H1v2h6v-2zm2.17-3.24L7.05 5.64 5.64 7.05l2.12 2.12 1.41-1.41zM13 1h-2v6h2V1zm5.36 6.05l-1.41-1.41-2.12 2.12 1.41 1.41 2.12-2.12zM17 11v2h6v-2h-6zm-5-2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm2.83 7.24l2.12 2.12 1.41-1.41-2.12-2.12-1.41 1.41zm-9.19.71l1.41 1.41 2.12-2.12-1.41-1.41-2.12 2.12zM11 23h2v-6h-2v6z"/>',flash_auto:'<path d="M3 2v12h3v9l7-12H9l4-9H3z"/><path d="M16.85 7.65L18 4l1.15 3.65h-2.3zM19 2h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2z"/>',flash_off:'<path d="M3.27 3L2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3zM17 10h-4l4-8H7v2.18l8.46 8.46L17 10z"/>',
	flash_on:'<path d="M7 2v11h3v9l7-12h-4l4-8z"/>',flip:'<path d="M15 21h2v-2h-2v2zm4-12h2V7h-2v2zM3 5v14c0 1.1.9 2 2 2h4v-2H5V5h4V3H5c-1.1 0-2 .9-2 2zm16-2v2h2c0-1.1-.9-2-2-2zm-8 20h2V1h-2v22zm8-6h2v-2h-2v2zM15 5h2V3h-2v2zm4 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z"/>',gradient:'<path d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"/>',
	grain:'<path d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',grid_off:'<path d="M8 4v1.45l2 2V4h4v4h-3.45l2 2H14v1.45l2 2V10h4v4h-3.45l2 2H20v1.45l2 2V4c0-1.1-.9-2-2-2H4.55l2 2H8zm8 0h4v4h-4V4zM1.27 1.27L0 2.55l2 2V20c0 1.1.9 2 2 2h15.46l2 2 1.27-1.27L1.27 1.27zM10 12.55L11.45 14H10v-1.45zm-6-6L5.45 8H4V6.55zM8 20H4v-4h4v4zm0-6H4v-4h3.45l.55.55V14zm6 6h-4v-4h3.45l.55.54V20zm2 0v-1.46L17.46 20H16z"/>',
	grid_on:'<path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>',hdr_off:'<path d="M18 17L3.27 2.27 2 3.55l4 4V11H4V7H2v10h2v-4h2v4h2V9.55l1 1V17h4c.67 0 1.26-.33 1.62-.84l6.34 6.34 1.27-1.27L18 17zm-5-2h-2v-2.45l2 2V15zm5-2h1l.82 3.27.73.73H22l-1.19-4.17c.7-.31 1.19-1.01 1.19-1.83V9c0-1.1-.9-2-2-2h-4v5.45l2 2V13zm0-4h2v2h-2V9zm-3 2.45V9c0-1.1-.9-2-2-2h-2.45L15 11.45z"/>',
	hdr_on:'<path d="M6 11H4V7H2v10h2v-4h2v4h2V7H6v4zm7-4H9v10h4c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8h-2V9h2v6zm9-4V9c0-1.1-.9-2-2-2h-4v10h2v-4h1l1 4h2l-1.19-4.17c.7-.31 1.19-1.01 1.19-1.83zm-2 0h-2V9h2v2z"/>',hdr_strong:'<path d="M17 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/><path d="M5 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>',hdr_weak:'<path d="M5 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><path d="M17 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-10c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/>',
	healing:'<path d="M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34c-.39-.39-1.02-.39-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z"/>',
	image:'<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>',image_aspect_ratio:'<path d="M16 10h-2v2h2v-2zm0 4h-2v2h2v-2zm-8-4H6v2h2v-2zm4 0h-2v2h2v-2zm8-6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>',iso:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14zm-2-2v-1.5h-5V17h5z"/>',landscape:'<path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>',
	leak_add:'<path d="M6 3H3v3c1.66 0 3-1.34 3-3zm8 0h-2c0 4.97-4.03 9-9 9v2c6.08 0 11-4.93 11-11zm-4 0H8c0 2.76-2.24 5-5 5v2c3.87 0 7-3.13 7-7zm0 18h2c0-4.97 4.03-9 9-9v-2c-6.07 0-11 4.93-11 11zm8 0h3v-3c-1.66 0-3 1.34-3 3zm-4 0h2c0-2.76 2.24-5 5-5v-2c-3.87 0-7 3.13-7 7z"/>',leak_remove:'<path d="M10 3H8c0 .37-.04.72-.12 1.06l1.59 1.59C9.81 4.84 10 3.94 10 3zM3 4.27l2.84 2.84C5.03 7.67 4.06 8 3 8v2c1.61 0 3.09-.55 4.27-1.46L8.7 9.97C7.14 11.24 5.16 12 3 12v2c2.71 0 5.19-.99 7.11-2.62l2.5 2.5C10.99 15.81 10 18.29 10 21h2c0-2.16.76-4.14 2.03-5.69l1.43 1.43C14.55 17.91 14 19.39 14 21h2c0-1.06.33-2.03.89-2.84L19.73 21 21 19.73 4.27 3 3 4.27zM14 3h-2c0 1.5-.37 2.91-1.02 4.16l1.46 1.46C13.42 6.98 14 5.06 14 3zm5.94 13.12c.34-.08.69-.12 1.06-.12v-2c-.94 0-1.84.19-2.66.52l1.6 1.6zm-4.56-4.56l1.46 1.46C18.09 12.37 19.5 12 21 12v-2c-2.06 0-3.98.58-5.62 1.56z"/>',
	lens:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>',looks:'<path d="M12 10c-3.86 0-7 3.14-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7z"/><path d="M12 6C5.93 6 1 10.93 1 17h2c0-4.96 4.04-9 9-9s9 4.04 9 9h2c0-6.07-4.93-11-11-11z"/>',looks_3:'<path d="M19.01 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 7.5c0 .83-.67 1.5-1.5 1.5.83 0 1.5.67 1.5 1.5V15c0 1.11-.9 2-2 2h-4v-2h4v-2h-2v-2h2V9h-4V7h4c1.1 0 2 .89 2 2v1.5z"/>',looks_4:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4H9V7h2v4h2V7h2v10z"/>',
	looks_5:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2H9v-2h4v-2H9V7h6v2z"/>',looks_6:'<path d="M11 15h2v-2h-2v2zm8-12H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h2c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2c-1.1 0-2-.89-2-2V9c0-1.11.9-2 2-2h4v2z"/>',looks_one:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z"/>',looks_two:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.11-.9 2-2 2h-2v2h4v2H9v-4c0-1.11.9-2 2-2h2V9H9V7h4c1.1 0 2 .89 2 2v2z"/>',
	loupe:'<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/><path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-18C6.49 2 2 6.49 2 12s4.49 10 10 10h8c1.1 0 2-.9 2-2v-8c0-5.51-4.49-10-10-10z"/>',movie_creation:'<path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>',nature:'<path d="M13 16.12c3.47-.41 6.17-3.36 6.17-6.95 0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H5v2h14v-2h-6v-3.88z"/>',nature_people:'<path d="M22.17 9.17c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.47 2.52 6.34 5.83 6.89V20H6v-3h1v-4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4h1v5h16v-2h-3v-3.88c3.47-.41 6.17-3.36 6.17-6.95zM4.5 11c.83 0 1.5-.67 1.5-1.5S5.33 8 4.5 8 3 8.67 3 9.5 3.67 11 4.5 11z"/>',
	navigate_before:'<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>',navigate_next:'<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>',palette:'<path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>',
	panorama:'<path d="M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z"/>',panorama_fisheye:'<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>',panorama_horizontal:'<path d="M20 6.54v10.91c-2.6-.77-5.28-1.16-8-1.16-2.72 0-5.4.39-8 1.16V6.54c2.6.77 5.28 1.16 8 1.16 2.72.01 5.4-.38 8-1.16M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7c-3.09 0-6.18-.55-9.12-1.64-.11-.04-.22-.06-.31-.06-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62.1 0 .2-.02.31-.06 2.94-1.1 6.03-1.64 9.12-1.64 3.09 0 6.18.55 9.12 1.64.11.04.21.06.31.06.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63z"/>',
	panorama_vertical:'<path d="M19.94 21.12c-1.1-2.94-1.64-6.03-1.64-9.12 0-3.09.55-6.18 1.64-9.12.04-.11.06-.22.06-.31 0-.34-.23-.57-.63-.57H4.63c-.4 0-.63.23-.63.57 0 .1.02.2.06.31C5.16 5.82 5.71 8.91 5.71 12c0 3.09-.55 6.18-1.64 9.12-.05.11-.07.22-.07.31 0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57-.01-.1-.03-.2-.07-.31zM6.54 20c.77-2.6 1.16-5.28 1.16-8 0-2.72-.39-5.4-1.16-8h10.91c-.77 2.6-1.16 5.28-1.16 8 0 2.72.39 5.4 1.16 8H6.54z"/>',panorama_wide_angle:'<path d="M12 6c2.45 0 4.71.2 7.29.64.47 1.78.71 3.58.71 5.36 0 1.78-.24 3.58-.71 5.36-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64C4.24 15.58 4 13.78 4 12c0-1.78.24-3.58.71-5.36C7.29 6.2 9.55 6 12 6m0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12s.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73s5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23s-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4z"/>',
	photo:'<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>',photo_album:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4zm0 15l3-3.86 2.14 2.58 3-3.86L18 19H6z"/>',photo_camera:'<circle cx="12" cy="12" r="3.2"/><path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"/>',
	photo_library:'<path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>',portrait:'<path d="M16.5 16.25c0-1.5-3-2.25-4.5-2.25s-4.5.75-4.5 2.25V17h9v-.75zm-4.5-4c1.24 0 2.25-1.01 2.25-2.25S13.24 7.75 12 7.75 9.75 8.76 9.75 10s1.01 2.25 2.25 2.25z"/><path d="M19 19H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',remove_red_eye:'<path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"/><path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>',
	rotate_left:'<path d="M7.11 8.53L5.7 7.11C4.8 8.27 4.24 9.61 4.07 11h2.02c.14-.87.49-1.72 1.02-2.47z"/><path d="M6.09 13H4.07c.17 1.39.72 2.73 1.62 3.89l1.41-1.42c-.52-.75-.87-1.59-1.01-2.47z"/><path d="M7.1 18.32c1.16.9 2.51 1.44 3.9 1.61V17.9c-.87-.15-1.71-.49-2.46-1.03L7.1 18.32z"/><path d="M13 4.07V1L8.45 5.55 13 10V6.09c2.84.48 5 2.94 5 5.91s-2.16 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93s-3.05-7.44-7-7.93z"/>',rotate_right:'<path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45z"/><path d="M19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02z"/><path d="M13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03z"/><path d="M16.89 15.48l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"/>',
	slideshow:'<path d="M10 8v8l5-4-5-4z"/><path d="M19 19H5V5h14v14zm0-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',straighten:'<path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z"/>',style:'<path d="M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"/>',
	switch_camera:'<path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 11.5V13H9v2.5L5.5 12 9 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"/>',switch_video:'<path d="M18 9.5V6c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3.5l4 4v-13l-4 4zm-5 6V13H7v2.5L3.5 12 7 8.5V11h6V8.5l3.5 3.5-3.5 3.5z"/>',tag_faces:'<path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.01-18C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"/><path d="M15.5 11c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/><path d="M8.5 11c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/><path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>',
	texture:'<path d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"/>',timelapse:'<path d="M16.24 7.76C15.07 6.59 13.54 6 12 6v6l-4.24 4.24c2.34 2.34 6.14 2.34 8.49 0 2.34-2.34 2.34-6.14-.01-8.48z"/><path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>',
	timer_10:'<path d="M0 7.72V9.4l3-1V18h2V6h-.25L0 7.72zm23.78 6.65c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39 0-.14.03-.28.09-.41.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59C21.49 9.07 21 9 20.46 9c-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.69.23.96c.15.28.36.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02zm-9.96-7.32c-.34-.4-.75-.7-1.23-.88-.47-.18-1.01-.27-1.59-.27-.58 0-1.11.09-1.59.27-.48.18-.89.47-1.23.88-.34.41-.6.93-.79 1.59-.18.65-.28 1.45-.28 2.39v1.92c0 .94.09 1.74.28 2.39.19.66.45 1.19.8 1.6.34.41.75.71 1.23.89.48.18 1.01.28 1.59.28.59 0 1.12-.09 1.59-.28.48-.18.88-.48 1.22-.89.34-.41.6-.94.78-1.6.18-.65.28-1.45.28-2.39v-1.92c0-.94-.09-1.74-.28-2.39-.18-.66-.44-1.19-.78-1.59zm-.92 6.17c0 .6-.04 1.11-.12 1.53-.08.42-.2.76-.36 1.02-.16.26-.36.45-.59.57-.23.12-.51.18-.82.18-.3 0-.58-.06-.82-.18s-.44-.31-.6-.57c-.16-.26-.29-.6-.38-1.02-.09-.42-.13-.93-.13-1.53v-2.5c0-.6.04-1.11.13-1.52.09-.41.21-.74.38-1 .16-.25.36-.43.6-.55.24-.11.51-.17.81-.17.31 0 .58.06.81.17.24.11.44.29.6.55.16.25.29.58.37.99.08.41.13.92.13 1.52v2.51z"/>',
	timer:'<path d="M15 1H9v2h6V1z"/><path d="M11 14h2V8h-2v6z"/><path d="M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm7.03-12.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61z"/>',timer_3:'<path d="M11.61 12.97c-.16-.24-.36-.46-.62-.65-.25-.19-.56-.35-.93-.48.3-.14.57-.3.8-.5.23-.2.42-.41.57-.64.15-.23.27-.46.34-.71.08-.24.11-.49.11-.73 0-.55-.09-1.04-.28-1.46-.18-.42-.44-.77-.78-1.06-.33-.28-.73-.5-1.2-.64-.45-.13-.97-.2-1.53-.2-.55 0-1.06.08-1.52.24-.47.17-.87.4-1.2.69-.33.29-.6.63-.78 1.03-.2.39-.29.83-.29 1.29h1.98c0-.26.05-.49.14-.69.09-.2.22-.38.38-.52.17-.14.36-.25.58-.33.22-.08.46-.12.73-.12.61 0 1.06.16 1.36.47.3.31.44.75.44 1.32 0 .27-.04.52-.12.74-.08.22-.21.41-.38.57-.17.16-.38.28-.63.37-.25.09-.55.13-.89.13H6.72v1.57H7.9c.34 0 .64.04.91.11.27.08.5.19.69.35.19.16.34.36.44.61.1.24.16.54.16.87 0 .62-.18 1.09-.53 1.42-.35.33-.84.49-1.45.49-.29 0-.56-.04-.8-.13-.24-.08-.44-.2-.61-.36-.17-.16-.3-.34-.39-.56-.09-.22-.14-.46-.14-.72H4.19c0 .55.11 1.03.32 1.45.21.42.5.77.86 1.05s.77.49 1.24.63.96.21 1.48.21c.57 0 1.09-.08 1.58-.23.49-.15.91-.38 1.26-.68.36-.3.64-.66.84-1.1.2-.43.3-.93.3-1.48 0-.29-.04-.58-.11-.86-.08-.25-.19-.51-.35-.76zm9.26 1.4c-.14-.28-.35-.53-.63-.74-.28-.21-.61-.39-1.01-.53s-.85-.27-1.35-.38c-.35-.07-.64-.15-.87-.23-.23-.08-.41-.16-.55-.25-.14-.09-.23-.19-.28-.3-.05-.11-.08-.24-.08-.39s.03-.28.09-.41c.06-.13.15-.25.27-.34.12-.1.27-.18.45-.24s.4-.09.64-.09c.25 0 .47.04.66.11.19.07.35.17.48.29.13.12.22.26.29.42.06.16.1.32.1.49h1.95c0-.39-.08-.75-.24-1.09-.16-.34-.39-.63-.69-.88-.3-.25-.66-.44-1.09-.59-.43-.15-.92-.22-1.46-.22-.51 0-.98.07-1.39.21-.41.14-.77.33-1.06.57-.29.24-.51.52-.67.84-.16.32-.23.65-.23 1.01s.08.68.23.96c.15.28.37.52.64.73.27.21.6.38.98.53.38.14.81.26 1.27.36.39.08.71.17.95.26s.43.19.57.29c.13.1.22.22.27.34.05.12.07.25.07.39 0 .32-.13.57-.4.77-.27.2-.66.29-1.17.29-.22 0-.43-.02-.64-.08-.21-.05-.4-.13-.56-.24-.17-.11-.3-.26-.41-.44-.11-.18-.17-.41-.18-.67h-1.89c0 .36.08.71.24 1.05.16.34.39.65.7.93.31.27.69.49 1.15.66.46.17.98.25 1.58.25.53 0 1.01-.06 1.44-.19.43-.13.8-.31 1.11-.54.31-.23.54-.51.71-.83.17-.32.25-.67.25-1.06-.02-.4-.09-.74-.24-1.02z"/>',
	timer_auto:'<path d="M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.67-5.33-4-8-4z"/>',timer_off:'<path d="M19.04 4.55l-1.42 1.42C16.07 4.74 14.12 4 12 4c-1.83 0-3.53.55-4.95 1.48l1.46 1.46C9.53 6.35 10.73 6 12 6c3.87 0 7 3.13 7 7 0 1.27-.35 2.47-.94 3.49l1.45 1.45C20.45 16.53 21 14.83 21 13c0-2.12-.74-4.07-1.97-5.61l1.42-1.42-1.41-1.42zM15 1H9v2h6V1zm-4 8.44l2 2V8h-2v1.44zM3.02 4L1.75 5.27 4.5 8.03C3.55 9.45 3 11.16 3 13c0 4.97 4.02 9 9 9 1.84 0 3.55-.55 4.98-1.5l2.5 2.5 1.27-1.27-7.71-7.71L3.02 4zM12 20c-3.87 0-7-3.13-7-7 0-1.28.35-2.48.95-3.52l9.56 9.56c-1.03.61-2.23.96-3.51.96z"/>',
	tonality:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93s3.05-7.44 7-7.93v15.86zm2-15.86c1.03.13 2 .45 2.87.93H13v-.93zM13 7h5.24c.25.31.48.65.68 1H13V7zm0 3h6.74c.08.33.15.66.19 1H13v-1zm0 9.93V19h2.87c-.87.48-1.84.8-2.87.93zM18.24 17H13v-1h5.92c-.2.35-.43.69-.68 1zm1.5-3H13v-1h6.93c-.04.34-.11.67-.19 1z"/>',transform:'<path d="M22 18v-2H8V4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4z"/><path d="M10 8h6v6h2V8c0-1.1-.9-2-2-2h-6v2z"/>',
	tune:'<path d="M13 21v-2h8v-2h-8v-2h-2v6h2zM3 17v2h6v-2H3z"/><path d="M21 13v-2H11v2h10zM7 9v2H3v2h4v2h2V9H7z"/><path d="M15 9h2V7h4V5h-4V3h-2v6zM3 5v2h10V5H3z"/>',wb_auto:'<path d="M6.85 12.65h2.3L8 9l-1.15 3.65zM22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.53 4 8 4c-4.42 0-8 3.58-8 8s3.58 8 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9H22zm-11.7 9l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9h-1.9z"/>',wb_cloudy:'<path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z"/>',
	wb_incandescent:'<path d="M3.55 18.54l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8zM11 22.45h2V19.5h-2v2.95zM4 10.5H1v2h3v-2zm11-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5c0 3.31 2.69 6 6 6s6-2.69 6-6c0-2.22-1.21-4.15-3-5.19zm5 4.19v2h3v-2h-3zm-2.76 7.66l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4z"/>',wb_irradescent:'<path d="M5 14.5h14v-6H5v6zM11 .55V3.5h2V.55h-2zm8.04 2.5l-1.79 1.79 1.41 1.41 1.8-1.79-1.42-1.41zM13 22.45V19.5h-2v2.95h2zm7.45-3.91l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM3.55 4.46l1.79 1.79 1.41-1.41-1.79-1.79-1.41 1.41zm1.41 15.49l1.79-1.8-1.41-1.41-1.79 1.79 1.41 1.42z"/>',
	wb_sunny:'<path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"/>',beenhere:'<path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-9 15l-5-5 1.41-1.41L10 13.17l7.59-7.59L19 7l-9 9z"/>',
	directions:'<path d="M21.71 11.29l-9-9c-.39-.39-1.02-.39-1.41 0l-9 9c-.39.39-.39 1.02 0 1.41l9 9c.39.39 1.02.39 1.41 0l9-9c.39-.38.39-1.01 0-1.41zM14 14.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5l3.5 3.5-3.5 3.5z"/>',directions_bike:'<path d="M16 4.8c.99 0 1.8-.81 1.8-1.8s-.81-1.8-1.8-1.8c-1 0-1.8.81-1.8 1.8S15 4.8 16 4.8z"/><path d="M19 20.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-8.5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/><path d="M14.8 10H19V8.2h-3.2l-1.93-3.27c-.3-.5-.84-.83-1.46-.83-.47 0-.89.19-1.2.5l-3.7 3.7c-.32.3-.51.73-.51 1.2 0 .63.33 1.16.85 1.47L11.2 13v5H13v-6.48l-2.25-1.67 2.32-2.33L14.8 10z"/><path d="M5 20.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zM5 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>',
	directions_bus:'<path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>',directions_car:'<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>',
	directions_ferry:'<path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2z"/><path d="M6 6h12v3.97L12 8 6 9.97V6zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19z"/>',directions_subway:'<path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/>',
	directions_train:'<path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zm8 1.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-7H6V5h12v5z"/>',directions_transit:'<path d="M12 2c-4.42 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h12v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-6H6V6h5v5zm5.5 6c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6h-5V6h5v5z"/>',
	directions_walk:'<path d="M14 3.8c.99 0 1.8-.81 1.8-1.8 0-1-.81-1.8-1.8-1.8-1 0-1.8.81-1.8 1.8S13 3.8 14 3.8z"/><path d="M14.12 10H19V8.2h-3.62l-2-3.33c-.3-.5-.84-.83-1.46-.83-.17 0-.34.03-.49.07L6 5.8V11h1.8V7.33l2.11-.66L6 22h1.8l2.87-8.11L13 17v5h1.8v-6.41l-2.49-4.54.73-2.87L14.12 10z"/>',flight:'<path d="M10.18 9"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>',hotel:'<path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3z"/><path d="M19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>',
	layers:'<path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74z"/><path d="M12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>',layers_clear:'<path d="M19.81 14.99l1.19-.92-1.43-1.43-1.19.92 1.43 1.43zm-.45-4.72L21 9l-9-7-2.91 2.27 7.87 7.88 2.4-1.88zM3.27 1L2 2.27l4.22 4.22L3 9l1.63 1.27L12 16l2.1-1.63 1.43 1.43L12 18.54l-7.37-5.73L3 14.07l9 7 4.95-3.85L20.73 21 22 19.73 3.27 1z"/>',local_airport:'<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>',
	local_atm:'<path d="M11 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3v-1h4V8h-2V7h-2v1h-1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H9v2h2v1z"/><path d="M20 18H4V6h16v12zm0-14H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2z"/>',local_attraction:'<path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/>',
	local_bar:'<path d="M11 13v6H6v2h12v-2h-5v-6l8-8V3H3v2l8 8zM7.5 7l-2-2h13l-2 2h-9z"/>',local_cafe:'<path d="M20 8h-2V5h2v3zm0-5H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2z"/><path d="M2 21h18v-2H2v2z"/>',local_car_wash:'<path d="M17 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5z"/><path d="M12 5c.83 0 1.5-.67 1.5-1.5 0-1-1.5-2.7-1.5-2.7s-1.5 1.7-1.5 2.7c0 .83.67 1.5 1.5 1.5z"/><path d="M7 5c.83 0 1.5-.67 1.5-1.5C8.5 2.5 7 .8 7 .8S5.5 2.5 5.5 3.5C5.5 4.33 6.17 5 7 5z"/><path d="M5 13l1.5-4.5h11L19 13H5zm12.5 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 15 6.5 15s1.5.67 1.5 1.5S7.33 18 6.5 18zm12.42-9.99C18.72 7.42 18.16 7 17.5 7h-11c-.66 0-1.21.42-1.42 1.01L3 14v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99z"/>',
	local_convenience_store:'<path d="M19 7V4H5v3H2v13h8v-4h4v4h8V7h-3zm-8 3H9v1h2v1H8V9h2V8H8V7h3v3zm5 2h-1v-2h-2V7h1v2h1V7h1v5z"/>',local_drink:'<path d="M3 2l2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"/>',local_florist:'<path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z"/><path d="M12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5zm-6.4 4.75c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25z"/><path d="M3 13c0 4.97 4.03 9 9 9 0-4.97-4.03-9-9-9z"/>',
	local_gas_station:'<path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>',local_grocery_store:'<path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"/><path d="M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1z"/><path d="M17 18c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>',
	local_hospital:'<path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>',local_hotel:'<path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3z"/><path d="M19 7h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>',local_laundry_service:'<path d="M9.17 16.83c1.56 1.56 4.1 1.56 5.66 0 1.56-1.56 1.56-4.1 0-5.66l-5.66 5.66zM18 2.01L6 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V4c0-1.11-.89-1.99-2-1.99zM10 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm5 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>',
	local_library:'<path d="M12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55z"/>',local_mall:'<path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"/>',local_movies:'<path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/>',
	local_offer:'<path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>',local_parking:'<path d="M13 3H6v18h4v-6h3c3.31 0 6-2.69 6-6s-2.69-6-6-6zm.2 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2z"/>',local_pharmacy:'<path d="M21 5h-2.64l1.14-3.14L17.15 1l-1.46 4H3v2l2 6-2 6v2h18v-2l-2-6 2-6V5zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z"/>',
	local_phone:'<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>',local_pizza:'<path d="M12 2C8.43 2 5.23 3.54 3.01 6L12 22l8.99-16C18.78 3.55 15.57 2 12 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>',local_play:'<path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/>',
	local_post_office:'<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>',local_print_shop:'<path d="M19 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-3 7H8v-5h8v5zm3-11H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3z"/><path d="M18 3H6v4h12V3z"/>',local_restaurant:'<path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>',
	local_see:'<circle cx="12" cy="12" r="3.2"/><path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"/>',local_shipping:'<path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>',
	local_taxi:'<path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>',location_history:'<path d="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z"/>',
	map:'<path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>',my_location:'<path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/><path d="M12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm8.94-8c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06z"/>',
	navigation:'<path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>',pin_drop:'<path d="M10 8c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zm8 0c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11z"/><path d="M5 20v2h14v-2H5z"/>',place:'<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',rate_review:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"/>',
	restaurant_menu:'<path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>',satellite:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.99h3C8 6.65 6.66 8 5 8V4.99zM5 12v-2c2.76 0 5-2.25 5-5.01h2C12 8.86 8.87 12 5 12zm0 6l3.5-4.5 2.5 3.01L14.5 12l4.5 6H5z"/>',
	store_mall_directory:'<path d="M20 4H4v2h16V4z"/><path d="M12 18H6v-4h6v4zm9-4v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1z"/>',terrain:'<path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>',traffic:'<path d="M20 10h-3V8.86c1.72-.45 3-2 3-3.86h-3V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c0 1.86 1.28 3.41 3 3.86V10H4c0 1.86 1.28 3.41 3 3.86V15H4c0 1.86 1.28 3.41 3 3.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14c1.72-.45 3-2 3-3.86h-3v-1.14c1.72-.45 3-2 3-3.86zm-8 9c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2s.89-2 2-2c1.1 0 2 .9 2 2s-.89 2-2 2zm0-5c-1.11 0-2-.9-2-2 0-1.11.89-2 2-2 1.1 0 2 .89 2 2 0 1.1-.89 2-2 2z"/>',
	apps:'<path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>',arrow_back:'<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>',arrow_drop_down:'<path d="M7 10l5 5 5-5z"/>',arrow_drop_down_circle:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"/>',arrow_drop_up:'<path d="M7 14l5-5 5 5z"/>',arrow_forward:'<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>',
	cancel:'<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>',check:'<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>',chevron_left:'<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>',chevron_right:'<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>',close:'<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>',
	expand_less:'<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>',expand_more:'<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>',fullscreen:'<path d="M7 14H5v5h5v-2H7v-3z"/><path d="M5 10h2V7h3V5H5v5z"/><path d="M17 17h-3v2h5v-5h-2v3z"/><path d="M14 5v2h3v3h2V5h-5z"/>',fullscreen_exit:'<path d="M5 16h3v3h2v-5H5v2z"/><path d="M8 8H5v2h5V5H8v3z"/><path d="M14 19h2v-3h3v-2h-5v5z"/><path d="M16 8V5h-2v5h5V8h-3z"/>',menu:'<path d="M3 18h18v-2H3v2z"/><path d="M3 13h18v-2H3v2z"/><path d="M3 6v2h18V6H3z"/>',
	more_horiz:'<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M18 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',more_vert:'<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/><path d="M12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>',refresh:'<path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>',
	unfold_less:'<path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59z"/><path d="M16.59 5.41L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"/>',unfold_more:'<path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83z"/><path d="M12 18.17L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"/>',adb:'<path d="M5 16c0 3.87 3.13 7 7 7s7-3.13 7-7v-4H5v4zM16.12 4.37l2.1-2.1-.82-.83-2.3 2.31C14.16 3.28 13.12 3 12 3s-2.16.28-3.09.75L6.6 1.44l-.82.83 2.1 2.1C6.14 5.64 5 7.68 5 10v1h14v-1c0-2.32-1.14-4.36-2.88-5.63zM9 9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>',
	bluetooth_audio:'<path d="M19.53 6.71l-1.26 1.26c.63 1.21.98 2.57.98 4.02 0 1.45-.36 2.82-.98 4.02l1.2 1.2c.97-1.54 1.54-3.36 1.54-5.31-.01-1.89-.55-3.67-1.48-5.19zm-5.29 5.3l2.32 2.32c.28-.72.44-1.51.44-2.33 0-.82-.16-1.59-.43-2.31l-2.33 2.32z"/><path d="M12.88 16.29L11 18.17v-3.76l1.88 1.88zM11 5.83l1.88 1.88L11 9.59V5.83zm4.71 1.88L10 2H9v7.59L4.41 5 3 6.41 8.59 12 3 17.59 4.41 19 9 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29z"/>',disc_full:'<path d="M20 7v5h2V7h-2zm0 9h2v-2h-2v2z"/><path d="M10 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-10c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z"/>',
	dnd_forwardslash:'<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"/>',do_not_disturb:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"/>',
	drive_eta:'<path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"/>',event_available:'<path d="M16.53 11.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59 17l5.94-5.94z"/><path d="M19 19H5V8h14v11zm0-16h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',
	event_busy:'<path d="M9.31 17l2.44-2.44L14.19 17l1.06-1.06-2.44-2.44 2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06 2.44 2.44-2.44 2.44L9.31 17z"/><path d="M19 19H5V8h14v11zm0-16h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',event_note:'<path d="M19 19H5V8h14v11zm0-16h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M14 14H7v2h7v-2zm3-4H7v2h10v-2z"/>',folder_special:'<path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6.42 12L10 15.9 6.42 18l.95-4.07-3.16-2.74 4.16-.36L10 7l1.63 3.84 4.16.36-3.16 2.74.95 4.06z"/>',
	mms:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6H5z"/>',more:'<path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.97.89 1.66.89H22c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm5 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>',network_locked:'<path d="M19.5 10c.17 0 .33.03.5.05V1L1 20h13v-3c0-.89.39-1.68 1-2.23v-.27c0-2.48 2.02-4.5 4.5-4.5z"/><path d="M21 16h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V16zm1 0v-1.5c0-1.38-1.12-2.5-2.5-2.5S17 13.12 17 14.5V16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1z"/>',
	phone_bluetooth_speaker:'<path d="M18 7.21l.94.94-.94.94V7.21zm0-4.3l.94.94-.94.94V2.91zM14.71 9.5L17 7.21V11h.5l2.85-2.85L18.21 6l2.15-2.15L17.5 1H17v3.79L14.71 2.5l-.71.71L16.79 6 14 8.79l.71.71z"/><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>',phone_forwarded:'<path d="M18 11l5-5-5-5v3h-4v4h4v3z"/><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>',
	phone_in_talk:'<path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/><path d="M19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7z"/><path d="M15 12h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/>',phone_locked:'<path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/><path d="M19.2 4h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm.8 0v-.5C20 2.12 18.88 1 17.5 1S15 2.12 15 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1z"/>',
	phone_missed:'<path d="M6.5 5.5L12 11l7-7-1-1-6 6-4.5-4.5H11V3H5v6h1.5V5.5z"/><path d="M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73 1.6 0 3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.28-.12-.52-.3-.7z"/>',phone_paused:'<path d="M17 3h-2v7h2V3z"/><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/><path d="M19 3v7h2V3h-2z"/>',
	play_download:'<path d="M20 6h-4V4l-2-2h-4L8 4v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm2 15l-5-5h3v-4h4v4h3l-5 5z"/>',play_install:'<path d="M20 6h-4V4l-2-2h-4L8 4v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm.5 13.5L7 14l1.41-1.41 2.09 2.09 5.18-5.18 1.41 1.41-6.59 6.59z"/>',sd_card:'<path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 6h-2V4h2v4zm3 0h-2V4h2v4zm3 0h-2V4h2v4z"/>',
	sim_card_alert:'<path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z"/>',sms:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/>',sms_failed:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>',sync:'<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8z"/><path d="M12 18c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>',
	sync_disabled:'<path d="M10 6.35V4.26c-.8.21-1.55.54-2.23.96l1.46 1.46c.25-.12.5-.24.77-.33zm-7.14-.94l2.36 2.36C4.45 8.99 4 10.44 4 12c0 2.21.91 4.2 2.36 5.64L4 20h6v-6l-2.24 2.24C6.68 15.15 6 13.66 6 12c0-1 .25-1.94.68-2.77l8.08 8.08c-.25.13-.5.25-.77.34v2.09c.8-.21 1.55-.54 2.23-.96l2.36 2.36 1.27-1.27L4.14 4.14 2.86 5.41zM20 4h-6v6l2.24-2.24C17.32 8.85 18 10.34 18 12c0 1-.25 1.94-.68 2.77l1.46 1.46C19.55 15.01 20 13.56 20 12c0-2.21-.91-4.2-2.36-5.64L20 4z"/>',sync_problem:'<path d="M3 12c0 2.21.91 4.2 2.36 5.64L3 20h6v-6l-2.24 2.24C5.68 15.15 5 13.66 5 12c0-2.61 1.67-4.83 4-5.65V4.26C5.55 5.15 3 8.27 3 12z"/><path d="M21 4h-6v6l2.24-2.24C18.32 8.85 19 10.34 19 12c0 2.61-1.67 4.83-4 5.65v2.09c3.45-.89 6-4.01 6-7.74 0-2.21-.91-4.2-2.36-5.64L21 4z"/><path d="M11 13h2V7h-2v6zm0 4h2v-2h-2v2z"/>',
	system_update:'<path d="M17 19H7V5h10v14zm0-17.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"/><path d="M16 13h-3V8h-2v5H8l4 4 4-4z"/>',tap_and_play:'<path d="M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"/>',time_to_leave:'<path d="M18.92 5.01C18.72 4.42 18.16 4 17.5 4h-11c-.66 0-1.21.42-1.42 1.01L3 11v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 15c-.83 0-1.5-.67-1.5-1.5S5.67 12 6.5 12s1.5.67 1.5 1.5S7.33 15 6.5 15zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 10l1.5-4.5h11L19 10H5z"/>',
	vibration:'<path d="M0 15h2V9H0v6z"/><path d="M3 17h2V7H3v10z"/><path d="M22 9v6h2V9h-2z"/><path d="M19 17h2V7h-2v10z"/><path d="M16 19H8V5h8v14zm.5-16h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5z"/>',voice_chat:'<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12l-4-3.2V14H6V6h8v3.2L18 6v8z"/>',vpn_lock:'<path d="M22 4v-.5C22 2.12 20.88 1 19.5 1S17 2.12 17 3.5V4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm-.8 0h-3.4v-.5c0-.94.76-1.7 1.7-1.7s1.7.76 1.7 1.7V4zm-2.28 8c.04.33.08.66.08 1 0 2.08-.8 3.97-2.1 5.39-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H7v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2V3.46c-.95-.3-1.95-.46-3-.46C5.48 3 1 7.48 1 13s4.48 10 10 10 10-4.48 10-10c0-.34-.02-.67-.05-1h-2.03zM10 20.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 16v1c0 1.1.9 2 2 2v1.93z"/>',
	cake:'<path d="M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2z"/><path d="M16.6 15.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01z"/><path d="M18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"/>',
	domain:'<path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>',group:'<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3z"/><path d="M8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/><path d="M8 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/><path d="M16 13c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>',
	group_add:'<path d="M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2z"/><path d="M18 11c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86 0 1.07-.34 2.04-.9 2.86.28.09.59.14.91.14z"/><path d="M13 11c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3z"/><path d="M19.62 13.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84z"/><path d="M13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"/>',location_city:'<path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/>',
	mood:'<path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.01-18C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2z"/><path d="M15.5 11c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z"/><path d="M8.5 11c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/><path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>',notifications:'<path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/><path d="M18 16v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2z"/>',
	notifications_none:'<path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/><path d="M16 17H7v-6.5C7 8.01 9.01 6 11.5 6S16 8.01 16 10.5V17zm2-1v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2z"/>',notifications_off:'<path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM18 10.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-.51.12-.99.32-1.45.56L18 14.18V10.5zm-.27 8.5l2 2L21 19.73 4.27 3 3 4.27l2.92 2.92C5.34 8.16 5 9.29 5 10.5V16l-2 2v1h14.73z"/>',
	notifications_on:'<path d="M6.58 3.58L5.15 2.15C2.76 3.97 1.18 6.8 1.03 10h2c.15-2.65 1.51-4.97 3.55-6.42z"/><path d="M19.97 10h2c-.15-3.2-1.73-6.03-4.13-7.85l-1.43 1.43c2.05 1.45 3.41 3.77 3.56 6.42z"/><path d="M18 10.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2v-5.5z"/><path d="M11.5 22c.14 0 .27-.01.4-.04.65-.13 1.19-.58 1.44-1.18.1-.24.16-.5.16-.78h-4c0 1.1.9 2 2 2z"/>',notifications_paused:'<path d="M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"/><path d="M14 9.8l-2.8 3.4H14V15H9v-1.8l2.8-3.4H9V8h5v1.8zm4 6.2v-5.5c0-3.07-2.13-5.64-5-6.32V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5v.68c-2.87.68-5 3.25-5 6.32V16l-2 2v1h17v-1l-2-2z"/>',
	pages:'<path d="M3 5v6h5L7 7l4 1V3H5c-1.1 0-2 .9-2 2z"/><path d="M8 13H3v6c0 1.1.9 2 2 2h6v-5l-4 1 1-4z"/><path d="M17 17l-4-1v5h6c1.1 0 2-.9 2-2v-6h-5l1 4z"/><path d="M19 3h-6v5l4-1-1 4h5V5c0-1.1-.9-2-2-2z"/>',party_mode:'<path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.63 0 3.06.79 3.98 2H12c-1.66 0-3 1.34-3 3 0 .35.07.69.18 1H7.1c-.06-.32-.1-.66-.1-1 0-2.76 2.24-5 5-5zm0 10c-1.63 0-3.06-.79-3.98-2H12c1.66 0 3-1.34 3-3 0-.35-.07-.69-.18-1h2.08c.07.32.1.66.1 1 0 2.76-2.24 5-5 5z"/>',
	people:'<path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3z"/><path d="M8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3z"/><path d="M8 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/><path d="M16 13c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>',people_outline:'<path d="M21.5 17.5H14v-1.25c0-.46-.2-.86-.52-1.22.88-.3 1.96-.53 3.02-.53 2.44 0 5 1.21 5 1.75v1.25zm-9 0h-10v-1.25c0-.54 2.56-1.75 5-1.75s5 1.21 5 1.75v1.25zm4-4.5c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25z"/><path d="M7.5 6.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5.5c1.93 0 3.5-1.57 3.5-3.5S9.43 5 7.5 5 4 6.57 4 8.5 5.57 12 7.5 12z"/><path d="M16.5 6.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 5.5c1.93 0 3.5-1.57 3.5-3.5S18.43 5 16.5 5 13 6.57 13 8.5s1.57 3.5 3.5 3.5z"/>',
	person:'<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/><path d="M12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',person_add:'<path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/><path d="M6 10V7H4v3H1v2h3v3h2v-3h3v-2H6z"/><path d="M15 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>',person_outline:'<path d="M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 1.9c1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1-1.16 0-2.1-.94-2.1-2.1 0-1.16.94-2.1 2.1-2.1"/><path d="M12 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm0 1.9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1"/>',
	plus_one:'<path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4z"/><path d="M14.5 6.08V7.9l2.5-.5V18h2V5z"/>',poll:'<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>',"public":'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>',
	school:'<path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>',share:'<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>',whatshot:'<path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>',
	check_box:'<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>',check_box_outline_blank:'<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>',radio_button_off:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>',radio_button_on:'<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/><path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>',
	star:'<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>',star_half:'<path d="M22 9.74l-7.19-.62L12 2.5 9.19 9.13 2 9.74l5.46 4.73-1.64 7.03L12 17.77l6.18 3.73-1.63-7.03L22 9.74zM12 15.9V6.6l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.9z"/>',star_outline:'<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>'};
	return{restrict:"E",link:function(g,f,d){var c,b;g=function(a){void 0===e[a]&&(a="help");if(a!=c){try{f.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="'+b+'" height="'+b+'"><g id="'+a+'" style="display:none">'+e[a]+'</g><g id="'+c+'" style="display:none">'+e[c]+"</g></svg>"),(new SVGMorpheus(f.children()[0])).to(a,JSON.parse(d.options||null))}catch(g){f.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="'+b+'" height="'+b+'">'+e[a]+"</svg>")}c=a}};var h=
	function(a){a!=b&&(f.children()[0].setAttribute("width",a),f.children()[0].setAttribute("height",a),b=a)};(function(){if(void 0!==d.icon){c=d.icon;var a=c.match(/ic_(.*)_([0-9]+)px.svg/m);null!==a&&(c=a[1],b=a[2])}else c="help";void 0===e[c]&&(c="help");void 0!==d.size?b=d.size:null!==b&&(b=24);f.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="'+b+'" height="'+b+'">'+e[c]+"</svg>")})();void 0!==d.icon&&d.$observe("icon",g);void 0!==d.size&&d.$observe("size",h)}}});


/***/ },
/* 8 */,
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {"use strict";
	
	//! moment.js
	//! version : 2.8.4
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	
	(function (undefined) {
	    /************************************
	        Constants
	    ************************************/
	
	    var moment,
	        VERSION = "2.8.4",
	
	    // the global-scope this is NOT the global object in Node.js
	    globalScope = typeof global !== "undefined" ? global : this,
	        oldGlobalMoment,
	        round = Math.round,
	        hasOwnProperty = Object.prototype.hasOwnProperty,
	        i,
	        YEAR = 0,
	        MONTH = 1,
	        DATE = 2,
	        HOUR = 3,
	        MINUTE = 4,
	        SECOND = 5,
	        MILLISECOND = 6,
	
	    // internal storage for locale config files
	    locales = {},
	
	    // extra moment internal properties (plugins register props here)
	    momentProperties = [],
	
	    // check for nodeJS
	    hasModule = typeof module !== "undefined" && module && module.exports,
	
	    // ASP.NET json date format regex
	    aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
	        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
	
	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,
	
	    // format tokens
	    formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,
	        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
	
	    // parsing token regexes
	    parseTokenOneOrTwoDigits = /\d\d?/,
	        // 0 - 99
	    parseTokenOneToThreeDigits = /\d{1,3}/,
	        // 0 - 999
	    parseTokenOneToFourDigits = /\d{1,4}/,
	        // 0 - 9999
	    parseTokenOneToSixDigits = /[+\-]?\d{1,6}/,
	        // -999,999 - 999,999
	    parseTokenDigits = /\d+/,
	        // nonzero number of digits
	    parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
	        // any word (or two) characters or numbers including two/three word month in arabic.
	    parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi,
	        // +00:00 -00:00 +0000 -0000 or Z
	    parseTokenT = /T/i,
	        // T (ISO separator)
	    parseTokenOffsetMs = /[\+\-]?\d+/,
	        // 1234567890123
	    parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/,
	        // 123456789 123456789.123
	
	    //strict parsing regexes
	    parseTokenOneDigit = /\d/,
	        // 0 - 9
	    parseTokenTwoDigits = /\d\d/,
	        // 00 - 99
	    parseTokenThreeDigits = /\d{3}/,
	        // 000 - 999
	    parseTokenFourDigits = /\d{4}/,
	        // 0000 - 9999
	    parseTokenSixDigits = /[+-]?\d{6}/,
	        // -999,999 - 999,999
	    parseTokenSignedNumber = /[+-]?\d+/,
	        // -inf - inf
	
	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
	        isoFormat = "YYYY-MM-DDTHH:mm:ssZ",
	        isoDates = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]],
	
	    // iso time formats and regexes
	    isoTimes = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]],
	
	    // timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-15', '30']
	    parseTimezoneChunker = /([\+\-]|\d\d)/gi,
	
	    // getter and setter names
	    proxyGettersAndSetters = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
	        unitMillisecondFactors = {
	        Milliseconds: 1,
	        Seconds: 1000,
	        Minutes: 60000,
	        Hours: 3600000,
	        Days: 86400000,
	        Months: 2592000000,
	        Years: 31536000000
	    },
	        unitAliases = {
	        ms: "millisecond",
	        s: "second",
	        m: "minute",
	        h: "hour",
	        d: "day",
	        D: "date",
	        w: "week",
	        W: "isoWeek",
	        M: "month",
	        Q: "quarter",
	        y: "year",
	        DDD: "dayOfYear",
	        e: "weekday",
	        E: "isoWeekday",
	        gg: "weekYear",
	        GG: "isoWeekYear"
	    },
	        camelFunctions = {
	        dayofyear: "dayOfYear",
	        isoweekday: "isoWeekday",
	        isoweek: "isoWeek",
	        weekyear: "weekYear",
	        isoweekyear: "isoWeekYear"
	    },
	
	    // format function strings
	    formatFunctions = {},
	
	    // default relative time thresholds
	    relativeTimeThresholds = {
	        s: 45, // seconds to minute
	        m: 45, // minutes to hour
	        h: 22, // hours to day
	        d: 26, // days to month
	        M: 11 // months to year
	    },
	
	    // tokens to ordinalize and pad
	    ordinalizeTokens = "DDD w W M D d".split(" "),
	        paddedTokens = "M D H h m s w W".split(" "),
	        formatTokenFunctions = {
	        M: function M() {
	            return this.month() + 1;
	        },
	        MMM: function MMM(format) {
	            return this.localeData().monthsShort(this, format);
	        },
	        MMMM: function MMMM(format) {
	            return this.localeData().months(this, format);
	        },
	        D: function D() {
	            return this.date();
	        },
	        DDD: function DDD() {
	            return this.dayOfYear();
	        },
	        d: function d() {
	            return this.day();
	        },
	        dd: function dd(format) {
	            return this.localeData().weekdaysMin(this, format);
	        },
	        ddd: function ddd(format) {
	            return this.localeData().weekdaysShort(this, format);
	        },
	        dddd: function dddd(format) {
	            return this.localeData().weekdays(this, format);
	        },
	        w: function w() {
	            return this.week();
	        },
	        W: function W() {
	            return this.isoWeek();
	        },
	        YY: function YY() {
	            return leftZeroFill(this.year() % 100, 2);
	        },
	        YYYY: function YYYY() {
	            return leftZeroFill(this.year(), 4);
	        },
	        YYYYY: function YYYYY() {
	            return leftZeroFill(this.year(), 5);
	        },
	        YYYYYY: function YYYYYY() {
	            var y = this.year(),
	                sign = y >= 0 ? "+" : "-";
	            return sign + leftZeroFill(Math.abs(y), 6);
	        },
	        gg: function gg() {
	            return leftZeroFill(this.weekYear() % 100, 2);
	        },
	        gggg: function gggg() {
	            return leftZeroFill(this.weekYear(), 4);
	        },
	        ggggg: function ggggg() {
	            return leftZeroFill(this.weekYear(), 5);
	        },
	        GG: function GG() {
	            return leftZeroFill(this.isoWeekYear() % 100, 2);
	        },
	        GGGG: function GGGG() {
	            return leftZeroFill(this.isoWeekYear(), 4);
	        },
	        GGGGG: function GGGGG() {
	            return leftZeroFill(this.isoWeekYear(), 5);
	        },
	        e: function e() {
	            return this.weekday();
	        },
	        E: function E() {
	            return this.isoWeekday();
	        },
	        a: function a() {
	            return this.localeData().meridiem(this.hours(), this.minutes(), true);
	        },
	        A: function A() {
	            return this.localeData().meridiem(this.hours(), this.minutes(), false);
	        },
	        H: function H() {
	            return this.hours();
	        },
	        h: function h() {
	            return this.hours() % 12 || 12;
	        },
	        m: function m() {
	            return this.minutes();
	        },
	        s: function s() {
	            return this.seconds();
	        },
	        S: function S() {
	            return toInt(this.milliseconds() / 100);
	        },
	        SS: function SS() {
	            return leftZeroFill(toInt(this.milliseconds() / 10), 2);
	        },
	        SSS: function SSS() {
	            return leftZeroFill(this.milliseconds(), 3);
	        },
	        SSSS: function SSSS() {
	            return leftZeroFill(this.milliseconds(), 3);
	        },
	        Z: function Z() {
	            var a = -this.zone(),
	                b = "+";
	            if (a < 0) {
	                a = -a;
	                b = "-";
	            }
	            return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2);
	        },
	        ZZ: function ZZ() {
	            var a = -this.zone(),
	                b = "+";
	            if (a < 0) {
	                a = -a;
	                b = "-";
	            }
	            return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
	        },
	        z: function z() {
	            return this.zoneAbbr();
	        },
	        zz: function zz() {
	            return this.zoneName();
	        },
	        x: function x() {
	            return this.valueOf();
	        },
	        X: function X() {
	            return this.unix();
	        },
	        Q: function Q() {
	            return this.quarter();
	        }
	    },
	        deprecations = {},
	        lists = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"];
	
	    // Pick the first defined of two or three arguments. dfl comes from
	    // default.
	    function dfl(a, b, c) {
	        switch (arguments.length) {
	            case 2:
	                return a != null ? a : b;
	            case 3:
	                return a != null ? a : b != null ? b : c;
	            default:
	                throw new Error("Implement me");
	        }
	    }
	
	    function hasOwnProp(a, b) {
	        return hasOwnProperty.call(a, b);
	    }
	
	    function defaultParsingFlags() {
	        // We need to deep clone this object, and es5 standard is not very
	        // helpful.
	        return {
	            empty: false,
	            unusedTokens: [],
	            unusedInput: [],
	            overflow: -2,
	            charsLeftOver: 0,
	            nullInput: false,
	            invalidMonth: null,
	            invalidFormat: false,
	            userInvalidated: false,
	            iso: false
	        };
	    }
	
	    function printMsg(msg) {
	        if (moment.suppressDeprecationWarnings === false && typeof console !== "undefined" && console.warn) {
	            console.warn("Deprecation warning: " + msg);
	        }
	    }
	
	    function deprecate(msg, fn) {
	        var firstTime = true;
	        return extend(function () {
	            if (firstTime) {
	                printMsg(msg);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }
	
	    function deprecateSimple(name, msg) {
	        if (!deprecations[name]) {
	            printMsg(msg);
	            deprecations[name] = true;
	        }
	    }
	
	    function padToken(func, count) {
	        return function (a) {
	            return leftZeroFill(func.call(this, a), count);
	        };
	    }
	    function ordinalizeToken(func, period) {
	        return function (a) {
	            return this.localeData().ordinal(func.call(this, a), period);
	        };
	    }
	
	    while (ordinalizeTokens.length) {
	        i = ordinalizeTokens.pop();
	        formatTokenFunctions[i + "o"] = ordinalizeToken(formatTokenFunctions[i], i);
	    }
	    while (paddedTokens.length) {
	        i = paddedTokens.pop();
	        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
	    }
	    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);
	
	    /************************************
	        Constructors
	    ************************************/
	
	    function Locale() {}
	
	    // Moment prototype object
	    function Moment(config, skipOverflow) {
	        if (skipOverflow !== false) {
	            checkOverflow(config);
	        }
	        copyConfig(this, config);
	        this._d = new Date(+config._d);
	    }
	
	    // Duration Constructor
	    function Duration(duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;
	
	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds + seconds * 1000 + // 1000
	        minutes * 60000 + // 1000 * 60
	        hours * 3600000; // 1000 * 60 * 60
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days + weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months + quarters * 3 + years * 12;
	
	        this._data = {};
	
	        this._locale = moment.localeData();
	
	        this._bubble();
	    }
	
	    /************************************
	        Helpers
	    ************************************/
	
	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }
	
	        if (hasOwnProp(b, "toString")) {
	            a.toString = b.toString;
	        }
	
	        if (hasOwnProp(b, "valueOf")) {
	            a.valueOf = b.valueOf;
	        }
	
	        return a;
	    }
	
	    function copyConfig(to, from) {
	        var i, prop, val;
	
	        if (typeof from._isAMomentObject !== "undefined") {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (typeof from._i !== "undefined") {
	            to._i = from._i;
	        }
	        if (typeof from._f !== "undefined") {
	            to._f = from._f;
	        }
	        if (typeof from._l !== "undefined") {
	            to._l = from._l;
	        }
	        if (typeof from._strict !== "undefined") {
	            to._strict = from._strict;
	        }
	        if (typeof from._tzm !== "undefined") {
	            to._tzm = from._tzm;
	        }
	        if (typeof from._isUTC !== "undefined") {
	            to._isUTC = from._isUTC;
	        }
	        if (typeof from._offset !== "undefined") {
	            to._offset = from._offset;
	        }
	        if (typeof from._pf !== "undefined") {
	            to._pf = from._pf;
	        }
	        if (typeof from._locale !== "undefined") {
	            to._locale = from._locale;
	        }
	
	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (typeof val !== "undefined") {
	                    to[prop] = val;
	                }
	            }
	        }
	
	        return to;
	    }
	
	    function absRound(number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }
	
	    // left zero fill a number
	    // see http://jsperf.com/left-zero-filling for performance comparison
	    function leftZeroFill(number, targetLength, forceSign) {
	        var output = "" + Math.abs(number),
	            sign = number >= 0;
	
	        while (output.length < targetLength) {
	            output = "0" + output;
	        }
	        return (sign ? forceSign ? "+" : "" : "-") + output;
	    }
	
	    function positiveMomentsDifference(base, other) {
	        var res = { milliseconds: 0, months: 0 };
	
	        res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, "M").isAfter(other)) {
	            --res.months;
	        }
	
	        res.milliseconds = +other - +base.clone().add(res.months, "M");
	
	        return res;
	    }
	
	    function momentsDifference(base, other) {
	        var res;
	        other = makeAs(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }
	
	        return res;
	    }
	
	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period).");
	                tmp = val;val = period;period = tmp;
	            }
	
	            val = typeof val === "string" ? +val : val;
	            dur = moment.duration(val, period);
	            addOrSubtractDurationFromMoment(this, dur, direction);
	            return this;
	        };
	    }
	
	    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = duration._days,
	            months = duration._months;
	        updateOffset = updateOffset == null ? true : updateOffset;
	
	        if (milliseconds) {
	            mom._d.setTime(+mom._d + milliseconds * isAdding);
	        }
	        if (days) {
	            rawSetter(mom, "Date", rawGetter(mom, "Date") + days * isAdding);
	        }
	        if (months) {
	            rawMonthSetter(mom, rawGetter(mom, "Month") + months * isAdding);
	        }
	        if (updateOffset) {
	            moment.updateOffset(mom, days || months);
	        }
	    }
	
	    // check if is an array
	    function isArray(input) {
	        return Object.prototype.toString.call(input) === "[object Array]";
	    }
	
	    function isDate(input) {
	        return Object.prototype.toString.call(input) === "[object Date]" || input instanceof Date;
	    }
	
	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }
	
	    function normalizeUnits(units) {
	        if (units) {
	            var lowered = units.toLowerCase().replace(/(.)s$/, "$1");
	            units = unitAliases[units] || camelFunctions[lowered] || lowered;
	        }
	        return units;
	    }
	
	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;
	
	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }
	
	        return normalizedInput;
	    }
	
	    function makeList(field) {
	        var count, setter;
	
	        if (field.indexOf("week") === 0) {
	            count = 7;
	            setter = "day";
	        } else if (field.indexOf("month") === 0) {
	            count = 12;
	            setter = "month";
	        } else {
	            return;
	        }
	
	        moment[field] = function (format, index) {
	            var i,
	                getter,
	                method = moment._locale[field],
	                results = [];
	
	            if (typeof format === "number") {
	                index = format;
	                format = undefined;
	            }
	
	            getter = function (i) {
	                var m = moment().utc().set(setter, i);
	                return method.call(moment._locale, m, format || "");
	            };
	
	            if (index != null) {
	                return getter(index);
	            } else {
	                for (i = 0; i < count; i++) {
	                    results.push(getter(i));
	                }
	                return results;
	            }
	        };
	    }
	
	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;
	
	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            if (coercedNumber >= 0) {
	                value = Math.floor(coercedNumber);
	            } else {
	                value = Math.ceil(coercedNumber);
	            }
	        }
	
	        return value;
	    }
	
	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }
	
	    function weeksInYear(year, dow, doy) {
	        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
	    }
	
	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }
	
	    function isLeapYear(year) {
	        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
	    }
	
	    function checkOverflow(m) {
	        var overflow;
	        if (m._a && m._pf.overflow === -2) {
	            overflow = m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH : m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE : m._a[HOUR] < 0 || m._a[HOUR] > 24 || m._a[HOUR] === 24 && (m._a[MINUTE] !== 0 || m._a[SECOND] !== 0 || m._a[MILLISECOND] !== 0) ? HOUR : m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE : m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND : m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND : -1;
	
	            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	
	            m._pf.overflow = overflow;
	        }
	    }
	
	    function isValid(m) {
	        if (m._isValid == null) {
	            m._isValid = !isNaN(m._d.getTime()) && m._pf.overflow < 0 && !m._pf.empty && !m._pf.invalidMonth && !m._pf.nullInput && !m._pf.invalidFormat && !m._pf.userInvalidated;
	
	            if (m._strict) {
	                m._isValid = m._isValid && m._pf.charsLeftOver === 0 && m._pf.unusedTokens.length === 0 && m._pf.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }
	
	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace("_", "-") : key;
	    }
	
	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0,
	            j,
	            next,
	            locale,
	            split;
	
	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split("-");
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split("-") : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join("-"));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }
	
	    function loadLocale(name) {
	        var oldLocale = null;
	        if (!locales[name] && hasModule) {
	            try {
	                oldLocale = moment.locale();
	                __webpack_require__(19)("./" + name);
	                // because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
	                moment.locale(oldLocale);
	            } catch (e) {}
	        }
	        return locales[name];
	    }
	
	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function makeAs(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (moment.isMoment(input) || isDate(input) ? +input : +moment(input)) - +res;
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(+res._d + diff);
	            moment.updateOffset(res, false);
	            return res;
	        } else {
	            return moment(input).local();
	        }
	    }
	
	    /************************************
	        Locale
	    ************************************/
	
	    extend(Locale.prototype, {
	
	        set: function set(config) {
	            var prop, i;
	            for (i in config) {
	                prop = config[i];
	                if (typeof prop === "function") {
	                    this[i] = prop;
	                } else {
	                    this["_" + i] = prop;
	                }
	            }
	            // Lenient ordinal parsing accepts just a number in addition to
	            // number + (possibly) stuff coming from _ordinalParseLenient.
	            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
	        },
	
	        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
	        months: function months(m) {
	            return this._months[m.month()];
	        },
	
	        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
	        monthsShort: function monthsShort(m) {
	            return this._monthsShort[m.month()];
	        },
	
	        monthsParse: function monthsParse(monthName, format, strict) {
	            var i, mom, regex;
	
	            if (!this._monthsParse) {
	                this._monthsParse = [];
	                this._longMonthsParse = [];
	                this._shortMonthsParse = [];
	            }
	
	            for (i = 0; i < 12; i++) {
	                // make the regex if we don't have it already
	                mom = moment.utc([2000, i]);
	                if (strict && !this._longMonthsParse[i]) {
	                    this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i");
	                    this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i");
	                }
	                if (!strict && !this._monthsParse[i]) {
	                    regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, "");
	                    this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i");
	                }
	                // test the regex
	                if (strict && format === "MMMM" && this._longMonthsParse[i].test(monthName)) {
	                    return i;
	                } else if (strict && format === "MMM" && this._shortMonthsParse[i].test(monthName)) {
	                    return i;
	                } else if (!strict && this._monthsParse[i].test(monthName)) {
	                    return i;
	                }
	            }
	        },
	
	        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
	        weekdays: function weekdays(m) {
	            return this._weekdays[m.day()];
	        },
	
	        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
	        weekdaysShort: function weekdaysShort(m) {
	            return this._weekdaysShort[m.day()];
	        },
	
	        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
	        weekdaysMin: function weekdaysMin(m) {
	            return this._weekdaysMin[m.day()];
	        },
	
	        weekdaysParse: function weekdaysParse(weekdayName) {
	            var i, mom, regex;
	
	            if (!this._weekdaysParse) {
	                this._weekdaysParse = [];
	            }
	
	            for (i = 0; i < 7; i++) {
	                // make the regex if we don't have it already
	                if (!this._weekdaysParse[i]) {
	                    mom = moment([2000, 1]).day(i);
	                    regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, "");
	                    this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i");
	                }
	                // test the regex
	                if (this._weekdaysParse[i].test(weekdayName)) {
	                    return i;
	                }
	            }
	        },
	
	        _longDateFormat: {
	            LTS: "h:mm:ss A",
	            LT: "h:mm A",
	            L: "MM/DD/YYYY",
	            LL: "MMMM D, YYYY",
	            LLL: "MMMM D, YYYY LT",
	            LLLL: "dddd, MMMM D, YYYY LT"
	        },
	        longDateFormat: function longDateFormat(key) {
	            var output = this._longDateFormat[key];
	            if (!output && this._longDateFormat[key.toUpperCase()]) {
	                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
	                    return val.slice(1);
	                });
	                this._longDateFormat[key] = output;
	            }
	            return output;
	        },
	
	        isPM: function isPM(input) {
	            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	            // Using charAt should be more compatible.
	            return (input + "").toLowerCase().charAt(0) === "p";
	        },
	
	        _meridiemParse: /[ap]\.?m?\.?/i,
	        meridiem: function meridiem(hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? "pm" : "PM";
	            } else {
	                return isLower ? "am" : "AM";
	            }
	        },
	
	        _calendar: {
	            sameDay: "[Today at] LT",
	            nextDay: "[Tomorrow at] LT",
	            nextWeek: "dddd [at] LT",
	            lastDay: "[Yesterday at] LT",
	            lastWeek: "[Last] dddd [at] LT",
	            sameElse: "L"
	        },
	        calendar: function calendar(key, mom, now) {
	            var output = this._calendar[key];
	            return typeof output === "function" ? output.apply(mom, [now]) : output;
	        },
	
	        _relativeTime: {
	            future: "in %s",
	            past: "%s ago",
	            s: "a few seconds",
	            m: "a minute",
	            mm: "%d minutes",
	            h: "an hour",
	            hh: "%d hours",
	            d: "a day",
	            dd: "%d days",
	            M: "a month",
	            MM: "%d months",
	            y: "a year",
	            yy: "%d years"
	        },
	
	        relativeTime: function relativeTime(number, withoutSuffix, string, isFuture) {
	            var output = this._relativeTime[string];
	            return typeof output === "function" ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
	        },
	
	        pastFuture: function pastFuture(diff, output) {
	            var format = this._relativeTime[diff > 0 ? "future" : "past"];
	            return typeof format === "function" ? format(output) : format.replace(/%s/i, output);
	        },
	
	        ordinal: function ordinal(number) {
	            return this._ordinal.replace("%d", number);
	        },
	        _ordinal: "%d",
	        _ordinalParse: /\d{1,2}/,
	
	        preparse: function preparse(string) {
	            return string;
	        },
	
	        postformat: function postformat(string) {
	            return string;
	        },
	
	        week: function week(mom) {
	            return weekOfYear(mom, this._week.dow, this._week.doy).week;
	        },
	
	        _week: {
	            dow: 0, // Sunday is the first day of the week.
	            doy: 6 // The week that contains Jan 1st is the first week of the year.
	        },
	
	        _invalidDate: "Invalid date",
	        invalidDate: function invalidDate() {
	            return this._invalidDate;
	        }
	    });
	
	    /************************************
	        Formatting
	    ************************************/
	
	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, "");
	        }
	        return input.replace(/\\/g, "");
	    }
	
	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens),
	            i,
	            length;
	
	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }
	
	        return function (mom) {
	            var output = "";
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }
	
	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }
	
	        format = expandFormat(format, m.localeData());
	
	        if (!formatFunctions[format]) {
	            formatFunctions[format] = makeFormatFunction(format);
	        }
	
	        return formatFunctions[format](m);
	    }
	
	    function expandFormat(format, locale) {
	        var i = 5;
	
	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }
	
	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }
	
	        return format;
	    }
	
	    /************************************
	        Parsing
	    ************************************/
	
	    // get the regex to find the next token
	    function getParseRegexForToken(token, config) {
	        var a,
	            strict = config._strict;
	        switch (token) {
	            case "Q":
	                return parseTokenOneDigit;
	            case "DDDD":
	                return parseTokenThreeDigits;
	            case "YYYY":
	            case "GGGG":
	            case "gggg":
	                return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
	            case "Y":
	            case "G":
	            case "g":
	                return parseTokenSignedNumber;
	            case "YYYYYY":
	            case "YYYYY":
	            case "GGGGG":
	            case "ggggg":
	                return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
	            case "S":
	                if (strict) {
	                    return parseTokenOneDigit;
	                }
	            /* falls through */
	            case "SS":
	                if (strict) {
	                    return parseTokenTwoDigits;
	                }
	            /* falls through */
	            case "SSS":
	                if (strict) {
	                    return parseTokenThreeDigits;
	                }
	            /* falls through */
	            case "DDD":
	                return parseTokenOneToThreeDigits;
	            case "MMM":
	            case "MMMM":
	            case "dd":
	            case "ddd":
	            case "dddd":
	                return parseTokenWord;
	            case "a":
	            case "A":
	                return config._locale._meridiemParse;
	            case "x":
	                return parseTokenOffsetMs;
	            case "X":
	                return parseTokenTimestampMs;
	            case "Z":
	            case "ZZ":
	                return parseTokenTimezone;
	            case "T":
	                return parseTokenT;
	            case "SSSS":
	                return parseTokenDigits;
	            case "MM":
	            case "DD":
	            case "YY":
	            case "GG":
	            case "gg":
	            case "HH":
	            case "hh":
	            case "mm":
	            case "ss":
	            case "ww":
	            case "WW":
	                return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
	            case "M":
	            case "D":
	            case "d":
	            case "H":
	            case "h":
	            case "m":
	            case "s":
	            case "w":
	            case "W":
	            case "e":
	            case "E":
	                return parseTokenOneOrTwoDigits;
	            case "Do":
	                return strict ? config._locale._ordinalParse : config._locale._ordinalParseLenient;
	            default:
	                a = new RegExp(regexpEscape(unescapeFormat(token.replace("\\", "")), "i"));
	                return a;
	        }
	    }
	
	    function timezoneMinutesFromString(string) {
	        string = string || "";
	        var possibleTzMatches = string.match(parseTokenTimezone) || [],
	            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
	            parts = (tzChunk + "").match(parseTimezoneChunker) || ["-", 0, 0],
	            minutes = +(parts[1] * 60) + toInt(parts[2]);
	
	        return parts[0] === "+" ? -minutes : minutes;
	    }
	
	    // function to convert string input to date
	    function addTimeToArrayFromToken(token, input, config) {
	        var a,
	            datePartArray = config._a;
	
	        switch (token) {
	            // QUARTER
	            case "Q":
	                if (input != null) {
	                    datePartArray[MONTH] = (toInt(input) - 1) * 3;
	                }
	                break;
	            // MONTH
	            case "M": // fall through to MM
	            case "MM":
	                if (input != null) {
	                    datePartArray[MONTH] = toInt(input) - 1;
	                }
	                break;
	            case "MMM": // fall through to MMMM
	            case "MMMM":
	                a = config._locale.monthsParse(input, token, config._strict);
	                // if we didn't find a month name, mark the date as invalid.
	                if (a != null) {
	                    datePartArray[MONTH] = a;
	                } else {
	                    config._pf.invalidMonth = input;
	                }
	                break;
	            // DAY OF MONTH
	            case "D": // fall through to DD
	            case "DD":
	                if (input != null) {
	                    datePartArray[DATE] = toInt(input);
	                }
	                break;
	            case "Do":
	                if (input != null) {
	                    datePartArray[DATE] = toInt(parseInt(input.match(/\d{1,2}/)[0], 10));
	                }
	                break;
	            // DAY OF YEAR
	            case "DDD": // fall through to DDDD
	            case "DDDD":
	                if (input != null) {
	                    config._dayOfYear = toInt(input);
	                }
	
	                break;
	            // YEAR
	            case "YY":
	                datePartArray[YEAR] = moment.parseTwoDigitYear(input);
	                break;
	            case "YYYY":
	            case "YYYYY":
	            case "YYYYYY":
	                datePartArray[YEAR] = toInt(input);
	                break;
	            // AM / PM
	            case "a": // fall through to A
	            case "A":
	                config._isPm = config._locale.isPM(input);
	                break;
	            // HOUR
	            case "h": // fall through to hh
	            case "hh":
	                config._pf.bigHour = true;
	            /* falls through */
	            case "H": // fall through to HH
	            case "HH":
	                datePartArray[HOUR] = toInt(input);
	                break;
	            // MINUTE
	            case "m": // fall through to mm
	            case "mm":
	                datePartArray[MINUTE] = toInt(input);
	                break;
	            // SECOND
	            case "s": // fall through to ss
	            case "ss":
	                datePartArray[SECOND] = toInt(input);
	                break;
	            // MILLISECOND
	            case "S":
	            case "SS":
	            case "SSS":
	            case "SSSS":
	                datePartArray[MILLISECOND] = toInt(("0." + input) * 1000);
	                break;
	            // UNIX OFFSET (MILLISECONDS)
	            case "x":
	                config._d = new Date(toInt(input));
	                break;
	            // UNIX TIMESTAMP WITH MS
	            case "X":
	                config._d = new Date(parseFloat(input) * 1000);
	                break;
	            // TIMEZONE
	            case "Z": // fall through to ZZ
	            case "ZZ":
	                config._useUTC = true;
	                config._tzm = timezoneMinutesFromString(input);
	                break;
	            // WEEKDAY - human
	            case "dd":
	            case "ddd":
	            case "dddd":
	                a = config._locale.weekdaysParse(input);
	                // if we didn't get a weekday name, mark the date as invalid
	                if (a != null) {
	                    config._w = config._w || {};
	                    config._w.d = a;
	                } else {
	                    config._pf.invalidWeekday = input;
	                }
	                break;
	            // WEEK, WEEK DAY - numeric
	            case "w":
	            case "ww":
	            case "W":
	            case "WW":
	            case "d":
	            case "e":
	            case "E":
	                token = token.substr(0, 1);
	            /* falls through */
	            case "gggg":
	            case "GGGG":
	            case "GGGGG":
	                token = token.substr(0, 2);
	                if (input) {
	                    config._w = config._w || {};
	                    config._w[token] = toInt(input);
	                }
	                break;
	            case "gg":
	            case "GG":
	                config._w = config._w || {};
	                config._w[token] = moment.parseTwoDigitYear(input);
	        }
	    }
	
	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp;
	
	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;
	
	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
	            week = dfl(w.W, 1);
	            weekday = dfl(w.E, 1);
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;
	
	            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
	            week = dfl(w.w, 1);
	
	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < dow) {
	                    ++week;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);
	
	        config._a[YEAR] = temp.year;
	        config._dayOfYear = temp.dayOfYear;
	    }
	
	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function dateFromConfig(config) {
	        var i,
	            date,
	            input = [],
	            currentDate,
	            yearToUse;
	
	        if (config._d) {
	            return;
	        }
	
	        currentDate = currentDateArray(config);
	
	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }
	
	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);
	
	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                config._pf._overflowDayOfYear = true;
	            }
	
	            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }
	
	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }
	
	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
	        }
	
	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }
	
	        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
	        // Apply timezone offset from input. The actual zone can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
	        }
	
	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }
	
	    function dateFromObject(config) {
	        var normalizedInput;
	
	        if (config._d) {
	            return;
	        }
	
	        normalizedInput = normalizeObjectUnits(config._i);
	        config._a = [normalizedInput.year, normalizedInput.month, normalizedInput.day || normalizedInput.date, normalizedInput.hour, normalizedInput.minute, normalizedInput.second, normalizedInput.millisecond];
	
	        dateFromConfig(config);
	    }
	
	    function currentDateArray(config) {
	        var now = new Date();
	        if (config._useUTC) {
	            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
	        } else {
	            return [now.getFullYear(), now.getMonth(), now.getDate()];
	        }
	    }
	
	    // date from string and format string
	    function makeDateFromStringAndFormat(config) {
	        if (config._f === moment.ISO_8601) {
	            parseISO(config);
	            return;
	        }
	
	        config._a = [];
	        config._pf.empty = true;
	
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = "" + config._i,
	            i,
	            parsedInput,
	            tokens,
	            token,
	            skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;
	
	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    config._pf.unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    config._pf.empty = false;
	                } else {
	                    config._pf.unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            } else if (config._strict && !parsedInput) {
	                config._pf.unusedTokens.push(token);
	            }
	        }
	
	        // add remaining unparsed input length to the string
	        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            config._pf.unusedInput.push(string);
	        }
	
	        // clear _12h flag if hour is <= 12
	        if (config._pf.bigHour === true && config._a[HOUR] <= 12) {
	            config._pf.bigHour = undefined;
	        }
	        // handle am pm
	        if (config._isPm && config._a[HOUR] < 12) {
	            config._a[HOUR] += 12;
	        }
	        // if is 12 am, change hours to 0
	        if (config._isPm === false && config._a[HOUR] === 12) {
	            config._a[HOUR] = 0;
	        }
	        dateFromConfig(config);
	        checkOverflow(config);
	    }
	
	    function unescapeFormat(s) {
	        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        });
	    }
	
	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function regexpEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	    }
	
	    // date from string and array of format strings
	    function makeDateFromStringAndArray(config) {
	        var tempConfig, bestMoment, scoreToBeat, i, currentScore;
	
	        if (config._f.length === 0) {
	            config._pf.invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }
	
	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._pf = defaultParsingFlags();
	            tempConfig._f = config._f[i];
	            makeDateFromStringAndFormat(tempConfig);
	
	            if (!isValid(tempConfig)) {
	                continue;
	            }
	
	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += tempConfig._pf.charsLeftOver;
	
	            //or tokens
	            currentScore += tempConfig._pf.unusedTokens.length * 10;
	
	            tempConfig._pf.score = currentScore;
	
	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }
	
	        extend(config, bestMoment || tempConfig);
	    }
	
	    // date from iso format
	    function parseISO(config) {
	        var i,
	            l,
	            string = config._i,
	            match = isoRegex.exec(string);
	
	        if (match) {
	            config._pf.iso = true;
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(string)) {
	                    // match[5] should be 'T' or undefined
	                    config._f = isoDates[i][0] + (match[6] || " ");
	                    break;
	                }
	            }
	            for (i = 0, l = isoTimes.length; i < l; i++) {
	                if (isoTimes[i][1].exec(string)) {
	                    config._f += isoTimes[i][0];
	                    break;
	                }
	            }
	            if (string.match(parseTokenTimezone)) {
	                config._f += "Z";
	            }
	            makeDateFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }
	
	    // date from iso format or fallback
	    function makeDateFromString(config) {
	        parseISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            moment.createFromInputFallback(config);
	        }
	    }
	
	    function map(arr, fn) {
	        var res = [],
	            i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }
	
	    function makeDateFromInput(config) {
	        var input = config._i,
	            matched;
	        if (input === undefined) {
	            config._d = new Date();
	        } else if (isDate(input)) {
	            config._d = new Date(+input);
	        } else if ((matched = aspNetJsonRegex.exec(input)) !== null) {
	            config._d = new Date(+matched[1]);
	        } else if (typeof input === "string") {
	            makeDateFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            dateFromConfig(config);
	        } else if (typeof input === "object") {
	            dateFromObject(config);
	        } else if (typeof input === "number") {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            moment.createFromInputFallback(config);
	        }
	    }
	
	    function makeDate(y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);
	
	        //the date constructor doesn't accept years < 1970
	        if (y < 1970) {
	            date.setFullYear(y);
	        }
	        return date;
	    }
	
	    function makeUTCDate(y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	        if (y < 1970) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }
	
	    function parseWeekday(input, locale) {
	        if (typeof input === "string") {
	            if (!isNaN(input)) {
	                input = parseInt(input, 10);
	            } else {
	                input = locale.weekdaysParse(input);
	                if (typeof input !== "number") {
	                    return null;
	                }
	            }
	        }
	        return input;
	    }
	
	    /************************************
	        Relative Time
	    ************************************/
	
	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	
	    function relativeTime(posNegDuration, withoutSuffix, locale) {
	        var duration = moment.duration(posNegDuration).abs(),
	            seconds = round(duration.as("s")),
	            minutes = round(duration.as("m")),
	            hours = round(duration.as("h")),
	            days = round(duration.as("d")),
	            months = round(duration.as("M")),
	            years = round(duration.as("y")),
	            args = seconds < relativeTimeThresholds.s && ["s", seconds] || minutes === 1 && ["m"] || minutes < relativeTimeThresholds.m && ["mm", minutes] || hours === 1 && ["h"] || hours < relativeTimeThresholds.h && ["hh", hours] || days === 1 && ["d"] || days < relativeTimeThresholds.d && ["dd", days] || months === 1 && ["M"] || months < relativeTimeThresholds.M && ["MM", months] || years === 1 && ["y"] || ["yy", years];
	
	        args[2] = withoutSuffix;
	        args[3] = +posNegDuration > 0;
	        args[4] = locale;
	        return substituteTimeAgo.apply({}, args);
	    }
	
	    /************************************
	        Week of Year
	    ************************************/
	
	    // firstDayOfWeek       0 = sun, 6 = sat
	    //                      the day of the week that starts the week
	    //                      (usually sunday or monday)
	    // firstDayOfWeekOfYear 0 = sun, 6 = sat
	    //                      the first week is the week that contains the first
	    //                      of this day of the week
	    //                      (eg. ISO weeks use thursday (4))
	    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
	        var end = firstDayOfWeekOfYear - firstDayOfWeek,
	            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
	            adjustedMoment;
	
	        if (daysToDayOfWeek > end) {
	            daysToDayOfWeek -= 7;
	        }
	
	        if (daysToDayOfWeek < end - 7) {
	            daysToDayOfWeek += 7;
	        }
	
	        adjustedMoment = moment(mom).add(daysToDayOfWeek, "d");
	        return {
	            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
	            year: adjustedMoment.year()
	        };
	    }
	
	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
	        var d = makeUTCDate(year, 0, 1).getUTCDay(),
	            daysToAdd,
	            dayOfYear;
	
	        d = d === 0 ? 7 : d;
	        weekday = weekday != null ? weekday : firstDayOfWeek;
	        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
	        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;
	
	        return {
	            year: dayOfYear > 0 ? year : year - 1,
	            dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
	        };
	    }
	
	    /************************************
	        Top Level Functions
	    ************************************/
	
	    function makeMoment(config) {
	        var input = config._i,
	            format = config._f,
	            res;
	
	        config._locale = config._locale || moment.localeData(config._l);
	
	        if (input === null || format === undefined && input === "") {
	            return moment.invalid({ nullInput: true });
	        }
	
	        if (typeof input === "string") {
	            config._i = input = config._locale.preparse(input);
	        }
	
	        if (moment.isMoment(input)) {
	            return new Moment(input, true);
	        } else if (format) {
	            if (isArray(format)) {
	                makeDateFromStringAndArray(config);
	            } else {
	                makeDateFromStringAndFormat(config);
	            }
	        } else {
	            makeDateFromInput(config);
	        }
	
	        res = new Moment(config);
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, "d");
	            res._nextDay = undefined;
	        }
	
	        return res;
	    }
	
	    moment = function (input, format, locale, strict) {
	        var c;
	
	        if (typeof locale === "boolean") {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c = {};
	        c._isAMomentObject = true;
	        c._i = input;
	        c._f = format;
	        c._l = locale;
	        c._strict = strict;
	        c._isUTC = false;
	        c._pf = defaultParsingFlags();
	
	        return makeMoment(c);
	    };
	
	    moment.suppressDeprecationWarnings = false;
	
	    moment.createFromInputFallback = deprecate("moment construction falls back to js Date. This is " + "discouraged and will be removed in upcoming major " + "release. Please refer to " + "https://github.com/moment/moment/issues/1407 for more info.", function (config) {
	        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""));
	    });
	
	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return moment();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }
	
	    moment.min = function () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy("isBefore", args);
	    };
	
	    moment.max = function () {
	        var args = [].slice.call(arguments, 0);
	
	        return pickBy("isAfter", args);
	    };
	
	    // creating with utc
	    moment.utc = function (input, format, locale, strict) {
	        var c;
	
	        if (typeof locale === "boolean") {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c = {};
	        c._isAMomentObject = true;
	        c._useUTC = true;
	        c._isUTC = true;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	        c._pf = defaultParsingFlags();
	
	        return makeMoment(c).utc();
	    };
	
	    // creating with unix timestamp (in seconds)
	    moment.unix = function (input) {
	        return moment(input * 1000);
	    };
	
	    // duration
	    moment.duration = function (input, key) {
	        var duration = input,
	
	        // matching against regexp is expensive, do it on demand
	        match = null,
	            sign,
	            ret,
	            parseIso,
	            diffRes;
	
	        if (moment.isDuration(input)) {
	            duration = {
	                ms: input._milliseconds,
	                d: input._days,
	                M: input._months
	            };
	        } else if (typeof input === "number") {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
	            sign = match[1] === "-" ? -1 : 1;
	            duration = {
	                y: 0,
	                d: toInt(match[DATE]) * sign,
	                h: toInt(match[HOUR]) * sign,
	                m: toInt(match[MINUTE]) * sign,
	                s: toInt(match[SECOND]) * sign,
	                ms: toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = isoDurationRegex.exec(input))) {
	            sign = match[1] === "-" ? -1 : 1;
	            parseIso = function (inp) {
	                // We'd normally use ~~inp for this, but unfortunately it also
	                // converts floats to ints.
	                // inp may be undefined, so careful calling replace on it.
	                var res = inp && parseFloat(inp.replace(",", "."));
	                // apply sign while we're at it
	                return (isNaN(res) ? 0 : res) * sign;
	            };
	            duration = {
	                y: parseIso(match[2]),
	                M: parseIso(match[3]),
	                d: parseIso(match[4]),
	                h: parseIso(match[5]),
	                m: parseIso(match[6]),
	                s: parseIso(match[7]),
	                w: parseIso(match[8])
	            };
	        } else if (typeof duration === "object" && ("from" in duration || "to" in duration)) {
	            diffRes = momentsDifference(moment(duration.from), moment(duration.to));
	
	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }
	
	        ret = new Duration(duration);
	
	        if (moment.isDuration(input) && hasOwnProp(input, "_locale")) {
	            ret._locale = input._locale;
	        }
	
	        return ret;
	    };
	
	    // version number
	    moment.version = VERSION;
	
	    // default format
	    moment.defaultFormat = isoFormat;
	
	    // constant that refers to the ISO standard
	    moment.ISO_8601 = function () {};
	
	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    moment.momentProperties = momentProperties;
	
	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    moment.updateOffset = function () {};
	
	    // This function allows you to set a threshold for relative time strings
	    moment.relativeTimeThreshold = function (threshold, limit) {
	        if (relativeTimeThresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return relativeTimeThresholds[threshold];
	        }
	        relativeTimeThresholds[threshold] = limit;
	        return true;
	    };
	
	    moment.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", function (key, value) {
	        return moment.locale(key, value);
	    });
	
	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    moment.locale = function (key, values) {
	        var data;
	        if (key) {
	            if (typeof values !== "undefined") {
	                data = moment.defineLocale(key, values);
	            } else {
	                data = moment.localeData(key);
	            }
	
	            if (data) {
	                moment.duration._locale = moment._locale = data;
	            }
	        }
	
	        return moment._locale._abbr;
	    };
	
	    moment.defineLocale = function (name, values) {
	        if (values !== null) {
	            values.abbr = name;
	            if (!locales[name]) {
	                locales[name] = new Locale();
	            }
	            locales[name].set(values);
	
	            // backwards compat for now: also set the locale
	            moment.locale(name);
	
	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    };
	
	    moment.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", function (key) {
	        return moment.localeData(key);
	    });
	
	    // returns locale data
	    moment.localeData = function (key) {
	        var locale;
	
	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }
	
	        if (!key) {
	            return moment._locale;
	        }
	
	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }
	
	        return chooseLocale(key);
	    };
	
	    // compare moment object
	    moment.isMoment = function (obj) {
	        return obj instanceof Moment || obj != null && hasOwnProp(obj, "_isAMomentObject");
	    };
	
	    // for typechecking Duration objects
	    moment.isDuration = function (obj) {
	        return obj instanceof Duration;
	    };
	
	    for (i = lists.length - 1; i >= 0; --i) {
	        makeList(lists[i]);
	    }
	
	    moment.normalizeUnits = function (units) {
	        return normalizeUnits(units);
	    };
	
	    moment.invalid = function (flags) {
	        var m = moment.utc(NaN);
	        if (flags != null) {
	            extend(m._pf, flags);
	        } else {
	            m._pf.userInvalidated = true;
	        }
	
	        return m;
	    };
	
	    moment.parseZone = function () {
	        return moment.apply(null, arguments).parseZone();
	    };
	
	    moment.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	
	    /************************************
	        Moment Prototype
	    ************************************/
	
	    extend(moment.fn = Moment.prototype, {
	
	        clone: function clone() {
	            return moment(this);
	        },
	
	        valueOf: function valueOf() {
	            return +this._d + (this._offset || 0) * 60000;
	        },
	
	        unix: function unix() {
	            return Math.floor(+this / 1000);
	        },
	
	        toString: function toString() {
	            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
	        },
	
	        toDate: function toDate() {
	            return this._offset ? new Date(+this) : this._d;
	        },
	
	        toISOString: function toISOString() {
	            var m = moment(this).utc();
	            if (0 < m.year() && m.year() <= 9999) {
	                if ("function" === typeof Date.prototype.toISOString) {
	                    // native implementation is ~50x faster, use it when we can
	                    return this.toDate().toISOString();
	                } else {
	                    return formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
	                }
	            } else {
	                return formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
	            }
	        },
	
	        toArray: function toArray() {
	            var m = this;
	            return [m.year(), m.month(), m.date(), m.hours(), m.minutes(), m.seconds(), m.milliseconds()];
	        },
	
	        isValid: (function (_isValid) {
	            var _isValidWrapper = function isValid() {
	                return _isValid.apply(this, arguments);
	            };
	
	            _isValidWrapper.toString = function () {
	                return _isValid.toString();
	            };
	
	            return _isValidWrapper;
	        })(function () {
	            return isValid(this);
	        }),
	
	        isDSTShifted: function isDSTShifted() {
	            if (this._a) {
	                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
	            }
	
	            return false;
	        },
	
	        parsingFlags: function parsingFlags() {
	            return extend({}, this._pf);
	        },
	
	        invalidAt: function invalidAt() {
	            return this._pf.overflow;
	        },
	
	        utc: function utc(keepLocalTime) {
	            return this.zone(0, keepLocalTime);
	        },
	
	        local: function local(keepLocalTime) {
	            if (this._isUTC) {
	                this.zone(0, keepLocalTime);
	                this._isUTC = false;
	
	                if (keepLocalTime) {
	                    this.add(this._dateTzOffset(), "m");
	                }
	            }
	            return this;
	        },
	
	        format: function format(inputString) {
	            var output = formatMoment(this, inputString || moment.defaultFormat);
	            return this.localeData().postformat(output);
	        },
	
	        add: createAdder(1, "add"),
	
	        subtract: createAdder(-1, "subtract"),
	
	        diff: (function (_diff) {
	            var _diffWrapper = function diff(_x, _x2, _x3) {
	                return _diff.apply(this, arguments);
	            };
	
	            _diffWrapper.toString = function () {
	                return _diff.toString();
	            };
	
	            return _diffWrapper;
	        })(function (input, units, asFloat) {
	            var that = makeAs(input, this),
	                zoneDiff = (this.zone() - that.zone()) * 60000,
	                diff,
	                output,
	                daysAdjust;
	
	            units = normalizeUnits(units);
	
	            if (units === "year" || units === "month") {
	                // average number of days in the months in the given dates
	                diff = (this.daysInMonth() + that.daysInMonth()) * 43200000; // 24 * 60 * 60 * 1000 / 2
	                // difference in months
	                output = (this.year() - that.year()) * 12 + (this.month() - that.month());
	                // adjust by taking difference in days, average number of days
	                // and dst in the given months.
	                daysAdjust = this - moment(this).startOf("month") - (that - moment(that).startOf("month"));
	                // same as above but with zones, to negate all dst
	                daysAdjust -= (this.zone() - moment(this).startOf("month").zone() - (that.zone() - moment(that).startOf("month").zone())) * 60000;
	                output += daysAdjust / diff;
	                if (units === "year") {
	                    output = output / 12;
	                }
	            } else {
	                diff = this - that;
	                output = units === "second" ? diff / 1000 : // 1000
	                units === "minute" ? diff / 60000 : // 1000 * 60
	                units === "hour" ? diff / 3600000 : // 1000 * 60 * 60
	                units === "day" ? (diff - zoneDiff) / 86400000 : // 1000 * 60 * 60 * 24, negate dst
	                units === "week" ? (diff - zoneDiff) / 604800000 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                diff;
	            }
	            return asFloat ? output : absRound(output);
	        }),
	
	        from: function from(time, withoutSuffix) {
	            return moment.duration({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
	        },
	
	        fromNow: function fromNow(withoutSuffix) {
	            return this.from(moment(), withoutSuffix);
	        },
	
	        calendar: function calendar(time) {
	            // We want to compare the start of today, vs this.
	            // Getting start-of-today depends on whether we're zone'd or not.
	            var now = time || moment(),
	                sod = makeAs(now, this).startOf("day"),
	                diff = this.diff(sod, "days", true),
	                format = diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
	            return this.format(this.localeData().calendar(format, this, moment(now)));
	        },
	
	        isLeapYear: (function (_isLeapYear) {
	            var _isLeapYearWrapper = function isLeapYear() {
	                return _isLeapYear.apply(this, arguments);
	            };
	
	            _isLeapYearWrapper.toString = function () {
	                return _isLeapYear.toString();
	            };
	
	            return _isLeapYearWrapper;
	        })(function () {
	            return isLeapYear(this.year());
	        }),
	
	        isDST: function isDST() {
	            return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone();
	        },
	
	        day: (function (_day) {
	            var _dayWrapper = function day(_x) {
	                return _day.apply(this, arguments);
	            };
	
	            _dayWrapper.toString = function () {
	                return _day.toString();
	            };
	
	            return _dayWrapper;
	        })(function (input) {
	            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	            if (input != null) {
	                input = parseWeekday(input, this.localeData());
	                return this.add(input - day, "d");
	            } else {
	                return day;
	            }
	        }),
	
	        month: makeAccessor("Month", true),
	
	        startOf: function startOf(units) {
	            units = normalizeUnits(units);
	            // the following switch intentionally omits break keywords
	            // to utilize falling through the cases.
	            switch (units) {
	                case "year":
	                    this.month(0);
	                /* falls through */
	                case "quarter":
	                case "month":
	                    this.date(1);
	                /* falls through */
	                case "week":
	                case "isoWeek":
	                case "day":
	                    this.hours(0);
	                /* falls through */
	                case "hour":
	                    this.minutes(0);
	                /* falls through */
	                case "minute":
	                    this.seconds(0);
	                /* falls through */
	                case "second":
	                    this.milliseconds(0);
	                    /* falls through */
	            }
	
	            // weeks are a special case
	            if (units === "week") {
	                this.weekday(0);
	            } else if (units === "isoWeek") {
	                this.isoWeekday(1);
	            }
	
	            // quarters are also special
	            if (units === "quarter") {
	                this.month(Math.floor(this.month() / 3) * 3);
	            }
	
	            return this;
	        },
	
	        endOf: function endOf(units) {
	            units = normalizeUnits(units);
	            if (units === undefined || units === "millisecond") {
	                return this;
	            }
	            return this.startOf(units).add(1, units === "isoWeek" ? "week" : units).subtract(1, "ms");
	        },
	
	        isAfter: function isAfter(input, units) {
	            var inputMs;
	            units = normalizeUnits(typeof units !== "undefined" ? units : "millisecond");
	            if (units === "millisecond") {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this > +input;
	            } else {
	                inputMs = moment.isMoment(input) ? +input : +moment(input);
	                return inputMs < +this.clone().startOf(units);
	            }
	        },
	
	        isBefore: function isBefore(input, units) {
	            var inputMs;
	            units = normalizeUnits(typeof units !== "undefined" ? units : "millisecond");
	            if (units === "millisecond") {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this < +input;
	            } else {
	                inputMs = moment.isMoment(input) ? +input : +moment(input);
	                return +this.clone().endOf(units) < inputMs;
	            }
	        },
	
	        isSame: function isSame(input, units) {
	            var inputMs;
	            units = normalizeUnits(units || "millisecond");
	            if (units === "millisecond") {
	                input = moment.isMoment(input) ? input : moment(input);
	                return +this === +input;
	            } else {
	                inputMs = +moment(input);
	                return +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units);
	            }
	        },
	
	        min: deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (other) {
	            other = moment.apply(null, arguments);
	            return other < this ? this : other;
	        }),
	
	        max: deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (other) {
	            other = moment.apply(null, arguments);
	            return other > this ? this : other;
	        }),
	
	        // keepLocalTime = true means only change the timezone, without
	        // affecting the local hour. So 5:31:26 +0300 --[zone(2, true)]-->
	        // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist int zone
	        // +0200, so we adjust the time as needed, to be valid.
	        //
	        // Keeping the time actually adds/subtracts (one hour)
	        // from the actual represented time. That is why we call updateOffset
	        // a second time. In case it wants us to change the offset again
	        // _changeInProgress == true case, then we have to adjust, because
	        // there is no such time in the given timezone.
	        zone: function zone(input, keepLocalTime) {
	            var offset = this._offset || 0,
	                localAdjust;
	            if (input != null) {
	                if (typeof input === "string") {
	                    input = timezoneMinutesFromString(input);
	                }
	                if (Math.abs(input) < 16) {
	                    input = input * 60;
	                }
	                if (!this._isUTC && keepLocalTime) {
	                    localAdjust = this._dateTzOffset();
	                }
	                this._offset = input;
	                this._isUTC = true;
	                if (localAdjust != null) {
	                    this.subtract(localAdjust, "m");
	                }
	                if (offset !== input) {
	                    if (!keepLocalTime || this._changeInProgress) {
	                        addOrSubtractDurationFromMoment(this, moment.duration(offset - input, "m"), 1, false);
	                    } else if (!this._changeInProgress) {
	                        this._changeInProgress = true;
	                        moment.updateOffset(this, true);
	                        this._changeInProgress = null;
	                    }
	                }
	            } else {
	                return this._isUTC ? offset : this._dateTzOffset();
	            }
	            return this;
	        },
	
	        zoneAbbr: function zoneAbbr() {
	            return this._isUTC ? "UTC" : "";
	        },
	
	        zoneName: function zoneName() {
	            return this._isUTC ? "Coordinated Universal Time" : "";
	        },
	
	        parseZone: function parseZone() {
	            if (this._tzm) {
	                this.zone(this._tzm);
	            } else if (typeof this._i === "string") {
	                this.zone(this._i);
	            }
	            return this;
	        },
	
	        hasAlignedHourOffset: function hasAlignedHourOffset(input) {
	            if (!input) {
	                input = 0;
	            } else {
	                input = moment(input).zone();
	            }
	
	            return (this.zone() - input) % 60 === 0;
	        },
	
	        daysInMonth: (function (_daysInMonth) {
	            var _daysInMonthWrapper = function daysInMonth() {
	                return _daysInMonth.apply(this, arguments);
	            };
	
	            _daysInMonthWrapper.toString = function () {
	                return _daysInMonth.toString();
	            };
	
	            return _daysInMonthWrapper;
	        })(function () {
	            return daysInMonth(this.year(), this.month());
	        }),
	
	        dayOfYear: (function (_dayOfYear) {
	            var _dayOfYearWrapper = function dayOfYear(_x) {
	                return _dayOfYear.apply(this, arguments);
	            };
	
	            _dayOfYearWrapper.toString = function () {
	                return _dayOfYear.toString();
	            };
	
	            return _dayOfYearWrapper;
	        })(function (input) {
	            var dayOfYear = round((moment(this).startOf("day") - moment(this).startOf("year")) / 86400000) + 1;
	            return input == null ? dayOfYear : this.add(input - dayOfYear, "d");
	        }),
	
	        quarter: function quarter(input) {
	            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	        },
	
	        weekYear: function weekYear(input) {
	            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
	            return input == null ? year : this.add(input - year, "y");
	        },
	
	        isoWeekYear: function isoWeekYear(input) {
	            var year = weekOfYear(this, 1, 4).year;
	            return input == null ? year : this.add(input - year, "y");
	        },
	
	        week: (function (_week) {
	            var _weekWrapper = function week(_x) {
	                return _week.apply(this, arguments);
	            };
	
	            _weekWrapper.toString = function () {
	                return _week.toString();
	            };
	
	            return _weekWrapper;
	        })(function (input) {
	            var week = this.localeData().week(this);
	            return input == null ? week : this.add((input - week) * 7, "d");
	        }),
	
	        isoWeek: function isoWeek(input) {
	            var week = weekOfYear(this, 1, 4).week;
	            return input == null ? week : this.add((input - week) * 7, "d");
	        },
	
	        weekday: (function (_weekday) {
	            var _weekdayWrapper = function weekday(_x) {
	                return _weekday.apply(this, arguments);
	            };
	
	            _weekdayWrapper.toString = function () {
	                return _weekday.toString();
	            };
	
	            return _weekdayWrapper;
	        })(function (input) {
	            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	            return input == null ? weekday : this.add(input - weekday, "d");
	        }),
	
	        isoWeekday: function isoWeekday(input) {
	            // behaves the same as moment#day except
	            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	            // as a setter, sunday should belong to the previous week.
	            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	        },
	
	        isoWeeksInYear: function isoWeeksInYear() {
	            return weeksInYear(this.year(), 1, 4);
	        },
	
	        weeksInYear: (function (_weeksInYear) {
	            var _weeksInYearWrapper = function weeksInYear() {
	                return _weeksInYear.apply(this, arguments);
	            };
	
	            _weeksInYearWrapper.toString = function () {
	                return _weeksInYear.toString();
	            };
	
	            return _weeksInYearWrapper;
	        })(function () {
	            var weekInfo = this.localeData()._week;
	            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	        }),
	
	        get: function get(units) {
	            units = normalizeUnits(units);
	            return this[units]();
	        },
	
	        set: function set(units, value) {
	            units = normalizeUnits(units);
	            if (typeof this[units] === "function") {
	                this[units](value);
	            }
	            return this;
	        },
	
	        // If passed a locale key, it will set the locale for this
	        // instance.  Otherwise, it will return the locale configuration
	        // variables for this instance.
	        locale: function locale(key) {
	            var newLocaleData;
	
	            if (key === undefined) {
	                return this._locale._abbr;
	            } else {
	                newLocaleData = moment.localeData(key);
	                if (newLocaleData != null) {
	                    this._locale = newLocaleData;
	                }
	                return this;
	            }
	        },
	
	        lang: deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }),
	
	        localeData: function localeData() {
	            return this._locale;
	        },
	
	        _dateTzOffset: function _dateTzOffset() {
	            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	            // https://github.com/moment/moment/pull/1871
	            return Math.round(this._d.getTimezoneOffset() / 15) * 15;
	        }
	    });
	
	    function rawMonthSetter(mom, value) {
	        var dayOfMonth;
	
	        // TODO: Move this out of here!
	        if (typeof value === "string") {
	            value = mom.localeData().monthsParse(value);
	            // TODO: Another silent failure?
	            if (typeof value !== "number") {
	                return mom;
	            }
	        }
	
	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth);
	        return mom;
	    }
	
	    function rawGetter(mom, unit) {
	        return mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]();
	    }
	
	    function rawSetter(mom, unit, value) {
	        if (unit === "Month") {
	            return rawMonthSetter(mom, value);
	        } else {
	            return mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value);
	        }
	    }
	
	    function makeAccessor(unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                rawSetter(this, unit, value);
	                moment.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return rawGetter(this, unit);
	            }
	        };
	    }
	
	    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor("Milliseconds", false);
	    moment.fn.second = moment.fn.seconds = makeAccessor("Seconds", false);
	    moment.fn.minute = moment.fn.minutes = makeAccessor("Minutes", false);
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    moment.fn.hour = moment.fn.hours = makeAccessor("Hours", true);
	    // moment.fn.month is defined separately
	    moment.fn.date = makeAccessor("Date", true);
	    moment.fn.dates = deprecate("dates accessor is deprecated. Use date instead.", makeAccessor("Date", true));
	    moment.fn.year = makeAccessor("FullYear", true);
	    moment.fn.years = deprecate("years accessor is deprecated. Use year instead.", makeAccessor("FullYear", true));
	
	    // add plural methods
	    moment.fn.days = moment.fn.day;
	    moment.fn.months = moment.fn.month;
	    moment.fn.weeks = moment.fn.week;
	    moment.fn.isoWeeks = moment.fn.isoWeek;
	    moment.fn.quarters = moment.fn.quarter;
	
	    // add aliased format methods
	    moment.fn.toJSON = moment.fn.toISOString;
	
	    /************************************
	        Duration Prototype
	    ************************************/
	
	    function daysToYears(days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        return days * 400 / 146097;
	    }
	
	    function yearsToDays(years) {
	        // years * 365 + absRound(years / 4) -
	        //     absRound(years / 100) + absRound(years / 400);
	        return years * 146097 / 400;
	    }
	
	    extend(moment.duration.fn = Duration.prototype, {
	
	        _bubble: function _bubble() {
	            var milliseconds = this._milliseconds,
	                days = this._days,
	                months = this._months,
	                data = this._data,
	                seconds,
	                minutes,
	                hours,
	                years = 0;
	
	            // The following code bubbles up values, see the tests for
	            // examples of what that means.
	            data.milliseconds = milliseconds % 1000;
	
	            seconds = absRound(milliseconds / 1000);
	            data.seconds = seconds % 60;
	
	            minutes = absRound(seconds / 60);
	            data.minutes = minutes % 60;
	
	            hours = absRound(minutes / 60);
	            data.hours = hours % 24;
	
	            days += absRound(hours / 24);
	
	            // Accurately convert days to years, assume start from year 0.
	            years = absRound(daysToYears(days));
	            days -= absRound(yearsToDays(years));
	
	            // 30 days to a month
	            // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
	            months += absRound(days / 30);
	            days %= 30;
	
	            // 12 months -> 1 year
	            years += absRound(months / 12);
	            months %= 12;
	
	            data.days = days;
	            data.months = months;
	            data.years = years;
	        },
	
	        abs: function abs() {
	            this._milliseconds = Math.abs(this._milliseconds);
	            this._days = Math.abs(this._days);
	            this._months = Math.abs(this._months);
	
	            this._data.milliseconds = Math.abs(this._data.milliseconds);
	            this._data.seconds = Math.abs(this._data.seconds);
	            this._data.minutes = Math.abs(this._data.minutes);
	            this._data.hours = Math.abs(this._data.hours);
	            this._data.months = Math.abs(this._data.months);
	            this._data.years = Math.abs(this._data.years);
	
	            return this;
	        },
	
	        weeks: function weeks() {
	            return absRound(this.days() / 7);
	        },
	
	        valueOf: function valueOf() {
	            return this._milliseconds + this._days * 86400000 + this._months % 12 * 2592000000 + toInt(this._months / 12) * 31536000000;
	        },
	
	        humanize: function humanize(withSuffix) {
	            var output = relativeTime(this, !withSuffix, this.localeData());
	
	            if (withSuffix) {
	                output = this.localeData().pastFuture(+this, output);
	            }
	
	            return this.localeData().postformat(output);
	        },
	
	        add: function add(input, val) {
	            // supports only 2.0-style add(1, 's') or add(moment)
	            var dur = moment.duration(input, val);
	
	            this._milliseconds += dur._milliseconds;
	            this._days += dur._days;
	            this._months += dur._months;
	
	            this._bubble();
	
	            return this;
	        },
	
	        subtract: function subtract(input, val) {
	            var dur = moment.duration(input, val);
	
	            this._milliseconds -= dur._milliseconds;
	            this._days -= dur._days;
	            this._months -= dur._months;
	
	            this._bubble();
	
	            return this;
	        },
	
	        get: function get(units) {
	            units = normalizeUnits(units);
	            return this[units.toLowerCase() + "s"]();
	        },
	
	        as: function as(units) {
	            var days, months;
	            units = normalizeUnits(units);
	
	            if (units === "month" || units === "year") {
	                days = this._days + this._milliseconds / 86400000;
	                months = this._months + daysToYears(days) * 12;
	                return units === "month" ? months : months / 12;
	            } else {
	                // handle milliseconds separately because of floating point math errors (issue #1867)
	                days = this._days + Math.round(yearsToDays(this._months / 12));
	                switch (units) {
	                    case "week":
	                        return days / 7 + this._milliseconds / 604800000;
	                    case "day":
	                        return days + this._milliseconds / 86400000;
	                    case "hour":
	                        return days * 24 + this._milliseconds / 3600000;
	                    case "minute":
	                        return days * 24 * 60 + this._milliseconds / 60000;
	                    case "second":
	                        return days * 24 * 60 * 60 + this._milliseconds / 1000;
	                    // Math.floor prevents floating point math errors here
	                    case "millisecond":
	                        return Math.floor(days * 24 * 60 * 60 * 1000) + this._milliseconds;
	                    default:
	                        throw new Error("Unknown unit " + units);
	                }
	            }
	        },
	
	        lang: moment.fn.lang,
	        locale: moment.fn.locale,
	
	        toIsoString: deprecate("toIsoString() is deprecated. Please use toISOString() instead " + "(notice the capitals)", function () {
	            return this.toISOString();
	        }),
	
	        toISOString: function toISOString() {
	            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	            var years = Math.abs(this.years()),
	                months = Math.abs(this.months()),
	                days = Math.abs(this.days()),
	                hours = Math.abs(this.hours()),
	                minutes = Math.abs(this.minutes()),
	                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);
	
	            if (!this.asSeconds()) {
	                // this is the same as C#'s (Noda) and python (isodate)...
	                // but not other JS (goog.date)
	                return "P0D";
	            }
	
	            return (this.asSeconds() < 0 ? "-" : "") + "P" + (years ? years + "Y" : "") + (months ? months + "M" : "") + (days ? days + "D" : "") + (hours || minutes || seconds ? "T" : "") + (hours ? hours + "H" : "") + (minutes ? minutes + "M" : "") + (seconds ? seconds + "S" : "");
	        },
	
	        localeData: function localeData() {
	            return this._locale;
	        }
	    });
	
	    moment.duration.fn.toString = moment.duration.fn.toISOString;
	
	    function makeDurationGetter(name) {
	        moment.duration.fn[name] = function () {
	            return this._data[name];
	        };
	    }
	
	    for (i in unitMillisecondFactors) {
	        if (hasOwnProp(unitMillisecondFactors, i)) {
	            makeDurationGetter(i.toLowerCase());
	        }
	    }
	
	    moment.duration.fn.asMilliseconds = function () {
	        return this.as("ms");
	    };
	    moment.duration.fn.asSeconds = function () {
	        return this.as("s");
	    };
	    moment.duration.fn.asMinutes = function () {
	        return this.as("m");
	    };
	    moment.duration.fn.asHours = function () {
	        return this.as("h");
	    };
	    moment.duration.fn.asDays = function () {
	        return this.as("d");
	    };
	    moment.duration.fn.asWeeks = function () {
	        return this.as("weeks");
	    };
	    moment.duration.fn.asMonths = function () {
	        return this.as("M");
	    };
	    moment.duration.fn.asYears = function () {
	        return this.as("y");
	    };
	
	    /************************************
	        Default Locale
	    ************************************/
	
	    // Set default locale, other locale will inherit from English.
	    moment.locale("en", {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal: function ordinal(number) {
	            var b = number % 10,
	                output = toInt(number % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th";
	            return number + output;
	        }
	    });
	
	    /* EMBED_LOCALES */
	
	    /************************************
	        Exposing Moment
	    ************************************/
	
	    function makeGlobal(shouldDeprecate) {
	        /*global ender:false */
	        if (typeof ender !== "undefined") {
	            return;
	        }
	        oldGlobalMoment = globalScope.moment;
	        if (shouldDeprecate) {
	            globalScope.moment = deprecate("Accessing Moment through the global scope is " + "deprecated, and will be removed in an upcoming " + "release.", moment);
	        } else {
	            globalScope.moment = moment;
	        }
	    }
	
	    // CommonJS module is defined
	    if (hasModule) {
	        module.exports = moment;
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	            if (module.config && module.config() && module.config().noGlobal === true) {
	                // release the global variable
	                globalScope.moment = oldGlobalMoment;
	            }
	
	            return moment;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        makeGlobal(true);
	    } else {
	        makeGlobal();
	    }
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(26)(module)))

/***/ },
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 AngularJS v1.4.0-rc.1
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(Q,V,t){'use strict';function G(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.0-rc.1/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Qa(b){if(null==b||Ra(b))return!1;var a=b.length;return b.nodeType===
	na&&a?!0:M(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function n(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(L(b)||Qa(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==n)b.forEach(a,c,b);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d,b);return b}function Nd(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,
	b[d[e]],d[e]);return d}function kc(b){return function(a,c){b(c,a)}}function Od(){return++jb}function lc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Kb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(D(g)||E(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var m=h[l],r=g[m];c&&D(r)?(D(b[m])||(b[m]=L(r)?[]:{}),Kb(b[m],[r],!0)):b[m]=r}}lc(b,d);return b}function O(b){return Kb(b,pa.call(arguments,1),!1)}function Pd(b){return Kb(b,pa.call(arguments,1),!0)}function aa(b){return parseInt(b,
	10)}function Lb(b,a){return O(Object.create(b),a)}function x(){}function Sa(b){return b}function oa(b){return function(){return b}}function v(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function D(b){return null!==b&&"object"===typeof b}function M(b){return"string"===typeof b}function T(b){return"number"===typeof b}function ea(b){return"[object Date]"===qa.call(b)}function E(b){return"function"===typeof b}function Ta(b){return"[object RegExp]"===qa.call(b)}function Ra(b){return b&&
	b.window===b}function Ua(b){return b&&b.$evalAsync&&b.$watch}function Va(b){return"boolean"===typeof b}function mc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Qd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ra(b){return F(b.nodeName||b[0]&&b[0].nodeName)}function Wa(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function sa(b,a,c,d){if(Ra(b)||Ua(b))throw Ca("cpws");if(nc.test(qa.call(a)))throw Ca("cpta");if(a){if(b===a)throw Ca("cpi");
	c=c||[];d=d||[];if(D(b)){var e=c.indexOf(b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=sa(b[f],null,c,d),D(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:n(a,function(b,c){delete a[c]});for(f in b)b.hasOwnProperty(f)&&(e=sa(b[f],null,c,d),D(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e);lc(a,g)}}else if(a=b)L(b)?a=sa(b,[],c,d):nc.test(qa.call(b))?a=new b.constructor(b):ea(b)?a=new Date(b.getTime()):Ta(b)?(a=new RegExp(b.source,
	b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):D(b)&&(e=Object.create(Object.getPrototypeOf(b)),a=sa(b,e,c,d));return a}function fa(b,a){if(L(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(D(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ja(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<
	c;d++)if(!ja(b[d],a[d]))return!1;return!0}}else{if(ea(b))return ea(a)?ja(b.getTime(),a.getTime()):!1;if(Ta(b))return Ta(a)?b.toString()==a.toString():!1;if(Ua(b)||Ua(a)||Ra(b)||Ra(a)||L(a)||ea(a)||Ta(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!E(b[d])){if(!ja(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==t&&!E(a[d]))return!1;return!0}return!1}function Xa(b,a,c){return b.concat(pa.call(a,c))}function oc(b,a){var c=2<arguments.length?pa.call(arguments,
	2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,Xa(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Rd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=t:Ra(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":Ua(a)&&(c="$SCOPE");return c}function Ya(b,a){if("undefined"===typeof b)return t;T(a)||(a=a?2:null);return JSON.stringify(b,Rd,a)}function pc(b){return M(b)?JSON.parse(b):b}function qc(b,
	a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Mb(b,a,c){c=c?-1:1;var d=qc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function ta(b){b=C(b).clone();try{b.empty()}catch(a){}var c=C("<div>").append(b).html();try{return b[0].nodeType===Za?F(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+F(b)})}catch(d){return F(c)}}function rc(b){try{return decodeURIComponent(b)}catch(a){}}
	function sc(b){var a={},c,d;n((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=rc(c[0]),z(d)&&(b=z(c[1])?rc(c[1]):!0,tc.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Nb(b){var a=[];n(b,function(b,d){L(b)?n(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function kb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
	"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Sd(b,a){var c,d,e=Ka.length;for(d=0;d<e;++d)if(c=Ka[d]+a,M(c=b.getAttribute(c)))return c;return null}function Td(b,a){var c,d,e={};n(Ka,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});n(Ka,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Sd(c,"strict-di"),
	a(c,d?[d]:[],e))}function uc(b,a,c){D(c)||(c={});c=O({strictDi:!1},c);var d=function(){b=C(b);if(b.injector()){var d=b[0]===V?"document":ta(b);throw Ca("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=$a(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
	d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;Q&&e.test(Q.name)&&(c.debugInfoEnabled=!0,Q.name=Q.name.replace(e,""));if(Q&&!f.test(Q.name))return d();Q.name=Q.name.replace(f,"");ba.resumeBootstrap=function(b){n(b,function(b){a.push(b)});return d()};E(ba.resumeDeferredBootstrap)&&ba.resumeDeferredBootstrap()}function Ud(){Q.name="NG_ENABLE_DEBUG_INFO!"+Q.name;Q.location.reload()}function Vd(b){b=ba.element(b).injector();if(!b)throw Ca("test");return b.get("$$testability")}
	function vc(b,a){a=a||"_";return b.replace(Wd,function(b,d){return(d?a:"")+b.toLowerCase()})}function Xd(){var b;if(!wc){var a=lb();ka=Q.jQuery;z(a)&&(ka=null===a?t:Q[a]);ka&&ka.fn.on?(C=ka,O(ka.fn,{scope:La.scope,isolateScope:La.isolateScope,controller:La.controller,injector:La.injector,inheritedData:La.inheritedData}),b=ka.cleanData,ka.cleanData=function(a){var d;if(Ob)Ob=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=ka._data(f,"events"))&&d.$destroy&&ka(f).triggerHandler("$destroy");b(a)}):C=P;ba.element=
	C;wc=!0}}function Pb(b,a,c){if(!b)throw Ca("areq",a||"?",c||"required");return b}function Ma(b,a,c){c&&L(b)&&(b=b[b.length-1]);Pb(E(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Na(b,a){if("hasOwnProperty"===b)throw Ca("badname",a);}function xc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?oc(e,b):b}function mb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;
	if(!a)break;c.push(a)}while(a!==b);return C(c)}function la(){return Object.create(null)}function Yd(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=G("$injector"),d=G("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||G;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(c,d,e,f){f||(f=b);return function(){f[e||"push"]([c,d,arguments]);return y}}if(!g)throw c("nomod",
	f);var b=[],d=[],e=[],s=a("$injector","invoke","push",d),y={_invokeQueue:b,_configBlocks:d,_runBlocks:e,requires:g,name:f,provider:a("$provide","provider"),factory:a("$provide","factory"),service:a("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:a("$provide","decorator"),animation:a("$animateProvider","register"),filter:a("$filterProvider","register"),controller:a("$controllerProvider","register"),directive:a("$compileProvider","directive"),
	config:s,run:function(a){e.push(a);return this}};h&&s(h);return y})}})}function Zd(b){O(b,{bootstrap:uc,copy:sa,extend:O,merge:Pd,equals:ja,element:C,forEach:n,injector:$a,noop:x,bind:oc,toJson:Ya,fromJson:pc,identity:Sa,isUndefined:v,isDefined:z,isString:M,isFunction:E,isObject:D,isNumber:T,isElement:mc,isArray:L,version:$d,isDate:ea,lowercase:F,uppercase:nb,callbacks:{counter:0},getTestability:Vd,$$minErr:G,$$csp:ab,reloadWithDebugInfo:Ud});bb=Yd(Q);try{bb("ngLocale")}catch(a){bb("ngLocale",[]).provider("$locale",
	ae)}bb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:be});a.provider("$compile",yc).directive({a:ce,input:zc,textarea:zc,form:de,script:ee,select:fe,style:ge,option:he,ngBind:ie,ngBindHtml:je,ngBindTemplate:ke,ngClass:le,ngClassEven:me,ngClassOdd:ne,ngCloak:oe,ngController:pe,ngForm:qe,ngHide:re,ngIf:se,ngInclude:te,ngInit:ue,ngNonBindable:ve,ngPluralize:we,ngRepeat:xe,ngShow:ye,ngStyle:ze,ngSwitch:Ae,ngSwitchWhen:Be,ngSwitchDefault:Ce,ngOptions:De,ngTransclude:Ee,ngModel:Fe,
	ngList:Ge,ngChange:He,pattern:Ac,ngPattern:Ac,required:Bc,ngRequired:Bc,minlength:Cc,ngMinlength:Cc,maxlength:Dc,ngMaxlength:Dc,ngValue:Ie,ngModelOptions:Je}).directive({ngInclude:Ke}).directive(ob).directive(Ec);a.provider({$anchorScroll:Le,$animate:Me,$$animateQueue:Ne,$$AnimateRunner:Oe,$browser:Pe,$cacheFactory:Qe,$controller:Re,$document:Se,$exceptionHandler:Te,$filter:Fc,$interpolate:Ue,$interval:Ve,$http:We,$httpParamSerializer:Xe,$httpParamSerializerJQLike:Ye,$httpBackend:Ze,$location:$e,
	$log:af,$parse:bf,$rootScope:cf,$q:df,$$q:ef,$sce:ff,$sceDelegate:gf,$sniffer:hf,$templateCache:jf,$templateRequest:kf,$$testability:lf,$timeout:mf,$window:nf,$$rAF:of,$$asyncCallback:pf,$$jqLite:qf,$$HashMap:rf,$$cookieReader:sf})}])}function cb(b){return b.replace(tf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(uf,"Moz$1")}function Gc(b){b=b.nodeType;return b===na||!b||9===b}function Hc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Qb.test(b)){c=c||e.appendChild(a.createElement("div"));
	d=(vf.exec(b)||["",""])[1].toLowerCase();d=ga[d]||ga._default;c.innerHTML=d[1]+b.replace(wf,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=Xa(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function P(b){if(b instanceof P)return b;var a;M(b)&&(b=S(b),a=!0);if(!(this instanceof P)){if(a&&"<"!=b.charAt(0))throw Rb("nosel");return new P(b)}if(a){a=V;var c;b=(c=xf.exec(b))?[a.createElement(c[1])]:
	(c=Hc(b,a))?c.childNodes:[]}Ic(this,b)}function Sb(b){return b.cloneNode(!0)}function pb(b,a){a||qb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)qb(c[d])}function Jc(b,a,c,d){if(z(d))throw Rb("offargs");var e=(d=rb(b))&&d.events,f=d&&d.handle;if(f)if(a)n(a.split(" "),function(a){if(z(c)){var d=e[a];Wa(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function qb(b,
	a){var c=b.ng339,d=c&&sb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Jc(b)),delete sb[c],b.ng339=t))}function rb(b,a){var c=b.ng339,c=c&&sb[c];a&&!c&&(b.ng339=c=++yf,c=sb[c]={events:{},data:{},handle:t});return c}function Tb(b,a,c){if(Gc(b)){var d=z(c),e=!d&&a&&!D(a),f=!a;b=(b=rb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];O(b,a)}}}function tb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+
	a+" "):!1}function ub(b,a){a&&b.setAttribute&&n(a.split(" "),function(a){b.setAttribute("class",S((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+S(a)+" "," ")))})}function vb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(a.split(" "),function(a){a=S(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",S(c))}}function Ic(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==
	a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Kc(b,a){return wb(b,"$"+(a||"ngController")+"Controller")}function wb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=C.data(b,a[d]))!==t)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Lc(b){for(pb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Ub(b,a){a||pb(b);var c=b.parentNode;c&&c.removeChild(b)}function zf(b,a){a=a||Q;if("complete"===a.document.readyState)a.setTimeout(b);
	else C(a).on("load",b)}function Mc(b,a){var c=xb[a.toLowerCase()];return c&&Nc[ra(b)]&&c}function Af(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Oc[a]}function Bf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(v(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
	function(){return!0===c.immediatePropagationStopped};1<g&&(f=fa(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function qf(){this.$get=function(){return O(P,{hasClass:function(b,a){b.attr&&(b=b[0]);return tb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return vb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return ub(b,a)}})}}function Da(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==
	c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Od)():c+":"+b}function Oa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}n(b,this.put,this)}function Cf(b){return(b=b.toString().replace(Pc,"").match(Qc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function $a(b,a){function c(a){return function(b,c){if(D(b))n(b,kc(a));else return a(b,c)}}function d(a,b){Na(a,"service");if(E(b)||L(b))b=s.instantiate(b);if(!b.$get)throw Ea("pget",a);return r[a+"Provider"]=b}function e(a,b){return function(){var c=
	H.invoke(b,this);if(v(c))throw Ea("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=s.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{M(a)?(c=bb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(s.invoke(a)):L(a)?b.push(s.invoke(a)):Ma(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==
	e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ea("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ea("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var h=[],k=$a.$$annotate(b,a,g),l,s,m;s=0;for(l=k.length;s<l;s++){m=k[s];if("string"!==typeof m)throw Ea("itkn",m);h.push(f&&
	f.hasOwnProperty(m)?f[m]:d(m,g))}L(b)&&(b=b[l]);return b.apply(c,h)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((L(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return D(a)||E(a)?a:d},get:d,annotate:$a.$$annotate,has:function(a){return r.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new Oa([],!0),r={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,
	b){return f(a,oa(b),!1)}),constant:c(function(a,b){Na(a,"constant");r[a]=b;y[a]=b}),decorator:function(a,b){var c=s.get(a+"Provider"),d=c.$get;c.$get=function(){var a=H.invoke(d,c);return H.invoke(b,null,{$delegate:a})}}}},s=r.$injector=h(r,function(a,b){ba.isString(b)&&k.push(b);throw Ea("unpr",k.join(" <- "));}),y={},H=y.$injector=h(y,function(a,b){var c=s.get(a+"Provider",b);return H.invoke(c.$get,c,t,a)});n(g(b),function(a){H.invoke(a||x)});return H}function Le(){var b=!0;this.disableAutoScrolling=
	function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ra(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():mc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=M(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):
	(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||zf(function(){d.$evalAsync(g)})});return g}]}function db(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;L(b)&&(b=b.join(" "));L(a)&&(a=a.join(" "));return b+" "+a}function Df(b){M(b)&&(b=b.split(" "));var a={};n(b,function(b){b.length&&(a[b]=!0)});return a}function pf(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:
	function(b){return a(b,0,!1)}}]}function Ef(b,a,c,d){function e(a){try{a.apply(null,pa.call(arguments,1))}finally{if(H--,0===H)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{u=m.state;break a}catch(a){}u=void 0}u=v(u)?null:u;ja(u,A)&&(u=A);A=u}function h(){if(w!==l.url()||p!==u)w=l.url(),p=u,n(B,function(a){a(l.url(),u)})}var l=this,k=b.location,m=b.history,r=b.setTimeout,s=b.clearTimeout,y={};l.isMock=!1;var H=0,J=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=
	function(){H++};l.notifyWhenNoOutstandingRequests=function(a){0===H?a():J.push(a)};var u,p,w=k.href,q=a.find("base"),K=null;g();p=u;l.url=function(a,c,e){v(e)&&(e=null);k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){var f=p===e;if(w===a&&(!d.history||f))return l;var h=w&&Fa(w)===Fa(a);w=a;p=e;!d.history||h&&f?(h||(K=a),c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):k.href=a):(m[c?"replaceState":"pushState"](e,"",a),g(),p=u);return l}return K||k.href.replace(/%27/g,
	"'")};l.state=function(){return u};var B=[],N=!1,A=null;l.onUrlChange=function(a){if(!N){if(d.history)C(b).on("popstate",f);C(b).on("hashchange",f);N=!0}B.push(a);return a};l.$$applicationDestroyed=function(){C(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=q.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;H++;c=r(function(){delete y[c];e(a)},b||0);y[c]=!0;return c};l.defer.cancel=function(a){return y[a]?(delete y[a],
	s(a),e(x),!0):!1}}function Pe(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Ef(b,d,a,c)}]}function Qe(){this.$get=function(){function b(b,d){function e(a){a!=r&&(s?s==a&&(s=a.n):s=a,f(a.n,a.p),f(a,r),r=a,r.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw G("$cacheFactory")("iid",b);var g=0,h=O({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},r=null,s=null;return a[b]={put:function(a,b){if(!v(b)){if(k<Number.MAX_VALUE){var c=m[a]||(m[a]=
	{key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(s.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==r&&(r=b.p);b==s&&(s=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};r=s=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return O({},h,{size:g})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
	return b}}function jf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function yc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==F(b))throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
	g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Qd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function s(a,f){Na(a,"directive");M(a)?(d(a),Pb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];n(e[a],function(e,g){try{var h=b.invoke(e);E(h)?h={compile:oa(h)}:!h.compile&&h.link&&(h.compile=oa(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||a;h.require=h.require||
	h.controller&&h.name;h.restrict=h.restrict||"EA";var l=h,k=h,s=h.name,m={isolateScope:null,bindToController:null};D(k.scope)&&(!0===k.bindToController?(m.bindToController=c(k.scope,s,!0),m.isolateScope={}):m.isolateScope=c(k.scope,s,!1));D(k.bindToController)&&(m.bindToController=c(k.bindToController,s,!0));if(D(m.bindToController)){var H=k.controller,Z=k.controllerAs;if(!H)throw ha("noctrl",s);var da;a:if(Z&&M(Z))da=Z;else{if(M(H)){var n=Rc.exec(H);if(n){da=n[3];break a}}da=void 0}if(!da)throw ha("noident",
	s);}var q=l.$$bindings=m;D(q.isolateScope)&&(h.$$isolateBindings=q.isolateScope);f.push(h)}catch(t){d(t)}});return f}])),e[a].push(f)):n(a,kc(s));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var m=!0;this.debugInfoEnabled=function(a){return z(a)?(m=a,this):m};this.$get=["$injector",
	"$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,p,w,q,K,B,N){function A(a,b){try{a.addClass(b)}catch(c){}}function R(a,b,c,d,e){a instanceof C||(a=C(a));n(a,function(b,c){b.nodeType==Za&&b.nodeValue.match(/\S+/)&&(a[c]=C(b).wrap("<span></span>").parent()[0])});var f=Y(a,b,a,c,d,e);R.$$addScopeClass(a);var g=null;return function(b,c,d){Pb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;
	d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ra(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?C(Vb(g,C("<div>").append(a).html())):c?La.clone.call(a):a;if(h)for(var k in h)d.data("$"+k+"Controller",h[k].instance);R.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function Y(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,s,B,y;if(p)for(y=Array(c.length),m=0;m<h.length;m+=3)f=h[m],y[f]=c[f];else y=c;m=0;for(s=h.length;m<
	s;)if(k=y[h[m++]],c=h[m++],f=h[m++],c){if(c.scope){if(l=a.$new(),R.$$addScopeInfo(C(k),l),B=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",B)}else l=a;B=c.transcludeOnThisElement?Z(a,c.transclude,e,c.elementTranscludeOnThisElement):!c.templateOnThisElement&&e?e:!e&&b?Z(a,b):null;c(f,l,k,d,B,c)}else f&&f(a,k.childNodes,t,e)}for(var h=[],k,l,m,s,p,B=0;B<a.length;B++){k=new ca;l=da(a[B],[],k,0===B?d:t,e);(f=l.length?I(l,a[B],k,b,c,null,[],[],f):null)&&f.scope&&R.$$addScopeClass(k.$$element);
	k=f&&f.terminal||!(m=a[B].childNodes)||!m.length?null:Y(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(B,f,k),s=!0,p=p||f;f=null}return s?g:null}function Z(a,b,c,d){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function da(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case na:v(b,wa(ra(a)),"E",d,e);for(var l,m,s,p=a.attributes,B=0,y=p&&p.length;B<
	y;B++){var H=!1,Z=!1;l=p[B];k=l.name;m=S(l.value);l=wa(k);if(s=ia.test(l))k=k.replace(Tc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var J=l.replace(/(Start|End)$/,"");G(J)&&l===J+"Start"&&(H=k,Z=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=wa(k.toLowerCase());h[l]=k;if(s||!c.hasOwnProperty(l))c[l]=m,Mc(a,l)&&(c[l]=!0);U(a,b,m,l,s);v(b,l,"A",d,e,H,Z)}a=a.className;D(a)&&(a=a.animVal);if(M(a)&&""!==a)for(;k=g.exec(a);)l=wa(k[2]),v(b,l,"C",d,e)&&(c[l]=S(k[3])),a=
	a.substr(k.index+k[0].length);break;case Za:ya(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=wa(k[1]),v(b,l,"M",d,e)&&(c[l]=S(k[2]))}catch(N){}}b.sort(Ga);return b}function va(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return C(d)}function Sc(a,b,c){return function(d,e,f,g,h){e=va(e[0],b,c);return a(d,e,f,g,h)}}function I(a,
	b,d,e,f,g,h,k,m){function s(a,b,c,d){if(a){c&&(a=Sc(a,c,d));a.require=I.require;a.directiveName=x;if(A===I||I.$$isolateScope)a=$(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Sc(b,c,d));b.require=I.require;b.directiveName=x;if(A===I||I.$$isolateScope)b=$(b,{isolateScope:!0});k.push(b)}}function B(a,b,c,d){var e;if(M(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&
	!f)throw ha("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function y(a,b,c,d,e,f){var g=la(),h;for(h in d){var k=d[h],l={$scope:k===A||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=k.controller;"@"==m&&(m=b[k.name]);l=p(m,l,!0,k.controllerAs);g[k.name]=l;q||a.data("$"+k.name+"Controller",l.instance)}return g}function Z(a,c,e,f,g,l){function m(a,b,c){var d;Ua(a)||(c=b,b=a,a=t);q&&(d=n);c||(c=q?w.parent():w);return g(a,b,d,c,W)}var s,p,H,J,
	n,eb,w;b===e?(f=d,w=d.$$element):(w=C(e),f=new ca(w,d));A&&(J=c.$new(!0));g&&(eb=m,eb.$$boundTransclude=g);Y&&(n=y(w,f,eb,Y,J,c));A&&(R.$$addScopeInfo(w,J,!0,!(u&&(u===A||u===A.$$originalDirective))),R.$$addScopeClass(w,!0),J.$$isolateBindings=A.$$isolateBindings,ba(c,f,J,J.$$isolateBindings,A,J));if(n){var da=A||N,K;da&&n[da.name]&&(p=da.$$bindings.bindToController,(H=n[da.name])&&H.identifier&&p&&(K=H,l.$$destroyBindings=ba(c,f,H.instance,p,da)));for(s in n){H=n[s];var va=H();va!==H.instance&&(H.instance=
	va,w.data("$"+I.name+"Controller",va),H===K&&(l.$$destroyBindings(),l.$$destroyBindings=ba(c,f,va,p,da)))}}s=0;for(l=h.length;s<l;s++)p=h[s],aa(p,p.isolateScope?J:c,w,f,p.require&&B(p.directiveName,p.require,w,n),eb);var W=c;A&&(A.template||null===A.templateUrl)&&(W=J);a&&a(W,e.childNodes,t,g);for(s=k.length-1;0<=s;s--)p=k[s],aa(p,p.isolateScope?J:c,w,f,p.require&&B(p.directiveName,p.require,w,n),eb)}m=m||{};for(var J=-Number.MAX_VALUE,N,Y=m.controllerDirectives,A=m.newIsolateScopeDirective,u=m.templateDirective,
	n=m.nonTlbTranscludeDirective,w=!1,K=!1,q=m.hasElementTranscludeDirective,W=d.$$element=C(b),I,x,v,Ga=e,ya,G=0,F=a.length;G<F;G++){I=a[G];var O=I.$$start,Wb=I.$$end;O&&(W=va(b,O,Wb));v=t;if(J>I.priority)break;if(v=I.scope)I.templateUrl||(D(v)?(P("new/isolated scope",A||N,I,W),A=I):P("new/isolated scope",A,I,W)),N=N||I;x=I.name;!I.templateUrl&&I.controller&&(v=I.controller,Y=Y||la(),P("'"+x+"' controller",Y[x],I,W),Y[x]=I);if(v=I.transclude)w=!0,I.$$tlb||(P("transclusion",n,I,W),n=I),"element"==v?
	(q=!0,J=I.priority,v=W,W=d.$$element=C(V.createComment(" "+x+": "+d[x]+" ")),b=W[0],X(f,pa.call(v,0),b),Ga=R(v,e,J,g&&g.name,{nonTlbTranscludeDirective:n})):(v=C(Sb(b)).contents(),W.empty(),Ga=R(v,e));if(I.template)if(K=!0,P("template",u,I,W),u=I,v=E(I.template)?I.template(W,d):I.template,v=ga(v),I.replace){g=I;v=Qb.test(v)?Uc(Vb(I.templateNamespace,S(v))):[];b=v[0];if(1!=v.length||b.nodeType!==na)throw ha("tplrt",x,"");X(f,W,b);F={$attr:{}};v=da(b,[],F);var T=a.splice(G+1,a.length-(G+1));A&&z(v);
	a=a.concat(v).concat(T);Q(d,F);F=a.length}else W.html(v);if(I.templateUrl)K=!0,P("template",u,I,W),u=I,I.replace&&(g=I),Z=Ff(a.splice(G,a.length-G),W,d,f,w&&Ga,h,k,{controllerDirectives:Y,newIsolateScopeDirective:A,templateDirective:u,nonTlbTranscludeDirective:n}),F=a.length;else if(I.compile)try{ya=I.compile(W,d,Ga),E(ya)?s(null,ya,O,Wb):ya&&s(ya.pre,ya.post,O,Wb)}catch(U){c(U,ta(W))}I.terminal&&(Z.terminal=!0,J=Math.max(J,I.priority))}Z.scope=N&&!0===N.scope;Z.transcludeOnThisElement=w;Z.elementTranscludeOnThisElement=
	q;Z.templateOnThisElement=K;Z.transclude=Ga;m.hasElementTranscludeDirective=q;return Z}function z(a){for(var b=0,c=a.length;b<c;b++)a[b]=Lb(a[b],{$$isolateScope:!0})}function v(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");for(var p=0,B=d.length;p<B;p++)try{m=d[p],(g===t||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(k&&(m=Lb(m,{$$start:k,$$end:l})),b.push(m),h=m)}catch(y){c(y)}}return h}function G(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),
	d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Q(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(A(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Ff(a,b,c,e,f,g,h,k){var l=[],m,s,p=b[0],
	B=a.shift(),y=Lb(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),H=E(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,N=B.templateNamespace;b.empty();d(K.getTrustedResourceUrl(H)).then(function(d){var J,u;d=ga(d);if(B.replace){d=Qb.test(d)?Uc(Vb(N,S(d))):[];J=d[0];if(1!=d.length||J.nodeType!==na)throw ha("tplrt",B.name,H);d={$attr:{}};X(e,b,J);var w=da(J,[],d);D(B.scope)&&z(w);a=w.concat(a);Q(c,d)}else J=p,b.html(d);a.unshift(y);m=I(a,J,c,f,b,B,g,h,k);n(e,function(a,c){a==
	J&&(e[c]=b[0])});for(s=Y(b[0].childNodes,f);l.length;){d=l.shift();u=l.shift();var K=l.shift(),R=l.shift(),w=b[0];if(!d.$$destroyed){if(u!==p){var va=u.className;k.hasElementTranscludeDirective&&B.replace||(w=Sb(J));X(K,C(u),w);A(C(w),va)}u=m.transcludeOnThisElement?Z(d,m.transclude,R):R;m(s,d,w,e,u,m)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=Z(b,m.transclude,e)),m(s,b,c,d,a,m)))}}function Ga(a,b){var c=b.priority-a.priority;return 0!==
	c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function P(a,b,c,d){if(b)throw ha("multidir",b.name,c.name,a,ta(d));}function ya(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&R.$$addBindingClass(a);return function(a,c){var e=c.parent();b||R.$$addBindingClass(e);R.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Vb(a,b){a=F(a||"html");switch(a){case "svg":case "math":var c=V.createElement("div");c.innerHTML=
	"<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function T(a,b){if("srcdoc"==b)return K.HTML;var c=ra(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return K.RESOURCE_URL}function U(a,c,d,e,f){var g=T(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ra(a))throw ha("selmulti",ta(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ha("nodomevents");
	var m=h[e];m!==d&&(l=m&&b(m,!0,g,f),d=m);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function X(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);
	C(c).data(C(d).data());ka?(Ob=!0,ka.cleanData([d])):delete C.cache[d[C.expando]];d=1;for(e=b.length;d<e;d++)f=b[d],C(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function $(a,b){return O(function(){return a.apply(null,arguments)},a,b)}function aa(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ta(d))}}function ba(a,c,d,e,f,g){var h;n(e,function(e,g){var k=e.attrName,l=e.optional,m,s,p,B;switch(e.mode){case "@":c.$observe(k,function(a){d[g]=a});c.$$observers[k].$$scope=a;c[k]&&(d[g]=b(c[k])(a));
	break;case "=":if(l&&!c[k])break;s=u(c[k]);B=s.literal?ja:function(a,b){return a===b||a!==a&&b!==b};p=s.assign||function(){m=d[g]=s(a);throw ha("nonassign",c[k],f.name);};m=d[g]=s(a);l=function(b){B(b,d[g])||(B(b,m)?p(a,b=d[g]):d[g]=b);return m=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(u(c[k],l),null,s.literal);h=h||[];h.push(l);break;case "&":if(!c.hasOwnProperty(k)&&l)break;s=u(c[k]);if(s===x&&l)break;d[g]=function(b){return s(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<
	b;++a)h[a]()}:x;return g&&e!==x?(g.$on("$destroy",e),x):e}var ca=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a};ca.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=Vc(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=Vc(b,a))&&c.length&&B.removeClass(this.$$element,c)},
	$set:function(a,b,d,e){var f=this.$$element[0],g=Mc(f,a),h=Af(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=vc(a,"-"));g=ra(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=N(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=S(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(h)?k:/(,)/,h=h.split(k),k=Math.floor(h.length/2),l=0;l<k;l++)var m=2*l,g=g+N(S(h[m]),!0),g=g+(" "+S(h[m+1]));
	h=S(h[2*l]).split(/\s/);g+=N(S(h[0]),!0);2===h.length&&(g+=" "+S(h[1]));this[a]=b=g}!1!==d&&(null===b||b===t?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[f],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=la()),e=d[a]||(d[a]=[]);e.push(b);w.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){Wa(e,b)}}};var ea=b.startSymbol(),fa=b.endSymbol(),ga="{{"==ea||"}}"==fa?Sa:function(a){return a.replace(/\{\{/g,
	ea).replace(/}}/g,fa)},ia=/^ngAttr[A-Z]/;R.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:x;R.$$addBindingClass=m?function(a){A(a,"ng-binding")}:x;R.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:x;R.$$addScopeClass=m?function(a,b){A(a,b?"ng-isolate-scope":"ng-scope")}:x;return R}]}function wa(b){return cb(b.replace(Tc,""))}function Vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
	f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Uc(b){b=C(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Gf.call(b,a,1);return b}function Re(){var b={},a=!1;this.register=function(a,d){Na(a,"controller");D(a)?O(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!D(a.$scope))throw G("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,
	g,h,l){var k,m,r;h=!0===h;l&&M(l)&&(r=l);if(M(f)){l=f.match(Rc);if(!l)throw Hf("ctrlfmt",f);m=l[1];r=r||l[3];f=b.hasOwnProperty(m)?b[m]:xc(g.$scope,m,!0)||(a?xc(d,m,!0):t);Ma(f,m,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),r&&e(g,r,k,m||f.name),O(function(){var a=c.invoke(f,k,g,m);a!==k&&(D(a)||E(a))&&(k=a,r&&e(g,r,k,m||f.name));return k},{instance:k,identifier:r});k=c.instantiate(f,g,m);r&&e(g,r,k,m||f.name);return k}}]}function Se(){this.$get=["$window",function(b){return C(b.document)}]}
	function Te(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Wc(b){function a(a){return D(a)?ea(a)?a.toISOString():Ya(a):a}return function(c){if(!c)return"";var d=[];Nd(c,function(c,f){null===c||v(c)||(L(c)||D(c)&&b?n(c,function(g,h){var l=b?"["+(L(c)?"":h)+"]":"";d.push(ua(f+l)+"="+ua(a(g)))}):d.push(ua(f)+"="+ua(a(c))))});return 0<d.length?d.join("&"):""}}function Xe(){this.$get=function(){return Wc(!1)}}function Ye(){this.$get=function(){return Wc(!0)}}
	function Xb(b,a){if(M(b)){var c=b.replace(If,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(Xc))||(d=(d=c.match(Jf))&&Kf[d[0]].test(c));d&&(b=pc(c))}}return b}function Yc(b){var a=la(),c;M(b)?n(b.split("\n"),function(b){c=b.indexOf(":");var e=F(S(b.substr(0,c)));b=S(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):D(b)&&n(b,function(b,c){var f=F(c),g=S(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function Zc(b){var a;return function(c){a||(a=Yc(b));return c?(c=a[F(c)],void 0===c&&(c=null),
	c):a}}function $c(b,a,c,d){if(E(d))return d(b,a,c);n(d,function(d){b=d(b,a,c)});return b}function We(){var b=this.defaults={transformResponse:[Xb],transformRequest:[function(a){return D(a)&&"[object File]"!==qa.call(a)&&"[object Blob]"!==qa.call(a)&&"[object FormData]"!==qa.call(a)?Ya(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:fa(Yb),put:fa(Yb),patch:fa(Yb)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=
	function(b){return z(b)?(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=O({},a);b.data=a.data?$c(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};n(a,function(a,d){E(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!ba.isObject(a))throw G("$http")("badreq",a);var e=O({method:"get",
	transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=O({},a.headers),f,g,h,c=O({},c.common,c[F(a.method)]);a:for(f in c){g=F(f);for(h in e)if(F(h)===g)continue a;e[f]=c[f]}return d(e,fa(a))}(a);e.method=nb(e.method);e.paramSerializer=M(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=$c(a.data,Zc(d),t,a.transformRequest);v(e)&&n(d,function(a,b){"content-type"===
	F(b)&&delete d[b]});v(a.withCredentials)&&!v(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},t],g=h.when(e);for(n(y,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Ma(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Ma(a,"fn");g.then(null,function(b){a(b.data,
	b.status,b.headers,e)});return g};return g}function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}N&&(200<=b&&300>b?N.put(Y,[b,c,Yc(d),e]):N.remove(Y));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?K.resolve:K.reject)({data:a,status:b,headers:Zc(d),config:c,statusText:e})}function y(a){m(a.data,a.status,fa(a.headers()),a.statusText)}function n(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var K=h.defer(),B=K.promise,
	N,A,R=c.headers,Y=r(c.url,c.paramSerializer(c.params));k.pendingRequests.push(c);B.then(n,n);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(N=D(c.cache)?c.cache:D(b.cache)?b.cache:s);N&&(A=N.get(Y),z(A)?A&&E(A.then)?A.then(y,y):L(A)?m(A[1],A[0],fa(A[2]),A[3]):m(A,200,{},"OK"):N.put(Y,B));v(A)&&((A=ad(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:t)&&(R[c.xsrfHeaderName||b.xsrfHeaderName]=A),d(c.method,Y,f,l,R,c.timeout,c.withCredentials,c.responseType));return B}function r(a,
	b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=f("$http");b.paramSerializer=M(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var y=[];n(c,function(a){y.unshift(M(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){n(arguments,function(a){k[a]=function(b,c){return k(O(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){k[a]=function(b,c,d){return k(O(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=
	b;return k}]}function Lf(){return new Q.XMLHttpRequest}function Ze(){this.$get=["$browser","$window","$document",function(b,a,c){return Mf(b,Lf,b.defer,a.angular.callbacks,c[0])}]}function Mf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,y="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),y=a.type,
	g="error"===a.type?404:200);c&&c(g,y)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,r,s,y){function H(){p&&p();w&&w.abort()}function J(a,d,e,f,g){K!==t&&c.cancel(K);p=w=null;a(d,e,f,g);b.$$completeOutstandingRequest(x)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==F(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,
	function(a,b){J(k,a,d[u].data,"",b);d[u]=x})}else{var w=a();w.open(e,h,!0);n(m,function(a,b){z(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=1223===w.status?204:w.status;0===c&&(c=b?200:"file"==za(h).protocol?404:0);J(k,c,b,w.getAllResponseHeaders(),a)};e=function(){J(k,-1,null,null,"")};w.onerror=e;w.onabort=e;s&&(w.withCredentials=!0);if(y)try{w.responseType=y}catch(q){if("json"!==y)throw q;}w.send(l)}if(0<r)var K=c(H,r);else r&&
	E(r.then)&&r.then(H)}}function Ue(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,b).replace(r,a)}function h(f,h,m,r){function u(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var c;if(r&&!z(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=
	Ya(a)}c=a}return c}catch(g){d(Ha.interr(f,g))}}r=!!r;for(var p,n,q=0,K=[],B=[],N=f.length,A=[],R=[];q<N;)if(-1!=(p=f.indexOf(b,q))&&-1!=(n=f.indexOf(a,p+l)))q!==p&&A.push(g(f.substring(q,p))),q=f.substring(p+l,n),K.push(q),B.push(c(q,u)),q=n+k,R.push(A.length),A.push("");else{q!==N&&A.push(g(f.substring(q)));break}m&&1<A.length&&Ha.throwNoconcat(f);if(!h||K.length){var Y=function(a){for(var b=0,c=K.length;b<c;b++){if(r&&v(a[b]))return;A[R[b]]=a[b]}return A.join("")};return O(function(a){var b=0,c=
	K.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return Y(e)}catch(g){d(Ha.interr(f,g))}},{exp:f,expressions:K,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=Y(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,m=new RegExp(b.replace(/./g,f),"g"),r=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function Ve(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,
	h,l,k){var m=4<arguments.length,r=m?pa.call(arguments,4):[],s=a.setInterval,y=a.clearInterval,H=0,J=z(k)&&!k,u=(J?d:c).defer(),p=u.promise;l=z(l)?l:0;p.then(null,null,m?function(){e.apply(null,r)}:e);p.$$intervalId=s(function(){u.notify(H++);0<l&&H>=l&&(u.resolve(H),y(p.$$intervalId),delete f[p.$$intervalId]);J||b.$apply()},h);f[p.$$intervalId]=u;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],
	!0):!1};return e}]}function ae(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
	DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function Zb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=kb(b[a]);
	return b.join("/")}function bd(b,a){var c=za(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=aa(c.port)||Nf[c.protocol]||null}function cd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=za(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=sc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function xa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Fa(b){var a=b.indexOf("#");
	return-1==a?b:b.substr(0,a)}function yb(b){return b.replace(/(#.+)|#$/,"$1")}function $b(b){return b.substr(0,Fa(b).lastIndexOf("/")+1)}function ac(b,a){this.$$html5=!0;a=a||"";var c=$b(b);bd(b,this);this.$$parse=function(a){var b=xa(c,a);if(!M(b))throw zb("ipthprfx",a,c);cd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Nb(this.$$search),b=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=
	function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;(f=xa(b,d))!==t?(g=f,g=(f=xa(a,f))!==t?c+(xa("/",f)||f):b+g):(f=xa(c,d))!==t?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function bc(b,a){var c=$b(b);bd(b,this);this.$$parse=function(d){d=xa(b,d)||xa(c,d);var e;"#"===d.charAt(0)?(e=xa(a,d),v(e)&&(e=d)):e=this.$$html5?d:"";cd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};
	this.$$compose=function(){var c=Nb(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Fa(b)==Fa(a)?(this.$$parse(a),!0):!1}}function dd(b,a){this.$$html5=!0;bc.apply(this,arguments);var c=$b(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Fa(d)?f=d:(g=xa(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=
	function(){var c=Nb(this.$$search),e=this.$$hash?"#"+kb(this.$$hash):"";this.$$url=Zb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Ab(b){return function(){return this[b]}}function ed(b,a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();return this}}function $e(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return Va(b)?(a.enabled=b,this):D(b)?(Va(b.enabled)&&(a.enabled=
	b.enabled),Va(b.requireBase)&&(a.requireBase=b.requireBase),Va(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var r=d.url(),s;if(a.enabled){if(!m&&a.requireBase)throw zb("nobase");
	s=r.substring(0,r.indexOf("/",r.indexOf("//")+2))+(m||"/");m=e.history?ac:dd}else s=Fa(r),m=bc;k=new m(s,"#"+b);k.$$parseLinkUrl(r,r);k.$$state=d.state();var y=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=C(b.target);"a"!==ra(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=za(h.animVal).href);
	y.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});yb(k.absUrl())!=yb(r)&&d.url(k.absUrl(),!0);var H=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(H=!1,l(d,e)))});c.$$phase||c.$digest()});
	c.$watch(function(){var a=yb(d.url()),b=yb(k.absUrl()),f=d.state(),g=k.$$replace,m=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(H||m)H=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(m&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function af(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
	Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||x;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,
	arguments)}}()}}]}function Aa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ca("isecfld",a);return b}function ia(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b.window===b)throw ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ca("isecdom",a);if(b===Object)throw ca("isecobj",a);}return b}function fd(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b===Of||b===Pf||b===Qf)throw ca("isecff",
	a);}}function Rf(b,a){return"undefined"!==typeof b?b:a}function gd(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case q.Program:c=!0;n(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case q.Literal:b.constant=!0;b.toWatch=[];break;case q.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case q.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&
	b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case q.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case q.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case q.Identifier:b.constant=!1;b.toWatch=[b];break;case q.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);
	b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case q.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];n(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case q.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case q.ArrayExpression:c=!0;d=[];n(b.elements,function(b){U(b,a);c=
	c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case q.ObjectExpression:c=!0;d=[];n(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case q.ThisExpression:b.constant=!1,b.toWatch=[]}}function hd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:t}}function id(b){return b.type===q.Identifier||b.type===q.MemberExpression}function jd(b){if(1===
	b.body.length&&id(b.body[0].expression))return{type:q.AssignmentExpression,left:b.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}function kd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===q.Literal||b.body[0].expression.type===q.ArrayExpression||b.body[0].expression.type===q.ObjectExpression)}function ld(b,a){this.astBuilder=b;this.$filter=a}function md(b,a){this.astBuilder=b;this.$filter=a}function Bb(b,a,c,d){ia(b,d);a=a.split(".");for(var e,f=0;1<
	a.length;f++){e=Aa(a.shift(),d);var g=ia(b[e],d);g||(g={},b[e]=g);b=g}e=Aa(a.shift(),d);ia(b[e],d);return b[e]=c}function Cb(b){return"constructor"==b}function cc(b){return E(b.valueOf)?b.valueOf():Sf.call(b)}function bf(){var b=la(),a=la();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=cc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var l=e,g=g[0];return a.$watch(function(a){var b=
	g(a);e(b,l)||(h=d(a,t,t,[b]),l=b&&cc(b));return h},b,c,f)}for(var k=[],m=[],r=0,A=g.length;r<A;r++)k[r]=e,m[r]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!e(l,k[c])))m[c]=l,k[c]=l&&cc(l)}b&&(h=d(a,t,t,m));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;n(a,function(a){z(a)||
	(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return z(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==
	f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=a.inputs?a.inputs:[a]);return c}var m={csp:d.csp,expensiveChecks:!1},r={csp:d.csp,expensiveChecks:!0};return function(d,e,H){var n,u,p;switch(typeof d){case "string":p=d=d.trim();var q=H?a:b;n=q[p];n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),H=H?r:m,n=new dc(H),n=(new ec(n,c,H)).parse(d),n.constant?n.$$watchDelegate=l:u?n.$$watchDelegate=n.literal?h:g:n.inputs&&(n.$$watchDelegate=f),q[p]=n);return k(n,
	e);case "function":return k(d,e);default:return x}}}]}function df(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return nd(function(a){b.$evalAsync(a)},a)}]}function ef(){this.$get=["$browser","$exceptionHandler",function(b,a){return nd(function(a){b.defer(a)},a)}]}function nd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&
	c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=t;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=G("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||
	[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(D(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=
	-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?
	b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return l(e,!1)}return d&&E(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},r=function y(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof y))return new y(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};
	r.defer=function(){return new g};r.reject=function(a){var b=new g;b.reject(a);return b.promise};r.when=m;r.all=function(a){var b=new g,c=0,d=L(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return r}function of(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||
	b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function cf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++jb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=G("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&
	(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function m(){this.$id=++jb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function r(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function s(a,b){do a.$$watchersCount+=
	b;while(a=a.$parent)}function y(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function q(){}function t(){for(;K.length;)try{K.shift()()}catch(a){g(a)}e=null}function u(){null===e&&(e=l.defer(function(){p.$apply(t)}))}m.prototype={constructor:m,$new:function(a,c){var d;c=c||this;a?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=
	d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,l=g.$$watchers,k={fn:b,last:q,get:f,exp:e||a,eq:!!c};d=null;E(b)||(k.fn=x);l||(l=g.$$watchers=[]);l.unshift(k);s(this,1);return function(){0<=Wa(l,k)&&s(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;
	if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(D(e))if(Qa(e))for(f!==r&&(f=r,n=f.length=0,k++),a=e.length,n!==a&&(k++,f.length=n=a),b=0;b<a;b++)h=f[b],
	g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==s&&(f=s={},n=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(n++,f[b]=g,k++));if(n>a)for(b in k++,f)e.hasOwnProperty(b)||(n--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<b.length,k=0,m=h(a,c),r=[],s={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(D(e))if(Qa(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g=
	{},e)tc.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,m,s,n=a,y,K=[],u,v;r("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),t());d=null;do{s=!1;for(y=this;w.length;){try{v=w.shift(),v.scope.$eval(v.expression,v.locals)}catch(x){g(x)}d=null}a:do{if(k=y.$$watchers)for(m=k.length;m--;)try{if(b=k[m])if((f=b.get(y))!==(h=b.last)&&!(b.eq?ja(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))s=!0,d=b,b.last=b.eq?sa(f,null):f,b.fn(f,h===q?f:h,y),5>
	n&&(u=4-n,K[u]||(K[u]=[]),K[u].push({msg:E(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){s=!1;break a}}catch(C){g(C)}if(!(k=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(k=y.$$nextSibling);)y=y.$parent}while(y=k);if((s||w.length)&&!n--)throw p.$$phase=null,c("infdig",a,K);}while(s||w.length);for(p.$$phase=null;z.length;)try{z.shift()()}catch(D){g(D)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");
	this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();s(this,-this.$$watchersCount);for(var b in this.$$listenerCount)y(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=x;this.$on=
	this.$watch=this.$watchGroup=function(){return x};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||w.length||l.defer(function(){w.length&&p.$digest()});w.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){z.push(a)},$apply:function(a){try{return r("$apply"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),
	c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&K.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,y(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},
	k=Xa([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(r){g(r)}else d.splice(l,1),l--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=Xa([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||
	[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new m,w=p.$$asyncQueue=[],z=p.$$postDigestQueue=[],K=p.$$applyAsyncQueue=[];return p}]}function be(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?
	(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=za(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Tf(b){if("self"===b)return b;if(M(b)){if(-1<b.indexOf("***"))throw Ba("iwcard",b);b=od(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ta(b))return new RegExp("^"+b.source+"$");throw Ba("imatcher");}function pd(b){var a=[];z(b)&&n(b,function(b){a.push(Tf(b))});
	return a}function gf(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=pd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=pd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?ad(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};
	return b}var f=function(a){throw Ba("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ba("icontext",a,b);if(null===b||b===t||""===b)return b;if("string"!==typeof b)throw Ba("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===t||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof
	g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=za(e.toString()),r,s,y=!1;r=0;for(s=b.length;r<s;r++)if(d(b[r],g)){y=!0;break}if(y)for(r=0,s=a.length;r<s;r++)if(d(a[r],g)){y=!1;break}if(y)return e;throw Ba("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ba("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function ff(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&
	8>fb)throw Ba("iequirks");var d=fa(ma);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Sa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;n(ma,function(a,b){var c=F(b);d[cb("parse_as_"+c)]=function(b){return e(a,b)};d[cb("get_trusted_"+c)]=function(b){return f(a,b)};d[cb("trust_as_"+
	c)]=function(b){return g(a,b)}});return d}]}function hf(){this.$get=["$window","$document",function(b,a){var c={},d=aa((/android (\d+)/.exec(F((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var r in l)if(k=h.exec(r)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in
	l);!d||k&&m||(k=M(l.webkitTransition),m=M(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=fb)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:ab(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function kf(){this.$get=["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;L(g)?g=g.filter(function(a){return a!==
	Xb}):g===Xb&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){b.put(e,a.data);return a.data},function(a){if(!f)throw ha("tpload",e,a.status,a.statusText);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function lf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var d=ba.element(a).data("$binding");d&&
	n(d,function(d){c?(new RegExp("(^|\\s)"+od(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function mf(){this.$get=["$rootScope","$browser",
	"$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){E(f)||(k=l,l=f,f=x);var m=pa.call(arguments,3),r=z(k)&&!k,s=(r?d:c).defer(),n=s.promise,q;q=a.defer(function(){try{s.resolve(f.apply(null,m))}catch(a){s.reject(a),e(a)}finally{delete g[n.$$timeoutId]}r||b.$apply()},l);n.$$timeoutId=q;g[q]=s;return n}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function za(b){fb&&
	(X.setAttribute("href",b),b=X.href);X.setAttribute("href",b);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function ad(b){b=M(b)?za(b):b;return b.protocol===qd.protocol&&b.host===qd.host}function nf(){this.$get=oa(Q)}function rd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}
	var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===t&&(d[k]=a(g.substring(l+1))));return d}}function sf(){this.$get=rd}function Fc(b){function a(c,d){if(D(c)){var e={};n(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",sd);a("date",
	td);a("filter",Uf);a("json",Vf);a("limitTo",Wf);a("lowercase",Xf);a("number",ud);a("orderBy",vd);a("uppercase",Yf)}function Uf(){return function(b,a,c){if(!L(b)){if(null==b)return b;throw G("filter")("notarray",b);}var d;switch(fc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=Zf(a,c,d);break;default:return b}return b.filter(a)}}function Zf(b,a,c){var d=D(b)&&"$"in b;!0===a?a=ja:E(a)||(a=function(a,b){if(v(a))return!1;if(null===a||null===b)return a===
	b;var c;!(c=D(b))&&(c=D(a))&&(c=a,c=!(E(c.toString)&&c.toString!==Object.prototype.toString));if(c)return!1;a=F(""+a);b=F(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!D(e)?Ia(e,b.$,a,!1):Ia(e,b,a,c)}}function Ia(b,a,c,d,e){var f=fc(b),g=fc(a);if("string"===g&&"!"===a.charAt(0))return!Ia(b,a.substring(1),c,d);if(L(b))return b.some(function(b){return Ia(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&Ia(b[h],a,c,!0))return!0;return e?!1:Ia(b,a,c,!1)}if("object"===
	g){for(h in a)if(e=a[h],!E(e)&&!v(e)&&(f="$"===h,!Ia(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function fc(b){return null===b?"null":typeof b}function sd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){v(d)&&(d=a.CURRENCY_SYM);v(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:wd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function ud(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:wd(b,a.PATTERNS[0],a.GROUP_SEP,
	a.DECIMAL_SEP,d)}}function wd(b,a,c,d,e){if(D(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,m=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var r=h.match(/([\d\.]+)e(-?)(\d+)/);r&&"-"==r[2]&&r[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(xd)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(xd),h=g[0],g=
	g[1]||"",r=0,s=a.lgSize,n=a.gSize;if(h.length>=s+n)for(r=h.length-s,k=0;k<r;k++)0===(r-k)%n&&0!==k&&(l+=c),l+=h.charAt(k);for(k=r;k<h.length;k++)0===(h.length-k)%s&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);m.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return m.join("")}function Db(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function $(b,a,c,d){c=c||0;return function(e){e=e["get"+
	b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Db(e,a,d)}}function Eb(b,a){return function(c,d){var e=c["get"+b](),f=nb(a?"SHORT"+b:b);return d[f][e]}}function yd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function zd(b){return function(a){var c=yd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Db(a,b)}}function gc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function td(b){function a(a){var b;
	if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||
	e;M(c)&&(c=$f.test(c)?aa(c):a(c));T(c)&&(c=new Date(c));if(!ea(c)||!isFinite(c.getTime()))return c;for(;e;)(k=ag.exec(e))?(h=Xa(h,k,1),e=h.pop()):(h.push(e),e=null);var m=c.getTimezoneOffset();f&&(m=qc(f,c.getTimezoneOffset()),c=Mb(c,f,!0));n(h,function(a){l=bg[a];g+=l?l(c,b.DATETIME_FORMATS,m):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Vf(){return function(b,a){v(a)&&(a=2);return Ya(b,a)}}function Wf(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):aa(a);
	if(isNaN(a))return b;T(b)&&(b=b.toString());if(!L(b)&&!M(b))return b;c=!c||isNaN(c)?0:aa(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function vd(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===
	typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Qa(a))return a;c=L(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=!1,d=a||Sa;if(M(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,
	b){return h(d(a),d(b))},c)});return pa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ja(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return oa(b)}function Ad(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||Fb;f.$error={};f.$$success={};f.$pending=t;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){n(g,
	function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Na(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,
	a)});Wa(g,a)};Bd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Wa(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Pa);d.addClass(b,Gb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};f.$setPristine=function(){d.setClass(b,Pa,Gb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};
	f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function hc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function gb(b,a,c,d,e,f){var g=F(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=S(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&
	d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Hb(b,a){return function(c,d){var e,f;if(ea(c))return c;if(M(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,
	c.length-1));if(cg.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},n(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function hb(b,a,c,d){return function(e,f,g,h,l,k,m){function r(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}
	function s(a){return z(a)?ea(a)?a:c(a):t}Cd(e,f,g,h);gb(e,f,g,h,l,k);var n=h&&h.$options&&h.$options.timezone,q;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,q),n&&(b=Mb(b,n)),b):t});h.$formatters.push(function(a){if(a&&!ea(a))throw Ib("datefmt",a);if(r(a))return(q=a)&&n&&(q=Mb(q,n,!0)),m("date")(a,d,n);q=null;return""});if(z(g.min)||g.ngMin){var J;h.$validators.min=function(a){return!r(a)||v(J)||c(a)>=J};g.$observe("min",function(a){J=s(a);h.$validate()})}if(z(g.max)||
	g.ngMax){var u;h.$validators.max=function(a){return!r(a)||v(u)||c(a)<=u};g.$observe("max",function(a){u=s(a);h.$validate()})}}}function Cd(b,a,c,d){(d.$$hasNativeValidators=D(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?t:b})}function Dd(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw G("ngModel")("constexpr",c,d);return b(a)}return e}function ic(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=
	a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(n(a,function(a){b=b.concat(e(a))}),b):M(a)?a.split(" "):D(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||{},d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var n=l(k,
	1);h.$addClass(n)}else if(!ja(b,m)){var q=e(m),n=d(k,q),k=d(q,k),n=l(n,1),k=l(k,-1);n&&n.length&&c.addClass(g,n);k&&k.length&&c.removeClass(g,k)}}m=fa(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Bd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,
	c){b=b?"-"+vc(b,"-"):"";a(ib+b,!0===c);a(Ed+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Ed]=!(f[ib]=e.hasClass(ib));d.$setValidity=function(b,e,f){e===t?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Fd(d.$pending)&&(d.$pending=t));Va(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Gd,!0),d.$valid=d.$invalid=t,c("",null)):(a(Gd,!1),d.$valid=
	Fd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?t:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Fd(b){if(b)for(var a in b)return!1;return!0}var dg=/^\/(.+)\/([a-z]*)$/,F=function(b){return M(b)?b.toLowerCase():b},tc=Object.prototype.hasOwnProperty,nb=function(b){return M(b)?b.toUpperCase():b},fb,C,ka,pa=[].slice,Gf=[].splice,eg=[].push,qa=Object.prototype.toString,Ca=G("ng"),ba=Q.angular||(Q.angular={}),bb,jb=0;fb=V.documentMode;x.$inject=
	[];Sa.$inject=[];var L=Array.isArray,nc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,S=function(b){return M(b)?b.trim():b},od=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ab=function(){if(z(ab.isActive_))return ab.isActive_;var b=!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return ab.isActive_=b},lb=function(){if(z(lb.name_))return lb.name_;
	var b,a,c=Ka.length,d,e;for(a=0;a<c;++a)if(d=Ka[a],b=V.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return lb.name_=e},Ka=["ng-","data-ng-","ng:","x-ng-"],Wd=/[A-Z]/g,wc=!1,Ob,na=1,Za=3,$d={full:"1.4.0-rc.1",major:1,minor:4,dot:0,codeName:"sartorial-chronography"};P.expando="ng339";var sb=P.cache={},yf=1;P._data=function(b){return this.cache[b[this.expando]]||{}};var tf=/([\:\-\_]+(.))/g,uf=/^moz([A-Z])/,fg={mouseleave:"mouseout",mouseenter:"mouseover"},Rb=G("jqLite"),
	xf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Qb=/<|&#?\w+;/,vf=/<([\w:]+)/,wf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ga={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ga.optgroup=ga.option;ga.tbody=ga.tfoot=ga.colgroup=ga.caption=ga.thead;ga.th=ga.td;var La=P.prototype={ready:function(b){function a(){c||
	(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),P(Q).on("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?C(this[b]):C(this[this.length+b])},length:0,push:eg,sort:[].sort,splice:[].splice},xb={};n("multiple selected checked disabled readOnly required open".split(" "),function(b){xb[F(b)]=b});var Nc={};n("input select option textarea button form details".split(" "),function(b){Nc[b]=
	!0});var Oc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Tb,removeData:qb},function(b,a){P[a]=b});n({data:Tb,inheritedData:wb,scope:function(b){return C.data(b,"$scope")||wb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return C.data(b,"$isolateScope")||C.data(b,"$isolateScopeNoTemplate")},controller:Kc,injector:function(b){return wb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:tb,css:function(b,
	a,c){a=cb(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Za&&2!==d&&8!==d)if(d=F(a),xb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||x).specified?d:t;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?t:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(v(b)){var d=a.nodeType;return d===na||d===
	Za?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(v(a)){if(b.multiple&&"select"===ra(b)){var c=[];n(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;pb(b,!0);b.innerHTML=a},empty:Lc},function(b,a){P.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Lc&&(2==b.length&&b!==tb&&b!==Kc?a:d)===t){if(D(a)){for(e=0;e<g;e++)if(b===Tb)b(this[e],a);else for(f in a)b(this[e],
	f,a[f]);return this}e=b.$dv;g=e===t?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});n({removeData:qb,on:function a(c,d,e,f){if(z(f))throw Rb("onargs");if(Gc(c)){var g=rb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Bf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,fg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||
	h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Jc,one:function(a,c,d){a=C(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;pb(a);n(new P(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===
	na||11===d){c=new P(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;n(new P(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=C(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Ub,detach:function(a){Ub(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new P(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:vb,removeClass:ub,toggleClass:function(a,
	c,d){c&&n(c.split(" "),function(c){var f=d;v(f)&&(f=!tb(a,c));(f?vb:ub)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Sb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=rb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
	!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:x,type:g,target:a},c.type&&(e=O(e,c)),c=fa(h),f=d?[e].concat(d):[e],n(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){P.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)v(g)?(g=a(this[h],c,e,f),z(g)&&(g=C(g))):Ic(g,a(this[h],c,e,f));return z(g)?g:this};P.prototype.bind=P.prototype.on;P.prototype.unbind=P.prototype.off});Oa.prototype={put:function(a,
	c){this[Da(a,this.nextUid)]=c},get:function(a){return this[Da(a,this.nextUid)]},remove:function(a){var c=this[a=Da(a,this.nextUid)];delete this[a];return c}};var rf=[function(){this.$get=[function(){return Oa}]}],Qc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,gg=/,/,hg=/^\s*(_?)(\S+?)\1\s*$/,Pc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ea=G("$injector");$a.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw M(d)&&d||(d=a.name||Cf(a)),Ea("strictdi",d);c=a.toString().replace(Pc,
	"");c=c.match(Qc);n(c[1].split(gg),function(a){a.replace(hg,function(a,c,d){e.push(d)})})}a.$inject=e}}else L(a)?(c=a.length-1,Ma(a[c],"fn"),e=a.slice(0,c)):Ma(a,"fn",!0);return e};var ig=G("$animate"),Oe=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=x;d.chain=x;d.prototype={end:x,cancel:x,resume:x,pause:x,complete:x,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Ne=function(){var a=new Oa,c=[];this.$get=["$$AnimateRunner","$rootScope",
	function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&n(f.split(" "),function(a){a&&(k[a]=!0)});l&&n(l.split(" "),function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){n(c,function(c){var d=a.get(c);if(d){var e=Df(c.attr("class")),f="",g="";n(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});n(c,function(a){f&&vb(a,f);g&&ub(a,g)});a.remove(c)}});c.length=0})}return{enabled:x,on:x,off:x,pin:x,push:function(a,c,e,k){k&&k();e=e||{};e.from&&
	a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Me=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw ig("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$$animateQueue",
	function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g||h.parent();c(f,g,h);return a.push(f,"enter",l)},move:function(f,g,h,l){g=g||h.parent();c(f,g,h);return a.push(f,"move",l)},leave:function(c,e){return a.push(c,"leave",e,function(){c.remove()})},
	addClass:function(c,e,h){h=h||{};h.addClass=db(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=h||{};h.removeClass=db(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=l||{};l.addClass=db(l.addClass,e);l.removeClass=db(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=k||{};k.from=k.from?O(k.from,e):e;k.to=k.to?O(k.to,h):h;k.tempClasses=db(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],ha=
	G("$compile");yc.$inject=["$provide","$$sanitizeUriProvider"];var Tc=/^((?:x|data)[\:\-_])/i,Hf=G("$controller"),Rc=/^(\S+)(\s+as\s+(\w+))?$/,Xc="application/json",Yb={"Content-Type":Xc+";charset=utf-8"},Jf=/^\[|^\{(?!\{)/,Kf={"[":/]$/,"{":/}$/},If=/^\)\]\}',?\n/,Ha=ba.$interpolateMinErr=G("$interpolate");Ha.throwNoconcat=function(a){throw Ha("noconcat",a);};Ha.interr=function(a,c){return Ha("interr",a,c.toString())};var jg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Nf={http:80,https:443,ftp:21},zb=G("$location"),
	kg={$$html5:!1,$$replace:!1,absUrl:Ab("$$absUrl"),url:function(a){if(v(a))return this.$$url;var c=jg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Ab("$$protocol"),host:Ab("$$host"),port:Ab("$$port"),path:ed("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(M(a)||T(a))a=a.toString(),this.$$search=
	sc(a);else if(D(a))a=sa(a,{}),n(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw zb("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:ed("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([dd,bc,ac],function(a){a.prototype=Object.create(kg);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==ac||!this.$$html5)throw zb("nostate");this.$$state=
	v(c)?null:c;return this}});var ca=G("$parse"),Of=Function.prototype.call,Pf=Function.prototype.apply,Qf=Function.prototype.bind,Jb=la();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Jb[a]=!0});var lg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},dc=function(a){this.options=a};dc.prototype={constructor:dc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
	"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Jb[c],f=Jb[d];Jb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==
	c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,
	d)+"]":" "+d;throw ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=F(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
	text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
	this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=lg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var q=function(a,c){this.lexer=a;this.options=c};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";
	q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&
	this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=
	this.ternary();this.expect("=")&&(a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
	this.equality();this.expect("&&");)a={type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
	c;c=this.expect("+","-");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
	this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=sa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:q.MemberExpression,object:a,property:this.expression(),
	computed:!0},this.consume("]")):"."===c.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
	this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:q.Property,kind:"init"};this.peek().constant?
	c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:q.ObjectExpression,properties:a}},throwError:function(a,c){throw ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
	"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:q.Literal,value:!0},"false":{type:q.Literal,value:!1},"null":{type:q.Literal,
	value:null},undefined:{type:q.Literal,value:t},"this":{type:q.ThisExpression}}};ld.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=jd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=hd(e.body);d.stage="inputs";n(g,function(a,c){var e=
	"fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Aa,ia,fd,Rf,gd,a);this.state=
	this.stage=t;f.literal=kd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;n(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;n(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?
	"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,m,r;e=e||x;if(!g&&z(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case q.Program:n(a.body,function(c,d){k.recurse(c.expression,t,t,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,
	";"):k.return_(l)});break;case q.Literal:r=this.escape(a.value);this.assign(c,r);e(r);break;case q.UnaryExpression:this.recurse(a.argument,t,t,function(a){l=a});r=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,r);e(r);break;case q.BinaryExpression:this.recurse(a.left,t,t,function(a){h=a});this.recurse(a.right,t,t,function(a){l=a});r="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,r);e(r);break;case q.LogicalExpression:c=
	c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case q.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case q.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Aa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),
	function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Cb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case q.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,t,function(){k.if_(k.notNull(h),function(){if(a.computed)l=
	k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),r=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,r),d&&(d.computed=!0,d.name=l);else{Aa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));r=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Cb(a.property.name))r=k.ensureSafeObject(r);k.assign(c,
	r);d&&(d.computed=!1,d.name=a.property.name)}e(c)})},!!f);break;case q.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),m=[],n(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);m.push(c)}),r=l+"("+m.join(",")+")",k.assign(c,r),e(c)):(l=k.nextId(),h={},m=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);n(a.arguments,function(a){k.recurse(a,k.nextId(),t,function(a){m.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||
	k.addEnsureSafeObject(h.context),r=k.member(h.context,h.name,h.computed)+"("+m.join(",")+")"):r=l+"("+m.join(",")+")";r=k.ensureSafeObject(r);k.assign(c,r);e(c)})}));break;case q.AssignmentExpression:l=this.nextId();h={};if(!id(a.left))throw ca("lval");this.recurse(a.left,t,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));r=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,r);e(c||r)})},1);break;case q.ArrayExpression:m=
	[];n(a.elements,function(a){k.recurse(a,k.nextId(),t,function(a){m.push(a)})});r="["+m.join(",")+"]";this.assign(c,r);e(r);break;case q.ObjectExpression:m=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),t,function(c){m.push(k.escape(a.key.type===q.Identifier?a.key.name:""+a.key.value)+":"+c)})});r="{"+m.join(",")+"}";this.assign(c,r);e(r);break;case q.ThisExpression:this.assign(c,"s");e("s");break;case q.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=
	a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},
	if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
	";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
	stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(M(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(T(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
	md.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=jd(e))g=this.recurse(f);f=hd(e.body);var h;f&&(h=[],n(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];n(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;n(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
	h);f.literal=kd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,c);case q.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case q.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case q.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
	f,c);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case q.Identifier:return Aa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Cb(a.name),c,d,g.expression);case q.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Aa(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
	g.expensiveChecks,c,d,g.expression);case q.CallExpression:return h=[],n(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var n=[],q=0;q<h.length;++q)n.push(h[q](a,d,e,g));a=f.apply(t,n,g);return c?{context:t,name:t,value:a}:a}:function(a,d,e,r){var n=f(a,d,e,r),q;if(null!=n.value){ia(n.context,g.expression);fd(n.value,g.expression);q=[];for(var t=0;t<h.length;++t)q.push(ia(h[t](a,d,e,r),
	g.expression));q=ia(n.value.apply(n.context,q),g.expression)}return c?{value:q}:q};case q.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,r){var n=e(a,d,h,r);a=f(a,d,h,r);ia(n.value,g.expression);n.context[n.name]=a;return c?{value:a}:a};case q.ArrayExpression:return h=[],n(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],n=0;n<h.length;++n)g.push(h[n](a,d,e,f));return c?{value:g}:g};case q.ObjectExpression:return h=[],n(a.properties,
	function(a){h.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},n=0;n<h.length;++n)g[h[n].key]=h[n].value(a,d,e,f);return c?{value:g}:g};case q.ThisExpression:return function(a){return c?{value:a}:a};case q.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=z(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);
	d=z(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=gd(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(z(l)?l:0)-(z(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
	f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
	f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=
	a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:t,name:t,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:t;c&&ia(h,f);return d?{context:g,name:a,value:h}:h}},
	computedMember:function(a,c,d,e,f){return function(g,h,l,k){var m=a(g,h,l,k),n,s;null!=m&&(n=c(g,h,l,k),Aa(n,f),e&&1!==e&&m&&!m[n]&&(m[n]={}),s=m[n],ia(s,f));return d?{context:m,name:n,value:s}:s}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,m){h=a(h,l,k,m);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:t;(d||Cb(c))&&ia(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var ec=function(a,c,d){this.lexer=a;this.$filter=
	c;this.options=d;this.ast=new q(this.lexer);this.astCompiler=d.csp?new md(this.ast,c):new ld(this.ast,c)};ec.prototype={constructor:ec,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};la();la();var Sf=Object.prototype.valueOf,Ba=G("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=G("$compile"),X=V.createElement("a"),qd=za(Q.location.href);rd.$inject=["$document"];Fc.$inject=["$provide"];sd.$inject=["$locale"];ud.$inject=["$locale"];
	var xd=".",bg={yyyy:$("FullYear",4),yy:$("FullYear",2,0,!0),y:$("FullYear",1),MMMM:Eb("Month"),MMM:Eb("Month",!0),MM:$("Month",2,1),M:$("Month",1,1),dd:$("Date",2),d:$("Date",1),HH:$("Hours",2),H:$("Hours",1),hh:$("Hours",2,-12),h:$("Hours",1,-12),mm:$("Minutes",2),m:$("Minutes",1),ss:$("Seconds",2),s:$("Seconds",1),sss:$("Milliseconds",3),EEEE:Eb("Day"),EEE:Eb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Db(Math[0<a?"floor":
	"ceil"](a/60),2)+Db(Math.abs(a%60),2))},ww:zd(2),w:zd(1),G:gc,GG:gc,GGG:gc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},ag=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,$f=/^\-?\d+$/;td.$inject=["$locale"];var Xf=oa(F),Yf=oa(nb);vd.$inject=["$parse"];var ce=oa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===qa.call(c.prop("href"))?
	"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),ob={};n(xb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=wa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});ob[e]=function(){return{restrict:"A",priority:100,link:f}}}});n(Oc,function(a,c){ob[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(dg))){f.$set("ngPattern",
	new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});n(["src","srcset","href"],function(a){var c=wa("ng-"+a);ob[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===qa.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),fb&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Fb={$addControl:x,$$renameControl:function(a,c){a.$name=c},$removeControl:x,$setValidity:x,
	$setDirty:x,$setPristine:x,$setSubmitted:x};Ad.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Hd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Ad,compile:function(d,e){d.addClass(Pa).addClass(ib);var f=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,k){if(!("action"in e)){var m=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",m,!1);d.on("$destroy",
	function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var n=k.$$parentForm;f&&(Bb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Bb(a,k.$name,t,k.$name),n.$$renameControl(k,c),Bb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){n.$removeControl(k);f&&Bb(a,e[f],t,k.$name);O(k,Fb)})}}}}}]},de=Hd(),qe=Hd(!0),cg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,mg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
	ng=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,og=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Id=/^(\d{4})-(\d{2})-(\d{2})$/,Jd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,jc=/^(\d{4})-W(\d\d)$/,Kd=/^(\d{4})-(\d\d)$/,Ld=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Md={text:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e)},date:hb("date",Id,Hb(Id,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":hb("datetimelocal",Jd,Hb(Jd,"yyyy MM dd HH mm ss sss".split(" ")),
	"yyyy-MM-ddTHH:mm:ss.sss"),time:hb("time",Ld,Hb(Ld,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:hb("week",jc,function(a,c){if(ea(a))return a;if(M(a)){jc.lastIndex=0;var d=jc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=yd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:hb("month",Kd,Hb(Kd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Cd(a,c,d,e);gb(a,c,d,e,f,g);e.$$parserName=
	"number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:og.test(a)?parseFloat(a):t});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!T(a))throw Ib("numfmt",a);a=a.toString()}return a});if(z(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||v(h)||a>=h};d.$observe("min",function(a){z(a)&&!T(a)&&(a=parseFloat(a,10));h=T(a)&&!isNaN(a)?a:t;e.$validate()})}if(z(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||v(l)||a<=l};d.$observe("max",function(a){z(a)&&
	!T(a)&&(a=parseFloat(a,10));l=T(a)&&!isNaN(a)?a:t;e.$validate()})}},url:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||mg.test(d)}},email:function(a,c,d,e,f,g){gb(a,c,d,e,f,g);hc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||ng.test(d)}},radio:function(a,c,d,e){v(d.name)&&c.attr("name",++jb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=
	function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Dd(l,a,"ngTrueValue",d.ngTrueValue,!0),m=Dd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ja(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:x,button:x,submit:x,reset:x,file:x},zc=["$browser",
	"$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Md[F(h.type)]||Md.text)(f,g,h,l[0],c,a,d,e)}}}}],pg=/^(true|false|\d+)$/,Ie=function(){return{restrict:"A",priority:100,compile:function(a,c){return pg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ie=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);
	return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===t?"":a})}}}}],ke=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===t?"":a})}}}}],je=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),
	h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],He=oa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),le=ic("",!0),ne=ic("Odd",0),me=ic("Even",1),oe=Ja({compile:function(a,c){c.$set("ngCloak",t);a.removeClass("ng-cloak")}}),pe=[function(){return{restrict:"A",scope:!0,controller:"@",
	priority:500}}],Ec={},qg={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=wa("ng-"+a);Ec[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};qg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var se=["$animate",function(a){return{multiElement:!0,
	transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=mb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],te=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",
	controller:ba.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,n,q,t){var v=0,u,p,w,x=function(){p&&(p.remove(),p=null);u&&(u.$destroy(),u=null);w&&(d.leave(w).then(function(){p=null}),p=w,w=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!z(k)||k&&!f.$eval(k)||c()},n=++v;e?(a(e,!0).then(function(a){if(n===v){var c=f.$new();q.template=a;a=t(c,function(a){x();d.enter(a,null,g).then(h)});u=c;w=a;u.$emit("$includeContentLoaded",
	e);f.$eval(l)}},function(){n===v&&(x(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(x(),q.template=null)})}}}}],Ke=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Hc(f.template,V).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ue=Ja({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),
	Ge=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?S(f):f;e.$parsers.push(function(a){if(!v(a)){var c=[];a&&n(a.split(h),function(a){a&&c.push(g?S(a):a)});return c}});e.$formatters.push(function(a){return L(a)?a.join(f):t});e.$isEmpty=function(a){return!a||!a.length}}}},ib="ng-valid",Ed="ng-invalid",Pa="ng-pristine",Gb="ng-dirty",Gd="ng-pending",Ib=new G("ngModel"),rg=["$scope","$exceptionHandler","$attrs",
	"$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=t;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=t;this.$name=m(d.name||"",!1)(a);var r=f(d.ngModel),s=r.assign,q=r,H=s,
	J=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");q=function(a){var d=r(a);E(d)&&(d=c(a));return d};H=function(a,c){E(r(a))?g(a,{$$$p:p.$modelValue}):s(a,p.$modelValue)}}else if(!r.assign)throw Ib("nonassign",d.ngModel,ta(e));};this.$render=x;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};var w=e.inheritedData("$formController")||Fb,C=0;Bd({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,
	c){delete a[c]},parentForm:w,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Gb);g.addClass(e,Pa)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Pa);g.addClass(e,Gb);w.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(J);p.$viewValue=
	p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!T(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:t,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;n(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(n(p.$asyncValidators,function(a,
	c){g(c,null)}),!1)}function f(){var d=[],e=!0;n(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!E(k.then))throw Ib("$asyncValidators",k);g(h,t);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},x):h(!0)}function g(a,c){l===C&&p.$setValidity(a,c)}function h(a){l===C&&d(a)}C++;var l=C;(function(){var a=p.$$parserName||"parse";if(u===t)g(a,null);else return u||(n(p.$validators,function(a,c){g(c,null)}),n(p.$asyncValidators,function(a,c){g(c,
	null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(J);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(u=v(c)?t:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),v(c)){u=!1;break}T(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=q(a));var e=p.$modelValue,
	f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:t,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){H(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=
	function(c){var d=0,e=p.$options;e&&z(e.debounce)&&(e=e.debounce,T(e)?d=e:T(e[c])?d=e[c]:T(e["default"])&&(d=e["default"]));h.cancel(J);d?J=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=q(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;u=t;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=p.$$lastCommittedViewValue=f,p.$render(),
	p.$$runValidators(c,f,x))}return c})}],Fe=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:rg,priority:1,compile:function(c){c.addClass(Pa).addClass("ng-untouched").addClass(ib);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Fb;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&
	h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],sg=/(\s+|^)default(\s+|$)/,Je=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=sa(a.$eval(c.ngModelOptions));this.$options.updateOn!==t?(this.$options.updateOnDefault=!1,this.$options.updateOn=S(this.$options.updateOn.replace(sg,function(){d.$options.updateOnDefault=
	!0;return" "}))):this.$options.updateOnDefault=!0}]}},ve=Ja({terminal:!0,priority:1E3}),tg=G("ngOptions"),ug=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,De=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}
	var m=a.match(ug);if(!m)throw tg("iexp",a,ta(d));var n=m[5]||m[7],q=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:n);var v=a&&c(a)||d,x=t&&c(t),u=t?function(a,c){return x(e,c)}:function(a){return Da(a)},p=c(m[2]||m[1]),w=c(m[3]||""),z=c(m[4]||""),C=c(m[8]),B={},N=q?function(a,c){B[q]=c;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:t,getWatchables:c(C,function(a){var c=[];a=a||[];Object.keys(a).forEach(function(d){var f=N(a[d],d);d=u(a[d],f);c.push(d);m[2]&&(d=p(e,f),c.push(d));
	m[4]&&(f=z(e,f),c.push(f))});return c}),getOptions:function(){var a=[],c={},d=C(e)||[];Object.keys(d).forEach(function(g){if("$"!==g.charAt(0)){var h=N(d[g],g),m=v(e,h);g=u(m,h);var n=p(e,h),r=w(e,h),h=z(e,h),m=new f(g,m,n,r,h);a.push(m);c[g]=m}});return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[u(a,N(a))]},getViewValueFromOption:function(a){return t?ba.copy(a.viewValue):a.viewValue}}}}}var e=V.createElement("option"),f=V.createElement("optgroup");return{restrict:"A",terminal:!0,
	require:["select","?ngModel"],link:function(c,h,l,k){function m(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function r(a,c,d,e){c&&F(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function q(a){for(var c;a;)c=a.nextSibling,Ub(a),a=c}function t(a){var c=p&&p[0],d=N&&N[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function v(){var a=A&&u.readValue();
	A=D.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=t(d);A.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=r(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=r(g.groupElement,g.currentOptionElement,"option",e),m(a,k),g.currentOptionElement=k.nextSibling):(k=r(h[0],d,"option",e),m(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){q(c[a].currentOptionElement)});q(d);x.$render();if(!x.$isEmpty(a)){var g=
	u.readValue();if(D.trackBy&&!ja(a,g)||a!==g)x.$setViewValue(g),x.$render()}}var x=k[1];if(x){var u=k[0];k=l.multiple;for(var p,w=0,z=h.children(),K=z.length;w<K;w++)if(""===z[w].value){p=z.eq(w);break}var B=!!p,N=C(e.cloneNode(!1));N.val("?");var A,D=d(l.ngOptions,h,c);u.writeValue=function(a){var c=A.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(N.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||
	B?(N.remove(),B||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(B||p.remove(),h.prepend(N),h.val("?"),N.prop("selected",!0),N.attr("selected",!0))};u.readValue=function(){var a=A.selectValueMap[h.val()];return a&&!a.disabled?(B||p.remove(),N.remove(),A.getViewValueFromOption(a)):null};k&&(x.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){A.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=A.getOptionFromViewValue(a))&&!a.disabled&&
	(a.element.selected=!0)})},u.readValue=function(){var a=h.val()||[],c=[];n(a,function(a){a=A.selectValueMap[a];a.disabled||c.push(A.getViewValueFromOption(a))});return c});B?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=C(e.cloneNode(!1));v();c.$watchCollection(D.getWatchables,v);D.trackBy&&c.$watch(l.ngModel,function(){x.$render()},!0)}}}}],we=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var m=l.count,
	r=l.$attr.when&&h.attr(l.$attr.when),q=l.offset||0,t=g.$eval(r)||{},z={},C=c.startSymbol(),u=c.endSymbol(),p=C+m+"-"+q+u,w=ba.noop,D;n(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+F(d[2]),t[d]=h.attr(l.$attr[c]))});n(t,function(a,d){z[d]=c(a.replace(e,p))});g.$watch(m,function(c){var e=parseFloat(c),f=isNaN(e);f||e in t||(e=a.pluralCat(e-q));e===D||f&&T(D)&&isNaN(D)||(w(),f=z[e],v(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+r),w=x,k()):w=g.$watch(f,k),D=e)})}}}],xe=
	["$parse","$animate",function(a,c){var d=G("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=V.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);
	var m=k[1],r=k[2],q=k[3],v=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var x=k[3]||k[1],z=k[2];if(q&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw d("badident",q);var u,p,w,D,E={$id:Da};v?u=a(v):(w=function(a,c){return Da(c)},D=function(a){return a});return function(a,f,g,k,m){u&&(p=function(c,d,e){z&&(E[z]=c);E[x]=d;E.$index=e;return u(a,E)});
	var v=la();a.$watchCollection(r,function(g){var k,r,u=f[0],y,A=la(),E,K,M,G,L,F,O;q&&(a[q]=g);if(Qa(g))L=g,r=p||w;else for(O in r=p||D,L=[],g)g.hasOwnProperty(O)&&"$"!==O.charAt(0)&&L.push(O);E=L.length;O=Array(E);for(k=0;k<E;k++)if(K=g===L?k:L[k],M=g[K],G=r(K,M,k),v[G])F=v[G],delete v[G],A[G]=F,O[k]=F;else{if(A[G])throw n(O,function(a){a&&a.scope&&(v[a.id]=a)}),d("dupes",h,G,M);O[k]={id:G,scope:t,clone:t};A[G]=!0}for(y in v){F=v[y];G=mb(F.clone);c.leave(G);if(G[0].parentNode)for(k=0,r=G.length;k<
	r;k++)G[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<E;k++)if(K=g===L?k:L[k],M=g[K],F=O[k],F.scope){y=u;do y=y.nextSibling;while(y&&y.$$NG_REMOVED);F.clone[0]!=y&&c.move(mb(F.clone),null,C(u));u=F.clone[F.clone.length-1];e(F.scope,k,x,M,z,K,E)}else m(function(a,d){F.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,C(u));u=f;F.clone=a;A[F.id]=F;e(F.scope,k,x,M,z,K,E)});v=A})}}}}],ye=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?
	"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],re=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],ze=Ja(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ae=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,
	d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var q=mb(h[d].clone);k[d].$destroy();(l[d]=a.leave(q)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&n(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=V.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],
	Be=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ce=Ja({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ee=Ja({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw G("ngTransclude")("orphan",ta(c));f(function(a){c.empty();
	c.append(a)})}}),ee=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],vg={$setViewValue:x,$render:x},wg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Oa;e.ngModelCtrl=vg;e.unknownOption=C(V.createElement("option"));e.renderUnknownOption=function(c){c="? "+Da(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=x});e.removeUnknownOption=
	function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):v(c)&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a,c){Na(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===
	a&&(e.emptyOption=t)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],fe=function(){return{restrict:"E",require:["select","?ngModel"],controller:wg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});if(d.multiple){g.readValue=function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=
	new Oa(a);n(c.find("option"),function(a){a.selected=z(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||ja(h,f.$viewValue)||(h=fa(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},he=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(d,e){if(v(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=
	k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],ge=oa({restrict:"E",terminal:!1}),Bc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,
	c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Ac=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){M(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw G("ngPattern")("noregexp",g,a,ta(c));f=a||t;e.$validate()});e.$validators.pattern=function(a){return e.$isEmpty(a)||v(f)||f.test(a)}}}}},Dc=function(){return{restrict:"A",require:"?ngModel",link:function(a,
	c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=aa(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Cc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=aa(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};Q.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(Xd(),Zd(ba),
	C(V).ready(function(){Td(V,uc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-animate-anchor{position:absolute;}</style>');
	//# sourceMappingURL=angular.min.js.map
	
	
	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.angular

/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./es": 42,
		"./pt": 43
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
	webpackContext.id = 19;


/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	// moment.js locale configuration
	// locale : spanish (es)
	// author : Julio Napurí : https://github.com/julionc
	
	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === "object") {
	        module.exports = factory(require("../moment")); // Node
	    } else {
	        factory((typeof global !== "undefined" ? global : this).moment); // node or other global
	    }
	})(function (moment) {
	    var monthsShortDot = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
	        monthsShort = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
	
	    return moment.defineLocale("es", {
	        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
	        monthsShort: (function (_monthsShort) {
	            var _monthsShortWrapper = function monthsShort(_x, _x2) {
	                return _monthsShort.apply(this, arguments);
	            };
	
	            _monthsShortWrapper.toString = function () {
	                return _monthsShort.toString();
	            };
	
	            return _monthsShortWrapper;
	        })(function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        }),
	        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
	        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
	        weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
	        longDateFormat: {
	            LT: "H:mm",
	            LTS: "LT:ss",
	            L: "DD/MM/YYYY",
	            LL: "D [de] MMMM [de] YYYY",
	            LLL: "D [de] MMMM [de] YYYY LT",
	            LLLL: "dddd, D [de] MMMM [de] YYYY LT"
	        },
	        calendar: {
	            sameDay: function sameDay() {
	                return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
	            },
	            nextDay: function nextDay() {
	                return "[mañana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
	            },
	            nextWeek: function nextWeek() {
	                return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
	            },
	            lastDay: function lastDay() {
	                return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
	            },
	            lastWeek: function lastWeek() {
	                return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
	            },
	            sameElse: "L"
	        },
	        relativeTime: {
	            future: "en %s",
	            past: "hace %s",
	            s: "unos segundos",
	            m: "un minuto",
	            mm: "%d minutos",
	            h: "una hora",
	            hh: "%d horas",
	            d: "un día",
	            dd: "%d días",
	            M: "un mes",
	            MM: "%d meses",
	            y: "un año",
	            yy: "%d años"
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: "%dº",
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";
	
	// moment.js locale configuration
	// locale : portuguese (pt)
	// author : Jefferson : https://github.com/jalex79
	
	(function (factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	    } else if (typeof exports === "object") {
	        module.exports = factory(require("../moment")); // Node
	    } else {
	        factory((typeof global !== "undefined" ? global : this).moment); // node or other global
	    }
	})(function (moment) {
	    return moment.defineLocale("pt", {
	        months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
	        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
	        weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"),
	        weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
	        weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"),
	        longDateFormat: {
	            LT: "HH:mm",
	            LTS: "LT:ss",
	            L: "DD/MM/YYYY",
	            LL: "D [de] MMMM [de] YYYY",
	            LLL: "D [de] MMMM [de] YYYY LT",
	            LLLL: "dddd, D [de] MMMM [de] YYYY LT"
	        },
	        calendar: {
	            sameDay: "[Hoje às] LT",
	            nextDay: "[Amanhã às] LT",
	            nextWeek: "dddd [às] LT",
	            lastDay: "[Ontem às] LT",
	            lastWeek: function lastWeek() {
	                return this.day() === 0 || this.day() === 6 ? "[Último] dddd [às] LT" : // Saturday + Sunday
	                "[Última] dddd [às] LT"; // Monday - Friday
	            },
	            sameElse: "L"
	        },
	        relativeTime: {
	            future: "em %s",
	            past: "há %s",
	            s: "segundos",
	            m: "um minuto",
	            mm: "%d minutos",
	            h: "uma hora",
	            hh: "%d horas",
	            d: "um dia",
	            dd: "%d dias",
	            M: "um mês",
	            MM: "%d meses",
	            y: "um ano",
	            yy: "%d anos"
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal: "%dº",
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });
	});

/***/ }
/******/ ])
//# sourceMappingURL=libs.js.map