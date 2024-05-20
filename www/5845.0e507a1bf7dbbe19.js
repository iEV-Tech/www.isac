"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5845],{5845:(T,d,s)=>{s.r(d),s.d(d,{SupportPageModule:()=>I});var g=s(177),m=s(9417),l=s(4488),f=s(2175),u=s(467),h=s(7158);const v=function(){var t=(0,u.A)(function*(o){var i,e;o.params=o.params||{},(0,h.hm)({url:"api/Faq/get-faqs",params:{PageNumber:null!==(i=o.params.PageNumber)&&void 0!==i?i:1,PageSize:null!==(e=o.params.PageSize)&&void 0!==e?e:10},success:a=>{"function"==typeof o.callback&&o.callback(a.data||null)},error:a=>{var r;"function"==typeof o.callback&&o.callback(null==a||null===(r=a.response)||void 0===r?void 0:r.data),console.error(a)},loading:null==o?void 0:o.loading})});return function(i){return t.apply(this,arguments)}}();var P=s(6539),b=s(8560),R=s(8833),n=s(4438),S=s(4842);function y(t,o){1&t&&(n.j41(0,"div",11),n.nrm(1,"ion-spinner",12),n.k0s())}function F(t,o){1&t&&(n.j41(0,"div",13),n.nrm(1,"img",14),n.j41(2,"div",15),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&t&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function M(t,o){if(1&t&&(n.qex(0),n.j41(1,"ion-accordion",16)(2,"ion-item",17)(3,"ion-label"),n.EFF(4),n.k0s()(),n.nrm(5,"div",18),n.k0s(),n.bVm()),2&t){const i=o.$implicit;n.R7$(1),n.Mz_("value","accordion-",i.FaqId,""),n.R7$(3),n.JRh(i.Question),n.R7$(1),n.Y8G("innerHTML",i.Answer,n.npT)}}const k=[{path:"",component:(()=>{var t;class o{constructor(e,a){this.loadingController=e,this.toastController=a,this.APP_ROUTE=R._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.faqs=[],this.loadingController.create({message:""}).then(r=>this.loading=r)}ngOnInit(){var e=this;(0,u.A)(function*(){(yield(0,P.kU)())&&e.refreshData()})()}onIonRefresher(e){this.filter={},this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}resetData(){this.faqs.length=0}pushData(e){this.faqs=this.faqs.concat(e)}refreshData(e){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}loadData_Paging(e){var a=this;return(0,u.A)(function*(){a.paging.loading=!0,v({loading:r=>{var p,c;r?null===(p=a.loading)||void 0===p||p.present():null===(c=a.loading)||void 0===c||c.dismiss()},params:{PageNumber:a.paging.page,PageSize:a.paging.limit},callback:r=>{var p;a.response=r,null!=r&&r.Succeeded?a.pushData(null!==(p=r.Data)&&void 0!==p?p:[]):(0,b.cX)(a.toastController,{},r).then(c=>c.present()),a.paging.loading=!1,a.paging.active=!(null==r||!r.HasNextPage),e&&e()}})})()}}return(t=o).\u0275fac=function(e){return new(e||t)(n.rXU(l.Xi),n.rXU(l.K_))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-support"]],decls:21,vars:10,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"mb-4"],[1,"block-heading","d-flex","align-items-center","justify-content-center","text-center","w-100"],[1,"container","mb-4","mb-lg-5","block-content"],["mode","ios"],["accordionGroup",""],[4,"ngFor","ngForOf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],[3,"value"],["slot","header","lines","none","color","light"],["slot","content",1,"ion-padding",3,"innerHTML"]],template:function(e,a){1&e&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",2),n.bIt("ionRefresh",function(p){return a.onIonRefresher(p)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,y,2,0,"div",3)(11,F,5,3,"div",4),n.j41(12,"div",5)(13,"div",6)(14,"h2"),n.EFF(15),n.nI1(16,"translate"),n.k0s()()(),n.j41(17,"div",7)(18,"ion-accordion-group",8,9),n.DNE(20,M,6,3,"ng-container",10),n.k0s()()()),2&e&&(n.R7$(3),n.Y8G("defaultHref",a.APP_ROUTE.TABS_USER),n.R7$(2),n.JRh(n.bMT(6,6,"Support")),n.R7$(5),n.Y8G("ngIf",!a.response),n.R7$(1),n.Y8G("ngIf",a.response&&!a.faqs.length),n.R7$(4),n.JRh(n.bMT(16,8,"Support")),n.R7$(5),n.Y8G("ngForOf",a.faqs))},dependencies:[g.Sq,g.bT,l.xk,l.YH,l.QW,l.W9,l.eU,l.uz,l.he,l.To,l.Ki,l.w2,l.BC,l.ai,l.el,S.D9],styles:[".block-heading[_ngcontent-%COMP%]{min-height:160px;background-image:url(banner-1.186cd5d5aa2b1aab.png);background-repeat:no-repeat;background-position:center center;background-size:cover}.block-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;color:#fff}.block-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.block-content[_ngcontent-%COMP%]{max-width:800px;margin:auto}ion-accordion[_ngcontent-%COMP%]{margin-bottom:1rem;border-radius:.75rem}"]}),o})()}];let C=(()=>{var t;class o{}return(t=o).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[f.iI.forChild(k),f.iI]}),o})();var $=s(9500);let I=(()=>{var t;class o{}return(t=o).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[g.MD,m.YN,l.bv,C,$.x]}),o})()}}]);