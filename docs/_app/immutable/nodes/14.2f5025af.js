import{S as he,i as ue,s as fe,k as f,q as E,a as q,l as _,m as p,r as D,h,c as R,n as I,p as J,b as ie,D as t,R as re,L as C,T as _e,u as de,H as x,K as pe,P as ve}from"../chunks/index.be43a727.js";function ae(s,e,n){const c=s.slice();return c[16]=e[n],c}function ce(s){let e,n=s[16]+"",c;return{c(){e=f("div"),c=E(n),this.h()},l(u){e=_(u,"DIV",{class:!0});var i=p(e);c=D(i,n),i.forEach(h),this.h()},h(){I(e,"class","square svelte-14sw0q5")},m(u,i){ie(u,e,i),t(e,c)},p:x,d(u){u&&h(e)}}}function me(s){let e,n,c,u,i,m,d,T,y,N,v,O,b,F,G,V,K,W,g,H,P,S,Q,X,U,w,L,Z,k,j,$,B=s[5],a=[];for(let l=0;l<B.length;l+=1)a[l]=ce(ae(s,B,l));return{c(){e=f("div"),n=f("h1"),c=E("Registration form"),u=q(),i=f("form"),m=f("div"),d=E("|"),T=E(s[0]),y=E("|"),N=q(),v=f("input"),O=q(),b=f("button"),F=E("Roll Dice"),G=q(),V=f("button"),K=E("Choose Letter"),W=q(),g=f("button"),H=E("Reset"),P=q(),S=f("button"),Q=E("Login"),X=q(),U=f("div"),w=f("div"),L=f("div");for(let l=0;l<a.length;l+=1)a[l].c();Z=q(),k=f("div"),this.h()},l(l){e=_(l,"DIV",{class:!0});var o=p(e);n=_(o,"H1",{});var r=p(n);c=D(r,"Registration form"),r.forEach(h),u=R(o),i=_(o,"FORM",{});var M=p(i);m=_(M,"DIV",{});var Y=p(m);d=D(Y,"|"),T=D(Y,s[0]),y=D(Y,"|"),Y.forEach(h),N=R(M),v=_(M,"INPUT",{id:!0,type:!0,placeholder:!0}),M.forEach(h),O=R(o),b=_(o,"BUTTON",{});var ee=p(b);F=D(ee,"Roll Dice"),ee.forEach(h),G=R(o),V=_(o,"BUTTON",{});var te=p(V);K=D(te,"Choose Letter"),te.forEach(h),W=R(o),g=_(o,"BUTTON",{});var le=p(g);H=D(le,"Reset"),le.forEach(h),P=R(o),S=_(o,"BUTTON",{});var oe=p(S);Q=D(oe,"Login"),oe.forEach(h),X=R(o),U=_(o,"DIV",{class:!0});var se=p(U);w=_(se,"DIV",{class:!0});var A=p(w);L=_(A,"DIV",{class:!0});var ne=p(L);for(let z=0;z<a.length;z+=1)a[z].l(ne);ne.forEach(h),Z=R(A),k=_(A,"DIV",{class:!0,style:!0}),p(k).forEach(h),A.forEach(h),se.forEach(h),o.forEach(h),this.h()},h(){I(v,"id","password"),I(v,"type","text"),I(v,"placeholder","password"),I(L,"class","containerForGame svelte-14sw0q5"),I(k,"class","player svelte-14sw0q5"),J(k,"left",s[3]+"px"),J(k,"top",s[4]+"px"),I(w,"class","container svelte-14sw0q5"),I(U,"class","cont svelte-14sw0q5"),I(e,"class","bigContainer svelte-14sw0q5")},m(l,o){ie(l,e,o),t(e,n),t(n,c),t(e,u),t(e,i),t(i,m),t(m,d),t(m,T),t(m,y),t(i,N),t(i,v),re(v,s[1]),t(e,O),t(e,b),t(b,F),t(e,G),t(e,V),t(V,K),t(e,W),t(e,g),t(g,H),t(e,P),t(e,S),t(S,Q),t(e,X),t(e,U),t(U,w),t(w,L);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(L,null);t(w,Z),t(w,k),j||($=[C(v,"input",s[10]),C(i,"submit",_e(s[7])),C(b,"click",s[11]),C(V,"click",s[12]),C(g,"click",s[13]),C(S,"click",s[14])],j=!0)},p(l,[o]){if(o&1&&de(T,l[0]),o&2&&v.value!==l[1]&&re(v,l[1]),o&32){B=l[5];let r;for(r=0;r<B.length;r+=1){const M=ae(l,B,r);a[r]?a[r].p(M,o):(a[r]=ce(M),a[r].c(),a[r].m(L,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=B.length}o&8&&J(k,"left",l[3]+"px"),o&16&&J(k,"top",l[4]+"px")},i:x,o:x,d(l){l&&h(e),pe(a,l),j=!1,ve($)}}}function ge(s,e){return Math.floor(Math.random()*(e-s+1)+s)}function be(s,e,n){let c="",u,i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),m=[],d=0,T=35,y=50;for(let g of i)m.push(g);function N(g,H){let P=ge(g,H);return console.log(P,d),P}function v(){console.log(c,u),console.log("heheheha")}function O(){n(3,T=35+d%9*130),n(4,y=50+Math.floor(d/9)*130),console.log(d),Math.floor(d/9)>=4&&(n(3,T=35),n(4,y=50),n(2,d=0))}function b(){n(0,c=c+m[d])}function F(){u=this.value,n(1,u)}return[c,u,d,T,y,m,N,v,O,b,F,()=>{n(2,d+=N(1,6)),O()},()=>{b()},()=>{n(0,c="")},()=>{alert(`Wohoo! You did it!
Surely you didn't click the login button without a username? 
🛺`)}]}class Ee extends he{constructor(e){super(),ue(this,e,be,me,fe,{})}}export{Ee as component};
