"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4593],{4103:(et,S,c)=>{c.d(S,{Z:()=>G});var P=c(467),j=c(5312),C=c(3801),I=c(6841),g=c(1312),V=c(8650),x=c(8833),i=c(4438),y=c(4488),k=c(177),w=c(4842);const _=f=>({$implicit:f});function h(f,T){if(1&f&&(i.qex(0),i.eu8(1,2),i.bVm()),2&f){const m=i.XpG(),l=i.sdS(2);i.R7$(1),i.Y8G("ngTemplateOutlet",l)("ngTemplateOutletContext",i.eq3(2,_,m.chargingLocation))}}function O(f,T){if(1&f){const m=i.RV6();i.j41(0,"div",3)(1,"div",4),i.bIt("click",function(){const p=i.eBV(m).$implicit,M=i.XpG();return i.Njj(M.openDetail(p.ChargeLocationId))}),i.j41(2,"div",5)(3,"ion-avatar"),i.nrm(4,"img",6),i.k0s(),i.j41(5,"div",7)(6,"small"),i.EFF(7),i.k0s()()(),i.j41(8,"div",8)(9,"h5",9)(10,"b"),i.EFF(11),i.k0s()(),i.j41(12,"div")(13,"small"),i.EFF(14),i.k0s()()()(),i.j41(15,"div",10)(16,"div",11)(17,"div"),i.nrm(18,"ion-icon",12),i.k0s(),i.j41(19,"small")(20,"b"),i.EFF(21),i.k0s(),i.j41(22,"b"),i.EFF(23),i.k0s()(),i.j41(24,"small",13),i.EFF(25,"\u0111\u1ea7u s\u1ea1c s\u1eb5n s\xe0ng"),i.k0s()(),i.j41(26,"ion-button",14),i.bIt("click",function(n){const M=i.eBV(m).$implicit,L=i.XpG();return i.Njj(L.openDirection(n,M))}),i.j41(27,"ion-label"),i.EFF(28),i.nI1(29,"translate"),i.k0s(),i.nrm(30,"ion-icon",15),i.k0s()()()}if(2&f){const m=T.$implicit,l=i.XpG();let n,p;i.R7$(7),i.SpI("",l.getDistance2CL(m),"km"),i.R7$(4),i.JRh(m.LocName),i.R7$(3),i.JRh(m.LocAddress),i.R7$(6),i.HbH(m.TotalConnectorReady?"text-primary":"text-danger"),i.R7$(1),i.JRh(null!==(n=m.TotalConnectorReady)&&void 0!==n?n:0),i.R7$(2),i.SpI("/",null!==(p=m.TotalConnector)&&void 0!==p?p:0,""),i.R7$(3),i.Y8G("color",l.APP_FUNC_GetColor_VLocationStatus(m.VLocationStatus)),i.R7$(2),i.JRh(i.bMT(29,9,"Direction"))}}let G=(()=>{var f;class T{constructor(l,n){this.modalController=l,this.toastController=n,this.APP_ROUTE=x._,this.APP_FUNC_GetColor_VLocationStatus=g.Bb,this.currentPosition=j.c.app_default.geolocation.pos,(0,C.Xz)().then(p=>this.currentPosition=p)}ngOnInit(){this.loadData()}loadData(){var l=this;return(0,P.A)(function*(){(0,I.x1)({params:{ChargeLocationId:l.ChargeLocationId},callback:n=>{var p,M,L,b,R;null!=n&&n.Succeeded?(l.chargingLocation=null!==(p=n.Data)&&void 0!==p?p:{},null!==(M=l.chargingLocation)&&void 0!==M&&M.LocImages&&"string"==typeof(null===(L=l.chargingLocation)||void 0===L?void 0:L.LocImages)&&(l.chargingLocation.LocImage=(null!==(b=JSON.parse(null===(R=l.chargingLocation)||void 0===R?void 0:R.LocImages))&&void 0!==b?b:[])[0].imageurl)):(0,V.cX)(l.toastController,{},n).then(X=>X.present())}})})()}openDetail(l){return(0,P.A)(function*(){window.location.href=x._.CHARGING_LOCATION_DETAIL.replace(":id",l)})()}Direction(){var l=this;return(0,P.A)(function*(){l.modalController.dismiss(l.chargingLocation,"Direction")})()}OpenGoogleMap(){var l=this;return(0,P.A)(function*(){l.modalController.dismiss(l.chargingLocation,"GoogleMap")})()}openDirection(l,n){var p=this;return(0,P.A)(function*(){p.modalController.dismiss(n,"GoogleMap")})()}getDistance2CL(l){return parseFloat((0,g.GH)(this.currentPosition,{lat:null==l?void 0:l.LocLat,lng:null==l?void 0:l.LocLong}).toFixed(2))}getLocImage(l){var n;if(!l.LocImage&&l.LocImages)if("string"==typeof l.LocImages){var p,M;l.LocImage=(null!==(p=(null!==(M=JSON.parse(l.LocImages))&&void 0!==M?M:[])[0])&&void 0!==p?p:{}).imageurl}else{var L,b;l.LocImage=(null!==(L=(null!==(b=l.LocImages)&&void 0!==b?b:[])[0])&&void 0!==L?L:{}).imageurl}return null!==(n=l.LocImage)&&void 0!==n?n:"assets/favicon/favicon.svg"}}return(f=T).\u0275fac=function(l){return new(l||f)(i.rXU(y.W3),i.rXU(y.K_))},f.\u0275cmp=i.VBU({type:f,selectors:[["app-modal-map-market"]],inputs:{ChargeLocationId:"ChargeLocationId"},decls:3,vars:1,consts:[[4,"ngIf"],["templateChargingLocation",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card-day","bg-white","p-3"],[1,"d-flex","align-items-start","cursor-pointer",3,"click"],[1,"col-auto","px-0"],["src","../../../assets/favicon/favicon.png"],[1,"text-danger","text-center"],[1,"col","pl-2","pr-0"],[1,"mt-0","mb-1"],[1,"d-flex","justify-content-between","mt-2"],[1,"d-flex","align-items-center"],["color","primary","src","../../../assets/icon/ion-icon/electric.svg",1,"fs-4"],[1,"ml-2"],["size","small","shape","round",3,"color","click"],["src","../../../assets/icon/ion-icon/direction.svg","slot","end"]],template:function(l,n){1&l&&i.DNE(0,h,2,4,"ng-container",0)(1,O,31,11,"ng-template",null,1,i.C5r),2&l&&i.Y8G("ngIf",n.chargingLocation)},dependencies:[k.bT,k.T3,y.mC,y.Jm,y.iq,y.he,w.D9],styles:[".card-day[_ngcontent-%COMP%]{border-radius:1rem}.card-day[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:2rem;height:2rem}"]}),T})()},4593:(et,S,c)=>{c.r(S),c.d(S,{MapPageModule:()=>rt});var P=c(177),j=c(9417),C=c(4488),I=c(2175),g=c(467),V=c(7762),x=c(7392),i=c(9316),y=c(6841),k=c(1312),w=c(4103),_=c(3801),h=c(5312),O=c(8650),G=c(8833),f=c(4470),T=c(4397),m=c(3588),l=c(2385),n=c(4438);function p(s,v){if(1&s&&(n.j41(0,"div",17)(1,"span"),n.EFF(2,"\xa0"),n.k0s(),n.j41(3,"div"),n.EFF(4),n.k0s()()),2&s){const u=n.XpG();n.R7$(4),n.JRh(u.currentAddress)}}function M(s,v){1&s&&n.eu8(0)}function L(s,v){if(1&s){const u=n.RV6();n.qex(0),n.j41(1,"ion-button",23),n.bIt("click",function(t){n.eBV(u);const a=n.XpG().$implicit,o=n.XpG(2);return n.Njj(o.clearFilter(t,a))}),n.j41(2,"ion-label"),n.EFF(3),n.k0s(),n.nrm(4,"ion-icon",24),n.k0s(),n.bVm()}if(2&s){const u=n.XpG().$implicit;n.R7$(3),n.JRh(u.text)}}function b(s,v){if(1&s){const u=n.RV6();n.qex(0),n.j41(1,"ion-button",23),n.bIt("click",function(t){n.eBV(u);const a=n.XpG().$implicit,o=n.XpG(2);return n.Njj(o.clearFilter(t,a))}),n.j41(2,"ion-label"),n.EFF(3),n.k0s(),n.nrm(4,"ion-icon",24),n.k0s(),n.bVm()}if(2&s){const u=n.XpG().$implicit;n.R7$(3),n.JRh(u.text)}}function R(s,v){if(1&s&&(n.qex(0)(1,20),n.DNE(2,M,1,0,"ng-container",21)(3,L,5,1,"ng-container",21)(4,b,5,1,"ng-container",22),n.bVm()()),2&s){const u=v.$implicit;n.R7$(1),n.Y8G("ngSwitch",u.type),n.R7$(1),n.Y8G("ngSwitchCase","Nearby"),n.R7$(1),n.Y8G("ngSwitchCase","Search")}}function X(s,v){if(1&s&&(n.qex(0),n.j41(1,"div",18),n.DNE(2,R,5,3,"ng-container",19),n.k0s(),n.bVm()),2&s){const u=n.XpG();n.R7$(2),n.Y8G("ngForOf",u.getFilters())}}const ot=[{path:"",component:(()=>{var s;class v{constructor(e,t,a,o,r){this.router=e,this.modalController=t,this.animationController=a,this.toastController=o,this.loadingController=r,this.APP_ROUTE=G._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.currentPosition=h.c.app_default.geolocation.pos,this.chargingLocations=[],this.markers=[],this.ChargingLocationParams={TopLeftLat:10.914656,TopLeftLong:106.44876,RightBottomLat:10.305755,RightBottomLong:107.1056,PageNumber:1,PageSize:100},this.timeoutLoadData=-1,this.isWaitLoad=!1,this.loadingController.create({message:""}).then(d=>this.loading=d),(0,_.Xz)().then(d=>this.currentPosition=d)}ngOnInit(){(0,_.fA)({callback:e=>{null!=e&&e.currentAddress&&(this.currentAddress=null==e?void 0:e.currentAddress)}}),this.refreshCurrentPosition()}ngAfterViewInit(){if(this.google)this.createMap();else{let e=document.createElement("script");e.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCa7l5u2H4x6NWksxQmzAp-GOP7H-s3slY&v=weekly&language=vi&region=vi",e.onload=()=>{setTimeout(()=>{this.createMap()},1e3)},window.document.head.append(e)}}resetData(){this.chargingLocations.length=0}pushData(e,t){1==this.paging.page&&(this.chargingLocations.length=0),this.chargingLocations=this.chargingLocations.concat(e),t&&t(this.chargingLocations),this.chargingLocations.forEach(a=>{var o,r;this.markers.push({id:a.ChargeLocationId,title:a.LocAddress,position:{lat:null!==(o=a.LocLat)&&void 0!==o?o:h.c.app_default.geolocation.pos.lat,lng:null!==(r=a.LocLong)&&void 0!==r?r:h.c.app_default.geolocation.pos.lng}})}),this.createMarker()}totalData(){return this.chargingLocations.length}refreshData(e){var t=this;return(0,g.A)(function*(){t.filter={},t.paging.page=1,t.paging.active=!0,t.loadData_Paging(e)})()}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter={},this.filter.search=e.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,t){this.paging.sortfield=e||null,this.paging.sorttype=t||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var t=this;return(0,g.A)(function*(){if(t.paging.loading=!0,t.filter.search)(0,y.tC)({params:{Search:t.filter.search,PageNumber:t.paging.page,PageSize:t.paging.limit},callback:o=>{var r;t.response=o,null!=o&&o.Succeeded?t.pushData(null!==(r=o.Data)&&void 0!==r?r:[]):(0,O.cX)(t.toastController,{},o).then(d=>d.present()),t.paging.loading=!1,t.paging.active=!(null==o||!o.HasNextPage),e&&e()}});else if(t.filter.ElectricTypeFilter||t.filter.ConnectorTypeFilter||t.filter.VConnectorStatusFilter||t.filter.VChargeSpeed)(0,y.Zd)({params:{ElectricTypeFilter:t.filter.ElectricTypeFilter,ConnectorTypeFilter:t.filter.ConnectorTypeFilter,VConnectorStatusFilter:t.filter.VConnectorStatusFilter,VChargeSpeed:t.filter.VChargeSpeed,PageNumber:t.paging.page,PageSize:t.paging.limit},callback:o=>{var r;t.response=o,null!=o&&o.Succeeded?t.pushData(null!==(r=o.Data)&&void 0!==r?r:[]):(0,O.cX)(t.toastController,{},o).then(d=>d.present()),t.paging.loading=!1,t.paging.active=!(null==o||!o.HasNextPage),e&&e()}});else{var a=yield(0,_.Xz)();(0,y.Bc)({params:{TopLeftLat:a.lat+.1,TopLeftLong:a.lng-.1,RightBottomLat:a.lat-.1,RightBottomLong:a.lng+.1,PageNumber:t.paging.page,PageSize:t.paging.limit},callback:o=>{var r;t.response=o,null!=o&&o.Succeeded?t.pushData(null!==(r=o.Data)&&void 0!==r?r:[],d=>{d.forEach(D=>{})}):(0,O.cX)(t.toastController,{},o).then(d=>d.present()),t.paging.loading=!1,t.paging.active=!(null==o||!o.HasNextPage),e&&e()}})}})()}openDirection(e,t){return(0,g.A)(function*(){e.preventDefault(),yield x.P.open({url:(0,k.LZ)(yield(0,_.Xz)(),{lat:null==t?void 0:t.LocLat,lng:null==t?void 0:t.LocLong})})})()}openDetail(e){var t=this;return(0,g.A)(function*(){t.router.navigateByUrl(G._.CHARGING_LOCATION_DETAIL.replace(":id",e))})()}getFilters(){var e=[];if(this.filter.search&&e.push({type:"Search",value:this.filter.search,text:this.filter.search}),this.filter.ElectricTypeFilter)switch(this.filter.ElectricTypeFilter){case 1:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"AC"});break;case 2:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"DC"});break;case 3:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"T\u1ea5t c\u1ea3 d\xf2ng \u0111i\u1ec7n"})}if(this.filter.VConnectorStatusFilter)switch(this.filter.VConnectorStatusFilter){case 2500:e.push({type:"VConnectorStatusFilter",value:this.filter.VConnectorStatusFilter,text:"S\u1eb5n s\xe0ng s\u1ea1c"});break;case 2599:e.push({type:"VConnectorStatusFilter",value:this.filter.VConnectorStatusFilter,text:"T\u1ea5t c\u1ea3 tr\u1ea1ng th\xe1i"})}return this.filter.ConnectorTypeFilter&&this.filter.ConnectorTypeFilter.split(";").forEach(t=>{e.push({type:"ConnectorTypeFilter",value:t,text:t})}),this.filter.VChargeSpeed&&m.My._data.filter(t=>t.LookupId==this.filter.VChargeSpeed).forEach(t=>{e.push({type:"VChargeSpeed",value:t.LookupId,text:t.Objectvalue})}),e.length||e.push({type:"Nearby",value:"Nearby",text:"Nearby"}),e}clearFilter(e,t){var a=this;return(0,g.A)(function*(){if("Search"==t.type)a.filter.search=void 0;else if("ElectricTypeFilter"==t.type)a.filter.ElectricTypeFilter=void 0;else if("VConnectorStatusFilter"==t.type)a.filter.VConnectorStatusFilter=void 0;else if("ConnectorTypeFilter"==t.type){var o;a.filter.ConnectorTypeFilter=null===(o=a.filter.ConnectorTypeFilter)||void 0===o?void 0:o.split(";").filter(r=>r!=t.value).join(";")}else"VChargeSpeed"==t.type&&(a.filter.VChargeSpeed=void 0);a.filterChange()})()}waitLoad(){var e=this;return(0,g.A)(function*(){if(e.timeoutLoadData=1e3,e.isWaitLoad)return;e.isWaitLoad=!0;let t=setInterval(()=>{e.timeoutLoadData>=0?e.timeoutLoadData-=100:(clearTimeout(t),e.isWaitLoad=!1,e.refreshData())},100)})()}refreshCurrentPosition(e){var t=this;return(0,g.A)(function*(){let a=yield(0,_.Xz)();V.L.getCurrentPosition({enableHighAccuracy:!0}).then(function(){var o=(0,g.A)(function*(r){r.coords&&(a={lat:r.coords.latitude,lng:r.coords.longitude},yield(0,_.fj)({params:a}),t.createCurrentPosition(a),t.resetCamera(a),t.requestAddress(a))});return function(r){return o.apply(this,arguments)}}()),t.createCurrentPosition(a),t.resetCamera(a)})()}presentModalMarket(e,t){var a=this;return(0,g.A)(function*(){const o=yield a.modalController.create({component:w.Z,componentProps:{ChargeLocationId:t},cssClass:"ion-modal-map-market"});o.onDidDismiss().then(r=>{var d,D,E,A,F,B,z,N,U,W;if("Direction"==r.role)a.initDirection({id:null!==(d=null===(D=r.data)||void 0===D?void 0:D.ChargeLocationId)&&void 0!==d?d:0,title:null!==(E=null!==(A=null===(F=r.data)||void 0===F?void 0:F.LocName)&&void 0!==A?A:null===(B=r.data)||void 0===B?void 0:B.LocAddress)&&void 0!==E?E:"",position:{lat:null!==(z=null===(N=r.data)||void 0===N?void 0:N.LocLat)&&void 0!==z?z:h.c.app_default.geolocation.pos.lat,lng:null!==(U=null===(W=r.data)||void 0===W?void 0:W.LocLong)&&void 0!==U?U:h.c.app_default.geolocation.pos.lng}});else if("GoogleMap"==r.role){var K,H,Y,J,Z,Q,q,$,tt,nt;a.openDirectionByGoogleMap({id:null!==(K=null===(H=r.data)||void 0===H?void 0:H.ChargeLocationId)&&void 0!==K?K:0,title:null!==(Y=null!==(J=null===(Z=r.data)||void 0===Z?void 0:Z.LocName)&&void 0!==J?J:null===(Q=r.data)||void 0===Q?void 0:Q.LocAddress)&&void 0!==Y?Y:"",position:{lat:null!==(q=null===($=r.data)||void 0===$?void 0:$.LocLat)&&void 0!==q?q:h.c.app_default.geolocation.pos.lat,lng:null!==(tt=null===(nt=r.data)||void 0===nt?void 0:nt.LocLong)&&void 0!==tt?tt:h.c.app_default.geolocation.pos.lng}})}}),o.present()})()}presentModalFilterChargingLocationComponent(e){var t=this;return(0,g.A)(function*(){const a=yield t.modalController.create({component:l.T,componentProps:{filter:Object.assign({},t.filter,{search:null})},backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-filter",enterAnimation:o=>(0,O.l9)(t.animationController,o),leaveAnimation:o=>(0,O.CV)(t.animationController,o)});a.onDidDismiss().then(o=>{"clear"==o.role?(t.filter={},t.filterChange()):"submit"==o.role&&(t.filter=o.data,t.filterChange())}),a.present()})()}presentModalVoice(e){var t=this;return(0,g.A)(function*(){const a=yield t.modalController.create({component:T.t,backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-breakpoint",initialBreakpoint:.75});a.onDidDismiss().then(o=>{"success"==o.role&&o.data&&(t.filter.search=o.data,t.filterChange())}),a.present()})()}presentModalSearchChargingLocationComponent(e){var t=this;return(0,g.A)(function*(){(0,O.Gn)(t.modalController,t.animationController)})()}presentModalNotify(e){var t=this;return(0,g.A)(function*(){(0,O.He)(t.modalController,t.animationController)})()}get google(){var e;if(null!==(e=window.google)&&void 0!==e&&e.maps)return window.google}createMap(){var e=this;return(0,g.A)(function*(){var t;e.map=new e.google.maps.Map(window.document.getElementById("map"),{id:`${null===(t=yield i.p.getId())||void 0===t?void 0:t.identifier}_${Math.floor(1e6*Math.random())}`,center:yield(0,_.Xz)(),zoom:h.c.app_default.geolocation.zoom,maxZoom:18,minZoom:6,disableDefaultUI:!0}),e.map.addListener("bounds_changed",()=>{let a=e.map.getBounds({asGeoJSON:!0});if(a&&"object"==typeof a){let o=[],r=[];Object.keys(a).forEach(d=>{o.push(a[d].lo),r.push(a[d].hi)}),e.ChargingLocationParams.TopLeftLat=Math.min.apply(null,r),e.ChargingLocationParams.TopLeftLong=Math.max.apply(null,o),e.ChargingLocationParams.RightBottomLat=Math.min.apply(null,o),e.ChargingLocationParams.RightBottomLong=Math.max.apply(null,r)}e.waitLoad()}),e.refreshCurrentPosition()})()}resetCamera(e){var t=this;return(0,g.A)(function*(){if(t.map){let a=window.google.maps.CameraOptions={zoom:14,center:null!=e?e:yield(0,_.Xz)()};t.map.moveCamera(a)}})()}createCurrentPosition(e){var t=this;return(0,g.A)(function*(){t.markerGeoLocaltion&&t.markerGeoLocaltion.setMap(null),t.markerGeoLocaltion=new t.google.maps.Marker({map:t.map,position:null!=e?e:yield(0,_.Xz)(),icon:h.c.app_default.icon.currentlocaltion})})()}createMarker(){var e=this;return(0,g.A)(function*(){e.markers.forEach(t=>{new e.google.maps.Marker({position:t.position,map:e.map,title:t.title,icon:h.c.app_default.icon.marker,optimized:!0}).addListener("click",()=>{e.presentModalMarket(void 0,t.id)})})})()}initDirection(e){var t=this;return(0,g.A)(function*(){t.directionsService=new t.google.maps.DirectionsService,t.directionsRenderer=new t.google.maps.DirectionsRenderer,t.directionsRenderer.setMap(t.map),t.directionsService.route({origin:new t.google.maps.LatLng(yield(0,_.Xz)()),destination:new t.google.maps.LatLng(e.position),travelMode:"DRIVING"},(a,o)=>{"OK"==o?(t.directionMarker=e,t.directionsRenderer.setDirections(a)):((0,O.cX)(t.toastController,{message:"API ch\u1ec9 \u0111\u01b0\u1eddng kh\xf4ng ho\u1ea1t \u0111\u1ed9ng!"}).then(r=>r.present()),t.directionMarker=void 0,t.presentModalMarket(void 0,e.id))})})()}clearDirection(){var e=this;return(0,g.A)(function*(){e.directionMarker=void 0,e.directionsRenderer.setMap(null)})()}openDirectionByGoogleMap(e){return(0,g.A)(function*(){yield x.P.open({url:(0,k.LZ)(yield(0,_.Xz)(),e.position)})})()}selectChargingLocation(e,t){var a=this;return(0,g.A)(function*(){var o,r,d,D,E,A,F;a.initDirection({id:null!==(o=t.ChargeLocationId)&&void 0!==o?o:0,title:null!==(r=null!==(d=t.LocName)&&void 0!==d?d:t.LocAddress)&&void 0!==r?r:"",position:{lat:null!==(D=t.LocLat)&&void 0!==D?D:h.c.app_default.geolocation.pos.lat,lng:null!==(E=t.LocLong)&&void 0!==E?E:h.c.app_default.geolocation.pos.lng}}),a.resetCamera({lat:null!==(A=t.LocLat)&&void 0!==A?A:h.c.app_default.geolocation.pos.lat,lng:null!==(F=t.LocLong)&&void 0!==F?F:h.c.app_default.geolocation.pos.lng}),a.chargingLocations.length=0})()}requestAddress(e){(0,f.S)({params:{lat:e.lat,lng:e.lng},callback:t=>{var a,o,r;"OK"==(null==t?void 0:t.status)&&(this.currentAddress=null!==(a=(null!==(o=t.results[0])&&void 0!==o?o:{}).formatted_address)&&void 0!==a?a:null===(r=t.plus_code)||void 0===r?void 0:r.compound_code,(0,_.RR)({params:{currentAddress:this.currentAddress}}))}})}}return(s=v).\u0275fac=function(e){return new(e||s)(n.rXU(I.Ix),n.rXU(C.W3),n.rXU(C.Hx),n.rXU(C.K_),n.rXU(C.Xi))},s.\u0275cmp=n.VBU({type:s,selectors:[["app-map"]],decls:21,vars:3,consts:[["color","primary"],[1,"container-location","bg-primary"],[1,"d-flex","align-items-center"],[1,"col","px-0"],["color","light"],["src","../../../assets/icon/ion-icon/location.svg"],[3,"click"],["class","current-address",4,"ngIf"],["color","dark","src","../../../assets/icon/ion-icon/microphone.svg"],[1,"col-auto","pl-2","pr-0"],["src","../../../assets/icon/ion-icon/filter.svg"],[4,"ngIf"],["scroll-x","false","scroll-y","false",3,"fullscreen"],["id","map"],[1,"position-absolute","bottom-0","right-0"],["id","btn-geolocation","color","light",3,"click"],["src","../../../assets/icon/map/geolocation.svg"],[1,"current-address"],[1,"row","flex-nowrap","mt-3","list-filters","overflow-auto","text-nowrap"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["mode","ios","size","small","shape","round","color","light",3,"click"],["slot","end","name","close-outline"]],template:function(e,t){1&e&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"div",1)(3,"div",2)(4,"div",3)(5,"ion-chip",4)(6,"span"),n.nrm(7,"ion-icon",5),n.k0s(),n.j41(8,"ion-label",6),n.bIt("click",function(o){return t.presentModalSearchChargingLocationComponent(o)}),n.DNE(9,p,5,1,"div",7),n.k0s(),n.j41(10,"ion-button",6),n.bIt("click",function(o){return t.presentModalVoice(o)}),n.nrm(11,"ion-icon",8),n.k0s()()(),n.j41(12,"div",9)(13,"ion-button",6),n.bIt("click",function(o){return t.presentModalFilterChargingLocationComponent(o)}),n.nrm(14,"ion-icon",10),n.k0s()()()(),n.DNE(15,X,3,1,"ng-container",11),n.k0s()(),n.j41(16,"ion-content",12),n.nrm(17,"div",13),n.j41(18,"div",14)(19,"ion-button",15),n.bIt("click",function(o){return t.refreshCurrentPosition(o)}),n.nrm(20,"ion-icon",16),n.k0s()()()),2&e&&(n.R7$(9),n.Y8G("ngIf",t.currentAddress),n.R7$(6),n.Y8G("ngIf",t.response),n.R7$(1),n.Y8G("fullscreen",!0))},dependencies:[P.Sq,P.bT,P.ux,P.e1,P.fG,C.Jm,C.ZB,C.W9,C.eU,C.iq,C.he,C.ai],styles:[".container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{margin:0;width:100%;min-height:2.5rem;border-radius:2.5rem;padding-inline-start:.5rem;padding-inline-end:.5rem;background:var(--ion-color-light);color:var(--ion-color-medium);padding-inline-end:.25rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;margin-right:.25rem;font-size:1rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{flex-grow:1}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2rem;min-height:2rem;margin-left:.5rem;--box-shadow: none;--border-width: 0}.container-location[_ngcontent-%COMP%]   .current-address[_ngcontent-%COMP%]{position:relative}.container-location[_ngcontent-%COMP%]   .current-address[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:translateY(-50%);position:absolute;top:50%;left:0;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.container-location[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;--border-width: 1px;--border-style: solid;--border-color: rgb(229, 229, 229, .8);--background: var(--ion-color-light);--color: var(--ion-color-primary)}.map-header[_ngcontent-%COMP%]{position:absolute;top:1rem;left:0;right:0;z-index:1}.map-header[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--ion-background-color: #fff;--border-radius: 1.5rem}.map-header[_ngcontent-%COMP%]   .response-search[_ngcontent-%COMP%]{position:absolute;top:3.5rem;left:0;right:0;z-index:1;padding:1rem}.map-header[_ngcontent-%COMP%]   .response-search[_ngcontent-%COMP%]   .response-content[_ngcontent-%COMP%]{border-radius:.75rem;background-color:#fff;box-shadow:4px 4px 12px #0101011a;max-height:20rem;overflow-x:hidden;overflow-y:auto}.map-header[_ngcontent-%COMP%]   .response-search[_ngcontent-%COMP%]   .response-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.75rem}.map-header[_ngcontent-%COMP%]   .direction-marker-bar[_ngcontent-%COMP%]{background-color:#fff}.map-header[_ngcontent-%COMP%]   .direction-marker-bar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--box-shadow: none;--padding-top: .5rem;--padding-bottom: .5rem;--padding-start: .5rem;--padding-end: .5rem;margin-right:1rem}.map-header[_ngcontent-%COMP%]   .direction-marker-bar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}.map-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{min-height:2.5rem;border-radius:1.25rem;padding:0 1rem;background:var(--ion-color-light)}.map-header[_ngcontent-%COMP%]   .btn-notify[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;margin:0}.map-header[_ngcontent-%COMP%]   .btn-notify[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:0 .5rem 0 0}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[slot=end][_ngcontent-%COMP%]{color:var(--ion-color-danger)}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:first-child{margin-left:1rem}#map[_ngcontent-%COMP%]{width:100%;height:100%;width:100vw;height:100vh}#btn-geolocation[_ngcontent-%COMP%]{width:3rem;height:3rem;min-width:3rem;min-height:3rem;--padding-top: 0;--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--border-radius: 50%;margin:0 1rem 7rem 0}#btn-geolocation[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:3rem;color:var(--ion-color-tertiary)}"]}),v})()}];let it=(()=>{var s;class v{}return(s=v).\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.$C({type:s}),s.\u0275inj=n.G2t({imports:[I.iI.forChild(ot),I.iI]}),v})();var at=c(9500);let rt=(()=>{var s;class v{}return(s=v).\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.$C({type:s}),s.\u0275inj=n.G2t({imports:[P.MD,j.YN,C.bv,it,at.x]}),v})()}}]);