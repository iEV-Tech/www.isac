"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7687],{7687:(x,u,r)=>{r.r(u),r.d(u,{OrderInfoPageModule:()=>T});var c=r(177),I=r(9417),a=r(9465),f=r(7625),h=r(467),v=r(9061),P=r(6539),p=r(8517),O=r(8650),R=r(3588),m=r(8833),n=r(4438),_=r(4842);function C(e,l){1&e&&(n.j41(0,"div",8),n.nrm(1,"img",9),n.j41(2,"div",10),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&e&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function F(e,l){if(1&e&&n.nrm(0,"img",18),2&e){const s=n.XpG().$implicit;n.Mz_("src","../../../assets/icon/payment/",s.KindOfCard,".jpeg",n.B4B)}}function D(e,l){1&e&&n.nrm(0,"img",19)}function M(e,l){if(1&e){const s=n.RV6();n.qex(0),n.j41(1,"div",11)(2,"div",12),n.bIt("click",function(i){const o=n.eBV(s).$implicit,g=n.XpG();return n.Njj(g.openDetail(i,o))}),n.j41(3,"div",13)(4,"b"),n.EFF(5),n.k0s(),n.j41(6,"ion-chip")(7,"ion-label"),n.EFF(8),n.k0s(),n.j41(9,"ion-avatar"),n.DNE(10,F,1,2,"img",14)(11,D,1,0,"img",15),n.k0s()()(),n.j41(12,"div",16)(13,"small",17),n.EFF(14),n.k0s(),n.j41(15,"small")(16,"b"),n.EFF(17),n.k0s()()()()(),n.bVm()}if(2&e){let s;const t=l.$implicit,i=n.XpG();n.R7$(5),n.JRh(t.OrderCode),n.R7$(3),n.SpI("",i.APP_FUNC_FormatMoney(null!==(s=t.PayValue)&&void 0!==s?s:0),"\u0111"),n.R7$(2),n.Y8G("ngIf",t.Paymethod),n.R7$(),n.Y8G("ngIf",!t.Paymethod),n.R7$(3),n.JRh(i.APP_FUNC_FormatDate(t.OrderDate)),n.R7$(2),n.ZvI("text-",i.APP_FUNC_GetColor_VOrderStatus(t.VOrderStatus),""),n.R7$(),n.JRh(t.VOrderStatusName)}}function y(e,l){if(1&e){const s=n.RV6();n.j41(0,"ion-infinite-scroll",20),n.bIt("ionInfinite",function(i){n.eBV(s);const o=n.XpG();return n.Njj(o.onIonInfinite(i))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}const j=[{path:"",component:(()=>{var e;class l{constructor(t,i,o){this.router=t,this.loadingController=i,this.toastController=o,this.APP_ROUTE=m._,this.APP_FUNC_FormatMoney=p.xi,this.APP_FUNC_FormatDate=p.Rv,this.APP_FUNC_GetColor_VOrderStatus=p.qM,this.v_order_status=R.TL,this.paging={sortfield:null,sorttype:null,page:1,limit:20,loading:!1,active:!0},this.filter={},this.orderInfos=[]}openDetail(t,i){var o=this;return(0,h.A)(function*(){var g,d;o.router.navigateByUrl(m._.ORDER_INFO_DETAIL.replace(":id",null!==(g=null===(d=i.OrderId)||void 0===d?void 0:d.toString())&&void 0!==g?g:""))})()}ngOnInit(){var t=this;(0,h.A)(function*(){(yield(0,P.kU)())&&t.refreshData()})()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}pushData(t){1==this.paging.page&&(this.orderInfos.length=0),this.orderInfos=this.orderInfos.concat(t)}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}searchChange(t){this.filter.search=t.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(t,i){this.paging.sortfield=t||null,this.paging.sorttype=i||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(t){var i=this;return(0,h.A)(function*(){i.paging.loading=!0,(0,v.Qd)({loadingController:i.loadingController,params:{PageNumber:i.paging.page,PageSize:i.paging.limit},callback:o=>{var g;i.response=o,null!=o&&o.Succeeded?i.pushData(null!==(g=null==o?void 0:o.Data)&&void 0!==g?g:[]):(0,O.cX)(i.toastController,{},o).then(d=>d.present()),i.paging.loading=!1,i.paging.active=!(null==o||!o.HasNextPage),t&&t()}})})()}}return(e=l).\u0275fac=function(t){return new(t||e)(n.rXU(f.Ix),n.rXU(a.Xi),n.rXU(a.K_))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-order-info"]],decls:15,vars:7,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[1,"card-order","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[3,"src",4,"ngIf"],["src","../../../assets/icon/ion-img/charge-package.svg",4,"ngIf"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"src"],["src","../../../assets/icon/ion-img/charge-package.svg"],[3,"ionInfinite"]],template:function(t,i){1&t&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",2),n.bIt("ionRefresh",function(g){return i.onIonRefresher(g)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,C,5,3,"div",3),n.j41(11,"div",4)(12,"div",5),n.DNE(13,M,18,9,"ng-container",6),n.k0s()(),n.DNE(14,y,2,0,"ion-infinite-scroll",7),n.k0s()),2&t&&(n.R7$(3),n.Y8G("defaultHref",i.APP_ROUTE.USER),n.R7$(2),n.JRh(n.bMT(6,5,"OrderHistory")),n.R7$(5),n.Y8G("ngIf",i.response&&!i.orderInfos.length),n.R7$(3),n.Y8G("ngForOf",i.orderInfos),n.R7$(),n.Y8G("ngIf",i.paging.active))},dependencies:[c.Sq,c.bT,a.mC,a.QW,a.ZB,a.W9,a.eU,a.Ax,a.Hp,a.he,a.To,a.Ki,a.BC,a.ai,a.el,_.D9],styles:[".card-order[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0}"]}),l})()}];let $=(()=>{var e;class l{}return(e=l).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[f.iI.forChild(j),f.iI]}),l})();var N=r(3890);let T=(()=>{var e;class l{}return(e=l).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[c.MD,I.YN,a.bv,$,N.x]}),l})()}}]);