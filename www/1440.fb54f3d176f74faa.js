"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1440],{1440:(I,_,c)=>{c.r(_),c.d(_,{AuthPageModule:()=>J});var m=c(177),f=c(9417),s=c(8974),v=c(2175),l=c(467),h=c(7158);const A=function(){var o=(0,l.A)(function*(u){u.params=u.params||{},(0,h.Ll)({authorization:!1,url:"api/Account/register-phonenumber-otpcode?api-version=1.0",params:{PhoneNumber:u.params.PhoneNumber},success:i=>{"function"==typeof u.callback&&u.callback(i.data||null)},error:i=>{var a;"function"==typeof u.callback&&u.callback(null==i||null===(a=i.response)||void 0===a?void 0:a.data),console.error(i)},loading:null==u?void 0:u.loading})});return function(i){return o.apply(this,arguments)}}(),g=function(){var o=(0,l.A)(function*(u){u.params=u.params||{},(0,h.Ll)({authorization:!1,url:"api/Account/verify-phonenumber-otpcode",params:{PhoneNumber:u.params.PhoneNumber,OtpCode:u.params.OtpCode},success:i=>{"function"==typeof u.callback&&u.callback(i.data||null)},error:i=>{var a;"function"==typeof u.callback&&u.callback(null==i||null===(a=i.response)||void 0===a?void 0:a.data),console.error(i)},loading:null==u?void 0:u.loading})});return function(i){return o.apply(this,arguments)}}(),d=function(){var o=(0,l.A)(function*(u){u.params=u.params||{},(0,h.Ll)({authorization:!1,url:"api/Account/reset-password-phonenumber",params:{PhoneNumber:u.params.PhoneNumber,OtpCode:u.params.OtpCode,Password:u.params.Password,ConfirmPassword:u.params.ConfirmPassword},success:i=>{"function"==typeof u.callback&&u.callback(i.data||null)},error:i=>{var a;"function"==typeof u.callback&&u.callback(null==i||null===(a=i.response)||void 0===a?void 0:a.data),console.error(i)},loading:null==u?void 0:u.loading})});return function(i){return o.apply(this,arguments)}}(),k=function(){var o=(0,l.A)(function*(u){u.params=u.params||{},(0,h.Ll)({authorization:!1,url:"api/Account/login-phonenumber-password",params:{PhoneNumber:u.params.PhoneNumber,Password:u.params.Password},success:i=>{"function"==typeof u.callback&&u.callback(i.data||null)},error:i=>{var a;"function"==typeof u.callback&&u.callback(null==i||null===(a=i.response)||void 0===a?void 0:a.data),console.error(i)},loading:null==u?void 0:u.loading})});return function(i){return o.apply(this,arguments)}}(),C=function(){var o=(0,l.A)(function*(u){u.params=u.params||{},(0,h.Ll)({authorization:!1,url:"api/Account/forgot-password-phonenumber",params:{PhoneNumber:u.params.PhoneNumber},success:i=>{"function"==typeof u.callback&&u.callback(i.data||null)},error:i=>{var a;"function"==typeof u.callback&&u.callback(null==i||null===(a=i.response)||void 0===a?void 0:a.data),console.error(i)},loading:null==u?void 0:u.loading})});return function(i){return o.apply(this,arguments)}}();var N=c(23),y=c(6539),R=c(1312),E=c(8833),n=c(4438),G=c(345),T=c(5788);const j=["ngOtpInput"],O=["ngPinInput"],x=["ngSetPinInput"],M=["ngConfirmPinInput"],P=o=>({length:o,allowNumbersOnly:!0});function w(o,u){if(1&o&&n.eu8(0,18),2&o){n.XpG();const i=n.sdS(16);n.Y8G("ngTemplateOutlet",i)}}function S(o,u){if(1&o&&n.eu8(0,18),2&o){n.XpG();const i=n.sdS(18);n.Y8G("ngTemplateOutlet",i)}}function V(o,u){if(1&o&&n.eu8(0,18),2&o){n.XpG();const i=n.sdS(20);n.Y8G("ngTemplateOutlet",i)}}function D(o,u){if(1&o&&n.eu8(0,18),2&o){n.XpG();const i=n.sdS(22);n.Y8G("ngTemplateOutlet",i)}}function B(o,u){if(1&o&&n.eu8(0,18),2&o){n.XpG();const i=n.sdS(24);n.Y8G("ngTemplateOutlet",i)}}function X(o,u){if(1&o&&(n.qex(0),n.j41(1,"div",19)(2,"span"),n.EFF(3),n.k0s()(),n.bVm()),2&o){const i=n.XpG();n.R7$(3),n.JRh(i.response.Message)}}function U(o,u){if(1&o){const i=n.RV6();n.j41(0,"div",20)(1,"ion-thumbnail"),n.nrm(2,"img",21),n.k0s()(),n.j41(3,"div",22)(4,"h3")(5,"b",23),n.EFF(6,"iSAC"),n.k0s(),n.EFF(7," Xin ch\xe0o!"),n.k0s(),n.j41(8,"p"),n.EFF(9,"Vui l\xf2ng nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\u1ec3 b\u1eaft \u0111\u1ea7u"),n.nrm(10,"br"),n.EFF(11,"tr\u1ea3i nghi\u1ec7m d\u1ecbch v\u1ee5"),n.k0s()(),n.j41(12,"div")(13,"ion-item",24),n.nrm(14,"ion-icon",25),n.j41(15,"ion-input",26),n.bIt("change",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.changeMobile(t))})("keyup",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.keyupMobile(t))}),n.k0s()(),n.j41(16,"div",27)(17,"ion-button",28),n.bIt("click",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.submitMobile(t))}),n.EFF(18,"\u0110\u0103ng nh\u1eadp"),n.k0s()()()}if(2&o){const i=n.XpG();n.R7$(15),n.Y8G("ngModel",i.dataForm.mobile)}}function L(o,u){if(1&o){const i=n.RV6();n.j41(0,"div",22)(1,"h3"),n.EFF(2,"X\xe1c nh\u1eadn m\xe3 OTP"),n.k0s(),n.j41(3,"p"),n.EFF(4,"Vui l\xf2ng nh\u1eadp m\xe3 OTP v\u1eeba \u0111\u01b0\u1ee3c g\u1eedi \u0111\u1ebfn"),n.nrm(5,"br"),n.EFF(6),n.k0s()(),n.j41(7,"div",22)(8,"ng-otp-input",29,5),n.bIt("onInputChange",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.onOtpChange(t))}),n.k0s()(),n.j41(10,"div",30)(11,"span"),n.EFF(12,"Kh\xf4ng nh\u1eadn \u0111\u01b0\u1ee3c m\xe3? "),n.k0s(),n.j41(13,"a",31),n.bIt("click",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.resendOTP(t))}),n.EFF(14,"G\u1eedi l\u1ea1i"),n.k0s()()}if(2&o){const i=n.XpG();n.R7$(6),n.SpI("s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ",i.APP_FUNC_FormatMobileNumber(i.dataForm.mobile),""),n.R7$(2),n.Y8G("config",n.eq3(2,P,i.dataForm.otpLen))}}function Y(o,u){if(1&o){const i=n.RV6();n.j41(0,"div",22)(1,"h3"),n.EFF(2,"Nh\u1eadp m\xe3 PIN"),n.k0s(),n.j41(3,"p"),n.EFF(4,"Vui l\xf2ng nh\u1eadp m\xe3 PIN b\u1ea1n \u0111\xe3 \u0111\u0103ng k\xfd"),n.nrm(5,"br"),n.EFF(6),n.k0s()(),n.j41(7,"div",22)(8,"ng-otp-input",29,6),n.bIt("onInputChange",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.onPinChange(t))}),n.k0s()(),n.j41(10,"div",30)(11,"span"),n.EFF(12,"T\xf4i \u0111\xe3 "),n.j41(13,"a",31),n.bIt("click",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.forgotPIN(t))}),n.EFF(14,"qu\xean m\xe3 PIN"),n.k0s(),n.EFF(15,"?"),n.k0s()()}if(2&o){const i=n.XpG();n.R7$(6),n.SpI("v\u1edbi s\u1ed1 \u0111i\u1ec7n tho\u1ea1i ",i.APP_FUNC_FormatMobileNumber(i.dataForm.mobile),""),n.R7$(2),n.Y8G("config",n.eq3(2,P,i.dataForm.pinLen))}}function $(o,u){if(1&o){const i=n.RV6();n.j41(0,"div",22)(1,"h3"),n.EFF(2,"Nh\u1eadp m\xe3 PIN"),n.k0s(),n.j41(3,"p"),n.EFF(4,"H\xe3y \u0111\u1eb7t m\xe3 PIN \u0111\u1ec3 b\u1ea3o m\u1eadt t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n!"),n.k0s()(),n.j41(5,"div",22)(6,"ng-otp-input",29,7),n.bIt("onInputChange",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.onSetPinChange(t))}),n.k0s()(),n.j41(8,"div",30)(9,"span"),n.EFF(10,"\xa0"),n.k0s()()}if(2&o){const i=n.XpG();n.R7$(6),n.Y8G("config",n.eq3(1,P,i.dataForm.pinLen))}}function H(o,u){if(1&o){const i=n.RV6();n.j41(0,"div",22)(1,"h3"),n.EFF(2,"Nh\u1eadp m\xe3 PIN"),n.k0s(),n.j41(3,"p"),n.EFF(4,"X\xe1c nh\u1eadn l\u1ea1i m\xe3 PIN"),n.k0s()(),n.j41(5,"div",22)(6,"ng-otp-input",29,8),n.bIt("onInputChange",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.onConfirmPinChange(t))}),n.k0s()(),n.j41(8,"div",30)(9,"a",31),n.bIt("click",function(t){n.eBV(i);const e=n.XpG();return n.Njj(e.backSetPIN(t))}),n.EFF(10,"Quay l\u1ea1i"),n.k0s()()}if(2&o){const i=n.XpG();n.R7$(6),n.Y8G("config",n.eq3(1,P,i.dataForm.pinLen))}}const z=[{path:"",component:(()=>{var o;class u{constructor(a,t,e){var r=this;this.titleService=a,this.loadingController=e,this.dataForm={inputType:"mobile",otpLen:6,pinLen:6},this.APP_FUNC_FormatMobileNumber=R.IV,a.setTitle("T\xe0i kho\u1ea3n"),(0,l.A)(function*(){r.loading=yield r.loadingController.create({message:""})})(),this.params={returnurl:t.snapshot.queryParamMap.get("returnurl")||void 0},(0,l.A)(function*(){(yield(0,y.lJ)())&&(window.location.href=E._.TABS)})()}ngOnInit(){}close(a){return(0,l.A)(function*(){window.location.href=E._.TABS})()}setInputType(a){var t=this;return(0,l.A)(function*(){t.dataForm.inputType=a})()}backSetPIN(a){var t=this;return(0,l.A)(function*(){var e,r;t.dataForm.pin=void 0,t.dataForm.pin2=void 0,null===(e=t.ngSetPinInputRef)||void 0===e||e.setValue(""),null===(r=t.ngConfirmPinInputRef)||void 0===r||r.setValue(""),t.setInputType("set-pin")})()}changeMobile(a){var t=this;return(0,l.A)(function*(){t.dataForm.mobile=a.target.value})()}keyupMobile(a){var t=this;return(0,l.A)(function*(){13==a.keyCode&&t.submitMobile(a)})()}onOtpChange(a){var t=this;return(0,l.A)(function*(){var e;t.dataForm.otp=a,(null===(e=t.dataForm.otp)||void 0===e?void 0:e.length)==t.dataForm.otpLen&&t.checkOTP()})()}onPinChange(a){var t=this;return(0,l.A)(function*(){var e;t.dataForm.pin=a,(null===(e=t.dataForm.pin)||void 0===e?void 0:e.length)==t.dataForm.pinLen&&t.checkPIN()})()}onSetPinChange(a){var t=this;return(0,l.A)(function*(){var e;t.dataForm.pin=a,(null===(e=t.dataForm.pin)||void 0===e?void 0:e.length)==t.dataForm.pinLen&&t.setInputType("confirm-pin")})()}onConfirmPinChange(a){var t=this;return(0,l.A)(function*(){var e;if(t.dataForm.pin2=a,(null===(e=t.dataForm.pin2)||void 0===e?void 0:e.length)==t.dataForm.pinLen)if(t.dataForm.pin!=t.dataForm.pin2){var r;t.dataForm.pin2="",null===(r=t.ngConfirmPinInputRef)||void 0===r||r.setValue(""),t.response={Succeeded:!1,Message:"M\xe3 PIN kh\xf4ng tr\xf9ng kh\u1edbp, h\xe3y nh\u1eadp l\u1ea1i!"}}else t.setPIN()})()}resendOTP(a){var t=this;return(0,l.A)(function*(){var e;null===(e=t.ngOtpInputRef)||void 0===e||e.setValue("")})()}resetOTP(a){var t=this;return(0,l.A)(function*(){var e;null===(e=t.ngPinInputRef)||void 0===e||e.setValue("")})()}forgotPIN(a){var t=this;return(0,l.A)(function*(){C({loading:e=>{var r,p;e?null===(r=t.loading)||void 0===r||r.present():null===(p=t.loading)||void 0===p||p.dismiss()},params:{PhoneNumber:t.dataForm.mobile},callback:e=>{t.response=e,null!=e&&e.Succeeded&&(t.dataForm.inputType="otp")}})})()}submitMobile(a){var t=this;return(0,l.A)(function*(){A({loading:e=>{var r,p;e?null===(r=t.loading)||void 0===r||r.present():null===(p=t.loading)||void 0===p||p.dismiss()},params:{PhoneNumber:t.dataForm.mobile},callback:e=>{t.response=e,null!=e&&e.Succeeded&&(t.dataForm.inputType=e.Data.PhoneNumberConfirmed?"pin":"otp")}})})()}checkOTP(){var a=this;return(0,l.A)(function*(){g({loading:t=>{var e,r;t?null===(e=a.loading)||void 0===e||e.present():null===(r=a.loading)||void 0===r||r.dismiss()},params:{PhoneNumber:a.dataForm.mobile,OtpCode:a.dataForm.otp},callback:t=>{var e;a.response=t,null!=t&&t.Succeeded?a.dataForm.inputType="set-pin":null===(e=a.ngOtpInputRef)||void 0===e||e.setValue("")}})})()}checkPIN(){var a=this;return(0,l.A)(function*(){k({loading:t=>{var e,r;t?null===(e=a.loading)||void 0===e||e.present():null===(r=a.loading)||void 0===r||r.dismiss()},params:{PhoneNumber:a.dataForm.mobile,Password:a.dataForm.pin},callback:t=>{if(a.response=t,null!=t&&t.Succeeded){let{RefreshToken:r,JWToken:p,TokenExpiryDateValue:K,UserName:Q,PhoneNumber:Z}=t.Data;(0,N.Dj)({params:{AccessToken:p,RefreshToken:r,TokenExpiry:K,UserName:Q,PhoneNumber:Z},callback:b=>{var F;null!=b&&b.AccessToken&&(window.location.href=null!==(F=a.params.returnurl)&&void 0!==F?F:E._.TABS)}})}else{var e;null===(e=a.ngPinInputRef)||void 0===e||e.setValue("")}}})})()}setPIN(){var a=this;return(0,l.A)(function*(){d({loading:t=>{var e,r;t?null===(e=a.loading)||void 0===e||e.present():null===(r=a.loading)||void 0===r||r.dismiss()},params:{PhoneNumber:a.dataForm.mobile,OtpCode:a.dataForm.otp,Password:a.dataForm.pin,ConfirmPassword:a.dataForm.pin2},callback:t=>{var e,r;a.response=t,null!=t&&t.Succeeded?a.checkPIN():(null===(e=a.ngSetPinInputRef)||void 0===e||e.setValue(""),null===(r=a.ngConfirmPinInputRef)||void 0===r||r.setValue(""))}})})()}}return(o=u).\u0275fac=function(a){return new(a||o)(n.rXU(G.hE),n.rXU(v.nX),n.rXU(s.Xi))},o.\u0275cmp=n.VBU({type:o,selectors:[["app-auth"]],viewQuery:function(a,t){if(1&a&&(n.GBs(j,5),n.GBs(O,5),n.GBs(x,5),n.GBs(M,5)),2&a){let e;n.mGM(e=n.lsd())&&(t.ngOtpInputRef=e.first),n.mGM(e=n.lsd())&&(t.ngPinInputRef=e.first),n.mGM(e=n.lsd())&&(t.ngSetPinInputRef=e.first),n.mGM(e=n.lsd())&&(t.ngConfirmPinInputRef=e.first)}},decls:25,vars:7,consts:[["inputMobile",""],["inputOTP",""],["inputPIN",""],["inputSetPIN",""],["inputConfirmPIN",""],["ngOtpInput",""],["ngPinInput",""],["ngSetPinInput",""],["ngConfirmPinInput",""],["slot","end"],[3,"click"],["name","close-outline"],["scroll-x","false","scroll-y","false"],[1,"w-100","h-100","d-flex","align-items-center"],[1,"container"],[3,"ngSwitch"],[3,"ngTemplateOutlet",4,"ngSwitchCase"],[4,"ngIf"],[3,"ngTemplateOutlet"],["role","alert",1,"alert","alert-warning","mt-4","mb-0","text-center"],[1,"mb-5"],["src","../../../assets/favicon/favicon.svg"],[1,"text-center"],[1,"text-primary"],["mode","md","lines","none",1,"ion-item-mobile"],["slot","start","name","call-outline"],["type","number","placeholder","Nh\u1eadp s\u1ed1 \u0111i\u1ec7n tho\u1ea1i",3,"change","keyup","ngModel"],[1,"mt-4"],["mode","ios","size","default","color","primary","expand","full","shape","round",1,"ion-no-margin",3,"click"],[3,"onInputChange","config"],[1,"text-center","mt-3"],[1,"text-primmary","cursor-pointer",3,"click"]],template:function(a,t){if(1&a){const e=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",9)(3,"ion-button",10),n.bIt("click",function(p){return n.eBV(e),n.Njj(t.close(p))}),n.nrm(4,"ion-icon",11),n.k0s()()()(),n.j41(5,"ion-content",12)(6,"div",13)(7,"div",14),n.qex(8,15),n.DNE(9,w,1,1,"ng-container",16)(10,S,1,1,"ng-container",16)(11,V,1,1,"ng-container",16)(12,D,1,1,"ng-container",16)(13,B,1,1,"ng-container",16),n.bVm(),n.DNE(14,X,4,1,"ng-container",17),n.k0s()()(),n.DNE(15,U,19,1,"ng-template",null,0,n.C5r)(17,L,15,4,"ng-template",null,1,n.C5r)(19,Y,16,4,"ng-template",null,2,n.C5r)(21,$,11,3,"ng-template",null,3,n.C5r)(23,H,11,3,"ng-template",null,4,n.C5r)}2&a&&(n.R7$(8),n.Y8G("ngSwitch",t.dataForm.inputType),n.R7$(),n.Y8G("ngSwitchCase","mobile"),n.R7$(),n.Y8G("ngSwitchCase","otp"),n.R7$(),n.Y8G("ngSwitchCase","pin"),n.R7$(),n.Y8G("ngSwitchCase","set-pin"),n.R7$(),n.Y8G("ngSwitchCase","confirm-pin"),n.R7$(),n.Y8G("ngIf",t.response&&0==t.response.Succeeded))},dependencies:[m.bT,m.T3,m.ux,m.e1,f.BC,f.vS,s.Jm,s.QW,s.W9,s.eU,s.iq,s.$w,s.uz,s.Zx,s.ai,s.su,T.gj],styles:["ion-thumbnail[_ngcontent-%COMP%]{--size: 144px;margin:auto}.ion-item-mobile[_ngcontent-%COMP%]{--border-width: 1px;--border-radius: 2rem}"]}),u})()}];let W=(()=>{var o;class u{}return(o=u).\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[v.iI.forChild(z),v.iI]}),u})(),J=(()=>{var o;class u{}return(o=u).\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[m.MD,f.YN,s.bv,W,T.Ph]}),u})()},6539:(I,_,c)=>{c.d(_,{kU:()=>A,lJ:()=>h});var m=c(467),f=c(8833),s=c(23);const h=function(){var g=(0,m.A)(function*(){return!!(yield(0,s.Pn)()).AccessToken});return function(){return g.apply(this,arguments)}}(),A=function(){var g=(0,m.A)(function*(){let d=yield(0,s.Pn)();return d.AccessToken||(yield(0,s.wn)(),window.location.href=f._.AUTH+`?returnurl=${encodeURIComponent(window.location.href)}`),!!d.AccessToken});return function(){return g.apply(this,arguments)}}()}}]);