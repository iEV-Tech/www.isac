"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6485],{6485:(x,u,a)=>{a.r(u),a.d(u,{BillInfoPageModule:()=>$});var d=a(177),m=a(9417),r=a(8974),h=a(2175),c=a(467),I=a(6116),P=a(6539),p=a(1312),B=a(8650),v=a(8833),n=a(4438),R=a(4842);function F(e,g){1&e&&(n.j41(0,"div",9),n.nrm(1,"ion-spinner",10),n.k0s())}function D(e,g){1&e&&(n.j41(0,"div",11),n.nrm(1,"img",12),n.j41(2,"div",13),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&e&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function C(e,g){if(1&e){const s=n.RV6();n.qex(0),n.j41(1,"div",14)(2,"div",15),n.bIt("click",function(i){const o=n.eBV(s).$implicit,l=n.XpG();return n.Njj(l.openDetail(i,o))}),n.j41(3,"div",16)(4,"div",17)(5,"b"),n.EFF(6),n.k0s(),n.j41(7,"small",18),n.EFF(8),n.k0s()(),n.j41(9,"div",17)(10,"span"),n.EFF(11),n.k0s(),n.j41(12,"small",19),n.EFF(13),n.k0s()()()()(),n.bVm()}if(2&e){let s;const t=g.$implicit,i=n.XpG();n.R7$(6),n.JRh(t.BillCode),n.R7$(2),n.JRh(i.APP_FUNC_FormatDate(t.CreatedDate)),n.R7$(3),n.SpI("",i.APP_FUNC_FormatMoney(t.AftertaxBillValue),"\u0111"),n.R7$(2),n.SpI("",null!==(s=t.ElectricUsed)&&void 0!==s?s:0," kWh")}}function _(e,g){if(1&e){const s=n.RV6();n.j41(0,"ion-infinite-scroll",20),n.bIt("ionInfinite",function(i){n.eBV(s);const o=n.XpG();return n.Njj(o.onIonInfinite(i))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}const j=[{path:"",component:(()=>{var e;class g{constructor(t,i,o){var l=this;this.router=t,this.loadingController=i,this.toastController=o,this.APP_ROUTE=v._,this.APP_FUNC_FormatMoney=p.xi,this.APP_FUNC_FormatDate=p.Rv,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.billInfos=[],(0,c.A)(function*(){l.loading=yield l.loadingController.create({message:""})})()}openDetail(t,i){var o=this;return(0,c.A)(function*(){var l,f;o.router.navigateByUrl(v._.BILL_INFO_DETAIL.replace(":id",null!==(l=null===(f=i.BillId)||void 0===f?void 0:f.toString())&&void 0!==l?l:""))})()}ngOnInit(){var t=this;(0,c.A)(function*(){(yield(0,P.kU)())&&t.refreshData()})()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}resetData(){this.billInfos.length=0}pushData(t){this.billInfos=this.billInfos.concat(t)}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}searchChange(t){this.filter.search=t.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}sortChange(t,i){this.paging.sortfield=t||null,this.paging.sorttype=i||null,this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}loadData_Paging(t){var i=this;return(0,c.A)(function*(){i.paging.loading=!0,(0,I.Yi)({loading:o=>{var l,f;o?null===(l=i.loading)||void 0===l||l.present():null===(f=i.loading)||void 0===f||f.dismiss()},params:{PageNumber:i.paging.page,PageSize:i.paging.limit},callback:o=>{var l;i.response=o,null!=o&&o.Succeeded?i.pushData(null!==(l=null==o?void 0:o.Data)&&void 0!==l?l:[]):(0,B.cX)(i.toastController,{},o).then(f=>f.present()),i.paging.loading=!1,i.paging.active=!(null==o||!o.HasNextPage),t&&t()}})})()}}return(e=g).\u0275fac=function(t){return new(t||e)(n.rXU(h.Ix),n.rXU(r.Xi),n.rXU(r.K_))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-bill-info"]],decls:16,vars:8,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[1,"card-bill","cursor-pointer",3,"click"],[1,"d-flex","align-items-stretch","justify-content-between"],[1,"d-flex","flex-column"],[1,"align-self-start","text-muted"],[1,"align-self-end","text-muted"],[3,"ionInfinite"]],template:function(t,i){1&t&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",2),n.bIt("ionRefresh",function(l){return i.onIonRefresher(l)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,F,2,0,"div",3)(11,D,5,3,"div",4),n.j41(12,"div",5)(13,"div",6),n.DNE(14,C,14,4,"ng-container",7),n.k0s()(),n.DNE(15,_,2,0,"ion-infinite-scroll",8),n.k0s()),2&t&&(n.R7$(3),n.Y8G("defaultHref",i.APP_ROUTE.TABS_USER),n.R7$(2),n.JRh(n.bMT(6,6,"BillHistory")),n.R7$(5),n.Y8G("ngIf",!i.response),n.R7$(),n.Y8G("ngIf",i.response&&!i.billInfos.length),n.R7$(3),n.Y8G("ngForOf",i.billInfos),n.R7$(),n.Y8G("ngIf",i.paging.active))},dependencies:[d.Sq,d.bT,r.QW,r.W9,r.eU,r.Ax,r.Hp,r.To,r.Ki,r.w2,r.BC,r.ai,r.el,R.D9],styles:[".card-bill[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-bill[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem}"]}),g})()}];let y=(()=>{var e;class g{}return(e=g).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[h.iI.forChild(j),h.iI]}),g})();var M=a(9500);let $=(()=>{var e;class g{}return(e=g).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[d.MD,m.YN,r.bv,y,M.x]}),g})()}}]);