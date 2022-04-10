"use strict";(self["webpackChunkroundtable"]=self["webpackChunkroundtable"]||[]).push([[536],{6394:function(t,e,a){a.r(e),a.d(e,{default:function(){return z}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"new-game"},[a("h1",[t._v("New Game")]),a("div",{staticClass:"game-favorites-and-settings"},[a("div",{staticClass:"favorites"},[a("FavoriteGames",{attrs:{currentSettingsValid:t.valid}})],1),a("div",{staticClass:"settings"},[a("GameSettings",{attrs:{gameSettings:t.newGameSettings,showHeader:!0},on:{change:function(e){return t.setNewGameSettings(e)},saveFavorite:t.saveFavorite,valid:function(e){return t.valid=e}}})],1)]),a("PlayerSelect",{attrs:{selectedPlayers:t.newGameSettings.players},on:{change:function(e){return t.setNewGameSettings(Object.assign({},t.newGameSettings,{players:e}))}}}),a("div",{staticClass:"actions-row"},[a("v-btn",{attrs:{disabled:!t.valid||!t.newGameSettings.players.length,color:"primary"},on:{click:t.startGame}},[t._v(" Start Game ")])],1)],1)},n=[],s=a(3796),r=a(4367),o=(a(3210),a(8309),a(629)),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"section"},[a("ActionHeader",{staticClass:"available-header",attrs:{header:"Players"}},[t.editMode?a("v-btn",{attrs:{color:"success",icon:""},on:{click:function(e){t.editMode=!1}}},[a("v-icon",[t._v("mdi-check")])],1):a("v-btn",{attrs:{icon:""},on:{click:function(e){t.editMode=!0}}},[a("v-icon",[t._v("mdi-pencil")])],1)],1),a("div",{staticClass:"available players"},[t._l(t.players,(function(e){return a("span",{key:e},[t.editMode?a("v-btn",{staticClass:"player-button edit-mode",attrs:{color:"error",rounded:"",outlined:""},on:{click:function(a){return t.removePlayer(e)}}},[a("v-icon",[t._v("mdi-delete")]),a("span",{staticClass:"player"},[t._v(t._s(e))])],1):t.selectedPlayers.includes(e)?a("v-badge",{attrs:{content:t.selectedPlayers.indexOf(e)+1,color:"secondary",overlap:"",bordered:"",left:""}},[a("v-btn",{staticClass:"player-button",attrs:{color:"secondary",rounded:"",outlined:""},on:{click:function(a){t.$emit("change",t.selectedPlayers.filter((function(t){return t!==e})))}}},[t._v(" "+t._s(e)+" ")])],1):a("v-btn",{staticClass:"player-button",attrs:{rounded:"",outlined:""},on:{click:function(a){return t.$emit("change",t.selectedPlayers.concat([e]))}}},[a("span",{staticClass:"player"},[t._v(t._s(e))])])],1)})),t.players.length||t.editMode?t._e():a("div",{staticClass:"text-subtitle-2 text--secondary"},[t._v(" Click "),a("v-icon",{staticClass:"text-subtitle-2 text--secondary"},[t._v("mdi-pencil")]),t._v(" to add players ")],1)],2)],1),t.editMode?a("div",{staticClass:"section"},[a("v-form",{ref:"player-select-form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("div",{staticClass:"new-player-form"},[a("v-text-field",{attrs:{counter:10,rules:t.newPlayerRules,label:"New Player",required:""},model:{value:t.newPlayer,callback:function(e){t.newPlayer=e},expression:"newPlayer"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid||!t.newPlayer,color:"success"},on:{click:t.addPlayer}},[t._v(" Add Player ")])],1)])],1):t._e()])},c=[],d=a(8932),u=(a(6699),a(2023),a(2707),a(2222),a(7327),a(1539),a(7795)),v={name:"PlayerSelect",components:{ActionHeader:u.Z},props:{selectedPlayers:[]},data:function(){return{valid:!0,newPlayer:"",newPlayerRules:[function(t){return!t||t.length<=10||"Too long"}],editMode:!1}},created:function(){var t=this;this.newPlayerRules.push((function(e){return!e||e&&t.newGamePlayers&&!t.newGamePlayers.includes(e.toLowerCase())||"Must be unique"}))},computed:(0,r.Z)((0,r.Z)({},(0,o.Se)(["newGamePlayers"])),{},{players:function(){return(0,d.Z)(this.newGamePlayers).sort()}}),methods:(0,r.Z)((0,r.Z)({},(0,o.OI)(["setNewGamePlayers"])),{},{addPlayer:function(){var t=this.newPlayer.trim();t&&(this.setNewGamePlayers([].concat((0,d.Z)(this.newGamePlayers),[t.toLowerCase()])),this.newPlayer=void 0)},removePlayer:function(t){this.setNewGamePlayers((0,d.Z)(this.newGamePlayers.filter((function(e){return e!==t}))))}})},m=v,f=a(1001),h=a(3453),p=a.n(h),g=a(3274),b=(a(9653),a(6428)),y=a(6952),w=a(8085),G=a(2936),Z=a(144),P=Z.Z.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),C=a(3536),S=a(3325),_=a(4589),k=["aria-atomic","aria-label","aria-live","role","title"],F=(0,S.Z)(y.Z,(0,C.d)(["left","bottom"]),w.Z,G.Z,P).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return(0,r.Z)({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat((0,_.kb)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),a=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",a,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent:function(){if(!this.dot){var t=(0,_.z9)(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(b.Z,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],a=[(0,_.z9)(this)],i=this.$attrs,n=(i["aria-atomic"],i["aria-label"],i["aria-live"],i.role,i.title,(0,g.Z)(i,k));return this.inline&&this.left?a.unshift(e):a.push(e),t("span",{staticClass:"v-badge",attrs:n,class:this.classes},a)}}),B=a(680),N=a(6232),$=a(5978),x=(0,f.Z)(m,l,c,!1,null,"c4597aa6",null),M=x.exports;p()(x,{VBadge:F,VBtn:B.Z,VForm:N.Z,VIcon:b.Z,VTextField:$.Z});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return Object.keys(t.newGameFavorites).length?a("div",{staticClass:"favorite-games"},[a("ActionHeader",{staticClass:"favorite-games-header",attrs:{header:"Favorite Games"}},[t.editMode?a("v-btn",{attrs:{color:"success",icon:""},on:{click:function(e){t.editMode=!1}}},[a("v-icon",[t._v("mdi-check")])],1):a("v-btn",{attrs:{icon:""},on:{click:function(e){t.editMode=!0}}},[a("v-icon",[t._v("mdi-pencil")])],1)],1),t._l(Object.values(t.newGameFavorites),(function(e){return a("span",{key:e.name},[t.editMode?a("v-btn",{staticClass:"fav-button",attrs:{rounded:"",outlined:"",color:"error"},on:{click:function(a){return t.deleteFavorite(e)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "+t._s(e.name)+" ")],1):a("v-btn",{staticClass:"fav-button",attrs:{rounded:"",outlined:"",color:"accent"},on:{click:function(a){return t.applyFavorite(e)}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-star")]),t._v(" "+t._s(e.name)+" ")],1)],1)}))],2):t._e()},R=[],V={name:"FavoriteGames",components:{ActionHeader:u.Z},props:{currentSettingsValid:Boolean},data:function(){return{editMode:!1}},computed:(0,r.Z)({},(0,o.Se)(["newGameSettings","newGameFavorites"])),methods:(0,r.Z)((0,r.Z)({},(0,o.OI)(["setNewGameSettings","setNewGameFavorites"])),{},{applyFavorite:function(t){this.setNewGameSettings((0,r.Z)((0,r.Z)({},this.newGameSettings),t))},deleteFavorite:function(t){var e=(0,r.Z)({},this.newGameFavorites);delete e[t.name],this.setNewGameFavorites(e)}})},E=V,I=(0,f.Z)(E,O,R,!1,null,"2761e164",null),X=I.exports;p()(I,{VBtn:B.Z,VIcon:b.Z});var A=a(4157),q=a(6534),H={name:"NewGameView",components:{PlayerSelect:M,FavoriteGames:X,GameSettings:A.Z},data:function(){return{valid:!0,nameRules:[function(t){return!!t&&!!t.trim()||"Required"},function(t){return t&&t.length<=15||"Too long"}],maxPointsRules:[function(t){return null===t||parseInt(t)>0||"Must be positive"}],stepSizeRules:[function(t){return!!t||"Required"},function(t){return parseInt(t)>0||"Must be positive"}]}},computed:(0,r.Z)({},(0,o.Se)(["newGameSettings","newGameFavorites"])),methods:(0,r.Z)((0,r.Z)({},(0,o.OI)(["setNewGameSettings","setCurrentGameSettings","endCurrentGame","setCurrentGameData","startNewGame","setNewGameFavorites"])),{},{startGame:function(){this.endCurrentGame(),this.startNewGame(this.newGameSettings),q.Z.push("/current")},saveFavorite:function(){var t=(0,r.Z)({},this.newGameSettings);delete t.players,this.setNewGameFavorites((0,r.Z)((0,r.Z)({},this.newGameFavorites),{},(0,s.Z)({},t.name,t)))}})},T=H,Y=(0,f.Z)(T,i,n,!1,null,"09333e25",null),z=Y.exports;p()(Y,{VBtn:B.Z})}}]);
//# sourceMappingURL=new-legacy.58563c31.js.map