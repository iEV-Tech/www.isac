"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6080],{6080:(bn,S,u)=>{u.r(S),u.d(S,{ChargingConnectorDetailPageModule:()=>kn});var P=u(177),I=u(9417),g=u(8974),R=u(2175),m=u(467),y=u(7392),k=u(5972);const $=function(){var i=(0,m.A)(function*(r){var a,t;r.params=r.params||{},(0,k.hm)({url:"api/PaymentMethod/get-paymentmethods",params:{PageNumber:null!==(a=r.params.PageNumber)&&void 0!==a?a:1,PageSize:null!==(t=r.params.PageSize)&&void 0!==t?t:10},success:e=>{"function"==typeof r.callback&&r.callback(e.data||null)},error:e=>{var o;"function"==typeof r.callback&&r.callback(null==e||null===(o=e.response)||void 0===o?void 0:o.data),console.error(e)},loading:r.loading})});return function(a){return i.apply(this,arguments)}}();var w=u(6539),b=u(8517),F=u(8833),h=u(8650),T=u(9061);const V=function(){var i=(0,m.A)(function*(r){var a,t,e;r.params=r.params||{},(0,k.hm)({url:"api/ChargingPowerPackage/get-chargingpackages",params:{ChargeConnectorId:null!==(a=r.params.ChargeConnectorId)&&void 0!==a?a:null,PageNumber:null!==(t=r.params.PageNumber)&&void 0!==t?t:1,PageSize:null!==(e=r.params.PageSize)&&void 0!==e?e:10},success:o=>{"function"==typeof r.callback&&r.callback(o.data||null)},error:o=>{var l;"function"==typeof r.callback&&r.callback(null==o||null===(l=o.response)||void 0===l?void 0:l.data),console.error(o)},loading:r.loading})});return function(a){return i.apply(this,arguments)}}(),x=function(){var i=(0,m.A)(function*(r){var a,t,e;r.params=r.params||{},(0,k.hm)({url:"api/ChargingPowerPackage/get-detail",params:{PromoteCode:null!==(a=r.params.PromoteCode)&&void 0!==a?a:null,ChargePackageId:null!==(t=r.params.ChargePackageId)&&void 0!==t?t:null,ChargeConnectorId:null!==(e=r.params.ChargeConnectorId)&&void 0!==e?e:null},success:o=>{"function"==typeof r.callback&&r.callback(o.data||null)},error:o=>{var l;"function"==typeof r.callback&&r.callback(null==o||null===(l=o.response)||void 0===l?void 0:l.data),console.error(o)},loading:r.loading})});return function(a){return i.apply(this,arguments)}}(),N=function(){var i=(0,m.A)(function*(r){var a,t,e;r.params=r.params||{},(0,k.hm)({url:"api/ChargingPowerPackage/get-range-optional-pack",params:{PromoteCode:null!==(a=r.params.PromoteCode)&&void 0!==a?a:null,ChargePackageId:null!==(t=r.params.ChargePackageId)&&void 0!==t?t:null,ChargeConnectorId:null!==(e=r.params.ChargeConnectorId)&&void 0!==e?e:null},success:o=>{"function"==typeof r.callback&&r.callback(o.data||null)},error:o=>{var l;"function"==typeof r.callback&&r.callback(null==o||null===(l=o.response)||void 0===l?void 0:l.data),console.error(o)},loading:r.loading})});return function(a){return i.apply(this,arguments)}}(),X=function(){var i=(0,m.A)(function*(r){var a,t,e;r.params=r.params||{},(0,k.hm)({url:"api/ChargingPowerPackage/get-optional-detail",params:{PowerValue:null!==(a=r.params.PowerValue)&&void 0!==a?a:null,ChargeConnectorId:null!==(t=r.params.ChargeConnectorId)&&void 0!==t?t:null,PromoteCode:null!==(e=r.params.PromoteCode)&&void 0!==e?e:null},success:o=>{"function"==typeof r.callback&&r.callback(o.data||null)},error:o=>{var l;"function"==typeof r.callback&&r.callback(null==o||null===(l=o.response)||void 0===l?void 0:l.data),console.error(o)},loading:r.loading})});return function(a){return i.apply(this,arguments)}}();var A=u(6043),D=u(3588),G=u(5312),n=u(4438),U=u(4517),B=u(345),L=u(4842);const J=["modalCustomChargingPackage"],Y=["modalCustomChargingPackageConfirm"];function z(i,r){if(1&i&&n.eu8(0,8),2&i){n.XpG();const a=n.sdS(4);n.Y8G("ngTemplateOutlet",a)}}function H(i,r){if(1&i&&n.eu8(0,8),2&i){n.XpG();const a=n.sdS(6);n.Y8G("ngTemplateOutlet",a)}}function W(i,r){1&i&&(n.j41(0,"div",27),n.nrm(1,"ion-spinner",28),n.k0s())}function Q(i,r){if(1&i){const a=n.RV6();n.j41(0,"ion-button",36),n.bIt("click",function(){n.eBV(a),n.XpG(2);const e=n.sdS(43);return n.Njj(null==e?null:e.present())}),n.j41(1,"ion-label"),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.nrm(4,"ion-icon",37),n.k0s()}2&i&&(n.R7$(2),n.JRh(n.bMT(3,1,"CustomChargingPackage")))}function K(i,r){if(1&i&&(n.qex(0),n.j41(1,"div")(2,"small"),n.EFF(3),n.k0s()(),n.j41(4,"div",43)(5,"b")(6,"b",42),n.EFF(7),n.k0s()(),n.j41(8,"span"),n.EFF(9),n.k0s()(),n.bVm()),2&i){let a;const t=n.XpG().$implicit,e=n.XpG(3);n.R7$(3),n.JRh(t.ChargePackName),n.R7$(4),n.Lme("",t.PowerValue,"",t.Unit,""),n.R7$(2),n.SpI(" / ",e.APP_FUNC_FormatMoney(null!==(a=t.AftertaxPrice)&&void 0!==a?a:0),"\u0111")}}function Z(i,r){if(1&i&&(n.qex(0),n.j41(1,"div")(2,"small"),n.EFF(3),n.k0s()(),n.j41(4,"div",43)(5,"b")(6,"b",42),n.EFF(7),n.k0s()(),n.j41(8,"span"),n.EFF(9),n.k0s()(),n.bVm()),2&i){let a;const t=n.XpG().$implicit,e=n.XpG(3);n.R7$(3),n.JRh(t.ChargePackName),n.R7$(4),n.SpI("",e.APP_FUNC_FormatMoney(null!==(a=t.AftertaxPrice)&&void 0!==a?a:0),"\u0111"),n.R7$(2),n.Lme(" / ",t.PowerValue,"",t.Unit,"")}}function q(i,r){if(1&i&&(n.qex(0),n.j41(1,"div",38)(2,"ion-item",39)(3,"ion-radio",40)(4,"div",15)(5,"div"),n.nrm(6,"ion-img",41),n.k0s(),n.j41(7,"div",17),n.DNE(8,K,10,4,"ng-container",25)(9,Z,10,4,"ng-container",25),n.j41(10,"div")(11,"small"),n.EFF(12),n.nI1(13,"translate"),n.j41(14,"span",42),n.EFF(15),n.nI1(16,"translate"),n.k0s()()()()()()()(),n.bVm()),2&i){const a=r.$implicit;n.R7$(3),n.Y8G("value",a.ChargePackageId),n.R7$(5),n.Y8G("ngIf",a.IsPackByPower),n.R7$(),n.Y8G("ngIf",!a.IsPackByPower),n.R7$(3),n.SpI("",n.bMT(13,5,"EstimatedChargingTime"),": "),n.R7$(3),n.SpI("30 ",n.bMT(16,7,"Minute"),"")}}function nn(i,r){if(1&i){const a=n.RV6();n.qex(0),n.j41(1,"div",29)(2,"div",30)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.DNE(6,Q,5,3,"ion-button",31),n.k0s(),n.j41(7,"div",32)(8,"div",33)(9,"ion-radio-group",34),n.bIt("ionChange",function(e){n.eBV(a);const o=n.XpG(2);return n.Njj(o.changeChargePackage(e))}),n.DNE(10,q,17,9,"ng-container",35),n.k0s()()()(),n.bVm()}if(2&i){const a=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,4,"ChargingPackage")),n.R7$(2),n.Y8G("ngIf",(null==a.chargingPackageRange?null:a.chargingPackageRange.MinPowerValue)&&(null==a.chargingPackageRange?null:a.chargingPackageRange.MaxPowerValue)),n.R7$(3),n.Y8G("value",a.ChargePackageId),n.R7$(),n.Y8G("ngForOf",a.chargingPackages)}}function en(i,r){if(1&i){const a=n.RV6();n.j41(0,"div",44)(1,"div",45)(2,"h5",46)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()()(),n.j41(6,"div")(7,"div",47)(8,"div",48)(9,"ion-item",49)(10,"ion-input",50),n.bIt("ionChange",function(e){n.eBV(a);const o=n.XpG(2);return n.Njj(o.changeCustomElectricValue(e))}),n.k0s()()(),n.j41(11,"div",51)(12,"small")(13,"b"),n.EFF(14,"kWh"),n.k0s()()()()(),n.j41(15,"div")(16,"ion-range",52,4),n.bIt("ionChange",function(e){n.eBV(a);const o=n.XpG(2);return n.Njj(o.changeCustomElectricValue(e))}),n.k0s(),n.j41(18,"div",53)(19,"small"),n.EFF(20),n.k0s(),n.j41(21,"small"),n.EFF(22),n.k0s()()(),n.j41(23,"div",54)(24,"ion-button",55),n.bIt("click",function(e){n.eBV(a);const o=n.XpG(2);return n.Njj(o.applyCustomElectric(e))}),n.j41(25,"ion-label"),n.EFF(26),n.nI1(27,"translate"),n.k0s()()()()}if(2&i){const a=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,14,"CustomKWhNumber")),n.R7$(6),n.Mz_("placeholder","",a.customElectricMin," kWh"),n.Y8G("ngModel",a.customElectricValue)("min",a.customElectricMin)("max",a.customElectricMax),n.R7$(6),n.Y8G("ngModel",a.customElectricValue)("min",a.customElectricMin)("max",a.customElectricMax)("step",a.customElectricStep)("pin",!0),n.R7$(4),n.SpI("",a.customElectricMin,"kWh"),n.R7$(2),n.SpI("",a.customElectricMax,"kWh"),n.R7$(4),n.JRh(n.bMT(27,16,"Apply"))}}function tn(i,r){if(1&i){const a=n.RV6();n.j41(0,"div",44)(1,"div",45)(2,"h5",46)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()()(),n.j41(6,"div")(7,"div",56)(8,"div",57)(9,"span",58),n.EFF(10),n.k0s()(),n.j41(11,"div",59)(12,"ion-button",60),n.bIt("click",function(){n.eBV(a),n.XpG();const e=n.sdS(43),o=n.sdS(46);return null==o||o.dismiss(),n.Njj(null==e?null:e.present())}),n.j41(13,"ion-label"),n.EFF(14),n.nI1(15,"translate"),n.k0s()()()()(),n.j41(16,"div",33)(17,"div",61)(18,"span"),n.EFF(19),n.nI1(20,"translate"),n.k0s(),n.j41(21,"b",42),n.EFF(22),n.k0s()(),n.j41(23,"div",61)(24,"span"),n.EFF(25),n.nI1(26,"translate"),n.k0s(),n.j41(27,"b",42),n.EFF(28),n.nI1(29,"translate"),n.k0s()()(),n.j41(30,"div",54)(31,"ion-button",55),n.bIt("click",function(e){n.eBV(a);const o=n.XpG(2);return n.Njj(o.submitCustomPackage(e))}),n.j41(32,"ion-label"),n.EFF(33),n.nI1(34,"translate"),n.k0s()()()()}if(2&i){let a,t;const e=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,9,"ConfirmCustomChargingPackage")),n.R7$(6),n.Lme("",null!==(a=null==e.customChargingPackage?null:e.customChargingPackage.PowerValue)&&void 0!==a?a:0," ",null!==(a=null==e.customChargingPackage?null:e.customChargingPackage.Unit)&&void 0!==a?a:"kWh",""),n.R7$(4),n.JRh(n.bMT(15,11,"Edit")),n.R7$(5),n.SpI("",n.bMT(20,13,"IntoMoney"),":"),n.R7$(3),n.SpI("",e.APP_FUNC_FormatMoney(null!==(t=null==e.customChargingPackage?null:e.customChargingPackage.RealValue)&&void 0!==t?t:0),"\u0111"),n.R7$(3),n.SpI("",n.bMT(26,15,"EstimatedChargingTime"),":"),n.R7$(3),n.SpI("30 ",n.bMT(29,17,"Minute"),""),n.R7$(5),n.JRh(n.bMT(34,19,"Pay"))}}function an(i,r){if(1&i){const a=n.RV6();n.qex(0),n.j41(1,"ion-button",65),n.bIt("click",function(e){n.eBV(a);const o=n.XpG(3);return n.Njj(o.submitPackage(e))}),n.j41(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.bVm()}2&i&&(n.R7$(3),n.JRh(n.bMT(4,1,"Pay")))}function on(i,r){1&i&&(n.qex(0),n.j41(1,"ion-button",66)(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.bVm()),2&i&&(n.R7$(3),n.JRh(n.bMT(4,1,"BeingUsed")))}function rn(i,r){1&i&&(n.qex(0),n.j41(1,"ion-button",67)(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.bVm()),2&i&&(n.R7$(3),n.JRh(n.bMT(4,1,"AlreadyBooked")))}function ln(i,r){1&i&&(n.qex(0),n.j41(1,"ion-button",68)(2,"ion-label"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.bVm()),2&i&&(n.R7$(3),n.JRh(n.bMT(4,1,"TemporarilyStoppedServing")))}function cn(i,r){if(1&i&&(n.j41(0,"ion-footer")(1,"div",62),n.qex(2,5),n.DNE(3,an,5,3,"ng-container",63)(4,on,5,3,"ng-container",63)(5,rn,5,3,"ng-container",63)(6,ln,5,3,"ng-container",64),n.bVm(),n.k0s()()),2&i){const a=n.XpG(2);n.R7$(2),n.Y8G("ngSwitch",a.chargingConnector.VConnectorStatus),n.R7$(),n.Y8G("ngSwitchCase",a.v_connector_status.DangRanh),n.R7$(),n.Y8G("ngSwitchCase",a.v_connector_status.DangSac),n.R7$(),n.Y8G("ngSwitchCase",a.v_connector_status.DaDatLich)}}function gn(i,r){if(1&i){const a=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",9),n.nrm(3,"ion-back-button",10),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",11),n.bIt("ionRefresh",function(e){n.eBV(a);const o=n.XpG();return n.Njj(o.onIonRefresher(e))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,W,2,0,"div",12),n.j41(11,"div",13)(12,"div",14)(13,"div",15)(14,"div")(15,"ion-thumbnail"),n.nrm(16,"img",16),n.k0s()(),n.j41(17,"div",17)(18,"h5",18),n.nrm(19,"ion-icon",19),n.j41(20,"span",20),n.EFF(21),n.k0s()(),n.j41(22,"div")(23,"small"),n.EFF(24),n.k0s()()()()(),n.j41(25,"div",21)(26,"div",22)(27,"b"),n.EFF(28),n.nI1(29,"translate"),n.k0s()(),n.j41(30,"div",23)(31,"div"),n.nrm(32,"ion-img",24),n.k0s(),n.j41(33,"div",17)(34,"div",18)(35,"b"),n.EFF(36),n.nI1(37,"translate"),n.k0s()(),n.j41(38,"div")(39,"small"),n.EFF(40),n.k0s()()()()(),n.DNE(41,nn,11,6,"ng-container",25),n.k0s(),n.j41(42,"ion-modal",26,2),n.DNE(44,en,28,18,"ng-template"),n.k0s(),n.j41(45,"ion-modal",26,3),n.DNE(47,tn,35,21,"ng-template"),n.k0s()(),n.DNE(48,cn,7,4,"ion-footer",25)}if(2&i){const a=n.XpG();n.R7$(3),n.Y8G("defaultHref",a.APP_ROUTE.TABS_DEFAULT),n.R7$(2),n.JRh(n.bMT(6,13,"ChooseChargingPackage")),n.R7$(5),n.Y8G("ngIf",!a.response),n.R7$(6),n.Y8G("src",a.getLocImage(a.chargingLocation),n.B4B),n.R7$(5),n.JRh(null==a.chargingLocation?null:a.chargingLocation.LocName),n.R7$(3),n.SpI("ID: ",null==a.chargingStation?null:a.chargingStation.StationCode,""),n.R7$(4),n.JRh(n.bMT(29,15,"Connector")),n.R7$(8),n.Lme("",n.bMT(37,17,"ConnectorNum")," ",null==a.chargingConnector?null:a.chargingConnector.ConnectorId,""),n.R7$(4),n.Lme("ID: ",null==a.chargingStation?null:a.chargingStation.StationCode,"",null==a.chargingConnector?null:a.chargingConnector.ConnectorId,""),n.R7$(),n.Y8G("ngIf",(null==a.chargingConnector?null:a.chargingConnector.VConnectorStatus)==a.v_connector_status.DangRanh),n.R7$(7),n.Y8G("ngIf",a.chargingConnector)}}function dn(i,r){if(1&i&&(n.j41(0,"td")(1,"small"),n.EFF(2),n.k0s(),n.j41(3,"div")(4,"b"),n.EFF(5),n.k0s(),n.j41(6,"small"),n.EFF(7),n.k0s()()()),2&i){let a;const t=n.XpG(3);n.R7$(2),n.JRh(t.chargingPackage.ChargePackName),n.R7$(3),n.Lme("",t.chargingPackage.PowerValue,"",t.chargingPackage.Unit,""),n.R7$(2),n.SpI(" / ",t.APP_FUNC_FormatMoney(null!==(a=t.chargingPackage.AftertaxPrice)&&void 0!==a?a:0),"\u0111")}}function sn(i,r){if(1&i&&(n.j41(0,"td")(1,"small"),n.EFF(2),n.k0s(),n.j41(3,"div")(4,"b"),n.EFF(5),n.k0s(),n.j41(6,"small"),n.EFF(7),n.k0s()()()),2&i){let a;const t=n.XpG(3);n.R7$(2),n.JRh(t.chargingPackage.ChargePackName),n.R7$(3),n.SpI("",t.APP_FUNC_FormatMoney(null!==(a=t.chargingPackage.AftertaxPrice)&&void 0!==a?a:0),"\u0111"),n.R7$(2),n.Lme(" / ",t.chargingPackage.PowerValue,"",t.chargingPackage.Unit,"")}}function un(i,r){if(1&i&&(n.j41(0,"tr")(1,"td",58),n.EFF(2),n.nI1(3,"translate"),n.k0s(),n.j41(4,"td"),n.EFF(5),n.k0s()()),2&i){const a=n.XpG(3);n.R7$(2),n.JRh(n.bMT(3,2,"Discount")),n.R7$(3),n.SpI("-",a.APP_FUNC_FormatMoney(a.chargingPackage.PromoteValue),"\u0111")}}function mn(i,r){if(1&i&&(n.j41(0,"tr",85)(1,"td",58),n.EFF(2,"VAT"),n.k0s(),n.j41(3,"td"),n.EFF(4),n.k0s()()),2&i){const a=n.XpG(3);n.R7$(4),n.SpI("+",a.chargingPackage.TaxPercent,"%")}}function pn(i,r){if(1&i&&(n.j41(0,"div",71)(1,"table",83)(2,"tr")(3,"td",58),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.DNE(6,dn,8,4,"td",25)(7,sn,8,4,"td",25),n.k0s(),n.DNE(8,un,6,4,"tr",25)(9,mn,5,1,"tr",84),n.j41(10,"tr",85)(11,"td")(12,"b"),n.EFF(13),n.nI1(14,"translate"),n.k0s(),n.nrm(15,"br"),n.j41(16,"small",58),n.EFF(17),n.nI1(18,"translate"),n.k0s()(),n.j41(19,"td",42)(20,"strong"),n.EFF(21),n.k0s()()()()()),2&i){let a;const t=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,8,"ChargingPackage")),n.R7$(2),n.Y8G("ngIf",t.chargingPackage.IsPackByPower),n.R7$(),n.Y8G("ngIf",!t.chargingPackage.IsPackByPower),n.R7$(),n.Y8G("ngIf",t.chargingPackage.PromoteValue),n.R7$(),n.Y8G("ngIf",t.chargingPackage.TaxPercent),n.R7$(4),n.JRh(n.bMT(14,10,"Total")),n.R7$(4),n.JRh(n.bMT(18,12,"IncludedVAT")),n.R7$(4),n.SpI("",t.APP_FUNC_FormatMoney(null!==(a=t.chargingPackage.RealValue)&&void 0!==a?a:0),"\u0111")}}function hn(i,r){if(1&i){const a=n.RV6();n.j41(0,"div")(1,"ion-chip",86)(2,"ion-label"),n.EFF(3),n.k0s(),n.j41(4,"ion-icon",87),n.bIt("click",function(e){n.eBV(a);const o=n.XpG(2);return n.Njj(o.removePromoteCode(e))}),n.k0s()()()}if(2&i){const a=n.XpG(2);n.R7$(3),n.JRh(a.PromoteCodeApply)}}function Cn(i,r){if(1&i&&(n.qex(0),n.j41(1,"div",88)(2,"ion-item",39)(3,"ion-radio",89)(4,"div",15)(5,"div")(6,"ion-thumbnail"),n.nrm(7,"img",16),n.k0s()(),n.j41(8,"div",17)(9,"b"),n.EFF(10),n.k0s()()()()()(),n.bVm()),2&i){let a;const t=r.$implicit,e=n.XpG(2);n.R7$(),n.HbH(t.PaymentMethodId==e.PaymentMethodId?"border-primary":"border-gray"),n.R7$(2),n.Y8G("value",t.PaymentMethodId)("disabled",!t.IsSupport),n.R7$(4),n.Mz_("src","../../../assets/icon/payment/",t.PmCode,".jpeg",n.B4B),n.R7$(3),n.JRh(null!==(a=null!==(a=t.PmDesc)&&void 0!==a?a:t.PmName)&&void 0!==a?a:t.PmCode)}}function _n(i,r){if(1&i){const a=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",9)(3,"ion-button",69),n.bIt("click",function(e){n.eBV(a);const o=n.XpG();return n.Njj(o.backPackage(e))}),n.nrm(4,"ion-icon",70),n.k0s()(),n.j41(5,"ion-title"),n.EFF(6),n.nI1(7,"translate"),n.k0s()()(),n.j41(8,"ion-content")(9,"div",62)(10,"div",71)(11,"div",15)(12,"div")(13,"ion-thumbnail"),n.nrm(14,"img",16),n.k0s()(),n.j41(15,"div",17)(16,"h5",72),n.nrm(17,"ion-icon",73),n.j41(18,"span",20),n.EFF(19),n.k0s()(),n.j41(20,"div")(21,"small"),n.EFF(22),n.nI1(23,"translate"),n.j41(24,"b"),n.EFF(25),n.k0s()()(),n.j41(26,"div")(27,"small"),n.EFF(28),n.nI1(29,"translate"),n.j41(30,"b"),n.EFF(31),n.k0s()()()()()(),n.nrm(32,"hr",74),n.DNE(33,pn,22,14,"div",75),n.j41(34,"div",76)(35,"div",22)(36,"b"),n.EFF(37),n.nI1(38,"translate"),n.k0s()(),n.j41(39,"div")(40,"div",77)(41,"input",78),n.nI1(42,"translate"),n.bIt("change",function(e){n.eBV(a);const o=n.XpG();return n.Njj(o.changePromoteCode(e))})("keyup",function(e){n.eBV(a);const o=n.XpG();return n.Njj(o.keyupPromoteCode(e))}),n.k0s(),n.j41(43,"div",79)(44,"button",80),n.bIt("click",function(e){n.eBV(a);const o=n.XpG();return n.Njj(o.submitPromoteCode(e))}),n.EFF(45),n.nI1(46,"translate"),n.k0s()()()(),n.DNE(47,hn,5,1,"div",25),n.k0s(),n.j41(48,"div",81)(49,"div",22)(50,"b"),n.EFF(51),n.nI1(52,"translate"),n.k0s()(),n.j41(53,"div",82)(54,"ion-radio-group",34),n.bIt("ionChange",function(e){n.eBV(a);const o=n.XpG();return n.Njj(o.changePaymentMethod(e))}),n.DNE(55,Cn,11,7,"ng-container",35),n.k0s()()()()(),n.j41(56,"ion-footer")(57,"div",62)(58,"ion-button",65),n.bIt("click",function(e){n.eBV(a);const o=n.XpG();return n.Njj(o.goPayment(e))}),n.j41(59,"ion-label"),n.EFF(60),n.nI1(61,"translate"),n.k0s()()()()}if(2&i){let a,t;const e=n.XpG();n.R7$(6),n.JRh(n.bMT(7,25,"BillingInformation")),n.R7$(8),n.Y8G("src",e.getLocImage(e.chargingLocation),n.B4B),n.R7$(5),n.JRh(null==e.chargingLocation?null:e.chargingLocation.LocName),n.R7$(3),n.Lme("",n.bMT(23,27,"ChargingStation")," ",null!=e.chargingStation&&e.chargingStation.IsAC?"AC":"DC",""),n.R7$(2),n.ZvI("ml-3 text-",e.APP_FUNC_GetColor_VStationStatus(null==e.chargingStation?null:e.chargingStation.VStationStatus),""),n.R7$(),n.JRh(null!==(a=null==e.chargingStation?null:e.chargingStation.VStationStatusName)&&void 0!==a?a:"[TrangThaiTruSac]"),n.R7$(3),n.Lme("",n.bMT(29,29,"ChargingConnector")," ",null==e.chargingConnector?null:e.chargingConnector.ConnectorType,""),n.R7$(2),n.ZvI("ml-3 text-",e.APP_FUNC_GetColor_VConnectorStatus(null==e.chargingConnector?null:e.chargingConnector.VConnectorStatus),""),n.R7$(),n.JRh(null!==(t=null==e.chargingConnector?null:e.chargingConnector.VConnectorStatusName)&&void 0!==t?t:"[TrangThaiVoiSac]"),n.R7$(2),n.Y8G("ngIf",e.chargingPackage),n.R7$(4),n.JRh(n.bMT(38,31,"EnterPromotionalCode")),n.R7$(4),n.FS9("placeholder",n.bMT(42,33,"EnterPromotionalCode")),n.Y8G("ngModel",e.PromoteCode),n.R7$(4),n.JRh(n.bMT(46,35,"Apply")),n.R7$(2),n.Y8G("ngIf",e.PromoteCodeApply),n.R7$(4),n.JRh(n.bMT(52,37,"PaymentMethod")),n.R7$(3),n.Y8G("value",e.PaymentMethodId),n.R7$(),n.Y8G("ngForOf",e.paymentMethods),n.R7$(5),n.JRh(n.bMT(61,39,"Pay"))}}const Pn=[{path:"",component:(()=>{var i;class r{get chargingStation(){var t;return null===(t=this.chargingConnector)||void 0===t?void 0:t.ChargingStation}get chargingLocation(){var t;return null===(t=this.chargingConnector)||void 0===t?void 0:t.ChargingLocation}constructor(t,e,o,l,c,d,C,s){var p;this.router=t,this.platform=e,this.modalController=c,this.loadingController=d,this.toastController=C,this.animationController=s,this.APP_ROUTE=F._,this.APP_FUNC_FormatMoney=b.xi,this.APP_FUNC_GetColor_VConnectorStatus=b.lB,this.APP_FUNC_GetColor_VStationStatus=b.ew,this.v_connector_status=D.EF,this.chargingPackages=[],this.IsPackByPower=!0,this.customElectricValue=35,this.customElectricMin=1,this.customElectricMax=100,this.customElectricStep=1,this.paymentMethods=[],this.loadingController.create({message:""}).then(_=>this.loading=_),o.setTitle("K\u1ebft n\u1ed1i tr\u1ee5 s\u1ea1c"),this.QrCode=null!==(p=l.snapshot.params.qrcode)&&void 0!==p?p:void 0}ngOnInit(){var t=this;this.IsOnInit=!0,(0,m.A)(function*(){(yield(0,w.kU)())&&t.refreshData()})()}ionViewDidEnter(){this.IsOnInit||this.router.navigateByUrl(F._.TABS_DEFAULT)}ionViewDidLeave(){this.IsOnInit=!1}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}refreshData(t){var e=this;return(0,m.A)(function*(){e.QrCode?(e.QrCode&&(0,A.j)({loading:o=>{var l,c;o?null===(l=e.loading)||void 0===l||l.present():null===(c=e.loading)||void 0===c||c.dismiss()},params:{QrCode:e.QrCode},callback:o=>{var l;e.response=o,null!=o&&o.Succeeded?(e.chargingConnector=o.Data,(null===(l=e.chargingConnector)||void 0===l?void 0:l.VConnectorStatus)==D.EF.DangRanh&&e.loadStepPackage()):(0,h.cX)(e.toastController,{},o).then(c=>c.present()),t&&t()}}),N({callback:o=>{var l,c,d,C,s,p;null!=o&&o.Succeeded&&(e.chargingPackageRange=o.Data,e.customElectricMin=null!==(l=null===(c=e.chargingPackageRange)||void 0===c?void 0:c.MinPowerValue)&&void 0!==l?l:1,e.customElectricMax=null!==(d=null===(C=e.chargingPackageRange)||void 0===C?void 0:C.MaxPowerValue)&&void 0!==d?d:100,e.customElectricStep=null!==(s=null===(p=e.chargingPackageRange)||void 0===p?void 0:p.Seek)&&void 0!==s?s:1,e.customElectricValue=(0,b.Rw)(.35*(e.customElectricMax-e.customElectricMin)/e.customElectricStep,1)*e.customElectricStep)}})):window.location.replace(F._.CHARGER_CONNECT)})()}loadStepPackage(){var t=this;return(0,m.A)(function*(){var e;t.step="package",V({loading:o=>{var l,c;o?null===(l=t.loading)||void 0===l||l.present():null===(c=t.loading)||void 0===c||c.dismiss()},params:{ChargeConnectorId:null===(e=t.chargingConnector)||void 0===e?void 0:e.ChargeConnectorId,PageNumber:1,PageSize:10},callback:o=>{var l;null!=o&&o.Succeeded?t.chargingPackages=null!==(l=o.Data)&&void 0!==l?l:[]:(0,h.cX)(t.toastController,{},o).then(c=>c.present())}})})()}loadStepPayment(){var t=this;return(0,m.A)(function*(){var e;t.ChargePackageId?(t.step="payment",t.ChargePackageId&&x({loading:o=>{var l,c;o?null===(l=t.loading)||void 0===l||l.present():null===(c=t.loading)||void 0===c||c.dismiss()},params:{PromoteCode:t.PromoteCodeApply,ChargePackageId:t.ChargePackageId,ChargeConnectorId:null===(e=t.chargingConnector)||void 0===e?void 0:e.ChargeConnectorId},callback:o=>{null!=o&&o.Succeeded?t.chargingPackage=o.Data:(0,h.cX)(t.toastController,{},o).then(l=>l.present())}}),$({loading:o=>{var l,c;o?null===(l=t.loading)||void 0===l||l.present():null===(c=t.loading)||void 0===c||c.dismiss()},params:{PageNumber:1,PageSize:10},callback:o=>{var l,c;null!=o&&o.Succeeded?(t.paymentMethods=null!==(l=o.Data)&&void 0!==l?l:[],1==t.paymentMethods.filter(d=>d.IsSupport).length&&(t.PaymentMethodId=null===(c=t.paymentMethods.find(d=>d.IsSupport))||void 0===c?void 0:c.PaymentMethodId)):(0,h.cX)(t.toastController,{},o).then(d=>d.present())}})):(0,h.cX)(t.toastController,{message:"Vui l\xf2ng ch\u1ecdn g\xf3i s\u1ea1c!",color:"warning"}).then(o=>o.present())})()}changePromoteCode(t){var e=this;return(0,m.A)(function*(){var o;e.PromoteCode=null==t||null===(o=t.target)||void 0===o||null===(o=o.value)||void 0===o?void 0:o.replace(/[^a-zA-Z0-9]/g,"")})()}keyupPromoteCode(t){var e=this;return(0,m.A)(function*(){13!=t.keyCode||e.submitPromoteCode(t)})()}submitPromoteCode(t){var e=this;return(0,m.A)(function*(){var o;e.ChargePackageId&&e.PromoteCode&&x({loading:l=>{var c,d;l?null===(c=e.loading)||void 0===c||c.present():null===(d=e.loading)||void 0===d||d.dismiss()},params:{PromoteCode:e.PromoteCode,ChargePackageId:e.ChargePackageId,ChargeConnectorId:null===(o=e.chargingConnector)||void 0===o?void 0:o.ChargeConnectorId},callback:l=>{var c,d;null!=l&&l.Succeeded?(e.PromoteCode&&null!==(c=l.Data)&&void 0!==c&&c.PromoteValue&&(e.chargingPackage=l.Data,e.PromoteCodeApply=e.PromoteCode),null!==(d=l.Data)&&void 0!==d&&d.PromoteMsg&&(0,h.cX)(e.toastController,{message:l.Data.PromoteMsg,color:"warning"}).then(C=>C.present())):(0,h.cX)(e.toastController,{},l).then(C=>C.present())}})})()}removePromoteCode(t){var e=this;return(0,m.A)(function*(){var o;e.PromoteCode=void 0,e.PromoteCodeApply=void 0,e.ChargePackageId&&x({loading:l=>{var c,d;l?null===(c=e.loading)||void 0===c||c.present():null===(d=e.loading)||void 0===d||d.dismiss()},params:{ChargePackageId:e.ChargePackageId,ChargeConnectorId:null===(o=e.chargingConnector)||void 0===o?void 0:o.ChargeConnectorId},callback:l=>{null!=l&&l.Succeeded?e.chargingPackage=l.Data:(0,h.cX)(e.toastController,{},l).then(c=>c.present())}})})()}getLocImage(t){var e;if((null==t||!t.LocImage)&&null!=t&&t.LocImages)if("string"==typeof t.LocImages){var o,l;t.LocImage=(null!==(o=(null!==(l=JSON.parse(t.LocImages))&&void 0!==l?l:[])[0])&&void 0!==o?o:{}).imageurl}else{var c,d;t.LocImage=(null!==(c=(null!==(d=t.LocImages)&&void 0!==d?d:[])[0])&&void 0!==c?c:{}).imageurl}return null!==(e=null==t?void 0:t.LocImage)&&void 0!==e?e:"assets/image/favicon.svg"}backPackage(t){var e=this;return(0,m.A)(function*(){e.ChargePackageId=void 0,e.loadStepPackage()})()}submitPackage(t){var e=this;return(0,m.A)(function*(){e.loadStepPayment()})()}goPayment(t){var e=this;return(0,m.A)(function*(){if(!e.isPaying&&e.ChargePackageId){var o,l,c;e.isPaying=!0;var d=e.platform.platforms(),C=d.includes("desktop")?"pc":d.includes("mobileweb")?"mweb":"app";(0,T.jF)({loading:s=>{var p,_;s?null===(p=e.loading)||void 0===p||p.present():null===(_=e.loading)||void 0===_||_.dismiss()},params:{StationCode:null===(o=e.chargingStation)||void 0===o?void 0:o.StationCode,ConnectorId:null===(l=e.chargingConnector)||void 0===l?void 0:l.ConnectorId,ChargePackageId:e.ChargePackageId,PromoteCode:e.PromoteCodeApply,PmCode:null===(c=e.paymentMethods.find(s=>s.PaymentMethodId==e.PaymentMethodId))||void 0===c?void 0:c.PmCode,PlatformType:C},callback:s=>{var p,_,v,O;null!=s&&s.Succeeded?(null!==(p=s.Data)&&void 0!==p&&p.OrderId&&e.router.navigateByUrl(F._.ORDER_INFO_DETAIL.replace(":id",s.Data.OrderId.toString()),{replaceUrl:!0}),e.AppLauncherResponsePAY(s.Data,d)):((0,h.cX)(e.toastController,{},s).then(E=>E.present()),e.isPaying=!1,null!=s&&null!==(_=s.Data)&&void 0!==_&&_.IsHasPayingOrder&&(0,h.Yy)(e.modalController,e.animationController,{selectedId:null==s||null===(v=s.Data)||void 0===v||null===(v=v.PayingOrder)||void 0===v?void 0:v.OrderId,message:{TitleConfirm:null!==(O=null==s?void 0:s.Message)&&void 0!==O?O:"CancelOrder",TextConfirm:"ConfirmCancelOrder"},fnConfirm:E=>{(0,T.rZ)({loading:f=>{var M,j;f?null===(M=e.loading)||void 0===M||M.present():null===(j=e.loading)||void 0===j||j.dismiss()},params:{OrderId:E},callback:f=>{null!=f&&f.Succeeded?e.goPayment(t):(0,h.cX)(e.toastController,{},f).then(M=>M.present())}})}}))}})}})()}AppLauncherResponsePAY(t,e){var o=this;return(0,m.A)(function*(){t.ReturnOrderUrl?t.ReturnOrderUrl.match(G.c.match_web_url)?o.router.navigateByUrl(t.ReturnOrderUrl.replace(new RegExp(G.c.match_web_url),"/"),{replaceUrl:!0}):e.includes("mobileweb")||e.includes("mobile")?yield y.P.open({url:t.ReturnOrderUrl}):window.location.replace(t.ReturnOrderUrl):t.RedirectUrlHttp?e.includes("mobileweb")||e.includes("mobile")?yield y.P.open({url:t.RedirectUrlHttp}):window.location.replace(t.RedirectUrlHttp):(0,h.cX)(o.toastController,{message:"Kh\xf4ng t\xecm th\u1ea5y li\xean k\u1ebft thanh to\xe1n!",color:"danger"}).then(l=>l.present())})()}choicePackage(t,e){var o=this;return(0,m.A)(function*(){o.ChargePackageId=e})()}changeIsPackByPower(t){var e=this;return(0,m.A)(function*(){e.IsPackByPower=t.detail.value})()}filterChargePackage(){return this.chargingPackages.filter(t=>t.IsPackByPower==this.IsPackByPower)}changeChargePackage(t){var e=this;return(0,m.A)(function*(){e.ChargePackageId=t.detail.value})()}changePaymentMethod(t){var e=this;return(0,m.A)(function*(){e.PaymentMethodId=t.detail.value})()}changeCustomElectricValue(t){var e,o;let l=null!==(e=null==t||null===(o=t.detail)||void 0===o?void 0:o.value)&&void 0!==e?e:0;l=(0,b.Rw)(l/this.customElectricStep,1)*this.customElectricStep,l<this.customElectricMin?l=this.customElectricMin:l>this.customElectricMax&&(l=this.customElectricMax),this.customElectricValue=l}applyCustomElectric(t){var e;this.customElectricValue&&(this.ChargePackageId=void 0,X({params:{PowerValue:this.customElectricValue,ChargeConnectorId:null===(e=this.chargingConnector)||void 0===e?void 0:e.ChargeConnectorId},callback:o=>{var l,c;null!=o&&o.Succeeded?(this.customChargingPackage=o.Data,null===(l=this.modalCustomChargingPackageRef)||void 0===l||l.dismiss(),null===(c=this.modalCustomChargingPackageConfirmRef)||void 0===c||c.present()):(0,h.cX)(this.toastController,{},o).then(d=>d.present())}}))}submitCustomPackage(t){var e,o;null===(e=this.modalCustomChargingPackageConfirmRef)||void 0===e||e.dismiss(),null!==(o=this.customChargingPackage)&&void 0!==o&&o.ChargePackageId&&(this.ChargePackageId=this.customChargingPackage.ChargePackageId,this.loadStepPayment())}}return(i=r).\u0275fac=function(t){return new(t||i)(n.rXU(R.Ix),n.rXU(U.OD),n.rXU(B.hE),n.rXU(R.nX),n.rXU(g.W3),n.rXU(g.Xi),n.rXU(g.K_),n.rXU(g.Hx))},i.\u0275cmp=n.VBU({type:i,selectors:[["app-charging-connector-detail"]],viewQuery:function(t,e){if(1&t&&(n.GBs(J,5),n.GBs(Y,5)),2&t){let o;n.mGM(o=n.lsd())&&(e.modalCustomChargingPackageRef=o.first),n.mGM(o=n.lsd())&&(e.modalCustomChargingPackageConfirmRef=o.first)}},decls:7,vars:2,consts:[["templatePackage",""],["templatePayment",""],["modalCustomChargingPackage",""],["modalCustomChargingPackageConfirm",""],["rangeElectric",""],[3,"ngSwitch"],[3,"ngTemplateOutlet",4,"ngSwitchDefault"],[3,"ngTemplateOutlet",4,"ngSwitchCase"],[3,"ngTemplateOutlet"],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container-loading",4,"ngIf"],[1,"container","p-0"],[1,"card-station","rounded","bg-primary","text-white"],[1,"d-flex","align-items-center"],[3,"src"],[1,"pl-3"],[1,"d-flex","align-items-center","my-0"],["color","light","src","../../../assets/icon/ion-icon/changing-station.svg"],[1,"ml-2"],[1,"card-connector","rounded","bg-white"],[1,"mb-2"],[1,"d-flex","align-items-center","bg-secondary","rounded","p-3"],["src","../../../assets/icon/ion-img/changing-connector.svg"],[4,"ngIf"],[1,"ion-modal-small"],[1,"container-loading"],["name","circular","color","primary"],[1,"card-package","bg-white"],[1,"mb-2","d-flex","align-items-center","justify-content-between"],["size","small","shape","round",3,"click",4,"ngIf"],[1,"package-list"],[1,"mt-3"],[3,"ionChange","value"],[4,"ngFor","ngForOf"],["size","small","shape","round",3,"click"],["slot","end","name","add-outline"],[1,"package-item"],["lines","none","detail","false","button","","mode","ios"],["mode","md","justify","space-between",3,"value"],["src","../../../assets/icon/ion-img/charge-package.svg"],[1,"text-primary"],[1,"mt-1"],[1,"container","pt-4","container-custom-package"],[1,"text-left"],[1,"mb-4","text-primary"],[1,"d-flex","align-items-stretch","border","border-primary","rounded"],[1,"flex-grow-1"],["lines","none","shape","round"],["type","number",3,"ionChange","ngModel","min","max","placeholder"],[1,"border-left","border-primary","text-primary","px-3","d-flex","align-items-center"],[3,"ionChange","ngModel","min","max","step","pin"],[1,"d-flex","justify-content-between","text-muted"],[1,"py-3","mt-3"],["color","primary","shape","round","expand","block",3,"click"],[1,"d-flex","align-items-stretch","border","rounded"],[1,"flex-grow-1","px-3","py-2","d-flex","align-items-center"],[1,"text-muted"],[1,"border-left","border-primary","text-primary","d-flex","align-items-center"],["color","primary","expand","full",1,"h-100",3,"click"],[1,"d-flex","justify-content-between","py-1"],[1,"container","py-3"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["color","primary","expand","block","shape","round",3,"click"],["color","warning","expand","block","shape","round"],["color","tertiary","expand","block","shape","round"],["color","danger","expand","block","shape","round"],[3,"click"],["slot","start","name","chevron-back-outline"],[1,"card-bill-info","rounded","bg-white"],[1,"d-flex","align-items-center","my-0","text-primary"],["src","../../../assets/icon/ion-icon/changing-station.svg"],[1,"border-dashed"],["class","card-bill-info rounded bg-white",4,"ngIf"],[1,"card-promote","rounded","bg-white","mt-3"],[1,"input-group","input-group-lg","mb-3"],["type","text",1,"form-control","rounded",3,"change","keyup","ngModel","placeholder"],[1,"input-group-append"],["type","button",1,"btn","btn-primary","rounded",3,"click"],[1,"card-payment-method","rounded","bg-white","mt-3"],[1,"data-list"],[1,"table","table-borderless","m-0"],["class","border-top",4,"ngIf"],[1,"border-top"],["color","primary"],["name","close-outline",3,"click"],[1,"data-item"],["mode","md","justify","space-between",3,"value","disabled"]],template:function(t,e){1&t&&(n.qex(0,5),n.DNE(1,z,1,1,"ng-container",6)(2,H,1,1,"ng-container",7),n.bVm(),n.DNE(3,gn,49,19,"ng-template",null,0,n.C5r)(5,_n,62,41,"ng-template",null,1,n.C5r)),2&t&&(n.Y8G("ngSwitch",e.step),n.R7$(2),n.Y8G("ngSwitchCase","payment"))},dependencies:[P.Sq,P.bT,P.T3,P.ux,P.e1,P.fG,I.me,I.BC,I.vS,g.Jm,g.QW,g.ZB,g.W9,g.M0,g.eU,g.iq,g.KW,g.$w,g.uz,g.he,g.KO,g.f0,g.Ob,g.To,g.Ki,g.w2,g.Zx,g.BC,g.ai,g.Sb,g.su,g.uR,g.Je,g.Gw,g.el,g.T6,g.jL,L.D9],styles:['.table[_ngcontent-%COMP%]{table-layout:fixed}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem;vertical-align:top}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:40%;padding-left:0;padding-right:.5rem;font-size:.875rem;color:var(--ion-color-medium-shade)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   b[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{padding-left:.5rem;padding-right:0;text-align:right}.card-station[_ngcontent-%COMP%]{padding:1rem 1rem 2.5rem}.card-station.rounded[_ngcontent-%COMP%]{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important}.card-station[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 5rem;--border-radius: .5rem;border:1px solid var(--ion-color-light)}.card-connector[_ngcontent-%COMP%]{padding:1rem;margin-top:-1.5rem}.card-connector.rounded[_ngcontent-%COMP%]{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important}.card-connector[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-connector[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:2rem}.card-connector[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 2.5rem;--border-radius: .25rem}.card-package[_ngcontent-%COMP%]{padding:1rem}.card-package[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3rem}.card-package[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 3rem;--border-radius: .5rem}.card-package[_ngcontent-%COMP%]   .package-list[_ngcontent-%COMP%]   .package-item[_ngcontent-%COMP%]{border-radius:.75rem;margin-bottom:1rem;box-shadow:0 0 12px 4px #0101011a}.card-package[_ngcontent-%COMP%]   .package-list[_ngcontent-%COMP%]   .package-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius: .75rem}.card-bill-info[_ngcontent-%COMP%]{padding:1rem}.card-bill-info.rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-bill-info[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 5rem;--border-radius: .5rem;border:1px solid var(--ion-color-light)}.card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]{margin:0;position:relative;z-index:1}.card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]:before, .card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]:after{content:"";display:block;position:absolute;z-index:2;bottom:0;margin-bottom:-1rem;width:2rem;height:2rem;border-radius:50%;background-color:var(--ion-background-color-primary)}.card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]:before{left:-1rem}.card-bill-info[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]:after{right:-1rem}.card-promote[_ngcontent-%COMP%]{padding:1rem}.card-promote.rounded[_ngcontent-%COMP%], .card-promote[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:.75rem!important}.card-promote[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:1rem;border-color:var(--ion-color-gray);border-top-right-radius:0!important;border-bottom-right-radius:0!important}.card-promote[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:1rem;border-color:var(--ion-color-primary);border-top-left-radius:0!important;border-bottom-left-radius:0!important}.card-promote[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{margin:0;background:var(--ion-color-primary);color:var(--ion-color-light)}.card-payment-method[_ngcontent-%COMP%]{padding:1rem}.card-payment-method.rounded[_ngcontent-%COMP%]{border-radius:.75rem!important}.card-payment-method[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 3rem;--border-radius: .5rem}.card-payment-method[_ngcontent-%COMP%]   .data-list[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]{border-radius:.75rem;margin-bottom:1rem;border:1px solid var(--ion-color-gray)}.card-payment-method[_ngcontent-%COMP%]   .data-list[_ngcontent-%COMP%]   .data-item[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius: .75rem}.payment-methods[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:.5rem 0}.payment-methods[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:.25rem;overflow:hidden}.input-group-voucher[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-size:.75rem}.input-group-voucher[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:.75rem}.container-custom-package[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:.5rem!important;overflow:hidden}.container-custom-package[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--border-radius: .5rem}.container-custom-package[_ngcontent-%COMP%]   ion-range[_ngcontent-%COMP%]{--bar-background: var(--ion-color-medium-tint);--bar-background-active: var(--ion-color-primary);--bar-height: .25rem;--bar-border-radius: .5rem;--knob-background: var(--ion-color-primary);--knob-size: 1.25rem;--pin-background: var(--ion-color-primary);--pin-color: var(--ion-color-primary-contrast)}.container-custom-package[_ngcontent-%COMP%]   ion-range[_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{margin-top:-.5rem}.container-custom-package[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--box-shadow: none}']}),r})()}];let vn=(()=>{var i;class r{}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.$C({type:i}),i.\u0275inj=n.G2t({imports:[R.iI.forChild(Pn),R.iI]}),r})();var fn=u(3584);let kn=(()=>{var i;class r{}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275mod=n.$C({type:i}),i.\u0275inj=n.G2t({imports:[P.MD,I.YN,g.bv,vn,fn.x]}),r})()}}]);