"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9006],{6944:(I,S,g)=>{g.d(S,{_$:()=>b,aN:()=>y,cb:()=>$,eu:()=>R,kO:()=>c,wm:()=>_});var h=g(467),v=g(7158);const c=function(){var n=(0,h.A)(function*(a){var e,o;a.params=a.params||{},(0,v.hm)({url:"api/ChargingSession/get-mychargingsessions",params:{PageNumber:null!==(e=a.params.PageNumber)&&void 0!==e?e:1,PageSize:null!==(o=a.params.PageSize)&&void 0!==o?o:10},success:s=>{"function"==typeof a.callback&&a.callback(s.data||null)},error:s=>{var u;"function"==typeof a.callback&&a.callback(null==s||null===(u=s.response)||void 0===u?void 0:u.data),console.error(s)},loading:null==a?void 0:a.loading})});return function(e){return n.apply(this,arguments)}}(),$=function(){var n=(0,h.A)(function*(a){a.params=a.params||{},(0,v.hm)({url:`api/ChargingSession/get-mybyid/${a.params.ChargeSessionId}`,success:e=>{"function"==typeof a.callback&&a.callback(e.data||null)},error:e=>{var o;"function"==typeof a.callback&&a.callback(null==e||null===(o=e.response)||void 0===o?void 0:o.data),console.error(e)},loading:null==a?void 0:a.loading})});return function(e){return n.apply(this,arguments)}}(),y=function(){var n=(0,h.A)(function*(a){var e,o,s;a.params=a.params||{},(0,v.Ll)({url:"api/ChargingSession/start-create",params:{StationCode:null!==(e=a.params.StationCode)&&void 0!==e?e:null,ConnectorId:null!==(o=a.params.ConnectorId)&&void 0!==o?o:null,OrderCode:null!==(s=a.params.OrderCode)&&void 0!==s?s:null},success:u=>{"function"==typeof a.callback&&a.callback(u.data||null)},error:u=>{var C;"function"==typeof a.callback&&a.callback(null==u||null===(C=u.response)||void 0===C?void 0:C.data),console.error(u)},loading:null==a?void 0:a.loading})});return function(e){return n.apply(this,arguments)}}(),_=function(){var n=(0,h.A)(function*(a){var e;a.params=a.params||{},(0,v.Ll)({url:"api/ChargingSession/start",params:{ChargeSessionId:null!==(e=a.params.ChargeSessionId)&&void 0!==e?e:null},success:o=>{"function"==typeof a.callback&&a.callback(o.data||null)},error:o=>{var s;"function"==typeof a.callback&&a.callback(null==o||null===(s=o.response)||void 0===s?void 0:s.data),console.error(o)},loading:null==a?void 0:a.loading})});return function(e){return n.apply(this,arguments)}}(),b=function(){var n=(0,h.A)(function*(a){var e;a.params=a.params||{},(0,v.Ll)({url:"api/ChargingSession/stop",params:{ChargeSessionId:null!==(e=a.params.ChargeSessionId)&&void 0!==e?e:null},success:o=>{"function"==typeof a.callback&&a.callback(o.data||null)},error:o=>{var s;"function"==typeof a.callback&&a.callback(null==o||null===(s=o.response)||void 0===s?void 0:s.data),console.error(o)},loading:null==a?void 0:a.loading})});return function(e){return n.apply(this,arguments)}}(),R=function(){var n=(0,h.A)(function*(a){a.params=a.params||{},(0,v.hm)({url:`api/ChargingSession/monitor/${a.params.StationCode}/${a.params.ConnectorId}`,success:e=>{"function"==typeof a.callback&&a.callback(e.data||null)},error:e=>{var o;"function"==typeof a.callback&&a.callback(null==e||null===(o=e.response)||void 0===o?void 0:o.data),console.error(e)},loading:null==a?void 0:a.loading})});return function(e){return n.apply(this,arguments)}}()},9006:(I,S,g)=>{g.r(S),g.d(S,{ChargingSessionPageModule:()=>A});var h=g(177),v=g(9417),c=g(4488),P=g(2175),$=g(467),y=g(6944),F=g(6539),_=g(1312),E=g(8560),b=g(3588),R=g(8833),n=g(4438),a=g(4842);function e(t,m){1&t&&(n.j41(0,"div",10),n.nrm(1,"ion-spinner",11),n.k0s())}function o(t,m){1&t&&(n.j41(0,"div",12),n.nrm(1,"img",13),n.j41(2,"div",14),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&t&&(n.R7$(3),n.JRh(n.bMT(4,1,"NoChargingSession")))}function s(t,m){if(1&t&&(n.qex(0),n.j41(1,"ion-card",15)(2,"div",16)(3,"div")(4,"span"),n.EFF(5),n.k0s(),n.j41(6,"b"),n.EFF(7),n.k0s(),n.nrm(8,"br"),n.j41(9,"small",17),n.EFF(10),n.k0s()(),n.j41(11,"div",18)(12,"div",19)(13,"div"),n.EFF(14,"\u0110i\u1ec7n n\u0103ng \u0111\xe3 s\u1ea1c"),n.k0s(),n.j41(15,"div"),n.nrm(16,"ion-icon",20),n.j41(17,"span")(18,"b"),n.EFF(19),n.k0s(),n.EFF(20," kW"),n.k0s()()(),n.j41(21,"div",19)(22,"div"),n.EFF(23,"G\xf3i s\u1ea1c"),n.k0s(),n.j41(24,"div"),n.nrm(25,"ion-icon",21),n.j41(26,"span")(27,"b"),n.EFF(28),n.k0s(),n.EFF(29," kW"),n.k0s()()()(),n.j41(30,"div",18)(31,"div",22)(32,"div"),n.EFF(33,"Ti\u1ebfn tr\xecnh s\u1ea1c"),n.k0s(),n.j41(34,"div",23)(35,"ion-label")(36,"b"),n.EFF(37),n.k0s(),n.EFF(38,"%"),n.k0s(),n.nrm(39,"ion-progress-bar",24),n.k0s()(),n.j41(40,"div",19)(41,"div"),n.EFF(42,"Th\u1eddi gian \u0111\xe3 s\u1ea1c"),n.k0s(),n.j41(43,"div"),n.nrm(44,"ion-icon",25),n.j41(45,"span")(46,"b"),n.EFF(47),n.k0s(),n.EFF(48," ph\xfat"),n.k0s()()()()()(),n.bVm()),2&t){const l=m.$implicit,i=n.XpG();let r,p,d,f,k;n.R7$(1),n.Y8G("href",i.APP_ROUTE.CHARGING_SESSION_DETAIL.replace(":id",null!==(r=null==l.ChargeSessionId?null:l.ChargeSessionId.toString())&&void 0!==r?r:"")),n.R7$(3),n.ZvI("badge badge-",i.APP_FUNC_GetColor_VSessionStatus(l.VSessionStatus)," float-right px-3 py-1"),n.R7$(1),n.JRh(l.VSessionStatusName),n.R7$(2),n.JRh(l.LocName),n.R7$(3),n.JRh(i.APP_FUNC_FormatDate(l.ChargingStart)),n.R7$(9),n.JRh(i.APP_FUNC_RoundNumber(null!==(p=l.ElectricUsed)&&void 0!==p?p:0)),n.R7$(9),n.JRh(null!==(d=l.MaxElectricUsed)&&void 0!==d?d:0),n.R7$(9),n.JRh(null!==(f=l.BatteryPercent)&&void 0!==f?f:0),n.R7$(2),n.FS9("value",null!==(k=l.BatteryPercent)&&void 0!==k?k:0),n.R7$(8),n.JRh(i.getTimeCharging(l.ChargingStart,l.ChargingEnd))}}function u(t,m){if(1&t){const l=n.RV6();n.j41(0,"ion-infinite-scroll",26),n.bIt("ionInfinite",function(r){n.eBV(l);const p=n.XpG();return n.Njj(p.onIonInfinite(r))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}const D=[{path:"",component:(()=>{var t;class m{constructor(i,r,p){var d=this;this.modalController=i,this.toastController=r,this.loadingController=p,this.APP_ROUTE=R._,this.APP_FUNC_FormatDate=_.Rv,this.APP_FUNC_DivDateTime=_.Wv,this.APP_FUNC_RoundNumber=_.Rw,this.APP_FUNC_GetColor_VSessionStatus=_.kH,this.v_session_status=b.jT,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.dataForm={},this.chargingSessions=[],(0,$.A)(function*(){d.loading=yield d.loadingController.create({message:""})})()}ngOnInit(){var i=this;(0,$.A)(function*(){(yield(0,F.kU)())&&i.refreshData()})()}onIonRefresher(i){this.filter={},this.refreshData(()=>{i.target.complete()})}onIonInfinite(i){this.loadMore(()=>{i.target.complete()})}resetData(){this.chargingSessions.length=0}pushData(i){this.chargingSessions=this.chargingSessions.concat(i)}refreshData(i){this.filter={},this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging(i)}loadMore(i){this.paging.page+=1,this.loadData_Paging(i)}searchChange(i){this.filter.search=i.target.value.replace(/[\`\~\!\@\#\$\%\^\&\*\(\)\-\_\=\+\[\{\]\}\\\|\;\:\'\"\,\<\.\>\/\?]+/g," ").replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}sortChange(i,r){this.paging.sortfield=i||null,this.paging.sorttype=r||null,this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.resetData(),this.loadData_Paging()}loadData_Paging(i){var r=this;return(0,$.A)(function*(){r.paging.loading=!0,(0,y.kO)({loading:p=>{var d,f;p?null===(d=r.loading)||void 0===d||d.present():null===(f=r.loading)||void 0===f||f.dismiss()},params:{PageNumber:r.paging.page,PageSize:r.paging.limit},callback:p=>{var d;r.response=p,null!=p&&p.Succeeded?r.pushData(null!==(d=p.Data)&&void 0!==d?d:[]):(0,E.cX)(r.toastController,{},p).then(f=>f.present()),r.paging.loading=!1,r.paging.active=!(null==p||!p.HasNextPage),i&&i()}})})()}filterDate(i){var r=this;return(0,$.A)(function*(){r.dataForm.filterDate=i})()}getTimeCharging(i,r){return(0,_.Wv)(i,i?null!=r?r:new Date:null)}}return(t=m).\u0275fac=function(i){return new(i||t)(n.rXU(c.W3),n.rXU(c.K_),n.rXU(c.Xi))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-charging-session"]],decls:12,vars:5,consts:[["color","primary"],["slot","start"],["defaultHref","/","icon","../../../assets/icon/ion-icon/arrow-left.svg","text",""],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[1,"container","p-0"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],["mode","ios",3,"href"],[1,"p-3"],[1,"text-muted"],[1,"d-flex","flex-wrap","mt-3"],[1,"w-50","status-item"],["color","primary","name","flash-outline"],["color","primary","name","wallet-outline"],[1,"w-50"],[1,"w-75"],[3,"value"],["color","primary","name","time-outline"],[3,"ionInfinite"]],template:function(i,r){1&i&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s()()(),n.j41(4,"ion-content",3)(5,"ion-refresher",4),n.bIt("ionRefresh",function(d){return r.onIonRefresher(d)}),n.nrm(6,"ion-refresher-content"),n.k0s(),n.DNE(7,e,2,0,"div",5)(8,o,5,3,"div",6),n.j41(9,"div",7),n.DNE(10,s,49,12,"ng-container",8),n.k0s(),n.DNE(11,u,2,0,"ion-infinite-scroll",9),n.k0s()),2&i&&(n.R7$(4),n.Y8G("fullscreen",!0),n.R7$(3),n.Y8G("ngIf",!r.response),n.R7$(1),n.Y8G("ngIf",r.response&&!r.chargingSessions.length),n.R7$(2),n.Y8G("ngForOf",r.chargingSessions),n.R7$(1),n.Y8G("ngIf",r.paging.active))},dependencies:[h.Sq,h.bT,c.QW,c.b_,c.W9,c.eU,c.iq,c.Ax,c.Hp,c.he,c.FH,c.To,c.Ki,c.w2,c.ai,c.el,a.D9],styles:[".filter[_ngcontent-%COMP%]{background:var(--ion-background-color, #fff)}.filter[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:.75rem .5rem}.badge[_ngcontent-%COMP%]{border-radius:.75rem;font-weight:400;vertical-align:middle;line-height:1.3}.status-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;vertical-align:middle;font-size:1.2rem}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}"]}),m})()}];let O=(()=>{var t;class m{}return(t=m).\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[P.iI.forChild(D),P.iI]}),m})();var M=g(9500);let A=(()=>{var t;class m{}return(t=m).\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.$C({type:t}),t.\u0275inj=n.G2t({imports:[h.MD,v.YN,c.bv,O,M.x]}),m})()}}]);