"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3994],{3994:(A,p,a)=>{a.r(p),a.d(p,{BillInfoDetailPageModule:()=>J});var u=a(177),I=a(9417),d=a(8974),b=a(2175),h=a(467),_=a(7392),P=a(2233),v=a(6116),F=a(6539),g=a(1312),R=a(8650),M=a(3588),C=a(8833),t=a(4438),k=a(4842);const D=()=>[];function B(n,r){1&n&&(t.j41(0,"div",7),t.nrm(1,"ion-spinner",8),t.k0s())}function $(n,r){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const i=t.XpG(3);t.R7$(),t.JRh(i.APP_FUNC_FormatDate(i.billInfo.ModifiedDate))}}function O(n,r){if(1&n){const i=t.RV6();t.j41(0,"span",17)(1,"i",18),t.bIt("click",function(e){t.eBV(i);const o=t.XpG(3);return t.Njj(o.openLookupLink(e))}),t.EFF(2),t.k0s()()}if(2&n){const i=t.XpG(3);t.R7$(2),t.JRh(i.billInfo.LookupLink)}}function E(n,r){if(1&n&&(t.j41(0,"table",15)(1,"tr")(2,"td"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.j41(5,"td")(6,"b"),t.EFF(7),t.k0s()()(),t.j41(8,"tr")(9,"td"),t.EFF(10),t.nI1(11,"translate"),t.k0s(),t.j41(12,"td"),t.DNE(13,$,2,1,"span",6),t.k0s()(),t.j41(14,"tr")(15,"td"),t.EFF(16),t.nI1(17,"translate"),t.k0s(),t.j41(18,"td"),t.DNE(19,O,3,1,"span",16),t.k0s()(),t.j41(20,"tr")(21,"td"),t.EFF(22),t.nI1(23,"translate"),t.k0s(),t.j41(24,"td"),t.EFF(25),t.k0s()()()),2&n){const i=t.XpG(2);t.R7$(3),t.JRh(t.bMT(4,8,"BillCode")),t.R7$(4),t.JRh(i.billInfo.EinvoiceNumber),t.R7$(3),t.JRh(t.bMT(11,10,"CreatedDate")),t.R7$(3),t.Y8G("ngIf",i.billInfo.ModifiedDate),t.R7$(3),t.JRh(t.bMT(17,12,"LookupLink")),t.R7$(3),t.Y8G("ngIf",i.billInfo.LookupLink),t.R7$(3),t.JRh(t.bMT(23,14,"LookupCode")),t.R7$(3),t.JRh(i.billInfo.LookupCode)}}function j(n,r){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const i=t.XpG().$implicit,l=t.XpG(3);t.R7$(),t.JRh(l.APP_FUNC_RoundNumber(i.Quantity,100))}}function T(n,r){if(1&n&&(t.qex(0),t.j41(1,"tr")(2,"td"),t.EFF(3),t.k0s(),t.j41(4,"td"),t.EFF(5),t.k0s(),t.j41(6,"td"),t.DNE(7,j,2,1,"span",6),t.k0s(),t.j41(8,"td"),t.EFF(9),t.k0s()(),t.bVm()),2&n){let i;const l=r.$implicit,e=t.XpG(3);t.R7$(3),t.JRh(l.ProductName),t.R7$(2),t.JRh(l.Unit),t.R7$(2),t.Y8G("ngIf",l.Quantity),t.R7$(2),t.SpI("",e.APP_FUNC_FormatMoney(null!==(i=l.RealValue)&&void 0!==i?i:0),"\u0111")}}function x(n,r){if(1&n&&(t.j41(0,"table",19)(1,"thead")(2,"tr")(3,"th"),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"th"),t.EFF(7),t.nI1(8,"translate"),t.k0s(),t.j41(9,"th"),t.EFF(10),t.nI1(11,"translate"),t.k0s(),t.j41(12,"th"),t.EFF(13),t.nI1(14,"translate"),t.nrm(15,"br"),t.j41(16,"small"),t.EFF(17),t.nI1(18,"translate"),t.k0s()()()(),t.j41(19,"tbody"),t.DNE(20,T,10,4,"ng-container",20),t.j41(21,"tr")(22,"td")(23,"b"),t.EFF(24),t.nI1(25,"translate"),t.k0s()(),t.nrm(26,"td")(27,"td"),t.j41(28,"td")(29,"b"),t.EFF(30),t.k0s()()()()()),2&n){let i;const l=t.XpG(2);t.R7$(4),t.JRh(t.bMT(5,8,"ProductName")),t.R7$(3),t.JRh(t.bMT(8,10,"Unit")),t.R7$(3),t.JRh(t.bMT(11,12,"Quantity")),t.R7$(3),t.JRh(t.bMT(14,14,"IntoMoney")),t.R7$(4),t.JRh(t.bMT(18,16,"IncludedVAT")),t.R7$(3),t.Y8G("ngForOf",null!==(i=null==l.billInfo?null:l.billInfo.DetailBillDetails)&&void 0!==i?i:t.lJ4(20,D)),t.R7$(4),t.JRh(t.bMT(25,18,"Total")),t.R7$(6),t.SpI("",l.APP_FUNC_FormatMoney(l.billInfo.AftertaxBillValue),"\u0111")}}function y(n,r){if(1&n&&(t.qex(0),t.j41(1,"div",9)(2,"div",10),t.DNE(3,E,26,16,"table",11)(4,x,31,21,"table",12),t.k0s(),t.j41(5,"div",13)(6,"div",14)(7,"div"),t.EFF(8,"* Ghi ch\xfa"),t.k0s(),t.j41(9,"ul")(10,"li"),t.EFF(11,"\u0110VT: \u0110\u01a1n v\u1ecb t\xednh"),t.k0s(),t.j41(12,"li"),t.EFF(13,"SL: S\u1ed1 l\u01b0\u1ee3ng"),t.k0s()()()()(),t.bVm()),2&n){const i=t.XpG();t.R7$(3),t.Y8G("ngIf",i.billInfo),t.R7$(),t.Y8G("ngIf",i.billInfo)}}const L=[{path:"",component:(()=>{var n;class r{constructor(l,e,o,s){var c,f=this;this.loadingController=e,this.toastController=o,this.modalController=s,this.APP_ROUTE=C._,this.APP_FUNC_FormatMoney=g.xi,this.APP_FUNC_FormatDate=g.Rv,this.APP_FUNC_RoundNumber=g.Rw,this.v_einvoice_status=M.XM;let m=null!==(c=l.snapshot.params.id)&&void 0!==c?c:"";m&&(this.BillId=parseFloat(m)),(0,h.A)(function*(){f.loading=yield f.loadingController.create({message:""})})()}ngOnInit(){var l=this;(0,h.A)(function*(){(yield(0,F.kU)())&&l.refreshData()})()}onIonRefresher(l){this.refreshData(()=>{l.target.complete()})}refreshData(l){this.BillId&&(0,v.q)({loading:e=>{var o,s;e?null===(o=this.loading)||void 0===o||o.present():null===(s=this.loading)||void 0===s||s.dismiss()},params:{BillId:this.BillId},callback:e=>{this.response=e,null!=e&&e.Succeeded?this.billInfo=e.Data:(0,R.cX)(this.toastController,{},e).then(o=>o.present()),l&&l()}})}openLookupLink(l){var e,o,s,c;null!==(e=this.billInfo)&&void 0!==e&&e.LookupLink&&null!==(o=this.billInfo)&&void 0!==o&&o.LookupCode&&_.P.open({url:`${null===(s=this.billInfo)||void 0===s?void 0:s.LookupLink}?strFkey=${null===(c=this.billInfo)||void 0===c?void 0:c.LookupCode}`})}shareBill(l){var e=this;return(0,h.A)(function*(){var o,s,c,f;yield P.S.share({title:null===(o=e.billInfo)||void 0===o?void 0:o.EinvoiceNumber,text:(0,g.Rv)(null===(s=e.billInfo)||void 0===s?void 0:s.ModifiedDate),url:`${null===(c=e.billInfo)||void 0===c?void 0:c.LookupLink}?strFkey=${null===(f=e.billInfo)||void 0===f?void 0:f.LookupCode}`,dialogTitle:"Share bill"})})()}}return(n=r).\u0275fac=function(l){return new(l||n)(t.rXU(b.nX),t.rXU(d.Xi),t.rXU(d.K_),t.rXU(d.W3))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-bill-info-detail"]],decls:17,vars:9,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","end",1,"ion-no-margin",3,"click"],["color","primary",1,"ion-no-margin"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","mb-4"],[1,"card-bill-info","rounded","bg-white"],["class","table table-borderless table-bill m-0",4,"ngIf"],["class","table table-bill-detail mt-3 mb-0",4,"ngIf"],[1,"text-muted","mt-4"],[1,"fs-1"],[1,"table","table-borderless","table-bill","m-0"],["class","d-inline-block text-ellipsis","style","max-width:10rem;",4,"ngIf"],[1,"d-inline-block","text-ellipsis",2,"max-width","10rem"],[1,"text-tertiary","cursor-pointer",3,"click"],[1,"table","table-bill-detail","mt-3","mb-0"],[4,"ngFor","ngForOf"]],template:function(l,e){1&l&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.j41(7,"ion-buttons",2),t.bIt("click",function(s){return e.shareBill(s)}),t.j41(8,"ion-chip",3)(9,"ion-label"),t.EFF(10),t.nI1(11,"translate"),t.k0s()()()()(),t.j41(12,"ion-content")(13,"ion-refresher",4),t.bIt("ionRefresh",function(s){return e.onIonRefresher(s)}),t.nrm(14,"ion-refresher-content"),t.k0s(),t.DNE(15,B,2,0,"div",5)(16,y,14,2,"ng-container",6),t.k0s()),2&l&&(t.R7$(3),t.Y8G("defaultHref",e.APP_ROUTE.TABS_DEFAULT),t.R7$(2),t.JRh(t.bMT(6,5,"BillInfo")),t.R7$(5),t.JRh(t.bMT(11,7,"Share")),t.R7$(5),t.Y8G("ngIf",!e.response),t.R7$(),t.Y8G("ngIf",null==e.response?null:e.response.Succeeded))},dependencies:[u.Sq,u.bT,d.QW,d.ZB,d.W9,d.eU,d.he,d.To,d.Ki,d.w2,d.BC,d.ai,d.el,k.D9],styles:[".card-bill-info[_ngcontent-%COMP%]{padding:1rem}.card-bill-info.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]{padding:1rem}.card-bill.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0;padding-right:.5rem;font-size:.875rem;color:var(--ion-color-medium-shade)}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   b[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;white-space:nowrap;text-align:right}.table-bill-detail[_ngcontent-%COMP%]{border-radius:.75rem;overflow:hidden;font-size:.875rem}.table-bill-detail[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.table-bill-detail[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle}.table-bill-detail[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{background-color:var(--ion-background-color-primary);color:var(--ion-text-color)}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding-left:.5rem;padding-right:.5rem}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:0;padding-right:.5rem;text-align:right}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:.5rem;padding-right:0;text-align:left}"]}),r})()}];let G=(()=>{var n;class r{}return(n=r).\u0275fac=function(l){return new(l||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[b.iI.forChild(L),b.iI]}),r})();var N=a(3584);let J=(()=>{var n;class r{}return(n=r).\u0275fac=function(l){return new(l||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[u.MD,I.YN,d.bv,G,N.x]}),r})()}}]);