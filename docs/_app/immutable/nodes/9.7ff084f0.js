import{S as C,i as F,s as M,k as c,q as z,a as R,l as f,m as g,r as N,h as u,c as P,n as a,b as U,D as o,O as D,P as H,Q,H as B,R as V}from"../chunks/index.624990d8.js";function j(h){let n,d,_,r,e,t,q,l,b,p,T,w,m,A,v,I,O,L;return{c(){n=c("h1"),d=z("Login form"),_=R(),r=c("div"),e=c("form"),t=c("input"),q=R(),l=c("input"),b=R(),p=c("button"),T=z("Register"),w=R(),m=c("p"),A=z("Dont have an Account? "),v=c("a"),I=z("Register"),this.h()},l(s){n=f(s,"H1",{class:!0});var i=g(n);d=N(i,"Login form"),i.forEach(u),_=P(s),r=f(s,"DIV",{class:!0});var E=g(r);e=f(E,"FORM",{class:!0});var y=g(e);t=f(y,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),q=P(y),l=f(y,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),b=P(y),p=f(y,"BUTTON",{type:!0});var $=g(p);T=N($,"Register"),$.forEach(u),y.forEach(u),w=P(E),m=f(E,"P",{class:!0});var S=g(m);A=N(S,"Dont have an Account? "),v=f(S,"A",{href:!0});var k=g(v);I=N(k,"Register"),k.forEach(u),S.forEach(u),E.forEach(u),this.h()},h(){a(n,"class","svelte-12o7zmq"),a(t,"id","email"),a(t,"type","text"),a(t,"placeholder","E-mail"),a(t,"class","svelte-12o7zmq"),a(l,"id","password"),a(l,"type","text"),a(l,"placeholder","password"),a(l,"class","svelte-12o7zmq"),a(p,"type","submit"),a(e,"class","svelte-12o7zmq"),a(v,"href","/register"),a(m,"class","svelte-12o7zmq"),a(r,"class","formstyle svelte-12o7zmq")},m(s,i){U(s,n,i),o(n,d),U(s,_,i),U(s,r,i),o(r,e),o(e,t),D(t,h[0]),o(e,q),o(e,l),D(l,h[1]),o(e,b),o(e,p),o(p,T),o(r,w),o(r,m),o(m,A),o(m,v),o(v,I),O||(L=[H(t,"input",h[3]),H(l,"input",h[4]),H(e,"submit",Q(h[2]))],O=!0)},p(s,[i]){i&1&&t.value!==s[0]&&D(t,s[0]),i&2&&l.value!==s[1]&&D(l,s[1])},i:B,o:B,d(s){s&&u(n),s&&u(_),s&&u(r),O=!1,V(L)}}}function G(h,n,d){let _,r,e,t,q;function l(){console.log(_,r,e,t,q),console.log("heheheha")}function b(){e=this.value,d(0,e)}function p(){t=this.value,d(1,t)}return[e,t,l,b,p]}class K extends C{constructor(n){super(),F(this,n,G,j,M,{})}}export{K as component};