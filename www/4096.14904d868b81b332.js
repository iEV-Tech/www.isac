"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4096],{4096:(l,u,i)=>{i.r(u),i.d(u,{FacebookLoginWeb:()=>a});var t=i(467),c=i(5083);class a extends c.E_{initialize(e){var n=this;return(0,t.A)(function*(){return yield n.loadScript(e.locale),FB.init(Object.assign(Object.assign({},{version:"v17.0"}),e))})()}loadScript(e){if(typeof document>"u")return Promise.reject("document global not found");if(document.getElementById("fb"))return Promise.resolve();const o=document.getElementsByTagName("head")[0],s=document.createElement("script");return new Promise(d=>{s.onload=()=>d(),s.defer=!0,s.async=!0,s.id="fb",s.src=`https://connect.facebook.net/${null!=e?e:"en_US"}/sdk.js`,o.appendChild(s)})}login(e){return(0,t.A)(function*(){return new Promise((n,r)=>{FB.login(o=>{"connected"===o.status?n({accessToken:{token:o.authResponse.accessToken}}):r({accessToken:{token:null}})},{scope:e.permissions.join(",")})})})()}logout(){return(0,t.A)(function*(){return new Promise(e=>FB.logout(()=>e()))})()}reauthorize(){return(0,t.A)(function*(){return new Promise(e=>FB.reauthorize(n=>e(n)))})()}getCurrentAccessToken(){return(0,t.A)(function*(){return new Promise((e,n)=>{FB.getLoginStatus(r=>{"connected"===r.status?e({accessToken:{applicationId:void 0,declinedPermissions:[],expires:void 0,isExpired:void 0,lastRefresh:void 0,permissions:[],token:r.authResponse.accessToken,userId:r.authResponse.userID}}):n({accessToken:{token:null}})})})})()}getProfile(e){return(0,t.A)(function*(){const n=e.fields.join(",");return new Promise((r,o)=>{FB.api("/me",{fields:n},s=>{s.error?o(s.error.message):r(s)})})})()}logEvent(){return(0,t.A)(function*(){return Promise.resolve()})()}setAutoLogAppEventsEnabled(){return(0,t.A)(function*(){return Promise.resolve()})()}setAdvertiserTrackingEnabled(){return(0,t.A)(function*(){return Promise.resolve()})()}setAdvertiserIDCollectionEnabled(){return(0,t.A)(function*(){return Promise.resolve()})()}}}}]);