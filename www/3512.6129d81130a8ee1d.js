"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3512],{3512:(D,h,d)=>{d.r(h),d.d(h,{CustomerInvoicePageModule:()=>x});var u=d(177),I=d(9417),r=d(4488),p=d(2175),v=d(467),C=d(8037),f=d(5970),g=d(8650),_=d(8833),t=d(4438),P=d(4842);function R(i,c){1&i&&(t.j41(0,"div",16),t.nrm(1,"ion-spinner",17),t.k0s())}function b(i,c){1&i&&(t.j41(0,"div",18),t.nrm(1,"ion-img",19),t.j41(2,"div",20),t.EFF(3),t.nI1(4,"translate"),t.k0s()()),2&i&&(t.R7$(3),t.JRh(t.bMT(4,1,"DataNotFound")))}const F=i=>({$implicit:i});function E(i,c){if(1&i&&(t.qex(0),t.j41(1,"div",21),t.eu8(2,22),t.k0s(),t.bVm()),2&i){const s=c.$implicit;t.XpG();const e=t.sdS(26);t.R7$(2),t.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",t.eq3(2,F,s))}}function M(i,c){if(1&i){const s=t.RV6();t.j41(0,"ion-infinite-scroll",23),t.bIt("ionInfinite",function(n){t.eBV(s);const a=t.XpG();return t.Njj(a.onIonInfinite(n))}),t.nrm(1,"ion-infinite-scroll-content"),t.k0s()}}function j(i,c){1&i&&(t.j41(0,"small",36),t.EFF(1),t.nI1(2,"translate"),t.k0s()),2&i&&(t.R7$(1),t.SpI("(",t.bMT(2,1,"Default"),")"))}function T(i,c){if(1&i){const s=t.RV6();t.j41(0,"div",24)(1,"div",25)(2,"ion-radio",26)(3,"div",27)(4,"b",28),t.EFF(5),t.nI1(6,"translate"),t.k0s(),t.DNE(7,j,3,3,"small",29),t.k0s()(),t.j41(8,"div",30)(9,"ion-button",31),t.bIt("click",function(n){const o=t.eBV(s).$implicit,l=t.XpG();return t.Njj(l.editCustomerInvoice(n,o.CustomerInvoiceId))}),t.nrm(10,"ion-icon",32),t.k0s(),t.j41(11,"ion-button",33),t.bIt("click",function(n){const o=t.eBV(s).$implicit,l=t.XpG();return t.Njj(l.deleteCustomerInvoice(n,o.CustomerInvoiceId))}),t.nrm(12,"ion-icon",34),t.k0s()()(),t.nrm(13,"hr"),t.j41(14,"table",35)(15,"tr")(16,"td"),t.EFF(17),t.nI1(18,"translate"),t.k0s(),t.j41(19,"td")(20,"b"),t.EFF(21),t.k0s()()(),t.j41(22,"tr")(23,"td"),t.EFF(24),t.nI1(25,"translate"),t.k0s(),t.j41(26,"td")(27,"b"),t.EFF(28),t.k0s()()(),t.j41(29,"tr")(30,"td"),t.EFF(31),t.nI1(32,"translate"),t.k0s(),t.j41(33,"td")(34,"b"),t.EFF(35),t.k0s()()(),t.j41(36,"tr")(37,"td"),t.EFF(38),t.nI1(39,"translate"),t.k0s(),t.j41(40,"td")(41,"b"),t.EFF(42),t.k0s()()(),t.j41(43,"tr")(44,"td"),t.EFF(45),t.nI1(46,"translate"),t.k0s(),t.j41(47,"td")(48,"b"),t.EFF(49),t.k0s()()(),t.j41(50,"tr")(51,"td"),t.EFF(52),t.nI1(53,"translate"),t.k0s(),t.j41(54,"td")(55,"b"),t.EFF(56),t.k0s()()()()()}if(2&i){const s=c.$implicit;t.R7$(2),t.Y8G("value",s.CustomerInvoiceId),t.R7$(3),t.JRh(t.bMT(6,15,"ExportBillInfo")),t.R7$(2),t.Y8G("ngIf",s.IsDefault),t.R7$(10),t.JRh(t.bMT(18,17,"FullName")),t.R7$(4),t.JRh(s.BuyerName),t.R7$(3),t.JRh(t.bMT(25,19,"BillCompanyName")),t.R7$(4),t.JRh(s.CompanyName),t.R7$(3),t.JRh(t.bMT(32,21,"BillCompanyAddress")),t.R7$(4),t.JRh(s.Address),t.R7$(3),t.JRh(t.bMT(39,23,"BillCompanyTax")),t.R7$(4),t.JRh(s.TaxCode),t.R7$(3),t.JRh(t.bMT(46,25,"Email")),t.R7$(4),t.JRh(s.BuyerEmail),t.R7$(3),t.JRh(t.bMT(53,27,"Mobile")),t.R7$(4),t.JRh(s.BuyerPhone)}}const k=[{path:"",component:(()=>{var i;class c{constructor(e,n,a,o){this.modalController=e,this.toastController=n,this.loadingController=a,this.animationController=o,this.APP_ROUTE=_._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.customerInvoices=[],this.loadingController.create({message:""}).then(l=>this.loading=l)}ngOnInit(){this.refreshData()}onIonRefresher(e){this.filter={},this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}resetData(){this.customerInvoices.length=0}pushData(e){1==this.paging.page&&(this.customerInvoices.length=0),this.customerInvoices=this.customerInvoices.concat(e)}totalData(){return this.customerInvoices.length}refreshData(e){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter={},this.filter.search=e.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,n){this.paging.sortfield=e||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var n=this;return(0,v.A)(function*(){n.paging.loading=!0,(0,f.Ul)({loading:a=>{var o,l;a?null===(o=n.loading)||void 0===o||o.present():null===(l=n.loading)||void 0===l||l.dismiss()},params:{PageNumber:n.paging.page,PageSize:n.paging.limit},callback:a=>{var o;n.response=a,null!=a&&a.Succeeded?n.pushData(null!==(o=a.Data)&&void 0!==o?o:[]):(0,g.cX)(n.toastController,{},a).then(l=>l.present()),n.paging.loading=!1,n.paging.active=!(null==a||!a.HasNextPage),e&&e()}})})()}editCustomerInvoice(e,n){this.presentModalAddCustomerInvoice(e,n)}deleteCustomerInvoice(e,n){n&&(0,g.Yy)(this.modalController,this.animationController,{selectedId:n,fnConfirm:a=>{(0,f.NT)({loading:o=>{var l,m;o?null===(l=this.loading)||void 0===l||l.present():null===(m=this.loading)||void 0===m||m.dismiss()},params:{CustomerInvoiceId:a},callback:o=>{null!=o&&o.Succeeded?this.refreshData():(0,g.cX)(this.toastController,{},o).then(l=>l.present())}})}})}changeCustomerInvoice(e){this.CustomerInvoiceId=e.detail.value}presentModalAddCustomerInvoice(e,n){var a=this;return(0,v.A)(function*(){const o=yield a.modalController.create({component:C.$,componentProps:{CustomerInvoiceId:n},cssClass:"ion-modal-breakpoint",backdropDismiss:!0,keyboardClose:!0,breakpoints:[.75,1],initialBreakpoint:.75});o.onDidDismiss().then(l=>{"success"==l.role&&a.refreshData()}),o.present()})()}}return(i=c).\u0275fac=function(e){return new(e||i)(t.rXU(r.W3),t.rXU(r.K_),t.rXU(r.Xi),t.rXU(r.Hx))},i.\u0275cmp=t.VBU({type:i,selectors:[["app-customer-invoice"]],inputs:{CustomerInvoiceId:"CustomerInvoiceId"},decls:27,vars:9,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container container-loading py-5 text-center",4,"ngIf"],["mode","md",3,"value","ionChange"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12"],["color","primary","expand","block","shape","round","fill","outline",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/plus-circle.svg"],[1,"col-12","my-3","text-center"],[1,"text-muted"],[3,"ionInfinite",4,"ngIf"],["templateCustomerInvoice",""],[1,"container-loading"],["name","circular","color","primary"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-customer-invoice","rounded","bg-white"],[1,"d-flex","justify-content-between"],["label-placement","end",3,"value"],[1,"text-wrap"],[1,"mr-1"],["class","text-primary d-inline-block",4,"ngIf"],[1,"text-nowrap"],["size","small","color","medium","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4"],["size","small","color","danger","fill","clear",3,"click"],["name","close-outline",1,"fs-5"],[1,"table","table-borderless","m-0"],[1,"text-primary","d-inline-block"]],template:function(e,n){1&e&&(t.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t.nrm(3,"ion-back-button",1),t.k0s(),t.j41(4,"ion-title"),t.EFF(5,"Th\xf4ng tin xu\u1ea5t h\xf3a \u0111\u01a1n"),t.k0s()()(),t.j41(6,"ion-content")(7,"ion-refresher",2),t.bIt("ionRefresh",function(o){return n.onIonRefresher(o)}),t.nrm(8,"ion-refresher-content"),t.k0s(),t.DNE(9,R,2,0,"div",3)(10,b,5,3,"div",4),t.j41(11,"ion-radio-group",5),t.bIt("ionChange",function(o){return n.changeCustomerInvoice(o)}),t.j41(12,"div",6)(13,"div",7),t.DNE(14,E,3,4,"ng-container",8),t.j41(15,"div",9)(16,"ion-button",10),t.bIt("click",function(o){return n.presentModalAddCustomerInvoice(o)}),t.nrm(17,"ion-icon",11),t.j41(18,"ion-label"),t.EFF(19),t.nI1(20,"translate"),t.k0s()()(),t.j41(21,"div",12)(22,"small",13),t.EFF(23,"*Kh\xe1ch h\xe0ng t\u1ef1 ch\u1ecbu tr\xe1ch nhi\u1ec7m v\u1edbi th\xf4ng tin y\xeau c\u1ea7u xu\u1ea5t h\xf3a \u0111\u01a1n c\u1ee7a m\xecnh."),t.k0s()()()()(),t.DNE(24,M,2,0,"ion-infinite-scroll",14),t.k0s(),t.DNE(25,T,57,29,"ng-template",null,15,t.C5r)),2&e&&(t.R7$(3),t.Y8G("defaultHref",n.APP_ROUTE.TABS_USER),t.R7$(6),t.Y8G("ngIf",!n.response),t.R7$(1),t.Y8G("ngIf",n.response&&!n.customerInvoices.length),t.R7$(1),t.Y8G("value",n.CustomerInvoiceId),t.R7$(3),t.Y8G("ngForOf",n.customerInvoices),t.R7$(5),t.JRh(t.bMT(20,7,"Create")),t.R7$(5),t.Y8G("ngIf",n.paging.active))},dependencies:[u.Sq,u.bT,u.T3,r.Jm,r.QW,r.W9,r.eU,r.iq,r.KW,r.Ax,r.Hp,r.he,r.KO,r.f0,r.To,r.Ki,r.w2,r.BC,r.ai,r.uR,r.Je,r.el,P.D9],styles:[".table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0;padding-right:.5rem;color:var(ion-color-medium)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;white-space:nowrap;text-align:right}.card-customer-invoice[_ngcontent-%COMP%]{padding:1rem}.card-customer-invoice.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-customer-invoice[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-customer-invoice[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: .5rem}"]}),c})()}];let $=(()=>{var i;class c{}return(i=c).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[p.iI.forChild(k),p.iI]}),c})();var y=d(9500);let x=(()=>{var i;class c{}return(i=c).\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[u.MD,I.YN,r.bv,$,y.x]}),c})()}}]);