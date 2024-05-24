"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5845],{5845:(G,d,l)=>{l.r(d),l.d(d,{SupportPageModule:()=>b});var g=l(177),m=l(9417),s=l(4488),f=l(2175),c=l(467),h=l(7158);const v=function(){var t=(0,c.A)(function*(a){var i,o;a.params=a.params||{},(0,h.hm)({url:"api/Faq/get-faqs",params:{PageNumber:null!==(i=a.params.PageNumber)&&void 0!==i?i:1,PageSize:null!==(o=a.params.PageSize)&&void 0!==o?o:10},success:e=>{"function"==typeof a.callback&&a.callback(e.data||null)},error:e=>{var r;"function"==typeof a.callback&&a.callback(null==e||null===(r=e.response)||void 0===r?void 0:r.data),console.error(e)},loading:null==a?void 0:a.loading})});return function(i){return t.apply(this,arguments)}}();var P=l(6539),R=l(3524),S=l(8833),n=l(4438),y=l(4842);function F(t,a){1&t&&(n.j41(0,"div",9),n.nrm(1,"ion-spinner",10),n.k0s())}function M(t,a){1&t&&(n.j41(0,"div",11),n.nrm(1,"img",12),n.j41(2,"div",13),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&t&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function $(t,a){if(1&t&&(n.qex(0),n.j41(1,"ion-accordion",14)(2,"ion-item",15)(3,"ion-label"),n.EFF(4),n.k0s()(),n.nrm(5,"div",16),n.k0s(),n.bVm()),2&t){const i=a.$implicit;n.R7$(1),n.Mz_("value","accordion-",i.FaqId,""),n.R7$(3),n.JRh(i.Question),n.R7$(1),n.Y8G("innerHTML",i.Answer,n.npT)}}const I=[{path:"",component:(()=>{var t;class a{constructor(o,e){this.loadingController=o,this.toastController=e,this.APP_ROUTE=S._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.faqs=[],this.loadingController.create({message:""}).then(r=>this.loading=r)}ngOnInit(){var o=this;(0,c.A)(function*(){(yield(0,P.kU)())&&o.refreshData()})()}onIonRefresher(o){this.filter={},this.refreshData(()=>{o.target.complete()})}onIonInfinite(o){this.loadMore(()=>{o.target.complete()})}resetData(){this.faqs.length=0}pushData(o){this.faqs=this.faqs.concat(o)}refreshData(o){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(o)}loadMore(o){this.paging.page+=1,this.loadData_Paging(o)}loadData_Paging(o){var e=this;return(0,c.A)(function*(){e.paging.loading=!0,v({loading:r=>{var p,u;r?null===(p=e.loading)||void 0===p||p.present():null===(u=e.loading)||void 0===u||u.dismiss()},params:{PageNumber:e.paging.page,PageSize:e.paging.limit},callback:r=>{var p;e.response=r,null!=r&&r.Succeeded?e.pushData(null!==(p=r.Data)&&void 0!==p?p:[]):(0,R.cX)(e.toastController,{},r).then(u=>u.present()),e.paging.loading=!1,e.paging.active=!(null==r||!r.HasNextPage),o&&o()}})})()}}return(t=a).\u0275fac=function(o){return new(o||t)(n.rXU(s.Xi),n.rXU(s.K_))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-support"]],decls:16,vars:7,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"container","pt-3","pb-4"],["mode","ios"],["accordionGroup",""],[4,"ngFor","ngForOf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],[3,"value"],["slot","header","lines","none","color","light"],["slot","content",1,"ion-padding",3,"innerHTML"]],template:function(o,e){1&o&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",2),n.bIt("ionRefresh",function(p){return e.onIonRefresher(p)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,F,2,0,"div",3)(11,M,5,3,"div",4),n.j41(12,"div",5)(13,"ion-accordion-group",6,7),n.DNE(15,$,6,3,"ng-container",8),n.k0s()()()),2&o&&(n.R7$(3),n.Y8G("defaultHref",e.APP_ROUTE.TABS_USER),n.R7$(2),n.JRh(n.bMT(6,5,"Support")),n.R7$(5),n.Y8G("ngIf",!e.response),n.R7$(1),n.Y8G("ngIf",e.response&&!e.faqs.length),n.R7$(4),n.Y8G("ngForOf",e.faqs))},dependencies:[g.Sq,g.bT,s.xk,s.YH,s.QW,s.W9,s.eU,s.uz,s.he,s.To,s.Ki,s.w2,s.BC,s.ai,s.el,y.D9],styles:["ion-accordion[_ngcontent-%COMP%]{margin-bottom:1rem;border-radius:.75rem}ion-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 4rem}"]}),a})()}];let T=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[f.iI.forChild(I),f.iI]}),a})();var C=l(9500);let b=(()=>{var t;class a{}return(t=a).\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[g.MD,m.YN,s.bv,T,C.x]}),a})()}}]);