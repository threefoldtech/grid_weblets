!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function f(){return d("")}function h(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function m(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function v(t,e,n,s){t.style.setProperty(e,n,s?"important":"")}function x(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function w(t){const e={};for(const n of t)e[n.name]=n.value;return e}let k;function _(t){k=t}function E(){const t=function(){if(!k)throw new Error("Function called outside component initialization");return k}();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const o=function(t,e,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(t,n,!1,e),s}(e,n);s.slice().forEach((e=>{e.call(t,o)}))}}}function S(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const C=[],M=[],T=[],P=[],R=Promise.resolve();let N=!1;function H(t){T.push(t)}function L(t){P.push(t)}let j=!1;const A=new Set;function B(){if(!j){j=!0;do{for(let t=0;t<C.length;t+=1){const e=C[t];_(e),V(e.$$)}for(_(null),C.length=0;M.length;)M.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];A.has(e)||(A.add(e),e())}T.length=0}while(C.length);for(;P.length;)P.pop()();N=!1,j=!1,A.clear()}}function V(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}const X=new Set;let I,U;function q(){I={r:0,c:[],p:I}}function z(){I.r||s(I.c),I=I.p}function D(t,e){t&&t.i&&(X.delete(t),t.i(e))}function F(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),I.c.push((()=>{X.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function O(t,e){t.d(1),e.delete(t.key)}function Y(t,e){F(t,1,1,(()=>{e.delete(t.key)}))}function K(t,e,n,s,o,r,i,l,c,a,u,d){let p=t.length,f=r.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const b=[],g=new Map,$=new Map;for(h=f;h--;){const t=d(o,r,h),l=n(t);let c=i.get(l);c?s&&c.p(t,e):(c=a(l,t),c.c()),g.set(l,b[h]=c),l in m&&$.set(l,Math.abs(h-m[l]))}const y=new Set,v=new Set;function x(t){D(t,1),t.m(l,u),i.set(t.key,t),u=t.first,f--}for(;p&&f;){const e=b[f-1],n=t[p-1],s=e.key,o=n.key;e===n?(u=e.first,p--,f--):g.has(o)?!i.has(s)||y.has(s)?x(e):v.has(o)?p--:$.get(s)>$.get(o)?(v.add(s),x(e)):(y.add(o),p--):(c(n,i),p--)}for(;p--;){const e=t[p];g.has(e.key)||c(e,i)}for(;f;)x(b[f-1]);return b}function G(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function J(t){t&&t.c()}function Q(t,n,r,i){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=t.$$;l&&l.m(n,r),i||H((()=>{const n=c.map(e).filter(o);a?a.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(H)}function W(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(C.push(t),N||(N=!0,R.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,o,r,i,l,c,u,d=[-1]){const p=k;_(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:o.target||p.$$.root};u&&u(f.root);let h=!1;if(f.ctx=r?r(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),h&&Z(e,t)),n})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(a)}else f.fragment&&f.fragment.c();o.intro&&D(e.$$.fragment),Q(e,o.target,o.anchor,o.customElement),B()}_(p)}var et,nt,st,ot;"function"==typeof HTMLElement&&(U=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(e).filter(o);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});const{GridClient:rt}=null!==(nt=null===(et=window.configs)||void 0===et?void 0:et.grid3_client)&&void 0!==nt?nt:{},{HTTPMessageBusClient:it}=null!==(ot=null===(st=window.configs)||void 0===st?void 0:st.client)&&void 0!==ot?ot:{};var lt,ct=new Uint8Array(16);function at(){if(!lt&&!(lt="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return lt(ct)}var ut=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function dt(t){return"string"==typeof t&&ut.test(t)}for(var pt=[],ft=0;ft<256;++ft)pt.push((ft+256).toString(16).substr(1));function ht(t,e,n){var s=(t=t||{}).random||(t.rng||at)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,e){n=n||0;for(var o=0;o<16;++o)e[n+o]=s[o];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(pt[t[e+0]]+pt[t[e+1]]+pt[t[e+2]]+pt[t[e+3]]+"-"+pt[t[e+4]]+pt[t[e+5]]+"-"+pt[t[e+6]]+pt[t[e+7]]+"-"+pt[t[e+8]]+pt[t[e+9]]+"-"+pt[t[e+10]]+pt[t[e+11]]+pt[t[e+12]]+pt[t[e+13]]+pt[t[e+14]]+pt[t[e+15]]).toLowerCase();if(!dt(n))throw TypeError("Stringified UUID is invalid");return n}(s)}function mt(t,e,n){const s=t.slice();return s[19]=e[n],s}function bt(t){let e,n,s;function o(t,e){return null==n&&(n=!!t[3]()),n?yt:"checkbox"===t[1].type?$t:"select"===t[1].type?gt:void 0}let r=o(t),i=r&&r(t),d=t[1].tooltip&&Mt(t);return{c(){e=u("div"),i&&i.c(),s=p(),d&&d.c(),b(e,"class","tooltip mb-2")},m(t,n){c(t,e,n),i&&i.m(e,null),l(e,s),d&&d.m(e,null)},p(t,n){r===(r=o(t))&&i?i.p(t,n):(i&&i.d(1),i=r&&r(t),i&&(i.c(),i.m(e,s))),t[1].tooltip?d?d.p(t,n):(d=Mt(t),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d(t){t&&a(e),i&&i.d(),d&&d.d()}}}function gt(t){let e,n,o,r,i,d,f,m,g=[],$=new Map,y=t[1].label&&vt(t),w=t[1].options;const k=t=>t[19].value;for(let e=0;e<w.length;e+=1){let n=mt(t,w,e),s=k(n);$.set(s,g[e]=xt(s,n))}let _=t[1].error&&wt(t);return{c(){y&&y.c(),e=p(),n=u("div"),o=u("select");for(let t=0;t<g.length;t+=1)g[t].c();i=p(),_&&_.c(),o.disabled=r=t[1].disabled,v(o,"width","100%"),void 0===t[0]&&H((()=>t[17].call(o))),b(n,"class",d="select mb-2"+(t[1].error?" is-danger":"")),v(n,"width","100%"),b(n,"id",t[2])},m(s,r){y&&y.m(s,r),c(s,e,r),c(s,n,r),l(n,o);for(let t=0;t<g.length;t+=1)g[t].m(o,null);x(o,t[0]),l(n,i),_&&_.m(n,null),f||(m=[h(o,"change",t[17]),h(o,"change",t[4])],f=!0)},p(t,s){t[1].label?y?y.p(t,s):(y=vt(t),y.c(),y.m(e.parentNode,e)):y&&(y.d(1),y=null),2&s&&(w=t[1].options,g=K(g,s,k,1,t,w,$,o,O,xt,null,mt)),2&s&&r!==(r=t[1].disabled)&&(o.disabled=r),3&s&&x(o,t[0]),t[1].error?_?_.p(t,s):(_=wt(t),_.c(),_.m(n,null)):_&&(_.d(1),_=null),2&s&&d!==(d="select mb-2"+(t[1].error?" is-danger":""))&&b(n,"class",d)},d(t){y&&y.d(t),t&&a(e),t&&a(n);for(let t=0;t<g.length;t+=1)g[t].d();_&&_.d(),f=!1,s(m)}}}function $t(t){let e,n,o,r,i,f,m,g,y,x,w,k=t[1].label+"";return{c(){e=u("div"),n=u("label"),o=u("input"),i=p(),f=u("span"),m=p(),g=u("label"),y=d(k),b(o,"class","switch__input"),b(o,"type","checkbox"),b(o,"id",t[2]),o.disabled=r=t[1].disabled,b(f,"class","slider"),b(n,"class","switch"),b(g,"for",t[2]),b(g,"class","label ml-2"),v(g,"cursor","pointer"),v(e,"display","flex"),v(e,"align-items","center"),b(e,"class","mb-2")},m(s,r){c(s,e,r),l(e,n),l(n,o),o.checked=t[0],l(n,i),l(n,f),l(e,m),l(e,g),l(g,y),x||(w=[h(o,"change",t[16]),h(o,"input",t[11])],x=!0)},p(t,e){2&e&&r!==(r=t[1].disabled)&&(o.disabled=r),3&e&&(o.checked=t[0]),2&e&&k!==(k=t[1].label+"")&&$(y,k)},d(t){t&&a(e),x=!1,s(w)}}}function yt(t){let e,n,s,o,r,i,f=t[1].label+"";function h(t,e){return"textarea"===t[1].type?St:"text"===t[1].type?Et:"number"===t[1].type?_t:"password"===t[1].type?kt:void 0}let m=h(t),g=m&&m(t),y=t[1].error&&Ct(t);return{c(){e=u("div"),n=u("p"),s=d(f),o=p(),r=u("div"),g&&g.c(),i=p(),y&&y.c(),b(n,"class","label"),b(r,"class","control"),b(e,"class","field"),b(e,"id",t[2])},m(t,a){c(t,e,a),l(e,n),l(n,s),l(e,o),l(e,r),g&&g.m(r,null),l(e,i),y&&y.m(e,null)},p(t,n){2&n&&f!==(f=t[1].label+"")&&$(s,f),m===(m=h(t))&&g?g.p(t,n):(g&&g.d(1),g=m&&m(t),g&&(g.c(),g.m(r,null))),t[1].error?y?y.p(t,n):(y=Ct(t),y.c(),y.m(e,null)):y&&(y.d(1),y=null)},d(t){t&&a(e),g&&g.d(),y&&y.d()}}}function vt(t){let e,n,s=t[1].label+"";return{c(){e=u("p"),n=d(s),b(e,"class","label")},m(t,s){c(t,e,s),l(e,n)},p(t,e){2&e&&s!==(s=t[1].label+"")&&$(n,s)},d(t){t&&a(e)}}}function xt(t,e){let n,s,o,r,i,f,h=e[19].label+"";return{key:t,first:null,c(){n=u("option"),s=d(h),o=p(),n.__value=r=e[19].value,n.value=n.__value,n.selected=i=e[19].selected,n.disabled=f=e[19].disabled,this.first=n},m(t,e){c(t,n,e),l(n,s),l(n,o)},p(t,o){e=t,2&o&&h!==(h=e[19].label+"")&&$(s,h),2&o&&r!==(r=e[19].value)&&(n.__value=r,n.value=n.__value),2&o&&i!==(i=e[19].selected)&&(n.selected=i),2&o&&f!==(f=e[19].disabled)&&(n.disabled=f)},d(t){t&&a(n)}}}function wt(t){let e,n,s=t[1].error+"";return{c(){e=u("p"),n=d(s),b(e,"class","help is-danger")},m(t,s){c(t,e,s),l(e,n)},p(t,e){2&e&&s!==(s=t[1].error+"")&&$(n,s)},d(t){t&&a(e)}}}function kt(t){let e,n,o,r,i,l;return{c(){e=u("input"),b(e,"type","password"),b(e,"class",n="input"+(t[1].error?" is-danger":"")),b(e,"placeholder",o=t[1].placeholder),e.disabled=r=t[1].disabled},m(n,s){c(n,e,s),y(e,t[0]),i||(l=[h(e,"input",t[15]),h(e,"input",t[10])],i=!0)},p(t,s){2&s&&n!==(n="input"+(t[1].error?" is-danger":""))&&b(e,"class",n),2&s&&o!==(o=t[1].placeholder)&&b(e,"placeholder",o),2&s&&r!==(r=t[1].disabled)&&(e.disabled=r),3&s&&e.value!==t[0]&&y(e,t[0])},d(t){t&&a(e),i=!1,s(l)}}}function _t(t){let e,n,o,r,i,l;return{c(){e=u("input"),b(e,"type","number"),b(e,"class",n="input"+(t[1].error?" is-danger":"")),b(e,"placeholder",o=t[1].placeholder),e.disabled=r=t[1].disabled},m(n,s){c(n,e,s),y(e,t[0]),i||(l=[h(e,"input",t[14]),h(e,"input",t[9])],i=!0)},p(t,s){2&s&&n!==(n="input"+(t[1].error?" is-danger":""))&&b(e,"class",n),2&s&&o!==(o=t[1].placeholder)&&b(e,"placeholder",o),2&s&&r!==(r=t[1].disabled)&&(e.disabled=r),3&s&&g(e.value)!==t[0]&&y(e,t[0])},d(t){t&&a(e),i=!1,s(l)}}}function Et(t){let e,n,o,r,i,l;return{c(){e=u("input"),b(e,"type","text"),b(e,"class",n="input"+(t[1].error?" is-danger":"")),b(e,"placeholder",o=t[1].placeholder),e.disabled=r=t[1].disabled},m(n,s){c(n,e,s),y(e,t[0]),i||(l=[h(e,"input",t[13]),h(e,"input",t[8])],i=!0)},p(t,s){2&s&&n!==(n="input"+(t[1].error?" is-danger":""))&&b(e,"class",n),2&s&&o!==(o=t[1].placeholder)&&b(e,"placeholder",o),2&s&&r!==(r=t[1].disabled)&&(e.disabled=r),3&s&&e.value!==t[0]&&y(e,t[0])},d(t){t&&a(e),i=!1,s(l)}}}function St(t){let e,n,o,r,i,l;return{c(){e=u("textarea"),b(e,"class",n="textarea"+(t[1].error?" is-danger":"")),b(e,"placeholder",o=t[1].placeholder),e.disabled=r=t[1].disabled},m(n,s){c(n,e,s),y(e,t[0]),i||(l=[h(e,"input",t[12]),h(e,"input",t[7])],i=!0)},p(t,s){2&s&&n!==(n="textarea"+(t[1].error?" is-danger":""))&&b(e,"class",n),2&s&&o!==(o=t[1].placeholder)&&b(e,"placeholder",o),2&s&&r!==(r=t[1].disabled)&&(e.disabled=r),3&s&&y(e,t[0])},d(t){t&&a(e),i=!1,s(l)}}}function Ct(t){let e,n,s=t[1].error+"";return{c(){e=u("p"),n=d(s),b(e,"class","help is-danger")},m(t,s){c(t,e,s),l(e,n)},p(t,e){2&e&&s!==(s=t[1].error+"")&&$(n,s)},d(t){t&&a(e)}}}function Mt(t){let e,n,s=t[1].tooltip+"";return{c(){e=u("span"),n=d(s),b(e,"class","tooltip__text")},m(t,s){c(t,e,s),l(e,n)},p(t,e){2&e&&s!==(s=t[1].tooltip+"")&&$(n,s)},d(t){t&&a(e)}}}function Tt(e){let n,s,o,r=e[1]&&bt(e);return{c(){n=u("div"),s=p(),r&&r.c(),o=f(),this.c=t},m(t,i){c(t,n,i),n.innerHTML=e[5],c(t,s,i),r&&r.m(t,i),c(t,o,i)},p(t,[e]){t[1]?r?r.p(t,e):(r=bt(t),r.c(),r.m(o.parentNode,o)):r&&(r.d(1),r=null)},i:t,o:t,d(t){t&&a(n),t&&a(s),r&&r.d(t),t&&a(o)}}}function Pt(t,e,n){const s=E();let{field:o}=e,{data:r}=e,{selected:i=0}=e;const l=ht();return t.$$set=t=>{"field"in t&&n(1,o=t.field),"data"in t&&n(0,r=t.data),"selected"in t&&n(6,i=t.selected)},[r,o,l,()=>["text","number","password","textarea"].includes(o.type),function(t){s("input");const e=t.target;n(6,i=e.selectedIndex)},'\n<style>\n  .switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n\n  .switch .switch__input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n\n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  .switch__input:checked + .slider {\n    background-color: #2196f3;\n  }\n\n  .switch__input:checked + .slider {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  .switch__input:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n  .tooltip {\n    position: relative;\n  }\n\n  .tooltip__text {\n    position: absolute;\n    top: -20px;\n    left: 50%;\n    padding: 10px 15px;\n    border-radius: 5px;\n    background-color: rgba(51, 51, 51, 0.9);\n    color: white;\n    z-index: 9;\n    max-width: min(1000px, calc(100% - 30px));\n    display: block;\n\n    transition-property: opacity, transform, visibility;\n    transition-timing-function: ease;\n    transition-duration: 300ms;\n    pointer-events: none;\n    opacity: 0;\n    visibility: hidden;\n    transform: translateX(-50%) translateY(20px) scale(0);\n  }\n\n  .tooltip:hover > .tooltip__text {\n    pointer-events: all;\n    opacity: 1;\n    visibility: visible;\n    transform: translateX(-50%) translateY(0) scale(1);\n  }\n</style>\n',i,function(e){S.call(this,t,e)},function(e){S.call(this,t,e)},function(e){S.call(this,t,e)},function(e){S.call(this,t,e)},function(e){S.call(this,t,e)},function(){r=this.value,n(0,r),n(1,o)},function(){r=this.value,n(0,r),n(1,o)},function(){r=g(this.value),n(0,r),n(1,o)},function(){r=this.value,n(0,r),n(1,o)},function(){r=this.checked,n(0,r),n(1,o)},function(){r=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(0,r),n(1,o)}]}class Rt extends U{constructor(t){super(),tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Pt,Tt,r,{field:1,data:0,selected:6},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),B()))}static get observedAttributes(){return["field","data","selected"]}get field(){return this.$$.ctx[1]}set field(t){this.$$set({field:t}),B()}get data(){return this.$$.ctx[0]}set data(t){this.$$set({data:t}),B()}get selected(){return this.$$.ctx[6]}set selected(t){this.$$set({selected:t}),B()}}function Nt(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function Ht(t){let e,n=[],s=new Map,o=t[1];const r=t=>t[6].label;for(let e=0;e<o.length;e+=1){let i=Nt(t,o,e),l=r(i);s.set(l,n[e]=jt(l,i))}return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=f()},m(t,s){for(let e=0;e<n.length;e+=1)n[e].m(t,s);c(t,e,s)},p(t,i){11&i&&(o=t[1],n=K(n,i,r,1,t,o,s,e.parentNode,O,jt,e,Nt))},d(t){for(let e=0;e<n.length;e+=1)n[e].d(t);t&&a(e)}}}function Lt(t){let e,n,s;return{c(){e=u("button"),b(e,"class","ml-2 is-small delete")},m(r,i){var l;c(r,e,i),n||(s=h(e,"click",(l=m((function(){o(t[3](t[8]))&&t[3](t[8]).apply(this,arguments)})),function(t){return t.stopPropagation(),l.call(this,t)})),n=!0)},p(e,n){t=e},d(t){t&&a(e),n=!1,s()}}}function jt(t,e){let n,s,o,r,i,f,g,y,v,x=e[6].label+"",w=e[6].removable&&Lt(e);function k(){return e[4](e[6])}return{key:t,first:null,c(){n=u("li"),s=u("a"),o=u("span"),r=d(x),i=p(),w&&w.c(),f=p(),b(s,"href","#!"),b(n,"class",g=e[0]===e[6].value?"is-active":""),this.first=n},m(t,e){c(t,n,e),l(n,s),l(s,o),l(o,r),l(s,i),w&&w.m(s,null),l(n,f),y||(v=h(s,"click",m(k)),y=!0)},p(t,o){e=t,2&o&&x!==(x=e[6].label+"")&&$(r,x),e[6].removable?w?w.p(e,o):(w=Lt(e),w.c(),w.m(s,null)):w&&(w.d(1),w=null),3&o&&g!==(g=e[0]===e[6].value?"is-active":"")&&b(n,"class",g)},d(t){t&&a(n),w&&w.d(),y=!1,v()}}}function At(e){let n,s,o,r=e[1]&&Ht(e);return{c(){n=u("div"),s=u("ul"),r&&r.c(),this.c=t,b(n,"class",o="tabs "+(e[2]?"is-centered":""))},m(t,e){c(t,n,e),l(n,s),r&&r.m(s,null)},p(t,[e]){t[1]?r?r.p(t,e):(r=Ht(t),r.c(),r.m(s,null)):r&&(r.d(1),r=null),4&e&&o!==(o="tabs "+(t[2]?"is-centered":""))&&b(n,"class",o)},i:t,o:t,d(t){t&&a(n),r&&r.d()}}}function Bt(t,e,n){const s=E();let{tabs:o}=e,{active:r}=e,{centered:i=!0}=e;return t.$$set=t=>{"tabs"in t&&n(1,o=t.tabs),"active"in t&&n(0,r=t.active),"centered"in t&&n(2,i=t.centered)},[r,o,i,t=>()=>s("removed",t),t=>n(0,r=t.value)]}customElements.define("tf-input",Rt);class Vt extends U{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Bt,At,r,{tabs:1,active:0,centered:2},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),B()))}static get observedAttributes(){return["tabs","active","centered"]}get tabs(){return this.$$.ctx[1]}set tabs(t){this.$$set({tabs:t}),B()}get active(){return this.$$.ctx[0]}set active(t){this.$$set({active:t}),B()}get centered(){return this.$$.ctx[2]}set centered(t){this.$$set({centered:t}),B()}}function Xt(e){let n,s,o;return{c(){n=u("div"),s=d(e[1]),this.c=t,b(n,"class",o="notification is-"+e[0])},m(t,e){c(t,n,e),l(n,s)},p(t,[e]){2&e&&$(s,t[1]),1&e&&o!==(o="notification is-"+t[0])&&b(n,"class",o)},i:t,o:t,d(t){t&&a(n)}}}function It(t,e,n){let{type:s}=e,{message:o}=e;return t.$$set=t=>{"type"in t&&n(0,s=t.type),"message"in t&&n(1,o=t.message)},[s,o]}customElements.define("tf-tabs",Vt);class Ut extends U{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},It,Xt,r,{type:0,message:1},null),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),B()))}static get observedAttributes(){return["type","message"]}get type(){return this.$$.ctx[0]}set type(t){this.$$set({type:t}),B()}get message(){return this.$$.ctx[1]}set message(t){this.$$set({message:t}),B()}}function qt(t,e,n){const s=t.slice();return s[20]=e[n],s[21]=e,s[22]=n,s}function zt(t){let e,n,o,r,i,f,m,g,$,y;return{c(){e=u("div"),n=u("button"),n.textContent="+ Add Profile",o=p(),r=u("button"),i=d("Save"),m=p(),g=u("button"),g.textContent="Back",b(n,"class","button is-primary is-outlined mr-2"),b(n,"type","button"),b(r,"class",f="button is-primary mr-2"+(t[7]?" is-loading":"")),b(r,"type","button"),b(g,"class","button is-danger"),b(g,"type","button")},m(s,a){c(s,e,a),l(e,n),l(e,o),l(e,r),l(r,i),l(e,m),l(e,g),$||(y=[h(n,"click",t[8].addProfile),h(r,"click",t[11]),h(g,"click",t[14])],$=!0)},p(t,e){128&e&&f!==(f="button is-primary mr-2"+(t[7]?" is-loading":""))&&b(r,"class",f)},d(t){t&&a(e),$=!1,s(y)}}}function Dt(t){let e,n,o,r,i,f,m,g,$,y,x,w,k,_,E;function S(e){t[18](e)}let C={field:t[9]};void 0!==t[1]&&(C.data=t[1]),e=new Rt({props:C}),M.push((()=>G(e,"data",S)));let T=t[6]&&Ot(t);return{c(){J(e.$$.fragment),o=p(),T&&T.c(),r=p(),i=u("div"),f=u("button"),m=d("Unlock Store"),$=p(),y=u("button"),x=d("Create a New Store"),b(f,"class","button is-primary"),b(f,"type","button"),f.disabled=g=""===t[1],b(y,"class","button is-primary is-outlined mr-2"),b(y,"type","button"),y.disabled=w=""===t[1],v(i,"display","flex"),v(i,"justify-content","center")},m(n,s){Q(e,n,s),c(n,o,s),T&&T.m(n,s),c(n,r,s),c(n,i,s),l(i,f),l(f,m),l(i,$),l(i,y),l(y,x),k=!0,_||(E=[h(f,"click",t[10].bind(void 0,"load")),h(y,"click",t[10].bind(void 0,"create"))],_=!0)},p(t,s){const o={};!n&&2&s&&(n=!0,o.data=t[1],L((()=>n=!1))),e.$set(o),t[6]?T?(T.p(t,s),64&s&&D(T,1)):(T=Ot(t),T.c(),D(T,1),T.m(r.parentNode,r)):T&&(q(),F(T,1,1,(()=>{T=null})),z()),(!k||2&s&&g!==(g=""===t[1]))&&(f.disabled=g),(!k||2&s&&w!==(w=""===t[1]))&&(y.disabled=w)},i(t){k||(D(e.$$.fragment,t),D(T),k=!0)},o(t){F(e.$$.fragment,t),F(T),k=!1},d(t){W(e,t),t&&a(o),T&&T.d(t),t&&a(r),t&&a(i),_=!1,s(E)}}}function Ft(t){let e,n,s,o,r,i=[],l=new Map;function u(e){t[15](e)}let d={tabs:t[4],centered:!1};void 0!==t[0]&&(d.active=t[0]),e=new Vt({props:d}),M.push((()=>G(e,"active",u))),e.$on("removed",t[16]);let h=t[5];const m=t=>t[20].symbol;for(let e=0;e<h.length;e+=1){let n=qt(t,h,e),s=m(n);l.set(s,i[e]=Yt(s,n))}return{c(){J(e.$$.fragment),s=p();for(let t=0;t<i.length;t+=1)i[t].c();o=f()},m(t,n){Q(e,t,n),c(t,s,n);for(let e=0;e<i.length;e+=1)i[e].m(t,n);c(t,o,n),r=!0},p(t,s){const r={};16&s&&(r.tabs=t[4]),!n&&1&s&&(n=!0,r.active=t[0],L((()=>n=!1))),e.$set(r),40&s&&(h=t[5],q(),i=K(i,s,m,1,t,h,l,o.parentNode,Y,Yt,o,qt),z())},i(t){if(!r){D(e.$$.fragment,t);for(let t=0;t<h.length;t+=1)D(i[t]);r=!0}},o(t){F(e.$$.fragment,t);for(let t=0;t<i.length;t+=1)F(i[t]);r=!1},d(t){W(e,t),t&&a(s);for(let e=0;e<i.length;e+=1)i[e].d(t);t&&a(o)}}}function Ot(t){let e,n;return e=new Ut({props:{type:"danger",message:t[6]}}),{c(){J(e.$$.fragment)},m(t,s){Q(e,t,s),n=!0},p(t,n){const s={};64&n&&(s.message=t[6]),e.$set(s)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function Yt(t,e){let n,s,o,r;function i(t){e[17](t,e[20])}let l={field:e[20]};return void 0!==e[3][e[20].symbol]&&(l.data=e[3][e[20].symbol]),s=new Rt({props:l}),M.push((()=>G(s,"data",i))),{key:t,first:null,c(){n=f(),J(s.$$.fragment),this.first=n},m(t,e){c(t,n,e),Q(s,t,e),r=!0},p(t,n){e=t;const r={};32&n&&(r.field=e[20]),!o&&40&n&&(o=!0,r.data=e[3][e[20].symbol],L((()=>o=!1))),s.$set(r)},i(t){r||(D(s.$$.fragment,t),r=!0)},o(t){F(s.$$.fragment,t),r=!1},d(t){t&&a(n),W(s,t)}}}function Kt(e){let n,s,o,r,i,d,f,h,m,g,$,y,x,w=e[2]&&zt(e);const k=[Ft,Dt],_=[];function E(t,e){return t[2]?0:1}return $=E(e),y=_[$]=k[$](e),{c(){n=u("section"),s=u("div"),o=u("div"),r=u("h4"),r.textContent="Profile Manager",i=p(),w&&w.c(),d=p(),f=u("p"),f.innerHTML='Please visit <a href="https://library.threefold.me/info/threefold" target="_blank">the manual</a>\n      to <strong>get started.</strong>',h=p(),m=u("hr"),g=p(),y.c(),this.c=t,b(r,"class","is-size-4"),v(o,"display","flex"),v(o,"justify-content","space-between"),v(o,"align-items","center"),b(f,"class","mt-4"),b(s,"class","box"),v(n,"padding","15px")},m(t,e){c(t,n,e),l(n,s),l(s,o),l(o,r),l(o,i),w&&w.m(o,null),l(s,d),l(s,f),l(s,h),l(s,m),l(s,g),_[$].m(s,null),x=!0},p(t,[e]){t[2]?w?w.p(t,e):(w=zt(t),w.c(),w.m(o,null)):w&&(w.d(1),w=null);let n=$;$=E(t),$===n?_[$].p(t,e):(q(),F(_[n],1,1,(()=>{_[n]=null})),z(),y=_[$],y?y.p(t,e):(y=_[$]=k[$](t),y.c()),D(y,1),y.m(s,null))},i(t){x||(D(y),x=!0)},o(t){F(y),x=!1},d(t){t&&a(n),w&&w.d(),_[$].d()}}}function Gt(t,e,n){let s;var o;const r=null===(o=window.configs)||void 0===o?void 0:o.baseConfig;i(t,r,(t=>n(13,s=t)));let l,c,a="0",u="",d=!1,p=[];const f=[{label:"Profile Name",symbol:"name",placeholder:"Profile name",type:"text"},{label:"Network Environment",symbol:"networkEnv",type:"select",options:[{label:"Testnet",value:"test"},{label:"Devnet",value:"dev"}]},{label:"Mnemonics",symbol:"mnemonics",placeholder:"Enter your mnemonics",type:"text"},{label:"TFChain Configurations Secret",symbol:"storeSecret",placeholder:"Secret key used to encrypt your data on TFChain",type:"text"},{label:"Public SSH Key",symbol:"sshKey",placeholder:"Your public SSH key, will be added as default to all deployments.",type:"text"}];let h;function m(t){n(6,h=r[t](u)),h||n(2,d=!0)}let b=!1;return t.$$.update=()=>{12289&t.$$.dirty&&(n(12,l=s),n(3,c=l[a]),n(4,p=l.map(((t,e)=>({label:t.name||`Profile ${e+1}`,value:e.toString(),removable:0!==e})))))},[a,u,d,c,p,f,h,b,r,{label:"Browser Session Secret",type:"password",placeholder:"Browser Session Secret",symbol:"secret",tooltip:"Browser Session Secret"},m,async function(){n(7,b=!0),(await Promise.all(l.map((t=>function(t){const{networkEnv:e,mnemonics:n,storeSecret:s}=t,o=new it(0,""),r=new rt(e,n,s,o,void 0,"tfkvstore");return r.connect().then((()=>r.disconnect())).then((()=>!0)).catch((()=>!0))}(t))))).reduce(((t,e)=>t&&e),!0)?(n(5,f[2].error=null,f),m("save")):n(5,f[2].error="Invalid Mnemonics",f),n(7,b=!1)},l,s,()=>n(2,d=!1),function(t){a=t,n(0,a)},({detail:t})=>r.deleteProfile(t),function(e,o){t.$$.not_equal(c[o.symbol],e)&&(c[o.symbol]=e,n(3,c),n(13,s),n(12,l),n(0,a))},function(t){u=t,n(1,u)}]}customElements.define("tf-alert",Ut);customElements.define("tf-profiles",class extends U{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");</style>',tt(this,{target:this.shadowRoot,props:w(this.attributes),customElement:!0},Gt,Kt,r,{},null),t&&t.target&&c(t.target,this,t.anchor)}})}();
