import{S as G,i as P,s as S,k as _,l as d,m as g,h as u,n as p,b as E,D as h,H as k,K as V,a as q,c as y,T as m,U as b,P as I,R as A}from"../chunks/index.a9b9ac8b.js";function $(i,l,t){const r=i.slice();return r[5]=l[t],r[7]=t,r}function D(i){let l,t,r,a,e,c,s,n,v;function M(){return i[2](i[5])}function w(){return i[3](i[5])}return{c(){l=_("div"),t=_("img"),a=q(),e=_("img"),s=q(),this.h()},l(f){l=d(f,"DIV",{class:!0});var o=g(l);t=d(o,"IMG",{class:!0,src:!0,alt:!0}),a=y(o),e=d(o,"IMG",{class:!0,src:!0,alt:!0}),s=y(o),o.forEach(u),this.h()},h(){p(t,"class","front svelte-1p5l2qp"),m(t.src,r=i[5].img)||p(t,"src",r),p(t,"alt",""),p(e,"class","back svelte-1p5l2qp"),m(e.src,c="front.webp")||p(e,"src",c),p(e,"alt",""),p(l,"class","card svelte-1p5l2qp"),b(l,"flipped",i[5].flipped)},m(f,o){E(f,l,o),h(l,t),h(l,a),h(l,e),h(l,s),n||(v=[I(l,"click",M),I(l,"keypress",w)],n=!0)},p(f,o){i=f,o&1&&!m(t.src,r=i[5].img)&&p(t,"src",r),o&1&&b(l,"flipped",i[5].flipped)},d(f){f&&u(l),n=!1,A(v)}}}function C(i){let l,t,r=i[0],a=[];for(let e=0;e<r.length;e+=1)a[e]=D($(i,r,e));return{c(){l=_("main"),t=_("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){l=d(e,"MAIN",{class:!0});var c=g(l);t=d(c,"DIV",{class:!0});var s=g(t);for(let n=0;n<a.length;n+=1)a[n].l(s);s.forEach(u),c.forEach(u),this.h()},h(){p(t,"class","row svelte-1p5l2qp"),p(l,"class","svelte-1p5l2qp")},m(e,c){E(e,l,c),h(l,t);for(let s=0;s<a.length;s+=1)a[s].m(t,null)},p(e,[c]){if(c&3){r=e[0];let s;for(s=0;s<r.length;s+=1){const n=$(e,r,s);a[s]?a[s].p(n,c):(a[s]=D(n),a[s].c(),a[s].m(t,null))}for(;s<a.length;s+=1)a[s].d(1);a.length=r.length}},i:k,o:k,d(e){e&&u(l),V(a,e)}}}function H(i,l,t){let r=[];for(let n=0;n<12;n++)r.push({id:5,img:"/notrick.gif",flipped:!1,completed:!1});let a=0;function e(n){n.flipped&&a<2?t(0,r):alert("chill")}return[r,e,n=>{e(n)},n=>{e(n)}]}class N extends G{constructor(l){super(),P(this,l,H,C,S,{})}}export{N as component};