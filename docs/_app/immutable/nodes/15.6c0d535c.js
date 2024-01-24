import{H as G}from"../chunks/control.c2cf8273.js";import{S as K,i as N,s as Z,k as p,q as k,a as y,l as m,m as E,r as w,h as g,c as D,n as j,b as T,D as d,u as O,H as V,K as S,Z as H}from"../chunks/index.896821de.js";function B(r,t){return new G(r,t)}new TextEncoder;const F=!1;async function J({params:r,fetch:t}){console.log(r.category);const o=await t("https://random-data-api.com/api/v2/"+r.category+"?size=100&response_type=json",{method:"GET",headers:{"Content-Type":"application/json"}});if(o.status!=200)throw B(o.status,{message:o.statusText});return{params:r,response:o.json()}}const Y=Object.freeze(Object.defineProperty({__proto__:null,load:J,ssr:F},Symbol.toStringTag,{value:"Module"}));function C(r,t,o){const i=r.slice();return i[1]=t[o],i}function L(r,t,o){const i=r.slice();return i[4]=t[o][0],i[5]=t[o][1],i}function q(r,t,o){const i=r.slice();return i[8]=t[o][0],i[9]=t[o][1],i}function z(r){let t,o=R(r[8])+"",i,f,_,u=r[9]+"",v,h;return{c(){t=p("div"),i=k(o),f=y(),_=p("div"),v=k(u),this.h()},l(n){t=m(n,"DIV",{});var s=E(t);i=w(s,o),s.forEach(g),f=D(n),_=m(n,"DIV",{class:!0});var l=E(_);v=w(l,u),l.forEach(g),this.h()},h(){j(_,"class",h=H(r[9])+" svelte-4a747t")},m(n,s){T(n,t,s),d(t,i),T(n,f,s),T(n,_,s),d(_,v)},p(n,s){s&1&&o!==(o=R(n[8])+"")&&O(i,o),s&1&&u!==(u=n[9]+"")&&O(v,u),s&1&&h!==(h=H(n[9])+" svelte-4a747t")&&j(_,"class",h)},d(n){n&&g(t),n&&g(f),n&&g(_)}}}function A(r){let t,o,i=r[4]+"",f,_,u,v,h,n,s=Object.entries(P(r[5])),l=[];for(let e=0;e<s.length;e+=1)l[e]=z(q(r,s,e));return{c(){t=p("li"),o=p("div"),f=k(i),_=k(":"),u=y(),v=p("div");for(let e=0;e<l.length;e+=1)l[e].c();h=y(),this.h()},l(e){t=m(e,"LI",{class:!0});var c=E(t);o=m(c,"DIV",{});var a=E(o);f=w(a,i),_=w(a,":"),a.forEach(g),u=D(c),v=m(c,"DIV",{class:!0});var b=E(v);for(let I=0;I<l.length;I+=1)l[I].l(b);b.forEach(g),h=D(c),c.forEach(g),this.h()},h(){j(v,"class","grid svelte-4a747t"),j(t,"class",n="grid "+r[4]+" svelte-4a747t")},m(e,c){T(e,t,c),d(t,o),d(o,f),d(o,_),d(t,u),d(t,v);for(let a=0;a<l.length;a+=1)l[a].m(v,null);d(t,h)},p(e,c){if(c&1&&i!==(i=e[4]+"")&&O(f,i),c&1){s=Object.entries(P(e[5]));let a;for(a=0;a<s.length;a+=1){const b=q(e,s,a);l[a]?l[a].p(b,c):(l[a]=z(b),l[a].c(),l[a].m(v,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}c&1&&n!==(n="grid "+e[4]+" svelte-4a747t")&&j(t,"class",n)},d(e){e&&g(t),S(l,e)}}}function M(r){let t,o,i=r[1].id+"",f,_,u,v,h=Object.entries(r[1]),n=[];for(let s=0;s<h.length;s+=1)n[s]=A(L(r,h,s));return{c(){t=p("article"),o=p("div"),f=k(i),_=y(),u=p("l");for(let s=0;s<n.length;s+=1)n[s].c();v=y(),this.h()},l(s){t=m(s,"ARTICLE",{class:!0});var l=E(t);o=m(l,"DIV",{class:!0});var e=E(o);f=w(e,i),e.forEach(g),_=D(l),u=m(l,"L",{});var c=E(u);for(let a=0;a<n.length;a+=1)n[a].l(c);c.forEach(g),v=D(l),l.forEach(g),this.h()},h(){j(o,"class","header general svelte-4a747t"),j(t,"class","svelte-4a747t")},m(s,l){T(s,t,l),d(t,o),d(o,f),d(t,_),d(t,u);for(let e=0;e<n.length;e+=1)n[e].m(u,null);d(t,v)},p(s,l){if(l&1&&i!==(i=s[1].id+"")&&O(f,i),l&1){h=Object.entries(s[1]);let e;for(e=0;e<h.length;e+=1){const c=L(s,h,e);n[e]?n[e].p(c,l):(n[e]=A(c),n[e].c(),n[e].m(u,null))}for(;e<n.length;e+=1)n[e].d(1);n.length=h.length}},d(s){s&&g(t),S(n,s)}}}function Q(r){let t,o,i="Showing results for: "+r[0].params.category,f,_,u,v,h,n,s=r[0].response,l=[];for(let e=0;e<s.length;e+=1)l[e]=M(C(r,s,e));return{c(){t=p("main"),o=p("h2"),f=k(i),_=y(),u=p("hr"),v=y(),h=p("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=m(e,"MAIN",{class:!0});var c=E(t);o=m(c,"H2",{});var a=E(o);f=w(a,i),a.forEach(g),_=D(c),u=m(c,"HR",{}),v=D(c),h=m(c,"DIV",{class:!0});var b=E(h);for(let I=0;I<l.length;I+=1)l[I].l(b);b.forEach(g),c.forEach(g),this.h()},h(){j(h,"class",n=r[0].params.category+" general svelte-4a747t"),j(t,"class","svelte-4a747t")},m(e,c){T(e,t,c),d(t,o),d(o,f),d(t,_),d(t,u),d(t,v),d(t,h);for(let a=0;a<l.length;a+=1)l[a].m(h,null)},p(e,[c]){if(c&1&&i!==(i="Showing results for: "+e[0].params.category)&&O(f,i),c&1){s=e[0].response;let a;for(a=0;a<s.length;a+=1){const b=C(e,s,a);l[a]?l[a].p(b,c):(l[a]=M(b),l[a].c(),l[a].m(h,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=s.length}c&1&&n!==(n=e[0].params.category+" general svelte-4a747t")&&j(h,"class",n)},i:V,o:V,d(e){e&&g(t),S(l,e)}}}function P(r){return typeof r=="object"?r:{"":r}}function R(r){return r==""?r:r+": "}function U(r,t,o){let{data:i}=t;return r.$$set=f=>{"data"in f&&o(0,i=f.data)},[i]}class $ extends K{constructor(t){super(),N(this,t,U,Q,Z,{data:0})}}export{$ as component,Y as universal};
