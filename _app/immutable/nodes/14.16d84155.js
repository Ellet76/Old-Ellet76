import{S as z,i as B,s as F,Y as X,k as I,a as V,l as k,m as P,h,c as j,n as w,b as O,D as p,K as G,d as K,f as J,g as N,O as L,M as Q,q as E,r as Y,p as C,W as Z,v as U,u as A,H,Z as $,_ as x}from"../chunks/index.230cd71b.js";import{f as ee,a as le}from"../chunks/index.5ddd1203.js";function R(s,t,n){const f=s.slice();return f[9]=t[n],f}function W(s){let t,n=(s[9],S(s[4],s[9])+""),f,i,a,c;return{c(){t=I("p"),f=E(n),i=V(),a=I("img"),this.h()},l(l){t=k(l,"P",{});var e=P(t);f=Y(e,n),e.forEach(h),i=j(l),a=k(l,"IMG",{style:!0,src:!0,alt:!0,class:!0}),this.h()},h(){C(a,"transform","translate(0, "+(s[1]<2?s[1]*S(s[4],s[9]):-s[1]*S(s[4],s[9])/(s[4].length-1))+"px)"),Z(a.src,c=s[9])||w(a,"src",c),w(a,"alt",`parallax layer ${S(s[4],s[9])}`),w(a,"class","svelte-1lommbf")},m(l,e){O(l,t,e),p(t,f),O(l,i,e),O(l,a,e)},p(l,e){e&2&&C(a,"transform","translate(0, "+(l[1]<2?l[1]*S(l[4],l[9]):-l[1]*S(l[4],l[9])/(l[4].length-1))+"px)")},d(l){l&&h(t),l&&h(i),l&&h(a)}}}function te(s){let t,n,f,i,a,c,l;return{c(){t=I("p"),n=E("You have scrolled "),f=E(s[1]),i=E(" pixels"),a=V(),c=I("p"),l=E(s[3])},l(e){t=k(e,"P",{});var r=P(t);n=Y(r,"You have scrolled "),f=Y(r,s[1]),i=Y(r," pixels"),r.forEach(h),a=j(e),c=k(e,"P",{});var m=P(c);l=Y(m,s[3]),m.forEach(h)},m(e,r){O(e,t,r),p(t,n),p(t,f),p(t,i),O(e,a,r),O(e,c,r),p(c,l)},p(e,r){r&2&&A(f,e[1]),r&8&&A(l,e[3])},i:H,o:H,d(e){e&&h(t),e&&h(a),e&&h(c)}}}function se(s){let t,n,f,i,a,c,l,e,r,m,T,M,b,u;return{c(){t=I("div"),n=I("p"),f=E("You have scrolled "),i=E(s[1]),a=E(" pixels"),c=V(),l=I("p"),e=E(s[3]),r=V(),m=I("img"),this.h()},l(v){t=k(v,"DIV",{class:!0});var _=P(t);n=k(_,"P",{});var D=P(n);f=Y(D,"You have scrolled "),i=Y(D,s[1]),a=Y(D," pixels"),D.forEach(h),c=j(_),l=k(_,"P",{});var o=P(l);e=Y(o,s[3]),o.forEach(h),r=j(_),m=k(_,"IMG",{src:!0,alt:!0,class:!0}),_.forEach(h),this.h()},h(){Z(m.src,T="/Image_5.jpg")||w(m,"src",T),w(m,"alt","hmmmmmm"),w(m,"class","svelte-1lommbf"),w(t,"class","story svelte-1lommbf")},m(v,_){O(v,t,_),p(t,n),p(n,f),p(n,i),p(n,a),p(t,c),p(t,l),p(l,e),p(t,r),p(t,m),u=!0},p(v,_){(!u||_&2)&&A(i,v[1]),(!u||_&8)&&A(e,v[3])},i(v){u||(X(()=>{b&&b.end(1),M=$(t,ee,{y:200,duration:0}),M.start()}),u=!0)},o(v){M&&M.invalidate(),b=x(t,le,{}),u=!1},d(v){v&&h(t),v&&b&&b.end()}}}function re(s){let t=!1,n=()=>{t=!1},f,i,a,c,l,e,r,m,T,M;X(s[6]);let b=s[4],u=[];for(let o=0;o<b.length;o+=1)u[o]=W(R(s,b,o));const v=[se,te],_=[];function D(o,g){return o[2]&&o[0]>0?0:o[0]===0?1:-1}return~(e=D(s))&&(r=_[e]=v[e](s)),{c(){i=I("main"),a=I("div");for(let o=0;o<u.length;o+=1)u[o].c();c=V(),l=I("div"),r&&r.c(),this.h()},l(o){i=k(o,"MAIN",{class:!0});var g=P(i);a=k(g,"DIV",{class:!0});var y=P(a);for(let q=0;q<u.length;q+=1)u[q].l(y);y.forEach(h),c=j(g),l=k(g,"DIV",{class:!0});var d=P(l);r&&r.l(d),d.forEach(h),g.forEach(h),this.h()},h(){w(a,"class","container svelte-1lommbf"),w(l,"class","text svelte-1lommbf"),w(i,"class","svelte-1lommbf")},m(o,g){O(o,i,g),p(i,a);for(let y=0;y<u.length;y+=1)u[y].m(a,null);p(i,c),p(i,l),~e&&_[e].m(l,null),m=!0,T||(M=[G(window,"scroll",s[5]),G(window,"scroll",()=>{t=!0,clearTimeout(f),f=setTimeout(n,100),s[6]()})],T=!0)},p(o,[g]){if(g&2&&!t&&(t=!0,clearTimeout(f),scrollTo(window.pageXOffset,o[1]),f=setTimeout(n,100)),g&18){b=o[4];let d;for(d=0;d<b.length;d+=1){const q=R(o,b,d);u[d]?u[d].p(q,g):(u[d]=W(q),u[d].c(),u[d].m(a,null))}for(;d<u.length;d+=1)u[d].d(1);u.length=b.length}let y=e;e=D(o),e===y?~e&&_[e].p(o,g):(r&&(U(),K(_[y],1,1,()=>{_[y]=null}),J()),~e?(r=_[e],r?r.p(o,g):(r=_[e]=v[e](o),r.c()),N(r,1),r.m(l,null)):r=null)},i(o){m||(N(r),m=!0)},o(o){K(r),m=!1},d(o){o&&h(i),L(u,o),~e&&_[e].d(),T=!1,Q(M)}}}function S(s,t){return console.log(s.indexOf(t)+1),s.indexOf(t)+1}function oe(s,t,n){let f;const i=["/Image_2-removebg.jpg","/Random_pixelart_1.png"],a=["Keep scrolling...","More scrolling...","Almost there...","You did it!","hohohoho","I am evil","Not really","Im just lonely","Though...","I might be evil😎","🥐🥐🥐🥐🥐🥐🥐🥐🥐🥐🥐","🛺🛺🛺🛺🛺🛺🛺🛺🛺🛺🛺"];let c=0,l=0,e=!0;const r=Math.floor(4400/a.length);function m(){const M=l;n(0,l=Math.max(0,Math.floor(c/r))),n(2,e=l===M)}function T(){n(1,c=window.pageYOffset)}return s.$$.update=()=>{s.$$.dirty&1&&n(3,f=a[l])},[l,c,e,f,i,m,T]}class ne extends z{constructor(t){super(),B(this,t,oe,re,F,{})}}export{ne as component};
