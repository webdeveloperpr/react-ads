(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{285:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var r=t(282),i=t(281);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=t(289),u=t(277),c=r.EVENTS,p=c.AUCTION_INIT,l=c.AUCTION_END,d=c.REQUEST_BIDS,f=c.BID_REQUESTED,y=c.BID_TIMEOUT,g=c.BID_RESPONSE,b=c.NO_BID,v=c.BID_WON,T=c.BID_ADJUSTMENT,_=c.BIDDER_DONE,E=c.SET_TARGETING,h=c.AD_RENDER_FAILED,m=c.ADD_AD_UNITS;function I(e){var n,t=e.url,r=e.analyticsType,c=e.global,I=e.handler,w=[],A=0,O=!0;return function(){if(O){for(var e=0;e<w.length;e++)w[e]();w.push=function(e){e()},O=!1}u.logMessage("event count sent to ".concat(c,": ").concat(A))}(),{track:function(e){var n=e.eventType,t=e.args;"bundle"===this.getAdapterType()&&window[c](I,n,t);"endpoint"===this.getAdapterType()&&D.apply(void 0,arguments)},enqueue:S,enableAnalytics:N,disableAnalytics:function(){u._each(n,(function(e,n){s.off(n,e)})),this.enableAnalytics=this._oldEnable?this._oldEnable:N},getAdapterType:function(){return r},getGlobal:function(){return c},getHandler:function(){return I},getUrl:function(){return t}};function D(e){var n=e.eventType,r=e.args,o=e.callback;Object(i.a)(t,o,JSON.stringify({eventType:n,args:r}))}function S(e){var n=e.eventType,t=e.args,r=this;c&&window[c]&&n&&t?this.track({eventType:n,args:t}):w.push((function(){A++,r.track({eventType:n,args:t})}))}function N(e){var t,r=this,i=this;"object"!==a(e)||"object"!==a(e.options)||(void 0===e.options.sampling||Math.random()<parseFloat(e.options.sampling))?(s.getEvents().forEach((function(e){if(e){var n=e.eventType,t=e.args;n!==y&&S.call(i,{eventType:n,args:t})}})),o(t={},d,(function(e){return r.enqueue({eventType:d,args:e})})),o(t,f,(function(e){return r.enqueue({eventType:f,args:e})})),o(t,g,(function(e){return r.enqueue({eventType:g,args:e})})),o(t,b,(function(e){return r.enqueue({eventType:b,args:e})})),o(t,y,(function(e){return r.enqueue({eventType:y,args:e})})),o(t,v,(function(e){return r.enqueue({eventType:v,args:e})})),o(t,T,(function(e){return r.enqueue({eventType:T,args:e})})),o(t,_,(function(e){return r.enqueue({eventType:_,args:e})})),o(t,E,(function(e){return r.enqueue({eventType:E,args:e})})),o(t,l,(function(e){return r.enqueue({eventType:l,args:e})})),o(t,h,(function(e){return r.enqueue({eventType:h,args:e})})),o(t,m,(function(e){return r.enqueue({eventType:m,args:e})})),o(t,p,(function(n){n.config="object"===a(e)&&e.options||{},r.enqueue({eventType:p,args:n})})),n=t,u._each(n,(function(e,n){s.on(n,e)}))):u.logMessage('Analytics adapter for "'.concat(c,'" disabled by sampling'));this._oldEnable=this.enableAnalytics,this.enableAnalytics=function(){return u.logMessage('Analytics adapter for "'.concat(c,'" already enabled, unnecessary call to `enableAnalytics`.'))}}}},43:function(e,n,t){"use strict";t.r(n);var r=t(281),i=t(285),o=t(290),a=t(282),s=t(277);function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c="https://adxpremium.services/graphql",p=a.EVENTS,l=p.AUCTION_INIT,d=p.BID_REQUESTED,f=p.BID_TIMEOUT,y=p.BID_RESPONSE,g=p.BID_WON,b=p.AUCTION_END,v={publisher_id:null,auction_id:null,referer:null,screen_resolution:window.screen.width+"x"+window.screen.height,device_type:null,geo:null,events:[]},T=u(Object(i.a)({url:c,analyticsType:"endpoint"}),{track:function(e){var n=e.eventType,t=e.args;switch(n){case l:!function(e){v.auction_id=e.auctionId,v.publisher_id=T.initOptions.pubId;try{v.referer=e.bidderRequests[0].refererInfo.referer.split("?")[0]}catch(e){s.logWarn("Could not parse referer, error details:",e.message)}v.device_type=function(){if(/ipad|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(navigator.userAgent.toLowerCase()))return"tablet";if(/iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(navigator.userAgent.toLowerCase()))return"mobile";return"desktop"}()}(t);break;case d:!function(e){var n={type:"REQUEST",bidder_code:e.bidderCode,event_timestamp:e.start,bid_gpt_codes:{}};e.bids.forEach((function(e){n.bid_gpt_codes[e.adUnitCode]=e.sizes})),v.events.push(n)}(t);break;case y:!function(e){var n={type:"RESPONSE",bidder_code:e.bidderCode,event_timestamp:e.responseTimestamp,size:e.size,gpt_code:e.adUnitCode,currency:e.currency,creative_id:e.creativeId,time_to_respond:e.timeToRespond,cpm:e.cpm,is_winning:!1};E[e.requestId]=v.events.push(n)-1}(t);break;case g:!function(e){var n=E[e.requestId];v.events[n].is_winning=!0}(t);break;case f:break;case b:setTimeout((function(){!function(e){try{var n=btoa(JSON.stringify(e)),t='mutation {createEvent(input: {event: {eventData: "'.concat(n,'"}}) {event {createTime } } }'),i=JSON.stringify({query:t});Object(r.a)(c,(function(){s.logInfo(Date.now()+" Sending event to adxpremium server.")}),i,{contentType:"application/json",method:"POST"})}catch(e){s.logError("Could not send event, error details:",e)}}(v)}),3100)}}}),_=window.googletag||{};_.cmd=_.cmd||[],_.cmd.push((function(){_.pubads().addEventListener("slotRenderEnded",(function(e){s.logInfo(Date.now()+" GOOGLE SLOT: "+JSON.stringify(e))}))}));var E={};T.originEnableAnalytics=T.enableAnalytics,T.enableAnalytics=function(e){T.initOptions=e.options,e.options.pubId?T.originEnableAnalytics(e):s.logError("Publisher ID (pubId) option is not defined. Analytics won't work")},o.default.registerAnalyticsAdapter({adapter:T,code:"adxpremium"}),n.default=T}}]);