"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9051],{2254:(I,h,p)=>{p.d(h,{C:()=>g,D1:()=>C,cZ:()=>F,kT:()=>_,vE:()=>a});var v=p(467),f=p(5972);const F=function(){var o=(0,v.A)(function*(e){var t,u,b,r,d;e.params=e.params||{},(0,f.Ll)({url:"api/Feedback/create",params:{FbCatgId:null!==(t=e.params.FbCatgId)&&void 0!==t?t:null,DocType:null!==(u=e.params.DocType)&&void 0!==u?u:null,DocId:null!==(b=e.params.DocId)&&void 0!==b?b:null,Title:null!==(r=e.params.Title)&&void 0!==r?r:null,Content:null!==(d=e.params.Content)&&void 0!==d?d:null},success:i=>{"function"==typeof e.callback&&e.callback(i.data||null)},error:i=>{var l;"function"==typeof e.callback&&e.callback(null==i||null===(l=i.response)||void 0===l?void 0:l.data),console.error(i)},loading:null==e?void 0:e.loading})});return function(t){return o.apply(this,arguments)}}(),C=function(){var o=(0,v.A)(function*(e){var t,u,b,r,d,i;e.params=e.params||{},(0,f.IH)({url:"api/Feedback/update",params:{FeedbackId:null!==(t=e.params.FeedbackId)&&void 0!==t?t:null,FbCatgId:null!==(u=e.params.FbCatgId)&&void 0!==u?u:null,DocType:null!==(b=e.params.DocType)&&void 0!==b?b:null,DocId:null!==(r=e.params.DocId)&&void 0!==r?r:null,Title:null!==(d=e.params.Title)&&void 0!==d?d:null,Content:null!==(i=e.params.Content)&&void 0!==i?i:null},success:l=>{"function"==typeof e.callback&&e.callback(l.data||null)},error:l=>{var n;"function"==typeof e.callback&&e.callback(null==l||null===(n=l.response)||void 0===n?void 0:n.data),console.error(l)},loading:null==e?void 0:e.loading})});return function(t){return o.apply(this,arguments)}}(),_=function(){var o=(0,v.A)(function*(e){var t,u;e.params=e.params||{},(0,f.hm)({url:"api/Feedback/get-feedbacks",params:{PageNumber:null!==(t=e.params.PageNumber)&&void 0!==t?t:1,PageSize:null!==(u=e.params.PageSize)&&void 0!==u?u:10},success:b=>{"function"==typeof e.callback&&e.callback(b.data||null)},error:b=>{var r;"function"==typeof e.callback&&e.callback(null==b||null===(r=b.response)||void 0===r?void 0:r.data),console.error(b)},loading:null==e?void 0:e.loading})});return function(t){return o.apply(this,arguments)}}(),g=function(){var o=(0,v.A)(function*(e){e.params=e.params||{},(0,f.hm)({url:`api/Feedback/get-byid/${e.params.FeedbackId}`,params:{},success:t=>{"function"==typeof e.callback&&e.callback(t.data||null)},error:t=>{var u;"function"==typeof e.callback&&e.callback(null==t||null===(u=t.response)||void 0===u?void 0:u.data),console.error(t)},loading:null==e?void 0:e.loading})});return function(t){return o.apply(this,arguments)}}(),a=function(){var o=(0,v.A)(function*(e){e.params=e.params||{},(0,f.sj)({url:`api/Feedback/delete/${e.params.FeedbackId}`,params:{},success:t=>{"function"==typeof e.callback&&e.callback(t.data||null)},error:t=>{var u;"function"==typeof e.callback&&e.callback(null==t||null===(u=t.response)||void 0===u?void 0:u.data),console.error(t)},loading:null==e?void 0:e.loading})});return function(t){return o.apply(this,arguments)}}()},9051:(I,h,p)=>{p.d(h,{l:()=>b});var v=p(467),f=p(2254),F=p(5972);const C=function(){var r=(0,v.A)(function*(d){var i,l;d.params=d.params||{},(0,F.hm)({url:"api/FeedbackCatg/get-feedbackcatgs",params:{PageNumber:null!==(i=d.params.PageNumber)&&void 0!==i?i:1,PageSize:null!==(l=d.params.PageSize)&&void 0!==l?l:10},success:n=>{"function"==typeof d.callback&&d.callback(n.data||null)},error:n=>{var s;"function"==typeof d.callback&&d.callback(null==n||null===(s=n.response)||void 0===s?void 0:s.data),console.error(n)},loading:null==d?void 0:d.loading})});return function(i){return r.apply(this,arguments)}}();var g=p(8650),a=p(4438),o=p(8974),e=p(177),t=p(4842);function u(r,d){if(1&r&&(a.qex(0),a.j41(1,"ion-select-option",15),a.EFF(2),a.k0s(),a.bVm()),2&r){const i=d.$implicit;a.R7$(),a.Y8G("value",i.FbCatgId),a.R7$(),a.JRh(i.FbCatgTitle)}}let b=(()=>{var r;class d{constructor(l,n,s){this.modalController=l,this.loadingController=n,this.toastController=s,this.feedback={},this.feedbackcatgs=[],this.loadingController.create({message:""}).then(c=>this.loading=c)}ngOnInit(){C({params:{},callback:l=>{var n;null!=l&&l.Succeeded?this.feedbackcatgs=null!==(n=l.Data)&&void 0!==n?n:[]:(0,g.cX)(this.toastController,{},l).then(s=>s.present())}}),this.FeedbackId&&(0,f.C)({loading:l=>{var n,s;l?null===(n=this.loading)||void 0===n||n.present():null===(s=this.loading)||void 0===s||s.dismiss()},params:{FeedbackId:this.FeedbackId},callback:l=>{var n;this.response=l,null!=l&&l.Succeeded?this.feedback=null!==(n=l.Data)&&void 0!==n?n:{}:(0,g.cX)(this.toastController,{},l).then(s=>s.present())}})}close(l){var n=this;return(0,v.A)(function*(){n.modalController.dismiss(null,"cancel")})()}submit(l){var n=this;return(0,v.A)(function*(){var s;n.feedback.Content&&(null!==(s=n.feedback)&&void 0!==s&&s.FeedbackId?(0,f.D1)({loading:c=>{var m,k;c?null===(m=n.loading)||void 0===m||m.present():null===(k=n.loading)||void 0===k||k.dismiss()},params:n.feedback,callback:c=>{n.response=c,null!=c&&c.Succeeded?n.modalController.dismiss(null,"success"):(0,g.cX)(n.toastController,{},c).then(m=>m.present())}}):(0,f.cZ)({loading:c=>{var m,k;c?null===(m=n.loading)||void 0===m||m.present():null===(k=n.loading)||void 0===k||k.dismiss()},params:n.feedback,callback:c=>{n.response=c,null!=c&&c.Succeeded?n.modalController.dismiss(null,"success"):(0,g.cX)(n.toastController,{},c).then(m=>m.present())}}))})()}changeTitle(l){var n=this;return(0,v.A)(function*(){n.feedback.Title=l.detail.value})()}changeContent(l){var n=this;return(0,v.A)(function*(){n.feedback.Content=l.detail.value})()}changeCatg(l){var n=this;return(0,v.A)(function*(){n.feedback.FbCatgId=l.detail.value})()}}return(r=d).\u0275fac=function(l){return new(l||r)(a.rXU(o.W3),a.rXU(o.Xi),a.rXU(o.K_))},r.\u0275cmp=a.VBU({type:r,selectors:[["app-modal-add-feedback"]],inputs:{FeedbackId:"FeedbackId",feedback:"feedback"},decls:44,vars:32,consts:[["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],[1,"container","d-flex","flex-column","h-100"],[1,"flex-grow-1"],["lines","none"],[1,"form-group"],[1,"ion-item-input"],["justify","space-between","interface","action-sheet",3,"ionChange","label","placeholder","value"],[4,"ngFor","ngForOf"],[3,"ionChange","placeholder","value"],[1,"text-danger"],["maxlength","250",3,"ionChange","autoGrow","placeholder","value"],[1,"mt-4","py-3"],["color","primary","shape","round","expand","block",3,"click"],[3,"value"]],template:function(l,n){1&l&&(a.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),a.bIt("click",function(c){return n.close(c)}),a.nrm(4,"ion-icon",2),a.k0s()(),a.j41(5,"ion-title"),a.EFF(6),a.nI1(7,"translate"),a.k0s()()(),a.j41(8,"ion-content")(9,"div",3)(10,"div",4)(11,"ion-list",5)(12,"div",6)(13,"label"),a.EFF(14),a.nI1(15,"translate"),a.k0s(),a.j41(16,"div",7)(17,"ion-item")(18,"ion-select",8),a.nI1(19,"translate"),a.nI1(20,"translate"),a.bIt("ionChange",function(c){return n.changeCatg(c)}),a.DNE(21,u,3,2,"ng-container",9),a.k0s()()()(),a.j41(22,"div",6)(23,"label"),a.EFF(24),a.nI1(25,"translate"),a.k0s(),a.j41(26,"div",7)(27,"ion-item")(28,"ion-input",10),a.nI1(29,"translate"),a.bIt("ionChange",function(c){return n.changeTitle(c)}),a.k0s()()()(),a.j41(30,"div",6)(31,"label"),a.EFF(32),a.nI1(33,"translate"),a.j41(34,"span",11),a.EFF(35,"*"),a.k0s()(),a.j41(36,"div",7)(37,"ion-item")(38,"ion-textarea",12),a.nI1(39,"translate"),a.bIt("ionChange",function(c){return n.changeContent(c)}),a.k0s()()()()()(),a.j41(40,"div",13)(41,"ion-button",14),a.bIt("click",function(c){return n.submit(c)}),a.EFF(42),a.nI1(43,"translate"),a.k0s()()()()),2&l&&(a.R7$(6),a.JRh(a.bMT(7,14,"SendFeedback")),a.R7$(8),a.JRh(a.bMT(15,16,"Category")),a.R7$(4),a.FS9("label",a.bMT(19,18,"FeedbackCatg")),a.FS9("placeholder",a.bMT(20,20,"Select")),a.Y8G("value",n.feedback.FbCatgId),a.R7$(3),a.Y8G("ngForOf",n.feedbackcatgs),a.R7$(3),a.JRh(a.bMT(25,22,"Title")),a.R7$(4),a.FS9("placeholder",a.bMT(29,24,"FeedbackTitle")),a.Y8G("value",n.feedback.Title),a.R7$(4),a.SpI("",a.bMT(33,26,"Content")," "),a.R7$(6),a.FS9("placeholder",a.bMT(39,28,"FeedbackContent")),a.Y8G("autoGrow",!0)("value",n.feedback.Content),a.R7$(4),a.JRh(a.bMT(43,30,"Send")))},dependencies:[e.Sq,o.Jm,o.QW,o.W9,o.eU,o.iq,o.$w,o.uz,o.nf,o.Nm,o.Ip,o.nc,o.BC,o.ai,o.Je,o.Gw,t.D9]}),d})()}}]);