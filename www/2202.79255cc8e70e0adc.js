"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2202],{1038:(k,R,d)=>{d.d(R,{v:()=>o});var h=d(467),I=d(7158);const o=function(){var F=(0,h.A)(function*(l){l.params=l.params||{};var p=[];l.params.subFolder&&(l.params.subFolder=l.params.subFolder.replace(/[^a-zA-Z0-9\/]/gm,"").replace(/\/+/gm,"/").replace(/^\//,"").replace(/\/$/,""),l.params.subFolder&&p.push(l.params.subFolder)),l.params.isconvertvideo=!!l.params.isconvertvideo,l.params.isconvertpdf2image=!!l.params.isconvertpdf2image,l.params.isconvertoffice2image=!!l.params.isconvertoffice2image,l.params.isresizeimage=!!l.params.isresizeimage;const a=new FormData;a.append("path",p.join("/")),a.append("types",l.params.fileType||null),a.append("file",l.params.file||null),a.append("base64",l.params.base64||!1),a.append("isconvertvideo",l.params.isconvertvideo),a.append("isconvertpdf2image",l.params.isconvertpdf2image),a.append("isconvertoffice2image",l.params.isconvertoffice2image),a.append("isresizeimage",l.params.isresizeimage),(0,I.ZD)({url:"files",params:a,success:e=>{"function"==typeof l.callback&&l.callback(e.data||null)},error:e=>{"function"==typeof l.callback&&l.callback(),console.error(l,e)},loading:l.loading})});return function(p){return F.apply(this,arguments)}}()},9946:(k,R,d)=>{d.d(R,{ks:()=>F,sh:()=>l,z:()=>o});var h=d(467),I=d(7158);const o=function(){var p=(0,h.A)(function*(a){a.params=a.params||{},(0,I.hm)({url:"api/User/get-user",params:{},success:e=>{"function"==typeof a.callback&&a.callback(e.data||null)},error:e=>{var f;"function"==typeof a.callback&&a.callback(null==e||null===(f=e.response)||void 0===f?void 0:f.data),console.error(e)},loading:null==a?void 0:a.loading})});return function(e){return p.apply(this,arguments)}}(),F=function(){var p=(0,h.A)(function*(a){var e,f,v,_,M;a.params=a.params||{},(0,I.IH)({url:"api/User/update-user",params:{UserId:null!==(e=a.params.UserId)&&void 0!==e?e:null,FullName:null!==(f=a.params.FullName)&&void 0!==f?f:null,Address:null!==(v=a.params.Address)&&void 0!==v?v:null,Gender:null!==(_=a.params.Gender)&&void 0!==_?_:null,Birthday:null!==(M=a.params.Birthday)&&void 0!==M?M:null},success:U=>{"function"==typeof a.callback&&a.callback(U.data||null)},error:U=>{var C;"function"==typeof a.callback&&a.callback(null==U||null===(C=U.response)||void 0===C?void 0:C.data),console.error(U)},loading:null==a?void 0:a.loading})});return function(e){return p.apply(this,arguments)}}(),l=function(){var p=(0,h.A)(function*(a){var e,f;a.params=a.params||{},(0,I.IH)({url:"api/User/update-avatar",params:{UserId:null!==(e=a.params.UserId)&&void 0!==e?e:null,Avatar:null!==(f=a.params.Avatar)&&void 0!==f?f:null},success:v=>{"function"==typeof a.callback&&a.callback(v.data||null)},error:v=>{var _;"function"==typeof a.callback&&a.callback(null==v||null===(_=v.response)||void 0===_?void 0:_.data),console.error(v)},loading:null==a?void 0:a.loading})});return function(e){return p.apply(this,arguments)}}()},2202:(k,R,d)=>{d.r(R),d.d(R,{UserInfoPageModule:()=>D});var h=d(177),I=d(9417),o=d(4488),F=d(2175),l=d(467),p=d(9946),a=d(7518),e=d(4438),f=d(4842);function v(i,m){if(1&i){const s=e.RV6();e.qex(0),e.j41(1,"ion-header")(2,"ion-toolbar")(3,"ion-buttons",1)(4,"ion-button",2),e.bIt("click",function(n){e.eBV(s);const r=e.XpG();return e.Njj(r.close(n))}),e.nrm(5,"ion-icon",3),e.k0s()(),e.j41(6,"ion-title"),e.EFF(7),e.nI1(8,"translate"),e.k0s()()(),e.j41(9,"ion-content",4)(10,"ion-list",5)(11,"div",6)(12,"label"),e.EFF(13),e.nI1(14,"translate"),e.j41(15,"span",7),e.EFF(16,"*"),e.k0s()(),e.j41(17,"div",8)(18,"ion-item")(19,"ion-input",9),e.bIt("ionChange",function(n){e.eBV(s);const r=e.XpG();return e.Njj(r.changeFullName(n))}),e.nI1(20,"translate"),e.k0s()()()(),e.j41(21,"div",6)(22,"label"),e.EFF(23),e.nI1(24,"translate"),e.k0s(),e.j41(25,"div",8)(26,"ion-item")(27,"ion-textarea",10),e.bIt("ionChange",function(n){e.eBV(s);const r=e.XpG();return e.Njj(r.changeAddress(n))}),e.nI1(28,"translate"),e.k0s()()()()()(),e.j41(29,"ion-footer",4)(30,"ion-button",11),e.bIt("click",function(n){e.eBV(s);const r=e.XpG();return e.Njj(r.submit(n))}),e.j41(31,"ion-label"),e.EFF(32),e.nI1(33,"translate"),e.k0s()()(),e.bVm()}if(2&i){const s=e.XpG();e.R7$(7),e.JRh(e.bMT(8,9,"UpdateInfo")),e.R7$(6),e.SpI("",e.bMT(14,11,"FullName")," "),e.R7$(6),e.FS9("placeholder",e.bMT(20,13,"FullName")),e.Y8G("value",s.user.FullName),e.R7$(4),e.JRh(e.bMT(24,15,"Address")),e.R7$(4),e.FS9("placeholder",e.bMT(28,17,"Address")),e.Y8G("autoGrow",!0)("value",s.user.Address),e.R7$(5),e.JRh(e.bMT(33,19,"Save"))}}let _=(()=>{var i;class m{constructor(t,n,r){var c=this;this.modalController=t,this.toastController=n,this.loadingController=r,this.user={},(0,l.A)(function*(){c.loading=yield c.loadingController.create({message:""})})()}ngOnInit(){(0,p.z)({loading:t=>{var n,r;t?null===(n=this.loading)||void 0===n||n.present():null===(r=this.loading)||void 0===r||r.dismiss()},callback:t=>{var n;this.response=t,null!=t&&t.Succeeded?this.user=null!==(n=t.Data)&&void 0!==n?n:{}:(0,a.cX)(this.toastController,{},t).then(r=>r.present())}})}close(t){var n=this;return(0,l.A)(function*(){n.modalController.dismiss(null,"cancel")})()}submit(t){var n=this;return(0,l.A)(function*(){(0,p.ks)({loading:r=>{var c,u;r?null===(c=n.loading)||void 0===c||c.present():null===(u=n.loading)||void 0===u||u.dismiss()},params:n.user,callback:r=>{n.response=r,null!=r&&r.Succeeded?n.modalController.dismiss(null,"success"):(0,a.cX)(n.toastController,{},r).then(c=>c.present())}})})()}changeFullName(t){var n=this;return(0,l.A)(function*(){n.user.FullName=t.detail.value})()}changeAddress(t){var n=this;return(0,l.A)(function*(){n.user.Address=t.detail.value})()}}return(i=m).\u0275fac=function(t){return new(t||i)(e.rXU(o.W3),e.rXU(o.K_),e.rXU(o.Xi))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-modal-update-user"]],decls:1,vars:1,consts:[[4,"ngIf"],["slot","end"],["color","dark",3,"click"],["name","close-outline"],[1,"ion-padding"],["lines","none"],[1,"form-group"],[1,"text-danger"],[1,"ion-item-input-custom"],[3,"placeholder","value","ionChange"],[3,"autoGrow","placeholder","value","ionChange"],["mode","md","size","default","expand","full","shape","round",1,"ion-no-margin",3,"click"]],template:function(t,n){1&t&&e.DNE(0,v,34,21,"ng-container",0),2&t&&e.Y8G("ngIf",null==n.response?null:n.response.Succeeded)},dependencies:[h.bT,o.Jm,o.QW,o.W9,o.M0,o.eU,o.iq,o.$w,o.uz,o.he,o.nf,o.nc,o.BC,o.ai,o.Gw,f.D9],styles:["ion-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{min-height:7rem}"]}),m})();var M=d(5312),U=d(1038),C=d(6539),P=d(1312),j=d(8833);function y(i,m){1&i&&(e.j41(0,"div",7),e.nrm(1,"ion-spinner",8),e.k0s())}function $(i,m){if(1&i){const s=e.RV6();e.j41(0,"div",9)(1,"ion-thumbnail",10),e.bIt("click",function(n){e.eBV(s);const r=e.XpG();return e.Njj(r.changeAvatar(n))}),e.nrm(2,"img",11),e.k0s(),e.j41(3,"ion-card",12)(4,"ion-card-content")(5,"div",13)(6,"small",14),e.EFF(7),e.nI1(8,"translate"),e.k0s(),e.j41(9,"p",15)(10,"b",16),e.EFF(11),e.nI1(12,"translate"),e.k0s()()(),e.j41(13,"div",13)(14,"small",14),e.EFF(15),e.nI1(16,"translate"),e.k0s(),e.j41(17,"p",15),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"div",13)(21,"small",14),e.EFF(22),e.nI1(23,"translate"),e.k0s(),e.j41(24,"p",15),e.EFF(25),e.nI1(26,"translate"),e.k0s()(),e.j41(27,"div",13)(28,"small",14),e.EFF(29),e.nI1(30,"translate"),e.k0s(),e.j41(31,"p",15),e.EFF(32),e.nI1(33,"translate"),e.k0s()()()()()}if(2&i){const s=e.XpG();e.R7$(2),e.Y8G("src",s.user.Avatar?s.api_url+"readfile/"+s.user.Avatar:"assets/favicon/favicon.svg",e.B4B),e.R7$(5),e.JRh(e.bMT(8,9,"FullName")),e.R7$(4),e.JRh(s.user.FullName||e.bMT(12,11,"NotUpdate")),e.R7$(4),e.JRh(e.bMT(16,13,"Mobile")),e.R7$(3),e.JRh(s.APP_FUNC_FormatMobileNumber(s.user.PhoneNumber)||e.bMT(19,15,"NotUpdate")),e.R7$(4),e.JRh(e.bMT(23,17,"Email")),e.R7$(3),e.JRh((null==s.user.Person?null:s.user.Person.Email)||e.bMT(26,19,"NotUpdate")),e.R7$(4),e.JRh(e.bMT(30,21,"Address")),e.R7$(3),e.JRh(s.user.Address||e.bMT(33,23,"NotUpdate"))}}function E(i,m){if(1&i){const s=e.RV6();e.j41(0,"ion-footer")(1,"div",17)(2,"ion-button",18),e.bIt("click",function(n){e.eBV(s);const r=e.XpG();return e.Njj(r.presentModalUpdateUser(n))}),e.nrm(3,"ion-icon",19),e.j41(4,"ion-label"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()()()}2&i&&(e.R7$(5),e.JRh(e.bMT(6,1,"UpdateInfo")))}const G=[{path:"",component:(()=>{var i;class m{constructor(t,n,r){var c=this;this.modalController=t,this.toastController=n,this.loadingController=r,this.APP_ROUTE=j._,this.api_url=M.c.api_url,this.APP_FUNC_FormatMobileNumber=P.IV,(0,l.A)(function*(){c.loading=yield c.loadingController.create({message:""})})()}ngOnInit(){var t=this;(0,l.A)(function*(){(yield(0,C.kU)())&&t.refreshData()})()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshData(t){var n=this;return(0,l.A)(function*(){(0,p.z)({loading:r=>{var c,u;r?null===(c=n.loading)||void 0===c||c.present():null===(u=n.loading)||void 0===u||u.dismiss()},callback:r=>{var c;n.response=r,null!=r&&r.Succeeded?n.user=null!==(c=r.Data)&&void 0!==c?c:{}:(0,a.cX)(n.toastController,{},r).then(u=>u.present()),t&&t()}})})()}presentModalUpdateUser(t){var n=this;return(0,l.A)(function*(){let r=yield n.modalController.create({component:_,mode:"ios"});r.onDidDismiss().then(c=>{"success"==c.role&&window.location.reload()}),r.present()})()}changeAvatar(t){var n=this;return(0,l.A)(function*(){yield n.loadingController.create({spinner:"dots",message:"\u0110ang x\u1eed l\xfd t\u1eadp tin ...",animated:!1}),(0,P.oG)({accept:"image/*"},c=>{(0,U.v)({loading:u=>{var b,g;u?null===(b=n.loading)||void 0===b||b.present():null===(g=n.loading)||void 0===g||g.dismiss()},params:{file:c[0],subFolder:"avatar",fileType:"image"},callback:u=>{var b;0==(null==u?void 0:u.ReturnCode)&&(0,p.sh)({loading:g=>{var A,T;g?null===(A=n.loading)||void 0===A||A.present():null===(T=n.loading)||void 0===T||T.dismiss()},params:{UserId:null===(b=n.user)||void 0===b?void 0:b.UserId,Avatar:`${u.path}/${u.file.name}`},callback:g=>{null!=g&&g.Succeeded?n.refreshData():(0,a.cX)(n.toastController,{},g).then(A=>A.present())}})}})})})()}}return(i=m).\u0275fac=function(t){return new(t||i)(e.rXU(o.W3),e.rXU(o.K_),e.rXU(o.Xi))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-user-info"]],decls:13,vars:7,consts:[["mode","ios"],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-4",4,"ngIf"],[4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-4"],[3,"click"],[3,"src"],["color","light"],[1,"mb-4"],[1,"text-muted"],[1,"mt-1","mb-0"],[1,"text-uppercase"],[1,"container","py-3"],["mode","md","size","default","expand","full","shape","round",1,"ion-no-margin",3,"click"],["slot","start","name","create-outline"]],template:function(t,n){1&t&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(c){return n.onIonRefresher(c)}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.DNE(10,y,2,0,"div",4)(11,$,34,25,"div",5),e.k0s(),e.DNE(12,E,7,3,"ion-footer",6)),2&t&&(e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.TABS_USER),e.R7$(2),e.JRh(e.bMT(6,5,"UserInfo")),e.R7$(5),e.Y8G("ngIf",!n.response),e.R7$(1),e.Y8G("ngIf",n.user),e.R7$(1),e.Y8G("ngIf",null==n.user?null:n.user.UserId))},dependencies:[h.bT,o.Jm,o.QW,o.b_,o.I9,o.W9,o.M0,o.eU,o.iq,o.he,o.To,o.Ki,o.w2,o.Zx,o.BC,o.ai,o.el,f.D9],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size: 10rem;--border-radius: 50%;margin:auto;cursor:pointer}ion-card[_ngcontent-%COMP%]{margin:1.5rem 0;border-radius:.75rem}"]}),m})()}];let N=(()=>{var i;class m{}return(i=m).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[F.iI.forChild(G),F.iI]}),m})();var x=d(9500);let D=(()=>{var i;class m{}return(i=m).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[h.MD,I.YN,o.bv,N,x.x]}),m})()}}]);