function v(){}const nt=t=>t;function vt(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function X(){return Object.create(null)}function N(t){t.forEach(it)}function j(t){return typeof t=="function"}function Jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Kt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function bt(t){return Object.keys(t).length===0}function Et(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qt(t,e,n){t.$$.on_destroy.push(Et(e,n))}function Ut(t,e,n,s){if(t){const i=st(t,e,n,s);return t[0](i)}}function st(t,e,n,s){return t[1]&&s?vt(n.ctx.slice(),t[1](s(e))):n.ctx}function Vt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const c=[],r=Math.max(e.dirty.length,i.length);for(let a=0;a<r;a+=1)c[a]=e.dirty[a]|i[a];return c}return e.dirty|i}return e.dirty}function Xt(t,e,n,s,i,c){if(i){const r=st(e,n,s,c);t.p(r,i)}}function Yt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Zt(t,e,n){return t.set(n),e}function te(t){return t&&j(t.destroy)?t.destroy:v}const rt=typeof window<"u";let ct=rt?()=>window.performance.now():()=>Date.now(),Q=rt?t=>requestAnimationFrame(t):v;const E=new Set;function lt(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&Q(lt)}function ot(t){let e;return E.size===0&&Q(lt),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let G=!1;function Nt(){G=!0}function At(){G=!1}function Tt(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(i>0&&e[n[i]].claim_order<=l?i+1:Tt(1,i,_=>e[n[_]].claim_order,l))-1;s[o]=n[f]+1;const u=f+1;n[u]=o,i=Math.max(u,i)}const c=[],r=[];let a=e.length-1;for(let o=n[i]+1;o!=0;o=s[o-1]){for(c.push(e[o-1]);a>=o;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);c.reverse(),r.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<r.length;o++){for(;l<c.length&&r[o].claim_order>=c[l].claim_order;)l++;const f=l<c.length?c[l]:null;t.insertBefore(r[o],f)}}function St(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Mt(t){const e=U("style");return Ct(at(t),e),e.sheet}function Ct(t,e){return St(t.head||t,e),e.sheet}function Dt(t,e){if(G){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){t.insertBefore(e,n||null)}function jt(t,e,n){G&&!n?Dt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function ee(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function U(t){return document.createElement(t)}function ut(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function V(t){return document.createTextNode(t)}function ne(){return V(" ")}function ie(){return V("")}function se(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function re(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ce(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Lt(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,s,i=!1){ft(t);const c=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,i||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const o=n(a);return o===void 0?t.splice(r,1):t[r]=o,i?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return s()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function dt(t,e,n,s){return _t(t,i=>i.nodeName===e,i=>{const c=[];for(let r=0;r<i.attributes.length;r++){const a=i.attributes[r];n[a.name]||c.push(a.name)}c.forEach(r=>i.removeAttribute(r))},()=>s(e))}function le(t,e,n){return dt(t,e,n,U)}function oe(t,e,n){return dt(t,e,n,ut)}function Rt(t,e){return _t(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>V(e),!0)}function ae(t){return Rt(t," ")}function Y(t,e,n){for(let s=n;s<t.length;s+=1){const i=t[s];if(i.nodeType===8&&i.textContent.trim()===e)return s}return t.length}function ue(t,e){const n=Y(t,"HTML_TAG_START",0),s=Y(t,"HTML_TAG_END",n);if(n===s)return new Z(void 0,e);ft(t);const i=t.splice(n,s-n+1);C(i[0]),C(i[i.length-1]);const c=i.slice(1,i.length-1);for(const r of c)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Z(c,e)}function fe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function _e(t,e){t.value=e??""}function de(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function he(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function me(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const c=i.textContent.trim();c===`HEAD_${t}_END`?(s-=1,n.push(i)):c===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}class Pt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,s=null){this.e||(this.is_svg?this.e=ut(n.nodeName):this.e=U(n.nodeName),this.t=n,this.c(e)),this.i(s)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Ht(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}class Z extends Pt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}}function pe(t,e){return new t(e)}const B=new Map;let z=0;function qt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Mt(e),rules:{}};return B.set(t,n),n}function ht(t,e,n,s,i,c,r,a=0){const o=16.666/s;let l=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*c(p);l+=p*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${qt(f)}_${a}`,_=at(t),{stylesheet:h,rules:d}=B.get(_)||Bt(_,t);d[u]||(d[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${s}ms linear ${i}ms 1 both`,z+=1,u}function J(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),z-=i,z||zt())}function zt(){Q(()=>{z||(B.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),B.clear())})}let D;function M(t){D=t}function mt(){if(!D)throw new Error("Function called outside component initialization");return D}function ye(t){mt().$$.on_mount.push(t)}function ge(t){mt().$$.after_update.push(t)}const S=[],tt=[],P=[],et=[],pt=Promise.resolve();let K=!1;function yt(){K||(K=!0,pt.then(gt))}function we(){return yt(),pt}function H(t){P.push(t)}const I=new Set;let O=0;function gt(){const t=D;do{for(;O<S.length;){const e=S[O];O++,M(e),Ft(e.$$)}for(M(null),S.length=0,O=0;tt.length;)tt.pop()();for(let e=0;e<P.length;e+=1){const n=P[e];I.has(n)||(I.add(n),n())}P.length=0}while(S.length);for(;et.length;)et.pop()();K=!1,I.clear(),M(t)}function Ft(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}let k;function wt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function F(t,e,n){t.dispatchEvent(Ot(`${e?"intro":"outro"}${n}`))}const q=new Set;let $;function xe(){$={r:0,c:[],p:$}}function $e(){$.r||N($.c),$=$.p}function xt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function ve(t,e,n,s){if(t&&t.o){if(q.has(t))return;q.add(t),$.c.push(()=>{q.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const $t={duration:0};function be(t,e,n){const s={direction:"in"};let i=e(t,n,s),c=!1,r,a,o=0;function l(){r&&J(t,r)}function f(){const{delay:_=0,duration:h=300,easing:d=nt,tick:g=v,css:p}=i||$t;p&&(r=ht(t,0,1,h,_,d,p,o++)),g(0,1);const y=ct()+_,A=y+h;a&&a.abort(),c=!0,H(()=>F(t,!0,"start")),a=ot(b=>{if(c){if(b>=A)return g(1,0),F(t,!0,"end"),l(),c=!1;if(b>=y){const T=d((b-y)/h);g(T,1-T)}}return c})}let u=!1;return{start(){u||(u=!0,J(t),j(i)?(i=i(s),wt().then(f)):f())},invalidate(){u=!1},end(){c&&(l(),c=!1)}}}function Ee(t,e,n){const s={direction:"out"};let i=e(t,n,s),c=!0,r;const a=$;a.r+=1;function o(){const{delay:l=0,duration:f=300,easing:u=nt,tick:_=v,css:h}=i||$t;h&&(r=ht(t,1,0,f,l,u,h));const d=ct()+l,g=d+f;H(()=>F(t,!1,"start")),ot(p=>{if(c){if(p>=g)return _(0,1),F(t,!1,"end"),--a.r||N(a.c),!1;if(p>=d){const y=u((p-d)/f);_(1-y,y)}}return c})}return j(i)?wt().then(()=>{i=i(s),o()}):o(),{end(l){l&&i.tick&&i.tick(1,0),c&&(r&&J(t,r),c=!1)}}}function Ne(t,e){t.d(1),e.delete(t.key)}function Ae(t,e,n,s,i,c,r,a,o,l,f,u){let _=t.length,h=c.length,d=_;const g={};for(;d--;)g[t[d].key]=d;const p=[],y=new Map,A=new Map;for(d=h;d--;){const m=u(i,c,d),w=n(m);let x=r.get(w);x?s&&x.p(m,e):(x=l(w,m),x.c()),y.set(w,p[d]=x),w in g&&A.set(w,Math.abs(d-g[w]))}const b=new Set,T=new Set;function W(m){xt(m,1),m.m(a,f),r.set(m.key,m),f=m.first,h--}for(;_&&h;){const m=p[h-1],w=t[_-1],x=m.key,L=w.key;m===w?(f=m.first,_--,h--):y.has(L)?!r.has(x)||b.has(x)?W(m):T.has(L)?_--:A.get(x)>A.get(L)?(T.add(x),W(m)):(b.add(L),_--):(o(w,r),_--)}for(;_--;){const m=t[_];y.has(m.key)||o(m,r)}for(;h;)W(p[h-1]);return p}function Te(t){t&&t.c()}function ke(t,e){t&&t.l(e)}function Gt(t,e,n,s){const{fragment:i,after_update:c}=t.$$;i&&i.m(e,n),s||H(()=>{const r=t.$$.on_mount.map(it).filter(j);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),c.forEach(H)}function Wt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(S.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Se(t,e,n,s,i,c,r,a=[-1]){const o=D;M(t);const l=t.$$={fragment:null,ctx:[],props:c,update:v,not_equal:i,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:X(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...h)=>{const d=h.length?h[0]:_;return l.ctx&&i(l.ctx[u],l.ctx[u]=d)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](d),f&&It(t,u)),_}):[],l.update(),f=!0,N(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){Nt();const u=Lt(e.target);l.fragment&&l.fragment.l(u),u.forEach(C)}else l.fragment&&l.fragment.c();e.intro&&xt(t.$$.fragment),Gt(t,e.target,e.anchor,e.customElement),At(),gt()}M(o)}class Me{$destroy(){Wt(this,1),this.$destroy=v}$on(e,n){if(!j(n))return v;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{nt as $,Gt as A,Wt as B,Ut as C,Dt as D,Xt as E,Yt as F,Vt as G,v as H,Qt as I,me as J,ee as K,ut as L,oe as M,te as N,_e as O,se as P,re as Q,N as R,Me as S,Kt as T,he as U,H as V,be as W,Ee as X,Zt as Y,Z,ue as _,ne as a,Ae as a0,Ne as a1,jt as b,ae as c,ve as d,ie as e,$e as f,xt as g,C as h,Se as i,ge as j,U as k,le as l,Lt as m,ce as n,ye as o,de as p,V as q,Rt as r,Jt as s,we as t,fe as u,xe as v,tt as w,pe as x,Te as y,ke as z};
