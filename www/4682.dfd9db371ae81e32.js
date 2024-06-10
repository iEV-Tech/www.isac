"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4682],{4682:(Y,_,d)=>{d.r(_),d.d(_,{BillInfoDetailPageModule:()=>S});var p=d(177),I=d(9417),s=d(8974),b=d(2175),c=d(467),P=d(7392),h=d(5083);class C extends h.E_{write(o){var n=this;return(0,c.A)(function*(){if(typeof navigator>"u"||!navigator.clipboard)throw n.unavailable("Clipboard API not available in this browser");if(void 0!==o.string)yield n.writeText(o.string);else if(o.url)yield n.writeText(o.url);else{if(!o.image)throw new Error("Nothing to write");if(!(typeof ClipboardItem<"u"))throw n.unavailable("Writing images to the clipboard is not supported in this browser");try{const i=yield(yield fetch(o.image)).blob(),l=new ClipboardItem({[i.type]:i});yield navigator.clipboard.write([l])}catch{throw new Error("Failed to write image")}}})()}read(){var o=this;return(0,c.A)(function*(){if(typeof navigator>"u"||!navigator.clipboard)throw o.unavailable("Clipboard API not available in this browser");if(!(typeof ClipboardItem<"u"))return o.readText();try{const n=yield navigator.clipboard.read(),i=n[0].types[0],l=yield n[0].getType(i);return{value:yield o._getBlobData(l,i),type:i}}catch{return o.readText()}})()}readText(){var o=this;return(0,c.A)(function*(){if(typeof navigator>"u"||!navigator.clipboard||!navigator.clipboard.readText)throw o.unavailable("Reading from clipboard not supported in this browser");return{value:yield navigator.clipboard.readText(),type:"text/plain"}})()}writeText(o){var n=this;return(0,c.A)(function*(){if(typeof navigator>"u"||!navigator.clipboard||!navigator.clipboard.writeText)throw n.unavailable("Writting to clipboard not supported in this browser");yield navigator.clipboard.writeText(o)})()}_getBlobData(o,n){return new Promise((i,l)=>{const a=new FileReader;n.includes("image")?a.readAsDataURL(o):a.readAsText(o),a.onloadend=()=>{i(a.result)},a.onerror=r=>{l(r)}})}}const F=(0,h.F3)("Clipboard",{web:()=>new C});var R=d(6116),M=d(6539),u=d(8517),m=d(8650),k=d(3588),D=d(8833),y=d(9762),t=d(4438),B=d(4842);const T=()=>["android","ios"],x=()=>[];function E(e,o){if(1&e){const n=t.RV6();t.j41(0,"ion-buttons",6),t.bIt("click",function(l){t.eBV(n);const a=t.XpG();return t.Njj(a.shareBill(l))}),t.j41(1,"ion-chip",7)(2,"ion-label"),t.EFF(3),t.nI1(4,"translate"),t.k0s()()()}2&e&&(t.R7$(3),t.JRh(t.bMT(4,1,"Share")))}function j(e,o){1&e&&(t.j41(0,"div",8),t.nrm(1,"ion-spinner",9),t.k0s())}function O(e,o){if(1&e&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&e){const n=t.XpG(3);t.R7$(),t.JRh(n.APP_FUNC_FormatDate(n.billInfo.ModifiedDate))}}function $(e,o){if(1&e){const n=t.RV6();t.j41(0,"span",19),t.bIt("click",function(l){t.eBV(n);const a=t.XpG(3);return t.Njj(a.openLookupLink(l))}),t.j41(1,"i",20),t.EFF(2),t.k0s()()}if(2&e){const n=t.XpG(3);t.R7$(2),t.JRh(n.billInfo.LookupLink)}}function A(e,o){if(1&e){const n=t.RV6();t.j41(0,"span",19),t.bIt("click",function(l){t.eBV(n);const a=t.XpG(3);return t.Njj(a.copyLookupCode(l))}),t.j41(1,"b"),t.EFF(2),t.k0s()()}if(2&e){const n=t.XpG(3);t.R7$(2),t.JRh(n.billInfo.LookupCode)}}function G(e,o){if(1&e&&(t.j41(0,"table",17)(1,"tr")(2,"td"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.j41(5,"td")(6,"b"),t.EFF(7),t.k0s()()(),t.j41(8,"tr")(9,"td"),t.EFF(10),t.nI1(11,"translate"),t.k0s(),t.j41(12,"td"),t.DNE(13,O,2,1,"span",5),t.k0s()(),t.j41(14,"tr")(15,"td"),t.EFF(16),t.nI1(17,"translate"),t.k0s(),t.j41(18,"td"),t.DNE(19,$,3,1,"span",18),t.k0s()(),t.j41(20,"tr")(21,"td"),t.EFF(22),t.nI1(23,"translate"),t.k0s(),t.j41(24,"td"),t.DNE(25,A,3,1,"span",18),t.k0s()()()),2&e){const n=t.XpG(2);t.R7$(3),t.JRh(t.bMT(4,8,"BillCode")),t.R7$(4),t.JRh(n.billInfo.EinvoiceNumber),t.R7$(3),t.JRh(t.bMT(11,10,"CreatedDate")),t.R7$(3),t.Y8G("ngIf",n.billInfo.ModifiedDate),t.R7$(3),t.JRh(t.bMT(17,12,"LookupLink")),t.R7$(3),t.Y8G("ngIf",n.billInfo.LookupLink),t.R7$(3),t.JRh(t.bMT(23,14,"LookupCode")),t.R7$(3),t.Y8G("ngIf",n.billInfo.LookupCode)}}function L(e,o){if(1&e&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&e){const n=t.XpG().$implicit,i=t.XpG(3);t.R7$(),t.JRh(i.APP_FUNC_RoundNumber(n.Quantity,100))}}function w(e,o){if(1&e&&(t.qex(0),t.j41(1,"tr")(2,"td"),t.EFF(3),t.k0s(),t.j41(4,"td"),t.EFF(5),t.k0s(),t.j41(6,"td"),t.DNE(7,L,2,1,"span",5),t.k0s(),t.j41(8,"td"),t.EFF(9),t.k0s()(),t.bVm()),2&e){let n;const i=o.$implicit,l=t.XpG(3);t.R7$(3),t.JRh(i.ProductName),t.R7$(2),t.JRh(i.Unit),t.R7$(2),t.Y8G("ngIf",i.Quantity),t.R7$(2),t.SpI("",l.APP_FUNC_FormatMoney(null!==(n=i.RealValue)&&void 0!==n?n:0),"\u0111")}}function N(e,o){if(1&e&&(t.j41(0,"table",21)(1,"thead")(2,"tr")(3,"th"),t.EFF(4),t.nI1(5,"translate"),t.k0s(),t.j41(6,"th"),t.EFF(7),t.nI1(8,"translate"),t.k0s(),t.j41(9,"th"),t.EFF(10),t.nI1(11,"translate"),t.k0s(),t.j41(12,"th"),t.EFF(13),t.nI1(14,"translate"),t.nrm(15,"br"),t.j41(16,"small"),t.EFF(17),t.nI1(18,"translate"),t.k0s()()()(),t.j41(19,"tbody"),t.DNE(20,w,10,4,"ng-container",22),t.j41(21,"tr")(22,"td")(23,"b"),t.EFF(24),t.nI1(25,"translate"),t.k0s()(),t.nrm(26,"td")(27,"td"),t.j41(28,"td")(29,"b"),t.EFF(30),t.k0s()()()()()),2&e){let n;const i=t.XpG(2);t.R7$(4),t.JRh(t.bMT(5,8,"ProductName")),t.R7$(3),t.JRh(t.bMT(8,10,"Unit")),t.R7$(3),t.JRh(t.bMT(11,12,"Quantity")),t.R7$(3),t.JRh(t.bMT(14,14,"IntoMoney")),t.R7$(4),t.JRh(t.bMT(18,16,"IncludedVAT")),t.R7$(3),t.Y8G("ngForOf",null!==(n=null==i.billInfo?null:i.billInfo.DetailBillDetails)&&void 0!==n?n:t.lJ4(20,x)),t.R7$(4),t.JRh(t.bMT(25,18,"Total")),t.R7$(6),t.SpI("",i.APP_FUNC_FormatMoney(i.billInfo.AftertaxBillValue),"\u0111")}}function J(e,o){if(1&e&&(t.qex(0),t.j41(1,"div",10)(2,"div",11)(3,"div",12),t.DNE(4,G,26,16,"table",13)(5,N,31,21,"table",14),t.k0s()(),t.j41(6,"div",15)(7,"div",16)(8,"div"),t.EFF(9,"* Ghi ch\xfa"),t.k0s(),t.j41(10,"ul")(11,"li"),t.EFF(12,"\u0110VT: \u0110\u01a1n v\u1ecb t\xednh"),t.k0s(),t.j41(13,"li"),t.EFF(14,"SL: S\u1ed1 l\u01b0\u1ee3ng"),t.k0s()()()()(),t.bVm()),2&e){const n=t.XpG();t.R7$(4),t.Y8G("ngIf",n.billInfo),t.R7$(),t.Y8G("ngIf",n.billInfo)}}const U=[{path:"",component:(()=>{var e;class o{constructor(i,l,a,r){var f,g=this;this.loadingController=l,this.toastController=a,this.modalController=r,this.platform=h.Ii.getPlatform(),this.APP_ROUTE=D._,this.APP_FUNC_FormatMoney=u.xi,this.APP_FUNC_FormatDate=u.Rv,this.APP_FUNC_RoundNumber=u.Rw,this.v_einvoice_status=k.XM;let v=null!==(f=i.snapshot.params.id)&&void 0!==f?f:"";v&&(this.BillId=parseFloat(v)),(0,c.A)(function*(){g.loading=yield g.loadingController.create({message:""})})()}ngOnInit(){var i=this;(0,c.A)(function*(){(yield(0,M.kU)())&&i.refreshData()})()}onIonRefresher(i){this.refreshData(()=>{i.target.complete()})}refreshData(i){this.BillId&&(0,R.q)({loading:l=>{var a,r;l?null===(a=this.loading)||void 0===a||a.present():null===(r=this.loading)||void 0===r||r.dismiss()},params:{BillId:this.BillId},callback:l=>{this.response=l,null!=l&&l.Succeeded?this.billInfo=l.Data:(0,m.cX)(this.toastController,{},l).then(a=>a.present()),i&&i()}})}openLookupLink(i){var l=this;return(0,c.A)(function*(){var a,r,f,g;null!==(a=l.billInfo)&&void 0!==a&&a.LookupLink&&null!==(r=l.billInfo)&&void 0!==r&&r.LookupCode&&P.P.open({url:`${null===(f=l.billInfo)||void 0===f?void 0:f.LookupLink}?strFkey=${null===(g=l.billInfo)||void 0===g?void 0:g.LookupCode}`})})()}copyLookupCode(i){var l=this;return(0,c.A)(function*(){var a;null!==(a=l.billInfo)&&void 0!==a&&a.LookupCode&&(yield F.write({string:l.billInfo.LookupCode}),(0,m.cX)(l.toastController,{color:"success",message:"\u0110\xe3 ch\xe9p v\xe0o b\u1ed9 nh\u1edb t\u1ea1m!"}).then(r=>r.present()))})()}shareBill(i){var l=this;return(0,c.A)(function*(){(0,u.HU)(document.getElementById("billShare")).then(a=>{var r;a&&(0,y.C)(a,`${null===(r=l.billInfo)||void 0===r?void 0:r.BillCode}.png`)})})()}}return(e=o).\u0275fac=function(i){return new(i||e)(t.rXU(b.nX),t.rXU(s.Xi),t.rXU(s.K_),t.rXU(s.W3))},e.\u0275cmp=t.VBU({type:e,selectors:[["app-bill-info-detail"]],decls:13,vars:8,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","end","class","ion-no-margin",3,"click",4,"ngIf"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],["slot","end",1,"ion-no-margin",3,"click"],["color","primary"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","mb-4"],["id","billShare"],[1,"card-bill-info","rounded","bg-white"],["class","table table-borderless table-bill m-0",4,"ngIf"],["class","table table-bill-detail mt-3 mb-0",4,"ngIf"],[1,"text-muted","mt-4"],[1,"fs-1"],[1,"table","table-borderless","table-bill","m-0"],["class","cursor-pointer",3,"click",4,"ngIf"],[1,"cursor-pointer",3,"click"],[1,"text-tertiary"],[1,"table","table-bill-detail","mt-3","mb-0"],[4,"ngFor","ngForOf"]],template:function(i,l){1&i&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.DNE(7,E,5,3,"ion-buttons",2),t.k0s()(),t.j41(8,"ion-content")(9,"ion-refresher",3),t.bIt("ionRefresh",function(r){return l.onIonRefresher(r)}),t.nrm(10,"ion-refresher-content"),t.k0s(),t.DNE(11,j,2,0,"div",4)(12,J,15,2,"ng-container",5),t.k0s()),2&i&&(t.R7$(3),t.Y8G("defaultHref",l.APP_ROUTE.TABS_DEFAULT),t.R7$(2),t.JRh(t.bMT(6,5,"BillInfo")),t.R7$(2),t.Y8G("ngIf",t.lJ4(7,T).includes(l.platform)),t.R7$(4),t.Y8G("ngIf",!l.response),t.R7$(),t.Y8G("ngIf",null==l.response?null:l.response.Succeeded))},dependencies:[p.Sq,p.bT,s.QW,s.ZB,s.W9,s.eU,s.he,s.To,s.Ki,s.w2,s.BC,s.ai,s.el,B.D9],styles:[".card-bill-info[_ngcontent-%COMP%]{padding:1rem}.card-bill-info.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]{padding:1rem}.card-bill.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.table-bill[_ngcontent-%COMP%]{table-layout:fixed}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;vertical-align:top}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;font-size:.875rem;color:var(--ion-color-medium-shade)}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   b[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.table-bill[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.table-bill-detail[_ngcontent-%COMP%]{border-radius:.75rem;overflow:hidden;font-size:.875rem}.table-bill-detail[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.table-bill-detail[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{vertical-align:middle}.table-bill-detail[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{background-color:var(--ion-background-color-primary);color:var(--ion-text-color)}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.5rem;text-align:center}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:0;padding-right:.5rem;text-align:right}.table-bill-detail[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table-bill-detail[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:.5rem;padding-right:0;text-align:left}"]}),o})()}];let X=(()=>{var e;class o{}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[b.iI.forChild(U),b.iI]}),o})();var V=d(3584);let S=(()=>{var e;class o{}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.$C({type:e}),e.\u0275inj=t.G2t({imports:[p.MD,I.YN,s.bv,X,V.x]}),o})()}}]);