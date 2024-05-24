"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2339],{6944:(G,k,h)=>{h.d(k,{_$:()=>y,aN:()=>F,cb:()=>v,eu:()=>A,kO:()=>c,wm:()=>b});var f=h(467),R=h(7158);const c=function(){var C=(0,f.A)(function*(r){var g,d,_;r.params=r.params||{},(0,R.hm)({url:"api/ChargingSession/get-mychargingsessions",params:{VSessionStatus:null!==(g=r.params.VSessionStatus)&&void 0!==g?g:null,PageNumber:null!==(d=r.params.PageNumber)&&void 0!==d?d:1,PageSize:null!==(_=r.params.PageSize)&&void 0!==_?_:10},success:m=>{"function"==typeof r.callback&&r.callback(m.data||null)},error:m=>{var S;"function"==typeof r.callback&&r.callback(null==m||null===(S=m.response)||void 0===S?void 0:S.data),console.error(m)},loading:null==r?void 0:r.loading})});return function(g){return C.apply(this,arguments)}}(),v=function(){var C=(0,f.A)(function*(r){r.params=r.params||{},(0,R.hm)({url:`api/ChargingSession/get-mybyid/${r.params.ChargeSessionId}`,success:g=>{"function"==typeof r.callback&&r.callback(g.data||null)},error:g=>{var d;"function"==typeof r.callback&&r.callback(null==g||null===(d=g.response)||void 0===d?void 0:d.data),console.error(g)},loading:null==r?void 0:r.loading})});return function(g){return C.apply(this,arguments)}}(),F=function(){var C=(0,f.A)(function*(r){var g,d,_;r.params=r.params||{},(0,R.Ll)({url:"api/ChargingSession/start-create",params:{StationCode:null!==(g=r.params.StationCode)&&void 0!==g?g:null,ConnectorId:null!==(d=r.params.ConnectorId)&&void 0!==d?d:null,OrderCode:null!==(_=r.params.OrderCode)&&void 0!==_?_:null},success:m=>{"function"==typeof r.callback&&r.callback(m.data||null)},error:m=>{var S;"function"==typeof r.callback&&r.callback(null==m||null===(S=m.response)||void 0===S?void 0:S.data),console.error(m)},loading:null==r?void 0:r.loading})});return function(g){return C.apply(this,arguments)}}(),b=function(){var C=(0,f.A)(function*(r){var g;r.params=r.params||{},(0,R.Ll)({url:"api/ChargingSession/start",params:{ChargeSessionId:null!==(g=r.params.ChargeSessionId)&&void 0!==g?g:null},success:d=>{"function"==typeof r.callback&&r.callback(d.data||null)},error:d=>{var _;"function"==typeof r.callback&&r.callback(null==d||null===(_=d.response)||void 0===_?void 0:_.data),console.error(d)},loading:null==r?void 0:r.loading})});return function(g){return C.apply(this,arguments)}}(),y=function(){var C=(0,f.A)(function*(r){var g;r.params=r.params||{},(0,R.Ll)({url:"api/ChargingSession/stop",params:{ChargeSessionId:null!==(g=r.params.ChargeSessionId)&&void 0!==g?g:null},success:d=>{"function"==typeof r.callback&&r.callback(d.data||null)},error:d=>{var _;"function"==typeof r.callback&&r.callback(null==d||null===(_=d.response)||void 0===_?void 0:_.data),console.error(d)},loading:null==r?void 0:r.loading})});return function(g){return C.apply(this,arguments)}}(),A=function(){var C=(0,f.A)(function*(r){r.params=r.params||{},(0,R.hm)({url:`api/ChargingSession/monitor/${r.params.StationCode}/${r.params.ConnectorId}`,success:g=>{"function"==typeof r.callback&&r.callback(g.data||null)},error:g=>{var d;"function"==typeof r.callback&&r.callback(null==g||null===(d=g.response)||void 0===d?void 0:d.data),console.error(g)},loading:null==r?void 0:r.loading})});return function(g){return C.apply(this,arguments)}}()},2339:(G,k,h)=>{h.r(k),h.d(k,{ChargingSessionDetailPageModule:()=>tn});var f=h(177),R=h(9417),c=h(4488),E=h(2175),v=h(467),F=h(6044),$=h(1312),b=h(3524),n=h(4438),y=h(4842);function A(s,u){if(1&s){const a=n.RV6();n.qex(0),n.j41(1,"div")(2,"ion-icon",20),n.bIt("click",function(t){const i=n.eBV(a).$implicit,l=n.XpG();return n.Njj(l.changeRateValue(t,i))}),n.k0s()(),n.bVm()}if(2&s){const a=u.$implicit,e=n.XpG();n.R7$(2),n.Y8G("color",e.chargingRate.RateValue&&e.chargingRate.RateValue>=a?"warning":"medium")}}function C(s,u){if(1&s){const a=n.RV6();n.qex(0),n.j41(1,"div",21)(2,"ion-thumbnail"),n.nrm(3,"img",22),n.k0s(),n.j41(4,"div",23)(5,"ion-icon",24),n.bIt("click",function(t){const i=n.eBV(a).$implicit,l=n.XpG();return n.Njj(l.removeImage(t,i.id))}),n.k0s()()(),n.bVm()}if(2&s){const a=u.$implicit;n.R7$(3),n.Y8G("src",a.src,n.B4B)}}const r=()=>[1,2,3,4,5],g=()=>[];let d=(()=>{var s;class u{constructor(e,t,o){var i=this;this.modalController=e,this.loadingController=t,this.toastController=o,this.chargingRate={},(0,v.A)(function*(){i.loading=yield i.loadingController.create({message:""})})()}ngOnInit(){this.chargingRate.RateAttachs=this.chargingRate.RateAttach?JSON.parse(this.chargingRate.RateAttach):[]}close(e){var t=this;return(0,v.A)(function*(){t.modalController.dismiss(null,"cancel")})()}submit(e){var t=this;return(0,v.A)(function*(){t.chargingRate.RateValue&&(0,F.i5)({loading:o=>{var i,l;o?null===(i=t.loading)||void 0===i||i.present():null===(l=t.loading)||void 0===l||l.dismiss()},params:t.chargingRate,callback:o=>{t.response=o,null!=o&&o.Succeeded?t.modalController.dismiss(null,"success"):(0,b.cX)(t.toastController,{},o).then(i=>i.present())}})})()}changeRateValue(e,t){var o=this;return(0,v.A)(function*(){o.chargingRate.RateValue=t})()}changeRateComment(e,t){var o=this;return(0,v.A)(function*(){var i;o.chargingRate.RateComment=null!==(i=e.detail.value)&&void 0!==i?i:t})()}addImage(e){var t=this;return(0,v.A)(function*(){(0,$.oG)({accept:"image/*",multiple:!0},o=>{let i=0,l=p=>{if(p){var P=new FileReader;P.onload=()=>{var M;null===(M=t.chargingRate.RateAttachs)||void 0===M||M.push({id:Math.ceil(1e6*Math.random()),src:P.result}),l(o[i++])},P.onerror=()=>{l(o[i++])},P.readAsDataURL(p)}};l(o[i++])})})()}removeImage(e,t){var o=this;return(0,v.A)(function*(){var i,l;o.chargingRate.RateAttachs=null!==(i=null===(l=o.chargingRate.RateAttachs)||void 0===l?void 0:l.filter(p=>p.id!=t))&&void 0!==i?i:[],o.chargingRate.RateAttach=o.chargingRate.RateAttachs.length?JSON.stringify(o.chargingRate.RateAttachs):void 0})()}}return(s=u).\u0275fac=function(e){return new(e||s)(n.rXU(c.W3),n.rXU(c.Xi),n.rXU(c.K_))},s.\u0275cmp=n.VBU({type:s,selectors:[["app-modal-add-charging-rate"]],inputs:{chargingRate:"chargingRate"},decls:37,vars:13,consts:[[1,"container","text-center","my-4"],[1,"text-muted"],[1,"container","mb-3"],[1,"mb-4"],[1,"d-flex","align-items-center","justify-content-around","list-star"],[4,"ngFor","ngForOf"],["lines","none"],[1,"form-group","mb-3"],[1,"text-danger"],[1,"ion-item-input"],["maxlength","250","placeholder","Nh\u1eadp nh\u1eadn x\xe9t c\u1ee7a b\u1ea1n",3,"autoGrow","counter","value","ionChange"],[1,"d-flex","justify-content-center"],["color","medium",3,"click"],["slot","start","src","../../../../assets/icon/ion-icon/camera.svg"],[1,"d-flex","flex-wrap","mt-4","list-image"],[1,"row","pt-3","mt-4"],[1,"col-6","pr-2"],["color","medium","expand","block","shape","round","fill","outline",3,"click"],[1,"col-6","pl-2"],["color","primary","expand","block","shape","round",3,"click"],["src","../../../../assets/icon/ion-icon/star.svg",3,"color","click"],[1,"position-relative","mr-4","mb-3"],[3,"src"],[1,"position-absolute","top-0","right-0","line-height-0","remove-image"],["name","close-circle-outline","color","danger",3,"click"]],template:function(e,t){if(1&e&&(n.j41(0,"ion-content")(1,"div",0)(2,"h4"),n.EFF(3,"X\u1ebfp h\u1ea1ng v\xe0 \u0111\xe1nh gi\xe1"),n.k0s(),n.j41(4,"small",1),n.EFF(5,"Tr\u1ea3i nghi\u1ec7m c\u1ee7a b\u1ea1n v\u1ec1 \u1ee9ng d\u1ee5ng tr\u1ea1m s\u1ea1c nh\u01b0 th\u1ebf n\xe0o?"),n.k0s()(),n.j41(6,"div",2)(7,"div",3)(8,"div",4),n.DNE(9,A,3,1,"ng-container",5),n.k0s()(),n.j41(10,"ion-list",6)(11,"div",7)(12,"label"),n.EFF(13,"Vi\u1ebft nh\u1eadn x\xe9t "),n.j41(14,"span",8),n.EFF(15,"*"),n.k0s()(),n.j41(16,"div",9)(17,"ion-item")(18,"ion-textarea",10),n.bIt("ionChange",function(i){return t.changeRateComment(i)}),n.k0s()()()(),n.j41(19,"div",11)(20,"ion-button",12),n.bIt("click",function(i){return t.addImage(i)}),n.nrm(21,"ion-icon",13),n.j41(22,"ion-label"),n.EFF(23,"T\u1ea3i l\xean h\xecnh \u1ea3nh"),n.k0s()()(),n.j41(24,"div",14),n.DNE(25,C,6,1,"ng-container",5),n.k0s(),n.j41(26,"div",15)(27,"div",16)(28,"ion-button",17),n.bIt("click",function(i){return t.close(i)}),n.j41(29,"ion-label"),n.EFF(30),n.nI1(31,"translate"),n.k0s()()(),n.j41(32,"div",18)(33,"ion-button",19),n.bIt("click",function(i){return t.submit(i)}),n.j41(34,"ion-label"),n.EFF(35),n.nI1(36,"translate"),n.k0s()()()()()()()),2&e){let o;n.R7$(9),n.Y8G("ngForOf",n.lJ4(11,r)),n.R7$(9),n.Y8G("autoGrow",!0)("counter",!0)("value",t.chargingRate.RateComment),n.R7$(7),n.Y8G("ngForOf",null!==(o=t.chargingRate.RateAttachs)&&void 0!==o?o:n.lJ4(12,g)),n.R7$(5),n.JRh(n.bMT(31,7,"Cancel")),n.R7$(5),n.JRh(n.bMT(36,9,"Send"))}},dependencies:[f.Sq,c.Jm,c.W9,c.iq,c.uz,c.he,c.nf,c.nc,c.Zx,c.Gw,y.D9],styles:[".list-star[_ngcontent-%COMP%]{max-width:280px;margin:auto}.list-star[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:3rem}.list-image[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 5rem;border:1px solid var(--ion-color-light);--border-radius: .5rem;overflow:hidden}.list-image[_ngcontent-%COMP%]   .remove-image[_ngcontent-%COMP%]{margin-top:-.5rem;margin-right:-.5rem;border-radius:50%;line-height:0;background-color:#fff;cursor:pointer}.list-image[_ngcontent-%COMP%]   .remove-image[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}"]}),u})();var _=h(1261),m=h(6116),S=h(6043),I=h(6944),V=h(3232),B=h(6539),O=h(3588),x=h(8833);function w(s,u){1&s&&(n.j41(0,"div",11),n.nrm(1,"ion-spinner",12),n.k0s())}function N(s,u){1&s&&(n.j41(0,"div",13),n.nrm(1,"img",14),n.j41(2,"div",15),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&s&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function L(s,u){1&s&&(n.qex(0),n.j41(1,"div",16)(2,"div",17),n.nrm(3,"ion-spinner",18),n.j41(4,"div",19)(5,"ion-chip",20),n.EFF(6,"\u0110ang ch\u1edd c\u1eafm v\xf2i s\u1ea1c..."),n.k0s()()()(),n.bVm())}function U(s,u){if(1&s&&(n.j41(0,"div",65)(1,"div",66)(2,"h6",53)(3,"b"),n.EFF(4,"Th\u1eddi gian b\u1eaft \u0111\u1ea7u"),n.k0s()(),n.nrm(5,"hr",54),n.j41(6,"div")(7,"b",67),n.EFF(8),n.k0s()()()()),2&s){const a=n.XpG(2);let e;n.R7$(8),n.JRh(a.APP_FUNC_FormatDate(null!==(e=null==a.monitor?null:a.monitor.StartTime)&&void 0!==e?e:a.chargingSession.ChargingStart))}}function X(s,u){if(1&s&&(n.j41(0,"div",65)(1,"div",66)(2,"h6",53)(3,"b"),n.EFF(4,"Th\u1eddi gian k\u1ebft th\xfac"),n.k0s()(),n.nrm(5,"hr",54),n.j41(6,"div")(7,"b",67),n.EFF(8),n.k0s()()()()),2&s){const a=n.XpG(2);let e;n.R7$(8),n.JRh(a.APP_FUNC_FormatDate(null!==(e=null==a.monitor?null:a.monitor.StopTime)&&void 0!==e?e:a.chargingSession.ChargingEnd))}}const T=s=>({$implicit:s});function Y(s,u){if(1&s){const a=n.RV6();n.j41(0,"div",21)(1,"div",22)(2,"div",23)(3,"div",24)(4,"div",25)(5,"div",26)(6,"div",27)(7,"ion-chip",28),n.nrm(8,"ion-icon",29),n.j41(9,"ion-label"),n.EFF(10),n.k0s()()()(),n.j41(11,"div",30)(12,"div",31)(13,"div",32),n.EFF(14,"% Ti\u1ebfn tr\xecnh s\u1ea1c"),n.k0s(),n.j41(15,"div")(16,"span",33),n.nrm(17,"span",34),n.k0s(),n.j41(18,"span",35),n.nrm(19,"span",34),n.k0s(),n.j41(20,"div",36)(21,"div",37)(22,"div",38),n.nrm(23,"ion-icon",39)(24,"br"),n.j41(25,"ion-text"),n.EFF(26),n.k0s()()()()()(),n.j41(27,"div",40)(28,"div",41)(29,"div",32),n.EFF(30,"\u0110i\u1ec7n n\u0103ng \u0111\xe3 s\u1ea1c"),n.k0s(),n.j41(31,"div",42),n.nrm(32,"ion-icon",43),n.j41(33,"span")(34,"b"),n.EFF(35),n.k0s(),n.EFF(36," kWh"),n.k0s()()(),n.nrm(37,"hr",44),n.j41(38,"div",41)(39,"div",32),n.EFF(40,"Th\u1eddi gian \u0111\xe3 s\u1ea1c"),n.k0s(),n.j41(41,"div",42),n.nrm(42,"ion-icon",45),n.j41(43,"span")(44,"b"),n.EFF(45),n.k0s(),n.EFF(46," ph\xfat"),n.k0s()()()()()(),n.j41(47,"div",46)(48,"div",47)(49,"div",48)(50,"div"),n.nrm(51,"ion-img",49),n.k0s(),n.j41(52,"div",50)(53,"div",32),n.EFF(54),n.k0s(),n.j41(55,"div")(56,"strong"),n.EFF(57),n.k0s()()()(),n.j41(58,"div",51)(59,"div",32),n.EFF(60,"\u0110\xe3 s\u1eed d\u1ee5ng"),n.k0s(),n.j41(61,"div")(62,"strong"),n.EFF(63),n.k0s()()()()()()(),n.j41(64,"div",23)(65,"div",52)(66,"h6",53)(67,"b"),n.EFF(68,"Th\xf4ng tin chi ti\u1ebft"),n.k0s()(),n.nrm(69,"hr",54),n.j41(70,"h5",55),n.nrm(71,"ion-icon",56),n.j41(72,"span",57),n.EFF(73),n.k0s()(),n.j41(74,"div",58)(75,"div",59),n.eu8(76,60),n.k0s(),n.j41(77,"div",61),n.eu8(78,60),n.k0s()()()()(),n.j41(79,"div",58),n.DNE(80,U,9,1,"div",62)(81,X,9,1,"div",62),n.k0s(),n.j41(82,"div",63)(83,"ion-button",64),n.bIt("click",function(t){n.eBV(a);const o=n.XpG();return n.Njj(o.presentModalAddFeedback(t))}),n.j41(84,"ion-label"),n.EFF(85),n.nI1(86,"translate"),n.k0s()()()()}if(2&s){const a=n.XpG(),e=n.sdS(19),t=n.sdS(21);let o,i;n.R7$(3),n.HbH("border-"+a.APP_FUNC_GetColor_VSessionStatus(a.chargingSession.VSessionStatus)),n.R7$(4),n.Y8G("color",a.APP_FUNC_GetColor_VSessionStatus(a.chargingSession.VSessionStatus)),n.R7$(3),n.JRh(a.chargingSession.VSessionStatusName),n.R7$(5),n.STu("mx-auto mt-2 progress progress-",10==a.getBatteryPercent()?"success":"tertiary"," progress-",a.getBatteryPercent(),""),n.R7$(11),n.SpI("",null!==(o=null!==(o=null==a.monitor?null:a.monitor.SoC)&&void 0!==o?o:a.chargingSession.BatteryPercent)&&void 0!==o?o:0,"%"),n.R7$(9),n.JRh(a.getMeter()),n.R7$(10),n.JRh(a.getTimeCharging()),n.R7$(9),n.SpI("G\xf3i s\u1ea1c ",a.chargingSession.MaxElectricUsed,"kWh"),n.R7$(3),n.SpI("",a.APP_FUNC_FormatMoney(null!==(i=null==a.orderDetail?null:a.orderDetail.RealAmount)&&void 0!==i?i:0),"\u0111"),n.R7$(6),n.SpI("",a.APP_FUNC_FormatMoney(a.getMoney()),"\u0111"),n.R7$(10),n.JRh(null==a.chargingLocation?null:a.chargingLocation.LocName),n.R7$(3),n.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",n.eq3(24,T,a.chargingStation)),n.R7$(2),n.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",n.eq3(26,T,a.chargingConnector)),n.R7$(2),n.Y8G("ngIf",a.chargingSession.ChargingStart),n.R7$(1),n.Y8G("ngIf",a.chargingSession.ChargingEnd),n.R7$(4),n.JRh(n.bMT(86,22,"SendFeedback"))}}function J(s,u){if(1&s){const a=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",68)(3,"ion-button",69),n.bIt("click",function(t){n.eBV(a);const o=n.XpG();return n.Njj(o.presentModalConfirm_ChargingSession_Stop(t))}),n.j41(4,"ion-label"),n.EFF(5,"D\u1eebng s\u1ea1c ngay"),n.k0s()()()(),n.bVm()}}function z(s,u){if(1&s){const a=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",68)(3,"div",58)(4,"div",59)(5,"ion-button",70),n.bIt("click",function(t){n.eBV(a);const o=n.XpG();return n.Njj(o.createBill(t))}),n.j41(6,"ion-label"),n.EFF(7),n.nI1(8,"translate"),n.k0s()()(),n.j41(9,"div",61)(10,"ion-button",70),n.bIt("click",function(t){n.eBV(a);const o=n.XpG();return n.Njj(o.presentModalAddChargingRate(t))}),n.j41(11,"ion-label"),n.EFF(12),n.nI1(13,"translate"),n.k0s()()()(),n.j41(14,"div",71)(15,"ion-button",72)(16,"ion-label"),n.EFF(17,"S\u1ea1c ho\xe0n t\u1ea5t"),n.k0s()()()()(),n.bVm()}if(2&s){const a=n.XpG();n.R7$(7),n.JRh(n.bMT(8,3,"ViewBill")),n.R7$(5),n.JRh(n.bMT(13,5,"Rate")),n.R7$(3),n.Y8G("href",a.APP_ROUTE.TABS_CHARGING_SESSION)}}function W(s,u){if(1&s){const a=n.RV6();n.j41(0,"ion-footer")(1,"div",68)(2,"div",58)(3,"div",59)(4,"ion-button",73)(5,"ion-label"),n.EFF(6),n.nI1(7,"translate"),n.k0s()()(),n.j41(8,"div",61)(9,"ion-button",70),n.bIt("click",function(t){n.eBV(a);const o=n.XpG(2);return n.Njj(o.presentModalAddChargingRate(t))}),n.j41(10,"ion-label"),n.EFF(11),n.nI1(12,"translate"),n.k0s()()()()()()}if(2&s){const a=n.XpG(2);let e;n.R7$(4),n.Y8G("href",a.APP_ROUTE.BILL_INFO_DETAIL.replace(":id",null!==(e=null==a.chargingSession||null==a.chargingSession.BillId?null:a.chargingSession.BillId.toString())&&void 0!==e?e:"")),n.R7$(2),n.JRh(n.bMT(7,3,"ViewBill")),n.R7$(5),n.JRh(n.bMT(12,5,"Rate"))}}function K(s,u){if(1&s&&(n.qex(0),n.DNE(1,W,13,7,"ion-footer",5),n.bVm()),2&s){const a=n.XpG();n.R7$(1),n.Y8G("ngIf",null==a.chargingSession?null:a.chargingSession.BillId)}}function H(s,u){if(1&s&&(n.j41(0,"div",74)(1,"div",75),n.nrm(2,"img",76),n.k0s(),n.j41(3,"div",77)(4,"div")(5,"b"),n.EFF(6),n.k0s()(),n.j41(7,"div"),n.EFF(8),n.k0s()()()),2&s){const a=u.$implicit,e=n.XpG();n.R7$(2),n.Y8G("src",e.getLocImage(e.chargingLocation),n.B4B),n.R7$(4),n.SpI("Tr\u1ee5 s\u1ea1c ",null!=a&&a.IsAC?"AC":"DC",""),n.R7$(2),n.SpI("ID: ",null==a?null:a.StationCode,"")}}function Z(s,u){if(1&s&&(n.j41(0,"div",74)(1,"div",75),n.nrm(2,"img",78),n.k0s(),n.j41(3,"div",77)(4,"div")(5,"b"),n.EFF(6),n.k0s()(),n.j41(7,"div"),n.EFF(8),n.k0s()()()),2&s){const a=u.$implicit;n.R7$(6),n.SpI("\u0110\u1ea7u s\u1ea1c ",null==a?null:a.ConnectorType,""),n.R7$(2),n.SpI("ID: ",null==a?null:a.ConnectorId,"")}}const Q=[{path:"",component:(()=>{var s;class u{constructor(e,t,o,i,l){var p,P=this;this.activatedRoute=e,this.loadingController=t,this.toastController=o,this.modalController=i,this.animationController=l,this.APP_ROUTE=x._,this.APP_FUNC_FormatDate=$.Rv,this.APP_FUNC_DivDateTime=$.Wv,this.APP_FUNC_FormatMoney=$.xi,this.APP_FUNC_GetColor_VSessionStatus=$.kH,this.v_session_status=O.jT,this.VSessionStatus=0;let M=null!==(p=e.snapshot.params.id)&&void 0!==p?p:"";M&&(this.ChargeSessionId=parseFloat(M)),(0,v.A)(function*(){P.loading=yield P.loadingController.create({message:""})})()}ngOnInit(){var e=this;(0,v.A)(function*(){(yield(0,B.kU)())&&e.refreshData(()=>{e.loadChargingConnector(),e.loadOrderDetail()})})()}ngOnDestroy(){this.destroyInterval()}onIonRefresher(e){this.refreshData(()=>{this.loadChargingConnector(),this.loadOrderDetail(),e.target.complete()})}refreshInterval(){var e,t,o;if(this.VSessionStatus==(null===(e=this.chargingSession)||void 0===e?void 0:e.VSessionStatus))return;clearInterval(this.intervalSession),clearInterval(this.intervalMonitor),this.VSessionStatus=null!==(t=null===(o=this.chargingSession)||void 0===o?void 0:o.VSessionStatus)&&void 0!==t?t:0;let i=1e4;if(this.VSessionStatus==O.jT.KhoiTaoPhienSac)i=3e3;else{if(this.VSessionStatus!=O.jT.DangSac)return;i=11e3}this.intervalSession=setInterval(()=>{[O.jT.KhoiTaoPhienSac,O.jT.DangSac].includes(this.VSessionStatus)?this.refreshData():clearInterval(this.intervalSession)},i),this.intervalMonitor=setInterval(()=>{[O.jT.DangSac].includes(this.VSessionStatus)?this.refreshMonitor():clearInterval(this.intervalMonitor)},2.2*i)}destroyInterval(){clearInterval(this.intervalSession),clearInterval(this.intervalMonitor)}refreshData(e){(0,I.cb)({loading:t=>{var o,i;t?null===(o=this.loading)||void 0===o||o.present():null===(i=this.loading)||void 0===i||i.dismiss()},params:{ChargeSessionId:this.ChargeSessionId},callback:t=>{this.response=t,null!=t&&t.Succeeded?(this.chargingSession=t.Data,this.refreshInterval()):(0,b.cX)(this.toastController,{duration:5e3},t).then(o=>o.present()),e&&e()}})}refreshMonitor(){var e,t;(0,I.eu)({params:{StationCode:null===(e=this.chargingSession)||void 0===e?void 0:e.StationCode,ConnectorId:null===(t=this.chargingSession)||void 0===t?void 0:t.ConnectorId},callback:o=>{null!=o&&o.Succeeded?this.monitor=o.Data:(0,b.cX)(this.toastController,{},o).then(i=>i.present())}})}loadChargingConnector(){var e=this;return(0,v.A)(function*(){var t,o;null!==(t=e.chargingSession)&&void 0!==t&&t.ChargeConnectorId&&(0,S.V)({loading:i=>{var l,p;i?null===(l=e.loading)||void 0===l||l.present():null===(p=e.loading)||void 0===p||p.dismiss()},params:{ChargeConnectorId:null===(o=e.chargingSession)||void 0===o?void 0:o.ChargeConnectorId},callback:i=>{e.response=i,null!=i&&i.Succeeded?e.chargingConnector=i.Data:(0,b.cX)(e.toastController,{},i).then(l=>l.present())}})})()}loadOrderDetail(){var e=this;return(0,v.A)(function*(){var t,o;null!==(t=e.chargingSession)&&void 0!==t&&t.OrderCode&&(0,V.q)({params:{OrderCode:null===(o=e.chargingSession)||void 0===o?void 0:o.OrderCode,PageNumber:1,PageSize:1},callback:i=>{null!=i&&i.Succeeded?e.orderDetail=i.Data[0]:(0,b.cX)(e.toastController,{},i).then(l=>l.present())}})})()}get chargingLocation(){var e;return null===(e=this.chargingConnector)||void 0===e?void 0:e.ChargingLocation}get chargingStation(){var e;return null===(e=this.chargingConnector)||void 0===e?void 0:e.ChargingStation}getLocImage(e){var t;if((null==e||!e.LocImage)&&null!=e&&e.LocImages)if("string"==typeof e.LocImages){var o,i;e.LocImage=(null!==(o=(null!==(i=JSON.parse(e.LocImages))&&void 0!==i?i:[])[0])&&void 0!==o?o:{}).imageurl}else{var l,p;e.LocImage=(null!==(l=(null!==(p=e.LocImages)&&void 0!==p?p:[])[0])&&void 0!==l?l:{}).imageurl}return null!==(t=null==e?void 0:e.LocImage)&&void 0!==t?t:"assets/favicon/favicon.svg"}getTimeCharging(){var e,t,o,i,l,p,P,M,D,j;return(0,$.Wv)(null!==(e=null===(t=this.monitor)||void 0===t?void 0:t.StartTime)&&void 0!==e?e:null===(o=this.chargingSession)||void 0===o?void 0:o.ChargingStart,(null!==(i=null===(l=this.monitor)||void 0===l?void 0:l.StartTime)&&void 0!==i?i:null!==(p=this.chargingSession)&&void 0!==p&&p.ChargingStart)?null!==(P=null!==(M=null===(D=this.monitor)||void 0===D?void 0:D.StopTime)&&void 0!==M?M:null===(j=this.chargingSession)||void 0===j?void 0:j.ChargingEnd)&&void 0!==P?P:new Date:null)}getBatteryPercent(){var e,t,o,i;return(0,$.Rw)(Math.floor((null!==(e=null!==(t=null===(o=this.monitor)||void 0===o?void 0:o.SoC)&&void 0!==t?t:null===(i=this.chargingSession)||void 0===i?void 0:i.BatteryPercent)&&void 0!==e?e:0)/10),100)}getMeter(){var e,t,o,i,l,p;return(0,$.Rw)(this.monitor?(null!==(e=null===(t=this.monitor)||void 0===t?void 0:t.LastMeter)&&void 0!==e?e:0)-(null!==(o=null===(i=this.monitor)||void 0===i?void 0:i.MeterStart)&&void 0!==o?o:0):null!==(l=null===(p=this.chargingSession)||void 0===p?void 0:p.ElectricUsed)&&void 0!==l?l:0,100)}getMoney(){var e,t;return null!==(e=this.orderDetail)&&void 0!==e&&e.RealAmount&&null!==(t=this.chargingSession)&&void 0!==t&&t.MaxElectricUsed?(0,$.Rw)(this.orderDetail.RealAmount*this.getMeter()/this.chargingSession.MaxElectricUsed,1):0}chargingStart(e){var t=this;return(0,v.A)(function*(){(0,I.wm)({loading:o=>{var i,l;o?null===(i=t.loading)||void 0===i||i.present():null===(l=t.loading)||void 0===l||l.dismiss()},params:{ChargeSessionId:t.ChargeSessionId},callback:o=>{null!=o&&o.Succeeded?t.refreshData():(0,b.cX)(t.toastController,{duration:7e3},o).then(i=>i.present())}})})()}chargingStop(e){var t=this;return(0,v.A)(function*(){(0,I._$)({loading:o=>{var i,l;o?null===(i=t.loading)||void 0===i||i.present():null===(l=t.loading)||void 0===l||l.dismiss()},params:{ChargeSessionId:t.ChargeSessionId},callback:o=>{null!=o&&o.Succeeded?(t.refreshData(),t.presentModalAddChargingRate()):(0,b.cX)(t.toastController,{duration:7e3},o).then(i=>i.present())}})})()}createBill(e){var t=this;return(0,v.A)(function*(){(0,m.MN)({params:{ChargeSessionId:t.ChargeSessionId},callback:o=>{null!=o&&o.Succeeded?t.refreshData(()=>{var i,l;window.location.href=x._.BILL_INFO_DETAIL.replace(":id",null!==(i=null===(l=o.Data)||void 0===l||null===(l=l.BillId)||void 0===l?void 0:l.toString())&&void 0!==i?i:"")}):(0,b.cX)(t.toastController,{duration:7e3},o).then(i=>i.present())}})})()}presentModalAddChargingRate(e){var t=this;return(0,v.A)(function*(){var o;(yield t.modalController.create({component:d,componentProps:{chargingRate:{ChargeLocationId:null===(o=t.chargingLocation)||void 0===o?void 0:o.ChargeLocationId,RateValue:5}},cssClass:"ion-modal-breakpoint",breakpoints:[.75,1],initialBreakpoint:.75})).present()})()}presentModalAddFeedback(e){var t=this;return(0,v.A)(function*(){var o;let i=yield t.modalController.create({component:_.l,componentProps:{FbCatgId:2,ChargeLocationId:null===(o=t.chargingLocation)||void 0===o?void 0:o.ChargeLocationId},mode:"ios"});i.onDidDismiss().then(l=>{"success"==l.role&&t.refreshData()}),i.present()})()}presentModalConfirm_ChargingSession_Stop(e){var t=this;return(0,v.A)(function*(){(0,b.Yy)(t.modalController,t.animationController,{selectedId:t.ChargeSessionId,message:{TitleConfirm:"AreYouSureYouWantToStopCharging",Img:"/assets/image/stop-changing.svg",TextConfirm:"StopChanging",TextCancel:"Close"},fnConfirm:()=>{t.chargingStop()}})})()}}return(s=u).\u0275fac=function(e){return new(e||s)(n.rXU(E.nX),n.rXU(c.Xi),n.rXU(c.K_),n.rXU(c.W3),n.rXU(c.Hx))},s.\u0275cmp=n.VBU({type:s,selectors:[["app-charging-session-detail"]],decls:22,vars:12,consts:[["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],["class","container py-5 text-center",4,"ngIf"],[4,"ngIf"],["class","container mt-3 mb-5",4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["templateChargingStation",""],["templateChargingConnector",""],[1,"container-loading"],["name","circular","color","primary"],[1,"container","py-5","text-center"],["src","../../../assets/image/temp/no-info.svg"],[1,"text-muted","mt-4"],[1,"container","text-center","line-height-0","mt-2","mb-3"],[1,"card-day","rounded","bg-white","px-3","py-4"],["color","primary","name","crescent"],[1,"text-center","mt-4"],["color","primary"],[1,"container","mt-3","mb-5"],[1,"row","align-items-stretch"],[1,"col-12","col-lg-6","mb-4"],[1,"card-day","d-flex","flex-column","h-100","w-100","rounded","bg-white","border"],[1,"flex-grow-1"],[1,"d-flex","justify-content-center"],[1,"card-status"],[3,"color"],["src","../../../assets/icon/ion-icon/battery.svg"],[1,"d-flex","mt-3"],[1,"col-7","px-0","text-center"],[1,"text-muted"],[1,"progress-left"],[1,"progress-bar"],[1,"progress-right"],[1,"progress-value"],[1,"d-flex","w-100","h-100","align-items-center","justify-content-center","text-center"],[1,"line-height-1"],["color","warning","src","../../../assets/icon/ion-icon/electric.svg"],[1,"col-5","px-0"],[1,"status-item","mb-3"],[1,"mt-2"],["color","primary","src","../../../assets/icon/ion-icon/changing-battery.svg"],[1,"my-4"],["color","primary","src","../../../assets/icon/ion-icon/changing-time.svg"],[1,"p-2"],[1,"card-package","rounded","border","d-flex","align-items-stretch","p-3"],[1,"col-7","pl-0","d-flex","align-items-center","pr-2","border-right"],["src","../../../assets/icon/ion-img/charge-package.svg"],[1,"align-self-stretch","pl-3","d-flex","flex-column","justify-content-between"],[1,"col-5","pl-2","pr-0","flex-grow-1","d-flex","flex-column","justify-content-between"],[1,"card-day","h-100","rounded","bg-white","p-3"],[1,"m-0"],[1,"border-dashed"],[1,"mt-0","mb-3","text-primary","d-flex","align-items-center"],["src","../../../assets/icon/ion-icon/changing-station.svg"],[1,"ml-2"],[1,"row"],[1,"col-6","pr-2"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"col-6","pl-2"],["class","col-12 col-md-6 mb-4",4,"ngIf"],[1,"text-center"],["color","light","shape","round","expand","block",3,"click"],[1,"col-12","col-md-6","mb-4"],[1,"card-day","rounded","bg-white","p-3"],[1,"text-medium"],[1,"container","py-3"],["color","danger","shape","round","expand","block",3,"click"],["color","medium","fill","outline","shape","round","expand","block",3,"click"],[1,"mt-3"],["color","primary","shape","round","expand","block",3,"href"],["color","primary","fill","outline","shape","round","expand","block",3,"href"],[1,"rounded","border","p-2"],[1,"embed-responsive","embed-responsive-4by3"],[1,"embed-responsive-item","rounded",3,"src"],[1,"mt-2","text-center"],["src","../../../assets/image/temp/dausac.jpg",1,"embed-responsive-item","rounded"]],template:function(e,t){1&e&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),n.nrm(3,"ion-back-button",1),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",2),n.bIt("ionRefresh",function(i){return t.onIonRefresher(i)}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,w,2,0,"div",3)(11,N,5,3,"div",4)(12,L,7,0,"ng-container",5)(13,Y,87,28,"div",6),n.k0s(),n.qex(14,7),n.DNE(15,J,6,0,"ng-container",8)(16,z,18,7,"ng-container",8)(17,K,2,1,"ng-container",8),n.bVm(),n.DNE(18,H,9,3,"ng-template",null,9,n.C5r)(20,Z,9,2,"ng-template",null,10,n.C5r)),2&e&&(n.R7$(3),n.Y8G("defaultHref",t.APP_ROUTE.TABS_CHARGING_SESSION),n.R7$(2),n.JRh(n.bMT(6,10,"Charger")),n.R7$(5),n.Y8G("ngIf",!t.response),n.R7$(1),n.Y8G("ngIf",t.response&&!t.chargingSession),n.R7$(1),n.Y8G("ngIf",(null==t.chargingSession?null:t.chargingSession.VSessionStatus)==t.v_session_status.KhoiTaoPhienSac),n.R7$(1),n.Y8G("ngIf",t.chargingSession),n.R7$(1),n.Y8G("ngSwitch",null==t.chargingSession?null:t.chargingSession.VSessionStatus),n.R7$(1),n.Y8G("ngSwitchCase",t.v_session_status.DangSac),n.R7$(1),n.Y8G("ngSwitchCase",t.v_session_status.DaSac),n.R7$(1),n.Y8G("ngSwitchCase",t.v_session_status.DaThanhToan))},dependencies:[f.bT,f.T3,f.ux,f.e1,c.Jm,c.QW,c.ZB,c.W9,c.M0,c.eU,c.iq,c.KW,c.he,c.To,c.Ki,c.w2,c.IO,c.BC,c.ai,c.el,y.D9],styles:['.card-day.rounded[_ngcontent-%COMP%], .card-day.rounded[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-day[_ngcontent-%COMP%]   .card-status[_ngcontent-%COMP%]{margin-top:-1rem}.card-day[_ngcontent-%COMP%]   .card-package[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3rem}.status-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;vertical-align:middle;font-size:1.5rem}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}ion-spinner[_ngcontent-%COMP%]{width:3rem;height:3rem}.progress[_ngcontent-%COMP%]{width:5rem;height:5rem;line-height:5rem;background:none;margin:0;box-shadow:none;position:relative}.progress[_ngcontent-%COMP%]:after{content:"";width:100%;height:100%;border-radius:50%;border:.4rem solid var(--ion-color-secondary);position:absolute;top:0;left:0}.progress[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:50%;height:100%;overflow:hidden;position:absolute;top:0;z-index:1}.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]{left:0}.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{width:100%;height:100%;background:none;border-width:.4rem;border-style:solid;position:absolute;top:0}.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{left:100%;border-top-right-radius:5rem;border-bottom-right-radius:5rem;border-left:0;transform-origin:center left}.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]{right:0}.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{left:-100%;border-top-left-radius:5rem;border-bottom-left-radius:5rem;border-right:0;transform-origin:center right}.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;font-size:1rem;text-align:center;position:absolute;top:0;left:0}.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}.progress-tertiary[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-tertiary)}.progress-success[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-success)}.progress-1[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-2 1.8s linear forwards}.progress-2[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-4 1.8s linear forwards}.progress-3[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-6 1.8s linear forwards}.progress-4[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-8 1.8s linear forwards}.progress-5[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], .progress-6[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-6[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-2 1.5s linear forwards 1.8s}.progress-7[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-7[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-4 1.5s linear forwards 1.8s}.progress-8[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-8[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-6 1.5s linear forwards 1.8s}.progress-9[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-9[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-8 1.5s linear forwards 1.8s}.progress-10[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-10[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.5s linear forwards 1.8s}@keyframes _ngcontent-%COMP%_loading-1{0%{transform:rotate(0)}to{transform:rotate(18deg)}}@keyframes _ngcontent-%COMP%_loading-2{0%{transform:rotate(0)}to{transform:rotate(36deg)}}@keyframes _ngcontent-%COMP%_loading-3{0%{transform:rotate(0)}to{transform:rotate(54deg)}}@keyframes _ngcontent-%COMP%_loading-4{0%{transform:rotate(0)}to{transform:rotate(72deg)}}@keyframes _ngcontent-%COMP%_loading-5{0%{transform:rotate(0)}to{transform:rotate(90deg)}}@keyframes _ngcontent-%COMP%_loading-6{0%{transform:rotate(0)}to{transform:rotate(108deg)}}@keyframes _ngcontent-%COMP%_loading-7{0%{transform:rotate(0)}to{transform:rotate(126deg)}}@keyframes _ngcontent-%COMP%_loading-8{0%{transform:rotate(0)}to{transform:rotate(144deg)}}@keyframes _ngcontent-%COMP%_loading-9{0%{transform:rotate(0)}to{transform:rotate(162deg)}}@keyframes _ngcontent-%COMP%_loading-10{0%{transform:rotate(0)}to{transform:rotate(180deg)}}']}),u})()}];let q=(()=>{var s;class u{}return(s=u).\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.$C({type:s}),s.\u0275inj=n.G2t({imports:[E.iI.forChild(Q),E.iI]}),u})();var nn=h(9500);let tn=(()=>{var s;class u{}return(s=u).\u0275fac=function(e){return new(e||s)},s.\u0275mod=n.$C({type:s}),s.\u0275inj=n.G2t({imports:[f.MD,R.YN,c.bv,q,nn.x]}),u})()}}]);