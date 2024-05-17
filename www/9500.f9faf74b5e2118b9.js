"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9500],{9500:(Je,ce,C)=>{C.d(ce,{x:()=>Pt});var f=C(177),T=C(9417),F=C(4488),g=C(4438);let D=(()=>{class n{}return n.\u0275fac=function(s){return new(s||n)},n.\u0275mod=g.$C({type:n}),n.\u0275inj=g.G2t({}),n})();var O=C(467),U=C(7673),he=C(1985),He=C(6648),xe=C(274),Oe=C(5964),q=C(6354),be=C(980),_e=C(5558);class ${}class ee{}class _{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach(s=>{const r=s.indexOf(":");if(r>0){const a=s.slice(0,r),i=a.toLowerCase(),c=s.slice(r+1).trim();this.maybeSetNormalizedName(a,i),this.headers.has(i)?this.headers.get(i).push(c):this.headers.set(i,[c])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((s,r)=>{this.setHeaderEntries(r,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([s,r])=>{this.setHeaderEntries(s,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const s=this.headers.get(e.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,s){return this.clone({name:e,value:s,op:"a"})}set(e,s){return this.clone({name:e,value:s,op:"s"})}delete(e,s){return this.clone({name:e,value:s,op:"d"})}maybeSetNormalizedName(e,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,e)}init(){this.lazyInit&&(this.lazyInit instanceof _?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(s=>{this.headers.set(s,e.headers.get(s)),this.normalizedNames.set(s,e.normalizedNames.get(s))})}clone(e){const s=new _;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof _?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([e]),s}applyUpdate(e){const s=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(e.name,s);const a=("a"===e.op?this.headers.get(s):void 0)||[];a.push(...r),this.headers.set(s,a);break;case"d":const i=e.value;if(i){let c=this.headers.get(s);if(!c)return;c=c.filter(h=>-1===i.indexOf(h)),0===c.length?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,c)}else this.headers.delete(s),this.normalizedNames.delete(s)}}setHeaderEntries(e,s){const r=(Array.isArray(s)?s:[s]).map(i=>i.toString()),a=e.toLowerCase();this.headers.set(a,r),this.maybeSetNormalizedName(e,a)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>e(this.normalizedNames.get(s),this.headers.get(s)))}}class we{encodeKey(e){return pe(e)}encodeValue(e){return pe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const Ee=/%(\d[a-f0-9])/gi,fe={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function pe(n){return encodeURIComponent(n).replace(Ee,(e,s)=>{var r;return null!==(r=fe[s])&&void 0!==r?r:e})}function K(n){return`${n}`}class R{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new we,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function te(n,e){const s=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(a=>{const i=a.indexOf("="),[c,h]=-1==i?[e.decodeKey(a),""]:[e.decodeKey(a.slice(0,i)),e.decodeValue(a.slice(i+1))],b=s.get(c)||[];b.push(h),s.set(c,b)}),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(s=>{const r=e.fromObject[s],a=Array.isArray(r)?r.map(K):[K(r)];this.map.set(s,a)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const s=this.map.get(e);return s?s[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,s){return this.clone({param:e,value:s,op:"a"})}appendAll(e){const s=[];return Object.keys(e).forEach(r=>{const a=e[r];Array.isArray(a)?a.forEach(i=>{s.push({param:r,value:i,op:"a"})}):s.push({param:r,value:a,op:"a"})}),this.clone(s)}set(e,s){return this.clone({param:e,value:s,op:"s"})}delete(e,s){return this.clone({param:e,value:s,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const s=this.encoder.encodeKey(e);return this.map.get(e).map(r=>s+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const s=new R({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(e),s}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const s=("a"===e.op?this.map.get(e.param):void 0)||[];s.push(K(e.value)),this.map.set(e.param,s);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let r=this.map.get(e.param)||[];const a=r.indexOf(K(e.value));-1!==a&&r.splice(a,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class De{constructor(){this.map=new Map}set(e,s){return this.map.set(e,s),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function ge(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ne(n){return typeof Blob<"u"&&n instanceof Blob}function ye(n){return typeof FormData<"u"&&n instanceof FormData}class z{constructor(e,s,r,a){let i;if(this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function de(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||a?(this.body=void 0!==r?r:null,i=a):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers||(this.headers=new _),this.context||(this.context=new De),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=s;else{const h=s.indexOf("?");this.urlWithParams=s+(-1===h?"?":h<s.length-1?"&":"")+c}}else this.params=new R,this.urlWithParams=s}serializeBody(){return null===this.body?null:ge(this.body)||ne(this.body)||ye(this.body)||function Pe(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof R?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||ye(this.body)?null:ne(this.body)?this.body.type||null:ge(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof R?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var s;const r=e.method||this.method,a=e.url||this.url,i=e.responseType||this.responseType,c=void 0!==e.body?e.body:this.body,h=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,b=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let y=e.headers||this.headers,A=e.params||this.params;const V=null!==(s=e.context)&&void 0!==s?s:this.context;return void 0!==e.setHeaders&&(y=Object.keys(e.setHeaders).reduce((E,M)=>E.set(M,e.setHeaders[M]),y)),e.setParams&&(A=Object.keys(e.setParams).reduce((E,M)=>E.set(M,e.setParams[M]),A)),new z(r,a,c,{params:A,headers:y,context:V,reportProgress:b,responseType:i,withCredentials:h})}}var j=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(j||{});class re{constructor(e,s=200,r="OK"){this.headers=e.headers||new _,this.status=void 0!==e.status?e.status:s,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class Q extends re{constructor(e={}){super(e),this.type=j.ResponseHeader}clone(e={}){return new Q({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class X extends re{constructor(e={}){super(e),this.type=j.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new X({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class se extends re{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${e.url||"(unknown url)"}`:`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function ve(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}let Ae=(()=>{var n;class e{constructor(r){this.handler=r}request(r,a,i={}){let c;if(r instanceof z)c=r;else{let y,A;y=i.headers instanceof _?i.headers:new _(i.headers),i.params&&(A=i.params instanceof R?i.params:new R({fromObject:i.params})),c=new z(r,a,void 0!==i.body?i.body:null,{headers:y,context:i.context,params:A,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}const h=(0,U.of)(c).pipe((0,xe.H)(y=>this.handler.handle(y)));if(r instanceof z||"events"===i.observe)return h;const b=h.pipe((0,Oe.p)(y=>y instanceof X));switch(i.observe||"body"){case"body":switch(c.responseType){case"arraybuffer":return b.pipe((0,q.T)(y=>{if(null!==y.body&&!(y.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return y.body}));case"blob":return b.pipe((0,q.T)(y=>{if(null!==y.body&&!(y.body instanceof Blob))throw new Error("Response is not a Blob.");return y.body}));case"text":return b.pipe((0,q.T)(y=>{if(null!==y.body&&"string"!=typeof y.body)throw new Error("Response is not a string.");return y.body}));default:return b.pipe((0,q.T)(y=>y.body))}case"response":return b;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(r,a={}){return this.request("DELETE",r,a)}get(r,a={}){return this.request("GET",r,a)}head(r,a={}){return this.request("HEAD",r,a)}jsonp(r,a){return this.request("JSONP",r,{params:(new R).append(a,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(r,a={}){return this.request("OPTIONS",r,a)}patch(r,a,i={}){return this.request("PATCH",r,ve(i,a))}post(r,a,i={}){return this.request("POST",r,ve(i,a))}put(r,a,i={}){return this.request("PUT",r,ve(i,a))}}return(n=e).\u0275fac=function(r){return new(r||n)(g.KVO($))},n.\u0275prov=g.jDH({token:n,factory:n.\u0275fac}),e})();function m(n,e){return e(n)}function P(n,e){return(s,r)=>e.intercept(s,{handle:a=>n(a,r)})}const N=new g.nKC(""),x=new g.nKC(""),W=new g.nKC(""),Y=new g.nKC("");function Ie(){let n=null;return(e,s)=>{var r;null===n&&(n=(null!==(r=(0,g.WQX)(N,{optional:!0}))&&void 0!==r?r:[]).reduceRight(P,m));const a=(0,g.WQX)(g.TgB),i=a.add();return n(e,s).pipe((0,be.j)(()=>a.remove(i)))}}let oe=(()=>{var n;class e extends ${constructor(r,a){super(),this.backend=r,this.injector=a,this.chain=null,this.pendingTasks=(0,g.WQX)(g.TgB);const i=(0,g.WQX)(Y,{optional:!0});this.backend=null!=i?i:r}handle(r){if(null===this.chain){const i=Array.from(new Set([...this.injector.get(x),...this.injector.get(W,[])]));this.chain=i.reduceRight((c,h)=>function I(n,e,s){return(r,a)=>(0,g.N4e)(s,()=>e(r,i=>n(i,a)))}(c,h,this.injector),m)}const a=this.pendingTasks.add();return this.chain(r,i=>this.backend.handle(i)).pipe((0,be.j)(()=>this.pendingTasks.remove(a)))}}return(n=e).\u0275fac=function(r){return new(r||n)(g.KVO(ee),g.KVO(g.uvJ))},n.\u0275prov=g.jDH({token:n,factory:n.\u0275fac}),e})();const lt=/^\)\]\}',?\n/;let Ke=(()=>{var n;class e{constructor(r){this.xhrFactory=r}handle(r){if("JSONP"===r.method)throw new g.wOt(-2800,!1);const a=this.xhrFactory;return(a.\u0275loadImpl?(0,He.H)(a.\u0275loadImpl()):(0,U.of)(null)).pipe((0,_e.n)(()=>new he.c(c=>{const h=a.build();if(h.open(r.method,r.urlWithParams),r.withCredentials&&(h.withCredentials=!0),r.headers.forEach((w,S)=>h.setRequestHeader(w,S.join(","))),r.headers.has("Accept")||h.setRequestHeader("Accept","application/json, text/plain, */*"),!r.headers.has("Content-Type")){const w=r.detectContentTypeHeader();null!==w&&h.setRequestHeader("Content-Type",w)}if(r.responseType){const w=r.responseType.toLowerCase();h.responseType="json"!==w?w:"text"}const b=r.serializeBody();let y=null;const A=()=>{if(null!==y)return y;const w=h.statusText||"OK",S=new _(h.getAllResponseHeaders()),J=function ut(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(h)||r.url;return y=new Q({headers:S,status:h.status,statusText:w,url:J}),y},V=()=>{let{headers:w,status:S,statusText:J,url:k}=A(),H=null;204!==S&&(H=typeof h.response>"u"?h.responseText:h.response),0===S&&(S=H?200:0);let Ce=S>=200&&S<300;if("json"===r.responseType&&"string"==typeof H){const Te=H;H=H.replace(lt,"");try{H=""!==H?JSON.parse(H):null}catch(Me){H=Te,Ce&&(Ce=!1,H={error:Me,text:H})}}Ce?(c.next(new X({body:H,headers:w,status:S,statusText:J,url:k||void 0})),c.complete()):c.error(new se({error:H,headers:w,status:S,statusText:J,url:k||void 0}))},E=w=>{const{url:S}=A(),J=new se({error:w,status:h.status||0,statusText:h.statusText||"Unknown Error",url:S||void 0});c.error(J)};let M=!1;const B=w=>{M||(c.next(A()),M=!0);let S={type:j.DownloadProgress,loaded:w.loaded};w.lengthComputable&&(S.total=w.total),"text"===r.responseType&&h.responseText&&(S.partialText=h.responseText),c.next(S)},G=w=>{let S={type:j.UploadProgress,loaded:w.loaded};w.lengthComputable&&(S.total=w.total),c.next(S)};return h.addEventListener("load",V),h.addEventListener("error",E),h.addEventListener("timeout",E),h.addEventListener("abort",E),r.reportProgress&&(h.addEventListener("progress",B),null!==b&&h.upload&&h.upload.addEventListener("progress",G)),h.send(b),c.next({type:j.Sent}),()=>{h.removeEventListener("error",E),h.removeEventListener("abort",E),h.removeEventListener("load",V),h.removeEventListener("timeout",E),r.reportProgress&&(h.removeEventListener("progress",B),null!==b&&h.upload&&h.upload.removeEventListener("progress",G)),h.readyState!==h.DONE&&h.abort()}})))}}return(n=e).\u0275fac=function(r){return new(r||n)(g.KVO(f.N0))},n.\u0275prov=g.jDH({token:n,factory:n.\u0275fac}),e})();const ke=new g.nKC("XSRF_ENABLED"),ze=new g.nKC("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),We=new g.nKC("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class Ge{}let ht=(()=>{var n;class e{constructor(r,a,i){this.doc=r,this.platform=a,this.cookieName=i,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const r=this.doc.cookie||"";return r!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,f._b)(r,this.cookieName),this.lastCookieString=r),this.lastToken}}return(n=e).\u0275fac=function(r){return new(r||n)(g.KVO(f.qQ),g.KVO(g.Agw),g.KVO(ze))},n.\u0275prov=g.jDH({token:n,factory:n.\u0275fac}),e})();function ft(n,e){const s=n.url.toLowerCase();if(!(0,g.WQX)(ke)||"GET"===n.method||"HEAD"===n.method||s.startsWith("http://")||s.startsWith("https://"))return e(n);const r=(0,g.WQX)(Ge).getToken(),a=(0,g.WQX)(We);return null!=r&&!n.headers.has(a)&&(n=n.clone({headers:n.headers.set(a,r)})),e(n)}var Z=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(Z||{});function ae(n,e){return{\u0275kind:n,\u0275providers:e}}function pt(...n){const e=[Ae,Ke,oe,{provide:$,useExisting:oe},{provide:ee,useExisting:Ke},{provide:x,useValue:ft,multi:!0},{provide:ke,useValue:!0},{provide:Ge,useClass:ht}];for(const s of n)e.push(...s.\u0275providers);return(0,g.EmA)(e)}const $e=new g.nKC("LEGACY_INTERCEPTOR_FN");let yt=(()=>{var n;class e{}return(n=e).\u0275fac=function(r){return new(r||n)},n.\u0275mod=g.$C({type:n}),n.\u0275inj=g.G2t({providers:[pt(ae(Z.LegacyInterceptors,[{provide:$e,useFactory:Ie},{provide:x,useExisting:$e,multi:!0}]))]}),e})();var Re=C(4842),Fe=C(9842);class wt{constructor(e,s="/assets/i18n/",r=".json"){(0,Fe.A)(this,"http",void 0),(0,Fe.A)(this,"prefix",void 0),(0,Fe.A)(this,"suffix",void 0),this.http=e,this.prefix=s,this.suffix=r}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}}var le=C(119),Et=C(5312);le.config({driver:[le.INDEXEDDB,le.LOCALSTORAGE,le.WEBSQL],name:"_config",version:1});const St={create:(n=(0,O.A)(function*(){return le}),function(){return n.apply(this,arguments)}),get:function(){var n=(0,O.A)(function*(e){return le.getItem(e)});return function(s){return n.apply(this,arguments)}}(),set:function(){var n=(0,O.A)(function*(e,s){return le.setItem(e,s)});return function(s,r){return n.apply(this,arguments)}}()};var n;let nt=(()=>{var n;class e{constructor(r){r.addLangs(["vi","en"]),(0,O.A)(function*(){var i=yield St.get("lang");r.use(i&&null!=i&&i.match(/en|vi/)?i:"vi")})()}}return(n=e).\u0275fac=function(r){return new(r||n)(g.KVO(Re.c$))},n.\u0275mod=g.$C({type:n}),n.\u0275inj=g.G2t({imports:[yt,Re.h.forRoot({loader:{provide:Re.Wr,useFactory:Dt,deps:[Ae]}}),Re.h]}),e})();function Dt(n){return new wt(n,"./assets/i18n/",".json?v="+Et.c.version)}let Pt=(()=>{var n;class e{}return(n=e).\u0275fac=function(r){return new(r||n)},n.\u0275mod=g.$C({type:n}),n.\u0275inj=g.G2t({imports:[f.MD,T.YN,F.bv,D,nt,D,nt]}),e})()},4842:(Je,ce,C)=>{C.d(ce,{Wr:()=>te,h:()=>Ae,D9:()=>ve,c$:()=>X});var f=C(9842),T=C(4438),F=C(7673),g=C(4402),L=C(7468),D=C(8793),O=C(9030),U=C(6697),he=C(1413),He=C(6129);class xe extends he.B{constructor(u=1/0,v=1/0,t=He.U){super(),this._bufferSize=u,this._windowTime=v,this._timestampProvider=t,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=v===1/0,this._bufferSize=Math.max(1,u),this._windowTime=Math.max(1,v)}next(u){const{isStopped:v,_buffer:t,_infiniteTimeWindow:o,_timestampProvider:l,_windowTime:p}=this;v||(t.push(u),!o&&t.push(l.now()+p)),this._trimBuffer(),super.next(u)}_subscribe(u){this._throwIfClosed(),this._trimBuffer();const v=this._innerSubscribe(u),{_infiniteTimeWindow:t,_buffer:o}=this,l=o.slice();for(let p=0;p<l.length&&!u.closed;p+=t?1:2)u.next(l[p]);return this._checkFinalizedStatuses(u),v}_trimBuffer(){const{_bufferSize:u,_timestampProvider:v,_buffer:t,_infiniteTimeWindow:o}=this,l=(o?1:2)*u;if(u<1/0&&l<t.length&&t.splice(0,t.length-l),!o){const p=v.now();let m=0;for(let P=1;P<t.length&&t[P]<=p;P+=2)m=P;m&&t.splice(0,m+1)}}}var Oe=C(8750),q=C(7707),be=C(9974);function $(d,u,...v){if(!0===u)return void d();if(!1===u)return;const t=new q.Ms({next:()=>{t.unsubscribe(),d()}});return u(...v).subscribe(t)}function ee(d,u,v){let t,o=!1;return d&&"object"==typeof d?({bufferSize:t=1/0,windowTime:u=1/0,refCount:o=!1,scheduler:v}=d):t=null!=d?d:1/0,function _e(d={}){const{connector:u=(()=>new he.B),resetOnError:v=!0,resetOnComplete:t=!0,resetOnRefCountZero:o=!0}=d;return l=>{let p,m,P,I=0,N=!1,x=!1;const W=()=>{null==m||m.unsubscribe(),m=void 0},Y=()=>{W(),p=P=void 0,N=x=!1},Ie=()=>{const ie=p;Y(),null==ie||ie.unsubscribe()};return(0,be.N)((ie,Ne)=>{I++,!x&&!N&&W();const oe=P=null!=P?P:u();Ne.add(()=>{I--,0===I&&!x&&!N&&(m=$(Ie,o))}),oe.subscribe(Ne),!p&&I>0&&(p=new q.Ms({next:me=>oe.next(me),error:me=>{x=!0,W(),m=$(Y,v,me),oe.error(me)},complete:()=>{N=!0,W(),m=$(Y,t),oe.complete()}}),(0,Oe.Tg)(ie).subscribe(p))})(l)}}({connector:()=>new xe(t,u,v),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:o})}var _=C(6354),Ue=C(274),we=C(5558);class te{}let Ee=(()=>{var d;class u extends te{getTranslation(t){return(0,F.of)({})}}return d=u,(0,f.A)(u,"\u0275fac",(()=>{let v;return function(o){return(v||(v=T.xGo(d)))(o||d)}})()),(0,f.A)(u,"\u0275prov",T.jDH({token:d,factory:d.\u0275fac})),u})();class fe{}let pe=(()=>{var d;class u{handle(t){return t.key}}return d=u,(0,f.A)(u,"\u0275fac",function(t){return new(t||d)}),(0,f.A)(u,"\u0275prov",T.jDH({token:d,factory:d.\u0275fac})),u})();function K(d,u){if(d===u)return!0;if(null===d||null===u)return!1;if(d!=d&&u!=u)return!0;let o,l,p,v=typeof d;if(v==typeof u&&"object"==v){if(!Array.isArray(d)){if(Array.isArray(u))return!1;for(l in p=Object.create(null),d){if(!K(d[l],u[l]))return!1;p[l]=!0}for(l in u)if(!(l in p)&&typeof u[l]<"u")return!1;return!0}if(!Array.isArray(u))return!1;if((o=d.length)==u.length){for(l=0;l<o;l++)if(!K(d[l],u[l]))return!1;return!0}}return!1}function R(d){return typeof d<"u"&&null!==d}function Se(d){return d&&"object"==typeof d&&!Array.isArray(d)}function De(d,u){let v=Object.assign({},d);return Se(d)&&Se(u)&&Object.keys(u).forEach(t=>{Se(u[t])?t in d?v[t]=De(d[t],u[t]):Object.assign(v,{[t]:u[t]}):Object.assign(v,{[t]:u[t]})}),v}class de{}let ge=(()=>{var d;class u extends de{constructor(...t){super(...t),(0,f.A)(this,"templateMatcher",/{{\s?([^{}\s]*)\s?}}/g)}interpolate(t,o){let l;return l="string"==typeof t?this.interpolateString(t,o):"function"==typeof t?this.interpolateFunction(t,o):t,l}getValue(t,o){let l="string"==typeof o?o.split("."):[o];o="";do{o+=l.shift(),!R(t)||!R(t[o])||"object"!=typeof t[o]&&l.length?l.length?o+=".":t=void 0:(t=t[o],o="")}while(l.length);return t}interpolateFunction(t,o){return t(o)}interpolateString(t,o){return o?t.replace(this.templateMatcher,(l,p)=>{let m=this.getValue(o,p);return R(m)?m:l}):t}}return d=u,(0,f.A)(u,"\u0275fac",(()=>{let v;return function(o){return(v||(v=T.xGo(d)))(o||d)}})()),(0,f.A)(u,"\u0275prov",T.jDH({token:d,factory:d.\u0275fac})),u})();class ne{}let ye=(()=>{var d;class u extends ne{compile(t,o){return t}compileTranslations(t,o){return t}}return d=u,(0,f.A)(u,"\u0275fac",(()=>{let v;return function(o){return(v||(v=T.xGo(d)))(o||d)}})()),(0,f.A)(u,"\u0275prov",T.jDH({token:d,factory:d.\u0275fac})),u})();class Pe{constructor(){(0,f.A)(this,"defaultLang",void 0),(0,f.A)(this,"currentLang",this.defaultLang),(0,f.A)(this,"translations",{}),(0,f.A)(this,"langs",[]),(0,f.A)(this,"onTranslationChange",new T.bkB),(0,f.A)(this,"onLangChange",new T.bkB),(0,f.A)(this,"onDefaultLangChange",new T.bkB)}}const z=new T.nKC("USE_STORE"),j=new T.nKC("USE_DEFAULT_LANG"),re=new T.nKC("DEFAULT_LANGUAGE"),Q=new T.nKC("USE_EXTEND");let X=(()=>{var d;class u{get onTranslationChange(){return this.isolate?this._onTranslationChange:this.store.onTranslationChange}get onLangChange(){return this.isolate?this._onLangChange:this.store.onLangChange}get onDefaultLangChange(){return this.isolate?this._onDefaultLangChange:this.store.onDefaultLangChange}get defaultLang(){return this.isolate?this._defaultLang:this.store.defaultLang}set defaultLang(t){this.isolate?this._defaultLang=t:this.store.defaultLang=t}get currentLang(){return this.isolate?this._currentLang:this.store.currentLang}set currentLang(t){this.isolate?this._currentLang=t:this.store.currentLang=t}get langs(){return this.isolate?this._langs:this.store.langs}set langs(t){this.isolate?this._langs=t:this.store.langs=t}get translations(){return this.isolate?this._translations:this.store.translations}set translations(t){this.isolate?this._translations=t:this.store.translations=t}constructor(t,o,l,p,m,P=!0,I=!1,N=!1,x){(0,f.A)(this,"store",void 0),(0,f.A)(this,"currentLoader",void 0),(0,f.A)(this,"compiler",void 0),(0,f.A)(this,"parser",void 0),(0,f.A)(this,"missingTranslationHandler",void 0),(0,f.A)(this,"useDefaultLang",void 0),(0,f.A)(this,"isolate",void 0),(0,f.A)(this,"extend",void 0),(0,f.A)(this,"loadingTranslations",void 0),(0,f.A)(this,"pending",!1),(0,f.A)(this,"_onTranslationChange",new T.bkB),(0,f.A)(this,"_onLangChange",new T.bkB),(0,f.A)(this,"_onDefaultLangChange",new T.bkB),(0,f.A)(this,"_defaultLang",void 0),(0,f.A)(this,"_currentLang",void 0),(0,f.A)(this,"_langs",[]),(0,f.A)(this,"_translations",{}),(0,f.A)(this,"_translationRequests",{}),this.store=t,this.currentLoader=o,this.compiler=l,this.parser=p,this.missingTranslationHandler=m,this.useDefaultLang=P,this.isolate=I,this.extend=N,x&&this.setDefaultLang(x)}setDefaultLang(t){if(t===this.defaultLang)return;let o=this.retrieveTranslations(t);typeof o<"u"?(null==this.defaultLang&&(this.defaultLang=t),o.pipe((0,U.s)(1)).subscribe(l=>{this.changeDefaultLang(t)})):this.changeDefaultLang(t)}getDefaultLang(){return this.defaultLang}use(t){if(t===this.currentLang)return(0,F.of)(this.translations[t]);let o=this.retrieveTranslations(t);return typeof o<"u"?(this.currentLang||(this.currentLang=t),o.pipe((0,U.s)(1)).subscribe(l=>{this.changeLang(t)}),o):(this.changeLang(t),(0,F.of)(this.translations[t]))}retrieveTranslations(t){let o;return(typeof this.translations[t]>"u"||this.extend)&&(this._translationRequests[t]=this._translationRequests[t]||this.getTranslation(t),o=this._translationRequests[t]),o}getTranslation(t){this.pending=!0;const o=this.currentLoader.getTranslation(t).pipe(ee(1),(0,U.s)(1));return this.loadingTranslations=o.pipe((0,_.T)(l=>this.compiler.compileTranslations(l,t)),ee(1),(0,U.s)(1)),this.loadingTranslations.subscribe({next:l=>{this.translations[t]=this.extend&&this.translations[t]?{...l,...this.translations[t]}:l,this.updateLangs(),this.pending=!1},error:l=>{this.pending=!1}}),o}setTranslation(t,o,l=!1){o=this.compiler.compileTranslations(o,t),this.translations[t]=(l||this.extend)&&this.translations[t]?De(this.translations[t],o):o,this.updateLangs(),this.onTranslationChange.emit({lang:t,translations:this.translations[t]})}getLangs(){return this.langs}addLangs(t){t.forEach(o=>{-1===this.langs.indexOf(o)&&this.langs.push(o)})}updateLangs(){this.addLangs(Object.keys(this.translations))}getParsedResult(t,o,l){let p;if(o instanceof Array){let m={},P=!1;for(let I of o)m[I]=this.getParsedResult(t,I,l),(0,g.A)(m[I])&&(P=!0);if(P){const I=o.map(N=>(0,g.A)(m[N])?m[N]:(0,F.of)(m[N]));return(0,L.p)(I).pipe((0,_.T)(N=>{let x={};return N.forEach((W,Y)=>{x[o[Y]]=W}),x}))}return m}if(t&&(p=this.parser.interpolate(this.parser.getValue(t,o),l)),typeof p>"u"&&null!=this.defaultLang&&this.defaultLang!==this.currentLang&&this.useDefaultLang&&(p=this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang],o),l)),typeof p>"u"){let m={key:o,translateService:this};typeof l<"u"&&(m.interpolateParams=l),p=this.missingTranslationHandler.handle(m)}return typeof p<"u"?p:o}get(t,o){if(!R(t)||!t.length)throw new Error('Parameter "key" required');if(this.pending)return this.loadingTranslations.pipe((0,Ue.H)(l=>(l=this.getParsedResult(l,t,o),(0,g.A)(l)?l:(0,F.of)(l))));{let l=this.getParsedResult(this.translations[this.currentLang],t,o);return(0,g.A)(l)?l:(0,F.of)(l)}}getStreamOnTranslationChange(t,o){if(!R(t)||!t.length)throw new Error('Parameter "key" required');return(0,D.x)((0,O.v)(()=>this.get(t,o)),this.onTranslationChange.pipe((0,we.n)(l=>{const p=this.getParsedResult(l.translations,t,o);return"function"==typeof p.subscribe?p:(0,F.of)(p)})))}stream(t,o){if(!R(t)||!t.length)throw new Error('Parameter "key" required');return(0,D.x)((0,O.v)(()=>this.get(t,o)),this.onLangChange.pipe((0,we.n)(l=>{const p=this.getParsedResult(l.translations,t,o);return(0,g.A)(p)?p:(0,F.of)(p)})))}instant(t,o){if(!R(t)||!t.length)throw new Error('Parameter "key" required');let l=this.getParsedResult(this.translations[this.currentLang],t,o);if((0,g.A)(l)){if(t instanceof Array){let p={};return t.forEach((m,P)=>{p[t[P]]=t[P]}),p}return t}return l}set(t,o,l=this.currentLang){this.translations[l][t]=this.compiler.compile(o,l),this.updateLangs(),this.onTranslationChange.emit({lang:l,translations:this.translations[l]})}changeLang(t){this.currentLang=t,this.onLangChange.emit({lang:t,translations:this.translations[t]}),null==this.defaultLang&&this.changeDefaultLang(t)}changeDefaultLang(t){this.defaultLang=t,this.onDefaultLangChange.emit({lang:t,translations:this.translations[t]})}reloadLang(t){return this.resetLang(t),this.getTranslation(t)}resetLang(t){this._translationRequests[t]=void 0,this.translations[t]=void 0}getBrowserLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,typeof t>"u"?void 0:(-1!==t.indexOf("-")&&(t=t.split("-")[0]),-1!==t.indexOf("_")&&(t=t.split("_")[0]),t)}getBrowserCultureLang(){if(typeof window>"u"||typeof window.navigator>"u")return;let t=window.navigator.languages?window.navigator.languages[0]:null;return t=t||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage,t}}return d=u,(0,f.A)(u,"\u0275fac",function(t){return new(t||d)(T.KVO(Pe),T.KVO(te),T.KVO(ne),T.KVO(de),T.KVO(fe),T.KVO(j),T.KVO(z),T.KVO(Q),T.KVO(re))}),(0,f.A)(u,"\u0275prov",T.jDH({token:d,factory:d.\u0275fac})),u})(),ve=(()=>{var d;class u{constructor(t,o){(0,f.A)(this,"translate",void 0),(0,f.A)(this,"_ref",void 0),(0,f.A)(this,"value",""),(0,f.A)(this,"lastKey",null),(0,f.A)(this,"lastParams",[]),(0,f.A)(this,"onTranslationChange",void 0),(0,f.A)(this,"onLangChange",void 0),(0,f.A)(this,"onDefaultLangChange",void 0),this.translate=t,this._ref=o}updateValue(t,o,l){let p=m=>{this.value=void 0!==m?m:t,this.lastKey=t,this._ref.markForCheck()};if(l){let m=this.translate.getParsedResult(l,t,o);(0,g.A)(m.subscribe)?m.subscribe(p):p(m)}this.translate.get(t,o).subscribe(p)}transform(t,...o){if(!t||!t.length)return t;if(K(t,this.lastKey)&&K(o,this.lastParams))return this.value;let l;if(R(o[0])&&o.length)if("string"==typeof o[0]&&o[0].length){let p=o[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g,'"$2":').replace(/:(\s)?(\')(.*?)(\')/g,':"$3"');try{l=JSON.parse(p)}catch{throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${o[0]}`)}}else"object"==typeof o[0]&&!Array.isArray(o[0])&&(l=o[0]);return this.lastKey=t,this.lastParams=o,this.updateValue(t,l),this._dispose(),this.onTranslationChange||(this.onTranslationChange=this.translate.onTranslationChange.subscribe(p=>{this.lastKey&&p.lang===this.translate.currentLang&&(this.lastKey=null,this.updateValue(t,l,p.translations))})),this.onLangChange||(this.onLangChange=this.translate.onLangChange.subscribe(p=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,l,p.translations))})),this.onDefaultLangChange||(this.onDefaultLangChange=this.translate.onDefaultLangChange.subscribe(()=>{this.lastKey&&(this.lastKey=null,this.updateValue(t,l))})),this.value}_dispose(){typeof this.onTranslationChange<"u"&&(this.onTranslationChange.unsubscribe(),this.onTranslationChange=void 0),typeof this.onLangChange<"u"&&(this.onLangChange.unsubscribe(),this.onLangChange=void 0),typeof this.onDefaultLangChange<"u"&&(this.onDefaultLangChange.unsubscribe(),this.onDefaultLangChange=void 0)}ngOnDestroy(){this._dispose()}}return d=u,(0,f.A)(u,"\u0275fac",function(t){return new(t||d)(T.rXU(X,16),T.rXU(T.gRc,16))}),(0,f.A)(u,"\u0275pipe",T.EJ8({name:"translate",type:d,pure:!1})),(0,f.A)(u,"\u0275prov",T.jDH({token:d,factory:d.\u0275fac})),u})(),Ae=(()=>{var d;class u{static forRoot(t={}){return{ngModule:u,providers:[t.loader||{provide:te,useClass:Ee},t.compiler||{provide:ne,useClass:ye},t.parser||{provide:de,useClass:ge},t.missingTranslationHandler||{provide:fe,useClass:pe},Pe,{provide:z,useValue:t.isolate},{provide:j,useValue:t.useDefaultLang},{provide:Q,useValue:t.extend},{provide:re,useValue:t.defaultLanguage},X]}}static forChild(t={}){return{ngModule:u,providers:[t.loader||{provide:te,useClass:Ee},t.compiler||{provide:ne,useClass:ye},t.parser||{provide:de,useClass:ge},t.missingTranslationHandler||{provide:fe,useClass:pe},{provide:z,useValue:t.isolate},{provide:j,useValue:t.useDefaultLang},{provide:Q,useValue:t.extend},{provide:re,useValue:t.defaultLanguage},X]}}}return d=u,(0,f.A)(u,"\u0275fac",function(t){return new(t||d)}),(0,f.A)(u,"\u0275mod",T.$C({type:d})),(0,f.A)(u,"\u0275inj",T.G2t({})),u})()},9842:(Je,ce,C)=>{function f(L){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(D){return typeof D}:function(D){return D&&"function"==typeof Symbol&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D})(L)}function g(L,D,O){return(D=function F(L){var D=function T(L,D){if("object"!=f(L)||!L)return L;var O=L[Symbol.toPrimitive];if(void 0!==O){var U=O.call(L,D||"default");if("object"!=f(U))return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===D?String:Number)(L)}(L,"string");return"symbol"==f(D)?D:String(D)}(D))in L?Object.defineProperty(L,D,{value:O,enumerable:!0,configurable:!0,writable:!0}):L[D]=O,L}C.d(ce,{A:()=>g})}}]);