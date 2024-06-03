"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2768],{6944:(G,S,_)=>{_.d(S,{KX:()=>F,_$:()=>D,aN:()=>k,cb:()=>h,eu:()=>E,kO:()=>c,wm:()=>T});var C=_(467),$=_(5972);const c=function(){var v=(0,C.A)(function*(i){var u,m,p,f;i.params=i.params||{},(0,$.hm)({url:"api/ChargingSession/get-mychargingsessions",params:{VSessionStatus:null!==(u=i.params.VSessionStatus)&&void 0!==u?u:null,VSessionStatusMulti:null!==(m=i.params.VSessionStatusMulti)&&void 0!==m?m:null,PageNumber:null!==(p=i.params.PageNumber)&&void 0!==p?p:1,PageSize:null!==(f=i.params.PageSize)&&void 0!==f?f:10},success:I=>{"function"==typeof i.callback&&i.callback(I.data||null)},error:I=>{var O;"function"==typeof i.callback&&i.callback(null==I||null===(O=I.response)||void 0===O?void 0:O.data),console.error(I)},loading:null==i?void 0:i.loading})});return function(u){return v.apply(this,arguments)}}(),F=function(){var v=(0,C.A)(function*(i){var u,m,p;i.params=i.params||{},(0,$.hm)({url:"api/ChargingSession/get-mybyordercode",params:{OrderCode:null!==(u=i.params.OrderCode)&&void 0!==u?u:null,PageNumber:null!==(m=i.params.PageNumber)&&void 0!==m?m:1,PageSize:null!==(p=i.params.PageSize)&&void 0!==p?p:10},success:f=>{"function"==typeof i.callback&&i.callback(f.data||null)},error:f=>{var I;"function"==typeof i.callback&&i.callback(null==f||null===(I=f.response)||void 0===I?void 0:I.data),console.error(f)},loading:null==i?void 0:i.loading})});return function(u){return v.apply(this,arguments)}}(),h=function(){var v=(0,C.A)(function*(i){i.params=i.params||{},(0,$.hm)({url:`api/ChargingSession/get-mybyid/${i.params.ChargeSessionId}`,success:u=>{"function"==typeof i.callback&&i.callback(u.data||null)},error:u=>{var m;"function"==typeof i.callback&&i.callback(null==u||null===(m=u.response)||void 0===m?void 0:m.data),console.error(u)},loading:null==i?void 0:i.loading})});return function(u){return v.apply(this,arguments)}}(),k=function(){var v=(0,C.A)(function*(i){var u,m,p;i.params=i.params||{},(0,$.Ll)({url:"api/ChargingSession/start-create",params:{StationCode:null!==(u=i.params.StationCode)&&void 0!==u?u:null,ConnectorId:null!==(m=i.params.ConnectorId)&&void 0!==m?m:null,OrderCode:null!==(p=i.params.OrderCode)&&void 0!==p?p:null},success:f=>{"function"==typeof i.callback&&i.callback(f.data||null)},error:f=>{var I;"function"==typeof i.callback&&i.callback(null==f||null===(I=f.response)||void 0===I?void 0:I.data),console.error(f)},loading:null==i?void 0:i.loading})});return function(u){return v.apply(this,arguments)}}(),T=function(){var v=(0,C.A)(function*(i){var u;i.params=i.params||{},(0,$.Ll)({url:"api/ChargingSession/start",params:{ChargeSessionId:null!==(u=i.params.ChargeSessionId)&&void 0!==u?u:null},success:m=>{"function"==typeof i.callback&&i.callback(m.data||null)},error:m=>{var p;"function"==typeof i.callback&&i.callback(null==m||null===(p=m.response)||void 0===p?void 0:p.data),console.error(m)},loading:null==i?void 0:i.loading})});return function(u){return v.apply(this,arguments)}}(),D=function(){var v=(0,C.A)(function*(i){var u;i.params=i.params||{},(0,$.Ll)({url:"api/ChargingSession/stop",params:{ChargeSessionId:null!==(u=i.params.ChargeSessionId)&&void 0!==u?u:null},success:m=>{"function"==typeof i.callback&&i.callback(m.data||null)},error:m=>{var p;"function"==typeof i.callback&&i.callback(null==m||null===(p=m.response)||void 0===p?void 0:p.data),console.error(m)},loading:null==i?void 0:i.loading})});return function(u){return v.apply(this,arguments)}}(),E=function(){var v=(0,C.A)(function*(i){i.params=i.params||{},(0,$.hm)({url:`api/ChargingSession/monitor/${i.params.StationCode}/${i.params.ConnectorId}`,success:u=>{"function"==typeof i.callback&&i.callback(u.data||null)},error:u=>{var m;"function"==typeof i.callback&&i.callback(null==u||null===(m=u.response)||void 0===m?void 0:m.data),console.error(u)},loading:null==i?void 0:i.loading})});return function(u){return v.apply(this,arguments)}}()},2768:(G,S,_)=>{_.r(S),_.d(S,{OrderInfoDetailPageModule:()=>kn});var C=_(177),$=_(9417),c=_(8974),F=_(2175),h=_(467),k=_(8833),n=_(4438),T=_(4842);let j=(()=>{var o;class d{constructor(t,e){this.router=t,this.modalController=e,this.APP_ROUTE=k._}ngOnInit(){}navigateByUrl(t){var e=this;return(0,h.A)(function*(){e.modalController.dismiss().then(r=>{e.router.navigateByUrl(t)})})()}}return(o=d).\u0275fac=function(t){return new(t||o)(n.rXU(F.Ix),n.rXU(c.W3))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-modal-add-customer-invoice-success"]],decls:13,vars:9,consts:[[1,"p-4","text-center"],["src","../../../assets/icon/ion-img/success.svg"],[1,"mt-5"],["color","medium","fill","outline","shape","round","expand","block",3,"click"]],template:function(t,e){1&t&&(n.j41(0,"div",0),n.nrm(1,"ion-img",1),n.j41(2,"h4"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"div")(6,"small"),n.EFF(7),n.nI1(8,"translate"),n.k0s()(),n.j41(9,"div",2)(10,"ion-button",3),n.bIt("click",function(){return e.navigateByUrl(e.APP_ROUTE.TABS_DEFAULT)}),n.EFF(11),n.nI1(12,"translate"),n.k0s()()()),2&t&&(n.R7$(3),n.JRh(n.bMT(4,3,"InvoiceRequestSent")),n.R7$(4),n.JRh(n.bMT(8,5,"InvoiceRequestSentMessage")),n.R7$(4),n.JRh(n.bMT(12,7,"BackToHome")))},dependencies:[c.Jm,c.KW,T.D9],styles:["ion-img[_ngcontent-%COMP%]{width:3.5rem;margin:1rem auto}"]}),d})();var D=_(8037),E=_(9051),v=_(5970),i=_(8650);const u=o=>({$implicit:o});function m(o,d){1&o&&(n.j41(0,"div",19),n.nrm(1,"ion-spinner",20),n.k0s())}function p(o,d){1&o&&(n.j41(0,"div",21),n.nrm(1,"ion-img",22),n.j41(2,"div",23),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&o&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function f(o,d){if(1&o&&(n.qex(0),n.j41(1,"div",24),n.eu8(2,25),n.k0s(),n.bVm()),2&o){const a=d.$implicit;n.XpG();const t=n.sdS(34);n.R7$(2),n.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",n.eq3(2,u,a))}}function I(o,d){if(1&o){const a=n.RV6();n.j41(0,"ion-infinite-scroll",26),n.bIt("ionInfinite",function(e){n.eBV(a);const r=n.XpG();return n.Njj(r.onIonInfinite(e))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}function O(o,d){1&o&&(n.j41(0,"small",39),n.EFF(1),n.nI1(2,"translate"),n.k0s()),2&o&&(n.R7$(),n.SpI("(",n.bMT(2,1,"Default"),")"))}function N(o,d){if(1&o){const a=n.RV6();n.j41(0,"div",27)(1,"div",28)(2,"ion-radio",29)(3,"div",30)(4,"b",31),n.EFF(5),n.nI1(6,"translate"),n.k0s(),n.DNE(7,O,3,3,"small",32),n.k0s()(),n.j41(8,"div",33)(9,"ion-button",34),n.bIt("click",function(e){const r=n.eBV(a).$implicit,l=n.XpG();return n.Njj(l.editCustomerInvoice(e,r.CustomerInvoiceId))}),n.nrm(10,"ion-icon",35),n.k0s(),n.j41(11,"ion-button",36),n.bIt("click",function(e){const r=n.eBV(a).$implicit,l=n.XpG();return n.Njj(l.deleteCustomerInvoice(e,r.CustomerInvoiceId))}),n.nrm(12,"ion-icon",37),n.k0s()()(),n.nrm(13,"hr"),n.j41(14,"table",38)(15,"tr")(16,"td"),n.EFF(17),n.nI1(18,"translate"),n.k0s(),n.j41(19,"td")(20,"b"),n.EFF(21),n.k0s()()(),n.j41(22,"tr")(23,"td"),n.EFF(24),n.nI1(25,"translate"),n.k0s(),n.j41(26,"td")(27,"b"),n.EFF(28),n.k0s()()(),n.j41(29,"tr")(30,"td"),n.EFF(31),n.nI1(32,"translate"),n.k0s(),n.j41(33,"td")(34,"b"),n.EFF(35),n.k0s()()(),n.j41(36,"tr")(37,"td"),n.EFF(38),n.nI1(39,"translate"),n.k0s(),n.j41(40,"td")(41,"b"),n.EFF(42),n.k0s()()(),n.j41(43,"tr")(44,"td"),n.EFF(45),n.nI1(46,"translate"),n.k0s(),n.j41(47,"td")(48,"b"),n.EFF(49),n.k0s()()(),n.j41(50,"tr")(51,"td"),n.EFF(52),n.nI1(53,"translate"),n.k0s(),n.j41(54,"td")(55,"b"),n.EFF(56),n.k0s()()()()()}if(2&o){const a=d.$implicit;n.R7$(2),n.Y8G("value",a.CustomerInvoiceId),n.R7$(3),n.JRh(n.bMT(6,15,"ExportBillInfo")),n.R7$(2),n.Y8G("ngIf",a.IsDefault),n.R7$(10),n.JRh(n.bMT(18,17,"FullName")),n.R7$(4),n.JRh(a.BuyerName),n.R7$(3),n.JRh(n.bMT(25,19,"BillCompanyName")),n.R7$(4),n.JRh(a.CompanyName),n.R7$(3),n.JRh(n.bMT(32,21,"BillCompanyAddress")),n.R7$(4),n.JRh(a.Address),n.R7$(3),n.JRh(n.bMT(39,23,"BillCompanyTax")),n.R7$(4),n.JRh(a.TaxCode),n.R7$(3),n.JRh(n.bMT(46,25,"Email")),n.R7$(4),n.JRh(a.BuyerEmail),n.R7$(3),n.JRh(n.bMT(53,27,"Mobile")),n.R7$(4),n.JRh(a.BuyerPhone)}}let V=(()=>{var o;class d{constructor(t,e,r,l){this.modalController=t,this.toastController=e,this.loadingController=r,this.animationController=l,this.APP_ROUTE=k._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.customerInvoices=[],this.loadingController.create({message:""}).then(s=>this.loading=s)}close(t){this.modalController.dismiss(null,"close")}submit(t){this.modalController.dismiss(this.CustomerInvoiceId,"submit")}ngOnInit(){this.refreshData()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}resetData(){this.customerInvoices.length=0}pushData(t){1==this.paging.page&&(this.customerInvoices.length=0),this.customerInvoices=this.customerInvoices.concat(t)}totalData(){return this.customerInvoices.length}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}searchChange(t){this.filter={},this.filter.search=t.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(t,e){this.paging.sortfield=t||null,this.paging.sorttype=e||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(t){var e=this;return(0,h.A)(function*(){e.paging.loading=!0,(0,v.Ul)({loading:r=>{var l,s;r?null===(l=e.loading)||void 0===l||l.present():null===(s=e.loading)||void 0===s||s.dismiss()},params:{PageNumber:e.paging.page,PageSize:e.paging.limit},callback:r=>{var l;e.response=r,null!=r&&r.Succeeded?e.pushData(null!==(l=r.Data)&&void 0!==l?l:[]):(0,i.cX)(e.toastController,{},r).then(s=>s.present()),e.paging.loading=!1,e.paging.active=!(null==r||!r.HasNextPage),t&&t()}})})()}editCustomerInvoice(t,e){this.presentModalAddCustomerInvoice(t,e)}deleteCustomerInvoice(t,e){e&&(0,i.Yy)(this.modalController,this.animationController,{selectedId:e,message:{TitleConfirm:"Delete_Confirm",TextConfirm:"Delete"},fnConfirm:r=>{(0,v.NT)({loading:l=>{var s,g;l?null===(s=this.loading)||void 0===s||s.present():null===(g=this.loading)||void 0===g||g.dismiss()},params:{CustomerInvoiceId:r},callback:l=>{null!=l&&l.Succeeded?this.refreshData():(0,i.cX)(this.toastController,{},l).then(s=>s.present())}})}})}changeCustomerInvoice(t){this.CustomerInvoiceId=t.detail.value}presentModalAddCustomerInvoice(t,e){var r=this;return(0,h.A)(function*(){const l=yield r.modalController.create({component:D.$,componentProps:{CustomerInvoiceId:e},cssClass:"ion-modal-breakpoint",backdropDismiss:!0,keyboardClose:!0,breakpoints:[.75,1],initialBreakpoint:.75});l.onDidDismiss().then(s=>{"success"==s.role&&r.refreshData()}),l.present()})()}presentModalAddCustomerInvoiceSuccess(t){var e=this;return(0,h.A)(function*(){(yield e.modalController.create({component:j,cssClass:"ion-modal-small",backdropDismiss:!0,keyboardClose:!0})).present()})()}}return(o=d).\u0275fac=function(t){return new(t||o)(n.rXU(c.W3),n.rXU(c.K_),n.rXU(c.Xi),n.rXU(c.Hx))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-modal-customer-invoice"]],inputs:{CustomerInvoiceId:"CustomerInvoiceId"},decls:35,vars:17,consts:[["templateCustomerInvoice",""],["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container container-loading py-5 text-center",4,"ngIf"],["mode","md",3,"ionChange","value"],[1,"container"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12"],["color","primary","expand","block","shape","round","fill","outline",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/plus-circle.svg"],[1,"col-12","my-3","text-center"],[1,"text-muted"],[3,"ionInfinite",4,"ngIf"],[1,"p-3"],["color","primary","expand","block","shape","round",3,"click"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-customer-invoice","rounded","bg-white"],[1,"d-flex","justify-content-between"],["label-placement","end",3,"value"],[1,"text-wrap"],[1,"mr-1"],["class","text-primary d-inline-block",4,"ngIf"],[1,"text-nowrap"],["size","small","color","medium","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4"],["size","small","color","danger","fill","clear",3,"click"],["name","close-outline",1,"fs-5"],[1,"table","table-borderless","m-0"],[1,"text-primary","d-inline-block"]],template:function(t,e){if(1&t){const r=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),n.bIt("click",function(s){return n.eBV(r),n.Njj(e.close(s))}),n.nrm(4,"ion-icon",3),n.k0s()(),n.j41(5,"ion-title"),n.EFF(6),n.nI1(7,"translate"),n.k0s()()(),n.j41(8,"ion-content")(9,"ion-refresher",4),n.bIt("ionRefresh",function(s){return n.eBV(r),n.Njj(e.onIonRefresher(s))}),n.nrm(10,"ion-refresher-content"),n.k0s(),n.DNE(11,m,2,0,"div",5)(12,p,5,3,"div",6),n.j41(13,"ion-radio-group",7),n.bIt("ionChange",function(s){return n.eBV(r),n.Njj(e.changeCustomerInvoice(s))}),n.j41(14,"div",8)(15,"div",9),n.DNE(16,f,3,4,"ng-container",10),n.j41(17,"div",11)(18,"ion-button",12),n.bIt("click",function(s){return n.eBV(r),n.Njj(e.presentModalAddCustomerInvoice(s))}),n.nrm(19,"ion-icon",13),n.j41(20,"ion-label"),n.EFF(21),n.nI1(22,"translate"),n.k0s()()(),n.j41(23,"div",14)(24,"small",15),n.EFF(25),n.nI1(26,"translate"),n.k0s()()()()(),n.DNE(27,I,2,0,"ion-infinite-scroll",16),n.k0s(),n.j41(28,"ion-footer")(29,"div",17)(30,"ion-button",18),n.bIt("click",function(s){return n.eBV(r),n.Njj(e.submit(s))}),n.EFF(31),n.nI1(32,"translate"),n.k0s()()(),n.DNE(33,N,57,29,"ng-template",null,0,n.C5r)}2&t&&(n.R7$(6),n.JRh(n.bMT(7,9,"CustomerInvoiceSaved")),n.R7$(5),n.Y8G("ngIf",!e.response),n.R7$(),n.Y8G("ngIf",e.response&&!e.customerInvoices.length),n.R7$(),n.Y8G("value",e.CustomerInvoiceId),n.R7$(3),n.Y8G("ngForOf",e.customerInvoices),n.R7$(5),n.JRh(n.bMT(22,11,"Create")),n.R7$(4),n.JRh(n.bMT(26,13,"CustomerInvoiceNotice")),n.R7$(2),n.Y8G("ngIf",e.paging.active),n.R7$(4),n.JRh(n.bMT(32,15,"Choice")))},dependencies:[C.Sq,C.bT,C.T3,c.Jm,c.QW,c.W9,c.M0,c.eU,c.iq,c.KW,c.Ax,c.Hp,c.he,c.KO,c.f0,c.To,c.Ki,c.w2,c.BC,c.ai,c.uR,c.Je,T.D9],styles:[".table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0;padding-right:.5rem;color:var(ion-color-medium)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;white-space:nowrap;text-align:right}.card-customer-invoice[_ngcontent-%COMP%]{padding:1rem}.card-customer-invoice.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-customer-invoice[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-customer-invoice[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: .5rem}"]}),d})();var x=_(6944),B=_(9061),A=_(6539),J=_(2313),y=_(1312),M=_(3588),U=_(7586),X=_.n(U),w=_(5972);const Y=function(){var o=(0,h.A)(function*(d){var a,t,e,r,l,s,g,b;d.params=d.params||{},(0,w.Ll)({url:"api/Einvoice/createmyinvoice",params:{IsCompany:null!==(a=d.params.IsCompany)&&void 0!==a?a:null,BuyerName:null!==(t=d.params.BuyerName)&&void 0!==t?t:null,TaxCode:null!==(e=d.params.TaxCode)&&void 0!==e?e:null,CompanyName:null!==(r=d.params.CompanyName)&&void 0!==r?r:null,Address:null!==(l=d.params.Address)&&void 0!==l?l:null,BuyerPhone:null!==(s=d.params.BuyerPhone)&&void 0!==s?s:null,BuyerEmail:null!==(g=d.params.BuyerEmail)&&void 0!==g?g:null,BillId:null!==(b=d.params.BillId)&&void 0!==b?b:null},success:R=>{"function"==typeof d.callback&&d.callback(R.data||null)},error:R=>{var P;"function"==typeof d.callback&&d.callback(null==R||null===(P=R.response)||void 0===P?void 0:P.data),console.error(R)},loading:null==d?void 0:d.loading})});return function(a){return o.apply(this,arguments)}}(),L=(o,d)=>[o,d];function K(o,d){1&o&&(n.j41(0,"div",7),n.nrm(1,"ion-spinner",8),n.k0s())}function z(o,d){1&o&&(n.qex(0),n.j41(1,"div",10),n.nrm(2,"ion-spinner",11),n.k0s(),n.bVm())}function H(o,d){if(1&o&&(n.j41(0,"tr")(1,"td"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td"),n.EFF(5),n.k0s()()),2&o){const a=n.XpG(3);n.R7$(2),n.JRh(n.bMT(3,2,"PaymentMethod")),n.R7$(3),n.JRh(a.orderInfo.KindOfCard)}}function W(o,d){if(1&o&&(n.qex(0),n.j41(1,"tr")(2,"td"),n.EFF(3),n.k0s(),n.j41(4,"td"),n.EFF(5),n.k0s()(),n.bVm()),2&o){let a;const t=d.$implicit,e=n.XpG(3);n.R7$(3),n.JRh(t.ProductName),n.R7$(2),n.SpI("",e.APP_FUNC_FormatMoney(null!==(a=t.RealAmount)&&void 0!==a?a:0),"\u0111")}}function Q(o,d){if(1&o&&(n.j41(0,"tr",20)(1,"td"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td"),n.EFF(5),n.k0s()()),2&o){const a=n.XpG(3);n.R7$(2),n.JRh(n.bMT(3,2,"Discount")),n.R7$(3),n.SpI("-",a.APP_FUNC_FormatMoney(a.orderInfo.PromoteValue),"\u0111")}}function q(o,d){if(1&o&&(n.qex(0),n.j41(1,"div",22)(2,"div",23)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"table",13)(7,"tr")(8,"td"),n.EFF(9),n.nI1(10,"translate"),n.k0s(),n.j41(11,"td")(12,"b"),n.EFF(13),n.k0s()()()()(),n.bVm()),2&o){const a=n.XpG(3);n.R7$(4),n.JRh(n.bMT(5,3,"Exchange")),n.R7$(5),n.JRh(n.bMT(10,5,"ExchangeValue")),n.R7$(4),n.SpI("",a.APP_FUNC_FormatMoney(a.orderInfo.ExchangeValue),"\u0111")}}function Z(o,d){1&o&&(n.j41(0,"b",17),n.EFF(1),n.nI1(2,"translate"),n.k0s()),2&o&&(n.R7$(),n.JRh(n.bMT(2,1,"RefundYes")))}function nn(o,d){if(1&o&&(n.qex(0),n.j41(1,"div",24)(2,"table",13)(3,"tr")(4,"td"),n.EFF(5),n.nI1(6,"translate"),n.k0s(),n.j41(7,"td"),n.DNE(8,Z,3,3,"b",25),n.k0s()(),n.j41(9,"tr")(10,"td"),n.EFF(11),n.nI1(12,"translate"),n.k0s(),n.j41(13,"td")(14,"b"),n.EFF(15),n.k0s()()()()(),n.bVm()),2&o){const a=n.XpG(3);n.R7$(5),n.JRh(n.bMT(6,4,"Refund")),n.R7$(3),n.Y8G("ngIf",a.orderInfo.IsRefund),n.R7$(3),n.JRh(n.bMT(12,6,"RefundValue")),n.R7$(4),n.SpI("",a.APP_FUNC_FormatMoney(a.orderInfo.RefundValue),"\u0111")}}function en(o,d){if(1&o&&(n.qex(0),n.j41(1,"div",12)(2,"table",13)(3,"tr")(4,"td"),n.EFF(5),n.nI1(6,"translate"),n.k0s(),n.j41(7,"td")(8,"b"),n.EFF(9),n.k0s()()(),n.j41(10,"tr")(11,"td"),n.EFF(12),n.nI1(13,"translate"),n.k0s(),n.j41(14,"td")(15,"b"),n.EFF(16),n.k0s()()(),n.j41(17,"tr")(18,"td"),n.EFF(19),n.nI1(20,"translate"),n.k0s(),n.j41(21,"td")(22,"b"),n.EFF(23),n.k0s()()(),n.DNE(24,H,6,4,"tr",4),n.j41(25,"tr")(26,"td"),n.EFF(27),n.nI1(28,"translate"),n.k0s(),n.j41(29,"td"),n.EFF(30),n.k0s()()()(),n.nrm(31,"hr",14),n.j41(32,"div",15)(33,"div",16)(34,"b"),n.EFF(35),n.nI1(36,"translate"),n.k0s()(),n.j41(37,"table",13)(38,"tr")(39,"td"),n.EFF(40),n.nI1(41,"translate"),n.k0s(),n.j41(42,"td")(43,"div"),n.EFF(44),n.k0s(),n.j41(45,"div")(46,"b",17),n.EFF(47),n.k0s(),n.j41(48,"small"),n.EFF(49),n.k0s()()()(),n.DNE(50,W,6,2,"ng-container",18)(51,Q,6,4,"tr",19),n.j41(52,"tr",20)(53,"td"),n.EFF(54),n.nI1(55,"translate"),n.k0s(),n.j41(56,"td"),n.EFF(57),n.k0s()(),n.j41(58,"tr",20)(59,"td"),n.EFF(60,"VAT"),n.k0s(),n.j41(61,"td"),n.EFF(62),n.k0s()(),n.j41(63,"tr",20)(64,"td")(65,"b"),n.EFF(66),n.nI1(67,"translate"),n.k0s(),n.nrm(68,"br"),n.j41(69,"small",21),n.EFF(70),n.nI1(71,"translate"),n.k0s()(),n.j41(72,"td",17)(73,"strong"),n.EFF(74),n.k0s()()()()(),n.DNE(75,q,14,7,"ng-container",4)(76,nn,16,8,"ng-container",4),n.bVm()),2&o){let a,t,e,r,l;const s=n.XpG(2);n.R7$(5),n.JRh(n.bMT(6,28,"OrderCode")),n.R7$(4),n.JRh(s.orderInfo.OrderCode),n.R7$(3),n.JRh(n.bMT(13,30,"TotalAmount")),n.R7$(4),n.SpI("",s.APP_FUNC_FormatMoney(s.orderInfo.RealValue),"\u0111"),n.R7$(3),n.JRh(n.bMT(20,32,"OrderStatus")),n.R7$(3),n.ZvI("text-",s.APP_FUNC_GetColor_VOrderStatus(s.orderInfo.VOrderStatus),""),n.R7$(),n.JRh(s.orderInfo.VOrderStatusName),n.R7$(),n.Y8G("ngIf",(null==s.orderInfo?null:s.orderInfo.RealValue)&&s.orderInfo.Paymethod),n.R7$(3),n.JRh(n.bMT(28,34,"OrderDate")),n.R7$(3),n.JRh(s.APP_FUNC_FormatDate(null!==(a=s.orderInfo.PurchaseDate)&&void 0!==a?a:s.orderInfo.OrderDate)),n.R7$(5),n.JRh(n.bMT(36,36,"Detail")),n.R7$(5),n.JRh(n.bMT(41,38,"ChargingPackage")),n.R7$(4),n.JRh(s.orderInfo.ChargePackName),n.R7$(3),n.SpI("",s.APP_FUNC_FormatMoney(null!==(t=s.orderInfo.PayValue)&&void 0!==t?t:0),"\u0111"),n.R7$(2),n.Lme(" / ",s.orderInfo.PowerValue," ",null!==(e=s.orderInfo.Unit)&&void 0!==e?e:"kWh",""),n.R7$(),n.Y8G("ngForOf",s.orderDetails),n.R7$(),n.Y8G("ngIf",s.orderInfo.PromoteValue),n.R7$(3),n.JRh(n.bMT(55,40,"Member")),n.R7$(3),n.SpI("-",s.APP_FUNC_FormatMoney(0),"%"),n.R7$(5),n.SpI("+",null!==(r=s.orderInfo.TaxPercent)&&void 0!==r?r:0,"%"),n.R7$(4),n.JRh(n.bMT(67,42,"Total")),n.R7$(4),n.JRh(n.bMT(71,44,"IncludedVAT")),n.R7$(4),n.SpI("",s.APP_FUNC_FormatMoney(null!==(l=s.orderInfo.RealValue)&&void 0!==l?l:0),"\u0111"),n.R7$(),n.Y8G("ngIf",(null==s.orderInfo?null:s.orderInfo.VOrderStatus)==s.v_order_status.DaHoanTien||(null==s.orderInfo?null:s.orderInfo.VOrderStatus)==s.v_order_status.DaSuDung&&s.orderInfo.ExchangeValue),n.R7$(),n.Y8G("ngIf",(null==s.orderInfo?null:s.orderInfo.VOrderStatus)==s.v_order_status.DaHoanTien||(null==s.orderInfo?null:s.orderInfo.VOrderStatus)==s.v_order_status.DaSuDung&&s.orderInfo.RefundValue)}}function tn(o,d){if(1&o&&(n.j41(0,"tr")(1,"td"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td")(5,"b"),n.EFF(6),n.k0s()()()),2&o){const a=n.XpG(5);n.R7$(2),n.JRh(n.bMT(3,2,"Email")),n.R7$(4),n.JRh(a.customerInvoice.BuyerEmail)}}function on(o,d){if(1&o&&(n.j41(0,"tr")(1,"td"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td")(5,"b"),n.EFF(6),n.k0s()()()),2&o){const a=n.XpG(5);n.R7$(2),n.JRh(n.bMT(3,2,"Mobile")),n.R7$(4),n.JRh(a.customerInvoice.BuyerPhone)}}function rn(o,d){if(1&o&&(n.j41(0,"table",13)(1,"tr")(2,"td"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"td")(6,"b"),n.EFF(7),n.k0s()()(),n.j41(8,"tr")(9,"td"),n.EFF(10),n.nI1(11,"translate"),n.k0s(),n.j41(12,"td")(13,"b"),n.EFF(14),n.k0s()()(),n.j41(15,"tr")(16,"td"),n.EFF(17),n.nI1(18,"translate"),n.k0s(),n.j41(19,"td")(20,"b"),n.EFF(21),n.k0s()()(),n.j41(22,"tr")(23,"td"),n.EFF(24),n.nI1(25,"translate"),n.k0s(),n.j41(26,"td")(27,"b"),n.EFF(28),n.k0s()()(),n.DNE(29,tn,7,4,"tr",4)(30,on,7,4,"tr",4),n.k0s()),2&o){const a=n.XpG(4);n.R7$(3),n.JRh(n.bMT(4,10,"FullName")),n.R7$(4),n.JRh(a.customerInvoice.BuyerName),n.R7$(3),n.JRh(n.bMT(11,12,"BillCompanyName")),n.R7$(4),n.JRh(a.customerInvoice.CompanyName),n.R7$(3),n.JRh(n.bMT(18,14,"BillCompanyAddress")),n.R7$(4),n.JRh(a.customerInvoice.Address),n.R7$(3),n.JRh(n.bMT(25,16,"BillCompanyTax")),n.R7$(4),n.JRh(a.customerInvoice.TaxCode),n.R7$(),n.Y8G("ngIf",a.customerInvoice.BuyerEmail),n.R7$(),n.Y8G("ngIf",a.customerInvoice.BuyerPhone)}}function an(o,d){if(1&o){const a=n.RV6();n.j41(0,"div",30)(1,"div",31)(2,"b"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"ion-button",32),n.bIt("click",function(e){n.eBV(a);const r=n.XpG(3);return n.Njj(r.presentModalCustomerInvoice(e))}),n.nrm(6,"ion-icon",33),n.k0s()(),n.nrm(7,"hr"),n.DNE(8,rn,31,18,"table",34),n.k0s()}if(2&o){const a=n.XpG(3);n.R7$(3),n.JRh(n.bMT(4,2,"ExportBillInfo")),n.R7$(5),n.Y8G("ngIf",a.customerInvoice)}}function ln(o,d){if(1&o){const a=n.RV6();n.qex(0),n.j41(1,"div",26)(2,"ion-radio-group",27),n.bIt("ionChange",function(e){n.eBV(a);const r=n.XpG(2);return n.Njj(r.changeIsGetBill(e))}),n.j41(3,"ion-radio",28),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.j41(6,"ion-radio",28),n.EFF(7),n.nI1(8,"translate"),n.k0s()()(),n.DNE(9,an,9,4,"div",29),n.bVm()}if(2&o){const a=n.XpG(2);n.R7$(2),n.Y8G("value",0),n.R7$(),n.Y8G("value",0),n.R7$(),n.JRh(n.bMT(5,6,"NoGetBill")),n.R7$(2),n.Y8G("value",1),n.R7$(),n.JRh(n.bMT(8,8,"YesGetBill")),n.R7$(2),n.Y8G("ngIf",a.IsGetBill)}}function sn(o,d){if(1&o&&(n.qex(0),n.j41(1,"div",9),n.DNE(2,z,3,0,"ng-container",4)(3,en,77,46,"ng-container",4)(4,ln,10,10,"ng-container",4),n.k0s(),n.bVm()),2&o){let a;const t=n.XpG();n.R7$(2),n.Y8G("ngIf",(null==t.orderInfo?null:t.orderInfo.VOrderStatus)==t.v_order_status.DangThanhToan),n.R7$(),n.Y8G("ngIf",t.orderInfo),n.R7$(),n.Y8G("ngIf",(null==t.orderInfo?null:t.orderInfo.RealValue)&&n.l_i(3,L,t.v_order_status.DaSuDung,t.v_order_status.DaHoanTien).includes(null!==(a=null==t.orderInfo?null:t.orderInfo.VOrderStatus)&&void 0!==a?a:0))}}function dn(o,d){if(1&o){const a=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",35)(3,"ion-button",36),n.bIt("click",function(e){n.eBV(a);const r=n.XpG(2);return n.Njj(r.openDetailChargingSession(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&o&&(n.R7$(5),n.JRh(n.bMT(6,1,"GoToChargingSession")))}function cn(o,d){if(1&o&&(n.j41(0,"div",38)(1,"div")(2,"small"),n.EFF(3),n.nI1(4,"translate"),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"div")(7,"b"),n.EFF(8),n.k0s()(),n.j41(9,"small"),n.EFF(10),n.nI1(11,"translate"),n.k0s()()),2&o){const a=n.XpG(3);n.R7$(3),n.E5c("",n.bMT(4,5,"Minute")," ",a.APP_FUNC_RoundNumber(a.timeout/6e4,1)," ",n.bMT(5,7,"Minute"),"!"),n.R7$(5),n.JRh(a.getTimeCountdown()),n.R7$(2),n.JRh(n.bMT(11,9,"PleaseStartChargingSession"))}}function un(o,d){if(1&o){const a=n.RV6();n.j41(0,"ion-button",36),n.bIt("click",function(e){n.eBV(a);const r=n.XpG(4);return n.Njj(r.chargingStart(e))}),n.j41(1,"ion-label"),n.EFF(2),n.nI1(3,"translate"),n.k0s()()}2&o&&(n.R7$(2),n.JRh(n.bMT(3,1,"StartChargingSession")))}function mn(o,d){if(1&o&&(n.qex(0),n.j41(1,"div"),n.DNE(2,un,4,3,"ion-button",39),n.k0s(),n.bVm()),2&o){const a=n.XpG(3);n.R7$(2),n.Y8G("ngIf",a.timeCountdown>0)}}function _n(o,d){if(1&o){const a=n.RV6();n.qex(0),n.j41(1,"div",40)(2,"div",41)(3,"small"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"div",42)(7,"ion-button",43),n.bIt("click",function(e){n.eBV(a);const r=n.XpG(3);return n.Njj(r.sendFeedback(e))}),n.j41(8,"ion-label"),n.EFF(9),n.k0s()()()(),n.bVm()}2&o&&(n.R7$(4),n.JRh(n.bMT(5,2,"OrderHasExpired")),n.R7$(5),n.JRh("Feedback"))}function gn(o,d){if(1&o&&(n.qex(0),n.j41(1,"ion-footer")(2,"div",35),n.DNE(3,cn,12,11,"div",37)(4,mn,3,1,"ng-container",4)(5,_n,10,4,"ng-container",4),n.k0s()(),n.bVm()),2&o){const a=n.XpG(2);n.R7$(3),n.Y8G("ngIf",a.timeCountdown>0),n.R7$(),n.Y8G("ngIf",a.timeCountdown>0),n.R7$(),n.Y8G("ngIf",a.timeCountdown<=0)}}function pn(o,d){if(1&o&&(n.qex(0),n.DNE(1,dn,7,3,"ng-container",4)(2,gn,6,3,"ng-container",4),n.bVm()),2&o){const a=n.XpG();n.R7$(),n.Y8G("ngIf",a.chargingSession),n.R7$(),n.Y8G("ngIf",!a.chargingSession)}}function fn(o,d){if(1&o){const a=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",35)(3,"ion-button",36),n.bIt("click",function(e){n.eBV(a);const r=n.XpG(2);return n.Njj(r.openDetailChargingSession(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&o&&(n.R7$(5),n.JRh(n.bMT(6,1,"GoToChargingSession")))}function vn(o,d){if(1&o&&(n.qex(0),n.DNE(1,fn,7,3,"ng-container",4),n.bVm()),2&o){const a=n.XpG();n.R7$(),n.Y8G("ngIf",a.chargingSession)}}function hn(o,d){if(1&o){const a=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",35)(3,"ion-button",44),n.bIt("click",function(e){n.eBV(a);const r=n.XpG();return n.Njj(r.sendFeedback(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&o&&(n.R7$(5),n.JRh(n.bMT(6,1,"SendFeedback")))}function In(o,d){if(1&o){const a=n.RV6();n.j41(0,"ion-footer")(1,"div",35)(2,"ion-button",45),n.bIt("click",function(e){n.eBV(a);const r=n.XpG(2);return n.Njj(r.openDetailBill(e))}),n.nrm(3,"ion-icon",46),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()()}2&o&&(n.R7$(5),n.JRh(n.bMT(6,1,"ViewBill")))}function Cn(o,d){if(1&o&&(n.qex(0),n.DNE(1,In,7,3,"ion-footer",4),n.bVm()),2&o){const a=n.XpG();n.R7$(),n.Y8G("ngIf",null==a.orderInfo?null:a.orderInfo.BillId)}}const bn=[{path:"",component:(()=>{var o;class d{constructor(t,e,r,l,s){var g;this.router=t,this.loadingController=r,this.toastController=l,this.modalController=s,this.APP_ROUTE=k._,this.APP_FUNC_FormatMoney=y.xi,this.APP_FUNC_FormatDate=y.Rv,this.APP_FUNC_GetColor_VOrderStatus=y.qM,this.APP_FUNC_RoundNumber=y.Rw,this.v_order_status=M.TL,this.orderDetails=[],this.customerInvoices=[],this.intervalCounter=0,this.timeout=18e4,this.timeCountdown=0,this.intervalCountdown=null,this.loadingController.create({message:""}).then(R=>this.loading=R);let b=null!==(g=e.snapshot.params.id)&&void 0!==g?g:"";b&&(this.OrderId=parseInt(b))}ngOnInit(){var t=this;(0,h.A)(function*(){(yield(0,A.kU)())&&(t.refreshData(),t.refreshInterval())})()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshInterval(){clearInterval(this.intervalReload),this.intervalReload=setInterval(()=>{var t,e;this.orderInfo&&[M.TL.DangThanhToan,M.TL.DaThanhToan].includes(null!==(t=null===(e=this.orderInfo)||void 0===e?void 0:e.VOrderStatus)&&void 0!==t?t:0)&&this.refreshData(()=>{this.intervalCounter++,this.intervalCounter>=10&&clearInterval(this.intervalReload)})},3e3)}refreshData(t){this.OrderId&&(0,B.vp)({loading:e=>{var r,l;e?null===(r=this.loading)||void 0===r||r.present():null===(l=this.loading)||void 0===l||l.dismiss()},params:{OrderId:this.OrderId},callback:e=>{var r,l,s;this.response=e,null!=e&&e.Succeeded?(this.orderInfo=e.Data,[M.TL.DaThanhToan,M.TL.DangTrongPhienSac].includes(null!==(r=null===(l=this.orderInfo)||void 0===l?void 0:l.VOrderStatus)&&void 0!==r?r:0)&&(0,x.KX)({params:{OrderCode:null===(s=this.orderInfo)||void 0===s?void 0:s.OrderCode},callback:g=>{var b;if(null!=g&&g.Succeeded){if(this.chargingSession=(null!==(b=g.Data)&&void 0!==b?b:[]).find(R=>{var P;return[M.jT.DangSac].includes(null!==(P=R.VSessionStatus)&&void 0!==P?P:0)}),this.chargingSession)return}else(0,i.cX)(this.toastController,{},g).then(R=>R.present());this.setTimeCountdown()}})):(0,i.cX)(this.toastController,{},e).then(g=>g.present()),t&&t()}})}chargingStart(t){var e=this;return(0,h.A)(function*(){var r,l,s;(0,x.aN)({loading:g=>{var b,R;g?null===(b=e.loading)||void 0===b||b.present():null===(R=e.loading)||void 0===R||R.dismiss()},params:{StationCode:null===(r=e.orderInfo)||void 0===r?void 0:r.StationCode,ConnectorId:null===(l=e.orderInfo)||void 0===l?void 0:l.ConnectorId,OrderCode:null===(s=e.orderInfo)||void 0===s?void 0:s.OrderCode},callback:g=>{null!=g&&g.Succeeded?window.location.replace(k._.CHARGING_SESSION_DETAIL.replace(":id",g.Data)):(0,i.cX)(e.toastController,{},g).then(b=>b.present())}})})()}sendFeedback(t){var e=this;return(0,h.A)(function*(){var r;(yield e.modalController.create({component:E.l,componentProps:{feedback:{DocType:J.v.ORDER_INFO,DocId:null===(r=e.orderInfo)||void 0===r?void 0:r.OrderId}},cssClass:"ion-modal-breakpoint",breakpoints:[.75,1],initialBreakpoint:.75})).present()})()}changeIsGetBill(t){this.IsGetBill=t.detail.value,this.GetCustomerinvoices()}selectCustomerInvoice(t){this.presentModalCustomerInvoice(t)}editCustomerInvoice(t){var e;this.presentModalAddCustomerInvoice(t,null===(e=this.customerInvoice)||void 0===e?void 0:e.CustomerInvoiceId)}GetCustomerinvoices(){var t=this;return(0,h.A)(function*(){(0,v.Ul)({loading:e=>{var r,l;e?null===(r=t.loading)||void 0===r||r.present():null===(l=t.loading)||void 0===l||l.dismiss()},params:{PageNumber:1,PageSize:100},callback:e=>{var r;if(null!=e&&e.Succeeded)if(t.customerInvoices=null!==(r=e.Data)&&void 0!==r?r:[],t.customerInvoices.length)if(1==t.customerInvoices.length)t.customerInvoice=t.customerInvoices[0];else{var l;t.customerInvoice=null!==(l=t.customerInvoices.filter(s=>s.IsDefault)[0])&&void 0!==l?l:t.customerInvoices[0]}else t.presentModalAddCustomerInvoice()}})})()}GetCustomerinvoice(t){var e=this;return(0,h.A)(function*(){t&&(0,v.kT)({loading:r=>{var l,s;r?null===(l=e.loading)||void 0===l||l.present():null===(s=e.loading)||void 0===s||s.dismiss()},params:{CustomerInvoiceId:t},callback:r=>{null!=r&&r.Succeeded&&(e.customerInvoice=r.Data)}})})()}submitInvoice(){var t=this;return(0,h.A)(function*(){var e,r;null!==(e=t.orderInfo)&&void 0!==e&&e.BillId&&Y({params:Object.assign({},t.customerInvoice,{BillId:null===(r=t.orderInfo)||void 0===r?void 0:r.BillId}),callback:l=>{null!=l&&l.Succeeded?t.presentModalAddCustomerInvoiceSuccess():(0,i.cX)(t.toastController,{},l).then(s=>s.present())}})})()}presentModalCustomerInvoice(t){var e=this;return(0,h.A)(function*(){var r;const l=yield e.modalController.create({component:V,componentProps:{CustomerInvoiceId:null===(r=e.customerInvoice)||void 0===r?void 0:r.CustomerInvoiceId}});l.onDidDismiss().then(s=>{"submit"==s.role&&e.GetCustomerinvoice(s.data)}),l.present()})()}presentModalAddCustomerInvoice(t,e){var r=this;return(0,h.A)(function*(){const l=yield r.modalController.create({component:D.$,componentProps:{CustomerInvoiceId:e},mode:"ios",cssClass:"ion-modal-breakpoint",backdropDismiss:!0,keyboardClose:!0,breakpoints:[.75,1],initialBreakpoint:.75});l.onDidDismiss().then(s=>{"success"==s.role&&r.GetCustomerinvoices()}),l.present()})()}presentModalAddCustomerInvoiceSuccess(t){var e=this;return(0,h.A)(function*(){(yield e.modalController.create({component:j,cssClass:"ion-modal-small",backdropDismiss:!0,keyboardClose:!0})).present()})()}openDetailBill(t){var e=this;return(0,h.A)(function*(){var r,l;e.router.navigateByUrl(k._.BILL_INFO_DETAIL.replace(":id",null!==(r=null===(l=e.orderInfo)||void 0===l||null===(l=l.BillId)||void 0===l?void 0:l.toString())&&void 0!==r?r:""))})()}openDetailChargingSession(t){var e=this;return(0,h.A)(function*(){var r,l;e.router.navigateByUrl(k._.CHARGING_SESSION_DETAIL.replace(":id",null!==(r=null===(l=e.chargingSession)||void 0===l||null===(l=l.ChargeSessionId)||void 0===l?void 0:l.toString())&&void 0!==r?r:""))})()}setTimeCountdown(){var t;if(null!==(t=this.orderInfo)&&void 0!==t&&t.PurchaseDate){let e=new Date(this.orderInfo.PurchaseDate).getTime()-(new Date).getTime()+this.timeout;if(e>0){this.timeCountdown=e,clearInterval(this.intervalCountdown);let r=1e3;this.intervalCountdown=setInterval(()=>{if(this.timeCountdown<=r)return this.timeCountdown=0,void clearInterval(this.intervalCountdown);this.timeCountdown-=r},r)}}}getTimeCountdown(){return X()(this.timeCountdown).format("mm:ss")}}return(o=d).\u0275fac=function(t){return new(t||o)(n.rXU(F.Ix),n.rXU(F.nX),n.rXU(c.Xi),n.rXU(c.K_),n.rXU(c.W3))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-order-info-detail"]],decls:17,vars:11,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","mb-5"],[1,"text-center","line-height-0","mb-3"],["color","primary","name","crescent"],[1,"card-order","rounded","bg-white"],[1,"table","table-borderless","m-0"],[1,"border-dashed"],[1,"card-order-detail","rounded","bg-white"],[1,"mt-3","mb-2"],[1,"text-primary"],[4,"ngFor","ngForOf"],["class","border-top",4,"ngIf"],[1,"border-top"],[1,"font-condensed"],[1,"card-order-exchange","rounded","bg-white","mt-3"],[1,"mb-2","d-flex","justify-content-between"],[1,"card-order-refund","rounded","bg-white","mt-3"],["class","text-primary",4,"ngIf"],[1,"mt-5","mb-3","bill-group-radio"],["mode","md",3,"ionChange","value"],["label-placement","end",3,"value"],["class","card-bill rounded bg-white mt-3",4,"ngIf"],[1,"card-bill","rounded","bg-white","mt-3"],[1,"d-flex","align-items-center","justify-content-between"],["size","small","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/chevron-right.svg",1,"fs-4"],["class","table table-borderless m-0",4,"ngIf"],[1,"container","py-3"],["color","primary","expand","block","shape","round",3,"click"],["class","mb-3 text-center",4,"ngIf"],[1,"mb-3","text-center"],["color","primary","expand","block","shape","round",3,"click",4,"ngIf"],[1,"row","align-items-center"],[1,"col","pr-2"],[1,"col-auto","pl-2"],["color","medium","shape","round","fill","outline","expand","block",3,"click"],["color","warning","shape","round","fill","outline","expand","block",3,"click"],["color","primary","shape","round","fill","outline","expand","block",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/view-circle.svg",1,"fs-4"]],template:function(t,e){1&t&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",2),n.bIt("ionRefresh",function(l){return e.onIonRefresher(l)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,K,2,0,"div",3)(11,sn,5,6,"ng-container",4),n.k0s(),n.qex(12,5),n.DNE(13,pn,3,2,"ng-container",6)(14,vn,2,1,"ng-container",6)(15,hn,7,3,"ng-container",6)(16,Cn,2,1,"ng-container",6),n.bVm()),2&t&&(n.R7$(3),n.Y8G("defaultHref",e.APP_ROUTE.ORDER_INFO),n.R7$(2),n.JRh(n.bMT(6,9,"OrderInfo")),n.R7$(5),n.Y8G("ngIf",!e.response),n.R7$(),n.Y8G("ngIf",null==e.response?null:e.response.Succeeded),n.R7$(),n.Y8G("ngSwitch",null==e.orderInfo?null:e.orderInfo.VOrderStatus),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.DaThanhToan),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.DangTrongPhienSac),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.KhongThanhCong),n.R7$(),n.Y8G("ngSwitchCase",e.v_order_status.DaSuDung))},dependencies:[C.Sq,C.bT,C.ux,C.e1,c.Jm,c.QW,c.W9,c.M0,c.eU,c.iq,c.he,c.KO,c.f0,c.To,c.Ki,c.w2,c.BC,c.ai,c.uR,c.Je,c.el,T.D9],styles:['ion-spinner[_ngcontent-%COMP%]{width:3rem;height:3rem}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0;padding-right:.5rem;font-size:.875rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   b[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;white-space:nowrap;text-align:right}.card-order[_ngcontent-%COMP%]{padding:1rem}.card-order.rounded[_ngcontent-%COMP%]{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.card-order-detail[_ngcontent-%COMP%]{padding:1rem}.card-order-detail.rounded[_ngcontent-%COMP%]{border-top-left-radius:0!important;border-top-right-radius:0!important;border-bottom-left-radius:1.5rem!important;border-bottom-right-radius:1.5rem!important}.card-order-exchange[_ngcontent-%COMP%], .card-order-refund[_ngcontent-%COMP%]{padding:1rem}.card-order-exchange.rounded[_ngcontent-%COMP%], .card-order-refund.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]{padding:1rem}.card-bill.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.bill-group-radio[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0 2rem .5rem 0}hr.border-dashed[_ngcontent-%COMP%]{margin:0;position:relative;z-index:1}hr.border-dashed[_ngcontent-%COMP%]:before, hr.border-dashed[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;z-index:2;bottom:0;margin-bottom:-1rem;width:2rem;height:2rem;border-radius:50%;background-color:var(--ion-background-color-primary)}hr.border-dashed[_ngcontent-%COMP%]:before{left:-1rem}hr.border-dashed[_ngcontent-%COMP%]:after{right:-1rem}']}),d})()}];let Rn=(()=>{var o;class d{}return(o=d).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[F.iI.forChild(bn),F.iI]}),d})();var $n=_(9500);let kn=(()=>{var o;class d{}return(o=d).\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[C.MD,$.YN,c.bv,Rn,$n.x]}),d})()}}]);