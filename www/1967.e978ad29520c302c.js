"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1967],{4393:(A,h,r)=>{r.d(h,{FC:()=>v,SD:()=>y,T9:()=>f});var g=r(467),d=r(369);const o=new d.w({name:"_localDB",driverOrder:[d.C.IndexedDB,d.C.LocalStorage]}),v=function(){var l=(0,g.A)(function*(e){var t;yield o.create(),(e=null!==(t=e)&&void 0!==t?t:{}).params=e.params||{};try{var c=(yield o.get("setting"))||{};return"function"==typeof e.callback&&e.callback(c),c}catch(p){"function"==typeof e.callback&&e.callback(),console.error(p)}return{}});return function(t){return l.apply(this,arguments)}}(),f=function(){var l=(0,g.A)(function*(e){var t;yield o.create();var u="setting";(e=null!==(t=e)&&void 0!==t?t:{}).params=e.params||{};try{var c=(yield o.get(u))||{};Object.assign(c,e.params),yield o.set(u,c),"function"==typeof e.callback&&e.callback(c)}catch(p){"function"==typeof e.callback&&e.callback(),console.error(p)}});return function(t){return l.apply(this,arguments)}}(),y=function(){var l=(0,g.A)(function*(e){var t;yield o.create(),(e=null!==(t=e)&&void 0!==t?t:{}).params=e.params||{};try{yield o.set("setting",{}),"function"==typeof e.callback&&e.callback()}catch(c){"function"==typeof e.callback&&e.callback(),console.error(c)}});return function(t){return l.apply(this,arguments)}}()},1967:(A,h,r)=>{r.r(h),r.d(h,{AppLoadingPageModule:()=>L});var g=r(177),d=r(9417),o=r(4488),v=r(2175),f=r(467),y=r(1850),l=r(4393),e=r(8833),t=r(4438);const c=[{path:"",component:(()=>{var a;class i{constructor(){}ngOnInit(){var n=this;(0,f.A)(function*(){n.checkBiometric()})()}onIonRefresher(n){this.checkBiometric(),setTimeout(()=>{n.target.complete()},3e3)}checkBiometric(){var n=this;return(0,f.A)(function*(){(yield(0,l.FC)()).Biometric?y.qG.verifyIdentity({subtitle:"\u1ee8ng d\u1ee5ng \u0111\xe3 \u0111\u01b0\u1ee3c b\u1ea3o v\u1ec7 b\u1edfi sinh tr\u1eafc h\u1ecdc",useFallback:!0,maxAttempts:5}).then(m=>{console.info("NativeBiometric.verifyIdentity",m),n.checkAuth()}).catch(m=>{console.error("NativeBiometric.verifyIdentity",m)}):n.checkAuth()})()}checkAuth(){return(0,f.A)(function*(){window.location.replace(e._.TABS)})()}}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275cmp=t.VBU({type:a,selectors:[["app-app-loading"]],decls:3,vars:0,consts:[["slot","fixed",3,"ionRefresh"]],template:function(n,m){1&n&&(t.j41(0,"ion-content")(1,"ion-refresher",0),t.bIt("ionRefresh",function(P){return m.onIonRefresher(P)}),t.nrm(2,"ion-refresher-content"),t.k0s()())},dependencies:[o.W9,o.To,o.Ki]}),i})()}];let p=(()=>{var a;class i{}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[v.iI.forChild(c),v.iI]}),i})(),L=(()=>{var a;class i{}return(a=i).\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[g.MD,d.YN,o.bv,p]}),i})()}}]);