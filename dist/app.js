webpackJsonp([2],[function(t,e,n){n(8),n(9),t.exports=n(11)},,,,,,,,function(t,e,n){t.exports=n.p+"index.html"},function(){"use strict";!function(){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{enumerable:!1,configurable:!0,writable:!0,value:function(t){var e=function(){return t.apply(this,arguments)};return e.toString=function(){return t.toString()},e}(function(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,n=Object(this),r=n.length>>>0,i=arguments[1],o=0;r>o;o++)if(e=n[o],t.call(i,e,o,n))return e;return void 0})}),Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{enumerable:!1,configurable:!0,writable:!0,value:function(t){var e=function(){return t.apply(this,arguments)};return e.toString=function(){return t.toString()},e}(function(t){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var e,n=Object(this),r=n.length>>>0,i=arguments[1],o=0;r>o;o++)if(e=n[o],t.call(i,e,o,n))return o;return-1})}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(t,e){return e=e||0,this.lastIndexOf(t,e)===e}})}()},,function(t,e,n){(function(t){n(17),n(18),n(19),n(20),n(21);!function(){"use strict";var e=t.module("hsp",["ngRoute","ngAnimate","ngMaterial","ngMdIcons","hsp.common","hsp.auth","hsp.navigation","hsp.google-client","hsp.schedule"]);t.module("hsp.auth").constant("CLIENT_ID","<!-- @secret client_id -->"),t.module("hsp.common").constant("BASE_URL","https://home-school.azurewebsites.net"),e.config(["$locationProvider","$routeProvider",function(t,e){t.html5Mode(!0),e.when("/",{templateUrl:"components/schedule/schedule.html",controller:"ScheduleCtrl as schedule",resolve:{token:["hsAuthService",function(t){return t.afterLogin()}]}}).when("/profile",{templateUrl:"components/auth/profile.html",controller:"ProfileCtrl"}).when("/event-detail",{templateUrl:"components/schedule/event-detail.html",controller:"EventDetailCtrl"}).when("/login",{templateUrl:"components/auth/login.html",controller:"LoginCtrl"}).otherwise({redirectTo:"/"})}]),e.config(["$httpProvider",function(t){t.interceptors.push("calendarHttpInterceptor")}]),e.config(["$mdThemingProvider",function(t){t.theme("default")}]),e.run(["hsAuthService","$location","$log",function(t,e,n){t.loadGoogleAPI().then(function(){t.afterLogin().then(function(){},function(t){n.warn("not signed in at startup: "+t),e.url("/login?dst="+encodeURIComponent(e.url()))})},function(t){n.warn("google api not loaded: "+t)})}])}()}).call(e,n(14))},,,,,,function(t,e,n){(function(t){"use strict";t.module("hsp.common",[]),t.module("hsp.common").constant("MathUtil",n(35)),t.module("hsp.common").constant("Util",n(36)),t.module("hsp.common").constant("Events",n(37)),t.module("hsp.common").directive("onFileChange",n(38))}).call(e,n(14))},function(t,e,n){(function(t){"use strict";n(32);t.module("hsp.auth",["ngResource","ngMaterial"]);t.module("hsp.auth").constant("authEvents",{AUTHENTICATION_CHANGE:"AUTHENTICATION_CHANGE"}),t.module("hsp.auth").factory("hsAuthService",n(39)),t.module("hsp.auth").controller("HeaderCtrl",n(40)),t.module("hsp.auth").controller("LoginCtrl",n(41)),t.module("hsp.auth").controller("ProfileCtrl",n(42)),t.module("hsp.auth").factory("Profile",n(43))}).call(e,n(14))},function(t,e,n){(function(t){"use strict";t.module("hsp.navigation",["ngResource","ngMaterial","hsp.auth"]),t.module("hsp.navigation").controller("SideNavCtrl",n(44))}).call(e,n(14))},function(t,e,n){(function(t){"use strict";var e=function(t){return t&&t.__esModule?t:{"default":t}};n(33);var r=e(n(45)),i=e(n(46));t.module("hsp.google-client",["hsp.auth"]),t.module("hsp.google-client").constant("DRIVE_BASE_URI",r.BASE_URI),t.module("hsp.google-client").factory("hsDriveService",r.hsDriveService),t.module("hsp.google-client").controller("DriveSelectionCtrl",n(47)),t.module("hsp.google-client").constant("CALENDAR_BASE_URI",i.BASE_URI),t.module("hsp.google-client").factory("hsCalendarService",i.hsCalendarService),t.module("hsp.google-client").factory("calendarHttpInterceptor",i.calendarHttpInterceptor)}).call(e,n(14))},function(t,e,n){(function(t){"use strict";n(34),t.module("hsp.schedule",["hsp.auth","hsp.google-client"]),t.module("hsp.schedule").controller("EventDetailCtrl",n(48)),t.module("hsp.schedule").filter("hasEvents",n(49)),t.module("hsp.schedule").controller("ScheduleCtrl",n(50)),t.module("hsp.schedule").factory("ScheduleModel",n(51))}).call(e,n(14))},,,,,,,,,,,function(t,e,n){function r(t){return n(i(t))}function i(t){return o[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var o={"./login.html":55,"./profile.html":56};r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=32},function(t,e,n){function r(t){return n(i(t))}function i(t){return o[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var o={"./drive-selection-dialog.html":57};r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=33},function(t,e,n){function r(t){return n(i(t))}function i(t){return o[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var o={"./event-detail.html":58,"./schedule.html":59};r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id=34},function(t){"use strict";t.exports={ceiling:function(t,e){return Math.ceil(t/e)*e},floor:function(t,e){return Math.floor(t/e)*e}}},function(t,e,n){(function(e){"use strict";t.exports=function(){return{safeRead:function(t,n){var r=n.split("."),i=t,o=0;for(o=0;o<r.length;o++){if(e.isUndefined(i)||null===i||!i.hasOwnProperty(r[o]))return void 0;i=i[r[o]]}return i},safeSet:function(t,n,r){if(e.isObject(t)){var i=n.split("."),o=t,a=0;for(a=0;a<i.length;a++){if(!(a<i.length-1))return void(o[i[a]]=r);if(e.isUndefined(o[i[a]]))o[i[a]]={};else if(!e.isObject(o[i[a]]))throw"Cannot set on non-object path segment: "+i[a];o=o[i[a]]}}}}}()}).call(e,n(14))},function(t){"use strict";t.exports=function(){return{CHANGE_DAY:"CHANGE_DAY"}}()},function(t,e,n){(function(e){"use strict";t.exports=function(){return["$log",function(t){return{restrict:"A",link:function(n,r,i){var o=n.$eval(i.onFileChange);e.isFunction(o)?r.bind("change",function(t){o.apply(void 0,[r[0].files,t])}):t.warn("onFileChange doesn't evaluate to a function")}}}]}()}).call(e,n(14))},function(t){"use strict";t.exports=function(){return["$window","$document","$location","$rootScope","$q","$log","$http","$mdDialog","CLIENT_ID","authEvents","Profile",function(t,e,n,r,i,o,a,c,s,l,d){function u(){o.info("google plus API loaded"),_=!0,delete t.onAPILoad,C.resolve(!0)}function h(t){var e=!1;t&&!E?(E=!0,e=!0):!t&&E&&(E=!1,e=!0),e&&r.$broadcast(l.AUTHENTICATION_CHANGE,E)}function m(t){delete t["g-oauth-window"],o.debug("google plus API auth callback: "+JSON.stringify(t)),t.status.signed_in?(H=new Date,H.setMilliseconds(H.getMilliseconds()+t.expires_in),o.info("successful login; access token expires at "+H.toLocaleTimeString()),a.get("https://www.googleapis.com/plus/v1/people/me",{headers:{Authorization:"Bearer "+t.access_token}}).success(function(e){y=d.get({userId:e.id},function(n){p(!0,t,e,n)},function(n){404==n.status?c.show({templateUrl:"components/auth/profile.html",controller:"ProfileCtrl",locals:{employee:"User Name"}}).then(function(n){p(!0,t,e,n)},function(){p(!1,t,e)}):p(!1,t,e)})}).error(function(e){o.error("Error getting profile information"),p(!1,t,e)}),V&&(V.resolve(b),V=null)):(o.error("authentication error: "+t.error),p(!1,t),V&&(V.reject(t.error),V=null))}function p(t,e,n,r){b=e.access_token,z=n,y=r,x&&(t?x.resolve(b):x.reject(e?e.error:"failed to gather login data"),x=null),h(t)}function f(){t.onAPILoad=u,t.onAuthResult=m;var n=e[0].createElement("script"),r=e[0].getElementsByTagName("script")[0];return n.type="text/javascript",n.async=!0,n.setAttribute("parsetags","explicit"),n.src="https://apis.google.com/js/client:plusone.js?onload=onAPILoad",r.parentNode.insertBefore(n,r),C=i.defer(),V=i.defer(),C.promise}function v(){_&&gapi.auth.signIn(w)}function g(){return b?i.when(b):C.promise.then(function(){return x||(x=i.defer()),x.promise},function(t){return i.reject(t)})}function M(){_&&(gapi.auth.signOut(),b=H=null,n.path("/login"))}function $(){return b&&H>new Date?i.when(b):(b=H=null,V?V.promise:i.reject("no token available, please login"))}var b=null,z=null,y=null,E=!1,H=null,_=!1,w={clientid:s,cookiepolicy:"single_host_origin",callback:"onAuthResult",scope:"https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/drive.file"},C=null,V=null,x=null;return{login:v,afterLogin:g,logout:M,loadGoogleAPI:f,getToken:$,getProfile:function(){return z},getUserData:function(){return y}}}]}()},function(t){"use strict";t.exports=function(){return["$scope","$rootScope","$log","$mdSidenav","ScheduleModel","Events","hsAuthService","authEvents",function(t,e,n,r,i,o,a,c){var s="MMMM Do";t.currentDay=i.getStart().format(s),t.signed_in=!1,t.$on(c.AUTHENTICATION_CHANGE,function(e,n){t.signed_in=n,t.profile=a.getProfile(),t.profileImgSrc=t.profile?t.profile.image.url.replace(/sz=\d+/,"sz=36"):null}),t.logout=a.logout,t.toggleNav=function(){r("left").toggle()},t.changeDay=function(n){e.$broadcast(o.CHANGE_DAY,n),t.currentDay=i.getStart().format(s)}}]}()},function(t){"use strict";t.exports=function(){return["$scope","$location","$log","hsAuthService",function(t,e,n,r){function i(){var t=e.search();e.url(t.hasOwnProperty("dst")?decodeURIComponent(t.dst):"/")}function o(t){n.error("login failed: "+t),r.afterLogin().then(i,o)}r.loadGoogleAPI().then(function(){gapi.signin.render("google-login"),r.afterLogin().then(i,o)},function(){n.error("Google API not loaded")})}]}()},function(t){"use strict";t.exports=function(){return["$scope","$log","$mdDialog","hsAuthService",function(t,e,n){t.getData=function(){e.log("get data")},t.closeDialog=function(){var t={id:"112678812700708466620",name:"Ellaroo",calendarIDs:["jander.me_vhfj574k3cb837tgqe6vrv6e0g@group.calendar.google.com"],subjects:[{id:"abc",summary:"Spanish",bgcolor:"#33691e"},{id:"def",summary:"Writing",bgcolor:"#ff5722"},{id:"ghi",summary:"History",bgcolor:"#004d40"},{id:"jkl",summary:"Math",bgcolor:"#0091ea"}]};n.hide(t)}}]}()},function(t){"use strict";t.exports=function(){return["$resource","BASE_URL",function(t,e){return t(e+"/profiles/:userId",{userId:"@userId"},{charge:{method:"POST",params:{charge:!0}}})}]}()},function(t){"use strict";t.exports=function(){return["$scope","$rootScope","$log","$mdSidenav","ScheduleModel","Events","hsAuthService","authEvents","hsDriveService",function(t,e,n,r,i,o,a,c,s){t.signed_in=!1,t.$on(c.AUTHENTICATION_CHANGE,function(e,n){t.signed_in=n,t.profile=a.getProfile(),t.profileImgSrc=t.profile?t.profile.image.url.replace(/sz=\d+/,"sz=80"):null}),t.logout=a.logout,t.toggleNav=function(){r("left").toggle()},t.testDrive=function(){s.getFileList().then(function(e){t.files=e.result.items})}}]}()},function(t,e,n){(function(t){"use strict";var n="https://www.googleapis.com/drive/v2";e.BASE_URI=n;var r=["$http","$q","$log","$window","$mdDialog","hsAuthService","DRIVE_BASE_URI",function(e,n,r,i,o,a){function c(){var t=n.defer();return i.gapi.client.request({path:"drive/v2/files",params:{query:name}}).then(function(e){t.resolve(e)},function(e){t.reject(e)}),t.promise}function s(t){return o.show({templateUrl:"components/google-client/drive-selection-dialog.html",controller:"DriveSelectionCtrl",controllerAs:"ctrl",bindToController:!0,locals:{evt:t}})}function l(t,e,n,r){var i={title:e,mimeType:t,properties:[{key:"hsp-event-id",value:n}]},o=btoa(r);return p+"Content-Type: application/json\r\n\r\n"+JSON.stringify(i)+p+"Content-Type: "+t+"\r\nContent-Transfer-Encoding: base64\r\n\r\n"+o+f}function d(t){var e,r="{\\rtf1\\ansi\\ansicpg1252\\cocoartf1348\\cocoasubrtf170 {\\fonttbl\\f0\\fswiss\\fcharset0 Helvetica;} {\\colortbl;\\red255\\green255\\blue255;}\\margl1440\\margr1440\\vieww10800\\viewh8400\\viewkind0\\pard\\tx720\\tx1440\\tx2160\\tx2880\\tx3600\\tx4320\\tx5040\\tx5760\\tx6480\\tx7200\\tx7920\\tx8640\\pardirnatural\\f0\\fs24 \\cf0 }";if(t.blank)e=n.when(l("application/rtf",t.title||t.evt.resource.summary||"Blank",t.evt.resource.id,r));else{var o=n.defer(),c=new FileReader;c.onload=function(){o.resolve(l(t.fileHandle.type||"application/octet-stream",t.title||t.fileHandle.name,t.evt.resource.id,c.result))},e=o.promise,c.readAsBinaryString(t.fileHandle)}var s=n.defer();return e.then(function(e){i.gapi.client.request({method:"POST",path:"upload/drive/v2/files",params:{uploadType:"multipart",convert:!0},headers:{"Content-Type":'multipart/mixed; boundary="'+m+'"'},body:e}).then(function(e){var n=a.getUserData().colleagues||[],r=[{email:t.evt.studentEmail,role:"writer"}].concat(n.map(function(t){return{email:t.email,role:"writer"}}));h(e.result,r).then(function(t){s.resolve(t)},function(t){s.reject(t)})},function(t){s.reject(t)})},function(t){s.reject(t)}),s.promise}function u(t,e,r){r=r||"writer";var o=n.defer();return i.gapi.client.request({method:"POST",path:"drive/v2/files/"+t+"/permissions",params:{sendNotificationEmails:!1},body:{role:r,type:"user",value:e}}).then(function(t){o.resolve(t.result)},function(t){o.reject(t)}),o.promise}function h(e,r){function i(t){e.permissions.push(t),r.shift(),r.length>0?u(e.id,r[0].email,r[0].role).then(i,o):a.resolve(e)}function o(t){a.reject(t)}var a=n.defer();return t.isArray(e.permissions)||(e.permissions=[]),t.forEach(e.permissions,function(t){var e=r.find(function(e){return e.email.toLowerCase()==t.emailAddress.toLowerCase()&&e.role===t.role});e&&r.splice(r.indexOf(e),1)}),r.length>0?u(e.id,r[0].email,r[0].role).then(i,o):a.resolve(e),a.promise}var m="-------314159265358979323846",p="\r\n--"+m+"\r\n",f="\r\n--"+m+"--";return{getFileList:c,insertFile:d,ensurePermissions:h,chooseGoogleDriveDoc:s}}];e.hsDriveService=r,Object.defineProperty(e,"__esModule",{value:!0})}).call(e,n(14))},function(t,e,n){(function(t,n){"use strict";var r="https://www.googleapis.com/calendar/v3";e.BASE_URI=r;var i=["$http","$q","$log","hsAuthService","CALENDAR_BASE_URI",function(e,r,i,o,a){function c(){return e.get(a+"/users/me/calendarList").success(function(){}).error(function(){}).then(function(t){return t.data},function(t){return r.reject(t)})}function s(i,o,c){return e.get(a+"/calendars/"+i+"/events",{params:{timeMin:o||t().startOf("day").format(),timeMax:c||t().endOf("day").format(),singleEvents:!0}}).success(function(t){n.forEach(t.items,function(t){t.calendarId=i,m[t.id]=t}),t.calendarId=i}).error(function(){}).then(function(t){return t.data},function(t){return r.reject(t)})}function l(t){return n.isUndefined(t)?null:void 0!==m[t]?m[t]:null}function d(t,n){return e({method:"GET",url:a+"/calendars/"+n+"/events/"+t}).then(function(t){var e=t.data;return e.calendarId=n,m[e.id]=e,e},function(t){return i.error(t),r.reject(t)})}function u(t,n,o){return e({method:"GET",url:a+"/calendars/"+t.calendarId+"/events/"+t.id+"/instances",params:{timeMin:n.format(),timeMax:o.format(),maxResults:1}}).then(function(e){return e.data.items.length?(e.data.items[0].calendarId=t.calendarId,e.data.items[0]):r.reject("No event instances returned")},function(t){return i.error(t),r.reject(t)})}function h(t,i,o,c,s){var l,h=t;if(n.isString(h)){if(void 0===m[h])return r.reject("Cached event with id "+h+" not found");h=m[h]}return l=r.when(h),h.recurrence&&!o?l=u(h,c,s):h.recurringEventId&&o&&(l=d(h.recurringEventId,h.calendarId)),l.then(function(t){return l=t,e({url:a+"/calendars/"+t.calendarId+"/events/"+t.id,method:"PATCH",headers:{"If-Match":t.etag},params:{supportsAttachments:i.hasOwnProperty("attachments")},data:i}).success(function(e){n.extend(l,e),void 0!==m[t.id]&&(m[t.id]=t)}).then(function(){return l},function(t){return r.reject(t)})})}var m={};return{getCalendarList:c,getEventList:s,getEvent:l,patchEvent:h}}];e.hsCalendarService=i;var o=["$injector","CALENDAR_BASE_URI","$log","$q",function(t,e,r,i){var o;return{request:function(a){return o||(o=t.get("hsAuthService")),a.url.startsWith(e)?o.getToken().then(function(t){return n.extend(a.headers,{Authorization:"Bearer "+t}),a},function(t){return r.error("Error getting token: "+t),i.reject(t)}):a}}}];e.calendarHttpInterceptor=o,Object.defineProperty(e,"__esModule",{value:!0})}).call(e,n(10),n(14))},function(t){"use strict";t.exports=function(){return["$scope","$location","$q","$log","$mdDialog","hsDriveService","hsAuthService",function(t,e,n,r,i,o,a){var c=this;c.newFile={id:null,evt:c.evt,blank:!0},c.loading=!0,c.currentTab="existing",o.getFileList().then(function(t){c.files=t.result.items,c.loading=!1}),this.onTabSelected=function(t){c.currentTab=t},this.onFileChange=function(t){c.newFile.blank=!1,c.newFile.fileHandle=t[0]},this.closeDialog=function(t){var e=a.getUserData().colleagues||[],n=[{email:c.evt.studentEmail,role:"writer"}].concat(e.map(function(t){return{email:t.email,role:"writer"}}));o.ensurePermissions(t,n).then(function(t){i.hide(t)},function(t){var e="setting permissions failed";t.body&&t.body.error&&(e=t.body.error.message),r.error("Unable to set permissions for selected file: "+e)})},this.createFile=function(){o.insertFile(c.newFile).then(function(t){i.hide(t)},function(t){i.cancel(t)})},this.cancelDialog=function(){i.cancel()}}]}()},function(t,e,n){(function(e){"use strict";t.exports=function(){return["$scope","$location","$q","$mdDialog","ScheduleModel","hsAuthService","hsCalendarService","hsDriveService","Util",function(t,n,r,i,o,a,c,s,l){function d(t){var n=c.getEvent(t.resource.recurringEventId),r=l.safeRead(n||t.resource,"extendedProperties.private.subjectId");return e.isDefined(r)&&(t.subject=h.subjects.find(function(t){return t.id===r})),t}function u(t,e){null!==p&&t.indexOf("subjectId")>=0?(l.safeSet(p,t,e),v=!0):(l.safeSet(m,t,e),f=!0)}var h,m={extendedProperties:{"private":{}}},p=null,f=!1,v=!1;a.afterLogin().then(function(){h=a.getUserData(),t.subjects=h.subjects,t.evt=d(o.getActiveEventViewState()),t.attachments=e.copy(t.evt.resource.attachments),t.evt.resource.recurringEventId&&(p=e.copy(m))}),t.onSubjectChange=function(){u("extendedProperties.private.subjectId",t.evt.subject?t.evt.subject.id:null)},t.onSummaryChange=function(){u("summary",t.evt.resource.summary)},t.onDescriptionChange=function(){u("description",t.evt.resource.description)},t.selectGoogleDoc=function(){s.chooseGoogleDriveDoc(t.evt).then(function(n){if(n){var r=t.evt.resource.attachments||[];r.find(function(t){t.fileId==n.id})||r.push({fileId:n.id,fileUrl:n.alternateLink,iconLink:n.iconLink,mimeType:n.mimeType,title:n.title}),u("attachments",r),t.attachments=e.copy(r),t.evtForm.$setDirty()}})},t.toggleCompletion=o.toggleCompletion.apply(null,[t.evt]),t.toggleComplete=o.toggleCompletion,t.ok=function(){var e=r.when(!1),i=[],a=t.evt;(f||v)&&t.evtForm.$valid&&(f&&i.push(o.patchEvent(a,m,!1)),v&&i.push(o.patchEvent(a,p,!0)),e=r.all(i)),e.then(function(){n.url("/")})},t.cancel=function(){n.url("/")}}]}()}).call(e,n(14))},function(t){"use strict";t.exports=function(){return function(t){return t.suppressEvents?t.filter(function(t){return t.isTimeAxis}):t}}},function(t,e,n){(function(e,n){"use strict";t.exports=function(){return["$scope","$log","$q","$timeout","$location","$mdDialog","Events","ScheduleModel","Profile","Util","MathUtil","hsAuthService","hsCalendarService",function(t,r,i,o,a,c,s,l,d,u,h,m){function p(r){var i=1439,o=0,a=0,c=15,s=25,d=e().startOf("day"),u=t.studentEventLists.slice(0),p=u.find(function(t){return t.isTimeAxis});for(p||(p={isTimeAxis:!0,student:{}},u.unshift(p)),p.summary=l.getStart().format("dddd"),p.student.name=l.getStart().format("M/D"),n.forEach(r,function(t,e){var r=u.find(function(t){return t.student.userId===e});if(!r){var a=m.getUserData(),c=a.students?a.students.find(function(t){return t.userId===e}):a;u.push({student:c,events:[],isStudentList:a.students?!1:!0})}n.forEach(t,function(t){i=Math.min(i,t.startMinutes),o=Math.max(o,t.endMinutes)})}),i=h.floor(i,4*c),o=h.ceiling(o,4*c),t.scheduleTotalBlocks=Math.round(o-i)/c*s+"px",o>i?(f=i,v=o):(i=f,o=v),n.forEach(u,function(t){t.isTimeAxis||(t.events=[],n.forEach(r[t.student.userId],function(e){e.blockOffset=Math.round(h.floor(e.startMinutes-i,c)/c)*s+"px",e.duration=h.floor(e.endMinutes-e.startMinutes,c)/c*s+"px",i=Math.min(i,e.startMinutes),o=Math.max(o,e.endMinutes),t.events.push(e)}))}),d.minutes(i),p.events=[];o>i;)p.events.push({duration:4*s+"px",blockOffset:a*s+"px",resource:{summary:d.format("ha")}}),a+=4,i+=4*c,d.add(4*c,"minutes");return u}var f=480,v=1020;this.taskMode=!0,t.login=m.login,t.animateForward=!1,t.studentEventLists=[],t.$on(s.CHANGE_DAY,function(e,n){l.changeDay(n),t.animateForward=n>0,t.changingDay=!0,o(function(){t.studentEventLists.suppressEvents=!0;var e=new Date;l.fetchStudentEvents().then(p).then(function(n){var r=(new Date).getTime()-e.getTime();o(function(){t.studentEventLists=n,t.changingDay=!1},Math.max(0,500-r),!0)})},0,!0)}),t.getData=function(){m.afterLogin().then(function(){l.fetchStudentEvents().then(p).then(function(e){t.studentEventLists=e,2==e.length&&(t.activeStudent=e[1],t.activeStudent.active=!0)},function(t){r.error(t)})})},t.setActiveList=function(e){e&&e.isTimeAxis||(n.forEach(t.studentEventLists,function(t){t.active=t===e}),t.activeStudent=e)},t.openEvent=function(t){l.setActiveEvent(t),a.url("/event-detail")},t.toggleComplete=l.toggleCompletion}]}()}).call(e,n(10),n(14))},function(t,e,n){(function(e,n){"use strict";t.exports=function(){return["$q","$log","hsAuthService","hsCalendarService","Util",function(t,r,i,o,a){function c(){return m?t.when(m):o.getCalendarList().then(function(t){return m=t},function(e){return r.error(e),t.reject(e)})}function s(t){var e=a.safeRead(t,"extendedProperties.private.subjectId");return i.getUserData().subjects.find(function(t){return t.id===e})}function l(t,o){var c=e(t.start.dateTime),l=e(t.end.dateTime);return r.log("creating "+t.summary+" event"),{day:c.dayOfYear(),start:c,end:l,startMinutes:60*c.hours()+c.minutes(),endMinutes:60*l.hours()+l.minutes(),fmtTime:c.format("hh:mma"),subject:s(t),completion:a.safeRead(t,"extendedProperties.private.completion"),resource:t,editable:n.isArray(i.getUserData().students),studentUserId:o.userId,studentEmail:o.email}}function d(e,n,r){return e.updating=!0,o.patchEvent(e.resource,n,r,f,v).then(function(t){return e.resource=t,e.updating=!1,e},function(n){return e.updating=!1,t.reject(n)})}function u(t){return t?d(t,{extendedProperties:{"private":{completion:a.safeRead(t.resource,"extendedProperties.private.completion")?null:e().format()}}},!1).then(function(e){return t.completion=a.safeRead(e.resource,"extendedProperties.private.completion"),t}):void 0}function h(){return c().then(function(e){var r=t.defer(),a={},c=0,s=i.getUserData();return n.forEach(s.students||[s],function(i){a[i.userId]=[];var s=[];n.forEach(i.calendarIDs,function(t){var n=e.items.find(function(e){return e.id===t});n&&s.push(o.getEventList(n.id,f.format(),v.format()))}),s.length&&(c++,t.all(s).then(function(t){r.notify(i.name+" data retrieved"),c--,n.forEach(t,function(t){n.forEach(t.items,function(t){a[i.userId].push(l(t,i))})}),0===c&&r.resolve(a)},function(t){r.reject("Error fetching events for "+i.name+": "+t)}))}),r.promise})}var m=null,p=null,f=e().startOf("day"),v=e().endOf("day");return{fetchStudentEvents:h,changeDay:function(t){f.add("days",t),v.add("days",t)},setActiveEvent:function(t){p=t},patchEvent:d,toggleCompletion:u,getActiveEventViewState:function(){return p},getStart:function(){return f},getEnd:function(){return v}}}]}()}).call(e,n(10),n(14))},,,,function(t,e,n){t.exports=n.p+"components/auth/login.html"},function(t,e,n){t.exports=n.p+"components/auth/profile.html"},function(t,e,n){t.exports=n.p+"components/google-client/drive-selection-dialog.html"},function(t,e,n){t.exports=n.p+"components/schedule/event-detail.html"},function(t,e,n){t.exports=n.p+"components/schedule/schedule.html"}]);