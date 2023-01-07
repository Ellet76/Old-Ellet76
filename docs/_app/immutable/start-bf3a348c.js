import{S as nt,i as at,s as rt,a as ot,e as D,c as it,b as K,g as Y,t as V,d as Q,f as j,h as C,j as st,o as Pe,k as lt,l as ct,m as ft,n as Ee,p as G,q as ut,r as dt,u as pt,v as z,w as H,x as oe,y as J,z as M,A as de}from"./chunks/index-31589446.js";import{S as et,I as W,g as Me,f as Ge,a as ke,b as pe,s as X,i as We,c as he,P as xe,d as ht,e as mt,h as _t}from"./chunks/singletons-bc435a7a.js";import{_ as q}from"./chunks/preload-helper-41c905a7.js";import{R as Xe,H as Ae}from"./chunks/control-f5b05b5f.js";import{u as gt}from"./chunks/parse-f0c618df.js";function wt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function bt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(a,e){const n=new URL(a);for(const i of vt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return kt(n),n}function kt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const $t="/__data.json";function Rt(a){return a.replace(/\/$/,"")+$t}function Lt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ae.delete(Ue(a)),me(a,e));const ae=new Map;function St(a,e){const n=Ue(a,e),i=document.querySelector(n);if(i!=null&&i.textContent){const{body:s,...d}=JSON.parse(i.textContent),t=i.getAttribute("data-ttl");return t&&ae.set(n,{body:s,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,d))}return me(a,e)}function Pt(a,e,n){if(ae.size>0){const i=Ue(a,n),s=ae.get(i);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);ae.delete(i)}}return me(e,n)}function Ue(a,e){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(i+=`[data-hash="${Lt(e.body)}"]`),i}const At=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${Ut(a).map(i=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const t=i.split(/\[(.+?)\](?!\])/);return"/"+t.map((u,_)=>{if(_%2){if(u.startsWith("x+"))return $e(String.fromCharCode(parseInt(u.slice(2),16)));if(u.startsWith("u+"))return $e(String.fromCharCode(...u.slice(2).split("-").map(O=>parseInt(O,16))));const g=At.exec(u);if(!g)throw new Error(`Invalid param: ${u}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,R,I,E,F]=g;return e.push({name:E,matcher:F,optional:!!R,rest:!!I,chained:I?_===1&&t[0]==="":!1}),I?"(.*?)":R?"([^/]*)?":"([^/]+?)"}return $e(u)}).join("")}).join("")}/?$`),params:e}}function It(a){return!/^\([^)]+\)$/.test(a)}function Ut(a){return a.slice(1).split("/").filter(It)}function Tt(a,e,n){const i={},s=a.slice(1);let d="";for(let t=0;t<e.length;t+=1){const f=e[t];let u=s[t];if(f.chained&&f.rest&&d&&(u=u?d+"/"+u:d),d="",u===void 0)f.rest&&(i[f.name]="");else{if(f.matcher&&!n[f.matcher](u)){if(f.optional&&f.chained){let _=s.indexOf(void 0,t);if(_===-1){const g=e[t+1];if(g!=null&&g.rest&&g.chained)d=u;else return}for(;_>=t;)s[_]=s[_-1],_-=1;continue}return}i[f.name]=u}}if(!d)return i}function $e(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(a,e,n,i){const s=new Set(e);return Object.entries(n).map(([f,[u,_,g]])=>{const{pattern:R,params:I}=Ot(f),E={id:f,exec:F=>{const O=R.exec(F);if(O)return Tt(O,I,i)},errors:[1,...g||[]].map(F=>a[F]),layouts:[0,..._||[]].map(t),leaf:d(u)};return E.errors.length=E.layouts.length=Math.max(E.errors.length,E.layouts.length),E});function d(f){const u=f<0;return u&&(f=~f),[u,a[f]]}function t(f){return f===void 0?f:[s.has(f),a[f]]}}function Vt(a){let e,n,i;var s=a[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=z(s,d(a))),{c(){e&&H(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),K(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&2&&(u.form=t[1]),s!==(s=t[0][0])){if(e){Y();const _=e;V(_.$$.fragment,1,0,()=>{M(_,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&M(e,t)}}}function jt(a){let e,n,i;var s=a[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[Ft]},$$scope:{ctx:t}}}}return s&&(e=z(s,d(a))),{c(){e&&H(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),K(t,n,f),i=!0},p(t,f){const u={};if(f&4&&(u.data=t[2]),f&1051&&(u.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){Y();const _=e;V(_.$$.fragment,1,0,()=>{M(_,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&M(e,t)}}}function Nt(a){let e,n,i;var s=a[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=z(s,d(a))),{c(){e&&H(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),K(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&2&&(u.form=t[1]),s!==(s=t[0][1])){if(e){Y();const _=e;V(_.$$.fragment,1,0,()=>{M(_,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&M(e,t)}}}function qt(a){let e,n,i;var s=a[0][1];function d(t){return{props:{data:t[3],$$slots:{default:[Ct]},$$scope:{ctx:t}}}}return s&&(e=z(s,d(a))),{c(){e&&H(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),K(t,n,f),i=!0},p(t,f){const u={};if(f&8&&(u.data=t[3]),f&1043&&(u.$$scope={dirty:f,ctx:t}),s!==(s=t[0][1])){if(e){Y();const _=e;V(_.$$.fragment,1,0,()=>{M(_,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&M(e,t)}}}function Ct(a){let e,n,i;var s=a[0][2];function d(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=z(s,d(a))),{c(){e&&H(e.$$.fragment),n=D()},l(t){e&&oe(e.$$.fragment,t),n=D()},m(t,f){e&&J(e,t,f),K(t,n,f),i=!0},p(t,f){const u={};if(f&16&&(u.data=t[4]),f&2&&(u.form=t[1]),s!==(s=t[0][2])){if(e){Y();const _=e;V(_.$$.fragment,1,0,()=>{M(_,1)}),Q()}s?(e=z(s,d(t)),H(e.$$.fragment),j(e.$$.fragment,1),J(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(t){i||(e&&j(e.$$.fragment,t),i=!0)},o(t){e&&V(e.$$.fragment,t),i=!1},d(t){t&&C(n),e&&M(e,t)}}}function Ft(a){let e,n,i,s;const d=[qt,Nt],t=[];function f(u,_){return u[0][2]?0:1}return e=f(a),n=t[e]=d[e](a),{c(){n.c(),i=D()},l(u){n.l(u),i=D()},m(u,_){t[e].m(u,_),K(u,i,_),s=!0},p(u,_){let g=e;e=f(u),e===g?t[e].p(u,_):(Y(),V(t[g],1,1,()=>{t[g]=null}),Q(),n=t[e],n?n.p(u,_):(n=t[e]=d[e](u),n.c()),j(n,1),n.m(i.parentNode,i))},i(u){s||(j(n),s=!0)},o(u){V(n),s=!1},d(u){t[e].d(u),u&&C(i)}}}function Ye(a){let e,n=a[6]&&Qe(a);return{c(){e=lt("div"),n&&n.c(),this.h()},l(i){e=ct(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ft(e);n&&n.l(s),s.forEach(C),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),G(e,"position","absolute"),G(e,"left","0"),G(e,"top","0"),G(e,"clip","rect(0 0 0 0)"),G(e,"clip-path","inset(50%)"),G(e,"overflow","hidden"),G(e,"white-space","nowrap"),G(e,"width","1px"),G(e,"height","1px")},m(i,s){K(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=Qe(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&C(e),n&&n.d()}}}function Qe(a){let e;return{c(){e=ut(a[7])},l(n){e=dt(n,a[7])},m(n,i){K(n,e,i)},p(n,i){i&128&&pt(e,n[7])},d(n){n&&C(e)}}}function Bt(a){let e,n,i,s,d;const t=[jt,Vt],f=[];function u(g,R){return g[0][1]?0:1}e=u(a),n=f[e]=t[e](a);let _=a[5]&&Ye(a);return{c(){n.c(),i=ot(),_&&_.c(),s=D()},l(g){n.l(g),i=it(g),_&&_.l(g),s=D()},m(g,R){f[e].m(g,R),K(g,i,R),_&&_.m(g,R),K(g,s,R),d=!0},p(g,[R]){let I=e;e=u(g),e===I?f[e].p(g,R):(Y(),V(f[I],1,1,()=>{f[I]=null}),Q(),n=f[e],n?n.p(g,R):(n=f[e]=t[e](g),n.c()),j(n,1),n.m(i.parentNode,i)),g[5]?_?_.p(g,R):(_=Ye(g),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(g){d||(j(n),d=!0)},o(g){V(n),d=!1},d(g){f[e].d(g),g&&C(i),_&&_.d(g),g&&C(s)}}}function Kt(a,e,n){let{stores:i}=e,{page:s}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:u=null}=e,{data_2:_=null}=e;st(i.page.notify);let g=!1,R=!1,I=null;return Pe(()=>{const E=i.page.subscribe(()=>{g&&(n(6,R=!0),n(7,I=document.title||"untitled page"))});return n(5,g=!0),E}),a.$$set=E=>{"stores"in E&&n(8,i=E.stores),"page"in E&&n(9,s=E.page),"components"in E&&n(0,d=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,f=E.data_0),"data_1"in E&&n(3,u=E.data_1),"data_2"in E&&n(4,_=E.data_2)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[d,t,f,u,_,g,R,I,i,s]}class zt extends nt{constructor(e){super(),at(this,e,Kt,Bt,rt,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const Ht={},_e=[()=>q(()=>import("./chunks/0-67f5ff4d.js"),["./chunks/0-67f5ff4d.js","./chunks/_layout-da46b06b.js","./components/pages/_layout.svelte-ff87aa20.js","./chunks/index-31589446.js"],import.meta.url),()=>q(()=>import("./chunks/1-ecc3c950.js"),["./chunks/1-ecc3c950.js","./components/error.svelte-4149f01f.js","./chunks/index-31589446.js","./chunks/stores-71258359.js","./chunks/singletons-bc435a7a.js","./chunks/index-8afd756c.js"],import.meta.url),()=>q(()=>import("./chunks/2-64b5188d.js"),["./chunks/2-64b5188d.js","./components/pages/blog/_layout.svelte-c7615a9f.js","./chunks/index-31589446.js","./assets/_layout-8003c18b.css"],import.meta.url),()=>q(()=>import("./chunks/3-8167f419.js"),["./chunks/3-8167f419.js","./components/pages/search/_layout.svelte-ed15829e.js","./chunks/index-31589446.js"],import.meta.url),()=>q(()=>import("./chunks/4-730d628e.js"),["./chunks/4-730d628e.js","./components/pages/search/_category_/_error.svelte-653e9625.js","./chunks/index-31589446.js","./chunks/stores-71258359.js","./chunks/singletons-bc435a7a.js","./chunks/index-8afd756c.js"],import.meta.url),()=>q(()=>import("./chunks/5-4e7e07ea.js"),["./chunks/5-4e7e07ea.js","./components/pages/_page.svelte-8eba0f19.js","./chunks/index-31589446.js"],import.meta.url),()=>q(()=>import("./chunks/6-1d8f2b58.js"),["./chunks/6-1d8f2b58.js","./chunks/_page-80848ead.js","./components/pages/blog/_page.svelte-435b3210.js","./chunks/index-31589446.js"],import.meta.url),()=>q(()=>import("./chunks/7-61735a4e.js"),["./chunks/7-61735a4e.js","./chunks/_page-8c1ce0b9.js","./chunks/preload-helper-41c905a7.js","./components/pages/blog/_path_/_page.svelte-3d721e2e.js","./chunks/index-31589446.js"],import.meta.url),()=>q(()=>import("./chunks/8-bbc5ba1f.js"),["./chunks/8-bbc5ba1f.js","./components/pages/chat/_page.svelte-b5d48dc5.js","./chunks/index-31589446.js","./chunks/parse-f0c618df.js","./chunks/singletons-bc435a7a.js","./chunks/index-8afd756c.js"],import.meta.url),()=>q(()=>import("./chunks/9-4f27dbcd.js"),["./chunks/9-4f27dbcd.js","./components/pages/memory/_page.svelte-b8045ee7.js","./chunks/index-31589446.js","./assets/_page-2870e030.css"],import.meta.url),()=>q(()=>import("./chunks/10-6585188b.js"),["./chunks/10-6585188b.js","./components/pages/search/_page.svelte-c7ec680c.js","./chunks/index-31589446.js"],import.meta.url),()=>q(()=>import("./chunks/11-7406552e.js"),["./chunks/11-7406552e.js","./chunks/_page-8515917e.js","./chunks/control-f5b05b5f.js","./components/pages/search/_category_/_page.svelte-623ec226.js","./chunks/index-31589446.js"],import.meta.url),()=>q(()=>import("./chunks/12-969ffb80.js"),["./chunks/12-969ffb80.js","./components/pages/telltale/_page.svelte-7f2cfdef.js","./chunks/index-31589446.js","./chunks/index-8afd756c.js","./chunks/index-318ce104.js","./assets/_page-152f6357.css"],import.meta.url)],Jt=[],Mt={"/":[5],"/blog":[6,[2]],"/blog/[path]":[7,[2]],"/chat":[8],"/memory":[9],"/search":[10,[3]],"/search/[category]":[11,[3],[,4]],"/telltale":[12]},Gt={handleError:({error:a})=>{console.error(a)}};async function Wt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([i,s])=>[i,await s])));return a}const Re=Dt(_e,Jt,Mt,Ht),Oe=_e[0],Ie=_e[1];Oe();Ie();let re={};try{re=JSON.parse(sessionStorage[et])}catch{}function Le(a){re[a]=he()}function xt({target:a,base:e}){var ze;const n=document.documentElement,i=[];let s=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,u=!1,_=!0,g=!1,R=!1,I=!1,E=!1,F,O=(ze=history.state)==null?void 0:ze[W];O||(O=Date.now(),history.replaceState({...history.state,[W]:O},"",location.href));const ge=re[O];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let x,Te,ie;async function De(){ie=ie||Promise.resolve(),await ie,ie=null;const r=new URL(location.href),o=ce(r,!0);s=null,await je(o,r,[])}async function we(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:h=!1},m,b){return typeof r=="string"&&(r=new URL(r,Me(document))),fe({url:r,scroll:o?he():null,keepfocus:l,redirect_chain:m,details:{state:p,replaceState:c},nav_token:b,accepted:()=>{h&&(E=!0)},blocked:()=>{},type:"goto"})}async function Ve(r){const o=ce(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function se(...r){const c=Re.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function je(r,o,c,l,p={},h){var b,y;Te=p;let m=r&&await Ce(r);if(m||(m=await Ke(o,{id:null},await ne(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Te!==p)return!1;if(m.type==="redirect")if(c.length>10||c.includes(o.pathname))m=await le({status:500,error:await ne(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return we(new URL(m.location,o).href,{},[...c,o.pathname],p),!1;else((y=(b=m.props)==null?void 0:b.page)==null?void 0:y.status)>=400&&await X.updated.check()&&await ue(o);if(i.length=0,E=!1,g=!0,l&&l.details){const{details:w}=l,$=w.replaceState?0:1;w.state[W]=O+=$,history[w.replaceState?"replaceState":"pushState"](w.state,"",o)}if(s=null,u?(t=m.state,m.props.page&&(m.props.page.url=o),F.$set(m.props)):Ne(m),l){const{scroll:w,keepfocus:$}=l;if($||Se(),await de(),_){const L=o.hash&&document.getElementById(o.hash.slice(1));w?scrollTo(w.x,w.y):L?L.scrollIntoView():scrollTo(0,0)}}else await de();_=!0,m.props.page&&(x=m.props.page),h&&h(),g=!1}function Ne(r){var l;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),x=r.props.page,F=new zt({target:a,props:{...r.props,stores:X},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),u=!0}async function ee({url:r,params:o,branch:c,status:l,error:p,route:h,form:m}){const b=c.filter(Boolean);let y="never";for(const S of c)(S==null?void 0:S.slash)!==void 0&&(y=S.slash);r.pathname=wt(r.pathname,y),r.search=r.search;const w={type:"loaded",state:{url:r,params:o,branch:c,error:p,route:h},props:{components:b.map(S=>S.node.component)}};m!==void 0&&(w.props.form=m);let $={},L=!x;for(let S=0;S<b.length;S+=1){const v=b[S];$={...$,...v.data},(L||!t.branch.some(T=>T===v))&&(w.props[`data_${S}`]=$,L=L||Object.keys(v.data??{}).length>0)}return L||(L=Object.keys(x.data).length!==Object.keys($).length),(!t.url||r.href!==t.url.href||t.error!==p||m!==void 0||L)&&(w.props.page={error:p,params:o,route:h,status:l,url:new URL(r),form:m??null,data:L?$:x.data}),w}async function ye({loader:r,parent:o,url:c,params:l,route:p,server_data_node:h}){var w,$,L;let m=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await r();if((w=y.universal)!=null&&w.load){let B=function(...v){for(const T of v){const{href:N}=new URL(T,c);b.dependencies.add(N)}};const S={route:{get id(){return b.route=!0,p.id}},params:new Proxy(l,{get:(v,T)=>(b.params.add(T),v[T])}),data:(h==null?void 0:h.data)??null,url:Et(c,()=>{b.url=!0}),async fetch(v,T){let N;v instanceof Request?(N=v.url,T={body:v.method==="GET"||v.method==="HEAD"?void 0:await v.blob(),cache:v.cache,credentials:v.credentials,headers:v.headers,integrity:v.integrity,keepalive:v.keepalive,method:v.method,mode:v.mode,redirect:v.redirect,referrer:v.referrer,referrerPolicy:v.referrerPolicy,signal:v.signal,...T}):N=v;const k=new URL(N,c).href;return B(k),u?Pt(N,k,T):St(N,T)},setHeaders:()=>{},depends:B,parent(){return b.parent=!0,o()}};m=await y.universal.load.call(null,S)??null,m=m?await Wt(m):null}return{node:y,loader:r,server:h,universal:($=y.universal)!=null&&$.load?{type:"data",data:m,uses:b}:null,data:m??(h==null?void 0:h.data)??null,slash:((L=y.universal)==null?void 0:L.trailingSlash)??(h==null?void 0:h.slash)}}function qe(r,o,c,l,p){if(E)return!0;if(!l)return!1;if(l.parent&&r||l.route&&o||l.url&&c)return!0;for(const h of l.params)if(p[h]!==t.params[h])return!0;for(const h of l.dependencies)if(i.some(m=>m(new URL(h))))return!0;return!1}function be(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ce({id:r,invalidating:o,url:c,params:l,route:p}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:h,layouts:m,leaf:b}=p,y=[...m,b];h.forEach(k=>k==null?void 0:k().catch(()=>{})),y.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const $=t.url?r!==t.url.pathname+t.url.search:!1,L=t.route?r!==t.route.id:!1,B=y.reduce((k,A,U)=>{var te;const P=t.branch[U],Z=!!(A!=null&&A[0])&&((P==null?void 0:P.loader)!==A[1]||qe(k.some(Boolean),L,$,(te=P.server)==null?void 0:te.uses,l));return k.push(Z),k},[]);if(B.some(Boolean)){try{w=await Ze(c,B)}catch(k){return le({status:500,error:await ne(k,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(w.type==="redirect")return w}const S=w==null?void 0:w.nodes;let v=!1;const T=y.map(async(k,A)=>{var te;if(!k)return;const U=t.branch[A],P=S==null?void 0:S[A];if((!P||P.type==="skip")&&k[1]===(U==null?void 0:U.loader)&&!qe(v,L,$,(te=U.universal)==null?void 0:te.uses,l))return U;if(v=!0,(P==null?void 0:P.type)==="error")throw P;return ye({loader:k[1],url:c,params:l,route:p,parent:async()=>{var Je;const He={};for(let ve=0;ve<A;ve+=1)Object.assign(He,(Je=await T[ve])==null?void 0:Je.data);return He},server_data_node:be(P===void 0&&k[0]?{type:"skip"}:P??null,U==null?void 0:U.server)})});for(const k of T)k.catch(()=>{});const N=[];for(let k=0;k<y.length;k+=1)if(y[k])try{N.push(await T[k])}catch(A){if(A instanceof Xe)return{type:"redirect",location:A.location};let U=500,P;S!=null&&S.includes(A)?(U=A.status??U,P=A.error):A instanceof Ae?(U=A.status,P=A.body):P=await ne(A,{params:l,url:c,route:{id:p.id}});const Z=await Fe(k,N,h);return Z?await ee({url:c,params:l,branch:N.slice(0,Z.idx).concat(Z.node),status:U,error:P,route:p}):await Ke(c,{id:p.id},P,U)}else N.push(void 0);return await ee({url:c,params:l,branch:N,status:200,error:null,route:p,form:o?void 0:null})}async function Fe(r,o,c){for(;r--;)if(c[r]){let l=r;for(;!o[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:r,error:o,url:c,route:l}){const p={},h=await Oe();let m=null;if(h.server)try{const w=await Ze(c,[!0]);if(w.type!=="data"||w.nodes[0]&&w.nodes[0].type!=="data")throw 0;m=w.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ue(c)}const b=await ye({loader:Oe,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:be(m)}),y={node:await Ie(),loader:Ie,universal:null,server:null,data:null};return await ee({url:c,params:p,branch:[b,y],status:r,error:o,route:null})}function ce(r,o){if(We(r,e))return;const c=yt(r.pathname.slice(e.length)||"/");for(const l of Re){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:o,route:l,params:bt(p),url:r}}}function Be({url:r,type:o,intent:c,delta:l}){var b,y;let p=!1;const h={from:{params:t.params,route:{id:((b=t.route)==null?void 0:b.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:r},willUnload:!c,type:o};l!==void 0&&(h.delta=l);const m={...h,cancel:()=>{p=!0}};return R||d.before_navigate.forEach(w=>w(m)),p?null:h}async function fe({url:r,scroll:o,keepfocus:c,redirect_chain:l,details:p,type:h,delta:m,nav_token:b,accepted:y,blocked:w}){const $=ce(r,!1),L=Be({url:r,type:h,delta:m,intent:$});if(!L){w();return}Le(O),y(),R=!0,u&&X.navigating.set(L),await je($,r,l,{scroll:o,keepfocus:c,details:p},b,()=>{R=!1,d.after_navigate.forEach(B=>B(L)),X.navigating.set(null)})}async function Ke(r,o,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await le({status:l,error:c,url:r,route:o}):await ue(r)}function ue(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;n.addEventListener("mousemove",h=>{const m=h.target;clearTimeout(r),r=setTimeout(()=>{l(m,2)},20)});function o(h){l(h.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(h=>{for(const m of h)m.isIntersecting&&(se(new URL(m.target.href).pathname),c.unobserve(m.target))},{threshold:0});function l(h,m){const b=Ge(h,n);if(!b)return;const{url:y,external:w}=ke(b,e);if(w)return;const $=pe(b);$.reload||(m<=$.preload_data?Ve(y):m<=$.preload_code&&se(y.pathname))}function p(){c.disconnect();for(const h of n.querySelectorAll("a")){const{url:m,external:b}=ke(h,e);if(b)continue;const y=pe(h);y.reload||(y.preload_code===xe.viewport&&c.observe(h),y.preload_code===xe.eager&&se(m.pathname))}}d.after_navigate.push(p),p()}return{after_navigate:r=>{Pe(()=>(d.after_navigate.push(r),()=>{const o=d.after_navigate.indexOf(r);d.after_navigate.splice(o,1)}))},before_navigate:r=>{Pe(()=>(d.before_navigate.push(r),()=>{const o=d.before_navigate.indexOf(r);d.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(g||!u)&&(_=!1)},goto:(r,o={})=>we(r,o,[]),invalidate:r=>{if(typeof r=="function")i.push(r);else{const{href:o}=new URL(r,location.href);i.push(c=>c.href===o)}return De()},invalidateAll:()=>(E=!0,De()),preload_data:async r=>{const o=new URL(r,Me(document));await Ve(o)},preload_code:se,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Fe(t.branch.length,c,l.errors);if(p){const h=await ee({url:o,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=h.state,F.$set(h.props),de().then(Se)}}else if(r.type==="redirect")we(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...x,form:r.data,status:r.status}};F.$set(o),r.type==="success"&&de().then(Se)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var l;let c=!1;if(!R){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(h=>h(p))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(O);try{sessionStorage[et]=JSON.stringify(re)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=Ge(o.composedPath()[0],n);if(!c)return;const{url:l,external:p,has:h}=ke(c,e),m=pe(c);if(!l||!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:")||h.download)return;if(p||m.reload){Be({url:l,type:"link"})||o.preventDefault(),R=!0;return}const[y,w]=l.href.split("#");if(w!==void 0&&y===location.href.split("#")[0]){I=!0,Le(O),t.url=l,X.page.set({...x,url:l}),X.page.notify();return}fe({url:l,scroll:m.noscroll?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{var y;if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),l=o.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const h=new URL(((y=o.submitter)==null?void 0:y.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(We(h,e))return;const{noscroll:m,reload:b}=pe(o.target);b||(o.preventDefault(),o.stopPropagation(),h.search=new URLSearchParams(new FormData(o.target)).toString(),fe({url:h,scroll:m?he():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"}))}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[W]){if(o.state[W]===O)return;const l=o.state[W]-O;fe({url:new URL(location.href),scroll:re[o.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=o.state[W]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{I&&(I=!1,history.replaceState({...history.state,[W]:++O},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&X.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:l,route:p,data:h,form:m})=>{f=!0;const b=new URL(location.href);({params:l={},route:p={id:null}}=ce(b,!1)||{});let y;try{const w=c.map(async($,L)=>{const B=h[L];return ye({loader:_e[$],url:b,params:l,route:p,parent:async()=>{const S={};for(let v=0;v<L;v+=1)Object.assign(S,(await w[v]).data);return S},server_data_node:be(B)})});y=await ee({url:b,params:l,branch:await Promise.all(w),status:r,error:o,form:m,route:Re.find(({id:$})=>$===p.id)??null})}catch(w){if(w instanceof Xe){await ue(new URL(w.location,location.href));return}y=await le({status:w instanceof Ae?w.status:500,error:await ne(w,{url:b,params:l,route:p}),url:b,route:p})}Ne(y)}}}async function Ze(a,e){var d;const n=new URL(a);n.pathname=Rt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const i=await me(n.href),s=await i.json();if(!i.ok)throw new Error(s);return(d=s.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=gt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ne(a,e){return a instanceof Ae?a.body:Gt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Se(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var i;(i=getSelection())==null||i.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function tn({env:a,hydrate:e,paths:n,target:i,version:s}){ht(n),_t(s);const d=xt({target:i,base:n.base});mt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{tn as start};
