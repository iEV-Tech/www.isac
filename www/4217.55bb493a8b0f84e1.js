"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4217],{4217:(pt,X,s)=>{s.r(X),s.d(X,{MapPageModule:()=>dt});var C=s(177),U=s(9417),p=s(8974),P=s(2175),c=s(467),Y=s(7762),N=s(7392),H=s(9316),L=s(6841),y=s(1312),u=s(5312),m=s(3801),f=s(8650),z=s(3588),b=s(8833),t=s(4438),B=s(4842);const J=r=>({$implicit:r});function W(r,g){if(1&r&&(t.qex(0),t.eu8(1,2),t.bVm()),2&r){const l=t.XpG(),e=t.sdS(2);t.R7$(),t.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",t.eq3(2,J,l.chargingLocation))}}function Z(r,g){if(1&r&&(t.qex(0),t.j41(1,"div"),t.nrm(2,"ion-icon",14),t.k0s(),t.j41(3,"small")(4,"b"),t.EFF(5),t.k0s(),t.j41(6,"b"),t.EFF(7),t.k0s()(),t.j41(8,"small",15)(9,"b"),t.EFF(10),t.nI1(11,"translate"),t.k0s()(),t.bVm()),2&r){let l,e;const n=t.XpG().$implicit;t.R7$(4),t.HbH(n.TotalConnectorReady?"text-primary":"text-danger"),t.R7$(),t.JRh(null!==(l=n.TotalConnectorReady)&&void 0!==l?l:0),t.R7$(2),t.SpI("/",null!==(e=n.TotalConnector)&&void 0!==e?e:0,""),t.R7$(3),t.JRh(t.bMT(11,5,"ConnectorReady"))}}function K(r,g){if(1&r&&(t.qex(0),t.j41(1,"div"),t.nrm(2,"ion-icon",16),t.k0s(),t.j41(3,"small")(4,"b"),t.EFF(5),t.k0s()(),t.bVm()),2&r){const l=t.XpG().$implicit,e=t.XpG();t.R7$(3),t.ZvI("ml-1 text-",e.APP_FUNC_GetColor_VLocationStatus(l.VLocationStatus),""),t.R7$(2),t.JRh(l.VLocationStatusName)}}function Q(r,g){if(1&r){const l=t.RV6();t.j41(0,"div",3)(1,"div",4),t.bIt("click",function(n){const o=t.eBV(l).$implicit,i=t.XpG();return t.Njj(i.openDetail(n,o))}),t.j41(2,"div",5)(3,"ion-avatar"),t.nrm(4,"img",6),t.k0s(),t.j41(5,"div",7)(6,"small"),t.EFF(7),t.k0s()()(),t.j41(8,"div",8)(9,"h5",9)(10,"b"),t.EFF(11),t.k0s()(),t.j41(12,"div")(13,"small"),t.EFF(14),t.k0s()()()(),t.j41(15,"div",10)(16,"div",11),t.DNE(17,Z,12,7,"ng-container",1)(18,K,6,4,"ng-container",1),t.k0s(),t.j41(19,"ion-button",12),t.bIt("click",function(n){const o=t.eBV(l).$implicit,i=t.XpG();return t.Njj(i.openDirection(n,o))}),t.j41(20,"ion-label"),t.EFF(21),t.nI1(22,"translate"),t.k0s(),t.nrm(23,"ion-icon",13),t.k0s()()()}if(2&r){const l=g.$implicit,e=t.XpG();t.R7$(7),t.SpI("",e.getDistance2CL(l),"km"),t.R7$(4),t.JRh(l.LocName),t.R7$(3),t.JRh(l.LocAddress),t.R7$(3),t.Y8G("ngIf",l.VLocationStatus==e.v_location_status.SanSang),t.R7$(),t.Y8G("ngIf",l.VLocationStatus!=e.v_location_status.SanSang),t.R7$(3),t.JRh(t.bMT(22,6,"Direction"))}}let q=(()=>{var r;class g{constructor(e,n,o){this.router=e,this.modalController=n,this.toastController=o,this.APP_ROUTE=b._,this.APP_FUNC_GetColor_VLocationStatus=y.Bb,this.v_location_status=z.Ix,this.currentPosition=u.c.app_default.geolocation.pos,(0,m.Xz)().then(i=>this.currentPosition=i)}ngOnInit(){this.loadData()}close(){this.modalController.dismiss()}navigateByUrl(e){var n=this;return(0,c.A)(function*(){n.modalController.dismiss().then(o=>{n.router.navigateByUrl(e)})})()}loadData(){var e=this;return(0,c.A)(function*(){(0,L.x1)({params:{ChargeLocationId:e.ChargeLocationId},callback:n=>{var o,i,a,d,h;null!=n&&n.Succeeded?(e.chargingLocation=null!==(o=n.Data)&&void 0!==o?o:{},null!==(i=e.chargingLocation)&&void 0!==i&&i.LocImages&&"string"==typeof(null===(a=e.chargingLocation)||void 0===a?void 0:a.LocImages)&&(e.chargingLocation.LocImage=(null!==(d=JSON.parse(null===(h=e.chargingLocation)||void 0===h?void 0:h.LocImages))&&void 0!==d?d:[])[0].imageurl)):(0,f.cX)(e.toastController,{},n).then(v=>v.present())}})})()}openDetail(e,n){var o=this;return(0,c.A)(function*(){var i,a;o.navigateByUrl(b._.CHARGING_LOCATION_DETAIL.replace(":id",null!==(i=null===(a=n.ChargeLocationId)||void 0===a?void 0:a.toString())&&void 0!==i?i:""))})()}Direction(){var e=this;return(0,c.A)(function*(){e.modalController.dismiss(e.chargingLocation,"Direction")})()}OpenGoogleMap(){var e=this;return(0,c.A)(function*(){e.modalController.dismiss(e.chargingLocation,"GoogleMap")})()}openDirection(e,n){var o=this;return(0,c.A)(function*(){o.modalController.dismiss(n,"GoogleMap")})()}getDistance2CL(e){return parseFloat((0,y.GH)(this.currentPosition,{lat:null==e?void 0:e.LocLat,lng:null==e?void 0:e.LocLong}).toFixed(2))}getLocImage(e){var n;if(!e.LocImage&&e.LocImages)if("string"==typeof e.LocImages){var o,i;e.LocImage=(null!==(o=(null!==(i=JSON.parse(e.LocImages))&&void 0!==i?i:[])[0])&&void 0!==o?o:{}).imageurl}else{var a,d;e.LocImage=(null!==(a=(null!==(d=e.LocImages)&&void 0!==d?d:[])[0])&&void 0!==a?a:{}).imageurl}return null!==(n=e.LocImage)&&void 0!==n?n:"assets/favicon/favicon.svg"}}return(r=g).\u0275fac=function(e){return new(e||r)(t.rXU(P.Ix),t.rXU(p.W3),t.rXU(p.K_))},r.\u0275cmp=t.VBU({type:r,selectors:[["app-modal-map-market"]],inputs:{ChargeLocationId:"ChargeLocationId"},decls:3,vars:1,consts:[["templateChargingLocation",""],[4,"ngIf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"card-day","bg-white","p-3"],[1,"d-flex","align-items-start","cursor-pointer",3,"click"],[1,"col-auto","px-0"],["src","../../../assets/favicon/favicon.png"],[1,"text-danger","text-center"],[1,"col","pl-2","pr-0"],[1,"mt-0","mb-1"],[1,"d-flex","justify-content-between","mt-2"],[1,"d-flex","align-items-center"],["size","small","shape","round","color","primary",3,"click"],["src","../../../assets/icon/ion-icon/direction.svg","slot","end"],["color","primary","src","../../../assets/icon/ion-icon/electric.svg",1,"fs-4"],[1,"ml-2"],["color","primary","src","../../../assets/icon/ion-icon/changing-station.svg",1,"fs-4"]],template:function(e,n){1&e&&t.DNE(0,W,2,4,"ng-container",1)(1,Q,24,8,"ng-template",null,0,t.C5r),2&e&&t.Y8G("ngIf",n.chargingLocation)},dependencies:[C.bT,C.T3,p.mC,p.Jm,p.iq,p.he,B.D9],styles:[".card-day[_ngcontent-%COMP%]{border-radius:1rem}.card-day[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:2rem;height:2rem}"]}),g})();var $=s(4470),tt=s(4397),nt=s(2385);function et(r,g){if(1&r&&(t.j41(0,"div",17)(1,"span"),t.EFF(2,"\xa0"),t.k0s(),t.j41(3,"div"),t.EFF(4),t.k0s()()),2&r){const l=t.XpG();t.R7$(4),t.JRh(l.currentAddress)}}function ot(r,g){1&r&&t.eu8(0)}function it(r,g){if(1&r){const l=t.RV6();t.qex(0),t.j41(1,"ion-button",23),t.bIt("click",function(n){t.eBV(l);const o=t.XpG().$implicit,i=t.XpG(2);return t.Njj(i.clearFilter(n,o))}),t.j41(2,"ion-label"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.nrm(5,"ion-icon",24),t.k0s(),t.bVm()}if(2&r){const l=t.XpG().$implicit;t.R7$(3),t.JRh(t.bMT(4,1,l.text))}}function at(r,g){if(1&r){const l=t.RV6();t.qex(0),t.j41(1,"ion-button",23),t.bIt("click",function(n){t.eBV(l);const o=t.XpG().$implicit,i=t.XpG(2);return t.Njj(i.clearFilter(n,o))}),t.j41(2,"ion-label"),t.EFF(3),t.nI1(4,"translate"),t.k0s(),t.nrm(5,"ion-icon",24),t.k0s(),t.bVm()}if(2&r){const l=t.XpG().$implicit;t.R7$(3),t.JRh(t.bMT(4,1,l.text))}}function rt(r,g){if(1&r&&(t.qex(0)(1,20),t.DNE(2,ot,1,0,"ng-container",21)(3,it,6,3,"ng-container",21)(4,at,6,3,"ng-container",22),t.bVm()()),2&r){const l=g.$implicit;t.R7$(),t.Y8G("ngSwitch",l.type),t.R7$(),t.Y8G("ngSwitchCase","Nearby"),t.R7$(),t.Y8G("ngSwitchCase","Search")}}function lt(r,g){if(1&r&&(t.qex(0),t.j41(1,"div",18),t.DNE(2,rt,5,3,"ng-container",19),t.k0s(),t.bVm()),2&r){const l=t.XpG();t.R7$(2),t.Y8G("ngForOf",l.getFilters())}}const ct=[{path:"",component:(()=>{var r;class g{constructor(e,n,o,i,a){this.router=e,this.modalController=n,this.animationController=o,this.toastController=i,this.loadingController=a,this.APP_ROUTE=b._,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.currentPosition=u.c.app_default.geolocation.pos,this.chargingLocations=[],this.markerMaps=[],this.markers=[],this.ChargingLocationParams={TopLeftLat:10.914656,TopLeftLong:106.44876,RightBottomLat:10.305755,RightBottomLong:107.1056,PageNumber:1,PageSize:100},this.timeoutLoadData=-1,this.isWaitLoad=!1,this.loadingController.create({message:""}).then(d=>this.loading=d),(0,m.Xz)().then(d=>this.currentPosition=d)}ngOnInit(){(0,m.fA)({callback:e=>{null!=e&&e.currentAddress&&(this.currentAddress=null==e?void 0:e.currentAddress)}}),this.refreshCurrentPosition()}ngAfterViewInit(){if(this.google)this.createMap();else{let e=document.createElement("script");e.src=`https://maps.googleapis.com/maps/api/js?key=${u.c.apiKey}&v=weekly&language=vi&region=vi`,e.onload=()=>{setTimeout(()=>{this.createMap()},1e3)},window.document.head.append(e)}}resetData(){this.chargingLocations.length=0}pushData(e,n){1==this.paging.page&&(this.chargingLocations.length=0,this.markers.length=0),this.chargingLocations=this.chargingLocations.concat(e),n&&n(this.chargingLocations),this.chargingLocations.forEach(o=>{var i,a;this.markers.push({id:o.ChargeLocationId,title:o.LocAddress,position:{lat:null!==(i=o.LocLat)&&void 0!==i?i:u.c.app_default.geolocation.pos.lat,lng:null!==(a=o.LocLong)&&void 0!==a?a:u.c.app_default.geolocation.pos.lng}})}),this.createMarker()}totalData(){return this.chargingLocations.length}refreshData(e){var n=this;return(0,c.A)(function*(){n.filter={},n.paging.page=1,n.paging.active=!0,n.loadData_Paging(e)})()}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter={},this.filter.search=e.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,n){this.paging.sortfield=e||null,this.paging.sorttype=n||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var n=this;return(0,c.A)(function*(){n.paging.loading=!0,n.filter.search?(0,L.tC)({params:{Search:n.filter.search,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:o=>{var i;n.response=o,null!=o&&o.Succeeded?n.pushData(null!==(i=o.Data)&&void 0!==i?i:[]):(0,f.cX)(n.toastController,{},o).then(a=>a.present()),n.paging.loading=!1,n.paging.active=!(null==o||!o.HasNextPage),e&&e()}}):n.filter.ElectricTypeFilter||n.filter.ConnectorTypeFilter||n.filter.VConnectorStatusFilter||n.filter.VChargeSpeed?(0,L.Zd)({params:{ElectricTypeFilter:n.filter.ElectricTypeFilter,ConnectorTypeFilter:n.filter.ConnectorTypeFilter,VConnectorStatusFilter:n.filter.VConnectorStatusFilter,VChargeSpeed:n.filter.VChargeSpeed,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:o=>{var i;n.response=o,null!=o&&o.Succeeded?n.pushData(null!==(i=o.Data)&&void 0!==i?i:[]):(0,f.cX)(n.toastController,{},o).then(a=>a.present()),n.paging.loading=!1,n.paging.active=!(null==o||!o.HasNextPage),e&&e()}}):(0,L.Bc)({params:{TopLeftLat:n.ChargingLocationParams.TopLeftLat,TopLeftLong:n.ChargingLocationParams.TopLeftLong,RightBottomLat:n.ChargingLocationParams.RightBottomLat,RightBottomLong:n.ChargingLocationParams.RightBottomLong,PageNumber:n.paging.page,PageSize:n.paging.limit},callback:o=>{var i;n.response=o,null!=o&&o.Succeeded?n.pushData(null!==(i=o.Data)&&void 0!==i?i:[]):(0,f.cX)(n.toastController,{},o).then(a=>a.present()),n.paging.loading=!1,n.paging.active=!(null==o||!o.HasNextPage),e&&e()}})})()}openDirection(e,n){return(0,c.A)(function*(){e.preventDefault(),yield N.P.open({url:(0,y.LZ)(yield(0,m.Xz)(),{lat:null==n?void 0:n.LocLat,lng:null==n?void 0:n.LocLong})})})()}openDetail(e,n){var o=this;return(0,c.A)(function*(){var i,a;o.router.navigateByUrl(b._.CHARGING_LOCATION_DETAIL.replace(":id",null!==(i=null===(a=n.ChargeLocationId)||void 0===a?void 0:a.toString())&&void 0!==i?i:""))})()}getFilters(){var e=[];if(this.filter.search&&e.push({type:"Search",value:this.filter.search,text:this.filter.search}),this.filter.ElectricTypeFilter)switch(this.filter.ElectricTypeFilter){case 1:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"AC"});break;case 2:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"DC"});break;case 3:e.push({type:"ElectricTypeFilter",value:this.filter.ElectricTypeFilter,text:"AllElectricType"})}if(this.filter.VConnectorStatusFilter)switch(this.filter.VConnectorStatusFilter){case 2500:e.push({type:"VConnectorStatusFilter",value:this.filter.VConnectorStatusFilter,text:"ConnectorReady"});break;case 2599:e.push({type:"VConnectorStatusFilter",value:this.filter.VConnectorStatusFilter,text:"AllConnectorStatus"})}return this.filter.ConnectorTypeFilter&&this.filter.ConnectorTypeFilter.split(";").forEach(n=>{e.push({type:"ConnectorTypeFilter",value:n,text:n})}),this.filter.VChargeSpeed&&z.My._data.filter(n=>n.LookupId==this.filter.VChargeSpeed).forEach(n=>{e.push({type:"VChargeSpeed",value:n.LookupId,text:n.Objectvalue})}),e}clearFilter(e,n){var o=this;return(0,c.A)(function*(){if("Search"==n.type)o.filter.search=void 0;else if("ElectricTypeFilter"==n.type)o.filter.ElectricTypeFilter=void 0;else if("VConnectorStatusFilter"==n.type)o.filter.VConnectorStatusFilter=void 0;else if("ConnectorTypeFilter"==n.type){var i;o.filter.ConnectorTypeFilter=null===(i=o.filter.ConnectorTypeFilter)||void 0===i?void 0:i.split(";").filter(a=>a!=n.value).join(";")}else"VChargeSpeed"==n.type&&(o.filter.VChargeSpeed=void 0);o.filterChange()})()}waitLoad(){var e=this;return(0,c.A)(function*(){if(e.timeoutLoadData=1e3,e.isWaitLoad)return;e.isWaitLoad=!0;let n=setInterval(()=>{if(e.timeoutLoadData>=0)e.timeoutLoadData-=100;else{if(clearTimeout(n),e.isWaitLoad=!1,Object.keys(e.filter).map(o=>e.filter[o]?1:0).find(o=>1==o))return;e.refreshData()}},100)})()}refreshCurrentPosition(e){var n=this;return(0,c.A)(function*(){let o=yield(0,m.Xz)();Y.L.getCurrentPosition({enableHighAccuracy:!0}).then(function(){var i=(0,c.A)(function*(a){a.coords&&(o={lat:a.coords.latitude,lng:a.coords.longitude},yield(0,m.fj)({params:o}),n.createCurrentPosition(o),n.resetCamera(o),n.requestAddress(o))});return function(a){return i.apply(this,arguments)}}()),n.createCurrentPosition(o),n.resetCamera(o)})()}presentModalMarket(e,n){var o=this;return(0,c.A)(function*(){const i=yield o.modalController.create({component:q,componentProps:{ChargeLocationId:null==n?void 0:n.id},cssClass:"ion-modal-map-market"});i.onDidDismiss().then(a=>{var d,h,v,M,_,k,O,F,x,I;if("Direction"==a.role)o.initDirection({id:null!==(d=null===(h=a.data)||void 0===h?void 0:h.ChargeLocationId)&&void 0!==d?d:0,title:null!==(v=null!==(M=null===(_=a.data)||void 0===_?void 0:_.LocName)&&void 0!==M?M:null===(k=a.data)||void 0===k?void 0:k.LocAddress)&&void 0!==v?v:"",position:{lat:null!==(O=null===(F=a.data)||void 0===F?void 0:F.LocLat)&&void 0!==O?O:u.c.app_default.geolocation.pos.lat,lng:null!==(x=null===(I=a.data)||void 0===I?void 0:I.LocLong)&&void 0!==x?x:u.c.app_default.geolocation.pos.lng}});else if("GoogleMap"==a.role){var T,R,A,D,S,G,w,j,V,E;o.openDirectionByGoogleMap({id:null!==(T=null===(R=a.data)||void 0===R?void 0:R.ChargeLocationId)&&void 0!==T?T:0,title:null!==(A=null!==(D=null===(S=a.data)||void 0===S?void 0:S.LocName)&&void 0!==D?D:null===(G=a.data)||void 0===G?void 0:G.LocAddress)&&void 0!==A?A:"",position:{lat:null!==(w=null===(j=a.data)||void 0===j?void 0:j.LocLat)&&void 0!==w?w:u.c.app_default.geolocation.pos.lat,lng:null!==(V=null===(E=a.data)||void 0===E?void 0:E.LocLong)&&void 0!==V?V:u.c.app_default.geolocation.pos.lng}})}}),i.present()})()}presentModalFilterChargingLocationComponent(e){var n=this;return(0,c.A)(function*(){const o=yield n.modalController.create({component:nt.T,componentProps:{filter:Object.assign({},n.filter,{search:null})},backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-filter",enterAnimation:i=>(0,f.l9)(n.animationController,i),leaveAnimation:i=>(0,f.CV)(n.animationController,i)});o.onDidDismiss().then(i=>{"clear"==i.role?(n.filter={},n.filterChange()):"submit"==i.role&&(n.filter=i.data,n.filterChange())}),o.present()})()}presentModalVoice(e){var n=this;return(0,c.A)(function*(){const o=yield n.modalController.create({component:tt.t,backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-breakpoint",initialBreakpoint:.75});o.onDidDismiss().then(i=>{"success"==i.role&&i.data&&(n.filter.search=i.data,n.filterChange())}),o.present()})()}presentModalSearchChargingLocationComponent(e){var n=this;return(0,c.A)(function*(){(0,f.Gn)(n.modalController,n.animationController)})()}presentModalNotify(e){var n=this;return(0,c.A)(function*(){(0,f.He)(n.modalController,n.animationController)})()}get google(){var e;if(null!==(e=window.google)&&void 0!==e&&e.maps)return window.google}createMap(){var e=this;return(0,c.A)(function*(){var n;e.map=new e.google.maps.Map(window.document.getElementById("map"),{id:`${null===(n=yield H.p.getId())||void 0===n?void 0:n.identifier}_${Math.floor(1e6*Math.random())}`,center:yield(0,m.Xz)(),zoom:u.c.app_default.geolocation.zoom,maxZoom:18,minZoom:6,disableDefaultUI:!0}),window.map=e.map,e.map.addListener("bounds_changed",()=>{let o=e.map.getBounds({asGeoJSON:!0});if(o&&"object"==typeof o){let i=[],a=[];Object.keys(o).forEach(d=>{i.push(o[d].lo),a.push(o[d].hi)}),e.ChargingLocationParams.TopLeftLat=Math.min.apply(null,a),e.ChargingLocationParams.TopLeftLong=Math.max.apply(null,i),e.ChargingLocationParams.RightBottomLat=Math.min.apply(null,i),e.ChargingLocationParams.RightBottomLong=Math.max.apply(null,a)}e.waitLoad()}),e.refreshCurrentPosition()})()}resetCamera(e){var n=this;return(0,c.A)(function*(){if(n.map){let o=window.google.maps.CameraOptions={zoom:14,center:null!=e?e:yield(0,m.Xz)()};n.map.moveCamera(o)}})()}createCurrentPosition(e){var n=this;return(0,c.A)(function*(){n.markerGeoLocaltion&&n.markerGeoLocaltion.setMap(null),n.markerGeoLocaltion=new n.google.maps.Marker({map:n.map,position:null!=e?e:yield(0,m.Xz)(),icon:u.c.app_default.icon.currentlocaltion})})()}createMarker(){var e=this;return(0,c.A)(function*(){e.markerMaps.forEach(n=>{n.setMap(null)}),e.markerMaps.length=0,e.markers.forEach(n=>{let o=new e.google.maps.Marker({position:n.position,map:e.map,title:n.title,icon:u.c.app_default.icon.marker,optimized:!0});o.addListener("click",()=>{e.presentModalMarket(void 0,n)}),e.markerMaps.push(o)})})()}initDirection(e){var n=this;return(0,c.A)(function*(){n.directionsService=new n.google.maps.DirectionsService,n.directionsRenderer=new n.google.maps.DirectionsRenderer,n.directionsRenderer.setMap(n.map),n.directionsService.route({origin:new n.google.maps.LatLng(yield(0,m.Xz)()),destination:new n.google.maps.LatLng(e.position),travelMode:"DRIVING"},(o,i)=>{"OK"==i?(n.directionMarker=e,n.directionsRenderer.setDirections(o)):((0,f.cX)(n.toastController,{message:"API ch\u1ec9 \u0111\u01b0\u1eddng kh\xf4ng ho\u1ea1t \u0111\u1ed9ng!"}).then(a=>a.present()),n.directionMarker=void 0,n.presentModalMarket(void 0,e))})})()}clearDirection(){var e=this;return(0,c.A)(function*(){e.directionMarker=void 0,e.directionsRenderer.setMap(null)})()}openDirectionByGoogleMap(e){return(0,c.A)(function*(){yield N.P.open({url:(0,y.LZ)(yield(0,m.Xz)(),e.position)})})()}selectChargingLocation(e,n){var o=this;return(0,c.A)(function*(){var i,a,d,h,v,M,_;o.initDirection({id:null!==(i=n.ChargeLocationId)&&void 0!==i?i:0,title:null!==(a=null!==(d=n.LocName)&&void 0!==d?d:n.LocAddress)&&void 0!==a?a:"",position:{lat:null!==(h=n.LocLat)&&void 0!==h?h:u.c.app_default.geolocation.pos.lat,lng:null!==(v=n.LocLong)&&void 0!==v?v:u.c.app_default.geolocation.pos.lng}}),o.resetCamera({lat:null!==(M=n.LocLat)&&void 0!==M?M:u.c.app_default.geolocation.pos.lat,lng:null!==(_=n.LocLong)&&void 0!==_?_:u.c.app_default.geolocation.pos.lng}),o.chargingLocations.length=0})()}requestAddress(e){(0,$.S)({params:{lat:e.lat,lng:e.lng},callback:n=>{var o,i,a;"OK"==(null==n?void 0:n.status)&&(this.currentAddress=null!==(o=(null!==(i=n.results[0])&&void 0!==i?i:{}).formatted_address)&&void 0!==o?o:null===(a=n.plus_code)||void 0===a?void 0:a.compound_code,(0,m.RR)({params:{currentAddress:this.currentAddress}}))}})}}return(r=g).\u0275fac=function(e){return new(e||r)(t.rXU(P.Ix),t.rXU(p.W3),t.rXU(p.Hx),t.rXU(p.K_),t.rXU(p.Xi))},r.\u0275cmp=t.VBU({type:r,selectors:[["app-map"]],decls:21,vars:3,consts:[["color","primary"],[1,"container-location","bg-primary"],[1,"d-flex","align-items-center"],[1,"col","px-0"],["color","light"],["src","../../../assets/icon/ion-icon/location.svg"],[3,"click"],["class","current-address",4,"ngIf"],["color","dark","src","../../../assets/icon/ion-icon/microphone.svg"],[1,"col-auto","pl-2","pr-0"],["src","../../../assets/icon/ion-icon/filter.svg"],[4,"ngIf"],["scroll-x","false","scroll-y","false",3,"fullscreen"],["id","map"],[1,"position-absolute","bottom-0","right-0"],["id","btn-geolocation","color","light",3,"click"],["src","../../../assets/icon/map/geolocation.svg"],[1,"current-address"],[1,"row","flex-nowrap","mt-3","list-filters","overflow-auto","text-nowrap"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["mode","ios","size","small","shape","round","color","light",3,"click"],["slot","end","name","close-outline"]],template:function(e,n){1&e&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"div",1)(3,"div",2)(4,"div",3)(5,"ion-chip",4)(6,"span"),t.nrm(7,"ion-icon",5),t.k0s(),t.j41(8,"ion-label",6),t.bIt("click",function(i){return n.presentModalSearchChargingLocationComponent(i)}),t.DNE(9,et,5,1,"div",7),t.k0s(),t.j41(10,"ion-button",6),t.bIt("click",function(i){return n.presentModalVoice(i)}),t.nrm(11,"ion-icon",8),t.k0s()()(),t.j41(12,"div",9)(13,"ion-button",6),t.bIt("click",function(i){return n.presentModalFilterChargingLocationComponent(i)}),t.nrm(14,"ion-icon",10),t.k0s()()()(),t.DNE(15,lt,3,1,"ng-container",11),t.k0s()(),t.j41(16,"ion-content",12),t.nrm(17,"div",13),t.j41(18,"div",14)(19,"ion-button",15),t.bIt("click",function(i){return n.refreshCurrentPosition(i)}),t.nrm(20,"ion-icon",16),t.k0s()()()),2&e&&(t.R7$(9),t.Y8G("ngIf",n.currentAddress),t.R7$(6),t.Y8G("ngIf",n.getFilters().length),t.R7$(),t.Y8G("fullscreen",!0))},dependencies:[C.Sq,C.bT,C.ux,C.e1,C.fG,p.Jm,p.ZB,p.W9,p.eU,p.iq,p.he,p.ai,B.D9],styles:[".container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{margin:0;width:100%;min-height:2.5rem;border-radius:2.5rem;padding-inline-start:.5rem;padding-inline-end:.5rem;background:var(--ion-color-light);color:var(--ion-color-medium);padding-inline-end:.25rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;margin-right:.25rem;font-size:1rem}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{flex-grow:1}.container-location[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2rem;min-height:2rem;margin-left:.5rem;--box-shadow: none;--border-width: 0}.container-location[_ngcontent-%COMP%]   .current-address[_ngcontent-%COMP%]{position:relative}.container-location[_ngcontent-%COMP%]   .current-address[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{transform:translateY(-50%);position:absolute;top:50%;left:0;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.container-location[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;--border-width: 1px;--border-style: solid;--border-color: rgb(229, 229, 229, .8);--background: var(--ion-color-light);--color: var(--ion-color-primary)}.map-header[_ngcontent-%COMP%]{position:absolute;top:1rem;left:0;right:0;z-index:1}.map-header[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--ion-background-color: #fff;--border-radius: 1.5rem}.map-header[_ngcontent-%COMP%]   .response-search[_ngcontent-%COMP%]{position:absolute;top:3.5rem;left:0;right:0;z-index:1;padding:1rem}.map-header[_ngcontent-%COMP%]   .response-search[_ngcontent-%COMP%]   .response-content[_ngcontent-%COMP%]{border-radius:.75rem;background-color:#fff;box-shadow:4px 4px 12px #0101011a;max-height:20rem;overflow-x:hidden;overflow-y:auto}.map-header[_ngcontent-%COMP%]   .response-search[_ngcontent-%COMP%]   .response-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.75rem}.map-header[_ngcontent-%COMP%]   .direction-marker-bar[_ngcontent-%COMP%]{background-color:#fff}.map-header[_ngcontent-%COMP%]   .direction-marker-bar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--box-shadow: none;--padding-top: .5rem;--padding-bottom: .5rem;--padding-start: .5rem;--padding-end: .5rem;margin-right:1rem}.map-header[_ngcontent-%COMP%]   .direction-marker-bar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}.map-header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{min-height:2.5rem;border-radius:1.25rem;padding:0 1rem;background:var(--ion-color-light)}.map-header[_ngcontent-%COMP%]   .btn-notify[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-radius: 50%;margin:0}.map-header[_ngcontent-%COMP%]   .btn-notify[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:0 .5rem 0 0}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover   ion-icon[slot=end][_ngcontent-%COMP%]{color:var(--ion-color-danger)}.list-filters[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:first-child{margin-left:1rem}#map[_ngcontent-%COMP%]{width:100%;height:100%;width:100vw;height:100vh}#btn-geolocation[_ngcontent-%COMP%]{width:3rem;height:3rem;min-width:3rem;min-height:3rem;--padding-top: 0;--padding-start: 0;--padding-end: 0;--padding-bottom: 0;--border-radius: 50%;margin:0 1rem 7rem 0}#btn-geolocation[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:3rem;color:var(--ion-color-tertiary)}"]}),g})()}];let st=(()=>{var r;class g{}return(r=g).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.$C({type:r}),r.\u0275inj=t.G2t({imports:[P.iI.forChild(ct),P.iI]}),g})();var gt=s(3584);let dt=(()=>{var r;class g{}return(r=g).\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.$C({type:r}),r.\u0275inj=t.G2t({imports:[C.MD,U.YN,p.bv,st,gt.x]}),g})()}}]);