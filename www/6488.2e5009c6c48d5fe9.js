"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6488],{4393:(A,F,i)=>{i.d(F,{FC:()=>O,SD:()=>p,T9:()=>t});var h=i(467),b=i(369);const l=new b.w({name:"_localDB",driverOrder:[b.C.IndexedDB,b.C.LocalStorage]}),O=function(){var a=(0,h.A)(function*(n){var o;yield l.create(),(n=null!==(o=n)&&void 0!==o?o:{}).params=n.params||{};try{var m=(yield l.get("setting"))||{};return"function"==typeof n.callback&&n.callback(m),m}catch(_){"function"==typeof n.callback&&n.callback(),console.error(_)}return{}});return function(o){return a.apply(this,arguments)}}(),t=function(){var a=(0,h.A)(function*(n){var o;yield l.create();var d="setting";(n=null!==(o=n)&&void 0!==o?o:{}).params=n.params||{};try{var m=(yield l.get(d))||{};Object.assign(m,n.params),yield l.set(d,m),"function"==typeof n.callback&&n.callback(m)}catch(_){"function"==typeof n.callback&&n.callback(),console.error(_)}});return function(o){return a.apply(this,arguments)}}(),p=function(){var a=(0,h.A)(function*(n){var o;yield l.create(),(n=null!==(o=n)&&void 0!==o?o:{}).params=n.params||{};try{yield l.set("setting",{}),"function"==typeof n.callback&&n.callback()}catch(m){"function"==typeof n.callback&&n.callback(),console.error(m)}});return function(o){return a.apply(this,arguments)}}()},1038:(A,F,i)=>{i.d(F,{v:()=>l});var h=i(467),b=i(7158);const l=function(){var O=(0,h.A)(function*(t){t.params=t.params||{};var p=[];t.params.subFolder&&(t.params.subFolder=t.params.subFolder.replace(/[^a-zA-Z0-9\/]/gm,"").replace(/\/+/gm,"/").replace(/^\//,"").replace(/\/$/,""),t.params.subFolder&&p.push(t.params.subFolder)),t.params.isconvertvideo=!!t.params.isconvertvideo,t.params.isconvertpdf2image=!!t.params.isconvertpdf2image,t.params.isconvertoffice2image=!!t.params.isconvertoffice2image,t.params.isresizeimage=!!t.params.isresizeimage;const a=new FormData;a.append("path",p.join("/")),a.append("types",t.params.fileType||null),a.append("file",t.params.file||null),a.append("base64",t.params.base64||!1),a.append("isconvertvideo",t.params.isconvertvideo),a.append("isconvertpdf2image",t.params.isconvertpdf2image),a.append("isconvertoffice2image",t.params.isconvertoffice2image),a.append("isresizeimage",t.params.isresizeimage),(0,b.ZD)({url:"files",params:a,success:n=>{"function"==typeof t.callback&&t.callback(n.data||null)},error:n=>{"function"==typeof t.callback&&t.callback(),console.error(t,n)},loading:t.loading})});return function(p){return O.apply(this,arguments)}}()},9946:(A,F,i)=>{i.d(F,{ks:()=>O,sh:()=>t,z:()=>l});var h=i(467),b=i(7158);const l=function(){var p=(0,h.A)(function*(a){a.params=a.params||{},(0,b.hm)({url:"api/User/get-user",params:{},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var o;"function"==typeof a.callback&&a.callback(null==n||null===(o=n.response)||void 0===o?void 0:o.data),console.error(n)},loading:null==a?void 0:a.loading})});return function(n){return p.apply(this,arguments)}}(),O=function(){var p=(0,h.A)(function*(a){var n,o,d,m,_;a.params=a.params||{},(0,b.IH)({url:"api/User/update-user",params:{UserId:null!==(n=a.params.UserId)&&void 0!==n?n:null,FullName:null!==(o=a.params.FullName)&&void 0!==o?o:null,Address:null!==(d=a.params.Address)&&void 0!==d?d:null,Gender:null!==(m=a.params.Gender)&&void 0!==m?m:null,Birthday:null!==(_=a.params.Birthday)&&void 0!==_?_:null},success:R=>{"function"==typeof a.callback&&a.callback(R.data||null)},error:R=>{var T;"function"==typeof a.callback&&a.callback(null==R||null===(T=R.response)||void 0===T?void 0:T.data),console.error(R)},loading:null==a?void 0:a.loading})});return function(n){return p.apply(this,arguments)}}(),t=function(){var p=(0,h.A)(function*(a){var n,o;a.params=a.params||{},(0,b.IH)({url:"api/User/update-avatar",params:{UserId:null!==(n=a.params.UserId)&&void 0!==n?n:null,Avatar:null!==(o=a.params.Avatar)&&void 0!==o?o:null},success:d=>{"function"==typeof a.callback&&a.callback(d.data||null)},error:d=>{var m;"function"==typeof a.callback&&a.callback(null==d||null===(m=d.response)||void 0===m?void 0:m.data),console.error(d)},loading:null==a?void 0:a.loading})});return function(n){return p.apply(this,arguments)}}()},6488:(A,F,i)=>{i.r(F),i.d(F,{UserPageModule:()=>$});var h=i(177),b=i(9417),l=i(4488),O=i(2175),t=i(467),p=i(23),a=i(1038),n=i(9946),o=i(6539),d=i(1312),m=i(8833),_=i(5312),R=i(3524),T=i(4393),e=i(4438),y=i(345),k=i(4842);function I(c,P){if(1&c){const U=e.RV6();e.j41(0,"div",29)(1,"div",30)(2,"h4",31),e.EFF(3),e.nI1(4,"translate"),e.k0s(),e.j41(5,"p",31),e.EFF(6,"Qu\xfd kh\xe1ch c\xf3 ch\u1eafc mu\u1ed1n \u0111\u0103ng xu\u1ea5t"),e.k0s()(),e.j41(7,"div",32)(8,"div",33)(9,"ion-button",34),e.bIt("click",function(){e.eBV(U),e.XpG();const r=e.sdS(92);return e.Njj(null==r?null:r.dismiss())}),e.EFF(10),e.nI1(11,"translate"),e.k0s()(),e.j41(12,"div",33)(13,"ion-button",35),e.bIt("click",function(r){e.eBV(U);const g=e.XpG(),s=e.sdS(92);return null==s||s.dismiss(),e.Njj(g.signOut(r))}),e.EFF(14),e.nI1(15,"translate"),e.k0s()()()()}2&c&&(e.R7$(3),e.JRh(e.bMT(4,3,"SignOut")),e.R7$(7),e.JRh(e.bMT(11,5,"Cancel")),e.R7$(4),e.JRh(e.bMT(15,7,"Confirm")))}const C=[{path:"",component:(()=>{var c;class P{constructor(u,r,g,s){var v=this;this.titleService=u,this.translateService=r,this.loadingController=g,this.toastController=s,this.APP_ROUTE=m._,this.api_url=_.c.api_url,this.params={},this.APP_FUNC_FormatMobileNumber=d.IV,(0,t.A)(function*(){v.loading=yield v.loadingController.create({message:""})})()}ngOnInit(){var u=this;(0,t.A)(function*(){(yield(0,o.kU)())&&u.refreshData()})()}onIonRefresher(u){this.refreshData(()=>{u.target.complete()})}refreshData(u){var r=this;return(0,t.A)(function*(){(0,n.z)({loading:g=>{var s,v;g?null===(s=r.loading)||void 0===s||s.present():null===(v=r.loading)||void 0===v||v.dismiss()},callback:g=>{var s,v,f;null!=g&&g.Succeeded?(r.user=null!==(s=g.Data)&&void 0!==s?s:{},null!==(v=r.user)&&void 0!==v&&v.FullName?r.titleService.setTitle(null===(f=r.user)||void 0===f?void 0:f.FullName):r.translateService.stream("User").subscribe(E=>{r.titleService.setTitle(E)})):(0,R.cX)(r.toastController,{},g).then(E=>E.present()),u&&u()}})})()}signOut(u){return(0,t.A)(function*(){yield(0,T.SD)(),(0,p.wn)({callback:()=>{window.location.href=m._.AUTH}})})()}changeAvatar(u){var r=this;return(0,t.A)(function*(){(0,d.oG)({accept:"image/*"},g=>{(0,a.v)({loading:s=>{var v,f;s?null===(v=r.loading)||void 0===v||v.present():null===(f=r.loading)||void 0===f||f.dismiss()},params:{file:g[0],subFolder:"avatar",fileType:"image"},callback:s=>{var v;0==(null==s?void 0:s.ReturnCode)&&(0,n.sh)({loading:f=>{var E,M;f?null===(E=r.loading)||void 0===E||E.present():null===(M=r.loading)||void 0===M||M.dismiss()},params:{UserId:null===(v=r.user)||void 0===v?void 0:v.UserId,Avatar:`${s.path}/${s.file.name}`},callback:f=>{null!=f&&f.Succeeded?r.refreshData():(0,R.cX)(r.toastController,{},f).then(E=>E.present())}})}})})})()}}return(c=P).\u0275fac=function(u){return new(u||c)(e.rXU(y.hE),e.rXU(k.c$),e.rXU(l.Xi),e.rXU(l.K_))},c.\u0275cmp=e.VBU({type:c,selectors:[["app-user"]],decls:94,vars:57,consts:[["color","primary"],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"card-info"],[1,"bg"],[1,"avatar"],[3,"src"],[1,"change-avatar"],["color","light",3,"click"],["color","primary","src","../../../assets/icon/ion-icon/camera-shape.svg"],[1,"text-center","text-primary","mt-3","mb-0"],[1,"container","pt-3","pb-5"],["mode","ios","lines","none"],["button","","detail","true","color","light","detail-icon","chevron-forward-outline",3,"href"],["slot","start","src","../../../assets/icon/ion-icon/person-circle.svg"],["slot","start","src","../../../assets/icon/ion-icon/verhicle-circle.svg"],["slot","start","src","../../../assets/icon/ion-icon/bill-circle.svg"],["slot","start","src","../../../assets/icon/ion-icon/setting-circle.svg"],["slot","start","src","../../../assets/icon/ion-icon/chat-circle.svg"],["slot","start","src","../../../assets/icon/ion-icon/book-circle.svg"],["slot","start","src","../../../assets/icon/ion-icon/persons-circle.svg"],["slot","start","src","../../../assets/icon/ion-icon/book-open-circle.svg"],[1,"mt-3","mb-5"],["mode","ios","color","light","expand","block","id","click-trigger-modal-signout",1,"btn-sign-out"],["slot","start","src","../../../assets/icon/ion-icon/sign-out.svg"],["trigger","click-trigger-modal-signout",1,"ion-modal-small"],["modalSignOut",""],[1,"p-4"],[1,"text-center"],[1,"mb-4"],[1,"row"],[1,"col-6","pr-1"],["fill","outline","color","medium","expand","block","shape","round",3,"click"],["color","primary","expand","block","shape","round",3,"click"]],template:function(u,r){if(1&u&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5,"Th\xf4ng tin t\xe0i kho\u1ea3n"),e.k0s()()(),e.j41(6,"ion-content",3)(7,"ion-refresher",4),e.bIt("ionRefresh",function(s){return r.onIonRefresher(s)}),e.nrm(8,"ion-refresher-content"),e.k0s(),e.j41(9,"div",5),e.nrm(10,"div",6),e.j41(11,"div",7)(12,"ion-avatar"),e.nrm(13,"img",8),e.k0s(),e.j41(14,"div",9)(15,"ion-button",10),e.bIt("click",function(s){return r.changeAvatar(s)}),e.nrm(16,"ion-icon",11),e.k0s()()(),e.j41(17,"h5",12)(18,"b"),e.EFF(19),e.nI1(20,"translate"),e.k0s()()(),e.j41(21,"div",13)(22,"ion-list",14)(23,"ion-item",15),e.nrm(24,"ion-icon",16),e.j41(25,"ion-label"),e.EFF(26),e.nI1(27,"translate"),e.k0s()(),e.j41(28,"ion-item",15),e.nrm(29,"ion-icon",17),e.j41(30,"ion-label"),e.EFF(31),e.nI1(32,"translate"),e.k0s()(),e.j41(33,"ion-item",15),e.nrm(34,"ion-icon",18),e.j41(35,"ion-label"),e.EFF(36),e.nI1(37,"translate"),e.k0s()(),e.j41(38,"ion-item",15),e.nrm(39,"ion-icon",18),e.j41(40,"ion-label"),e.EFF(41),e.nI1(42,"translate"),e.k0s()()(),e.j41(43,"ion-list",14)(44,"ion-item",15),e.nrm(45,"ion-icon",19),e.j41(46,"ion-label"),e.EFF(47),e.nI1(48,"translate"),e.k0s()(),e.j41(49,"ion-item",15),e.nrm(50,"ion-icon",20),e.j41(51,"ion-label"),e.EFF(52),e.nI1(53,"translate"),e.k0s()(),e.j41(54,"ion-item",15),e.nrm(55,"ion-icon",21),e.j41(56,"ion-label"),e.EFF(57),e.nI1(58,"translate"),e.k0s()(),e.j41(59,"ion-item",15),e.nrm(60,"ion-icon",21),e.j41(61,"ion-label"),e.EFF(62),e.nI1(63,"translate"),e.k0s()()(),e.j41(64,"ion-list",14)(65,"ion-item",15),e.nrm(66,"ion-icon",22),e.j41(67,"ion-label"),e.EFF(68),e.nI1(69,"translate"),e.k0s()(),e.j41(70,"ion-item",15),e.nrm(71,"ion-icon",23),e.j41(72,"ion-label"),e.EFF(73),e.nI1(74,"translate"),e.k0s()(),e.j41(75,"ion-item",15),e.nrm(76,"ion-icon",23),e.j41(77,"ion-label"),e.EFF(78),e.nI1(79,"translate"),e.k0s()(),e.j41(80,"ion-item",15),e.nrm(81,"ion-icon",23),e.j41(82,"ion-label"),e.EFF(83),e.nI1(84,"translate"),e.k0s()()(),e.j41(85,"div",24)(86,"ion-button",25),e.nrm(87,"ion-icon",26),e.j41(88,"ion-label",0),e.EFF(89),e.nI1(90,"translate"),e.k0s()()()(),e.j41(91,"ion-modal",27,28),e.DNE(93,I,16,9,"ng-template"),e.k0s()()),2&u){let g;e.R7$(3),e.Y8G("defaultHref",r.APP_ROUTE.TABS_DEFAULT),e.R7$(3),e.Y8G("fullscreen",!0),e.R7$(7),e.Y8G("src",null!=r.user&&r.user.Avatar?r.api_url+"readfile/"+(null==r.user?null:r.user.Avatar):"assets/favicon/favicon.svg",e.B4B),e.R7$(6),e.JRh(null!==(g=null==r.user?null:r.user.FullName)&&void 0!==g?g:e.bMT(20,29,"NotUpdate")),e.R7$(4),e.Y8G("href",r.APP_ROUTE.USER_INFO),e.R7$(3),e.JRh(e.bMT(27,31,"UserInfo")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.VEHICLE),e.R7$(3),e.JRh(e.bMT(32,33,"Vehicle")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.ORDER_INFO),e.R7$(3),e.JRh(e.bMT(37,35,"OrderHistory")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.BILL_INFO),e.R7$(3),e.JRh(e.bMT(42,37,"BillHistory")),e.R7$(3),e.Y8G("href",r.APP_ROUTE.SETTING),e.R7$(3),e.JRh(e.bMT(48,39,"Setting")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.FEEDBACK),e.R7$(3),e.JRh(e.bMT(53,41,"Feedback")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.USER_MANUAL),e.R7$(3),e.JRh(e.bMT(58,43,"UseManual")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.SUPPORT),e.R7$(3),e.JRh(e.bMT(63,45,"Support")),e.R7$(3),e.Y8G("href",r.APP_ROUTE.ABOUT_US),e.R7$(3),e.JRh(e.bMT(69,47,"AboutUs")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.POLICIES_AND_REGULATIONS),e.R7$(3),e.JRh(e.bMT(74,49,"PoliciesAndRegulations")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.SALES_AND_PAYMENT_POLICIES),e.R7$(3),e.JRh(e.bMT(79,51,"SalesAndPaymentPolicies")),e.R7$(2),e.Y8G("href",r.APP_ROUTE.TERMS_OF_USE),e.R7$(3),e.JRh(e.bMT(84,53,"TermsOfUse")),e.R7$(6),e.JRh(e.bMT(90,55,"SignOut"))}},dependencies:[l.mC,l.Jm,l.QW,l.W9,l.eU,l.iq,l.uz,l.he,l.nf,l.To,l.Ki,l.BC,l.ai,l.Sb,l.el,k.D9],styles:[".card-info[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{padding:3rem 1rem;background-color:var(--ion-color-primary);background-image:url(bg-charging-location.1f27cf83f2b3c5d2.svg);background-repeat:no-repeat;background-position:center center;background-size:auto 200%}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{position:relative;z-index:1;width:7rem;margin:-3rem auto auto}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:7rem;height:7rem;border:.125rem solid var(--ion-color-light)}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .change-avatar[_ngcontent-%COMP%]{position:absolute;z-index:2;bottom:0;right:0}.card-info[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .change-avatar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%}.card-info[_ngcontent-%COMP%]   .icon-w24[_ngcontent-%COMP%]{display:inline-block;width:24px}.card-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}ion-thumbnail[_ngcontent-%COMP%]{--size: 6rem;--border-radius: 50%;margin:auto;cursor:pointer}ion-list[_ngcontent-%COMP%]{margin:1.25rem 0;border-radius:1rem}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 3rem}"]}),P})()}];let j=(()=>{var c;class P{}return(c=P).\u0275fac=function(u){return new(u||c)},c.\u0275mod=e.$C({type:c}),c.\u0275inj=e.G2t({imports:[O.iI.forChild(C),O.iI]}),P})();var S=i(9500);let $=(()=>{var c;class P{}return(c=P).\u0275fac=function(u){return new(u||c)},c.\u0275mod=e.$C({type:c}),c.\u0275inj=e.G2t({imports:[h.MD,b.YN,l.bv,j,S.x]}),P})()}}]);