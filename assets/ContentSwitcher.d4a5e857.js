let n=document.createElement("style");n.innerHTML="",document.head.appendChild(n);import{S as t,i as s,s as a,v as e,w as c,g as p,k as o,l,o as i,x as r,y as u,q as $,I as k,z as d,A as h,t as g,b as f,J as m,B as w,a1 as x,a4 as S,Q as b,C as v,a2 as C,G as y,r as E,aa as A,a5 as I,a6 as j,h as L,n as D,M as _,H as T,c as H,a as R,m as U,d as P,j as B,p as M,N,Y as V,a3 as O}from"./index.c2c9d961.js";import"./Button.37430222.js";import"./index.af83b04a.js";import{C as q,P as z}from"./Preview.4c9c0c28.js";import"./ChevronDown16.d70ae9ed.js";import"./Loading.8dea5962.js";import"./Column.2e03e551.js";import"./Content.94950662.js";import"./store.a9279dc1.js";import{A as G}from"./Add16.6678db18.js";function J(n){let t,s,a,w;const x=n[4].default,S=e(x,n,n[3],null);let b=[{role:"tablist"},n[1]],v={};for(let n=0;n<b.length;n+=1)v=c(v,b[n]);return{c(){t=p("div"),S&&S.c(),this.h()},l(n){t=o(n,"DIV",{role:!0});var s=l(t);S&&S.l(s),s.forEach(i),this.h()},h(){r(t,v),u(t,"bx--content-switcher",!0),u(t,"bx--content-switcher--light",n[0])},m(e,c){$(e,t,c),S&&S.m(t,null),s=!0,a||(w=[k(t,"click",n[5]),k(t,"mouseover",n[6]),k(t,"mouseenter",n[7]),k(t,"mouseleave",n[8])],a=!0)},p(n,[s]){S&&S.p&&8&s&&d(S,x,n,n[3],s,null,null),r(t,v=h(b,[{role:"tablist"},2&s&&n[1]])),u(t,"bx--content-switcher",!0),u(t,"bx--content-switcher--light",n[0])},i(n){s||(g(S,n),s=!0)},o(n){f(S,n),s=!1},d(n){n&&i(t),S&&S.d(n),a=!1,m(w)}}}function Q(n,t,s){const a=["selectedIndex","light"];let e=w(t,a),{$$slots:p={},$$scope:o}=t,{selectedIndex:l=0}=t,{light:i=!1}=t;const r=x(),u=C(null);let $,k;return S("ContentSwitcher",{currentId:u,add:({id:n,text:t,selected:a})=>{a&&s(2,l=k.length),s(10,k=[...k,{id:n,text:t,selected:a}])},update:n=>{s(2,l=k.map(({id:n})=>n).indexOf(n))},change:n=>{let t=$+n;t<0?t=k.length-1:t>=k.length&&(t=0),s(2,l=t)}}),b(()=>{l!==$&&s(9,$=l)}),n.$$set=n=>{t=c(c({},t),v(n)),s(1,e=w(t,a)),"selectedIndex"in n&&s(2,l=n.selectedIndex),"light"in n&&s(0,i=n.light),"$$scope"in n&&s(3,o=n.$$scope)},n.$$.update=()=>{1536&n.$$.dirty&&k[$]&&(r("change",$),u.set(k[$].id))},s(9,$=-1),s(10,k=[]),[i,e,l,o,p,function(t){y(n,t)},function(t){y(n,t)},function(t){y(n,t)},function(t){y(n,t)}]}class Y extends t{constructor(n){super(),s(this,n,Q,J,a,{selectedIndex:2,light:0})}}function F(n){let t,s,a,w,x,S;const b=n[8].default,v=e(b,n,n[7],null),C=v||function(n){let t;return{c(){t=L(n[2])},l(s){t=D(s,n[2])},m(n,s){$(n,t,s)},p(n,s){4&s&&_(t,n[2])},d(n){n&&i(t)}}}(n);let y=[{role:"tab"},{tabindex:a=n[0]?"0":"-1"},{"aria-selected":n[0]},{disabled:n[3]},{id:n[4]},n[6]],I={};for(let n=0;n<y.length;n+=1)I=c(I,y[n]);return{c(){t=p("button"),s=p("span"),C&&C.c(),this.h()},l(n){t=o(n,"BUTTON",{role:!0,tabindex:!0,"aria-selected":!0,disabled:!0,id:!0});var a=l(t);s=o(a,"SPAN",{});var e=l(s);C&&C.l(e),e.forEach(i),a.forEach(i),this.h()},h(){u(s,"bx--content-switcher__label",!0),r(t,I),u(t,"bx--content-switcher-btn",!0),u(t,"bx--content-switcher--selected",n[0])},m(a,e){$(a,t,e),E(t,s),C&&C.m(s,null),n[14](t),w=!0,x||(S=[k(t,"click",n[9]),k(t,"click",A(n[15])),k(t,"mouseover",n[10]),k(t,"mouseenter",n[11]),k(t,"mouseleave",n[12]),k(t,"keydown",n[13]),k(t,"keydown",n[16])],x=!0)},p(n,[s]){v?v.p&&128&s&&d(v,b,n,n[7],s,null,null):C&&C.p&&4&s&&C.p(n,s),r(t,I=h(y,[{role:"tab"},(!w||1&s&&a!==(a=n[0]?"0":"-1"))&&{tabindex:a},(!w||1&s)&&{"aria-selected":n[0]},(!w||8&s)&&{disabled:n[3]},(!w||16&s)&&{id:n[4]},64&s&&n[6]])),u(t,"bx--content-switcher-btn",!0),u(t,"bx--content-switcher--selected",n[0])},i(n){w||(g(C,n),w=!0)},o(n){f(C,n),w=!1},d(s){s&&i(t),C&&C.d(s),n[14](null),x=!1,m(S)}}}function K(n,t,s){const a=["text","selected","disabled","id","ref"];let e=w(t,a),{$$slots:p={},$$scope:o}=t,{text:l="Provide text"}=t,{selected:i=!1}=t,{disabled:r=!1}=t,{id:u="ccs-"+Math.random().toString(36)}=t,{ref:$=null}=t;const k=I("ContentSwitcher");k.add({id:u,text:l,selected:i});const d=k.currentId.subscribe(n=>{s(0,i=n===u)});b(()=>{i&&$.focus()}),j(()=>{d()});return n.$$set=n=>{t=c(c({},t),v(n)),s(6,e=w(t,a)),"text"in n&&s(2,l=n.text),"selected"in n&&s(0,i=n.selected),"disabled"in n&&s(3,r=n.disabled),"id"in n&&s(4,u=n.id),"ref"in n&&s(1,$=n.ref),"$$scope"in n&&s(7,o=n.$$scope)},[i,$,l,r,u,k,e,o,p,function(t){y(n,t)},function(t){y(n,t)},function(t){y(n,t)},function(t){y(n,t)},function(t){y(n,t)},function(n){T[n?"unshift":"push"](()=>{$=n,s(1,$)})},()=>{k.update(u)},({key:n})=>{"ArrowRight"===n?k.change(1):"ArrowLeft"===n&&k.change(-1)}]}class W extends t{constructor(n){super(),s(this,n,K,F,a,{text:2,selected:0,disabled:3,id:4,ref:1})}}function X(n){let t,s,a,e,c,p;return t=new W({props:{text:"Switch 1"}}),a=new W({props:{text:"Switch 2"}}),c=new W({props:{text:"Switch 3"}}),{c(){H(t.$$.fragment),s=B(),H(a.$$.fragment),e=B(),H(c.$$.fragment)},l(n){R(t.$$.fragment,n),s=M(n),R(a.$$.fragment,n),e=M(n),R(c.$$.fragment,n)},m(n,o){U(t,n,o),$(n,s,o),U(a,n,o),$(n,e,o),U(c,n,o),p=!0},p:V,i(n){p||(g(t.$$.fragment,n),g(a.$$.fragment,n),g(c.$$.fragment,n),p=!0)},o(n){f(t.$$.fragment,n),f(a.$$.fragment,n),f(c.$$.fragment,n),p=!1},d(n){P(t,n),n&&i(s),P(a,n),n&&i(e),P(c,n)}}}function Z(n){let t,s;return t=new Y({props:{$$slots:{default:[X]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment)},l(n){R(t.$$.fragment,n)},m(n,a){U(t,n,a),s=!0},p(n,s){const a={};1&s&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){f(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function nn(n){let t,s,a,e,c,p;return t=new W({props:{text:"Switch 1"}}),a=new W({props:{text:"Switch 2"}}),c=new W({props:{text:"Switch 3"}}),{c(){H(t.$$.fragment),s=B(),H(a.$$.fragment),e=B(),H(c.$$.fragment)},l(n){R(t.$$.fragment,n),s=M(n),R(a.$$.fragment,n),e=M(n),R(c.$$.fragment,n)},m(n,o){U(t,n,o),$(n,s,o),U(a,n,o),$(n,e,o),U(c,n,o),p=!0},p:V,i(n){p||(g(t.$$.fragment,n),g(a.$$.fragment,n),g(c.$$.fragment,n),p=!0)},o(n){f(t.$$.fragment,n),f(a.$$.fragment,n),f(c.$$.fragment,n),p=!1},d(n){P(t,n),n&&i(s),P(a,n),n&&i(e),P(c,n)}}}function tn(n){let t,s;return t=new Y({props:{light:!0,$$slots:{default:[nn]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment)},l(n){R(t.$$.fragment,n)},m(n,a){U(t,n,a),s=!0},p(n,s){const a={};1&s&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){f(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function sn(n){let t,s,a,e;return a=new G({props:{style:"margin-left: .25rem;"}}),{c(){t=p("div"),s=L("Third section "),H(a.$$.fragment),this.h()},l(n){t=o(n,"DIV",{style:!0});var e=l(t);s=D(e,"Third section "),R(a.$$.fragment,e),e.forEach(i),this.h()},h(){O(t,"display","flex"),O(t,"align-items","center")},m(n,c){$(n,t,c),E(t,s),U(a,t,null),e=!0},p:V,i(n){e||(g(a.$$.fragment,n),e=!0)},o(n){f(a.$$.fragment,n),e=!1},d(n){n&&i(t),P(a)}}}function an(n){let t,s,a,e;return t=new W({props:{$$slots:{default:[sn]},$$scope:{ctx:n}}}),a=new W({props:{text:"Switch 2"}}),{c(){H(t.$$.fragment),s=B(),H(a.$$.fragment)},l(n){R(t.$$.fragment,n),s=M(n),R(a.$$.fragment,n)},m(n,c){U(t,n,c),$(n,s,c),U(a,n,c),e=!0},p(n,s){const a={};1&s&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){e||(g(t.$$.fragment,n),g(a.$$.fragment,n),e=!0)},o(n){f(t.$$.fragment,n),f(a.$$.fragment,n),e=!1},d(n){P(t,n),n&&i(s),P(a,n)}}}function en(n){let t,s;return t=new Y({props:{$$slots:{default:[an]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment)},l(n){R(t.$$.fragment,n)},m(n,a){U(t,n,a),s=!0},p(n,s){const a={};1&s&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){f(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function cn(n){let t,s,a,e;return t=new W({props:{text:"Switch 1",disabled:!0}}),a=new W({props:{text:"Switch 2",disabled:!0}}),{c(){H(t.$$.fragment),s=B(),H(a.$$.fragment)},l(n){R(t.$$.fragment,n),s=M(n),R(a.$$.fragment,n)},m(n,c){U(t,n,c),$(n,s,c),U(a,n,c),e=!0},p:V,i(n){e||(g(t.$$.fragment,n),g(a.$$.fragment,n),e=!0)},o(n){f(t.$$.fragment,n),f(a.$$.fragment,n),e=!1},d(n){P(t,n),n&&i(s),P(a,n)}}}function pn(n){let t,s;return t=new Y({props:{$$slots:{default:[cn]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment)},l(n){R(t.$$.fragment,n)},m(n,a){U(t,n,a),s=!0},p(n,s){const a={};1&s&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){f(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}function on(n){let t,s,a,e,c,r,u,k,d,h,g,f,m,w,x,S,b,v,C,y,A,I;return{c(){t=p("div"),s=p("ul"),a=p("li"),e=p("a"),c=L("Usage"),r=B(),u=p("ul"),k=p("li"),d=p("a"),h=L("Default"),g=B(),f=p("li"),m=p("a"),w=L("Light variant"),x=B(),S=p("li"),b=p("a"),v=L("Custom switch slot"),C=B(),y=p("li"),A=p("a"),I=L("Disabled"),this.h()},l(n){t=o(n,"DIV",{slot:!0});var p=l(t);s=o(p,"UL",{class:!0});var $=l(s);a=o($,"LI",{class:!0});var E=l(a);e=o(E,"A",{class:!0,href:!0});var j=l(e);c=D(j,"Usage"),j.forEach(i),r=M(E),u=o(E,"UL",{class:!0});var L=l(u);k=o(L,"LI",{class:!0});var _=l(k);d=o(_,"A",{class:!0,href:!0});var T=l(d);h=D(T,"Default"),T.forEach(i),_.forEach(i),g=M(L),f=o(L,"LI",{class:!0});var H=l(f);m=o(H,"A",{class:!0,href:!0});var R=l(m);w=D(R,"Light variant"),R.forEach(i),H.forEach(i),x=M(L),S=o(L,"LI",{class:!0});var U=l(S);b=o(U,"A",{class:!0,href:!0});var P=l(b);v=D(P,"Custom switch slot"),P.forEach(i),U.forEach(i),C=M(L),y=o(L,"LI",{class:!0});var B=l(y);A=o(B,"A",{class:!0,href:!0});var N=l(A);I=D(N,"Disabled"),N.forEach(i),B.forEach(i),L.forEach(i),E.forEach(i),$.forEach(i),p.forEach(i),this.h()},h(){N(e,"class","bx--link"),N(e,"href","#usage"),N(d,"class","bx--link"),N(d,"href","#default"),N(k,"class","bx--list__item"),N(m,"class","bx--link"),N(m,"href","#light-variant"),N(f,"class","bx--list__item"),N(b,"class","bx--link"),N(b,"href","#custom-switch-slot"),N(S,"class","bx--list__item"),N(A,"class","bx--link"),N(A,"href","#disabled"),N(y,"class","bx--list__item"),N(u,"class","bx--list--unordered bx--list--nested"),N(a,"class","bx--list__item"),N(s,"class","bx--list--unordered"),N(t,"slot","aside")},m(n,p){$(n,t,p),E(t,s),E(s,a),E(a,e),E(e,c),E(a,r),E(a,u),E(u,k),E(k,d),E(d,h),E(u,g),E(u,f),E(f,m),E(m,w),E(u,x),E(u,S),E(S,b),E(b,v),E(u,C),E(u,y),E(y,A),E(A,I)},d(n){n&&i(t)}}}function ln(n){let t,s,a,e,c,r,u,k,d,h,m,w,x,S,b,v,C,y,A,I,j;return e=new z({props:{codeRaw:'<script>\n  import { ContentSwitcher, Switch } from "carbon-components-svelte";\n<\/script>\n\n<ContentSwitcher>\n  <Switch text="Switch 1" />\n  <Switch text="Switch 2" />\n  <Switch text="Switch 3" />\n</ContentSwitcher>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ContentSwitcher<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentSwitcher</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentSwitcher</span><span class="token punctuation">></span></span>\n',$$slots:{default:[Z]},$$scope:{ctx:n}}}),d=new z({props:{codeRaw:'<script>\n  import { ContentSwitcher, Switch } from "carbon-components-svelte";\n<\/script>\n\n<ContentSwitcher light>\n  <Switch text="Switch 1" />\n  <Switch text="Switch 2" />\n  <Switch text="Switch 3" />\n</ContentSwitcher>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ContentSwitcher<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentSwitcher</span> <span class="token attr-name">light</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 3<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentSwitcher</span><span class="token punctuation">></span></span>\n',$$slots:{default:[tn]},$$scope:{ctx:n}}}),S=new z({props:{codeRaw:'<script>\n  import { ContentSwitcher, Switch } from "carbon-components-svelte";\n  import Add16 from "carbon-icons-svelte/lib/Add16";\n<\/script>\n\n<ContentSwitcher>\n  <Switch>\n    <div style="display: flex; align-items: center;">\n      Third section\n      <Add16 style="margin-left: .25rem;" />\n    </div>\n  </Switch>\n  <Switch text="Switch 2" />\n</ContentSwitcher>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ContentSwitcher<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> Add16 <span class="token keyword">from</span> <span class="token string">"carbon-icons-svelte/lib/Add16"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentSwitcher</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>display: flex; align-items: center;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      Third section\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Add16</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>margin-left: .25rem;<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Switch</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 2<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentSwitcher</span><span class="token punctuation">></span></span>\n',$$slots:{default:[en]},$$scope:{ctx:n}}}),A=new z({props:{codeRaw:'<script>\n  import { ContentSwitcher, Switch } from "carbon-components-svelte";\n<\/script>\n\n<ContentSwitcher>\n  <Switch text="Switch 1" disabled />\n  <Switch text="Switch 2" disabled />\n</ContentSwitcher>\n',code:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> ContentSwitcher<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"carbon-components-svelte"</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ContentSwitcher</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 1<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Switch 2<span class="token punctuation">"</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ContentSwitcher</span><span class="token punctuation">></span></span>\n',$$slots:{default:[pn]},$$scope:{ctx:n}}}),{c(){t=p("h3"),s=L("Default"),a=B(),H(e.$$.fragment),c=B(),r=p("h3"),u=L("Light variant"),k=B(),H(d.$$.fragment),h=B(),m=p("h3"),w=L("Custom switch slot"),x=B(),H(S.$$.fragment),b=B(),v=p("h3"),C=L("Disabled"),y=B(),H(A.$$.fragment),I=B(),this.h()},l(n){t=o(n,"H3",{id:!0});var p=l(t);s=D(p,"Default"),p.forEach(i),a=M(n),R(e.$$.fragment,n),c=M(n),r=o(n,"H3",{id:!0});var $=l(r);u=D($,"Light variant"),$.forEach(i),k=M(n),R(d.$$.fragment,n),h=M(n),m=o(n,"H3",{id:!0});var g=l(m);w=D(g,"Custom switch slot"),g.forEach(i),x=M(n),R(S.$$.fragment,n),b=M(n),v=o(n,"H3",{id:!0});var f=l(v);C=D(f,"Disabled"),f.forEach(i),y=M(n),R(A.$$.fragment,n),I=M(n),this.h()},h(){N(t,"id","default"),N(r,"id","light-variant"),N(m,"id","custom-switch-slot"),N(v,"id","disabled")},m(n,p){$(n,t,p),E(t,s),$(n,a,p),U(e,n,p),$(n,c,p),$(n,r,p),E(r,u),$(n,k,p),U(d,n,p),$(n,h,p),$(n,m,p),E(m,w),$(n,x,p),U(S,n,p),$(n,b,p),$(n,v,p),E(v,C),$(n,y,p),U(A,n,p),$(n,I,p),j=!0},p(n,t){const s={};1&t&&(s.$$scope={dirty:t,ctx:n}),e.$set(s);const a={};1&t&&(a.$$scope={dirty:t,ctx:n}),d.$set(a);const c={};1&t&&(c.$$scope={dirty:t,ctx:n}),S.$set(c);const p={};1&t&&(p.$$scope={dirty:t,ctx:n}),A.$set(p)},i(n){j||(g(e.$$.fragment,n),g(d.$$.fragment,n),g(S.$$.fragment,n),g(A.$$.fragment,n),j=!0)},o(n){f(e.$$.fragment,n),f(d.$$.fragment,n),f(S.$$.fragment,n),f(A.$$.fragment,n),j=!1},d(n){n&&i(t),n&&i(a),P(e,n),n&&i(c),n&&i(r),n&&i(k),P(d,n),n&&i(h),n&&i(m),n&&i(x),P(S,n),n&&i(b),n&&i(v),n&&i(y),P(A,n),n&&i(I)}}}function rn(n){let t,s;return t=new q({props:{$$slots:{default:[ln],aside:[on]},$$scope:{ctx:n}}}),{c(){H(t.$$.fragment)},l(n){R(t.$$.fragment,n)},m(n,a){U(t,n,a),s=!0},p(n,[s]){const a={};1&s&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){s||(g(t.$$.fragment,n),s=!0)},o(n){f(t.$$.fragment,n),s=!1},d(n){P(t,n)}}}export default class extends t{constructor(n){super(),s(this,n,null,rn,a,{})}}
