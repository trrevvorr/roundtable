(function(){"use strict";var t={8658:function(t,e,n){var r=n(144),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary"}},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),n("v-toolbar-title",[t._v("Roundtable")])],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item-title",{staticClass:"text-h6 nav-title"},[t._v(" Navigation ")]),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{link:"",to:e.path}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),n("v-main",[n("router-view")],1),n("v-snackbar",{attrs:{bottom:"",value:t.updateExists,timeout:-1},scopedSlots:t._u([{key:"action",fn:function(){return[n("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.refreshApp}},[t._v(" Update ")])]},proxy:!0}])},[t._v(" An update is available ")])],1)},i=[],s=n(629),o={data(){return{registration:null,updateExists:!1,refreshing:!1}},created(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.refreshing||(this.refreshing=!0,window.location.reload())}))},methods:{updateAvailable(t){this.registration=t.detail,this.updateExists=!0},refreshApp(){console.log("refreshing app"),this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}};const c={title:"Active Game",icon:"mdi-play",path:"/current"},u=[{title:"Home",icon:"mdi-home",path:"/"},{title:"New Game",icon:"mdi-plus",path:"/new"},{title:"Past games",icon:"mdi-history",path:"/past-games"},{title:"Settings",icon:"mdi-cog",path:"/settings"}];var l={name:"App",mixins:[o],metaInfo:{title:"Roundtable",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width"}]},data:()=>({drawer:!1,group:null,items:[],right:null}),created(){this.setNavItems()},computed:{...(0,s.Se)(["isGameInProgress"])},watch:{isGameInProgress(){this.setNavItems()}},methods:{setNavItems(){this.isGameInProgress?this.items=[...u,c]:this.items=[...u]}}},m=l,d=n(1001),p=n(3453),g=n.n(p),v=n(7524),f=n(8320),h=n(5206),S=n(680),w=n(1418),b=n(6428),y=n(6816),k=n(7620),_=n(9946),A=n(459),Z=n(7877),G=n(3347),C=n(3202),I=n(7921),P=(0,d.Z)(m,a,i,!1,null,"4d3f4d39",null),N=P.exports;g()(P,{VApp:v.Z,VAppBar:f.Z,VAppBarNavIcon:h.Z,VBtn:S.Z,VDivider:w.Z,VIcon:b.Z,VList:y.Z,VListItem:k.Z,VListItemContent:_.km,VListItemIcon:A.Z,VListItemTitle:_.V9,VMain:Z.Z,VNavigationDrawer:G.Z,VSnackbar:C.Z,VToolbarTitle:I.qW});var j=n(5205);(0,j.z)("/roundtable/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(t){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var V=n(6534),x=n(456);r.Z.use(s.ZP);var E=new s.ZP.Store({state:{gameSettings:{players:(0,x.jl)().gameSettings.players||[],favorites:(0,x.jl)().gameSettings.favorites||{},previous:(0,x.jl)().gameSettings.previous||[],current:(0,x.jl)().gameSettings.current||{}},gameState:{current:{settings:(0,x.jl)().gameState.current.settings||{},rounds:(0,x.jl)().gameState.current.rounds||[],data:(0,x.jl)().gameState.current.data||[]},previous:(0,x.jl)().gameState.previous||[]},appSettings:{colorMap:(0,x.jl)().appSettings&&(0,x.jl)().appSettings.colorMap||"viridis",sortPlayersBy:(0,x.jl)().appSettings&&(0,x.jl)().appSettings.sortPlayersBy||"turn"}},getters:{newGameFavorites:t=>({...t.gameSettings.favorites}),newGameSettings:t=>({...t.gameSettings.current}),newGamePlayers:t=>[...t.gameSettings.players],currentGameSettings:t=>({...t.gameState.current.settings}),currentGameRounds:t=>[...t.gameState.current.rounds],currentGameData:t=>({...t.gameState.current.data}),isGameInProgress:t=>"{}"!==JSON.stringify(t.gameState.current.settings),previousGameStates:t=>[...t.gameState.previous],appSettings:t=>({...t.appSettings})},mutations:{setNewGameFavorites(t,e){t.gameSettings.favorites={...e},(0,x.k6)(t)},setNewGameSettings(t,e){t.gameSettings.current={...e},(0,x.k6)(t)},setNewGamePlayers(t,e){Array.isArray(e)?(t.gameSettings.players=[...e],(0,x.k6)(t)):console.error("setNewGamePlayers called with",e)},setCurrentGameSettings(t,e){t.gameState.current.settings={...e},(0,x.k6)(t)},setCurrentGameRounds(t,e){Array.isArray(e)?(t.gameState.current.rounds=[...e],(0,x.k6)(t)):console.error("setCurrentGameRounds called with",e)},setCurrentGameData(t,e){t.gameState.current.data={...e},(0,x.k6)(t)},setPreviousGameStates(t,e){Array.isArray(e)?(t.gameState.previous=[...e],(0,x.k6)(t)):console.error("setPreviousGameStates called with",e)},endCurrentGame(t){if("{}"!==JSON.stringify(t.gameState.current.settings)){let e=t.gameState.previous.length;for(let r=0;r<t.gameState.previous.length;r++){const n=t.gameState.previous[r];if(n.data.startedAt===t.gameState.current.data.startedAt){e=r;break}}const n={settings:{...t.gameState.current.settings},rounds:[...t.gameState.current.rounds],data:{...t.gameState.current.data,endedAt:Date.now()}};t.gameState.previous.splice(e,1,n),t.gameState.current.settings={},t.gameState.current.rounds=[],t.gameState.current.data={},(0,x.k6)(t)}else console.warn("Could not save current game to previous games because settings was unset")},startNewGame(t,e){"{}"!==JSON.stringify(e)?(t.gameState.current.settings={...e},t.gameState.current.rounds=[],t.gameState.current.data={startedAt:Date.now()},(0,x.k6)(t)):console.warn("Could not start new game because settings was unset")},resumeGame(t,e){e?(t.gameState.current.settings={...e.settings},t.gameState.current.rounds=[...e.rounds],t.gameState.current.data={...e.data},(0,x.k6)(t)):console.warn("Could not resume game because game was unset")},setAppSettings(t,e){t.appSettings={...e},(0,x.k6)(t)}},actions:{},modules:{}}),O=n(9132);r.Z.use(O.Z);var L=new O.Z({theme:{dark:!0,themes:{dark:{primary:"#404184",secondary:"#25a286",accent:"#fde725"}}}}),T=n(7356),D=n(7166),B=n.n(D);r.Z.config.productionTip=!1,r.Z.use(T.Z),r.Z.use(B()),r.Z.component("apex-chart",B()),new r.Z({router:V.Z,store:E,vuetify:L,render:t=>t(N)}).$mount("#app")},6534:function(t,e,n){n.d(e,{Z:function(){return _}});var r=n(144),a=n(8345),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("h1",[t._v("Home")]),r("v-list",[t._l(t.items,(function(e){return r("v-list-item",{key:e.title,attrs:{link:"",to:e.path}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(e.icon))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),t.isGameInProgress?r("v-list-item",{attrs:{link:"",to:"/current"}},[r("v-list-item-icon",[r("v-icon",[t._v("mdi-play")])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Resume game in progress")]),r("v-list-item-subtitle",[t._v(" "+t._s(t.currentGameSettings.name)+", "+t._s(t.currentGameSettings.players.length)+" players, started on "+t._s(new Date(t.currentGameData.startedAt).toLocaleString())+" ")])],1)],1):t._e()],2),r("br"),r("v-list",{staticClass:"install-app"},[r("v-list-group",{attrs:{value:!1,"no-action":"","prepend-icon":"mdi-download",color:"white"},scopedSlots:t._u([{key:"activator",fn:function(){return[r("v-list-item-content",[r("v-list-item-title",[t._v("How To Install App")])],1)]},proxy:!0}])},[r("v-list-item",{staticClass:"step"},[r("v-list-item-icon",{staticClass:"step-icon"},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-numeric-1 ")])],1),r("v-list-item-content",[r("img",{attrs:{src:n(4249)}})])],1),r("v-list-item",{staticClass:"step"},[r("v-list-item-icon",{staticClass:"step-icon"},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-numeric-2 ")])],1),r("v-list-item-content",[r("img",{attrs:{src:n(3978)}})])],1),r("v-list-item",{staticClass:"step"},[r("v-list-item-icon",{staticClass:"step-icon"},[r("v-icon",{attrs:{large:""}},[t._v(" mdi-numeric-3 ")])],1),r("v-list-item-content",[r("img",{attrs:{src:n(1209)}})])],1)],1)],1)],1)},s=[],o=n(629),c={name:"HomeView",data:()=>({drawer:!1,group:null,items:[{title:"New game",icon:"mdi-plus",path:"/new"},{title:"Past games",icon:"mdi-history",path:"/past-games"},{title:"Settings",icon:"mdi-cog",path:"/settings"}],right:null,expandInstallApp:!1}),computed:{...(0,o.Se)(["isGameInProgress","currentGameSettings","currentGameData"])}},u=c,l=n(1001),m=n(3453),d=n.n(m),p=n(6428),g=n(6816),v=n(9443),f=n(7620),h=n(9946),S=n(459),w=(0,l.Z)(u,i,s,!1,null,"548593b0",null),b=w.exports;d()(w,{VIcon:p.Z,VList:g.Z,VListGroup:v.Z,VListItem:f.Z,VListItemContent:h.km,VListItemIcon:S.Z,VListItemSubtitle:h.oZ,VListItemTitle:h.V9}),r.Z.use(a.Z);const y=[{path:"/",name:"home",component:b},{path:"/new",name:"new",component:()=>Promise.all([n.e(907),n.e(945),n.e(157),n.e(536)]).then(n.bind(n,6394))},{path:"/current",name:"current",component:()=>Promise.all([n.e(907),n.e(945),n.e(90),n.e(157),n.e(531)]).then(n.bind(n,4312))},{path:"/past-games",name:"past-games",component:()=>Promise.all([n.e(907),n.e(945),n.e(90),n.e(69)]).then(n.bind(n,65))},{path:"/settings",name:"settings",component:()=>Promise.all([n.e(907),n.e(571)]).then(n.bind(n,7450))}],k=new a.Z({routes:y});var _=k},456:function(t,e,n){n.d(e,{jl:function(){return i},k6:function(){return s},qk:function(){return o}});const r=n(9918),a="rt_app_data";function i(){const t=localStorage.getItem(a);return t?JSON.parse(t):r}function s(t){localStorage.setItem(a,JSON.stringify(t))}function o(){console.warn("deleting all app data"),localStorage.setItem(a,"")}},4249:function(t,e,n){t.exports=n.p+"img/install_1.2871cbd7.png"},3978:function(t,e,n){t.exports=n.p+"img/install_2.93debef4.png"},1209:function(t,e,n){t.exports=n.p+"img/install_3.1061f053.png"},9918:function(t){t.exports=JSON.parse('{"gameSettings":{"players":[],"previous":[],"current":{"name":"Euchre","maxPoints":10,"stepSize":1,"highestWins":true,"players":[]}},"gameState":{"current":{"settings":{},"rounds":[],"data":{}},"previous":[]},"appSettings":{"colorMap":"viridis","sortPlayersBy":"turn"}}')}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var s=1/0;for(l=0;l<t.length;l++){r=t[l][0],a=t[l][1],i=t[l][2];for(var o=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(o=!1,i<s&&(s=i));if(o){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+({69:"past-games",531:"current",536:"new",571:"settings"}[t]||t)+"."+{69:"a4644ba2",90:"a22e85e0",157:"685503d2",531:"055a09a9",536:"edc1f133",571:"ed454ffb",907:"26d12cf4",945:"97f69a36"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+({69:"past-games",531:"current",536:"new",571:"settings"}[t]||t)+"."+{69:"8cb64f4b",531:"4aa3a419",536:"cb5056c3",571:"cd7e90d7",945:"e502adb2"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="roundtable:";n.l=function(r,a,i,s){if(t[r])t[r].push(a);else{var o,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var m=u[l];if(m.getAttribute("src")==r||m.getAttribute("data-webpack")==e+i){o=m;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.setAttribute("data-webpack",e+i),o.src=r),t[r]=[a];var d=function(e,n){o.onerror=o.onload=null,clearTimeout(p);var a=t[r];if(delete t[r],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/roundtable/"}(),function(){var t=function(t,e,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=o,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=i,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===t||i===e))return a}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){a=s[r],i=a.getAttribute("data-href");if(i===t||i===e)return a}},r=function(r){return new Promise((function(a,i){var s=n.miniCssF(r),o=n.p+s;if(e(s,o))return a();t(r,o,a,i)}))},a={143:0};n.f.miniCss=function(t,e){var n={69:1,531:1,536:1,571:1,945:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=i);var s=n.p+n.u(e),o=new Error,c=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;o.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,a[1](o)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,s=r[0],o=r[1],c=r[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(c)var l=c(n)}for(e&&e(r);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkroundtable"]=self["webpackChunkroundtable"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8658)}));r=n.O(r)})();
//# sourceMappingURL=app.bc577c1a.js.map