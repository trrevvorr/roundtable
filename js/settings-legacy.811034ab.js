"use strict";(self["webpackChunkroundtable"]=self["webpackChunkroundtable"]||[]).push([[571],{3237:function(t,e,n){n.d(e,{Z:function(){return c}});var i=n(4367),o=(n(9653),n(4944),n(3792),n(5648)),s=n(1226),a=n(6505),r=n(3325),c=(0,r.Z)(s.Z,a.Z,o.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return(0,i.Z)((0,i.Z)({"v-card":!0},a.Z.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.Z.options.computed.classes.call(this))},styles:function(){var t=(0,i.Z)({},o.Z.options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})},7118:function(t,e,n){n.d(e,{EB:function(){return c},Qq:function(){return a},ZB:function(){return r},h7:function(){return s}});var i=n(3237),o=n(4589),s=(0,o.Ji)("v-card__actions"),a=(0,o.Ji)("v-card__subtitle"),r=(0,o.Ji)("v-card__text"),c=(0,o.Ji)("v-card__title");i.Z},4497:function(t,e,n){n.d(e,{Z:function(){return Z}});var i=n(4367),o=n(8932),s=n(3796),a=(n(9653),n(3210),n(6699),n(2023),n(1539),n(9826),n(3242)),r=n(5795),c=n(5907),l=n(3944),d=n(390),u=n(423),h=n(5703),v=n(5600),f=n(3325),m=n(1824),g=n(4589),p=(0,f.Z)(c.Z,l.Z,d.Z,u.Z,h.Z,r.Z),Z=p.extend({name:"v-dialog",directives:{ClickOutside:v.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},(0,s.Z)(t,"v-dialog ".concat(this.contentClass).trim(),!0),(0,s.Z)(t,"v-dialog--active",this.isActive),(0,s.Z)(t,"v-dialog--persistent",this.persistent),(0,s.Z)(t,"v-dialog--fullscreen",this.fullscreen),(0,s.Z)(t,"v-dialog--scrollable",this.scrollable),(0,s.Z)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&(0,m.Jk)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d.Z.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===g.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=(0,o.Z)(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(a.Z,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:(0,i.Z)({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=(0,i.Z)((0,i.Z)({},t.style),{},{maxWidth:(0,g.kb)(this.maxWidth),width:(0,g.kb)(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},3576:function(t,e,n){n.d(e,{Z:function(){return m}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.value,"max-width":"400"},on:{input:function(e){return t.$emit("input",e)}}},[n("v-card",[n("v-card-title",[t._v(t._s(t.title))]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:t.deny}},[t._v(t._s(t.denyText))]),n("v-btn",{attrs:{color:"error"},on:{click:t.confirm}},[t._v(t._s(t.confirmText))])],1)],1)],1)},o=[],s={name:"ConfirmationDialog",props:{value:Boolean,title:String,denyText:String,confirmText:String},methods:{confirm:function(){this.$emit("input",!1),this.$emit("confirm")},deny:function(){this.$emit("input",!1),this.$emit("denny")}}},a=s,r=n(1001),c=n(3453),l=n.n(c),d=n(680),u=n(3237),h=n(7118),v=n(4497),f=(0,r.Z)(a,i,o,!1,null,"81ac3860",null),m=f.exports;l()(f,{VBtn:d.Z,VCard:u.Z,VCardActions:h.h7,VCardTitle:h.EB,VDialog:v.Z})},7450:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings"},[n("h1",[t._v("Settings")]),n("v-card",[n("v-card-title",[t._v(" Delete App Data ")]),n("v-card-text",[t._v(" Permanently delete all application data. This cannot be undone. ")]),n("v-card-actions",[n("v-btn",{attrs:{color:"error"},on:{click:function(e){t.deleteDataConfirmation=!0}}},[t._v("Delete Data")])],1)],1),n("ConfirmationDialog",{attrs:{confirmText:"Delete Data",denyText:"Cancel",title:"Permanently delete app data?"},on:{confirm:t.deleteData},model:{value:t.deleteDataConfirmation,callback:function(e){t.deleteDataConfirmation=e},expression:"deleteDataConfirmation"}})],1)},o=[],s=n(3576),a=n(456),r={name:"SettingsView",components:{ConfirmationDialog:s.Z},data:function(){return{deleteDataConfirmation:!1}},methods:{deleteData:function(){(0,a.qk)(),location.reload()}}},c=r,l=n(1001),d=n(3453),u=n.n(d),h=n(680),v=n(3237),f=n(7118),m=(0,l.Z)(c,i,o,!1,null,"94412056",null),g=m.exports;u()(m,{VBtn:h.Z,VCard:v.Z,VCardActions:f.h7,VCardText:f.ZB,VCardTitle:f.EB})}}]);
//# sourceMappingURL=settings-legacy.811034ab.js.map