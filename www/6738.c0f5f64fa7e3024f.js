"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6738],{9946:(V,j,g)=>{g.d(j,{ks:()=>T,sh:()=>p,z:()=>d});var h=g(467),R=g(5972);const d=function(){var y=(0,h.A)(function*(s){s.params=s.params||{},(0,R.hm)({url:"api/User/get-user",params:{},success:m=>{"function"==typeof s.callback&&s.callback(m.data||null)},error:m=>{var _;"function"==typeof s.callback&&s.callback(null==m||null===(_=m.response)||void 0===_?void 0:_.data),console.error(m)},loading:null==s?void 0:s.loading})});return function(m){return y.apply(this,arguments)}}(),T=function(){var y=(0,h.A)(function*(s){var m,_,v,f,P,k;s.params=s.params||{},(0,R.IH)({url:"api/User/update-user",params:{UserId:null!==(m=s.params.UserId)&&void 0!==m?m:null,FullName:null!==(_=s.params.FullName)&&void 0!==_?_:null,Address:null!==(v=s.params.Address)&&void 0!==v?v:null,Gender:null!==(f=s.params.Gender)&&void 0!==f?f:null,Birthday:null!==(P=s.params.Birthday)&&void 0!==P?P:null,PersonEmail:null!==(k=s.params.Email)&&void 0!==k?k:null},success:C=>{"function"==typeof s.callback&&s.callback(C.data||null)},error:C=>{var O;"function"==typeof s.callback&&s.callback(null==C||null===(O=C.response)||void 0===O?void 0:O.data),console.error(C)},loading:null==s?void 0:s.loading})});return function(m){return y.apply(this,arguments)}}(),p=function(){var y=(0,h.A)(function*(s){var m,_;s.params=s.params||{},(0,R.IH)({url:"api/User/update-avatar",params:{UserId:null!==(m=s.params.UserId)&&void 0!==m?m:null,Avatar:null!==(_=s.params.Avatar)&&void 0!==_?_:null},success:v=>{"function"==typeof s.callback&&s.callback(v.data||null)},error:v=>{var f;"function"==typeof s.callback&&s.callback(null==v||null===(f=v.response)||void 0===f?void 0:f.data),console.error(v)},loading:null==s?void 0:s.loading})});return function(m){return y.apply(this,arguments)}}()},6738:(V,j,g)=>{g.r(j),g.d(j,{HomePageModule:()=>gn});var h=g(177),R=g(9417),d=g(8974),T=g(2175),p=g(467),y=g(2385),s=g(4397),m=g(7392),_=g(7762),v=g(5312),f=g(3801),P=g(6841),k=g(4470),C=g(7168),O=g(9946),$=g(6539),x=g(1312),F=g(8650),S=g(3588),I=g(8833),n=g(4438),M=g(119),E=g(4842);function A(o,c){1&o&&(n.qex(0),n.nrm(1,"img",5),n.bVm())}function D(o,c){1&o&&(n.qex(0),n.nrm(1,"img",6),n.bVm())}function G(o,c){1&o&&(n.qex(0),n.j41(1,"ion-label",10),n.EFF(2,"Ti\u1ebfng Vi\u1ec7t"),n.k0s(),n.j41(3,"ion-avatar",11),n.nrm(4,"img",5),n.k0s(),n.bVm())}function N(o,c){1&o&&(n.qex(0),n.j41(1,"ion-label",10),n.EFF(2,"English"),n.k0s(),n.j41(3,"ion-avatar",11),n.nrm(4,"img",6),n.k0s(),n.bVm())}function H(o,c){if(1&o){const l=n.RV6();n.j41(0,"ion-item",9),n.bIt("click",function(t){const a=n.eBV(l).$implicit,i=n.XpG(2);return n.Njj(i.changeLang(t,a))}),n.qex(1,1),n.DNE(2,G,5,0,"ng-container",3)(3,N,5,0,"ng-container",3),n.bVm(),n.k0s()}if(2&o){const l=c.$implicit;n.R7$(),n.Y8G("ngSwitch",l),n.R7$(),n.Y8G("ngSwitchCase","vi"),n.R7$(),n.Y8G("ngSwitchCase","en")}}function U(o,c){if(1&o&&(n.j41(0,"ion-list",7),n.DNE(1,H,4,3,"ion-item",8),n.k0s()),2&o){const l=n.XpG();n.R7$(),n.Y8G("ngForOf",l.translates)}}M.config({driver:[M.INDEXEDDB,M.LOCALSTORAGE,M.WEBSQL],name:"_config",version:1});const w={create:(o=(0,p.A)(function*(){return M}),function(){return o.apply(this,arguments)}),get:function(){var o=(0,p.A)(function*(c){return M.getItem(c)});return function(l){return o.apply(this,arguments)}}(),set:function(){var o=(0,p.A)(function*(c,l){return M.setItem(c,l)});return function(l,e){return o.apply(this,arguments)}}()};var o;let X=(()=>{var o;class c{constructor(e){var t=this;this.translateService=e,this.changeLang=function(){var a=(0,p.A)(function*(i,r){var u,b;(r=null!==(u=r)&&void 0!==u?u:null==i||null===(b=i.target)||void 0===b?void 0:b.value)&&(t.translate.use(r),yield w.set("lang",r),window.location.reload())});return function(i,r){return a.apply(this,arguments)}}(),this.translate=e,this.translates=e.getLangs()}ngOnInit(){}}return(o=c).\u0275fac=function(e){return new(e||o)(n.rXU(E.c$))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-select-language"]],decls:8,vars:3,consts:[["id","click-trigger","shape","clear"],[3,"ngSwitch"],["name","caret-down-outline"],[4,"ngSwitchCase"],["trigger","click-trigger","triggerAction","click","side","bottom","alignment","center","dismiss-on-select","true"],["src","../../../../assets/i18n/flag/vi-VN.svg"],["src","../../../../assets/i18n/flag/en-US.svg"],["mode","ios","lines","none"],["button","","detail","false",3,"click",4,"ngFor","ngForOf"],["button","","detail","false",3,"click"],["slot","start"],["slot","end",1,"mr-0"]],template:function(e,t){1&e&&(n.j41(0,"ion-button",0),n.qex(1,1),n.nrm(2,"ion-icon",2),n.j41(3,"ion-avatar"),n.DNE(4,A,2,0,"ng-container",3)(5,D,2,0,"ng-container",3),n.k0s(),n.bVm(),n.k0s(),n.j41(6,"ion-popover",4),n.DNE(7,U,2,1,"ng-template"),n.k0s()),2&e&&(n.R7$(),n.Y8G("ngSwitch",t.translate.currentLang),n.R7$(3),n.Y8G("ngSwitchCase","vi"),n.R7$(),n.Y8G("ngSwitchCase","en"))},dependencies:[h.Sq,h.ux,h.e1,d.mC,d.Jm,d.iq,d.uz,d.he,d.nf,d.CF],styles:["ion-button[_ngcontent-%COMP%]{margin:0;--padding-top: 0;--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--box-shadow: none}ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.25rem;font-size:1rem;color:var(--ion-color-light)}ion-button[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{border-radius:50%;width:2rem;height:2rem;border:1px solid rgba(229,229,229,.8)}ion-popover[_ngcontent-%COMP%]{--width: auto}ion-popover[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2.5rem;color:var(--ion-color-dark)}ion-popover[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0;white-space:nowrap}"]}),c})();const B=o=>({$implicit:o});function Y(o,c){if(1&o&&(n.qex(0),n.j41(1,"div",31)(2,"div",32)(3,"div")(4,"div"),n.EFF(5),n.k0s()()()(),n.bVm()),2&o){const l=n.XpG();n.R7$(5),n.JRh(l.totalNotifyUnread<100?l.totalNotifyUnread:"99+")}}function J(o,c){if(1&o&&(n.j41(0,"div",33)(1,"span"),n.EFF(2,"\xa0"),n.k0s(),n.j41(3,"div"),n.EFF(4),n.k0s()()),2&o){const l=n.XpG();n.R7$(4),n.JRh(l.currentAddress)}}function z(o,c){1&o&&(n.qex(0),n.j41(1,"div",34),n.nrm(2,"ion-spinner",35),n.k0s(),n.bVm())}function W(o,c){if(1&o){const l=n.RV6();n.qex(0),n.j41(1,"ion-button",41),n.bIt("click",function(t){n.eBV(l);const a=n.XpG(3);return n.Njj(a.refreshCurrentPosition(t))}),n.nrm(2,"ion-icon",42),n.j41(3,"ion-label"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.bVm()}if(2&o){const l=n.XpG().$implicit;n.R7$(4),n.JRh(n.bMT(5,1,l.text))}}function K(o,c){if(1&o){const l=n.RV6();n.qex(0),n.j41(1,"ion-button",41),n.bIt("click",function(t){n.eBV(l);const a=n.XpG().$implicit,i=n.XpG(2);return n.Njj(i.clearFilter(t,a))}),n.j41(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.nrm(5,"ion-icon",43),n.k0s(),n.bVm()}if(2&o){const l=n.XpG().$implicit;n.R7$(3),n.JRh(n.bMT(4,1,l.text))}}function Z(o,c){if(1&o){const l=n.RV6();n.qex(0),n.j41(1,"ion-button",41),n.bIt("click",function(t){n.eBV(l);const a=n.XpG().$implicit,i=n.XpG(2);return n.Njj(i.clearFilter(t,a))}),n.j41(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.nrm(5,"ion-icon",43),n.k0s(),n.bVm()}if(2&o){const l=n.XpG().$implicit;n.R7$(3),n.JRh(n.bMT(4,1,l.text))}}function Q(o,c){if(1&o&&(n.qex(0)(1,38),n.DNE(2,W,6,3,"ng-container",39)(3,K,6,3,"ng-container",39)(4,Z,6,3,"ng-container",40),n.bVm()()),2&o){const l=c.$implicit;n.R7$(),n.Y8G("ngSwitch",l.type),n.R7$(),n.Y8G("ngSwitchCase","Nearby"),n.R7$(),n.Y8G("ngSwitchCase","Search")}}function q(o,c){if(1&o&&(n.qex(0),n.j41(1,"div",36)(2,"div",37),n.DNE(3,Q,5,3,"ng-container",25),n.k0s()(),n.bVm()),2&o){const l=n.XpG();n.R7$(3),n.Y8G("ngForOf",l.getFilters())}}function nn(o,c){1&o&&(n.qex(0),n.j41(1,"div",44),n.nrm(2,"ion-img",45),n.j41(3,"div",46),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.bVm()),2&o&&(n.R7$(4),n.JRh(n.bMT(5,1,"DataNotFound")))}function tn(o,c){if(1&o&&(n.qex(0),n.j41(1,"div",48),n.eu8(2,49),n.k0s(),n.bVm()),2&o){const l=c.$implicit;n.XpG(2);const e=n.sdS(79);n.R7$(2),n.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",n.eq3(2,B,l))}}function en(o,c){if(1&o&&(n.qex(0),n.j41(1,"div",47),n.DNE(2,tn,3,4,"ng-container",25),n.k0s(),n.bVm()),2&o){const l=c.$implicit;n.R7$(2),n.Y8G("ngForOf",l)}}function on(o,c){if(1&o&&(n.qex(0),n.j41(1,"div"),n.nrm(2,"ion-icon",61),n.k0s(),n.j41(3,"small")(4,"b"),n.EFF(5),n.k0s(),n.j41(6,"b"),n.EFF(7),n.k0s()(),n.j41(8,"small",62)(9,"b"),n.EFF(10),n.nI1(11,"translate"),n.k0s()(),n.bVm()),2&o){let l,e;const t=n.XpG().$implicit;n.R7$(4),n.HbH(t.TotalConnectorReady?"text-primary":"text-danger"),n.R7$(),n.JRh(null!==(l=t.TotalConnectorReady)&&void 0!==l?l:0),n.R7$(2),n.SpI("/",null!==(e=t.TotalConnector)&&void 0!==e?e:0,""),n.R7$(3),n.JRh(n.bMT(11,5,"ConnectorReady"))}}function an(o,c){if(1&o&&(n.qex(0),n.j41(1,"div"),n.nrm(2,"ion-icon",63),n.k0s(),n.j41(3,"small")(4,"b"),n.EFF(5),n.k0s()(),n.bVm()),2&o){const l=n.XpG().$implicit,e=n.XpG();n.R7$(3),n.ZvI("ml-1 text-",e.APP_FUNC_GetColor_VLocationStatus(l.VLocationStatus),""),n.R7$(2),n.JRh(l.VLocationStatusName)}}function rn(o,c){if(1&o){const l=n.RV6();n.j41(0,"div",50)(1,"div",51),n.bIt("click",function(t){const a=n.eBV(l).$implicit,i=n.XpG();return n.Njj(i.openDetail(t,a))}),n.j41(2,"div",52)(3,"ion-avatar"),n.nrm(4,"img",53),n.k0s(),n.j41(5,"div",54)(6,"small"),n.EFF(7),n.k0s()()(),n.j41(8,"div",55)(9,"h5",56)(10,"b"),n.EFF(11),n.k0s()(),n.j41(12,"div")(13,"small"),n.EFF(14),n.k0s()()()(),n.j41(15,"div",14),n.DNE(16,on,12,7,"ng-container",8)(17,an,6,4,"ng-container",8),n.k0s(),n.j41(18,"div",57)(19,"small",58),n.EFF(20),n.k0s(),n.j41(21,"ion-button",59),n.bIt("click",function(t){const a=n.eBV(l).$implicit,i=n.XpG();return n.Njj(i.openDirection(t,a))}),n.j41(22,"ion-label"),n.EFF(23),n.nI1(24,"translate"),n.k0s(),n.nrm(25,"ion-icon",60),n.k0s()()()}if(2&o){const l=c.$implicit,e=n.XpG();n.R7$(7),n.SpI("",e.getDistance2CL(l),"km"),n.R7$(4),n.JRh(l.LocName),n.R7$(3),n.JRh(l.LocAddress),n.R7$(2),n.Y8G("ngIf",l.VLocationStatus==e.v_location_status.SanSang),n.R7$(),n.Y8G("ngIf",l.VLocationStatus!=e.v_location_status.SanSang),n.R7$(3),n.JRh(l.ConnectorType),n.R7$(3),n.JRh(n.bMT(24,7,"Direction"))}}const ln=[{path:"",component:(()=>{var o;class c{constructor(e,t,a,i,r){this.router=e,this.modalController=t,this.animationController=a,this.toastController=i,this.loadingController=r,this.api_url=v.c.api_url,this.APP_ROUTE=I._,this.v_location_status=S.Ix,this.APP_FUNC_GetColor_VLocationStatus=x.Bb,this.APP_FUNC_FormatMobileNumber=x.IV,this.paging={sortfield:null,sorttype:null,page:1,limit:9,loading:!1,active:!0},this.filter={},this.currentPosition=v.c.app_default.geolocation.pos,this.chargingLocations=[],this.loadingController.create({message:""}).then(u=>this.loading=u)}ngOnInit(){(0,f.fA)({callback:e=>{null!=e&&e.currentAddress&&(this.currentAddress=null==e?void 0:e.currentAddress)}}),this.refreshData(()=>{this.refreshData_And_CurrentPosition()})}onIonRefresher(e){this.filter={},this.refreshData_And_CurrentPosition(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}resetData(){this.chargingLocations.length=0}pushData(e,t){1==this.paging.page&&(this.chargingLocations.length=0),this.chargingLocations=this.chargingLocations.concat(e),t&&t(this.chargingLocations)}totalData(){return this.chargingLocations.length}refreshData_And_CurrentPosition(e){var t=this;return(0,p.A)(function*(){(yield(0,$.lJ)())&&(0,O.z)({loading:i=>{var r,u;i?null===(r=t.loading)||void 0===r||r.present():null===(u=t.loading)||void 0===u||u.dismiss()},callback:i=>{var r;null!=i&&i.Succeeded&&(t.user=null!==(r=i.Data)&&void 0!==r?r:{})}});let a=()=>{(0,f.Xz)().then(i=>{t.currentPosition=i,t.requestAddress(i),t.refreshData(e)})};_.L.getCurrentPosition({enableHighAccuracy:!0}).then(function(){var i=(0,p.A)(function*(r){if(r.coords){var u={lat:r.coords.latitude,lng:r.coords.longitude};yield(0,f.fj)({params:u})}a()});return function(r){return i.apply(this,arguments)}}()).catch(()=>{a()})})()}refreshData(e){var t=this;return(0,p.A)(function*(){t.filter={},t.paging.page=1,t.paging.active=!0,t.loadData_Paging(e),(0,C.kM)({callback:a=>{null!=a&&a.Succeeded&&(t.notifySumary=a.Data)}})})()}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter={},this.filter.search=e.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,t){this.paging.sortfield=e||null,this.paging.sorttype=t||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var t=this;return(0,p.A)(function*(){if(t.paging.loading=!0,t.filter.search)(0,P.tC)({params:{Search:t.filter.search,PageNumber:t.paging.page,PageSize:t.paging.limit},callback:i=>{var r;t.response=i,null!=i&&i.Succeeded?t.pushData(null!==(r=i.Data)&&void 0!==r?r:[]):(0,F.cX)(t.toastController,{},i).then(u=>u.present()),t.paging.loading=!1,t.paging.active=!(null==i||!i.HasNextPage),e&&e()}});else if(t.filter.ElectricTypeFilter||t.filter.ConnectorTypeFilter||t.filter.VConnectorStatusFilter||t.filter.VChargeSpeed)(0,P.Zd)({params:{ElectricTypeFilter:t.filter.ElectricTypeFilter,ConnectorTypeFilter:t.filter.ConnectorTypeFilter,VConnectorStatusFilter:t.filter.VConnectorStatusFilter,VChargeSpeed:t.filter.VChargeSpeed,PageNumber:t.paging.page,PageSize:t.paging.limit},callback:i=>{var r;t.response=i,null!=i&&i.Succeeded?t.pushData(null!==(r=i.Data)&&void 0!==r?r:[]):(0,F.cX)(t.toastController,{},i).then(u=>u.present()),t.paging.loading=!1,t.paging.active=!(null==i||!i.HasNextPage),e&&e()}});else{var a=yield(0,f.Xz)();(0,P.Bc)({params:{TopLeftLat:a.lat+.1,TopLeftLong:a.lng-.1,RightBottomLat:a.lat-.1,RightBottomLong:a.lng+.1,PageNumber:t.paging.page,PageSize:t.paging.limit},callback:i=>{var r;t.response=i,null!=i&&i.Succeeded?(t.pushData(null!==(r=i.Data)&&void 0!==r?r:[],u=>{u.forEach(b=>{})}),0==t.totalData()&&1==t.paging.page&&(t.filter.VConnectorStatusFilter=S.EF.DangRanh,t.filterChange())):(0,F.cX)(t.toastController,{},i).then(u=>u.present()),t.paging.loading=!1,t.paging.active=!(null==i||!i.HasNextPage),e&&e()}})}})()}get totalNotifyUnread(){var e,t;return null!==(e=null===(t=this.notifySumary)||void 0===t?void 0:t.TotalUnread)&&void 0!==e?e:0}openDirection(e,t){return(0,p.A)(function*(){e.preventDefault(),yield m.P.open({url:(0,x.LZ)(yield(0,f.Xz)(),{lat:null==t?void 0:t.LocLat,lng:null==t?void 0:t.LocLong})})})()}openDetail(e,t){var a=this;return(0,p.A)(function*(){var i,r;a.router.navigateByUrl(I._.CHARGING_LOCATION_DETAIL.replace(":id",null!==(i=null===(r=t.ChargeLocationId)||void 0===r?void 0:r.toString())&&void 0!==i?i:""))})()}getLocImage(e){var t;if(!e.LocImage&&e.LocImages)if("string"==typeof e.LocImages){var a,i;e.LocImage=(null!==(a=(null!==(i=JSON.parse(e.LocImages))&&void 0!==i?i:[])[0])&&void 0!==a?a:{}).imageurl}else{var r,u;e.LocImage=(null!==(r=(null!==(u=e.LocImages)&&void 0!==u?u:[])[0])&&void 0!==r?r:{}).imageurl}return null!==(t=e.LocImage)&&void 0!==t?t:"assets/favicon/favicon.svg"}getDistance2CL(e){return(0,x.Rw)((0,x.GH)(this.currentPosition,{lat:null==e?void 0:e.LocLat,lng:null==e?void 0:e.LocLong}),100)}getFilters(){var e=[];if(this.filter.search&&e.push({type:"Search",value:this.filter.search,text:this.filter.search}),this.filter.ElectricTypeFilter)switch(this.filter.ElectricTypeFilter){case 1:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"AC"});break;case 2:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"DC"});break;case 3:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"AllElectricType"})}if(this.filter.VConnectorStatusFilter)switch(this.filter.VConnectorStatusFilter){case 2500:e.push({type:"VConnectorStatusFilter",value:this.filter.VConnectorStatusFilter,text:"ConnectorReady"});break;case 2599:e.push({type:"VConnectorStatusFilter",value:this.filter.VConnectorStatusFilter,text:"AllConnectorStatus"})}return this.filter.ConnectorTypeFilter&&this.filter.ConnectorTypeFilter.split(";").forEach(t=>{e.push({type:"ConnectorTypeFilter",value:t,text:t})}),this.filter.VChargeSpeed&&S.My._data.filter(t=>t.LookupId==this.filter.VChargeSpeed).forEach(t=>{e.push({type:"VChargeSpeed",value:t.LookupId,text:t.Objectvalue})}),e.length||e.push({type:"Nearby",value:"Nearby",text:"Nearby"}),e}clearFilter(e,t){var a=this;return(0,p.A)(function*(){if("Search"==t.type)a.filter.search=void 0;else if("ElectricTypeFilter"==t.type)a.filter.ElectricTypeFilter=void 0;else if("VConnectorStatusFilter"==t.type)a.filter.VConnectorStatusFilter=void 0;else if("ConnectorTypeFilter"==t.type){var i;a.filter.ConnectorTypeFilter=null===(i=a.filter.ConnectorTypeFilter)||void 0===i?void 0:i.split(";").filter(r=>r!=t.value).join(";")}else"VChargeSpeed"==t.type&&(a.filter.VChargeSpeed=void 0);a.filterChange()})()}get getChargingLocationss(){this.chargingLocations.forEach(r=>{r.Distance2CL=this.getDistance2CL(r)});var e=this.chargingLocations.sort((r,u)=>{var b,L;return(null!==(b=r.Distance2CL)&&void 0!==b?b:0)-(null!==(L=u.Distance2CL)&&void 0!==L?L:0)}),t=[];for(let r=0,u=Math.ceil(e.length/3);r<u;r++)t.push(e.slice(3*r,3*r+3));return console.log(t),t}refreshCurrentPosition(e){var t=this;return(0,p.A)(function*(){_.L.getCurrentPosition({enableHighAccuracy:!0}).then(function(){var a=(0,p.A)(function*(i){if(i.coords){var r={lat:i.coords.latitude,lng:i.coords.longitude};yield(0,f.fj)({params:r}),t.refreshData()}});return function(i){return a.apply(this,arguments)}}())})()}presentModalFilterChargingLocationComponent(e){var t=this;return(0,p.A)(function*(){const a=yield t.modalController.create({component:y.T,componentProps:{filter:Object.assign({},t.filter,{search:null})},backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-filter",enterAnimation:i=>(0,F.l9)(t.animationController,i),leaveAnimation:i=>(0,F.CV)(t.animationController,i)});a.onDidDismiss().then(i=>{"clear"==i.role?(t.filter={},t.filterChange()):"submit"==i.role&&(t.filter=i.data,t.filterChange())}),a.present()})()}presentModalNotify(e){var t=this;return(0,p.A)(function*(){(0,F.He)(t.modalController,t.animationController,{router:t.router,fnDismiss:()=>{(0,C.kM)({callback:a=>{null!=a&&a.Succeeded&&(t.notifySumary=a.Data)}})}})})()}presentModalVoice(e){var t=this;return(0,p.A)(function*(){const a=yield t.modalController.create({component:s.t,backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-breakpoint",initialBreakpoint:.75});a.onDidDismiss().then(i=>{"success"==i.role&&i.data&&(t.filter.search=i.data,t.filterChange())}),a.present()})()}requestAddress(e){(0,k.S)({params:{lat:e.lat,lng:e.lng},callback:t=>{var a,i,r;"OK"==(null==t?void 0:t.status)&&(this.currentAddress=null!==(a=(null!==(i=t.results[0])&&void 0!==i?i:{}).formatted_address)&&void 0!==a?a:null===(r=t.plus_code)||void 0===r?void 0:r.compound_code,(0,f.RR)({params:{currentAddress:this.currentAddress}}))}})}}return(o=c).\u0275fac=function(e){return new(e||o)(n.rXU(T.Ix),n.rXU(d.W3),n.rXU(d.Hx),n.rXU(d.K_),n.rXU(d.Xi))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-home"]],decls:80,vars:46,consts:[["templateChargingLocation",""],["color","primary"],[1,"container","px-0","d-flex","align-items-center"],[3,"src"],[1,"flex-grow-1","px-2","text-white"],[1,"pl-2","position-relative"],[1,"btn-notify",3,"click"],["src","../../../assets/icon/ion-icon/bell.svg"],[4,"ngIf"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"bg-primary"],[1,"container","container-location","pb-3"],[1,"mb-1","text-white"],[1,"d-flex","align-items-center"],[1,"col","px-0"],["color","light"],["src","../../../assets/icon/ion-icon/location.svg"],["class","current-address",4,"ngIf"],[3,"click"],["color","dark","src","../../../assets/icon/ion-icon/microphone.svg"],[1,"col-auto","pl-2","pr-0"],["src","../../../assets/icon/ion-icon/filter.svg"],[1,"container","container-charging-location","pt-3","pb-3","mt-2","mb-3"],[1,"row","flex-nowrap","overflow-auto"],[4,"ngFor","ngForOf"],[1,"container","pb-5"],[1,"card-company","rounded","bg-white"],[1,"table","table-borderless","m-0"],[3,"innerHTML"],[1,"text-dark",3,"href","innerHTML"],[1,"position-absolute","notify-unread"],[1,"notify-circle-num"],[1,"current-address"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","mt-3"],[1,"row","flex-nowrap","mt-3","list-filters","overflow-auto","text-nowrap"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["mode","ios","size","small","shape","round","color","primary",3,"click"],["slot","start","src","../../../assets/icon/ion-icon/locate-outline.svg"],["slot","end","name","close-outline"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6"],[1,"mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card-day","bg-white","p-3"],[1,"d-flex","align-items-start","cursor-pointer",3,"click"],[1,"col-auto","px-0"],["src","../../../assets/favicon/favicon.png"],[1,"text-danger","text-center"],[1,"col","pl-2","pr-0"],[1,"mt-0","mb-1"],[1,"d-flex","justify-content-between","mt-2"],[1,"align-self-end","text-muted"],["size","small","shape","round","color","primary",3,"click"],["src","../../../assets/icon/ion-icon/direction.svg","slot","end"],["color","primary","src","../../../assets/icon/ion-icon/electric.svg",1,"fs-4"],[1,"ml-2"],["color","primary","src","../../../assets/icon/ion-icon/changing-station.svg",1,"fs-4"]],template:function(e,t){if(1&e){const a=n.RV6();n.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"div",2)(3,"div")(4,"ion-thumbnail"),n.nrm(5,"img",3),n.k0s()(),n.j41(6,"div",4)(7,"small"),n.EFF(8),n.nI1(9,"translate"),n.k0s(),n.j41(10,"h6"),n.EFF(11),n.nI1(12,"translate"),n.k0s()(),n.j41(13,"div"),n.nrm(14,"app-select-language"),n.k0s(),n.j41(15,"div",5)(16,"ion-button",6),n.bIt("click",function(r){return n.eBV(a),n.Njj(t.presentModalNotify(r))}),n.nrm(17,"ion-icon",7),n.k0s(),n.DNE(18,Y,6,1,"ng-container",8),n.k0s()()()(),n.j41(19,"ion-content",9)(20,"ion-refresher",10),n.bIt("ionRefresh",function(r){return n.eBV(a),n.Njj(t.onIonRefresher(r))}),n.nrm(21,"ion-refresher-content"),n.k0s(),n.j41(22,"div",11)(23,"div",12)(24,"div",13)(25,"small"),n.EFF(26),n.nI1(27,"translate"),n.k0s()(),n.j41(28,"div",14)(29,"div",15)(30,"ion-chip",16)(31,"span"),n.nrm(32,"ion-icon",17),n.k0s(),n.j41(33,"ion-label"),n.DNE(34,J,5,1,"div",18),n.k0s(),n.j41(35,"ion-button",19),n.bIt("click",function(r){return n.eBV(a),n.Njj(t.presentModalVoice(r))}),n.nrm(36,"ion-icon",20),n.k0s()()(),n.j41(37,"div",21)(38,"ion-button",19),n.bIt("click",function(r){return n.eBV(a),n.Njj(t.presentModalFilterChargingLocationComponent(r))}),n.nrm(39,"ion-icon",22),n.k0s()()()()(),n.DNE(40,z,3,0,"ng-container",8)(41,q,4,1,"ng-container",8)(42,nn,6,3,"ng-container",8),n.j41(43,"div",23)(44,"div",24),n.DNE(45,en,3,1,"ng-container",25),n.k0s()(),n.j41(46,"div",26)(47,"div",27)(48,"b"),n.EFF(49),n.nI1(50,"translate"),n.k0s(),n.nrm(51,"hr"),n.j41(52,"table",28)(53,"tr")(54,"td"),n.EFF(55),n.nI1(56,"translate"),n.k0s(),n.j41(57,"td"),n.nrm(58,"b",29),n.nI1(59,"translate"),n.k0s()(),n.j41(60,"tr")(61,"td"),n.EFF(62),n.nI1(63,"translate"),n.k0s(),n.j41(64,"td")(65,"b"),n.nrm(66,"a",30),n.nI1(67,"translate"),n.nI1(68,"translate"),n.k0s()()(),n.j41(69,"tr")(70,"td"),n.EFF(71),n.nI1(72,"translate"),n.k0s(),n.j41(73,"td")(74,"b"),n.nrm(75,"a",30),n.nI1(76,"translate"),n.nI1(77,"translate"),n.k0s()()()()()()(),n.DNE(78,rn,26,9,"ng-template",null,0,n.C5r)}if(2&e){let a;n.R7$(5),n.Y8G("src",null!=t.user&&t.user.Avatar?t.api_url+"readfile/"+(null==t.user?null:t.user.Avatar):"assets/icon/ion-img/no-avatar.svg",n.B4B),n.R7$(3),n.SpI("",n.bMT(9,22,"Wellcome"),","),n.R7$(3),n.JRh(null!==(a=null==t.user?null:t.user.FullName)&&void 0!==a?a:n.bMT(12,24,"Customers")),n.R7$(7),n.Y8G("ngIf",t.totalNotifyUnread),n.R7$(),n.Y8G("fullscreen",!0),n.R7$(7),n.JRh(n.bMT(27,26,"CurrentLocation")),n.R7$(8),n.Y8G("ngIf",t.currentAddress),n.R7$(6),n.Y8G("ngIf",!t.response),n.R7$(),n.Y8G("ngIf",t.response),n.R7$(),n.Y8G("ngIf",t.response&&!t.chargingLocations.length),n.R7$(3),n.Y8G("ngForOf",t.getChargingLocationss),n.R7$(4),n.JRh(n.bMT(50,28,"ContactInfo")),n.R7$(6),n.JRh(n.bMT(56,30,"Company")),n.R7$(3),n.Y8G("innerHTML",n.bMT(59,32,"CompanyName"),n.npT),n.R7$(4),n.JRh(n.bMT(63,34,"Hotline")),n.R7$(4),n.Mz_("href","tel:",n.bMT(67,36,"CompanyMobile"),"",n.B4B),n.Y8G("innerHTML",t.APP_FUNC_FormatMobileNumber(n.bMT(68,38,"CompanyMobile")),n.npT),n.R7$(5),n.JRh(n.bMT(72,40,"Email")),n.R7$(4),n.Mz_("href","mailto:",n.bMT(76,42,"CompanyEmail"),"",n.B4B),n.Y8G("innerHTML",n.bMT(77,44,"CompanyEmail"),n.npT)}},dependencies:[h.Sq,h.bT,h.T3,h.ux,h.e1,h.fG,d.mC,d.Jm,d.ZB,d.W9,d.eU,d.iq,d.KW,d.he,d.To,d.Ki,d.w2,d.Zx,d.ai,X,E.D9],styles:["ion-header[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 2.5rem;--border-radius: 50%;border:1px solid var(--ion-color-light);margin:auto;background:var(--ion-color-light)}ion-header[_ngcontent-%COMP%]   .btn-language[_ngcontent-%COMP%]{min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;--border-width: 1px;--border-style: solid;--border-color: rgb(229, 229, 229, .8);--background: var(--ion-color-light);--color: var(--ion-color-primary)}ion-header[_ngcontent-%COMP%]   .btn-notify[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;--border-width: 1px;--border-style: solid;--border-color: rgb(229, 229, 229, .8);--background: var(--ion-color-light);--color: var(--ion-color-primary)}ion-header[_ngcontent-%COMP%]   app-select-language[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-light)}ion-header[_ngcontent-%COMP%]   .notify-unread[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem}ion-header[_ngcontent-%COMP%]   .notify-unread[_ngcontent-%COMP%]   .notify-circle-num[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:1.25rem;height:1.25rem;border-radius:100%;background-color:var(--ion-color-danger);color:var(--ion-color-danger-contrast)}ion-header[_ngcontent-%COMP%]   .notify-unread[_ngcontent-%COMP%]   .notify-circle-num[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;align-items:center;justify-content:center}ion-header[_ngcontent-%COMP%]   .notify-unread[_ngcontent-%COMP%]   .notify-circle-num[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:.555rem;line-height:1}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{margin:0;width:100%;min-height:2.5rem;border-radius:2.5rem;padding-inline-start:.5rem;padding-inline-end:.5rem;background:var(--ion-color-light);color:var(--ion-color-medium);padding-inline-end:.25rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;margin-right:.25rem;font-size:1rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{flex-grow:1}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2rem;min-height:2rem;margin-left:.5rem;--box-shadow: none;--border-width: 0}.container-location[_ngcontent-%COMP%]   .current-address[_ngcontent-%COMP%]{position:relative}.container-location[_ngcontent-%COMP%]   .current-address[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:translateY(-50%);position:absolute;top:50%;left:0;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.container-location[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;--border-width: 1px;--border-style: solid;--border-color: rgb(229, 229, 229, .8);--background: var(--ion-color-light);--color: var(--ion-color-primary)}.container-charging-location[_ngcontent-%COMP%]{border-top-left-radius:1rem;border-top-right-radius:1rem;background-color:var(--ion-color-light)}.card-day[_ngcontent-%COMP%]{border:1px solid var(--ion-color-gray);border-radius:1rem}.card-day[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:2rem;height:2rem}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:0 .5rem .5rem 0}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[slot=end][_ngcontent-%COMP%]{color:var(--ion-color-danger)}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:first-child{margin-left:1rem}.card-company[_ngcontent-%COMP%]{padding:1rem}.card-company.rounded[_ngcontent-%COMP%]{border-radius:1.5rem!important}.card-company[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{border-style:dashed!important}.card-company[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}.card-company[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{padding-left:0;padding-right:.5rem;color:var(ion-color-medium)}.card-company[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;white-space:nowrap;text-align:right}"]}),c})()}];let cn=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[T.iI.forChild(ln),T.iI]}),c})();var sn=g(3584);let gn=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[h.MD,R.YN,d.bv,cn,sn.x]}),c})()}}]);