import{S as Z,i as $,s as ee,k as b,a as P,q as U,l as k,m as y,h as v,c as q,r as A,n as c,p as G,b as X,D as n,L as R,u as z,H as F,K as te,U as N,V as J,P as le}from"../chunks/index.be43a727.js";function Q(l,e,t){const _=l.slice();return _[11]=e[t],_[13]=t,_}function W(l){let e,t,_,s,o,m,I,g,r;function E(){return l[6](l[11])}function V(){return l[7](l[11])}return{c(){e=b("div"),t=b("img"),s=P(),o=b("img"),I=P(),this.h()},l(u){e=k(u,"DIV",{class:!0});var h=y(e);t=k(h,"IMG",{class:!0,src:!0,alt:!0}),s=q(h),o=k(h,"IMG",{class:!0,src:!0,alt:!0}),I=q(h),h.forEach(v),this.h()},h(){c(t,"class","front svelte-130otkf"),N(t.src,_=l[11].img)||c(t,"src",_),c(t,"alt",""),c(o,"class","back svelte-130otkf"),N(o.src,m="front.webp")||c(o,"src",m),c(o,"alt",""),c(e,"class","card svelte-130otkf"),J(e,"flipped",l[11].flipped)},m(u,h){X(u,e,h),n(e,t),n(e,s),n(e,o),n(e,I),g||(r=[R(e,"click",E),R(e,"keypress",V)],g=!0)},p(u,h){l=u,h&1&&!N(t.src,_=l[11].img)&&c(t,"src",_),h&1&&J(e,"flipped",l[11].flipped)},d(u){u&&v(e),g=!1,le(r)}}}function se(l){let e,t,_,s,o,m,I,g,r,E,V,u,h,f,j,D,x,S,B,M=l[0],d=[];for(let a=0;a<M.length;a+=1)d[a]=W(Q(l,M,a));return{c(){e=b("main"),t=b("div");for(let a=0;a<d.length;a+=1)d[a].c();_=P(),s=b("div"),o=b("p"),m=U(l[1]),I=P(),g=b("div"),r=b("p"),E=U(l[2]),V=P(),u=b("div"),f=P(),j=b("div"),D=b("button"),x=U("Reset"),this.h()},l(a){e=k(a,"MAIN",{class:!0});var p=y(e);t=k(p,"DIV",{class:!0});var i=y(t);for(let T=0;T<d.length;T+=1)d[T].l(i);i.forEach(v),_=q(p),s=k(p,"DIV",{id:!0,class:!0});var w=y(s);o=k(w,"P",{});var C=y(o);m=A(C,l[1]),C.forEach(v),w.forEach(v),I=q(p),g=k(p,"DIV",{id:!0,class:!0});var H=y(g);r=k(H,"P",{});var K=y(r);E=A(K,l[2]),K.forEach(v),H.forEach(v),V=q(p),u=k(p,"DIV",{id:!0,class:!0,style:!0});var Y=y(u);Y.forEach(v),f=q(p),j=k(p,"DIV",{class:!0,style:!0});var L=y(j);D=k(L,"BUTTON",{type:!0,style:!0});var O=y(D);x=A(O,"Reset"),O.forEach(v),L.forEach(v),p.forEach(v),this.h()},h(){c(t,"class","row svelte-130otkf"),c(s,"id","red-box"),c(s,"class","box svelte-130otkf"),c(g,"id","blue-box"),c(g,"class","box svelte-130otkf"),c(u,"id","turn-box"),c(u,"class","box svelte-130otkf"),c(u,"style",h=l[3]=="blue"?"right: 10px;":"left:10px"),c(D,"type","button"),G(D,"width","50px"),G(D,"height","50px"),c(j,"class","box svelte-130otkf"),G(j,"bottom","0px"),c(e,"class","svelte-130otkf")},m(a,p){X(a,e,p),n(e,t);for(let i=0;i<d.length;i+=1)d[i]&&d[i].m(t,null);n(e,_),n(e,s),n(s,o),n(o,m),n(e,I),n(e,g),n(g,r),n(r,E),n(e,V),n(e,u),n(e,f),n(e,j),n(j,D),n(D,x),S||(B=R(D,"click",l[5]),S=!0)},p(a,[p]){if(p&17){M=a[0];let i;for(i=0;i<M.length;i+=1){const w=Q(a,M,i);d[i]?d[i].p(w,p):(d[i]=W(w),d[i].c(),d[i].m(t,null))}for(;i<d.length;i+=1)d[i].d(1);d.length=M.length}p&2&&z(m,a[1]),p&4&&z(E,a[2]),p&8&&h!==(h=a[3]=="blue"?"right: 10px;":"left:10px")&&c(u,"style",h)},i:F,o:F,d(a){a&&v(e),te(d,a),S=!1,B()}}}function oe(l){for(let e=l.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[l[e],l[t]]=[l[t],l[e]]}}function ae(l,e,t){function _(f){!f.flipped&&m<2?(f.flipped=!0,m+=1,o.push(f),m==2&&setTimeout(()=>{o[0].id==o[1].id&&(o[0].completed=!0,o[1].completed=!0,r=="blue"?t(2,g+=1):r=="red"&&t(1,I+=1),console.log(r)),t(0,s),o=[],s.forEach(j=>{j.flipped=j.completed}),m=0,r=="blue"?(t(3,r="red"),console.log(r,"1")):r=="red"&&(t(3,r="blue"),console.log(r,"2"))},1e3),console.log(s),t(0,s)):alert("chill")}let s=[],o=[],m=0,I=0,g=0,r="blue",E=["Image_1.jpg","Image_2.jpg","Image_3.jpg","Image_4.jpg","Image_5.jpg","Image_6.jpg","Image_1.jpg","Image_2.jpg","Image_3.jpg","Image_4.jpg","Image_5.jpg","Image_6.jpg"];function V(){t(0,s=[]),o=[],m=0,t(1,I=0),t(2,g=0),t(3,r="blue");for(let f=0;f<6;f++)s.push({id:f,img:E[f],flipped:!1,completed:!1}),s.push({id:f,img:E[f],flipped:!1,completed:!1});oe(s)}return V(),[s,I,g,r,_,V,f=>{_(f)},f=>{_(f)}]}class ie extends Z{constructor(e){super(),$(this,e,ae,se,ee,{})}}export{ie as component};