import{S as fe,i as ve,s as ke,k as v,q as w,a as S,l as k,m as p,r as H,h as _,c as U,n as h,p as oe,b as W,D as t,K as P,L as ne,H as re,o as me,u as de,M as he,N as ce}from"../chunks/index.d224f26d.js";function ae(D,s,l){const e=D.slice();return e[11]=s[l],e[13]=l,e}function ie(D,s,l){const e=D.slice();return e[11]=s[l],e[13]=l,e}function ue(D,s){let l,e,u=s[11]+"",f,d,r,I,N,c,y,O,T,n;function L(){return s[7](s[13])}function m(){return s[8](s[13])}return{key:D,first:null,c(){l=v("li"),e=v("dir"),f=w(u),d=S(),r=v("button"),I=w("Done"),N=S(),c=v("button"),y=w("Remove"),O=S(),this.h()},l(a){l=k(a,"LI",{});var b=p(l);e=k(b,"DIR",{class:!0});var g=p(e);f=H(g,u),d=U(g),r=k(g,"BUTTON",{id:!0,class:!0});var R=p(r);I=H(R,"Done"),R.forEach(_),N=U(g),c=k(g,"BUTTON",{id:!0,class:!0});var B=p(c);y=H(B,"Remove"),B.forEach(_),g.forEach(_),O=U(b),b.forEach(_),this.h()},h(){h(r,"id","list_button"),h(r,"class","svelte-1lr3ces"),h(c,"id","list_button"),h(c,"class","svelte-1lr3ces"),h(e,"class","list svelte-1lr3ces"),this.first=l},m(a,b){W(a,l,b),t(l,e),t(e,f),t(e,d),t(e,r),t(r,I),t(e,N),t(e,c),t(c,y),t(l,O),T||(n=[P(r,"click",L),P(c,"click",m)],T=!0)},p(a,b){s=a,b&1&&u!==(u=s[11]+"")&&de(f,u)},d(a){a&&_(l),T=!1,he(n)}}}function _e(D,s){let l,e,u=s[11]+"",f,d,r,I,N,c,y,O,T,n;function L(){return s[9](s[13])}function m(){return s[10](s[13])}return{key:D,first:null,c(){l=v("li"),e=v("dir"),f=w(u),d=S(),r=v("button"),I=w("Not Done"),N=S(),c=v("button"),y=w("Remove"),O=S(),this.h()},l(a){l=k(a,"LI",{});var b=p(l);e=k(b,"DIR",{class:!0});var g=p(e);f=H(g,u),d=U(g),r=k(g,"BUTTON",{id:!0,class:!0});var R=p(r);I=H(R,"Not Done"),R.forEach(_),N=U(g),c=k(g,"BUTTON",{id:!0,class:!0});var B=p(c);y=H(B,"Remove"),B.forEach(_),g.forEach(_),O=U(b),b.forEach(_),this.h()},h(){h(r,"id","list_button"),h(r,"class","svelte-1lr3ces"),h(c,"id","list_button"),h(c,"class","svelte-1lr3ces"),h(e,"class","list svelte-1lr3ces"),this.first=l},m(a,b){W(a,l,b),t(l,e),t(e,f),t(e,d),t(e,r),t(r,I),t(e,N),t(e,c),t(c,y),t(l,O),T||(n=[P(r,"click",L),P(c,"click",m)],T=!0)},p(a,b){s=a,b&2&&u!==(u=s[11]+"")&&de(f,u)},d(a){a&&_(l),T=!1,he(n)}}}function pe(D){let s,l,e,u,f,d,r,I,N,c,y,O,T,n,L,m,a=[],b=new Map,g,R,B,G,J,M,V=[],X=new Map,Q,Y,A=D[0];const Z=o=>o[11];for(let o=0;o<A.length;o+=1){let i=ie(D,A,o),E=Z(i);b.set(E,a[o]=ue(E,i))}let C=D[1];const x=o=>o[11];for(let o=0;o<C.length;o+=1){let i=ae(D,C,o),E=x(i);X.set(E,V[o]=_e(E,i))}return{c(){s=v("div"),l=v("h1"),e=w("Todo list"),u=S(),f=v("div"),d=v("div"),r=v("h1"),I=w("New"),N=S(),c=v("div"),y=v("input"),O=S(),T=v("button"),n=w("Submit"),L=S(),m=v("ol");for(let o=0;o<a.length;o+=1)a[o].c();g=S(),R=v("div"),B=v("h1"),G=w("Done"),J=S(),M=v("ol");for(let o=0;o<V.length;o+=1)V[o].c();this.h()},l(o){s=k(o,"DIV",{class:!0});var i=p(s);l=k(i,"H1",{class:!0});var E=p(l);e=H(E,"Todo list"),E.forEach(_),u=U(i),f=k(i,"DIV",{class:!0});var K=p(f);d=k(K,"DIV",{style:!0});var F=p(d);r=k(F,"H1",{class:!0});var $=p(r);I=H($,"New"),$.forEach(_),N=U(F),c=k(F,"DIV",{class:!0});var j=p(c);y=k(j,"INPUT",{id:!0,type:!0,class:!0}),O=U(j),T=k(j,"BUTTON",{});var ee=p(T);n=H(ee,"Submit"),ee.forEach(_),j.forEach(_),L=U(F),m=k(F,"OL",{class:!0});var te=p(m);for(let q=0;q<a.length;q+=1)a[q].l(te);te.forEach(_),F.forEach(_),g=U(K),R=k(K,"DIV",{style:!0});var z=p(R);B=k(z,"H1",{class:!0});var le=p(B);G=H(le,"Done"),le.forEach(_),J=U(z),M=k(z,"OL",{class:!0});var se=p(M);for(let q=0;q<V.length;q+=1)V[q].l(se);se.forEach(_),z.forEach(_),K.forEach(_),i.forEach(_),this.h()},h(){h(l,"class","text svelte-1lr3ces"),h(r,"class","text svelte-1lr3ces"),h(y,"id","task"),h(y,"type","text"),h(y,"class","svelte-1lr3ces"),h(c,"class","submit svelte-1lr3ces"),h(m,"class","svelte-1lr3ces"),oe(d,"display","grid"),h(B,"class","text svelte-1lr3ces"),h(M,"class","svelte-1lr3ces"),oe(R,"display","grid"),h(f,"class","layout svelte-1lr3ces"),h(s,"class","container svelte-1lr3ces")},m(o,i){W(o,s,i),t(s,l),t(l,e),t(s,u),t(s,f),t(f,d),t(d,r),t(r,I),t(d,N),t(d,c),t(c,y),t(c,O),t(c,T),t(T,n),t(d,L),t(d,m);for(let E=0;E<a.length;E+=1)a[E].m(m,null);t(f,g),t(f,R),t(R,B),t(B,G),t(R,J),t(R,M);for(let E=0;E<V.length;E+=1)V[E].m(M,null);Q||(Y=P(T,"click",D[2]),Q=!0)},p(o,[i]){i&25&&(A=o[0],a=ne(a,i,Z,1,o,A,b,m,ce,ue,null,ie)),i&98&&(C=o[1],V=ne(V,i,x,1,o,C,X,M,ce,_e,null,ae))},i:re,o:re,d(o){o&&_(s);for(let i=0;i<a.length;i+=1)a[i].d();for(let i=0;i<V.length;i+=1)V[i].d();Q=!1,Y()}}}function be(D,s,l){let e=[],u=[];function f(){const n=document.getElementById("task").value;l(0,e=[...e,n])}function d(n){l(0,e=e.filter((L,m)=>m!==n))}function r(n){l(1,u=[...u,e[n]]),l(0,e=e.filter((L,m)=>m!==n))}function I(n){l(1,u=u.filter((L,m)=>m!==n))}function N(n){l(0,e=[...e,u[n]]),l(1,u=u.filter((L,m)=>m!==n))}return me(()=>{}),[e,u,f,d,r,I,N,n=>r(n),n=>d(n),n=>N(n),n=>I(n)]}class Ee extends fe{constructor(s){super(),ve(this,s,be,pe,ke,{})}}export{Ee as component};
