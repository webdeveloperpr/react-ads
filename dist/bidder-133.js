(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{64:function(t,e,r){"use strict";r.r(e),r.d(e,"spec",(function(){return h}));var i=r(277),n=r(288),o=r(278),d=r(279),a=r(280);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var h={code:"brightcom",supportedMediaTypes:[d.b],isBidRequestValid:function(t){if("brightcom"!==t.bidder||void 0===t.params)return!1;if(void 0===t.params.publisherId)return!1;return!0},buildRequests:function(t,e){try{var r="";e&&e.refererInfo&&(r=e.refererInfo.referer);var o=[],d=i.getBidIdParameter("publisherId",t[0].params);i._each(t,(function(t){var e=t.mediaTypes&&t.mediaTypes.banner&&t.mediaTypes.banner.sizes||t.sizes,r=(e=(e=i.isArray(e)&&i.isArray(e[0])?e:[e]).filter((function(t){return i.isArray(t)}))).map((function(t){return{w:parseInt(t[0],10),h:parseInt(t[1],10)}})),n=document.getElementById(t.adUnitCode),d=r.reduce((function(t,e){return e.h*e.w<t.h*t.w?e:t})),a=function(t){return!function(){try{return i.getWindowSelf()!==i.getWindowTop()}catch(t){return!0}}()&&null!==t}(n)?function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.w,o=r.h;return"visible"===i.getWindowTop().document.visibilityState?b(t,e,{w:n,h:o}):0}(n,i.getWindowTop(),d):"na",u=isNaN(a)?a:Math.round(a),h={id:t.bidId,banner:{format:r,ext:{viewability:u}},tagid:String(t.adUnitCode)},s=i.getBidIdParameter("bidFloor",t.params);s&&(h.bidfloor=s),o.push(h)}));var u={id:i.getUniqueIdentifierStr(),imp:o,site:{domain:n.c(r).host,page:r,publisher:{id:d}},device:{devicetype:/(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent)?1:/(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent)?3:2,w:screen.width,h:screen.height},tmax:a.b.getConfig("bidderTimeout")};return{method:"POST",url:"https://brightcombid.marphezis.com/hb",data:JSON.stringify(u),options:{contentType:"text/plain",withCredentials:!1}}}catch(r){i.logError(r,{bidReqs:t,bidderRequest:e})}},interpretResponse:function(t){if(!t.body||"object"!=u(t.body))return i.logWarn("Brightcom server returned empty/non-json response: "+JSON.stringify(t.body)),[];var e=t.body,r=e.id,n=e.seatbid;try{var o=[];return r&&n&&n.length>0&&n[0].bid&&n[0].bid.length>0&&n[0].bid.map((function(t){o.push({requestId:t.impid,cpm:parseFloat(t.price),width:parseInt(t.w),height:parseInt(t.h),creativeId:t.crid||t.id,currency:"USD",netRevenue:!0,mediaType:d.b,ad:s(t),ttl:60})})),o}catch(t){i.logError(t,{id:r,seatbid:n})}},getUserSyncs:function(t,e,r){return[]}};function s(t){var e=t.adm;return"nurl"in t&&(e+=i.createTrackPixelHtml(t.nurl)),e}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.w,i=e.h,n=t.getBoundingClientRect(),o=n.width,d=n.height,a=n.left,u=n.top,h=n.right,s=n.bottom;return(0===o||0===d)&&r&&i&&(o=r,d=i,h=a+r,s=u+i),{width:o,height:d,left:a,top:u,right:h,bottom:s}}function c(t){for(var e={left:t[0].left,right:t[0].right,top:t[0].top,bottom:t[0].bottom},r=1;r<t.length;++r){if(e.left=Math.max(e.left,t[r].left),e.right=Math.min(e.right,t[r].right),e.left>=e.right)return null;if(e.top=Math.max(e.top,t[r].top),e.bottom=Math.min(e.bottom,t[r].bottom),e.top>=e.bottom)return null}return e.width=e.right-e.left,e.height=e.bottom-e.top,e}function b(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=r.w,n=r.h,o=p(t,{w:i,h:n}),d=c([{left:0,top:0,right:e.innerWidth,bottom:e.innerHeight},o]);return null!==d?d.width*d.height/(o.width*o.height)*100:0}Object(o.registerBidder)(h)}}]);