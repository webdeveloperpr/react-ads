"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setTargeting=exports.enableServices=exports.display=exports.getVersion=exports.collapseEmptyDivs=exports.enableVideoAds=exports.enableAsyncRendering=exports.setCentering=exports.disableInitialLoad=exports.enableSingleRequest=exports.createGPTScript=exports.addEventListener=exports.sizeMapping=exports.destroyAd=exports.define=exports.refresh=exports.destroySlots=exports.setAdIframeTitle=exports.cmdPush=exports.getWindowWidth=exports.events=void 0;function _slicedToArray(a,b){return _arrayWithHoles(a)||_iterableToArrayLimit(a,b)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function _arrayWithHoles(a){if(Array.isArray(a))return a}var events={slotOnload:"slotOnload",slotRenderEnded:"slotRenderEnded",impressionViewable:"impressionViewable",slotVisibilityChanged:"slotVisibilityChanged",slotRequested:"slotRequested"};exports.events=events;var getWindowWidth=function(){return window.innerWidth};exports.getWindowWidth=getWindowWidth;var cmdPush=function(a){return window.googletag.cmd.push(a)};exports.cmdPush=cmdPush;var setAdIframeTitle=function(a){a&&cmdPush(function(){return window.googletag.setAdIframeTitle(a)})};exports.setAdIframeTitle=setAdIframeTitle;var destroySlots=function(a){cmdPush(function(){return window.googletag.destroySlots(a)})};exports.destroySlots=destroySlots;var refresh=function(a){cmdPush(function(){return window.googletag.pubads().refresh(a)})};exports.refresh=refresh;var define=function(a,b,c,d){return a?window.googletag.defineOutOfPageSlot(b,d).addService(window.googletag.pubads()):window.googletag.defineSlot(b,c,d).addService(window.googletag.pubads())};exports.define=define;var destroyAd=function(a){cmdPush(function(){return window.googletag.destroySlots([a])})};exports.destroyAd=destroyAd;var sizeMapping=function(){return window.googletag.sizeMapping()};exports.sizeMapping=sizeMapping;var addEventListener=function(a,b){return window.googletag.pubads().addEventListener(a,b)};exports.addEventListener=addEventListener;var createGPTScript=function(){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[];var a=document.getElementById("react-ads-google-tag-script");if(a)return void console.error("google tag script already exists");var b=document.createElement("script");b.id="react-ads-google-tag-script",b.src="https://www.googletagservices.com/tag/js/gpt.js",b.async=!0,document.head.appendChild(b)};exports.createGPTScript=createGPTScript;var enableSingleRequest=function(a){a&&cmdPush(function(){window.googletag.pubads().enableSingleRequest()})};exports.enableSingleRequest=enableSingleRequest;var disableInitialLoad=function(a){a&&cmdPush(function(){window.googletag.pubads().disableInitialLoad()})};exports.disableInitialLoad=disableInitialLoad;var setCentering=function(){var a=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0];cmdPush(function(){window.googletag.pubads().setCentering(a)})};exports.setCentering=setCentering;var enableAsyncRendering=function(){var a=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0];a&&cmdPush(function(){window.googletag.pubads().enableAsyncRendering(a)})};exports.enableAsyncRendering=enableAsyncRendering;var enableVideoAds=function(){var a=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0];a&&cmdPush(function(){window.googletag.pubads().enableVideoAds()})};exports.enableVideoAds=enableVideoAds;var collapseEmptyDivs=function(){var a=!!(0<arguments.length&&arguments[0]!==void 0)&&arguments[0];cmdPush(function(){window.googletag.pubads().collapseEmptyDivs(a)})};exports.collapseEmptyDivs=collapseEmptyDivs;var getVersion=function(){cmdPush(function(){window.googletag.getVersion()})};exports.getVersion=getVersion;var display=function(a){cmdPush(function(){window.googletag.display(a)})};exports.display=display;var enableServices=function(){cmdPush(function(){window.googletag.enableServices()})};exports.enableServices=enableServices;var setTargeting=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};cmdPush(function(){Object.entries(a).map(function(a){var b=_slicedToArray(a,2),c=b[0],d=b[1];return window.googletag.pubads().setTargeting(c,d)})})};exports.setTargeting=setTargeting;