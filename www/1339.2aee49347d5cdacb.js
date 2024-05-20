"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1339],{6944:(M,k,p)=>{p.d(k,{_$:()=>O,aN:()=>F,cb:()=>f,eu:()=>S,kO:()=>d,wm:()=>A});var I=p(467),b=p(7158);const d=function(){var h=(0,I.A)(function*(l){var u,c;l.params=l.params||{},(0,b.hm)({url:"api/ChargingSession/get-mychargingsessions",params:{PageNumber:null!==(u=l.params.PageNumber)&&void 0!==u?u:1,PageSize:null!==(c=l.params.PageSize)&&void 0!==c?c:10},success:g=>{"function"==typeof l.callback&&l.callback(g.data||null)},error:g=>{var _;"function"==typeof l.callback&&l.callback(null==g||null===(_=g.response)||void 0===_?void 0:_.data),console.error(g)},loading:null==l?void 0:l.loading})});return function(u){return h.apply(this,arguments)}}(),f=function(){var h=(0,I.A)(function*(l){l.params=l.params||{},(0,b.hm)({url:`api/ChargingSession/get-mybyid/${l.params.ChargeSessionId}`,success:u=>{"function"==typeof l.callback&&l.callback(u.data||null)},error:u=>{var c;"function"==typeof l.callback&&l.callback(null==u||null===(c=u.response)||void 0===c?void 0:c.data),console.error(u)},loading:null==l?void 0:l.loading})});return function(u){return h.apply(this,arguments)}}(),F=function(){var h=(0,I.A)(function*(l){var u,c,g;l.params=l.params||{},(0,b.Ll)({url:"api/ChargingSession/start-create",params:{StationCode:null!==(u=l.params.StationCode)&&void 0!==u?u:null,ConnectorId:null!==(c=l.params.ConnectorId)&&void 0!==c?c:null,OrderCode:null!==(g=l.params.OrderCode)&&void 0!==g?g:null},success:_=>{"function"==typeof l.callback&&l.callback(_.data||null)},error:_=>{var R;"function"==typeof l.callback&&l.callback(null==_||null===(R=_.response)||void 0===R?void 0:R.data),console.error(_)},loading:null==l?void 0:l.loading})});return function(u){return h.apply(this,arguments)}}(),A=function(){var h=(0,I.A)(function*(l){var u;l.params=l.params||{},(0,b.Ll)({url:"api/ChargingSession/start",params:{ChargeSessionId:null!==(u=l.params.ChargeSessionId)&&void 0!==u?u:null},success:c=>{"function"==typeof l.callback&&l.callback(c.data||null)},error:c=>{var g;"function"==typeof l.callback&&l.callback(null==c||null===(g=c.response)||void 0===g?void 0:g.data),console.error(c)},loading:null==l?void 0:l.loading})});return function(u){return h.apply(this,arguments)}}(),O=function(){var h=(0,I.A)(function*(l){var u;l.params=l.params||{},(0,b.Ll)({url:"api/ChargingSession/stop",params:{ChargeSessionId:null!==(u=l.params.ChargeSessionId)&&void 0!==u?u:null},success:c=>{"function"==typeof l.callback&&l.callback(c.data||null)},error:c=>{var g;"function"==typeof l.callback&&l.callback(null==c||null===(g=c.response)||void 0===g?void 0:g.data),console.error(c)},loading:null==l?void 0:l.loading})});return function(u){return h.apply(this,arguments)}}(),S=function(){var h=(0,I.A)(function*(l){l.params=l.params||{},(0,b.hm)({url:`api/ChargingSession/monitor/${l.params.StationCode}/${l.params.ConnectorId}`,success:u=>{"function"==typeof l.callback&&l.callback(u.data||null)},error:u=>{var c;"function"==typeof l.callback&&l.callback(null==u||null===(c=u.response)||void 0===c?void 0:c.data),console.error(u)},loading:null==l?void 0:l.loading})});return function(u){return h.apply(this,arguments)}}()},1339:(M,k,p)=>{p.r(k),p.d(k,{OrderInfoResultPageModule:()=>ln});var I=p(177),b=p(9417),d=p(4488),P=p(2175),f=p(467),F=p(8833),n=p(4438);let A=(()=>{var i;class a{constructor(){this.APP_ROUTE=F._}ngOnInit(){}}return(i=a).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=n.VBU({type:i,selectors:[["app-modal-add-customer-invoice-success"]],decls:10,vars:1,consts:[[1,"p-4","text-center"],["src","../../../../assets/icon/ion-img/success.svg"],[1,"mt-5"],["color","light","shape","round","fill","solid","expand","block",3,"href"]],template:function(t,e){1&t&&(n.j41(0,"div",0),n.nrm(1,"ion-img",1),n.j41(2,"h4"),n.EFF(3,"\u0110\xe3 g\u1eedi y\xeau c\u1ea7u xu\u1ea5t h\xf3a \u0111\u01a1n"),n.k0s(),n.j41(4,"div")(5,"small"),n.EFF(6,"B\u1ea1n s\u1ebd nh\u1eadn \u0111\u01b0\u1ee3c h\xf3a \u0111\u01a1n qua email \u0111\xe3 \u0111\u0103ng k\xed"),n.k0s()(),n.j41(7,"div",2)(8,"ion-button",3),n.EFF(9,"Quay v\u1ec1 trang ch\u1ee7"),n.k0s()()()),2&t&&(n.R7$(8),n.Y8G("href",e.APP_ROUTE.TABS_DEFAULT))},dependencies:[d.Jm,d.KW],styles:["ion-img[_ngcontent-%COMP%]{width:3.5rem;margin:1rem auto}"]}),a})();var E=p(7158);const O=function(){var i=(0,f.A)(function*(a){var o,t,e,r,s,m;a.params=a.params||{},(0,E.Ll)({url:"api/CustomerInvoice/create",params:{IsCompany:null!==(o=a.params.IsCompany)&&void 0!==o?o:null,BuyerName:null!==(t=a.params.BuyerName)&&void 0!==t?t:null,TaxCode:null!==(e=a.params.TaxCode)&&void 0!==e?e:null,CompanyName:null!==(r=a.params.CompanyName)&&void 0!==r?r:null,Address:null!==(s=a.params.Address)&&void 0!==s?s:null,IsDefault:null!==(m=a.params.IsDefault)&&void 0!==m?m:null},success:v=>{"function"==typeof a.callback&&a.callback(v.data||null)},error:v=>{var C;"function"==typeof a.callback&&a.callback(null==v||null===(C=v.response)||void 0===C?void 0:C.data),console.error(v)},loading:null==a?void 0:a.loading})});return function(o){return i.apply(this,arguments)}}(),S=function(){var i=(0,f.A)(function*(a){var o,t;a.params=a.params||{},(0,E.hm)({url:"api/CustomerInvoice/get-customerinvoices",params:{PageNumber:null!==(o=a.params.PageNumber)&&void 0!==o?o:1,PageSize:null!==(t=a.params.PageSize)&&void 0!==t?t:10},success:e=>{"function"==typeof a.callback&&a.callback(e.data||null)},error:e=>{var r;"function"==typeof a.callback&&a.callback(null==e||null===(r=e.response)||void 0===r?void 0:r.data),console.error(e)},loading:null==a?void 0:a.loading})});return function(o){return i.apply(this,arguments)}}(),h=function(){var i=(0,f.A)(function*(a){a.params=a.params||{},(0,E.hm)({url:`api/CustomerInvoice/get/${a.params.CustomerInvoiceId}`,success:o=>{"function"==typeof a.callback&&a.callback(o.data||null)},error:o=>{var t;"function"==typeof a.callback&&a.callback(null==o||null===(t=o.response)||void 0===t?void 0:t.data),console.error(o)},loading:null==a?void 0:a.loading})});return function(o){return i.apply(this,arguments)}}(),l=function(){var i=(0,f.A)(function*(a){var o,t,e,r,s,m,v;a.params=a.params||{},(0,E.IH)({url:"api/CustomerInvoice/update",params:{CustomerInvoiceId:null!==(o=a.params.CustomerInvoiceId)&&void 0!==o?o:null,IsCompany:null!==(t=a.params.IsCompany)&&void 0!==t?t:null,BuyerName:null!==(e=a.params.BuyerName)&&void 0!==e?e:null,TaxCode:null!==(r=a.params.TaxCode)&&void 0!==r?r:null,CompanyName:null!==(s=a.params.CompanyName)&&void 0!==s?s:null,Address:null!==(m=a.params.Address)&&void 0!==m?m:null,IsDefault:null!==(v=a.params.IsDefault)&&void 0!==v?v:null},success:C=>{"function"==typeof a.callback&&a.callback(C.data||null)},error:C=>{var $;"function"==typeof a.callback&&a.callback(null==C||null===($=C.response)||void 0===$?void 0:$.data),console.error(C)},loading:null==a?void 0:a.loading})});return function(o){return i.apply(this,arguments)}}();var c=p(8560),g=p(4842);let _=(()=>{var i;class a{constructor(t,e,r){this.modalController=t,this.loadingController=e,this.toastController=r,this.customerInvoice={IsCompany:!0},this.loadingController.create({message:""}).then(s=>this.loading=s)}ngOnInit(){this.refreshData()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshData(t){this.CustomerInvoiceId?h({loading:e=>{var r,s;e?null===(r=this.loading)||void 0===r||r.present():null===(s=this.loading)||void 0===s||s.dismiss()},params:{CustomerInvoiceId:this.CustomerInvoiceId},callback:e=>{var r;this.response=e,null!=e&&e.Succeeded?this.customerInvoice=null!==(r=e.Data)&&void 0!==r?r:{}:(0,c.cX)(this.toastController,{},e).then(s=>s.present()),t&&t()}}):t&&t()}close(t){var e=this;return(0,f.A)(function*(){e.modalController.dismiss(null,"cancel")})()}submit(t){var e=this;return(0,f.A)(function*(){e.customerInvoice.CustomerInvoiceId?l({loading:r=>{var s,m;r?null===(s=e.loading)||void 0===s||s.present():null===(m=e.loading)||void 0===m||m.dismiss()},params:e.customerInvoice,callback:r=>{e.response=r,null!=r&&r.Succeeded?e.modalController.dismiss(null,"success"):(0,c.cX)(e.toastController,{},r).then(s=>s.present())}}):O({loading:r=>{var s,m;r?null===(s=e.loading)||void 0===s||s.present():null===(m=e.loading)||void 0===m||m.dismiss()},params:e.customerInvoice,callback:r=>{e.response=r,null!=r&&r.Succeeded?e.modalController.dismiss(null,"success"):(0,c.cX)(e.toastController,{},r).then(s=>s.present())}})})()}changeBuyerName(t){var e=this;return(0,f.A)(function*(){e.customerInvoice.BuyerName=t.detail.value})()}changeCompanyName(t){var e=this;return(0,f.A)(function*(){e.customerInvoice.CompanyName=t.detail.value})()}changeAddress(t){var e=this;return(0,f.A)(function*(){e.customerInvoice.Address=t.detail.value})()}changeTaxCode(t){var e=this;return(0,f.A)(function*(){e.customerInvoice.TaxCode=t.detail.value})()}changeIsDefault(t){var e=this;return(0,f.A)(function*(){e.customerInvoice.IsDefault=t.detail.checked})()}}return(i=a).\u0275fac=function(t){return new(t||i)(n.rXU(d.W3),n.rXU(d.Xi),n.rXU(d.K_))},i.\u0275cmp=n.VBU({type:i,selectors:[["app-modal-add-customer-invoice"]],inputs:{CustomerInvoiceId:"CustomerInvoiceId"},decls:58,vars:8,consts:[["slot","end"],["color","dark",3,"click"],["name","close-outline"],["slot","fixed",3,"ionRefresh"],[1,"container","text-center","mb-4"],[1,"text-muted"],[1,"container","mb-3"],["lines","none"],[1,"form-group"],[1,"text-danger"],[1,"ion-item-input"],["placeholder","H\u1ecd v\xe0 t\xean",3,"value","ionChange"],["placeholder","T\xean c\xf4ng ty",3,"value","ionChange"],["placeholder","\u0110\u1ecba ch\u1ec9",3,"value","ionChange"],["placeholder","M\xe3 s\u1ed1 thu\u1ebf",3,"value","ionChange"],["labelPlacement","end","justify","start",3,"checked","ionChange"],[1,"mt-4","pt-3"],["color","primary","shape","round","expand","block",3,"click"]],template:function(t,e){1&t&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),n.bIt("click",function(s){return e.close(s)}),n.nrm(4,"ion-icon",2),n.k0s()(),n.j41(5,"ion-title"),n.EFF(6,"Th\xf4ng tin xu\u1ea5t h\xf3a \u0111\u01a1n"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",3),n.bIt("ionRefresh",function(s){return e.onIonRefresher(s)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.j41(10,"div",4)(11,"small",5),n.EFF(12,"Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 t\u1ea5t c\u1ea3 th\xf4ng tin, b\u1ea1n s\u1ebd t\u1ef1 ch\u1ecbu tr\xe1ch nhi\u1ec7m v\u1ec1 th\xf4ng tin h\xf3a \u0111\u01a1n."),n.k0s()(),n.j41(13,"div",6)(14,"ion-list",7)(15,"div",8)(16,"label"),n.EFF(17,"H\u1ecd v\xe0 t\xean "),n.j41(18,"span",9),n.EFF(19,"*"),n.k0s()(),n.j41(20,"div",10)(21,"ion-item")(22,"ion-input",11),n.bIt("ionChange",function(s){return e.changeBuyerName(s)}),n.k0s()()()(),n.j41(23,"div",8)(24,"label"),n.EFF(25,"T\xean c\xf4ng ty "),n.j41(26,"span",9),n.EFF(27,"*"),n.k0s()(),n.j41(28,"div",10)(29,"ion-item")(30,"ion-input",12),n.bIt("ionChange",function(s){return e.changeCompanyName(s)}),n.k0s()()()(),n.j41(31,"div",8)(32,"label"),n.EFF(33,"\u0110\u1ecba ch\u1ec9 "),n.j41(34,"span",9),n.EFF(35,"*"),n.k0s()(),n.j41(36,"div",10)(37,"ion-item")(38,"ion-input",13),n.bIt("ionChange",function(s){return e.changeAddress(s)}),n.k0s()()()(),n.j41(39,"div",8)(40,"label"),n.EFF(41,"M\xe3 s\u1ed1 thu\u1ebf "),n.j41(42,"span",9),n.EFF(43,"*"),n.k0s()(),n.j41(44,"div",10)(45,"ion-item")(46,"ion-input",14),n.bIt("ionChange",function(s){return e.changeTaxCode(s)}),n.k0s()()()(),n.j41(47,"div",8)(48,"label"),n.EFF(49,"\u0110\u1eb7t l\xe0m m\u1eb7c \u0111\u1ecbnh"),n.k0s(),n.j41(50,"div",10)(51,"ion-item")(52,"ion-checkbox",15),n.bIt("ionChange",function(s){return e.changeIsDefault(s)}),n.EFF(53,"Ch\u1ecdn l\xe0m m\u1eb7c \u0111\u1ecbnh"),n.k0s()()()(),n.j41(54,"div",16)(55,"ion-button",17),n.bIt("click",function(s){return e.submit(s)}),n.EFF(56),n.nI1(57,"translate"),n.k0s()()()()()),2&t&&(n.R7$(22),n.Y8G("value",e.customerInvoice.BuyerName),n.R7$(8),n.Y8G("value",e.customerInvoice.CompanyName),n.R7$(8),n.Y8G("value",e.customerInvoice.Address),n.R7$(8),n.Y8G("value",e.customerInvoice.TaxCode),n.R7$(6),n.Y8G("checked",!!e.customerInvoice.IsDefault),n.R7$(4),n.JRh(n.bMT(57,6,"Save")))},dependencies:[d.Jm,d.QW,d.eY,d.W9,d.eU,d.iq,d.$w,d.uz,d.nf,d.To,d.Ki,d.BC,d.ai,d.hB,d.Gw,g.D9]}),a})();var R=p(1261),j=p(7586),D=p.n(j),x=p(6944),G=p(3232),N=p(9061),B=p(6539),y=p(1312),T=p(3588);function V(i,a){1&i&&(n.j41(0,"div",7),n.nrm(1,"ion-spinner",8),n.k0s())}function U(i,a){1&i&&(n.qex(0),n.j41(1,"div",10),n.nrm(2,"ion-spinner",11),n.k0s(),n.bVm())}function J(i,a){if(1&i&&(n.qex(0),n.j41(1,"tr")(2,"td"),n.EFF(3,"G\xf3i s\u1ea1c"),n.k0s(),n.j41(4,"td")(5,"div"),n.EFF(6),n.k0s(),n.j41(7,"div")(8,"b",19),n.EFF(9),n.k0s(),n.j41(10,"small"),n.EFF(11),n.k0s()()()(),n.j41(12,"tr")(13,"td"),n.EFF(14,"Ph\xed \u0111\u1ed7 xe"),n.k0s(),n.j41(15,"td"),n.EFF(16),n.k0s()(),n.bVm()),2&i){const o=n.XpG(3);let t,e;n.R7$(6),n.JRh(o.orderDetail.ProductName),n.R7$(3),n.SpI("",o.APP_FUNC_FormatMoney(null!==(t=o.orderDetail.AftertaxPrice)&&void 0!==t?t:0),"\u0111"),n.R7$(2),n.Lme(" / ",o.orderDetail.PowerValue," ",null!==(e=o.orderDetail.Unit)&&void 0!==e?e:"kWh",""),n.R7$(5),n.SpI("",o.APP_FUNC_FormatMoney(0),"\u0111")}}function w(i,a){if(1&i&&(n.qex(0),n.j41(1,"div",20)(2,"div",21)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.j41(6,"table",13)(7,"tr")(8,"td"),n.EFF(9),n.nI1(10,"translate"),n.k0s(),n.j41(11,"td")(12,"b"),n.EFF(13),n.k0s()()()()(),n.bVm()),2&i){const o=n.XpG(3);n.R7$(4),n.JRh(n.bMT(5,3,"Exchange")),n.R7$(5),n.JRh(n.bMT(10,5,"ExchangeValue")),n.R7$(4),n.SpI("",o.APP_FUNC_FormatMoney(o.orderInfo.ExchangeValue),"\u0111")}}function X(i,a){1&i&&(n.j41(0,"b",24),n.EFF(1),n.nI1(2,"translate"),n.k0s()),2&i&&(n.R7$(1),n.JRh(n.bMT(2,1,"RefundYes")))}function Y(i,a){if(1&i&&(n.qex(0),n.j41(1,"div",22)(2,"div",21)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.DNE(6,X,3,3,"b",23),n.k0s(),n.j41(7,"table",13)(8,"tr")(9,"td"),n.EFF(10),n.nI1(11,"translate"),n.k0s(),n.j41(12,"td")(13,"b"),n.EFF(14),n.k0s()()()()(),n.bVm()),2&i){const o=n.XpG(3);n.R7$(4),n.JRh(n.bMT(5,4,"Refund")),n.R7$(2),n.Y8G("ngIf",o.orderInfo.IsRefund),n.R7$(4),n.JRh(n.bMT(11,6,"RefundValue")),n.R7$(4),n.SpI("",o.APP_FUNC_FormatMoney(o.orderInfo.RefundValue),"\u0111")}}function L(i,a){if(1&i&&(n.qex(0),n.j41(1,"div",12)(2,"table",13)(3,"tr")(4,"td"),n.EFF(5),n.nI1(6,"translate"),n.k0s(),n.j41(7,"td")(8,"b"),n.EFF(9),n.k0s()()(),n.j41(10,"tr")(11,"td"),n.EFF(12),n.nI1(13,"translate"),n.k0s(),n.j41(14,"td")(15,"b"),n.EFF(16),n.k0s()()(),n.j41(17,"tr")(18,"td"),n.EFF(19),n.nI1(20,"translate"),n.k0s(),n.j41(21,"td")(22,"b"),n.EFF(23),n.k0s()()(),n.j41(24,"tr")(25,"td"),n.EFF(26),n.nI1(27,"translate"),n.k0s(),n.j41(28,"td"),n.EFF(29),n.k0s()(),n.j41(30,"tr")(31,"td"),n.EFF(32),n.nI1(33,"translate"),n.k0s(),n.j41(34,"td"),n.EFF(35),n.k0s()()()(),n.nrm(36,"hr",14),n.j41(37,"div",15)(38,"div",16)(39,"b"),n.EFF(40),n.nI1(41,"translate"),n.k0s()(),n.j41(42,"table",13),n.DNE(43,J,17,5,"ng-container",4),n.j41(44,"tr")(45,"td"),n.EFF(46,"Gi\u1ea3m gi\xe1"),n.k0s(),n.j41(47,"td"),n.EFF(48),n.k0s()(),n.j41(49,"tr",17)(50,"td"),n.EFF(51,"Th\xe0nh vi\xean VIP"),n.k0s(),n.j41(52,"td"),n.EFF(53),n.k0s()(),n.j41(54,"tr",17)(55,"td"),n.EFF(56,"VAT"),n.k0s(),n.j41(57,"td"),n.EFF(58),n.k0s()(),n.j41(59,"tr",17)(60,"td")(61,"b"),n.EFF(62,"T\u1ed5ng c\u1ed9ng"),n.k0s(),n.nrm(63,"br"),n.j41(64,"small",18),n.EFF(65,"\u0110\xe3 bao g\u1ed3m VAT"),n.k0s()(),n.j41(66,"td",19)(67,"strong"),n.EFF(68),n.k0s()()()()(),n.DNE(69,w,14,7,"ng-container",4)(70,Y,15,8,"ng-container",4),n.bVm()),2&i){const o=n.XpG(2);let t,e,r;n.R7$(5),n.JRh(n.bMT(6,21,"OrderCode")),n.R7$(4),n.JRh(o.orderInfo.OrderCode),n.R7$(3),n.JRh(n.bMT(13,23,"TotalAmount")),n.R7$(4),n.SpI("",o.APP_FUNC_FormatMoney(o.orderInfo.RealValue),"\u0111"),n.R7$(3),n.JRh(n.bMT(20,25,"OrderStatus")),n.R7$(3),n.ZvI("text-",o.APP_FUNC_GetColor_VOrderStatus(o.orderInfo.VOrderStatus),""),n.R7$(1),n.JRh(o.orderInfo.VOrderStatusName),n.R7$(3),n.JRh(n.bMT(27,27,"PaymentMethod")),n.R7$(3),n.JRh(o.orderInfo.KindOfCard),n.R7$(3),n.JRh(n.bMT(33,29,"OrderDate")),n.R7$(3),n.JRh(o.APP_FUNC_FormatDate(o.orderInfo.OrderDate)),n.R7$(5),n.JRh(n.bMT(41,31,"OrderDetail")),n.R7$(3),n.Y8G("ngIf",o.orderDetail),n.R7$(5),n.SpI("-",o.APP_FUNC_FormatMoney(null!==(t=o.orderInfo.PromoteValue)&&void 0!==t?t:0),"\u0111"),n.R7$(5),n.SpI("-",o.APP_FUNC_FormatMoney(0),"%"),n.R7$(5),n.SpI("+",null!==(e=o.orderInfo.TaxPercent)&&void 0!==e?e:0,"%"),n.R7$(10),n.SpI("",o.APP_FUNC_FormatMoney(null!==(r=o.orderInfo.RealValue)&&void 0!==r?r:0),"\u0111"),n.R7$(1),n.Y8G("ngIf",(null==o.orderInfo?null:o.orderInfo.VOrderStatus)==o.v_order_status.DaHoanTien||(null==o.orderInfo?null:o.orderInfo.VOrderStatus)==o.v_order_status.DaSuDung&&o.orderInfo.ExchangeValue),n.R7$(1),n.Y8G("ngIf",(null==o.orderInfo?null:o.orderInfo.VOrderStatus)==o.v_order_status.DaHoanTien||(null==o.orderInfo?null:o.orderInfo.VOrderStatus)==o.v_order_status.DaSuDung&&o.orderInfo.RefundValue)}}function z(i,a){if(1&i&&(n.j41(0,"table",13)(1,"tr")(2,"td"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"td")(6,"b"),n.EFF(7),n.k0s()()(),n.j41(8,"tr")(9,"td"),n.EFF(10),n.nI1(11,"translate"),n.k0s(),n.j41(12,"td")(13,"b"),n.EFF(14),n.k0s()()(),n.j41(15,"tr")(16,"td"),n.EFF(17),n.nI1(18,"translate"),n.k0s(),n.j41(19,"td")(20,"b"),n.EFF(21),n.k0s()()(),n.j41(22,"tr")(23,"td"),n.EFF(24),n.nI1(25,"translate"),n.k0s(),n.j41(26,"td")(27,"b"),n.EFF(28),n.k0s()()()()),2&i){const o=n.XpG(4);n.R7$(3),n.JRh(n.bMT(4,8,"FullName")),n.R7$(4),n.JRh(o.customerInvoice.BuyerName),n.R7$(3),n.JRh(n.bMT(11,10,"BillCompanyName")),n.R7$(4),n.JRh(o.customerInvoice.CompanyName),n.R7$(3),n.JRh(n.bMT(18,12,"BillCompanyAddress")),n.R7$(4),n.JRh(o.customerInvoice.Address),n.R7$(3),n.JRh(n.bMT(25,14,"BillCompanyTax")),n.R7$(4),n.JRh(o.customerInvoice.TaxCode)}}function K(i,a){if(1&i){const o=n.RV6();n.j41(0,"div",29)(1,"div",30)(2,"b"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"ion-icon",31),n.bIt("click",function(e){n.eBV(o);const r=n.XpG(3);return n.Njj(r.editCustomerInvoice(e))}),n.k0s()(),n.nrm(6,"hr"),n.DNE(7,z,29,16,"table",32),n.k0s()}if(2&i){const o=n.XpG(3);n.R7$(3),n.JRh(n.bMT(4,2,"ExportBillInfo")),n.R7$(4),n.Y8G("ngIf",o.customerInvoice)}}function W(i,a){if(1&i){const o=n.RV6();n.qex(0),n.j41(1,"div",25)(2,"ion-radio-group",26),n.bIt("ionChange",function(e){n.eBV(o);const r=n.XpG(2);return n.Njj(r.changeIsGetBill(e))}),n.j41(3,"ion-radio",27),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.j41(6,"ion-radio",27),n.EFF(7),n.nI1(8,"translate"),n.k0s()()(),n.DNE(9,K,8,4,"div",28),n.bVm()}if(2&i){const o=n.XpG(2);n.R7$(2),n.Y8G("value",0),n.R7$(1),n.Y8G("value",0),n.R7$(1),n.JRh(n.bMT(5,6,"NoGetBill")),n.R7$(2),n.Y8G("value",1),n.R7$(1),n.JRh(n.bMT(8,8,"YesGetBill")),n.R7$(2),n.Y8G("ngIf",o.IsGetBill)}}const H=(i,a)=>[i,a];function Q(i,a){if(1&i&&(n.qex(0),n.j41(1,"div",9),n.DNE(2,U,3,0,"ng-container",4)(3,L,71,33,"ng-container",4)(4,W,10,10,"ng-container",4),n.k0s(),n.bVm()),2&i){const o=n.XpG();let t;n.R7$(2),n.Y8G("ngIf",(null==o.orderInfo?null:o.orderInfo.VOrderStatus)==o.v_order_status.DangThanhToan),n.R7$(1),n.Y8G("ngIf",o.orderInfo),n.R7$(1),n.Y8G("ngIf",n.l_i(3,H,o.v_order_status.DaSuDung,o.v_order_status.DaHoanTien).includes(null!==(t=null==o.orderInfo?null:o.orderInfo.VOrderStatus)&&void 0!==t?t:0))}}function Z(i,a){if(1&i&&(n.j41(0,"div",40)(1,"div")(2,"small"),n.EFF(3),n.k0s()(),n.j41(4,"div")(5,"b"),n.EFF(6),n.k0s()(),n.j41(7,"small"),n.EFF(8,"Vui l\xf2ng b\u1eaft \u0111\u1ea7u phi\xean s\u1ea1c!"),n.k0s()()),2&i){const o=n.XpG(2);n.R7$(3),n.SpI("\u0110\u01a1n h\xe0ng s\u1ebd h\u1ebft h\u1ea1n sau ",o.APP_FUNC_RoundNumber(o.timeout/6e4,1)," ph\xfat!"),n.R7$(3),n.JRh(o.getTimeCountdown())}}function q(i,a){1&i&&(n.j41(0,"small"),n.EFF(1,"\u0110\u01a1n h\xe0ng \u0111\xe3 h\u1ebft h\u1ea1n"),n.k0s())}function nn(i,a){if(1&i){const o=n.RV6();n.j41(0,"ion-button",41),n.bIt("click",function(e){n.eBV(o);const r=n.XpG(2);return n.Njj(r.chargingStart(e))}),n.j41(1,"ion-label"),n.EFF(2,"B\u1eaft \u0111\u1ea7u phi\xean s\u1ea1c"),n.k0s()()}}function en(i,a){if(1&i){const o=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",33),n.DNE(3,Z,9,2,"div",34),n.j41(4,"div",35)(5,"div",36),n.DNE(6,q,2,0,"small",4)(7,nn,3,0,"ion-button",37),n.k0s(),n.j41(8,"div",38)(9,"ion-button",39),n.bIt("click",function(e){n.eBV(o);const r=n.XpG();return n.Njj(r.sendFeedback(e))}),n.j41(10,"ion-label"),n.EFF(11,"Ph\u1ea3n h\u1ed3i"),n.k0s()()()()()(),n.bVm()}if(2&i){const o=n.XpG();n.R7$(3),n.Y8G("ngIf",o.timeCountdown>0),n.R7$(3),n.Y8G("ngIf",o.timeCountdown<=0),n.R7$(1),n.Y8G("ngIf",o.timeCountdown>0)}}function on(i,a){if(1&i){const o=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",33)(3,"ion-button",42),n.bIt("click",function(e){n.eBV(o);const r=n.XpG();return n.Njj(r.sendFeedback(e))}),n.j41(4,"ion-label"),n.EFF(5,"G\u1eedi ph\u1ea3n h\u1ed3i"),n.k0s()()()(),n.bVm()}}const tn=[{path:"",component:(()=>{var i;class a{constructor(t,e,r,s){var m,v=this;this.loadingController=e,this.toastController=r,this.modalController=s,this.APP_ROUTE=F._,this.APP_FUNC_FormatMoney=y.xi,this.APP_FUNC_FormatDate=y.Rv,this.APP_FUNC_GetColor_VOrderStatus=y.qM,this.APP_FUNC_RoundNumber=y.Rw,this.v_order_status=T.TL,this.params={},this.customerInvoices=[],this.intervalCounter=0,this.timeout=6e5,this.timeCountdown=0,this.intervalCountdown=null,this.params.code=null!==(m=t.snapshot.params.code)&&void 0!==m?m:"",(0,f.A)(function*(){v.loading=yield v.loadingController.create({message:""})})()}ngOnInit(){var t=this;(0,f.A)(function*(){(yield(0,B.kU)())&&(t.refreshData(),t.refreshInterval())})()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshInterval(){clearInterval(this.intervalReload),this.intervalReload=setInterval(()=>{var t;this.orderInfo&&(null===(t=this.orderInfo)||void 0===t?void 0:t.VOrderStatus)==T.TL.DangThanhToan&&this.refreshData(()=>{this.intervalCounter++,this.intervalCounter>=10&&clearInterval(this.intervalReload)})},4e3)}refreshData(t){this.params.code&&((0,N.FS)({loading:e=>{var r,s;e?null===(r=this.loading)||void 0===r||r.present():null===(s=this.loading)||void 0===s||s.dismiss()},params:{OrderCode:this.params.code},callback:e=>{var r;this.response=e,null!=e&&e.Succeeded?(this.orderInfo=e.Data,(null===(r=this.orderInfo)||void 0===r?void 0:r.VOrderStatus)==T.TL.DaThanhToan&&this.setTimeCountdown()):(0,c.cX)(this.toastController,{},e).then(s=>s.present()),t&&t()}}),(0,G.q)({params:{OrderCode:this.params.code},callback:e=>{var r;null!=e&&e.Succeeded?this.orderDetail=null===(r=e.Data)||void 0===r?void 0:r.pop():(0,c.cX)(this.toastController,{},e).then(s=>s.present()),t&&t()}}))}chargingStart(t){var e=this;return(0,f.A)(function*(){var r,s,m;(0,x.aN)({loading:v=>{var C,$;v?null===(C=e.loading)||void 0===C||C.present():null===($=e.loading)||void 0===$||$.dismiss()},params:{StationCode:null===(r=e.orderInfo)||void 0===r?void 0:r.StationCode,ConnectorId:null===(s=e.orderInfo)||void 0===s?void 0:s.ConnectorId,OrderCode:null===(m=e.orderInfo)||void 0===m?void 0:m.OrderCode},callback:v=>{null!=v&&v.Succeeded?window.location.replace(F._.CHARGING_SESSION_DETAIL.replace(":id",v.Data)):(0,c.cX)(e.toastController,{},v).then(C=>C.present())}})})()}sendFeedback(t){var e=this;return(0,f.A)(function*(){(yield e.modalController.create({component:R.l,componentProps:{FbCatgId:3},mode:"ios"})).present()})()}changeIsGetBill(t){this.IsGetBill=t.detail.value,this.GetCustomerinvoices()}editCustomerInvoice(t){var e;this.presentModalAddCustomerInvoice(t,null===(e=this.customerInvoice)||void 0===e?void 0:e.CustomerInvoiceId)}GetCustomerinvoices(){var t=this;return(0,f.A)(function*(){S({loading:e=>{var r,s;e?null===(r=t.loading)||void 0===r||r.present():null===(s=t.loading)||void 0===s||s.dismiss()},params:{PageNumber:1,PageSize:100},callback:e=>{var r;if(null!=e&&e.Succeeded)if(t.customerInvoices=null!==(r=e.Data)&&void 0!==r?r:[],t.customerInvoices.length)if(1==t.customerInvoices.length)t.customerInvoice=t.customerInvoices[0];else{var s;t.customerInvoice=null!==(s=t.customerInvoices.filter(m=>m.IsDefault)[0])&&void 0!==s?s:t.customerInvoices[0]}else t.presentModalAddCustomerInvoice()}})})()}presentModalAddCustomerInvoice(t,e){var r=this;return(0,f.A)(function*(){const s=yield r.modalController.create({component:_,componentProps:{CustomerInvoiceId:e},mode:"ios",cssClass:"radius-top",backdropDismiss:!0,keyboardClose:!0,breakpoints:[.75,1],initialBreakpoint:.75});s.onDidDismiss().then(m=>{"success"==m.role&&r.GetCustomerinvoices()}),s.present()})()}presentModalAddCustomerInvoiceSuccess(t){var e=this;return(0,f.A)(function*(){(yield e.modalController.create({component:A,cssClass:"ion-modal-small",backdropDismiss:!0,keyboardClose:!0})).present()})()}setTimeCountdown(){var t;if(null!==(t=this.orderInfo)&&void 0!==t&&t.OrderDate){let e=new Date(this.orderInfo.OrderDate).getTime()-(new Date).getTime()+this.timeout;if(e>0){this.timeCountdown=e,clearInterval(this.intervalCountdown);let r=1e3;this.intervalCountdown=setInterval(()=>{if(this.timeCountdown<=r)return this.timeCountdown=0,void clearInterval(this.intervalCountdown);this.timeCountdown-=r},r)}}}getTimeCountdown(){return D()(this.timeCountdown).format("mm:ss")}}return(i=a).\u0275fac=function(t){return new(t||i)(n.rXU(P.nX),n.rXU(d.Xi),n.rXU(d.K_),n.rXU(d.W3))},i.\u0275cmp=n.VBU({type:i,selectors:[["app-order-info-result"]],decls:15,vars:9,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","mb-5"],[1,"text-center","line-height-0","mb-3"],["color","primary","name","crescent"],[1,"card-order","rounded","bg-white"],[1,"table","table-borderless","m-0"],[1,"border-dashed"],[1,"card-order-detail","rounded","bg-white"],[1,"mb-2"],[1,"border-top"],[1,"text-muted","font-condensed"],[1,"text-primary"],[1,"card-order-exchange","rounded","bg-white","mt-3"],[1,"mb-2","d-flex","justify-content-between"],[1,"card-order-refund","rounded","bg-white","mt-3"],["class","text-tertiary",4,"ngIf"],[1,"text-tertiary"],[1,"mt-5","mb-3","bill-group-radio"],["mode","md",3,"value","ionChange"],["label-placement","end",3,"value"],["class","card-bill rounded bg-white mt-3",4,"ngIf"],[1,"card-bill","rounded","bg-white","mt-3"],[1,"d-flex","justify-content-between"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4",3,"click"],["class","table table-borderless m-0",4,"ngIf"],[1,"container","py-3"],["class","mb-3 text-center",4,"ngIf"],[1,"row","align-items-center"],[1,"col","pr-2"],["color","primary","expand","block","shape","round",3,"click",4,"ngIf"],[1,"col-auto","pl-2"],["mode","md","size","default","color","medium","shape","round","fill","outline","expand","block",3,"click"],[1,"mb-3","text-center"],["color","primary","expand","block","shape","round",3,"click"],["mode","md","size","default","color","warning","shape","round","fill","outline","expand","block",3,"click"]],template:function(t,e){1&t&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",2),n.bIt("ionRefresh",function(s){return e.onIonRefresher(s)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,V,2,0,"div",3)(11,Q,5,6,"ng-container",4),n.k0s(),n.qex(12,5),n.DNE(13,en,12,3,"ng-container",6)(14,on,6,0,"ng-container",6),n.bVm()),2&t&&(n.R7$(3),n.Y8G("defaultHref",e.APP_ROUTE.ORDER_INFO),n.R7$(2),n.JRh(n.bMT(6,7,"OrderInfo")),n.R7$(5),n.Y8G("ngIf",!e.response),n.R7$(1),n.Y8G("ngIf",null==e.response?null:e.response.Succeeded),n.R7$(1),n.Y8G("ngSwitch",null==e.orderInfo?null:e.orderInfo.VOrderStatus),n.R7$(1),n.Y8G("ngSwitchCase",e.v_order_status.DaThanhToan),n.R7$(1),n.Y8G("ngSwitchCase",e.v_order_status.KhongThanhCong))},dependencies:[I.bT,I.ux,I.e1,d.Jm,d.QW,d.W9,d.M0,d.eU,d.iq,d.he,d.KO,d.f0,d.To,d.Ki,d.w2,d.BC,d.ai,d.uR,d.Je,d.el,g.D9],styles:['ion-spinner[_ngcontent-%COMP%]{width:3rem;height:3rem}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0;padding-right:.5rem;color:var(ion-color-medium)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;white-space:nowrap;text-align:right}.card-order[_ngcontent-%COMP%]{padding:1rem}.card-order.rounded[_ngcontent-%COMP%]{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important;border-bottom-left-radius:0!important;border-bottom-right-radius:0!important}.card-order-detail[_ngcontent-%COMP%]{padding:1rem}.card-order-detail.rounded[_ngcontent-%COMP%]{border-top-left-radius:0!important;border-top-right-radius:0!important;border-bottom-left-radius:1.5rem!important;border-bottom-right-radius:1.5rem!important}.card-order-exchange[_ngcontent-%COMP%], .card-order-refund[_ngcontent-%COMP%]{padding:1rem}.card-order-exchange.rounded[_ngcontent-%COMP%], .card-order-refund.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]{padding:1rem}.card-bill.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-bill[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.bill-group-radio[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%]{margin:0 2rem .5rem 0}hr.border-dashed[_ngcontent-%COMP%]{margin:0;position:relative;z-index:1}hr.border-dashed[_ngcontent-%COMP%]:before, hr.border-dashed[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;z-index:2;bottom:0;margin-bottom:-1rem;width:2rem;height:2rem;border-radius:50%;background-color:var(--ion-background-color-primary)}hr.border-dashed[_ngcontent-%COMP%]:before{left:-1rem}hr.border-dashed[_ngcontent-%COMP%]:after{right:-1rem}']}),a})()}];let rn=(()=>{var i;class a{}return(i=a).\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.$C({type:i}),i.\u0275inj=n.G2t({imports:[P.iI.forChild(tn),P.iI]}),a})();var an=p(9500);let ln=(()=>{var i;class a{}return(i=a).\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.$C({type:i}),i.\u0275inj=n.G2t({imports:[I.MD,b.YN,d.bv,rn,an.x]}),a})()}}]);