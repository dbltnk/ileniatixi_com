var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(t,e){// Copyright (c) 2011-2013 Felix Gnass
"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd?define("_iub_spinner",function(){t.IubSpinner=e()}):t.IubSpinner=e()})(this,function(){"use strict";function t(t,e){var i,n=document.createElement(t||"div");for(i in e)n[i]=e[i];return n}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,n){var s=["opacity",e,~~(100*t),i,n].join("-"),o=.01+100*(i/n),r=Math.max(1-(1-t)/e*(100-o),t),a=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return d[s]||(p.insertRule("@"+l+"keyframes "+s+"{"+"0%{opacity:"+r+"}"+o+"%{opacity:"+t+"}"+(o+.01)+"%{opacity:1}"+(o+e)%100+"%{opacity:"+t+"}"+"100%{opacity:"+r+"}"+"}",p.cssRules.length),d[s]=1),s}function n(t,e){var i,n,s=t.style;for(e=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<c.length;n++)if(i=c[n]+e,s[i]!==void 0)return i;return s[e]!==void 0?e:void 0}function s(t,e){for(var i in e)t.style[n(t,i)||i]=e[i];return t}function o(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)t[n]===void 0&&(t[n]=i[n])}return t}function r(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}function a(t,e){return"string"==typeof t?t:t[e%t.length]}function l(t){return"undefined"==typeof this?new l(t):(this.opts=o(t||{},l.defaults,f),void 0)}function h(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}p.addRule(".spin-vml","behavior:url(#default#VML)"),l.prototype.lines=function(t,n){function o(){return s(i("group",{coordsize:u+" "+u,coordorigin:-h+" "+-h}),{width:u,height:u})}function r(t,r,l){e(d,e(s(o(),{rotation:360/n.lines*t+"deg",left:~~r}),e(s(i("roundrect",{arcsize:n.corners}),{width:h,height:n.width,left:n.radius,top:-n.width>>1,filter:l}),i("fill",{color:a(n.color,t),opacity:n.opacity}),i("stroke",{opacity:0}))))}var l,h=n.length+n.width,u=2*h,c=-(n.width+n.length)*2+"px",d=s(o(),{position:"absolute",top:c,left:c});if(n.shadow)for(l=1;l<=n.lines;l++)r(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=n.lines;l++)r(l);return e(t,d)},l.prototype.opacity=function(t,e,i,n){var s=t.firstChild;n=n.shadow&&n.lines||0,s&&e+n<s.childNodes.length&&(s=s.childNodes[e+n],s=s&&s.firstChild,s=s&&s.firstChild,s&&(s.opacity=i))}}var u,c=["webkit","Moz","ms","O"],d={},p=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={},o(l.prototype,{spin:function(e){this.stop();var i,n,o=this,a=o.opts,l=o.el=s(t(0,{className:a.className}),{position:a.position,width:0,zIndex:a.zIndex}),h=a.radius+a.length+a.width;if(e&&(e.insertBefore(l,e.firstChild||null),n=r(e),i=r(l),s(l,{left:(a.left=="auto"?n.x-i.x+(e.offsetWidth>>1):parseInt(a.left,10)+h)+"px",top:(a.top=="auto"?n.y-i.y+(e.offsetHeight>>1):parseInt(a.top,10)+h)+"px"})),l.setAttribute("role","progressbar"),o.lines(l,o.opts),!u){var c,d=0,p=(a.lines-1)*(1-a.direction)/2,f=a.fps,m=f/a.speed,g=(1-a.opacity)/(m*a.trail/100),v=m/a.lines;(function b(){d++;for(var t=0;t<a.lines;t++)c=Math.max(1-(d+(a.lines-t)*v)%m*g,a.opacity),o.opacity(l,t*a.direction+p,c,a);o.timeout=o.el&&setTimeout(b,~~(1e3/f))})()}return o},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(n,o){function r(e,i){return s(t(),{position:"absolute",width:o.length+o.width+"px",height:o.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/o.lines*h+o.rotate)+"deg) translate("+o.radius+"px"+",0)",borderRadius:(o.corners*o.width>>1)+"px"})}for(var l,h=0,c=(o.lines-1)*(1-o.direction)/2;h<o.lines;h++)l=s(t(),{position:"absolute",top:1+~(o.width/2)+"px",transform:o.hwaccel?"translate3d(0,0,0)":"",opacity:o.opacity,animation:u&&i(o.opacity,o.trail,c+h*o.direction,o.lines)+" "+1/o.speed+"s linear infinite"}),o.shadow&&e(l,s(r("#000","0 0 4px #000"),{top:"2px"})),e(n,e(l,r(a(o.color,h),"0 0 1px rgba(0,0,0,.1)")));return n},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}});var m=s(t("group"),{behavior:"url(#default#VML)"});return!n(m,"transform")&&m.adj?h():u=n(m,"animation"),l}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});var _iub=window._iub||[];_iub.badges=_iub.badges||[],_iub.embedBs=_iub.embedBs||[],function(t,e,i){function n(){var t=_("iubenda-embed",e);if(t.length)for(var n=0;n<t.length;n++){var o=t[n],r={ppId:k(o.getAttribute("href")),isLegal:C(o)};v(o.className.split(" "),"iub-body-embed")!==-1?D({linkA:o,embedB:!0})||(r.index=Math.floor(Math.random()*1e10),r.linkA=s(o,r.index),i.embedBs.push(r)):D({linkA:o})||(r.linkA=s(o),i.badges.push(r))}else{var a=e.getElementById("iubenda-embed");a&&s(a)}}function s(e,n){var s=e,h=!1,u=!1,c=!1,d=!1,p=!1,f=!1,g=!1,_="iubenda-white",x=e.getAttribute("href").split("?")[0],C=k(x),D="//",S=parseInt(e.getAttribute("data-iub-z-index"),10)||null,I=e.getAttribute("data-iub-overflow")||"html",z=e.className.split(" ");y(z,"no-brand")&&(h=!0),y(z,"skip-track")&&(u=!0),y(z,"iub-body-embed")&&(c=!0),y(z,"iub-legal-only")&&(d=!0),y(z,"iub-anchor")&&(p=!0),y(z,"iubenda-noiframe")&&(g=!0),y(z,"iub-no-markup")&&(f=!0,d=!0),x.indexOf("http://")!==-1?D="http://":x.indexOf("https://")!==-1&&(D="https://");var O=w(N,D),W=w(M,D),j=w(E,D),L=w(P,D),F=w(H,D);if(v(z,"iubenda-no-icon")!==-1?_="iubenda-nostyle":(_=b(["iubenda-green","iubenda-green-m","iubenda-green-s","iubenda-green-xs","iubenda-lowgray","iubenda-lowgray-m","iubenda-lowgray-s","iubenda-lowgray-xs","iubenda-midgray","iubenda-midgray-m","iubenda-midgray-s","iubenda-midgray-xs","iubenda-darkgray","iubenda-darkgray-m","iubenda-darkgray-s","iubenda-darkgray-xs","iubenda-white","iubenda-black","iubenda-nostyle"],z),-1===_&&(_="iubenda-white")),"iubenda-nostyle"!==_&&(e.style.outline="0px",e.style.border="0px",e.style.textDecoration="none",e.style.display="inline-block",e.style.background="none"),c)s=l(e,F,d,f,D,n);else if(v(["iubenda-white","iubenda-black"],_)===-1||g){if(d&&(e.href=e.href+"/full-legal"),"iubenda-nostyle"!==_){var R=116,B=25,$=".gif";(_.indexOf("-m")!==-1&&_.indexOf("-mid")===-1||_.indexOf("midgray-m")!==-1)&&(R=81,B=21),(_.indexOf("-s")!==-1||_.indexOf("-xs")!==-1)&&(R=82,B=17,$=".png"),e.style.width=R+"px",e.style.height=B+"px",_+=$,o(e,O+_,R,B,g)}m(W,e,{onLoadCallB:function(){var t=T(O,e.href);i.ifr.iubendaStartBadge({linkA:e,embedP:"",iFrUrl:e.href,cdnBaseUrl:t,useProtocol:D,zIndex:S,overflow:I})}}),u||r(e,C),s=e}else s=a(e,_,null,null,C,h,O,W,L,u,d,p,D,S,I);return"undefined"!=typeof editLinkA&&t.editLinkA!==null&&(t.editLinkA=null),g&&A(j),s}function o(t,e,i,n,s){p(t.id,e,100,i,n,s)}function r(){}function a(t,i,n,s,o,a,l,h,u,c,p,f,m,g,v){t.style.display="none";var b=t.innerHTML.trim()||"Privacy Policy",y=t.getAttribute("title")||"Privacy Policy",_=m||"//",x=T(l,t.href),k=S(b,a),C=s||22,D=t.title||"iubenda badge",A=e.createElement("IFRAME"),I=f?"iubenda-ibadge iubenda-iframe-anchor":"iubenda-ibadge";A.setAttribute("class",I),A.setAttribute("scrolling","no"),A.setAttribute("frameBorder","0"),A.setAttribute("allowtransparency","true");var N="width:"+k+"px; height:"+C+"px;";f&&(N+=" z-index:9998; position:fixed; bottom:0px; right:0px;"),d(A,N),A.setAttribute("title",y),t.parentNode.insertBefore(A,t.nextSibling),t.parentNode.removeChild(t);var M=t.href.split("?")[0];M=p?M+"/full-legal":M,M=w(M,_);var E=null;return A.contentWindow.contents="<html><head><title>"+D+"</title>"+'<meta name="viewport" content="width=device-width">'+'<link type="text/css" rel="stylesheet" href="'+u+'" media="screen" />'+'<script type="text/javascript" src="'+h+'"></script></head>'+'<body onload="try{_iub.ifr.iubendaStartBadge({'+(E?"iFrUrl:'"+E+"',":"")+"useProtocol:'"+_+"',zIndex:'"+g+"',overflow:'"+v+"',cdnBaseUrl:'"+x+"'});}catch(exc){"+"console.log('IUBENDA: error while loading [iubendaStartBadge]. Please contact info@iubenda.com for support "+'and troubleshooting.\')}"><a href="'+M+'" class="'+i+" "+(a?"no-brand":"")+" "+(f?"iub-anchor":"")+'" id="i_badge-link" title="'+y+'" target="_parent" >'+b+"</a></body></html>",A.src='javascript:window["contents"]',c||r(A,o),A}function l(t,e,i,n,s,o){var r=s||"//";n||h(e);var a=t.href.split("?")[0],l=a+(n?"/embed-no-markup.json":i?"/embed-legal.json":"/embed.json")+"?i="+o;if(l=w(l,r),"undefined"!=typeof IubSpinner){var u={lines:8,length:2,width:2,radius:2,color:"#696969",speed:1.2,trail:60,shadow:!1},c=new IubSpinner(u).spin();c.el.className="_iub-pp-loading-alert",d(c.el,"position:relative; display:inline-block; padding: 6px;"),t.parentNode.insertBefore(c.el,t)}return t.style.display="none",m(l,t,{tries:1}),t}function h(t){var i=e.createElement("link");i.type="text/css",i.rel="stylesheet",i.href=t,e.getElementsByTagName("head")[0].appendChild(i)}function u(t){try{var i;if(t.i&&(i=D({index:parseInt(t.i,10),embedB:!0,inDom:!0})),i||(i=D({ppId:parseInt(t.pp_id,10),isLegal:t.is_legal,embedB:!0,inDom:!0})),i&&i.linkA){var n=i.linkA,s=e.createElement("div");s.setAttribute("id","iub-pp-container"),s.innerHTML=t.content,n.parentNode.insertBefore(s,n.nextSibling);var o=n.previousSibling;o.className==="_iub-pp-loading-alert"&&o.parentNode.removeChild(o),n.parentNode.removeChild(n),c(s)}}catch(r){console.log("IUBENDA: Error while loading [ "+r.message+" ]. Please contact info@iubenda.com for support and troubleshooting.")}}function c(t){function i(t,e){return t.nodeName&&t.nodeName.toUpperCase()===e.toUpperCase()}function n(t){var i=t.text||t.textContent||t.innerHTML||"",n=e.getElementsByTagName("head")[0]||e.documentElement,s=e.createElement("script");s.type="text/javascript";try{s.appendChild(e.createTextNode(i))}catch(o){s.text=i}n.insertBefore(s,n.firstChild),n.removeChild(s)}function s(t,e,i){var n=i+1;if(n<=Math.max(1,h)){e.push(t);for(var o=t.childNodes,r=0;r<o.length;r++)o[r].nodeType===1&&s(o[r],e,n)}}for(var o,r,a=[],l=[],h=8,u=t.childNodes,c=0;c<u.length;c++)u[c].nodeType===1&&s(u[c],l,1);for(var d=0;l[d];d++)r=l[d],!i(r,"script")||r.type&&r.type.toLowerCase()!=="text/javascript"||a.push(r);for(var p=0;a[p];p++)o=a[p],o.parentNode&&o.parentNode.removeChild(o),n(a[p])}function d(t,e){var i=f();-1!==i&&8>i?t.style.cssText=e:t.setAttribute("style",e)}function p(t,i,n,s,o,r){if(!(0>=n||r)){var a=e.getElementById(t),l=e.createElement("img");l.src=i,l.style.width=s+"px",l.style.height=o+"px",l.style.border="0px",a&&l.width?(l.alt=a.firstChild.nodeValue,l.title=a.firstChild.nodeValue,a.replaceChild(l,a.firstChild)):setTimeout("_iub.imageFastReplace('"+t+"','"+i+"',"+--n+","+s+","+o+");",150)}}function f(){var t=-1;if(navigator.appName==="Microsoft Internet Explorer"){var e=navigator.userAgent,i=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");i.exec(e)!=null&&(t=parseFloat(RegExp.$1))}return t}function m(t,i,n){var s=n||{},o=t,r=i,a=s.onLoadCallB,l=s.tries,h=e.createElement("script");h.setAttribute("type","text/javascript"),h.setAttribute("src",t),i.parentNode.insertBefore(h,i.nextSibling),"function"==typeof a&&g(h,a),h.onerror=function(){l>0&&m(x(o,"t",l),r,{onLoadCallB:a,tries:l-1})}}function g(t,e){var i=f();-1!==i&&9>i?t.onreadystatechange=function(){(this.readyState==="loaded"||this.readyState==="complete")&&e()}:t.onload=function(){e()}}function v(t,e){var i=Object(t),n=i.length>>>0;if(0===n)return-1;var s=0;if(arguments.length>0&&(s=Number(arguments[1]),isNaN(s)?s=0:0!==s&&s!==1/0&&s!==-(1/0)&&(s=(s>0||-1)*Math.floor(Math.abs(s)))),s>=n)return-1;for(var o=s>=0?s:Math.max(n-Math.abs(s),0);n>o;o++)if(o in i&&i[o]===e)return o;return-1}function b(t,e){var i=Object(t),n=i.length>>>0;if(0===n)return-1;for(var s=0;s<e.length;s++)if(v(i,e[s])!==-1)return e[s];return-1}function y(t,e){return v(t,e)!==-1?(t.splice(v(t,e),1),!0):!1}function _(t,i){for(var n=i||e.getElementsByTagName("body")[0],s=[],o=new RegExp("\\b"+t+"\\b"),r=n.getElementsByTagName("*"),a=0,l=r.length;l>a;a++)o.test(r[a].className)&&s.push(r[a]);return s}function w(t,e){var i=t.indexOf("//")!==-1?t.split("//")[1]:t;return e.concat(i)}function x(t,e,i){if(i){var n=t.split("#")[0],s=t.split("#")[1];return n+=(n.indexOf("?")!==-1?"&":"?")+e+"="+i,s?n+"#"+s:n}return t}function k(t){for(var e=t.split("/"),i=e.length-1;i>-1;i--)if(!isNaN(parseInt(e[i],10)))return parseInt(e[i],10);return null}function C(t){return t.getAttribute("href").indexOf("/legal")!==-1||t.getAttribute("href").indexOf("/full-legal")!==-1||v(t.className.split(" "),"iub-legal-only")!==-1||v(t.className.split(" "),"iub-no-markup")!==-1}function D(t){for(var n=t||{},s=n.embedB?i.embedBs:i.badges,o=!!n.inDom,r=0;r<s.length;r++)if(n.index){if(s[r].index===n.index&&(!o||e.body.contains(s[r].linkA)))return s[r]}else if(n.linkA){if(s[r].linkA===n.linkA&&(!o||e.body.contains(s[r].linkA)))return s[r]}else if(s[r].ppId===n.ppId&&s[r].isLegal===n.isLegal&&(!o||e.body.contains(s[r].linkA)))return s[r];return null}function T(t,e){var i,n=["/privacy-policy","/terms-and-conditions"];if(t)return t;for(var s=0,o=n.length;o>s;s++)if(i=n[s],e.indexOf(i)>-1)return e.split(i)[0]+"/cdn/";return null}function S(t,i){var n=e.createElement("div");n.style.fontSize="11px",n.style.fontWeight="bold",n.style.height="auto",n.style.width="auto",n.style.position="absolute",n.style.fontFamily="Helvetica,Arial,FreeSans,sans-serif",n.style.visibility="hidden",n.innerHTML=t,e.body.appendChild(n);var s=n.clientWidth+40;return i&&(s-=18),e.body.removeChild(n),s}function A(t){if(!e.getElementById("iub_css")){var i=e.createElement("link");i.id="iub_css",i.type="text/css",i.as="style",i.rel="stylesheet",i.href=t,i.media="screen",e.head.appendChild(i)}}var I="1.5.0",N="https://web.archive.org/web/20210801082112/https://cdn.iubenda.com/",M="https://web.archive.org/web/20210801082112/https://cdn.iubenda.com/iubenda_i_badge.js",E="https://web.archive.org/web/20210801082112/https://cdn.iubenda.com/iubenda_badge.css",P="https://web.archive.org/web/20210801082112/https://cdn.iubenda.com/iubenda_i_badge.css",H="https://web.archive.org/web/20210801082112/https://www.iubenda.com/assets/privacy_policy.css";(function(){try{n()}catch(t){console.log("IUBENDA: Error while loading [ "+t.message+" ]. Please contact info@iubenda.com for support and troubleshooting.")}})(),i.setStyle=d,i.onLoadCall=g,i.imageFastReplace=p,i.getElementsByClassName=_,i.loadPPContent=u,i.VERSION=I}(window,document,_iub);

}
/*
     FILE ARCHIVED ON 08:21:12 Aug 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:55:16 Jul 17, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.602
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.013
  esindex: 0.008
  cdx.remote: 5.226
  LoadShardBlock: 1032.842 (6)
  PetaboxLoader3.datanode: 466.203 (8)
  PetaboxLoader3.resolve: 1738.574 (3)
  load_resource: 1225.911 (2)
*/