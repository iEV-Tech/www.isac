"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3994],{3994:(A,b,o)=>{o.r(b),o.d(b,{BillInfoDetailPageModule:()=>N});var g=o(177),P=o(9417),s=o(8974),f=o(2175),p=o(467),I=o(7392),_=o(6116),F=o(6539),u=o(1312),R=o(8650),M=o(3588),v=o(8833),t=o(4438),C=o(4842);const k=()=>[];function D(n,a){1&n&&(t.j41(0,"div",5),t.nrm(1,"ion-spinner",6),t.k0s())}function O(n,a){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const l=t.XpG(3);t.R7$(),t.JRh(l.APP_FUNC_FormatDate(l.billInfo.ModifiedDate))}}function B(n,a){if(1&n){const l=t.RV6();t.j41(0,"span",15)(1,"i",16),t.bIt("click",function(i){t.eBV(l);const r=t.XpG(3);return t.Njj(r.openLookupLink(i))}),t.EFF(2),t.k0s()()}if(2&n){const l=t.XpG(3);t.R7$(2),t.JRh(l.billInfo.LookupLink)}}function E(n,a){if(1&n&&(t.j41(0,"table",13)(1,"tr")(2,"td"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.j41(5,"td")(6,"b"),t.EFF(7),t.k0s()()(),t.j41(8,"tr")(9,"td"),t.EFF(10),t.nI1(11,"translate"),t.k0s(),t.j41(12,"td"),t.DNE(13,O,2,1,"span",4),t.k0s()(),t.j41(14,"tr")(15,"td"),t.EFF(16),t.nI1(17,"translate"),t.k0s(),t.j41(18,"td"),t.DNE(19,B,3,1,"span",14),t.k0s()(),t.j41(20,"tr")(21,"td"),t.EFF(22),t.nI1(23,"translate"),t.k0s(),t.j41(24,"td"),t.EFF(25),t.k0s()()()),2&n){const l=t.XpG(2);t.R7$(3),t.JRh(t.bMT(4,8,"BillCode")),t.R7$(4),t.JRh(l.billInfo.EinvoiceNumber),t.R7$(3),t.JRh(t.bMT(11,10,"CreatedDate")),t.R7$(3),t.Y8G("ngIf",l.billInfo.ModifiedDate),t.R7$(3),t.JRh(t.bMT(17,12,"LookupInvoicesAt")),t.R7$(3),t.Y8G("ngIf",l.billInfo.LookupLink),t.R7$(3),t.JRh(t.bMT(23,14,"LookupCode")),t.R7$(3),t.JRh(l.billInfo.LookupCode)}}function $(n,a){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const l=t.XpG().$implicit,e=t.XpG(3);t.R7$(),t.JRh(e.APP_FUNC_RoundNumber(l.Quantity,100))}}function j(n,a){if(1&n&&(t.qex(0),t.j41(1,"tr")(2,"td"),t.EFF(3),t.k0s(),t.j41(4,"td"),t.EFF(5),t.k0s(),t.j41(6,"td"),t.DNE(7,$,2,1,"span",4),t.k0s(),t.j41(8,"td"),t.EFF(9),t.k0s()(),t.bVm()),2&n){let l;const e=a.$implicit,i=t.XpG(3);t.R7$(3),t.JRh(e.ProductName),t.R7$(2),t.JRh(e.Unit),t.R7$(2),t.Y8G("ngIf",e.Quantity),t.R7$(2),t.SpI("",i.APP_FUNC_FormatMoney(null!==(l=e.RealValue)&&void 0!==l?l:0),"\u0111")}}function T(n,a){if(1&n&&(t.j41(0,"table",17)(1,"thead")(2,"tr")(3,"th"),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"th"),t.EFF(7),t.nI1(8,"translate"),t.k0s(),t.j41(9,"th"),t.EFF(10),t.nI1(11,"translate"),t.k0s(),t.j41(12,"th"),t.EFF(13),t.nI1(14,"translate"),t.nrm(15,"br"),t.j41(16,"small"),t.EFF(17),t.nI1(18,"translate"),t.k0s()()()(),t.j41(19,"tbody"),t.DNE(20,j,10,4,"ng-container",18),t.j41(21,"tr")(22,"td")(23,"b"),t.EFF(24),t.nI1(25,"translate"),t.k0s()(),t.nrm(26,"td")(27,"td"),t.j41(28,"td")(29,"b"),t.EFF(30),t.k0s()()()()()),2&n){let l;const e=t.XpG(2);t.R7$(4),t.JRh(t.bMT(5,8,"ProductName")),t.R7$(3),t.JRh(t.bMT(8,10,"Unit")),t.R7$(3),t.JRh(t.bMT(11,12,"Quantity")),t.R7$(3),t.JRh(t.bMT(14,14,"IntoMoney")),t.R7$(4),t.JRh(t.bMT(18,16,"IncludedVAT")),t.R7$(3),t.Y8G("ngForOf",null!==(l=null==e.billInfo?null:e.billInfo.DetailBillDetails)&&void 0!==l?l:t.lJ4(20,k)),t.R7$(4),t.JRh(t.bMT(25,18,"Total")),t.R7$(6),t.SpI("",e.APP_FUNC_FormatMoney(e.billInfo.AftertaxBillValue),"\u0111")}}function x(n,a){if(1&n&&(t.qex(0),t.j41(1,"div",7)(2,"div",8),t.DNE(3,E,26,16,"table",9)(4,T,31,21,"table",10),t.k0s(),t.j41(5,"div",11)(6,"div",12)(7,"div"),t.EFF(8,"* Ghi ch\xfa"),t.k0s(),t.j41(9,"ul")(10,"li"),t.EFF(11,"\u0110VT: \u0110\u01a1n v\u1ecb t\xednh"),t.k0s(),t.j41(12,"li"),t.EFF(13,"SL: S\u1ed1 l\u01b0\u1ee3ng"),t.k0s()()()()(),t.bVm()),2&n){const l=t.XpG();t.R7$(3),t.Y8G("ngIf",l.billInfo),t.R7$(),t.Y8G("ngIf",l.billInfo)}}const y=[{path:"",component:(()=>{var n;class a{constructor(e,i,r,d){var c,h=this;this.loadingController=i,this.toastController=r,this.modalController=d,this.APP_ROUTE=v._,this.APP_FUNC_FormatMoney=u.xi,this.APP_FUNC_FormatDate=u.Rv,this.APP_FUNC_RoundNumber=u.Rw,this.v_einvoice_status=M.XM;let m=null!==(c=e.snapshot.params.id)&&void 0!==c?c:"";m&&(this.BillId=parseFloat(m)),(0,p.A)(function*(){h.loading=yield h.loadingController.create({message:""})})()}ngOnInit(){var e=this;(0,p.A)(function*(){(yield(0,F.kU)())&&e.refreshData()})()}onIonRefresher(e){this.refreshData(()=>{e.target.complete()})}refreshData(e){this.BillId&&(0,_.q)({loading:i=>{var r,d;i?null===(r=this.loading)||void 0===r||r.present():null===(d=this.loading)||void 0===d||d.dismiss()},params:{BillId:this.BillId},callback:i=>{this.response=i,null!=i&&i.Succeeded?this.billInfo=i.Data:(0,R.cX)(this.toastController,{},i).then(r=>r.present()),e&&e()}})}openLookupLink(e){var i,r,d,c;null!==(i=this.billInfo)&&void 0!==i&&i.LookupLink&&null!==(r=this.billInfo)&&void 0!==r&&r.LookupCode&&I.P.open({url:`${null===(d=this.billInfo)||void 0===d?void 0:d.LookupLink}?strFkey=${null===(c=this.billInfo)||void 0===c?void 0:c.LookupCode}`})}}return(n=a).\u0275fac=function(e){return new(e||n)(t.rXU(f.nX),t.rXU(s.Xi),t.rXU(s.K_),t.rXU(s.W3))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-bill-info-detail"]],decls:12,vars:6,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","mb-4"],[1,"card-bill-info","rounded","bg-white"],["class","table table-borderless table-bill m-0",4,"ngIf"],["class","table table-bill-detail mt-3 mb-0",4,"ngIf"],[1,"text-muted","mt-4"],[1,"fs-1"],[1,"table","table-borderless","table-bill","m-0"],["class","d-inline-block text-ellipsis","style","max-width:10rem;",4,"ngIf"],[1,"d-inline-block","text-ellipsis",2,"max-width","10rem"],[1,"text-tertiary","cursor-pointer",3,"click"],[1,"table","table-bill-detail","mt-3","mb-0"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",2),t.bIt("ionRefresh",function(d){return i.onIonRefresher(d)}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,D,2,0,"div",3)(11,x,14,2,"ng-container",4),t.k0s()),2&e&&(t.R7$(3),t.Y8G("defaultHref",i.APP_ROUTE.TABS_DEFAULT),t.R7$(2),t.JRh(t.bMT(6,4,"BillInfo")),t.R7$(5),t.Y8G("ngIf",!i.response),t.R7$(),t.Y8G("ngIf",null==i.response?null:i.response.Succeeded))},dependencies:[g.Sq,g.bT,s.QW,s.W9,s.eU,s.To,s.Ki,s.w2,s.BC,s.ai,s.el,C.D9],styles:[".card-bill-info[_ngcontent-%COMP%]{padding:1rem}.card-bill-info.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]{padding:1rem}.card-bill.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0;padding-right:.5rem;font-size:.875rem;color:var(--ion-color-medium-shade)}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   b[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;white-space:nowrap;text-align:right}.table-bill-detail[_ngcontent-%COMP%]{border-radius:.75rem;overflow:hidden;font-size:.875rem}.table-bill-detail[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.table-bill-detail[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle}.table-bill-detail[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{background-color:var(--ion-background-color-primary);color:var(--ion-text-color)}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding-left:.5rem;padding-right:.5rem}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:0;padding-right:.5rem;text-align:right}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:.5rem;padding-right:0;text-align:left}"]}),a})()}];let G=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[f.iI.forChild(y),f.iI]}),a})();var L=o(3584);let N=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[g.MD,P.YN,s.bv,G,L.x]}),a})()}}]);