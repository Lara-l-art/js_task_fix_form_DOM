parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=t(n))){var r=0,e=function(){};return{s:e,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,l=!0,i=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return l=n.done,n},e:function(n){i=!0,a=n},f:function(){try{l||null==o.return||o.return()}finally{if(i)throw a}}}}function t(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var e,o=document.querySelectorAll("input"),a=n(o);try{for(a.s();!(e=a.n()).done;){var l=e.value;l.placeholder="".concat(i(l.name)),l.insertAdjacentHTML("afterend","\n  <label for=".concat(l.id," class='field-label'>\n  ").concat(i(l.name),"\n  </label>\n  "))}}catch(c){a.e(c)}finally{a.f()}function i(n){for(var t=n[0].toUpperCase(),r=1;r<n.length;r++)n[r]===n[r].toLowerCase()?t+=n[r]:t+=" "+n[r];return t}
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.173ff575.js.map