"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2789],{2789:(q,b,m)=>{m.r(b),m.d(b,{VehiclePageModule:()=>Z});var _=m(177),k=m(9417),c=m(9465),C=m(7625),d=m(467),M=m(5312),g=m(5972);const R=function(){var r=(0,d.A)(function*(n){var l,t;n.params=n.params||{},(0,g.hm)({url:"api/CarManuft/get-carmanufts",params:{PageNumber:null!==(l=n.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(t=n.params.PageSize)&&void 0!==t?t:10},success:a=>{"function"==typeof n.callback&&n.callback(a.data||null)},error:a=>{var i;"function"==typeof n.callback&&n.callback(null==a||null===(i=a.response)||void 0===i?void 0:i.data),console.error(a)},loading:n.loading,loadingController:n.loadingController})});return function(l){return r.apply(this,arguments)}}(),$=function(){var r=(0,d.A)(function*(n){var l,t,a;n.params=n.params||{},(0,g.hm)({url:"api/CarModel/get-carmodels",params:{CarManuftId:null!==(l=n.params.CarManuftId)&&void 0!==l?l:null,PageNumber:null!==(t=n.params.PageNumber)&&void 0!==t?t:1,PageSize:null!==(a=n.params.PageSize)&&void 0!==a?a:10},success:i=>{"function"==typeof n.callback&&n.callback(i.data||null)},error:i=>{var o;"function"==typeof n.callback&&n.callback(null==i||null===(o=i.response)||void 0===o?void 0:o.data),console.error(i)},loading:n.loading,loadingController:n.loadingController})});return function(l){return r.apply(this,arguments)}}(),I=function(){var r=(0,d.A)(function*(n){var l,t;n.params=n.params||{},(0,g.hm)({url:"api/VehicleList/get-mycars",params:{PageNumber:null!==(l=n.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(t=n.params.PageSize)&&void 0!==t?t:10},success:a=>{"function"==typeof n.callback&&n.callback(a.data||null)},error:a=>{var i;"function"==typeof n.callback&&n.callback(null==a||null===(i=a.response)||void 0===i?void 0:i.data),console.error(a)},loading:n.loading,loadingController:n.loadingController})});return function(l){return r.apply(this,arguments)}}(),P=function(){var r=(0,d.A)(function*(n){n.params=n.params||{},(0,g.hm)({url:`api/VehicleList/get-cardetail/${n.params.VehicleId}`,params:{},success:l=>{"function"==typeof n.callback&&n.callback(l.data||null)},error:l=>{var t;"function"==typeof n.callback&&n.callback(null==l||null===(t=l.response)||void 0===t?void 0:t.data),console.error(l)},loading:n.loading,loadingController:n.loadingController})});return function(l){return r.apply(this,arguments)}}(),j=function(){var r=(0,d.A)(function*(n){var l,t,a,i,o,s,u;n.params=n.params||{},(0,g.Ll)({url:"api/VehicleList/create",params:{CarName:null!==(l=n.params.CarName)&&void 0!==l?l:null,CarBrand:null!==(t=n.params.CarBrand)&&void 0!==t?t:null,ModelName:null!==(a=n.params.ModelName)&&void 0!==a?a:null,Vin:null!==(i=n.params.Vin)&&void 0!==i?i:null,VehicleNumber:null!==(o=n.params.VehicleNumber)&&void 0!==o?o:null,YearOfManufacture:null!==(s=n.params.YearOfManufacture)&&void 0!==s?s:null,IsDefault:null!==(u=n.params.IsDefault)&&void 0!==u?u:null},success:h=>{"function"==typeof n.callback&&n.callback(h.data||null)},error:h=>{var p;"function"==typeof n.callback&&n.callback(null==h||null===(p=h.response)||void 0===p?void 0:p.data),console.error(h)},loading:n.loading,loadingController:n.loadingController})});return function(l){return r.apply(this,arguments)}}(),N=function(){var r=(0,d.A)(function*(n){var l,t,a,i,o,s,u,h;n.params=n.params||{},(0,g.IH)({url:"api/VehicleList/update-mycar",params:{VehicleId:null!==(l=n.params.VehicleId)&&void 0!==l?l:null,CarName:null!==(t=n.params.CarName)&&void 0!==t?t:null,CarBrand:null!==(a=n.params.CarBrand)&&void 0!==a?a:null,ModelName:null!==(i=n.params.ModelName)&&void 0!==i?i:null,Vin:null!==(o=n.params.Vin)&&void 0!==o?o:null,VehicleNumber:null!==(s=n.params.VehicleNumber)&&void 0!==s?s:null,YearOfManufacture:null!==(u=n.params.YearOfManufacture)&&void 0!==u?u:null,IsDefault:null!==(h=n.params.IsDefault)&&void 0!==h?h:null},success:p=>{"function"==typeof n.callback&&n.callback(p.data||null)},error:p=>{var v;"function"==typeof n.callback&&n.callback(null==p||null===(v=p.response)||void 0===v?void 0:v.data),console.error(p)},loading:n.loading,loadingController:n.loadingController})});return function(l){return r.apply(this,arguments)}}(),y=function(){var r=(0,d.A)(function*(n){n.params=n.params||{},(0,g.sj)({url:`api/VehicleList/delete-mycar/${n.params.VehicleId}`,params:{},success:l=>{"function"==typeof n.callback&&n.callback(l.data||null)},error:l=>{var t;"function"==typeof n.callback&&n.callback(null==l||null===(t=l.response)||void 0===t?void 0:t.data),console.error(l)},loading:n.loading,loadingController:n.loadingController})});return function(l){return r.apply(this,arguments)}}();var f=m(8650),e=m(4438),V=m(4842);const F=["modalBranch"],G=()=>[0,.75,1];function T(r,n){if(1&r){const l=e.RV6();e.qex(0),e.j41(1,"ion-item",24),e.bIt("click",function(a){const i=e.eBV(l).$implicit,o=e.XpG(2);return e.Njj(o.changeModelName(a,i.ModelName,i))}),e.j41(2,"ion-label")(3,"h6"),e.EFF(4),e.k0s(),e.j41(5,"small"),e.EFF(6),e.k0s()()(),e.bVm()}if(2&r){const l=n.$implicit,t=e.XpG(2);e.R7$(),e.Y8G("color",t.vehicle.ModelName==l.ModelName?"medium":"light"),e.R7$(3),e.JRh(l.ModelName),e.R7$(2),e.JRh(l.ModelDesc)}}function D(r,n){if(1&r&&(e.j41(0,"ion-content",21)(1,"ion-list",22),e.DNE(2,T,7,3,"ng-container",23),e.k0s()()),2&r){const l=e.XpG();e.R7$(2),e.Y8G("ngForOf",l.carModels)}}function A(r,n){if(1&r){const l=e.RV6();e.qex(0),e.j41(1,"div",29)(2,"div",30)(3,"div",31),e.bIt("click",function(a){const i=e.eBV(l).$implicit,o=e.XpG(2);return e.Njj(o.changeCarBrand(a,i.CarBrand,i))}),e.nrm(4,"ion-img",32),e.k0s()()(),e.bVm()}if(2&r){const l=n.$implicit,t=e.XpG(2);e.R7$(4),e.Y8G("src",t.getLogoUrl(l.LogoUrl))("alt",l.CarBrand)}}function O(r,n){if(1&r&&(e.j41(0,"div",25)(1,"div",26)(2,"h4",27),e.EFF(3),e.nI1(4,"translate"),e.k0s()(),e.j41(5,"div",28),e.DNE(6,A,5,2,"ng-container",23),e.k0s()()),2&r){const l=e.XpG();e.R7$(3),e.JRh(e.bMT(4,2,"SelectVehicleBrand")),e.R7$(3),e.Y8G("ngForOf",l.carManufts)}}let x=(()=>{var r;class n{constructor(t,a,i){this.modalController=t,this.loadingController=a,this.toastController=i,this.vehicle={},this.carManufts=[],this.carModels=[]}ngOnInit(){this.refreshData()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshData(t){var a=this;let i=[];i.push(new Promise((o,s)=>{R({params:{PageNumber:1,PageSize:100},callback:u=>{null!=u&&u.Succeeded&&(this.carManufts=u.Data),o(u)}})})),Promise.all(i).then((0,d.A)(function*(){a.VehicleId&&P({loadingController:a.loadingController,params:{VehicleId:a.VehicleId},callback:o=>{var s;a.response=o,null!=o&&o.Succeeded?a.vehicle=null!==(s=o.Data)&&void 0!==s?s:{}:(0,f.cX)(a.toastController,{},o).then(u=>u.present())}}),t&&t()}))}GetCarmodels(t){var a=this;return(0,d.A)(function*(){t&&$({params:{CarManuftId:t,PageNumber:1,PageSize:100},callback:i=>{null!=i&&i.Succeeded&&(a.carModels=i.Data)}})})()}close(t){var a=this;return(0,d.A)(function*(){a.modalController.dismiss(null,"cancel")})()}changeCarName(t){var a=this;return(0,d.A)(function*(){a.vehicle.CarName=t.detail.value})()}changeCarBrand(t,a,i){var o=this;return(0,d.A)(function*(){var s;o.vehicle.CarBrand=null!=a?a:t.detail.value,o.vehicle.LogoUrl=null==i?void 0:i.LogoUrl,o.GetCarmodels(null==i?void 0:i.CarManuftId),null===(s=o.modalBranch)||void 0===s||s.dismiss()})()}changeModelName(t,a,i){var o=this;return(0,d.A)(function*(){o.vehicle.ModelName=null!=a?a:t.detail.value})()}changeVin(t){var a=this;return(0,d.A)(function*(){a.vehicle.Vin=t.detail.value})()}changeVehicleNumber(t){var a=this;return(0,d.A)(function*(){a.vehicle.VehicleNumber=t.detail.value})()}changeYearOfManufacture(t){var a=this;return(0,d.A)(function*(){a.vehicle.YearOfManufacture=t.detail.value})()}changeIsDefault(t){var a=this;return(0,d.A)(function*(){a.vehicle.IsDefault=t.detail.checked})()}submit(t){var a=this;return(0,d.A)(function*(){a.vehicle.VehicleId?N({loadingController:a.loadingController,params:a.vehicle,callback:i=>{a.response=i,null!=i&&i.Succeeded?a.modalController.dismiss(null,"success"):(0,f.cX)(a.toastController,{},i).then(o=>o.present())}}):j({loadingController:a.loadingController,params:a.vehicle,callback:i=>{a.response=i,null!=i&&i.Succeeded?a.modalController.dismiss(null,"success"):(0,f.cX)(a.toastController,{},i).then(o=>o.present())}})})()}getLogoUrl(t){return!t||t.match(/^http(s)\:\/\//)?null!=t?t:"assets/image/favicon.svg":M.c.readfile_url+t.replace(/^\//,"")}}return(r=n).\u0275fac=function(t){return new(t||r)(e.rXU(c.W3),e.rXU(c.Xi),e.rXU(c.K_))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-modal-add-vehicle"]],viewQuery:function(t,a){if(1&t&&e.GBs(F,5),2&t){let i;e.mGM(i=e.lsd())&&(a.modalBranch=i.first)}},inputs:{VehicleId:"VehicleId"},decls:72,vars:39,consts:[["modalBranch",""],["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],["slot","fixed",3,"ionRefresh"],[1,"card-info","bg-white","container","py-3","min-h-100"],["lines","none"],[1,"form-group"],[1,"text-danger"],[1,"ion-item-input"],["placeholder","Xe c\u1ee7a M",3,"ionChange","value"],[3,"ionChange","placeholder","value"],["id","click-trigger-modal-branch"],["id","click-trigger-popover-model"],["trigger","click-trigger-popover-model","triggerAction","click","dismissOnSelect","true"],["type","number","inputmode","decimal",3,"ionChange","placeholder","value"],[1,"row"],["labelPlacement","end","justify","start",3,"ionChange","checked"],["trigger","click-trigger-modal-branch",3,"initialBreakpoint","breakpoints"],[1,"p-3"],["color","primary","shape","round","expand","block",3,"click"],[1,"ion-no-padding"],["lines","none","mode","ios"],[4,"ngFor","ngForOf"],["button","","detail","false",3,"click","color"],[1,"ion-background-color-primary"],[1,"pt-4"],[1,"text-center","my-0"],[1,"p-3","d-flex","flex-wrap"],[1,"col-4","p-2"],[1,"p-3","rounded","bg-white"],[1,"embed-responsive","embed-responsive-1by1","cursor-pointer",3,"click"],[1,"embed-responsive-item",3,"src","alt"]],template:function(t,a){if(1&t){const i=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),e.bIt("click",function(s){return e.eBV(i),e.Njj(a.close(s))}),e.nrm(4,"ion-icon",3),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6),e.nI1(7,"translate"),e.k0s()()(),e.j41(8,"ion-content")(9,"ion-refresher",4),e.bIt("ionRefresh",function(s){return e.eBV(i),e.Njj(a.onIonRefresher(s))}),e.nrm(10,"ion-refresher-content"),e.k0s(),e.j41(11,"div",5)(12,"ion-list",6)(13,"div",7)(14,"label"),e.EFF(15),e.nI1(16,"translate"),e.j41(17,"span",8),e.EFF(18,"*"),e.k0s()(),e.j41(19,"div",9)(20,"ion-item")(21,"ion-input",10),e.bIt("ionChange",function(s){return e.eBV(i),e.Njj(a.changeCarName(s))}),e.k0s()()()(),e.j41(22,"div",7)(23,"label"),e.EFF(24),e.nI1(25,"translate"),e.k0s(),e.j41(26,"div",9)(27,"ion-item")(28,"ion-input",11),e.nI1(29,"translate"),e.bIt("ionChange",function(s){return e.eBV(i),e.Njj(a.changeVehicleNumber(s))}),e.k0s()()()(),e.j41(30,"div",7)(31,"label"),e.EFF(32),e.nI1(33,"translate"),e.k0s(),e.j41(34,"div",9)(35,"ion-item",12)(36,"ion-label"),e.EFF(37),e.k0s()()()(),e.j41(38,"div",7)(39,"label"),e.EFF(40),e.nI1(41,"translate"),e.k0s(),e.j41(42,"div",9)(43,"ion-item",13)(44,"ion-label"),e.EFF(45),e.k0s()()(),e.j41(46,"ion-popover",14),e.DNE(47,D,3,1,"ng-template"),e.k0s()(),e.j41(48,"div",7)(49,"label"),e.EFF(50),e.nI1(51,"translate"),e.k0s(),e.j41(52,"div",9)(53,"ion-item")(54,"ion-input",15),e.nI1(55,"translate"),e.bIt("ionChange",function(s){return e.eBV(i),e.Njj(a.changeYearOfManufacture(s))}),e.k0s()()()(),e.j41(56,"div",7)(57,"div",16)(58,"ion-item")(59,"ion-checkbox",17),e.bIt("ionChange",function(s){return e.eBV(i),e.Njj(a.changeIsDefault(s))}),e.j41(60,"small")(61,"b"),e.EFF(62),e.nI1(63,"translate"),e.k0s()()()()()()()(),e.j41(64,"ion-modal",18,0),e.DNE(66,O,7,4,"ng-template"),e.k0s()(),e.j41(67,"ion-footer")(68,"div",19)(69,"ion-button",20),e.bIt("click",function(s){return e.eBV(i),e.Njj(a.submit(s))}),e.EFF(70),e.nI1(71,"translate"),e.k0s()()()}2&t&&(e.R7$(6),e.JRh(e.bMT(7,18,"NewVehicle")),e.R7$(9),e.SpI("",e.bMT(16,20,"VehicleName")," "),e.R7$(6),e.Y8G("value",a.vehicle.CarName),e.R7$(3),e.JRh(e.bMT(25,22,"VehicleNumber")),e.R7$(4),e.FS9("placeholder",e.bMT(29,24,"VehicleNumber")),e.Y8G("value",a.vehicle.VehicleNumber),e.R7$(4),e.JRh(e.bMT(33,26,"CarBrand")),e.R7$(5),e.JRh(a.vehicle.CarBrand),e.R7$(3),e.JRh(e.bMT(41,28,"ModelName")),e.R7$(5),e.JRh(a.vehicle.ModelName),e.R7$(5),e.JRh(e.bMT(51,30,"YearOfManufacture")),e.R7$(4),e.FS9("placeholder",e.bMT(55,32,"YearOfManufacture")),e.Y8G("value",a.vehicle.YearOfManufacture),e.R7$(5),e.Y8G("checked",!!a.vehicle.IsDefault),e.R7$(3),e.JRh(e.bMT(63,34,"VehicleDefault")),e.R7$(2),e.Y8G("initialBreakpoint",.75)("breakpoints",e.lJ4(38,G)),e.R7$(6),e.JRh(e.bMT(71,36,"Save")))},dependencies:[_.Sq,c.Jm,c.QW,c.eY,c.W9,c.M0,c.eU,c.iq,c.KW,c.$w,c.uz,c.he,c.nf,c.To,c.Ki,c.BC,c.ai,c.Sb,c.CF,c.hB,c.su,c.Gw,V.D9],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size: 3rem;--border-radius: 1rem}ion-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:.25rem;border:2px solid var(--ion-color-primary)}.card-info[_ngcontent-%COMP%]{border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}.ion-background-color-primary[_ngcontent-%COMP%]{background-color:var(--ion-background-color-primary)}.ion-background-color-primary[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:.5rem!important}"]}),n})();var E=m(6539),B=m(8833);function Y(r,n){1&r&&(e.j41(0,"div",10),e.nrm(1,"img",11),e.j41(2,"div",12),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&r&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function S(r,n){1&r&&(e.j41(0,"small",29),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&r&&(e.R7$(),e.SpI("(",e.bMT(2,1,"Default"),")"))}function X(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"CarBrand")),e.R7$(4),e.JRh(l.CarBrand)}}function J(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"ModelName")),e.R7$(4),e.JRh(l.ModelName)}}function U(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"VehicleNumber")),e.R7$(4),e.JRh(l.VehicleNumber)}}function z(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"Vin")),e.R7$(4),e.JRh(l.Vin)}}function L(r,n){if(1&r&&(e.j41(0,"tr")(1,"td"),e.EFF(2),e.nI1(3,"translate"),e.k0s(),e.j41(4,"td")(5,"b"),e.EFF(6),e.k0s()()()),2&r){const l=e.XpG().$implicit;e.R7$(2),e.JRh(e.bMT(3,2,"YearOfManufacture")),e.R7$(4),e.JRh(l.YearOfManufacture)}}function w(r,n){if(1&r){const l=e.RV6();e.qex(0),e.j41(1,"div",13)(2,"div",14)(3,"div",15)(4,"div",16)(5,"b",17),e.EFF(6),e.k0s(),e.DNE(7,S,3,3,"small",18),e.k0s(),e.j41(8,"div",19)(9,"ion-button",20),e.bIt("click",function(a){const i=e.eBV(l).$implicit,o=e.XpG();return e.Njj(o.presentModalAddVehicle(a,i.VehicleId))}),e.nrm(10,"ion-icon",21),e.k0s(),e.j41(11,"ion-button",22),e.bIt("click",function(a){const i=e.eBV(l).$implicit,o=e.XpG();return e.Njj(o.DeleteVehicle(a,i.VehicleId))}),e.nrm(12,"ion-icon",23),e.k0s()()(),e.nrm(13,"hr"),e.j41(14,"div",24)(15,"div",25),e.nrm(16,"ion-img",26),e.k0s(),e.j41(17,"table",27),e.DNE(18,X,7,4,"tr",28)(19,J,7,4,"tr",28)(20,U,7,4,"tr",28)(21,z,7,4,"tr",28)(22,L,7,4,"tr",28),e.k0s()()()(),e.bVm()}if(2&r){const l=n.$implicit,t=e.XpG();e.R7$(6),e.JRh(l.CarName),e.R7$(),e.Y8G("ngIf",l.IsDefault),e.R7$(9),e.Y8G("src",t.getLogoUrl(l.LogoUrl)),e.R7$(2),e.Y8G("ngIf",l.CarBrand),e.R7$(),e.Y8G("ngIf",l.ModelName),e.R7$(),e.Y8G("ngIf",l.VehicleNumber),e.R7$(),e.Y8G("ngIf",l.Vin),e.R7$(),e.Y8G("ngIf",l.YearOfManufacture)}}function W(r,n){if(1&r){const l=e.RV6();e.j41(0,"ion-infinite-scroll",30),e.bIt("ionInfinite",function(a){e.eBV(l);const i=e.XpG();return e.Njj(i.onIonInfinite(a))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}const H=[{path:"",component:(()=>{var r;class n{constructor(t,a,i,o){this.modalController=t,this.toastController=a,this.loadingController=i,this.animationController=o,this.APP_ROUTE=B._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.vehicles=[]}ngOnInit(){var t=this;(0,d.A)(function*(){(yield(0,E.kU)())&&t.refreshData()})()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}pushData(t){1==this.paging.page&&(this.vehicles.length=0),this.vehicles=this.vehicles.concat(t)}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}searchChange(t){this.filter.search=t.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(t,a){this.paging.sortfield=t||null,this.paging.sorttype=a||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(t){var a=this;return(0,d.A)(function*(){a.paging.loading=!0,I({loadingController:a.loadingController,params:{PageNumber:a.paging.page,PageSize:a.paging.limit},callback:i=>{var o;a.response=i,null!=i&&i.Succeeded?a.pushData(null!==(o=i.Data)&&void 0!==o?o:[]):(0,f.cX)(a.toastController,{},i).then(s=>s.present()),a.paging.loading=!1,a.paging.active=!(null==i||!i.HasNextPage),t&&t()}})})()}presentModalAddVehicle(t,a){var i=this;return(0,d.A)(function*(){let o=yield i.modalController.create({component:x,componentProps:{VehicleId:a}});o.onDidDismiss().then(s=>{"success"==s.role&&i.refreshData()}),o.present()})()}DeleteVehicle(t,a){var i=this;return(0,d.A)(function*(){a&&(0,f.Yy)(i.modalController,i.animationController,{selectedId:a,message:{TitleConfirm:"Delete_Confirm",TextConfirm:"Delete"},fnConfirm:o=>{y({loadingController:i.loadingController,params:{VehicleId:o},callback:s=>{null!=s&&s.Succeeded?i.refreshData():(0,f.cX)(i.toastController,{},s).then(u=>u.present())}})}})})()}getLogoUrl(t){return!t||t.match(/^http(s)\:\/\//)?null!=t?t:"assets/image/favicon.svg":M.c.readfile_url+t.replace(/^\//,"")}}return(r=n).\u0275fac=function(t){return new(t||r)(e.rXU(c.W3),e.rXU(c.K_),e.rXU(c.Xi),e.rXU(c.Hx))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-vehicle"]],decls:21,vars:10,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container py-5 text-center",4,"ngIf"],[1,"container"],[1,"row","align-items-stretch"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","py-3"],["color","primary","expand","block","shape","round",3,"click"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[1,"card-vehicle","rounded","bg-white","border","h-100"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-ellipsis"],[1,"mr-1"],["class","text-primary d-inline-block",4,"ngIf"],[1,"text-nowrap"],["size","small","color","medium","fill","clear",3,"click"],["src","../../../assets/icon/ion-icon/edit.svg",1,"fs-4"],["size","small","color","danger","fill","clear",3,"click"],["name","close-outline",1,"fs-5"],[1,"d-flex","align-items-start"],[1,"pr-2"],[3,"src"],[1,"table","table-borderless","m-0"],[4,"ngIf"],[1,"text-primary","d-inline-block"],[3,"ionInfinite"]],template:function(t,a){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",2),e.bIt("ionRefresh",function(o){return a.onIonRefresher(o)}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.DNE(10,Y,5,3,"div",3),e.j41(11,"div",4)(12,"div",5),e.DNE(13,w,23,8,"ng-container",6),e.k0s()(),e.DNE(14,W,2,0,"ion-infinite-scroll",7),e.k0s(),e.j41(15,"ion-footer")(16,"div",8)(17,"ion-button",9),e.bIt("click",function(o){return a.presentModalAddVehicle(o)}),e.j41(18,"ion-label"),e.EFF(19),e.nI1(20,"translate"),e.k0s()()()()),2&t&&(e.R7$(3),e.Y8G("defaultHref",a.APP_ROUTE.USER),e.R7$(2),e.JRh(e.bMT(6,6,"Vehicle")),e.R7$(5),e.Y8G("ngIf",a.response&&!a.vehicles.length),e.R7$(3),e.Y8G("ngForOf",a.vehicles),e.R7$(),e.Y8G("ngIf",a.paging.active),e.R7$(5),e.JRh(e.bMT(20,8,"NewVehicle")))},dependencies:[_.Sq,_.bT,c.Jm,c.QW,c.W9,c.M0,c.eU,c.iq,c.KW,c.Ax,c.Hp,c.he,c.To,c.Ki,c.BC,c.ai,c.el,V.D9],styles:[".card-vehicle[_ngcontent-%COMP%]{padding:1rem}.card-vehicle.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-vehicle[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-vehicle[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:2rem;height:2rem;min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: .5rem}.card-vehicle[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3rem}.table[_ngcontent-%COMP%]{table-layout:fixed;font-size:.875rem}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.25rem;padding-bottom:.25rem;vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}"]}),n})()}];let K=(()=>{var r;class n{}return(r=n).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[C.iI.forChild(H),C.iI]}),n})();var Q=m(3890);let Z=(()=>{var r;class n{}return(r=n).\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[_.MD,k.YN,c.bv,K,Q.x]}),n})()}}]);