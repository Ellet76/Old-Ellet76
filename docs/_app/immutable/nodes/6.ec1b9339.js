import{S as D,i as G,s as H,k as m,q as d,a as I,l as g,m as v,r as k,h as i,c as T,n as S,b as p,D as M,u as y,H as b,K as B,p as u,L as C}from"../chunks/index.be43a727.js";function L(n,t,s){const o=n.slice();return o[5]=t[s].letter,o[6]=t[s].top,o[7]=t[s].left,o[9]=s,o}function E(n){let t,s=n[5]+"",o,r,f;function c(){return n[3](n[5],n[9])}return{c(){t=m("button"),o=d(s),this.h()},l(l){t=g(l,"BUTTON",{style:!0,class:!0});var e=v(t);o=k(e,s),e.forEach(i),this.h()},h(){u(t,"position","sticky"),u(t,"top",n[6]+"%"),u(t,"left",n[7]+"%"),S(t,"class","svelte-14h834")},m(l,e){p(l,t,e),M(t,o),r||(f=C(t,"click",c),r=!0)},p(l,e){n=l,e&1&&s!==(s=n[5]+"")&&y(o,s),e&1&&u(t,"top",n[6]+"%"),e&1&&u(t,"left",n[7]+"%")},d(l){l&&i(t),r=!1,f()}}}function K(n){let t,s,o,r,f,c=n[0],l=[];for(let e=0;e<c.length;e+=1)l[e]=E(L(n,c,e));return{c(){t=m("h1"),s=d("Logga in som "),o=d(n[1]),r=I(),f=m("div");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){t=g(e,"H1",{});var h=v(t);s=k(h,"Logga in som "),o=k(h,n[1]),h.forEach(i),r=T(e),f=g(e,"DIV",{class:!0});var a=v(f);for(let _=0;_<l.length;_+=1)l[_].l(a);a.forEach(i),this.h()},h(){S(f,"class","container svelte-14h834")},m(e,h){p(e,t,h),M(t,s),M(t,o),p(e,r,h),p(e,f,h);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(f,null)},p(e,[h]){if(h&2&&y(o,e[1]),h&5){c=e[0];let a;for(a=0;a<c.length;a+=1){const _=L(e,c,a);l[a]?l[a].p(_,h):(l[a]=E(_),l[a].c(),l[a].m(f,null))}for(;a<l.length;a+=1)l[a].d(1);l.length=c.length}},i:b,o:b,d(e){e&&i(t),e&&i(r),e&&i(f),B(l,e)}}}function N(n,t,s){let o="ABCDEFGHIGKLMNOPQRSTUVWXYZABCDEFGHIGKLMNOPQRSTUVWXYZ".split(""),r=[],f="";for(let e of o)r.push({letter:e,top:Math.random()*100,left:Math.random()*100});setInterval(()=>{s(0,r=[]);for(let e of o)r.push({letter:e,top:Math.random()*100,left:Math.random()*100})},2500);function c(e,h){s(1,f+=e),s(0,r[h].top=Math.random()*100,r),s(0,r[h].left=Math.random()*100,r),s(0,r)}return[r,f,c,(e,h)=>c(e,h)]}class P extends D{constructor(t){super(),G(this,t,N,K,H,{})}}export{P as component};
