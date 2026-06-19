(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function cx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zh={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv;function AM(){if(Fv)return Yo;Fv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var h in o)h!=="key"&&(u[h]=o[h])}else u=o;return o=u.ref,{$$typeof:r,type:a,key:c,ref:o!==void 0?o:null,props:u}}return Yo.Fragment=t,Yo.jsx=n,Yo.jsxs=n,Yo}var Bv;function RM(){return Bv||(Bv=1,zh.exports=AM()),zh.exports}var Vn=RM(),Fh={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function CM(){if(Iv)return me;Iv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function x(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function y(P,K,vt){this.props=P,this.context=K,this.refs=S,this.updater=vt||E}y.prototype.isReactComponent={},y.prototype.setState=function(P,K){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,K,"setState")},y.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function C(){}C.prototype=y.prototype;function D(P,K,vt){this.props=P,this.context=K,this.refs=S,this.updater=vt||E}var N=D.prototype=new C;N.constructor=D,A(N,y.prototype),N.isPureReactComponent=!0;var G=Array.isArray;function O(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function z(P,K,vt){var Ct=vt.ref;return{$$typeof:r,type:P,key:K,ref:Ct!==void 0?Ct:null,props:vt}}function q(P,K){return z(P.type,K,P.props)}function I(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function J(P){var K={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(vt){return K[vt]})}var ot=/\/+/g;function ft(P,K){return typeof P=="object"&&P!==null&&P.key!=null?J(""+P.key):K.toString(36)}function k(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(O,O):(P.status="pending",P.then(function(K){P.status==="pending"&&(P.status="fulfilled",P.value=K)},function(K){P.status==="pending"&&(P.status="rejected",P.reason=K)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,K,vt,Ct,Ut){var at=typeof P;(at==="undefined"||at==="boolean")&&(P=null);var Mt=!1;if(P===null)Mt=!0;else switch(at){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(P.$$typeof){case r:case t:Mt=!0;break;case v:return Mt=P._init,L(Mt(P._payload),K,vt,Ct,Ut)}}if(Mt)return Ut=Ut(P),Mt=Ct===""?"."+ft(P,0):Ct,G(Ut)?(vt="",Mt!=null&&(vt=Mt.replace(ot,"$&/")+"/"),L(Ut,K,vt,"",function(ne){return ne})):Ut!=null&&(I(Ut)&&(Ut=q(Ut,vt+(Ut.key==null||P&&P.key===Ut.key?"":(""+Ut.key).replace(ot,"$&/")+"/")+Mt)),K.push(Ut)),1;Mt=0;var bt=Ct===""?".":Ct+":";if(G(P))for(var Ot=0;Ot<P.length;Ot++)Ct=P[Ot],at=bt+ft(Ct,Ot),Mt+=L(Ct,K,vt,at,Ut);else if(Ot=x(P),typeof Ot=="function")for(P=Ot.call(P),Ot=0;!(Ct=P.next()).done;)Ct=Ct.value,at=bt+ft(Ct,Ot++),Mt+=L(Ct,K,vt,at,Ut);else if(at==="object"){if(typeof P.then=="function")return L(k(P),K,vt,Ct,Ut);throw K=String(P),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function B(P,K,vt){if(P==null)return P;var Ct=[],Ut=0;return L(P,Ct,"","",function(at){return K.call(vt,at,Ut++)}),Ct}function it(P){if(P._status===-1){var K=P._result;K=K(),K.then(function(vt){(P._status===0||P._status===-1)&&(P._status=1,P._result=vt)},function(vt){(P._status===0||P._status===-1)&&(P._status=2,P._result=vt)}),P._status===-1&&(P._status=0,P._result=K)}if(P._status===1)return P._result.default;throw P._result}var dt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},yt={map:B,forEach:function(P,K,vt){B(P,function(){K.apply(this,arguments)},vt)},count:function(P){var K=0;return B(P,function(){K++}),K},toArray:function(P){return B(P,function(K){return K})||[]},only:function(P){if(!I(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return me.Activity=_,me.Children=yt,me.Component=y,me.Fragment=n,me.Profiler=o,me.PureComponent=D,me.StrictMode=a,me.Suspense=p,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,me.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},me.cache=function(P){return function(){return P.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(P,K,vt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Ct=A({},P.props),Ut=P.key;if(K!=null)for(at in K.key!==void 0&&(Ut=""+K.key),K)!T.call(K,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&K.ref===void 0||(Ct[at]=K[at]);var at=arguments.length-2;if(at===1)Ct.children=vt;else if(1<at){for(var Mt=Array(at),bt=0;bt<at;bt++)Mt[bt]=arguments[bt+2];Ct.children=Mt}return z(P.type,Ut,Ct)},me.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},me.createElement=function(P,K,vt){var Ct,Ut={},at=null;if(K!=null)for(Ct in K.key!==void 0&&(at=""+K.key),K)T.call(K,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(Ut[Ct]=K[Ct]);var Mt=arguments.length-2;if(Mt===1)Ut.children=vt;else if(1<Mt){for(var bt=Array(Mt),Ot=0;Ot<Mt;Ot++)bt[Ot]=arguments[Ot+2];Ut.children=bt}if(P&&P.defaultProps)for(Ct in Mt=P.defaultProps,Mt)Ut[Ct]===void 0&&(Ut[Ct]=Mt[Ct]);return z(P,at,Ut)},me.createRef=function(){return{current:null}},me.forwardRef=function(P){return{$$typeof:h,render:P}},me.isValidElement=I,me.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:it}},me.memo=function(P,K){return{$$typeof:m,type:P,compare:K===void 0?null:K}},me.startTransition=function(P){var K=F.T,vt={};F.T=vt;try{var Ct=P(),Ut=F.S;Ut!==null&&Ut(vt,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(O,dt)}catch(at){dt(at)}finally{K!==null&&vt.types!==null&&(K.types=vt.types),F.T=K}},me.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},me.use=function(P){return F.H.use(P)},me.useActionState=function(P,K,vt){return F.H.useActionState(P,K,vt)},me.useCallback=function(P,K){return F.H.useCallback(P,K)},me.useContext=function(P){return F.H.useContext(P)},me.useDebugValue=function(){},me.useDeferredValue=function(P,K){return F.H.useDeferredValue(P,K)},me.useEffect=function(P,K){return F.H.useEffect(P,K)},me.useEffectEvent=function(P){return F.H.useEffectEvent(P)},me.useId=function(){return F.H.useId()},me.useImperativeHandle=function(P,K,vt){return F.H.useImperativeHandle(P,K,vt)},me.useInsertionEffect=function(P,K){return F.H.useInsertionEffect(P,K)},me.useLayoutEffect=function(P,K){return F.H.useLayoutEffect(P,K)},me.useMemo=function(P,K){return F.H.useMemo(P,K)},me.useOptimistic=function(P,K){return F.H.useOptimistic(P,K)},me.useReducer=function(P,K,vt){return F.H.useReducer(P,K,vt)},me.useRef=function(P){return F.H.useRef(P)},me.useState=function(P){return F.H.useState(P)},me.useSyncExternalStore=function(P,K,vt){return F.H.useSyncExternalStore(P,K,vt)},me.useTransition=function(){return F.H.useTransition()},me.version="19.2.7",me}var Hv;function wp(){return Hv||(Hv=1,Fh.exports=CM()),Fh.exports}var ct=wp();const wM=cx(ct);var Bh={exports:{}},Zo={},Ih={exports:{}},Hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function DM(){return Gv||(Gv=1,(function(r){function t(L,B){var it=L.length;L.push(B);t:for(;0<it;){var dt=it-1>>>1,yt=L[dt];if(0<o(yt,B))L[dt]=B,L[it]=yt,it=dt;else break t}}function n(L){return L.length===0?null:L[0]}function a(L){if(L.length===0)return null;var B=L[0],it=L.pop();if(it!==B){L[0]=it;t:for(var dt=0,yt=L.length,P=yt>>>1;dt<P;){var K=2*(dt+1)-1,vt=L[K],Ct=K+1,Ut=L[Ct];if(0>o(vt,it))Ct<yt&&0>o(Ut,vt)?(L[dt]=Ut,L[Ct]=it,dt=Ct):(L[dt]=vt,L[K]=it,dt=K);else if(Ct<yt&&0>o(Ut,it))L[dt]=Ut,L[Ct]=it,dt=Ct;else break t}}return B}function o(L,B){var it=L.sortIndex-B.sortIndex;return it!==0?it:L.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();r.unstable_now=function(){return c.now()-h}}var p=[],m=[],v=1,_=null,g=3,x=!1,E=!1,A=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var B=n(m);B!==null;){if(B.callback===null)a(m);else if(B.startTime<=L)a(m),B.sortIndex=B.expirationTime,t(p,B);else break;B=n(m)}}function G(L){if(A=!1,N(L),!E)if(n(p)!==null)E=!0,O||(O=!0,J());else{var B=n(m);B!==null&&k(G,B.startTime-L)}}var O=!1,F=-1,T=5,z=-1;function q(){return S?!0:!(r.unstable_now()-z<T)}function I(){if(S=!1,O){var L=r.unstable_now();z=L;var B=!0;try{t:{E=!1,A&&(A=!1,C(F),F=-1),x=!0;var it=g;try{e:{for(N(L),_=n(p);_!==null&&!(_.expirationTime>L&&q());){var dt=_.callback;if(typeof dt=="function"){_.callback=null,g=_.priorityLevel;var yt=dt(_.expirationTime<=L);if(L=r.unstable_now(),typeof yt=="function"){_.callback=yt,N(L),B=!0;break e}_===n(p)&&a(p),N(L)}else a(p);_=n(p)}if(_!==null)B=!0;else{var P=n(m);P!==null&&k(G,P.startTime-L),B=!1}}break t}finally{_=null,g=it,x=!1}B=void 0}}finally{B?J():O=!1}}}var J;if(typeof D=="function")J=function(){D(I)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ft=ot.port2;ot.port1.onmessage=I,J=function(){ft.postMessage(null)}}else J=function(){y(I,0)};function k(L,B){F=y(function(){L(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(L){L.callback=null},r.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(L){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var it=g;g=B;try{return L()}finally{g=it}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var it=g;g=L;try{return B()}finally{g=it}},r.unstable_scheduleCallback=function(L,B,it){var dt=r.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?dt+it:dt):it=dt,L){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=it+yt,L={id:v++,callback:B,priorityLevel:L,startTime:it,expirationTime:yt,sortIndex:-1},it>dt?(L.sortIndex=it,t(m,L),n(p)===null&&L===n(m)&&(A?(C(F),F=-1):A=!0,k(G,it-dt))):(L.sortIndex=yt,t(p,L),E||x||(E=!0,O||(O=!0,J()))),L},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(L){var B=g;return function(){var it=g;g=B;try{return L.apply(this,arguments)}finally{g=it}}}})(Hh)),Hh}var Vv;function UM(){return Vv||(Vv=1,Ih.exports=DM()),Ih.exports}var Gh={exports:{}},On={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function LM(){if(kv)return On;kv=1;var r=wp();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,m,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:m,implementation:v}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,On.createPortal=function(p,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,v)},On.flushSync=function(p){var m=c.T,v=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=m,a.p=v,a.d.f()}},On.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},On.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},On.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var v=m.as,_=h(v,m.crossOrigin),g=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:x}):v==="script"&&a.d.X(p,{crossOrigin:_,integrity:g,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},On.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=h(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},On.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,_=h(v,m.crossOrigin);a.d.L(p,v,{crossOrigin:_,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},On.preloadModule=function(p,m){if(typeof p=="string")if(m){var v=h(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},On.requestFormReset=function(p){a.d.r(p)},On.unstable_batchedUpdates=function(p,m){return p(m)},On.useFormState=function(p,m,v){return c.H.useFormState(p,m,v)},On.useFormStatus=function(){return c.H.useHostTransitionStatus()},On.version="19.2.7",On}var Xv;function NM(){if(Xv)return Gh.exports;Xv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Gh.exports=LM(),Gh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function OM(){if(Wv)return Zo;Wv=1;var r=UM(),t=wp(),n=NM();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function m(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,l=i;;){var f=s.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===s)return p(f),e;if(d===l)return p(f),i;d=d.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=d;else{for(var M=!1,w=f.child;w;){if(w===s){M=!0,s=f,l=d;break}if(w===l){M=!0,l=f,s=d;break}w=w.sibling}if(!M){for(w=d.child;w;){if(w===s){M=!0,s=d,l=f;break}if(w===l){M=!0,l=d,s=f;break}w=w.sibling}if(!M)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function v(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=v(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case y:return"Profiler";case S:return"StrictMode";case G:return"Suspense";case O:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case C:return(e._context.displayName||"Context")+".Consumer";case N:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:ft(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return ft(e(i))}catch{}}return null}var k=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},dt=[],yt=-1;function P(e){return{current:e}}function K(e){0>yt||(e.current=dt[yt],dt[yt]=null,yt--)}function vt(e,i){yt++,dt[yt]=e.current,e.current=i}var Ct=P(null),Ut=P(null),at=P(null),Mt=P(null);function bt(e,i){switch(vt(at,i),vt(Ut,e),vt(Ct,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?sv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=sv(i),e=ov(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(Ct),vt(Ct,e)}function Ot(){K(Ct),K(Ut),K(at)}function ne(e){e.memoizedState!==null&&vt(Mt,e);var i=Ct.current,s=ov(i,e.type);i!==s&&(vt(Ut,e),vt(Ct,s))}function ie(e){Ut.current===e&&(K(Ct),K(Ut)),Mt.current===e&&(K(Mt),ko._currentValue=it)}var Se,Vt;function pt(e){if(Se===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Se=i&&i[1]||"",Vt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Se+e+Vt}var wt=!1;function Et(e,i){if(!e||wt)return"";wt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(lt){var st=lt}Reflect.construct(e,[],St)}else{try{St.call()}catch(lt){st=lt}e.call(St.prototype)}}else{try{throw Error()}catch(lt){st=lt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),M=d[0],w=d[1];if(M&&w){var V=M.split(`
`),tt=w.split(`
`);for(f=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;f<tt.length&&!tt[f].includes("DetermineComponentFrameRoot");)f++;if(l===V.length||f===tt.length)for(l=V.length-1,f=tt.length-1;1<=l&&0<=f&&V[l]!==tt[f];)f--;for(;1<=l&&0<=f;l--,f--)if(V[l]!==tt[f]){if(l!==1||f!==1)do if(l--,f--,0>f||V[l]!==tt[f]){var mt=`
`+V[l].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=l&&0<=f);break}}}finally{wt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?pt(s):""}function Wt(e,i){switch(e.tag){case 26:case 27:case 5:return pt(e.type);case 16:return pt("Lazy");case 13:return e.child!==i&&i!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return Et(e.type,!1);case 11:return Et(e.type.render,!1);case 1:return Et(e.type,!0);case 31:return pt("Activity");default:return""}}function Bt(e){try{var i="",s=null;do i+=Wt(e,s),s=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var le=Object.prototype.hasOwnProperty,H=r.unstable_scheduleCallback,ue=r.unstable_cancelCallback,$t=r.unstable_shouldYield,ce=r.unstable_requestPaint,At=r.unstable_now,Le=r.unstable_getCurrentPriorityLevel,U=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,Q=r.unstable_NormalPriority,_t=r.unstable_LowPriority,Tt=r.unstable_IdlePriority,Lt=r.log,Pt=r.unstable_setDisableYieldValue,ut=null,ht=null;function It(e){if(typeof Lt=="function"&&Pt(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(ut,e)}catch{}}var Ht=Math.clz32?Math.clz32:de,zt=Math.log,Nt=Math.LN2;function de(e){return e>>>=0,e===0?32:31-(zt(e)/Nt|0)|0}var pe=256,Me=262144,X=4194304;function Dt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,i,s){var l=e.pendingLanes;if(l===0)return 0;var f=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var w=l&134217727;return w!==0?(l=w&~d,l!==0?f=Dt(l):(M&=w,M!==0?f=Dt(M):s||(s=w&~e,s!==0&&(f=Dt(s))))):(w=l&~d,w!==0?f=Dt(w):M!==0?f=Dt(M):s||(s=l&~e,s!==0&&(f=Dt(s)))),f===0?0:i!==0&&i!==f&&(i&d)===0&&(d=f&-f,s=i&-i,d>=s||d===32&&(s&4194048)!==0)?i:f}function qt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ft(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(){var e=X;return X<<=1,(X&62914560)===0&&(X=4194304),e}function te(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function fe(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nn(e,i,s,l,f,d){var M=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var w=e.entanglements,V=e.expirationTimes,tt=e.hiddenUpdates;for(s=M&~s;0<s;){var mt=31-Ht(s),St=1<<mt;w[mt]=0,V[mt]=-1;var st=tt[mt];if(st!==null)for(tt[mt]=null,mt=0;mt<st.length;mt++){var lt=st[mt];lt!==null&&(lt.lane&=-536870913)}s&=~St}l!==0&&ze(e,l,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~i))}function ze(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ht(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function hi(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var l=31-Ht(s),f=1<<l;f&i|e[l]&i&&(e[l]|=i),s&=~f}}function $n(e,i){var s=i&-i;return s=(s&42)!==0?1:gr(s),(s&(e.suspendedLanes|i))!==0?0:s}function gr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function to(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function eo(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:Dv(e.type))}function no(e,i){var s=B.p;try{return B.p=e,i()}finally{B.p=s}}var Ln=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ln,Tn="__reactProps$"+Ln,$i="__reactContainer$"+Ln,La="__reactEvents$"+Ln,yl="__reactListeners$"+Ln,Kr="__reactHandles$"+Ln,io="__reactResources$"+Ln,Na="__reactMarker$"+Ln;function ao(e){delete e[cn],delete e[Tn],delete e[La],delete e[yl],delete e[Kr]}function Oa(e){var i=e[cn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[$i]||s[cn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=pv(e);e!==null;){if(s=e[cn])return s;e=pv(e)}return i}e=s,s=e.parentNode}return null}function Pa(e){if(e=e[cn]||e[$i]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function vr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function za(e){var i=e[io];return i||(i=e[io]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function dn(e){e[Na]=!0}var Ml=new Set,R={};function Z(e,i){rt(e,i),rt(e+"Capture",i)}function rt(e,i){for(R[e]=i,e=0;e<i.length;e++)Ml.add(i[e])}var et=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},kt={};function jt(e){return le.call(kt,e)?!0:le.call(nt,e)?!1:et.test(e)?kt[e]=!0:(nt[e]=!0,!1)}function Gt(e,i,s){if(jt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Jt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Kt(e,i,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+l)}}function re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ae(e,i,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){s=""+M,d.call(this,M)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ne(e){if(!e._valueTracker){var i=ve(e)?"checked":"value";e._valueTracker=ae(e,i,""+e[i])}}function $e(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return e&&(l=ve(e)?e.checked?"true":"false":e.value),e=l,e!==s?(i.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var He=/[\n"\\]/g;function Ge(e){return e.replace(He,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Zt(e,i,s,l,f,d,M,w){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),i!=null?M==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+re(i)):e.value!==""+re(i)&&(e.value=""+re(i)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),i!=null?Ee(e,M,re(i)):s!=null?Ee(e,M,re(s)):l!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+re(w):e.removeAttribute("name")}function Nn(e,i,s,l,f,d,M,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||s!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ne(e);return}s=s!=null?""+re(s):"",i=i!=null?""+re(i):s,w||i===e.value||(e.value=i),e.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=w?e.checked:!!l,e.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),Ne(e)}function Ee(e,i,s){i==="number"&&je(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function xn(e,i,s,l){if(e=e.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<e.length;s++)f=i.hasOwnProperty("$"+e[s].value),e[s].selected!==f&&(e[s].selected=f),f&&l&&(e[s].defaultSelected=!0)}else{for(s=""+re(s),i=null,f=0;f<e.length;f++){if(e[f].value===s){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}i!==null||e[f].disabled||(i=e[f])}i!==null&&(i.selected=!0)}}function ti(e,i,s){if(i!=null&&(i=""+re(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+re(s):""}function Ai(e,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(k(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=re(i),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Ne(e)}function ei(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var Ve=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(e,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,s):typeof s!="number"||s===0||Ve.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Ri(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&tn(e,f,l)}else for(var d in i)i.hasOwnProperty(d)&&tn(e,d,i[d])}function Be(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _r(e){return Fa.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var Lc=null;function Nc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jr=null,Qr=null;function rm(e){var i=Pa(e);if(i&&(e=i.stateNode)){var s=e[Tn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Zt(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Ge(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==e&&l.form===e.form){var f=l[Tn]||null;if(!f)throw Error(a(90));Zt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===e.form&&$e(l)}break t;case"textarea":ti(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&xn(e,!!s.multiple,i,!1)}}}var Oc=!1;function sm(e,i,s){if(Oc)return e(i,s);Oc=!0;try{var l=e(i);return l}finally{if(Oc=!1,(Jr!==null||Qr!==null)&&(uu(),Jr&&(i=Jr,e=Qr,Qr=Jr=null,rm(i),e)))for(i=0;i<e.length;i++)rm(e[i])}}function ro(e,i){var s=e.stateNode;if(s===null)return null;var l=s[Tn]||null;if(l===null)return null;s=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pc=!1;if(ea)try{var so={};Object.defineProperty(so,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Pc=!1}var Ba=null,zc=null,El=null;function om(){if(El)return El;var e,i=zc,s=i.length,l,f="value"in Ba?Ba.value:Ba.textContent,d=f.length;for(e=0;e<s&&i[e]===f[e];e++);var M=s-e;for(l=1;l<=M&&i[s-l]===f[d-l];l++);return El=f.slice(e,1<l?1-l:void 0)}function bl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function lm(){return!1}function Xn(e){function i(s,l,f,d,M){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(s=e[w],this[w]=s?s(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Tl:lm,this.isPropagationStopped=lm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),i}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Xn(xr),oo=_({},xr,{view:0,detail:0}),bS=Xn(oo),Fc,Bc,lo,Rl=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(Fc=e.screenX-lo.screenX,Bc=e.screenY-lo.screenY):Bc=Fc=0,lo=e),Fc)},movementY:function(e){return"movementY"in e?e.movementY:Bc}}),um=Xn(Rl),TS=_({},Rl,{dataTransfer:0}),AS=Xn(TS),RS=_({},oo,{relatedTarget:0}),Ic=Xn(RS),CS=_({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),wS=Xn(CS),DS=_({},xr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),US=Xn(DS),LS=_({},xr,{data:0}),cm=Xn(LS),NS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},PS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zS(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=PS[e])?!!i[e]:!1}function Hc(){return zS}var FS=_({},oo,{key:function(e){if(e.key){var i=NS[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?OS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),BS=Xn(FS),IS=_({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fm=Xn(IS),HS=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),GS=Xn(HS),VS=_({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=Xn(VS),XS=_({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),WS=Xn(XS),qS=_({},xr,{newState:0,oldState:0}),YS=Xn(qS),ZS=[9,13,27,32],Gc=ea&&"CompositionEvent"in window,uo=null;ea&&"documentMode"in document&&(uo=document.documentMode);var jS=ea&&"TextEvent"in window&&!uo,hm=ea&&(!Gc||uo&&8<uo&&11>=uo),dm=" ",pm=!1;function mm(e,i){switch(e){case"keyup":return ZS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function KS(e,i){switch(e){case"compositionend":return gm(i);case"keypress":return i.which!==32?null:(pm=!0,dm);case"textInput":return e=i.data,e===dm&&pm?null:e;default:return null}}function JS(e,i){if($r)return e==="compositionend"||!Gc&&mm(e,i)?(e=om(),El=zc=Ba=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return hm&&i.locale!=="ko"?null:i.data;default:return null}}var QS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!QS[e.type]:i==="textarea"}function _m(e,i,s,l){Jr?Qr?Qr.push(l):Qr=[l]:Jr=l,i=gu(i,"onChange"),0<i.length&&(s=new Al("onChange","change",null,s,l),e.push({event:s,listeners:i}))}var co=null,fo=null;function $S(e){tv(e,0)}function Cl(e){var i=vr(e);if($e(i))return e}function xm(e,i){if(e==="change")return i}var Sm=!1;if(ea){var Vc;if(ea){var kc="oninput"in document;if(!kc){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),kc=typeof ym.oninput=="function"}Vc=kc}else Vc=!1;Sm=Vc&&(!document.documentMode||9<document.documentMode)}function Mm(){co&&(co.detachEvent("onpropertychange",Em),fo=co=null)}function Em(e){if(e.propertyName==="value"&&Cl(fo)){var i=[];_m(i,fo,e,Nc(e)),sm($S,i)}}function ty(e,i,s){e==="focusin"?(Mm(),co=i,fo=s,co.attachEvent("onpropertychange",Em)):e==="focusout"&&Mm()}function ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(fo)}function ny(e,i){if(e==="click")return Cl(i)}function iy(e,i){if(e==="input"||e==="change")return Cl(i)}function ay(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var ni=typeof Object.is=="function"?Object.is:ay;function ho(e,i){if(ni(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!le.call(i,f)||!ni(e[f],i[f]))return!1}return!0}function bm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tm(e,i){var s=bm(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=i&&l>=i)return{node:s,offset:i-e};e=l}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=bm(s)}}function Am(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Am(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Rm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=je(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=je(e.document)}return i}function Xc(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var ry=ea&&"documentMode"in document&&11>=document.documentMode,ts=null,Wc=null,po=null,qc=!1;function Cm(e,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;qc||ts==null||ts!==je(l)||(l=ts,"selectionStart"in l&&Xc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),po&&ho(po,l)||(po=l,l=gu(Wc,"onSelect"),0<l.length&&(i=new Al("onSelect","select",null,i,s),e.push({event:i,listeners:l}),i.target=ts)))}function Sr(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var es={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},Yc={},wm={};ea&&(wm=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function yr(e){if(Yc[e])return Yc[e];if(!es[e])return e;var i=es[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in wm)return Yc[e]=i[s];return e}var Dm=yr("animationend"),Um=yr("animationiteration"),Lm=yr("animationstart"),sy=yr("transitionrun"),oy=yr("transitionstart"),ly=yr("transitioncancel"),Nm=yr("transitionend"),Om=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function Ci(e,i){Om.set(e,i),Z(i,[e])}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},di=[],ns=0,jc=0;function Dl(){for(var e=ns,i=jc=ns=0;i<e;){var s=di[i];di[i++]=null;var l=di[i];di[i++]=null;var f=di[i];di[i++]=null;var d=di[i];if(di[i++]=null,l!==null&&f!==null){var M=l.pending;M===null?f.next=f:(f.next=M.next,M.next=f),l.pending=f}d!==0&&Pm(s,f,d)}}function Ul(e,i,s,l){di[ns++]=e,di[ns++]=i,di[ns++]=s,di[ns++]=l,jc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Kc(e,i,s,l){return Ul(e,i,s,l),Ll(e)}function Mr(e,i){return Ul(e,null,null,i),Ll(e)}function Pm(e,i,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var f=!1,d=e.return;d!==null;)d.childLanes|=s,l=d.alternate,l!==null&&(l.childLanes|=s),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&i!==null&&(f=31-Ht(s),e=d.hiddenUpdates,l=e[f],l===null?e[f]=[i]:l.push(i),i.lane=s|536870912),d):null}function Ll(e){if(50<zo)throw zo=0,sh=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var is={};function uy(e,i,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(e,i,s,l){return new uy(e,i,s,l)}function Jc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,i){var s=e.alternate;return s===null?(s=ii(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function zm(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Nl(e,i,s,l,f,d){var M=0;if(l=e,typeof e=="function")Jc(e)&&(M=1);else if(typeof e=="string")M=pM(e,s,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case z:return e=ii(31,s,i,f),e.elementType=z,e.lanes=d,e;case A:return Er(s.children,f,d,i);case S:M=8,f|=24;break;case y:return e=ii(12,s,i,f|2),e.elementType=y,e.lanes=d,e;case G:return e=ii(13,s,i,f),e.elementType=G,e.lanes=d,e;case O:return e=ii(19,s,i,f),e.elementType=O,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:M=10;break t;case C:M=9;break t;case N:M=11;break t;case F:M=14;break t;case T:M=16,l=null;break t}M=29,s=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=ii(M,s,i,f),i.elementType=e,i.type=l,i.lanes=d,i}function Er(e,i,s,l){return e=ii(7,e,l,i),e.lanes=s,e}function Qc(e,i,s){return e=ii(6,e,null,i),e.lanes=s,e}function Fm(e){var i=ii(18,null,null,0);return i.stateNode=e,i}function $c(e,i,s){return i=ii(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Bm=new WeakMap;function pi(e,i){if(typeof e=="object"&&e!==null){var s=Bm.get(e);return s!==void 0?s:(i={value:e,source:i,stack:Bt(i)},Bm.set(e,i),i)}return{value:e,source:i,stack:Bt(i)}}var as=[],rs=0,Ol=null,mo=0,mi=[],gi=0,Ia=null,Bi=1,Ii="";function ia(e,i){as[rs++]=mo,as[rs++]=Ol,Ol=e,mo=i}function Im(e,i,s){mi[gi++]=Bi,mi[gi++]=Ii,mi[gi++]=Ia,Ia=e;var l=Bi;e=Ii;var f=32-Ht(l)-1;l&=~(1<<f),s+=1;var d=32-Ht(i)+f;if(30<d){var M=f-f%5;d=(l&(1<<M)-1).toString(32),l>>=M,f-=M,Bi=1<<32-Ht(i)+f|s<<f|l,Ii=d+e}else Bi=1<<d|s<<f|l,Ii=e}function tf(e){e.return!==null&&(ia(e,1),Im(e,1,0))}function ef(e){for(;e===Ol;)Ol=as[--rs],as[rs]=null,mo=as[--rs],as[rs]=null;for(;e===Ia;)Ia=mi[--gi],mi[gi]=null,Ii=mi[--gi],mi[gi]=null,Bi=mi[--gi],mi[gi]=null}function Hm(e,i){mi[gi++]=Bi,mi[gi++]=Ii,mi[gi++]=Ia,Bi=i.id,Ii=i.overflow,Ia=e}var An=null,Je=null,we=!1,Ha=null,vi=!1,nf=Error(a(519));function Ga(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(pi(i,e)),nf}function Gm(e){var i=e.stateNode,s=e.type,l=e.memoizedProps;switch(i[cn]=e,i[Tn]=l,s){case"dialog":Te("cancel",i),Te("close",i);break;case"iframe":case"object":case"embed":Te("load",i);break;case"video":case"audio":for(s=0;s<Bo.length;s++)Te(Bo[s],i);break;case"source":Te("error",i);break;case"img":case"image":case"link":Te("error",i),Te("load",i);break;case"details":Te("toggle",i);break;case"input":Te("invalid",i),Nn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Te("invalid",i);break;case"textarea":Te("invalid",i),Ai(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||av(i.textContent,s)?(l.popover!=null&&(Te("beforetoggle",i),Te("toggle",i)),l.onScroll!=null&&Te("scroll",i),l.onScrollEnd!=null&&Te("scrollend",i),l.onClick!=null&&(i.onclick=ta),i=!0):i=!1,i||Ga(e,!0)}function Vm(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:An=An.return}}function ss(e){if(e!==An)return!1;if(!we)return Vm(e),we=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||yh(e.type,e.memoizedProps)),s=!s),s&&Je&&Ga(e),Vm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=dv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Je=dv(e)}else i===27?(i=Je,er(e.type)?(e=Ah,Ah=null,Je=e):Je=i):Je=An?xi(e.stateNode.nextSibling):null;return!0}function br(){Je=An=null,we=!1}function af(){var e=Ha;return e!==null&&(Zn===null?Zn=e:Zn.push.apply(Zn,e),Ha=null),e}function go(e){Ha===null?Ha=[e]:Ha.push(e)}var rf=P(null),Tr=null,aa=null;function Va(e,i,s){vt(rf,i._currentValue),i._currentValue=s}function ra(e){e._currentValue=rf.current,K(rf)}function sf(e,i,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===s)break;e=e.return}}function of(e,i,s,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var M=f.child;d=d.firstContext;t:for(;d!==null;){var w=d;d=f;for(var V=0;V<i.length;V++)if(w.context===i[V]){d.lanes|=s,w=d.alternate,w!==null&&(w.lanes|=s),sf(d.return,s,e),l||(M=null);break t}d=w.next}}else if(f.tag===18){if(M=f.return,M===null)throw Error(a(341));M.lanes|=s,d=M.alternate,d!==null&&(d.lanes|=s),sf(M,s,e),M=null}else M=f.child;if(M!==null)M.return=f;else for(M=f;M!==null;){if(M===e){M=null;break}if(f=M.sibling,f!==null){f.return=M.return,M=f;break}M=M.return}f=M}}function os(e,i,s,l){e=null;for(var f=i,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var M=f.alternate;if(M===null)throw Error(a(387));if(M=M.memoizedProps,M!==null){var w=f.type;ni(f.pendingProps.value,M.value)||(e!==null?e.push(w):e=[w])}}else if(f===Mt.current){if(M=f.alternate,M===null)throw Error(a(387));M.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(ko):e=[ko])}f=f.return}e!==null&&of(i,e,s,l),i.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!ni(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ar(e){Tr=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Rn(e){return km(Tr,e)}function zl(e,i){return Tr===null&&Ar(e),km(e,i)}function km(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},aa===null){if(e===null)throw Error(a(308));aa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else aa=aa.next=i;return s}var cy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},fy=r.unstable_scheduleCallback,hy=r.unstable_NormalPriority,pn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function lf(){return{controller:new cy,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&fy(hy,function(){e.controller.abort()})}var _o=null,uf=0,ls=0,us=null;function dy(e,i){if(_o===null){var s=_o=[];uf=0,ls=hh(),us={status:"pending",value:void 0,then:function(l){s.push(l)}}}return uf++,i.then(Xm,Xm),i}function Xm(){if(--uf===0&&_o!==null){us!==null&&(us.status="fulfilled");var e=_o;_o=null,ls=0,us=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function py(e,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Wm=L.S;L.S=function(e,i){C0=At(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&dy(e,i),Wm!==null&&Wm(e,i)};var Rr=P(null);function cf(){var e=Rr.current;return e!==null?e:Ke.pooledCache}function Fl(e,i){i===null?vt(Rr,Rr.current):vt(Rr,i.pool)}function qm(){var e=cf();return e===null?null:{parent:pn._currentValue,pool:e}}var cs=Error(a(460)),ff=Error(a(474)),Bl=Error(a(542)),Il={then:function(){}};function Ym(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zm(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(ta,ta),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Km(e),e;default:if(typeof i.status=="string")i.then(ta,ta);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Km(e),e}throw wr=i,cs}}function Cr(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(wr=s,cs):s}}var wr=null;function jm(){if(wr===null)throw Error(a(459));var e=wr;return wr=null,e}function Km(e){if(e===cs||e===Bl)throw Error(a(483))}var fs=null,xo=0;function Hl(e){var i=xo;return xo+=1,fs===null&&(fs=[]),Zm(fs,e,i)}function So(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Gl(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Jm(e){function i(j,W){if(e){var $=j.deletions;$===null?(j.deletions=[W],j.flags|=16):$.push(W)}}function s(j,W){if(!e)return null;for(;W!==null;)i(j,W),W=W.sibling;return null}function l(j){for(var W=new Map;j!==null;)j.key!==null?W.set(j.key,j):W.set(j.index,j),j=j.sibling;return W}function f(j,W){return j=na(j,W),j.index=0,j.sibling=null,j}function d(j,W,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<W?(j.flags|=67108866,W):$):(j.flags|=67108866,W)):(j.flags|=1048576,W)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function w(j,W,$,xt){return W===null||W.tag!==6?(W=Qc($,j.mode,xt),W.return=j,W):(W=f(W,$),W.return=j,W)}function V(j,W,$,xt){var se=$.type;return se===A?mt(j,W,$.props.children,xt,$.key):W!==null&&(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===T&&Cr(se)===W.type)?(W=f(W,$.props),So(W,$),W.return=j,W):(W=Nl($.type,$.key,$.props,null,j.mode,xt),So(W,$),W.return=j,W)}function tt(j,W,$,xt){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=$c($,j.mode,xt),W.return=j,W):(W=f(W,$.children||[]),W.return=j,W)}function mt(j,W,$,xt,se){return W===null||W.tag!==7?(W=Er($,j.mode,xt,se),W.return=j,W):(W=f(W,$),W.return=j,W)}function St(j,W,$){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Qc(""+W,j.mode,$),W.return=j,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case x:return $=Nl(W.type,W.key,W.props,null,j.mode,$),So($,W),$.return=j,$;case E:return W=$c(W,j.mode,$),W.return=j,W;case T:return W=Cr(W),St(j,W,$)}if(k(W)||J(W))return W=Er(W,j.mode,$,null),W.return=j,W;if(typeof W.then=="function")return St(j,Hl(W),$);if(W.$$typeof===D)return St(j,zl(j,W),$);Gl(j,W)}return null}function st(j,W,$,xt){var se=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return se!==null?null:w(j,W,""+$,xt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case x:return $.key===se?V(j,W,$,xt):null;case E:return $.key===se?tt(j,W,$,xt):null;case T:return $=Cr($),st(j,W,$,xt)}if(k($)||J($))return se!==null?null:mt(j,W,$,xt,null);if(typeof $.then=="function")return st(j,W,Hl($),xt);if($.$$typeof===D)return st(j,W,zl(j,$),xt);Gl(j,$)}return null}function lt(j,W,$,xt,se){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return j=j.get($)||null,w(W,j,""+xt,se);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case x:return j=j.get(xt.key===null?$:xt.key)||null,V(W,j,xt,se);case E:return j=j.get(xt.key===null?$:xt.key)||null,tt(W,j,xt,se);case T:return xt=Cr(xt),lt(j,W,$,xt,se)}if(k(xt)||J(xt))return j=j.get($)||null,mt(W,j,xt,se,null);if(typeof xt.then=="function")return lt(j,W,$,Hl(xt),se);if(xt.$$typeof===D)return lt(j,W,$,zl(W,xt),se);Gl(W,xt)}return null}function Qt(j,W,$,xt){for(var se=null,Oe=null,ee=W,xe=W=0,Ce=null;ee!==null&&xe<$.length;xe++){ee.index>xe?(Ce=ee,ee=null):Ce=ee.sibling;var Pe=st(j,ee,$[xe],xt);if(Pe===null){ee===null&&(ee=Ce);break}e&&ee&&Pe.alternate===null&&i(j,ee),W=d(Pe,W,xe),Oe===null?se=Pe:Oe.sibling=Pe,Oe=Pe,ee=Ce}if(xe===$.length)return s(j,ee),we&&ia(j,xe),se;if(ee===null){for(;xe<$.length;xe++)ee=St(j,$[xe],xt),ee!==null&&(W=d(ee,W,xe),Oe===null?se=ee:Oe.sibling=ee,Oe=ee);return we&&ia(j,xe),se}for(ee=l(ee);xe<$.length;xe++)Ce=lt(ee,j,xe,$[xe],xt),Ce!==null&&(e&&Ce.alternate!==null&&ee.delete(Ce.key===null?xe:Ce.key),W=d(Ce,W,xe),Oe===null?se=Ce:Oe.sibling=Ce,Oe=Ce);return e&&ee.forEach(function(sr){return i(j,sr)}),we&&ia(j,xe),se}function oe(j,W,$,xt){if($==null)throw Error(a(151));for(var se=null,Oe=null,ee=W,xe=W=0,Ce=null,Pe=$.next();ee!==null&&!Pe.done;xe++,Pe=$.next()){ee.index>xe?(Ce=ee,ee=null):Ce=ee.sibling;var sr=st(j,ee,Pe.value,xt);if(sr===null){ee===null&&(ee=Ce);break}e&&ee&&sr.alternate===null&&i(j,ee),W=d(sr,W,xe),Oe===null?se=sr:Oe.sibling=sr,Oe=sr,ee=Ce}if(Pe.done)return s(j,ee),we&&ia(j,xe),se;if(ee===null){for(;!Pe.done;xe++,Pe=$.next())Pe=St(j,Pe.value,xt),Pe!==null&&(W=d(Pe,W,xe),Oe===null?se=Pe:Oe.sibling=Pe,Oe=Pe);return we&&ia(j,xe),se}for(ee=l(ee);!Pe.done;xe++,Pe=$.next())Pe=lt(ee,j,xe,Pe.value,xt),Pe!==null&&(e&&Pe.alternate!==null&&ee.delete(Pe.key===null?xe:Pe.key),W=d(Pe,W,xe),Oe===null?se=Pe:Oe.sibling=Pe,Oe=Pe);return e&&ee.forEach(function(TM){return i(j,TM)}),we&&ia(j,xe),se}function Ze(j,W,$,xt){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case x:t:{for(var se=$.key;W!==null;){if(W.key===se){if(se=$.type,se===A){if(W.tag===7){s(j,W.sibling),xt=f(W,$.props.children),xt.return=j,j=xt;break t}}else if(W.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===T&&Cr(se)===W.type){s(j,W.sibling),xt=f(W,$.props),So(xt,$),xt.return=j,j=xt;break t}s(j,W);break}else i(j,W);W=W.sibling}$.type===A?(xt=Er($.props.children,j.mode,xt,$.key),xt.return=j,j=xt):(xt=Nl($.type,$.key,$.props,null,j.mode,xt),So(xt,$),xt.return=j,j=xt)}return M(j);case E:t:{for(se=$.key;W!==null;){if(W.key===se)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){s(j,W.sibling),xt=f(W,$.children||[]),xt.return=j,j=xt;break t}else{s(j,W);break}else i(j,W);W=W.sibling}xt=$c($,j.mode,xt),xt.return=j,j=xt}return M(j);case T:return $=Cr($),Ze(j,W,$,xt)}if(k($))return Qt(j,W,$,xt);if(J($)){if(se=J($),typeof se!="function")throw Error(a(150));return $=se.call($),oe(j,W,$,xt)}if(typeof $.then=="function")return Ze(j,W,Hl($),xt);if($.$$typeof===D)return Ze(j,W,zl(j,$),xt);Gl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,W!==null&&W.tag===6?(s(j,W.sibling),xt=f(W,$),xt.return=j,j=xt):(s(j,W),xt=Qc($,j.mode,xt),xt.return=j,j=xt),M(j)):s(j,W)}return function(j,W,$,xt){try{xo=0;var se=Ze(j,W,$,xt);return fs=null,se}catch(ee){if(ee===cs||ee===Bl)throw ee;var Oe=ii(29,ee,null,j.mode);return Oe.lanes=xt,Oe.return=j,Oe}finally{}}}var Dr=Jm(!0),Qm=Jm(!1),ka=!1;function hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,i,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Fe&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Ll(e),Pm(e,null,s),i}return Ul(e,l,i,s),Ll(e)}function yo(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,hi(e,s)}}function pf(e,i){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,d=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};d===null?f=d=M:d=d.next=M,s=s.next}while(s!==null);d===null?f=d=i:d=d.next=i}else f=d=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var mf=!1;function Mo(){if(mf){var e=us;if(e!==null)throw e}}function Eo(e,i,s,l){mf=!1;var f=e.updateQueue;ka=!1;var d=f.firstBaseUpdate,M=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var V=w,tt=V.next;V.next=null,M===null?d=tt:M.next=tt,M=V;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,w=mt.lastBaseUpdate,w!==M&&(w===null?mt.firstBaseUpdate=tt:w.next=tt,mt.lastBaseUpdate=V))}if(d!==null){var St=f.baseState;M=0,mt=tt=V=null,w=d;do{var st=w.lane&-536870913,lt=st!==w.lane;if(lt?(Re&st)===st:(l&st)===st){st!==0&&st===ls&&(mf=!0),mt!==null&&(mt=mt.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});t:{var Qt=e,oe=w;st=i;var Ze=s;switch(oe.tag){case 1:if(Qt=oe.payload,typeof Qt=="function"){St=Qt.call(Ze,St,st);break t}St=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=oe.payload,st=typeof Qt=="function"?Qt.call(Ze,St,st):Qt,st==null)break t;St=_({},St,st);break t;case 2:ka=!0}}st=w.callback,st!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=f.callbacks,lt===null?f.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:w.tag,payload:w.payload,callback:w.callback,next:null},mt===null?(tt=mt=lt,V=St):mt=mt.next=lt,M|=st;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;lt=w,w=lt.next,lt.next=null,f.lastBaseUpdate=lt,f.shared.pending=null}}while(!0);mt===null&&(V=St),f.baseState=V,f.firstBaseUpdate=tt,f.lastBaseUpdate=mt,d===null&&(f.shared.lanes=0),Ka|=M,e.lanes=M,e.memoizedState=St}}function $m(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function tg(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)$m(s[e],i)}var hs=P(null),Vl=P(0);function eg(e,i){e=pa,vt(Vl,e),vt(hs,i),pa=e|i.baseLanes}function gf(){vt(Vl,pa),vt(hs,hs.current)}function vf(){pa=Vl.current,K(hs),K(Vl)}var ai=P(null),_i=null;function qa(e){var i=e.alternate;vt(fn,fn.current&1),vt(ai,e),_i===null&&(i===null||hs.current!==null||i.memoizedState!==null)&&(_i=e)}function _f(e){vt(fn,fn.current),vt(ai,e),_i===null&&(_i=e)}function ng(e){e.tag===22?(vt(fn,fn.current),vt(ai,e),_i===null&&(_i=e)):Ya()}function Ya(){vt(fn,fn.current),vt(ai,ai.current)}function ri(e){K(ai),_i===e&&(_i=null),K(fn)}var fn=P(0);function kl(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||bh(s)||Th(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var sa=0,_e=null,qe=null,mn=null,Xl=!1,ds=!1,Ur=!1,Wl=0,bo=0,ps=null,my=0;function on(){throw Error(a(321))}function xf(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!ni(e[s],i[s]))return!1;return!0}function Sf(e,i,s,l,f,d){return sa=d,_e=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,L.H=e===null||e.memoizedState===null?Ig:Pf,Ur=!1,d=s(l,f),Ur=!1,ds&&(d=ag(i,s,l,f)),ig(e),d}function ig(e){L.H=Ro;var i=qe!==null&&qe.next!==null;if(sa=0,mn=qe=_e=null,Xl=!1,bo=0,ps=null,i)throw Error(a(300));e===null||gn||(e=e.dependencies,e!==null&&Pl(e)&&(gn=!0))}function ag(e,i,s,l){_e=e;var f=0;do{if(ds&&(ps=null),bo=0,ds=!1,25<=f)throw Error(a(301));if(f+=1,mn=qe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}L.H=Hg,d=i(s,l)}while(ds);return d}function gy(){var e=L.H,i=e.useState()[0];return i=typeof i.then=="function"?To(i):i,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(_e.flags|=1024),i}function yf(){var e=Wl!==0;return Wl=0,e}function Mf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Ef(e){if(Xl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Xl=!1}sa=0,mn=qe=_e=null,ds=!1,bo=Wl=0,ps=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?_e.memoizedState=mn=e:mn=mn.next=e,mn}function hn(){if(qe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var i=mn===null?_e.memoizedState:mn.next;if(i!==null)mn=i,qe=e;else{if(e===null)throw _e.alternate===null?Error(a(467)):Error(a(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},mn===null?_e.memoizedState=mn=e:mn=mn.next=e}return mn}function ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var i=bo;return bo+=1,ps===null&&(ps=[]),e=Zm(ps,e,i),i=_e,(mn===null?i.memoizedState:mn.next)===null&&(i=i.alternate,L.H=i===null||i.memoizedState===null?Ig:Pf),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===D)return Rn(e)}throw Error(a(438,String(e)))}function bf(e){var i=null,s=_e.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=_e.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=ql(),_e.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),l=0;l<e;l++)s[l]=q;return i.index++,s}function oa(e,i){return typeof i=="function"?i(e):i}function Zl(e){var i=hn();return Tf(i,qe,e)}function Tf(e,i,s){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=e.baseQueue,d=l.pending;if(d!==null){if(f!==null){var M=f.next;f.next=d.next,d.next=M}i.baseQueue=f=d,l.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{i=f.next;var w=M=null,V=null,tt=i,mt=!1;do{var St=tt.lane&-536870913;if(St!==tt.lane?(Re&St)===St:(sa&St)===St){var st=tt.revertLane;if(st===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),St===ls&&(mt=!0);else if((sa&st)===st){tt=tt.next,st===ls&&(mt=!0);continue}else St={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},V===null?(w=V=St,M=d):V=V.next=St,_e.lanes|=st,Ka|=st;St=tt.action,Ur&&s(d,St),d=tt.hasEagerState?tt.eagerState:s(d,St)}else st={lane:St,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},V===null?(w=V=st,M=d):V=V.next=st,_e.lanes|=St,Ka|=St;tt=tt.next}while(tt!==null&&tt!==i);if(V===null?M=d:V.next=w,!ni(d,e.memoizedState)&&(gn=!0,mt&&(s=us,s!==null)))throw s;e.memoizedState=d,e.baseState=M,e.baseQueue=V,l.lastRenderedState=d}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Af(e){var i=hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var l=s.dispatch,f=s.pending,d=i.memoizedState;if(f!==null){s.pending=null;var M=f=f.next;do d=e(d,M.action),M=M.next;while(M!==f);ni(d,i.memoizedState)||(gn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),s.lastRenderedState=d}return[d,l]}function rg(e,i,s){var l=_e,f=hn(),d=we;if(d){if(s===void 0)throw Error(a(407));s=s()}else s=i();var M=!ni((qe||f).memoizedState,s);if(M&&(f.memoizedState=s,gn=!0),f=f.queue,wf(lg.bind(null,l,f,e),[e]),f.getSnapshot!==i||M||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,ms(9,{destroy:void 0},og.bind(null,l,f,s,i),null),Ke===null)throw Error(a(349));d||(sa&127)!==0||sg(l,i,s)}return s}function sg(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=_e.updateQueue,i===null?(i=ql(),_e.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function og(e,i,s,l){i.value=s,i.getSnapshot=l,ug(i)&&cg(e)}function lg(e,i,s){return s(function(){ug(i)&&cg(e)})}function ug(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!ni(e,s)}catch{return!0}}function cg(e){var i=Mr(e,2);i!==null&&jn(i,e,2)}function Rf(e){var i=Hn();if(typeof e=="function"){var s=e;if(e=s(),Ur){It(!0);try{s()}finally{It(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},i}function fg(e,i,s,l){return e.baseState=s,Tf(e,qe,typeof l=="function"?l:oa)}function vy(e,i,s,l,f){if(Jl(e))throw Error(a(485));if(e=i.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};L.T!==null?s(!0):d.isTransition=!1,l(d),s=i.pending,s===null?(d.next=i.pending=d,hg(i,d)):(d.next=s.next,i.pending=s.next=d)}}function hg(e,i){var s=i.action,l=i.payload,f=e.state;if(i.isTransition){var d=L.T,M={};L.T=M;try{var w=s(f,l),V=L.S;V!==null&&V(M,w),dg(e,i,w)}catch(tt){Cf(e,i,tt)}finally{d!==null&&M.types!==null&&(d.types=M.types),L.T=d}}else try{d=s(f,l),dg(e,i,d)}catch(tt){Cf(e,i,tt)}}function dg(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){pg(e,i,l)},function(l){return Cf(e,i,l)}):pg(e,i,s)}function pg(e,i,s){i.status="fulfilled",i.value=s,mg(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,hg(e,s)))}function Cf(e,i,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,mg(i),i=i.next;while(i!==l)}e.action=null}function mg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function gg(e,i){return i}function vg(e,i){if(we){var s=Ke.formState;if(s!==null){t:{var l=_e;if(we){if(Je){e:{for(var f=Je,d=vi;f.nodeType!==8;){if(!d){f=null;break e}if(f=xi(f.nextSibling),f===null){f=null;break e}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){Je=xi(f.nextSibling),l=f.data==="F!";break t}}Ga(l)}l=!1}l&&(i=s[0])}}return s=Hn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gg,lastRenderedState:i},s.queue=l,s=zg.bind(null,_e,l),l.dispatch=s,l=Rf(!1),d=Of.bind(null,_e,!1,l.queue),l=Hn(),f={state:i,dispatch:null,action:e,pending:null},l.queue=f,s=vy.bind(null,_e,f,d,s),f.dispatch=s,l.memoizedState=e,[i,s,!1]}function _g(e){var i=hn();return xg(i,qe,e)}function xg(e,i,s){if(i=Tf(e,i,gg)[0],e=Zl(oa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=To(i)}catch(M){throw M===cs?Bl:M}else l=i;i=hn();var f=i.queue,d=f.dispatch;return s!==i.memoizedState&&(_e.flags|=2048,ms(9,{destroy:void 0},_y.bind(null,f,s),null)),[l,d,e]}function _y(e,i){e.action=i}function Sg(e){var i=hn(),s=qe;if(s!==null)return xg(i,s,e);hn(),i=i.memoizedState,s=hn();var l=s.queue.dispatch;return s.memoizedState=e,[i,l,!1]}function ms(e,i,s,l){return e={tag:e,create:s,deps:l,inst:i,next:null},i=_e.updateQueue,i===null&&(i=ql(),_e.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,i.lastEffect=e),e}function yg(){return hn().memoizedState}function jl(e,i,s,l){var f=Hn();_e.flags|=e,f.memoizedState=ms(1|i,{destroy:void 0},s,l===void 0?null:l)}function Kl(e,i,s,l){var f=hn();l=l===void 0?null:l;var d=f.memoizedState.inst;qe!==null&&l!==null&&xf(l,qe.memoizedState.deps)?f.memoizedState=ms(i,d,s,l):(_e.flags|=e,f.memoizedState=ms(1|i,d,s,l))}function Mg(e,i){jl(8390656,8,e,i)}function wf(e,i){Kl(2048,8,e,i)}function xy(e){_e.flags|=4;var i=_e.updateQueue;if(i===null)i=ql(),_e.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function Eg(e){var i=hn().memoizedState;return xy({ref:i,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function bg(e,i){return Kl(4,2,e,i)}function Tg(e,i){return Kl(4,4,e,i)}function Ag(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Rg(e,i,s){s=s!=null?s.concat([e]):null,Kl(4,4,Ag.bind(null,i,e),s)}function Df(){}function Cg(e,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&xf(i,l[1])?l[0]:(s.memoizedState=[e,i],e)}function wg(e,i){var s=hn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&xf(i,l[1]))return l[0];if(l=e(),Ur){It(!0);try{e()}finally{It(!1)}}return s.memoizedState=[l,i],l}function Uf(e,i,s){return s===void 0||(sa&1073741824)!==0&&(Re&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=D0(),_e.lanes|=e,Ka|=e,s)}function Dg(e,i,s,l){return ni(s,i)?s:hs.current!==null?(e=Uf(e,s,l),ni(e,i)||(gn=!0),e):(sa&42)===0||(sa&1073741824)!==0&&(Re&261930)===0?(gn=!0,e.memoizedState=s):(e=D0(),_e.lanes|=e,Ka|=e,i)}function Ug(e,i,s,l,f){var d=B.p;B.p=d!==0&&8>d?d:8;var M=L.T,w={};L.T=w,Of(e,!1,i,s);try{var V=f(),tt=L.S;if(tt!==null&&tt(w,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var mt=py(V,l);Ao(e,i,mt,li(e))}else Ao(e,i,l,li(e))}catch(St){Ao(e,i,{then:function(){},status:"rejected",reason:St},li())}finally{B.p=d,M!==null&&w.types!==null&&(M.types=w.types),L.T=M}}function Sy(){}function Lf(e,i,s,l){if(e.tag!==5)throw Error(a(476));var f=Lg(e).queue;Ug(e,f,i,it,s===null?Sy:function(){return Ng(e),s(l)})}function Lg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:it},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Ng(e){var i=Lg(e);i.next===null&&(i=e.alternate.memoizedState),Ao(e,i.next.queue,{},li())}function Nf(){return Rn(ko)}function Og(){return hn().memoizedState}function Pg(){return hn().memoizedState}function yy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=li();e=Xa(s);var l=Wa(i,e,s);l!==null&&(jn(l,i,s),yo(l,i,s)),i={cache:lf()},e.payload=i;return}i=i.return}}function My(e,i,s){var l=li();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Jl(e)?Fg(i,s):(s=Kc(e,i,s,l),s!==null&&(jn(s,e,l),Bg(s,i,l)))}function zg(e,i,s){var l=li();Ao(e,i,s,l)}function Ao(e,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Jl(e))Fg(i,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var M=i.lastRenderedState,w=d(M,s);if(f.hasEagerState=!0,f.eagerState=w,ni(w,M))return Ul(e,i,f,0),Ke===null&&Dl(),!1}catch{}finally{}if(s=Kc(e,i,f,l),s!==null)return jn(s,e,l),Bg(s,i,l),!0}return!1}function Of(e,i,s,l){if(l={lane:2,revertLane:hh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Jl(e)){if(i)throw Error(a(479))}else i=Kc(e,s,l,2),i!==null&&jn(i,e,2)}function Jl(e){var i=e.alternate;return e===_e||i!==null&&i===_e}function Fg(e,i){ds=Xl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Bg(e,i,s){if((s&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,s|=l,i.lanes=s,hi(e,s)}}var Ro={readContext:Rn,use:Yl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};Ro.useEffectEvent=on;var Ig={readContext:Rn,use:Yl,useCallback:function(e,i){return Hn().memoizedState=[e,i===void 0?null:i],e},useContext:Rn,useEffect:Mg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,jl(4194308,4,Ag.bind(null,i,e),s)},useLayoutEffect:function(e,i){return jl(4194308,4,e,i)},useInsertionEffect:function(e,i){jl(4,2,e,i)},useMemo:function(e,i){var s=Hn();i=i===void 0?null:i;var l=e();if(Ur){It(!0);try{e()}finally{It(!1)}}return s.memoizedState=[l,i],l},useReducer:function(e,i,s){var l=Hn();if(s!==void 0){var f=s(i);if(Ur){It(!0);try{s(i)}finally{It(!1)}}}else f=i;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=My.bind(null,_e,e),[l.memoizedState,e]},useRef:function(e){var i=Hn();return e={current:e},i.memoizedState=e},useState:function(e){e=Rf(e);var i=e.queue,s=zg.bind(null,_e,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:Df,useDeferredValue:function(e,i){var s=Hn();return Uf(s,e,i)},useTransition:function(){var e=Rf(!1);return e=Ug.bind(null,_e,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var l=_e,f=Hn();if(we){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ke===null)throw Error(a(349));(Re&127)!==0||sg(l,i,s)}f.memoizedState=s;var d={value:s,getSnapshot:i};return f.queue=d,Mg(lg.bind(null,l,d,e),[e]),l.flags|=2048,ms(9,{destroy:void 0},og.bind(null,l,d,s,i),null),s},useId:function(){var e=Hn(),i=Ke.identifierPrefix;if(we){var s=Ii,l=Bi;s=(l&~(1<<32-Ht(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Wl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=my++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Nf,useFormState:vg,useActionState:vg,useOptimistic:function(e){var i=Hn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Of.bind(null,_e,!0,s),s.dispatch=i,[e,i]},useMemoCache:bf,useCacheRefresh:function(){return Hn().memoizedState=yy.bind(null,_e)},useEffectEvent:function(e){var i=Hn(),s={impl:e};return i.memoizedState=s,function(){if((Fe&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Pf={readContext:Rn,use:Yl,useCallback:Cg,useContext:Rn,useEffect:wf,useImperativeHandle:Rg,useInsertionEffect:bg,useLayoutEffect:Tg,useMemo:wg,useReducer:Zl,useRef:yg,useState:function(){return Zl(oa)},useDebugValue:Df,useDeferredValue:function(e,i){var s=hn();return Dg(s,qe.memoizedState,e,i)},useTransition:function(){var e=Zl(oa)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:rg,useId:Og,useHostTransitionStatus:Nf,useFormState:_g,useActionState:_g,useOptimistic:function(e,i){var s=hn();return fg(s,qe,e,i)},useMemoCache:bf,useCacheRefresh:Pg};Pf.useEffectEvent=Eg;var Hg={readContext:Rn,use:Yl,useCallback:Cg,useContext:Rn,useEffect:wf,useImperativeHandle:Rg,useInsertionEffect:bg,useLayoutEffect:Tg,useMemo:wg,useReducer:Af,useRef:yg,useState:function(){return Af(oa)},useDebugValue:Df,useDeferredValue:function(e,i){var s=hn();return qe===null?Uf(s,e,i):Dg(s,qe.memoizedState,e,i)},useTransition:function(){var e=Af(oa)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:rg,useId:Og,useHostTransitionStatus:Nf,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,i){var s=hn();return qe!==null?fg(s,qe,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:bf,useCacheRefresh:Pg};Hg.useEffectEvent=Eg;function zf(e,i,s,l){i=e.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var Ff={enqueueSetState:function(e,i,s){e=e._reactInternals;var l=li(),f=Xa(l);f.payload=i,s!=null&&(f.callback=s),i=Wa(e,f,l),i!==null&&(jn(i,e,l),yo(i,e,l))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var l=li(),f=Xa(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Wa(e,f,l),i!==null&&(jn(i,e,l),yo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=li(),l=Xa(s);l.tag=2,i!=null&&(l.callback=i),i=Wa(e,l,s),i!==null&&(jn(i,e,s),yo(i,e,s))}};function Gg(e,i,s,l,f,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,M):i.prototype&&i.prototype.isPureReactComponent?!ho(s,l)||!ho(f,d):!0}function Vg(e,i,s,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==e&&Ff.enqueueReplaceState(i,i.state,null)}function Lr(e,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var f in e)s[f]===void 0&&(s[f]=e[f])}return s}function kg(e){wl(e)}function Xg(e){console.error(e)}function Wg(e){wl(e)}function Ql(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function qg(e,i,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Bf(e,i,s){return s=Xa(s),s.tag=3,s.payload={element:null},s.callback=function(){Ql(e,i)},s}function Yg(e){return e=Xa(e),e.tag=3,e}function Zg(e,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var d=l.value;e.payload=function(){return f(d)},e.callback=function(){qg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){qg(i,s,l),typeof f!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function Ey(e,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&os(i,s,f,!0),s=ai.current,s!==null){switch(s.tag){case 31:case 13:return _i===null?cu():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Il?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),uh(e,l,f)),!1;case 22:return s.flags|=65536,l===Il?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),uh(e,l,f)),!1}throw Error(a(435,s.tag))}return uh(e,l,f),cu(),!1}if(we)return i=ai.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==nf&&(e=Error(a(422),{cause:l}),go(pi(e,s)))):(l!==nf&&(i=Error(a(423),{cause:l}),go(pi(i,s))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=pi(l,s),f=Bf(e.stateNode,l,f),pf(e,f),ln!==4&&(ln=2)),!1;var d=Error(a(520),{cause:l});if(d=pi(d,s),Po===null?Po=[d]:Po.push(d),ln!==4&&(ln=2),i===null)return!0;l=pi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=f&-f,s.lanes|=e,e=Bf(s.stateNode,l,e),pf(s,e),!1;case 1:if(i=s.type,d=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ja===null||!Ja.has(d))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Yg(f),Zg(f,e,s,l),pf(s,f),!1}s=s.return}while(s!==null);return!1}var If=Error(a(461)),gn=!1;function Cn(e,i,s,l){i.child=e===null?Qm(i,null,s,l):Dr(i,e.child,s,l)}function jg(e,i,s,l,f){s=s.render;var d=i.ref;if("ref"in l){var M={};for(var w in l)w!=="ref"&&(M[w]=l[w])}else M=l;return Ar(i),l=Sf(e,i,s,M,d,f),w=yf(),e!==null&&!gn?(Mf(e,i,f),la(e,i,f)):(we&&w&&tf(i),i.flags|=1,Cn(e,i,l,f),i.child)}function Kg(e,i,s,l,f){if(e===null){var d=s.type;return typeof d=="function"&&!Jc(d)&&d.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=d,Jg(e,i,d,l,f)):(e=Nl(s.type,null,l,i,i.mode,f),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Yf(e,f)){var M=d.memoizedProps;if(s=s.compare,s=s!==null?s:ho,s(M,l)&&e.ref===i.ref)return la(e,i,f)}return i.flags|=1,e=na(d,l),e.ref=i.ref,e.return=i,i.child=e}function Jg(e,i,s,l,f){if(e!==null){var d=e.memoizedProps;if(ho(d,l)&&e.ref===i.ref)if(gn=!1,i.pendingProps=l=d,Yf(e,f))(e.flags&131072)!==0&&(gn=!0);else return i.lanes=e.lanes,la(e,i,f)}return Hf(e,i,s,l,f)}function Qg(e,i,s,l){var f=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|s:s,e!==null){for(l=i.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~d}else l=0,i.child=null;return $g(e,i,d,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Fl(i,d!==null?d.cachePool:null),d!==null?eg(i,d):gf(),ng(i);else return l=i.lanes=536870912,$g(e,i,d!==null?d.baseLanes|s:s,s,l)}else d!==null?(Fl(i,d.cachePool),eg(i,d),Ya(),i.memoizedState=null):(e!==null&&Fl(i,null),gf(),Ya());return Cn(e,i,f,s),i.child}function Co(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function $g(e,i,s,l,f){var d=cf();return d=d===null?null:{parent:pn._currentValue,pool:d},i.memoizedState={baseLanes:s,cachePool:d},e!==null&&Fl(i,null),gf(),ng(i),e!==null&&os(e,i,l,!0),i.childLanes=f,null}function $l(e,i){return i=eu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function t0(e,i,s){return Dr(i,e.child,null,s),e=$l(i,i.pendingProps),e.flags|=2,ri(i),i.memoizedState=null,e}function by(e,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=$l(i,l),i.lanes=536870912,Co(null,e);if(_f(i),(e=Je)?(e=hv(e,vi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},s=Fm(e),s.return=i,i.child=s,An=i,Je=null)):e=null,e===null)throw Ga(i);return i.lanes=536870912,null}return $l(i,l)}var d=e.memoizedState;if(d!==null){var M=d.dehydrated;if(_f(i),f)if(i.flags&256)i.flags&=-257,i=t0(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(gn||os(e,i,s,!1),f=(s&e.childLanes)!==0,gn||f){if(l=Ke,l!==null&&(M=$n(l,s),M!==0&&M!==d.retryLane))throw d.retryLane=M,Mr(e,M),jn(l,e,M),If;cu(),i=t0(e,i,s)}else e=d.treeContext,Je=xi(M.nextSibling),An=i,we=!0,Ha=null,vi=!1,e!==null&&Hm(i,e),i=$l(i,l),i.flags|=4096;return i}return e=na(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function tu(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Hf(e,i,s,l,f){return Ar(i),s=Sf(e,i,s,l,void 0,f),l=yf(),e!==null&&!gn?(Mf(e,i,f),la(e,i,f)):(we&&l&&tf(i),i.flags|=1,Cn(e,i,s,f),i.child)}function e0(e,i,s,l,f,d){return Ar(i),i.updateQueue=null,s=ag(i,l,s,f),ig(e),l=yf(),e!==null&&!gn?(Mf(e,i,d),la(e,i,d)):(we&&l&&tf(i),i.flags|=1,Cn(e,i,s,d),i.child)}function n0(e,i,s,l,f){if(Ar(i),i.stateNode===null){var d=is,M=s.contextType;typeof M=="object"&&M!==null&&(d=Rn(M)),d=new s(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Ff,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},hf(i),M=s.contextType,d.context=typeof M=="object"&&M!==null?Rn(M):is,d.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(zf(i,s,M,l),d.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&Ff.enqueueReplaceState(d,d.state,null),Eo(i,l,d,f),Mo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var w=i.memoizedProps,V=Lr(s,w);d.props=V;var tt=d.context,mt=s.contextType;M=is,typeof mt=="object"&&mt!==null&&(M=Rn(mt));var St=s.getDerivedStateFromProps;mt=typeof St=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,mt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||tt!==M)&&Vg(i,d,l,M),ka=!1;var st=i.memoizedState;d.state=st,Eo(i,l,d,f),Mo(),tt=i.memoizedState,w||st!==tt||ka?(typeof St=="function"&&(zf(i,s,St,l),tt=i.memoizedState),(V=ka||Gg(i,s,V,l,st,tt,M))?(mt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=tt),d.props=l,d.state=tt,d.context=M,l=V):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,df(e,i),M=i.memoizedProps,mt=Lr(s,M),d.props=mt,St=i.pendingProps,st=d.context,tt=s.contextType,V=is,typeof tt=="object"&&tt!==null&&(V=Rn(tt)),w=s.getDerivedStateFromProps,(tt=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==St||st!==V)&&Vg(i,d,l,V),ka=!1,st=i.memoizedState,d.state=st,Eo(i,l,d,f),Mo();var lt=i.memoizedState;M!==St||st!==lt||ka||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof w=="function"&&(zf(i,s,w,l),lt=i.memoizedState),(mt=ka||Gg(i,s,mt,l,st,lt,V)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(tt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,lt,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,lt,V)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),d.props=l,d.state=lt,d.context=V,l=mt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,tu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Dr(i,e.child,null,f),i.child=Dr(i,null,s,f)):Cn(e,i,s,f),i.memoizedState=d.state,e=i.child):e=la(e,i,f),e}function i0(e,i,s,l){return br(),i.flags|=256,Cn(e,i,s,l),i.child}var Gf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vf(e){return{baseLanes:e,cachePool:qm()}}function kf(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=oi),e}function a0(e,i,s){var l=i.pendingProps,f=!1,d=(i.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),M&&(f=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(f?qa(i):Ya(),(e=Je)?(e=hv(e,vi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ia!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},s=Fm(e),s.return=i,i.child=s,An=i,Je=null)):e=null,e===null)throw Ga(i);return Th(e)?i.lanes=32:i.lanes=536870912,null}var w=l.children;return l=l.fallback,f?(Ya(),f=i.mode,w=eu({mode:"hidden",children:w},f),l=Er(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,l=i.child,l.memoizedState=Vf(s),l.childLanes=kf(e,M,s),i.memoizedState=Gf,Co(null,l)):(qa(i),Xf(i,w))}var V=e.memoizedState;if(V!==null&&(w=V.dehydrated,w!==null)){if(d)i.flags&256?(qa(i),i.flags&=-257,i=Wf(e,i,s)):i.memoizedState!==null?(Ya(),i.child=e.child,i.flags|=128,i=null):(Ya(),w=l.fallback,f=i.mode,l=eu({mode:"visible",children:l.children},f),w=Er(w,f,s,null),w.flags|=2,l.return=i,w.return=i,l.sibling=w,i.child=l,Dr(i,e.child,null,s),l=i.child,l.memoizedState=Vf(s),l.childLanes=kf(e,M,s),i.memoizedState=Gf,i=Co(null,l));else if(qa(i),Th(w)){if(M=w.nextSibling&&w.nextSibling.dataset,M)var tt=M.dgst;M=tt,l=Error(a(419)),l.stack="",l.digest=M,go({value:l,source:null,stack:null}),i=Wf(e,i,s)}else if(gn||os(e,i,s,!1),M=(s&e.childLanes)!==0,gn||M){if(M=Ke,M!==null&&(l=$n(M,s),l!==0&&l!==V.retryLane))throw V.retryLane=l,Mr(e,l),jn(M,e,l),If;bh(w)||cu(),i=Wf(e,i,s)}else bh(w)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,Je=xi(w.nextSibling),An=i,we=!0,Ha=null,vi=!1,e!==null&&Hm(i,e),i=Xf(i,l.children),i.flags|=4096);return i}return f?(Ya(),w=l.fallback,f=i.mode,V=e.child,tt=V.sibling,l=na(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,tt!==null?w=na(tt,w):(w=Er(w,f,s,null),w.flags|=2),w.return=i,l.return=i,l.sibling=w,i.child=l,Co(null,l),l=i.child,w=e.child.memoizedState,w===null?w=Vf(s):(f=w.cachePool,f!==null?(V=pn._currentValue,f=f.parent!==V?{parent:V,pool:V}:f):f=qm(),w={baseLanes:w.baseLanes|s,cachePool:f}),l.memoizedState=w,l.childLanes=kf(e,M,s),i.memoizedState=Gf,Co(e.child,l)):(qa(i),s=e.child,e=s.sibling,s=na(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,e!==null&&(M=i.deletions,M===null?(i.deletions=[e],i.flags|=16):M.push(e)),i.child=s,i.memoizedState=null,s)}function Xf(e,i){return i=eu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function eu(e,i){return e=ii(22,e,null,i),e.lanes=0,e}function Wf(e,i,s){return Dr(i,e.child,null,s),e=Xf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function r0(e,i,s){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),sf(e.return,i,s)}function qf(e,i,s,l,f,d){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:d}:(M.isBackwards=i,M.rendering=null,M.renderingStartTime=0,M.last=l,M.tail=s,M.tailMode=f,M.treeForkCount=d)}function s0(e,i,s){var l=i.pendingProps,f=l.revealOrder,d=l.tail;l=l.children;var M=fn.current,w=(M&2)!==0;if(w?(M=M&1|2,i.flags|=128):M&=1,vt(fn,M),Cn(e,i,l,s),l=we?mo:0,!w&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&r0(e,s,i);else if(e.tag===19)r0(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)e=s.alternate,e!==null&&kl(e)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),qf(i,!1,f,s,d,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(e=f.alternate,e!==null&&kl(e)===null){i.child=f;break}e=f.sibling,f.sibling=s,s=f,f=e}qf(i,!0,s,null,d,l);break;case"together":qf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function la(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),Ka|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(os(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=na(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=na(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Yf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function Ty(e,i,s){switch(i.tag){case 3:bt(i,i.stateNode.containerInfo),Va(i,pn,e.memoizedState.cache),br();break;case 27:case 5:ne(i);break;case 4:bt(i,i.stateNode.containerInfo);break;case 10:Va(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,_f(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?a0(e,i,s):(qa(i),e=la(e,i,s),e!==null?e.sibling:null);qa(i);break;case 19:var f=(e.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(os(e,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return s0(e,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),vt(fn,fn.current),l)break;return null;case 22:return i.lanes=0,Qg(e,i,s,i.pendingProps);case 24:Va(i,pn,e.memoizedState.cache)}return la(e,i,s)}function o0(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)gn=!0;else{if(!Yf(e,s)&&(i.flags&128)===0)return gn=!1,Ty(e,i,s);gn=(e.flags&131072)!==0}else gn=!1,we&&(i.flags&1048576)!==0&&Im(i,mo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Cr(i.elementType),i.type=e,typeof e=="function")Jc(e)?(l=Lr(e,l),i.tag=1,i=n0(null,i,e,l,s)):(i.tag=0,i=Hf(null,i,e,l,s));else{if(e!=null){var f=e.$$typeof;if(f===N){i.tag=11,i=jg(null,i,e,l,s);break t}else if(f===F){i.tag=14,i=Kg(null,i,e,l,s);break t}}throw i=ft(e)||e,Error(a(306,i,""))}}return i;case 0:return Hf(e,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Lr(l,i.pendingProps),n0(e,i,l,f,s);case 3:t:{if(bt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var d=i.memoizedState;f=d.element,df(e,i),Eo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Va(i,pn,l),l!==d.cache&&of(i,[pn],s,!0),Mo(),l=M.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=i0(e,i,l,s);break t}else if(l!==f){f=pi(Error(a(424)),i),go(f),i=i0(e,i,l,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=xi(e.firstChild),An=i,we=!0,Ha=null,vi=!0,s=Qm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(br(),l===f){i=la(e,i,s);break t}Cn(e,i,l,s)}i=i.child}return i;case 26:return tu(e,i),e===null?(s=_v(i.type,null,i.pendingProps,null))?i.memoizedState=s:we||(s=i.type,e=i.pendingProps,l=vu(at.current).createElement(s),l[cn]=i,l[Tn]=e,wn(l,s,e),dn(l),i.stateNode=l):i.memoizedState=_v(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ne(i),e===null&&we&&(l=i.stateNode=mv(i.type,i.pendingProps,at.current),An=i,vi=!0,f=Je,er(i.type)?(Ah=f,Je=xi(l.firstChild)):Je=f),Cn(e,i,i.pendingProps.children,s),tu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((f=l=Je)&&(l=eM(l,i.type,i.pendingProps,vi),l!==null?(i.stateNode=l,An=i,Je=xi(l.firstChild),vi=!1,f=!0):f=!1),f||Ga(i)),ne(i),f=i.type,d=i.pendingProps,M=e!==null?e.memoizedProps:null,l=d.children,yh(f,d)?l=null:M!==null&&yh(f,M)&&(i.flags|=32),i.memoizedState!==null&&(f=Sf(e,i,gy,null,null,s),ko._currentValue=f),tu(e,i),Cn(e,i,l,s),i.child;case 6:return e===null&&we&&((e=s=Je)&&(s=nM(s,i.pendingProps,vi),s!==null?(i.stateNode=s,An=i,Je=null,e=!0):e=!1),e||Ga(i)),null;case 13:return a0(e,i,s);case 4:return bt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Dr(i,null,l,s):Cn(e,i,l,s),i.child;case 11:return jg(e,i,i.type,i.pendingProps,s);case 7:return Cn(e,i,i.pendingProps,s),i.child;case 8:return Cn(e,i,i.pendingProps.children,s),i.child;case 12:return Cn(e,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Va(i,i.type,l.value),Cn(e,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ar(i),f=Rn(f),l=l(f),i.flags|=1,Cn(e,i,l,s),i.child;case 14:return Kg(e,i,i.type,i.pendingProps,s);case 15:return Jg(e,i,i.type,i.pendingProps,s);case 19:return s0(e,i,s);case 31:return by(e,i,s);case 22:return Qg(e,i,s,i.pendingProps);case 24:return Ar(i),l=Rn(pn),e===null?(f=cf(),f===null&&(f=Ke,d=lf(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=s),f=d),i.memoizedState={parent:l,cache:f},hf(i),Va(i,pn,f)):((e.lanes&s)!==0&&(df(e,i),Eo(i,null,null,s),Mo()),f=e.memoizedState,d=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Va(i,pn,l)):(l=d.cache,Va(i,pn,l),l!==f.cache&&of(i,[pn],s,!0))),Cn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ua(e){e.flags|=4}function Zf(e,i,s,l,f){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(O0())e.flags|=8192;else throw wr=Il,ff}else e.flags&=-16777217}function l0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ev(i))if(O0())e.flags|=8192;else throw wr=Il,ff}function nu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Rt():536870912,e.lanes|=i,xs|=i)}function wo(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(i)for(var f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=s,i}function Ay(e,i,s){var l=i.pendingProps;switch(ef(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(i),null;case 1:return Qe(i),null;case 3:return s=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ra(pn),Ot(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ss(i)?ua(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,af())),Qe(i),null;case 26:var f=i.type,d=i.memoizedState;return e===null?(ua(i),d!==null?(Qe(i),l0(i,d)):(Qe(i),Zf(i,f,null,l,s))):d?d!==e.memoizedState?(ua(i),Qe(i),l0(i,d)):(Qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&ua(i),Qe(i),Zf(i,f,e,l,s)),null;case 27:if(ie(i),s=at.current,f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ua(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}e=Ct.current,ss(i)?Gm(i):(e=mv(f,l,s),i.stateNode=e,ua(i))}return Qe(i),null;case 5:if(ie(i),f=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&ua(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Qe(i),null}if(d=Ct.current,ss(i))Gm(i);else{var M=vu(at.current);switch(d){case 1:d=M.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=M.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=M.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=M.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?M.createElement("select",{is:l.is}):M.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?M.createElement(f,{is:l.is}):M.createElement(f)}}d[cn]=i,d[Tn]=l;t:for(M=i.child;M!==null;){if(M.tag===5||M.tag===6)d.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===i)break t;for(;M.sibling===null;){if(M.return===null||M.return===i)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}i.stateNode=d;t:switch(wn(d,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&ua(i)}}return Qe(i),Zf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&ua(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=at.current,ss(i)){if(e=i.stateNode,s=i.memoizedProps,l=null,f=An,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[cn]=i,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||av(e.nodeValue,s)),e||Ga(i,!0)}else e=vu(e).createTextNode(l),e[cn]=i,i.stateNode=e}return Qe(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(l=ss(i),s!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[cn]=i}else br(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),e=!1}else s=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(ri(i),i):(ri(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Qe(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=ss(i),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[cn]=i}else br(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qe(i),f=!1}else f=af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ri(i),i):(ri(i),null)}return ri(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==f&&(l.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),nu(i,i.updateQueue),Qe(i),null);case 4:return Ot(),e===null&&gh(i.stateNode.containerInfo),Qe(i),null;case 10:return ra(i.type),Qe(i),null;case 19:if(K(fn),l=i.memoizedState,l===null)return Qe(i),null;if(f=(i.flags&128)!==0,d=l.rendering,d===null)if(f)wo(l,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=kl(e),d!==null){for(i.flags|=128,wo(l,!1),e=d.updateQueue,i.updateQueue=e,nu(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)zm(s,e),s=s.sibling;return vt(fn,fn.current&1|2),we&&ia(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&At()>ou&&(i.flags|=128,f=!0,wo(l,!1),i.lanes=4194304)}else{if(!f)if(e=kl(d),e!==null){if(i.flags|=128,f=!0,e=e.updateQueue,i.updateQueue=e,nu(i,e),wo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!we)return Qe(i),null}else 2*At()-l.renderingStartTime>ou&&s!==536870912&&(i.flags|=128,f=!0,wo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=At(),e.sibling=null,s=fn.current,vt(fn,f?s&1|2:s&1),we&&ia(i,l.treeForkCount),e):(Qe(i),null);case 22:case 23:return ri(i),vf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Qe(i),i.subtreeFlags&6&&(i.flags|=8192)):Qe(i),s=i.updateQueue,s!==null&&nu(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),e!==null&&K(Rr),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ra(pn),Qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function Ry(e,i){switch(ef(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ra(pn),Ot(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ie(i),null;case 31:if(i.memoizedState!==null){if(ri(i),i.alternate===null)throw Error(a(340));br()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ri(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));br()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(fn),null;case 4:return Ot(),null;case 10:return ra(i.type),null;case 22:case 23:return ri(i),vf(),e!==null&&K(Rr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ra(pn),null;case 25:return null;default:return null}}function u0(e,i){switch(ef(i),i.tag){case 3:ra(pn),Ot();break;case 26:case 27:case 5:ie(i);break;case 4:Ot();break;case 31:i.memoizedState!==null&&ri(i);break;case 13:ri(i);break;case 19:K(fn);break;case 10:ra(i.type);break;case 22:case 23:ri(i),vf(),e!==null&&K(Rr);break;case 24:ra(pn)}}function Do(e,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&e)===e){l=void 0;var d=s.create,M=s.inst;l=d(),M.destroy=l}s=s.next}while(s!==f)}}catch(w){Xe(i,i.return,w)}}function Za(e,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var d=f.next;l=d;do{if((l.tag&e)===e){var M=l.inst,w=M.destroy;if(w!==void 0){M.destroy=void 0,f=i;var V=s,tt=w;try{tt()}catch(mt){Xe(f,V,mt)}}}l=l.next}while(l!==d)}}catch(mt){Xe(i,i.return,mt)}}function c0(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{tg(i,s)}catch(l){Xe(e,e.return,l)}}}function f0(e,i,s){s.props=Lr(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Xe(e,i,l)}}function Uo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(f){Xe(e,i,f)}}function Hi(e,i){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xe(e,i,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xe(e,i,f)}else s.current=null}function h0(e){var i=e.type,s=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break t;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xe(e,e.return,f)}}function jf(e,i,s){try{var l=e.stateNode;jy(l,e.type,s,i),l[Tn]=i}catch(f){Xe(e,e.return,f)}}function d0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&er(e.type)||e.tag===4}function Kf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||d0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&er(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jf(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ta));else if(l!==4&&(l===27&&er(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Jf(e,i,s),e=e.sibling;e!==null;)Jf(e,i,s),e=e.sibling}function iu(e,i,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(l!==4&&(l===27&&er(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(iu(e,i,s),e=e.sibling;e!==null;)iu(e,i,s),e=e.sibling}function p0(e){var i=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);wn(i,l,s),i[cn]=e,i[Tn]=s}catch(d){Xe(e,e.return,d)}}var ca=!1,vn=!1,Qf=!1,m0=typeof WeakSet=="function"?WeakSet:Set,En=null;function Cy(e,i){if(e=e.containerInfo,xh=bu,e=Rm(e),Xc(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{s.nodeType,d.nodeType}catch{s=null;break t}var M=0,w=-1,V=-1,tt=0,mt=0,St=e,st=null;e:for(;;){for(var lt;St!==s||f!==0&&St.nodeType!==3||(w=M+f),St!==d||l!==0&&St.nodeType!==3||(V=M+l),St.nodeType===3&&(M+=St.nodeValue.length),(lt=St.firstChild)!==null;)st=St,St=lt;for(;;){if(St===e)break e;if(st===s&&++tt===f&&(w=M),st===d&&++mt===l&&(V=M),(lt=St.nextSibling)!==null)break;St=st,st=St.parentNode}St=lt}s=w===-1||V===-1?null:{start:w,end:V}}else s=null}s=s||{start:0,end:0}}else s=null;for(Sh={focusedElem:e,selectionRange:s},bu=!1,En=i;En!==null;)if(i=En,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,En=e;else for(;En!==null;){switch(i=En,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)f=e[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,s=i,f=d.memoizedProps,d=d.memoizedState,l=s.stateNode;try{var Qt=Lr(s.type,f);e=l.getSnapshotBeforeUpdate(Qt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Xe(s,s.return,oe)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Eh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Eh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,En=e;break}En=i.return}}function g0(e,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ha(e,s),l&4&&Do(5,s);break;case 1:if(ha(e,s),l&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(M){Xe(s,s.return,M)}else{var f=Lr(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(f,i,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Xe(s,s.return,M)}}l&64&&c0(s),l&512&&Uo(s,s.return);break;case 3:if(ha(e,s),l&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{tg(e,i)}catch(M){Xe(s,s.return,M)}}break;case 27:i===null&&l&4&&p0(s);case 26:case 5:ha(e,s),i===null&&l&4&&h0(s),l&512&&Uo(s,s.return);break;case 12:ha(e,s);break;case 31:ha(e,s),l&4&&x0(e,s);break;case 13:ha(e,s),l&4&&S0(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Fy.bind(null,s),iM(e,s))));break;case 22:if(l=s.memoizedState!==null||ca,!l){i=i!==null&&i.memoizedState!==null||vn,f=ca;var d=vn;ca=l,(vn=i)&&!d?da(e,s,(s.subtreeFlags&8772)!==0):ha(e,s),ca=f,vn=d}break;case 30:break;default:ha(e,s)}}function v0(e){var i=e.alternate;i!==null&&(e.alternate=null,v0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ao(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Wn=!1;function fa(e,i,s){for(s=s.child;s!==null;)_0(e,i,s),s=s.sibling}function _0(e,i,s){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(ut,s)}catch{}switch(s.tag){case 26:vn||Hi(s,i),fa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:vn||Hi(s,i);var l=en,f=Wn;er(s.type)&&(en=s.stateNode,Wn=!1),fa(e,i,s),Ho(s.stateNode),en=l,Wn=f;break;case 5:vn||Hi(s,i);case 6:if(l=en,f=Wn,en=null,fa(e,i,s),en=l,Wn=f,en!==null)if(Wn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(s.stateNode)}catch(d){Xe(s,i,d)}else try{en.removeChild(s.stateNode)}catch(d){Xe(s,i,d)}break;case 18:en!==null&&(Wn?(e=en,cv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Rs(e)):cv(en,s.stateNode));break;case 4:l=en,f=Wn,en=s.stateNode.containerInfo,Wn=!0,fa(e,i,s),en=l,Wn=f;break;case 0:case 11:case 14:case 15:Za(2,s,i),vn||Za(4,s,i),fa(e,i,s);break;case 1:vn||(Hi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&f0(s,i,l)),fa(e,i,s);break;case 21:fa(e,i,s);break;case 22:vn=(l=vn)||s.memoizedState!==null,fa(e,i,s),vn=l;break;default:fa(e,i,s)}}function x0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rs(e)}catch(s){Xe(i,i.return,s)}}}function S0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rs(e)}catch(s){Xe(i,i.return,s)}}function wy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new m0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new m0),i;default:throw Error(a(435,e.tag))}}function au(e,i){var s=wy(e);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=By.bind(null,e,l);l.then(f,f)}})}function qn(e,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],d=e,M=i,w=M;t:for(;w!==null;){switch(w.tag){case 27:if(er(w.type)){en=w.stateNode,Wn=!1;break t}break;case 5:en=w.stateNode,Wn=!1;break t;case 3:case 4:en=w.stateNode.containerInfo,Wn=!0;break t}w=w.return}if(en===null)throw Error(a(160));_0(d,M,f),en=null,Wn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)y0(i,e),i=i.sibling}var wi=null;function y0(e,i){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:qn(i,e),Yn(e),l&4&&(Za(3,e,e.return),Do(3,e),Za(5,e,e.return));break;case 1:qn(i,e),Yn(e),l&512&&(vn||s===null||Hi(s,s.return)),l&64&&ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=wi;if(qn(i,e),Yn(e),l&512&&(vn||s===null||Hi(s,s.return)),l&4){var d=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){t:{l=e.type,s=e.memoizedProps,f=f.ownerDocument||f;e:switch(l){case"title":d=f.getElementsByTagName("title")[0],(!d||d[Na]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(l),f.head.insertBefore(d,f.querySelector("head > title"))),wn(d,l,s),d[cn]=e,dn(d),l=d;break t;case"link":var M=yv("link","href",f).get(l+(s.href||""));if(M){for(var w=0;w<M.length;w++)if(d=M[w],d.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&d.getAttribute("rel")===(s.rel==null?null:s.rel)&&d.getAttribute("title")===(s.title==null?null:s.title)&&d.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(w,1);break e}}d=f.createElement(l),wn(d,l,s),f.head.appendChild(d);break;case"meta":if(M=yv("meta","content",f).get(l+(s.content||""))){for(w=0;w<M.length;w++)if(d=M[w],d.getAttribute("content")===(s.content==null?null:""+s.content)&&d.getAttribute("name")===(s.name==null?null:s.name)&&d.getAttribute("property")===(s.property==null?null:s.property)&&d.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&d.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(w,1);break e}}d=f.createElement(l),wn(d,l,s),f.head.appendChild(d);break;default:throw Error(a(468,l))}d[cn]=e,dn(d),l=d}e.stateNode=l}else Mv(f,e.type,e.stateNode);else e.stateNode=Sv(f,l,e.memoizedProps);else d!==l?(d===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):d.count--,l===null?Mv(f,e.type,e.stateNode):Sv(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&jf(e,e.memoizedProps,s.memoizedProps)}break;case 27:qn(i,e),Yn(e),l&512&&(vn||s===null||Hi(s,s.return)),s!==null&&l&4&&jf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(qn(i,e),Yn(e),l&512&&(vn||s===null||Hi(s,s.return)),e.flags&32){f=e.stateNode;try{ei(f,"")}catch(Qt){Xe(e,e.return,Qt)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,jf(e,f,s!==null?s.memoizedProps:f)),l&1024&&(Qf=!0);break;case 6:if(qn(i,e),Yn(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(Qt){Xe(e,e.return,Qt)}}break;case 3:if(Su=null,f=wi,wi=_u(i.containerInfo),qn(i,e),wi=f,Yn(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Rs(i.containerInfo)}catch(Qt){Xe(e,e.return,Qt)}Qf&&(Qf=!1,M0(e));break;case 4:l=wi,wi=_u(e.stateNode.containerInfo),qn(i,e),Yn(e),wi=l;break;case 12:qn(i,e),Yn(e);break;case 31:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,au(e,l)));break;case 13:qn(i,e),Yn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(su=At()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,au(e,l)));break;case 22:f=e.memoizedState!==null;var V=s!==null&&s.memoizedState!==null,tt=ca,mt=vn;if(ca=tt||f,vn=mt||V,qn(i,e),vn=mt,ca=tt,Yn(e),l&8192)t:for(i=e.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||V||ca||vn||Nr(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){V=s=i;try{if(d=V.stateNode,f)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{w=V.stateNode;var St=V.memoizedProps.style,st=St!=null&&St.hasOwnProperty("display")?St.display:null;w.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Qt){Xe(V,V.return,Qt)}}}else if(i.tag===6){if(s===null){V=i;try{V.stateNode.nodeValue=f?"":V.memoizedProps}catch(Qt){Xe(V,V.return,Qt)}}}else if(i.tag===18){if(s===null){V=i;try{var lt=V.stateNode;f?fv(lt,!0):fv(V.stateNode,!1)}catch(Qt){Xe(V,V.return,Qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,au(e,s))));break;case 19:qn(i,e),Yn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,au(e,l)));break;case 30:break;case 21:break;default:qn(i,e),Yn(e)}}function Yn(e){var i=e.flags;if(i&2){try{for(var s,l=e.return;l!==null;){if(d0(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,d=Kf(e);iu(e,d,f);break;case 5:var M=s.stateNode;s.flags&32&&(ei(M,""),s.flags&=-33);var w=Kf(e);iu(e,w,M);break;case 3:case 4:var V=s.stateNode.containerInfo,tt=Kf(e);Jf(e,tt,V);break;default:throw Error(a(161))}}catch(mt){Xe(e,e.return,mt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function M0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;M0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ha(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)g0(e,i.alternate,i),i=i.sibling}function Nr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Nr(i);break;case 1:Hi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&f0(i,i.return,s),Nr(i);break;case 27:Ho(i.stateNode);case 26:case 5:Hi(i,i.return),Nr(i);break;case 22:i.memoizedState===null&&Nr(i);break;case 30:Nr(i);break;default:Nr(i)}e=e.sibling}}function da(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=e,d=i,M=d.flags;switch(d.tag){case 0:case 11:case 15:da(f,d,s),Do(4,d);break;case 1:if(da(f,d,s),l=d,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(tt){Xe(l,l.return,tt)}if(l=d,f=l.updateQueue,f!==null){var w=l.stateNode;try{var V=f.shared.hiddenCallbacks;if(V!==null)for(f.shared.hiddenCallbacks=null,f=0;f<V.length;f++)$m(V[f],w)}catch(tt){Xe(l,l.return,tt)}}s&&M&64&&c0(d),Uo(d,d.return);break;case 27:p0(d);case 26:case 5:da(f,d,s),s&&l===null&&M&4&&h0(d),Uo(d,d.return);break;case 12:da(f,d,s);break;case 31:da(f,d,s),s&&M&4&&x0(f,d);break;case 13:da(f,d,s),s&&M&4&&S0(f,d);break;case 22:d.memoizedState===null&&da(f,d,s),Uo(d,d.return);break;case 30:break;default:da(f,d,s)}i=i.sibling}}function $f(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&vo(s))}function th(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e))}function Di(e,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)E0(e,i,s,l),i=i.sibling}function E0(e,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Di(e,i,s,l),f&2048&&Do(9,i);break;case 1:Di(e,i,s,l);break;case 3:Di(e,i,s,l),f&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e)));break;case 12:if(f&2048){Di(e,i,s,l),e=i.stateNode;try{var d=i.memoizedProps,M=d.id,w=d.onPostCommit;typeof w=="function"&&w(M,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Xe(i,i.return,V)}}else Di(e,i,s,l);break;case 31:Di(e,i,s,l);break;case 13:Di(e,i,s,l);break;case 23:break;case 22:d=i.stateNode,M=i.alternate,i.memoizedState!==null?d._visibility&2?Di(e,i,s,l):Lo(e,i):d._visibility&2?Di(e,i,s,l):(d._visibility|=2,gs(e,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&$f(M,i);break;case 24:Di(e,i,s,l),f&2048&&th(i.alternate,i);break;default:Di(e,i,s,l)}}function gs(e,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,M=i,w=s,V=l,tt=M.flags;switch(M.tag){case 0:case 11:case 15:gs(d,M,w,V,f),Do(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?gs(d,M,w,V,f):Lo(d,M):(mt._visibility|=2,gs(d,M,w,V,f)),f&&tt&2048&&$f(M.alternate,M);break;case 24:gs(d,M,w,V,f),f&&tt&2048&&th(M.alternate,M);break;default:gs(d,M,w,V,f)}i=i.sibling}}function Lo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,l=i,f=l.flags;switch(l.tag){case 22:Lo(s,l),f&2048&&$f(l.alternate,l);break;case 24:Lo(s,l),f&2048&&th(l.alternate,l);break;default:Lo(s,l)}i=i.sibling}}var No=8192;function vs(e,i,s){if(e.subtreeFlags&No)for(e=e.child;e!==null;)b0(e,i,s),e=e.sibling}function b0(e,i,s){switch(e.tag){case 26:vs(e,i,s),e.flags&No&&e.memoizedState!==null&&mM(s,wi,e.memoizedState,e.memoizedProps);break;case 5:vs(e,i,s);break;case 3:case 4:var l=wi;wi=_u(e.stateNode.containerInfo),vs(e,i,s),wi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=No,No=16777216,vs(e,i,s),No=l):vs(e,i,s));break;default:vs(e,i,s)}}function T0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Oo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,R0(l,e)}T0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)A0(e),e=e.sibling}function A0(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ru(e)):Oo(e);break;default:Oo(e)}}function ru(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];En=l,R0(l,e)}T0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Za(8,i,i.return),ru(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,ru(i));break;default:ru(i)}e=e.sibling}}function R0(e,i){for(;En!==null;){var s=En;switch(s.tag){case 0:case 11:case 15:Za(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:vo(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,En=l;else t:for(s=e;En!==null;){l=En;var f=l.sibling,d=l.return;if(v0(l),l===s){En=null;break t}if(f!==null){f.return=d,En=f;break t}En=d}}}var Dy={getCacheForType:function(e){var i=Rn(pn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return Rn(pn).controller.signal}},Uy=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ke=null,be=null,Re=0,ke=0,si=null,ja=!1,_s=!1,eh=!1,pa=0,ln=0,Ka=0,Or=0,nh=0,oi=0,xs=0,Po=null,Zn=null,ih=!1,su=0,C0=0,ou=1/0,lu=null,Ja=null,Sn=0,Qa=null,Ss=null,ma=0,ah=0,rh=null,w0=null,zo=0,sh=null;function li(){return(Fe&2)!==0&&Re!==0?Re&-Re:L.T!==null?hh():eo()}function D0(){if(oi===0)if((Re&536870912)===0||we){var e=Me;Me<<=1,(Me&3932160)===0&&(Me=262144),oi=e}else oi=536870912;return e=ai.current,e!==null&&(e.flags|=32),oi}function jn(e,i,s){(e===Ke&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(ys(e,0),$a(e,Re,oi,!1)),fe(e,s),((Fe&2)===0||e!==Ke)&&(e===Ke&&((Fe&2)===0&&(Or|=s),ln===4&&$a(e,Re,oi,!1)),Gi(e))}function U0(e,i,s){if((Fe&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&e.expiredLanes)===0||qt(e,i),f=l?Oy(e,i):lh(e,i,!0),d=l;do{if(f===0){_s&&!l&&$a(e,i,0,!1);break}else{if(s=e.current.alternate,d&&!Ly(s)){f=lh(e,i,!1),d=!1;continue}if(f===2){if(d=i,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;t:{var w=e;f=Po;var V=w.current.memoizedState.isDehydrated;if(V&&(ys(w,M).flags|=256),M=lh(w,M,!1),M!==2){if(eh&&!V){w.errorRecoveryDisabledLanes|=d,Or|=d,f=4;break t}d=Zn,Zn=f,d!==null&&(Zn===null?Zn=d:Zn.push.apply(Zn,d))}f=M}if(d=!1,f!==2)continue}}if(f===1){ys(e,0),$a(e,i,0,!0);break}t:{switch(l=e,d=f,d){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:$a(l,i,oi,!ja);break t;case 2:Zn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=su+300-At(),10<f)){if($a(l,i,oi,!ja),gt(l,0,!0)!==0)break t;ma=i,l.timeoutHandle=lv(L0.bind(null,l,s,Zn,lu,ih,i,oi,Or,xs,ja,d,"Throttled",-0,0),f);break t}L0(l,s,Zn,lu,ih,i,oi,Or,xs,ja,d,null,-0,0)}}break}while(!0);Gi(e)}function L0(e,i,s,l,f,d,M,w,V,tt,mt,St,st,lt){if(e.timeoutHandle=-1,St=i.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},b0(i,d,St);var Qt=(d&62914560)===d?su-At():(d&4194048)===d?C0-At():0;if(Qt=gM(St,Qt),Qt!==null){ma=d,e.cancelPendingCommit=Qt(H0.bind(null,e,i,d,s,l,f,M,w,V,mt,St,null,st,lt)),$a(e,d,M,!tt);return}}H0(e,i,d,s,l,f,M,w,V)}function Ly(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],d=f.getSnapshot;f=f.value;try{if(!ni(d(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $a(e,i,s,l){i&=~nh,i&=~Or,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var f=i;0<f;){var d=31-Ht(f),M=1<<d;l[d]=-1,f&=~M}s!==0&&ze(e,s,i)}function uu(){return(Fe&6)===0?(Fo(0),!1):!0}function oh(){if(be!==null){if(ke===0)var e=be.return;else e=be,aa=Tr=null,Ef(e),fs=null,xo=0,e=be;for(;e!==null;)u0(e.alternate,e),e=e.return;be=null}}function ys(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Qy(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ma=0,oh(),Ke=e,be=s=na(e.current,null),Re=i,ke=0,si=null,ja=!1,_s=qt(e,i),eh=!1,xs=oi=nh=Or=Ka=ln=0,Zn=Po=null,ih=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var f=31-Ht(l),d=1<<f;i|=e[f],l&=~d}return pa=i,Dl(),s}function N0(e,i){_e=null,L.H=Ro,i===cs||i===Bl?(i=jm(),ke=3):i===ff?(i=jm(),ke=4):ke=i===If?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,si=i,be===null&&(ln=1,Ql(e,pi(i,e.current)))}function O0(){var e=ai.current;return e===null?!0:(Re&4194048)===Re?_i===null:(Re&62914560)===Re||(Re&536870912)!==0?e===_i:!1}function P0(){var e=L.H;return L.H=Ro,e===null?Ro:e}function z0(){var e=L.A;return L.A=Dy,e}function cu(){ln=4,ja||(Re&4194048)!==Re&&ai.current!==null||(_s=!0),(Ka&134217727)===0&&(Or&134217727)===0||Ke===null||$a(Ke,Re,oi,!1)}function lh(e,i,s){var l=Fe;Fe|=2;var f=P0(),d=z0();(Ke!==e||Re!==i)&&(lu=null,ys(e,i)),i=!1;var M=ln;t:do try{if(ke!==0&&be!==null){var w=be,V=si;switch(ke){case 8:oh(),M=6;break t;case 3:case 2:case 9:case 6:ai.current===null&&(i=!0);var tt=ke;if(ke=0,si=null,Ms(e,w,V,tt),s&&_s){M=0;break t}break;default:tt=ke,ke=0,si=null,Ms(e,w,V,tt)}}Ny(),M=ln;break}catch(mt){N0(e,mt)}while(!0);return i&&e.shellSuspendCounter++,aa=Tr=null,Fe=l,L.H=f,L.A=d,be===null&&(Ke=null,Re=0,Dl()),M}function Ny(){for(;be!==null;)F0(be)}function Oy(e,i){var s=Fe;Fe|=2;var l=P0(),f=z0();Ke!==e||Re!==i?(lu=null,ou=At()+500,ys(e,i)):_s=qt(e,i);t:do try{if(ke!==0&&be!==null){i=be;var d=si;e:switch(ke){case 1:ke=0,si=null,Ms(e,i,d,1);break;case 2:case 9:if(Ym(d)){ke=0,si=null,B0(i);break}i=function(){ke!==2&&ke!==9||Ke!==e||(ke=7),Gi(e)},d.then(i,i);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:Ym(d)?(ke=0,si=null,B0(i)):(ke=0,si=null,Ms(e,i,d,7));break;case 5:var M=null;switch(be.tag){case 26:M=be.memoizedState;case 5:case 27:var w=be;if(M?Ev(M):w.stateNode.complete){ke=0,si=null;var V=w.sibling;if(V!==null)be=V;else{var tt=w.return;tt!==null?(be=tt,fu(tt)):be=null}break e}}ke=0,si=null,Ms(e,i,d,5);break;case 6:ke=0,si=null,Ms(e,i,d,6);break;case 8:oh(),ln=6;break t;default:throw Error(a(462))}}Py();break}catch(mt){N0(e,mt)}while(!0);return aa=Tr=null,L.H=l,L.A=f,Fe=s,be!==null?0:(Ke=null,Re=0,Dl(),ln)}function Py(){for(;be!==null&&!$t();)F0(be)}function F0(e){var i=o0(e.alternate,e,pa);e.memoizedProps=e.pendingProps,i===null?fu(e):be=i}function B0(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=e0(s,i,i.pendingProps,i.type,void 0,Re);break;case 11:i=e0(s,i,i.pendingProps,i.type.render,i.ref,Re);break;case 5:Ef(i);default:u0(s,i),i=be=zm(i,pa),i=o0(s,i,pa)}e.memoizedProps=e.pendingProps,i===null?fu(e):be=i}function Ms(e,i,s,l){aa=Tr=null,Ef(i),fs=null,xo=0;var f=i.return;try{if(Ey(e,f,i,s,Re)){ln=1,Ql(e,pi(s,e.current)),be=null;return}}catch(d){if(f!==null)throw be=f,d;ln=1,Ql(e,pi(s,e.current)),be=null;return}i.flags&32768?(we||l===1?e=!0:_s||(Re&536870912)!==0?e=!1:(ja=e=!0,(l===2||l===9||l===3||l===6)&&(l=ai.current,l!==null&&l.tag===13&&(l.flags|=16384))),I0(i,e)):fu(i)}function fu(e){var i=e;do{if((i.flags&32768)!==0){I0(i,ja);return}e=i.return;var s=Ay(i.alternate,i,pa);if(s!==null){be=s;return}if(i=i.sibling,i!==null){be=i;return}be=i=e}while(i!==null);ln===0&&(ln=5)}function I0(e,i){do{var s=Ry(e.alternate,e);if(s!==null){s.flags&=32767,be=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){be=e;return}be=e=s}while(e!==null);ln=6,be=null}function H0(e,i,s,l,f,d,M,w,V){e.cancelPendingCommit=null;do hu();while(Sn!==0);if((Fe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(d=i.lanes|i.childLanes,d|=jc,nn(e,s,d,M,w,V),e===Ke&&(be=Ke=null,Re=0),Ss=i,Qa=e,ma=s,ah=d,rh=f,w0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Iy(Q,function(){return W0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=L.T,L.T=null,f=B.p,B.p=2,M=Fe,Fe|=4;try{Cy(e,i,s)}finally{Fe=M,B.p=f,L.T=l}}Sn=1,G0(),V0(),k0()}}function G0(){if(Sn===1){Sn=0;var e=Qa,i=Ss,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=L.T,L.T=null;var l=B.p;B.p=2;var f=Fe;Fe|=4;try{y0(i,e);var d=Sh,M=Rm(e.containerInfo),w=d.focusedElem,V=d.selectionRange;if(M!==w&&w&&w.ownerDocument&&Am(w.ownerDocument.documentElement,w)){if(V!==null&&Xc(w)){var tt=V.start,mt=V.end;if(mt===void 0&&(mt=tt),"selectionStart"in w)w.selectionStart=tt,w.selectionEnd=Math.min(mt,w.value.length);else{var St=w.ownerDocument||document,st=St&&St.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Qt=w.textContent.length,oe=Math.min(V.start,Qt),Ze=V.end===void 0?oe:Math.min(V.end,Qt);!lt.extend&&oe>Ze&&(M=Ze,Ze=oe,oe=M);var j=Tm(w,oe),W=Tm(w,Ze);if(j&&W&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==W.node||lt.focusOffset!==W.offset)){var $=St.createRange();$.setStart(j.node,j.offset),lt.removeAllRanges(),oe>Ze?(lt.addRange($),lt.extend(W.node,W.offset)):($.setEnd(W.node,W.offset),lt.addRange($))}}}}for(St=[],lt=w;lt=lt.parentNode;)lt.nodeType===1&&St.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<St.length;w++){var xt=St[w];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}bu=!!xh,Sh=xh=null}finally{Fe=f,B.p=l,L.T=s}}e.current=i,Sn=2}}function V0(){if(Sn===2){Sn=0;var e=Qa,i=Ss,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=L.T,L.T=null;var l=B.p;B.p=2;var f=Fe;Fe|=4;try{g0(e,i.alternate,i)}finally{Fe=f,B.p=l,L.T=s}}Sn=3}}function k0(){if(Sn===4||Sn===3){Sn=0,ce();var e=Qa,i=Ss,s=ma,l=w0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Sn=5:(Sn=0,Ss=Qa=null,X0(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Ja=null),to(s),i=i.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(ut,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=L.T,f=B.p,B.p=2,L.T=null;try{for(var d=e.onRecoverableError,M=0;M<l.length;M++){var w=l[M];d(w.value,{componentStack:w.stack})}}finally{L.T=i,B.p=f}}(ma&3)!==0&&hu(),Gi(e),f=e.pendingLanes,(s&261930)!==0&&(f&42)!==0?e===sh?zo++:(zo=0,sh=e):zo=0,Fo(0)}}function X0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,vo(i)))}function hu(){return G0(),V0(),k0(),W0()}function W0(){if(Sn!==5)return!1;var e=Qa,i=ah;ah=0;var s=to(ma),l=L.T,f=B.p;try{B.p=32>s?32:s,L.T=null,s=rh,rh=null;var d=Qa,M=ma;if(Sn=0,Ss=Qa=null,ma=0,(Fe&6)!==0)throw Error(a(331));var w=Fe;if(Fe|=4,A0(d.current),E0(d,d.current,M,s),Fe=w,Fo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(ut,d)}catch{}return!0}finally{B.p=f,L.T=l,X0(e,i)}}function q0(e,i,s){i=pi(s,i),i=Bf(e.stateNode,i,2),e=Wa(e,i,2),e!==null&&(fe(e,2),Gi(e))}function Xe(e,i,s){if(e.tag===3)q0(e,e,s);else for(;i!==null;){if(i.tag===3){q0(i,e,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ja===null||!Ja.has(l))){e=pi(s,e),s=Yg(2),l=Wa(i,s,2),l!==null&&(Zg(s,l,i,e),fe(l,2),Gi(l));break}}i=i.return}}function uh(e,i,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Uy;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(eh=!0,f.add(s),e=zy.bind(null,e,i,s),i.then(e,e))}function zy(e,i,s){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ke===e&&(Re&s)===s&&(ln===4||ln===3&&(Re&62914560)===Re&&300>At()-su?(Fe&2)===0&&ys(e,0):nh|=s,xs===Re&&(xs=0)),Gi(e)}function Y0(e,i){i===0&&(i=Rt()),e=Mr(e,i),e!==null&&(fe(e,i),Gi(e))}function Fy(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Y0(e,s)}function By(e,i){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Y0(e,s)}function Iy(e,i){return H(e,i)}var du=null,Es=null,ch=!1,pu=!1,fh=!1,tr=0;function Gi(e){e!==Es&&e.next===null&&(Es===null?du=Es=e:Es=Es.next=e),pu=!0,ch||(ch=!0,Gy())}function Fo(e,i){if(!fh&&pu){fh=!0;do for(var s=!1,l=du;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var d=0;else{var M=l.suspendedLanes,w=l.pingedLanes;d=(1<<31-Ht(42|e)+1)-1,d&=f&~(M&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(s=!0,J0(l,d))}else d=Re,d=gt(l,l===Ke?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||qt(l,d)||(s=!0,J0(l,d));l=l.next}while(s);fh=!1}}function Hy(){Z0()}function Z0(){pu=ch=!1;var e=0;tr!==0&&Jy()&&(e=tr);for(var i=At(),s=null,l=du;l!==null;){var f=l.next,d=j0(l,i);d===0?(l.next=null,s===null?du=f:s.next=f,f===null&&(Es=s)):(s=l,(e!==0||(d&3)!==0)&&(pu=!0)),l=f}Sn!==0&&Sn!==5||Fo(e),tr!==0&&(tr=0)}function j0(e,i){for(var s=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Ht(d),w=1<<M,V=f[M];V===-1?((w&s)===0||(w&l)!==0)&&(f[M]=Ft(w,i)):V<=i&&(e.expiredLanes|=w),d&=~w}if(i=Ke,s=Re,s=gt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===i&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ue(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||qt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(l!==null&&ue(l),to(s)){case 2:case 8:s=b;break;case 32:s=Q;break;case 268435456:s=Tt;break;default:s=Q}return l=K0.bind(null,e),s=H(s,l),e.callbackPriority=i,e.callbackNode=s,i}return l!==null&&l!==null&&ue(l),e.callbackPriority=2,e.callbackNode=null,2}function K0(e,i){if(Sn!==0&&Sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(hu()&&e.callbackNode!==s)return null;var l=Re;return l=gt(e,e===Ke?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(U0(e,l,i),j0(e,At()),e.callbackNode!=null&&e.callbackNode===s?K0.bind(null,e):null)}function J0(e,i){if(hu())return null;U0(e,i,!0)}function Gy(){$y(function(){(Fe&6)!==0?H(U,Hy):Z0()})}function hh(){if(tr===0){var e=ls;e===0&&(e=pe,pe<<=1,(pe&261888)===0&&(pe=256)),tr=e}return tr}function Q0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_r(""+e)}function $0(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function Vy(e,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var d=Q0((f[Tn]||null).action),M=l.submitter;M&&(i=(i=M[Tn]||null)?Q0(i.formAction):M.getAttribute("formAction"),i!==null&&(d=i,M=null));var w=new Al("action","action",null,l,f);e.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(tr!==0){var V=M?$0(f,M):new FormData(f);Lf(s,{pending:!0,data:V,method:f.method,action:d},null,V)}}else typeof d=="function"&&(w.preventDefault(),V=M?$0(f,M):new FormData(f),Lf(s,{pending:!0,data:V,method:f.method,action:d},d,V))},currentTarget:f}]})}}for(var dh=0;dh<Zc.length;dh++){var ph=Zc[dh],ky=ph.toLowerCase(),Xy=ph[0].toUpperCase()+ph.slice(1);Ci(ky,"on"+Xy)}Ci(Dm,"onAnimationEnd"),Ci(Um,"onAnimationIteration"),Ci(Lm,"onAnimationStart"),Ci("dblclick","onDoubleClick"),Ci("focusin","onFocus"),Ci("focusout","onBlur"),Ci(sy,"onTransitionRun"),Ci(oy,"onTransitionStart"),Ci(ly,"onTransitionCancel"),Ci(Nm,"onTransitionEnd"),rt("onMouseEnter",["mouseout","mouseover"]),rt("onMouseLeave",["mouseout","mouseover"]),rt("onPointerEnter",["pointerout","pointerover"]),rt("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function tv(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],f=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var M=l.length-1;0<=M;M--){var w=l[M],V=w.instance,tt=w.currentTarget;if(w=w.listener,V!==d&&f.isPropagationStopped())break t;d=w,f.currentTarget=tt;try{d(f)}catch(mt){wl(mt)}f.currentTarget=null,d=V}else for(M=0;M<l.length;M++){if(w=l[M],V=w.instance,tt=w.currentTarget,w=w.listener,V!==d&&f.isPropagationStopped())break t;d=w,f.currentTarget=tt;try{d(f)}catch(mt){wl(mt)}f.currentTarget=null,d=V}}}}function Te(e,i){var s=i[La];s===void 0&&(s=i[La]=new Set);var l=e+"__bubble";s.has(l)||(ev(i,e,2,!1),s.add(l))}function mh(e,i,s){var l=0;i&&(l|=4),ev(s,e,l,i)}var mu="_reactListening"+Math.random().toString(36).slice(2);function gh(e){if(!e[mu]){e[mu]=!0,Ml.forEach(function(s){s!=="selectionchange"&&(Wy.has(s)||mh(s,!1,e),mh(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[mu]||(i[mu]=!0,mh("selectionchange",!1,i))}}function ev(e,i,s,l){switch(Dv(i)){case 2:var f=xM;break;case 8:f=SM;break;default:f=Uh}s=f.bind(null,i,s,e),f=void 0,!Pc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(i,s,{capture:!0,passive:f}):e.addEventListener(i,s,!0):f!==void 0?e.addEventListener(i,s,{passive:f}):e.addEventListener(i,s,!1)}function vh(e,i,s,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var w=l.stateNode.containerInfo;if(w===f)break;if(M===4)for(M=l.return;M!==null;){var V=M.tag;if((V===3||V===4)&&M.stateNode.containerInfo===f)return;M=M.return}for(;w!==null;){if(M=Oa(w),M===null)return;if(V=M.tag,V===5||V===6||V===26||V===27){l=d=M;continue t}w=w.parentNode}}l=l.return}sm(function(){var tt=d,mt=Nc(s),St=[];t:{var st=Om.get(e);if(st!==void 0){var lt=Al,Qt=e;switch(e){case"keypress":if(bl(s)===0)break t;case"keydown":case"keyup":lt=BS;break;case"focusin":Qt="focus",lt=Ic;break;case"focusout":Qt="blur",lt=Ic;break;case"beforeblur":case"afterblur":lt=Ic;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=AS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=GS;break;case Dm:case Um:case Lm:lt=wS;break;case Nm:lt=kS;break;case"scroll":case"scrollend":lt=bS;break;case"wheel":lt=WS;break;case"copy":case"cut":case"paste":lt=US;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=fm;break;case"toggle":case"beforetoggle":lt=YS}var oe=(i&4)!==0,Ze=!oe&&(e==="scroll"||e==="scrollend"),j=oe?st!==null?st+"Capture":null:st;oe=[];for(var W=tt,$;W!==null;){var xt=W;if($=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||$===null||j===null||(xt=ro(W,j),xt!=null&&oe.push(Io(W,xt,$))),Ze)break;W=W.return}0<oe.length&&(st=new lt(st,Qt,null,s,mt),St.push({event:st,listeners:oe}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",st&&s!==Lc&&(Qt=s.relatedTarget||s.fromElement)&&(Oa(Qt)||Qt[$i]))break t;if((lt||st)&&(st=mt.window===mt?mt:(st=mt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Qt=s.relatedTarget||s.toElement,lt=tt,Qt=Qt?Oa(Qt):null,Qt!==null&&(Ze=u(Qt),oe=Qt.tag,Qt!==Ze||oe!==5&&oe!==27&&oe!==6)&&(Qt=null)):(lt=null,Qt=tt),lt!==Qt)){if(oe=um,xt="onMouseLeave",j="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(oe=fm,xt="onPointerLeave",j="onPointerEnter",W="pointer"),Ze=lt==null?st:vr(lt),$=Qt==null?st:vr(Qt),st=new oe(xt,W+"leave",lt,s,mt),st.target=Ze,st.relatedTarget=$,xt=null,Oa(mt)===tt&&(oe=new oe(j,W+"enter",Qt,s,mt),oe.target=$,oe.relatedTarget=Ze,xt=oe),Ze=xt,lt&&Qt)e:{for(oe=qy,j=lt,W=Qt,$=0,xt=j;xt;xt=oe(xt))$++;xt=0;for(var se=W;se;se=oe(se))xt++;for(;0<$-xt;)j=oe(j),$--;for(;0<xt-$;)W=oe(W),xt--;for(;$--;){if(j===W||W!==null&&j===W.alternate){oe=j;break e}j=oe(j),W=oe(W)}oe=null}else oe=null;lt!==null&&nv(St,st,lt,oe,!1),Qt!==null&&Ze!==null&&nv(St,Ze,Qt,oe,!0)}}t:{if(st=tt?vr(tt):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var Oe=xm;else if(vm(st))if(Sm)Oe=iy;else{Oe=ey;var ee=ty}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?tt&&Be(tt.elementType)&&(Oe=xm):Oe=ny;if(Oe&&(Oe=Oe(e,tt))){_m(St,Oe,s,mt);break t}ee&&ee(e,st,tt),e==="focusout"&&tt&&st.type==="number"&&tt.memoizedProps.value!=null&&Ee(st,"number",st.value)}switch(ee=tt?vr(tt):window,e){case"focusin":(vm(ee)||ee.contentEditable==="true")&&(ts=ee,Wc=tt,po=null);break;case"focusout":po=Wc=ts=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Cm(St,s,mt);break;case"selectionchange":if(ry)break;case"keydown":case"keyup":Cm(St,s,mt)}var xe;if(Gc)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else $r?mm(e,s)&&(Ce="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ce="onCompositionStart");Ce&&(hm&&s.locale!=="ko"&&($r||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&$r&&(xe=om()):(Ba=mt,zc="value"in Ba?Ba.value:Ba.textContent,$r=!0)),ee=gu(tt,Ce),0<ee.length&&(Ce=new cm(Ce,e,null,s,mt),St.push({event:Ce,listeners:ee}),xe?Ce.data=xe:(xe=gm(s),xe!==null&&(Ce.data=xe)))),(xe=jS?KS(e,s):JS(e,s))&&(Ce=gu(tt,"onBeforeInput"),0<Ce.length&&(ee=new cm("onBeforeInput","beforeinput",null,s,mt),St.push({event:ee,listeners:Ce}),ee.data=xe)),Vy(St,e,tt,s,mt)}tv(St,i)})}function Io(e,i,s){return{instance:e,listener:i,currentTarget:s}}function gu(e,i){for(var s=i+"Capture",l=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ro(e,s),f!=null&&l.unshift(Io(e,f,d)),f=ro(e,i),f!=null&&l.push(Io(e,f,d))),e.tag===3)return l;e=e.return}return[]}function qy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nv(e,i,s,l,f){for(var d=i._reactName,M=[];s!==null&&s!==l;){var w=s,V=w.alternate,tt=w.stateNode;if(w=w.tag,V!==null&&V===l)break;w!==5&&w!==26&&w!==27||tt===null||(V=tt,f?(tt=ro(s,d),tt!=null&&M.unshift(Io(s,tt,V))):f||(tt=ro(s,d),tt!=null&&M.push(Io(s,tt,V)))),s=s.return}M.length!==0&&e.push({event:i,listeners:M})}var Yy=/\r\n?/g,Zy=/\u0000|\uFFFD/g;function iv(e){return(typeof e=="string"?e:""+e).replace(Yy,`
`).replace(Zy,"")}function av(e,i){return i=iv(i),iv(e)===i}function Ye(e,i,s,l,f,d){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ei(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ei(e,""+l);break;case"className":Jt(e,"class",l);break;case"tabIndex":Jt(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,s,l);break;case"style":Ri(e,l,d);break;case"data":if(i!=="object"){Jt(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=_r(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(s==="formAction"?(i!=="input"&&Ye(e,i,"name",f.name,f,null),Ye(e,i,"formEncType",f.formEncType,f,null),Ye(e,i,"formMethod",f.formMethod,f,null),Ye(e,i,"formTarget",f.formTarget,f,null)):(Ye(e,i,"encType",f.encType,f,null),Ye(e,i,"method",f.method,f,null),Ye(e,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=_r(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=ta);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=_r(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":Te("beforetoggle",e),Te("toggle",e),Gt(e,"popover",l);break;case"xlinkActuate":Kt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Kt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Kt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Kt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Kt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Kt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Kt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Gt(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Fi.get(s)||s,Gt(e,s,l))}}function _h(e,i,s,l,f,d){switch(s){case"style":Ri(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof l=="string"?ei(e,l):(typeof l=="number"||typeof l=="bigint")&&ei(e,""+l);break;case"onScroll":l!=null&&Te("scroll",e);break;case"onScrollEnd":l!=null&&Te("scrollend",e);break;case"onClick":l!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),d=e[Tn]||null,d=d!=null?d[s]:null,typeof d=="function"&&e.removeEventListener(i,d,f),typeof l=="function")){typeof d!="function"&&d!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,l,f);break t}s in e?e[s]=l:l===!0?e.setAttribute(s,""):Gt(e,s,l)}}}function wn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var l=!1,f=!1,d;for(d in s)if(s.hasOwnProperty(d)){var M=s[d];if(M!=null)switch(d){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,d,M,s,null)}}f&&Ye(e,i,"srcSet",s.srcSet,s,null),l&&Ye(e,i,"src",s.src,s,null);return;case"input":Te("invalid",e);var w=d=M=f=null,V=null,tt=null;for(l in s)if(s.hasOwnProperty(l)){var mt=s[l];if(mt!=null)switch(l){case"name":f=mt;break;case"type":M=mt;break;case"checked":V=mt;break;case"defaultChecked":tt=mt;break;case"value":d=mt;break;case"defaultValue":w=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(a(137,i));break;default:Ye(e,i,l,mt,s,null)}}Nn(e,d,w,V,tt,M,f,!1);return;case"select":Te("invalid",e),l=M=d=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":M=w;break;case"multiple":l=w;default:Ye(e,i,f,w,s,null)}i=d,s=M,e.multiple=!!l,i!=null?xn(e,!!l,i,!1):s!=null&&xn(e,!!l,s,!0);return;case"textarea":Te("invalid",e),d=f=l=null;for(M in s)if(s.hasOwnProperty(M)&&(w=s[M],w!=null))switch(M){case"value":l=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Ye(e,i,M,w,s,null)}Ai(e,l,f,d);return;case"option":for(V in s)if(s.hasOwnProperty(V)&&(l=s[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ye(e,i,V,l,s,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(l=0;l<Bo.length;l++)Te(Bo[l],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in s)if(s.hasOwnProperty(tt)&&(l=s[tt],l!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ye(e,i,tt,l,s,null)}return;default:if(Be(i)){for(mt in s)s.hasOwnProperty(mt)&&(l=s[mt],l!==void 0&&_h(e,i,mt,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Ye(e,i,w,l,s,null))}function jy(e,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,M=null,w=null,V=null,tt=null,mt=null;for(lt in s){var St=s[lt];if(s.hasOwnProperty(lt)&&St!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":V=St;default:l.hasOwnProperty(lt)||Ye(e,i,lt,null,l,St)}}for(var st in l){var lt=l[st];if(St=s[st],l.hasOwnProperty(st)&&(lt!=null||St!=null))switch(st){case"type":d=lt;break;case"name":f=lt;break;case"checked":tt=lt;break;case"defaultChecked":mt=lt;break;case"value":M=lt;break;case"defaultValue":w=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(a(137,i));break;default:lt!==St&&Ye(e,i,st,lt,l,St)}}Zt(e,M,w,V,tt,mt,d,f);return;case"select":lt=M=w=st=null;for(d in s)if(V=s[d],s.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":lt=V;default:l.hasOwnProperty(d)||Ye(e,i,d,null,l,V)}for(f in l)if(d=l[f],V=s[f],l.hasOwnProperty(f)&&(d!=null||V!=null))switch(f){case"value":st=d;break;case"defaultValue":w=d;break;case"multiple":M=d;default:d!==V&&Ye(e,i,f,d,l,V)}i=w,s=M,l=lt,st!=null?xn(e,!!s,st,!1):!!l!=!!s&&(i!=null?xn(e,!!s,i,!0):xn(e,!!s,s?[]:"",!1));return;case"textarea":lt=st=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ye(e,i,w,null,l,f)}for(M in l)if(f=l[M],d=s[M],l.hasOwnProperty(M)&&(f!=null||d!=null))switch(M){case"value":st=f;break;case"defaultValue":lt=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==d&&Ye(e,i,M,f,l,d)}ti(e,st,lt);return;case"option":for(var Qt in s)if(st=s[Qt],s.hasOwnProperty(Qt)&&st!=null&&!l.hasOwnProperty(Qt))switch(Qt){case"selected":e.selected=!1;break;default:Ye(e,i,Qt,null,l,st)}for(V in l)if(st=l[V],lt=s[V],l.hasOwnProperty(V)&&st!==lt&&(st!=null||lt!=null))switch(V){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Ye(e,i,V,st,l,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in s)st=s[oe],s.hasOwnProperty(oe)&&st!=null&&!l.hasOwnProperty(oe)&&Ye(e,i,oe,null,l,st);for(tt in l)if(st=l[tt],lt=s[tt],l.hasOwnProperty(tt)&&st!==lt&&(st!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:Ye(e,i,tt,st,l,lt)}return;default:if(Be(i)){for(var Ze in s)st=s[Ze],s.hasOwnProperty(Ze)&&st!==void 0&&!l.hasOwnProperty(Ze)&&_h(e,i,Ze,void 0,l,st);for(mt in l)st=l[mt],lt=s[mt],!l.hasOwnProperty(mt)||st===lt||st===void 0&&lt===void 0||_h(e,i,mt,st,l,lt);return}}for(var j in s)st=s[j],s.hasOwnProperty(j)&&st!=null&&!l.hasOwnProperty(j)&&Ye(e,i,j,null,l,st);for(St in l)st=l[St],lt=s[St],!l.hasOwnProperty(St)||st===lt||st==null&&lt==null||Ye(e,i,St,st,l,lt)}function rv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ky(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],d=f.transferSize,M=f.initiatorType,w=f.duration;if(d&&w&&rv(M)){for(M=0,w=f.responseEnd,l+=1;l<s.length;l++){var V=s[l],tt=V.startTime;if(tt>w)break;var mt=V.transferSize,St=V.initiatorType;mt&&rv(St)&&(V=V.responseEnd,M+=mt*(V<w?1:(w-tt)/(V-tt)))}if(--l,i+=8*(d+M)/(f.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var xh=null,Sh=null;function vu(e){return e.nodeType===9?e:e.ownerDocument}function sv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ov(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function yh(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mh=null;function Jy(){var e=window.event;return e&&e.type==="popstate"?e===Mh?!1:(Mh=e,!0):(Mh=null,!1)}var lv=typeof setTimeout=="function"?setTimeout:void 0,Qy=typeof clearTimeout=="function"?clearTimeout:void 0,uv=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof uv<"u"?function(e){return uv.resolve(null).then(e).catch(tM)}:lv;function tM(e){setTimeout(function(){throw e})}function er(e){return e==="head"}function cv(e,i){var s=i,l=0;do{var f=s.nextSibling;if(e.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(f),Rs(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Ho(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Ho(s);for(var d=s.firstChild;d;){var M=d.nextSibling,w=d.nodeName;d[Na]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||s.removeChild(d),d=M}}else s==="body"&&Ho(e.ownerDocument.body);s=f}while(s);Rs(i)}function fv(e,i){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Eh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Eh(s),ao(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function eM(e,i,s,l){for(;e.nodeType===1;){var f=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Na])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function nM(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=xi(e.nextSibling),e===null))return null;return e}function hv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=xi(e.nextSibling),e===null))return null;return e}function bh(e){return e.data==="$?"||e.data==="$~"}function Th(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function iM(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function xi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Ah=null;function dv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return xi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function pv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function mv(e,i,s){switch(i=vu(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ho(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ao(e)}var Si=new Map,gv=new Set;function _u(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=B.d;B.d={f:aM,r:rM,D:sM,C:oM,L:lM,m:uM,X:fM,S:cM,M:hM};function aM(){var e=ga.f(),i=uu();return e||i}function rM(e){var i=Pa(e);i!==null&&i.tag===5&&i.type==="form"?Ng(i):ga.r(e)}var bs=typeof document>"u"?null:document;function vv(e,i,s){var l=bs;if(l&&typeof i=="string"&&i){var f=Ge(i);f='link[rel="'+e+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),gv.has(f)||(gv.add(f),e={rel:e,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),wn(i,"link",e),dn(i),l.head.appendChild(i)))}}function sM(e){ga.D(e),vv("dns-prefetch",e,null)}function oM(e,i){ga.C(e,i),vv("preconnect",e,i)}function lM(e,i,s){ga.L(e,i,s);var l=bs;if(l&&e&&i){var f='link[rel="preload"][as="'+Ge(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Ge(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Ge(s.imageSizes)+'"]')):f+='[href="'+Ge(e)+'"]';var d=f;switch(i){case"style":d=Ts(e);break;case"script":d=As(e)}Si.has(d)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Si.set(d,e),l.querySelector(f)!==null||i==="style"&&l.querySelector(Go(d))||i==="script"&&l.querySelector(Vo(d))||(i=l.createElement("link"),wn(i,"link",e),dn(i),l.head.appendChild(i)))}}function uM(e,i){ga.m(e,i);var s=bs;if(s&&e){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Ge(l)+'"][href="'+Ge(e)+'"]',d=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=As(e)}if(!Si.has(d)&&(e=_({rel:"modulepreload",href:e},i),Si.set(d,e),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Vo(d)))return}l=s.createElement("link"),wn(l,"link",e),dn(l),s.head.appendChild(l)}}}function cM(e,i,s){ga.S(e,i,s);var l=bs;if(l&&e){var f=za(l).hoistableStyles,d=Ts(e);i=i||"default";var M=f.get(d);if(!M){var w={loading:0,preload:null};if(M=l.querySelector(Go(d)))w.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Si.get(d))&&Rh(e,s);var V=M=l.createElement("link");dn(V),wn(V,"link",e),V._p=new Promise(function(tt,mt){V.onload=tt,V.onerror=mt}),V.addEventListener("load",function(){w.loading|=1}),V.addEventListener("error",function(){w.loading|=2}),w.loading|=4,xu(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:w},f.set(d,M)}}}function fM(e,i){ga.X(e,i);var s=bs;if(s&&e){var l=za(s).hoistableScripts,f=As(e),d=l.get(f);d||(d=s.querySelector(Vo(f)),d||(e=_({src:e,async:!0},i),(i=Si.get(f))&&Ch(e,i),d=s.createElement("script"),dn(d),wn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function hM(e,i){ga.M(e,i);var s=bs;if(s&&e){var l=za(s).hoistableScripts,f=As(e),d=l.get(f);d||(d=s.querySelector(Vo(f)),d||(e=_({src:e,async:!0,type:"module"},i),(i=Si.get(f))&&Ch(e,i),d=s.createElement("script"),dn(d),wn(d,"link",e),s.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(f,d))}}function _v(e,i,s,l){var f=(f=at.current)?_u(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ts(s.href),s=za(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ts(s.href);var d=za(f).hoistableStyles,M=d.get(e);if(M||(f=f.ownerDocument||f,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=f.querySelector(Go(e)))&&!d._p&&(M.instance=d,M.state.loading=5),Si.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Si.set(e,s),d||dM(f,e,s,M.state))),i&&l===null)throw Error(a(528,""));return M}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=As(s),s=za(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Ts(e){return'href="'+Ge(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function xv(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function dM(e,i,s,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",s),dn(i),e.head.appendChild(i))}function As(e){return'[src="'+Ge(e)+'"]'}function Vo(e){return"script[async]"+e}function Sv(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+Ge(s.href)+'"]');if(l)return i.instance=l,dn(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),dn(l),wn(l,"style",f),xu(l,s.precedence,e),i.instance=l;case"stylesheet":f=Ts(s.href);var d=e.querySelector(Go(f));if(d)return i.state.loading|=4,i.instance=d,dn(d),d;l=xv(s),(f=Si.get(f))&&Rh(l,f),d=(e.ownerDocument||e).createElement("link"),dn(d);var M=d;return M._p=new Promise(function(w,V){M.onload=w,M.onerror=V}),wn(d,"link",l),i.state.loading|=4,xu(d,s.precedence,e),i.instance=d;case"script":return d=As(s.src),(f=e.querySelector(Vo(d)))?(i.instance=f,dn(f),f):(l=s,(f=Si.get(d))&&(l=_({},s),Ch(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),dn(f),wn(f,"link",l),e.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,xu(l,s.precedence,e));return i.instance}function xu(e,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,d=f,M=0;M<l.length;M++){var w=l[M];if(w.dataset.precedence===i)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function Rh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Ch(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Su=null;function yv(e,i,s){if(Su===null){var l=new Map,f=Su=new Map;f.set(s,l)}else f=Su,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),f=0;f<s.length;f++){var d=s[f];if(!(d[Na]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(i)||"";M=e+M;var w=l.get(M);w?w.push(d):l.set(M,[d])}}return l}function Mv(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function pM(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Ev(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function mM(e,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ts(l.href),d=i.querySelector(Go(f));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=yu.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=d,dn(d);return}d=i.ownerDocument||i,l=xv(l),(f=Si.get(f))&&Rh(l,f),d=d.createElement("link"),dn(d);var M=d;M._p=new Promise(function(w,V){M.onload=w,M.onerror=V}),wn(d,"link",l),s.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=yu.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var wh=0;function gM(e,i){return e.stylesheets&&e.count===0&&Eu(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&Eu(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&wh===0&&(wh=62500*Ky());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Eu(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>wh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function yu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Eu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mu=null;function Eu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mu=new Map,i.forEach(vM,e),Mu=null,yu.call(e))}function vM(e,i){if(!(i.state.loading&4)){var s=Mu.get(e);if(s)var l=s.get(null);else{s=new Map,Mu.set(e,s);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var M=f[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}f=i.instance,M=f.getAttribute("data-precedence"),d=s.get(M)||l,d===l&&s.set(null,f),s.set(M,f),this.count++,l=yu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),i.state.loading|=4}}var ko={$$typeof:D,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function _M(e,i,s,l,f,d,M,w,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=te(0),this.hiddenUpdates=te(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function bv(e,i,s,l,f,d,M,w,V,tt,mt,St){return e=new _M(e,i,s,M,V,tt,mt,St,w),i=1,d===!0&&(i|=24),d=ii(3,null,null,i),e.current=d,d.stateNode=e,i=lf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:s,cache:i},hf(d),e}function Tv(e){return e?(e=is,e):is}function Av(e,i,s,l,f,d){f=Tv(f),l.context===null?l.context=f:l.pendingContext=f,l=Xa(i),l.payload={element:s},d=d===void 0?null:d,d!==null&&(l.callback=d),s=Wa(e,l,i),s!==null&&(jn(s,e,i),yo(s,e,i))}function Rv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function Dh(e,i){Rv(e,i),(e=e.alternate)&&Rv(e,i)}function Cv(e){if(e.tag===13||e.tag===31){var i=Mr(e,67108864);i!==null&&jn(i,e,67108864),Dh(e,67108864)}}function wv(e){if(e.tag===13||e.tag===31){var i=li();i=gr(i);var s=Mr(e,i);s!==null&&jn(s,e,i),Dh(e,i)}}var bu=!0;function xM(e,i,s,l){var f=L.T;L.T=null;var d=B.p;try{B.p=2,Uh(e,i,s,l)}finally{B.p=d,L.T=f}}function SM(e,i,s,l){var f=L.T;L.T=null;var d=B.p;try{B.p=8,Uh(e,i,s,l)}finally{B.p=d,L.T=f}}function Uh(e,i,s,l){if(bu){var f=Lh(l);if(f===null)vh(e,i,l,Tu,s),Uv(e,l);else if(MM(f,e,i,s,l))l.stopPropagation();else if(Uv(e,l),i&4&&-1<yM.indexOf(e)){for(;f!==null;){var d=Pa(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Dt(d.pendingLanes);if(M!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;M;){var V=1<<31-Ht(M);w.entanglements[1]|=V,M&=~V}Gi(d),(Fe&6)===0&&(ou=At()+500,Fo(0))}}break;case 31:case 13:w=Mr(d,2),w!==null&&jn(w,d,2),uu(),Dh(d,2)}if(d=Lh(l),d===null&&vh(e,i,l,Tu,s),d===f)break;f=d}f!==null&&l.stopPropagation()}else vh(e,i,l,null,s)}}function Lh(e){return e=Nc(e),Nh(e)}var Tu=null;function Nh(e){if(Tu=null,e=Oa(e),e!==null){var i=u(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=c(i),e!==null)return e;e=null}else if(s===31){if(e=h(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Tu=e,null}function Dv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Le()){case U:return 2;case b:return 8;case Q:case _t:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var Oh=!1,nr=null,ir=null,ar=null,Xo=new Map,Wo=new Map,rr=[],yM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uv(e,i){switch(e){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Xo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(i.pointerId)}}function qo(e,i,s,l,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Pa(i),i!==null&&Cv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),e)}function MM(e,i,s,l,f){switch(i){case"focusin":return nr=qo(nr,e,i,s,l,f),!0;case"dragenter":return ir=qo(ir,e,i,s,l,f),!0;case"mouseover":return ar=qo(ar,e,i,s,l,f),!0;case"pointerover":var d=f.pointerId;return Xo.set(d,qo(Xo.get(d)||null,e,i,s,l,f)),!0;case"gotpointercapture":return d=f.pointerId,Wo.set(d,qo(Wo.get(d)||null,e,i,s,l,f)),!0}return!1}function Lv(e){var i=Oa(e.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){e.blockedOn=i,no(e.priority,function(){wv(s)});return}}else if(i===31){if(i=h(s),i!==null){e.blockedOn=i,no(e.priority,function(){wv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Au(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Lh(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Lc=l,s.target.dispatchEvent(l),Lc=null}else return i=Pa(s),i!==null&&Cv(i),e.blockedOn=s,!1;i.shift()}return!0}function Nv(e,i,s){Au(e)&&s.delete(i)}function EM(){Oh=!1,nr!==null&&Au(nr)&&(nr=null),ir!==null&&Au(ir)&&(ir=null),ar!==null&&Au(ar)&&(ar=null),Xo.forEach(Nv),Wo.forEach(Nv)}function Ru(e,i){e.blockedOn===i&&(e.blockedOn=null,Oh||(Oh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,EM)))}var Cu=null;function Ov(e){Cu!==e&&(Cu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cu===e&&(Cu=null);for(var i=0;i<e.length;i+=3){var s=e[i],l=e[i+1],f=e[i+2];if(typeof l!="function"){if(Nh(l||s)===null)continue;break}var d=Pa(s);d!==null&&(e.splice(i,3),i-=3,Lf(d,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function Rs(e){function i(V){return Ru(V,e)}nr!==null&&Ru(nr,e),ir!==null&&Ru(ir,e),ar!==null&&Ru(ar,e),Xo.forEach(i),Wo.forEach(i);for(var s=0;s<rr.length;s++){var l=rr[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<rr.length&&(s=rr[0],s.blockedOn===null);)Lv(s),s.blockedOn===null&&rr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],d=s[l+1],M=f[Tn]||null;if(typeof d=="function")M||Ov(s);else if(M){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,M=d[Tn]||null)w=M.formAction;else if(Nh(f)!==null)continue}else w=M.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),Ov(s)}}}function Pv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(M){return f=M})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Ph(e){this._internalRoot=e}wu.prototype.render=Ph.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=li();Av(s,l,e,i,null,null)},wu.prototype.unmount=Ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Av(e.current,2,null,e,null,null),uu(),i[$i]=null}};function wu(e){this._internalRoot=e}wu.prototype.unstable_scheduleHydration=function(e){if(e){var i=eo();e={blockedOn:null,target:e,priority:i};for(var s=0;s<rr.length&&i!==0&&i<rr[s].priority;s++);rr.splice(s,0,e),s===0&&Lv(e)}};var zv=t.version;if(zv!=="19.2.7")throw Error(a(527,zv,"19.2.7"));B.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=m(i),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var bM={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Du.isDisabled&&Du.supportsFiber)try{ut=Du.inject(bM),ht=Du}catch{}}return Zo.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,l="",f=kg,d=Xg,M=Wg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError)),i=bv(e,1,!1,null,null,s,l,null,f,d,M,Pv),e[$i]=i.current,gh(e),new Ph(i)},Zo.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var l=!1,f="",d=kg,M=Xg,w=Wg,V=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.formState!==void 0&&(V=s.formState)),i=bv(e,1,!0,i,s??null,l,f,V,d,M,w,Pv),i.context=Tv(null),s=i.current,l=li(),l=gr(l),f=Xa(l),f.callback=null,Wa(s,f,l),s=l,i.current.lanes=s,fe(i,s),Gi(i),e[$i]=i.current,gh(e),new wu(i)},Zo.version="19.2.7",Zo}var qv;function PM(){if(qv)return Bh.exports;qv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Bh.exports=OM(),Bh.exports}var zM=PM();const FM=cx(zM);/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dp=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,fx=/^[\\/]{2}/;function BM(r,t){return t+r.replace(/\\/g,"/")}var Yv="popstate";function Zv(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function IM(r={}){function t(a,o){var m;let u=(m=o.state)==null?void 0:m.masked,{pathname:c,search:h,hash:p}=u||a.location;return Ud("",{pathname:c,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",u?{pathname:a.location.pathname,search:a.location.search,hash:a.location.hash}:void 0)}function n(a,o){return typeof o=="string"?o:ll(o)}return GM(t,n,null,r)}function rn(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function ji(r,t){if(!r){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function HM(){return Math.random().toString(36).substring(2,10)}function jv(r,t){return{usr:r.state,key:r.key,idx:t,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function Ud(r,t,n=null,a,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof t=="string"?js(t):t,state:n,key:t&&t.key||a||HM(),mask:o}}function ll({pathname:r="/",search:t="",hash:n=""}){return t&&t!=="?"&&(r+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function js(r){let t={};if(r){let n=r.indexOf("#");n>=0&&(t.hash=r.substring(n),r=r.substring(0,n));let a=r.indexOf("?");a>=0&&(t.search=r.substring(a),r=r.substring(0,a)),r&&(t.pathname=r)}return t}function GM(r,t,n,a={}){let{window:o=document.defaultView,v5Compat:u=!1}=a,c=o.history,h="POP",p=null,m=v();m==null&&(m=0,c.replaceState({...c.state,idx:m},""));function v(){return(c.state||{idx:null}).idx}function _(){h="POP";let S=v(),y=S==null?null:S-m;m=S,p&&p({action:h,location:A.location,delta:y})}function g(S,y){h="PUSH";let C=Zv(S)?S:Ud(A.location,S,y);m=v()+1;let D=jv(C,m),N=A.createHref(C.mask||C);try{c.pushState(D,"",N)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;o.location.assign(N)}u&&p&&p({action:h,location:A.location,delta:1})}function x(S,y){h="REPLACE";let C=Zv(S)?S:Ud(A.location,S,y);m=v();let D=jv(C,m),N=A.createHref(C.mask||C);c.replaceState(D,"",N),u&&p&&p({action:h,location:A.location,delta:0})}function E(S){return VM(o,S)}let A={get action(){return h},get location(){return r(o,c)},listen(S){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Yv,_),p=S,()=>{o.removeEventListener(Yv,_),p=null}},createHref(S){return t(o,S)},createURL:E,encodeLocation(S){let y=E(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:g,replace:x,go(S){return c.go(S)}};return A}function VM(r,t,n=!1){let a="http://localhost";r&&(a=r.location.origin!=="null"?r.location.origin:r.location.href),rn(a,"No window.location.(origin|href) available to create URL");let o=typeof t=="string"?t:ll(t);return o=o.replace(/ $/,"%20"),!n&&fx.test(o)&&(o=a+o),new URL(o,a)}function hx(r,t,n="/"){return kM(r,t,n,!1)}function kM(r,t,n,a,o){let u=typeof t=="string"?js(t):t,c=Ra(u.pathname||"/",n);if(c==null)return null;let h=XM(r),p=null,m=eE(c);for(let v=0;p==null&&v<h.length;++v)p=tE(h[v],m,a);return p}function XM(r){let t=dx(r);return WM(t),t}function dx(r,t=[],n=[],a="",o=!1){let u=(c,h,p=o,m)=>{let v={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(v.relativePath.startsWith("/")){if(!v.relativePath.startsWith(a)&&p)return;rn(v.relativePath.startsWith(a),`Absolute route path "${v.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),v.relativePath=v.relativePath.slice(a.length)}let _=zi([a,v.relativePath]),g=n.concat(v);c.children&&c.children.length>0&&(rn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),dx(c.children,t,g,_,p)),!(c.path==null&&!c.index)&&t.push({path:_,score:QM(_,c.index),routesMeta:g.map((x,E)=>{let[A,S]=gx(x.relativePath,x.caseSensitive,E===g.length-1);return{...x,matcher:A,compiledParams:S}})})};return r.forEach((c,h)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))u(c,h);else for(let m of px(c.path))u(c,h,!0,m)}),t}function px(r){let t=r.split("/");if(t.length===0)return[];let[n,...a]=t,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(a.length===0)return o?[u,""]:[u];let c=px(a.join("/")),h=[];return h.push(...c.map(p=>p===""?u:[u,p].join("/"))),o&&h.push(...c),h.map(p=>r.startsWith("/")&&p===""?"/":p)}function WM(r){r.sort((t,n)=>t.score!==n.score?n.score-t.score:$M(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}var qM=/^:[\w-]+$/,YM=3,ZM=2,jM=1,KM=10,JM=-2,Kv=r=>r==="*";function QM(r,t){let n=r.split("/"),a=n.length;return n.some(Kv)&&(a+=JM),t&&(a+=ZM),n.filter(o=>!Kv(o)).reduce((o,u)=>o+(qM.test(u)?YM:u===""?jM:KM),a)}function $M(r,t){return r.length===t.length&&r.slice(0,-1).every((a,o)=>a===t[o])?r[r.length-1]-t[t.length-1]:0}function tE(r,t,n=!1){let{routesMeta:a}=r,o={},u="/",c=[];for(let h=0;h<a.length;++h){let p=a[h],m=h===a.length-1,v=u==="/"?t:t.slice(u.length)||"/",_={path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g=p.matcher&&p.compiledParams?mx(_,v,p.matcher,p.compiledParams):pc(_,v),x=p.route;if(!g&&m&&n&&!a[a.length-1].route.index&&(g=pc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},v)),!g)return null;Object.assign(o,g.params),c.push({params:o,pathname:zi([u,g.pathname]),pathnameBase:aE(zi([u,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(u=zi([u,g.pathnameBase]))}return c}function pc(r,t){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,a]=gx(r.path,r.caseSensitive,r.end);return mx(r,t,n,a)}function mx(r,t,n,a){let o=t.match(n);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:a.reduce((m,{paramName:v,isOptional:_},g)=>{if(v==="*"){let E=h[g]||"";c=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const x=h[g];return _&&!x?m[v]=void 0:m[v]=(x||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:c,pattern:r}}function gx(r,t=!1,n=!0){ji(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,p,m,v)=>{if(a.push({paramName:h,isOptional:p!=null}),p){let _=v.charAt(m+c.length);return _&&_!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),a]}function eE(r){try{return r.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ji(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),r}}function Ra(r,t){if(t==="/")return r;if(!r.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=r.charAt(n);return a&&a!=="/"?null:r.slice(n)||"/"}function nE(r,t="/"){let{pathname:n,search:a="",hash:o=""}=typeof r=="string"?js(r):r,u;return n?(n=_x(n),n.startsWith("/")?u=Jv(n.substring(1),"/"):u=Jv(n,t)):u=t,{pathname:u,search:rE(a),hash:sE(o)}}function Jv(r,t){let n=mc(t).split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vh(r,t,n,a){return`Cannot include a '${r}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function iE(r){return r.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function vx(r){let t=iE(r);return t.map((n,a)=>a===t.length-1?n.pathname:n.pathnameBase)}function Up(r,t,n,a=!1){let o;typeof r=="string"?o=js(r):(o={...r},rn(!o.pathname||!o.pathname.includes("?"),Vh("?","pathname","search",o)),rn(!o.pathname||!o.pathname.includes("#"),Vh("#","pathname","hash",o)),rn(!o.search||!o.search.includes("#"),Vh("#","search","hash",o)));let u=r===""||o.pathname==="",c=u?"/":o.pathname,h;if(c==null)h=n;else{let _=t.length-1;if(!a&&c.startsWith("..")){let g=c.split("/");for(;g[0]==="..";)g.shift(),_-=1;o.pathname=g.join("/")}h=_>=0?t[_]:"/"}let p=nE(o,h),m=c&&c!=="/"&&c.endsWith("/"),v=(u||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}var _x=r=>r.replace(/[\\/]{2,}/g,"/"),zi=r=>_x(r.join("/")),mc=r=>r.replace(/\/+$/,""),aE=r=>mc(r).replace(/^\/*/,"/"),rE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,sE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,oE=class{constructor(r,t,n,a=!1){this.status=r,this.statusText=t||"",this.internal=a,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function lE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function uE(r){let t=r.map(n=>n.route.path).filter(Boolean);return zi(t)||"/"}var xx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sx(r,t){let n=r;if(typeof n!="string"||!Dp.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let a=n,o=!1;if(xx)try{let u=new URL(window.location.href),c=fx.test(n)?new URL(BM(n,u.protocol)):new URL(n),h=Ra(c.pathname,t);c.origin===u.origin&&h!=null?n=h+c.search+c.hash:o=!0}catch{ji(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:a,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var yx=["POST","PUT","PATCH","DELETE"];new Set(yx);var cE=["GET",...yx];new Set(cE);var fE=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function hE(r){try{return fE.includes(new URL(r).protocol)}catch{return!1}}var Ks=ct.createContext(null);Ks.displayName="DataRouter";var Ec=ct.createContext(null);Ec.displayName="DataRouterState";var Mx=ct.createContext(!1);function dE(){return ct.useContext(Mx)}var Ex=ct.createContext({isTransitioning:!1});Ex.displayName="ViewTransition";var pE=ct.createContext(new Map);pE.displayName="Fetchers";var mE=ct.createContext(null);mE.displayName="Await";var Ti=ct.createContext(null);Ti.displayName="Navigation";var ml=ct.createContext(null);ml.displayName="Location";var Da=ct.createContext({outlet:null,matches:[],isDataRoute:!1});Da.displayName="Route";var Lp=ct.createContext(null);Lp.displayName="RouteError";var bx="REACT_ROUTER_ERROR",gE="REDIRECT",vE="ROUTE_ERROR_RESPONSE";function _E(r){if(r.startsWith(`${bx}:${gE}:{`))try{let t=JSON.parse(r.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function xE(r){if(r.startsWith(`${bx}:${vE}:{`))try{let t=JSON.parse(r.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new oE(t.status,t.statusText,t.data)}catch{}}function SE(r,{relative:t}={}){rn(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:a}=ct.useContext(Ti),{hash:o,pathname:u,search:c}=vl(r,{relative:t}),h=u;return n!=="/"&&(h=u==="/"?n:zi([n,u])),a.createHref({pathname:h,search:c,hash:o})}function gl(){return ct.useContext(ml)!=null}function Ua(){return rn(gl(),"useLocation() may be used only in the context of a <Router> component."),ct.useContext(ml).location}var Tx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Ax(r){ct.useContext(Ti).static||ct.useLayoutEffect(r)}function yE(){let{isDataRoute:r}=ct.useContext(Da);return r?OE():ME()}function ME(){rn(gl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ct.useContext(Ks),{basename:t,navigator:n}=ct.useContext(Ti),{matches:a}=ct.useContext(Da),{pathname:o}=Ua(),u=JSON.stringify(vx(a)),c=ct.useRef(!1);return Ax(()=>{c.current=!0}),ct.useCallback((p,m={})=>{if(ji(c.current,Tx),!c.current)return;if(typeof p=="number"){n.go(p);return}let v=Up(p,JSON.parse(u),o,m.relative==="path");r==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:zi([t,v.pathname])),(m.replace?n.replace:n.push)(v,m.state,m)},[t,n,u,o,r])}ct.createContext(null);function vl(r,{relative:t}={}){let{matches:n}=ct.useContext(Da),{pathname:a}=Ua(),o=JSON.stringify(vx(n));return ct.useMemo(()=>Up(r,JSON.parse(o),a,t==="path"),[r,o,a,t])}function EE(r,t){return Rx(r,t)}function Rx(r,t,n){var S;rn(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=ct.useContext(Ti),{matches:o}=ct.useContext(Da),u=o[o.length-1],c=u?u.params:{},h=u?u.pathname:"/",p=u?u.pathnameBase:"/",m=u&&u.route;{let y=m&&m.path||"";wx(h,!m||y.endsWith("*")||y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${y}"> to <Route path="${y==="/"?"*":`${y}/*`}">.`)}let v=Ua(),_;if(t){let y=typeof t=="string"?js(t):t;rn(p==="/"||((S=y.pathname)==null?void 0:S.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${y.pathname}" was given in the \`location\` prop.`),_=y}else _=v;let g=_.pathname||"/",x=g;if(p!=="/"){let y=p.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let E=n&&n.state.matches.length?n.state.matches.map(y=>Object.assign(y,{route:n.manifest[y.route.id]||y.route})):hx(r,{pathname:x});ji(m||E!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),ji(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let A=CE(E&&E.map(y=>Object.assign({},y,{params:Object.assign({},c,y.params),pathname:zi([p,a.encodeLocation?a.encodeLocation(y.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?p:zi([p,a.encodeLocation?a.encodeLocation(y.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:y.pathnameBase])})),o,n);return t&&A?ct.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,..._},navigationType:"POP"}},A):A}function bE(){let r=NE(),t=lE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},u={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=ct.createElement(ct.Fragment,null,ct.createElement("p",null,"💿 Hey developer 👋"),ct.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ct.createElement("code",{style:u},"ErrorBoundary")," or"," ",ct.createElement("code",{style:u},"errorElement")," prop on your route.")),ct.createElement(ct.Fragment,null,ct.createElement("h2",null,"Unexpected Application Error!"),ct.createElement("h3",{style:{fontStyle:"italic"}},t),n?ct.createElement("pre",{style:o},n):null,c)}var TE=ct.createElement(bE,null),Cx=class extends ct.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location||t.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:t.error,location:t.location,revalidation:r.revalidation||t.revalidation}}componentDidCatch(r,t){this.props.onError?this.props.onError(r,t):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const n=xE(r.digest);n&&(r=n)}let t=r!==void 0?ct.createElement(Da.Provider,{value:this.props.routeContext},ct.createElement(Lp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ct.createElement(AE,{error:r},t):t}};Cx.contextType=Mx;var kh=new WeakMap;function AE({children:r,error:t}){let{basename:n}=ct.useContext(Ti);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=_E(t.digest);if(a){let o=kh.get(t);if(o)throw o;let u=Sx(a.location,n),c=u.absoluteURL||u.to;if(hE(c))throw new Error("Invalid redirect location");if(xx&&!kh.get(t))if(u.isExternal||a.reloadDocument)window.location.href=c;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:a.replace}));throw kh.set(t,h),h}return ct.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c}`})}}return r}function RE({routeContext:r,match:t,children:n}){let a=ct.useContext(Ks);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ct.createElement(Da.Provider,{value:r},n)}function CE(r,t=[],n){let a=n==null?void 0:n.state;if(r==null){if(!a)return null;if(a.errors)r=a.matches;else if(t.length===0&&!a.initialized&&a.matches.length>0)r=a.matches;else return null}let o=r,u=a==null?void 0:a.errors;if(u!=null){let v=o.findIndex(_=>_.route.id&&(u==null?void 0:u[_.route.id])!==void 0);rn(v>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,v+1))}let c=!1,h=-1;if(n&&a){c=a.renderFallback;for(let v=0;v<o.length;v++){let _=o[v];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=v),_.route.id){let{loaderData:g,errors:x}=a,E=_.route.loader&&!g.hasOwnProperty(_.route.id)&&(!x||x[_.route.id]===void 0);if(_.route.lazy||E){n.isStatic&&(c=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let p=n==null?void 0:n.onError,m=a&&p?(v,_)=>{var g,x;p(v,{location:a.location,params:((x=(g=a.matches)==null?void 0:g[0])==null?void 0:x.params)??{},pattern:uE(a.matches),errorInfo:_})}:void 0;return o.reduceRight((v,_,g)=>{let x,E=!1,A=null,S=null;a&&(x=u&&_.route.id?u[_.route.id]:void 0,A=_.route.errorElement||TE,c&&(h<0&&g===0?(wx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,S=null):h===g&&(E=!0,S=_.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,g+1)),C=()=>{let D;return x?D=A:E?D=S:_.route.Component?D=ct.createElement(_.route.Component,null):_.route.element?D=_.route.element:D=v,ct.createElement(RE,{match:_,routeContext:{outlet:v,matches:y,isDataRoute:a!=null},children:D})};return a&&(_.route.ErrorBoundary||_.route.errorElement||g===0)?ct.createElement(Cx,{location:a.location,revalidation:a.revalidation,component:A,error:x,children:C(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:m}):C()},null)}function Np(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wE(r){let t=ct.useContext(Ks);return rn(t,Np(r)),t}function DE(r){let t=ct.useContext(Ec);return rn(t,Np(r)),t}function UE(r){let t=ct.useContext(Da);return rn(t,Np(r)),t}function Op(r){let t=UE(r),n=t.matches[t.matches.length-1];return rn(n.route.id,`${r} can only be used on routes that contain a unique "id"`),n.route.id}function LE(){return Op("useRouteId")}function NE(){var a;let r=ct.useContext(Lp),t=DE("useRouteError"),n=Op("useRouteError");return r!==void 0?r:(a=t.errors)==null?void 0:a[n]}function OE(){let{router:r}=wE("useNavigate"),t=Op("useNavigate"),n=ct.useRef(!1);return Ax(()=>{n.current=!0}),ct.useCallback(async(o,u={})=>{ji(n.current,Tx),n.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:t,...u}))},[r,t])}var Qv={};function wx(r,t,n){!t&&!Qv[r]&&(Qv[r]=!0,ji(!1,n))}ct.memo(PE);function PE({routes:r,manifest:t,future:n,state:a,isStatic:o,onError:u}){return Rx(r,void 0,{manifest:t,state:a,isStatic:o,onError:u})}function Ld(r){rn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function zE({basename:r="/",children:t=null,location:n,navigationType:a="POP",navigator:o,static:u=!1,useTransitions:c}){rn(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=ct.useMemo(()=>({basename:h,navigator:o,static:u,useTransitions:c,future:{}}),[h,o,u,c]);typeof n=="string"&&(n=js(n));let{pathname:m="/",search:v="",hash:_="",state:g=null,key:x="default",mask:E}=n,A=ct.useMemo(()=>{let S=Ra(m,h);return S==null?null:{location:{pathname:S,search:v,hash:_,state:g,key:x,mask:E},navigationType:a}},[h,m,v,_,g,x,a,E]);return ji(A!=null,`<Router basename="${h}"> is not able to match the URL "${m}${v}${_}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:ct.createElement(Ti.Provider,{value:p},ct.createElement(ml.Provider,{children:t,value:A}))}function FE({children:r,location:t}){return EE(Nd(r),t)}function Nd(r,t=[]){let n=[];return ct.Children.forEach(r,(a,o)=>{if(!ct.isValidElement(a))return;let u=[...t,o];if(a.type===ct.Fragment){n.push.apply(n,Nd(a.props.children,u));return}rn(a.type===Ld,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||u.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Nd(a.props.children,u)),n.push(c)}),n}var rc="get",sc="application/x-www-form-urlencoded";function bc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function BE(r){return bc(r)&&r.tagName.toLowerCase()==="button"}function IE(r){return bc(r)&&r.tagName.toLowerCase()==="form"}function HE(r){return bc(r)&&r.tagName.toLowerCase()==="input"}function GE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function VE(r,t){return r.button===0&&(!t||t==="_self")&&!GE(r)}var Uu=null;function kE(){if(Uu===null)try{new FormData(document.createElement("form"),0),Uu=!1}catch{Uu=!0}return Uu}var XE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Xh(r){return r!=null&&!XE.has(r)?(ji(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sc}"`),null):r}function WE(r,t){let n,a,o,u,c;if(IE(r)){let h=r.getAttribute("action");a=h?Ra(h,t):null,n=r.getAttribute("method")||rc,o=Xh(r.getAttribute("enctype"))||sc,u=new FormData(r)}else if(BE(r)||HE(r)&&(r.type==="submit"||r.type==="image")){let h=r.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||h.getAttribute("action");if(a=p?Ra(p,t):null,n=r.getAttribute("formmethod")||h.getAttribute("method")||rc,o=Xh(r.getAttribute("formenctype"))||Xh(h.getAttribute("enctype"))||sc,u=new FormData(h,r),!kE()){let{name:m,type:v,value:_}=r;if(v==="image"){let g=m?`${m}.`:"";u.append(`${g}x`,"0"),u.append(`${g}y`,"0")}else m&&u.append(m,_)}}else{if(bc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=rc,a=null,o=sc,c=r}return u&&o==="text/plain"&&(c=u,u=void 0),{action:a,method:n.toLowerCase(),encType:o,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Pp(r,t){if(r===!1||r===null||typeof r>"u")throw new Error(t)}function Dx(r,t,n,a){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${a}`:o.pathname=`${o.pathname}.${a}`:o.pathname==="/"?o.pathname=`_root.${a}`:t&&Ra(o.pathname,t)==="/"?o.pathname=`${mc(t)}/_root.${a}`:o.pathname=`${mc(o.pathname)}.${a}`,o}async function qE(r,t){if(r.id in t)return t[r.id];try{let n=await import(r.module);return t[r.id]=n,n}catch(n){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function YE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function ZE(r,t,n){let a=await Promise.all(r.map(async o=>{let u=t.routes[o.route.id];if(u){let c=await qE(u,n);return c.links?c.links():[]}return[]}));return QE(a.flat(1).filter(YE).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $v(r,t,n,a,o,u){let c=(p,m)=>n[m]?p.route.id!==n[m].route.id:!0,h=(p,m)=>{var v;return n[m].pathname!==p.pathname||((v=n[m].route.path)==null?void 0:v.endsWith("*"))&&n[m].params["*"]!==p.params["*"]};return u==="assets"?t.filter((p,m)=>c(p,m)||h(p,m)):u==="data"?t.filter((p,m)=>{var _;let v=a.routes[p.route.id];if(!v||!v.hasLoader)return!1;if(c(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let g=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function jE(r,t,{includeHydrateFallback:n}={}){return KE(r.map(a=>{let o=t.routes[a.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function KE(r){return[...new Set(r)]}function JE(r){let t={},n=Object.keys(r).sort();for(let a of n)t[a]=r[a];return t}function QE(r,t){let n=new Set;return new Set(t),r.reduce((a,o)=>{let u=JSON.stringify(JE(o));return n.has(u)||(n.add(u),a.push({key:u,link:o})),a},[])}function zp(){let r=ct.useContext(Ks);return Pp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function $E(){let r=ct.useContext(Ec);return Pp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Fp=ct.createContext(void 0);Fp.displayName="FrameworkContext";function Tc(){let r=ct.useContext(Fp);return Pp(r,"You must render this element inside a <HydratedRouter> element"),r}function tb(r,t){let n=ct.useContext(Fp),[a,o]=ct.useState(!1),[u,c]=ct.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:v,onTouchStart:_}=t,g=ct.useRef(null);ct.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let A=y=>{y.forEach(C=>{c(C.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return g.current&&S.observe(g.current),()=>{S.disconnect()}}},[r]),ct.useEffect(()=>{if(a){let A=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(A)}}},[a]);let x=()=>{o(!0)},E=()=>{o(!1),c(!1)};return n?r!=="intent"?[u,g,{}]:[u,g,{onFocus:jo(h,x),onBlur:jo(p,E),onMouseEnter:jo(m,x),onMouseLeave:jo(v,E),onTouchStart:jo(_,x)}]:[!1,g,{}]}function jo(r,t){return n=>{r&&r(n),n.defaultPrevented||t(n)}}function eb({page:r,...t}){let n=dE(),{nonce:a}=Tc(),{router:o}=zp(),u=ct.useMemo(()=>hx(o.routes,r,o.basename),[o.routes,r,o.basename]);return u?(t.nonce==null&&a&&(t={...t,nonce:a}),n?ct.createElement(ib,{page:r,matches:u,...t}):ct.createElement(ab,{page:r,matches:u,...t})):null}function nb(r){let{manifest:t,routeModules:n}=Tc(),[a,o]=ct.useState([]);return ct.useEffect(()=>{let u=!1;return ZE(r,t,n).then(c=>{u||o(c)}),()=>{u=!0}},[r,t,n]),a}function ib({page:r,matches:t,...n}){let a=Ua(),{future:o}=Tc(),{basename:u}=zp(),c=ct.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let h=Dx(r,u,o.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,m=[];for(let v of t)typeof v.route.shouldRevalidate=="function"?p=!0:m.push(v.route.id);return p&&m.length>0&&h.searchParams.set("_routes",m.join(",")),[h.pathname+h.search]},[u,o.v8_trailingSlashAwareDataRequests,r,a,t]);return ct.createElement(ct.Fragment,null,c.map(h=>ct.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...n})))}function ab({page:r,matches:t,...n}){let a=Ua(),{future:o,manifest:u,routeModules:c}=Tc(),{basename:h}=zp(),{loaderData:p,matches:m}=$E(),v=ct.useMemo(()=>$v(r,t,m,u,a,"data"),[r,t,m,u,a]),_=ct.useMemo(()=>$v(r,t,m,u,a,"assets"),[r,t,m,u,a]),g=ct.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let A=new Set,S=!1;if(t.forEach(C=>{var N;let D=u.routes[C.route.id];!D||!D.hasLoader||(!v.some(G=>G.route.id===C.route.id)&&C.route.id in p&&((N=c[C.route.id])!=null&&N.shouldRevalidate)||D.hasClientLoader?S=!0:A.add(C.route.id))}),A.size===0)return[];let y=Dx(r,h,o.v8_trailingSlashAwareDataRequests,"data");return S&&A.size>0&&y.searchParams.set("_routes",t.filter(C=>A.has(C.route.id)).map(C=>C.route.id).join(",")),[y.pathname+y.search]},[h,o.v8_trailingSlashAwareDataRequests,p,a,u,v,t,r,c]),x=ct.useMemo(()=>jE(_,u),[_,u]),E=nb(_);return ct.createElement(ct.Fragment,null,g.map(A=>ct.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...n})),x.map(A=>ct.createElement("link",{key:A,rel:"modulepreload",href:A,...n})),E.map(({key:A,link:S})=>ct.createElement("link",{key:A,nonce:n.nonce,...S,crossOrigin:S.crossOrigin??n.crossOrigin})))}function rb(...r){return t=>{r.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var sb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sb&&(window.__reactRouterVersion="7.18.0")}catch{}function ob({basename:r,children:t,useTransitions:n,window:a}){let o=ct.useRef();o.current==null&&(o.current=IM({window:a,v5Compat:!0}));let u=o.current,[c,h]=ct.useState({action:u.action,location:u.location}),p=ct.useCallback(m=>{n===!1?h(m):ct.startTransition(()=>h(m))},[n]);return ct.useLayoutEffect(()=>u.listen(p),[u,p]),ct.createElement(zE,{basename:r,children:t,location:c.location,navigationType:c.action,navigator:u,useTransitions:n})}var Ux=ct.forwardRef(function({onClick:t,discover:n="render",prefetch:a="none",relative:o,reloadDocument:u,replace:c,mask:h,state:p,target:m,to:v,preventScrollReset:_,viewTransition:g,defaultShouldRevalidate:x,...E},A){let{basename:S,navigator:y,useTransitions:C}=ct.useContext(Ti),D=typeof v=="string"&&Dp.test(v),N=Sx(v,S);v=N.to;let G=SE(v,{relative:o}),O=Ua(),F=null;if(h){let k=Up(h,[],O.mask?O.mask.pathname:"/",!0);S!=="/"&&(k.pathname=k.pathname==="/"?S:zi([S,k.pathname])),F=y.createHref(k)}let[T,z,q]=tb(a,E),I=fb(v,{replace:c,mask:h,state:p,target:m,preventScrollReset:_,relative:o,viewTransition:g,defaultShouldRevalidate:x,useTransitions:C});function J(k){t&&t(k),k.defaultPrevented||I(k)}let ot=!(N.isExternal||u),ft=ct.createElement("a",{...E,...q,href:(ot?F:void 0)||N.absoluteURL||G,onClick:ot?J:t,ref:rb(A,z),target:m,"data-discover":!D&&n==="render"?"true":void 0});return T&&!D?ct.createElement(ct.Fragment,null,ft,ct.createElement(eb,{page:G})):ft});Ux.displayName="Link";var lb=ct.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:a="",end:o=!1,style:u,to:c,viewTransition:h,children:p,...m},v){let _=vl(c,{relative:m.relative}),g=Ua(),x=ct.useContext(Ec),{navigator:E,basename:A}=ct.useContext(Ti),S=x!=null&&gb(_)&&h===!0,y=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,C=g.pathname,D=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(C=C.toLowerCase(),D=D?D.toLowerCase():null,y=y.toLowerCase()),D&&A&&(D=Ra(D,A)||D);const N=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let G=C===y||!o&&C.startsWith(y)&&C.charAt(N)==="/",O=D!=null&&(D===y||!o&&D.startsWith(y)&&D.charAt(y.length)==="/"),F={isActive:G,isPending:O,isTransitioning:S},T=G?t:void 0,z;typeof a=="function"?z=a(F):z=[a,G?"active":null,O?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let q=typeof u=="function"?u(F):u;return ct.createElement(Ux,{...m,"aria-current":T,className:z,ref:v,style:q,to:c,viewTransition:h},typeof p=="function"?p(F):p)});lb.displayName="NavLink";var ub=ct.forwardRef(({discover:r="render",fetcherKey:t,navigate:n,reloadDocument:a,replace:o,state:u,method:c=rc,action:h,onSubmit:p,relative:m,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:g,...x},E)=>{let{useTransitions:A}=ct.useContext(Ti),S=pb(),y=mb(h,{relative:m}),C=c.toLowerCase()==="get"?"get":"post",D=typeof h=="string"&&Dp.test(h),N=G=>{if(p&&p(G),G.defaultPrevented)return;G.preventDefault();let O=G.nativeEvent.submitter,F=(O==null?void 0:O.getAttribute("formmethod"))||c,T=()=>S(O||G.currentTarget,{fetcherKey:t,method:F,navigate:n,replace:o,state:u,relative:m,preventScrollReset:v,viewTransition:_,defaultShouldRevalidate:g});A&&n!==!1?ct.startTransition(()=>T()):T()};return ct.createElement("form",{ref:E,method:C,action:y,onSubmit:a?p:N,...x,"data-discover":!D&&r==="render"?"true":void 0})});ub.displayName="Form";function cb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lx(r){let t=ct.useContext(Ks);return rn(t,cb(r)),t}function fb(r,{target:t,replace:n,mask:a,state:o,preventScrollReset:u,relative:c,viewTransition:h,defaultShouldRevalidate:p,useTransitions:m}={}){let v=yE(),_=Ua(),g=vl(r,{relative:c});return ct.useCallback(x=>{if(VE(x,t)){x.preventDefault();let E=n!==void 0?n:ll(_)===ll(g),A=()=>v(r,{replace:E,mask:a,state:o,preventScrollReset:u,relative:c,viewTransition:h,defaultShouldRevalidate:p});m?ct.startTransition(()=>A()):A()}},[_,v,g,n,a,o,t,r,u,c,h,p,m])}var hb=0,db=()=>`__${String(++hb)}__`;function pb(){let{router:r}=Lx("useSubmit"),{basename:t}=ct.useContext(Ti),n=LE(),a=r.fetch,o=r.navigate;return ct.useCallback(async(u,c={})=>{let{action:h,method:p,encType:m,formData:v,body:_}=WE(u,t);if(c.navigate===!1){let g=c.fetcherKey||db();await a(g,n,c.action||h,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:_,formMethod:c.method||p,formEncType:c.encType||m,flushSync:c.flushSync})}else await o(c.action||h,{defaultShouldRevalidate:c.defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:v,body:_,formMethod:c.method||p,formEncType:c.encType||m,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[a,o,t,n])}function mb(r,{relative:t}={}){let{basename:n}=ct.useContext(Ti),a=ct.useContext(Da);rn(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),u={...vl(r||".",{relative:t})},c=Ua();if(r==null){u.search=c.search;let h=new URLSearchParams(u.search),p=h.getAll("index");if(p.some(v=>v==="")){h.delete("index"),p.filter(_=>_).forEach(_=>h.append("index",_));let v=h.toString();u.search=v?`?${v}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:zi([n,u.pathname])),ll(u)}function gb(r,{relative:t}={}){let n=ct.useContext(Ex);rn(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=Lx("useViewTransitionState"),o=vl(r,{relative:t});if(!n.isTransitioning)return!1;let u=Ra(n.currentLocation.pathname,a)||n.currentLocation.pathname,c=Ra(n.nextLocation.pathname,a)||n.nextLocation.pathname;return pc(o.pathname,c)!=null||pc(o.pathname,u)!=null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bp="184",vb=0,t_=1,_b=2,oc=1,xb=2,il=3,mr=0,Jn=1,Ma=2,Ta=0,Xr=1,gc=2,e_=3,n_=4,Sb=5,Hr=100,yb=101,Mb=102,Eb=103,bb=104,Tb=200,Ab=201,Rb=202,Cb=203,Od=204,Pd=205,wb=206,Db=207,Ub=208,Lb=209,Nb=210,Ob=211,Pb=212,zb=213,Fb=214,zd=0,Fd=1,Bd=2,Xs=3,Id=4,Hd=5,Gd=6,Vd=7,Nx=0,Bb=1,Ib=2,Yi=0,Ox=1,Px=2,zx=3,Fx=4,Bx=5,Ix=6,Hx=7,Gx=300,Wr=301,Ws=302,Wh=303,qh=304,Ac=306,kd=1e3,Ea=1001,Xd=1002,Dn=1003,Hb=1004,Lu=1005,Bn=1006,Yh=1007,Vr=1008,fi=1009,Vx=1010,kx=1011,ul=1012,Ip=1013,Ki=1014,Wi=1015,Ca=1016,Hp=1017,Gp=1018,cl=1020,Xx=35902,Wx=35899,qx=1021,Yx=1022,Pi=1023,wa=1026,kr=1027,Zx=1028,Vp=1029,qr=1030,kp=1031,Xp=1033,lc=33776,uc=33777,cc=33778,fc=33779,Wd=35840,qd=35841,Yd=35842,Zd=35843,jd=36196,Kd=37492,Jd=37496,Qd=37488,$d=37489,vc=37490,tp=37491,ep=37808,np=37809,ip=37810,ap=37811,rp=37812,sp=37813,op=37814,lp=37815,up=37816,cp=37817,fp=37818,hp=37819,dp=37820,pp=37821,mp=36492,gp=36494,vp=36495,_p=36283,xp=36284,_c=36285,Sp=36286,Gb=3200,i_=0,Vb=1,dr="",Mi="srgb",xc="srgb-linear",Sc="linear",We="srgb",Cs=7680,a_=519,kb=512,Xb=513,Wb=514,Wp=515,qb=516,Yb=517,qp=518,Zb=519,r_=35044,s_="300 es",qi=2e3,fl=2001;function jb(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function yc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kb(){const r=yc("canvas");return r.style.display="block",r}const o_={};function l_(...r){const t="THREE."+r.shift();console.log(t,...r)}function jx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=r[1];n&&n.isStackTrace?r[0]+=" "+n.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function he(...r){r=jx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...r)}}function Ue(...r){r=jx(r);const t="THREE."+r.shift();{const n=r[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...r)}}function yp(...r){const t=r.join(" ");t in o_||(o_[t]=!0,he(...r))}function Jb(r,t,n){return new Promise(function(a,o){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}const Qb={[zd]:Fd,[Bd]:Gd,[Id]:Vd,[Xs]:Hd,[Fd]:zd,[Gd]:Bd,[Vd]:Id,[Hd]:Xs};class jr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zh=Math.PI/180,Mp=180/Math.PI;function Js(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]).toLowerCase()}function Ae(r,t,n){return Math.max(t,Math.min(n,r))}function $b(r,t){return(r%t+t)%t}function jh(r,t,n){return(1-n)*r+n*t}function Ko(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const tm=class tm{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ae(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*o+t.x,this.y=u*o+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tm.prototype.isVector2=!0;let Xt=tm;class Qs{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,u,c,h){let p=a[o+0],m=a[o+1],v=a[o+2],_=a[o+3],g=u[c+0],x=u[c+1],E=u[c+2],A=u[c+3];if(_!==A||p!==g||m!==x||v!==E){let S=p*g+m*x+v*E+_*A;S<0&&(g=-g,x=-x,E=-E,A=-A,S=-S);let y=1-h;if(S<.9995){const C=Math.acos(S),D=Math.sin(C);y=Math.sin(y*C)/D,h=Math.sin(h*C)/D,p=p*y+g*h,m=m*y+x*h,v=v*y+E*h,_=_*y+A*h}else{p=p*y+g*h,m=m*y+x*h,v=v*y+E*h,_=_*y+A*h;const C=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=C,m*=C,v*=C,_*=C}}t[n]=p,t[n+1]=m,t[n+2]=v,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,o,u,c){const h=a[o],p=a[o+1],m=a[o+2],v=a[o+3],_=u[c],g=u[c+1],x=u[c+2],E=u[c+3];return t[n]=h*E+v*_+p*x-m*g,t[n+1]=p*E+v*g+m*_-h*x,t[n+2]=m*E+v*x+h*g-p*_,t[n+3]=v*E-h*_-p*g-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,u=t._z,c=t._order,h=Math.cos,p=Math.sin,m=h(a/2),v=h(o/2),_=h(u/2),g=p(a/2),x=p(o/2),E=p(u/2);switch(c){case"XYZ":this._x=g*v*_+m*x*E,this._y=m*x*_-g*v*E,this._z=m*v*E+g*x*_,this._w=m*v*_-g*x*E;break;case"YXZ":this._x=g*v*_+m*x*E,this._y=m*x*_-g*v*E,this._z=m*v*E-g*x*_,this._w=m*v*_+g*x*E;break;case"ZXY":this._x=g*v*_-m*x*E,this._y=m*x*_+g*v*E,this._z=m*v*E+g*x*_,this._w=m*v*_-g*x*E;break;case"ZYX":this._x=g*v*_-m*x*E,this._y=m*x*_+g*v*E,this._z=m*v*E-g*x*_,this._w=m*v*_+g*x*E;break;case"YZX":this._x=g*v*_+m*x*E,this._y=m*x*_+g*v*E,this._z=m*v*E-g*x*_,this._w=m*v*_-g*x*E;break;case"XZY":this._x=g*v*_-m*x*E,this._y=m*x*_-g*v*E,this._z=m*v*E+g*x*_,this._w=m*v*_+g*x*E;break;default:he("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],u=n[8],c=n[1],h=n[5],p=n[9],m=n[2],v=n[6],_=n[10],g=a+h+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-p)*x,this._y=(u-m)*x,this._z=(c-o)*x}else if(a>h&&a>_){const x=2*Math.sqrt(1+a-h-_);this._w=(v-p)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(u+m)/x}else if(h>_){const x=2*Math.sqrt(1+h-a-_);this._w=(u-m)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+_-a-h);this._w=(c-o)/x,this._x=(u+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,u=t._z,c=t._w,h=n._x,p=n._y,m=n._z,v=n._w;return this._x=a*v+c*h+o*m-u*p,this._y=o*v+c*p+u*h-a*m,this._z=u*v+c*m+a*p-o*h,this._w=c*v-a*h-o*p-u*m,this._onChangeCallback(),this}slerp(t,n){let a=t._x,o=t._y,u=t._z,c=t._w,h=this.dot(t);h<0&&(a=-a,o=-o,u=-u,c=-c,h=-h);let p=1-n;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const em=class em{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(u_.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(u_.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*o,this.y=u[1]*n+u[4]*a+u[7]*o,this.z=u[2]*n+u[5]*a+u[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=t.elements,c=1/(u[3]*n+u[7]*a+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*o+u[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,u=t.x,c=t.y,h=t.z,p=t.w,m=2*(c*o-h*a),v=2*(h*n-u*o),_=2*(u*a-c*n);return this.x=n+p*m+c*_-h*v,this.y=a+p*v+h*m-u*_,this.z=o+p*_+u*v-c*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*o,this.y=u[1]*n+u[5]*a+u[9]*o,this.z=u[2]*n+u[6]*a+u[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,u=t.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-u*h,this.y=u*c-a*p,this.z=a*h-o*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Kh.copy(this).projectOnVector(t),this.sub(Kh)}reflect(t){return this.sub(Kh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Ae(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};em.prototype.isVector3=!0;let Y=em;const Kh=new Y,u_=new Qs,nm=class nm{constructor(t,n,a,o,u,c,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,c,h,p,m)}set(t,n,a,o,u,c,h,p,m){const v=this.elements;return v[0]=t,v[1]=o,v[2]=h,v[3]=n,v[4]=u,v[5]=p,v[6]=a,v[7]=c,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,c=a[0],h=a[3],p=a[6],m=a[1],v=a[4],_=a[7],g=a[2],x=a[5],E=a[8],A=o[0],S=o[3],y=o[6],C=o[1],D=o[4],N=o[7],G=o[2],O=o[5],F=o[8];return u[0]=c*A+h*C+p*G,u[3]=c*S+h*D+p*O,u[6]=c*y+h*N+p*F,u[1]=m*A+v*C+_*G,u[4]=m*S+v*D+_*O,u[7]=m*y+v*N+_*F,u[2]=g*A+x*C+E*G,u[5]=g*S+x*D+E*O,u[8]=g*y+x*N+E*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],m=t[7],v=t[8];return n*c*v-n*h*m-a*u*v+a*h*p+o*u*m-o*c*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],m=t[7],v=t[8],_=v*c-h*m,g=h*p-v*u,x=m*u-c*p,E=n*_+a*g+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=_*A,t[1]=(o*m-v*a)*A,t[2]=(h*a-o*c)*A,t[3]=g*A,t[4]=(v*n-o*p)*A,t[5]=(o*u-h*n)*A,t[6]=x*A,t[7]=(a*p-m*n)*A,t[8]=(c*n-a*u)*A,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,u,c,h){const p=Math.cos(u),m=Math.sin(u);return this.set(a*p,a*m,-a*(p*c+m*h)+c+t,-o*m,o*p,-o*(-m*c+p*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(Jh.makeScale(t,n)),this}rotate(t){return this.premultiply(Jh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Jh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nm.prototype.isMatrix3=!0;let ge=nm;const Jh=new ge,c_=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f_=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tT(){const r={enabled:!0,workingColorSpace:xc,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===We&&(o.r=Aa(o.r),o.g=Aa(o.g),o.b=Aa(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===We&&(o.r=ks(o.r),o.g=ks(o.g),o.b=ks(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===dr?Sc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return yp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return yp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[xc]:{primaries:t,whitePoint:a,transfer:Sc,toXYZ:c_,fromXYZ:f_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:t,whitePoint:a,transfer:We,toXYZ:c_,fromXYZ:f_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),r}const De=tT();function Aa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ws;class eT{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{ws===void 0&&(ws=yc("canvas")),ws.width=t.width,ws.height=t.height;const o=ws.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=ws}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=yc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Aa(u[c]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Aa(n[a]/255)*255):n[a]=Aa(n[a]);return{data:n,width:t.width,height:t.height}}else return he("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nT=0;class Yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(Qh(o[c].image)):u.push(Qh(o[c]))}else u=Qh(o);a.url=u}return n||(t.images[this.uuid]=a),a}}function Qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(he("Texture: Unable to serialize Texture."),{})}let iT=0;const $h=new Y;class In extends jr{constructor(t=In.DEFAULT_IMAGE,n=In.DEFAULT_MAPPING,a=Ea,o=Ea,u=Bn,c=Vr,h=Pi,p=fi,m=In.DEFAULT_ANISOTROPY,v=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Js(),this.name="",this.source=new Yp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($h).x}get height(){return this.source.getSize($h).y}get depth(){return this.source.getSize($h).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){he(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){he(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kd:t.x=t.x-Math.floor(t.x);break;case Ea:t.x=t.x<0?0:1;break;case Xd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kd:t.y=t.y-Math.floor(t.y);break;case Ea:t.y=t.y<0?0:1;break;case Xd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Gx;In.DEFAULT_ANISOTROPY=1;const im=class im{constructor(t=0,n=0,a=0,o=1){this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*o+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,u;const p=t.elements,m=p[0],v=p[4],_=p[8],g=p[1],x=p[5],E=p[9],A=p[2],S=p[6],y=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(m+x+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,N=(x+1)/2,G=(y+1)/2,O=(v+g)/4,F=(_+A)/4,T=(E+S)/4;return D>N&&D>G?D<.01?(a=0,o=.707106781,u=.707106781):(a=Math.sqrt(D),o=O/a,u=F/a):N>G?N<.01?(a=.707106781,o=0,u=.707106781):(o=Math.sqrt(N),a=O/o,u=T/o):G<.01?(a=.707106781,o=.707106781,u=0):(u=Math.sqrt(G),a=F/u,o=T/u),this.set(a,o,u,n),this}let C=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(S-E)/C,this.y=(_-A)/C,this.z=(g-v)/C,this.w=Math.acos((m+x+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ae(this.x,t.x,n.x),this.y=Ae(this.y,t.y,n.y),this.z=Ae(this.z,t.z,n.z),this.w=Ae(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ae(this.x,t,n),this.y=Ae(this.y,t,n),this.z=Ae(this.z,t,n),this.w=Ae(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ae(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};im.prototype.isVector4=!0;let un=im;class aT extends jr{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new un(0,0,t,n),this.scissorTest=!1,this.viewport=new un(0,0,t,n),this.textures=[];const o={width:t,height:n,depth:a.depth},u=new In(o),c=a.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new Yp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends aT{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class Kx extends In{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rT extends In{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mc=class Mc{constructor(t,n,a,o,u,c,h,p,m,v,_,g,x,E,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,u,c,h,p,m,v,_,g,x,E,A,S)}set(t,n,a,o,u,c,h,p,m,v,_,g,x,E,A,S){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=o,y[1]=u,y[5]=c,y[9]=h,y[13]=p,y[2]=m,y[6]=v,y[10]=_,y[14]=g,y[3]=x,y[7]=E,y[11]=A,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Ds.setFromMatrixColumn(t,0).length(),u=1/Ds.setFromMatrixColumn(t,1).length(),c=1/Ds.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,u=t.z,c=Math.cos(a),h=Math.sin(a),p=Math.cos(o),m=Math.sin(o),v=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const g=c*v,x=c*_,E=h*v,A=h*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=x+E*m,n[5]=g-A*m,n[9]=-h*p,n[2]=A-g*m,n[6]=E+x*m,n[10]=c*p}else if(t.order==="YXZ"){const g=p*v,x=p*_,E=m*v,A=m*_;n[0]=g+A*h,n[4]=E*h-x,n[8]=c*m,n[1]=c*_,n[5]=c*v,n[9]=-h,n[2]=x*h-E,n[6]=A+g*h,n[10]=c*p}else if(t.order==="ZXY"){const g=p*v,x=p*_,E=m*v,A=m*_;n[0]=g-A*h,n[4]=-c*_,n[8]=E+x*h,n[1]=x+E*h,n[5]=c*v,n[9]=A-g*h,n[2]=-c*m,n[6]=h,n[10]=c*p}else if(t.order==="ZYX"){const g=c*v,x=c*_,E=h*v,A=h*_;n[0]=p*v,n[4]=E*m-x,n[8]=g*m+A,n[1]=p*_,n[5]=A*m+g,n[9]=x*m-E,n[2]=-m,n[6]=h*p,n[10]=c*p}else if(t.order==="YZX"){const g=c*p,x=c*m,E=h*p,A=h*m;n[0]=p*v,n[4]=A-g*_,n[8]=E*_+x,n[1]=_,n[5]=c*v,n[9]=-h*v,n[2]=-m*v,n[6]=x*_+E,n[10]=g-A*_}else if(t.order==="XZY"){const g=c*p,x=c*m,E=h*p,A=h*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=g*_+A,n[5]=c*v,n[9]=x*_-E,n[2]=E*_-x,n[6]=h*v,n[10]=A*_+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sT,t,oT)}lookAt(t,n,a){const o=this.elements;return ui.subVectors(t,n),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),or.crossVectors(a,ui),or.lengthSq()===0&&(Math.abs(a.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),or.crossVectors(a,ui)),or.normalize(),Nu.crossVectors(ui,or),o[0]=or.x,o[4]=Nu.x,o[8]=ui.x,o[1]=or.y,o[5]=Nu.y,o[9]=ui.y,o[2]=or.z,o[6]=Nu.z,o[10]=ui.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,u=this.elements,c=a[0],h=a[4],p=a[8],m=a[12],v=a[1],_=a[5],g=a[9],x=a[13],E=a[2],A=a[6],S=a[10],y=a[14],C=a[3],D=a[7],N=a[11],G=a[15],O=o[0],F=o[4],T=o[8],z=o[12],q=o[1],I=o[5],J=o[9],ot=o[13],ft=o[2],k=o[6],L=o[10],B=o[14],it=o[3],dt=o[7],yt=o[11],P=o[15];return u[0]=c*O+h*q+p*ft+m*it,u[4]=c*F+h*I+p*k+m*dt,u[8]=c*T+h*J+p*L+m*yt,u[12]=c*z+h*ot+p*B+m*P,u[1]=v*O+_*q+g*ft+x*it,u[5]=v*F+_*I+g*k+x*dt,u[9]=v*T+_*J+g*L+x*yt,u[13]=v*z+_*ot+g*B+x*P,u[2]=E*O+A*q+S*ft+y*it,u[6]=E*F+A*I+S*k+y*dt,u[10]=E*T+A*J+S*L+y*yt,u[14]=E*z+A*ot+S*B+y*P,u[3]=C*O+D*q+N*ft+G*it,u[7]=C*F+D*I+N*k+G*dt,u[11]=C*T+D*J+N*L+G*yt,u[15]=C*z+D*ot+N*B+G*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],u=t[12],c=t[1],h=t[5],p=t[9],m=t[13],v=t[2],_=t[6],g=t[10],x=t[14],E=t[3],A=t[7],S=t[11],y=t[15],C=p*x-m*g,D=h*x-m*_,N=h*g-p*_,G=c*x-m*v,O=c*g-p*v,F=c*_-h*v;return n*(A*C-S*D+y*N)-a*(E*C-S*G+y*O)+o*(E*D-A*G+y*F)-u*(E*N-A*O+S*F)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],u=t[3],c=t[4],h=t[5],p=t[6],m=t[7],v=t[8],_=t[9],g=t[10],x=t[11],E=t[12],A=t[13],S=t[14],y=t[15],C=n*h-a*c,D=n*p-o*c,N=n*m-u*c,G=a*p-o*h,O=a*m-u*h,F=o*m-u*p,T=v*A-_*E,z=v*S-g*E,q=v*y-x*E,I=_*S-g*A,J=_*y-x*A,ot=g*y-x*S,ft=C*ot-D*J+N*I+G*q-O*z+F*T;if(ft===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/ft;return t[0]=(h*ot-p*J+m*I)*k,t[1]=(o*J-a*ot-u*I)*k,t[2]=(A*F-S*O+y*G)*k,t[3]=(g*O-_*F-x*G)*k,t[4]=(p*q-c*ot-m*z)*k,t[5]=(n*ot-o*q+u*z)*k,t[6]=(S*N-E*F-y*D)*k,t[7]=(v*F-g*N+x*D)*k,t[8]=(c*J-h*q+m*T)*k,t[9]=(a*q-n*J-u*T)*k,t[10]=(E*O-A*N+y*C)*k,t[11]=(_*N-v*O-x*C)*k,t[12]=(h*z-c*I-p*T)*k,t[13]=(n*I-a*z+o*T)*k,t[14]=(A*D-E*G-S*C)*k,t[15]=(v*G-_*D+g*C)*k,this}scale(t){const n=this.elements,a=t.x,o=t.y,u=t.z;return n[0]*=a,n[4]*=o,n[8]*=u,n[1]*=a,n[5]*=o,n[9]*=u,n[2]*=a,n[6]*=o,n[10]*=u,n[3]*=a,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),u=1-a,c=t.x,h=t.y,p=t.z,m=u*c,v=u*h;return this.set(m*c+a,m*h-o*p,m*p+o*h,0,m*h+o*p,v*h+a,v*p-o*c,0,m*p-o*h,v*p+o*c,u*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,u,c){return this.set(1,a,u,0,t,1,c,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,u=n._x,c=n._y,h=n._z,p=n._w,m=u+u,v=c+c,_=h+h,g=u*m,x=u*v,E=u*_,A=c*v,S=c*_,y=h*_,C=p*m,D=p*v,N=p*_,G=a.x,O=a.y,F=a.z;return o[0]=(1-(A+y))*G,o[1]=(x+N)*G,o[2]=(E-D)*G,o[3]=0,o[4]=(x-N)*O,o[5]=(1-(g+y))*O,o[6]=(S+C)*O,o[7]=0,o[8]=(E+D)*F,o[9]=(S-C)*F,o[10]=(1-(g+A))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;t.x=o[12],t.y=o[13],t.z=o[14];const u=this.determinant();if(u===0)return a.set(1,1,1),n.identity(),this;let c=Ds.set(o[0],o[1],o[2]).length();const h=Ds.set(o[4],o[5],o[6]).length(),p=Ds.set(o[8],o[9],o[10]).length();u<0&&(c=-c),Ui.copy(this);const m=1/c,v=1/h,_=1/p;return Ui.elements[0]*=m,Ui.elements[1]*=m,Ui.elements[2]*=m,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=_,Ui.elements[9]*=_,Ui.elements[10]*=_,n.setFromRotationMatrix(Ui),a.x=c,a.y=h,a.z=p,this}makePerspective(t,n,a,o,u,c,h=qi,p=!1){const m=this.elements,v=2*u/(n-t),_=2*u/(a-o),g=(n+t)/(n-t),x=(a+o)/(a-o);let E,A;if(p)E=u/(c-u),A=c*u/(c-u);else if(h===qi)E=-(c+u)/(c-u),A=-2*c*u/(c-u);else if(h===fl)E=-c/(c-u),A=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,n,a,o,u,c,h=qi,p=!1){const m=this.elements,v=2/(n-t),_=2/(a-o),g=-(n+t)/(n-t),x=-(a+o)/(a-o);let E,A;if(p)E=1/(c-u),A=c/(c-u);else if(h===qi)E=-2/(c-u),A=-(c+u)/(c-u);else if(h===fl)E=-1/(c-u),A=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Mc.prototype.isMatrix4=!0;let sn=Mc;const Ds=new Y,Ui=new sn,sT=new Y(0,0,0),oT=new Y(1,1,1),or=new Y,Nu=new Y,ui=new Y,h_=new sn,d_=new Qs;class Yr{constructor(t=0,n=0,a=0,o=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,u=o[0],c=o[4],h=o[8],p=o[1],m=o[5],v=o[9],_=o[2],g=o[6],x=o[10];switch(n){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,x),this._y=0);break;default:he("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return h_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(h_,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return d_.setFromEuler(this),this.setFromQuaternion(d_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class Jx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lT=0;const p_=new Y,Us=new Qs,va=new sn,Ou=new Y,Jo=new Y,uT=new Y,cT=new Qs,m_=new Y(1,0,0),g_=new Y(0,1,0),v_=new Y(0,0,1),__={type:"added"},fT={type:"removed"},Ls={type:"childadded",child:null},td={type:"childremoved",child:null};class Un extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new Y,n=new Yr,a=new Qs,o=new Y(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new ge}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Us.setFromAxisAngle(t,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,n){return Us.setFromAxisAngle(t,n),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(m_,t)}rotateY(t){return this.rotateOnAxis(g_,t)}rotateZ(t){return this.rotateOnAxis(v_,t)}translateOnAxis(t,n){return p_.copy(t).applyQuaternion(this.quaternion),this.position.add(p_.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(m_,t)}translateY(t){return this.translateOnAxis(g_,t)}translateZ(t){return this.translateOnAxis(v_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Ou.copy(t):Ou.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Jo,Ou,this.up):va.lookAt(Ou,Jo,this.up),this.quaternion.setFromRotationMatrix(va),o&&(va.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(va),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(__),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(fT),td.child=t,this.dispatchEvent(td),td.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(__),Ls.child=t,this.dispatchEvent(Ls),Ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,uT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,cT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,o=t.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*a-u[8]*o,u[13]+=a-u[1]*n-u[5]*a-u[9]*o,u[14]+=o-u[2]*n-u[6]*a-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];u(t.shapes,_)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(t.materials,this.material[p]));o.material=h}else o.material=u(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(t.animations,p))}}if(n){const h=c(t.geometries),p=c(t.materials),m=c(t.textures),v=c(t.images),_=c(t.shapes),g=c(t.skeletons),x=c(t.animations),E=c(t.nodes);h.length>0&&(a.geometries=h),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),v.length>0&&(a.images=v),_.length>0&&(a.shapes=_),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),E.length>0&&(a.nodes=E)}return a.object=o,a;function c(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}Un.DEFAULT_UP=new Y(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vs extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,u=null,c=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(m&&t.hand){c=!0;for(const A of t.hand.values()){const S=n.getJointPose(A,a),y=this._getHandJoint(m,A);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=v.position.distanceTo(_.position),x=.02,E=.005;m.inputState.pinching&&g>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&g<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Vs;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const Qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Pu={h:0,s:0,l:0};function nd(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Ie{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=De.workingColorSpace){return this.r=t,this.g=n,this.b=a,De.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=De.workingColorSpace){if(t=$b(t,1),n=Ae(n,0,1),a=Ae(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=nd(c,u,t+1/3),this.g=nd(c,u,t),this.b=nd(c,u,t-1/3)}return De.colorSpaceToWorking(this,o),this}setStyle(t,n=Mi){function a(u){u!==void 0&&parseFloat(u)<1&&he("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:he("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);he("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Mi){const a=Qx[t.toLowerCase()];return a!==void 0?this.setHex(a,n):he("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Aa(t.r),this.g=Aa(t.g),this.b=Aa(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mi){return De.workingToColorSpace(zn.copy(this),t),Math.round(Ae(zn.r*255,0,255))*65536+Math.round(Ae(zn.g*255,0,255))*256+Math.round(Ae(zn.b*255,0,255))}getHexString(t=Mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=De.workingColorSpace){De.workingToColorSpace(zn.copy(this),n);const a=zn.r,o=zn.g,u=zn.b,c=Math.max(a,o,u),h=Math.min(a,o,u);let p,m;const v=(h+c)/2;if(h===c)p=0,m=0;else{const _=c-h;switch(m=v<=.5?_/(c+h):_/(2-c-h),c){case a:p=(o-u)/_+(o<u?6:0);break;case o:p=(u-a)/_+2;break;case u:p=(a-o)/_+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,n=De.workingColorSpace){return De.workingToColorSpace(zn.copy(this),n),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=Mi){De.workingToColorSpace(zn.copy(this),t);const n=zn.r,a=zn.g,o=zn.b;return t!==Mi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(lr),this.setHSL(lr.h+t,lr.s+n,lr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(lr),t.getHSL(Pu);const a=jh(lr.h,Pu.h,n),o=jh(lr.s,Pu.s,n),u=jh(lr.l,Pu.l,n);return this.setHSL(a,o,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*o,this.g=u[1]*n+u[4]*a+u[7]*o,this.b=u[2]*n+u[5]*a+u[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Ie;Ie.NAMES=Qx;class dT extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yr,this.environmentIntensity=1,this.environmentRotation=new Yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Li=new Y,_a=new Y,id=new Y,xa=new Y,Ns=new Y,Os=new Y,x_=new Y,ad=new Y,rd=new Y,sd=new Y,od=new un,ld=new un,ud=new un;class Oi{constructor(t=new Y,n=new Y,a=new Y){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),Li.subVectors(t,n),o.cross(Li);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(t,n,a,o,u){Li.subVectors(o,n),_a.subVectors(a,n),id.subVectors(t,n);const c=Li.dot(Li),h=Li.dot(_a),p=Li.dot(id),m=_a.dot(_a),v=_a.dot(id),_=c*m-h*h;if(_===0)return u.set(0,0,0),null;const g=1/_,x=(m*p-h*v)*g,E=(c*v-h*p)*g;return u.set(1-x-E,E,x)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,n,a,o,u,c,h,p){return this.getBarycoord(t,n,a,o,xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,xa.x),p.addScaledVector(c,xa.y),p.addScaledVector(h,xa.z),p)}static getInterpolatedAttribute(t,n,a,o,u,c){return od.setScalar(0),ld.setScalar(0),ud.setScalar(0),od.fromBufferAttribute(t,n),ld.fromBufferAttribute(t,a),ud.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(od,u.x),c.addScaledVector(ld,u.y),c.addScaledVector(ud,u.z),c}static isFrontFacing(t,n,a,o){return Li.subVectors(a,n),_a.subVectors(t,n),Li.cross(_a).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Li.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),Li.cross(_a).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Oi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,u){return Oi.getInterpolation(t,this.a,this.b,this.c,n,a,o,u)}containsPoint(t){return Oi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,u=this.c;let c,h;Ns.subVectors(o,a),Os.subVectors(u,a),ad.subVectors(t,a);const p=Ns.dot(ad),m=Os.dot(ad);if(p<=0&&m<=0)return n.copy(a);rd.subVectors(t,o);const v=Ns.dot(rd),_=Os.dot(rd);if(v>=0&&_<=v)return n.copy(o);const g=p*_-v*m;if(g<=0&&p>=0&&v<=0)return c=p/(p-v),n.copy(a).addScaledVector(Ns,c);sd.subVectors(t,u);const x=Ns.dot(sd),E=Os.dot(sd);if(E>=0&&x<=E)return n.copy(u);const A=x*m-p*E;if(A<=0&&m>=0&&E<=0)return h=m/(m-E),n.copy(a).addScaledVector(Os,h);const S=v*E-x*_;if(S<=0&&_-v>=0&&x-E>=0)return x_.subVectors(u,o),h=(_-v)/(_-v+(x-E)),n.copy(o).addScaledVector(x_,h);const y=1/(S+A+g);return c=A*y,h=g*y,n.copy(a).addScaledVector(Ns,c).addScaledVector(Os,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class _l{constructor(t=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Ni.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Ni.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Ni.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,Ni):Ni.fromBufferAttribute(u,c),Ni.applyMatrix4(t.matrixWorld),this.expandByPoint(Ni);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),zu.copy(a.boundingBox)),zu.applyMatrix4(t.matrixWorld),this.union(zu)}const o=t.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ni),Ni.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Fu.subVectors(this.max,Qo),Ps.subVectors(t.a,Qo),zs.subVectors(t.b,Qo),Fs.subVectors(t.c,Qo),ur.subVectors(zs,Ps),cr.subVectors(Fs,zs),Pr.subVectors(Ps,Fs);let n=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-Pr.z,Pr.y,ur.z,0,-ur.x,cr.z,0,-cr.x,Pr.z,0,-Pr.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-Pr.y,Pr.x,0];return!cd(n,Ps,zs,Fs,Fu)||(n=[1,0,0,0,1,0,0,0,1],!cd(n,Ps,zs,Fs,Fu))?!1:(Bu.crossVectors(ur,cr),n=[Bu.x,Bu.y,Bu.z],cd(n,Ps,zs,Fs,Fu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ni).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ni).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ni=new Y,zu=new _l,Ps=new Y,zs=new Y,Fs=new Y,ur=new Y,cr=new Y,Pr=new Y,Qo=new Y,Fu=new Y,Bu=new Y,zr=new Y;function cd(r,t,n,a,o){for(let u=0,c=r.length-3;u<=c;u+=3){zr.fromArray(r,u);const h=o.x*Math.abs(zr.x)+o.y*Math.abs(zr.y)+o.z*Math.abs(zr.z),p=t.dot(zr),m=n.dot(zr),v=a.dot(zr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const _n=new Y,Iu=new Xt;let pT=0;class Fn extends jr{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=r_,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Iu.fromBufferAttribute(this,n),Iu.applyMatrix3(t),this.setXY(n,Iu.x,Iu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix3(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyMatrix4(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.applyNormalMatrix(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)_n.fromBufferAttribute(this,n),_n.transformDirection(t),this.setXYZ(n,_n.x,_n.y,_n.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Ko(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Kn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ko(n,this.array)),n}setX(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ko(n,this.array)),n}setY(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ko(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ko(n,this.array)),n}setW(t,n){return this.normalized&&(n=Kn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),o=Kn(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,u){return t*=this.itemSize,this.normalized&&(n=Kn(n,this.array),a=Kn(a,this.array),o=Kn(o,this.array),u=Kn(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==r_&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class $x extends Fn{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class tS extends Fn{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Qn extends Fn{constructor(t,n,a){super(new Float32Array(t),n,a)}}const mT=new _l,$o=new Y,fd=new Y;class Rc{constructor(t=new Y,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):mT.setFromPoints(t).getCenter(a);let o=0;for(let u=0,c=t.length;u<c;u++)o=Math.max(o,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$o.subVectors(t,this.center);const n=$o.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector($o,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($o.copy(t.center).add(fd)),this.expandByPoint($o.copy(t.center).sub(fd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let gT=0;const yi=new sn,hd=new Un,Bs=new Y,ci=new _l,tl=new _l,bn=new Y;class kn extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jb(t)?tS:$x)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new ge().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,n,a){return yi.makeTranslation(t,n,a),this.applyMatrix4(yi),this}scale(t,n,a){return yi.makeScale(t,n,a),this.applyMatrix4(yi),this}lookAt(t){return hd.lookAt(t),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,u=t.length;o<u;o++){const c=t[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qn(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const u=t[o];n.setXYZ(o,u.x,u.y,u.z||0)}t.length>n.count&&he("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const u=n[a];ci.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const a=this.boundingSphere.center;if(ci.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];tl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ci.min,tl.min),ci.expandByPoint(bn),bn.addVectors(ci.max,tl.max),ci.expandByPoint(bn)):(ci.expandByPoint(tl.min),ci.expandByPoint(tl.max))}ci.getCenter(a);let o=0;for(let u=0,c=t.count;u<c;u++)bn.fromBufferAttribute(t,u),o=Math.max(o,a.distanceToSquared(bn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)bn.fromBufferAttribute(h,m),p&&(Bs.fromBufferAttribute(t,m),bn.add(Bs)),o=Math.max(o,a.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let T=0;T<a.count;T++)h[T]=new Y,p[T]=new Y;const m=new Y,v=new Y,_=new Y,g=new Xt,x=new Xt,E=new Xt,A=new Y,S=new Y;function y(T,z,q){m.fromBufferAttribute(a,T),v.fromBufferAttribute(a,z),_.fromBufferAttribute(a,q),g.fromBufferAttribute(u,T),x.fromBufferAttribute(u,z),E.fromBufferAttribute(u,q),v.sub(m),_.sub(m),x.sub(g),E.sub(g);const I=1/(x.x*E.y-E.x*x.y);isFinite(I)&&(A.copy(v).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(I),S.copy(_).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(I),h[T].add(A),h[z].add(A),h[q].add(A),p[T].add(S),p[z].add(S),p[q].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let T=0,z=C.length;T<z;++T){const q=C[T],I=q.start,J=q.count;for(let ot=I,ft=I+J;ot<ft;ot+=3)y(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const D=new Y,N=new Y,G=new Y,O=new Y;function F(T){G.fromBufferAttribute(o,T),O.copy(G);const z=h[T];D.copy(z),D.sub(G.multiplyScalar(G.dot(z))).normalize(),N.crossVectors(O,z);const I=N.dot(p[T])<0?-1:1;c.setXYZW(T,D.x,D.y,D.z,I)}for(let T=0,z=C.length;T<z;++T){const q=C[T],I=q.start,J=q.count;for(let ot=I,ft=I+J;ot<ft;ot+=3)F(t.getX(ot+0)),F(t.getX(ot+1)),F(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Fn(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const o=new Y,u=new Y,c=new Y,h=new Y,p=new Y,m=new Y,v=new Y,_=new Y;if(t)for(let g=0,x=t.count;g<x;g+=3){const E=t.getX(g+0),A=t.getX(g+1),S=t.getX(g+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,A),c.fromBufferAttribute(n,S),v.subVectors(c,u),_.subVectors(o,u),v.cross(_),h.fromBufferAttribute(a,E),p.fromBufferAttribute(a,A),m.fromBufferAttribute(a,S),h.add(v),p.add(v),m.add(v),a.setXYZ(E,h.x,h.y,h.z),a.setXYZ(A,p.x,p.y,p.z),a.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,x=n.count;g<x;g+=3)o.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),v.subVectors(c,u),_.subVectors(o,u),v.cross(_),a.setXYZ(g+0,v.x,v.y,v.z),a.setXYZ(g+1,v.x,v.y,v.z),a.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)bn.fromBufferAttribute(t,n),bn.normalize(),t.setXYZ(n,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,p){const m=h.array,v=h.itemSize,_=h.normalized,g=new m.constructor(p.length*v);let x=0,E=0;for(let A=0,S=p.length;A<S;A++){h.isInterleavedBufferAttribute?x=p[A]*h.data.stride+h.offset:x=p[A]*v;for(let y=0;y<v;y++)g[E++]=m[x++]}return new Fn(g,v,_)}if(this.index===null)return he("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new kn,a=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=t(p,a);n.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let v=0,_=m.length;v<_;v++){const g=m[v],x=t(g,a);p.push(x)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const m=a[p];t.data.attributes[p]=m.toJSON(t.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,g=m.length;_<g;_++){const x=m[_];v.push(x.toJSON(t.data))}v.length>0&&(o[p]=v,u=!0)}u&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const u=t.morphAttributes;for(const m in u){const v=[],_=u[m];for(let g=0,x=_.length;g<x;g++)v.push(_[g].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let m=0,v=c.length;m<v;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let vT=0;class xl extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Xr,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Od,this.blendDst=Pd,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){he(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){he(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(a.blending=this.blending),this.side!==mr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Od&&(a.blendSrc=this.blendSrc),this.blendDst!==Pd&&(a.blendDst=this.blendDst),this.blendEquation!==Hr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a_&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(n){const u=o(t.textures),c=o(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let u=0;u!==o;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ya=new Y,dd=new Y,Hu=new Y,fr=new Y,pd=new Y,Gu=new Y,md=new Y;class eS{constructor(t=new Y,n=new Y(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=ya.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,n),ya.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){dd.copy(t).add(n).multiplyScalar(.5),Hu.copy(n).sub(t).normalize(),fr.copy(this.origin).sub(dd);const u=t.distanceTo(n)*.5,c=-this.direction.dot(Hu),h=fr.dot(this.direction),p=-fr.dot(Hu),m=fr.lengthSq(),v=Math.abs(1-c*c);let _,g,x,E;if(v>0)if(_=c*p-h,g=c*h-p,E=u*v,_>=0)if(g>=-E)if(g<=E){const A=1/v;_*=A,g*=A,x=_*(_+c*g+2*h)+g*(c*_+g+2*p)+m}else g=u,_=Math.max(0,-(c*g+h)),x=-_*_+g*(g+2*p)+m;else g=-u,_=Math.max(0,-(c*g+h)),x=-_*_+g*(g+2*p)+m;else g<=-E?(_=Math.max(0,-(-c*u+h)),g=_>0?-u:Math.min(Math.max(-u,-p),u),x=-_*_+g*(g+2*p)+m):g<=E?(_=0,g=Math.min(Math.max(-u,-p),u),x=g*(g+2*p)+m):(_=Math.max(0,-(c*u+h)),g=_>0?u:Math.min(Math.max(-u,-p),u),x=-_*_+g*(g+2*p)+m);else g=c>0?-u:u,_=Math.max(0,-(c*g+h)),x=-_*_+g*(g+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(dd).addScaledVector(Hu,g),x}intersectSphere(t,n){ya.subVectors(t.center,this.origin);const a=ya.dot(this.direction),o=ya.dot(ya)-a*a,u=t.radius*t.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=a-c,p=a+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,u,c,h,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(a=(t.min.x-g.x)*m,o=(t.max.x-g.x)*m):(a=(t.max.x-g.x)*m,o=(t.min.x-g.x)*m),v>=0?(u=(t.min.y-g.y)*v,c=(t.max.y-g.y)*v):(u=(t.max.y-g.y)*v,c=(t.min.y-g.y)*v),a>c||u>o||((u>a||isNaN(a))&&(a=u),(c<o||isNaN(o))&&(o=c),_>=0?(h=(t.min.z-g.z)*_,p=(t.max.z-g.z)*_):(h=(t.max.z-g.z)*_,p=(t.min.z-g.z)*_),a>p||h>o)||((h>a||a!==a)&&(a=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,n,a,o,u){pd.subVectors(n,t),Gu.subVectors(a,t),md.crossVectors(pd,Gu);let c=this.direction.dot(md),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;fr.subVectors(this.origin,t);const p=h*this.direction.dot(Gu.crossVectors(fr,Gu));if(p<0)return null;const m=h*this.direction.dot(pd.cross(fr));if(m<0||p+m>c)return null;const v=-h*fr.dot(md);return v<0?null:this.at(v/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nS extends xl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const S_=new sn,Fr=new eS,Vu=new Rc,y_=new Y,ku=new Y,Xu=new Y,Wu=new Y,gd=new Y,qu=new Y,M_=new Y,Yu=new Y;class bi extends Un{constructor(t=new kn,n=new nS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(u&&h){qu.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=h[p],_=u[p];v!==0&&(gd.fromBufferAttribute(_,t),c?qu.addScaledVector(gd,v):qu.addScaledVector(gd.sub(n),v))}n.add(qu)}return n}raycast(t,n){const a=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Vu.copy(a.boundingSphere),Vu.applyMatrix4(u),Fr.copy(t.ray).recast(t.near),!(Vu.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(Vu,y_)===null||Fr.origin.distanceToSquared(y_)>(t.far-t.near)**2))&&(S_.copy(u).invert(),Fr.copy(t.ray).applyMatrix4(S_),!(a.boundingBox!==null&&Fr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Fr)))}_computeIntersections(t,n,a){let o;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,g=u.groups,x=u.drawRange;if(h!==null)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const S=g[E],y=c[S.materialIndex],C=Math.max(S.start,x.start),D=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let N=C,G=D;N<G;N+=3){const O=h.getX(N),F=h.getX(N+1),T=h.getX(N+2);o=Zu(this,y,t,a,m,v,_,O,F,T),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let S=E,y=A;S<y;S+=3){const C=h.getX(S),D=h.getX(S+1),N=h.getX(S+2);o=Zu(this,c,t,a,m,v,_,C,D,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,A=g.length;E<A;E++){const S=g[E],y=c[S.materialIndex],C=Math.max(S.start,x.start),D=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let N=C,G=D;N<G;N+=3){const O=N,F=N+1,T=N+2;o=Zu(this,y,t,a,m,v,_,O,F,T),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,x.start),A=Math.min(p.count,x.start+x.count);for(let S=E,y=A;S<y;S+=3){const C=S,D=S+1,N=S+2;o=Zu(this,c,t,a,m,v,_,C,D,N),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function _T(r,t,n,a,o,u,c,h){let p;if(t.side===Jn?p=a.intersectTriangle(c,u,o,!0,h):p=a.intersectTriangle(o,u,c,t.side===mr,h),p===null)return null;Yu.copy(h),Yu.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Yu);return m<n.near||m>n.far?null:{distance:m,point:Yu.clone(),object:r}}function Zu(r,t,n,a,o,u,c,h,p,m){r.getVertexPosition(h,ku),r.getVertexPosition(p,Xu),r.getVertexPosition(m,Wu);const v=_T(r,t,n,a,ku,Xu,Wu,M_);if(v){const _=new Y;Oi.getBarycoord(M_,ku,Xu,Wu,_),o&&(v.uv=Oi.getInterpolatedAttribute(o,h,p,m,_,new Xt)),u&&(v.uv1=Oi.getInterpolatedAttribute(u,h,p,m,_,new Xt)),c&&(v.normal=Oi.getInterpolatedAttribute(c,h,p,m,_,new Y),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new Y,materialIndex:0};Oi.getNormal(ku,Xu,Wu,g.normal),v.face=g,v.barycoord=_}return v}class xT extends In{constructor(t=null,n=1,a=1,o,u,c,h,p,m=Dn,v=Dn,_,g){super(null,c,h,p,m,v,o,u,_,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vd=new Y,ST=new Y,yT=new ge;class Ir{constructor(t=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=vd.subVectors(a,n).cross(ST.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const o=t.delta(vd),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/u;return a===!0&&(c<0||c>1)?null:n.copy(t.start).addScaledVector(o,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||yT.getNormalMatrix(t),o=this.coplanarPoint(vd).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Rc,MT=new Xt(.5,.5),ju=new Y;class Zp{constructor(t=new Ir,n=new Ir,a=new Ir,o=new Ir,u=new Ir,c=new Ir){this.planes=[t,n,a,o,u,c]}set(t,n,a,o,u,c){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(a),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=qi,a=!1){const o=this.planes,u=t.elements,c=u[0],h=u[1],p=u[2],m=u[3],v=u[4],_=u[5],g=u[6],x=u[7],E=u[8],A=u[9],S=u[10],y=u[11],C=u[12],D=u[13],N=u[14],G=u[15];if(o[0].setComponents(m-c,x-v,y-E,G-C).normalize(),o[1].setComponents(m+c,x+v,y+E,G+C).normalize(),o[2].setComponents(m+h,x+_,y+A,G+D).normalize(),o[3].setComponents(m-h,x-_,y-A,G-D).normalize(),a)o[4].setComponents(p,g,S,N).normalize(),o[5].setComponents(m-p,x-g,y-S,G-N).normalize();else if(o[4].setComponents(m-p,x-g,y-S,G-N).normalize(),n===qi)o[5].setComponents(m+p,x+g,y+S,G+N).normalize();else if(n===fl)o[5].setComponents(p,g,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(t){Br.center.set(0,0,0);const n=MT.distanceTo(t.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(t.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(ju.x=o.normal.x>0?t.max.x:t.min.x,ju.y=o.normal.y>0?t.max.y:t.min.y,ju.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(ju)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hc extends xl{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const E_=new sn,Ep=new eS,Ku=new Rc,Ju=new Y;class _d extends Un{constructor(t=new kn,n=new hc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,o=this.matrixWorld,u=t.params.Points.threshold,c=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ku.copy(a.boundingSphere),Ku.applyMatrix4(o),Ku.radius+=u,t.ray.intersectsSphere(Ku)===!1)return;E_.copy(o).invert(),Ep.copy(t.ray).applyMatrix4(E_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=a.index,_=a.attributes.position;if(m!==null){const g=Math.max(0,c.start),x=Math.min(m.count,c.start+c.count);for(let E=g,A=x;E<A;E++){const S=m.getX(E);Ju.fromBufferAttribute(_,S),b_(Ju,S,p,o,t,n,this)}}else{const g=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let E=g,A=x;E<A;E++)Ju.fromBufferAttribute(_,E),b_(Ju,E,p,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function b_(r,t,n,a,o,u,c){const h=Ep.distanceSqToPoint(r);if(h<n){const p=new Y;Ep.closestPointToPoint(r,p),p.applyMatrix4(a);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;u.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class iS extends In{constructor(t=[],n=Wr,a,o,u,c,h,p,m,v){super(t,n,a,o,u,c,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ET extends In{constructor(t,n,a,o,u,c,h,p,m){super(t,n,a,o,u,c,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qs extends In{constructor(t,n,a=Ki,o,u,c,h=Dn,p=Dn,m,v=wa,_=1){if(v!==wa&&v!==kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:_};super(g,o,u,c,h,p,v,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class bT extends qs{constructor(t,n=Ki,a=Wr,o,u,c=Dn,h=Dn,p,m=wa){const v={width:t,height:t,depth:1},_=[v,v,v,v,v,v];super(t,t,n,a,o,u,c,h,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class aS extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sl extends kn{constructor(t=1,n=1,a=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],v=[],_=[];let g=0,x=0;E("z","y","x",-1,-1,a,n,t,c,u,0),E("z","y","x",1,-1,a,n,-t,c,u,1),E("x","z","y",1,1,t,a,n,o,c,2),E("x","z","y",1,-1,t,a,-n,o,c,3),E("x","y","z",1,-1,t,n,a,o,u,4),E("x","y","z",-1,-1,t,n,-a,o,u,5),this.setIndex(p),this.setAttribute("position",new Qn(m,3)),this.setAttribute("normal",new Qn(v,3)),this.setAttribute("uv",new Qn(_,2));function E(A,S,y,C,D,N,G,O,F,T,z){const q=N/F,I=G/T,J=N/2,ot=G/2,ft=O/2,k=F+1,L=T+1;let B=0,it=0;const dt=new Y;for(let yt=0;yt<L;yt++){const P=yt*I-ot;for(let K=0;K<k;K++){const vt=K*q-J;dt[A]=vt*C,dt[S]=P*D,dt[y]=ft,m.push(dt.x,dt.y,dt.z),dt[A]=0,dt[S]=0,dt[y]=O>0?1:-1,v.push(dt.x,dt.y,dt.z),_.push(K/F),_.push(1-yt/T),B+=1}}for(let yt=0;yt<T;yt++)for(let P=0;P<F;P++){const K=g+P+k*yt,vt=g+P+k*(yt+1),Ct=g+(P+1)+k*(yt+1),Ut=g+(P+1)+k*yt;p.push(K,vt,Ut),p.push(vt,Ct,Ut),it+=6}h.addGroup(x,it,z),x+=it,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){he("Curve: .getPoint() not implemented.")}getPointAt(t,n){const a=this.getUtoTmapping(t);return this.getPoint(a,n)}getPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return n}getSpacedPoints(t=5){const n=[];for(let a=0;a<=t;a++)n.push(this.getPointAt(a/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let a,o=this.getPoint(0),u=0;n.push(0);for(let c=1;c<=t;c++)a=this.getPoint(c/t),u+=a.distanceTo(o),n.push(u),o=a;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const a=this.getLengths();let o=0;const u=a.length;let c;n?c=n:c=t*a[u-1];let h=0,p=u-1,m;for(;h<=p;)if(o=Math.floor(h+(p-h)/2),m=a[o]-c,m<0)h=o+1;else if(m>0)p=o-1;else{p=o;break}if(o=p,a[o]===c)return o/(u-1);const v=a[o],g=a[o+1]-v,x=(c-v)/g;return(o+x)/(u-1)}getTangent(t,n){let o=t-1e-4,u=t+1e-4;o<0&&(o=0),u>1&&(u=1);const c=this.getPoint(o),h=this.getPoint(u),p=n||(c.isVector2?new Xt:new Y);return p.copy(h).sub(c).normalize(),p}getTangentAt(t,n){const a=this.getUtoTmapping(t);return this.getTangent(a,n)}computeFrenetFrames(t,n=!1){const a=new Y,o=[],u=[],c=[],h=new Y,p=new sn;for(let x=0;x<=t;x++){const E=x/t;o[x]=this.getTangentAt(E,new Y)}u[0]=new Y,c[0]=new Y;let m=Number.MAX_VALUE;const v=Math.abs(o[0].x),_=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=m&&(m=v,a.set(1,0,0)),_<=m&&(m=_,a.set(0,1,0)),g<=m&&a.set(0,0,1),h.crossVectors(o[0],a).normalize(),u[0].crossVectors(o[0],h),c[0].crossVectors(o[0],u[0]);for(let x=1;x<=t;x++){if(u[x]=u[x-1].clone(),c[x]=c[x-1].clone(),h.crossVectors(o[x-1],o[x]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(Ae(o[x-1].dot(o[x]),-1,1));u[x].applyMatrix4(p.makeRotationAxis(h,E))}c[x].crossVectors(o[x],u[x])}if(n===!0){let x=Math.acos(Ae(u[0].dot(u[t]),-1,1));x/=t,o[0].dot(h.crossVectors(u[0],u[t]))>0&&(x=-x);for(let E=1;E<=t;E++)u[E].applyMatrix4(p.makeRotationAxis(o[E],x*E)),c[E].crossVectors(o[E],u[E])}return{tangents:o,normals:u,binormals:c}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class jp extends Qi{constructor(t=0,n=0,a=1,o=1,u=0,c=Math.PI*2,h=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=a,this.yRadius=o,this.aStartAngle=u,this.aEndAngle=c,this.aClockwise=h,this.aRotation=p}getPoint(t,n=new Xt){const a=n,o=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const c=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=o;for(;u>o;)u-=o;u<Number.EPSILON&&(c?u=0:u=o),this.aClockwise===!0&&!c&&(u===o?u=-o:u=u-o);const h=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(h),m=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=p-this.aX,x=m-this.aY;p=g*v-x*_+this.aX,m=g*_+x*v+this.aY}return a.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class TT extends jp{constructor(t,n,a,o,u,c){super(t,n,a,a,o,u,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Kp(){let r=0,t=0,n=0,a=0;function o(u,c,h,p){r=u,t=h,n=-3*u+3*c-2*h-p,a=2*u-2*c+h+p}return{initCatmullRom:function(u,c,h,p,m){o(c,h,m*(h-u),m*(p-c))},initNonuniformCatmullRom:function(u,c,h,p,m,v,_){let g=(c-u)/m-(h-u)/(m+v)+(h-c)/v,x=(h-c)/v-(p-c)/(v+_)+(p-h)/_;g*=v,x*=v,o(c,h,g,x)},calc:function(u){const c=u*u,h=c*u;return r+t*u+n*c+a*h}}}const T_=new Y,A_=new Y,xd=new Kp,Sd=new Kp,yd=new Kp;class AT extends Qi{constructor(t=[],n=!1,a="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=a,this.tension=o}getPoint(t,n=new Y){const a=n,o=this.points,u=o.length,c=(u-(this.closed?0:1))*t;let h=Math.floor(c),p=c-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/u)+1)*u:p===0&&h===u-1&&(h=u-2,p=1);let m,v;this.closed||h>0?m=o[(h-1)%u]:(A_.subVectors(o[0],o[1]).add(o[0]),m=A_);const _=o[h%u],g=o[(h+1)%u];if(this.closed||h+2<u?v=o[(h+2)%u]:(T_.subVectors(o[u-1],o[u-2]).add(o[u-1]),v=T_),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),x),A=Math.pow(_.distanceToSquared(g),x),S=Math.pow(g.distanceToSquared(v),x);A<1e-4&&(A=1),E<1e-4&&(E=A),S<1e-4&&(S=A),xd.initNonuniformCatmullRom(m.x,_.x,g.x,v.x,E,A,S),Sd.initNonuniformCatmullRom(m.y,_.y,g.y,v.y,E,A,S),yd.initNonuniformCatmullRom(m.z,_.z,g.z,v.z,E,A,S)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(m.x,_.x,g.x,v.x,this.tension),Sd.initCatmullRom(m.y,_.y,g.y,v.y,this.tension),yd.initCatmullRom(m.z,_.z,g.z,v.z,this.tension));return a.set(xd.calc(p),Sd.calc(p),yd.calc(p)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Y().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function R_(r,t,n,a,o){const u=(a-t)*.5,c=(o-n)*.5,h=r*r,p=r*h;return(2*n-2*a+u+c)*p+(-3*n+3*a-2*u-c)*h+u*r+n}function RT(r,t){const n=1-r;return n*n*t}function CT(r,t){return 2*(1-r)*r*t}function wT(r,t){return r*r*t}function sl(r,t,n,a){return RT(r,t)+CT(r,n)+wT(r,a)}function DT(r,t){const n=1-r;return n*n*n*t}function UT(r,t){const n=1-r;return 3*n*n*r*t}function LT(r,t){return 3*(1-r)*r*r*t}function NT(r,t){return r*r*r*t}function ol(r,t,n,a,o){return DT(r,t)+UT(r,n)+LT(r,a)+NT(r,o)}class rS extends Qi{constructor(t=new Xt,n=new Xt,a=new Xt,o=new Xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Xt){const a=n,o=this.v0,u=this.v1,c=this.v2,h=this.v3;return a.set(ol(t,o.x,u.x,c.x,h.x),ol(t,o.y,u.y,c.y,h.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class OT extends Qi{constructor(t=new Y,n=new Y,a=new Y,o=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=a,this.v3=o}getPoint(t,n=new Y){const a=n,o=this.v0,u=this.v1,c=this.v2,h=this.v3;return a.set(ol(t,o.x,u.x,c.x,h.x),ol(t,o.y,u.y,c.y,h.y),ol(t,o.z,u.z,c.z,h.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sS extends Qi{constructor(t=new Xt,n=new Xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new Xt){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Xt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class PT extends Qi{constructor(t=new Y,n=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new Y){const a=n;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new Y){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class oS extends Qi{constructor(t=new Xt,n=new Xt,a=new Xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Xt){const a=n,o=this.v0,u=this.v1,c=this.v2;return a.set(sl(t,o.x,u.x,c.x),sl(t,o.y,u.y,c.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zT extends Qi{constructor(t=new Y,n=new Y,a=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=a}getPoint(t,n=new Y){const a=n,o=this.v0,u=this.v1,c=this.v2;return a.set(sl(t,o.x,u.x,c.x),sl(t,o.y,u.y,c.y),sl(t,o.z,u.z,c.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lS extends Qi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new Xt){const a=n,o=this.points,u=(o.length-1)*t,c=Math.floor(u),h=u-c,p=o[c===0?c:c-1],m=o[c],v=o[c>o.length-2?o.length-1:c+1],_=o[c>o.length-3?o.length-1:c+2];return a.set(R_(h,p.x,m.x,v.x,_.x),R_(h,p.y,m.y,v.y,_.y)),a}copy(t){super.copy(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,a=this.points.length;n<a;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,a=t.points.length;n<a;n++){const o=t.points[n];this.points.push(new Xt().fromArray(o))}return this}}var bp=Object.freeze({__proto__:null,ArcCurve:TT,CatmullRomCurve3:AT,CubicBezierCurve:rS,CubicBezierCurve3:OT,EllipseCurve:jp,LineCurve:sS,LineCurve3:PT,QuadraticBezierCurve:oS,QuadraticBezierCurve3:zT,SplineCurve:lS});class FT extends Qi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const a=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bp[a](n,t))}return this}getPoint(t,n){const a=t*this.getLength(),o=this.getCurveLengths();let u=0;for(;u<o.length;){if(o[u]>=a){const c=o[u]-a,h=this.curves[u],p=h.getLength(),m=p===0?0:1-c/p;return h.getPointAt(m,n)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let a=0,o=this.curves.length;a<o;a++)n+=this.curves[a].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let a=0;a<=t;a++)n.push(this.getPoint(a/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let a;for(let o=0,u=this.curves;o<u.length;o++){const c=u[o],h=c.isEllipseCurve?t*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?t*c.points.length:t,p=c.getPoints(h);for(let m=0;m<p.length;m++){const v=p[m];a&&a.equals(v)||(n.push(v),a=v)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,a=this.curves.length;n<a;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,a=t.curves.length;n<a;n++){const o=t.curves[n];this.curves.push(new bp[o.type]().fromJSON(o))}return this}}class C_ extends FT{constructor(t){super(),this.type="Path",this.currentPoint=new Xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,a=t.length;n<a;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const a=new sS(this.currentPoint.clone(),new Xt(t,n));return this.curves.push(a),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,a,o){const u=new oS(this.currentPoint.clone(),new Xt(t,n),new Xt(a,o));return this.curves.push(u),this.currentPoint.set(a,o),this}bezierCurveTo(t,n,a,o,u,c){const h=new rS(this.currentPoint.clone(),new Xt(t,n),new Xt(a,o),new Xt(u,c));return this.curves.push(h),this.currentPoint.set(u,c),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),a=new lS(n);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,a,o,u,c){const h=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+h,n+p,a,o,u,c),this}absarc(t,n,a,o,u,c){return this.absellipse(t,n,a,a,o,u,c),this}ellipse(t,n,a,o,u,c,h,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,n+v,a,o,u,c,h,p),this}absellipse(t,n,a,o,u,c,h,p){const m=new jp(t,n,a,o,u,c,h,p);if(this.curves.length>0){const _=m.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Cc extends C_{constructor(t){super(t),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let a=0,o=this.holes.length;a<o;a++)n[a]=this.holes[a].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,a=this.holes.length;n<a;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,a=t.holes.length;n<a;n++){const o=t.holes[n];this.holes.push(new C_().fromJSON(o))}return this}}function BT(r,t,n=2){const a=t&&t.length,o=a?t[0]*n:r.length;let u=uS(r,0,o,n,!0);const c=[];if(!u||u.next===u.prev)return c;let h,p,m;if(a&&(u=kT(r,t,u,n)),r.length>80*n){h=r[0],p=r[1];let v=h,_=p;for(let g=n;g<o;g+=n){const x=r[g],E=r[g+1];x<h&&(h=x),E<p&&(p=E),x>v&&(v=x),E>_&&(_=E)}m=Math.max(v-h,_-p),m=m!==0?32767/m:0}return hl(u,c,n,h,p,m,0),c}function uS(r,t,n,a,o){let u;if(o===t1(r,t,n,a)>0)for(let c=t;c<n;c+=a)u=w_(c/a|0,r[c],r[c+1],u);else for(let c=n-a;c>=t;c-=a)u=w_(c/a|0,r[c],r[c+1],u);return u&&Ys(u,u.next)&&(pl(u),u=u.next),u}function Zr(r,t){if(!r)return r;t||(t=r);let n=r,a;do if(a=!1,!n.steiner&&(Ys(n,n.next)||an(n.prev,n,n.next)===0)){if(pl(n),n=t=n.prev,n===n.next)break;a=!0}else n=n.next;while(a||n!==t);return t}function hl(r,t,n,a,o,u,c){if(!r)return;!c&&u&&ZT(r,a,o,u);let h=r;for(;r.prev!==r.next;){const p=r.prev,m=r.next;if(u?HT(r,a,o,u):IT(r)){t.push(p.i,r.i,m.i),pl(r),r=m.next,h=m.next;continue}if(r=m,r===h){c?c===1?(r=GT(Zr(r),t),hl(r,t,n,a,o,u,2)):c===2&&VT(r,t,n,a,o,u):hl(Zr(r),t,n,a,o,u,1);break}}}function IT(r){const t=r.prev,n=r,a=r.next;if(an(t,n,a)>=0)return!1;const o=t.x,u=n.x,c=a.x,h=t.y,p=n.y,m=a.y,v=Math.min(o,u,c),_=Math.min(h,p,m),g=Math.max(o,u,c),x=Math.max(h,p,m);let E=a.next;for(;E!==t;){if(E.x>=v&&E.x<=g&&E.y>=_&&E.y<=x&&al(o,h,u,p,c,m,E.x,E.y)&&an(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function HT(r,t,n,a){const o=r.prev,u=r,c=r.next;if(an(o,u,c)>=0)return!1;const h=o.x,p=u.x,m=c.x,v=o.y,_=u.y,g=c.y,x=Math.min(h,p,m),E=Math.min(v,_,g),A=Math.max(h,p,m),S=Math.max(v,_,g),y=Tp(x,E,t,n,a),C=Tp(A,S,t,n,a);let D=r.prevZ,N=r.nextZ;for(;D&&D.z>=y&&N&&N.z<=C;){if(D.x>=x&&D.x<=A&&D.y>=E&&D.y<=S&&D!==o&&D!==c&&al(h,v,p,_,m,g,D.x,D.y)&&an(D.prev,D,D.next)>=0||(D=D.prevZ,N.x>=x&&N.x<=A&&N.y>=E&&N.y<=S&&N!==o&&N!==c&&al(h,v,p,_,m,g,N.x,N.y)&&an(N.prev,N,N.next)>=0))return!1;N=N.nextZ}for(;D&&D.z>=y;){if(D.x>=x&&D.x<=A&&D.y>=E&&D.y<=S&&D!==o&&D!==c&&al(h,v,p,_,m,g,D.x,D.y)&&an(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;N&&N.z<=C;){if(N.x>=x&&N.x<=A&&N.y>=E&&N.y<=S&&N!==o&&N!==c&&al(h,v,p,_,m,g,N.x,N.y)&&an(N.prev,N,N.next)>=0)return!1;N=N.nextZ}return!0}function GT(r,t){let n=r;do{const a=n.prev,o=n.next.next;!Ys(a,o)&&fS(a,n,n.next,o)&&dl(a,o)&&dl(o,a)&&(t.push(a.i,n.i,o.i),pl(n),pl(n.next),n=r=o),n=n.next}while(n!==r);return Zr(n)}function VT(r,t,n,a,o,u){let c=r;do{let h=c.next.next;for(;h!==c.prev;){if(c.i!==h.i&&JT(c,h)){let p=hS(c,h);c=Zr(c,c.next),p=Zr(p,p.next),hl(c,t,n,a,o,u,0),hl(p,t,n,a,o,u,0);return}h=h.next}c=c.next}while(c!==r)}function kT(r,t,n,a){const o=[];for(let u=0,c=t.length;u<c;u++){const h=t[u]*a,p=u<c-1?t[u+1]*a:r.length,m=uS(r,h,p,a,!1);m===m.next&&(m.steiner=!0),o.push(KT(m))}o.sort(XT);for(let u=0;u<o.length;u++)n=WT(o[u],n);return n}function XT(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const a=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=a-o}return n}function WT(r,t){const n=qT(r,t);if(!n)return t;const a=hS(n,r);return Zr(a,a.next),Zr(n,n.next)}function qT(r,t){let n=t;const a=r.x,o=r.y;let u=-1/0,c;if(Ys(r,n))return n;do{if(Ys(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const _=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(_<=a&&_>u&&(u=_,c=n.x<n.next.x?n:n.next,_===a))return c}n=n.next}while(n!==t);if(!c)return null;const h=c,p=c.x,m=c.y;let v=1/0;n=c;do{if(a>=n.x&&n.x>=p&&a!==n.x&&cS(o<m?a:u,o,p,m,o<m?u:a,o,n.x,n.y)){const _=Math.abs(o-n.y)/(a-n.x);dl(n,r)&&(_<v||_===v&&(n.x>c.x||n.x===c.x&&YT(c,n)))&&(c=n,v=_)}n=n.next}while(n!==h);return c}function YT(r,t){return an(r.prev,r,t.prev)<0&&an(t.next,r,r.next)<0}function ZT(r,t,n,a){let o=r;do o.z===0&&(o.z=Tp(o.x,o.y,t,n,a)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,jT(o)}function jT(r){let t,n=1;do{let a=r,o;r=null;let u=null;for(t=0;a;){t++;let c=a,h=0;for(let m=0;m<n&&(h++,c=c.nextZ,!!c);m++);let p=n;for(;h>0||p>0&&c;)h!==0&&(p===0||!c||a.z<=c.z)?(o=a,a=a.nextZ,h--):(o=c,c=c.nextZ,p--),u?u.nextZ=o:r=o,o.prevZ=u,u=o;a=c}u.nextZ=null,n*=2}while(t>1);return r}function Tp(r,t,n,a,o){return r=(r-n)*o|0,t=(t-a)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function KT(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function cS(r,t,n,a,o,u,c,h){return(o-c)*(t-h)>=(r-c)*(u-h)&&(r-c)*(a-h)>=(n-c)*(t-h)&&(n-c)*(u-h)>=(o-c)*(a-h)}function al(r,t,n,a,o,u,c,h){return!(r===c&&t===h)&&cS(r,t,n,a,o,u,c,h)}function JT(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!QT(r,t)&&(dl(r,t)&&dl(t,r)&&$T(r,t)&&(an(r.prev,r,t.prev)||an(r,t.prev,t))||Ys(r,t)&&an(r.prev,r,r.next)>0&&an(t.prev,t,t.next)>0)}function an(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Ys(r,t){return r.x===t.x&&r.y===t.y}function fS(r,t,n,a){const o=$u(an(r,t,n)),u=$u(an(r,t,a)),c=$u(an(n,a,r)),h=$u(an(n,a,t));return!!(o!==u&&c!==h||o===0&&Qu(r,n,t)||u===0&&Qu(r,a,t)||c===0&&Qu(n,r,a)||h===0&&Qu(n,t,a))}function Qu(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function $u(r){return r>0?1:r<0?-1:0}function QT(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&fS(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function dl(r,t){return an(r.prev,r,r.next)<0?an(r,t,r.next)>=0&&an(r,r.prev,t)>=0:an(r,t,r.prev)<0||an(r,r.next,t)<0}function $T(r,t){let n=r,a=!1;const o=(r.x+t.x)/2,u=(r.y+t.y)/2;do n.y>u!=n.next.y>u&&n.next.y!==n.y&&o<(n.next.x-n.x)*(u-n.y)/(n.next.y-n.y)+n.x&&(a=!a),n=n.next;while(n!==r);return a}function hS(r,t){const n=Ap(r.i,r.x,r.y),a=Ap(t.i,t.x,t.y),o=r.next,u=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,a.next=n,n.prev=a,u.next=a,a.prev=u,a}function w_(r,t,n,a){const o=Ap(r,t,n);return a?(o.next=a.next,o.prev=a,a.next.prev=o,a.next=o):(o.prev=o,o.next=o),o}function pl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ap(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function t1(r,t,n,a){let o=0;for(let u=t,c=n-a;u<n;u+=a)o+=(r[c]-r[u])*(r[u+1]+r[c+1]),c=u;return o}class e1{static triangulate(t,n,a=2){return BT(t,n,a)}}class ba{static area(t){const n=t.length;let a=0;for(let o=n-1,u=0;u<n;o=u++)a+=t[o].x*t[u].y-t[u].x*t[o].y;return a*.5}static isClockWise(t){return ba.area(t)<0}static triangulateShape(t,n){const a=[],o=[],u=[];D_(t),U_(a,t);let c=t.length;n.forEach(D_);for(let p=0;p<n.length;p++)o.push(c),c+=n[p].length,U_(a,n[p]);const h=e1.triangulate(a,o);for(let p=0;p<h.length;p+=3)u.push(h.slice(p,p+3));return u}}function D_(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function U_(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class Jp extends kn{constructor(t=new Cc([new Xt(.5,.5),new Xt(-.5,.5),new Xt(-.5,-.5),new Xt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const a=this,o=[],u=[];for(let h=0,p=t.length;h<p;h++){const m=t[h];c(m)}this.setAttribute("position",new Qn(o,3)),this.setAttribute("uv",new Qn(u,2)),this.computeVertexNormals();function c(h){const p=[],m=n.curveSegments!==void 0?n.curveSegments:12,v=n.steps!==void 0?n.steps:1,_=n.depth!==void 0?n.depth:1;let g=n.bevelEnabled!==void 0?n.bevelEnabled:!0,x=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:x-.1,A=n.bevelOffset!==void 0?n.bevelOffset:0,S=n.bevelSegments!==void 0?n.bevelSegments:3;const y=n.extrudePath,C=n.UVGenerator!==void 0?n.UVGenerator:n1;let D,N=!1,G,O,F,T;if(y){D=y.getSpacedPoints(v),N=!0,g=!1;const pt=y.isCatmullRomCurve3?y.closed:!1;G=y.computeFrenetFrames(v,pt),O=new Y,F=new Y,T=new Y}g||(S=0,x=0,E=0,A=0);const z=h.extractPoints(m);let q=z.shape;const I=z.holes;if(!ba.isClockWise(q)){q=q.reverse();for(let pt=0,wt=I.length;pt<wt;pt++){const Et=I[pt];ba.isClockWise(Et)&&(I[pt]=Et.reverse())}}function ot(pt){const Et=10000000000000001e-36;let Wt=pt[0];for(let Bt=1;Bt<=pt.length;Bt++){const le=Bt%pt.length,H=pt[le],ue=H.x-Wt.x,$t=H.y-Wt.y,ce=ue*ue+$t*$t,At=Math.max(Math.abs(H.x),Math.abs(H.y),Math.abs(Wt.x),Math.abs(Wt.y)),Le=Et*At*At;if(ce<=Le){pt.splice(le,1),Bt--;continue}Wt=H}}ot(q),I.forEach(ot);const ft=I.length,k=q;for(let pt=0;pt<ft;pt++){const wt=I[pt];q=q.concat(wt)}function L(pt,wt,Et){return wt||Ue("ExtrudeGeometry: vec does not exist"),pt.clone().addScaledVector(wt,Et)}const B=q.length;function it(pt,wt,Et){let Wt,Bt,le;const H=pt.x-wt.x,ue=pt.y-wt.y,$t=Et.x-pt.x,ce=Et.y-pt.y,At=H*H+ue*ue,Le=H*ce-ue*$t;if(Math.abs(Le)>Number.EPSILON){const U=Math.sqrt(At),b=Math.sqrt($t*$t+ce*ce),Q=wt.x-ue/U,_t=wt.y+H/U,Tt=Et.x-ce/b,Lt=Et.y+$t/b,Pt=((Tt-Q)*ce-(Lt-_t)*$t)/(H*ce-ue*$t);Wt=Q+H*Pt-pt.x,Bt=_t+ue*Pt-pt.y;const ut=Wt*Wt+Bt*Bt;if(ut<=2)return new Xt(Wt,Bt);le=Math.sqrt(ut/2)}else{let U=!1;H>Number.EPSILON?$t>Number.EPSILON&&(U=!0):H<-Number.EPSILON?$t<-Number.EPSILON&&(U=!0):Math.sign(ue)===Math.sign(ce)&&(U=!0),U?(Wt=-ue,Bt=H,le=Math.sqrt(At)):(Wt=H,Bt=ue,le=Math.sqrt(At/2))}return new Xt(Wt/le,Bt/le)}const dt=[];for(let pt=0,wt=k.length,Et=wt-1,Wt=pt+1;pt<wt;pt++,Et++,Wt++)Et===wt&&(Et=0),Wt===wt&&(Wt=0),dt[pt]=it(k[pt],k[Et],k[Wt]);const yt=[];let P,K=dt.concat();for(let pt=0,wt=ft;pt<wt;pt++){const Et=I[pt];P=[];for(let Wt=0,Bt=Et.length,le=Bt-1,H=Wt+1;Wt<Bt;Wt++,le++,H++)le===Bt&&(le=0),H===Bt&&(H=0),P[Wt]=it(Et[Wt],Et[le],Et[H]);yt.push(P),K=K.concat(P)}let vt;if(S===0)vt=ba.triangulateShape(k,I);else{const pt=[],wt=[];for(let Et=0;Et<S;Et++){const Wt=Et/S,Bt=x*Math.cos(Wt*Math.PI/2),le=E*Math.sin(Wt*Math.PI/2)+A;for(let H=0,ue=k.length;H<ue;H++){const $t=L(k[H],dt[H],le);Ot($t.x,$t.y,-Bt),Wt===0&&pt.push($t)}for(let H=0,ue=ft;H<ue;H++){const $t=I[H];P=yt[H];const ce=[];for(let At=0,Le=$t.length;At<Le;At++){const U=L($t[At],P[At],le);Ot(U.x,U.y,-Bt),Wt===0&&ce.push(U)}Wt===0&&wt.push(ce)}}vt=ba.triangulateShape(pt,wt)}const Ct=vt.length,Ut=E+A;for(let pt=0;pt<B;pt++){const wt=g?L(q[pt],K[pt],Ut):q[pt];N?(F.copy(G.normals[0]).multiplyScalar(wt.x),O.copy(G.binormals[0]).multiplyScalar(wt.y),T.copy(D[0]).add(F).add(O),Ot(T.x,T.y,T.z)):Ot(wt.x,wt.y,0)}for(let pt=1;pt<=v;pt++)for(let wt=0;wt<B;wt++){const Et=g?L(q[wt],K[wt],Ut):q[wt];N?(F.copy(G.normals[pt]).multiplyScalar(Et.x),O.copy(G.binormals[pt]).multiplyScalar(Et.y),T.copy(D[pt]).add(F).add(O),Ot(T.x,T.y,T.z)):Ot(Et.x,Et.y,_/v*pt)}for(let pt=S-1;pt>=0;pt--){const wt=pt/S,Et=x*Math.cos(wt*Math.PI/2),Wt=E*Math.sin(wt*Math.PI/2)+A;for(let Bt=0,le=k.length;Bt<le;Bt++){const H=L(k[Bt],dt[Bt],Wt);Ot(H.x,H.y,_+Et)}for(let Bt=0,le=I.length;Bt<le;Bt++){const H=I[Bt];P=yt[Bt];for(let ue=0,$t=H.length;ue<$t;ue++){const ce=L(H[ue],P[ue],Wt);N?Ot(ce.x,ce.y+D[v-1].y,D[v-1].x+Et):Ot(ce.x,ce.y,_+Et)}}}at(),Mt();function at(){const pt=o.length/3;if(g){let wt=0,Et=B*wt;for(let Wt=0;Wt<Ct;Wt++){const Bt=vt[Wt];ne(Bt[2]+Et,Bt[1]+Et,Bt[0]+Et)}wt=v+S*2,Et=B*wt;for(let Wt=0;Wt<Ct;Wt++){const Bt=vt[Wt];ne(Bt[0]+Et,Bt[1]+Et,Bt[2]+Et)}}else{for(let wt=0;wt<Ct;wt++){const Et=vt[wt];ne(Et[2],Et[1],Et[0])}for(let wt=0;wt<Ct;wt++){const Et=vt[wt];ne(Et[0]+B*v,Et[1]+B*v,Et[2]+B*v)}}a.addGroup(pt,o.length/3-pt,0)}function Mt(){const pt=o.length/3;let wt=0;bt(k,wt),wt+=k.length;for(let Et=0,Wt=I.length;Et<Wt;Et++){const Bt=I[Et];bt(Bt,wt),wt+=Bt.length}a.addGroup(pt,o.length/3-pt,1)}function bt(pt,wt){let Et=pt.length;for(;--Et>=0;){const Wt=Et;let Bt=Et-1;Bt<0&&(Bt=pt.length-1);for(let le=0,H=v+S*2;le<H;le++){const ue=B*le,$t=B*(le+1),ce=wt+Wt+ue,At=wt+Bt+ue,Le=wt+Bt+$t,U=wt+Wt+$t;ie(ce,At,Le,U)}}}function Ot(pt,wt,Et){p.push(pt),p.push(wt),p.push(Et)}function ne(pt,wt,Et){Se(pt),Se(wt),Se(Et);const Wt=o.length/3,Bt=C.generateTopUV(a,o,Wt-3,Wt-2,Wt-1);Vt(Bt[0]),Vt(Bt[1]),Vt(Bt[2])}function ie(pt,wt,Et,Wt){Se(pt),Se(wt),Se(Wt),Se(wt),Se(Et),Se(Wt);const Bt=o.length/3,le=C.generateSideWallUV(a,o,Bt-6,Bt-3,Bt-2,Bt-1);Vt(le[0]),Vt(le[1]),Vt(le[3]),Vt(le[1]),Vt(le[2]),Vt(le[3])}function Se(pt){o.push(p[pt*3+0]),o.push(p[pt*3+1]),o.push(p[pt*3+2])}function Vt(pt){u.push(pt.x),u.push(pt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,a=this.parameters.options;return i1(n,a,t)}static fromJSON(t,n){const a=[];for(let u=0,c=t.shapes.length;u<c;u++){const h=n[t.shapes[u]];a.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new bp[o.type]().fromJSON(o)),new Jp(a,t.options)}}const n1={generateTopUV:function(r,t,n,a,o){const u=t[n*3],c=t[n*3+1],h=t[a*3],p=t[a*3+1],m=t[o*3],v=t[o*3+1];return[new Xt(u,c),new Xt(h,p),new Xt(m,v)]},generateSideWallUV:function(r,t,n,a,o,u){const c=t[n*3],h=t[n*3+1],p=t[n*3+2],m=t[a*3],v=t[a*3+1],_=t[a*3+2],g=t[o*3],x=t[o*3+1],E=t[o*3+2],A=t[u*3],S=t[u*3+1],y=t[u*3+2];return Math.abs(h-v)<Math.abs(c-m)?[new Xt(c,1-p),new Xt(m,1-_),new Xt(g,1-E),new Xt(A,1-y)]:[new Xt(h,1-p),new Xt(v,1-_),new Xt(x,1-E),new Xt(S,1-y)]}};function i1(r,t,n){if(n.shapes=[],Array.isArray(r))for(let a=0,o=r.length;a<o;a++){const u=r[a];n.shapes.push(u.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class wc extends kn{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const u=t/2,c=n/2,h=Math.floor(a),p=Math.floor(o),m=h+1,v=p+1,_=t/h,g=n/p,x=[],E=[],A=[],S=[];for(let y=0;y<v;y++){const C=y*g-c;for(let D=0;D<m;D++){const N=D*_-u;E.push(N,-C,0),A.push(0,0,1),S.push(D/h),S.push(1-y/p)}}for(let y=0;y<p;y++)for(let C=0;C<h;C++){const D=C+m*y,N=C+m*(y+1),G=C+1+m*(y+1),O=C+1+m*y;x.push(D,N,O),x.push(N,G,O)}this.setIndex(x),this.setAttribute("position",new Qn(E,3)),this.setAttribute("normal",new Qn(A,3)),this.setAttribute("uv",new Qn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qp extends kn{constructor(t=new Cc([new Xt(0,.5),new Xt(-.5,-.5),new Xt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const a=[],o=[],u=[],c=[];let h=0,p=0;if(Array.isArray(t)===!1)m(t);else for(let v=0;v<t.length;v++)m(t[v]),this.addGroup(h,p,v),h+=p,p=0;this.setIndex(a),this.setAttribute("position",new Qn(o,3)),this.setAttribute("normal",new Qn(u,3)),this.setAttribute("uv",new Qn(c,2));function m(v){const _=o.length/3,g=v.extractPoints(n);let x=g.shape;const E=g.holes;ba.isClockWise(x)===!1&&(x=x.reverse());for(let S=0,y=E.length;S<y;S++){const C=E[S];ba.isClockWise(C)===!0&&(E[S]=C.reverse())}const A=ba.triangulateShape(x,E);for(let S=0,y=E.length;S<y;S++){const C=E[S];x=x.concat(C)}for(let S=0,y=x.length;S<y;S++){const C=x[S];o.push(C.x,C.y,0),u.push(0,0,1),c.push(C.x,C.y)}for(let S=0,y=A.length;S<y;S++){const C=A[S],D=C[0]+_,N=C[1]+_,G=C[2]+_;a.push(D,N,G),p+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return a1(n,t)}static fromJSON(t,n){const a=[];for(let o=0,u=t.shapes.length;o<u;o++){const c=n[t.shapes[o]];a.push(c)}return new Qp(a,t.curveSegments)}}function a1(r,t){if(t.shapes=[],Array.isArray(r))for(let n=0,a=r.length;n<a;n++){const o=r[n];t.shapes.push(o.uuid)}else t.shapes.push(r.uuid);return t}function Zs(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];if(L_(o))o.isRenderTargetTexture?(he("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone();else if(Array.isArray(o))if(L_(o[0])){const u=[];for(let c=0,h=o.length;c<h;c++)u[c]=o[c].clone();t[n][a]=u}else t[n][a]=o.slice();else t[n][a]=o}}return t}function Gn(r){const t={};for(let n=0;n<r.length;n++){const a=Zs(r[n]);for(const o in a)t[o]=a[o]}return t}function L_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function r1(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function dS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const s1={clone:Zs,merge:Gn};var o1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends xl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o1,this.fragmentShader=l1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=r1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class u1 extends Ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class c1 extends xl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class f1 extends xl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class pS extends Un{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Md=new sn,N_=new Y,O_=new Y;class h1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zp,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;N_.setFromMatrixPosition(t.matrixWorld),n.position.copy(N_),O_.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(O_),n.updateMatrixWorld(),Md.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===fl||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const tc=new Y,ec=new Qs,Vi=new Y;class mS extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(tc,ec,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,ec,Vi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(tc,ec,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tc,ec,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new Y,P_=new Xt,z_=new Xt;class Ei extends mS{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Mp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mp*2*Math.atan(Math.tan(Zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-t/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(hr.x,hr.y).multiplyScalar(-t/hr.z)}getViewSize(t,n){return this.getViewBounds(t,P_,z_),n.subVectors(z_,P_)}setViewOffset(t,n,a,o,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Zh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*a/m,o*=c.width/p,a*=c.height/m}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class $p extends mS{constructor(t=-1,n=1,a=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=a-t,c=a+t,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class d1 extends h1{constructor(){super(new $p(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class p1 extends pS{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new d1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class m1 extends pS{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Is=-90,Hs=1;class g1 extends Un{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ei(Is,Hs,t,n);o.layers=this.layers,this.add(o);const u=new Ei(Is,Hs,t,n);u.layers=this.layers,this.add(u);const c=new Ei(Is,Hs,t,n);c.layers=this.layers,this.add(c);const h=new Ei(Is,Hs,t,n);h.layers=this.layers,this.add(h);const p=new Ei(Is,Hs,t,n);p.layers=this.layers,this.add(p);const m=new Ei(Is,Hs,t,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,u,c,h,p]=n;for(const m of n)this.remove(m);if(t===qi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===fl)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of n)this.add(m),m.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,m,v]=this.children,_=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(a,0,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,1,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,2,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(a,3,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,m),a.texture.generateMipmaps=A,t.setRenderTarget(a,5,o),S&&t.autoClear===!1&&t.clearDepth(),t.render(n,v),t.setRenderTarget(_,g,x),t.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class v1 extends Ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const am=class am{constructor(t,n,a,o){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,o){const u=this.elements;return u[0]=t,u[2]=n,u[1]=a,u[3]=o,this}};am.prototype.isMatrix2=!0;let F_=am;function B_(r,t,n,a){const o=_1(a);switch(n){case qx:return r*t;case Zx:return r*t/o.components*o.byteLength;case Vp:return r*t/o.components*o.byteLength;case qr:return r*t*2/o.components*o.byteLength;case kp:return r*t*2/o.components*o.byteLength;case Yx:return r*t*3/o.components*o.byteLength;case Pi:return r*t*4/o.components*o.byteLength;case Xp:return r*t*4/o.components*o.byteLength;case lc:case uc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case cc:case fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qd:case Zd:return Math.max(r,16)*Math.max(t,8)/4;case Wd:case Yd:return Math.max(r,8)*Math.max(t,8)/2;case jd:case Kd:case Qd:case $d:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Jd:case vc:case tp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ep:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case np:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case ip:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case ap:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case sp:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case op:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case lp:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case up:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case cp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case fp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case hp:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case dp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case pp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case mp:case gp:case vp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case _p:case xp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case _c:case Sp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _1(r){switch(r){case fi:case Vx:return{byteLength:1,components:1};case ul:case kx:case Ca:return{byteLength:2,components:1};case Hp:case Gp:return{byteLength:2,components:4};case Ki:case Ip:case Wi:return{byteLength:4,components:1};case Xx:case Wx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bp}}));typeof window<"u"&&(window.__THREE__?he("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gS(){let r=null,t=!1,n=null,a=null;function o(u,c){n(u,c),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&r!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){r=u}}}function x1(r){const t=new WeakMap;function n(h,p){const m=h.array,v=h.usage,_=m.byteLength,g=r.createBuffer();r.bindBuffer(p,g),r.bufferData(p,m,v),h.onUploadCallback();let x;if(m instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=r.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=r.SHORT;else if(m instanceof Uint32Array)x=r.UNSIGNED_INT;else if(m instanceof Int32Array)x=r.INT;else if(m instanceof Int8Array)x=r.BYTE;else if(m instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:_}}function a(h,p,m){const v=p.array,_=p.updateRanges;if(r.bindBuffer(m,h),_.length===0)r.bufferSubData(m,0,v);else{_.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<_.length;x++){const E=_[g],A=_[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++g,_[g]=A)}_.length=g+1;for(let x=0,E=_.length;x<E;x++){const A=_[x];r.bufferSubData(m,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(r.deleteBuffer(p.buffer),t.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,h,p),m.version=h.version}}return{get:o,remove:u,update:c}}var S1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,A1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,w1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,F1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,k1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,W1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K1="gl_FragColor = linearToOutputTexel( gl_FragColor );",J1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_A=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,SA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,FA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,KA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$A=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ER=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$R=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ye={alphahash_fragment:S1,alphahash_pars_fragment:y1,alphamap_fragment:M1,alphamap_pars_fragment:E1,alphatest_fragment:b1,alphatest_pars_fragment:T1,aomap_fragment:A1,aomap_pars_fragment:R1,batching_pars_vertex:C1,batching_vertex:w1,begin_vertex:D1,beginnormal_vertex:U1,bsdfs:L1,iridescence_fragment:N1,bumpmap_pars_fragment:O1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:F1,clipping_planes_vertex:B1,color_fragment:I1,color_pars_fragment:H1,color_pars_vertex:G1,color_vertex:V1,common:k1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:W1,displacementmap_pars_vertex:q1,displacementmap_vertex:Y1,emissivemap_fragment:Z1,emissivemap_pars_fragment:j1,colorspace_fragment:K1,colorspace_pars_fragment:J1,envmap_fragment:Q1,envmap_common_pars_fragment:$1,envmap_pars_fragment:tA,envmap_pars_vertex:eA,envmap_physical_pars_fragment:hA,envmap_vertex:nA,fog_vertex:iA,fog_pars_vertex:aA,fog_fragment:rA,fog_pars_fragment:sA,gradientmap_pars_fragment:oA,lightmap_pars_fragment:lA,lights_lambert_fragment:uA,lights_lambert_pars_fragment:cA,lights_pars_begin:fA,lights_toon_fragment:dA,lights_toon_pars_fragment:pA,lights_phong_fragment:mA,lights_phong_pars_fragment:gA,lights_physical_fragment:vA,lights_physical_pars_fragment:_A,lights_fragment_begin:xA,lights_fragment_maps:SA,lights_fragment_end:yA,lightprobes_pars_fragment:MA,logdepthbuf_fragment:EA,logdepthbuf_pars_fragment:bA,logdepthbuf_pars_vertex:TA,logdepthbuf_vertex:AA,map_fragment:RA,map_pars_fragment:CA,map_particle_fragment:wA,map_particle_pars_fragment:DA,metalnessmap_fragment:UA,metalnessmap_pars_fragment:LA,morphinstance_vertex:NA,morphcolor_vertex:OA,morphnormal_vertex:PA,morphtarget_pars_vertex:zA,morphtarget_vertex:FA,normal_fragment_begin:BA,normal_fragment_maps:IA,normal_pars_fragment:HA,normal_pars_vertex:GA,normal_vertex:VA,normalmap_pars_fragment:kA,clearcoat_normal_fragment_begin:XA,clearcoat_normal_fragment_maps:WA,clearcoat_pars_fragment:qA,iridescence_pars_fragment:YA,opaque_fragment:ZA,packing:jA,premultiplied_alpha_fragment:KA,project_vertex:JA,dithering_fragment:QA,dithering_pars_fragment:$A,roughnessmap_fragment:tR,roughnessmap_pars_fragment:eR,shadowmap_pars_fragment:nR,shadowmap_pars_vertex:iR,shadowmap_vertex:aR,shadowmask_pars_fragment:rR,skinbase_vertex:sR,skinning_pars_vertex:oR,skinning_vertex:lR,skinnormal_vertex:uR,specularmap_fragment:cR,specularmap_pars_fragment:fR,tonemapping_fragment:hR,tonemapping_pars_fragment:dR,transmission_fragment:pR,transmission_pars_fragment:mR,uv_pars_fragment:gR,uv_pars_vertex:vR,uv_vertex:_R,worldpos_vertex:xR,background_vert:SR,background_frag:yR,backgroundCube_vert:MR,backgroundCube_frag:ER,cube_vert:bR,cube_frag:TR,depth_vert:AR,depth_frag:RR,distance_vert:CR,distance_frag:wR,equirect_vert:DR,equirect_frag:UR,linedashed_vert:LR,linedashed_frag:NR,meshbasic_vert:OR,meshbasic_frag:PR,meshlambert_vert:zR,meshlambert_frag:FR,meshmatcap_vert:BR,meshmatcap_frag:IR,meshnormal_vert:HR,meshnormal_frag:GR,meshphong_vert:VR,meshphong_frag:kR,meshphysical_vert:XR,meshphysical_frag:WR,meshtoon_vert:qR,meshtoon_frag:YR,points_vert:ZR,points_frag:jR,shadow_vert:KR,shadow_frag:JR,sprite_vert:QR,sprite_frag:$R},Yt={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Xi={basic:{uniforms:Gn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Gn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Ie(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Gn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Gn([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Gn([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new Ie(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Gn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Gn([Yt.points,Yt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Gn([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Gn([Yt.common,Yt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Gn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Gn([Yt.sprite,Yt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Gn([Yt.common,Yt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Gn([Yt.lights,Yt.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Xi.physical={uniforms:Gn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const nc={r:0,b:0,g:0},tC=new sn,vS=new ge;vS.set(-1,0,0,0,1,0,0,0,1);function eC(r,t,n,a,o,u){const c=new Ie(0);let h=o===!0?0:1,p,m,v=null,_=0,g=null;function x(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){const N=C.backgroundBlurriness>0;D=t.get(D,N)}return D}function E(C){let D=!1;const N=x(C);N===null?S(c,h):N&&N.isColor&&(S(N,1),D=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(r.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(C,D){const N=x(D);N&&(N.isCubeTexture||N.mapping===Ac)?(m===void 0&&(m=new bi(new Sl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Zs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(G,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(tC.makeRotationFromEuler(D.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(vS),m.material.toneMapped=De.getTransfer(N.colorSpace)!==We,(v!==N||_!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,v=N,_=N.version,g=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new bi(new wc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Zs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=De.getTransfer(N.colorSpace)!==We,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||_!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,v=N,_=N.version,g=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function S(C,D){C.getRGB(nc,dS(r)),n.buffers.color.setClear(nc.r,nc.g,nc.b,D,u)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,D=1){c.set(C),h=D,S(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,S(c,h)},render:E,addToRenderList:A,dispose:y}}function nC(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=g(null);let u=o,c=!1;function h(I,J,ot,ft,k){let L=!1;const B=_(I,ft,ot,J);u!==B&&(u=B,m(u.object)),L=x(I,ft,ot,k),L&&E(I,ft,ot,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(L||c)&&(c=!1,N(I,J,ot,ft),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function p(){return r.createVertexArray()}function m(I){return r.bindVertexArray(I)}function v(I){return r.deleteVertexArray(I)}function _(I,J,ot,ft){const k=ft.wireframe===!0;let L=a[J.id];L===void 0&&(L={},a[J.id]=L);const B=I.isInstancedMesh===!0?I.id:0;let it=L[B];it===void 0&&(it={},L[B]=it);let dt=it[ot.id];dt===void 0&&(dt={},it[ot.id]=dt);let yt=dt[k];return yt===void 0&&(yt=g(p()),dt[k]=yt),yt}function g(I){const J=[],ot=[],ft=[];for(let k=0;k<n;k++)J[k]=0,ot[k]=0,ft[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ot,attributeDivisors:ft,object:I,attributes:{},index:null}}function x(I,J,ot,ft){const k=u.attributes,L=J.attributes;let B=0;const it=ot.getAttributes();for(const dt in it)if(it[dt].location>=0){const P=k[dt];let K=L[dt];if(K===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),P===void 0||P.attribute!==K||K&&P.data!==K.data)return!0;B++}return u.attributesNum!==B||u.index!==ft}function E(I,J,ot,ft){const k={},L=J.attributes;let B=0;const it=ot.getAttributes();for(const dt in it)if(it[dt].location>=0){let P=L[dt];P===void 0&&(dt==="instanceMatrix"&&I.instanceMatrix&&(P=I.instanceMatrix),dt==="instanceColor"&&I.instanceColor&&(P=I.instanceColor));const K={};K.attribute=P,P&&P.data&&(K.data=P.data),k[dt]=K,B++}u.attributes=k,u.attributesNum=B,u.index=ft}function A(){const I=u.newAttributes;for(let J=0,ot=I.length;J<ot;J++)I[J]=0}function S(I){y(I,0)}function y(I,J){const ot=u.newAttributes,ft=u.enabledAttributes,k=u.attributeDivisors;ot[I]=1,ft[I]===0&&(r.enableVertexAttribArray(I),ft[I]=1),k[I]!==J&&(r.vertexAttribDivisor(I,J),k[I]=J)}function C(){const I=u.newAttributes,J=u.enabledAttributes;for(let ot=0,ft=J.length;ot<ft;ot++)J[ot]!==I[ot]&&(r.disableVertexAttribArray(ot),J[ot]=0)}function D(I,J,ot,ft,k,L,B){B===!0?r.vertexAttribIPointer(I,J,ot,k,L):r.vertexAttribPointer(I,J,ot,ft,k,L)}function N(I,J,ot,ft){A();const k=ft.attributes,L=ot.getAttributes(),B=J.defaultAttributeValues;for(const it in L){const dt=L[it];if(dt.location>=0){let yt=k[it];if(yt===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(yt=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(yt=I.instanceColor)),yt!==void 0){const P=yt.normalized,K=yt.itemSize,vt=t.get(yt);if(vt===void 0)continue;const Ct=vt.buffer,Ut=vt.type,at=vt.bytesPerElement,Mt=Ut===r.INT||Ut===r.UNSIGNED_INT||yt.gpuType===Ip;if(yt.isInterleavedBufferAttribute){const bt=yt.data,Ot=bt.stride,ne=yt.offset;if(bt.isInstancedInterleavedBuffer){for(let ie=0;ie<dt.locationSize;ie++)y(dt.location+ie,bt.meshPerAttribute);I.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ie=0;ie<dt.locationSize;ie++)S(dt.location+ie);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let ie=0;ie<dt.locationSize;ie++)D(dt.location+ie,K/dt.locationSize,Ut,P,Ot*at,(ne+K/dt.locationSize*ie)*at,Mt)}else{if(yt.isInstancedBufferAttribute){for(let bt=0;bt<dt.locationSize;bt++)y(dt.location+bt,yt.meshPerAttribute);I.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let bt=0;bt<dt.locationSize;bt++)S(dt.location+bt);r.bindBuffer(r.ARRAY_BUFFER,Ct);for(let bt=0;bt<dt.locationSize;bt++)D(dt.location+bt,K/dt.locationSize,Ut,P,K*at,K/dt.locationSize*bt*at,Mt)}}else if(B!==void 0){const P=B[it];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(dt.location,P);break;case 3:r.vertexAttrib3fv(dt.location,P);break;case 4:r.vertexAttrib4fv(dt.location,P);break;default:r.vertexAttrib1fv(dt.location,P)}}}}C()}function G(){z();for(const I in a){const J=a[I];for(const ot in J){const ft=J[ot];for(const k in ft){const L=ft[k];for(const B in L)v(L[B].object),delete L[B];delete ft[k]}}delete a[I]}}function O(I){if(a[I.id]===void 0)return;const J=a[I.id];for(const ot in J){const ft=J[ot];for(const k in ft){const L=ft[k];for(const B in L)v(L[B].object),delete L[B];delete ft[k]}}delete a[I.id]}function F(I){for(const J in a){const ot=a[J];for(const ft in ot){const k=ot[ft];if(k[I.id]===void 0)continue;const L=k[I.id];for(const B in L)v(L[B].object),delete L[B];delete k[I.id]}}}function T(I){for(const J in a){const ot=a[J],ft=I.isInstancedMesh===!0?I.id:0,k=ot[ft];if(k!==void 0){for(const L in k){const B=k[L];for(const it in B)v(B[it].object),delete B[it];delete k[L]}delete ot[ft],Object.keys(ot).length===0&&delete a[J]}}}function z(){q(),c=!0,u!==o&&(u=o,m(u.object))}function q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:z,resetDefaultState:q,dispose:G,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:C}}function iC(r,t,n){let a;function o(p){a=p}function u(p,m){r.drawArrays(a,p,m),n.update(m,a,1)}function c(p,m,v){v!==0&&(r.drawArraysInstanced(a,p,m,v),n.update(m,a,v))}function h(p,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,m,0,v);let g=0;for(let x=0;x<v;x++)g+=m[x];n.update(g,a,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h}function aC(r,t,n,a){let o;function u(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Pi&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===Ca&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==fi&&a.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Wi&&!T)}function p(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(he("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&he("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:N,maxSamples:G,samples:O}}function rC(r){const t=this;let n=null,a=0,o=!1,u=!1;const c=new Ir,h=new ge,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||a!==0||o;return o=g,a=_.length,x},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,g){n=v(_,g,0)},this.setState=function(_,g,x){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!o||E===null||E.length===0||u&&!S)u?v(null):m();else{const C=u?0:a,D=C*4;let N=y.clippingState||null;p.value=N,N=v(E,g,D,x);for(let G=0;G!==D;++G)N[G]=n[G];y.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function v(_,g,x,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=p.value,E!==!0||S===null){const y=x+A*4,C=g.matrixWorldInverse;h.getNormalMatrix(C),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,N=x;D!==A;++D,N+=4)c.copy(_[D]).applyMatrix4(C,h),c.normal.toArray(S,N),S[N+3]=c.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}const pr=4,I_=[.125,.215,.35,.446,.526,.582],Gr=20,sC=256,el=new $p,H_=new Ie;let Ed=null,bd=0,Td=0,Ad=!1;const oC=new Y;class G_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,u={}){const{size:c=256,position:h=oC}=u;Ed=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ed,bd,Td),this._renderer.xr.enabled=Ad,t.scissorTest=!1,Gs(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Wr||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ed=this._renderer.getRenderTarget(),bd=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ca,format:Pi,colorSpace:xc,depthBuffer:!1},o=V_(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V_(t,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lC(u)),this._blurMaterial=cC(u,t,n),this._ggxMaterial=uC(u,t,n)}return o}_compileMaterial(t){const n=new bi(new kn,t);this._renderer.compile(n,el)}_sceneToCubeUV(t,n,a,o,u){const p=new Ei(90,1,n,a),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(H_),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new Sl,new nS({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let y=!1;const C=t.background;C?C.isColor&&(S.color.copy(C),t.background=null,y=!0):(S.color.copy(H_),y=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(p.up.set(0,m[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[D],u.y,u.z)):N===1?(p.up.set(0,0,m[D]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[D],u.z)):(p.up.set(0,m[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[D]));const G=this._cubeSize;Gs(o,N*G,D>2?G:0,G,G),_.setRenderTarget(o),y&&_.render(A,p),_.render(t,p)}_.toneMapping=x,_.autoClear=g,t.background=C}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Wr||t.mapping===Ws;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=X_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k_());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const h=u.uniforms;h.envMap.value=t;const p=this._cubeSize;Gs(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,el)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(t,u-1,u);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[a];h.material=c;const p=c.uniforms,m=a/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),g=0+m*1.25,x=_*g,{_lodMax:E}=this,A=this._sizeLods[a],S=3*A*(a>E-pr?a-E+pr:0),y=4*(this._cubeSize-A);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=E-n,Gs(u,S,y,3*A,2*A),o.setRenderTarget(u),o.render(h,el),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=E-a,Gs(t,S,y,3*A,2*A),o.setRenderTarget(t),o.render(h,el)}_blur(t,n,a,o,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,o,"latitudinal",u),this._halfBlur(c,t,a,a,o,"longitudinal",u)}_halfBlur(t,n,a,o,u,c,h){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=m;const g=m.uniforms,x=this._sizeLods[a]-1,E=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*Gr-1),A=u/E,S=isFinite(u)?1+Math.floor(v*A):Gr;S>Gr&&he(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Gr}`);const y=[];let C=0;for(let F=0;F<Gr;++F){const T=F/A,z=Math.exp(-T*T/2);y.push(z),F===0?C+=z:F<S&&(C+=2*z)}for(let F=0;F<y.length;F++)y[F]=y[F]/C;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=c==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:D}=this;g.dTheta.value=E,g.mipInt.value=D-a;const N=this._sizeLods[o],G=3*N*(o>D-pr?o-D+pr:0),O=4*(this._cubeSize-N);Gs(n,G,O,3*N,2*N),p.setRenderTarget(n),p.render(_,el)}}function lC(r){const t=[],n=[],a=[];let o=r;const u=r-pr+1+I_.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);t.push(h);let p=1/h;c>r-pr?p=I_[c-r+pr-1]:c===0&&(p=0),n.push(p);const m=1/(h-2),v=-m,_=1+m,g=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,E=6,A=3,S=2,y=1,C=new Float32Array(A*E*x),D=new Float32Array(S*E*x),N=new Float32Array(y*E*x);for(let O=0;O<x;O++){const F=O%3*2/3-1,T=O>2?0:-1,z=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];C.set(z,A*E*O),D.set(g,S*E*O);const q=[O,O,O,O,O,O];N.set(q,y*E*O)}const G=new kn;G.setAttribute("position",new Fn(C,A)),G.setAttribute("uv",new Fn(D,S)),G.setAttribute("faceIndex",new Fn(N,y)),a.push(new bi(G,null)),o>pr&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function V_(r,t,n){const a=new Zi(r,t,n);return a.texture.mapping=Ac,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Gs(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function uC(r,t,n){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function cC(r,t,n){const a=new Float32Array(Gr),o=new Y(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function k_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function X_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class _S extends Zi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new iS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Sl(5,5,5),u=new Ji({name:"CubemapFromEquirect",uniforms:Zs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Jn,blending:Ta});u.uniforms.tEquirect.value=n;const c=new bi(o,u),h=n.minFilter;return n.minFilter===Vr&&(n.minFilter=Bn),new g1(1,10,this).update(t,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,o);t.setRenderTarget(u)}}function fC(r){let t=new WeakMap,n=new WeakMap,a=null;function o(g,x=!1){return g==null?null:x?c(g):u(g)}function u(g){if(g&&g.isTexture){const x=g.mapping;if(x===Wh||x===qh)if(t.has(g)){const E=t.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const A=new _S(E.height);return A.fromEquirectangularTexture(r,g),t.set(g,A),g.addEventListener("dispose",m),h(A.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const x=g.mapping,E=x===Wh||x===qh,A=x===Wr||x===Ws;if(E||A){let S=n.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new G_(r)),S=E?a.fromEquirectangular(g,S):a.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const C=g.image;return E&&C&&C.height>0||A&&C&&p(C)?(a===null&&(a=new G_(r)),S=E?a.fromEquirectangular(g):a.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function h(g,x){return x===Wh?g.mapping=Wr:x===qh&&(g.mapping=Ws),g}function p(g){let x=0;const E=6;for(let A=0;A<E;A++)g[A]!==void 0&&x++;return x===E}function m(g){const x=g.target;x.removeEventListener("dispose",m);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function v(g){const x=g.target;x.removeEventListener("dispose",v);const E=n.get(x);E!==void 0&&(n.delete(x),E.dispose())}function _(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:_}}function hC(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=r.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&yp("WebGLRenderer: "+a+" extension not supported."),o}}}function dC(r,t,n,a){const o={},u=new WeakMap;function c(_){const g=_.target;g.index!==null&&t.remove(g.index);for(const E in g.attributes)t.remove(g.attributes[E]);g.removeEventListener("dispose",c),delete o[g.id];const x=u.get(g);x&&(t.remove(x),u.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,n.memory.geometries++),g}function p(_){const g=_.attributes;for(const x in g)t.update(g[x],r.ARRAY_BUFFER)}function m(_){const g=[],x=_.index,E=_.attributes.position;let A=0;if(E===void 0)return;if(x!==null){const C=x.array;A=x.version;for(let D=0,N=C.length;D<N;D+=3){const G=C[D+0],O=C[D+1],F=C[D+2];g.push(G,O,O,F,F,G)}}else{const C=E.array;A=E.version;for(let D=0,N=C.length/3-1;D<N;D+=3){const G=D+0,O=D+1,F=D+2;g.push(G,O,O,F,F,G)}}const S=new(E.count>=65535?tS:$x)(g,1);S.version=A;const y=u.get(_);y&&t.remove(y),u.set(_,S)}function v(_){const g=u.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&m(_)}else m(_);return u.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function pC(r,t,n){let a;function o(_){a=_}let u,c;function h(_){u=_.type,c=_.bytesPerElement}function p(_,g){r.drawElements(a,g,u,_*c),n.update(g,a,1)}function m(_,g,x){x!==0&&(r.drawElementsInstanced(a,g,u,_*c,x),n.update(g,a,x))}function v(_,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,u,_,0,x);let A=0;for(let S=0;S<x;S++)A+=g[S];n.update(A,a,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function mC(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,h){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=h*(u/3);break;case r.LINES:n.lines+=h*(u/2);break;case r.LINE_STRIP:n.lines+=h*(u-1);break;case r.LINE_LOOP:n.lines+=h*u;break;case r.POINTS:n.points+=h*u;break;default:Ue("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function gC(r,t,n){const a=new WeakMap,o=new un;function u(c,h,p){const m=c.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let g=a.get(h);if(g===void 0||g.count!==_){let q=function(){T.dispose(),a.delete(h),h.removeEventListener("dispose",q)};var x=q;g!==void 0&&g.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let N=0;E===!0&&(N=1),A===!0&&(N=2),S===!0&&(N=3);let G=h.attributes.position.count*N,O=1;G>t.maxTextureSize&&(O=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*O*4*_),T=new Kx(F,G,O,_);T.type=Wi,T.needsUpdate=!0;const z=N*4;for(let I=0;I<_;I++){const J=y[I],ot=C[I],ft=D[I],k=G*O*4*I;for(let L=0;L<J.count;L++){const B=L*z;E===!0&&(o.fromBufferAttribute(J,L),F[k+B+0]=o.x,F[k+B+1]=o.y,F[k+B+2]=o.z,F[k+B+3]=0),A===!0&&(o.fromBufferAttribute(ot,L),F[k+B+4]=o.x,F[k+B+5]=o.y,F[k+B+6]=o.z,F[k+B+7]=0),S===!0&&(o.fromBufferAttribute(ft,L),F[k+B+8]=o.x,F[k+B+9]=o.y,F[k+B+10]=o.z,F[k+B+11]=ft.itemSize===4?o.w:1)}}g={count:_,texture:T,size:new Xt(G,O)},a.set(h,g),h.addEventListener("dispose",q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const A=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",A),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:u}}function vC(r,t,n,a,o){let u=new WeakMap;function c(m){const v=o.render.frame,_=m.geometry,g=t.get(m,_);if(u.get(g)!==v&&(t.update(g),u.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const x=m.skeleton;u.get(x)!==v&&(x.update(),u.set(x,v))}return g}function h(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),a.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:c,dispose:h}}const _C={[Ox]:"LINEAR_TONE_MAPPING",[Px]:"REINHARD_TONE_MAPPING",[zx]:"CINEON_TONE_MAPPING",[Fx]:"ACES_FILMIC_TONE_MAPPING",[Ix]:"AGX_TONE_MAPPING",[Hx]:"NEUTRAL_TONE_MAPPING",[Bx]:"CUSTOM_TONE_MAPPING"};function xC(r,t,n,a,o){const u=new Zi(t,n,{type:r,depthBuffer:a,stencilBuffer:o,depthTexture:a?new qs(t,n):void 0}),c=new Zi(t,n,{type:Ca,depthBuffer:!1,stencilBuffer:!1}),h=new kn;h.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qn([0,2,0,0,2,0],2));const p=new u1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new bi(h,p),v=new $p(-1,1,1,-1,0,1);let _=null,g=null,x=!1,E,A=null,S=[],y=!1;this.setSize=function(C,D){u.setSize(C,D),c.setSize(C,D);for(let N=0;N<S.length;N++){const G=S[N];G.setSize&&G.setSize(C,D)}},this.setEffects=function(C){S=C,y=S.length>0&&S[0].isRenderPass===!0;const D=u.width,N=u.height;for(let G=0;G<S.length;G++){const O=S[G];O.setSize&&O.setSize(D,N)}},this.begin=function(C,D){if(x||C.toneMapping===Yi&&S.length===0)return!1;if(A=D,D!==null){const N=D.width,G=D.height;(u.width!==N||u.height!==G)&&this.setSize(N,G)}return y===!1&&C.setRenderTarget(u),E=C.toneMapping,C.toneMapping=Yi,!0},this.hasRenderPass=function(){return y},this.end=function(C,D){C.toneMapping=E,x=!0;let N=u,G=c;for(let O=0;O<S.length;O++){const F=S[O];if(F.enabled!==!1&&(F.render(C,G,N,D),F.needsSwap!==!1)){const T=N;N=G,G=T}}if(_!==C.outputColorSpace||g!==C.toneMapping){_=C.outputColorSpace,g=C.toneMapping,p.defines={},De.getTransfer(_)===We&&(p.defines.SRGB_TRANSFER="");const O=_C[g];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=N.texture,C.setRenderTarget(A),C.render(m,v),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),c.dispose(),h.dispose(),p.dispose()}}const xS=new In,Rp=new qs(1,1),SS=new Kx,yS=new rT,MS=new iS,W_=[],q_=[],Y_=new Float32Array(16),Z_=new Float32Array(9),j_=new Float32Array(4);function $s(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let u=W_[o];if(u===void 0&&(u=new Float32Array(o),W_[o]=u),t!==0){a.toArray(u,0);for(let c=1,h=0;c!==t;++c)h+=n,r[c].toArray(u,h)}return u}function yn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function Mn(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Uc(r,t){let n=q_[t];n===void 0&&(n=new Int32Array(t),q_[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function SC(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function yC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2fv(this.addr,t),Mn(n,t)}}function MC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(yn(n,t))return;r.uniform3fv(this.addr,t),Mn(n,t)}}function EC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4fv(this.addr,t),Mn(n,t)}}function bC(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mn(n,t)}else{if(yn(n,a))return;j_.set(a),r.uniformMatrix2fv(this.addr,!1,j_),Mn(n,a)}}function TC(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mn(n,t)}else{if(yn(n,a))return;Z_.set(a),r.uniformMatrix3fv(this.addr,!1,Z_),Mn(n,a)}}function AC(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(yn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mn(n,t)}else{if(yn(n,a))return;Y_.set(a),r.uniformMatrix4fv(this.addr,!1,Y_),Mn(n,a)}}function RC(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function CC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2iv(this.addr,t),Mn(n,t)}}function wC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;r.uniform3iv(this.addr,t),Mn(n,t)}}function DC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4iv(this.addr,t),Mn(n,t)}}function UC(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function LC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(yn(n,t))return;r.uniform2uiv(this.addr,t),Mn(n,t)}}function NC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(yn(n,t))return;r.uniform3uiv(this.addr,t),Mn(n,t)}}function OC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(yn(n,t))return;r.uniform4uiv(this.addr,t),Mn(n,t)}}function PC(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let u;this.type===r.SAMPLER_2D_SHADOW?(Rp.compareFunction=n.isReversedDepthBuffer()?qp:Wp,u=Rp):u=xS,n.setTexture2D(t||u,o)}function zC(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||yS,o)}function FC(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||MS,o)}function BC(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||SS,o)}function IC(r){switch(r){case 5126:return SC;case 35664:return yC;case 35665:return MC;case 35666:return EC;case 35674:return bC;case 35675:return TC;case 35676:return AC;case 5124:case 35670:return RC;case 35667:case 35671:return CC;case 35668:case 35672:return wC;case 35669:case 35673:return DC;case 5125:return UC;case 36294:return LC;case 36295:return NC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return PC;case 35679:case 36299:case 36307:return zC;case 35680:case 36300:case 36308:case 36293:return FC;case 36289:case 36303:case 36311:case 36292:return BC}}function HC(r,t){r.uniform1fv(this.addr,t)}function GC(r,t){const n=$s(t,this.size,2);r.uniform2fv(this.addr,n)}function VC(r,t){const n=$s(t,this.size,3);r.uniform3fv(this.addr,n)}function kC(r,t){const n=$s(t,this.size,4);r.uniform4fv(this.addr,n)}function XC(r,t){const n=$s(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function WC(r,t){const n=$s(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function qC(r,t){const n=$s(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function YC(r,t){r.uniform1iv(this.addr,t)}function ZC(r,t){r.uniform2iv(this.addr,t)}function jC(r,t){r.uniform3iv(this.addr,t)}function KC(r,t){r.uniform4iv(this.addr,t)}function JC(r,t){r.uniform1uiv(this.addr,t)}function QC(r,t){r.uniform2uiv(this.addr,t)}function $C(r,t){r.uniform3uiv(this.addr,t)}function t3(r,t){r.uniform4uiv(this.addr,t)}function e3(r,t,n){const a=this.cache,o=t.length,u=Uc(n,o);yn(a,u)||(r.uniform1iv(this.addr,u),Mn(a,u));let c;this.type===r.SAMPLER_2D_SHADOW?c=Rp:c=xS;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||c,u[h])}function n3(r,t,n){const a=this.cache,o=t.length,u=Uc(n,o);yn(a,u)||(r.uniform1iv(this.addr,u),Mn(a,u));for(let c=0;c!==o;++c)n.setTexture3D(t[c]||yS,u[c])}function i3(r,t,n){const a=this.cache,o=t.length,u=Uc(n,o);yn(a,u)||(r.uniform1iv(this.addr,u),Mn(a,u));for(let c=0;c!==o;++c)n.setTextureCube(t[c]||MS,u[c])}function a3(r,t,n){const a=this.cache,o=t.length,u=Uc(n,o);yn(a,u)||(r.uniform1iv(this.addr,u),Mn(a,u));for(let c=0;c!==o;++c)n.setTexture2DArray(t[c]||SS,u[c])}function r3(r){switch(r){case 5126:return HC;case 35664:return GC;case 35665:return VC;case 35666:return kC;case 35674:return XC;case 35675:return WC;case 35676:return qC;case 5124:case 35670:return YC;case 35667:case 35671:return ZC;case 35668:case 35672:return jC;case 35669:case 35673:return KC;case 5125:return JC;case 36294:return QC;case 36295:return $C;case 36296:return t3;case 35678:case 36198:case 36298:case 36306:case 35682:return e3;case 35679:case 36299:case 36307:return n3;case 35680:case 36300:case 36308:case 36293:return i3;case 36289:case 36303:case 36311:case 36292:return a3}}class s3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=IC(n.type)}}class o3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=r3(n.type)}}class l3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(t,n[h.id],a)}}}const Rd=/(\w+)(\])?(\[|\.)?/g;function K_(r,t){r.seq.push(t),r.map[t.id]=t}function u3(r,t,n){const a=r.name,o=a.length;for(Rd.lastIndex=0;;){const u=Rd.exec(a),c=Rd.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&c+2===o){K_(n,m===void 0?new s3(h,r,t):new o3(h,r,t));break}else{let _=n.map[h];_===void 0&&(_=new l3(h),K_(n,_)),n=_}}}class dc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const h=t.getActiveUniform(n,c),p=t.getUniformLocation(n,h.name);u3(h,p,this)}const o=[],u=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(t,n,a,o){const u=this.map[n];u!==void 0&&u.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],p=a[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,u=t.length;o!==u;++o){const c=t[o];c.id in n&&a.push(c)}return a}}function J_(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const c3=37297;let f3=0;function h3(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=o;c<u;c++){const h=c+1;a.push(`${h===t?">":" "} ${h}: ${n[c]}`)}return a.join(`
`)}const Q_=new ge;function d3(r){De._getMatrix(Q_,De.workingColorSpace,r);const t=`mat3( ${Q_.elements.map(n=>n.toFixed(4))} )`;switch(De.getTransfer(r)){case Sc:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return he("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $_(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+h3(r.getShaderSource(t),h)}else return u}function p3(r,t){const n=d3(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const m3={[Ox]:"Linear",[Px]:"Reinhard",[zx]:"Cineon",[Fx]:"ACESFilmic",[Ix]:"AgX",[Hx]:"Neutral",[Bx]:"Custom"};function g3(r,t){const n=m3[t];return n===void 0?(he("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ic=new Y;function v3(){De.getLuminanceCoefficients(ic);const r=ic.x.toFixed(4),t=ic.y.toFixed(4),n=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function x3(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function S3(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const u=r.getActiveAttrib(t,o),c=u.name;let h=1;u.type===r.FLOAT_MAT2&&(h=2),u.type===r.FLOAT_MAT3&&(h=3),u.type===r.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:r.getAttribLocation(t,c),locationSize:h}}return n}function rl(r){return r!==""}function tx(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ex(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(r){return r.replace(y3,E3)}const M3=new Map;function E3(r,t){let n=ye[t];if(n===void 0){const a=M3.get(t);if(a!==void 0)n=ye[a],he('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Cp(n)}const b3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nx(r){return r.replace(b3,T3)}function T3(r,t,n,a){let o="";for(let u=parseInt(t);u<parseInt(n);u++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function ix(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const A3={[oc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function R3(r){return A3[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C3={[Wr]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function w3(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":C3[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const D3={[Ws]:"ENVMAP_MODE_REFRACTION"};function U3(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":D3[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L3={[Nx]:"ENVMAP_BLENDING_MULTIPLY",[Bb]:"ENVMAP_BLENDING_MIX",[Ib]:"ENVMAP_BLENDING_ADD"};function N3(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":L3[r.combine]||"ENVMAP_BLENDING_NONE"}function O3(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function P3(r,t,n,a){const o=r.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=R3(n),m=w3(n),v=U3(n),_=N3(n),g=O3(n),x=_3(n),E=x3(u),A=o.createProgram();let S,y,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(rl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(rl).join(`
`),y.length>0&&(y+=`
`)):(S=[ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),y=[ix(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?ye.tonemapping_pars_fragment:"",n.toneMapping!==Yi?g3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,p3("linearToOutputTexel",n.outputColorSpace),v3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(rl).join(`
`)),c=Cp(c),c=tx(c,n),c=ex(c,n),h=Cp(h),h=tx(h,n),h=ex(h,n),c=nx(c),h=nx(h),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",n.glslVersion===s_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===s_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=C+S+c,N=C+y+h,G=J_(o,o.VERTEX_SHADER,D),O=J_(o,o.FRAGMENT_SHADER,N);o.attachShader(A,G),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(I){if(r.debug.checkShaderErrors){const J=o.getProgramInfoLog(A)||"",ot=o.getShaderInfoLog(G)||"",ft=o.getShaderInfoLog(O)||"",k=J.trim(),L=ot.trim(),B=ft.trim();let it=!0,dt=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(it=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,G,O);else{const yt=$_(o,G,"vertex"),P=$_(o,O,"fragment");Ue("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+yt+`
`+P)}else k!==""?he("WebGLProgram: Program Info Log:",k):(L===""||B==="")&&(dt=!1);dt&&(I.diagnostics={runnable:it,programLog:k,vertexShader:{log:L,prefix:S},fragmentShader:{log:B,prefix:y}})}o.deleteShader(G),o.deleteShader(O),T=new dc(o,A),z=S3(o,A)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let z;this.getAttributes=function(){return z===void 0&&F(this),z};let q=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=o.getProgramParameter(A,c3)),q},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=f3++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=O,this}let z3=0;class F3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new B3(t),n.set(t,a)),a}}class B3{constructor(t){this.id=z3++,this.code=t,this.usedTimes=0}}function I3(r){return r===qr||r===vc||r===_c}function H3(r,t,n,a,o,u){const c=new Jx,h=new F3,p=new Set,m=[],v=new Map,_=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return p.add(T),T===0?"uv":`uv${T}`}function A(T,z,q,I,J,ot){const ft=I.fog,k=J.geometry,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,it=t.get(T.envMap||L,B),dt=it&&it.mapping===Ac?it.image.height:null,yt=x[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&he("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const P=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,K=P!==void 0?P.length:0;let vt=0;k.morphAttributes.position!==void 0&&(vt=1),k.morphAttributes.normal!==void 0&&(vt=2),k.morphAttributes.color!==void 0&&(vt=3);let Ct,Ut,at,Mt;if(yt){const fe=Xi[yt];Ct=fe.vertexShader,Ut=fe.fragmentShader}else Ct=T.vertexShader,Ut=T.fragmentShader,h.update(T),at=h.getVertexShaderID(T),Mt=h.getFragmentShaderID(T);const bt=r.getRenderTarget(),Ot=r.state.buffers.depth.getReversed(),ne=J.isInstancedMesh===!0,ie=J.isBatchedMesh===!0,Se=!!T.map,Vt=!!T.matcap,pt=!!it,wt=!!T.aoMap,Et=!!T.lightMap,Wt=!!T.bumpMap,Bt=!!T.normalMap,le=!!T.displacementMap,H=!!T.emissiveMap,ue=!!T.metalnessMap,$t=!!T.roughnessMap,ce=T.anisotropy>0,At=T.clearcoat>0,Le=T.dispersion>0,U=T.iridescence>0,b=T.sheen>0,Q=T.transmission>0,_t=ce&&!!T.anisotropyMap,Tt=At&&!!T.clearcoatMap,Lt=At&&!!T.clearcoatNormalMap,Pt=At&&!!T.clearcoatRoughnessMap,ut=U&&!!T.iridescenceMap,ht=U&&!!T.iridescenceThicknessMap,It=b&&!!T.sheenColorMap,Ht=b&&!!T.sheenRoughnessMap,zt=!!T.specularMap,Nt=!!T.specularColorMap,de=!!T.specularIntensityMap,pe=Q&&!!T.transmissionMap,Me=Q&&!!T.thicknessMap,X=!!T.gradientMap,Dt=!!T.alphaMap,gt=T.alphaTest>0,qt=!!T.alphaHash,Ft=!!T.extensions;let Rt=Yi;T.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Rt=r.toneMapping);const te={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:Ct,fragmentShader:Ut,defines:T.defines,customVertexShaderID:at,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ie,batchingColor:ie&&J._colorsTexture!==null,instancing:ne,instancingColor:ne&&J.instanceColor!==null,instancingMorph:ne&&J.morphTexture!==null,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:De.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Se,matcap:Vt,envMap:pt,envMapMode:pt&&it.mapping,envMapCubeUVHeight:dt,aoMap:wt,lightMap:Et,bumpMap:Wt,normalMap:Bt,displacementMap:le,emissiveMap:H,normalMapObjectSpace:Bt&&T.normalMapType===Vb,normalMapTangentSpace:Bt&&T.normalMapType===i_,packedNormalMap:Bt&&T.normalMapType===i_&&I3(T.normalMap.format),metalnessMap:ue,roughnessMap:$t,anisotropy:ce,anisotropyMap:_t,clearcoat:At,clearcoatMap:Tt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Pt,dispersion:Le,iridescence:U,iridescenceMap:ut,iridescenceThicknessMap:ht,sheen:b,sheenColorMap:It,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:Nt,specularIntensityMap:de,transmission:Q,transmissionMap:pe,thicknessMap:Me,gradientMap:X,opaque:T.transparent===!1&&T.blending===Xr&&T.alphaToCoverage===!1,alphaMap:Dt,alphaTest:gt,alphaHash:qt,combine:T.combine,mapUv:Se&&E(T.map.channel),aoMapUv:wt&&E(T.aoMap.channel),lightMapUv:Et&&E(T.lightMap.channel),bumpMapUv:Wt&&E(T.bumpMap.channel),normalMapUv:Bt&&E(T.normalMap.channel),displacementMapUv:le&&E(T.displacementMap.channel),emissiveMapUv:H&&E(T.emissiveMap.channel),metalnessMapUv:ue&&E(T.metalnessMap.channel),roughnessMapUv:$t&&E(T.roughnessMap.channel),anisotropyMapUv:_t&&E(T.anisotropyMap.channel),clearcoatMapUv:Tt&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:It&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&E(T.sheenRoughnessMap.channel),specularMapUv:zt&&E(T.specularMap.channel),specularColorMapUv:Nt&&E(T.specularColorMap.channel),specularIntensityMapUv:de&&E(T.specularIntensityMap.channel),transmissionMapUv:pe&&E(T.transmissionMap.channel),thicknessMapUv:Me&&E(T.thicknessMap.channel),alphaMapUv:Dt&&E(T.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Bt||ce),vertexNormals:!!k.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!k.attributes.uv&&(Se||Dt),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||k.attributes.normal===void 0&&Bt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ot,skinning:J.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:vt,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:ot.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Se&&T.map.isVideoTexture===!0&&De.getTransfer(T.map.colorSpace)===We,decodeVideoTextureEmissive:H&&T.emissiveMap.isVideoTexture===!0&&De.getTransfer(T.emissiveMap.colorSpace)===We,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ma,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ft&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&T.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return te.vertexUv1s=p.has(1),te.vertexUv2s=p.has(2),te.vertexUv3s=p.has(3),p.clear(),te}function S(T){const z=[];if(T.shaderID?z.push(T.shaderID):(z.push(T.customVertexShaderID),z.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)z.push(q),z.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(y(z,T),C(z,T),z.push(r.outputColorSpace)),z.push(T.customProgramCacheKey),z.join()}function y(T,z){T.push(z.precision),T.push(z.outputColorSpace),T.push(z.envMapMode),T.push(z.envMapCubeUVHeight),T.push(z.mapUv),T.push(z.alphaMapUv),T.push(z.lightMapUv),T.push(z.aoMapUv),T.push(z.bumpMapUv),T.push(z.normalMapUv),T.push(z.displacementMapUv),T.push(z.emissiveMapUv),T.push(z.metalnessMapUv),T.push(z.roughnessMapUv),T.push(z.anisotropyMapUv),T.push(z.clearcoatMapUv),T.push(z.clearcoatNormalMapUv),T.push(z.clearcoatRoughnessMapUv),T.push(z.iridescenceMapUv),T.push(z.iridescenceThicknessMapUv),T.push(z.sheenColorMapUv),T.push(z.sheenRoughnessMapUv),T.push(z.specularMapUv),T.push(z.specularColorMapUv),T.push(z.specularIntensityMapUv),T.push(z.transmissionMapUv),T.push(z.thicknessMapUv),T.push(z.combine),T.push(z.fogExp2),T.push(z.sizeAttenuation),T.push(z.morphTargetsCount),T.push(z.morphAttributeCount),T.push(z.numDirLights),T.push(z.numPointLights),T.push(z.numSpotLights),T.push(z.numSpotLightMaps),T.push(z.numHemiLights),T.push(z.numRectAreaLights),T.push(z.numDirLightShadows),T.push(z.numPointLightShadows),T.push(z.numSpotLightShadows),T.push(z.numSpotLightShadowsWithMaps),T.push(z.numLightProbes),T.push(z.shadowMapType),T.push(z.toneMapping),T.push(z.numClippingPlanes),T.push(z.numClipIntersection),T.push(z.depthPacking)}function C(T,z){c.disableAll(),z.instancing&&c.enable(0),z.instancingColor&&c.enable(1),z.instancingMorph&&c.enable(2),z.matcap&&c.enable(3),z.envMap&&c.enable(4),z.normalMapObjectSpace&&c.enable(5),z.normalMapTangentSpace&&c.enable(6),z.clearcoat&&c.enable(7),z.iridescence&&c.enable(8),z.alphaTest&&c.enable(9),z.vertexColors&&c.enable(10),z.vertexAlphas&&c.enable(11),z.vertexUv1s&&c.enable(12),z.vertexUv2s&&c.enable(13),z.vertexUv3s&&c.enable(14),z.vertexTangents&&c.enable(15),z.anisotropy&&c.enable(16),z.alphaHash&&c.enable(17),z.batching&&c.enable(18),z.dispersion&&c.enable(19),z.batchingColor&&c.enable(20),z.gradientMap&&c.enable(21),z.packedNormalMap&&c.enable(22),z.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),z.fog&&c.enable(0),z.useFog&&c.enable(1),z.flatShading&&c.enable(2),z.logarithmicDepthBuffer&&c.enable(3),z.reversedDepthBuffer&&c.enable(4),z.skinning&&c.enable(5),z.morphTargets&&c.enable(6),z.morphNormals&&c.enable(7),z.morphColors&&c.enable(8),z.premultipliedAlpha&&c.enable(9),z.shadowMapEnabled&&c.enable(10),z.doubleSided&&c.enable(11),z.flipSided&&c.enable(12),z.useDepthPacking&&c.enable(13),z.dithering&&c.enable(14),z.transmission&&c.enable(15),z.sheen&&c.enable(16),z.opaque&&c.enable(17),z.pointsUvs&&c.enable(18),z.decodeVideoTexture&&c.enable(19),z.decodeVideoTextureEmissive&&c.enable(20),z.alphaToCoverage&&c.enable(21),z.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function D(T){const z=x[T.type];let q;if(z){const I=Xi[z];q=s1.clone(I.uniforms)}else q=T.uniforms;return q}function N(T,z){let q=v.get(z);return q!==void 0?++q.usedTimes:(q=new P3(r,z,T,o),m.push(q),v.set(z,q)),q}function G(T){if(--T.usedTimes===0){const z=m.indexOf(T);m[z]=m[m.length-1],m.pop(),v.delete(T.cacheKey),T.destroy()}}function O(T){h.remove(T)}function F(){h.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:D,acquireProgram:N,releaseProgram:G,releaseShaderCache:O,programs:m,dispose:F}}function G3(){let r=new WeakMap;function t(c){return r.has(c)}function n(c){let h=r.get(c);return h===void 0&&(h={},r.set(c,h)),h}function a(c){r.delete(c)}function o(c,h,p){r.get(c)[h]=p}function u(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:u}}function V3(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function ax(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rx(){const r=[];let t=0;const n=[],a=[],o=[];function u(){t=0,n.length=0,a.length=0,o.length=0}function c(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function h(g,x,E,A,S,y){let C=r[t];return C===void 0?(C={id:g.id,object:g,geometry:x,material:E,materialVariant:c(g),groupOrder:A,renderOrder:g.renderOrder,z:S,group:y},r[t]=C):(C.id=g.id,C.object=g,C.geometry=x,C.material=E,C.materialVariant=c(g),C.groupOrder=A,C.renderOrder=g.renderOrder,C.z=S,C.group=y),t++,C}function p(g,x,E,A,S,y){const C=h(g,x,E,A,S,y);E.transmission>0?a.push(C):E.transparent===!0?o.push(C):n.push(C)}function m(g,x,E,A,S,y){const C=h(g,x,E,A,S,y);E.transmission>0?a.unshift(C):E.transparent===!0?o.unshift(C):n.unshift(C)}function v(g,x){n.length>1&&n.sort(g||V3),a.length>1&&a.sort(x||ax),o.length>1&&o.sort(x||ax)}function _(){for(let g=t,x=r.length;g<x;g++){const E=r[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:a,transparent:o,init:u,push:p,unshift:m,finish:_,sort:v}}function k3(){let r=new WeakMap;function t(a,o){const u=r.get(a);let c;return u===void 0?(c=new rx,r.set(a,[c])):o>=u.length?(c=new rx,u.push(c)):c=u[o],c}function n(){r=new WeakMap}return{get:t,dispose:n}}function X3(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new Y,color:new Ie};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":n={color:new Ie,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return r[t.id]=n,n}}}function W3(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let q3=0;function Y3(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Z3(r){const t=new X3,n=W3(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new Y);const o=new Y,u=new sn,c=new sn;function h(m){let v=0,_=0,g=0;for(let z=0;z<9;z++)a.probe[z].set(0,0,0);let x=0,E=0,A=0,S=0,y=0,C=0,D=0,N=0,G=0,O=0,F=0;m.sort(Y3);for(let z=0,q=m.length;z<q;z++){const I=m[z],J=I.color,ot=I.intensity,ft=I.distance;let k=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qr?k=I.shadow.map.texture:k=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)v+=J.r*ot,_+=J.g*ot,g+=J.b*ot;else if(I.isLightProbe){for(let L=0;L<9;L++)a.probe[L].addScaledVector(I.sh.coefficients[L],ot);F++}else if(I.isDirectionalLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,it=n.get(I);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,a.directionalShadow[x]=it,a.directionalShadowMap[x]=k,a.directionalShadowMatrix[x]=I.shadow.matrix,C++}a.directional[x]=L,x++}else if(I.isSpotLight){const L=t.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(J).multiplyScalar(ot),L.distance=ft,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,a.spot[A]=L;const B=I.shadow;if(I.map&&(a.spotLightMap[G]=I.map,G++,B.updateMatrices(I),I.castShadow&&O++),a.spotLightMatrix[A]=B.matrix,I.castShadow){const it=n.get(I);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,a.spotShadow[A]=it,a.spotShadowMap[A]=k,N++}A++}else if(I.isRectAreaLight){const L=t.get(I);L.color.copy(J).multiplyScalar(ot),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),a.rectArea[S]=L,S++}else if(I.isPointLight){const L=t.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){const B=I.shadow,it=n.get(I);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,it.shadowCameraNear=B.camera.near,it.shadowCameraFar=B.camera.far,a.pointShadow[E]=it,a.pointShadowMap[E]=k,a.pointShadowMatrix[E]=I.shadow.matrix,D++}a.point[E]=L,E++}else if(I.isHemisphereLight){const L=t.get(I);L.skyColor.copy(I.color).multiplyScalar(ot),L.groundColor.copy(I.groundColor).multiplyScalar(ot),a.hemi[y]=L,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Yt.LTC_FLOAT_1,a.rectAreaLTC2=Yt.LTC_FLOAT_2):(a.rectAreaLTC1=Yt.LTC_HALF_1,a.rectAreaLTC2=Yt.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=_,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==x||T.pointLength!==E||T.spotLength!==A||T.rectAreaLength!==S||T.hemiLength!==y||T.numDirectionalShadows!==C||T.numPointShadows!==D||T.numSpotShadows!==N||T.numSpotMaps!==G||T.numLightProbes!==F)&&(a.directional.length=x,a.spot.length=A,a.rectArea.length=S,a.point.length=E,a.hemi.length=y,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=N,a.spotShadowMap.length=N,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=N+G-O,a.spotLightMap.length=G,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=F,T.directionalLength=x,T.pointLength=E,T.spotLength=A,T.rectAreaLength=S,T.hemiLength=y,T.numDirectionalShadows=C,T.numPointShadows=D,T.numSpotShadows=N,T.numSpotMaps=G,T.numLightProbes=F,a.version=q3++)}function p(m,v){let _=0,g=0,x=0,E=0,A=0;const S=v.matrixWorldInverse;for(let y=0,C=m.length;y<C;y++){const D=m[y];if(D.isDirectionalLight){const N=a.directional[_];N.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),_++}else if(D.isSpotLight){const N=a.spot[x];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const N=a.rectArea[E];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),c.identity(),u.copy(D.matrixWorld),u.premultiply(S),c.extractRotation(u),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const N=a.point[g];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(S),g++}else if(D.isHemisphereLight){const N=a.hemi[A];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(S),A++}}}return{setup:h,setupView:p,state:a}}function sx(r){const t=new Z3(r),n=[],a=[],o=[];function u(g){_.camera=g,n.length=0,a.length=0,o.length=0}function c(g){n.push(g)}function h(g){a.push(g)}function p(g){o.push(g)}function m(){t.setup(n)}function v(g){t.setupView(n,g)}const _={lightsArray:n,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:v,pushLight:c,pushShadow:h,pushLightProbeGrid:p}}function j3(r){let t=new WeakMap;function n(o,u=0){const c=t.get(o);let h;return c===void 0?(h=new sx(r),t.set(o,[h])):u>=c.length?(h=new sx(r),c.push(h)):h=c[u],h}function a(){t=new WeakMap}return{get:n,dispose:a}}const K3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Q3=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],$3=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],ox=new sn,nl=new Y,Cd=new Y;function t2(r,t,n){let a=new Zp;const o=new Xt,u=new Xt,c=new un,h=new c1,p=new f1,m={},v=n.maxTextureSize,_={[mr]:Jn,[Jn]:mr,[Ma]:Ma},g=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:K3,fragmentShader:J3}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new kn;E.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new bi(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let y=this.type;this.render=function(O,F,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;this.type===xb&&(he("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=oc);const z=r.getRenderTarget(),q=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ta),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ot=y!==this.type;ot&&F.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(k=>k.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,k=O.length;ft<k;ft++){const L=O[ft],B=L.shadow;if(B===void 0){he("WebGLShadowMap:",L,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const it=B.getFrameExtents();o.multiply(it),u.copy(B.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(u.x=Math.floor(v/it.x),o.x=u.x*it.x,B.mapSize.x=u.x),o.y>v&&(u.y=Math.floor(v/it.y),o.y=u.y*it.y,B.mapSize.y=u.y));const dt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=dt,B.map===null||ot===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===il){if(L.isPointLight){he("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Zi(o.x,o.y,{format:qr,type:Ca,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),B.map.texture.name=L.name+".shadowMap",B.map.depthTexture=new qs(o.x,o.y,Wi),B.map.depthTexture.name=L.name+".shadowMapDepth",B.map.depthTexture.format=wa,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn}else L.isPointLight?(B.map=new _S(o.x),B.map.depthTexture=new bT(o.x,Ki)):(B.map=new Zi(o.x,o.y),B.map.depthTexture=new qs(o.x,o.y,Ki)),B.map.depthTexture.name=L.name+".shadowMap",B.map.depthTexture.format=wa,this.type===oc?(B.map.depthTexture.compareFunction=dt?qp:Wp,B.map.depthTexture.minFilter=Bn,B.map.depthTexture.magFilter=Bn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Dn,B.map.depthTexture.magFilter=Dn);B.camera.updateProjectionMatrix()}const yt=B.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<yt;P++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,P),r.clear();else{P===0&&(r.setRenderTarget(B.map),r.clear());const K=B.getViewport(P);c.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),J.viewport(c)}if(L.isPointLight){const K=B.camera,vt=B.matrix,Ct=L.distance||K.far;Ct!==K.far&&(K.far=Ct,K.updateProjectionMatrix()),nl.setFromMatrixPosition(L.matrixWorld),K.position.copy(nl),Cd.copy(K.position),Cd.add(Q3[P]),K.up.copy($3[P]),K.lookAt(Cd),K.updateMatrixWorld(),vt.makeTranslation(-nl.x,-nl.y,-nl.z),ox.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),B._frustum.setFromProjectionMatrix(ox,K.coordinateSystem,K.reversedDepth)}else B.updateMatrices(L);a=B.getFrustum(),N(F,T,B.camera,L,this.type)}B.isPointLightShadow!==!0&&this.type===il&&C(B,T),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(z,q,I)};function C(O,F){const T=t.update(A);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Zi(o.x,o.y,{format:qr,type:Ca})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(F,null,T,g,A,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(F,null,T,x,A,null)}function D(O,F,T,z){let q=null;const I=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(I!==void 0)q=I;else if(q=T.isPointLight===!0?p:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=q.uuid,ot=F.uuid;let ft=m[J];ft===void 0&&(ft={},m[J]=ft);let k=ft[ot];k===void 0&&(k=q.clone(),ft[ot]=k,F.addEventListener("dispose",G)),q=k}if(q.visible=F.visible,q.wireframe=F.wireframe,z===il?q.side=F.shadowSide!==null?F.shadowSide:F.side:q.side=F.shadowSide!==null?F.shadowSide:_[F.side],q.alphaMap=F.alphaMap,q.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,q.map=F.map,q.clipShadows=F.clipShadows,q.clippingPlanes=F.clippingPlanes,q.clipIntersection=F.clipIntersection,q.displacementMap=F.displacementMap,q.displacementScale=F.displacementScale,q.displacementBias=F.displacementBias,q.wireframeLinewidth=F.wireframeLinewidth,q.linewidth=F.linewidth,T.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const J=r.properties.get(q);J.light=T}return q}function N(O,F,T,z,q){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&q===il)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const ot=t.update(O),ft=O.material;if(Array.isArray(ft)){const k=ot.groups;for(let L=0,B=k.length;L<B;L++){const it=k[L],dt=ft[it.materialIndex];if(dt&&dt.visible){const yt=D(O,dt,z,q);O.onBeforeShadow(r,O,F,T,ot,yt,it),r.renderBufferDirect(T,null,ot,yt,O,it),O.onAfterShadow(r,O,F,T,ot,yt,it)}}}else if(ft.visible){const k=D(O,ft,z,q);O.onBeforeShadow(r,O,F,T,ot,k,null),r.renderBufferDirect(T,null,ot,k,O,null),O.onAfterShadow(r,O,F,T,ot,k,null)}}const J=O.children;for(let ot=0,ft=J.length;ot<ft;ot++)N(J[ot],F,T,z,q)}function G(O){O.target.removeEventListener("dispose",G);for(const T in m){const z=m[T],q=O.target.uuid;q in z&&(z[q].dispose(),delete z[q])}}}function e2(r,t){function n(){let X=!1;const Dt=new un;let gt=null;const qt=new un(0,0,0,0);return{setMask:function(Ft){gt!==Ft&&!X&&(r.colorMask(Ft,Ft,Ft,Ft),gt=Ft)},setLocked:function(Ft){X=Ft},setClear:function(Ft,Rt,te,fe,nn){nn===!0&&(Ft*=fe,Rt*=fe,te*=fe),Dt.set(Ft,Rt,te,fe),qt.equals(Dt)===!1&&(r.clearColor(Ft,Rt,te,fe),qt.copy(Dt))},reset:function(){X=!1,gt=null,qt.set(-1,0,0,0)}}}function a(){let X=!1,Dt=!1,gt=null,qt=null,Ft=null;return{setReversed:function(Rt){if(Dt!==Rt){const te=t.get("EXT_clip_control");Rt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),Dt=Rt;const fe=Ft;Ft=null,this.setClear(fe)}},getReversed:function(){return Dt},setTest:function(Rt){Rt?bt(r.DEPTH_TEST):Ot(r.DEPTH_TEST)},setMask:function(Rt){gt!==Rt&&!X&&(r.depthMask(Rt),gt=Rt)},setFunc:function(Rt){if(Dt&&(Rt=Qb[Rt]),qt!==Rt){switch(Rt){case zd:r.depthFunc(r.NEVER);break;case Fd:r.depthFunc(r.ALWAYS);break;case Bd:r.depthFunc(r.LESS);break;case Xs:r.depthFunc(r.LEQUAL);break;case Id:r.depthFunc(r.EQUAL);break;case Hd:r.depthFunc(r.GEQUAL);break;case Gd:r.depthFunc(r.GREATER);break;case Vd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}qt=Rt}},setLocked:function(Rt){X=Rt},setClear:function(Rt){Ft!==Rt&&(Ft=Rt,Dt&&(Rt=1-Rt),r.clearDepth(Rt))},reset:function(){X=!1,gt=null,qt=null,Ft=null,Dt=!1}}}function o(){let X=!1,Dt=null,gt=null,qt=null,Ft=null,Rt=null,te=null,fe=null,nn=null;return{setTest:function(ze){X||(ze?bt(r.STENCIL_TEST):Ot(r.STENCIL_TEST))},setMask:function(ze){Dt!==ze&&!X&&(r.stencilMask(ze),Dt=ze)},setFunc:function(ze,hi,$n){(gt!==ze||qt!==hi||Ft!==$n)&&(r.stencilFunc(ze,hi,$n),gt=ze,qt=hi,Ft=$n)},setOp:function(ze,hi,$n){(Rt!==ze||te!==hi||fe!==$n)&&(r.stencilOp(ze,hi,$n),Rt=ze,te=hi,fe=$n)},setLocked:function(ze){X=ze},setClear:function(ze){nn!==ze&&(r.clearStencil(ze),nn=ze)},reset:function(){X=!1,Dt=null,gt=null,qt=null,Ft=null,Rt=null,te=null,fe=null,nn=null}}}const u=new n,c=new a,h=new o,p=new WeakMap,m=new WeakMap;let v={},_={},g={},x=new WeakMap,E=[],A=null,S=!1,y=null,C=null,D=null,N=null,G=null,O=null,F=null,T=new Ie(0,0,0),z=0,q=!1,I=null,J=null,ot=null,ft=null,k=null;const L=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,it=0;const dt=r.getParameter(r.VERSION);dt.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(dt)[1]),B=it>=1):dt.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(dt)[1]),B=it>=2);let yt=null,P={};const K=r.getParameter(r.SCISSOR_BOX),vt=r.getParameter(r.VIEWPORT),Ct=new un().fromArray(K),Ut=new un().fromArray(vt);function at(X,Dt,gt,qt){const Ft=new Uint8Array(4),Rt=r.createTexture();r.bindTexture(X,Rt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<gt;te++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Dt,0,r.RGBA,1,1,qt,0,r.RGBA,r.UNSIGNED_BYTE,Ft):r.texImage2D(Dt+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ft);return Rt}const Mt={};Mt[r.TEXTURE_2D]=at(r.TEXTURE_2D,r.TEXTURE_2D,1),Mt[r.TEXTURE_CUBE_MAP]=at(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[r.TEXTURE_2D_ARRAY]=at(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Mt[r.TEXTURE_3D]=at(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),bt(r.DEPTH_TEST),c.setFunc(Xs),Wt(!1),Bt(t_),bt(r.CULL_FACE),wt(Ta);function bt(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Ot(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function ne(X,Dt){return g[X]!==Dt?(r.bindFramebuffer(X,Dt),g[X]=Dt,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Dt),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Dt),!0):!1}function ie(X,Dt){let gt=E,qt=!1;if(X){gt=x.get(Dt),gt===void 0&&(gt=[],x.set(Dt,gt));const Ft=X.textures;if(gt.length!==Ft.length||gt[0]!==r.COLOR_ATTACHMENT0){for(let Rt=0,te=Ft.length;Rt<te;Rt++)gt[Rt]=r.COLOR_ATTACHMENT0+Rt;gt.length=Ft.length,qt=!0}}else gt[0]!==r.BACK&&(gt[0]=r.BACK,qt=!0);qt&&r.drawBuffers(gt)}function Se(X){return A!==X?(r.useProgram(X),A=X,!0):!1}const Vt={[Hr]:r.FUNC_ADD,[yb]:r.FUNC_SUBTRACT,[Mb]:r.FUNC_REVERSE_SUBTRACT};Vt[Eb]=r.MIN,Vt[bb]=r.MAX;const pt={[Tb]:r.ZERO,[Ab]:r.ONE,[Rb]:r.SRC_COLOR,[Od]:r.SRC_ALPHA,[Nb]:r.SRC_ALPHA_SATURATE,[Ub]:r.DST_COLOR,[wb]:r.DST_ALPHA,[Cb]:r.ONE_MINUS_SRC_COLOR,[Pd]:r.ONE_MINUS_SRC_ALPHA,[Lb]:r.ONE_MINUS_DST_COLOR,[Db]:r.ONE_MINUS_DST_ALPHA,[Ob]:r.CONSTANT_COLOR,[Pb]:r.ONE_MINUS_CONSTANT_COLOR,[zb]:r.CONSTANT_ALPHA,[Fb]:r.ONE_MINUS_CONSTANT_ALPHA};function wt(X,Dt,gt,qt,Ft,Rt,te,fe,nn,ze){if(X===Ta){S===!0&&(Ot(r.BLEND),S=!1);return}if(S===!1&&(bt(r.BLEND),S=!0),X!==Sb){if(X!==y||ze!==q){if((C!==Hr||G!==Hr)&&(r.blendEquation(r.FUNC_ADD),C=Hr,G=Hr),ze)switch(X){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gc:r.blendFunc(r.ONE,r.ONE);break;case e_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case n_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",X);break}else switch(X){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case gc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case e_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",X);break}D=null,N=null,O=null,F=null,T.set(0,0,0),z=0,y=X,q=ze}return}Ft=Ft||Dt,Rt=Rt||gt,te=te||qt,(Dt!==C||Ft!==G)&&(r.blendEquationSeparate(Vt[Dt],Vt[Ft]),C=Dt,G=Ft),(gt!==D||qt!==N||Rt!==O||te!==F)&&(r.blendFuncSeparate(pt[gt],pt[qt],pt[Rt],pt[te]),D=gt,N=qt,O=Rt,F=te),(fe.equals(T)===!1||nn!==z)&&(r.blendColor(fe.r,fe.g,fe.b,nn),T.copy(fe),z=nn),y=X,q=!1}function Et(X,Dt){X.side===Ma?Ot(r.CULL_FACE):bt(r.CULL_FACE);let gt=X.side===Jn;Dt&&(gt=!gt),Wt(gt),X.blending===Xr&&X.transparent===!1?wt(Ta):wt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),u.setMask(X.colorWrite);const qt=X.stencilWrite;h.setTest(qt),qt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),H(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?bt(r.SAMPLE_ALPHA_TO_COVERAGE):Ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(X){I!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),I=X)}function Bt(X){X!==vb?(bt(r.CULL_FACE),X!==J&&(X===t_?r.cullFace(r.BACK):X===_b?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ot(r.CULL_FACE),J=X}function le(X){X!==ot&&(B&&r.lineWidth(X),ot=X)}function H(X,Dt,gt){X?(bt(r.POLYGON_OFFSET_FILL),(ft!==Dt||k!==gt)&&(ft=Dt,k=gt,c.getReversed()&&(Dt=-Dt),r.polygonOffset(Dt,gt))):Ot(r.POLYGON_OFFSET_FILL)}function ue(X){X?bt(r.SCISSOR_TEST):Ot(r.SCISSOR_TEST)}function $t(X){X===void 0&&(X=r.TEXTURE0+L-1),yt!==X&&(r.activeTexture(X),yt=X)}function ce(X,Dt,gt){gt===void 0&&(yt===null?gt=r.TEXTURE0+L-1:gt=yt);let qt=P[gt];qt===void 0&&(qt={type:void 0,texture:void 0},P[gt]=qt),(qt.type!==X||qt.texture!==Dt)&&(yt!==gt&&(r.activeTexture(gt),yt=gt),r.bindTexture(X,Dt||Mt[X]),qt.type=X,qt.texture=Dt)}function At(){const X=P[yt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Le(){try{r.compressedTexImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function b(){try{r.texSubImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Q(){try{r.texSubImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function _t(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Tt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Lt(){try{r.texStorage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function Pt(){try{r.texStorage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function ut(){try{r.texImage2D(...arguments)}catch(X){Ue("WebGLState:",X)}}function ht(){try{r.texImage3D(...arguments)}catch(X){Ue("WebGLState:",X)}}function It(X){return _[X]!==void 0?_[X]:r.getParameter(X)}function Ht(X,Dt){_[X]!==Dt&&(r.pixelStorei(X,Dt),_[X]=Dt)}function zt(X){Ct.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Ct.copy(X))}function Nt(X){Ut.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function de(X,Dt){let gt=m.get(Dt);gt===void 0&&(gt=new WeakMap,m.set(Dt,gt));let qt=gt.get(X);qt===void 0&&(qt=r.getUniformBlockIndex(Dt,X.name),gt.set(X,qt))}function pe(X,Dt){const qt=m.get(Dt).get(X);p.get(Dt)!==qt&&(r.uniformBlockBinding(Dt,qt,X.__bindingPointIndex),p.set(Dt,qt))}function Me(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),v={},_={},yt=null,P={},g={},x=new WeakMap,E=[],A=null,S=!1,y=null,C=null,D=null,N=null,G=null,O=null,F=null,T=new Ie(0,0,0),z=0,q=!1,I=null,J=null,ot=null,ft=null,k=null,Ct.set(0,0,r.canvas.width,r.canvas.height),Ut.set(0,0,r.canvas.width,r.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:bt,disable:Ot,bindFramebuffer:ne,drawBuffers:ie,useProgram:Se,setBlending:wt,setMaterial:Et,setFlipSided:Wt,setCullFace:Bt,setLineWidth:le,setPolygonOffset:H,setScissorTest:ue,activeTexture:$t,bindTexture:ce,unbindTexture:At,compressedTexImage2D:Le,compressedTexImage3D:U,texImage2D:ut,texImage3D:ht,pixelStorei:Ht,getParameter:It,updateUBOMapping:de,uniformBlockBinding:pe,texStorage2D:Lt,texStorage3D:Pt,texSubImage2D:b,texSubImage3D:Q,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:zt,viewport:Nt,reset:Me}}function n2(r,t,n,a,o,u,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Xt,v=new WeakMap,_=new Set;let g;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,b){return E?new OffscreenCanvas(U,b):yc("canvas")}function S(U,b,Q){let _t=1;const Tt=Le(U);if((Tt.width>Q||Tt.height>Q)&&(_t=Q/Math.max(Tt.width,Tt.height)),_t<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Lt=Math.floor(_t*Tt.width),Pt=Math.floor(_t*Tt.height);g===void 0&&(g=A(Lt,Pt));const ut=b?A(Lt,Pt):g;return ut.width=Lt,ut.height=Pt,ut.getContext("2d").drawImage(U,0,0,Lt,Pt),he("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+Lt+"x"+Pt+")."),ut}else return"data"in U&&he("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),U;return U}function y(U){return U.generateMipmaps}function C(U){r.generateMipmap(U)}function D(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(U,b,Q,_t,Tt,Lt=!1){if(U!==null){if(r[U]!==void 0)return r[U];he("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Pt;_t&&(Pt=t.get("EXT_texture_norm16"),Pt||he("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=b;if(b===r.RED&&(Q===r.FLOAT&&(ut=r.R32F),Q===r.HALF_FLOAT&&(ut=r.R16F),Q===r.UNSIGNED_BYTE&&(ut=r.R8),Q===r.UNSIGNED_SHORT&&Pt&&(ut=Pt.R16_EXT),Q===r.SHORT&&Pt&&(ut=Pt.R16_SNORM_EXT)),b===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.R8UI),Q===r.UNSIGNED_SHORT&&(ut=r.R16UI),Q===r.UNSIGNED_INT&&(ut=r.R32UI),Q===r.BYTE&&(ut=r.R8I),Q===r.SHORT&&(ut=r.R16I),Q===r.INT&&(ut=r.R32I)),b===r.RG&&(Q===r.FLOAT&&(ut=r.RG32F),Q===r.HALF_FLOAT&&(ut=r.RG16F),Q===r.UNSIGNED_BYTE&&(ut=r.RG8),Q===r.UNSIGNED_SHORT&&Pt&&(ut=Pt.RG16_EXT),Q===r.SHORT&&Pt&&(ut=Pt.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RG8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RG16UI),Q===r.UNSIGNED_INT&&(ut=r.RG32UI),Q===r.BYTE&&(ut=r.RG8I),Q===r.SHORT&&(ut=r.RG16I),Q===r.INT&&(ut=r.RG32I)),b===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),Q===r.UNSIGNED_INT&&(ut=r.RGB32UI),Q===r.BYTE&&(ut=r.RGB8I),Q===r.SHORT&&(ut=r.RGB16I),Q===r.INT&&(ut=r.RGB32I)),b===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),Q===r.UNSIGNED_INT&&(ut=r.RGBA32UI),Q===r.BYTE&&(ut=r.RGBA8I),Q===r.SHORT&&(ut=r.RGBA16I),Q===r.INT&&(ut=r.RGBA32I)),b===r.RGB&&(Q===r.UNSIGNED_SHORT&&Pt&&(ut=Pt.RGB16_EXT),Q===r.SHORT&&Pt&&(ut=Pt.RGB16_SNORM_EXT),Q===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),b===r.RGBA){const ht=Lt?Sc:De.getTransfer(Tt);Q===r.FLOAT&&(ut=r.RGBA32F),Q===r.HALF_FLOAT&&(ut=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(ut=ht===We?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT&&Pt&&(ut=Pt.RGBA16_EXT),Q===r.SHORT&&Pt&&(ut=Pt.RGBA16_SNORM_EXT),Q===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function G(U,b){let Q;return U?b===null||b===Ki||b===cl?Q=r.DEPTH24_STENCIL8:b===Wi?Q=r.DEPTH32F_STENCIL8:b===ul&&(Q=r.DEPTH24_STENCIL8,he("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ki||b===cl?Q=r.DEPTH_COMPONENT24:b===Wi?Q=r.DEPTH_COMPONENT32F:b===ul&&(Q=r.DEPTH_COMPONENT16),Q}function O(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Dn&&U.minFilter!==Bn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function F(U){const b=U.target;b.removeEventListener("dispose",F),z(b),b.isVideoTexture&&v.delete(b),b.isHTMLTexture&&_.delete(b)}function T(U){const b=U.target;b.removeEventListener("dispose",T),I(b)}function z(U){const b=a.get(U);if(b.__webglInit===void 0)return;const Q=U.source,_t=x.get(Q);if(_t){const Tt=_t[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&q(U),Object.keys(_t).length===0&&x.delete(Q)}a.remove(U)}function q(U){const b=a.get(U);r.deleteTexture(b.__webglTexture);const Q=U.source,_t=x.get(Q);delete _t[b.__cacheKey],c.memory.textures--}function I(U){const b=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let Tt=0;Tt<b.__webglFramebuffer[_t].length;Tt++)r.deleteFramebuffer(b.__webglFramebuffer[_t][Tt]);else r.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)r.deleteFramebuffer(b.__webglFramebuffer[_t]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=U.textures;for(let _t=0,Tt=Q.length;_t<Tt;_t++){const Lt=a.get(Q[_t]);Lt.__webglTexture&&(r.deleteTexture(Lt.__webglTexture),c.memory.textures--),a.remove(Q[_t])}a.remove(U)}let J=0;function ot(){J=0}function ft(){return J}function k(U){J=U}function L(){const U=J;return U>=o.maxTextures&&he("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),J+=1,U}function B(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function it(U,b){const Q=a.get(U);if(U.isVideoTexture&&ce(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const _t=U.image;if(_t===null)he("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)he("WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(Q,U,b);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+b)}function dt(U,b){const Q=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ot(Q,U,b);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+b)}function yt(U,b){const Q=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Ot(Q,U,b);return}n.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+b)}function P(U,b){const Q=a.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){ne(Q,U,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+b)}const K={[kd]:r.REPEAT,[Ea]:r.CLAMP_TO_EDGE,[Xd]:r.MIRRORED_REPEAT},vt={[Dn]:r.NEAREST,[Hb]:r.NEAREST_MIPMAP_NEAREST,[Lu]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Yh]:r.LINEAR_MIPMAP_NEAREST,[Vr]:r.LINEAR_MIPMAP_LINEAR},Ct={[kb]:r.NEVER,[Zb]:r.ALWAYS,[Xb]:r.LESS,[Wp]:r.LEQUAL,[Wb]:r.EQUAL,[qp]:r.GEQUAL,[qb]:r.GREATER,[Yb]:r.NOTEQUAL};function Ut(U,b){if(b.type===Wi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Bn||b.magFilter===Yh||b.magFilter===Lu||b.magFilter===Vr||b.minFilter===Bn||b.minFilter===Yh||b.minFilter===Lu||b.minFilter===Vr)&&he("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,K[b.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,K[b.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,K[b.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,vt[b.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,vt[b.minFilter]),b.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Ct[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Dn||b.minFilter!==Lu&&b.minFilter!==Vr||b.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||a.get(b).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),a.get(b).__currentAnisotropy=b.anisotropy}}}function at(U,b){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",F));const _t=b.source;let Tt=x.get(_t);Tt===void 0&&(Tt={},x.set(_t,Tt));const Lt=B(b);if(Lt!==U.__cacheKey){Tt[Lt]===void 0&&(Tt[Lt]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),Tt[Lt].usedTimes++;const Pt=Tt[U.__cacheKey];Pt!==void 0&&(Tt[U.__cacheKey].usedTimes--,Pt.usedTimes===0&&q(b)),U.__cacheKey=Lt,U.__webglTexture=Tt[Lt].texture}return Q}function Mt(U,b,Q){return Math.floor(Math.floor(U/Q)/b)}function bt(U,b,Q,_t){const Lt=U.updateRanges;if(Lt.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,Q,_t,b.data);else{Lt.sort((Ht,zt)=>Ht.start-zt.start);let Pt=0;for(let Ht=1;Ht<Lt.length;Ht++){const zt=Lt[Pt],Nt=Lt[Ht],de=zt.start+zt.count,pe=Mt(Nt.start,b.width,4),Me=Mt(zt.start,b.width,4);Nt.start<=de+1&&pe===Me&&Mt(Nt.start+Nt.count-1,b.width,4)===pe?zt.count=Math.max(zt.count,Nt.start+Nt.count-zt.start):(++Pt,Lt[Pt]=Nt)}Lt.length=Pt+1;const ut=n.getParameter(r.UNPACK_ROW_LENGTH),ht=n.getParameter(r.UNPACK_SKIP_PIXELS),It=n.getParameter(r.UNPACK_SKIP_ROWS);n.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Ht=0,zt=Lt.length;Ht<zt;Ht++){const Nt=Lt[Ht],de=Math.floor(Nt.start/4),pe=Math.ceil(Nt.count/4),Me=de%b.width,X=Math.floor(de/b.width),Dt=pe,gt=1;n.pixelStorei(r.UNPACK_SKIP_PIXELS,Me),n.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,Me,X,Dt,gt,Q,_t,b.data)}U.clearUpdateRanges(),n.pixelStorei(r.UNPACK_ROW_LENGTH,ut),n.pixelStorei(r.UNPACK_SKIP_PIXELS,ht),n.pixelStorei(r.UNPACK_SKIP_ROWS,It)}}function Ot(U,b,Q){let _t=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=r.TEXTURE_3D);const Tt=at(U,b),Lt=b.source;n.bindTexture(_t,U.__webglTexture,r.TEXTURE0+Q);const Pt=a.get(Lt);if(Lt.version!==Pt.__version||Tt===!0){if(n.activeTexture(r.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const gt=De.getPrimaries(De.workingColorSpace),qt=b.colorSpace===dr?null:De.getPrimaries(b.colorSpace),Ft=b.colorSpace===dr||gt===qt?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft)}n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let ht=S(b.image,!1,o.maxTextureSize);ht=At(b,ht);const It=u.convert(b.format,b.colorSpace),Ht=u.convert(b.type);let zt=N(b.internalFormat,It,Ht,b.normalized,b.colorSpace,b.isVideoTexture);Ut(_t,b);let Nt;const de=b.mipmaps,pe=b.isVideoTexture!==!0,Me=Pt.__version===void 0||Tt===!0,X=Lt.dataReady,Dt=O(b,ht);if(b.isDepthTexture)zt=G(b.format===kr,b.type),Me&&(pe?n.texStorage2D(r.TEXTURE_2D,1,zt,ht.width,ht.height):n.texImage2D(r.TEXTURE_2D,0,zt,ht.width,ht.height,0,It,Ht,null));else if(b.isDataTexture)if(de.length>0){pe&&Me&&n.texStorage2D(r.TEXTURE_2D,Dt,zt,de[0].width,de[0].height);for(let gt=0,qt=de.length;gt<qt;gt++)Nt=de[gt],pe?X&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,It,Ht,Nt.data):n.texImage2D(r.TEXTURE_2D,gt,zt,Nt.width,Nt.height,0,It,Ht,Nt.data);b.generateMipmaps=!1}else pe?(Me&&n.texStorage2D(r.TEXTURE_2D,Dt,zt,ht.width,ht.height),X&&bt(b,ht,It,Ht)):n.texImage2D(r.TEXTURE_2D,0,zt,ht.width,ht.height,0,It,Ht,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){pe&&Me&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Dt,zt,de[0].width,de[0].height,ht.depth);for(let gt=0,qt=de.length;gt<qt;gt++)if(Nt=de[gt],b.format!==Pi)if(It!==null)if(pe){if(X)if(b.layerUpdates.size>0){const Ft=B_(Nt.width,Nt.height,b.format,b.type);for(const Rt of b.layerUpdates){const te=Nt.data.subarray(Rt*Ft/Nt.data.BYTES_PER_ELEMENT,(Rt+1)*Ft/Nt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,Rt,Nt.width,Nt.height,1,It,te)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,Nt.width,Nt.height,ht.depth,It,Nt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,gt,zt,Nt.width,Nt.height,ht.depth,0,Nt.data,0,0);else he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?X&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,gt,0,0,0,Nt.width,Nt.height,ht.depth,It,Ht,Nt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,gt,zt,Nt.width,Nt.height,ht.depth,0,It,Ht,Nt.data)}else{pe&&Me&&n.texStorage2D(r.TEXTURE_2D,Dt,zt,de[0].width,de[0].height);for(let gt=0,qt=de.length;gt<qt;gt++)Nt=de[gt],b.format!==Pi?It!==null?pe?X&&n.compressedTexSubImage2D(r.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,It,Nt.data):n.compressedTexImage2D(r.TEXTURE_2D,gt,zt,Nt.width,Nt.height,0,Nt.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?X&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,Nt.width,Nt.height,It,Ht,Nt.data):n.texImage2D(r.TEXTURE_2D,gt,zt,Nt.width,Nt.height,0,It,Ht,Nt.data)}else if(b.isDataArrayTexture)if(pe){if(Me&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Dt,zt,ht.width,ht.height,ht.depth),X)if(b.layerUpdates.size>0){const gt=B_(ht.width,ht.height,b.format,b.type);for(const qt of b.layerUpdates){const Ft=ht.data.subarray(qt*gt/ht.data.BYTES_PER_ELEMENT,(qt+1)*gt/ht.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,qt,ht.width,ht.height,1,It,Ht,Ft)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,It,Ht,ht.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,ht.width,ht.height,ht.depth,0,It,Ht,ht.data);else if(b.isData3DTexture)pe?(Me&&n.texStorage3D(r.TEXTURE_3D,Dt,zt,ht.width,ht.height,ht.depth),X&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,It,Ht,ht.data)):n.texImage3D(r.TEXTURE_3D,0,zt,ht.width,ht.height,ht.depth,0,It,Ht,ht.data);else if(b.isFramebufferTexture){if(Me)if(pe)n.texStorage2D(r.TEXTURE_2D,Dt,zt,ht.width,ht.height);else{let gt=ht.width,qt=ht.height;for(let Ft=0;Ft<Dt;Ft++)n.texImage2D(r.TEXTURE_2D,Ft,zt,gt,qt,0,It,Ht,null),gt>>=1,qt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const gt=r.canvas;if(gt.hasAttribute("layoutsubtree")||gt.setAttribute("layoutsubtree","true"),ht.parentNode!==gt){gt.appendChild(ht),_.add(b),gt.onpaint=fe=>{const nn=fe.changedElements;for(const ze of _)nn.includes(ze.image)&&(ze.needsUpdate=!0)},gt.requestPaint();return}const qt=0,Ft=r.RGBA,Rt=r.RGBA,te=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,qt,Ft,Rt,te,ht),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(de.length>0){if(pe&&Me){const gt=Le(de[0]);n.texStorage2D(r.TEXTURE_2D,Dt,zt,gt.width,gt.height)}for(let gt=0,qt=de.length;gt<qt;gt++)Nt=de[gt],pe?X&&n.texSubImage2D(r.TEXTURE_2D,gt,0,0,It,Ht,Nt):n.texImage2D(r.TEXTURE_2D,gt,zt,It,Ht,Nt);b.generateMipmaps=!1}else if(pe){if(Me){const gt=Le(ht);n.texStorage2D(r.TEXTURE_2D,Dt,zt,gt.width,gt.height)}X&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,It,Ht,ht)}else n.texImage2D(r.TEXTURE_2D,0,zt,It,Ht,ht);y(b)&&C(_t),Pt.__version=Lt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ne(U,b,Q){if(b.image.length!==6)return;const _t=at(U,b),Tt=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Q);const Lt=a.get(Tt);if(Tt.version!==Lt.__version||_t===!0){n.activeTexture(r.TEXTURE0+Q);const Pt=De.getPrimaries(De.workingColorSpace),ut=b.colorSpace===dr?null:De.getPrimaries(b.colorSpace),ht=b.colorSpace===dr||Pt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;n.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const It=b.isCompressedTexture||b.image[0].isCompressedTexture,Ht=b.image[0]&&b.image[0].isDataTexture,zt=[];for(let Rt=0;Rt<6;Rt++)!It&&!Ht?zt[Rt]=S(b.image[Rt],!0,o.maxCubemapSize):zt[Rt]=Ht?b.image[Rt].image:b.image[Rt],zt[Rt]=At(b,zt[Rt]);const Nt=zt[0],de=u.convert(b.format,b.colorSpace),pe=u.convert(b.type),Me=N(b.internalFormat,de,pe,b.normalized,b.colorSpace),X=b.isVideoTexture!==!0,Dt=Lt.__version===void 0||_t===!0,gt=Tt.dataReady;let qt=O(b,Nt);Ut(r.TEXTURE_CUBE_MAP,b);let Ft;if(It){X&&Dt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,qt,Me,Nt.width,Nt.height);for(let Rt=0;Rt<6;Rt++){Ft=zt[Rt].mipmaps;for(let te=0;te<Ft.length;te++){const fe=Ft[te];b.format!==Pi?de!==null?X?gt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te,0,0,fe.width,fe.height,de,fe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te,Me,fe.width,fe.height,0,fe.data):he("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te,0,0,fe.width,fe.height,de,pe,fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te,Me,fe.width,fe.height,0,de,pe,fe.data)}}}else{if(Ft=b.mipmaps,X&&Dt){Ft.length>0&&qt++;const Rt=Le(zt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,qt,Me,Rt.width,Rt.height)}for(let Rt=0;Rt<6;Rt++)if(Ht){X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,zt[Rt].width,zt[Rt].height,de,pe,zt[Rt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Me,zt[Rt].width,zt[Rt].height,0,de,pe,zt[Rt].data);for(let te=0;te<Ft.length;te++){const nn=Ft[te].image[Rt].image;X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te+1,0,0,nn.width,nn.height,de,pe,nn.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te+1,Me,nn.width,nn.height,0,de,pe,nn.data)}}else{X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,0,0,de,pe,zt[Rt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Me,de,pe,zt[Rt]);for(let te=0;te<Ft.length;te++){const fe=Ft[te];X?gt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te+1,0,0,de,pe,fe.image[Rt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,te+1,Me,de,pe,fe.image[Rt])}}}y(b)&&C(r.TEXTURE_CUBE_MAP),Lt.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function ie(U,b,Q,_t,Tt,Lt){const Pt=u.convert(Q.format,Q.colorSpace),ut=u.convert(Q.type),ht=N(Q.internalFormat,Pt,ut,Q.normalized,Q.colorSpace),It=a.get(b),Ht=a.get(Q);if(Ht.__renderTarget=b,!It.__hasExternalTextures){const zt=Math.max(1,b.width>>Lt),Nt=Math.max(1,b.height>>Lt);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?n.texImage3D(Tt,Lt,ht,zt,Nt,b.depth,0,Pt,ut,null):n.texImage2D(Tt,Lt,ht,zt,Nt,0,Pt,ut,null)}n.bindFramebuffer(r.FRAMEBUFFER,U),$t(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,Tt,Ht.__webglTexture,0,ue(b)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,Tt,Ht.__webglTexture,Lt),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(U,b,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),b.depthBuffer){const _t=b.depthTexture,Tt=_t&&_t.isDepthTexture?_t.type:null,Lt=G(b.stencilBuffer,Tt),Pt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;$t(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue(b),Lt,b.width,b.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue(b),Lt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Lt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pt,r.RENDERBUFFER,U)}else{const _t=b.textures;for(let Tt=0;Tt<_t.length;Tt++){const Lt=_t[Tt],Pt=u.convert(Lt.format,Lt.colorSpace),ut=u.convert(Lt.type),ht=N(Lt.internalFormat,Pt,ut,Lt.normalized,Lt.colorSpace);$t(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue(b),ht,b.width,b.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ue(b),ht,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ht,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(U,b,Q){const _t=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=a.get(b.depthTexture);if(Tt.__renderTarget=b,(!Tt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),_t){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),Tt.__webglTexture===void 0){Tt.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,Tt.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,b.depthTexture);const It=u.convert(b.depthTexture.format),Ht=u.convert(b.depthTexture.type);let zt;b.depthTexture.format===wa?zt=r.DEPTH_COMPONENT24:b.depthTexture.format===kr&&(zt=r.DEPTH24_STENCIL8);for(let Nt=0;Nt<6;Nt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,zt,b.width,b.height,0,It,Ht,null)}}else it(b.depthTexture,0);const Lt=Tt.__webglTexture,Pt=ue(b),ut=_t?r.TEXTURE_CUBE_MAP_POSITIVE_X+Q:r.TEXTURE_2D,ht=b.depthTexture.format===kr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===wa)$t(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ut,Lt,0,Pt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ut,Lt,0);else if(b.depthTexture.format===kr)$t(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ht,ut,Lt,0,Pt):r.framebufferTexture2D(r.FRAMEBUFFER,ht,ut,Lt,0);else throw new Error("Unknown depthTexture format")}function pt(U){const b=a.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const _t=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",Tt)};_t.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=_t}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let _t=0;_t<6;_t++)Vt(b.__webglFramebuffer[_t],U,_t);else{const _t=U.texture.mipmaps;_t&&_t.length>0?Vt(b.__webglFramebuffer[0],U,0):Vt(b.__webglFramebuffer,U,0)}else if(Q){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=r.createRenderbuffer(),Se(b.__webglDepthbuffer[_t],U,!1);else{const Tt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=b.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,Lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,Lt)}}else{const _t=U.texture.mipmaps;if(_t&&_t.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Se(b.__webglDepthbuffer,U,!1);else{const Tt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Lt=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,Lt)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(U,b,Q){const _t=a.get(U);b!==void 0&&ie(_t.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&pt(U)}function Et(U){const b=U.texture,Q=a.get(U),_t=a.get(b);U.addEventListener("dispose",T);const Tt=U.textures,Lt=U.isWebGLCubeRenderTarget===!0,Pt=Tt.length>1;if(Pt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=b.version,c.memory.textures++),Lt){Q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[ut]=[];for(let ht=0;ht<b.mipmaps.length;ht++)Q.__webglFramebuffer[ut][ht]=r.createFramebuffer()}else Q.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ut=0;ut<b.mipmaps.length;ut++)Q.__webglFramebuffer[ut]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Pt)for(let ut=0,ht=Tt.length;ut<ht;ut++){const It=a.get(Tt[ut]);It.__webglTexture===void 0&&(It.__webglTexture=r.createTexture(),c.memory.textures++)}if(U.samples>0&&$t(U)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ut=0;ut<Tt.length;ut++){const ht=Tt[ut];Q.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);const It=u.convert(ht.format,ht.colorSpace),Ht=u.convert(ht.type),zt=N(ht.internalFormat,It,Ht,ht.normalized,ht.colorSpace,U.isXRRenderTarget===!0),Nt=ue(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,zt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(Q.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Lt){n.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,b);for(let ut=0;ut<6;ut++)if(b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)ie(Q.__webglFramebuffer[ut][ht],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ht);else ie(Q.__webglFramebuffer[ut],U,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);y(b)&&C(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pt){for(let ut=0,ht=Tt.length;ut<ht;ut++){const It=Tt[ut],Ht=a.get(It);let zt=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(zt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(zt,Ht.__webglTexture),Ut(zt,It),ie(Q.__webglFramebuffer,U,It,r.COLOR_ATTACHMENT0+ut,zt,0),y(It)&&C(zt)}n.unbindTexture()}else{let ut=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ut=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ut,_t.__webglTexture),Ut(ut,b),b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)ie(Q.__webglFramebuffer[ht],U,b,r.COLOR_ATTACHMENT0,ut,ht);else ie(Q.__webglFramebuffer,U,b,r.COLOR_ATTACHMENT0,ut,0);y(b)&&C(ut),n.unbindTexture()}U.depthBuffer&&pt(U)}function Wt(U){const b=U.textures;for(let Q=0,_t=b.length;Q<_t;Q++){const Tt=b[Q];if(y(Tt)){const Lt=D(U),Pt=a.get(Tt).__webglTexture;n.bindTexture(Lt,Pt),C(Lt),n.unbindTexture()}}}const Bt=[],le=[];function H(U){if(U.samples>0){if($t(U)===!1){const b=U.textures,Q=U.width,_t=U.height;let Tt=r.COLOR_BUFFER_BIT;const Lt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=a.get(U),ut=b.length>1;if(ut)for(let It=0;It<b.length;It++)n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const ht=U.texture.mipmaps;ht&&ht.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let It=0;It<b.length;It++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[It]);const Ht=a.get(b[It]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ht,0)}r.blitFramebuffer(0,0,Q,_t,0,0,Q,_t,Tt,r.NEAREST),p===!0&&(Bt.length=0,le.length=0,Bt.push(r.COLOR_ATTACHMENT0+It),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Bt.push(Lt),le.push(Lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let It=0;It<b.length;It++){n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.RENDERBUFFER,Pt.__webglColorRenderbuffer[It]);const Ht=a.get(b[It]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Pt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+It,r.TEXTURE_2D,Ht,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function ue(U){return Math.min(o.maxSamples,U.samples)}function $t(U){const b=a.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(U){const b=c.render.frame;v.get(U)!==b&&(v.set(U,b),U.update())}function At(U,b){const Q=U.colorSpace,_t=U.format,Tt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==xc&&Q!==dr&&(De.getTransfer(Q)===We?(_t!==Pi||Tt!==fi)&&he("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",Q)),b}function Le(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=L,this.resetTextureUnits=ot,this.getTextureUnits=ft,this.setTextureUnits=k,this.setTexture2D=it,this.setTexture2DArray=dt,this.setTexture3D=yt,this.setTextureCube=P,this.rebindTextures=wt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function i2(r,t){function n(a,o=dr){let u;const c=De.getTransfer(o);if(a===fi)return r.UNSIGNED_BYTE;if(a===Hp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Gp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Xx)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Wx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Vx)return r.BYTE;if(a===kx)return r.SHORT;if(a===ul)return r.UNSIGNED_SHORT;if(a===Ip)return r.INT;if(a===Ki)return r.UNSIGNED_INT;if(a===Wi)return r.FLOAT;if(a===Ca)return r.HALF_FLOAT;if(a===qx)return r.ALPHA;if(a===Yx)return r.RGB;if(a===Pi)return r.RGBA;if(a===wa)return r.DEPTH_COMPONENT;if(a===kr)return r.DEPTH_STENCIL;if(a===Zx)return r.RED;if(a===Vp)return r.RED_INTEGER;if(a===qr)return r.RG;if(a===kp)return r.RG_INTEGER;if(a===Xp)return r.RGBA_INTEGER;if(a===lc||a===uc||a===cc||a===fc)if(c===We)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===lc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===uc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===cc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===lc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===uc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===cc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===fc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Wd||a===qd||a===Yd||a===Zd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Wd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===qd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Yd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Zd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===jd||a===Kd||a===Jd||a===Qd||a===$d||a===vc||a===tp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===jd||a===Kd)return c===We?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===Jd)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===Qd)return u.COMPRESSED_R11_EAC;if(a===$d)return u.COMPRESSED_SIGNED_R11_EAC;if(a===vc)return u.COMPRESSED_RG11_EAC;if(a===tp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===ep||a===np||a===ip||a===ap||a===rp||a===sp||a===op||a===lp||a===up||a===cp||a===fp||a===hp||a===dp||a===pp)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===ep)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===np)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ip)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ap)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===rp)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===sp)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===op)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===lp)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===up)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===cp)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===fp)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===hp)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===dp)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===pp)return c===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===mp||a===gp||a===vp)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===mp)return c===We?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===vp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===_p||a===xp||a===_c||a===Sp)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===_p)return u.COMPRESSED_RED_RGTC1_EXT;if(a===xp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_c)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Sp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===cl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const a2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class s2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new aS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ji({vertexShader:a2,fragmentShader:r2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new wc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o2 extends jr{constructor(t,n){super();const a=this;let o=null,u=1,c=null,h="local-floor",p=1,m=null,v=null,_=null,g=null,x=null,E=null;const A=typeof XRWebGLBinding<"u",S=new s2,y={},C=n.getContextAttributes();let D=null,N=null;const G=[],O=[],F=new Xt;let T=null;const z=new Ei;z.viewport=new un;const q=new Ei;q.viewport=new un;const I=[z,q],J=new v1;let ot=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let Mt=G[at];return Mt===void 0&&(Mt=new ed,G[at]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(at){let Mt=G[at];return Mt===void 0&&(Mt=new ed,G[at]=Mt),Mt.getGripSpace()},this.getHand=function(at){let Mt=G[at];return Mt===void 0&&(Mt=new ed,G[at]=Mt),Mt.getHandSpace()};function k(at){const Mt=O.indexOf(at.inputSource);if(Mt===-1)return;const bt=G[Mt];bt!==void 0&&(bt.update(at.inputSource,at.frame,m||c),bt.dispatchEvent({type:at.type,data:at.inputSource}))}function L(){o.removeEventListener("select",k),o.removeEventListener("selectstart",k),o.removeEventListener("selectend",k),o.removeEventListener("squeeze",k),o.removeEventListener("squeezestart",k),o.removeEventListener("squeezeend",k),o.removeEventListener("end",L),o.removeEventListener("inputsourceschange",B);for(let at=0;at<G.length;at++){const Mt=O[at];Mt!==null&&(O[at]=null,G[at].disconnect(Mt))}ot=null,ft=null,S.reset();for(const at in y)delete y[at];t.setRenderTarget(D),x=null,g=null,_=null,o=null,N=null,Ut.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){u=at,a.isPresenting===!0&&he("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){h=at,a.isPresenting===!0&&he("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(at){m=at},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(at){if(o=at,o!==null){if(D=t.getRenderTarget(),o.addEventListener("select",k),o.addEventListener("selectstart",k),o.addEventListener("selectend",k),o.addEventListener("squeeze",k),o.addEventListener("squeezestart",k),o.addEventListener("squeezeend",k),o.addEventListener("end",L),o.addEventListener("inputsourceschange",B),C.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ot=null,ne=null;C.depth&&(ne=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,bt=C.stencil?kr:wa,Ot=C.stencil?cl:Ki);const ie={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:u};_=this.getBinding(),g=_.createProjectionLayer(ie),o.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Zi(g.textureWidth,g.textureHeight,{format:Pi,type:fi,depthTexture:new qs(g.textureWidth,g.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(o,n,bt),o.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),N=new Zi(x.framebufferWidth,x.framebufferHeight,{format:Pi,type:fi,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(h),Ut.setContext(o),Ut.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(at){for(let Mt=0;Mt<at.removed.length;Mt++){const bt=at.removed[Mt],Ot=O.indexOf(bt);Ot>=0&&(O[Ot]=null,G[Ot].disconnect(bt))}for(let Mt=0;Mt<at.added.length;Mt++){const bt=at.added[Mt];let Ot=O.indexOf(bt);if(Ot===-1){for(let ie=0;ie<G.length;ie++)if(ie>=O.length){O.push(bt),Ot=ie;break}else if(O[ie]===null){O[ie]=bt,Ot=ie;break}if(Ot===-1)break}const ne=G[Ot];ne&&ne.connect(bt)}}const it=new Y,dt=new Y;function yt(at,Mt,bt){it.setFromMatrixPosition(Mt.matrixWorld),dt.setFromMatrixPosition(bt.matrixWorld);const Ot=it.distanceTo(dt),ne=Mt.projectionMatrix.elements,ie=bt.projectionMatrix.elements,Se=ne[14]/(ne[10]-1),Vt=ne[14]/(ne[10]+1),pt=(ne[9]+1)/ne[5],wt=(ne[9]-1)/ne[5],Et=(ne[8]-1)/ne[0],Wt=(ie[8]+1)/ie[0],Bt=Se*Et,le=Se*Wt,H=Ot/(-Et+Wt),ue=H*-Et;if(Mt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(ue),at.translateZ(H),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),ne[10]===-1)at.projectionMatrix.copy(Mt.projectionMatrix),at.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const $t=Se+H,ce=Vt+H,At=Bt-ue,Le=le+(Ot-ue),U=pt*Vt/ce*$t,b=wt*Vt/ce*$t;at.projectionMatrix.makePerspective(At,Le,U,b,$t,ce),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function P(at,Mt){Mt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(Mt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(o===null)return;let Mt=at.near,bt=at.far;S.texture!==null&&(S.depthNear>0&&(Mt=S.depthNear),S.depthFar>0&&(bt=S.depthFar)),J.near=q.near=z.near=Mt,J.far=q.far=z.far=bt,(ot!==J.near||ft!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),ot=J.near,ft=J.far),J.layers.mask=at.layers.mask|6,z.layers.mask=J.layers.mask&-5,q.layers.mask=J.layers.mask&-3;const Ot=at.parent,ne=J.cameras;P(J,Ot);for(let ie=0;ie<ne.length;ie++)P(ne[ie],Ot);ne.length===2?yt(J,z,q):J.projectionMatrix.copy(z.projectionMatrix),K(at,J,Ot)};function K(at,Mt,bt){bt===null?at.matrix.copy(Mt.matrixWorld):(at.matrix.copy(bt.matrixWorld),at.matrix.invert(),at.matrix.multiply(Mt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(Mt.projectionMatrix),at.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=Mp*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(at){p=at,g!==null&&(g.fixedFoveation=at),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=at)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(at){return y[at]};let vt=null;function Ct(at,Mt){if(v=Mt.getViewerPose(m||c),E=Mt,v!==null){const bt=v.views;x!==null&&(t.setRenderTargetFramebuffer(N,x.framebuffer),t.setRenderTarget(N));let Ot=!1;bt.length!==J.cameras.length&&(J.cameras.length=0,Ot=!0);for(let Vt=0;Vt<bt.length;Vt++){const pt=bt[Vt];let wt=null;if(x!==null)wt=x.getViewport(pt);else{const Wt=_.getViewSubImage(g,pt);wt=Wt.viewport,Vt===0&&(t.setRenderTargetTextures(N,Wt.colorTexture,Wt.depthStencilTexture),t.setRenderTarget(N))}let Et=I[Vt];Et===void 0&&(Et=new Ei,Et.layers.enable(Vt),Et.viewport=new un,I[Vt]=Et),Et.matrix.fromArray(pt.transform.matrix),Et.matrix.decompose(Et.position,Et.quaternion,Et.scale),Et.projectionMatrix.fromArray(pt.projectionMatrix),Et.projectionMatrixInverse.copy(Et.projectionMatrix).invert(),Et.viewport.set(wt.x,wt.y,wt.width,wt.height),Vt===0&&(J.matrix.copy(Et.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ot===!0&&J.cameras.push(Et)}const ne=o.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=a.getBinding();const Vt=_.getDepthInformation(bt[0]);Vt&&Vt.isValid&&Vt.texture&&S.init(Vt,o.renderState)}if(ne&&ne.includes("camera-access")&&A){t.state.unbindTexture(),_=a.getBinding();for(let Vt=0;Vt<bt.length;Vt++){const pt=bt[Vt].camera;if(pt){let wt=y[pt];wt||(wt=new aS,y[pt]=wt);const Et=_.getCameraImage(pt);wt.sourceTexture=Et}}}}for(let bt=0;bt<G.length;bt++){const Ot=O[bt],ne=G[bt];Ot!==null&&ne!==void 0&&ne.update(Ot,Mt,m||c)}vt&&vt(at,Mt),Mt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Mt}),E=null}const Ut=new gS;Ut.setAnimationLoop(Ct),this.setAnimationLoop=function(at){vt=at},this.dispose=function(){}}}const l2=new sn,ES=new ge;ES.set(-1,0,0,0,1,0,0,0,1);function u2(r,t){function n(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,dS(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,C,D,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?u(S,y):y.isMeshLambertMaterial?(u(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(S,y),_(S,y)):y.isMeshPhongMaterial?(u(S,y),v(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(S,y),g(S,y),y.isMeshPhysicalMaterial&&x(S,y,N)):y.isMeshMatcapMaterial?(u(S,y),E(S,y)):y.isMeshDepthMaterial?u(S,y):y.isMeshDistanceMaterial?(u(S,y),A(S,y)):y.isMeshNormalMaterial?u(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&h(S,y)):y.isPointsMaterial?p(S,y,C,D):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,n(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Jn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,n(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Jn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,n(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,n(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const C=t.get(y),D=C.envMap,N=C.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(l2.makeRotationFromEuler(N)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(ES),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform))}function h(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function p(S,y,C,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*C,S.scale.value=D*.5,y.map&&(S.map.value=y.map,n(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,n(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,n(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,C){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Jn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=C.texture,S.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function A(S,y){const C=t.get(y).light;S.referencePosition.value.setFromMatrixPosition(C.matrixWorld),S.nearDistance.value=C.shadow.camera.near,S.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function c2(r,t,n,a){let o={},u={},c=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,D){const N=D.program;a.uniformBlockBinding(C,N)}function m(C,D){let N=o[C.id];N===void 0&&(E(C),N=v(C),o[C.id]=N,C.addEventListener("dispose",S));const G=D.program;a.updateUBOMapping(C,G);const O=t.render.frame;u[C.id]!==O&&(g(C),u[C.id]=O)}function v(C){const D=_();C.__bindingPointIndex=D;const N=r.createBuffer(),G=C.__size,O=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,G,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,N),N}function _(){for(let C=0;C<h;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const D=o[C.id],N=C.uniforms,G=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let O=0,F=N.length;O<F;O++){const T=Array.isArray(N[O])?N[O]:[N[O]];for(let z=0,q=T.length;z<q;z++){const I=T[z];if(x(I,O,z,G)===!0){const J=I.__offset,ot=Array.isArray(I.value)?I.value:[I.value];let ft=0;for(let k=0;k<ot.length;k++){const L=ot[k],B=A(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,J+ft,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):ArrayBuffer.isView(L)?I.__data.set(new L.constructor(L.buffer,L.byteOffset,I.__data.length)):(L.toArray(I.__data,ft),ft+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(C,D,N,G){const O=C.value,F=D+"_"+N;if(G[F]===void 0)return typeof O=="number"||typeof O=="boolean"?G[F]=O:ArrayBuffer.isView(O)?G[F]=O.slice():G[F]=O.clone(),!0;{const T=G[F];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return G[F]=O,!0}else{if(ArrayBuffer.isView(O))return!0;if(T.equals(O)===!1)return T.copy(O),!0}}return!1}function E(C){const D=C.uniforms;let N=0;const G=16;for(let F=0,T=D.length;F<T;F++){const z=Array.isArray(D[F])?D[F]:[D[F]];for(let q=0,I=z.length;q<I;q++){const J=z[q],ot=Array.isArray(J.value)?J.value:[J.value];for(let ft=0,k=ot.length;ft<k;ft++){const L=ot[ft],B=A(L),it=N%G,dt=it%B.boundary,yt=it+dt;N+=dt,yt!==0&&G-yt<B.storage&&(N+=G-yt),J.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=N,N+=B.storage}}}const O=N%G;return O>0&&(N+=G-O),C.__size=N,C.__cache={},this}function A(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?he("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(D.boundary=16,D.storage=C.byteLength):he("WebGLRenderer: Unsupported uniform value type.",C),D}function S(C){const D=C.target;D.removeEventListener("dispose",S);const N=c.indexOf(D.__bindingPointIndex);c.splice(N,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete u[D.id]}function y(){for(const C in o)r.deleteBuffer(o[C]);c=[],o={},u={}}return{bind:p,update:m,dispose:y}}const f2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function h2(){return ki===null&&(ki=new xT(f2,16,16,qr,Ca),ki.name="DFG_LUT",ki.minFilter=Bn,ki.magFilter=Bn,ki.wrapS=Ea,ki.wrapT=Ea,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class d2{constructor(t={}){const{canvas:n=Kb(),context:a=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:x=fi}=t;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=c;const A=x,S=new Set([Xp,kp,Vp]),y=new Set([fi,Ki,ul,cl,Hp,Gp]),C=new Uint32Array(4),D=new Int32Array(4),N=new Y;let G=null,O=null;const F=[],T=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let I=!1,J=null;this._outputColorSpace=Mi;let ot=0,ft=0,k=null,L=-1,B=null;const it=new un,dt=new un;let yt=null;const P=new Ie(0);let K=0,vt=n.width,Ct=n.height,Ut=1,at=null,Mt=null;const bt=new un(0,0,vt,Ct),Ot=new un(0,0,vt,Ct);let ne=!1;const ie=new Zp;let Se=!1,Vt=!1;const pt=new sn,wt=new Y,Et=new un,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function le(){return k===null?Ut:1}let H=a;function ue(R,Z){return n.getContext(R,Z)}try{const R={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Bp}`),n.addEventListener("webglcontextlost",Rt,!1),n.addEventListener("webglcontextrestored",te,!1),n.addEventListener("webglcontextcreationerror",fe,!1),H===null){const Z="webgl2";if(H=ue(Z,R),H===null)throw ue(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ue("WebGLRenderer: "+R.message),R}let $t,ce,At,Le,U,b,Q,_t,Tt,Lt,Pt,ut,ht,It,Ht,zt,Nt,de,pe,Me,X,Dt,gt;function qt(){$t=new hC(H),$t.init(),X=new i2(H,$t),ce=new aC(H,$t,t,X),At=new e2(H,$t),ce.reversedDepthBuffer&&g&&At.buffers.depth.setReversed(!0),Le=new mC(H),U=new G3,b=new n2(H,$t,At,U,ce,X,Le),Q=new fC(q),_t=new x1(H),Dt=new nC(H,_t),Tt=new dC(H,_t,Le,Dt),Lt=new vC(H,Tt,_t,Dt,Le),de=new gC(H,ce,b),Ht=new rC(U),Pt=new H3(q,Q,$t,ce,Dt,Ht),ut=new u2(q,U),ht=new k3,It=new j3($t),Nt=new eC(q,Q,At,Lt,E,p),zt=new t2(q,Lt,ce),gt=new c2(H,Le,ce,At),pe=new iC(H,$t,Le),Me=new pC(H,$t,Le),Le.programs=Pt.programs,q.capabilities=ce,q.extensions=$t,q.properties=U,q.renderLists=ht,q.shadowMap=zt,q.state=At,q.info=Le}qt(),A!==fi&&(z=new xC(A,n.width,n.height,o,u));const Ft=new o2(q,H);this.xr=Ft,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(R){R!==void 0&&(Ut=R,this.setSize(vt,Ct,!1))},this.getSize=function(R){return R.set(vt,Ct)},this.setSize=function(R,Z,rt=!0){if(Ft.isPresenting){he("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=R,Ct=Z,n.width=Math.floor(R*Ut),n.height=Math.floor(Z*Ut),rt===!0&&(n.style.width=R+"px",n.style.height=Z+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(vt*Ut,Ct*Ut).floor()},this.setDrawingBufferSize=function(R,Z,rt){vt=R,Ct=Z,Ut=rt,n.width=Math.floor(R*rt),n.height=Math.floor(Z*rt),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(A===fi){Ue("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){he("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(it)},this.getViewport=function(R){return R.copy(bt)},this.setViewport=function(R,Z,rt,et){R.isVector4?bt.set(R.x,R.y,R.z,R.w):bt.set(R,Z,rt,et),At.viewport(it.copy(bt).multiplyScalar(Ut).round())},this.getScissor=function(R){return R.copy(Ot)},this.setScissor=function(R,Z,rt,et){R.isVector4?Ot.set(R.x,R.y,R.z,R.w):Ot.set(R,Z,rt,et),At.scissor(dt.copy(Ot).multiplyScalar(Ut).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){At.setScissorTest(ne=R)},this.setOpaqueSort=function(R){at=R},this.setTransparentSort=function(R){Mt=R},this.getClearColor=function(R){return R.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,rt=!0){let et=0;if(R){let nt=!1;if(k!==null){const kt=k.texture.format;nt=S.has(kt)}if(nt){const kt=k.texture.type,jt=y.has(kt),Gt=Nt.getClearColor(),Jt=Nt.getClearAlpha(),Kt=Gt.r,re=Gt.g,ve=Gt.b;jt?(C[0]=Kt,C[1]=re,C[2]=ve,C[3]=Jt,H.clearBufferuiv(H.COLOR,0,C)):(D[0]=Kt,D[1]=re,D[2]=ve,D[3]=Jt,H.clearBufferiv(H.COLOR,0,D))}else et|=H.COLOR_BUFFER_BIT}Z&&(et|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(et|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&H.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),J=R},this.dispose=function(){n.removeEventListener("webglcontextlost",Rt,!1),n.removeEventListener("webglcontextrestored",te,!1),n.removeEventListener("webglcontextcreationerror",fe,!1),Nt.dispose(),ht.dispose(),It.dispose(),U.dispose(),Q.dispose(),Lt.dispose(),Dt.dispose(),gt.dispose(),Pt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",eo),Ft.removeEventListener("sessionend",no),Ln.stop()};function Rt(R){R.preventDefault(),l_("WebGLRenderer: Context Lost."),I=!0}function te(){l_("WebGLRenderer: Context Restored."),I=!1;const R=Le.autoReset,Z=zt.enabled,rt=zt.autoUpdate,et=zt.needsUpdate,nt=zt.type;qt(),Le.autoReset=R,zt.enabled=Z,zt.autoUpdate=rt,zt.needsUpdate=et,zt.type=nt}function fe(R){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function nn(R){const Z=R.target;Z.removeEventListener("dispose",nn),ze(Z)}function ze(R){hi(R),U.remove(R)}function hi(R){const Z=U.get(R).programs;Z!==void 0&&(Z.forEach(function(rt){Pt.releaseProgram(rt)}),R.isShaderMaterial&&Pt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,rt,et,nt,kt){Z===null&&(Z=Wt);const jt=nt.isMesh&&nt.matrixWorld.determinant()<0,Gt=Oa(R,Z,rt,et,nt);At.setMaterial(et,jt);let Jt=rt.index,Kt=1;if(et.wireframe===!0){if(Jt=Tt.getWireframeAttribute(rt),Jt===void 0)return;Kt=2}const re=rt.drawRange,ve=rt.attributes.position;let ae=re.start*Kt,Ne=(re.start+re.count)*Kt;kt!==null&&(ae=Math.max(ae,kt.start*Kt),Ne=Math.min(Ne,(kt.start+kt.count)*Kt)),Jt!==null?(ae=Math.max(ae,0),Ne=Math.min(Ne,Jt.count)):ve!=null&&(ae=Math.max(ae,0),Ne=Math.min(Ne,ve.count));const $e=Ne-ae;if($e<0||$e===1/0)return;Dt.setup(nt,et,Gt,rt,Jt);let je,He=pe;if(Jt!==null&&(je=_t.get(Jt),He=Me,He.setIndex(je)),nt.isMesh)et.wireframe===!0?(At.setLineWidth(et.wireframeLinewidth*le()),He.setMode(H.LINES)):He.setMode(H.TRIANGLES);else if(nt.isLine){let Ge=et.linewidth;Ge===void 0&&(Ge=1),At.setLineWidth(Ge*le()),nt.isLineSegments?He.setMode(H.LINES):nt.isLineLoop?He.setMode(H.LINE_LOOP):He.setMode(H.LINE_STRIP)}else nt.isPoints?He.setMode(H.POINTS):nt.isSprite&&He.setMode(H.TRIANGLES);if(nt.isBatchedMesh)if($t.get("WEBGL_multi_draw"))He.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const Ge=nt._multiDrawStarts,Zt=nt._multiDrawCounts,Nn=nt._multiDrawCount,Ee=Jt?_t.get(Jt).bytesPerElement:1,xn=U.get(et).currentProgram.getUniforms();for(let ti=0;ti<Nn;ti++)xn.setValue(H,"_gl_DrawID",ti),He.render(Ge[ti]/Ee,Zt[ti])}else if(nt.isInstancedMesh)He.renderInstances(ae,$e,nt.count);else if(rt.isInstancedBufferGeometry){const Ge=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Zt=Math.min(rt.instanceCount,Ge);He.renderInstances(ae,$e,Zt)}else He.render(ae,$e)};function $n(R,Z,rt){R.transparent===!0&&R.side===Ma&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Kr(R,Z,rt),R.side=mr,R.needsUpdate=!0,Kr(R,Z,rt),R.side=Ma):Kr(R,Z,rt)}this.compile=function(R,Z,rt=null){rt===null&&(rt=R),O=It.get(rt),O.init(Z),T.push(O),rt.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(O.pushLight(nt),nt.castShadow&&O.pushShadow(nt))}),R!==rt&&R.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(O.pushLight(nt),nt.castShadow&&O.pushShadow(nt))}),O.setupLights();const et=new Set;return R.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const kt=nt.material;if(kt)if(Array.isArray(kt))for(let jt=0;jt<kt.length;jt++){const Gt=kt[jt];$n(Gt,rt,nt),et.add(Gt)}else $n(kt,rt,nt),et.add(kt)}),O=T.pop(),et},this.compileAsync=function(R,Z,rt=null){const et=this.compile(R,Z,rt);return new Promise(nt=>{function kt(){if(et.forEach(function(jt){U.get(jt).currentProgram.isReady()&&et.delete(jt)}),et.size===0){nt(R);return}setTimeout(kt,10)}$t.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let gr=null;function to(R){gr&&gr(R)}function eo(){Ln.stop()}function no(){Ln.start()}const Ln=new gS;Ln.setAnimationLoop(to),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(R){gr=R,Ft.setAnimationLoop(R),R===null?Ln.stop():Ln.start()},Ft.addEventListener("sessionstart",eo),Ft.addEventListener("sessionend",no),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;J!==null&&J.renderStart(R,Z);const rt=Ft.enabled===!0&&Ft.isPresenting===!0,et=z!==null&&(k===null||rt)&&z.begin(q,k);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(Z),Z=Ft.getCamera()),R.isScene===!0&&R.onBeforeRender(q,R,Z,k),O=It.get(R,T.length),O.init(Z),O.state.textureUnits=b.getTextureUnits(),T.push(O),pt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ie.setFromProjectionMatrix(pt,qi,Z.reversedDepth),Vt=this.localClippingEnabled,Se=Ht.init(this.clippingPlanes,Vt),G=ht.get(R,F.length),G.init(),F.push(G),Ft.enabled===!0&&Ft.isPresenting===!0){const jt=q.xr.getDepthSensingMesh();jt!==null&&cn(jt,Z,-1/0,q.sortObjects)}cn(R,Z,0,q.sortObjects),G.finish(),q.sortObjects===!0&&G.sort(at,Mt),Bt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Bt&&Nt.addToRenderList(G,R),this.info.render.frame++,Se===!0&&Ht.beginShadows();const nt=O.state.shadowsArray;if(zt.render(nt,R,Z),Se===!0&&Ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&z.hasRenderPass())===!1){const jt=G.opaque,Gt=G.transmissive;if(O.setupLights(),Z.isArrayCamera){const Jt=Z.cameras;if(Gt.length>0)for(let Kt=0,re=Jt.length;Kt<re;Kt++){const ve=Jt[Kt];$i(jt,Gt,R,ve)}Bt&&Nt.render(R);for(let Kt=0,re=Jt.length;Kt<re;Kt++){const ve=Jt[Kt];Tn(G,R,ve,ve.viewport)}}else Gt.length>0&&$i(jt,Gt,R,Z),Bt&&Nt.render(R),Tn(G,R,Z)}k!==null&&ft===0&&(b.updateMultisampleRenderTarget(k),b.updateRenderTargetMipmap(k)),et&&z.end(q),R.isScene===!0&&R.onAfterRender(q,R,Z),Dt.resetDefaultState(),L=-1,B=null,T.pop(),T.length>0?(O=T[T.length-1],b.setTextureUnits(O.state.textureUnits),Se===!0&&Ht.setGlobalState(q.clippingPlanes,O.state.camera)):O=null,F.pop(),F.length>0?G=F[F.length-1]:G=null,J!==null&&J.renderEnd()};function cn(R,Z,rt,et){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLightProbeGrid)O.pushLightProbeGrid(R);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ie.intersectsSprite(R)){et&&Et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);const jt=Lt.update(R),Gt=R.material;Gt.visible&&G.push(R,jt,Gt,rt,Et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ie.intersectsObject(R))){const jt=Lt.update(R),Gt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Et.copy(R.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Et.copy(jt.boundingSphere.center)),Et.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(Gt)){const Jt=jt.groups;for(let Kt=0,re=Jt.length;Kt<re;Kt++){const ve=Jt[Kt],ae=Gt[ve.materialIndex];ae&&ae.visible&&G.push(R,jt,ae,rt,Et.z,ve)}}else Gt.visible&&G.push(R,jt,Gt,rt,Et.z,null)}}const kt=R.children;for(let jt=0,Gt=kt.length;jt<Gt;jt++)cn(kt[jt],Z,rt,et)}function Tn(R,Z,rt,et){const{opaque:nt,transmissive:kt,transparent:jt}=R;O.setupLightsView(rt),Se===!0&&Ht.setGlobalState(q.clippingPlanes,rt),et&&At.viewport(it.copy(et)),nt.length>0&&La(nt,Z,rt),kt.length>0&&La(kt,Z,rt),jt.length>0&&La(jt,Z,rt),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function $i(R,Z,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[et.id]===void 0){const ae=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[et.id]=new Zi(1,1,{generateMipmaps:!0,type:ae?Ca:fi,minFilter:Vr,samples:Math.max(4,ce.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace})}const kt=O.state.transmissionRenderTarget[et.id],jt=et.viewport||it;kt.setSize(jt.z*q.transmissionResolutionScale,jt.w*q.transmissionResolutionScale);const Gt=q.getRenderTarget(),Jt=q.getActiveCubeFace(),Kt=q.getActiveMipmapLevel();q.setRenderTarget(kt),q.getClearColor(P),K=q.getClearAlpha(),K<1&&q.setClearColor(16777215,.5),q.clear(),Bt&&Nt.render(rt);const re=q.toneMapping;q.toneMapping=Yi;const ve=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),O.setupLightsView(et),Se===!0&&Ht.setGlobalState(q.clippingPlanes,et),La(R,rt,et),b.updateMultisampleRenderTarget(kt),b.updateRenderTargetMipmap(kt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let ae=!1;for(let Ne=0,$e=Z.length;Ne<$e;Ne++){const je=Z[Ne],{object:He,geometry:Ge,material:Zt,group:Nn}=je;if(Zt.side===Ma&&He.layers.test(et.layers)){const Ee=Zt.side;Zt.side=Jn,Zt.needsUpdate=!0,yl(He,rt,et,Ge,Zt,Nn),Zt.side=Ee,Zt.needsUpdate=!0,ae=!0}}ae===!0&&(b.updateMultisampleRenderTarget(kt),b.updateRenderTargetMipmap(kt))}q.setRenderTarget(Gt,Jt,Kt),q.setClearColor(P,K),ve!==void 0&&(et.viewport=ve),q.toneMapping=re}function La(R,Z,rt){const et=Z.isScene===!0?Z.overrideMaterial:null;for(let nt=0,kt=R.length;nt<kt;nt++){const jt=R[nt],{object:Gt,geometry:Jt,group:Kt}=jt;let re=jt.material;re.allowOverride===!0&&et!==null&&(re=et),Gt.layers.test(rt.layers)&&yl(Gt,Z,rt,Jt,re,Kt)}}function yl(R,Z,rt,et,nt,kt){R.onBeforeRender(q,Z,rt,et,nt,kt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),nt.onBeforeRender(q,Z,rt,et,R,kt),nt.transparent===!0&&nt.side===Ma&&nt.forceSinglePass===!1?(nt.side=Jn,nt.needsUpdate=!0,q.renderBufferDirect(rt,Z,et,nt,R,kt),nt.side=mr,nt.needsUpdate=!0,q.renderBufferDirect(rt,Z,et,nt,R,kt),nt.side=Ma):q.renderBufferDirect(rt,Z,et,nt,R,kt),R.onAfterRender(q,Z,rt,et,nt,kt)}function Kr(R,Z,rt){Z.isScene!==!0&&(Z=Wt);const et=U.get(R),nt=O.state.lights,kt=O.state.shadowsArray,jt=nt.state.version,Gt=Pt.getParameters(R,nt.state,kt,Z,rt,O.state.lightProbeGridArray),Jt=Pt.getProgramCacheKey(Gt);let Kt=et.programs;et.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,et.fog=Z.fog;const re=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;et.envMap=Q.get(R.envMap||et.environment,re),et.envMapRotation=et.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Kt===void 0&&(R.addEventListener("dispose",nn),Kt=new Map,et.programs=Kt);let ve=Kt.get(Jt);if(ve!==void 0){if(et.currentProgram===ve&&et.lightsStateVersion===jt)return Na(R,Gt),ve}else Gt.uniforms=Pt.getUniforms(R),J!==null&&R.isNodeMaterial&&J.build(R,rt,Gt),R.onBeforeCompile(Gt,q),ve=Pt.acquireProgram(Gt,Jt),Kt.set(Jt,ve),et.uniforms=Gt.uniforms;const ae=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ae.clippingPlanes=Ht.uniform),Na(R,Gt),et.needsLights=vr(R),et.lightsStateVersion=jt,et.needsLights&&(ae.ambientLightColor.value=nt.state.ambient,ae.lightProbe.value=nt.state.probe,ae.directionalLights.value=nt.state.directional,ae.directionalLightShadows.value=nt.state.directionalShadow,ae.spotLights.value=nt.state.spot,ae.spotLightShadows.value=nt.state.spotShadow,ae.rectAreaLights.value=nt.state.rectArea,ae.ltc_1.value=nt.state.rectAreaLTC1,ae.ltc_2.value=nt.state.rectAreaLTC2,ae.pointLights.value=nt.state.point,ae.pointLightShadows.value=nt.state.pointShadow,ae.hemisphereLights.value=nt.state.hemi,ae.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,ae.spotLightMatrix.value=nt.state.spotLightMatrix,ae.spotLightMap.value=nt.state.spotLightMap,ae.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=O.state.lightProbeGridArray.length>0,et.currentProgram=ve,et.uniformsList=null,ve}function io(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=dc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function Na(R,Z){const rt=U.get(R);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function ao(R,Z){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;N.setFromMatrixPosition(Z.matrixWorld);for(let rt=0,et=R.length;rt<et;rt++){const nt=R[rt];if(nt.texture!==null&&nt.boundingBox.containsPoint(N))return nt}return null}function Oa(R,Z,rt,et,nt){Z.isScene!==!0&&(Z=Wt),b.resetTextureUnits();const kt=Z.fog,jt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?Z.environment:null,Gt=k===null?q.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:De.workingColorSpace,Jt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Kt=Q.get(et.envMap||jt,Jt),re=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ve=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),ae=!!rt.morphAttributes.position,Ne=!!rt.morphAttributes.normal,$e=!!rt.morphAttributes.color;let je=Yi;et.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(je=q.toneMapping);const He=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ge=He!==void 0?He.length:0,Zt=U.get(et),Nn=O.state.lights;if(Se===!0&&(Vt===!0||R!==B)){const Be=R===B&&et.id===L;Ht.setState(et,R,Be)}let Ee=!1;et.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Nn.state.version||Zt.outputColorSpace!==Gt||nt.isBatchedMesh&&Zt.batching===!1||!nt.isBatchedMesh&&Zt.batching===!0||nt.isBatchedMesh&&Zt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Zt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Zt.instancing===!1||!nt.isInstancedMesh&&Zt.instancing===!0||nt.isSkinnedMesh&&Zt.skinning===!1||!nt.isSkinnedMesh&&Zt.skinning===!0||nt.isInstancedMesh&&Zt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Zt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Zt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Zt.instancingMorph===!1&&nt.morphTexture!==null||Zt.envMap!==Kt||et.fog===!0&&Zt.fog!==kt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Ht.numPlanes||Zt.numIntersection!==Ht.numIntersection)||Zt.vertexAlphas!==re||Zt.vertexTangents!==ve||Zt.morphTargets!==ae||Zt.morphNormals!==Ne||Zt.morphColors!==$e||Zt.toneMapping!==je||Zt.morphTargetsCount!==Ge||!!Zt.lightProbeGrid!=O.state.lightProbeGridArray.length>0)&&(Ee=!0):(Ee=!0,Zt.__version=et.version);let xn=Zt.currentProgram;Ee===!0&&(xn=Kr(et,Z,nt),J&&et.isNodeMaterial&&J.onUpdateProgram(et,xn,Zt));let ti=!1,Ai=!1,ei=!1;const Ve=xn.getUniforms(),tn=Zt.uniforms;if(At.useProgram(xn.program)&&(ti=!0,Ai=!0,ei=!0),et.id!==L&&(L=et.id,Ai=!0),Zt.needsLights){const Be=ao(O.state.lightProbeGridArray,nt);Zt.lightProbeGrid!==Be&&(Zt.lightProbeGrid=Be,Ai=!0)}if(ti||B!==R){At.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ve.setValue(H,"projectionMatrix",R.projectionMatrix),Ve.setValue(H,"viewMatrix",R.matrixWorldInverse);const Fi=Ve.map.cameraPosition;Fi!==void 0&&Fi.setValue(H,wt.setFromMatrixPosition(R.matrixWorld)),ce.logarithmicDepthBuffer&&Ve.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ve.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),B!==R&&(B=R,Ai=!0,ei=!0)}if(Zt.needsLights&&(Nn.state.directionalShadowMap.length>0&&Ve.setValue(H,"directionalShadowMap",Nn.state.directionalShadowMap,b),Nn.state.spotShadowMap.length>0&&Ve.setValue(H,"spotShadowMap",Nn.state.spotShadowMap,b),Nn.state.pointShadowMap.length>0&&Ve.setValue(H,"pointShadowMap",Nn.state.pointShadowMap,b)),nt.isSkinnedMesh){Ve.setOptional(H,nt,"bindMatrix"),Ve.setOptional(H,nt,"bindMatrixInverse");const Be=nt.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Ve.setValue(H,"boneTexture",Be.boneTexture,b))}nt.isBatchedMesh&&(Ve.setOptional(H,nt,"batchingTexture"),Ve.setValue(H,"batchingTexture",nt._matricesTexture,b),Ve.setOptional(H,nt,"batchingIdTexture"),Ve.setValue(H,"batchingIdTexture",nt._indirectTexture,b),Ve.setOptional(H,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Ve.setValue(H,"batchingColorTexture",nt._colorsTexture,b));const Ri=rt.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&de.update(nt,rt,xn),(Ai||Zt.receiveShadow!==nt.receiveShadow)&&(Zt.receiveShadow=nt.receiveShadow,Ve.setValue(H,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&Z.environment!==null&&(tn.envMapIntensity.value=Z.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=h2()),Ai){if(Ve.setValue(H,"toneMappingExposure",q.toneMappingExposure),Zt.needsLights&&Pa(tn,ei),kt&&et.fog===!0&&ut.refreshFogUniforms(tn,kt),ut.refreshMaterialUniforms(tn,et,Ut,Ct,O.state.transmissionRenderTarget[R.id]),Zt.needsLights&&Zt.lightProbeGrid){const Be=Zt.lightProbeGrid;tn.probesSH.value=Be.texture,tn.probesMin.value.copy(Be.boundingBox.min),tn.probesMax.value.copy(Be.boundingBox.max),tn.probesResolution.value.copy(Be.resolution)}dc.upload(H,io(Zt),tn,b)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(dc.upload(H,io(Zt),tn,b),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ve.setValue(H,"center",nt.center),Ve.setValue(H,"modelViewMatrix",nt.modelViewMatrix),Ve.setValue(H,"normalMatrix",nt.normalMatrix),Ve.setValue(H,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){const Be=et.uniformsGroups;for(let Fi=0,Fa=Be.length;Fi<Fa;Fi++){const _r=Be[Fi];gt.update(_r,xn),gt.bind(_r,xn)}}return xn}function Pa(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function vr(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return ft},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(R,Z,rt){const et=U.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),U.get(R.texture).__webglTexture=Z,U.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const rt=U.get(R);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const za=H.createFramebuffer();this.setRenderTarget=function(R,Z=0,rt=0){k=R,ot=Z,ft=rt;let et=null,nt=!1,kt=!1;if(R){const Gt=U.get(R);if(Gt.__useDefaultFramebuffer!==void 0){At.bindFramebuffer(H.FRAMEBUFFER,Gt.__webglFramebuffer),it.copy(R.viewport),dt.copy(R.scissor),yt=R.scissorTest,At.viewport(it),At.scissor(dt),At.setScissorTest(yt),L=-1;return}else if(Gt.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(Gt.__hasExternalTextures)b.rebindTextures(R,U.get(R.texture).__webglTexture,U.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const re=R.depthTexture;if(Gt.__boundDepthTexture!==re){if(re!==null&&U.has(re)&&(R.width!==re.image.width||R.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(kt=!0);const Kt=U.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[Z])?et=Kt[Z][rt]:et=Kt[Z],nt=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?et=U.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?et=Kt[rt]:et=Kt,it.copy(R.viewport),dt.copy(R.scissor),yt=R.scissorTest}else it.copy(bt).multiplyScalar(Ut).floor(),dt.copy(Ot).multiplyScalar(Ut).floor(),yt=ne;if(rt!==0&&(et=za),At.bindFramebuffer(H.FRAMEBUFFER,et)&&At.drawBuffers(R,et),At.viewport(it),At.scissor(dt),At.setScissorTest(yt),nt){const Gt=U.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Gt.__webglTexture,rt)}else if(kt){const Gt=Z;for(let Jt=0;Jt<R.textures.length;Jt++){const Kt=U.get(R.textures[Jt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Jt,Kt.__webglTexture,rt,Gt)}}else if(R!==null&&rt!==0){const Gt=U.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gt.__webglTexture,rt)}L=-1},this.readRenderTargetPixels=function(R,Z,rt,et,nt,kt,jt,Gt=0){if(!(R&&R.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=U.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt){At.bindFramebuffer(H.FRAMEBUFFER,Jt);try{const Kt=R.textures[Gt],re=Kt.format,ve=Kt.type;if(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Gt),!ce.textureFormatReadable(re)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(ve)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-et&&rt>=0&&rt<=R.height-nt&&H.readPixels(Z,rt,et,nt,X.convert(re),X.convert(ve),kt)}finally{const Kt=k!==null?U.get(k).__webglFramebuffer:null;At.bindFramebuffer(H.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(R,Z,rt,et,nt,kt,jt,Gt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=U.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&jt!==void 0&&(Jt=Jt[jt]),Jt)if(Z>=0&&Z<=R.width-et&&rt>=0&&rt<=R.height-nt){At.bindFramebuffer(H.FRAMEBUFFER,Jt);const Kt=R.textures[Gt],re=Kt.format,ve=Kt.type;if(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Gt),!ce.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ae=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.bufferData(H.PIXEL_PACK_BUFFER,kt.byteLength,H.STREAM_READ),H.readPixels(Z,rt,et,nt,X.convert(re),X.convert(ve),0);const Ne=k!==null?U.get(k).__webglFramebuffer:null;At.bindFramebuffer(H.FRAMEBUFFER,Ne);const $e=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Jb(H,$e,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ae),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,kt),H.deleteBuffer(ae),H.deleteSync($e),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,rt=0){const et=Math.pow(2,-rt),nt=Math.floor(R.image.width*et),kt=Math.floor(R.image.height*et),jt=Z!==null?Z.x:0,Gt=Z!==null?Z.y:0;b.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,jt,Gt,nt,kt),At.unbindTexture()};const dn=H.createFramebuffer(),Ml=H.createFramebuffer();this.copyTextureToTexture=function(R,Z,rt=null,et=null,nt=0,kt=0){let jt,Gt,Jt,Kt,re,ve,ae,Ne,$e;const je=R.isCompressedTexture?R.mipmaps[kt]:R.image;if(rt!==null)jt=rt.max.x-rt.min.x,Gt=rt.max.y-rt.min.y,Jt=rt.isBox3?rt.max.z-rt.min.z:1,Kt=rt.min.x,re=rt.min.y,ve=rt.isBox3?rt.min.z:0;else{const tn=Math.pow(2,-nt);jt=Math.floor(je.width*tn),Gt=Math.floor(je.height*tn),R.isDataArrayTexture?Jt=je.depth:R.isData3DTexture?Jt=Math.floor(je.depth*tn):Jt=1,Kt=0,re=0,ve=0}et!==null?(ae=et.x,Ne=et.y,$e=et.z):(ae=0,Ne=0,$e=0);const He=X.convert(Z.format),Ge=X.convert(Z.type);let Zt;Z.isData3DTexture?(b.setTexture3D(Z,0),Zt=H.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(b.setTexture2DArray(Z,0),Zt=H.TEXTURE_2D_ARRAY):(b.setTexture2D(Z,0),Zt=H.TEXTURE_2D),At.activeTexture(H.TEXTURE0),At.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Z.flipY),At.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),At.pixelStorei(H.UNPACK_ALIGNMENT,Z.unpackAlignment);const Nn=At.getParameter(H.UNPACK_ROW_LENGTH),Ee=At.getParameter(H.UNPACK_IMAGE_HEIGHT),xn=At.getParameter(H.UNPACK_SKIP_PIXELS),ti=At.getParameter(H.UNPACK_SKIP_ROWS),Ai=At.getParameter(H.UNPACK_SKIP_IMAGES);At.pixelStorei(H.UNPACK_ROW_LENGTH,je.width),At.pixelStorei(H.UNPACK_IMAGE_HEIGHT,je.height),At.pixelStorei(H.UNPACK_SKIP_PIXELS,Kt),At.pixelStorei(H.UNPACK_SKIP_ROWS,re),At.pixelStorei(H.UNPACK_SKIP_IMAGES,ve);const ei=R.isDataArrayTexture||R.isData3DTexture,Ve=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const tn=U.get(R),Ri=U.get(Z),Be=U.get(tn.__renderTarget),Fi=U.get(Ri.__renderTarget);At.bindFramebuffer(H.READ_FRAMEBUFFER,Be.__webglFramebuffer),At.bindFramebuffer(H.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Fa=0;Fa<Jt;Fa++)ei&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,U.get(R).__webglTexture,nt,ve+Fa),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,U.get(Z).__webglTexture,kt,$e+Fa)),H.blitFramebuffer(Kt,re,jt,Gt,ae,Ne,jt,Gt,H.DEPTH_BUFFER_BIT,H.NEAREST);At.bindFramebuffer(H.READ_FRAMEBUFFER,null),At.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(nt!==0||R.isRenderTargetTexture||U.has(R)){const tn=U.get(R),Ri=U.get(Z);At.bindFramebuffer(H.READ_FRAMEBUFFER,dn),At.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ml);for(let Be=0;Be<Jt;Be++)ei?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,tn.__webglTexture,nt,ve+Be):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,tn.__webglTexture,nt),Ve?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ri.__webglTexture,kt,$e+Be):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ri.__webglTexture,kt),nt!==0?H.blitFramebuffer(Kt,re,jt,Gt,ae,Ne,jt,Gt,H.COLOR_BUFFER_BIT,H.NEAREST):Ve?H.copyTexSubImage3D(Zt,kt,ae,Ne,$e+Be,Kt,re,jt,Gt):H.copyTexSubImage2D(Zt,kt,ae,Ne,Kt,re,jt,Gt);At.bindFramebuffer(H.READ_FRAMEBUFFER,null),At.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ve?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Zt,kt,ae,Ne,$e,jt,Gt,Jt,He,Ge,je.data):Z.isCompressedArrayTexture?H.compressedTexSubImage3D(Zt,kt,ae,Ne,$e,jt,Gt,Jt,He,je.data):H.texSubImage3D(Zt,kt,ae,Ne,$e,jt,Gt,Jt,He,Ge,je):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,kt,ae,Ne,jt,Gt,He,Ge,je.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,kt,ae,Ne,je.width,je.height,He,je.data):H.texSubImage2D(H.TEXTURE_2D,kt,ae,Ne,jt,Gt,He,Ge,je);At.pixelStorei(H.UNPACK_ROW_LENGTH,Nn),At.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ee),At.pixelStorei(H.UNPACK_SKIP_PIXELS,xn),At.pixelStorei(H.UNPACK_SKIP_ROWS,ti),At.pixelStorei(H.UNPACK_SKIP_IMAGES,Ai),kt===0&&Z.generateMipmaps&&H.generateMipmap(Zt),At.unbindTexture()},this.initRenderTarget=function(R){U.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),At.unbindTexture()},this.resetState=function(){ot=0,ft=0,k=null,At.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),n.unpackColorSpace=De._getUnpackColorSpace()}}function p2(){const t=document.createElement("canvas");t.width=64,t.height=64;const n=t.getContext("2d"),a=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(255,255,255,0.5)"),a.addColorStop(.7,"rgba(255,255,255,0.1)"),a.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=a,n.fillRect(0,0,64,64),t}function wd(r,t){const n=r.geometry,a=n.attributes.position,o=n.attributes.normal,u=n.index,c=new Float32Array(t*3),h=new Float32Array(t*3),p=[],m=[],v=u?u.count/3:a.count/3;for(let g=0;g<v;g++){let x,E,A;u?(x=u.getX(g*3),E=u.getX(g*3+1),A=u.getX(g*3+2)):(x=g*3,E=g*3+1,A=g*3+2);const S=new Y().fromBufferAttribute(a,x),y=new Y().fromBufferAttribute(a,E),C=new Y().fromBufferAttribute(a,A),D=new Y().subVectors(y,S),N=new Y().subVectors(C,S),G=D.cross(N).length()*.5,O=new Y().fromBufferAttribute(o,x),F=new Y().fromBufferAttribute(o,E),T=new Y().fromBufferAttribute(o,A);p.push(G),m.push({ia:x,ib:E,ic:A,fn:O.add(F).add(T).normalize().clone()})}const _=p.reduce((g,x)=>g+x,0)||1;for(let g=0;g<t;g++){let x=Math.random()*_,E=0;for(let ot=0;ot<p.length;ot++)if(x-=p[ot],x<=0){E=ot;break}const{ia:A,ib:S,ic:y,fn:C}=m[E],D=new Y().fromBufferAttribute(a,A),N=new Y().fromBufferAttribute(a,S),G=new Y().fromBufferAttribute(a,y);let O=Math.random(),F=Math.random();O+F>1&&(O=1-O,F=1-F);const T=1-O-F,z=new Y().addScaledVector(D,T).addScaledVector(N,O).addScaledVector(G,F);c[g*3]=z.x,c[g*3+1]=z.y,c[g*3+2]=z.z;const q=Math.max(0,C.y),I=Math.max(0,C.x),J=.3+q*.4+I*.3;h[g*3]=J,h[g*3+1]=J,h[g*3+2]=J}return{coords:c,colors:h}}function lx(r,t,n){const a=new Cc,o=Math.PI*2/n,u=Math.PI/n,c=[];for(let p=0;p<n;p++){const m=p*o+u;c.push(new Xt(Math.cos(m)*r,Math.sin(m)*r))}a.setFromPoints(c);const h=new Jp(a,{steps:1,depth:t,bevelEnabled:!1});return h.rotateX(-Math.PI/2),h.center(),h}function m2(r,t,n,a,o){const u=[],c=[],h=lx(r,n,8),p=new bi(h);p.position.y=-o;const m=lx(t,a,8),v=new bi(m);v.position.y=o;const _=new Cc,g=Math.PI*2/8,x=Math.PI/8,E=[];for(let L=0;L<8;L++){const B=L*g+x;E.push(new Xt(Math.cos(B)*t,Math.sin(B)*t))}_.setFromPoints(E);const A=new Qp(_);A.rotateX(-Math.PI/2);const S=new bi(A);S.position.y=a+o;const y=400,C=250,D=100,{coords:N,colors:G}=wd(p,y),{coords:O,colors:F}=wd(v,C),{coords:T,colors:z}=wd(S,D);for(let L=0;L<y;L++)u.push(N[L*3],N[L*3+1],N[L*3+2]),c.push(G[L*3],G[L*3+1],G[L*3+2]);for(let L=0;L<C;L++)u.push(O[L*3],O[L*3+1],O[L*3+2]),c.push(F[L*3],F[L*3+1],F[L*3+2]);for(let L=0;L<D;L++)u.push(T[L*3],T[L*3+1],T[L*3+2]),c.push(z[L*3],z[L*3+1],z[L*3+2]);const q=o+a/2,I=a*.6;for(let L=0;L<30;L++){const B=Math.random()*Math.PI*2,it=t*.05;u.push(Math.cos(B)*it,q+Math.random()*I,Math.sin(B)*it),c.push(.95,.75,.35)}const J=q+I;for(let L=0;L<15;L++){const B=Math.random()*Math.PI*2,it=t*.03;u.push(Math.cos(B)*it,J+Math.random()*I*.4,Math.sin(B)*it),c.push(1,.45+Math.random()*.25,Math.random()*.15)}const ot=u.length/3,ft=new Float32Array(u),k=new Float32Array(c);return{coords:ft,colors:k,total:ot,candleCount:30,flameCount:15,rTop:t,hTop:a,layerGap:o}}const ac=60,g2=.21,Dd=40;function v2(){const r=ct.useRef(null),t=ct.useRef(null),n=ct.useRef(null),a=ct.useCallback(()=>{const h=r.current;if(!h)return;const p=window.innerWidth,m=window.innerHeight,v=Math.min(window.devicePixelRatio||1,2),_=new d2({alpha:!0,antialias:!0,powerPreference:"high-performance"});_.setPixelRatio(v),_.setSize(p,m),_.setClearColor(0,0),_.domElement.style.display="block",_.domElement.style.position="absolute",_.domElement.style.top="0",_.domElement.style.left="0",_.domElement.style.width="100%",_.domElement.style.height="100%",h.appendChild(_.domElement);const g=new dT,x=new Ei(40,p/m,10,2e3);x.position.set(0,200,550),x.lookAt(0,0,0),g.add(new m1(3359846,.7));const E=new p1(16777215,1.2);E.position.set(.5,-.3,-1),g.add(E);const A=Math.min(p,m),S=Math.max(p,m),y=A*.35,C=S*.5,D=y*.5,N=y*.38,G=C*.52,O=C*.4,F=C*.04,T=new Vs;T.position.y=-60,g.add(T);const{coords:z,colors:q,total:I,candleCount:J,flameCount:ot}=m2(D,N,G,O,F),ft=p2(),k=new ET(ft);k.needsUpdate=!0;const L=new kn;L.setAttribute("position",new Fn(z,3)),L.setAttribute("color",new Fn(q,3));const B=L.attributes.color.array,it=L.attributes.position.array,dt=I-J-ot;for(let Vt=0;Vt<dt;Vt++){const pt=B[Vt*3];it[Vt*3+1]<0?(B[Vt*3]=.9+pt*.1,B[Vt*3+1]=.92+pt*.08,B[Vt*3+2]=1):(B[Vt*3]=.88+pt*.12,B[Vt*3+1]=.95+pt*.05,B[Vt*3+2]=1)}L.attributes.color.needsUpdate=!0;const yt=new hc({size:4.5,map:k,blending:Xr,depthWrite:!1,vertexColors:!0,transparent:!0,opacity:.95}),P=new _d(L,yt);T.add(P);const K=new Vs,vt=new Float32Array(ac*3),Ct=new Float32Array(ac*3),Ut=[];for(let Vt=0;Vt<ac;Vt++){const pt=Math.floor(Math.random()*dt);vt[Vt*3]=z[pt*3],vt[Vt*3+1]=z[pt*3+1],vt[Vt*3+2]=z[pt*3+2],Ct[Vt*3]=.5,Ct[Vt*3+1]=.7,Ct[Vt*3+2]=1,Ut.push({baseIdx:pt,life:Math.random()*3,maxLife:2+Math.random()*3,vy:-10-Math.random()*25,vx:(Math.random()-.5)*6,phase:Math.random()*Math.PI*2})}const at=new kn;at.setAttribute("position",new Fn(vt,3)),at.setAttribute("color",new Fn(Ct,3));const Mt=new hc({size:2.5,map:k,blending:gc,depthWrite:!1,vertexColors:!0,transparent:!0,opacity:.6}),bt=new _d(at,Mt);K.add(bt),T.add(K);const Ot=new Float32Array(Dd*3),ne=new Float32Array(Dd*3);for(let Vt=0;Vt<Dd;Vt++){const pt=Math.random()*Math.PI*2,wt=150+Math.random()*200;Ot[Vt*3]=Math.cos(pt)*wt,Ot[Vt*3+1]=(Math.random()-.5)*250,Ot[Vt*3+2]=Math.sin(pt)*wt,ne[Vt*3]=1,ne[Vt*3+1]=1,ne[Vt*3+2]=1}const ie=new kn;ie.setAttribute("position",new Fn(Ot,3)),ie.setAttribute("color",new Fn(ne,3));const Se=new hc({size:2,map:k,blending:gc,depthWrite:!1,vertexColors:!0,transparent:!0,opacity:.8});g.add(new _d(ie,Se)),t.current={renderer:_,scene:g,camera:x,starMat:Se,cakeGroup:T,particles:P,particleMat:yt,floaterGroup:K,floaterPoints:bt,floaterData:Ut,floaterCoords:vt,floaterColors:Ct,total:I,flameCount:ot,candleCount:J,cakeEnd:dt,coords:z,rBot:D,rTop:N,hBot:G,hTop:O,layerGap:F,rotation:0,elapsed:0,interaction:{touching:!1,scatterProgress:0,targetProgress:0,returnTimer:0}}},[]),o=ct.useCallback(()=>{const h=t.current;if(!h)return;h.elapsed+=.016,h.rotation+=g2*.016,h.cakeGroup.rotation.y=h.rotation;const p=h.interaction,m=p.touching?3:1.5;if(p.touching?p.targetProgress=1:(p.returnTimer+=.016,p.returnTimer>.6&&(p.targetProgress=0)),p.scatterProgress+=(p.targetProgress-p.scatterProgress)*Math.min(m*.016,1),p.scatterProgress>.001){const g=h.particles.geometry.attributes.position.array;for(let x=0;x<h.total;x++){const E=h.coords[x*3],A=h.coords[x*3+1],S=h.coords[x*3+2],y=Math.sqrt(E*E+A*A+S*S)||1,C=p.scatterProgress*h.rBot*.5;g[x*3]=E+E/y*C,g[x*3+1]=A+A/y*C*.6,g[x*3+2]=S+S/y*C}h.particles.geometry.attributes.position.needsUpdate=!0}else if(p.targetProgress===0){const g=h.particles.geometry.attributes.position.array;for(let x=0;x<h.total;x++)g[x*3]+=(h.coords[x*3]-g[x*3])*.15,g[x*3+1]+=(h.coords[x*3+1]-g[x*3+1])*.15,g[x*3+2]+=(h.coords[x*3+2]-g[x*3+2])*.15;h.particles.geometry.attributes.position.needsUpdate=!0}const v=h.floaterCoords;for(let g=0;g<ac;g++){const x=h.floaterData[g];x.life+=.016;const E=h.coords[x.baseIdx*3],A=h.coords[x.baseIdx*3+1],S=h.coords[x.baseIdx*3+2];v[g*3]=E+x.vx*x.life+Math.sin(h.elapsed*1.5+x.phase)*8,v[g*3+1]=A+x.vy*x.life,v[g*3+2]=S+Math.cos(h.elapsed*1.5+x.phase)*6,h.floaterColors[g*3+1]=.7*(1-x.life/x.maxLife),x.life>=x.maxLife&&(x.life=0,x.baseIdx=Math.floor(Math.random()*h.cakeEnd),x.vy=-10-Math.random()*25,x.vx=(Math.random()-.5)*6,x.maxLife=2+Math.random()*3,x.phase=Math.random()*Math.PI*2)}h.floaterPoints.geometry.attributes.position.needsUpdate=!0,h.floaterPoints.geometry.attributes.color.needsUpdate=!0;const _=h.flameCount||15;if(_>0){const g=h.particles.geometry.attributes.position.array;for(let x=h.total-_;x<h.total;x++)g[x*3+1]+=Math.sin(h.elapsed*10+x*2)*1.5,g[x*3]+=Math.cos(h.elapsed*8+x)*.5;h.particles.geometry.attributes.position.needsUpdate=!0}h.starMat.opacity=.5+Math.sin(h.elapsed*1.5)*.2,h.renderer.render(h.scene,h.camera),n.current=requestAnimationFrame(o)},[]),u=ct.useCallback(()=>{const h=t.current;h&&(h.interaction.touching=!0,h.interaction.returnTimer=0)},[]),c=ct.useCallback(()=>{const h=t.current;h&&(h.interaction.touching=!1)},[]);return ct.useEffect(()=>{a(),n.current=requestAnimationFrame(o);const h=()=>{const p=t.current;if(!p)return;const m=window.innerWidth,v=window.innerHeight;p.camera.aspect=m/v,p.camera.updateProjectionMatrix(),p.renderer.setSize(m,v)};return window.addEventListener("resize",h),()=>{n.current&&cancelAnimationFrame(n.current),window.removeEventListener("resize",h);const p=t.current;p&&(p.renderer.dispose(),p.renderer.domElement.remove())}},[a,o]),Vn.jsx("div",{ref:r,style:{position:"absolute",inset:0,zIndex:3,pointerEvents:"auto",touchAction:"none"},onTouchStart:h=>{h.preventDefault(),u()},onTouchEnd:h=>{h.preventDefault(),c()},onMouseDown:u,onMouseUp:c,onMouseLeave:c})}function ux(){const[r,t]=ct.useState(!1);return ct.useEffect(()=>{const n=()=>t(window.innerHeight>window.innerWidth);return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),Vn.jsxs("div",{style:{position:"fixed",width:r?"100vh":"100vw",height:r?"100vw":"100vh",top:r?"calc((100vh - 100vw) / 2)":0,left:r?"calc((100vw - 100vh) / 2)":0,transform:r?"rotate(90deg)":"none",transformOrigin:"center center",overflow:"hidden",background:"#06060F",zIndex:9999},children:[Vn.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,background:"radial-gradient(ellipse at 50% 45%, #12082a 0%, #0a0618 35%, #06060F 100%)"}}),Vn.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,pointerEvents:"none",background:["radial-gradient(circle at 30% 35%, rgba(168,85,247,0.10) 0%, transparent 70%)","radial-gradient(circle at 70% 60%, rgba(56,189,248,0.08) 0%, transparent 50%)","radial-gradient(circle at 50% 15%, rgba(236,72,153,0.06) 0%, transparent 40%)"].join(",")}}),Vn.jsx("div",{className:"cosmic-stars"}),Vn.jsx(v2,{}),Vn.jsx("style",{children:`
        .cosmic-stars {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
        }
        .cosmic-stars::after {
          content: ''; position: absolute; width: 1px; height: 1px; background: white;
          box-shadow:
            10vw 15vh 0 0.5px rgba(255,255,255,0.7),
            35vw 12vh 0 0.4px rgba(255,255,255,0.5),
            55vw 22vh 0 0.5px rgba(255,255,255,0.6),
            75vw 10vh 0 0.3px rgba(255,255,255,0.7),
            90vw 18vh 0 0.4px rgba(255,255,255,0.5),
            20vw 35vh 0 0.5px rgba(255,255,255,0.6),
            45vw 30vh 0 0.3px rgba(255,255,255,0.7),
            65vw 40vh 0 0.4px rgba(255,255,255,0.5),
            80vw 35vh 0 0.5px rgba(255,255,255,0.6),
            15vw 55vh 0 0.3px rgba(255,255,255,0.7),
            30vw 50vh 0 0.4px rgba(255,255,255,0.5),
            50vw 58vh 0 0.5px rgba(255,255,255,0.6),
            70vw 52vh 0 0.3px rgba(255,255,255,0.7),
            85vw 60vh 0 0.4px rgba(255,255,255,0.5),
            8vw 75vh 0 0.5px rgba(255,255,255,0.6),
            25vw 72vh 0 0.3px rgba(255,255,255,0.7),
            40vw 80vh 0 0.4px rgba(255,255,255,0.5),
            60vw 75vh 0 0.5px rgba(255,255,255,0.6),
            78vw 85vh 0 0.3px rgba(255,255,255,0.7),
            95vw 78vh 0 0.4px rgba(255,255,255,0.5);
          animation: starTwinkle 4s ease-in-out infinite alternate;
        }
        @keyframes starTwinkle { 0% { opacity: 0.5; } 100% { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .cosmic-stars::after { animation: none; opacity: 0.7; }
        }
      `})]})}function _2(){return Vn.jsxs(FE,{children:[Vn.jsx(Ld,{path:"/",element:Vn.jsx(ux,{})}),Vn.jsx(Ld,{path:"/birthday",element:Vn.jsx(ux,{})})]})}FM.createRoot(document.getElementById("root")).render(Vn.jsx(wM.StrictMode,{children:Vn.jsx(ob,{basename:"/19shi",children:Vn.jsx(_2,{})})}));
