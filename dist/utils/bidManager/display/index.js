"use strict";var _timedPromise=_interopRequireWildcard(require("../../timedPromise"));Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)if(Object.prototype.hasOwnProperty.call(a,c)){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(a,c):{};d.get||d.set?Object.defineProperty(b,c,d):b[c]=a[c]}return b.default=a,b}function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var processDisplay=function(a,b,c){return new Promise(function(d){var e={};if(c.isEmpty)return d();for(;!c.isEmpty;){var f=c.dequeue().data.bids;f&&Object.entries(f).forEach(function(a){var b=_slicedToArray(a,2),c=b[0],d=b[1];e[c]||(e[c]=[]),e[c].push(d)})}var g=[a,Object.keys(e)].some(function(a){return 0===a.length});return g?d():void(0,_timedPromise.default)(a.map(function(a){return a._fetchDisplayBids(e[a.name])}),b).then(function(b){b.forEach(function(b,c){b.status===_timedPromise.status.fulfilled&&(a[c].onBidWon(b.data),a[c].handleResponse(b.data)),b.status===_timedPromise.status.rejected&&a[c].onTimeout(b.err)})}).catch(function(a){return console.log("error",a)}).finally(function(){d()})})},_default=processDisplay;exports.default=_default;