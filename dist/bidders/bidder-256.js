(window.webpackJsonpreact_ads=window.webpackJsonpreact_ads||[]).push([[256],{243:function(r,e,n){"use strict";n.r(e),n.d(e,"ADAPTER_VERSION",(function(){return d})),n.d(e,"spec",(function(){return p}));var t=n(278),a=n(277),i=n(279),o=n(288);function s(r){return function(r){if(Array.isArray(r)){for(var e=0,n=new Array(r.length);e<r.length;e++)n[e]=r[e];return n}}(r)||function(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var d="1",u=[i.b],p={code:"tpmn",supportedMediaTypes:u,isBidRequestValid:function(r){return"params"in r&&"inventoryId"in r.params&&"publisherId"in r.params&&!isNaN(Number(r.params.inventoryId))&&r.params.inventoryId>0&&void 0!==r.mediaTypes.banner.sizes},buildRequests:function(r,e){if(0===r.length)return[];return[{method:"POST",url:"https://ad.tpmn.co.kr/prebidhb.tpmn",data:{bids:s(r.map(b)),site:c(e.refererInfo)}}]},interpretResponse:function(r,e){return Array.isArray(r.body)?r.body:[]}};function c(r){var e=Object(o.c)(r.referer),n={domain:e.hostname,page:e.protocol+"://"+e.hostname+e.pathname};self===top&&document.referrer&&(n.ref=document.referrer);var t=document.getElementsByTagName("meta").keywords;return t&&t.content&&(n.keywords=t.content),n}function m(r){var e={};return e.width=parseInt(r[0],10),e.height=parseInt(r[1],10),e}function f(r){return e=a.deepAccess(r,"mediaTypes.banner.sizes")||r.sizes,Array.isArray(e[0])?e.map((function(r){return m(r)})):[m(e)];var e}function b(r){var e={};return e.sizes=f(r),e.inventoryId=r.params.inventoryId,e.publisherId=r.params.publisherId,e.bidId=r.bidId,e.adUnitCode=r.adUnitCode,e.auctionId=r.auctionId,e}Object(t.registerBidder)(p)}}]);