"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5845],{5845:(b,d,l)=>{l.r(d),l.d(d,{SupportPageModule:()=>G});var c=l(177),m=l(9417),s=l(8974),f=l(2175),g=l(467),h=l(5972);const v=function(){var t=(0,g.A)(function*(a){var r,e;a.params=a.params||{},(0,h.hm)({url:"api/Faq/get-faqs",params:{PageNumber:null!==(r=a.params.PageNumber)&&void 0!==r?r:1,PageSize:null!==(e=a.params.PageSize)&&void 0!==e?e:10},success:o=>{"function"==typeof a.callback&&a.callback(o.data||null)},error:o=>{var i;"function"==typeof a.callback&&a.callback(null==o||null===(i=o.response)||void 0===i?void 0:i.data),console.error(o)},loading:a.loading})});return function(r){return t.apply(this,arguments)}}();var P=l(6539),R=l(8650),S=l(8833),n=l(4438),F=l(4842);function y(t,a){1&t&&(n.j41(0,"div",9),n.nrm(1,"ion-spinner",10),n.k0s())}function M(t,a){1&t&&(n.j41(0,"div",11),n.nrm(1,"img",12),n.j41(2,"div",13),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&t&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function $(t,a){if(1&t&&(n.qex(0),n.j41(1,"ion-accordion",14)(2,"ion-item",15)(3,"ion-label"),n.EFF(4),n.k0s()(),n.nrm(5,"div",16),n.k0s(),n.bVm()),2&t){const r=a.$implicit;n.R7$(),n.Mz_("value","accordion-",r.FaqId,""),n.R7$(3),n.JRh(r.Question),n.R7$(),n.Y8G("innerHTML",r.Answer,n.npT)}}const I=[{path:"",component:(()=>{var t;class a{constructor(e,o){this.loadingController=e,this.toastController=o,this.APP_ROUTE=S._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.faqs=[],this.loadingController.create({message:""}).then(i=>this.loading=i)}ngOnInit(){var e=this;(0,g.A)(function*(){(yield(0,P.kU)())&&e.refreshData()})()}onIonRefresher(e){this.filter={},this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}resetData(){this.faqs.length=0}pushData(e){this.faqs=this.faqs.concat(e)}refreshData(e){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}loadData_Paging(e){var o=this;return(0,g.A)(function*(){o.paging.loading=!0,v({loading:i=>{var p,u;i?null===(p=o.loading)||void 0===p||p.present():null===(u=o.loading)||void 0===u||u.dismiss()},params:{PageNumber:o.paging.page,PageSize:o.paging.limit},callback:i=>{var p;o.response=i,null!=i&&i.Succeeded?o.pushData(null!==(p=i.Data)&&void 0!==p?p:[]):(0,R.cX)(o.toastController,{},i).then(u=>u.present()),o.paging.loading=!1,o.paging.active=!(null==i||!i.HasNextPage),e&&e()}})})()}}return(t=a).\u0275fac=function(e){return new(e||t)(n.rXU(s.Xi),n.rXU(s.K_))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-support"]],decls:16,vars:7,consts:[["accordionGroup",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],["mode","ios"],[4,"ngFor","ngForOf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],[3,"value"],["slot","header","lines","none","color","light"],["slot","content",1,"ion-padding",3,"innerHTML"]],template:function(e,o){if(1&e){const i=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",3),n.bIt("ionRefresh",function(u){return n.eBV(i),n.Njj(o.onIonRefresher(u))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,y,2,0,"div",4)(11,M,5,3,"div",5),n.j41(12,"div",6)(13,"ion-accordion-group",7,0),n.DNE(15,$,6,4,"ng-container",8),n.k0s()()()}2&e&&(n.R7$(3),n.Y8G("defaultHref",o.APP_ROUTE.TABS_USER),n.R7$(2),n.JRh(n.bMT(6,5,"FAQ")),n.R7$(5),n.Y8G("ngIf",!o.response),n.R7$(),n.Y8G("ngIf",o.response&&!o.faqs.length),n.R7$(4),n.Y8G("ngForOf",o.faqs))},dependencies:[c.Sq,c.bT,s.xk,s.YH,s.QW,s.W9,s.eU,s.uz,s.he,s.To,s.Ki,s.w2,s.BC,s.ai,s.el,F.D9],styles:["ion-accordion[_ngcontent-%COMP%]{margin-bottom:1rem;border-radius:.75rem}ion-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--min-height: 4rem}"]}),a})()}];let T=(()=>{var t;class a{}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[f.iI.forChild(I),f.iI]}),a})();var C=l(3584);let G=(()=>{var t;class a{}return(t=a).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[c.MD,m.YN,s.bv,T,C.x]}),a})()}}]);