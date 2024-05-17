"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7687],{7687:($,h,a)=>{a.r(h),a.d(h,{OrderInfoPageModule:()=>x});var f=a(177),v=a(9417),r=a(4488),p=a(2175),c=a(467),P=a(9061),I=a(6539),u=a(1312),O=a(7518),m=a(3588),R=a(8833),t=a(4438),F=a(4842);function C(i,l){1&i&&(t.j41(0,"div",8),t.nrm(1,"ion-spinner",9),t.k0s())}function D(i,l){1&i&&(t.j41(0,"div",10),t.nrm(1,"img",11),t.j41(2,"div",12),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&i&&(t.R7$(3),t.JRh(t.bMT(4,1,"DataNotFound")))}function M(i,l){if(1&i&&(t.qex(0),t.j41(1,"ion-card",13)(2,"ion-item",14)(3,"ion-thumbnail",0),t.nrm(4,"img",15),t.k0s(),t.j41(5,"ion-label")(6,"div",16)(7,"div")(8,"h5"),t.EFF(9),t.k0s(),t.j41(10,"p")(11,"span",17),t.EFF(12),t.k0s()()(),t.j41(13,"div",18)(14,"h5"),t.EFF(15),t.k0s(),t.j41(16,"p",19)(17,"b"),t.EFF(18),t.k0s()()()()()()(),t.bVm()),2&i){const s=l.$implicit,e=t.XpG();let n;t.R7$(2),t.Y8G("href",e.APP_ROUTE.ORDER_INFO_RESULT.replace(":code",null!==(n=s.OrderCode)&&void 0!==n?n:"")),t.R7$(7),t.JRh(s.OrderCode),t.R7$(3),t.JRh(e.APP_FUNC_FormatDate(s.OrderDate)),t.R7$(3),t.SpI("",e.APP_FUNC_FormatMoney(s.RealValue),"\u0111"),t.R7$(2),t.ZvI("order-status text-",e.APP_FUNC_GetColor_VOrderStatus(s.VOrderStatus),""),t.R7$(1),t.JRh(s.VOrderStatusName)}}function y(i,l){if(1&i){const s=t.RV6();t.j41(0,"ion-infinite-scroll",20),t.bIt("ionInfinite",function(n){t.eBV(s);const o=t.XpG();return t.Njj(o.onIonInfinite(n))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}const j=[{path:"",component:(()=>{var i;class l{constructor(e,n){var o=this;this.loadingController=e,this.toastController=n,this.APP_ROUTE=R._,this.APP_FUNC_FormatMoney=u.xi,this.APP_FUNC_FormatDate=u.Rv,this.APP_FUNC_GetColor_VOrderStatus=u.qM,this.v_order_status=m.TL,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.orders=[],(0,c.A)(function*(){o.loading=yield o.loadingController.create({message:""})})()}ngOnInit(){var e=this;(0,c.A)(function*(){(yield(0,I.kU)())&&e.refreshData()})()}onIonRefresher(e){this.filter={},this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}resetData(){this.orders.length=0}pushData(e){this.orders=this.orders.concat(e)}refreshData(e){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter.search=e.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}sortChange(e,n){this.paging.sortfield=e||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}loadData_Paging(e){var n=this;return(0,c.A)(function*(){n.paging.loading=!0,(0,P.Qd)({loading:o=>{var d,g;o?null===(d=n.loading)||void 0===d||d.present():null===(g=n.loading)||void 0===g||g.dismiss()},params:{PageNumber:n.paging.page,PageSize:n.paging.limit},callback:o=>{var d;n.response=o,null!=o&&o.Succeeded?n.pushData(null!==(d=null==o?void 0:o.Data)&&void 0!==d?d:[]):(0,O.cX)(n.toastController,{},o).then(g=>g.present()),n.paging.loading=!1,n.paging.active=!(null==o||!o.HasNextPage),e&&e()}})})()}getOrderStatusText(e){var n;return null===(n=m.TL._data.find(o=>o.LookupId==e))||void 0===n?void 0:n.Objectvalue}}return(i=l).\u0275fac=function(e){return new(e||i)(t.rXU(r.Xi),t.rXU(r.K_))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-order-info"]],decls:15,vars:8,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"container","p-0","order-list"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],["mode","ios"],["lines","none","button","","detail","false",3,"href"],["src","../../../assets/icon/payment/ShopeePay.jpeg"],[1,"d-flex","w-100","align-items-stretch","justify-content-between"],[1,"order-date","text-muted"],[1,"d-flex","flex-column","text-right"],[1,"flex-grow-1"],[3,"ionInfinite"]],template:function(e,n){1&e&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",2),t.bIt("ionRefresh",function(d){return n.onIonRefresher(d)}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,C,2,0,"div",3)(11,D,5,3,"div",4),t.j41(12,"div",5),t.DNE(13,M,19,8,"ng-container",6),t.k0s(),t.DNE(14,y,2,0,"ion-infinite-scroll",7),t.k0s()),2&e&&(t.R7$(3),t.Y8G("defaultHref",n.APP_ROUTE.TABS_USER),t.R7$(2),t.JRh(t.bMT(6,6,"OrderHistory")),t.R7$(5),t.Y8G("ngIf",!n.response),t.R7$(1),t.Y8G("ngIf",n.response&&!n.orders.length),t.R7$(2),t.Y8G("ngForOf",n.orders),t.R7$(1),t.Y8G("ngIf",n.paging.active))},dependencies:[f.Sq,f.bT,r.QW,r.b_,r.W9,r.eU,r.Ax,r.Hp,r.uz,r.he,r.To,r.Ki,r.w2,r.Zx,r.BC,r.ai,r.el,F.D9],styles:[".order-list[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 2.5rem;margin-top:.5rem;margin-bottom:.5rem;--border-radius: 50%}.order-list[_ngcontent-%COMP%]   .order-date[_ngcontent-%COMP%]{font-size:.6rem}.order-list[_ngcontent-%COMP%]   .order-status[_ngcontent-%COMP%]{font-size:.75rem}"]}),l})()}];let T=(()=>{var i;class l{}return(i=l).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[p.iI.forChild(j),p.iI]}),l})();var _=a(9500);let x=(()=>{var i;class l{}return(i=l).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[f.MD,v.YN,r.bv,T,_.x]}),l})()}}]);