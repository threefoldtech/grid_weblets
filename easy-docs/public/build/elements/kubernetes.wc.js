!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(t,...n){if(null==t)return e;const l=t.subscribe(...n);return l.unsubscribe?()=>l.unsubscribe():l}function c(e,t){e.appendChild(t)}function i(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function f(){return d("")}function m(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function h(e){return function(t){return t.preventDefault(),e.call(this,t)}}function b(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function y(e){return""===e?null:+e}function g(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function v(e,t){e.value=null==t?"":t}function k(e,t,n,l){e.style.setProperty(t,n,l?"important":"")}function w(e,t){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}e.selectedIndex=-1}function x(e){const t={};for(const n of e)t[n.name]=n.value;return t}let $;function _(e){$=e}const S=[],C=[],M=[],N=[],E=Promise.resolve();let P=!1;function z(e){M.push(e)}let R=!1;const T=new Set;function j(){if(!R){R=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];_(t),K(t.$$)}for(_(null),S.length=0;C.length;)C.pop()();for(let e=0;e<M.length;e+=1){const t=M[e];T.has(t)||(T.add(t),t())}M.length=0}while(S.length);for(;N.length;)N.pop()();P=!1,R=!1,T.clear()}}function K(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const L=new Set;function O(e,t){e&&e.i&&(L.delete(e),e.i(t))}function I(e,t){e.d(1),t.delete(e.key)}function D(e,t,n,l,o,r,s,c,i,a,u,d){let p=e.length,f=r.length,m=p;const h={};for(;m--;)h[e[m].key]=m;const b=[],y=new Map,g=new Map;for(m=f;m--;){const e=d(o,r,m),c=n(e);let i=s.get(c);i?l&&i.p(e,t):(i=a(c,e),i.c()),y.set(c,b[m]=i),c in h&&g.set(c,Math.abs(m-h[c]))}const v=new Set,k=new Set;function w(e){O(e,1),e.m(c,u),s.set(e.key,e),u=e.first,f--}for(;p&&f;){const t=b[f-1],n=e[p-1],l=t.key,o=n.key;t===n?(u=t.first,p--,f--):y.has(o)?!s.has(l)||v.has(l)?w(t):k.has(o)?p--:g.get(l)>g.get(o)?(k.add(l),w(t)):(v.add(o),p--):(i(n,s),p--)}for(;p--;){const t=e[p];y.has(t.key)||i(t,s)}for(;f;)w(b[f-1]);return b}function H(e,t){-1===e.$$.dirty[0]&&(S.push(e),P||(P=!0,E.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function A(r,s,c,i,u,d,p,f=[-1]){const m=$;_(r);const h=r.$$={fragment:null,ctx:null,props:d,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||m.$$.root};p&&p(h.root);let b=!1;if(h.ctx=c?c(r,s.props||{},((e,t,...n)=>{const l=n.length?n[0]:t;return h.ctx&&u(h.ctx[e],h.ctx[e]=l)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](l),b&&H(r,e)),t})):[],h.update(),b=!0,l(h.before_update),h.fragment=!!i&&i(h.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);h.fragment&&h.fragment.l(e),e.forEach(a)}else h.fragment&&h.fragment.c();s.intro&&O(r.$$.fragment),function(e,n,r,s){const{fragment:c,on_mount:i,on_destroy:a,after_update:u}=e.$$;c&&c.m(n,r),s||z((()=>{const n=i.map(t).filter(o);a?a.push(...n):l(n),e.$$.on_mount=[]})),u.forEach(z)}(r,s.target,s.anchor,s.customElement),j()}_(m)}let B;var F;"function"==typeof HTMLElement&&(B=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(o);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){l(this.$$.on_disconnect)}$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});var U=new Uint8Array(16);function V(){if(!F&&!(F="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return F(U)}var Y=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function G(e){return"string"==typeof e&&Y.test(e)}for(var W,q,J=[],Q=0;Q<256;++Q)J.push((Q+256).toString(16).substr(1));function X(e,t,n){var l=(e=e||{}).random||(e.rng||V)();if(l[6]=15&l[6]|64,l[8]=63&l[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=l[o];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(J[e[t+0]]+J[e[t+1]]+J[e[t+2]]+J[e[t+3]]+"-"+J[e[t+4]]+J[e[t+5]]+"-"+J[e[t+6]]+J[e[t+7]]+"-"+J[e[t+8]]+J[e[t+9]]+"-"+J[e[t+10]]+J[e[t+11]]+J[e[t+12]]+J[e[t+13]]+J[e[t+14]]+J[e[t+15]]).toLowerCase();if(!G(n))throw TypeError("Stringified UUID is invalid");return n}(l)}function Z(e){const t=+e;return"number"==typeof t&&!isNaN(t)&&t>=0&&t.toFixed(0)===t.toString()}class ee{constructor(e=X(),t="vm_"+e.split("-")[0],n=0,l=0,o=100,r=!1,s=0,c=25,i=!0){this.id=e,this.name=t,this.node=n,this.cpu=l,this.diskSize=o,this.publicIp=r,this.memory=s,this.rootFsSize=c,this.plantery=i}get valid(){const{name:e,node:t,cpu:n,diskSize:l,memory:o,rootFsSize:r}=this;return""!==e&&Z(t)&&Z(n)&&Z(l)&&Z(o)&&Z(r)}}class te extends ee{}class ne extends ee{}class le{constructor(e="nw_"+X().split("-")[0],t="10.20.0.0/16"){this.name=e,this.ipRange=t}get valid(){const{name:e,ipRange:t}=this;return""!==e&&""!==t}}class oe{constructor(e=X(),t=new te,n=[new ne],l=new le,o="",r="",s="",c="",i="",a=window.configs.baseConfig){this.id=e,this.master=t,this.workers=n,this.network=l,this.name=o,this.secret=r,this.sshKey=s,this.metadata=c,this.description=i,this.configs=a}get valid(){const{secret:e,sshKey:t,master:n,workers:l,network:o}=this;return""!==e&&""!==t&&n.valid&&o.valid&&l.reduce(((e,t)=>e&&t.valid),!0)}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */const{NetworkModel:re}=null!==(q=null===(W=window.configs)||void 0===W?void 0:W.grid3_client)&&void 0!==q?q:{};var se,ce,ie,ae;const{HTTPMessageBusClient:ue}=null!==(ce=null===(se=window.configs)||void 0===se?void 0:se.client)&&void 0!==ce?ce:{},{GridClient:de,K8SModel:pe,KubernetesNodeModel:fe}=null!==(ae=null===(ie=window.configs)||void 0===ie?void 0:ie.grid3_client)&&void 0!==ae?ae:{};async function me(e){const{configs:t,master:n,workers:l,network:o}=e,r=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]])}return n}(e,["configs","master","workers","network"]),{secret:c,sshKey:i,description:a,metadata:u,name:d}=r,{mnemonics:p,storeSecret:f,networkEnv:m}=function(e){let t;return s(e,(e=>t=e))(),t}(t),h=new ue(0,""),b=new de(m,p,await async function(e){}(),f,h,void 0,"tfkvstore"),y=[he(n)],g=l.map(he),v=new pe;return v.name=d,v.secret=c,v.network=function(e){const t=new re;return t.name=e.name,t.ip_range=e.ipRange,t}(o),v.masters=y,v.workers=g,v.metadata=u,v.description=a,v.ssh_key=i,b.connect().then((()=>b.k8s.deploy(v)))}function he(e){const t=new fe;return t.name=e.name,t.node_id=e.node,t.cpu=e.cpu,t.disk_size=e.diskSize,t.memory=e.memory,t.public_ip=e.publicIp,t.rootfs_size=e.rootFsSize,t.planetary=e.plantery,t}function be(e,t,n){const l=e.slice();return l[35]=t[n],l[36]=t,l[37]=n,l}function ye(e,t,n){const l=e.slice();return l[38]=t[n],l[39]=t,l[40]=n,l}function ge(e,t,n){const l=e.slice();return l[35]=t[n],l[41]=t,l[42]=n,l}function ve(e,t,n){const l=e.slice();return l[35]=t[n],l[43]=t,l[44]=n,l}function ke(e,t,n){const l=e.slice();return l[35]=t[n],l[45]=t,l[46]=n,l}function we(e,t,n){const l=e.slice();return l[35]=t[n],l[47]=t,l[48]=n,l}function xe(e,t,n){const l=e.slice();return l[49]=t[n],l}function $e(e){let t,n,l,o,r,s,d,h,y,g,v,x,$,_,S=[],C=new Map,M=e[12];const N=e=>e[49].label;for(let t=0;t<M.length;t+=1){let n=xe(e,M,t),l=N(n);C.set(l,S[t]=Me(l,n))}let E="Config"===e[1]&&Ne(e),P="Master"===e[1]&&Te(e),R="Workers"===e[1]&&Ke(e),T="Credentials"===e[1]&&Ie(e);return{c(){t=u("div"),n=u("select"),l=u("option"),l.textContent="Testnet",o=u("option"),o.textContent="Devnet",r=p(),s=u("div"),d=u("ul");for(let e=0;e<S.length;e+=1)S[e].c();h=p(),E&&E.c(),y=p(),P&&P.c(),g=p(),R&&R.c(),v=p(),T&&T.c(),x=f(),l.__value="test",l.value=l.__value,o.__value="dev",o.value=o.__value,void 0===e[6].networkEnv&&z((()=>e[14].call(n))),b(t,"class","select mb-4"),k(t,"display","flex"),k(t,"justify-content","flex-end"),b(s,"class","tabs is-centered")},m(a,u){i(a,t,u),c(t,n),c(n,l),c(n,o),w(n,e[6].networkEnv),i(a,r,u),i(a,s,u),c(s,d);for(let e=0;e<S.length;e+=1)S[e].m(d,null);i(a,h,u),E&&E.m(a,u),i(a,y,u),P&&P.m(a,u),i(a,g,u),R&&R.m(a,u),i(a,v,u),T&&T.m(a,u),i(a,x,u),$||(_=m(n,"change",e[14]),$=!0)},p(e,t){64&t[0]&&w(n,e[6].networkEnv),4098&t[0]&&(M=e[12],S=D(S,t,N,1,e,M,C,d,I,Me,null,xe)),"Config"===e[1]?E?E.p(e,t):(E=Ne(e),E.c(),E.m(y.parentNode,y)):E&&(E.d(1),E=null),"Master"===e[1]?P?P.p(e,t):(P=Te(e),P.c(),P.m(g.parentNode,g)):P&&(P.d(1),P=null),"Workers"===e[1]?R?R.p(e,t):(R=Ke(e),R.c(),R.m(v.parentNode,v)):R&&(R.d(1),R=null),"Credentials"===e[1]?T?T.p(e,t):(T=Ie(e),T.c(),T.m(x.parentNode,x)):T&&(T.d(1),T=null)},d(e){e&&a(t),e&&a(r),e&&a(s);for(let e=0;e<S.length;e+=1)S[e].d();e&&a(h),E&&E.d(e),e&&a(y),P&&P.d(e),e&&a(g),R&&R.d(e),e&&a(v),T&&T.d(e),e&&a(x),$=!1,_()}}}function _e(e){let t,n;function l(e,t){return e[5]?Fe:Be}let o=l(e),r=o(e);return{c(){t=u("div"),n=d(">\n        "),r.c(),b(t,"class","notification is-danger")},m(e,l){i(e,t,l),c(t,n),r.m(t,null)},p(e,n){o===(o=l(e))&&r?r.p(e,n):(r.d(1),r=o(e),r&&(r.c(),r.m(t,null)))},d(e){e&&a(t),r.d()}}}function Se(t){let n;return{c(){n=u("div"),n.textContent="> Successfully deployed K8S.",b(n,"class","notification is-success")},m(e,t){i(e,n,t)},p:e,d(e){e&&a(n)}}}function Ce(e){let t;function n(e,t){return e[5]?Ve:Ue}let l=n(e),o=l(e);return{c(){t=u("div"),o.c(),b(t,"class","notification is-info")},m(e,n){i(e,t,n),o.m(t,null)},p(e,r){l===(l=n(e))&&o?o.p(e,r):(o.d(1),o=l(e),o&&(o.c(),o.m(t,null)))},d(e){e&&a(t),o.d()}}}function Me(e,t){let n,l,o,r,s,f,y,g,v=t[49].label+"";function k(){return t[15](t[49])}return{key:e,first:null,c(){n=u("li"),l=u("a"),o=u("span"),r=d(v),s=p(),b(l,"href","#!"),b(n,"class",f=t[1]===t[49].label?"is-active":""),this.first=n},m(e,t){i(e,n,t),c(n,l),c(l,o),c(o,r),c(n,s),y||(g=m(l,"click",h(k)),y=!0)},p(e,l){t=e,2&l[0]&&f!==(f=t[1]===t[49].label?"is-active":"")&&b(n,"class",f)},d(e){e&&a(n),y=!1,g()}}}function Ne(e){let t,n,l=[],o=new Map,r=[],s=new Map,c=e[8];const u=e=>e[35].symbol;for(let t=0;t<c.length;t+=1){let n=we(e,c,t),r=u(n);o.set(r,l[t]=ze(r,n))}let d=e[9];const m=e=>e[35].symbol;for(let t=0;t<d.length;t+=1){let n=ke(e,d,t),l=m(n);s.set(l,r[t]=Re(l,n))}return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=p();for(let e=0;e<r.length;e+=1)r[e].c();n=f()},m(e,o){for(let t=0;t<l.length;t+=1)l[t].m(e,o);i(e,t,o);for(let t=0;t<r.length;t+=1)r[t].m(e,o);i(e,n,o)},p(e,i){257&i[0]&&(c=e[8],l=D(l,i,u,1,e,c,o,t.parentNode,I,ze,t,we)),513&i[0]&&(d=e[9],r=D(r,i,m,1,e,d,s,n.parentNode,I,Re,n,ke))},d(e){for(let t=0;t<l.length;t+=1)l[t].d(e);e&&a(t);for(let t=0;t<r.length;t+=1)r[t].d(e);e&&a(n)}}}function Ee(e){let t,n,l;function o(){e[17].call(t,e[35])}return{c(){t=u("input"),b(t,"class","input"),b(t,"type","text"),b(t,"placeholder",e[35].placeholder)},m(r,s){i(r,t,s),v(t,e[0][e[35].symbol]),n||(l=m(t,"input",o),n=!0)},p(n,l){e=n,257&l[0]&&t.value!==e[0][e[35].symbol]&&v(t,e[0][e[35].symbol])},d(e){e&&a(t),n=!1,l()}}}function Pe(e){let t,n,l;function o(){e[16].call(t,e[35])}return{c(){t=u("textarea"),b(t,"class","textarea"),b(t,"placeholder",e[35].placeholder)},m(r,s){i(r,t,s),v(t,e[0][e[35].symbol]),n||(l=m(t,"input",o),n=!0)},p(n,l){e=n,257&l[0]&&v(t,e[0][e[35].symbol])},d(e){e&&a(t),n=!1,l()}}}function ze(e,t){let n,l,o,r,s,f,m=t[35].label+"";let h=function(e,t){return e[35].textarea?Pe:Ee}(t),y=h(t);return{key:e,first:null,c(){n=u("div"),l=u("p"),o=d(m),r=p(),s=u("div"),y.c(),f=p(),b(l,"class","label"),b(s,"class","control"),b(n,"class","field"),this.first=n},m(e,t){i(e,n,t),c(n,l),c(l,o),c(n,r),c(n,s),y.m(s,null),c(n,f)},p(e,n){t=e,y.p(t,n)},d(e){e&&a(n),y.d()}}}function Re(e,t){let n,l,o,r,s,f,h,y,g,k,w=t[35].label+"";function x(){t[18].call(f,t[35])}return{key:e,first:null,c(){n=u("div"),l=u("p"),o=d(w),r=p(),s=u("div"),f=u("input"),y=p(),b(l,"class","label"),b(f,"class","input"),b(f,"type","text"),b(f,"placeholder",h=t[35].placeholder),b(s,"class","control"),b(n,"class","field"),this.first=n},m(e,a){i(e,n,a),c(n,l),c(l,o),c(n,r),c(n,s),c(s,f),v(f,t[0].network[t[35].symbol]),c(n,y),g||(k=m(f,"input",x),g=!0)},p(e,n){t=e,513&n[0]&&f.value!==t[0].network[t[35].symbol]&&v(f,t[0].network[t[35].symbol])},d(e){e&&a(n),g=!1,k()}}}function Te(e){let t,n=[],l=new Map,o=e[10];const r=e=>e[35].symbol;for(let t=0;t<o.length;t+=1){let s=ve(e,o,t),c=r(s);l.set(c,n[t]=je(c,s))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=f()},m(e,l){for(let t=0;t<n.length;t+=1)n[t].m(e,l);i(e,t,l)},p(e,s){1025&s[0]&&(o=e[10],n=D(n,s,r,1,e,o,l,t.parentNode,I,je,t,ve))},d(e){for(let t=0;t<n.length;t+=1)n[t].d(e);e&&a(t)}}}function je(t,n){let l,o,r,s,f,h,g,k,w,x=n[35].label+"",$=n[35].link&&function(t){let n,l,o,r,s,p=t[35].link.label+"";return{c(){n=d("("),l=u("a"),o=d(p),s=d(")"),b(l,"href",r=t[35].link.url),b(l,"target","_blank")},m(e,t){i(e,n,t),i(e,l,t),c(l,o),i(e,s,t)},p:e,d(e){e&&a(n),e&&a(l),e&&a(s)}}}(n),_="number"===n[35].type&&function(e){let t,n,l,o;function r(){e[19].call(t,e[35])}return{c(){t=u("input"),b(t,"class","input"),b(t,"type","number"),b(t,"placeholder",n=e[35].placeholder)},m(n,s){i(n,t,s),v(t,e[0].master[e[35].symbol]),l||(o=m(t,"input",r),l=!0)},p(n,l){e=n,1025&l[0]&&y(t.value)!==e[0].master[e[35].symbol]&&v(t,e[0].master[e[35].symbol])},d(e){e&&a(t),l=!1,o()}}}(n),S="checkbox"===n[35].type&&function(e){let t,n,l,o,r,s,f,h=e[35].label+"";function y(){return e[20](e[35])}return{c(){t=u("label"),n=u("input"),o=p(),r=d(h),b(n,"type","checkbox"),n.checked=l=e[0].master[e[35].symbol],b(t,"class","checkbox")},m(e,l){i(e,t,l),c(t,n),c(t,o),c(t,r),s||(f=m(n,"change",y),s=!0)},p(t,o){e=t,1&o[0]&&l!==(l=e[0].master[e[35].symbol])&&(n.checked=l)},d(e){e&&a(t),s=!1,f()}}}(n),C=!n[35].type&&function(e){let t,n,l,o;function r(){e[21].call(t,e[35])}return{c(){t=u("input"),b(t,"class","input"),b(t,"type","text"),b(t,"placeholder",n=e[35].placeholder)},m(n,s){i(n,t,s),v(t,e[0].master[e[35].symbol]),l||(o=m(t,"input",r),l=!0)},p(n,l){e=n,1025&l[0]&&t.value!==e[0].master[e[35].symbol]&&v(t,e[0].master[e[35].symbol])},d(e){e&&a(t),l=!1,o()}}}(n);return{key:t,first:null,c(){l=u("div"),o=u("p"),r=d(x),s=p(),$&&$.c(),f=p(),h=u("div"),_&&_.c(),g=p(),S&&S.c(),k=p(),C&&C.c(),w=p(),b(o,"class","label"),b(h,"class","control"),b(l,"class","field"),this.first=l},m(e,t){i(e,l,t),c(l,o),c(o,r),c(o,s),$&&$.m(o,null),c(l,f),c(l,h),_&&_.m(h,null),c(h,g),S&&S.m(h,null),c(h,k),C&&C.m(h,null),c(l,w)},p(e,t){(n=e)[35].link&&$.p(n,t),"number"===n[35].type&&_.p(n,t),"checkbox"===n[35].type&&S.p(n,t),n[35].type||C.p(n,t)},d(e){e&&a(l),$&&$.d(),_&&_.d(),S&&S.d(),C&&C.d()}}}function Ke(e){let t,n,l,o,r,s,d=[],f=new Map,h=e[0].workers;const y=e=>e[38].id;for(let t=0;t<h.length;t+=1){let n=ye(e,h,t),l=y(n);f.set(l,d[t]=Oe(l,n))}return{c(){t=u("div"),n=u("button"),n.innerHTML="<span>+</span>",l=p(),o=u("div");for(let e=0;e<d.length;e+=1)d[e].c();b(n,"type","button"),b(n,"class","button is-primary"),b(t,"class","actions"),k(t,"margin-bottom","20px"),b(o,"class","worker-container")},m(a,u){i(a,t,u),c(t,n),i(a,l,u),i(a,o,u);for(let e=0;e<d.length;e+=1)d[e].m(o,null);r||(s=m(n,"click",e[22]),r=!0)},p(e,t){1025&t[0]&&(h=e[0].workers,d=D(d,t,y,1,e,h,f,o,I,Oe,null,ye))},d(e){e&&a(t),e&&a(l),e&&a(o);for(let e=0;e<d.length;e+=1)d[e].d();r=!1,s()}}}function Le(t,n){let l,o,r,s,f,h,g,k,w=n[35].label+"",x=n[35].link&&function(t){let n,l,o,r,s,p=t[35].link.label+"";return{c(){n=d("("),l=u("a"),o=d(p),s=d(")"),b(l,"href",r=t[35].link.url),b(l,"target","_blank")},m(e,t){i(e,n,t),i(e,l,t),c(l,o),i(e,s,t)},p:e,d(e){e&&a(n),e&&a(l),e&&a(s)}}}(n),$="number"===n[35].type&&function(e){let t,n,l,o;function r(){e[24].call(t,e[35],e[39],e[40])}return{c(){t=u("input"),b(t,"class","input"),b(t,"type","number"),b(t,"placeholder",n=e[35].placeholder)},m(n,s){i(n,t,s),v(t,e[38][e[35].symbol]),l||(o=m(t,"input",r),l=!0)},p(n,l){e=n,1025&l[0]&&y(t.value)!==e[38][e[35].symbol]&&v(t,e[38][e[35].symbol])},d(e){e&&a(t),l=!1,o()}}}(n),_="checkbox"===n[35].type&&function(e){let t,n,l,o,r,s,f,h=e[35].label+"";function y(){return e[25](e[38],e[35],e[39],e[40])}return{c(){t=u("label"),n=u("input"),o=p(),r=d(h),b(n,"type","checkbox"),n.checked=l=e[38][e[35].symbol],b(t,"class","checkbox")},m(e,l){i(e,t,l),c(t,n),c(t,o),c(t,r),s||(f=m(n,"change",y),s=!0)},p(t,o){e=t,1&o[0]&&l!==(l=e[38][e[35].symbol])&&(n.checked=l)},d(e){e&&a(t),s=!1,f()}}}(n),S=!n[35].type&&function(e){let t,n,l,o;function r(){e[26].call(t,e[35],e[39],e[40])}return{c(){t=u("input"),b(t,"class","input"),b(t,"type","text"),b(t,"placeholder",n=e[35].placeholder)},m(n,s){i(n,t,s),v(t,e[38][e[35].symbol]),l||(o=m(t,"input",r),l=!0)},p(n,l){e=n,1025&l[0]&&t.value!==e[38][e[35].symbol]&&v(t,e[38][e[35].symbol])},d(e){e&&a(t),l=!1,o()}}}(n);return{key:t,first:null,c(){l=u("div"),o=u("p"),r=d(w),s=p(),x&&x.c(),f=p(),h=u("div"),$&&$.c(),g=p(),_&&_.c(),k=p(),S&&S.c(),b(o,"class","label"),b(h,"class","control"),b(l,"class","field"),this.first=l},m(e,t){i(e,l,t),c(l,o),c(o,r),c(o,s),x&&x.m(o,null),c(l,f),c(l,h),$&&$.m(h,null),c(h,g),_&&_.m(h,null),c(h,k),S&&S.m(h,null)},p(e,t){(n=e)[35].link&&x.p(n,t),"number"===n[35].type&&$.p(n,t),"checkbox"===n[35].type&&_.p(n,t),n[35].type||S.p(n,t)},d(e){e&&a(l),x&&x.d(),$&&$.d(),_&&_.d(),S&&S.d()}}}function Oe(e,t){let n,l,o,r,s,f,h,y,v,k,w=t[38].name+"",x=[],$=new Map;function _(){return t[23](t[40])}let S=t[10];const C=e=>e[35].symbol;for(let e=0;e<S.length;e+=1){let n=ge(t,S,e),l=C(n);$.set(l,x[e]=Le(l,n))}return{key:e,first:null,c(){n=u("div"),l=u("div"),o=u("p"),r=d(w),s=p(),f=u("button"),f.innerHTML="<span>-</span>",h=p();for(let e=0;e<x.length;e+=1)x[e].c();y=p(),b(o,"class","is-size-5 has-text-weight-bold"),b(f,"type","button"),b(f,"class","button is-danger"),b(l,"class","worker-header"),b(n,"class","box"),this.first=n},m(e,t){i(e,n,t),c(n,l),c(l,o),c(o,r),c(l,s),c(l,f),c(n,h);for(let e=0;e<x.length;e+=1)x[e].m(n,null);c(n,y),v||(k=m(f,"click",_),v=!0)},p(e,l){t=e,1&l[0]&&w!==(w=t[38].name+"")&&g(r,w),1025&l[0]&&(S=t[10],x=D(x,l,C,1,t,S,$,n,I,Le,y,ge))},d(e){e&&a(n);for(let e=0;e<x.length;e+=1)x[e].d();v=!1,k()}}}function Ie(e){let t,n=[],l=new Map,o=e[11];const r=e=>e[35].symbol;for(let t=0;t<o.length;t+=1){let s=be(e,o,t),c=r(s);l.set(c,n[t]=Ae(c,s))}return{c(){for(let e=0;e<n.length;e+=1)n[e].c();t=f()},m(e,l){for(let t=0;t<n.length;t+=1)n[t].m(e,l);i(e,t,l)},p(e,s){2112&s[0]&&(o=e[11],n=D(n,s,r,1,e,o,l,t.parentNode,I,Ae,t,be))},d(e){for(let t=0;t<n.length;t+=1)n[t].d(e);e&&a(t)}}}function De(e){let t,n,l;function o(){e[28].call(t,e[35])}return{c(){t=u("input"),b(t,"class","input"),b(t,"type","text"),b(t,"placeholder",e[35].placeholder)},m(r,s){i(r,t,s),v(t,e[6][e[35].symbol]),n||(l=m(t,"input",o),n=!0)},p(n,l){e=n,2112&l[0]&&t.value!==e[6][e[35].symbol]&&v(t,e[6][e[35].symbol])},d(e){e&&a(t),n=!1,l()}}}function He(e){let t,n,l;function o(){e[27].call(t,e[35])}return{c(){t=u("input"),b(t,"class","input"),b(t,"type","password"),b(t,"autocomplete","off"),b(t,"placeholder",e[35].placeholder)},m(r,s){i(r,t,s),v(t,e[6][e[35].symbol]),n||(l=m(t,"input",o),n=!0)},p(n,l){e=n,2112&l[0]&&t.value!==e[6][e[35].symbol]&&v(t,e[6][e[35].symbol])},d(e){e&&a(t),n=!1,l()}}}function Ae(e,t){let n,l,o,r,s,f,m=t[35].label+"";let h=function(e,t){return"password"===e[35].type?He:De}(t),y=h(t);return{key:e,first:null,c(){n=u("div"),l=u("p"),o=d(m),r=p(),s=u("div"),y.c(),f=p(),b(l,"class","label"),b(s,"class","control"),b(n,"class","field"),this.first=n},m(e,t){i(e,n,t),c(n,l),c(l,o),c(n,r),c(n,s),y.m(s,null),c(n,f)},p(e,n){t=e,y.p(t,n)},d(e){e&&a(n),y.d()}}}function Be(t){let n;return{c(){n=d("Failed to deploy K8S.")},m(e,t){i(e,n,t)},p:e,d(e){e&&a(n)}}}function Fe(e){let t;return{c(){t=d(e[5])},m(e,n){i(e,t,n)},p(e,n){32&n[0]&&g(t,e[5])},d(e){e&&a(t)}}}function Ue(t){let n;return{c(){n=d("> Loading...")},m(e,t){i(e,n,t)},p:e,d(e){e&&a(n)}}}function Ve(e){let t,n,l;return{c(){t=d("> "),n=d(e[5]),l=d(".")},m(e,o){i(e,t,o),i(e,n,o),i(e,l,o)},p(e,t){32&t[0]&&g(n,e[5])},d(e){e&&a(t),e&&a(n),e&&a(l)}}}function Ye(e){let t,n,o,r,s,f,h,y,g;return{c(){t=u("button"),n=d("Load"),r=p(),s=u("button"),f=d("Save"),b(t,"type","button"),b(t,"class","button is-primary is-outlined mr-2"),t.disabled=o=""===e[6].storeSecret,b(s,"type","button"),b(s,"class","button is-success mr-2"),s.disabled=h=""===e[6].storeSecret||""===e[6].mnemonics},m(l,o){i(l,t,o),c(t,n),i(l,r,o),i(l,s,o),c(s,f),y||(g=[m(t,"click",e[29]),m(s,"click",e[30])],y=!0)},p(e,n){64&n[0]&&o!==(o=""===e[6].storeSecret)&&(t.disabled=o),64&n[0]&&h!==(h=""===e[6].storeSecret||""===e[6].mnemonics)&&(s.disabled=h)},d(e){e&&a(t),e&&a(r),e&&a(s),y=!1,l(g)}}}function Ge(e){let t;return{c(){t=d("Deploy")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function We(e){let t;return{c(){t=d("Back")},m(e,n){i(e,t,n)},d(e){e&&a(t)}}}function qe(t){let n,o,r,s,d,f,y,g,v,w,x,$,_,S;function C(e,t){return e[2]?Ce:e[3]?Se:e[4]?_e:$e}let M=C(t),N=M(t),E=!1===t[6].loaded&&Ye(t);function P(e,t){return e[3]||e[4]?We:Ge}let z=P(t),R=z(t);return{c(){n=u("div"),o=u("form"),r=u("h4"),r.textContent="Deploy a Kubernetes",s=p(),d=u("hr"),f=p(),N.c(),y=p(),g=u("div"),E&&E.c(),v=p(),w=u("button"),R.c(),this.c=e,b(r,"class","is-size-4"),b(w,"class",x="button is-primary "+(t[2]?"is-loading":"")),b(w,"type","submit"),w.disabled=$=(t[2]||!t[0].valid)&&!(t[3]||t[4]),b(g,"class","actions"),b(o,"class","box"),k(n,"padding","15px")},m(e,l){i(e,n,l),c(n,o),c(o,r),c(o,s),c(o,d),c(o,f),N.m(o,null),c(o,y),c(o,g),E&&E.m(g,null),c(g,v),c(g,w),R.m(w,null),_||(S=[m(w,"click",t[31]),m(o,"submit",h(t[13]))],_=!0)},p(e,t){M===(M=C(e))&&N?N.p(e,t):(N.d(1),N=M(e),N&&(N.c(),N.m(o,y))),!1===e[6].loaded?E?E.p(e,t):(E=Ye(e),E.c(),E.m(g,v)):E&&(E.d(1),E=null),z!==(z=P(e))&&(R.d(1),R=z(e),R&&(R.c(),R.m(w,null))),4&t[0]&&x!==(x="button is-primary "+(e[2]?"is-loading":""))&&b(w,"class",x),29&t[0]&&$!==($=(e[2]||!e[0].valid)&&!(e[3]||e[4]))&&(w.disabled=$)},i:e,o:e,d(e){e&&a(n),N.d(),E&&E.d(),R.d(),_=!1,l(S)}}}function Je(e,t,n){let l;var o,r;const{events:c}=null!==(r=null===(o=window.configs)||void 0===o?void 0:o.grid3_client)&&void 0!==r?r:{},i=new oe,a=i.configs;var u,d;u=a,d=e=>n(6,l=e),e.$$.on_destroy.push(s(u,d));const p=[{label:"Name",symbol:"name",placeholder:"Your K8S Name"},{label:"Cluster Token",symbol:"secret",placeholder:"Your Cluster Token"},{label:"Public SSH Key",symbol:"sshKey",placeholder:"Your Public SSH Key"}],f=[{label:"Network Name",symbol:"name",placeholder:"Your Network Name"},{label:"Network IP Range",symbol:"ipRange",placeholder:"Your Network IP Range"}],m=[{label:"Name",symbol:"name",placeholder:"Enter name"},{label:"CPU",symbol:"cpu",placeholder:"CPU",type:"number"},{label:"Memory",symbol:"memory",placeholder:"Memory in MB",type:"number"},{label:"Disk Size",symbol:"diskSize",placeholder:"Disk size in GB",type:"number"},{label:"Public IP",symbol:"publicIp",placeholder:"",type:"checkbox"},{label:"Plantery Network",symbol:"plantery",placeholder:"",type:"checkbox"},{label:"Node ID",symbol:"node",placeholder:"Node ID",type:"number",link:{label:"Grid Explorer",url:"https://explorer.tfchain.dev.threefold.io/nodes"}}],h=[{label:"Mnemonics",symbol:"mnemonics",placeholder:"Mnemonics of your tfchain account"},{label:"Store Secret",symbol:"storeSecret",placeholder:"secret key used for data encryption"}];let b,g="Config",v=!1,k=!1,w=!1;return[i,g,v,k,w,b,l,a,p,f,m,h,[{label:"Config"},{label:"Master"},{label:"Workers"},{label:"Credentials"}],function(){function e(e){"string"==typeof e&&n(5,b=e)}n(2,v=!0),n(3,k=!1),n(4,w=!1),n(5,b=void 0),c.addListener("logs",e),me(i).then((()=>n(3,k=!0))).catch((e=>{n(4,w=!0),n(5,b=e.message)})).finally((()=>{n(2,v=!1),c.removeListener("logs",e)}))},function(){l.networkEnv=function(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}(this),a.set(l)},e=>n(1,g=e.label),function(e){i[e.symbol]=this.value,n(0,i),n(8,p)},function(e){i[e.symbol]=this.value,n(0,i),n(8,p)},function(e){i.network[e.symbol]=this.value,n(0,i),n(9,f)},function(e){i.master[e.symbol]=y(this.value),n(0,i),n(10,m)},e=>n(0,i.master[e.symbol]=!i.master[e.symbol],i),function(e){i.master[e.symbol]=this.value,n(0,i),n(10,m)},()=>n(0,i.workers=[...i.workers,new ne],i),e=>n(0,i.workers=i.workers.filter(((t,n)=>e!==n)),i),function(e,t,l){t[l][e.symbol]=y(this.value),n(0,i),n(10,m)},(e,t,l,o)=>n(0,l[o][t.symbol]=!e[t.symbol],i),function(e,t,l){t[l][e.symbol]=this.value,n(0,i),n(10,m)},function(e){l[e.symbol]=this.value,a.set(l),n(11,h)},function(e){l[e.symbol]=this.value,a.set(l),n(11,h)},()=>{a.load()},()=>{a.save()},e=>{(k||w)&&(e.preventDefault(),n(3,k=!1),n(4,w=!1),n(2,v=!1))}]}!function(e,t){try{customElements.define(`tf-${e}`,t)}catch(t){console.warn(`Element with name '${e}' already defined.`)}}("kubernetes",class extends B{constructor(e){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");.worker-container{overflow-x:hidden;overflow-y:auto;max-height:70vh;will-change:transform;padding-bottom:5rem;margin-bottom:20px}.actions,.worker-header{display:flex;justify-content:flex-end;align-items:center}.worker-header{justify-content:space-between}</style>',A(this,{target:this.shadowRoot,props:x(this.attributes),customElement:!0},Je,qe,r,{},null,[-1,-1]),e&&e.target&&i(e.target,this,e.anchor)}})}();
