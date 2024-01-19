import{S as re,i as ie,s as le,k,q as F,a as R,J as ue,l as _,m as E,r as L,h as w,c as H,n as P,D as g,b as Y,N as he,O as ye,H as ee,K as de,P as ce,I as fe,Q as me,u as te}from"../chunks/index.d86649d9.js";import{p as pe}from"../chunks/parse.bee59afc.js";import{j as ge,k as we}from"../chunks/singletons.be883475.js";import{s as oe}from"../chunks/stores.77cb9d57.js";import{g as be}from"../chunks/_commonjsHelpers.d4b30cbb.js";const ve=ge("invalidate_all");function Ie(e){return we.apply_action(e)}function We(e){const t=JSON.parse(e);return t.data&&(t.data=pe(t.data)),t}function ae(e){return HTMLElement.prototype.cloneNode.call(e)}function ze(e,t=()=>{}){const a=async({action:r,result:i,reset:h=!0,invalidateAll:f=!0})=>{i.type==="success"&&(h&&HTMLFormElement.prototype.reset.call(e),f&&await ve()),(location.origin+location.pathname===r.origin+r.pathname||i.type==="redirect"||i.type==="error")&&Ie(i)};async function d(r){var c,m,x,D;if(((c=r.submitter)!=null&&c.hasAttribute("formmethod")?r.submitter.formMethod:ae(e).method)!=="post")return;r.preventDefault();const h=new URL((m=r.submitter)!=null&&m.hasAttribute("formaction")?r.submitter.formAction:ae(e).action),f=new FormData(e),y=(x=r.submitter)==null?void 0:x.getAttribute("name");y&&f.append(y,((D=r.submitter)==null?void 0:D.getAttribute("value"))??"");const l=new AbortController;let n=!1;const o=await t({action:h,cancel:()=>n=!0,controller:l,get data(){return f},formData:f,get form(){return e},formElement:e,submitter:r.submitter})??a;if(n)return;let u;try{const W=await fetch(h,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:f,signal:l.signal});u=We(await W.text()),u.type==="error"&&(u.status=W.status)}catch(W){if((W==null?void 0:W.name)==="AbortError")return;u={type:"error",error:W}}o({action:h,get data(){return f},formData:f,get form(){return e},formElement:e,update:W=>a({action:h,result:u,reset:W==null?void 0:W.reset,invalidateAll:W==null?void 0:W.invalidateAll}),result:u})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",d),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",d)}}}var K={};K.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];K.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];K.elizaQuits=["bye","goodbye","done","exit","quit"];K.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];K.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];K.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};K.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];K.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var s=K;function b(e){this.noRandom=!!e,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}b.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var e=0;e<s.elizaKeywords.length;e++){this.lastchoice[e]=[];for(var t=s.elizaKeywords[e][2],a=0;a<t.length;a++)this.lastchoice[e][a]=-1}};b.prototype._dataParsed=!1;b.prototype._init=function(){var e={};if(s.elizaSynons&&typeof s.elizaSynons=="object")for(var t in s.elizaSynons)e[t]="("+t+"|"+s.elizaSynons[t].join("|")+")";(!s.elizaKeywords||typeof s.elizaKeywords.length>"u")&&(s.elizaKeywords=[["###",0,[["###",[]]]]]);for(var a=/@(\S+)/,d=/(\S)\s*\*\s*(\S)/,r=/^\s*\*\s*(\S)/,i=/(\S)\s*\*\s*$/,h=/^\s*\*\s*$/,f=/\s+/g,y=0;y<s.elizaKeywords.length;y++){var l=s.elizaKeywords[y][2];s.elizaKeywords[y][3]=y;for(var t=0;t<l.length;t++){var n=l[t];if(n[0].charAt(0)=="$"){for(var p=1;n[0].charAt[p]==" ";)p++;n[0]=n[0].substring(p),n[2]=!0}else n[2]=!1;for(var o=a.exec(n[0]);o;){var u=e[o[1]]?e[o[1]]:o[1];n[0]=n[0].substring(0,o.index)+u+n[0].substring(o.index+o[0].length),o=a.exec(n[0])}if(h.test(n[0]))n[0]="\\s*(.*)\\s*";else{if(o=d.exec(n[0]),o){for(var c="",m=n[0];o;)c+=m.substring(0,o.index+1),o[1]!=")"&&(c+="\\b"),c+="\\s*(.*)\\s*",o[2]!="("&&o[2]!="\\"&&(c+="\\b"),c+=o[2],m=m.substring(o.index+o[0].length),o=d.exec(m);n[0]=c+m}if(o=r.exec(n[0]),o){var c="\\s*(.*)\\s*";o[1]!=")"&&o[1]!="\\"&&(c+="\\b"),n[0]=c+n[0].substring(o.index-1+o[0].length)}if(o=i.exec(n[0]),o){var c=n[0].substring(0,o.index+1);o[1]!="("&&(c+="\\b"),n[0]=c+"\\s*(.*)\\s*"}}n[0]=n[0].replace(f,"\\s+"),f.lastIndex=0}}if(s.elizaKeywords.sort(this._sortKeywords),b.prototype.pres={},b.prototype.posts={},s.elizaPres&&s.elizaPres.length){for(var x=new Array,t=0;t<s.elizaPres.length;t+=2)x.push(s.elizaPres[t]),b.prototype.pres[s.elizaPres[t]]=s.elizaPres[t+1];b.prototype.preExp=new RegExp("\\b("+x.join("|")+")\\b")}else b.prototype.preExp=/####/,b.prototype.pres["####"]="####";if(s.elizaPosts&&s.elizaPosts.length){for(var x=new Array,t=0;t<s.elizaPosts.length;t+=2)x.push(s.elizaPosts[t]),b.prototype.posts[s.elizaPosts[t]]=s.elizaPosts[t+1];b.prototype.postExp=new RegExp("\\b("+x.join("|")+")\\b")}else b.prototype.postExp=/####/,b.prototype.posts["####"]="####";(!s.elizaQuits||typeof s.elizaQuits.length>"u")&&(s.elizaQuits=[]),b.prototype._dataParsed=!0};b.prototype._sortKeywords=function(e,t){return e[1]>t[1]?-1:e[1]<t[1]||e[3]>t[3]?1:e[3]<t[3]?-1:0};b.prototype.transform=function(e){var t="";this.quit=!1,e=e.toLowerCase(),e=e.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),e=e.replace(/\s+-+\s+/g,"."),e=e.replace(/\s*[,\.\?!;]+\s*/g,"."),e=e.replace(/\s*\bbut\b\s*/g,"."),e=e.replace(/\s{2,}/g," ");for(var a=e.split("."),d=0;d<a.length;d++){var r=a[d];if(r!=""){for(var i=0;i<s.elizaQuits.length;i++)if(s.elizaQuits[i]==r)return this.quit=!0,this.getFinal();var h=this.preExp.exec(r);if(h){for(var f="",y=r;h;)f+=y.substring(0,h.index)+this.pres[h[1]],y=y.substring(h.index+h[0].length),h=this.preExp.exec(y);r=f+y}this.sentence=r;for(var l=0;l<s.elizaKeywords.length;l++)if(r.search(new RegExp("\\b"+s.elizaKeywords[l][0]+"\\b","i"))>=0&&(t=this._execRule(l)),t!="")return t}}if(t=this._memGet(),t==""){this.sentence=" ";var l=this._getRuleIndexByKey("xnone");l>=0&&(t=this._execRule(l))}return t!=""?t:"I am at a loss for words."};b.prototype._execRule=function(e){for(var t=s.elizaKeywords[e],a=t[2],d=/\(([0-9]+)\)/,r=0;r<a.length;r++){var i=this.sentence.match(a[r][0]);if(i!=null){var h=a[r][1],f=a[r][2],y=this.noRandom?0:Math.floor(Math.random()*h.length);this.noRandom&&this.lastchoice[e][r]>y||this.lastchoice[e][r]==y?(y=++this.lastchoice[e][r],y>=h.length&&(y=0,this.lastchoice[e][r]=-1)):this.lastchoice[e][r]=y;var l=h[y];if(this.debug&&alert(`match:
key: `+s.elizaKeywords[e][0]+`
rank: `+s.elizaKeywords[e][1]+`
decomp: `+a[r][0]+`
reasmb: `+l+`
memflag: `+f),l.search("^goto ","i")==0){var n=this._getRuleIndexByKey(l.substring(5));if(n>=0)return this._execRule(n)}var p=d.exec(l);if(p){for(var o="",u=l;p;){var c=i[parseInt(p[1])],m=this.postExp.exec(c);if(m){for(var x="",D=c;m;)x+=D.substring(0,m.index)+this.posts[m[1]],D=D.substring(m.index+m[0].length),m=this.postExp.exec(D);c=x+D}o+=u.substring(0,p.index)+c,u=u.substring(p.index+p[0].length),p=d.exec(u)}l=o+u}if(l=this._postTransform(l),f)this._memSave(l);else return l}}return""};b.prototype._postTransform=function(e){if(e=e.replace(/\s{2,}/g," "),e=e.replace(/\s+\./g,"."),s.elizaPostTransforms&&s.elizaPostTransforms.length)for(var t=0;t<s.elizaPostTransforms.length;t+=2)e=e.replace(s.elizaPostTransforms[t],s.elizaPostTransforms[t+1]),s.elizaPostTransforms[t].lastIndex=0;if(this.capitalizeFirstLetter){var a=/^([a-z])/,d=a.exec(e);d&&(e=d[0].toUpperCase()+e.substring(1))}return e};b.prototype._getRuleIndexByKey=function(e){for(var t=0;t<s.elizaKeywords.length;t++)if(s.elizaKeywords[t][0]==e)return t;return-1};b.prototype._memSave=function(e){this.mem.push(e),this.mem.length>this.memSize&&this.mem.shift()};b.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var e=Math.floor(Math.random()*this.mem.length),t=this.mem[e],a=e+1;a<this.mem.length;a++)this.mem[a-1]=this.mem[a];return this.mem.length--,t}else return""};b.prototype.getFinal=function(){return s.elizaFinals?s.elizaFinals[Math.floor(Math.random()*s.elizaFinals.length)]:""};b.prototype.getInitial=function(){return s.elizaInitials?s.elizaInitials[Math.floor(Math.random()*s.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(e){return this[this.length]=e});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var e=this[0],t=1;t<this.length;t++)this[t-1]=this[t];return this.length--,e});var ke=b;const _e=be(ke);const{document:V}=me;function se(e,t,a){const d=e.slice();return d[7]=t[a],d[9]=a,d}function ne(e){let t,a=e[7].text+"",d,r,i,h=e[7].user+"",f,y,l,n="_",p;return{c(){t=k("div"),d=F(a),r=R(),i=k("div"),f=F(h),y=R(),l=k("div"),p=F(n)},l(o){t=_(o,"DIV",{});var u=E(t);d=L(u,a),u.forEach(w),r=H(o),i=_(o,"DIV",{});var c=E(i);f=L(c,h),c.forEach(w),y=H(o),l=_(o,"DIV",{});var m=E(l);p=L(m,n),m.forEach(w)},m(o,u){Y(o,t,u),g(t,d),Y(o,r,u),Y(o,i,u),g(i,f),Y(o,y,u),Y(o,l,u),g(l,p)},p(o,u){u&1&&a!==(a=o[7].text+"")&&te(d,a),u&1&&h!==(h=o[7].user+"")&&te(f,h)},d(o){o&&w(t),o&&w(r),o&&w(i),o&&w(y),o&&w(l)}}}function xe(e){let t,a,d,r,i,h,f,y,l,n,p,o,u,c,m,x,D,W,A,q,N,C,G,Q,J,j=e[0],z=[];for(let v=0;v<j.length;v+=1)z[v]=ne(se(e,j,v));return{c(){t=k("link"),a=k("style"),d=F(`nav {\r
      margin-left: 10%;\r
      margin-right: 10%;\r
    }`),r=R(),i=k("div"),h=k("h1"),f=F("TODO: Complete assignment"),y=R(),l=k("div"),n=k("article");for(let v=0;v<z.length;v+=1)z[v].c();p=R(),o=k("article"),u=k("span"),c=R(),m=k("span"),x=R(),D=k("span"),W=R(),A=k("form"),q=k("input"),N=R(),C=k("button"),G=F("Reset"),this.h()},l(v){const T=ue("svelte-2vsxa2",V.head);t=_(T,"LINK",{rel:!0,href:!0}),a=_(T,"STYLE",{});var I=E(a);d=L(I,`nav {\r
      margin-left: 10%;\r
      margin-right: 10%;\r
    }`),I.forEach(w),T.forEach(w),r=H(v),i=_(v,"DIV",{class:!0});var S=E(i);h=_(S,"H1",{});var $=E(h);f=L($,"TODO: Complete assignment"),$.forEach(w),y=H(S),l=_(S,"DIV",{class:!0});var O=E(l);n=_(O,"ARTICLE",{});var X=E(n);for(let U=0;U<z.length;U+=1)z[U].l(X);X.forEach(w),p=H(O),o=_(O,"ARTICLE",{id:!0,class:!0});var M=E(o);u=_(M,"SPAN",{class:!0}),E(u).forEach(w),c=H(M),m=_(M,"SPAN",{class:!0}),E(m).forEach(w),x=H(M),D=_(M,"SPAN",{class:!0}),E(D).forEach(w),M.forEach(w),O.forEach(w),W=H(S),A=_(S,"FORM",{method:!0});var B=E(A);q=_(B,"INPUT",{type:!0,name:!0}),N=H(B),C=_(B,"BUTTON",{type:!0,name:!0});var Z=E(C);G=L(Z,"Reset"),Z.forEach(w),B.forEach(w),S.forEach(w),this.h()},h(){P(t,"rel","stylesheet"),P(t,"href","/pico.min.css"),P(u,"class","circle svelte-1j8uccr"),P(m,"class","circle svelte-1j8uccr"),P(D,"class","circle svelte-1j8uccr"),P(o,"id","visible"),P(o,"class","svelte-1j8uccr"),P(l,"class","scrollable"),P(q,"type","text"),P(q,"name","text"),P(C,"type","button"),P(C,"name","button"),P(A,"method","post"),P(i,"class","container")},m(v,T){g(V.head,t),g(V.head,a),g(a,d),Y(v,r,T),Y(v,i,T),g(i,h),g(h,f),g(i,y),g(i,l),g(l,n);for(let I=0;I<z.length;I+=1)z[I].m(n,null);g(l,p),g(l,o),g(o,u),g(o,c),g(o,m),g(o,x),g(o,D),g(i,W),g(i,A),g(A,q),g(A,N),g(A,C),g(C,G),Q||(J=[he(C,"click",e[2]),ye(ze.call(null,A,e[3]))],Q=!0)},p(v,[T]){if(T&1){j=v[0];let I;for(I=0;I<j.length;I+=1){const S=se(v,j,I);z[I]?z[I].p(S,T):(z[I]=ne(S),z[I].c(),z[I].m(n,null))}for(;I<z.length;I+=1)z[I].d(1);z.length=j.length}},i:ee,o:ee,d(v){w(t),w(a),v&&w(r),v&&w(i),de(z,v),Q=!1,ce(J)}}}function De(e,t,a){let d;fe(e,oe,n=>a(4,d=n));let r=new _e,i=[];function h(){a(0,i=d),a(0,i),console.log(i,d)}async function f(n,p){i.push({user:p,text:n});var o=document.getElementById("visible");o.style.display="flex",a(0,i);let u=r.transform(n);await new Promise(c=>setTimeout(c,1e3+Math.random()*1e3)),o.style.display="none",i.push({user:"Elizabot",text:u}),a(0,i),oe.set(i)}function y(){a(0,i=[]),a(0,i=[{user:"Elizabot",text:r.getInitial()}]),a(0,i)}return h(),[i,f,y,({form:n,data:p,action:o,cancel:u})=>{u();const c=p.get("text");f(c,"User"),n.reset()}]}class Re extends re{constructor(t){super(),ie(this,t,De,xe,le,{})}}export{Re as component};
