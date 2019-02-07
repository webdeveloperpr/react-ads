"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.getBidsFn=void 0;var _Queue=_interopRequireDefault(require("../../lib/Queue")),_JobQueue=_interopRequireDefault(require("../../lib/JobQueue")),_video=_interopRequireDefault(require("./video")),_display=_interopRequireDefault(require("./display"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var getBidsFn=function(a,b){return function(c,d){for(var e=new _Queue.default,f=new _Queue.default,g=[],h=[];!c.isEmpty;){var i=c.dequeue();"video"===i.data.type?f.enqueue(i):"display"===i.data.type&&(i.data.slot&&g.push(i.data.slot),i.data.id&&h.push(i.data.id),e.enqueue(i))}Promise.all([(0,_video.default)(a,b,f),(0,_display.default)(a,b,e)]).then(function(){return d({slots:g,ids:h})})}};exports.getBidsFn=getBidsFn;var bidManager=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.refresh,c=a.chunkSize,d=void 0===c?5:c,e=a.bidProviders,f=void 0===e?[]:e,g=a.bidTimeout,h=void 0===g?1e3:g,i=a.refreshDelay,j=void 0===i?100:i,k=a.onBiddersReady,l=void 0===k?function(){}:k,m={},n=new _JobQueue.default({canProcess:!1,delay:10,chunkSize:d,processFn:getBidsFn(f,h)});n.on("jobEnd",function(a){var b=a.ids,c=[],d=[];if(b.forEach(function(a){var b=m[a];b.status="success",b.slot&&(c.push(b.slot),d.push(a),delete m[a])}),!!c.length){var e=window.pbjs||{},f=window.googletag||{};f.cmd.push(function(){e.que.push(function(){e.setTargetingForGPTAsync(d),o.add({priority:1,data:{slots:c}})})})}});var o=new _JobQueue.default({canProcess:!1,delay:10,chunkSize:d,processFn:function f(a,c){for(;!a.isEmpty;){var d=a.dequeue(),e=d.data.slots;e&&b(e)}c()}}),p=new _JobQueue.default({canProcess:!1,delay:j,chunkSize:d,processFn:getBidsFn(f,h)});p.on("jobEnd",function(a){if(a&&a.slots){var b=a.slots;b.length&&o.add({priority:1,data:{slots:b}})}}),l(p.start),l(n.start),l(o.start);return{refresh:function f(a){var c=a.data.id;if("prefetch"===a.data.type)return m[c]={slot:null,status:"fetching"},a.data.type="display",n.add(a);if("video"===a.data.type)return p.add(a);if("display"===a.data.type){var g=m[c];if(!g)return p.add(a);if("fetching"===g.status)return void(g.slot=a.data.slot);if("success"===g.status){g.slot=a.data.slot;var d=window.pbjs||{},e=window.googletag||{};e.cmd.push(function(){d.que.push(function(){delete m[c],d.setTargetingForGPTAsync([c]),b([a.data.slot])})})}}}}},_default=bidManager;exports.default=_default;