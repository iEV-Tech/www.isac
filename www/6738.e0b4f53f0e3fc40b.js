"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6738],{1038:(A,R,d)=>{d.d(R,{v:()=>p});var h=d(467),S=d(5972);const p=function(){var F=(0,h.A)(function*(c){c.params=c.params||{};var n=[];c.params.subFolder&&(c.params.subFolder=c.params.subFolder.replace(/[^a-zA-Z0-9\/]/gm,"").replace(/\/+/gm,"/").replace(/^\//,"").replace(/\/$/,""),c.params.subFolder&&n.push(c.params.subFolder)),c.params.isconvertvideo=!!c.params.isconvertvideo,c.params.isconvertpdf2image=!!c.params.isconvertpdf2image,c.params.isconvertoffice2image=!!c.params.isconvertoffice2image,c.params.isresizeimage=!!c.params.isresizeimage;const s=new FormData;s.append("path",n.join("/")),s.append("types",c.params.fileType||null),s.append("file",c.params.file||null),s.append("base64",c.params.base64||!1),s.append("isconvertvideo",c.params.isconvertvideo),s.append("isconvertpdf2image",c.params.isconvertpdf2image),s.append("isconvertoffice2image",c.params.isconvertoffice2image),s.append("isresizeimage",c.params.isresizeimage),(0,S.ZD)({url:"files",params:s,success:m=>{"function"==typeof c.callback&&c.callback(m.data||null)},error:m=>{"function"==typeof c.callback&&c.callback(),console.error(c,m)},loading:c.loading})});return function(n){return F.apply(this,arguments)}}()},9946:(A,R,d)=>{d.d(R,{ks:()=>F,sh:()=>c,z:()=>p});var h=d(467),S=d(5972);const p=function(){var n=(0,h.A)(function*(s){s.params=s.params||{},(0,S.hm)({url:"api/User/get-user",params:{},success:m=>{"function"==typeof s.callback&&s.callback(m.data||null)},error:m=>{var _;"function"==typeof s.callback&&s.callback(null==m||null===(_=m.response)||void 0===_?void 0:_.data),console.error(m)},loading:s.loading})});return function(m){return n.apply(this,arguments)}}(),F=function(){var n=(0,h.A)(function*(s){var m,_,C,y,x,b;s.params=s.params||{},(0,S.IH)({url:"api/User/update-user",params:{UserId:null!==(m=s.params.UserId)&&void 0!==m?m:null,FullName:null!==(_=s.params.FullName)&&void 0!==_?_:null,Address:null!==(C=s.params.Address)&&void 0!==C?C:null,Gender:null!==(y=s.params.Gender)&&void 0!==y?y:null,Birthday:null!==(x=s.params.Birthday)&&void 0!==x?x:null,PersonEmail:null!==(b=s.params.Email)&&void 0!==b?b:null},success:P=>{"function"==typeof s.callback&&s.callback(P.data||null)},error:P=>{var E;"function"==typeof s.callback&&s.callback(null==P||null===(E=P.response)||void 0===E?void 0:E.data),console.error(P)},loading:s.loading})});return function(m){return n.apply(this,arguments)}}(),c=function(){var n=(0,h.A)(function*(s){var m,_;s.params=s.params||{},(0,S.IH)({url:"api/User/update-avatar",params:{UserId:null!==(m=s.params.UserId)&&void 0!==m?m:null,Avatar:null!==(_=s.params.Avatar)&&void 0!==_?_:null},success:C=>{"function"==typeof s.callback&&s.callback(C.data||null)},error:C=>{var y;"function"==typeof s.callback&&s.callback(null==C||null===(y=C.response)||void 0===y?void 0:y.data),console.error(C)},loading:s.loading})});return function(m){return n.apply(this,arguments)}}()},6738:(A,R,d)=>{d.r(R),d.d(R,{HomePageModule:()=>mn});var h=d(177),S=d(9417),p=d(8974),F=d(2175),c=d(467),n=d(4438),s=d(2385),m=d(4397),_=d(7392),C=d(5083),y=d(7762),x=d(5312),b=d(3801),P=d(6841),E=d(4470),D=d(7168),N=d(1038),j=d(9946),G=d(6539),T=d(8517),M=d(8650),O=d(3588),I=d(8833),k=d(119),V=d(4842);function $(a,g){1&a&&(n.qex(0),n.nrm(1,"img",5),n.bVm())}function H(a,g){1&a&&(n.qex(0),n.nrm(1,"img",6),n.bVm())}function U(a,g){1&a&&(n.qex(0),n.j41(1,"ion-label",10),n.EFF(2,"Ti\u1ebfng Vi\u1ec7t"),n.k0s(),n.j41(3,"ion-avatar",11),n.nrm(4,"img",5),n.k0s(),n.bVm())}function w(a,g){1&a&&(n.qex(0),n.j41(1,"ion-label",10),n.EFF(2,"English"),n.k0s(),n.j41(3,"ion-avatar",11),n.nrm(4,"img",6),n.k0s(),n.bVm())}function B(a,g){if(1&a){const l=n.RV6();n.j41(0,"ion-item",9),n.bIt("click",function(e){const o=n.eBV(l).$implicit,i=n.XpG(2);return n.Njj(i.changeLang(e,o))}),n.qex(1,1),n.DNE(2,U,5,0,"ng-container",3)(3,w,5,0,"ng-container",3),n.bVm(),n.k0s()}if(2&a){const l=g.$implicit;n.R7$(),n.Y8G("ngSwitch",l),n.R7$(),n.Y8G("ngSwitchCase","vi"),n.R7$(),n.Y8G("ngSwitchCase","en")}}function X(a,g){if(1&a&&(n.j41(0,"ion-list",7),n.DNE(1,B,4,3,"ion-item",8),n.k0s()),2&a){const l=n.XpG();n.R7$(),n.Y8G("ngForOf",l.translates)}}k.config({driver:[k.INDEXEDDB,k.LOCALSTORAGE,k.WEBSQL],name:"_config",version:1});const Y={create:(a=(0,c.A)(function*(){return k}),function(){return a.apply(this,arguments)}),get:function(){var a=(0,c.A)(function*(g){return k.getItem(g)});return function(l){return a.apply(this,arguments)}}(),set:function(){var a=(0,c.A)(function*(g,l){return k.setItem(g,l)});return function(l,t){return a.apply(this,arguments)}}()};var a;let z=(()=>{var a;class g{constructor(t){var e=this;this.translateService=t,this.changeLang=function(){var o=(0,c.A)(function*(i,r){var u,f;(r=null!==(u=r)&&void 0!==u?u:null==i||null===(f=i.target)||void 0===f?void 0:f.value)&&(e.translate.use(r),yield Y.set("lang",r),window.location.reload())});return function(i,r){return o.apply(this,arguments)}}(),this.translate=t,this.translates=t.getLangs()}ngOnInit(){}}return(a=g).\u0275fac=function(t){return new(t||a)(n.rXU(V.c$))},a.\u0275cmp=n.VBU({type:a,selectors:[["app-select-language"]],decls:8,vars:3,consts:[["id","click-trigger","shape","clear"],[3,"ngSwitch"],["name","caret-down-outline"],[4,"ngSwitchCase"],["trigger","click-trigger","triggerAction","click","side","bottom","alignment","center","dismiss-on-select","true"],["src","../../../../assets/i18n/flag/vi-VN.svg"],["src","../../../../assets/i18n/flag/en-US.svg"],["mode","ios","lines","none"],["button","","detail","false",3,"click",4,"ngFor","ngForOf"],["button","","detail","false",3,"click"],["slot","start"],["slot","end",1,"mr-0"]],template:function(t,e){1&t&&(n.j41(0,"ion-button",0),n.qex(1,1),n.nrm(2,"ion-icon",2),n.j41(3,"ion-avatar"),n.DNE(4,$,2,0,"ng-container",3)(5,H,2,0,"ng-container",3),n.k0s(),n.bVm(),n.k0s(),n.j41(6,"ion-popover",4),n.DNE(7,X,2,1,"ng-template"),n.k0s()),2&t&&(n.R7$(),n.Y8G("ngSwitch",e.translate.currentLang),n.R7$(3),n.Y8G("ngSwitchCase","vi"),n.R7$(),n.Y8G("ngSwitchCase","en"))},dependencies:[h.Sq,h.ux,h.e1,p.mC,p.Jm,p.iq,p.uz,p.he,p.nf,p.CF],styles:["ion-button[_ngcontent-%COMP%]{min-height:auto;margin:0;--padding-top: 0;--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--box-shadow: none}ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.25rem;font-size:1rem;color:var(--ion-color-light)}ion-button[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{border-radius:50%;width:2rem;height:2rem;border:1px solid rgba(229,229,229,.8)}ion-popover[_ngcontent-%COMP%]{--width: auto}ion-popover[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2.5rem;color:var(--ion-color-dark)}ion-popover[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0;white-space:nowrap}"]}),g})();const J=["spyElement"],K=()=>["android","ios"],W=a=>({$implicit:a});function Z(a,g){if(1&a&&(n.qex(0),n.j41(1,"div",36)(2,"div",37)(3,"div")(4,"div"),n.EFF(5),n.k0s()()()(),n.bVm()),2&a){const l=n.XpG();n.R7$(5),n.JRh(l.totalNotifyUnread<100?l.totalNotifyUnread:"99+")}}function Q(a,g){if(1&a){const l=n.RV6();n.j41(0,"ion-button",8),n.bIt("click",function(e){n.eBV(l);const o=n.XpG();return n.Njj(o.presentModalVoice(e))}),n.nrm(1,"ion-icon",38),n.k0s()}}function q(a,g){1&a&&(n.qex(0),n.j41(1,"div",39),n.nrm(2,"ion-spinner",40),n.k0s(),n.bVm())}function nn(a,g){1&a&&(n.qex(0),n.j41(1,"div",41),n.nrm(2,"ion-img",42),n.j41(3,"div",43),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.bVm()),2&a&&(n.R7$(4),n.JRh(n.bMT(5,1,"DataNotFound")))}function en(a,g){if(1&a&&(n.qex(0),n.j41(1,"b"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.bVm()),2&a){const l=n.XpG().$implicit;n.R7$(2),n.JRh(n.bMT(3,1,l.text))}}function tn(a,g){if(1&a){const l=n.RV6();n.qex(0),n.j41(1,"ion-button",47),n.bIt("click",function(e){n.eBV(l);const o=n.XpG().$implicit,i=n.XpG();return n.Njj(i.clearFilter(e,o))}),n.j41(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.nrm(5,"ion-icon",48),n.k0s(),n.bVm()}if(2&a){const l=n.XpG().$implicit;n.R7$(3),n.JRh(n.bMT(4,1,l.text))}}function on(a,g){if(1&a){const l=n.RV6();n.qex(0),n.j41(1,"ion-button",47),n.bIt("click",function(e){n.eBV(l);const o=n.XpG().$implicit,i=n.XpG();return n.Njj(i.clearFilter(e,o))}),n.j41(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.nrm(5,"ion-icon",48),n.k0s(),n.bVm()}if(2&a){const l=n.XpG().$implicit;n.R7$(3),n.JRh(n.bMT(4,1,l.text))}}function an(a,g){if(1&a&&(n.qex(0)(1,44),n.DNE(2,en,4,3,"ng-container",45)(3,tn,6,3,"ng-container",45)(4,on,6,3,"ng-container",46),n.bVm()()),2&a){const l=g.$implicit;n.R7$(),n.Y8G("ngSwitch",l.type),n.R7$(),n.Y8G("ngSwitchCase","Nearby"),n.R7$(),n.Y8G("ngSwitchCase","Search")}}function rn(a,g){if(1&a&&(n.qex(0),n.j41(1,"div",49),n.eu8(2,50),n.k0s(),n.bVm()),2&a){const l=g.$implicit;n.XpG();const t=n.sdS(56);n.R7$(2),n.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",n.eq3(2,W,l))}}function ln(a,g){if(1&a){const l=n.RV6();n.j41(0,"ion-infinite-scroll",51),n.bIt("ionInfinite",function(e){n.eBV(l);const o=n.XpG();return n.Njj(o.onIonInfinite(e))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}function cn(a,g){if(1&a&&(n.qex(0),n.nrm(1,"ion-icon",65),n.j41(2,"small")(3,"b"),n.EFF(4),n.k0s(),n.j41(5,"b",66),n.EFF(6),n.k0s()(),n.j41(7,"small",67)(8,"b",66),n.EFF(9),n.nI1(10,"translate"),n.k0s()(),n.bVm()),2&a){let l,t;const e=n.XpG().$implicit;n.R7$(3),n.HbH(e.TotalConnectorReady?"text-primary":"text-danger"),n.R7$(),n.JRh(null!==(l=e.TotalConnectorReady)&&void 0!==l?l:0),n.R7$(2),n.SpI("/",null!==(t=e.TotalConnector)&&void 0!==t?t:0,""),n.R7$(3),n.JRh(n.bMT(10,5,"ConnectorReady"))}}function sn(a,g){if(1&a&&(n.qex(0),n.nrm(1,"ion-icon",68),n.j41(2,"small")(3,"b"),n.EFF(4),n.k0s()(),n.bVm()),2&a){const l=n.XpG().$implicit,t=n.XpG();n.R7$(2),n.ZvI("ml-1 text-",t.APP_FUNC_GetColor_VLocationStatus(l.VLocationStatus),""),n.R7$(2),n.JRh(l.VLocationStatusName)}}function gn(a,g){if(1&a){const l=n.RV6();n.j41(0,"div",52)(1,"div",53),n.bIt("click",function(e){const o=n.eBV(l).$implicit,i=n.XpG();return n.Njj(i.openDetail(e,o))}),n.j41(2,"div",54)(3,"ion-avatar"),n.nrm(4,"img",55),n.k0s(),n.j41(5,"div",56)(6,"small"),n.EFF(7),n.k0s()()(),n.j41(8,"div",57)(9,"h5",58)(10,"b"),n.EFF(11,"\xa0"),n.k0s(),n.j41(12,"div",59)(13,"b"),n.EFF(14),n.k0s()()(),n.j41(15,"div",60)(16,"small"),n.EFF(17,"\xa0"),n.k0s(),n.j41(18,"div",59)(19,"small"),n.EFF(20),n.k0s()()()()(),n.j41(21,"div",18),n.DNE(22,cn,11,7,"ng-container",14)(23,sn,5,4,"ng-container",14),n.k0s(),n.j41(24,"div",61)(25,"small",62),n.EFF(26),n.k0s(),n.j41(27,"ion-button",63),n.bIt("click",function(e){const o=n.eBV(l).$implicit,i=n.XpG();return n.Njj(i.openDirection(e,o))}),n.j41(28,"ion-label"),n.EFF(29),n.nI1(30,"translate"),n.k0s(),n.nrm(31,"ion-icon",64),n.k0s()()()}if(2&a){const l=g.$implicit,t=n.XpG();n.R7$(7),n.SpI("",l.Distance2CL,"km"),n.R7$(7),n.JRh(l.LocName),n.R7$(6),n.JRh(l.LocAddress),n.R7$(2),n.Y8G("ngIf",l.VLocationStatus==t.v_location_status.SanSang),n.R7$(),n.Y8G("ngIf",l.VLocationStatus!=t.v_location_status.SanSang),n.R7$(3),n.JRh(l.ConnectorType),n.R7$(3),n.JRh(n.bMT(30,7,"Direction"))}}const dn=[{path:"",component:(()=>{var a;class g{constructor(t,e,o,i,r){this.router=t,this.modalController=e,this.animationController=o,this.toastController=i,this.loadingController=r,this.platform=C.Ii.getPlatform(),this.api_url=x.c.api_url,this.APP_ROUTE=I._,this.v_location_status=O.Ix,this.APP_FUNC_GetColor_VLocationStatus=T.Bb,this.APP_FUNC_FormatMobileNumber=T.IV,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.currentPosition=x.c.app_default.geolocation.pos,this.chargingLocations=[],this.scrollTopOld=0,this.scrollTopNew=0,this.spyScrollActiveElement=1,this.spyScrolling=!1,this.spyScrollStep=30,this.loadingController.create({message:""}).then(u=>this.loading=u)}ngOnInit(){(0,b.fA)({callback:t=>{null!=t&&t.currentAddress&&(this.currentAddress=null==t?void 0:t.currentAddress)}}),(0,G.lJ)().then(t=>{t&&((0,j.z)({loading:e=>{var o,i;e?null===(o=this.loading)||void 0===o||o.present():null===(i=this.loading)||void 0===i||i.dismiss()},callback:e=>{var o;null!=e&&e.Succeeded&&(this.user=null!==(o=e.Data)&&void 0!==o?o:{})}}),(0,D.kM)({callback:e=>{null!=e&&e.Succeeded&&(this.notifySumary=e.Data)}}))}),this.refreshData(()=>{this.refreshData_And_CurrentPosition()})}onIonRefresher(t){this.filter={},this.refreshData_And_CurrentPosition(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}resetData(){this.chargingLocations.length=0}pushData(t,e){1==this.paging.page&&(this.chargingLocations.length=0),this.chargingLocations=this.chargingLocations.concat(t).filter(o=>o.VLocationStatus==O.Ix.SanSang).map(o=>(o.Distance2CL=parseFloat((0,T.GH)(this.currentPosition,{lat:null==o?void 0:o.LocLat,lng:null==o?void 0:o.LocLong}).toFixed(2)),o)).sort((o,i)=>{var r,u;return(null!==(r=o.Distance2CL)&&void 0!==r?r:0)-(null!==(u=i.Distance2CL)&&void 0!==u?u:0)}),e&&e(this.chargingLocations)}totalData(){return this.chargingLocations.length}refreshData_And_CurrentPosition(t){var e=this;return(0,c.A)(function*(){let o=()=>{(0,b.Xz)().then(i=>{e.currentPosition=i,e.requestAddress(i),e.refreshData(t)})};y.L.getCurrentPosition({enableHighAccuracy:!0}).then(function(){var i=(0,c.A)(function*(r){if(r.coords){var u={lat:r.coords.latitude,lng:r.coords.longitude};yield(0,b.fj)({params:u})}o()});return function(r){return i.apply(this,arguments)}}()).catch(()=>{o()})})()}refreshData(t){var e=this;return(0,c.A)(function*(){e.filter={},e.paging.page=1,e.paging.active=!0,e.loadData_Paging(t)})()}loadMore(t){this.paging.page+=1,this.loadData_Paging(t)}searchChange(t){this.filter={},this.filter.search=t.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(t,e){this.paging.sortfield=t||null,this.paging.sorttype=e||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(t){var e=this;return(0,c.A)(function*(){if(e.paging.loading=!0,e.filter.search)(0,P.tC)({params:{Search:e.filter.search,PageNumber:e.paging.page,PageSize:e.paging.limit},callback:i=>{var r;e.response=i,null!=i&&i.Succeeded?e.pushData(null!==(r=i.Data)&&void 0!==r?r:[]):(0,M.cX)(e.toastController,{},i).then(u=>u.present()),e.paging.loading=!1,e.paging.active=!(null==i||!i.HasNextPage),t&&t()}});else if(e.filter.ElectricTypeFilter||e.filter.ConnectorTypeFilter||e.filter.VConnectorStatusFilter||e.filter.VChargeSpeed)(0,P.Zd)({params:{ElectricTypeFilter:e.filter.ElectricTypeFilter,ConnectorTypeFilter:e.filter.ConnectorTypeFilter,VConnectorStatusFilter:e.filter.VConnectorStatusFilter,VChargeSpeed:e.filter.VChargeSpeed,PageNumber:e.paging.page,PageSize:e.paging.limit},callback:i=>{var r;e.response=i,null!=i&&i.Succeeded?e.pushData(null!==(r=i.Data)&&void 0!==r?r:[]):(0,M.cX)(e.toastController,{},i).then(u=>u.present()),e.paging.loading=!1,e.paging.active=!(null==i||!i.HasNextPage),t&&t()}});else{var o=yield(0,b.Xz)();(0,P.Bc)({params:{TopLeftLat:o.lat+.1,TopLeftLong:o.lng-.1,RightBottomLat:o.lat-.1,RightBottomLong:o.lng+.1,PageNumber:e.paging.page,PageSize:e.paging.limit},callback:i=>{var r;e.response=i,null!=i&&i.Succeeded?(e.pushData(null!==(r=i.Data)&&void 0!==r?r:[]),0==e.totalData()&&1==e.paging.page&&(e.filter.VConnectorStatusFilter=O.EF.DangRanh,e.filterChange())):(0,M.cX)(e.toastController,{},i).then(u=>u.present()),e.paging.loading=!1,e.paging.active=!(null==i||!i.HasNextPage),t&&t()}})}})()}get totalNotifyUnread(){var t,e;return null!==(t=null===(e=this.notifySumary)||void 0===e?void 0:e.TotalUnread)&&void 0!==t?t:0}changeAvatar(t){var e=this;return(0,c.A)(function*(){(0,T.oG)({accept:"image/*"},o=>{(0,N.v)({loading:i=>{var r,u;i?null===(r=e.loading)||void 0===r||r.present():null===(u=e.loading)||void 0===u||u.dismiss()},params:{file:o[0],subFolder:"avatar",fileType:"image"},callback:i=>{var r;0==(null==i?void 0:i.ReturnCode)&&(0,j.sh)({loading:u=>{var f,v;u?null===(f=e.loading)||void 0===f||f.present():null===(v=e.loading)||void 0===v||v.dismiss()},params:{UserId:null===(r=e.user)||void 0===r?void 0:r.UserId,Avatar:`${i.path}/${i.file.name}`},callback:u=>{null!=u&&u.Succeeded?(0,j.z)({loading:f=>{var v,L;f?null===(v=e.loading)||void 0===v||v.present():null===(L=e.loading)||void 0===L||L.dismiss()},callback:f=>{var v;null!=f&&f.Succeeded&&(e.user=null!==(v=f.Data)&&void 0!==v?v:{})}}):(0,M.cX)(e.toastController,{},u).then(f=>f.present())}})}})})})()}navigateByUrl(t){var e=this;return(0,c.A)(function*(){e.router.navigateByUrl(t)})()}navigateToMap(){var t=this;return(0,c.A)(function*(){t.router.navigateByUrl(I._.TABS_MAP)})()}openDirection(t,e){return(0,c.A)(function*(){t.preventDefault(),yield _.P.open({url:(0,T.LZ)(yield(0,b.Xz)(),{lat:null==e?void 0:e.LocLat,lng:null==e?void 0:e.LocLong})})})()}openDetail(t,e){var o=this;return(0,c.A)(function*(){var i,r;o.navigateByUrl(I._.CHARGING_LOCATION_DETAIL.replace(":id",null!==(i=null===(r=e.ChargeLocationId)||void 0===r?void 0:r.toString())&&void 0!==i?i:""))})()}getLocImage(t){var e;if(!t.LocImage&&t.LocImages)if("string"==typeof t.LocImages){var o,i;t.LocImage=(null!==(o=(null!==(i=JSON.parse(t.LocImages))&&void 0!==i?i:[])[0])&&void 0!==o?o:{}).imageurl}else{var r,u;t.LocImage=(null!==(r=(null!==(u=t.LocImages)&&void 0!==u?u:[])[0])&&void 0!==r?r:{}).imageurl}return null!==(e=t.LocImage)&&void 0!==e?e:"assets/favicon/favicon.svg"}getDistance2CL(t){return(0,T.Rw)((0,T.GH)(this.currentPosition,{lat:null==t?void 0:t.LocLat,lng:null==t?void 0:t.LocLong}),100)}getFilters(){var t=[];if(this.filter.search&&t.push({type:"Search",value:this.filter.search,text:this.filter.search}),this.filter.ElectricTypeFilter)switch(this.filter.ElectricTypeFilter){case 1:t.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"AC"});break;case 2:t.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"DC"});break;case 3:t.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"AllElectricType"})}if(this.filter.VConnectorStatusFilter)switch(this.filter.VConnectorStatusFilter){case 2500:t.push({type:"VConnectorStatusFilter",value:this.filter.VConnectorStatusFilter,text:"ConnectorReady"});break;case 2599:t.push({type:"VConnectorStatusFilter",value:this.filter.VConnectorStatusFilter,text:"AllConnectorStatus"})}return this.filter.ConnectorTypeFilter&&this.filter.ConnectorTypeFilter.split(";").forEach(e=>{t.push({type:"ConnectorTypeFilter",value:e,text:e})}),this.filter.VChargeSpeed&&O.My._data.filter(e=>e.LookupId==this.filter.VChargeSpeed).forEach(e=>{t.push({type:"VChargeSpeed",value:e.LookupId,text:e.Objectvalue})}),t.length||t.push({type:"Nearby",value:"Nearby",text:"ChargingStationNearby"}),t}clearFilter(t,e){var o=this;return(0,c.A)(function*(){if("Search"==e.type)o.filter.search=void 0;else if("ElectricTypeFilter"==e.type)o.filter.ElectricTypeFilter=void 0;else if("VConnectorStatusFilter"==e.type)o.filter.VConnectorStatusFilter=void 0;else if("ConnectorTypeFilter"==e.type){var i;o.filter.ConnectorTypeFilter=null===(i=o.filter.ConnectorTypeFilter)||void 0===i?void 0:i.split(";").filter(r=>r!=e.value).join(";")}else"VChargeSpeed"==e.type&&(o.filter.VChargeSpeed=void 0);o.filterChange()})()}get getChargingLocationss(){this.chargingLocations.forEach(r=>{r.Distance2CL=this.getDistance2CL(r)});var t=this.chargingLocations.sort((r,u)=>{var f,v;return(null!==(f=r.Distance2CL)&&void 0!==f?f:0)-(null!==(v=u.Distance2CL)&&void 0!==v?v:0)}),e=[];for(let r=0,u=Math.ceil(t.length/3);r<u;r++)e.push(t.slice(3*r,3*r+3));return e}refreshCurrentPosition(t){var e=this;return(0,c.A)(function*(){y.L.getCurrentPosition({enableHighAccuracy:!0}).then(function(){var o=(0,c.A)(function*(i){if(i.coords){var r={lat:i.coords.latitude,lng:i.coords.longitude};yield(0,b.fj)({params:r}),e.refreshData()}});return function(i){return o.apply(this,arguments)}}())})()}presentModalFilterChargingLocationComponent(t){var e=this;return(0,c.A)(function*(){const o=yield e.modalController.create({component:s.T,componentProps:{filter:Object.assign({},e.filter,{search:null})},backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-filter",enterAnimation:i=>(0,M.l9)(e.animationController,i),leaveAnimation:i=>(0,M.CV)(e.animationController,i)});o.onDidDismiss().then(i=>{"clear"==i.role?(e.filter={},e.filterChange()):"submit"==i.role&&(e.filter=i.data,e.filterChange())}),o.present()})()}presentModalNotify(t){var e=this;return(0,c.A)(function*(){(0,M.He)(e.modalController,e.animationController,{router:e.router,fnDismiss:()=>{(0,D.kM)({callback:o=>{null!=o&&o.Succeeded&&(e.notifySumary=o.Data)}})}})})()}presentModalVoice(t){var e=this;return(0,c.A)(function*(){const o=yield e.modalController.create({component:m.t,backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-breakpoint",initialBreakpoint:.75});o.onDidDismiss().then(i=>{"success"==i.role&&i.data&&(e.filter.search=i.data,e.filterChange())}),o.present()})()}requestAddress(t){(0,E.S)({params:{lat:t.lat,lng:t.lng},callback:e=>{var o,i,r;"OK"==(null==e?void 0:e.status)&&(this.currentAddress=null!==(o=(null!==(i=e.results[0])&&void 0!==i?i:{}).formatted_address)&&void 0!==o?o:null===(r=e.plus_code)||void 0===r?void 0:r.compound_code,(0,b.RR)({params:{currentAddress:this.currentAddress}}))}})}handleScrollStart(){this.scrollTopOld=this.scrollTopNew}handleScrollEnd(){}handleScroll(t){this.scrollTopNew=t.detail.scrollTop,this.spyScroll(this.scrollTopNew-this.scrollTopOld,this.scrollTopNew)}spyScroll(t,e){var o;if(!this.spyScrolling)if(t>this.spyScrollStep&&1==this.spyScrollActiveElement)this.spyScrollActiveElement=2,null!==(o=this.spyElementRef)&&void 0!==o&&o.nativeElement&&this.animationController.create().addElement(this.spyElementRef.nativeElement).duration(300).keyframes([{offset:0,height:"100px",opacity:"1"},{offset:1,height:"0px",opacity:"0"}]).afterStyles({display:"none"}).play();else if((t<-this.spyScrollStep||0==e)&&2==this.spyScrollActiveElement){var i;this.spyScrollActiveElement=1,null!==(i=this.spyElementRef)&&void 0!==i&&i.nativeElement&&this.animationController.create().addElement(this.spyElementRef.nativeElement).duration(300).beforeStyles({display:"block"}).keyframes([{offset:0,height:"0px",opacity:"0"},{offset:1,height:"100px",opacity:"1"}]).play()}}}return(a=g).\u0275fac=function(t){return new(t||a)(n.rXU(F.Ix),n.rXU(p.W3),n.rXU(p.Hx),n.rXU(p.K_),n.rXU(p.Xi))},a.\u0275cmp=n.VBU({type:a,selectors:[["app-home"]],viewQuery:function(t,e){if(1&t&&n.GBs(J,5,n.aKT),2&t){let o;n.mGM(o=n.lsd())&&(e.spyElementRef=o.first)}},decls:57,vars:27,consts:[["spyElement",""],["templateChargingLocation",""],["color","primary"],[1,"py-2"],[1,"overflow-hidden"],[1,"text-center","line-height-0"],["src","../../../assets/icon/ion-img/infipower-61x9.png","alt","infipower",1,"infipower"],[1,"container","px-0","pb-3","d-flex","align-items-center"],[3,"click"],[3,"src"],[1,"flex-grow-1","px-2","text-white","line-height-1"],[1,"pl-2","position-relative"],[1,"btn-notify",3,"click"],["src","../../../assets/icon/ion-icon/bell.svg"],[4,"ngIf"],[1,"container","px-0","mb-1"],[1,"text-white"],[1,"container","px-0","container-location"],[1,"d-flex","align-items-center"],[1,"col","px-0"],["color","light"],["mode","md","show-clear-button","never","show-cancel-button","never",3,"ionChange","ionClear","placeholder","value"],[3,"click",4,"ngIf"],[1,"col-auto","pl-2","pr-0"],["src","../../../assets/icon/ion-icon/filter.svg"],[3,"ionScrollStart","ionScrollEnd","ionScroll","fullscreen","scrollEvents"],["slot","fixed",3,"ionRefresh"],[1,"container","container-charging-location"],[1,"d-flex","align-items-center","mb-3"],[1,"col","d-flex","flex-nowrap","list-filters","overflow-auto","text-nowrap","align-items-center","px-3"],[4,"ngFor","ngForOf"],[1,"col-auto","pl-2","line-height-0"],["size","small","color","warning","shape","round",3,"click"],[1,"mr-1"],["slot","end","src","../../../assets/icon/ion-icon/location-3.svg"],[3,"ionInfinite",4,"ngIf"],[1,"position-absolute","notify-unread"],[1,"notify-circle-num"],["color","dark","src","../../../assets/icon/ion-icon/microphone.svg"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["mode","ios","size","small","shape","round","color","primary",3,"click"],["slot","end","name","close-outline"],[1,"px-3","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-day","bg-white","p-2"],[1,"d-flex","align-items-start","cursor-pointer",3,"click"],[1,"col-auto","px-0"],["src","../../../assets/favicon/favicon.png"],[1,"text-danger","text-center"],[1,"col","pl-2","pr-0"],[1,"mt-0","mb-1","position-relative"],[1,"position-absolute","top-0","left-0","w-100","text-ellipsis"],[1,"position-relative"],[1,"d-flex","justify-content-between","mt-1"],[1,"align-self-end","text-muted"],["size","small","shape","round","color","primary",3,"click"],["src","../../../assets/icon/ion-icon/direction.svg","slot","end"],["color","primary","src","../../../assets/icon/ion-icon/electric.svg",1,"fs-4"],[1,"text-muted"],[1,"ml-2"],["color","primary","src","../../../assets/icon/ion-icon/changing-station.svg",1,"fs-4"]],template:function(t,e){if(1&t){const o=n.RV6();n.j41(0,"ion-header",2)(1,"ion-toolbar")(2,"div",3)(3,"div",4,0)(5,"div",5),n.nrm(6,"img",6),n.k0s(),n.j41(7,"div",7)(8,"ion-thumbnail",8),n.bIt("click",function(r){return n.eBV(o),n.Njj(null!=e.user&&e.user.UserId?e.changeAvatar(r):null)}),n.nrm(9,"img",9),n.k0s(),n.j41(10,"div",10)(11,"small"),n.EFF(12),n.nI1(13,"translate"),n.k0s(),n.j41(14,"div")(15,"small")(16,"strong"),n.EFF(17),n.nI1(18,"translate"),n.k0s()()()(),n.nrm(19,"app-select-language"),n.j41(20,"div",11)(21,"ion-button",12),n.bIt("click",function(r){return n.eBV(o),n.Njj(e.presentModalNotify(r))}),n.nrm(22,"ion-icon",13),n.k0s(),n.DNE(23,Z,6,1,"ng-container",14),n.k0s()(),n.j41(24,"div",15)(25,"small",16),n.EFF(26),n.nI1(27,"translate"),n.k0s()()(),n.j41(28,"div",17)(29,"div",18)(30,"div",19)(31,"ion-chip",20)(32,"ion-searchbar",21),n.nI1(33,"translate"),n.bIt("ionChange",function(r){return n.eBV(o),n.Njj(e.searchChange(r))})("ionClear",function(r){return n.eBV(o),n.Njj(e.searchChange(r))}),n.k0s(),n.DNE(34,Q,2,0,"ion-button",22),n.k0s()(),n.j41(35,"div",23)(36,"ion-button",8),n.bIt("click",function(r){return n.eBV(o),n.Njj(e.presentModalFilterChargingLocationComponent(r))}),n.nrm(37,"ion-icon",24),n.k0s()()()()()()(),n.j41(38,"ion-content",25),n.bIt("ionScrollStart",function(){return n.eBV(o),n.Njj(e.handleScrollStart())})("ionScrollEnd",function(){return n.eBV(o),n.Njj(e.handleScrollEnd())})("ionScroll",function(r){return n.eBV(o),n.Njj(e.handleScroll(r))}),n.j41(39,"ion-refresher",26),n.bIt("ionRefresh",function(r){return n.eBV(o),n.Njj(e.onIonRefresher(r))}),n.nrm(40,"ion-refresher-content"),n.k0s(),n.DNE(41,q,3,0,"ng-container",14)(42,nn,6,3,"ng-container",14),n.j41(43,"div",27)(44,"div",28)(45,"div",29),n.DNE(46,an,5,3,"ng-container",30),n.k0s(),n.j41(47,"div",31)(48,"ion-button",32),n.bIt("click",function(){return n.eBV(o),n.Njj(e.navigateToMap())}),n.j41(49,"ion-label",33),n.EFF(50),n.nI1(51,"translate"),n.k0s(),n.nrm(52,"ion-icon",34),n.k0s()()(),n.DNE(53,rn,3,4,"ng-container",30),n.k0s(),n.DNE(54,ln,2,0,"ion-infinite-scroll",35),n.k0s(),n.DNE(55,gn,32,9,"ng-template",null,1,n.C5r)}if(2&t){let o,i;n.R7$(9),n.Y8G("src",null!=e.user&&e.user.Avatar?e.api_url+"readfile/"+(null==e.user?null:e.user.Avatar):"assets/icon/ion-img/no-avatar.svg",n.B4B),n.R7$(3),n.SpI("",n.bMT(13,16,"Wellcome"),","),n.R7$(5),n.JRh(null!==(o=null==e.user?null:e.user.FullName)&&void 0!==o?o:n.bMT(18,18,"Customers")),n.R7$(6),n.Y8G("ngIf",e.totalNotifyUnread),n.R7$(3),n.JRh(n.bMT(27,20,"CurrentLocation")),n.R7$(6),n.FS9("placeholder",null!==(i=e.currentAddress)&&void 0!==i?i:n.bMT(33,22,"FindChargingLocation")),n.Y8G("value",e.filter.search),n.R7$(2),n.Y8G("ngIf",n.lJ4(26,K).includes(e.platform)),n.R7$(4),n.Y8G("fullscreen",!0)("scrollEvents",!0),n.R7$(3),n.Y8G("ngIf",!e.response),n.R7$(),n.Y8G("ngIf",e.response&&!e.chargingLocations.length),n.R7$(4),n.Y8G("ngForOf",e.getFilters()),n.R7$(4),n.JRh(n.bMT(51,24,"OpenMap")),n.R7$(3),n.Y8G("ngForOf",e.chargingLocations),n.R7$(),n.Y8G("ngIf",e.paging.active)}},dependencies:[h.Sq,h.bT,h.T3,h.ux,h.e1,h.fG,p.mC,p.Jm,p.ZB,p.W9,p.eU,p.iq,p.KW,p.Ax,p.Hp,p.he,p.To,p.Ki,p.S1,p.w2,p.Zx,p.ai,p.Gw,z,V.D9],styles:["ion-header[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 2.5rem;--border-radius: 50%;border:1px solid var(--ion-color-light);margin:0;background:var(--ion-color-light)}ion-header[_ngcontent-%COMP%]   .btn-language[_ngcontent-%COMP%]{min-width:2rem;min-height:2rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;--border-width: 1px;--border-style: solid;--border-color: rgb(229, 229, 229, .8);--background: var(--ion-color-light);--color: var(--ion-color-primary)}ion-header[_ngcontent-%COMP%]   .btn-notify[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;--border-width: 1px;--border-style: solid;--border-color: rgb(229, 229, 229, .8);--background: var(--ion-color-light);--color: var(--ion-color-primary)}ion-header[_ngcontent-%COMP%]   app-select-language[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-light)}ion-header[_ngcontent-%COMP%]   .notify-unread[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1.25rem}ion-header[_ngcontent-%COMP%]   .notify-unread[_ngcontent-%COMP%]   .notify-circle-num[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:1.25rem;height:1.25rem;border-radius:100%;background-color:var(--ion-color-danger);color:var(--ion-color-danger-contrast)}ion-header[_ngcontent-%COMP%]   .notify-unread[_ngcontent-%COMP%]   .notify-circle-num[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;align-items:center;justify-content:center}ion-header[_ngcontent-%COMP%]   .notify-unread[_ngcontent-%COMP%]   .notify-circle-num[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:.555rem;line-height:1}ion-header[_ngcontent-%COMP%]   .infipower[_ngcontent-%COMP%]{height:.5625rem;margin-bottom:-.0625rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{margin:0;width:100%;min-height:2.5rem;border-radius:2.5rem;padding-inline-start:.5rem;padding-inline-end:.5rem;padding-top:.25rem;padding-bottom:.25rem;background:var(--ion-color-light);color:var(--ion-color-medium);padding-inline-end:.25rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;margin-right:.25rem;font-size:1rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{flex-grow:1}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2rem;min-height:2rem;margin-left:.5rem;--box-shadow: none;--border-width: 0}.container-location[_ngcontent-%COMP%]   .current-address[_ngcontent-%COMP%]{position:relative}.container-location[_ngcontent-%COMP%]   .current-address[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:translateY(-50%);position:absolute;top:50%;left:0;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.container-location[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;--border-width: 1px;--border-style: solid;--border-color: rgb(229, 229, 229, .8);--background: var(--ion-color-light);--color: var(--ion-color-primary)}.container-charging-location[_ngcontent-%COMP%]{padding:1rem 0 1px}.container-charging-location[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--box-shadow: none}.card-map[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem}.card-day[_ngcontent-%COMP%]{border:1px solid var(--ion-color-gray);border-radius:1rem}.card-day[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:2rem;height:2rem}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:0 .5rem 0 0}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[slot=end][_ngcontent-%COMP%]{color:var(--ion-color-danger)}"]}),g})()}];let un=(()=>{var a;class g{}return(a=g).\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.$C({type:a}),a.\u0275inj=n.G2t({imports:[F.iI.forChild(dn),F.iI]}),g})();var pn=d(3584);let mn=(()=>{var a;class g{}return(a=g).\u0275fac=function(t){return new(t||a)},a.\u0275mod=n.$C({type:a}),a.\u0275inj=n.G2t({imports:[h.MD,S.YN,p.bv,un,pn.x]}),g})()}}]);