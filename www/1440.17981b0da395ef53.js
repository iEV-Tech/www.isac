"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1440],{1440:(an,T,c)=>{c.r(T),c.d(T,{AuthPageModule:()=>q});var p=c(177),f=c(9417),m=c(8974),v=c(2175),u=c(467),A=c(7586),I=c.n(A),g=c(5972);const C=function(){var l=(0,u.A)(function*(i){i.params=i.params||{},(0,g.Ll)({authorization:!1,url:"api/Account/register-phonenumber-otpcode?api-version=1.0",params:{PhoneNumber:i.params.PhoneNumber},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var a;"function"==typeof i.callback&&i.callback(null==o||null===(a=o.response)||void 0===a?void 0:a.data),console.error(o)},loading:null==i?void 0:i.loading})});return function(o){return l.apply(this,arguments)}}(),k=function(){var l=(0,u.A)(function*(i){i.params=i.params||{},(0,g.Ll)({authorization:!1,url:"api/Account/verify-phonenumber-otpcode",params:{PhoneNumber:i.params.PhoneNumber,OtpCode:i.params.OtpCode},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var a;"function"==typeof i.callback&&i.callback(null==o||null===(a=o.response)||void 0===a?void 0:a.data),console.error(o)},loading:null==i?void 0:i.loading})});return function(o){return l.apply(this,arguments)}}(),R=function(){var l=(0,u.A)(function*(i){i.params=i.params||{},(0,g.Ll)({authorization:!1,url:"api/Account/reset-password-phonenumber",params:{PhoneNumber:i.params.PhoneNumber,OtpCode:i.params.OtpCode,Password:i.params.Password,ConfirmPassword:i.params.ConfirmPassword},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var a;"function"==typeof i.callback&&i.callback(null==o||null===(a=o.response)||void 0===a?void 0:a.data),console.error(o)},loading:null==i?void 0:i.loading})});return function(o){return l.apply(this,arguments)}}(),N=function(){var l=(0,u.A)(function*(i){i.params=i.params||{},(0,g.Ll)({authorization:!1,url:"api/Account/login-phonenumber-password",params:{PhoneNumber:i.params.PhoneNumber,Password:i.params.Password},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var a;"function"==typeof i.callback&&i.callback(null==o||null===(a=o.response)||void 0===a?void 0:a.data),console.error(o)},loading:null==i?void 0:i.loading})});return function(o){return l.apply(this,arguments)}}(),S=function(){var l=(0,u.A)(function*(i){i.params=i.params||{},(0,g.Ll)({authorization:!1,url:"api/Account/forgot-password-phonenumber",params:{PhoneNumber:i.params.PhoneNumber},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var a;"function"==typeof i.callback&&i.callback(null==o||null===(a=o.response)||void 0===a?void 0:a.data),console.error(o)},loading:null==i?void 0:i.loading})});return function(o){return l.apply(this,arguments)}}();var M=c(23),j=c(6539),y=c(1312),d=c(8650),_=c(8833),n=c(4438),O=c(345),F=c(5788),G=c(4842);const x=["ngOtpInput"],w=["ngPinInput"],X=["ngSetPinInput"],$=["ngConfirmPinInput"],h=l=>({length:l,allowNumbersOnly:!0});function V(l,i){if(1&l&&n.eu8(0,16),2&l){n.XpG();const o=n.sdS(14);n.Y8G("ngTemplateOutlet",o)}}function E(l,i){if(1&l&&n.eu8(0,16),2&l){n.XpG();const o=n.sdS(16);n.Y8G("ngTemplateOutlet",o)}}function L(l,i){if(1&l&&n.eu8(0,16),2&l){n.XpG();const o=n.sdS(18);n.Y8G("ngTemplateOutlet",o)}}function B(l,i){if(1&l&&n.eu8(0,16),2&l){n.XpG();const o=n.sdS(20);n.Y8G("ngTemplateOutlet",o)}}function Y(l,i){if(1&l&&n.eu8(0,16),2&l){n.XpG();const o=n.sdS(22);n.Y8G("ngTemplateOutlet",o)}}function U(l,i){if(1&l){const o=n.RV6();n.j41(0,"div",17)(1,"div",18),n.nrm(2,"ion-img",19),n.k0s(),n.j41(3,"h5",20)(4,"strong",21),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",22),n.nrm(8,"small",23),n.nI1(9,"translate"),n.k0s(),n.j41(10,"div",24)(11,"ion-item",25),n.nrm(12,"ion-icon",26),n.j41(13,"ion-input",27),n.nI1(14,"translate"),n.bIt("change",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.changeMobile(t))})("keyup",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.keyupMobile(t))}),n.k0s()()(),n.j41(15,"div",28)(16,"ion-button",29),n.bIt("click",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.submitMobile(t))}),n.j41(17,"ion-label"),n.EFF(18),n.nI1(19,"translate"),n.k0s(),n.nrm(20,"ion-icon",30),n.k0s()()()}if(2&l){const o=n.XpG();n.R7$(5),n.SpI("iSAC ",n.bMT(6,5,"Wellcome"),"!"),n.R7$(3),n.Y8G("innerHTML",n.bMT(9,7,"Auth_Suggest_Mobile"),n.npT),n.R7$(5),n.FS9("placeholder",n.bMT(14,9,"EnterMobile")),n.Y8G("ngModel",o.dataForm.mobile),n.R7$(5),n.JRh(n.bMT(19,11,"Login"))}}function D(l,i){if(1&l&&(n.j41(0,"small",38),n.EFF(1),n.k0s()),2&l){const o=n.XpG(2);n.R7$(),n.SpI("(",o.getTimeCountdownSendOTP(),")")}}function J(l,i){if(1&l){const o=n.RV6();n.j41(0,"div",31)(1,"div",18),n.nrm(2,"ion-img",32),n.k0s(),n.j41(3,"h5",20)(4,"strong",21),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",22)(8,"small"),n.nrm(9,"span",23),n.nI1(10,"translate"),n.j41(11,"b"),n.EFF(12),n.k0s()()(),n.j41(13,"div",33)(14,"ng-otp-input",34,5),n.bIt("onInputChange",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.onOtpChange(t))}),n.k0s()(),n.j41(16,"div",35)(17,"span"),n.EFF(18),n.nI1(19,"translate"),n.k0s(),n.j41(20,"a",36),n.bIt("click",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.resendOTP(t))}),n.EFF(21),n.nI1(22,"translate"),n.k0s(),n.DNE(23,D,2,1,"small",37),n.k0s()()}if(2&l){const o=n.XpG();n.R7$(5),n.JRh(n.bMT(6,7,"ConfirmOTP")),n.R7$(4),n.Y8G("innerHTML",n.bMT(10,9,"Auth_Suggest_OTP"),n.npT),n.R7$(3),n.SpI(" ",o.APP_FUNC_FormatMobileNumber(o.dataForm.mobile),""),n.R7$(2),n.Y8G("config",n.eq3(15,h,o.dataForm.otpLen)),n.R7$(4),n.SpI("",n.bMT(19,11,"DidNotReceiveCode")," "),n.R7$(3),n.JRh(n.bMT(22,13,"Resend")),n.R7$(2),n.Y8G("ngIf",o.timeoutSendOTP>0)}}function z(l,i){if(1&l){const o=n.RV6();n.j41(0,"div",39)(1,"div",18),n.nrm(2,"ion-img",19),n.k0s(),n.j41(3,"h5",20)(4,"strong",21),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",22)(8,"small"),n.nrm(9,"span",23),n.nI1(10,"translate"),n.j41(11,"b"),n.EFF(12),n.k0s()()(),n.j41(13,"div",33)(14,"ng-otp-input",34,6),n.bIt("onInputChange",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.onPinChange(t))}),n.k0s()(),n.j41(16,"div",35)(17,"span")(18,"a",36),n.bIt("click",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.forgotPIN(t))}),n.EFF(19),n.nI1(20,"translate"),n.k0s(),n.EFF(21,"?"),n.k0s()()()}if(2&l){const o=n.XpG();n.R7$(5),n.JRh(n.bMT(6,5,"InputPIN")),n.R7$(4),n.Y8G("innerHTML",n.bMT(10,7,"Auth_Suggest_PIN"),n.npT),n.R7$(3),n.SpI(" ",o.APP_FUNC_FormatMobileNumber(o.dataForm.mobile),""),n.R7$(2),n.Y8G("config",n.eq3(11,h,o.dataForm.pinLen)),n.R7$(5),n.JRh(n.bMT(20,9,"ForgotPIN"))}}function W(l,i){if(1&l){const o=n.RV6();n.j41(0,"div",39)(1,"div",18),n.nrm(2,"ion-img",19),n.k0s(),n.j41(3,"h5",20)(4,"strong",21),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",22)(8,"small"),n.EFF(9),n.nI1(10,"translate"),n.k0s()(),n.j41(11,"div",33)(12,"ng-otp-input",34,7),n.bIt("onInputChange",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.onSetPinChange(t))}),n.k0s()(),n.j41(14,"div",35)(15,"span"),n.EFF(16,"\xa0"),n.k0s()()()}if(2&l){const o=n.XpG();n.R7$(5),n.JRh(n.bMT(6,3,"InputPIN")),n.R7$(4),n.JRh(n.bMT(10,5,"Auth_Suggest_PIN_New")),n.R7$(3),n.Y8G("config",n.eq3(7,h,o.dataForm.pinLen))}}function H(l,i){if(1&l){const o=n.RV6();n.j41(0,"div",39)(1,"div",18),n.nrm(2,"ion-img",19),n.k0s(),n.j41(3,"h5",20)(4,"strong",21),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",22)(8,"small"),n.EFF(9),n.nI1(10,"translate"),n.k0s()(),n.j41(11,"div",33)(12,"ng-otp-input",34,8),n.bIt("onInputChange",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.onConfirmPinChange(t))}),n.k0s()(),n.j41(14,"div",35)(15,"a",40),n.bIt("click",function(t){n.eBV(o);const e=n.XpG();return n.Njj(e.backSetPIN(t))}),n.EFF(16),n.nI1(17,"translate"),n.k0s()()()}if(2&l){const o=n.XpG();n.R7$(5),n.JRh(n.bMT(6,4,"InputPIN")),n.R7$(4),n.JRh(n.bMT(10,6,"Auth_Suggest_PIN_Confirm")),n.R7$(3),n.Y8G("config",n.eq3(10,h,o.dataForm.pinLen)),n.R7$(4),n.JRh(n.bMT(17,8,"Back"))}}const Q=[{path:"",component:(()=>{var l;class i{constructor(a,t,e,r){this.titleService=a,this.loadingController=e,this.toastController=r,this.dataForm={inputType:"mobile",otpLen:6,pinLen:6},this.timeoutSendOTP=0,this.intervalCountdownSendOTP=null,this.APP_FUNC_FormatMobileNumber=y.IV,this.loadingController.create({message:""}).then(s=>this.loading=s),this.params={returnurl:t.snapshot.queryParamMap.get("returnurl")||void 0},(0,u.A)(function*(){(yield(0,j.lJ)())&&window.location.replace(_._.TABS_DEFAULT)})()}ngOnInit(){}close(a){return(0,u.A)(function*(){window.location.href=_._.TABS_DEFAULT})()}setInputType(a){var t=this;return(0,u.A)(function*(){t.dataForm.inputType=a})()}backSetPIN(a){var t=this;return(0,u.A)(function*(){var e,r;t.dataForm.pin=void 0,t.dataForm.pin2=void 0,null===(e=t.ngSetPinInputRef)||void 0===e||e.setValue(""),null===(r=t.ngConfirmPinInputRef)||void 0===r||r.setValue(""),t.setInputType("set-pin")})()}changeMobile(a){var t=this;return(0,u.A)(function*(){var e;t.dataForm.mobile=null===(e=a.target.value)||void 0===e?void 0:e.replace(/[^0-9\+]/g,"")})()}keyupMobile(a){var t=this;return(0,u.A)(function*(){13==a.keyCode&&t.submitMobile(a)})()}onOtpChange(a){var t=this;return(0,u.A)(function*(){var e;t.dataForm.otp=a,(null===(e=t.dataForm.otp)||void 0===e?void 0:e.length)==t.dataForm.otpLen&&t.checkOTP()})()}onPinChange(a){var t=this;return(0,u.A)(function*(){var e;t.dataForm.pin=a,(null===(e=t.dataForm.pin)||void 0===e?void 0:e.length)==t.dataForm.pinLen&&t.checkPIN()})()}onSetPinChange(a){var t=this;return(0,u.A)(function*(){var e;t.dataForm.pin=a,(null===(e=t.dataForm.pin)||void 0===e?void 0:e.length)==t.dataForm.pinLen&&t.setInputType("confirm-pin")})()}onConfirmPinChange(a){var t=this;return(0,u.A)(function*(){var e;if(t.dataForm.pin2=a,(null===(e=t.dataForm.pin2)||void 0===e?void 0:e.length)==t.dataForm.pinLen)if(t.dataForm.pin!=t.dataForm.pin2){var r;t.dataForm.pin2="",null===(r=t.ngConfirmPinInputRef)||void 0===r||r.setValue(""),(0,d.cX)(t.toastController,{color:"warning",message:"M\xe3 PIN kh\xf4ng tr\xf9ng kh\u1edbp, h\xe3y nh\u1eadp l\u1ea1i!"}).then(s=>s.present())}else t.setPIN()})()}resendOTP(a){var t=this;return(0,u.A)(function*(){var e;t.timeoutSendOTP>0||(null===(e=t.ngOtpInputRef)||void 0===e||e.setValue(""),t.submitMobile())})()}resetOTP(a){var t=this;return(0,u.A)(function*(){var e;null===(e=t.ngPinInputRef)||void 0===e||e.setValue("")})()}forgotPIN(a){var t=this;return(0,u.A)(function*(){S({loading:e=>{var r,s;e?null===(r=t.loading)||void 0===r||r.present():null===(s=t.loading)||void 0===s||s.dismiss()},params:{PhoneNumber:t.dataForm.mobile},callback:e=>{t.response=e,null!=e&&e.Succeeded?t.dataForm.inputType="otp":(0,d.cX)(t.toastController,{},e).then(r=>r.present())}})})()}submitMobile(a){var t=this;return(0,u.A)(function*(){t.dataForm.mobile&&t.dataForm.mobile.match(/^(\+84|0)([3|5|7|8|9])([0-9]{8,9})$/g)?C({loading:e=>{var r,s;e?null===(r=t.loading)||void 0===r||r.present():null===(s=t.loading)||void 0===s||s.dismiss()},params:{PhoneNumber:t.dataForm.mobile},callback:e=>{t.response=e,null!=e&&e.Succeeded?e.Data.PhoneNumberConfirmed?t.dataForm.inputType="pin":(t.dataForm.inputType="otp",t.setTimeCountdown()):(0,d.cX)(t.toastController,{},e).then(r=>r.present())}}):(0,d.cX)(t.toastController,{color:"warning",message:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\xfang!"}).then(e=>e.present())})()}checkOTP(){var a=this;return(0,u.A)(function*(){k({loading:t=>{var e,r;t?null===(e=a.loading)||void 0===e||e.present():null===(r=a.loading)||void 0===r||r.dismiss()},params:{PhoneNumber:a.dataForm.mobile,OtpCode:a.dataForm.otp},callback:t=>{var e;a.response=t,null!=t&&t.Succeeded?a.dataForm.inputType="set-pin":(null===(e=a.ngOtpInputRef)||void 0===e||e.setValue(""),(0,d.cX)(a.toastController,{},t).then(r=>r.present()))}})})()}checkPIN(){var a=this;return(0,u.A)(function*(){N({loading:t=>{var e,r;t?null===(e=a.loading)||void 0===e||e.present():null===(r=a.loading)||void 0===r||r.dismiss()},params:{PhoneNumber:a.dataForm.mobile,Password:a.dataForm.pin},callback:t=>{if(a.response=t,null!=t&&t.Succeeded){let{RefreshToken:r,JWToken:s,TokenExpiryDateValue:nn,UserName:tn,PhoneNumber:en}=t.Data;(0,M.Dj)({params:{AccessToken:s,RefreshToken:r,TokenExpiry:nn,UserName:tn,PhoneNumber:en},callback:P=>{var b;null!=P&&P.AccessToken&&window.location.replace(null!==(b=a.params.returnurl)&&void 0!==b?b:_._.TABS_DEFAULT)}})}else{var e;null===(e=a.ngPinInputRef)||void 0===e||e.setValue(""),(0,d.cX)(a.toastController,{},t).then(r=>r.present())}}})})()}setPIN(){var a=this;return(0,u.A)(function*(){R({loading:t=>{var e,r;t?null===(e=a.loading)||void 0===e||e.present():null===(r=a.loading)||void 0===r||r.dismiss()},params:{PhoneNumber:a.dataForm.mobile,OtpCode:a.dataForm.otp,Password:a.dataForm.pin,ConfirmPassword:a.dataForm.pin2},callback:t=>{var e,r;a.response=t,null!=t&&t.Succeeded?a.checkPIN():(null===(e=a.ngSetPinInputRef)||void 0===e||e.setValue(""),null===(r=a.ngConfirmPinInputRef)||void 0===r||r.setValue(""),(0,d.cX)(a.toastController,{},t).then(s=>s.present()))}})})()}setTimeCountdown(){if(this.timeoutSendOTP<=0){this.timeoutSendOTP=18e4,clearInterval(this.intervalCountdownSendOTP);let a=1e3;this.intervalCountdownSendOTP=setInterval(()=>{if(this.timeoutSendOTP<=a)return this.timeoutSendOTP=0,void clearInterval(this.intervalCountdownSendOTP);this.timeoutSendOTP-=a},a)}}getTimeCountdownSendOTP(){return I()(this.timeoutSendOTP).format("mm:ss")}}return(l=i).\u0275fac=function(a){return new(a||l)(n.rXU(O.hE),n.rXU(v.nX),n.rXU(m.Xi),n.rXU(m.K_))},l.\u0275cmp=n.VBU({type:l,selectors:[["app-auth"]],viewQuery:function(a,t){if(1&a&&(n.GBs(x,5),n.GBs(w,5),n.GBs(X,5),n.GBs($,5)),2&a){let e;n.mGM(e=n.lsd())&&(t.ngOtpInputRef=e.first),n.mGM(e=n.lsd())&&(t.ngPinInputRef=e.first),n.mGM(e=n.lsd())&&(t.ngSetPinInputRef=e.first),n.mGM(e=n.lsd())&&(t.ngConfirmPinInputRef=e.first)}},decls:23,vars:6,consts:[["inputMobile",""],["inputOTP",""],["inputPIN",""],["inputSetPIN",""],["inputConfirmPIN",""],["ngOtpInput",""],["ngPinInput",""],["ngSetPinInput",""],["ngConfirmPinInput",""],["slot","end"],[3,"click"],["name","close-outline"],["scroll-x","false","scroll-y","false"],[1,"w-100","h-100","d-flex","align-items-center"],[3,"ngSwitch"],[3,"ngTemplateOutlet",4,"ngSwitchCase"],[3,"ngTemplateOutlet"],[1,"container","container-mobile"],[1,"mb-4"],["src","../../../assets/image/logo-isac-infipower.png"],[1,"mb-3","text-center"],[1,"font-poppins"],[1,"mb-4","text-center"],[3,"innerHTML"],[1,"ion-item-input"],["lines","none"],["slot","start","color","primary","src","../../../assets/icon/ion-icon/call.svg"],["type","number",3,"change","keyup","placeholder","ngModel"],[1,"mt-4"],["color","primary","expand","block","shape","round",3,"click"],["slot","end","src","../../../assets/icon/ion-icon/arrow-right.svg"],[1,"container","container-otp"],["src","../../../assets/icon/ion-img/otp.svg"],[1,"row","text-center"],[3,"onInputChange","config"],[1,"mt-4","text-center"],[1,"text-primmary","cursor-pointer",3,"click"],["class","ml-1",4,"ngIf"],[1,"ml-1"],[1,"container","container-pin"],[1,"text-primary","cursor-pointer",3,"click"]],template:function(a,t){if(1&a){const e=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",9)(3,"ion-button",10),n.bIt("click",function(s){return n.eBV(e),n.Njj(t.close(s))}),n.nrm(4,"ion-icon",11),n.k0s()()()(),n.j41(5,"ion-content",12)(6,"div",13),n.qex(7,14),n.DNE(8,V,1,1,"ng-container",15)(9,E,1,1,"ng-container",15)(10,L,1,1,"ng-container",15)(11,B,1,1,"ng-container",15)(12,Y,1,1,"ng-container",15),n.bVm(),n.k0s()(),n.DNE(13,U,21,13,"ng-template",null,0,n.C5r)(15,J,24,17,"ng-template",null,1,n.C5r)(17,z,22,13,"ng-template",null,2,n.C5r)(19,W,17,9,"ng-template",null,3,n.C5r)(21,H,18,12,"ng-template",null,4,n.C5r)}2&a&&(n.R7$(7),n.Y8G("ngSwitch",t.dataForm.inputType),n.R7$(),n.Y8G("ngSwitchCase","mobile"),n.R7$(),n.Y8G("ngSwitchCase","otp"),n.R7$(),n.Y8G("ngSwitchCase","pin"),n.R7$(),n.Y8G("ngSwitchCase","set-pin"),n.R7$(),n.Y8G("ngSwitchCase","confirm-pin"))},dependencies:[p.bT,p.T3,p.ux,p.e1,f.BC,f.vS,m.Jm,m.QW,m.W9,m.eU,m.iq,m.KW,m.$w,m.uz,m.he,m.ai,m.su,F.gj,G.D9],styles:[".container[_ngcontent-%COMP%]{max-width:30rem}.container-mobile[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:12.5rem;margin:auto}.container-otp[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:12.5rem;margin:auto}.container-pin[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:12.5rem;margin:auto}"]}),i})()}];let K=(()=>{var l;class i{}return(l=i).\u0275fac=function(a){return new(a||l)},l.\u0275mod=n.$C({type:l}),l.\u0275inj=n.G2t({imports:[v.iI.forChild(Q),v.iI]}),i})();var Z=c(3584);let q=(()=>{var l;class i{}return(l=i).\u0275fac=function(a){return new(a||l)},l.\u0275mod=n.$C({type:l}),l.\u0275inj=n.G2t({imports:[p.MD,f.YN,m.bv,K,Z.x,F.Ph]}),i})()}}]);