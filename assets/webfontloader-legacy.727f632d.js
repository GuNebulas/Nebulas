System.register([],(function(t,n){"use strict";return{execute:function(){function n(t,n){for(var i=0;i<n.length;i++){const e=n[i];if("string"!=typeof e&&!Array.isArray(e))for(const n in e)if("default"!==n&&!(n in t)){const i=Object.getOwnPropertyDescriptor(e,n);i&&Object.defineProperty(t,n,i.get?i:{enumerable:!0,get:()=>e[n]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}};!function(t){!function(){function n(t,n,i){return t.call.apply(t.bind,arguments)}function i(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function e(t,o,s){return(e=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:i).apply(null,arguments)}var o=Date.now||function(){return+new Date};function s(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var a=!!window.FontFace;function r(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function c(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var s=!1,a=0;a<e.length;a+=1)if(n[o]===e[a]){s=!0;break}s||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(s=!1,a=0;a<i.length;a+=1)if(e[o]===i[a]){s=!0;break}s||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function l(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function u(t,n,i){function e(){h&&o&&s&&(h(f),h=null)}n=r(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,s=!0,f=null,h=i||null;a?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,f=Error("Stylesheet failed to load"),e()}):setTimeout((function(){o=!0,e()}),0),c(t,"head",n)}function p(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var s=r(t,"script",{src:n}),a=!1;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&o.removeChild(s))},o.appendChild(s),setTimeout((function(){a||(a=!0,i&&i(Error("Script load timeout")))}),e||5e3),s}return null}function g(){this.a=0,this.c=null}function d(t){return t.a++,function(){t.a--,w(t)}}function v(t,n){t.c=n,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function m(t){this.a=t||"-"}function y(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function b(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function x(t){return t.a+t.f}function j(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function _(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function k(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new m("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function S(t){if(t.g){var n=l(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),h(t.f,i,e)}T(t,"inactive")}function T(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,x(i)):t.h[n]())}function A(){this.c={}}function C(t,n){this.c=t,this.f=n,this.a=r(this.c,"span",{"aria-hidden":"true"},this.f)}function N(t){c(t.c,"body",t.a)}function O(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+b(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function E(t,n,i,e,o,s){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=s||void 0}function P(t,n,i,e,o,s,a){this.v=t,this.B=n,this.c=i,this.a=e,this.s=a||"BESbswy",this.f={},this.w=o||3e3,this.u=s||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=O(t=new y(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=O(t=new y(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=O(t=new y("serif",x(this.a))),this.j.a.style.cssText=t,t=O(t=new y("sans-serif",x(this.a))),this.m.a.style.cssText=t,N(this.g),N(this.h),N(this.j),N(this.m)}m.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},E.prototype.start=function(){var t=this.c.o.document,n=this,i=o(),e=new Promise((function(e,s){!function a(){o()-i>=n.f?s():t.fonts.load(function(t){return j(t)+" "+t.f+"00 300px "+b(t.c)}(n.a),n.h).then((function(t){1<=t.length?e():setTimeout(a,25)}),(function(){s()}))}()})),s=null,a=new Promise((function(t,i){s=setTimeout(i,n.f)}));Promise.race([a,e]).then((function(){s&&(clearTimeout(s),s=null),n.g(n.a)}),(function(){n.j(n.a)}))};var W={D:"serif",C:"sans-serif"},F=null;function I(){if(null===F){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);F=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return F}function B(t,n,i){for(var e in W)if(W.hasOwnProperty(e)&&n===t.f[W[e]]&&i===t.f[W[e]])return!0;return!1}function D(t){var n,i=t.g.a.offsetWidth,s=t.h.a.offsetWidth;(n=i===t.f.serif&&s===t.f["sans-serif"])||(n=I()&&B(t,i,s)),n?o()-t.A>=t.w?I()&&B(t,i,s)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?L(t,t.v):L(t,t.B):function(t){setTimeout(e((function(){D(this)}),t),50)}(t):L(t,t.v)}function L(t,n){setTimeout(e((function(){f(this.g.a),f(this.h.a),f(this.j.a),f(this.m.a),n(this.a)}),t),0)}function $(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}P.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=o(),D(this)};var M=null;function q(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&h(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),T(t,"active")):S(t.a))}function z(t){this.j=t,this.a=new A,this.h=0,this.f=this.g=!0}function H(t,n,i,o,s){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=s||null,r=o||{};if(0===i.length&&a)S(n.a);else{n.f+=i.length,a&&(n.j=a);var c,f=[];for(c=0;c<i.length;c++){var l=i[c],u=r[l.c],p=n.a,g=l;if(p.g&&h(p.f,[p.a.c("wf",g.c,x(g).toString(),"loading")]),T(p,"fontloading",g),p=null,null===M)if(window.FontFace){g=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);M=g?42<parseInt(g[1],10):!d}else M=!1;p=M?new E(e(n.g,n),e(n.h,n),n.c,l,n.s,u):new P(e(n.g,n),e(n.h,n),n.c,l,n.s,t,u),f.push(p)}for(c=0;c<f.length;c++)f[c].start()}}),0)}function G(t,n){this.c=t,this.a=n}function K(t,n){this.c=t,this.a=n}function R(t,n){this.c=t||U,this.a=[],this.f=[],this.g=n||""}$.prototype.g=function(t){var n=this.a;n.g&&h(n.f,[n.a.c("wf",t.c,x(t).toString(),"active")],[n.a.c("wf",t.c,x(t).toString(),"loading"),n.a.c("wf",t.c,x(t).toString(),"inactive")]),T(n,"fontactive",t),this.m=!0,q(this)},$.prototype.h=function(t){var n=this.a;if(n.g){var i=l(n.f,n.a.c("wf",t.c,x(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,x(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,x(t).toString(),"inactive")),h(n.f,e,o)}T(n,"fontinactive",t),q(this)},z.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,i){var e=[],o=i.timeout;!function(t){t.g&&h(t.f,[t.a.c("wf","loading")]),T(t,"loading")}(n),e=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var s=t.c[e];s&&o.push(s(n[e],i))}return o}(t.a,i,t.c);var s=new $(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load((function(n,i,e){H(t,s,n,i,e)}))}(this,new k(this.c,t),t)},G.prototype.load=function(t){function n(){if(s["__mti_fntLst"+e]){var i,o=s["__mti_fntLst"+e](),a=[];if(o)for(var r=0;r<o.length;r++){var c=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(i=o[r].fontStyle+o[r].fontWeight,a.push(new y(c,i))):a.push(new y(c))}t(a)}else setTimeout((function(){n()}),50)}var i=this,e=i.a.projectId,o=i.a.version;if(e){var s=i.c.o;p(this.c,(i.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(o?"?v="+o:""),(function(o){o?t([]):(s["__MonotypeConfiguration__"+e]=function(){return i.a},n())})).id="__MonotypeAPIScript__"+e}else t([])},K.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],s=this.a.testStrings||{},a=new g;for(n=0,i=e.length;n<i;n++)u(this.c,e[n],d(a));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var c=e[1].split(","),f=0;f<c.length;f+=1)r.push(new y(e[0],c[f]));else r.push(new y(e[0]));v(a,(function(){t(r,s)}))};var U="https://fonts.googleapis.com/css";function V(t){this.f=t,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},J={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Q={i:"i",italic:"i",n:"n",normal:"n"},Y=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Z(t,n){this.c=t,this.a=n}var tt={Arimo:!0,Cousine:!0,Tinos:!0};function nt(t,n){this.c=t,this.a=n}function it(t,n){this.c=t,this.f=n,this.a=[]}Z.prototype.load=function(t){var n=new g,i=this.c,e=new R(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var s="";2==o.length&&""!=o[1]&&(s=":"),t.a.push(o.join(s))}}(e,o);var s=new V(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),s=["n4"];if(2<=e.length){var a;if(a=[],r=e[1])for(var r,c=(r=r.split(",")).length,f=0;f<c;f++){var h;if((h=r[f]).match(/^[\w-]+$/))if(null==(l=Y.exec(h.toLowerCase())))h="";else{if(h=null==(h=l[2])||""==h?"n":Q[h],null==(l=l[1])||""==l)l="4";else var l=J[l]||(isNaN(l)?"4":l.substr(0,1));h=[h,l].join("")}else h="";h&&a.push(h)}0<a.length&&(s=a),3==e.length&&(a=[],0<(e=(e=e[2])?e.split(","):a).length&&(e=X[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=X[o])&&(t.c[o]=e),e=0;e<s.length;e+=1)t.a.push(new y(o,s[e]))}}(s),u(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),d(n)),v(n,(function(){t(s.a,s.c,tt)}))},nt.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var s=n[o],a=n[o+1],r=0;r<a.length;r++)e.push(new y(s,a[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(c){}t(e)}}),2e3):t([])},it.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,s=i.fonts.length;o<s;++o){var a=i.fonts[o];e.a.push(new y(a.name,_("font-weight:"+a.weight+";font-style:"+a.style)))}t(e.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",(function(n){n&&t([])}))):t([])};var et=new z(window);et.a.c.custom=function(t,n){return new K(n,t)},et.a.c.fontdeck=function(t,n){return new it(n,t)},et.a.c.monotype=function(t,n){return new G(n,t)},et.a.c.typekit=function(t,n){return new nt(n,t)},et.a.c.google=function(t,n){return new Z(n,t)};var ot={load:e(et.load,et)};t.exports?t.exports=ot:(window.WebFont=ot,window.WebFontConfig&&et.load(window.WebFontConfig))}()}(i),t("w",n({__proto__:null,default:i.exports},[i.exports]))}}}));
