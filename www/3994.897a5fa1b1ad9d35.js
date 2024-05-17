"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3994],{3994:(U,g,i)=>{i.r(g),i.d(g,{BillInfoDetailPageModule:()=>T});var u=i(177),R=i(9417),a=i(4488),f=i(2175),I=i(467),F=i(6116),P=i(6539),h=i(1312),b=i(7518),v=i(8833),t=i(4438),B=i(4842);function D(n,r){1&n&&(t.j41(0,"div",5),t.nrm(1,"ion-spinner",6),t.k0s())}function C(n,r){if(1&n&&(t.j41(0,"table",10)(1,"tr")(2,"td",11),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.j41(5,"td",12)(6,"b"),t.EFF(7),t.k0s()()(),t.j41(8,"tr")(9,"td",11),t.EFF(10),t.nI1(11,"translate"),t.k0s(),t.j41(12,"td",12)(13,"b"),t.EFF(14),t.k0s()()(),t.j41(15,"tr")(16,"td",11),t.EFF(17),t.nI1(18,"translate"),t.k0s(),t.j41(19,"td",12)(20,"b"),t.EFF(21),t.k0s()()(),t.j41(22,"tr")(23,"td",11),t.EFF(24),t.nI1(25,"translate"),t.k0s(),t.j41(26,"td",12),t.EFF(27),t.k0s()(),t.j41(28,"tr")(29,"td",11),t.EFF(30),t.nI1(31,"translate"),t.k0s(),t.j41(32,"td",12)(33,"b"),t.EFF(34),t.k0s()()(),t.j41(35,"tr")(36,"td",11),t.EFF(37),t.nI1(38,"translate"),t.k0s(),t.j41(39,"td",12),t.EFF(40),t.k0s()()()),2&n){const e=t.XpG(2);t.R7$(3),t.JRh(t.bMT(4,12,"BillCode")),t.R7$(4),t.JRh(e.billInfo.BillCode),t.R7$(3),t.JRh(t.bMT(11,14,"OrderCode")),t.R7$(4),t.JRh(e.billInfo.OrderCode),t.R7$(3),t.JRh(t.bMT(18,16,"Customer")),t.R7$(4),t.JRh(e.billInfo.CustomerFullname),t.R7$(3),t.JRh(t.bMT(25,18,"ElectricUsed")),t.R7$(3),t.SpI("",e.billInfo.ElectricUsed," kWh"),t.R7$(3),t.JRh(t.bMT(31,20,"TotalAmount")),t.R7$(4),t.SpI("",e.APP_FUNC_FormatMoney(e.billInfo.AftertaxBillValue),"\u0111"),t.R7$(3),t.JRh(t.bMT(38,22,"CreatedDate")),t.R7$(3),t.JRh(e.APP_FUNC_FormatDate(e.billInfo.CreatedDate))}}function M(n,r){if(1&n&&(t.qex(0),t.j41(1,"div",7)(2,"div",8),t.DNE(3,C,41,24,"table",9),t.k0s()(),t.bVm()),2&n){const e=t.XpG();t.R7$(3),t.Y8G("ngIf",e.billInfo)}}const $=[{path:"",component:(()=>{var n;class r{constructor(l,o,s,d){var c,m=this;this.loadingController=o,this.toastController=s,this.modalController=d,this.APP_ROUTE=v._,this.APP_FUNC_FormatMoney=h.xi,this.APP_FUNC_FormatDate=h.Rv;let p=null!==(c=l.snapshot.params.id)&&void 0!==c?c:"";p&&(this.BillId=parseFloat(p)),(0,I.A)(function*(){m.loading=yield m.loadingController.create({message:""})})()}ngOnInit(){var l=this;(0,I.A)(function*(){(yield(0,P.kU)())&&l.refreshData()})()}onIonRefresher(l){this.refreshData(()=>{l.target.complete()})}refreshData(l){this.BillId&&(0,F.Y4)({loading:o=>{var s,d;o?null===(s=this.loading)||void 0===s||s.present():null===(d=this.loading)||void 0===d||d.dismiss()},params:{BillId:this.BillId},callback:o=>{this.response=o,null!=o&&o.Succeeded?this.billInfo=o.Data:(0,b.cX)(this.toastController,{},o).then(s=>s.present()),l&&l()}})}}return(n=r).\u0275fac=function(l){return new(l||n)(t.rXU(f.nX),t.rXU(a.Xi),t.rXU(a.K_),t.rXU(a.W3))},n.\u0275cmp=t.VBU({type:n,selectors:[["app-bill-info-detail"]],decls:12,vars:6,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","mb-4"],[1,"card-bill-info","rounded","bg-white"],["class","table table-borderless m-0",4,"ngIf"],[1,"table","table-borderless","m-0"],[1,"text-muted"],[1,"text-right"]],template:function(l,o){1&l&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s()()(),t.j41(7,"ion-content")(8,"ion-refresher",2),t.bIt("ionRefresh",function(d){return o.onIonRefresher(d)}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.DNE(10,D,2,0,"div",3)(11,M,4,1,"ng-container",4),t.k0s()),2&l&&(t.R7$(3),t.Y8G("defaultHref",o.APP_ROUTE.BILL_INFO),t.R7$(2),t.JRh(t.bMT(6,4,"BillInfo")),t.R7$(5),t.Y8G("ngIf",!o.response),t.R7$(1),t.Y8G("ngIf",null==o.response?null:o.response.Succeeded))},dependencies:[u.bT,a.QW,a.W9,a.eU,a.To,a.Ki,a.w2,a.BC,a.ai,a.el,B.D9],styles:[".card-bill-info[_ngcontent-%COMP%]{padding:1rem}.card-bill-info.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]{padding:1rem}.card-bill.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}ion-radio-group[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin-right:3rem;margin-bottom:.25rem}"]}),r})()}];let j=(()=>{var n;class r{}return(n=r).\u0275fac=function(l){return new(l||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[f.iI.forChild($),f.iI]}),r})();var E=i(9500);let T=(()=>{var n;class r{}return(n=r).\u0275fac=function(l){return new(l||n)},n.\u0275mod=t.$C({type:n}),n.\u0275inj=t.G2t({imports:[u.MD,R.YN,a.bv,j,E.x]}),r})()}}]);