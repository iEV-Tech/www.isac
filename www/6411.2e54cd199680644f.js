"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6411],{6411:(Fn,I,u)=>{u.r(I),u.d(I,{AuthPageModule:()=>vn});var k=u(177),F=u(9417),p=u(9465),T=u(7625),s=u(467),x=u(7586),G=u.n(x),_=u(5972);const O=function(){var r=(0,s.A)(function*(i){i.params=i.params||{},(0,_.Ll)({authorization:!1,url:"api/Account/login-phonenumber-password",params:{PhoneNumber:i.params.PhoneNumber,Password:i.params.Password},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var e;"function"==typeof i.callback&&i.callback(null==o||null===(e=o.response)||void 0===e?void 0:e.data),console.error(o)},loading:i.loading,loadingController:i.loadingController})});return function(o){return r.apply(this,arguments)}}(),y=function(){var r=(0,s.A)(function*(i){i.params=i.params||{},(0,_.Ll)({authorization:!1,url:"api/Account/login-socialnetwork",params:{SocialType:i.params.SocialType,SocialToken:i.params.SocialToken,SocialUserId:i.params.SocialUserId,Email:i.params.Email,FullName:i.params.FullName},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var e;"function"==typeof i.callback&&i.callback(null==o||null===(e=o.response)||void 0===e?void 0:e.data),console.error(o)},loading:i.loading,loadingController:i.loadingController})});return function(o){return r.apply(this,arguments)}}(),$=function(){var r=(0,s.A)(function*(i){i.params=i.params||{},(0,_.Ll)({authorization:!1,url:"api/Account/verify-phonenumber-otpcode",params:{PhoneNumber:i.params.PhoneNumber,OtpCode:i.params.OtpCode},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var e;"function"==typeof i.callback&&i.callback(null==o||null===(e=o.response)||void 0===e?void 0:e.data),console.error(o)},loading:i.loading,loadingController:i.loadingController})});return function(o){return r.apply(this,arguments)}}(),w=function(){var r=(0,s.A)(function*(i){i.params=i.params||{},(0,_.Ll)({authorization:!1,url:"api/Account/register-phonenumber-otpcode?api-version=1.0",params:{PhoneNumber:i.params.PhoneNumber},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var e;"function"==typeof i.callback&&i.callback(null==o||null===(e=o.response)||void 0===e?void 0:e.data),console.error(o)},loading:i.loading,loadingController:i.loadingController})});return function(o){return r.apply(this,arguments)}}(),E=function(){var r=(0,s.A)(function*(i){i.params=i.params||{},(0,_.Ll)({authorization:!1,url:"api/Account/forgot-password-phonenumber",params:{PhoneNumber:i.params.PhoneNumber},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var e;"function"==typeof i.callback&&i.callback(null==o||null===(e=o.response)||void 0===e?void 0:e.data),console.error(o)},loading:i.loading,loadingController:i.loadingController})});return function(o){return r.apply(this,arguments)}}(),U=function(){var r=(0,s.A)(function*(i){i.params=i.params||{},(0,_.Ll)({authorization:!1,url:"api/Account/reset-password-phonenumber",params:{PhoneNumber:i.params.PhoneNumber,OtpCode:i.params.OtpCode,Password:i.params.Password,ConfirmPassword:i.params.ConfirmPassword},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var e;"function"==typeof i.callback&&i.callback(null==o||null===(e=o.response)||void 0===e?void 0:e.data),console.error(o)},loading:i.loading,loadingController:i.loadingController})});return function(o){return r.apply(this,arguments)}}();var A=u(23),B=u(6539),X=u(8517),d=u(8650),b=u(8833),C=u(5083);const j=(0,C.F3)("FacebookLogin",{web:()=>u.e(4096).then(u.bind(u,4096)).then(r=>new r.FacebookLoginWeb)}),S=(0,C.F3)("GoogleAuth",{web:()=>u.e(7620).then(u.bind(u,7620)).then(r=>new r.GoogleAuthWeb)}),V=function(){var r=(0,s.A)(function*(i){i.params=i.params||{},(0,_.hm)({api_url:`https://graph.facebook.com/me?fields=id,name,picture,email,gender,birthday&access_token=${i.params.AccessToken}`,headers:{},success:o=>{"function"==typeof i.callback&&i.callback(o.data||null)},error:o=>{var e;"function"==typeof i.callback&&i.callback(null==o||null===(e=o.response)||void 0===e?void 0:e.data),console.error(o)},loading:i.loading,loadingController:i.loadingController})});return function(o){return r.apply(this,arguments)}}();var M=u(5312),n=u(4438),N=u(5788),Y=u(4842);const L=["inputMobileRef"],D=["ngOtpInput"],J=["inputPinRef"],z=["inputSetPinRef"],W=["inputConfirmPinRef"],H=()=>["web","ios"],Q=()=>["web","android","ios"],K=r=>({length:r,allowNumbersOnly:!0});function Z(r,i){if(1&r&&n.eu8(0,18),2&r){n.XpG();const o=n.sdS(15);n.Y8G("ngTemplateOutlet",o)}}function q(r,i){if(1&r&&n.eu8(0,18),2&r){n.XpG();const o=n.sdS(17);n.Y8G("ngTemplateOutlet",o)}}function nn(r,i){if(1&r&&n.eu8(0,18),2&r){n.XpG();const o=n.sdS(19);n.Y8G("ngTemplateOutlet",o)}}function tn(r,i){if(1&r&&n.eu8(0,18),2&r){n.XpG();const o=n.sdS(21);n.Y8G("ngTemplateOutlet",o)}}function en(r,i){if(1&r&&n.eu8(0,18),2&r){n.XpG();const o=n.sdS(23);n.Y8G("ngTemplateOutlet",o)}}function on(r,i){if(1&r&&n.eu8(0,18),2&r){n.XpG();const o=n.sdS(25);n.Y8G("ngTemplateOutlet",o)}}function an(r,i){if(1&r){const o=n.RV6();n.j41(0,"ion-button",51),n.bIt("click",function(){n.eBV(o);const t=n.XpG(3);return n.Njj(t.googleSignIn())}),n.nrm(1,"ion-icon",52),n.k0s()}}function rn(r,i){if(1&r){const o=n.RV6();n.j41(0,"ion-button",53),n.bIt("click",function(){n.eBV(o);const t=n.XpG(3);return n.Njj(t.facebookSignIn())}),n.nrm(1,"ion-icon",54),n.k0s()}}function ln(r,i){if(1&r&&(n.qex(0),n.j41(1,"div",43),n.nrm(2,"div",44),n.j41(3,"small",45),n.EFF(4),n.nI1(5,"translate"),n.k0s(),n.nrm(6,"div",44),n.k0s(),n.j41(7,"div",46),n.nrm(8,"div",47),n.j41(9,"div",48),n.DNE(10,an,2,0,"ion-button",49)(11,rn,2,0,"ion-button",50),n.k0s(),n.nrm(12,"div",47),n.k0s(),n.bVm()),2&r){const o=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,3,"OrLogInWith")),n.R7$(6),n.Y8G("ngIf",n.lJ4(5,H).includes(o.platform)),n.R7$(),n.Y8G("ngIf",n.lJ4(6,Q).includes(o.platform))}}function cn(r,i){if(1&r){const o=n.RV6();n.j41(0,"div",19)(1,"div",20)(2,"div",21)(3,"div",22),n.nrm(4,"ion-img",23),n.k0s(),n.j41(5,"h5",24)(6,"strong",25),n.EFF(7),n.nI1(8,"translate"),n.k0s()(),n.j41(9,"p",26),n.nrm(10,"small",27),n.nI1(11,"translate"),n.k0s(),n.j41(12,"div",28)(13,"div",29)(14,"b",30),n.EFF(15),n.nI1(16,"translate"),n.k0s()(),n.j41(17,"ion-item",31),n.nrm(18,"ion-icon",32),n.j41(19,"ion-input",33,6),n.nI1(21,"translate"),n.bIt("change",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.changeMobile(t))})("keyup",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.keyupMobile(t))}),n.k0s()()(),n.j41(22,"div",34)(23,"ion-button",35),n.bIt("click",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.submitMobile(t))}),n.j41(24,"ion-label"),n.EFF(25),n.nI1(26,"translate"),n.k0s()()(),n.j41(27,"div",36)(28,"ion-button",37),n.bIt("click",function(){n.eBV(o);const t=n.XpG();return n.Njj(t.setFormType("signup"))}),n.j41(29,"ion-label",38),n.EFF(30),n.nI1(31,"translate"),n.k0s(),n.j41(32,"ion-label"),n.EFF(33),n.nI1(34,"translate"),n.k0s()()(),n.DNE(35,ln,13,7,"ng-container",39),n.k0s()(),n.j41(36,"div",40)(37,"i")(38,"span"),n.EFF(39),n.nI1(40,"translate"),n.k0s(),n.j41(41,"a",41),n.bIt("click",function(){n.eBV(o);const t=n.XpG();return n.Njj(t.navigateByUrl(t.APP_ROUTE.TERMS_AND_CONDITION))}),n.EFF(42),n.nI1(43,"translate"),n.k0s(),n.j41(44,"span",42),n.EFF(45),n.nI1(46,"translate"),n.k0s(),n.j41(47,"a",41),n.bIt("click",function(){n.eBV(o);const t=n.XpG();return n.Njj(t.navigateByUrl(t.APP_ROUTE.PRIVACY_POLICY))}),n.EFF(48),n.nI1(49,"translate"),n.k0s(),n.j41(50,"span"),n.EFF(51),n.nI1(52,"translate"),n.k0s()()()()}if(2&r){const o=n.XpG();n.R7$(7),n.SpI("iSAC ",n.bMT(8,14,"Wellcome"),"!"),n.R7$(3),n.Y8G("innerHTML",n.bMT(11,16,"Auth_Suggest_Mobile"),n.npT),n.R7$(5),n.JRh(n.bMT(16,18,"Mobile")),n.R7$(4),n.FS9("placeholder",n.bMT(21,20,"EnterMobile")),n.Y8G("ngModel",o.dataForm.mobile),n.R7$(6),n.JRh(n.bMT(26,22,"LogIn")),n.R7$(5),n.JRh(n.bMT(31,24,"DoNotHaveAnAccount")),n.R7$(3),n.JRh(n.bMT(34,26,"SignUp")),n.R7$(2),n.Y8G("ngIf",o.isAppTest),n.R7$(4),n.SpI("",n.bMT(40,28,"ByLoginAgreeTo")," "),n.R7$(3),n.JRh(n.bMT(43,30,"TermsAndCondition")),n.R7$(3),n.SpI(" ",n.bMT(46,32,"And")," "),n.R7$(3),n.JRh(n.bMT(49,34,"PrivacyPolicy")),n.R7$(3),n.SpI(" ",n.bMT(52,36,"Our"),".")}}function sn(r,i){if(1&r){const o=n.RV6();n.j41(0,"div",15)(1,"div",21)(2,"div",22),n.nrm(3,"ion-img",23),n.k0s(),n.j41(4,"h5",24)(5,"strong",25),n.EFF(6),n.nI1(7,"translate"),n.k0s()(),n.j41(8,"p",26),n.nrm(9,"small",27),n.nI1(10,"translate"),n.k0s(),n.j41(11,"div",28)(12,"div",29)(13,"b",30),n.EFF(14),n.nI1(15,"translate"),n.k0s()(),n.j41(16,"ion-item",31),n.nrm(17,"ion-icon",32),n.j41(18,"ion-input",55,6),n.nI1(20,"translate"),n.bIt("change",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.changeMobile(t))}),n.k0s()()(),n.j41(21,"div",34)(22,"div",56)(23,"ion-checkbox",57),n.bIt("ionChange",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.changeAgreePolicy(t))}),n.EFF(24),n.nI1(25,"translate"),n.k0s()(),n.j41(26,"div",58),n.nrm(27,"i",27),n.nI1(28,"translate"),n.k0s()(),n.j41(29,"div",34)(30,"ion-button",35),n.bIt("click",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.submitSignUp(t))}),n.j41(31,"ion-label"),n.EFF(32),n.nI1(33,"translate"),n.k0s()()(),n.j41(34,"div",36)(35,"ion-button",37),n.bIt("click",function(){n.eBV(o);const t=n.XpG();return n.Njj(t.setFormType("login"))}),n.j41(36,"ion-label",38),n.EFF(37),n.nI1(38,"translate"),n.k0s(),n.j41(39,"ion-label"),n.EFF(40),n.nI1(41,"translate"),n.k0s()()()()()}if(2&r){const o=n.XpG();n.R7$(6),n.SpI("iSAC ",n.bMT(7,11,"Wellcome"),"!"),n.R7$(3),n.Y8G("innerHTML",n.bMT(10,13,"Auth_Suggest_Mobile"),n.npT),n.R7$(5),n.JRh(n.bMT(15,15,"Mobile")),n.R7$(4),n.FS9("placeholder",n.bMT(20,17,"EnterMobile")),n.Y8G("ngModel",o.dataForm.mobile),n.R7$(5),n.Y8G("checked",!!o.dataForm.agreePolicy),n.R7$(),n.JRh(n.bMT(25,19,"AgreeToThePersonalInformationSecurityPolicy")),n.R7$(3),n.Y8G("innerHTML",n.bMT(28,21,"AgreeToThePersonalInformationSecurityPolicy_More"),n.npT),n.R7$(5),n.JRh(n.bMT(33,23,"SignUp")),n.R7$(5),n.JRh(n.bMT(38,25,"DoYouAlreadyHaveAnAccount")),n.R7$(3),n.JRh(n.bMT(41,27,"LogIn"))}}function un(r,i){if(1&r&&(n.j41(0,"small",66),n.EFF(1),n.k0s()),2&r){const o=n.XpG(2);n.R7$(),n.SpI("(",o.getTimeCountdownSendOTP(),")")}}function pn(r,i){if(1&r){const o=n.RV6();n.j41(0,"div",59)(1,"div",22),n.nrm(2,"ion-img",60),n.k0s(),n.j41(3,"h5",24)(4,"strong",25),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",26)(8,"small"),n.nrm(9,"span",27),n.nI1(10,"translate"),n.j41(11,"b"),n.EFF(12),n.k0s()()(),n.j41(13,"div",61)(14,"ng-otp-input",62,7),n.bIt("onInputChange",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.onOtpChange(t))}),n.k0s()(),n.j41(16,"div",63)(17,"span"),n.EFF(18),n.nI1(19,"translate"),n.k0s(),n.j41(20,"a",64),n.bIt("click",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.resendOTP(t))}),n.EFF(21),n.nI1(22,"translate"),n.k0s(),n.DNE(23,un,2,1,"small",65),n.k0s()()}if(2&r){const o=n.XpG();n.R7$(5),n.JRh(n.bMT(6,7,"ConfirmOTP")),n.R7$(4),n.Y8G("innerHTML",n.bMT(10,9,"Auth_Suggest_OTP"),n.npT),n.R7$(3),n.SpI(" ",o.APP_FUNC_FormatMobileNumber(o.dataForm.mobile),""),n.R7$(2),n.Y8G("config",n.eq3(15,K,o.dataForm.otpLen)),n.R7$(4),n.SpI("",n.bMT(19,11,"DidNotReceiveCode")," "),n.R7$(3),n.JRh(n.bMT(22,13,"Resend")),n.R7$(2),n.Y8G("ngIf",o.timeoutSendOTP>0)}}function mn(r,i){if(1&r){const o=n.RV6();n.j41(0,"div",67)(1,"div",22),n.nrm(2,"ion-img",23),n.k0s(),n.j41(3,"h5",24)(4,"strong",25),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",26)(8,"small"),n.nrm(9,"span",27),n.nI1(10,"translate"),n.j41(11,"b"),n.EFF(12),n.k0s()()(),n.j41(13,"div",68)(14,"ion-item",31),n.nrm(15,"ion-icon",69),n.j41(16,"ion-input",70,8),n.bIt("ionInput",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.onPinChange(t))}),n.k0s()()(),n.j41(18,"div",63)(19,"a",71),n.bIt("click",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.forgotPIN(t))}),n.EFF(20),n.nI1(21,"translate"),n.k0s()()()}if(2&r){const o=n.XpG();n.R7$(5),n.JRh(n.bMT(6,5,"InputPIN")),n.R7$(4),n.Y8G("innerHTML",n.bMT(10,7,"Auth_Suggest_PIN"),n.npT),n.R7$(3),n.SpI(" ",o.APP_FUNC_FormatMobileNumber(o.dataForm.mobile),""),n.R7$(4),n.Y8G("value",o.dataForm.pin),n.R7$(4),n.JRh(n.bMT(21,9,"ForgotPIN"))}}function dn(r,i){if(1&r){const o=n.RV6();n.j41(0,"div",67)(1,"div",22),n.nrm(2,"ion-img",23),n.k0s(),n.j41(3,"h5",24)(4,"strong",25),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",26)(8,"small"),n.EFF(9),n.nI1(10,"translate"),n.k0s()(),n.j41(11,"div",68)(12,"ion-item",31),n.nrm(13,"ion-icon",69),n.j41(14,"ion-input",70,9),n.bIt("ionInput",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.onSetPinChange(t))}),n.k0s()()(),n.j41(16,"div",63)(17,"span"),n.EFF(18,"\xa0"),n.k0s()()()}if(2&r){const o=n.XpG();n.R7$(5),n.JRh(n.bMT(6,3,"InputPIN")),n.R7$(4),n.JRh(n.bMT(10,5,"Auth_Suggest_PIN_New")),n.R7$(5),n.Y8G("value",o.dataForm.pin)}}function gn(r,i){if(1&r){const o=n.RV6();n.j41(0,"div",67)(1,"div",22),n.nrm(2,"ion-img",23),n.k0s(),n.j41(3,"h5",24)(4,"strong",25),n.EFF(5),n.nI1(6,"translate"),n.k0s()(),n.j41(7,"p",26)(8,"small"),n.EFF(9),n.nI1(10,"translate"),n.k0s()(),n.j41(11,"div",68)(12,"ion-item",31),n.nrm(13,"ion-icon",69),n.j41(14,"ion-input",70,10),n.bIt("ionInput",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.onConfirmPinChange(t))}),n.k0s()()(),n.j41(16,"div",63)(17,"a",72),n.bIt("click",function(t){n.eBV(o);const a=n.XpG();return n.Njj(a.backSetPIN(t))}),n.EFF(18),n.nI1(19,"translate"),n.k0s()()()}if(2&r){const o=n.XpG();n.R7$(5),n.JRh(n.bMT(6,4,"InputPIN")),n.R7$(4),n.JRh(n.bMT(10,6,"Auth_Suggest_PIN_Confirm")),n.R7$(5),n.Y8G("value",o.dataForm.pin2),n.R7$(4),n.JRh(n.bMT(19,8,"Back"))}}const hn=[{path:"",component:(()=>{var r;class i{constructor(e,t,a,l){this.router=e,this.loadingController=a,this.toastController=l,this.isAppTest=M.c.apptest,this.platform=C.Ii.getPlatform(),this.APP_ROUTE=b._,this.dataForm={formType:"login",otpLen:6,pinLen:6},this.timeoutSendOTP=0,this.intervalCountdownSendOTP=null,this.APP_FUNC_FormatMobileNumber=X.IV,this.params={returnurl:t.snapshot.queryParamMap.get("returnurl")||void 0},(0,B.lJ)().then(c=>{c&&(this.params.returnurl?window.location.replace(this.params.returnurl):this.navigateByUrl(b._.TABS_DEFAULT))})}ngOnInit(){}close(e){var t=this;return(0,s.A)(function*(){t.navigateByUrl(b._.TABS_DEFAULT)})()}navigateByUrl(e){this.router.navigateByUrl(e,{replaceUrl:!0})}redirect(e){var t=new RegExp(M.c.match_web_url,"i");e.match(t)&&this.router.navigateByUrl(e.replace(t,"/"))}setFormType(e){var t=this;return(0,s.A)(function*(){t.dataForm.formType=e,setTimeout(()=>{switch(e){case"login":var a;null===(a=t.inputMobileRef)||void 0===a||a.setFocus();break;case"signup":var l;null===(l=t.inputMobileRef)||void 0===l||l.setFocus();break;case"pin":var c;null===(c=t.inputPinRef)||void 0===c||c.setFocus();break;case"set-pin":var m;null===(m=t.inputSetPinRef)||void 0===m||m.setFocus();break;case"confirm-pin":var g;null===(g=t.inputConfirmPinRef)||void 0===g||g.setFocus()}},300)})()}backSetPIN(e){var t=this;return(0,s.A)(function*(){t.dataForm.pin="",t.dataForm.pin2="",t.setFormType("set-pin")})()}changeAgreePolicy(e){var t=this;return(0,s.A)(function*(){t.dataForm.agreePolicy=e.detail.checked})()}changeMobile(e){var t=this;return(0,s.A)(function*(){var a;t.dataForm.mobile=null===(a=e.target.value)||void 0===a?void 0:a.replace(/[^0-9\+]/g,"")})()}keyupMobile(e){var t=this;return(0,s.A)(function*(){13==e.keyCode&&t.submitMobile(e)})()}onOtpChange(e){var t=this;return(0,s.A)(function*(){var a,l,c;(null!==(a=null===(l=t.dataForm.otp)||void 0===l?void 0:l.length)&&void 0!==a?a:0)>=t.dataForm.otpLen||(t.dataForm.otp=e,(null===(c=t.dataForm.otp)||void 0===c?void 0:c.length)==t.dataForm.otpLen&&t.checkOTP())})()}onPinChange(e){var t=this;return(0,s.A)(function*(){var a,l,c;(null!==(a=null===(l=t.dataForm.pin)||void 0===l?void 0:l.length)&&void 0!==a?a:0)>=t.dataForm.pinLen||(t.dataForm.pin=e.detail.value,(null===(c=t.dataForm.pin)||void 0===c?void 0:c.length)==t.dataForm.pinLen&&t.checkPIN())})()}onSetPinChange(e){var t=this;return(0,s.A)(function*(){var a,l,c;(null!==(a=null===(l=t.dataForm.pin)||void 0===l?void 0:l.length)&&void 0!==a?a:0)>=t.dataForm.pinLen||(t.dataForm.pin=e.detail.value,(null===(c=t.dataForm.pin)||void 0===c?void 0:c.length)==t.dataForm.pinLen&&t.setFormType("confirm-pin"))})()}onConfirmPinChange(e){var t=this;return(0,s.A)(function*(){var a,l,c;(null!==(a=null===(l=t.dataForm.pin2)||void 0===l?void 0:l.length)&&void 0!==a?a:0)>=t.dataForm.pinLen||(t.dataForm.pin2=e.detail.value,(null===(c=t.dataForm.pin2)||void 0===c?void 0:c.length)==t.dataForm.pinLen&&(t.dataForm.pin!=t.dataForm.pin2?(t.dataForm.pin2="",(0,d.cX)(t.toastController,{color:"warning",message:"M\xe3 PIN kh\xf4ng tr\xf9ng kh\u1edbp, h\xe3y nh\u1eadp l\u1ea1i!"}).then(m=>m.present())):t.setPIN()))})()}resendOTP(e){var t=this;return(0,s.A)(function*(){var a;t.timeoutSendOTP>0||(null===(a=t.ngOtpInputRef)||void 0===a||a.setValue(""),t.submitMobile())})()}resetOTP(e){var t=this;return(0,s.A)(function*(){t.dataForm.pin="",t.dataForm.pin2=""})()}forgotPIN(e){var t=this;return(0,s.A)(function*(){E({loadingController:t.loadingController,params:{PhoneNumber:t.dataForm.mobile},callback:a=>{t.response=a,null!=a&&a.Succeeded?t.setFormType("otp"):(0,d.cX)(t.toastController,{},a).then(l=>l.present())}})})()}submitMobile(e,t){var a=this;return(0,s.A)(function*(){a.dataForm.mobile&&a.dataForm.mobile.match(/^(\+84|0)([3|5|7|8|9])([0-9]{8,9})$/g)?w({loadingController:a.loadingController,params:{PhoneNumber:a.dataForm.mobile},callback:l=>{a.response=l,null!=l&&l.Succeeded?l.Data.PhoneNumberConfirmed?(t&&(0,d.cX)(a.toastController,{color:"warning",message:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i \u0111\xe3 \u0111\u01b0\u1ee3c \u0111\u0103ng k\xfd tr\u01b0\u1edbc \u0111\xf3, vui l\xf2ng nh\u1eadp m\xe3 PIN t\xe0i kho\u1ea3n!"}).then(c=>c.present()),a.setFormType("pin")):(a.setFormType("otp"),a.setTimeCountdown()):(0,d.cX)(a.toastController,{},l).then(c=>c.present())}}):(0,d.cX)(a.toastController,{color:"warning",message:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\xfang!"}).then(l=>l.present())})()}submitSignUp(e){var t=this;return(0,s.A)(function*(){t.dataForm.agreePolicy?t.submitMobile(e,!0):(0,d.cX)(t.toastController,{color:"warning",message:"B\u1ea1n c\u1ea7n ch\u1ecdn \u0111\u1ed3ng \xfd v\u1edbi ch\xednh s\xe1ch c\u1ee7a ch\xfang t\xf4i!"}).then(l=>l.present())})()}checkOTP(){var e=this;return(0,s.A)(function*(){$({loadingController:e.loadingController,params:{PhoneNumber:e.dataForm.mobile,OtpCode:e.dataForm.otp},callback:t=>{var a;e.response=t,null!=t&&t.Succeeded?e.setFormType("set-pin"):(null===(a=e.ngOtpInputRef)||void 0===a||a.setValue(""),(0,d.cX)(e.toastController,{},t).then(l=>l.present()))}})})()}checkPIN(){var e=this;return(0,s.A)(function*(){O({loadingController:e.loadingController,params:{PhoneNumber:e.dataForm.mobile,Password:e.dataForm.pin},callback:t=>{if(e.response=t,null!=t&&t.Succeeded){let{RefreshToken:a,JWToken:l,TokenExpiryDateValue:c,UserName:m,PhoneNumber:g}=t.Data;(0,A.Dj)({params:{AccessToken:l,RefreshToken:a,TokenExpiry:c,UserName:m,PhoneNumber:g},callback:h=>{null!=h&&h.AccessToken&&(e.params.returnurl?e.redirect(e.params.returnurl):e.navigateByUrl(b._.TABS_DEFAULT))}})}else e.dataForm.pin="",(0,d.cX)(e.toastController,{},t).then(a=>a.present())}})})()}setPIN(){var e=this;return(0,s.A)(function*(){U({loadingController:e.loadingController,params:{PhoneNumber:e.dataForm.mobile,OtpCode:e.dataForm.otp,Password:e.dataForm.pin,ConfirmPassword:e.dataForm.pin2},callback:t=>{e.response=t,null!=t&&t.Succeeded?e.checkPIN():(e.dataForm.pin="",e.dataForm.pin2="",(0,d.cX)(e.toastController,{},t).then(a=>a.present()))}})})()}setTimeCountdown(){if(this.timeoutSendOTP<=0){this.timeoutSendOTP=18e4,clearInterval(this.intervalCountdownSendOTP);let e=1e3;this.intervalCountdownSendOTP=setInterval(()=>{if(this.timeoutSendOTP<=e)return this.timeoutSendOTP=0,void clearInterval(this.intervalCountdownSendOTP);this.timeoutSendOTP-=e},e)}}getTimeCountdownSendOTP(){return G()(this.timeoutSendOTP).format("mm:ss")}facebookSignIn(){var e=this;return(0,s.A)(function*(){j.initialize({appId:"483352784080919"}).then(()=>{j.login({permissions:["public_profile","email"]}).then(t=>{var a,l;console.log("login-facebook",t),null!==(a=t.accessToken)&&void 0!==a&&a.token&&V({params:{AccessToken:null===(l=t.accessToken)||void 0===l?void 0:l.token},callback:c=>{var m,g,h;console.log(c),y({params:{SocialType:"FaceBook",SocialToken:null===(m=t.accessToken)||void 0===m?void 0:m.token,SocialUserId:null!==(g=null==c?void 0:c.id)&&void 0!==g?g:null===(h=t.accessToken)||void 0===h?void 0:h.userId,Email:null==c?void 0:c.email,FullName:null==c?void 0:c.name},callback:f=>{if(e.response=f,null!=f&&f.Succeeded){var P;let{RefreshToken:v,JWToken:bn,TokenExpiryDateValue:kn,UserName:Pn,PhoneNumber:Tn}=f.Data;(0,A.Dj)({params:{SocialType:"FaceBook",SocialToken:null===(P=t.accessToken)||void 0===P?void 0:P.token,AccessToken:bn,RefreshToken:v,TokenExpiry:kn,UserName:Pn,PhoneNumber:Tn},callback:R=>{null!=R&&R.AccessToken&&(e.params.returnurl?e.redirect(e.params.returnurl):e.navigateByUrl(b._.TABS_DEFAULT))}})}else(0,d.cX)(e.toastController,{},f).then(v=>v.present())}})}})}).catch(t=>{console.log(t)})}).catch(t=>{console.log(t)})})()}googleSignIn(){var e=this;return(0,s.A)(function*(){S.initialize({clientId:{web:"205408273258-vf2ebughrfutlt5pm0eh9rbjg0g1iv76.apps.googleusercontent.com",ios:"205408273258-498pujpuan1bbjd86mp0sigq9mg96nci.apps.googleusercontent.com",android:"205408273258-9efl15iv20hpdk6savrdgu3sol7majke.apps.googleusercontent.com"}[e.platform],scopes:["profile","email"],grantOfflineAccess:!0}).then((0,s.A)(function*(){S.signIn().then(a=>{var l;console.log("login-google",a),null!=a&&null!==(l=a.authentication)&&void 0!==l&&l.accessToken&&y({params:{SocialType:"Google",SocialToken:a.authentication.accessToken,SocialUserId:null==a?void 0:a.id,Email:null==a?void 0:a.email,FullName:null==a?void 0:a.name},callback:c=>{if(e.response=c,null!=c&&c.Succeeded){let{RefreshToken:m,JWToken:g,TokenExpiryDateValue:h,UserName:f,PhoneNumber:P}=c.Data;(0,A.Dj)({params:{SocialType:"Google",SocialToken:a.authentication.accessToken,AccessToken:g,RefreshToken:m,TokenExpiry:h,UserName:f,PhoneNumber:P},callback:v=>{null!=v&&v.AccessToken&&(e.params.returnurl?e.redirect(e.params.returnurl):e.navigateByUrl(b._.TABS_DEFAULT))}})}else(0,d.cX)(e.toastController,{},c).then(m=>m.present())}})}).catch(a=>{console.log(a)})})).catch(a=>{console.log(a)})})()}appleSignIn(){return(0,s.A)(function*(){})()}}return(r=i).\u0275fac=function(e){return new(e||r)(n.rXU(T.Ix),n.rXU(T.nX),n.rXU(p.Xi),n.rXU(p.K_))},r.\u0275cmp=n.VBU({type:r,selectors:[["app-auth"]],viewQuery:function(e,t){if(1&e&&(n.GBs(L,5),n.GBs(D,5),n.GBs(J,5),n.GBs(z,5),n.GBs(W,5)),2&e){let a;n.mGM(a=n.lsd())&&(t.inputMobileRef=a.first),n.mGM(a=n.lsd())&&(t.ngOtpInputRef=a.first),n.mGM(a=n.lsd())&&(t.inputPinRef=a.first),n.mGM(a=n.lsd())&&(t.inputSetPinRef=a.first),n.mGM(a=n.lsd())&&(t.inputConfirmPinRef=a.first)}},decls:26,vars:7,consts:[["templateLogIn",""],["templateSignUp",""],["templateOTP",""],["templatePIN",""],["templateSetPIN",""],["templateConfirmPIN",""],["inputMobileRef",""],["ngOtpInput",""],["inputPinRef",""],["inputSetPinRef",""],["inputConfirmPinRef",""],["slot","end"],[3,"click"],["name","close-outline"],["scroll-x","false","scroll-y","false"],[1,"w-100","h-100","d-flex","align-items-center"],[3,"ngSwitch"],[3,"ngTemplateOutlet",4,"ngSwitchCase"],[3,"ngTemplateOutlet"],[1,"w-100","h-100","d-flex","flex-column"],[1,"flex-grow-1","d-flex","align-items-center"],[1,"container","container-mobile"],[1,"mb-4"],["src","../../../assets/image/logo-isac-infipower.png"],[1,"mb-3","text-center"],[1,"font-poppins"],[1,"mb-4","text-center"],[3,"innerHTML"],[1,"ion-item-input"],[1,"mb-1"],[1,"fs-3"],["lines","none"],["slot","start","color","primary","src","../../../assets/icon/ion-icon/call.svg"],["type","number","inputmode","decimal",3,"change","keyup","placeholder","ngModel"],[1,"mt-4"],["color","primary","expand","block","shape","round",3,"click"],[1,"mt-2"],["color","primary","expand","block","shape","round","fill","clear",3,"click"],["color","medium",1,"fs-12","mr-2"],[4,"ngIf"],[1,"container","text-center","py-3","fs-2"],[1,"text-primary","d-inline-block","cursor-pointer",3,"click"],[1,"text-lowercase"],[1,"d-flex","align-items-center","mt-4"],[1,"flex-grow-1","border-top"],[1,"px-3","text-muted"],[1,"d-flex","align-items-center","mt-3"],[1,"flex-grow-1"],[1,"px-3","login-social-network"],["shape","round","class","btn-google",3,"click",4,"ngIf"],["shape","round","class","btn-facebook",3,"click",4,"ngIf"],["shape","round",1,"btn-google",3,"click"],["src","../../../assets/icon/ion-img/google.svg"],["shape","round",1,"btn-facebook",3,"click"],["name","logo-facebook"],["type","number","inputmode","decimal",3,"change","placeholder","ngModel"],[1,"fs-14"],["labelPlacement","end",3,"ionChange","checked"],[1,"mt-2","text-justify","fs-12"],[1,"container","container-otp"],["src","../../../assets/icon/ion-img/otp.svg"],[1,"row","text-center"],[3,"onInputChange","config"],[1,"mt-4","text-center"],[1,"text-primmary","cursor-pointer",3,"click"],["class","ml-1",4,"ngIf"],[1,"ml-1"],[1,"container","container-pin"],[1,"ion-item-input","ion-item-input-pwd","mw-320","m-auto"],["slot","start","color","primary","name","key"],["type","number","inputmode","decimal","placeholder","******",3,"ionInput","value"],[1,"text-primmary","cursor-pointer","fs-14",3,"click"],[1,"text-primary","cursor-pointer","fs-14",3,"click"]],template:function(e,t){if(1&e){const a=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",11)(3,"ion-button",12),n.bIt("click",function(c){return n.eBV(a),n.Njj(t.close(c))}),n.nrm(4,"ion-icon",13),n.k0s()()()(),n.j41(5,"ion-content",14)(6,"div",15),n.qex(7,16),n.DNE(8,Z,1,1,"ng-container",17)(9,q,1,1,"ng-container",17)(10,nn,1,1,"ng-container",17)(11,tn,1,1,"ng-container",17)(12,en,1,1,"ng-container",17)(13,on,1,1,"ng-container",17),n.bVm(),n.k0s()(),n.DNE(14,cn,53,38,"ng-template",null,0,n.C5r)(16,sn,42,29,"ng-template",null,1,n.C5r)(18,pn,24,17,"ng-template",null,2,n.C5r)(20,mn,22,11,"ng-template",null,3,n.C5r)(22,dn,19,7,"ng-template",null,4,n.C5r)(24,gn,20,10,"ng-template",null,5,n.C5r)}2&e&&(n.R7$(7),n.Y8G("ngSwitch",t.dataForm.formType),n.R7$(),n.Y8G("ngSwitchCase","login"),n.R7$(),n.Y8G("ngSwitchCase","signup"),n.R7$(),n.Y8G("ngSwitchCase","otp"),n.R7$(),n.Y8G("ngSwitchCase","pin"),n.R7$(),n.Y8G("ngSwitchCase","set-pin"),n.R7$(),n.Y8G("ngSwitchCase","confirm-pin"))},dependencies:[k.bT,k.T3,k.ux,k.e1,F.BC,F.vS,p.Jm,p.QW,p.eY,p.W9,p.eU,p.iq,p.KW,p.$w,p.uz,p.he,p.ai,p.hB,p.su,N.gj,Y.D9],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--min-height: 3.5rem}.container[_ngcontent-%COMP%]{max-width:30rem}.container-mobile[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:12.5rem;margin:auto}.container-otp[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:12.5rem;margin:auto}.container-pin[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:12.5rem;margin:auto}.container-pin[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--background: var(--ion-color-light)}.login-social-network[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{min-width:2.5rem;min-height:2.5rem;width:2.5rem;height:2.5rem;--padding-start: 0;--padding-end: 0;--padding-top: 0;--padding-bottom: 0;--border-width: 1px;--border-style: solid;--border-color: var(--ion-color-medium-tint);margin:0;--box-shadow: none}.login-social-network[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:not(:last-child){margin-right:1rem}.login-social-network[_ngcontent-%COMP%]   ion-button.btn-apple[_ngcontent-%COMP%]{--background: #ffffff;--color: #000000}.login-social-network[_ngcontent-%COMP%]   ion-button.btn-google[_ngcontent-%COMP%]{--background: #ffffff}.login-social-network[_ngcontent-%COMP%]   ion-button.btn-facebook[_ngcontent-%COMP%]{--background: #ffffff;--color: #1877F2}"]}),i})()}];let fn=(()=>{var r;class i{}return(r=i).\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[T.iI.forChild(hn),T.iI]}),i})();var _n=u(3890);let vn=(()=>{var r;class i{}return(r=i).\u0275fac=function(e){return new(e||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[k.MD,F.YN,p.bv,fn,_n.x,N.Ph]}),i})()}}]);