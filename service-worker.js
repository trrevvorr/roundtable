if(!self.define){let e,s={};const l=(l,n)=>(l=new URL(l+".js",n).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(n,r)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(s[u])return;let i={};const o=e=>l(e,u),t={module:{uri:u},exports:i,require:o};s[u]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),i)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"roundtable"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/roundtable/css/945.e502adb2.css",revision:null},{url:"/roundtable/css/app.49ccdf08.css",revision:null},{url:"/roundtable/css/chunk-vendors.cfc9e954.css",revision:null},{url:"/roundtable/css/current.4aa3a419.css",revision:null},{url:"/roundtable/css/new.cb5056c3.css",revision:null},{url:"/roundtable/css/past-games.8cb64f4b.css",revision:null},{url:"/roundtable/css/settings.cd7e90d7.css",revision:null},{url:"/roundtable/img/install_1.2871cbd7.png",revision:null},{url:"/roundtable/img/install_2.93debef4.png",revision:null},{url:"/roundtable/img/install_3.1061f053.png",revision:null},{url:"/roundtable/index.html",revision:"24bf515242a253e36ab55e7b385d3905"},{url:"/roundtable/js/157.685503d2.js",revision:null},{url:"/roundtable/js/90.a22e85e0.js",revision:null},{url:"/roundtable/js/907.26d12cf4.js",revision:null},{url:"/roundtable/js/945.97f69a36.js",revision:null},{url:"/roundtable/js/app.bc577c1a.js",revision:null},{url:"/roundtable/js/chunk-vendors.b4418474.js",revision:null},{url:"/roundtable/js/current.055a09a9.js",revision:null},{url:"/roundtable/js/new.edc1f133.js",revision:null},{url:"/roundtable/js/past-games.a4644ba2.js",revision:null},{url:"/roundtable/js/settings.ed454ffb.js",revision:null},{url:"/roundtable/manifest.json",revision:"87869032fe83fdaf5083a57fdfad8021"},{url:"/roundtable/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map