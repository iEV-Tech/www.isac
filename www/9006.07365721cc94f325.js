"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9006],{6944:(M,R,d)=>{d.d(R,{KX:()=>C,_$:()=>k,aN:()=>y,cb:()=>$,eu:()=>b,kO:()=>g,wm:()=>_});var f=d(467),S=d(5972);const g=function(){var n=(0,f.A)(function*(a){var t,o,c,u;a.params=a.params||{},(0,S.hm)({url:"api/ChargingSession/get-mychargingsessions",params:{VSessionStatus:null!==(t=a.params.VSessionStatus)&&void 0!==t?t:null,VSessionStatusMulti:null!==(o=a.params.VSessionStatusMulti)&&void 0!==o?o:null,PageNumber:null!==(c=a.params.PageNumber)&&void 0!==c?c:1,PageSize:null!==(u=a.params.PageSize)&&void 0!==u?u:10},success:p=>{"function"==typeof a.callback&&a.callback(p.data||null)},error:p=>{var P;"function"==typeof a.callback&&a.callback(null==p||null===(P=p.response)||void 0===P?void 0:P.data),console.error(p)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),C=function(){var n=(0,f.A)(function*(a){var t,o,c;a.params=a.params||{},(0,S.hm)({url:"api/ChargingSession/get-mybyordercode",params:{OrderCode:null!==(t=a.params.OrderCode)&&void 0!==t?t:null,PageNumber:null!==(o=a.params.PageNumber)&&void 0!==o?o:1,PageSize:null!==(c=a.params.PageSize)&&void 0!==c?c:10},success:u=>{"function"==typeof a.callback&&a.callback(u.data||null)},error:u=>{var p;"function"==typeof a.callback&&a.callback(null==u||null===(p=u.response)||void 0===p?void 0:p.data),console.error(u)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),$=function(){var n=(0,f.A)(function*(a){a.params=a.params||{},(0,S.hm)({url:`api/ChargingSession/get-mybyid/${a.params.ChargeSessionId}`,success:t=>{"function"==typeof a.callback&&a.callback(t.data||null)},error:t=>{var o;"function"==typeof a.callback&&a.callback(null==t||null===(o=t.response)||void 0===o?void 0:o.data),console.error(t)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,f.A)(function*(a){var t,o,c;a.params=a.params||{},(0,S.Ll)({url:"api/ChargingSession/start-create",params:{StationCode:null!==(t=a.params.StationCode)&&void 0!==t?t:null,ConnectorId:null!==(o=a.params.ConnectorId)&&void 0!==o?o:null,OrderCode:null!==(c=a.params.OrderCode)&&void 0!==c?c:null},success:u=>{"function"==typeof a.callback&&a.callback(u.data||null)},error:u=>{var p;"function"==typeof a.callback&&a.callback(null==u||null===(p=u.response)||void 0===p?void 0:p.data),console.error(u)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),_=function(){var n=(0,f.A)(function*(a){var t;a.params=a.params||{},(0,S.Ll)({url:"api/ChargingSession/start",params:{ChargeSessionId:null!==(t=a.params.ChargeSessionId)&&void 0!==t?t:null},success:o=>{"function"==typeof a.callback&&a.callback(o.data||null)},error:o=>{var c;"function"==typeof a.callback&&a.callback(null==o||null===(c=o.response)||void 0===c?void 0:c.data),console.error(o)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),k=function(){var n=(0,f.A)(function*(a){var t;a.params=a.params||{},(0,S.Ll)({url:"api/ChargingSession/stop",params:{ChargeSessionId:null!==(t=a.params.ChargeSessionId)&&void 0!==t?t:null},success:o=>{"function"==typeof a.callback&&a.callback(o.data||null)},error:o=>{var c;"function"==typeof a.callback&&a.callback(null==o||null===(c=o.response)||void 0===c?void 0:c.data),console.error(o)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),b=function(){var n=(0,f.A)(function*(a){a.params=a.params||{},(0,S.hm)({url:`api/ChargingSession/monitor/${a.params.StationCode}/${a.params.ConnectorId}`,success:t=>{"function"==typeof a.callback&&a.callback(t.data||null)},error:t=>{var o;"function"==typeof a.callback&&a.callback(null==t||null===(o=t.response)||void 0===o?void 0:o.data),console.error(t)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}()},9006:(M,R,d)=>{d.r(R),d.d(R,{ChargingSessionPageModule:()=>V});var f=d(177),S=d(9417),g=d(8974),C=d(2175),$=d(467),y=d(6944),F=d(6539),_=d(1312),I=d(8650),k=d(3588),b=d(8833),n=d(4438),a=d(4842);const t=r=>({$implicit:r});function o(r,h){1&r&&(n.j41(0,"div",15),n.nrm(1,"ion-spinner",16),n.k0s())}function c(r,h){1&r&&(n.j41(0,"div",17),n.nrm(1,"img",18),n.j41(2,"div",19),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&r&&(n.R7$(3),n.JRh(n.bMT(4,1,"NoChargingSession")))}function u(r,h){if(1&r&&(n.qex(0),n.j41(1,"div",20),n.eu8(2,21),n.k0s(),n.bVm()),2&r){const m=h.$implicit;n.XpG();const i=n.sdS(35);n.R7$(2),n.Y8G("ngTemplateOutlet",i)("ngTemplateOutletContext",n.eq3(2,t,m))}}function p(r,h){if(1&r){const m=n.RV6();n.j41(0,"ion-infinite-scroll",22),n.bIt("ionInfinite",function(e){n.eBV(m);const s=n.XpG();return n.Njj(s.onIonInfinite(e))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}function P(r,h){if(1&r){const m=n.RV6();n.j41(0,"div",23),n.bIt("click",function(e){const s=n.eBV(m).$implicit,l=n.XpG();return n.Njj(l.openDetail(e,s))}),n.j41(1,"div",24)(2,"div",25)(3,"h6",26)(4,"b"),n.EFF(5),n.k0s()(),n.j41(6,"div")(7,"small",27),n.EFF(8),n.k0s()()(),n.j41(9,"div")(10,"ion-chip",28),n.EFF(11),n.k0s()()(),n.j41(12,"div",29)(13,"div",30)(14,"div",31)(15,"small"),n.EFF(16),n.nI1(17,"translate"),n.k0s()(),n.j41(18,"div",32)(19,"ion-chip",33),n.nrm(20,"ion-icon",34),n.k0s(),n.j41(21,"b"),n.EFF(22),n.k0s()()(),n.j41(23,"div",30)(24,"div",31)(25,"small"),n.EFF(26),n.nI1(27,"translate"),n.k0s()(),n.j41(28,"div",32)(29,"ion-chip",33),n.nrm(30,"ion-icon",35),n.k0s(),n.j41(31,"b"),n.EFF(32),n.k0s()()(),n.j41(33,"div",30)(34,"div",31)(35,"small"),n.EFF(36,"% PIN"),n.k0s()(),n.j41(37,"div",32)(38,"ion-chip",33),n.nrm(39,"ion-icon",36),n.k0s(),n.j41(40,"b"),n.EFF(41),n.k0s()()(),n.j41(42,"div",30)(43,"div",31)(44,"small"),n.EFF(45),n.nI1(46,"translate"),n.k0s()(),n.j41(47,"div",32)(48,"ion-chip",33),n.nrm(49,"ion-icon",37),n.k0s(),n.j41(50,"b"),n.EFF(51),n.nI1(52,"translate"),n.k0s()()()()()}if(2&r){let m,i,e;const s=h.$implicit,l=n.XpG();n.R7$(5),n.JRh(s.LocName),n.R7$(3),n.JRh(l.APP_FUNC_FormatDate(s.ChargingStart)),n.R7$(2),n.Y8G("color",l.APP_FUNC_GetColor_VSessionStatus(s.VSessionStatus)),n.R7$(),n.JRh(s.VSessionStatusName),n.R7$(5),n.JRh(n.bMT(17,16,"ElectricUsed")),n.R7$(3),n.Y8G("color",l.APP_FUNC_GetColor_VSessionStatus(s.VSessionStatus)),n.R7$(3),n.SpI("",l.APP_FUNC_RoundNumber(null!==(m=s.ElectricUsed)&&void 0!==m?m:0)," kWh"),n.R7$(4),n.JRh(n.bMT(27,18,"ChargingPackage")),n.R7$(3),n.Y8G("color",l.APP_FUNC_GetColor_VSessionStatus(s.VSessionStatus)),n.R7$(3),n.SpI("",null!==(i=s.MaxElectricUsed)&&void 0!==i?i:0," kWh"),n.R7$(6),n.Y8G("color",l.APP_FUNC_GetColor_VSessionStatus(s.VSessionStatus)),n.R7$(3),n.SpI("",null!==(e=s.BatteryPercent)&&void 0!==e?e:0," %"),n.R7$(4),n.JRh(n.bMT(46,20,"Time")),n.R7$(3),n.Y8G("color",l.APP_FUNC_GetColor_VSessionStatus(s.VSessionStatus)),n.R7$(3),n.Lme("",l.getTimeCharging(s.ChargingStart,s.ChargingEnd)," ",n.bMT(52,22,"Minute"),"")}}const T=[{path:"",component:(()=>{var r;class h{constructor(i,e,s,l,v){this.router=i,this.activatedRoute=e,this.modalController=s,this.toastController=l,this.loadingController=v,this.APP_ROUTE=b._,this.APP_FUNC_FormatDate=_.Rv,this.APP_FUNC_DivDateTime=_.Wv,this.APP_FUNC_RoundNumber=_.Rw,this.APP_FUNC_GetColor_VSessionStatus=_.kH,this.v_session_status=k.jT,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.dataForm={},this.chargingSessions=[],this.loadingController.create({message:""}).then(O=>this.loading=O)}ngOnInit(){var i=this;let e=this.activatedRoute.snapshot.queryParamMap.get("vss")||"";e&&(this.filter.VSessionStatus=parseInt(e)||void 0);let s=this.activatedRoute.snapshot.queryParamMap.get("vssm")||"";s&&(this.filter.VSessionStatusMulti=s||void 0),(0,$.A)(function*(){(yield(0,F.kU)())&&i.refreshData()})()}onIonRefresher(i){this.refreshData(()=>{i.target.complete()})}onIonInfinite(i){this.loadMore(()=>{i.target.complete()})}resetData(){this.chargingSessions.length=0}pushData(i){1==this.paging.page&&(this.chargingSessions.length=0),this.chargingSessions=this.chargingSessions.concat(i)}refreshData(i){this.paging.page=1,this.paging.active=!0,this.loadData_Paging(i)}loadMore(i){this.paging.page+=1,this.loadData_Paging(i)}searchChange(i){this.filter.search=i.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(i,e){this.paging.sortfield=i||null,this.paging.sorttype=e||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{vss:this.filter.VSessionStatus,vssm:this.filter.VSessionStatusMulti},queryParamsHandling:"merge",replaceUrl:!0}),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(i){var e=this;return(0,$.A)(function*(){e.paging.loading=!0,(0,y.kO)({loading:s=>{var l,v;s?null===(l=e.loading)||void 0===l||l.present():null===(v=e.loading)||void 0===v||v.dismiss()},params:{VSessionStatus:e.filter.VSessionStatus,VSessionStatusMulti:e.filter.VSessionStatusMulti,PageNumber:e.paging.page,PageSize:e.paging.limit},callback:s=>{var l;e.response=s,null!=s&&s.Succeeded?e.pushData(null!==(l=s.Data)&&void 0!==l?l:[]):(0,I.cX)(e.toastController,{},s).then(v=>v.present()),e.paging.loading=!1,e.paging.active=!(null==s||!s.HasNextPage),i&&i()}})})()}filterDate(i){var e=this;return(0,$.A)(function*(){e.dataForm.filterDate=i})()}changeVSessionStatus(i){this.filter.VSessionStatus=i.detail.value||void 0,this.filterChange()}changeVSessionStatusMulti(i){this.filter.VSessionStatusMulti=i.detail.value||void 0,this.filterChange()}getTimeCharging(i,e){return(0,_.Wv)(i,i?null!=e?e:new Date:null)}openDetail(i,e){var s=this;return(0,$.A)(function*(){var l,v;s.router.navigateByUrl(b._.CHARGING_SESSION_DETAIL.replace(":id",null!==(l=null===(v=e.ChargeSessionId)||void 0===v?void 0:v.toString())&&void 0!==l?l:""))})()}}return(r=h).\u0275fac=function(i){return new(i||r)(n.rXU(C.Ix),n.rXU(C.nX),n.rXU(g.W3),n.rXU(g.K_),n.rXU(g.Xi))},r.\u0275cmp=n.VBU({type:r,selectors:[["app-charging-session"]],decls:36,vars:27,consts:[["templateChargingSession",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],["class","container-loading",4,"ngIf"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container","pt-3","pb-4"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-day","rounded","bg-white","p-3","cursor-pointer",3,"click"],[1,"d-flex","align-items-start"],[1,"flex-grow-1"],[1,"my-0"],[1,"text-muted"],[1,"no-opacity",3,"color"],[1,"row","mt-3"],[1,"col-6","mb-2"],[1,"mb-1"],[1,"d-flex","align-items-center"],[1,"ion-chip-icon",3,"color"],["src","../../../assets/icon/ion-icon/electric-2.svg"],["src","../../../assets/icon/ion-icon/changing-package-2.svg"],["src","../../../assets/icon/ion-icon/battery-3.svg"],["src","../../../assets/icon/ion-icon/time-2.svg"]],template:function(i,e){if(1&i){const s=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content",3)(8,"ion-refresher",4),n.bIt("ionRefresh",function(v){return n.eBV(s),n.Njj(e.onIonRefresher(v))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.j41(10,"div",5)(11,"ion-segment",6),n.bIt("ionChange",function(v){return n.eBV(s),n.Njj(e.changeVSessionStatusMulti(v))}),n.j41(12,"ion-segment-button",7)(13,"ion-label"),n.EFF(14),n.nI1(15,"translate"),n.k0s()(),n.j41(16,"ion-segment-button",8)(17,"ion-label"),n.EFF(18),n.nI1(19,"translate"),n.k0s()(),n.j41(20,"ion-segment-button",8)(21,"ion-label"),n.EFF(22),n.nI1(23,"translate"),n.k0s()(),n.j41(24,"ion-segment-button",8)(25,"ion-label"),n.EFF(26),n.nI1(27,"translate"),n.k0s()()()(),n.DNE(28,o,2,0,"div",9)(29,c,5,3,"div",10),n.j41(30,"div",11)(31,"div",12),n.DNE(32,u,3,4,"ng-container",13),n.k0s()(),n.DNE(33,p,2,0,"ion-infinite-scroll",14),n.k0s(),n.DNE(34,P,53,24,"ng-template",null,0,n.C5r)}if(2&i){let s;n.R7$(3),n.Y8G("defaultHref",e.APP_ROUTE.TABS_DEFAULT),n.R7$(2),n.JRh(n.bMT(6,17,"ChargingSessionHistory")),n.R7$(2),n.Y8G("fullscreen",!0),n.R7$(4),n.Y8G("value",null!==(s=e.filter.VSessionStatusMulti)&&void 0!==s?s:""),n.R7$(3),n.JRh(n.bMT(15,19,"All")),n.R7$(2),n.FS9("value",e.v_session_status.DangSac),n.R7$(2),n.JRh(n.bMT(19,21,"Charging")),n.R7$(2),n.FCK("value","",e.v_session_status.DaSac,",",e.v_session_status.DaThanhToan,""),n.R7$(2),n.JRh(n.bMT(23,23,"Complete")),n.R7$(2),n.FS9("value",e.v_session_status.HuyPhienSac),n.R7$(2),n.JRh(n.bMT(27,25,"Error")),n.R7$(2),n.Y8G("ngIf",!e.response),n.R7$(),n.Y8G("ngIf",e.response&&!e.chargingSessions.length),n.R7$(3),n.Y8G("ngForOf",e.chargingSessions),n.R7$(),n.Y8G("ngIf",e.paging.active)}},dependencies:[f.Sq,f.bT,f.T3,g.QW,g.ZB,g.W9,g.eU,g.iq,g.Ax,g.Hp,g.he,g.To,g.Ki,g.Gp,g.eP,g.w2,g.BC,g.ai,g.Je,g.el,a.D9],styles:[".card-day.rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-day[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:.25rem}.filter[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:.75rem .5rem}.status-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;vertical-align:middle;font-size:1.2rem}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.ion-chip-icon[_ngcontent-%COMP%]{margin:0 .5rem 0 0;padding:.25rem}.ion-chip-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}"]}),h})()}];let j=(()=>{var r;class h{}return(r=h).\u0275fac=function(i){return new(i||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[C.iI.forChild(T),C.iI]}),h})();var E=d(9500);let V=(()=>{var r;class h{}return(r=h).\u0275fac=function(i){return new(i||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[f.MD,S.YN,g.bv,j,E.x]}),h})()}}]);