"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2789],{2789:(ee,b,u)=>{u.r(b),u.d(b,{VehiclePageModule:()=>q});var v=u(177),k=u(9417),s=u(8974),C=u(2175),d=u(467),M=u(5312),g=u(5972);const R=function(){var r=(0,d.A)(function*(n){var l,i;n.params=n.params||{},(0,g.hm)({url:"api/CarManuft/get-carmanufts",params:{PageNumber:null!==(l=n.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(i=n.params.PageSize)&&void 0!==i?i:10},success:a=>{"function"==typeof n.callback&&n.callback(a.data||null)},error:a=>{var t;"function"==typeof n.callback&&n.callback(null==a||null===(t=a.response)||void 0===t?void 0:t.data),console.error(a)},loading:null==n?void 0:n.loading})});return function(l){return r.apply(this,arguments)}}(),$=function(){var r=(0,d.A)(function*(n){var l,i,a;n.params=n.params||{},(0,g.hm)({url:"api/CarModel/get-carmodels",params:{CarManuftId:null!==(l=n.params.CarManuftId)&&void 0!==l?l:null,PageNumber:null!==(i=n.params.PageNumber)&&void 0!==i?i:1,PageSize:null!==(a=n.params.PageSize)&&void 0!==a?a:10},success:t=>{"function"==typeof n.callback&&n.callback(t.data||null)},error:t=>{var o;"function"==typeof n.callback&&n.callback(null==t||null===(o=t.response)||void 0===o?void 0:o.data),console.error(t)},loading:null==n?void 0:n.loading})});return function(l){return r.apply(this,arguments)}}(),I=function(){var r=(0,d.A)(function*(n){var l,i;n.params=n.params||{},(0,g.hm)({url:"api/VehicleList/get-mycars",params:{PageNumber:null!==(l=n.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(i=n.params.PageSize)&&void 0!==i?i:10},success:a=>{"function"==typeof n.callback&&n.callback(a.data||null)},error:a=>{var t;"function"==typeof n.callback&&n.callback(null==a||null===(t=a.response)||void 0===t?void 0:t.data),console.error(a)},loading:null==n?void 0:n.loading})});return function(l){return r.apply(this,arguments)}}(),P=function(){var r=(0,d.A)(function*(n){n.params=n.params||{},(0,g.hm)({url:`api/VehicleList/get-cardetail/${n.params.VehicleId}`,params:{},success:l=>{"function"==typeof n.callback&&n.callback(l.data||null)},error:l=>{var i;"function"==typeof n.callback&&n.callback(null==l||null===(i=l.response)||void 0===i?void 0:i.data),console.error(l)},loading:null==n?void 0:n.loading})});return function(l){return r.apply(this,arguments)}}(),j=function(){var r=(0,d.A)(function*(n){var l,i,a,t,o,c,h;n.params=n.params||{},(0,g.Ll)({url:"api/VehicleList/create",params:{CarName:null!==(l=n.params.CarName)&&void 0!==l?l:null,CarBrand:null!==(i=n.params.CarBrand)&&void 0!==i?i:null,ModelName:null!==(a=n.params.ModelName)&&void 0!==a?a:null,Vin:null!==(t=n.params.Vin)&&void 0!==t?t:null,VehicleNumber:null!==(o=n.params.VehicleNumber)&&void 0!==o?o:null,YearOfManufacture:null!==(c=n.params.YearOfManufacture)&&void 0!==c?c:null,IsDefault:null!==(h=n.params.IsDefault)&&void 0!==h?h:null},success:m=>{"function"==typeof n.callback&&n.callback(m.data||null)},error:m=>{var p;"function"==typeof n.callback&&n.callback(null==m||null===(p=m.response)||void 0===p?void 0:p.data),console.error(m)},loading:null==n?void 0:n.loading})});return function(l){return r.apply(this,arguments)}}(),N=function(){var r=(0,d.A)(function*(n){var l,i,a,t,o,c,h,m;n.params=n.params||{},(0,g.IH)({url:"api/VehicleList/update-mycar",params:{VehicleId:null!==(l=n.params.VehicleId)&&void 0!==l?l:null,CarName:null!==(i=n.params.CarName)&&void 0!==i?i:null,CarBrand:null!==(a=n.params.CarBrand)&&void 0!==a?a:null,ModelName:null!==(t=n.params.ModelName)&&void 0!==t?t:null,Vin:null!==(o=n.params.Vin)&&void 0!==o?o:null,VehicleNumber:null!==(c=n.params.VehicleNumber)&&void 0!==c?c:null,YearOfManufacture:null!==(h=n.params.YearOfManufacture)&&void 0!==h?h:null,IsDefault:null!==(m=n.params.IsDefault)&&void 0!==m?m:null},success:p=>{"function"==typeof n.callback&&n.callback(p.data||null)},error:p=>{var _;"function"==typeof n.callback&&n.callback(null==p||null===(_=p.response)||void 0===_?void 0:_.data),console.error(p)},loading:null==n?void 0:n.loading})});return function(l){return r.apply(this,arguments)}}(),y=function(){var r=(0,d.A)(function*(n){n.params=n.params||{},(0,g.sj)({url:`api/VehicleList/delete-mycar/${n.params.VehicleId}`,params:{},success:l=>{"function"==typeof n.callback&&n.callback(l.data||null)},error:l=>{var i;"function"==typeof n.callback&&n.callback(null==l||null===(i=l.response)||void 0===i?void 0:i.data),console.error(l)},loading:null==n?void 0:n.loading})});return function(l){return r.apply(this,arguments)}}();var f=u(8650),e=u(4438),V=u(4842);const F=["modalBranch"],G=()=>[0,.75,1];function T(r,n){if(1&r){const l=e.RV6();e.qex(0),e.j41(1,"ion-item",24),e.bIt("click",function(a){const t=e.eBV(l).$implicit,o=e.XpG(2);return e.Njj(o.changeModelName(a,t.ModelName,t))}),e.j41(2,"ion-label")(3,"h6"),e.EFF(4),e.k0s(),e.j41(5,"small"),e.EFF(6),e.k0s()()(),e.bVm()}if(2&r){const l=n.$implicit,i=e.XpG(2);e.R7$(),e.Y8G("color",i.vehicle.ModelName==l.ModelName?"medium":"light"),e.R7$(3),e.JRh(l.ModelName),e.R7$(2),e.JRh(l.ModelDesc)}}function D(r,n){if(1&r&&(e.j41(0,"ion-content",21)(1,"ion-list",22),e.DNE(2,T,7,3,"ng-container",23),e.k0s()()),2&r){const l=e.XpG();e.R7$(2),e.Y8G("ngForOf",l.carModels)}}function A(r,n){if(1&r){const l=e.RV6();e.qex(0),e.j41(1,"div",26)(2,"div",27),e.bIt("click",function(a){const t=e.eBV(l).$implicit,o=e.XpG(2);return e.Njj(o.changeCarBrand(a,t.CarBrand,t))}),e.nrm(3,"ion-img",28),e.k0s()(),e.bVm()}if(2&r){const l=n.$implicit,i=e.XpG(2);e.R7$(3),e.Y8G("src",i.getLogoUrl(l.LogoUrl))("alt",l.CarBrand)}}function O(r,n){if(1&r&&(e.j41(0,"div",25),e.DNE(1,A,4,2,"ng-container",23),e.k0s()),2&r){const l=e.XpG();e.R7$(),e.Y8G("ngForOf",l.carManufts)}}let x=(()=>{var r;class n{constructor(i,a,t){var o=this;this.modalController=i,this.loadingController=a,this.toastController=t,this.vehicle={},this.carManufts=[],this.carModels=[],(0,d.A)(function*(){o.loading=yield o.loadingController.create({message:""})})()}ngOnInit(){this.refreshData()}onIonRefresher(i){this.refreshData(()=>{i.target.complete()})}refreshData(i){let a=[];a.push(new Promise((t,o)=>{R({params:{PageNumber:1,PageSize:100},callback:c=>{null!=c&&c.Succeeded&&(this.carManufts=c.Data),t(c)}})})),Promise.all(a).then(()=>{this.VehicleId&&P({loading:t=>{var o,c;t?null===(o=this.loading)||void 0===o||o.present():null===(c=this.loading)||void 0===c||c.dismiss()},params:{VehicleId:this.VehicleId},callback:t=>{var o;this.response=t,null!=t&&t.Succeeded?this.vehicle=null!==(o=t.Data)&&void 0!==o?o:{}:(0,f.cX)(this.toastController,{},t).then(c=>c.present())}}),i&&i()})}GetCarmodels(i){var a=this;return(0,d.A)(function*(){i&&$({params:{CarManuftId:i,PageNumber:1,PageSize:100},callback:t=>{null!=t&&t.Succeeded&&(a.carModels=t.Data)}})})()}close(i){var a=this;return(0,d.A)(function*(){a.modalController.dismiss(null,"cancel")})()}changeCarName(i){var a=this;return(0,d.A)(function*(){a.vehicle.CarName=i.detail.value})()}changeCarBrand(i,a,t){var o=this;return(0,d.A)(function*(){var c;o.vehicle.CarBrand=null!=a?a:i.detail.value,o.vehicle.LogoUrl=null==t?void 0:t.LogoUrl,o.GetCarmodels(null==t?void 0:t.CarManuftId),null===(c=o.modalBranch)||void 0===c||c.dismiss()})()}changeModelName(i,a,t){var o=this;return(0,d.A)(function*(){o.vehicle.ModelName=null!=a?a:i.detail.value})()}changeVin(i){var a=this;return(0,d.A)(function*(){a.vehicle.Vin=i.detail.value})()}changeVehicleNumber(i){var a=this;return(0,d.A)(function*(){a.vehicle.VehicleNumber=i.detail.value})()}changeYearOfManufacture(i){var a=this;return(0,d.A)(function*(){a.vehicle.YearOfManufacture=i.detail.value})()}changeIsDefault(i){var a=this;return(0,d.A)(function*(){a.vehicle.IsDefault=i.detail.checked})()}submit(i){var a=this;return(0,d.A)(function*(){a.vehicle.VehicleId?N({loading:t=>{var o,c;t?null===(o=a.loading)||void 0===o||o.present():null===(c=a.loading)||void 0===c||c.dismiss()},params:a.vehicle,callback:t=>{a.response=t,null!=t&&t.Succeeded?a.modalController.dismiss(null,"success"):(0,f.cX)(a.toastController,{},t).then(o=>o.present())}}):j({loading:t=>{var o,c;t?null===(o=a.loading)||void 0===o||o.present():null===(c=a.loading)||void 0===c||c.dismiss()},params:a.vehicle,callback:t=>{a.response=t,null!=t&&t.Succeeded?a.modalController.dismiss(null,"success"):(0,f.cX)(a.toastController,{},t).then(o=>o.present())}})})()}getLogoUrl(i){return!i||i.match(/^http(s)\:\/\//)?null!=i?i:"assets/favicon/favicon.svg":M.c.api_url+"readfile/"+i.replace(/^\//,"")}}return(r=n).\u0275fac=function(i){return new(i||r)(e.rXU(s.W3),e.rXU(s.Xi),e.rXU(s.K_))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-modal-add-vehicle"]],viewQuery:function(i,a){if(1&i&&e.GBs(F,5),2&i){let t;e.mGM(t=e.lsd())&&(a.modalBranch=t.first)}},inputs:{VehicleId:"VehicleId"},decls:72,vars:39,consts:[["modalBranch",""],["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],["slot","fixed",3,"ionRefresh"],[1,"card-info","bg-white","container","py-3","min-h-100"],["lines","none"],[1,"form-group"],[1,"text-danger"],[1,"ion-item-input"],["placeholder","Xe c\u1ee7a M",3,"ionChange","value"],[3,"ionChange","placeholder","value"],["id","click-trigger-modal-branch"],["id","click-trigger-popover-model"],["trigger","click-trigger-popover-model","triggerAction","click","dismissOnSelect","true"],["type","number",3,"ionChange","placeholder","value"],[1,"row"],["labelPlacement","end","justify","start",3,"ionChange","checked"],["trigger","click-trigger-modal-branch",3,"initialBreakpoint","breakpoints"],[1,"p-3"],["color","primary","shape","round","expand","block",3,"click"],[1,"ion-no-padding"],["lines","none","mode","ios"],[4,"ngFor","ngForOf"],["button","","detail","false",3,"click","color"],[1,"d-flex","flex-wrap"],[1,"col-4","py-3"],[1,"embed-responsive","embed-responsive-1by1","cursor-pointer",3,"click"],[1,"embed-responsive-item",3,"src","alt"]],template:function(i,a){if(1&i){const t=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e.bIt("click",function(c){return e.eBV(t),e.Njj(a.close(c))}),e.nrm(4,"ion-icon",3),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6),e.nI1(7,"translate"),e.k0s()()(),e.j41(8,"ion-content")(9,"ion-refresher",4),e.bIt("ionRefresh",function(c){return e.eBV(t),e.Njj(a.onIonRefresher(c))}),e.nrm(10,"ion-refresher-content"),e.k0s(),e.j41(11,"div",5)(12,"ion-list",6)(13,"div",7)(14,"label"),e.EFF(15),e.nI1(16,"translate"),e.j41(17,"span",8),e.EFF(18,"*"),e.k0s()(),e.j41(19,"div",9)(20,"ion-item")(21,"ion-input",10),e.bIt("ionChange",function(c){return e.eBV(t),e.Njj(a.changeCarName(c))}),e.k0s()()()(),e.j41(22,"div",7)(23,"label"),e.EFF(24),e.nI1(25,"translate"),e.k0s(),e.j41(26,"div",9)(27,"ion-item")(28,"ion-input",11),e.nI1(29,"translate"),e.bIt("ionChange",function(c){return e.eBV(t),e.Njj(a.changeVehicleNumber(c))}),e.k0s()()()(),e.j41(30,"div",7)(31,"label"),e.EFF(32),e.nI1(33,"translate"),e.k0s(),e.j41(34,"div",9)(35,"ion-item",12)(36,"ion-label"),e.EFF(37),e.k0s()()()(),e.j41(38,"div",7)(39,"label"),e.EFF(40),e.nI1(41,"translate"),e.k0s(),e.j41(42,"div",9)(43,"ion-item",13)(44,"ion-label"),e.EFF(45),e.k0s()()(),e.j41(46,"ion-popover",14),e.DNE(47,D,3,1,"ng-template"),e.k0s()(),e.j41(48,"div",7)(49,"label"),e.EFF(50),e.nI1(51,"translate"),e.k0s(),e.j41(52,"div",9)(53,"ion-item")(54,"ion-input",15),e.nI1(55,"translate"),e.bIt("ionChange",function(c){return e.eBV(t),e.Njj(a.changeYearOfManufacture(c))}),e.k0s()()()(),e.j41(56,"div",7)(57,"div",16)(58,"ion-item")(59,"ion-checkbox",17),e.bIt("ionChange",function(c){return e.eBV(t),e.Njj(a.changeIsDefault(c))}),e.j41(60,"small")(61,"b"),e.EFF(62),e.nI1(63,"translate"),e.k0s()()()()()()()(),e.j41(64,"ion-modal",18,0),e.DNE(66,O,2,1,"ng-template"),e.k0s()(),e.j41(67,"ion-footer")(68,"div",19)(69,"ion-button",20),e.bIt("click",function(c){return e.eBV(t),e.Njj(a.submit(c))}),e.EFF(70),e.nI1(71,"translate"),e.k0s()()()}2&i&&(e.R7$(6),e.JRh(e.bMT(7,18,"NewVehicle")),e.R7$(9),e.SpI("",e.bMT(16,20,"VehicleName")," "),e.R7$(6),e.Y8G("value",a.vehicle.CarName),e.R7$(3),e.JRh(e.bMT(25,22,"VehicleNumber")),e.R7$(4),e.FS9("placeholder",e.bMT(29,24,"VehicleNumber")),e.Y8G("value",a.vehicle.VehicleNumber),e.R7$(4),e.JRh(e.bMT(33,26,"CarBrand")),e.R7$(5),e.JRh(a.vehicle.CarBrand),e.R7$(3),e.JRh(e.bMT(41,28,"ModelName")),e.R7$(5),e.JRh(a.vehicle.ModelName),e.R7$(5),e.JRh(e.bMT(51,30,"YearOfManufacture")),e.R7$(4),e.FS9("placeholder",e.bMT(55,32,"YearOfManufacture")),e.Y8G("value",a.vehicle.YearOfManufacture),e.R7$(5),e.Y8G("checked",!!a.vehicle.IsDefault),e.R7$(3),e.JRh(e.bMT(63,34,"VehicleDefault")),e.R7$(2),e.Y8G("initialBreakpoint",.75)("breakpoints",e.lJ4(38,G)),e.R7$(6),e.JRh(e.bMT(71,36,"Save")))},dependencies:[v.Sq,s.Jm,s.QW,s.eY,s.W9,s.M0,s.eU,s.iq,s.KW,s.$w,s.uz,s.he,s.nf,s.To,s.Ki,s.BC,s.ai,s.Sb,s.CF,s.hB,s.su,s.Gw,V.D9],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size: 3rem;--border-radius: 1rem}ion-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:.25rem;border:2px solid var(--ion-color-primary)}.card-info[_ngcontent-%COMP%]{border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}"]}),n})();var B=u(6539),E=u(8833);function Y(r,n){1&r&&(e.j41(0,"div",11),e.nrm(1,"ion-spinner",12),e.k0s())}function S(r,n){1&r&&(e.j41(0,"div",13),e.nrm(1,"img",14),e.j41(2,"div",15),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&r&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function X(r,n){1&r&&(e.j41(0,"small",32),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&r&&(e.R7$(),e.SpI("(",e.bMT(2,1,"Default"),")"))}function J(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"CarBrand")),e.R7$(4),e.JRh(l.CarBrand)}}function U(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"ModelName")),e.R7$(4),e.JRh(l.ModelName)}}function z(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"VehicleNumber")),e.R7$(4),e.JRh(l.VehicleNumber)}}function L(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"Vin")),e.R7$(4),e.JRh(l.Vin)}}function w(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"YearOfManufacture")),e.R7$(4),e.JRh(l.YearOfManufacture)}}function W(r,n){if(1&r){const l=e.RV6();e.qex(0),e.j41(1,"div",16)(2,"div",17)(3,"div",18)(4,"div",19)(5,"b",20),e.EFF(6),e.k0s(),e.DNE(7,X,3,3,"small",21),e.k0s(),e.j41(8,"div",22)(9,"ion-button",23),e.bIt("click",function(a){const t=e.eBV(l).$implicit,o=e.XpG();return e.Njj(o.presentModalAddVehicle(a,t.VehicleId))}),e.nrm(10,"ion-icon",24),e.k0s(),e.j41(11,"ion-button",25),e.bIt("click",function(a){const t=e.eBV(l).$implicit,o=e.XpG();return e.Njj(o.DeleteVehicle(a,t.VehicleId))}),e.nrm(12,"ion-icon",26),e.k0s()()(),e.nrm(13,"hr"),e.j41(14,"div",27)(15,"div",28),e.nrm(16,"ion-img",29),e.k0s(),e.j41(17,"table",30),e.DNE(18,J,7,4,"tr",31)(19,U,7,4,"tr",31)(20,z,7,4,"tr",31)(21,L,7,4,"tr",31)(22,w,7,4,"tr",31),e.k0s()()()(),e.bVm()}if(2&r){const l=n.$implicit,i=e.XpG();e.R7$(6),e.JRh(l.CarName),e.R7$(),e.Y8G("ngIf",l.IsDefault),e.R7$(9),e.Y8G("src",i.getLogoUrl(l.LogoUrl)),e.R7$(2),e.Y8G("ngIf",l.CarBrand),e.R7$(),e.Y8G("ngIf",l.ModelName),e.R7$(),e.Y8G("ngIf",l.VehicleNumber),e.R7$(),e.Y8G("ngIf",l.Vin),e.R7$(),e.Y8G("ngIf",l.YearOfManufacture)}}function H(r,n){if(1&r){const l=e.RV6();e.j41(0,"ion-infinite-scroll",33),e.bIt("ionInfinite",function(a){e.eBV(l);const t=e.XpG();return e.Njj(t.onIonInfinite(a))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}const K=[{path:"",component:(()=>{var r;class n{constructor(i,a,t,o){var c=this;this.modalController=i,this.toastController=a,this.loadingController=t,this.animationController=o,this.APP_ROUTE=E._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.vehicles=[],(0,d.A)(function*(){c.loading=yield c.loadingController.create({message:""})})()}ngOnInit(){var i=this;(0,d.A)(function*(){(yield(0,B.kU)())&&i.refreshData()})()}onIonRefresher(i){this.filter={},this.refreshData(()=>{i.target.complete()})}onIonInfinite(i){this.loadMore(()=>{i.target.complete()})}resetData(){this.vehicles.length=0}pushData(i){this.vehicles=this.vehicles.concat(i)}refreshData(i){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(i)}loadMore(i){this.paging.page+=1,this.loadData_Paging(i)}searchChange(i){this.filter.search=i.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}sortChange(i,a){this.paging.sortfield=i||null,this.paging.sorttype=a||null,this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}loadData_Paging(i){var a=this;return(0,d.A)(function*(){a.paging.loading=!0,I({loading:t=>{var o,c;t?null===(o=a.loading)||void 0===o||o.present():null===(c=a.loading)||void 0===c||c.dismiss()},params:{PageNumber:a.paging.page,PageSize:a.paging.limit},callback:t=>{var o;a.response=t,null!=t&&t.Succeeded?a.pushData(null!==(o=t.Data)&&void 0!==o?o:[]):(0,f.cX)(a.toastController,{},t).then(c=>c.present()),a.paging.loading=!1,a.paging.active=!(null==t||!t.HasNextPage),i&&i()}})})()}presentModalAddVehicle(i,a){var t=this;return(0,d.A)(function*(){let o=yield t.modalController.create({component:x,componentProps:{VehicleId:a}});o.onDidDismiss().then(c=>{"success"==c.role&&t.refreshData()}),o.present()})()}DeleteVehicle(i,a){var t=this;return(0,d.A)(function*(){a&&(0,f.Yy)(t.modalController,t.animationController,{selectedId:a,message:{TitleConfirm:"Delete_Confirm",TextConfirm:"Delete"},fnConfirm:o=>{y({loading:c=>{var h,m;c?null===(h=t.loading)||void 0===h||h.present():null===(m=t.loading)||void 0===m||m.dismiss()},params:{VehicleId:o},callback:c=>{null!=c&&c.Succeeded?t.refreshData():(0,f.cX)(t.toastController,{},c).then(h=>h.present())}})}})})()}getLogoUrl(i){return!i||i.match(/^http(s)\:\/\//)?null!=i?i:"assets/favicon/favicon.svg":M.c.api_url+"readfile/"+i.replace(/^\//,"")}}return(r=n).\u0275fac=function(i){return new(i||r)(e.rXU(s.W3),e.rXU(s.K_),e.rXU(s.Xi),e.rXU(s.Hx))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-vehicle"]],decls:22,vars:11,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],[1,"row","align-items-stretch"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","py-3"],["color","primary","expand","block","shape","round",3,"click"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[1,"card-vehicle","rounded","bg-white","border","h-100"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-ellipsis"],[1,"mr-1"],["class","text-primary d-inline-block",4,"ngIf"],[1,"text-nowrap"],["size","small","color","medium","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4"],["size","small","color","danger","fill","clear",3,"click"],["name","close-outline",1,"fs-5"],[1,"d-flex","align-items-start"],[1,"pr-2"],[3,"src"],[1,"table","table-borderless","m-0"],[4,"ngIf"],[1,"text-primary","d-inline-block"],[3,"ionInfinite"]],template:function(i,a){1&i&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",2),e.bIt("ionRefresh",function(o){return a.onIonRefresher(o)}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.DNE(10,Y,2,0,"div",3)(11,S,5,3,"div",4),e.j41(12,"div",5)(13,"div",6),e.DNE(14,W,23,8,"ng-container",7),e.k0s()(),e.DNE(15,H,2,0,"ion-infinite-scroll",8),e.k0s(),e.j41(16,"ion-footer")(17,"div",9)(18,"ion-button",10),e.bIt("click",function(o){return a.presentModalAddVehicle(o)}),e.j41(19,"ion-label"),e.EFF(20),e.nI1(21,"translate"),e.k0s()()()()),2&i&&(e.R7$(3),e.Y8G("defaultHref",a.APP_ROUTE.TABS_USER),e.R7$(2),e.JRh(e.bMT(6,7,"Vehicle")),e.R7$(5),e.Y8G("ngIf",!a.response),e.R7$(),e.Y8G("ngIf",a.response&&!a.vehicles.length),e.R7$(3),e.Y8G("ngForOf",a.vehicles),e.R7$(),e.Y8G("ngIf",a.paging.active),e.R7$(5),e.JRh(e.bMT(21,9,"NewVehicle")))},dependencies:[v.Sq,v.bT,s.Jm,s.QW,s.W9,s.M0,s.eU,s.iq,s.KW,s.Ax,s.Hp,s.he,s.To,s.Ki,s.w2,s.BC,s.ai,s.el,V.D9],styles:[".card-vehicle[_ngcontent-%COMP%]{padding:1rem}.card-vehicle.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-vehicle[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-vehicle[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: .5rem}.card-vehicle[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3rem}.table[_ngcontent-%COMP%]{table-layout:fixed;font-size:.875rem}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}"]}),n})()}];let Q=(()=>{var r;class n{}return(r=n).\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[C.iI.forChild(K),C.iI]}),n})();var Z=u(3584);let q=(()=>{var r;class n{}return(r=n).\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[v.MD,k.YN,s.bv,Q,Z.x]}),n})()}}]);