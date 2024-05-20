"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1967],{369:(b,h,r)=>{r.d(h,{C:()=>i,w:()=>p});var s=r(467),f=r(119),a=r.n(f);const i={SecureStorage:"ionicSecureStorage",IndexedDB:a().INDEXEDDB,LocalStorage:a().LOCALSTORAGE},l={name:"_ionicstorage",storeName:"_ionickv",dbKey:"_ionickey",driverOrder:[i.SecureStorage,i.IndexedDB,i.LocalStorage]};class p{constructor(e=l){this._db=null,this._secureStorageDriver=null;const t=Object.assign({},l,e||{});this._config=t}create(){var e=this;return(0,s.A)(function*(){const t=a().createInstance(e._config);return e._db=t,yield t.setDriver(e._config.driverOrder||[]),e})()}defineDriver(e){var t=this;return(0,s.A)(function*(){return e._driver===i.SecureStorage&&(t._secureStorageDriver=e),a().defineDriver(e)})()}get driver(){var e;return(null===(e=this._db)||void 0===e?void 0:e.driver())||null}assertDb(){if(!this._db)throw new Error("Database not created. Must call create() first");return this._db}get(e){return this.assertDb().getItem(e)}set(e,t){return this.assertDb().setItem(e,t)}remove(e){return this.assertDb().removeItem(e)}clear(){return this.assertDb().clear()}length(){return this.assertDb().length()}keys(){return this.assertDb().keys()}forEach(e){return this.assertDb().iterate(e)}setEncryptionKey(e){var t;if(!this._secureStorageDriver)throw new Error("@ionic-enterprise/secure-storage not installed. Encryption support not available");null===(t=this._secureStorageDriver)||void 0===t||t.setEncryptionKey(e)}}},4393:(b,h,r)=>{r.d(h,{FC:()=>i,SD:()=>p,T9:()=>l});var s=r(467),f=r(369);const a=new f.w({name:"_localDB",driverOrder:[f.C.IndexedDB,f.C.LocalStorage]}),i=function(){var u=(0,s.A)(function*(e){var t;yield a.create(),(e=null!==(t=e)&&void 0!==t?t:{}).params=e.params||{};try{var c=(yield a.get("setting"))||{};return"function"==typeof e.callback&&e.callback(c),c}catch(m){"function"==typeof e.callback&&e.callback(),console.error(m)}return{}});return function(t){return u.apply(this,arguments)}}(),l=function(){var u=(0,s.A)(function*(e){var t;yield a.create();var d="setting";(e=null!==(t=e)&&void 0!==t?t:{}).params=e.params||{};try{var c=(yield a.get(d))||{};Object.assign(c,e.params),yield a.set(d,c),"function"==typeof e.callback&&e.callback(c)}catch(m){"function"==typeof e.callback&&e.callback(),console.error(m)}});return function(t){return u.apply(this,arguments)}}(),p=function(){var u=(0,s.A)(function*(e){var t;yield a.create(),(e=null!==(t=e)&&void 0!==t?t:{}).params=e.params||{};try{yield a.set("setting",{}),"function"==typeof e.callback&&e.callback()}catch(c){"function"==typeof e.callback&&e.callback(),console.error(c)}});return function(t){return u.apply(this,arguments)}}()},1967:(b,h,r)=>{r.r(h),r.d(h,{AppLoadingPageModule:()=>y});var s=r(177),f=r(9417),a=r(8974),i=r(2175),l=r(467),p=r(1850),u=r(4393),e=r(8833),t=r(4438);const c=[{path:"",component:(()=>{var n;class g{constructor(){}ngOnInit(){var o=this;(0,l.A)(function*(){o.checkBiometric()})()}onIonRefresher(o){this.checkBiometric(),setTimeout(()=>{o.target.complete()},3e3)}checkBiometric(){var o=this;return(0,l.A)(function*(){(yield(0,u.FC)()).Biometric?p.qG.verifyIdentity({subtitle:"\u1ee8ng d\u1ee5ng \u0111\xe3 \u0111\u01b0\u1ee3c b\u1ea3o v\u1ec7 b\u1edfi sinh tr\u1eafc h\u1ecdc",useFallback:!0,maxAttempts:5}).then(_=>{console.info("NativeBiometric.verifyIdentity",_),o.checkAuth()}).catch(_=>{console.error("NativeBiometric.verifyIdentity",_)}):o.checkAuth()})()}checkAuth(){return(0,l.A)(function*(){window.location.replace(e._.TABS)})()}}return(n=g).\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.VBU({type:n,selectors:[["app-app-loading"]],decls:3,vars:0,consts:[["slot","fixed",3,"ionRefresh"]],template:function(o,_){1&o&&(t.j41(0,"ion-content")(1,"ion-refresher",0),t.bIt("ionRefresh",function(D){return _.onIonRefresher(D)}),t.nrm(2,"ion-refresher-content"),t.k0s()())},dependencies:[a.W9,a.To,a.Ki]}),g})()}];let m=(()=>{var n;class g{}return(n=g).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[i.iI.forChild(c),i.iI]}),g})(),y=(()=>{var n;class g{}return(n=g).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[s.MD,f.YN,a.bv,m]}),g})()}}]);