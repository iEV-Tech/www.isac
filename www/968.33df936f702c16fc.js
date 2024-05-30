"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[968],{968:(x,b,c)=>{c.r(b),c.d(b,{FeedbackPageModule:()=>y});var u=c(177),F=c(9417),r=c(8974),m=c(2175),f=c(467),_=c(9051),k=c(2254),P=c(6539),p=c(8650),v=c(8833),e=c(4438),I=c(4842);function D(o,d){1&o&&(e.j41(0,"div",11),e.nrm(1,"ion-spinner",12),e.k0s())}function C(o,d){1&o&&(e.j41(0,"div",13),e.nrm(1,"img",14),e.j41(2,"div",15),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&o&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function R(o,d){if(1&o){const s=e.RV6();e.qex(0),e.j41(1,"div",16)(2,"div",17)(3,"div",18)(4,"div",19),e.bIt("click",function(n){const i=e.eBV(s).$implicit,a=e.XpG();return e.Njj(a.openDetail(n,i))}),e.j41(5,"small",20),e.EFF(6),e.k0s()(),e.j41(7,"div",21)(8,"ion-button",22),e.bIt("click",function(n){const i=e.eBV(s).$implicit,a=e.XpG();return e.Njj(a.presentModalAddFeedback(n,i.FeedbackId))}),e.nrm(9,"ion-icon",23),e.k0s(),e.j41(10,"ion-button",24),e.bIt("click",function(n){const i=e.eBV(s).$implicit,a=e.XpG();return e.Njj(a.DeleteFeedback(n,i.FeedbackId))}),e.nrm(11,"ion-icon",25),e.k0s()()(),e.nrm(12,"hr"),e.j41(13,"div",19),e.bIt("click",function(n){const i=e.eBV(s).$implicit,a=e.XpG();return e.Njj(a.openDetail(n,i))}),e.j41(14,"b"),e.EFF(15),e.k0s(),e.j41(16,"div",26),e.EFF(17),e.k0s()()()(),e.bVm()}if(2&o){const s=d.$implicit;e.R7$(6),e.JRh(s.FbCatgTitle),e.R7$(9),e.JRh(s.Title),e.R7$(2),e.JRh(s.Content)}}function j(o,d){if(1&o){const s=e.RV6();e.j41(0,"ion-infinite-scroll",27),e.bIt("ionInfinite",function(n){e.eBV(s);const i=e.XpG();return e.Njj(i.onIonInfinite(n))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}const T=[{path:"",component:(()=>{var o;class d{constructor(t,n,i,a,l){var g=this;this.router=t,this.modalController=n,this.toastController=i,this.loadingController=a,this.animationController=l,this.APP_ROUTE=v._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.feedbacks=[],(0,f.A)(function*(){g.loading=yield g.loadingController.create({message:""})})()}ngOnInit(){var t=this;(0,f.A)(function*(){(yield(0,P.kU)())&&t.refreshData()})()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}resetData(){this.feedbacks.length=0}pushData(t){this.feedbacks=this.feedbacks.concat(t)}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}searchChange(t){this.filter.search=t.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}sortChange(t,n){this.paging.sortfield=t||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}loadData_Paging(t){var n=this;return(0,f.A)(function*(){n.paging.loading=!0,(0,k.kT)({loading:i=>{var a,l;i?null===(a=n.loading)||void 0===a||a.present():null===(l=n.loading)||void 0===l||l.dismiss()},params:{PageNumber:n.paging.page,PageSize:n.paging.limit},callback:i=>{var a;n.response=i,null!=i&&i.Succeeded?n.pushData(null!==(a=i.Data)&&void 0!==a?a:[]):(0,p.cX)(n.toastController,{},i).then(l=>l.present()),n.paging.loading=!1,n.paging.active=!(null==i||!i.HasNextPage),t&&t()}})})()}presentModalAddFeedback(t,n){var i=this;return(0,f.A)(function*(){null==t||t.preventDefault();let a=yield i.modalController.create({component:_.l,componentProps:{FeedbackId:n}});a.onDidDismiss().then(l=>{"success"==l.role&&i.refreshData()}),a.present()})()}DeleteFeedback(t,n){var i=this;return(0,f.A)(function*(){null==t||t.preventDefault(),n&&(0,p.Yy)(i.modalController,i.animationController,{selectedId:n,message:{TitleConfirm:"Delete_Confirm",TextConfirm:"Delete"},fnConfirm:a=>{(0,k.vE)({loading:l=>{var g,h;l?null===(g=i.loading)||void 0===g||g.present():null===(h=i.loading)||void 0===h||h.dismiss()},params:{FeedbackId:a},callback:l=>{null!=l&&l.Succeeded?i.refreshData():(0,p.cX)(i.toastController,{},l).then(g=>g.present())}})}})})()}openDetail(t,n){var i=this;return(0,f.A)(function*(){var a,l;i.router.navigateByUrl(v._.FEEDBACK_DETAIL.replace(":id",null!==(a=null===(l=n.FeedbackId)||void 0===l?void 0:l.toString())&&void 0!==a?a:""))})()}}return(o=d).\u0275fac=function(t){return new(t||o)(e.rXU(m.Ix),e.rXU(r.W3),e.rXU(r.K_),e.rXU(r.Xi),e.rXU(r.Hx))},o.\u0275cmp=e.VBU({type:o,selectors:[["app-feedback"]],decls:22,vars:11,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","py-3"],["mode","md","size","default","expand","full","shape","round",1,"ion-no-margin",3,"click"],["slot","start","name","add-outline"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],[1,"mb-3"],[1,"card-feedback","rounded","bg-white"],[1,"d-flex","align-items-center","justify-content-between"],[3,"click"],[1,"text-primary"],[1,"text-nowrap"],["size","small","color","medium","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4"],["size","small","color","danger","fill","clear",3,"click"],["name","close-outline",1,"fs-5"],[1,"mt-2"],[3,"ionInfinite"]],template:function(t,n){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",2),e.bIt("ionRefresh",function(a){return n.onIonRefresher(a)}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.DNE(10,D,2,0,"div",3)(11,C,5,3,"div",4),e.j41(12,"div",5),e.DNE(13,R,18,3,"ng-container",6),e.k0s(),e.DNE(14,j,2,0,"ion-infinite-scroll",7),e.k0s(),e.j41(15,"ion-footer")(16,"div",8)(17,"ion-button",9),e.bIt("click",function(a){return n.presentModalAddFeedback(a)}),e.nrm(18,"ion-icon",10),e.j41(19,"ion-label"),e.EFF(20),e.nI1(21,"translate"),e.k0s()()()()),2&t&&(e.R7$(3),e.Y8G("defaultHref",n.APP_ROUTE.TABS_USER),e.R7$(2),e.JRh(e.bMT(6,7,"Feedback")),e.R7$(5),e.Y8G("ngIf",!n.response),e.R7$(),e.Y8G("ngIf",n.response&&!n.feedbacks.length),e.R7$(2),e.Y8G("ngForOf",n.feedbacks),e.R7$(),e.Y8G("ngIf",n.paging.active),e.R7$(6),e.JRh(e.bMT(21,9,"NewFeedback")))},dependencies:[u.Sq,u.bT,r.Jm,r.QW,r.W9,r.M0,r.eU,r.iq,r.Ax,r.Hp,r.he,r.To,r.Ki,r.w2,r.BC,r.ai,r.el,I.D9],styles:[".card-feedback[_ngcontent-%COMP%]{padding:1rem}.card-feedback.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-feedback[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-feedback[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: .5rem}"]}),d})()}];let M=(()=>{var o;class d{}return(o=d).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[m.iI.forChild(T),m.iI]}),d})();var $=c(9500);let y=(()=>{var o;class d{}return(o=d).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[u.MD,F.YN,r.bv,M,$.x]}),d})()}}]);