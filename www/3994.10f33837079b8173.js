"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3994],{3994:($,b,o)=>{o.r(b),o.d(b,{BillInfoDetailPageModule:()=>k});var u=o(177),C=o(9417),s=o(4488),h=o(2175),P=o(467),v=o(6116),I=o(3232),M=o(6539),m=o(1312),p=o(8650),F=o(8833),t=o(4438),O=o(4842);function D(n,a){1&n&&(t.j41(0,"div",5),t.nrm(1,"ion-spinner",6),t.k0s())}function R(n,a){if(1&n&&(t.j41(0,"table",11)(1,"tr")(2,"td"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.j41(5,"td")(6,"b"),t.EFF(7),t.k0s()()(),t.j41(8,"tr")(9,"td"),t.EFF(10),t.nI1(11,"translate"),t.k0s(),t.j41(12,"td"),t.EFF(13),t.k0s()(),t.j41(14,"tr")(15,"td"),t.EFF(16,"Tra c\u1ee9u h\xf3a \u0111\u01a1n t\u1ea1i"),t.k0s(),t.nrm(17,"td"),t.k0s(),t.j41(18,"tr")(19,"td"),t.EFF(20,"M\xe3 tra c\u1ee9u"),t.k0s(),t.nrm(21,"td"),t.k0s()()),2&n){const l=t.XpG(2);t.R7$(3),t.JRh(t.bMT(4,4,"BillCode")),t.R7$(4),t.JRh(l.billInfo.BillCode),t.R7$(3),t.JRh(t.bMT(11,6,"CreatedDate")),t.R7$(3),t.JRh(l.APP_FUNC_FormatDate(l.billInfo.CreatedDate))}}function E(n,a){if(1&n&&(t.qex(0),t.j41(1,"tr")(2,"td"),t.EFF(3),t.k0s(),t.j41(4,"td"),t.EFF(5),t.k0s(),t.j41(6,"td"),t.EFF(7),t.k0s()(),t.bVm()),2&n){const l=a.$implicit,e=t.XpG(3);let i,r;t.R7$(3),t.JRh(l.ProductName),t.R7$(2),t.SpI("",null!==(i=l.Quantity)&&void 0!==i?i:0," kWh"),t.R7$(2),t.SpI("",e.APP_FUNC_FormatMoney(null!==(r=l.RealAmount)&&void 0!==r?r:0),"\u0111")}}function _(n,a){if(1&n&&(t.j41(0,"table",12)(1,"thead")(2,"tr")(3,"th"),t.EFF(4,"T\xean h\xe0ng"),t.k0s(),t.j41(5,"th"),t.EFF(6,"S\u1ed1 l\u01b0\u1ee3ng"),t.k0s(),t.j41(7,"th"),t.EFF(8,"Th\xe0nh ti\u1ec1n"),t.nrm(9,"br"),t.j41(10,"small"),t.EFF(11,"\u0110\xe3 bao g\u1ed3m VAT"),t.k0s()()()(),t.j41(12,"tbody"),t.DNE(13,E,8,3,"ng-container",13),t.j41(14,"tr")(15,"td")(16,"b"),t.EFF(17,"T\u1ed5ng"),t.k0s()(),t.nrm(18,"td"),t.j41(19,"td")(20,"b"),t.EFF(21),t.k0s()()()()()),2&n){const l=t.XpG(2);t.R7$(13),t.Y8G("ngForOf",l.orderDetails),t.R7$(8),t.SpI("",l.APP_FUNC_FormatMoney(l.billInfo.RealValue),"\u0111")}}function B(n,a){if(1&n&&(t.qex(0),t.j41(1,"div",7)(2,"div",8),t.DNE(3,R,22,8,"table",9)(4,_,22,2,"table",10),t.k0s()(),t.bVm()),2&n){const l=t.XpG();t.R7$(3),t.Y8G("ngIf",l.billInfo),t.R7$(1),t.Y8G("ngIf",l.billInfo)}}const j=[{path:"",component:(()=>{var n;class a{constructor(e,i,r,c){var d,g=this;this.loadingController=i,this.toastController=r,this.modalController=c,this.APP_ROUTE=F._,this.APP_FUNC_FormatMoney=m.xi,this.APP_FUNC_FormatDate=m.Rv,this.APP_FUNC_RoundNumber=m.Rw,this.orderDetails=[];let f=null!==(d=e.snapshot.params.id)&&void 0!==d?d:"";f&&(this.BillId=parseFloat(f)),(0,P.A)(function*(){g.loading=yield g.loadingController.create({message:""})})()}ngOnInit(){var e=this;(0,P.A)(function*(){(yield(0,M.kU)())&&e.refreshData()})()}onIonRefresher(e){this.refreshData(()=>{e.target.complete()})}refreshData(e){this.BillId&&(0,v.Y4)({loading:i=>{var r,c;i?null===(r=this.loading)||void 0===r||r.present():null===(c=this.loading)||void 0===c||c.dismiss()},params:{BillId:this.BillId},callback:i=>{var r,c;this.response=i,null!=i&&i.Succeeded?(this.billInfo=i.Data,null!==(r=this.billInfo)&&void 0!==r&&r.OrderCode&&(0,I.q)({loading:d=>{var g,f;d?null===(g=this.loading)||void 0===g||g.present():null===(f=this.loading)||void 0===f||f.dismiss()},params:{OrderCode:null===(c=this.billInfo)||void 0===c?void 0:c.OrderCode},callback:d=>{var g;this.response=d,null!=d&&d.Succeeded?this.orderDetails=null!==(g=d.Data)&&void 0!==g?g:[]:(0,p.cX)(this.toastController,{},d).then(f=>f.present()),e&&e()}})):(0,p.cX)(this.toastController,{},i).then(d=>d.present()),e&&e()}})}}return(n=a).\u0275fac=function(e){return new(e||n)(t.rXU(h.nX),t.rXU(s.Xi),t.rXU(s.K_),t.rXU(s.W3))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-bill-info-detail"]],decls:12,vars:6,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","mb-4"],[1,"card-bill-info","rounded","bg-white"],["class","table table-borderless table-bill m-0",4,"ngIf"],["class","table table-bill-detail mt-3 mb-0",4,"ngIf"],[1,"table","table-borderless","table-bill","m-0"],[1,"table","table-bill-detail","mt-3","mb-0"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",2),t.bIt("ionRefresh",function(c){return i.onIonRefresher(c)}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,D,2,0,"div",3)(11,B,5,2,"ng-container",4),t.k0s()),2&e&&(t.R7$(3),t.Y8G("defaultHref",i.APP_ROUTE.BILL_INFO),t.R7$(2),t.JRh(t.bMT(6,4,"BillInfo")),t.R7$(5),t.Y8G("ngIf",!i.response),t.R7$(1),t.Y8G("ngIf",null==i.response?null:i.response.Succeeded))},dependencies:[u.Sq,u.bT,s.QW,s.W9,s.eU,s.To,s.Ki,s.w2,s.BC,s.ai,s.el,O.D9],styles:[".card-bill-info[_ngcontent-%COMP%]{padding:1rem}.card-bill-info.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]{padding:1rem}.card-bill.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0;padding-right:.5rem;font-size:.875rem;color:var(--ion-color-medium-shade)}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   b[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;white-space:nowrap;text-align:right}.table-bill-detail[_ngcontent-%COMP%]{border-radius:.75rem;overflow:hidden;font-size:.875rem}.table-bill-detail[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.table-bill-detail[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle}.table-bill-detail[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{background-color:var(--ion-background-color-primary);color:var(--ion-text-color)}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{text-align:center;padding-left:.5rem;padding-right:.5rem}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:0;padding-right:.5rem;text-align:right}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:.5rem;padding-right:0;text-align:left}"]}),a})()}];let y=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[h.iI.forChild(j),h.iI]}),a})();var T=o(9500);let k=(()=>{var n;class a{}return(n=a).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[u.MD,C.YN,s.bv,y,T.x]}),a})()}}]);