!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("html-webpack-plugin")):"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.HtmlWebpackAssetTagAlter=e(require("html-webpack-plugin")):t.HtmlWebpackAssetTagAlter=e(t[void 0])}(global,(function(t){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){o(1);const n=o(2);t.exports=class{constructor(t={}){this.options=t,this._validOptions()}apply(t){t.hooks.compilation.tap("HtmlWebpackAssetTagAlterPlugin",t=>{n.getHooks(t).alterAssetTags.tapAsync("HtmlWebpackAssetTagAlterPlugin",(t,e)=>{const{assetTags:o,publicPath:n,outputName:r}=this.options;o&&Object.entries(o).map(([e,o])=>{t.assetTags[e].map(e=>{Object.entries(o).map(([o,n])=>e.attributes[o]=this._handleValue(n,e,t))})}),n&&(t.publicPath=this._handleValue(n,t.publicPath,t)),r&&(t.outputName=this._handleValue(r,t.outputName,t)),e(null,t)})})}_validOptions(){const t=this.options,{assetTags:e,publicPath:o,outputName:n}=t;if("Object"!==Object.prototype.toString.call(e).slice(8,-1))throw new Error("assetTags must be object!");if(o&&!["string","function","boolean"].some(t=>t===typeof o))throw new Error("Value must be string, function or boolean!")}_handleValue(t,e,o){return t&&"function"==typeof t?t(e,o):t}}},function(t,e){t.exports=require("fs")},function(e,o){e.exports=t}])}));