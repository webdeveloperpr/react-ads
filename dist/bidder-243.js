(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{224:function(e,r,t){"use strict";t.r(r),t.d(r,"_getUrlVars",(function(){return c})),t.d(r,"spec",(function(){return p}));var n=t(277),i=t(278);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=["USD","JPY"];function s(e){var r=window.encodeURIComponent(e);return r=r.replace(/'/g,"%27")}function c(e){for(var r,t={},n=e.slice(e.indexOf("?")+1).split("&"),i=0;i<n.length;i++)t[(r=n[i].split("="))[0]]=r[1];return t}var p={code:"smms",supportedMediaTypes:["banner","native"],isBidRequestValid:function(e){var r=!!e.params.placementId;return r&&e.params.hasOwnProperty("currency")&&-1===o.indexOf(e.params.currency)&&(n.logError("Invalid currency type, we support only JPY and USD!"),r=!1),r},buildRequests:function(e,r){var t,i=[];r&&r.refererInfo&&(t=r.refererInfo);var o="undefined"!=typeof geparams&&"object"==("undefined"==typeof geparams?"undefined":a(geparams))&&geparams?geparams:{};return e.forEach((function(e,r){var a="https://bidder.mediams.mb.softbank.jp/api/v1/prebid/banner",c={placementid:e.params.placementId,cur:e.params.hasOwnProperty("currency")?e.params.currency:"JPY",ua:navigator.userAgent,adtk:s(o.lat?"0":"1"),loc:t&&t.referer?t.referer:"",topframe:window.parent==window.self?1:0,sw:screen&&screen.width,sh:screen&&screen.height,cb:Math.floor(99999999999*Math.random()),tpaf:1,cks:1,requestid:e.bidId,referer:t&&t.referer?t.referer:""};e.hasOwnProperty("nativeParams")&&(a="https://bidder.mediams.mb.softbank.jp/api/v1/prebid/native",c.tkf=1,c.ad_track="1",c.apiv="1.1.0"),i.push({method:"GET",url:a,data:n.parseQueryStringParameters(c)})})),i},interpretResponse:function(e,r){var t=c(r.data),n=e.body||{},i=[];if(n.hasOwnProperty(t.placementid)){var a=n[t.placementid],o={requestId:a.requestid,cpm:a.price,creativeId:a.creativeId,currency:a.cur,netRevenue:!0,ttl:700};a.hasOwnProperty("title")?(o.mediaType="native",o.native={title:a.title,body:a.description,cta:a.cta,sponsoredBy:a.advertiser,clickUrl:s(a.landingURL),impressionTrackers:a.trackings},a.screenshots&&(o.native.image={url:a.screenshots.url,height:a.screenshots.height,width:a.screenshots.width}),a.icon&&(o.native.icon={url:a.icon.url,height:a.icon.height,width:a.icon.width})):(o.ad=a.adm,o.width=a.width,o.height=a.height),i.push(o)}return i},getUserSyncs:function(e,r){var t=[];return t.push({type:"image",url:"https://bidder.mediams.mb.softbank.jp/api/v1/cookie/gen"}),t},onTimeout:function(e){},onBidWon:function(e){},onSetTargeting:function(e){}};Object(i.registerBidder)(p)}}]);