(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{244:function(e,i,r){"use strict";r.r(i),r.d(i,"spec",(function(){return o}));var t=r(277),n=r(278),s=r(304),a=r(279),d=r(282),o={code:"tribeos",supportedMediaTypes:[a.b],isBidRequestValid:function(e){return!t.isEmpty(e.params.placementId)||(t.logError("TRIBEOS: ","placementId is required, please contact tribeOS for placementId. Bid details: ",JSON.stringify(e)),!1)},buildRequests:function(e){for(var i=[],r=0;r<e.length;r++)i.push(this.buidRTBRequest(e[r]));return i},buidRTBRequest:function(e){var i=e.params.placementId,r=e.params.bidfloor,n=e.params.placementCode,s=e.mediaTypes.banner.sizes[0][0],a=e.mediaTypes.banner.sizes[0][1],d={id:t.getUniqueIdentifierStr(),imp:[{id:e.bidId,banner:{w:s,h:a},tagid:n,bidfloor:r}],site:{domain:window.location.host,page:window.location.href,publisher:{id:i}},device:{language:navigator.language||navigator.browserLanguage||navigator.userLanguage||navigator.systemLanguage,w:s,h:a,js:1,ua:navigator.userAgent}};e.gdprConsent&&(d.regs={ext:{gdpr:e.gdprConsent.gdprApplies?1:0}},d.user={ext:{consent:e.gdprConsent.consentString}}),d.bidId=e.bidId;var o="https://bidder-api-us-east.tribeos.io/prebid/"+i+"/requests";return t.isEmpty(e.params.endpointUrl)||(o=e.params.endpointUrl+i+"/requests"),{method:"POST",url:o,data:JSON.stringify(d),options:{withCredentials:!0,contentType:"application/json"}}},interpretResponse:function(e,i){var r=e.body;if(t.logInfo("TRIBEOS: ","response body: ",JSON.stringify(e)),!r||!r.id)return[];var n=[];return r.seatbid[0].bid.forEach((function(e){var a,o="";if(i){var p=s.a(1);if(o=i.placementCode,i.status=d.STATUS.GOOD,0===(a=parseFloat(e.price))){var u=s.a(2);return u.bidderCode="tribeos",n.push(u),t.logInfo("TRIBEOS: ","response price is zero. Response data: ",JSON.stringify(i)),n}p.placementCode=o,p.size=i.sizes,p.creativeId=e.crid,p.bidderCode="tribeos",p.cpm=a,p.ad=e.adm,p.width=parseInt(e.w),p.height=parseInt(e.h),p.currency=r.cur,p.netRevenue=!0,p.requestId=e.impid,p.ttl=180,t.logInfo("TRIBEOS: ","bid response data: ",JSON.stringify(p)),t.logInfo("TRIBEOS: ","bid request data: ",JSON.stringify(i)),n.push(p)}})),n}};Object(n.registerBidder)(o)}}]);