"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[968],{968:(y,u,c)=>{c.r(u),c.d(u,{FeedbackPageModule:()=>x});var f=c(177),b=c(9417),l=c(4488),m=c(2175),g=c(467),v=c(1261),h=c(2254),F=c(6539),k=c(7518),_=c(8833),e=c(4438),P=c(4842);function I(i,d){1&i&&(e.j41(0,"div",11),e.nrm(1,"ion-spinner",12),e.k0s())}function R(i,d){1&i&&(e.j41(0,"div",13),e.nrm(1,"img",14),e.j41(2,"div",15),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&i&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function D(i,d){1&i&&(e.j41(0,"p")(1,"small",24),e.EFF(2,"{{item.FbCatgTitle'}}"),e.k0s()())}function T(i,d){1&i&&(e.j41(0,"p")(1,"small",24),e.EFF(2,"{{item.LocName'}}"),e.k0s()())}function C(i,d){if(1&i){const s=e.RV6();e.qex(0),e.j41(1,"ion-card",16)(2,"ion-item-sliding")(3,"ion-item",17)(4,"ion-thumbnail",0),e.nrm(5,"img",18),e.k0s(),e.j41(6,"ion-label")(7,"h5"),e.EFF(8),e.k0s(),e.DNE(9,D,3,0,"p",19)(10,T,3,0,"p",19),e.k0s()(),e.j41(11,"ion-item-options")(12,"ion-item-option",20),e.bIt("click",function(t){const a=e.eBV(s).$implicit,r=e.XpG();return e.Njj(r.presentModalAddFeedback(t,a.FeedbackId))}),e.nI1(13,"translate"),e.nrm(14,"ion-icon",21),e.k0s(),e.j41(15,"ion-item-option",22),e.bIt("click",function(t){const a=e.eBV(s).$implicit,r=e.XpG();return e.Njj(r.DeleteFeedback(t,a.FeedbackId))}),e.nI1(16,"translate"),e.nrm(17,"ion-icon",23),e.k0s()()()(),e.bVm()}if(2&i){const s=d.$implicit,n=e.XpG();let t;e.R7$(3),e.Y8G("href",n.APP_ROUTE.FEEDBACK_DETAIL.replace(":id",null!==(t=null==s.FeedbackId?null:s.FeedbackId.toString())&&void 0!==t?t:"")),e.R7$(5),e.JRh(s.Title),e.R7$(1),e.Y8G("ngIf",s.FbCatgTitle),e.R7$(1),e.Y8G("ngIf",s.LocName),e.R7$(2),e.Y8G("title",e.bMT(13,6,"Edit")),e.R7$(3),e.Y8G("title",e.bMT(16,8,"Delete"))}}function j(i,d){if(1&i){const s=e.RV6();e.j41(0,"ion-infinite-scroll",25),e.bIt("ionInfinite",function(t){e.eBV(s);const o=e.XpG();return e.Njj(o.onIonInfinite(t))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}const M=[{path:"",component:(()=>{var i;class d{constructor(n,t,o){var a=this;this.modalController=n,this.toastController=t,this.loadingController=o,this.APP_ROUTE=_._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.feedbacks=[],(0,g.A)(function*(){a.loading=yield a.loadingController.create({message:""})})()}ngOnInit(){var n=this;(0,g.A)(function*(){(yield(0,F.kU)())&&n.refreshData()})()}onIonRefresher(n){this.filter={},this.refreshData(()=>{n.target.complete()})}onIonInfinite(n){this.loadMore(()=>{n.target.complete()})}resetData(){this.feedbacks.length=0}pushData(n){this.feedbacks=this.feedbacks.concat(n)}refreshData(n){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(n)}loadMore(n){this.paging.page+=1,this.loadData_Paging(n)}searchChange(n){this.filter.search=n.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}sortChange(n,t){this.paging.sortfield=n||null,this.paging.sorttype=t||null,this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}loadData_Paging(n){var t=this;return(0,g.A)(function*(){t.paging.loading=!0,(0,h.kT)({loading:o=>{var a,r;o?null===(a=t.loading)||void 0===a||a.present():null===(r=t.loading)||void 0===r||r.dismiss()},params:{PageNumber:t.paging.page,PageSize:t.paging.limit},callback:o=>{var a;t.response=o,null!=o&&o.Succeeded?t.pushData(null!==(a=o.Data)&&void 0!==a?a:[]):(0,k.cX)(t.toastController,{},o).then(r=>r.present()),t.paging.loading=!1,t.paging.active=!(null==o||!o.HasNextPage),n&&n()}})})()}presentModalAddFeedback(n,t){var o=this;return(0,g.A)(function*(){let a=yield o.modalController.create({component:v.l,componentProps:{FeedbackId:t},mode:"ios"});a.onDidDismiss().then(r=>{"success"==r.role&&o.refreshData()}),a.present()})()}DeleteFeedback(n,t){var o=this;return(0,g.A)(function*(){t&&(0,h.vE)({loading:a=>{var r,p;a?null===(r=o.loading)||void 0===r||r.present():null===(p=o.loading)||void 0===p||p.dismiss()},params:{FeedbackId:t},callback:a=>{null!=a&&a.Succeeded?o.refreshData():(0,k.cX)(o.toastController,{},a).then(r=>r.present())}})})()}}return(i=d).\u0275fac=function(n){return new(n||i)(e.rXU(l.W3),e.rXU(l.K_),e.rXU(l.Xi))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-feedback"]],decls:22,vars:11,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"container","p-0"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","py-3"],["mode","md","size","default","expand","full","shape","round",1,"ion-no-margin",3,"click"],["slot","start","name","add-outline"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],["mode","ios"],["lines","none",3,"href"],["src","../../../assets/favicon/favicon.svg"],[4,"ngIf"],["color","secondary",3,"title","click"],["name","create-outline"],["color","danger",3,"title","click"],["name","trash-outline"],[1,"d-inline-block","text-muted"],[3,"ionInfinite"]],template:function(n,t){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",2),e.bIt("ionRefresh",function(a){return t.onIonRefresher(a)}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.DNE(10,I,2,0,"div",3)(11,R,5,3,"div",4),e.j41(12,"div",5),e.DNE(13,C,18,10,"ng-container",6),e.k0s(),e.DNE(14,j,2,0,"ion-infinite-scroll",7),e.k0s(),e.j41(15,"ion-footer")(16,"div",8)(17,"ion-button",9),e.bIt("click",function(a){return t.presentModalAddFeedback(a)}),e.nrm(18,"ion-icon",10),e.j41(19,"ion-label"),e.EFF(20),e.nI1(21,"translate"),e.k0s()()()()),2&n&&(e.R7$(3),e.Y8G("defaultHref",t.APP_ROUTE.TABS_USER),e.R7$(2),e.JRh(e.bMT(6,7,"Feedback")),e.R7$(5),e.Y8G("ngIf",!t.response),e.R7$(1),e.Y8G("ngIf",t.response&&!t.feedbacks.length),e.R7$(2),e.Y8G("ngForOf",t.feedbacks),e.R7$(1),e.Y8G("ngIf",t.paging.active),e.R7$(6),e.JRh(e.bMT(21,9,"NewFeedback")))},dependencies:[f.Sq,f.bT,l.Jm,l.QW,l.b_,l.W9,l.M0,l.eU,l.iq,l.Ax,l.Hp,l.uz,l.LU,l.CE,l.A7,l.he,l.To,l.Ki,l.w2,l.Zx,l.BC,l.ai,l.el,P.D9],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size: 2.5rem}"]}),d})()}];let $=(()=>{var i;class d{}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[m.iI.forChild(M),m.iI]}),d})();var E=c(9500);let x=(()=>{var i;class d{}return(i=d).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[f.MD,b.YN,l.bv,$,E.x]}),d})()}}]);