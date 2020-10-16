!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).gojek={})}(this,(function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function n(e,n){var t,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e],o=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var t,o;function r(){var e=window;return e.AnalyticsModule?t.ANDROID:e.webkit&&e.webkit.messageHandlers&&e.webkit.messageHandlers.AnalyticsModule?t.IOS:t.UNKNOWN}!function(e){e.IOS="iOS",e.ANDROID="Android",e.UNKNOWN="unknown"}(t||(t={})),e.getGojekAppInfo=function(){return e=this,i=void 0,s=function(){return n(this,(function(e){return[2,new Promise((function(e){!function(e){o=e;var n=JSON.stringify({module:"AppInfoModule",method:"getAppVersion",callback:"window.gojek.setAppVersion('$DATA')"}),i=window;switch(r()){case t.ANDROID:i.AppInfoModule.getAppVersion(n);break;case t.IOS:i.webkit.messageHandlers.AppInfoModule.postMessage(n);break;default:throw"Unexpected method getGoJekAppInfo for module AppInfoModule"}}({onComplete:function(n){var t={platform:r(),appVersion:n.data.appVersion,sdkVersion:"0.1.0"};e(t)}})}))]}))},new((a=Promise)||(a=Promise))((function(n,t){function o(e){try{u(s.next(e))}catch(e){t(e)}}function r(e){try{u(s.throw(e))}catch(e){t(e)}}function u(e){e.done?n(e.value):new a((function(n){n(e.value)})).then(o,r)}u((s=s.apply(e,i||[])).next())}));var e,i,a,s},e.sendEvent=function(e,n){var o={module:"AnalyticsModule",method:"track",data:{eventName:e,eventData:n}},i=JSON.stringify(o),a=window;switch(r()){case t.ANDROID:a.AnalyticsModule.track(i);break;case t.IOS:a.webkit.messageHandlers.AnalyticsModule.postMessage(i);break;default:throw"Unsupported OS, unexpected method sendEvent for AnalyticsModule"}},e.setAppVersion=function(e){o&&o.onComplete(JSON.parse(e))},Object.defineProperty(e,"__esModule",{value:!0})}));