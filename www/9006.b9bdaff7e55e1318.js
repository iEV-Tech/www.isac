"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9006],{6944:(F,b,d)=>{d.d(b,{KX:()=>S,_$:()=>y,aN:()=>R,cb:()=>$,eu:()=>P,kO:()=>g,wm:()=>_});var f=d(467),v=d(7158);const g=function(){var n=(0,f.A)(function*(a){var t,s,c;a.params=a.params||{},(0,v.hm)({url:"api/ChargingSession/get-mychargingsessions",params:{VSessionStatus:null!==(t=a.params.VSessionStatus)&&void 0!==t?t:null,PageNumber:null!==(s=a.params.PageNumber)&&void 0!==s?s:1,PageSize:null!==(c=a.params.PageSize)&&void 0!==c?c:10},success:l=>{"function"==typeof a.callback&&a.callback(l.data||null)},error:l=>{var m;"function"==typeof a.callback&&a.callback(null==l||null===(m=l.response)||void 0===m?void 0:m.data),console.error(l)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),S=function(){var n=(0,f.A)(function*(a){var t,s,c;a.params=a.params||{},(0,v.hm)({url:"api/ChargingSession/get-mybyordercode",params:{OrderCode:null!==(t=a.params.OrderCode)&&void 0!==t?t:null,PageNumber:null!==(s=a.params.PageNumber)&&void 0!==s?s:1,PageSize:null!==(c=a.params.PageSize)&&void 0!==c?c:10},success:l=>{"function"==typeof a.callback&&a.callback(l.data||null)},error:l=>{var m;"function"==typeof a.callback&&a.callback(null==l||null===(m=l.response)||void 0===m?void 0:m.data),console.error(l)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),$=function(){var n=(0,f.A)(function*(a){a.params=a.params||{},(0,v.hm)({url:`api/ChargingSession/get-mybyid/${a.params.ChargeSessionId}`,success:t=>{"function"==typeof a.callback&&a.callback(t.data||null)},error:t=>{var s;"function"==typeof a.callback&&a.callback(null==t||null===(s=t.response)||void 0===s?void 0:s.data),console.error(t)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),R=function(){var n=(0,f.A)(function*(a){var t,s,c;a.params=a.params||{},(0,v.Ll)({url:"api/ChargingSession/start-create",params:{StationCode:null!==(t=a.params.StationCode)&&void 0!==t?t:null,ConnectorId:null!==(s=a.params.ConnectorId)&&void 0!==s?s:null,OrderCode:null!==(c=a.params.OrderCode)&&void 0!==c?c:null},success:l=>{"function"==typeof a.callback&&a.callback(l.data||null)},error:l=>{var m;"function"==typeof a.callback&&a.callback(null==l||null===(m=l.response)||void 0===m?void 0:m.data),console.error(l)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),_=function(){var n=(0,f.A)(function*(a){var t;a.params=a.params||{},(0,v.Ll)({url:"api/ChargingSession/start",params:{ChargeSessionId:null!==(t=a.params.ChargeSessionId)&&void 0!==t?t:null},success:s=>{"function"==typeof a.callback&&a.callback(s.data||null)},error:s=>{var c;"function"==typeof a.callback&&a.callback(null==s||null===(c=s.response)||void 0===c?void 0:c.data),console.error(s)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,f.A)(function*(a){var t;a.params=a.params||{},(0,v.Ll)({url:"api/ChargingSession/stop",params:{ChargeSessionId:null!==(t=a.params.ChargeSessionId)&&void 0!==t?t:null},success:s=>{"function"==typeof a.callback&&a.callback(s.data||null)},error:s=>{var c;"function"==typeof a.callback&&a.callback(null==s||null===(c=s.response)||void 0===c?void 0:c.data),console.error(s)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}(),P=function(){var n=(0,f.A)(function*(a){a.params=a.params||{},(0,v.hm)({url:`api/ChargingSession/monitor/${a.params.StationCode}/${a.params.ConnectorId}`,success:t=>{"function"==typeof a.callback&&a.callback(t.data||null)},error:t=>{var s;"function"==typeof a.callback&&a.callback(null==t||null===(s=t.response)||void 0===s?void 0:s.data),console.error(t)},loading:null==a?void 0:a.loading})});return function(t){return n.apply(this,arguments)}}()},9006:(F,b,d)=>{d.r(b),d.d(b,{ChargingSessionPageModule:()=>j});var f=d(177),v=d(9417),g=d(4488),S=d(2175),$=d(467),R=d(6944),k=d(6539),_=d(1312),I=d(8650),y=d(3588),P=d(8833),n=d(4438),a=d(4842);function t(o,h){1&o&&(n.j41(0,"div",14),n.nrm(1,"ion-spinner",15),n.k0s())}function s(o,h){1&o&&(n.j41(0,"div",16),n.nrm(1,"img",17),n.j41(2,"div",18),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&o&&(n.R7$(3),n.JRh(n.bMT(4,1,"NoChargingSession")))}const c=o=>({$implicit:o});function l(o,h){if(1&o&&(n.qex(0),n.j41(1,"div",19),n.eu8(2,20),n.k0s(),n.bVm()),2&o){const u=h.$implicit;n.XpG();const e=n.sdS(34);n.R7$(2),n.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",n.eq3(2,c,u))}}function m(o,h){if(1&o){const u=n.RV6();n.j41(0,"ion-infinite-scroll",21),n.bIt("ionInfinite",function(i){n.eBV(u);const r=n.XpG();return n.Njj(r.onIonInfinite(i))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}function E(o,h){if(1&o){const u=n.RV6();n.j41(0,"div",22),n.bIt("click",function(){const r=n.eBV(u).$implicit,p=n.XpG();return n.Njj(p.openDetail(r.ChargeSessionId))}),n.j41(1,"div",23)(2,"div",24)(3,"h6",25)(4,"b"),n.EFF(5),n.k0s()(),n.j41(6,"div")(7,"small",26),n.EFF(8),n.k0s()()(),n.j41(9,"div")(10,"ion-chip",27),n.EFF(11),n.k0s()()(),n.j41(12,"div",28)(13,"div",29)(14,"div",30)(15,"small"),n.EFF(16,"\u0110i\u1ec7n n\u0103ng ti\xeau th\u1ee5"),n.k0s()(),n.j41(17,"div",31),n.nrm(18,"ion-icon",32),n.j41(19,"b"),n.EFF(20),n.k0s()()(),n.j41(21,"div",29)(22,"div",30)(23,"small"),n.EFF(24,"G\xf3i s\u1ea1c"),n.k0s()(),n.j41(25,"div",31),n.nrm(26,"ion-icon",33),n.j41(27,"b"),n.EFF(28),n.k0s()()(),n.j41(29,"div",29)(30,"div",30)(31,"small"),n.EFF(32,"% PIN"),n.k0s()(),n.j41(33,"div",31),n.nrm(34,"ion-icon",34),n.j41(35,"b"),n.EFF(36),n.k0s()()(),n.j41(37,"div",29)(38,"div",30)(39,"small"),n.EFF(40,"Th\u1eddi gian"),n.k0s()(),n.j41(41,"div",31),n.nrm(42,"ion-icon",35),n.j41(43,"b"),n.EFF(44),n.k0s()()()()()}if(2&o){const u=h.$implicit,e=n.XpG();let i,r,p;n.R7$(5),n.JRh(u.LocName),n.R7$(3),n.JRh(e.APP_FUNC_FormatDate(u.ChargingStart)),n.R7$(2),n.Y8G("color",e.APP_FUNC_GetColor_VSessionStatus(u.VSessionStatus)),n.R7$(1),n.JRh(u.VSessionStatusName),n.R7$(9),n.SpI("",e.APP_FUNC_RoundNumber(null!==(i=u.ElectricUsed)&&void 0!==i?i:0)," kWh"),n.R7$(8),n.SpI("",null!==(r=u.MaxElectricUsed)&&void 0!==r?r:0," kWh"),n.R7$(8),n.SpI("",null!==(p=u.BatteryPercent)&&void 0!==p?p:0," %"),n.R7$(8),n.SpI("",e.getTimeCharging(u.ChargingStart,u.ChargingEnd)," ph\xfat")}}const T=[{path:"",component:(()=>{var o;class h{constructor(e,i,r,p,C){this.router=e,this.activatedRoute=i,this.modalController=r,this.toastController=p,this.loadingController=C,this.APP_ROUTE=P._,this.APP_FUNC_FormatDate=_.Rv,this.APP_FUNC_DivDateTime=_.Wv,this.APP_FUNC_RoundNumber=_.Rw,this.APP_FUNC_GetColor_VSessionStatus=_.kH,this.v_session_status=y.jT,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.dataForm={},this.chargingSessions=[],this.loadingController.create({message:""}).then(A=>this.loading=A)}ngOnInit(){var e=this;let i=this.activatedRoute.snapshot.queryParamMap.get("vss")||"";i&&(this.filter.VSessionStatus=parseInt(i)||void 0),(0,$.A)(function*(){(yield(0,k.kU)())&&e.refreshData()})()}onIonRefresher(e){this.refreshData(()=>{e.target.complete()})}onIonInfinite(e){this.loadMore(()=>{e.target.complete()})}resetData(){this.chargingSessions.length=0}pushData(e){1==this.paging.page&&(this.chargingSessions.length=0),this.chargingSessions=this.chargingSessions.concat(e)}refreshData(e){this.paging.page=1,this.paging.active=!0,this.loadData_Paging(e)}loadMore(e){this.paging.page+=1,this.loadData_Paging(e)}searchChange(e){this.filter.search=e.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(e,i){this.paging.sortfield=e||null,this.paging.sorttype=i||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{vss:this.filter.VSessionStatus},queryParamsHandling:"merge",replaceUrl:!0}),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(e){var i=this;return(0,$.A)(function*(){i.paging.loading=!0,(0,R.kO)({loading:r=>{var p,C;r?null===(p=i.loading)||void 0===p||p.present():null===(C=i.loading)||void 0===C||C.dismiss()},params:{VSessionStatus:i.filter.VSessionStatus,PageNumber:i.paging.page,PageSize:i.paging.limit},callback:r=>{var p;i.response=r,null!=r&&r.Succeeded?i.pushData(null!==(p=r.Data)&&void 0!==p?p:[]):(0,I.cX)(i.toastController,{},r).then(C=>C.present()),i.paging.loading=!1,i.paging.active=!(null==r||!r.HasNextPage),e&&e()}})})()}filterDate(e){var i=this;return(0,$.A)(function*(){i.dataForm.filterDate=e})()}changeVSessionStatus(e){this.filter.VSessionStatus=e.detail.value||void 0,this.filterChange()}getTimeCharging(e,i){return(0,_.Wv)(e,e?null!=i?i:new Date:null)}hrefDetail(e){var i;return P._.CHARGING_SESSION_DETAIL.replace(":id",null!==(i=null==e?void 0:e.toString())&&void 0!==i?i:"")}openDetail(e){return(0,$.A)(function*(){window.location.href=P._.CHARGING_SESSION_DETAIL.replace(":id",e)})()}}return(o=h).\u0275fac=function(e){return new(e||o)(n.rXU(S.Ix),n.rXU(S.nX),n.rXU(g.W3),n.rXU(g.K_),n.rXU(g.Xi))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-charging-session"]],decls:35,vars:23,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"value","ionChange"],[3,"value"],["class","container-loading",4,"ngIf"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container","pt-3","pb-4"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],["templateChargingSession",""],[1,"container-loading"],["name","circular","color","primary"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-day","rounded","bg-white","p-3","cursor-pointer",3,"click"],[1,"d-flex","align-items-start"],[1,"flex-grow-1"],[1,"my-0"],[1,"text-muted"],[3,"color"],[1,"row","mt-3"],[1,"col-6","mb-2"],[1,"mb-1"],[1,"d-flex","align-items-center"],["src","../../../assets/icon/ion-icon/changing-electric.svg"],["src","../../../assets/icon/ion-icon/changing-package.svg"],["src","../../../assets/icon/ion-icon/changing-battery.svg"],["src","../../../assets/icon/ion-icon/changing-time.svg"]],template:function(e,i){if(1&e&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5,"L\u1ecbch s\u1eed phi\xean s\u1ea1c"),n.k0s()()(),n.j41(6,"ion-content",2)(7,"ion-refresher",3),n.bIt("ionRefresh",function(p){return i.onIonRefresher(p)}),n.nrm(8,"ion-refresher-content"),n.k0s(),n.j41(9,"div",4)(10,"ion-segment",5),n.bIt("ionChange",function(p){return i.changeVSessionStatus(p)}),n.j41(11,"ion-segment-button",6)(12,"ion-label"),n.EFF(13),n.nI1(14,"translate"),n.k0s()(),n.j41(15,"ion-segment-button",6)(16,"ion-label"),n.EFF(17),n.nI1(18,"translate"),n.k0s()(),n.j41(19,"ion-segment-button",6)(20,"ion-label"),n.EFF(21),n.nI1(22,"translate"),n.k0s()(),n.j41(23,"ion-segment-button",6)(24,"ion-label"),n.EFF(25),n.nI1(26,"translate"),n.k0s()()()(),n.DNE(27,t,2,0,"div",7)(28,s,5,3,"div",8),n.j41(29,"div",9)(30,"div",10),n.DNE(31,l,3,4,"ng-container",11),n.k0s()(),n.DNE(32,m,2,0,"ion-infinite-scroll",12),n.k0s(),n.DNE(33,E,45,8,"ng-template",null,13,n.C5r)),2&e){let r;n.R7$(3),n.Y8G("defaultHref",i.APP_ROUTE.TABS_DEFAULT),n.R7$(3),n.Y8G("fullscreen",!0),n.R7$(4),n.Y8G("value",null!==(r=i.filter.VSessionStatus)&&void 0!==r?r:0),n.R7$(1),n.Y8G("value",0),n.R7$(2),n.JRh(n.bMT(14,15,"All")),n.R7$(2),n.Y8G("value",i.v_session_status.DangSac),n.R7$(2),n.JRh(n.bMT(18,17,"Charging")),n.R7$(2),n.Y8G("value",i.v_session_status.DaSac),n.R7$(2),n.JRh(n.bMT(22,19,"ChargingComplete")),n.R7$(2),n.Y8G("value",i.v_session_status.HuyPhienSac),n.R7$(2),n.JRh(n.bMT(26,21,"Error")),n.R7$(2),n.Y8G("ngIf",!i.response),n.R7$(1),n.Y8G("ngIf",i.response&&!i.chargingSessions.length),n.R7$(3),n.Y8G("ngForOf",i.chargingSessions),n.R7$(1),n.Y8G("ngIf",i.paging.active)}},dependencies:[f.Sq,f.bT,f.T3,g.QW,g.ZB,g.W9,g.eU,g.iq,g.Ax,g.Hp,g.he,g.To,g.Ki,g.Gp,g.eP,g.w2,g.BC,g.ai,g.Je,g.el,a.D9],styles:[".card-day.rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-day[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:.25rem}.filter[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:.75rem .5rem}.status-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;vertical-align:middle;font-size:1.2rem}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}"]}),h})()}];let D=(()=>{var o;class h{}return(o=h).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[S.iI.forChild(T),S.iI]}),h})();var M=d(9500);let j=(()=>{var o;class h{}return(o=h).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[f.MD,v.YN,g.bv,D,M.x]}),h})()}}]);