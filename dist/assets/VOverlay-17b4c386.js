import{aA as G,bq as V,k as C,a0 as P,R as Ee,w as R,a6 as ie,aT as Z,br as Ae,aZ as le,bs as Se,bt as B,bu as Te,bv as se,bw as Le,bx as ue,by as J,bz as Q,bA as fe,bB as Fe,bC as ve,aV as F,bD as de,ap as Re,I as Be,bE as xe,P as Ie,bF as De,aW as Me,az as _e,aP as He,aG as Ne,aw as Ve,aX as We,aI as qe,bG as ze,bd as $e,X as je,aQ as Ge,bH as Ue,aN as Xe,C as _,s as j,bI as ee,bJ as Ye,L as Ke,M as Ze,aU as Je,F as Qe,T as et,bK as tt}from"./index-30b66760.js";import{m as nt,u as ot}from"./lazy-fe618c41.js";import{B as te,g as me,n as at,a as rt,s as it}from"./easing-9f15041e.js";import{m as lt,M as st}from"./transition-0c6e30e4.js";function ke(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}function ct(e){for(;e;){if(ce(e))return e;e=e.parentElement}return document.scrollingElement}function Y(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ce(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ce(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function ut(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const ft=G({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function vt(e,t){const n={},o=r=>()=>{if(!V)return Promise.resolve(!0);const l=r==="openDelay";return n.closeDelay&&window.clearTimeout(n.closeDelay),delete n.closeDelay,n.openDelay&&window.clearTimeout(n.openDelay),delete n.openDelay,new Promise(s=>{const i=parseInt(e[r]??0,10);n[r]=window.setTimeout(()=>{t==null||t(l),s(l)},i)})};return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const dt=Symbol.for("vuetify:v-menu"),mt=G({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ft()},"v-overlay-activator");function yt(e,t){let{isActive:n,isTop:o}=t;const r=C();let l=!1,s=!1,i=!0;const u=P(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=P(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!u.value),{runOpenDelay:c,runCloseDelay:y}=vt(e,a=>{a===(e.openOnHover&&l||u.value&&s)&&!(e.openOnHover&&n.value&&!o.value)&&(n.value!==a&&(i=!0),n.value=a)}),h={click:a=>{a.stopPropagation(),r.value=a.currentTarget||a.target,n.value=!n.value},mouseenter:a=>{var A;(A=a.sourceCapabilities)!=null&&A.firesTouchEvents||(l=!0,r.value=a.currentTarget||a.target,c())},mouseleave:a=>{l=!1,y()},focus:a=>{Te&&!a.target.matches(":focus-visible")||(s=!0,a.stopPropagation(),r.value=a.currentTarget||a.target,c())},blur:a=>{s=!1,a.stopPropagation(),y()}},p=P(()=>{const a={};return f.value&&(a.click=h.click),e.openOnHover&&(a.mouseenter=h.mouseenter,a.mouseleave=h.mouseleave),u.value&&(a.focus=h.focus,a.blur=h.blur),a}),d=P(()=>{const a={};if(e.openOnHover&&(a.mouseenter=()=>{l=!0,c()},a.mouseleave=()=>{l=!1,y()}),e.closeOnContentClick){const A=Ee(dt,null);a.click=()=>{n.value=!1,A==null||A.closeParents()}}return a}),v=P(()=>{const a={};return e.openOnHover&&(a.mouseenter=()=>{i&&(l=!0,i=!1,c())},a.mouseleave=()=>{l=!1,y()}),a});R(o,a=>{a&&(e.openOnHover&&!l&&(!u.value||!s)||u.value&&!s&&(!e.openOnHover||!l))&&(n.value=!1)});const O=C();ie(()=>{O.value&&Z(()=>{const a=O.value;r.value=Ae(a)?a.$el:a})});const k=le("useActivator");let w;return R(()=>!!e.activator,a=>{a&&V?(w=Se(),w.run(()=>{gt(e,k,{activatorEl:r,activatorEvents:p})})):w&&w.stop()},{flush:"post",immediate:!0}),B(()=>{w==null||w.stop()}),{activatorEl:r,activatorRef:O,activatorEvents:p,contentEvents:d,scrimEvents:v}}function gt(e,t,n){let{activatorEl:o,activatorEvents:r}=n;R(()=>e.activator,(u,f)=>{if(f&&u!==f){const c=i(f);c&&s(c)}u&&Z(()=>l())},{immediate:!0}),R(()=>e.activatorProps,()=>{l()}),B(()=>{s()});function l(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[y,h]=c;u.addEventListener(y,h)}),Object.keys(f).forEach(c=>{f[c]==null?u.removeAttribute(c):u.setAttribute(c,f[c])}))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&(Object.entries(r.value).forEach(c=>{let[y,h]=c;u.removeEventListener(y,h)}),Object.keys(f).forEach(c=>{u.removeAttribute(c)}))}function i(){var c,y;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator,f;if(u)if(u==="parent"){let h=(y=(c=t==null?void 0:t.proxy)==null?void 0:c.$el)==null?void 0:y.parentNode;for(;h.hasAttribute("data-no-activator");)h=h.parentNode;f=h}else typeof u=="string"?f=document.querySelector(u):"$el"in u?f=u.$el:f=u;return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:null,o.value}}function ne(e,t){return{x:e.x+t.x,y:e.y+t.y}}function ht(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ye(e,t){if(e.side==="top"||e.side==="bottom"){const{side:n,align:o}=e,r=o==="left"?0:o==="center"?t.width/2:o==="right"?t.width:o,l=n==="top"?0:n==="bottom"?t.height:n;return ne({x:r,y:l},t)}else if(e.side==="left"||e.side==="right"){const{side:n,align:o}=e,r=n==="left"?0:n==="right"?t.width:n,l=o==="top"?0:o==="center"?t.height/2:o==="bottom"?t.height:o;return ne({x:r,y:l},t)}return ne({x:t.width/2,y:t.height/2},t)}const Oe={static:Et,connected:xt},bt=G({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Oe},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies");function wt(e,t){const n=C({}),o=C();V&&(se(()=>!!(t.isActive.value&&e.locationStrategy),l=>{var s,i;R(()=>e.locationStrategy,l),B(()=>{o.value=void 0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(t,e,n))==null?void 0:s.updateLocation:o.value=(i=Oe[e.locationStrategy](t,e,n))==null?void 0:i.updateLocation}),window.addEventListener("resize",r,{passive:!0}),B(()=>{window.removeEventListener("resize",r),o.value=void 0}));function r(l){var s;(s=o.value)==null||s.call(o,l)}return{contentStyles:n,updateLocation:o}}function Et(){}function St(e,t){const n=at(e);return t?n.x+=parseFloat(e.style.right||0):n.x-=parseFloat(e.style.left||0),n.y-=parseFloat(e.style.top||0),n}function xt(e,t,n){ut(e.activatorEl.value)&&Object.assign(n.value,{position:"fixed"});const{preferredAnchor:r,preferredOrigin:l}=Le(()=>{const d=ue(t.location,e.isRtl.value),v=t.origin==="overlap"?d:t.origin==="auto"?J(d):ue(t.origin,e.isRtl.value);return d.side===v.side&&d.align===Q(v).align?{preferredAnchor:fe(d),preferredOrigin:fe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,i,u,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>P(()=>{const v=parseFloat(t[d]);return isNaN(v)?1/0:v})),c=P(()=>{if(Array.isArray(t.offset))return t.offset;if(typeof t.offset=="string"){const d=t.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof t.offset=="number"?[t.offset,0]:[0,0]});let y=!1;const h=new ResizeObserver(()=>{y&&p()});R([e.activatorEl,e.contentEl],(d,v)=>{let[O,k]=d,[w,a]=v;w&&h.unobserve(w),O&&h.observe(O),a&&h.unobserve(a),k&&h.observe(k)},{immediate:!0}),B(()=>{h.disconnect()});function p(){if(y=!1,requestAnimationFrame(()=>{requestAnimationFrame(()=>y=!0)}),!e.activatorEl.value||!e.contentEl.value)return;const d=e.activatorEl.value.getBoundingClientRect(),v=St(e.contentEl.value,e.isRtl.value),O=Y(e.contentEl.value),k=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const w=O.reduce((S,E)=>{const m=E.getBoundingClientRect(),b=new te({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return S?new te({x:Math.max(S.left,b.left),y:Math.max(S.top,b.top),width:Math.min(S.right,b.right)-Math.max(S.left,b.left),height:Math.min(S.bottom,b.bottom)-Math.max(S.top,b.top)}):b},void 0);w.x+=k,w.y+=k,w.width-=k*2,w.height-=k*2;let a={anchor:r.value,origin:l.value};function A(S){const E=new te(v),m=ye(S.anchor,d),b=ye(S.origin,E);let{x:T,y:L}=ht(m,b);switch(S.anchor.side){case"top":L-=c.value[0];break;case"bottom":L+=c.value[0];break;case"left":T-=c.value[0];break;case"right":T+=c.value[0];break}switch(S.anchor.align){case"top":L-=c.value[1];break;case"bottom":L+=c.value[1];break;case"left":T-=c.value[1];break;case"right":T+=c.value[1];break}return E.x+=T,E.y+=L,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,f.value),{overflows:me(E,w),x:T,y:L}}let D=0,H=0;const N={x:0,y:0},q={x:!1,y:!1};let z=-1;for(;;){if(z++>10){Fe("Infinite loop detected in connectedLocationStrategy");break}const{x:S,y:E,overflows:m}=A(a);D+=S,H+=E,v.x+=S,v.y+=E;{const b=ve(a.anchor),T=m.x.before||m.x.after,L=m.y.before||m.y.after;let W=!1;if(["x","y"].forEach(x=>{if(x==="x"&&T&&!q.x||x==="y"&&L&&!q.y){const g={anchor:{...a.anchor},origin:{...a.origin}},I=x==="x"?b==="y"?Q:J:b==="y"?J:Q;g.anchor=I(g.anchor),g.origin=I(g.origin);const{overflows:U}=A(g);(U[x].before<=m[x].before&&U[x].after<=m[x].after||U[x].before+U[x].after<(m[x].before+m[x].after)/2)&&(a=g,W=q[x]=!0)}}),W)continue}m.x.before&&(D+=m.x.before,v.x+=m.x.before),m.x.after&&(D-=m.x.after,v.x-=m.x.after),m.y.before&&(H+=m.y.before,v.y+=m.y.before),m.y.after&&(H-=m.y.after,v.y-=m.y.after);{const b=me(v,w);N.x=w.width-b.x.before-b.x.after,N.y=w.height-b.y.before-b.y.after,D+=b.x.before,v.x+=b.x.before,H+=b.y.before,v.y+=b.y.before}break}const M=ve(a.anchor);return Object.assign(n.value,{"--v-overlay-anchor-origin":`${a.anchor.side} ${a.anchor.align}`,transformOrigin:`${a.origin.side} ${a.origin.align}`,top:F(oe(H)),left:e.isRtl.value?void 0:F(oe(D)),right:e.isRtl.value?F(oe(-D)):void 0,minWidth:F(M==="y"?Math.min(s.value,d.width):s.value),maxWidth:F(ge(de(N.x,s.value===1/0?0:s.value,u.value))),maxHeight:F(ge(de(N.y,i.value===1/0?0:i.value,f.value)))}),{available:N,contentBox:v}}return R(()=>[r.value,l.value,t.offset,t.minWidth,t.minHeight,t.maxWidth,t.maxHeight],()=>p()),Z(()=>{const d=p();if(!d)return;const{available:v,contentBox:O}=d;O.height>v.y&&requestAnimationFrame(()=>{p(),requestAnimationFrame(()=>{p()})})}),{updateLocation:p}}function oe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ge(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ae=!0;const K=[];function kt(e){!ae||K.length?(K.push(e),re()):(ae=!1,e(),re())}let he=-1;function re(){cancelAnimationFrame(he),he=requestAnimationFrame(()=>{const e=K.shift();e&&e(),K.length?re():ae=!0})}const X={none:null,close:Pt,block:Ct,reposition:At},Ot=G({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in X}},"v-overlay-scroll-strategies");function pt(e,t){if(!V)return;let n;ie(async()=>{n==null||n.stop(),t.isActive.value&&e.scrollStrategy&&(n=Se(),await Z(),n.active&&n.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(t,e,n):(o=X[e.scrollStrategy])==null||o.call(X,t,e,n)}))}),B(()=>{n==null||n.stop()})}function Pt(e){function t(n){e.isActive.value=!1}pe(e.activatorEl.value??e.contentEl.value,t)}function Ct(e,t){var s;const n=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Y(e.activatorEl.value,t.contained?n:void 0),...Y(e.contentEl.value,t.contained?n:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,l=(i=>ce(i)&&i)(n||document.documentElement);l&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,u)=>{i.style.setProperty("--v-body-scroll-x",F(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",F(-i.scrollTop)),i.style.setProperty("--v-scrollbar-offset",F(r)),i.classList.add("v-overlay-scroll-blocked")}),B(()=>{o.forEach((i,u)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),c=parseFloat(i.style.getPropertyValue("--v-body-scroll-y"));i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-c}),l&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function At(e,t,n){let o=!1,r=-1,l=-1;function s(i){kt(()=>{var c,y;const u=performance.now();(y=(c=e.updateLocation).value)==null||y.call(c,i),o=(performance.now()-u)/(1e3/60)>2})}l=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{n.run(()=>{pe(e.activatorEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{s(i)})})):s(i)})})}),B(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(l),cancelAnimationFrame(r)})}function pe(e,t){const n=[document,...Y(e)];n.forEach(o=>{o.addEventListener("scroll",t,{passive:!0})}),B(()=>{n.forEach(o=>{o.removeEventListener("scroll",t)})})}function Tt(){if(!V)return C(!1);const{ssr:e}=Re();if(e){const t=C(!1);return Be(()=>{t.value=!0}),t}else return C(!0)}function Lt(){const t=le("useScopeId").vnode.scopeId;return{scopeId:t?{[t]:""}:void 0}}const be=Symbol.for("vuetify:stack"),$=xe([]);function Ft(e,t,n){const o=le("useStack"),r=!n,l=Ee(be,void 0),s=xe({activeChildren:new Set});Ie(be,s);const i=C(+t.value);se(e,()=>{var y;const c=(y=$.at(-1))==null?void 0:y[1];i.value=c?c+10:+t.value,r&&$.push([o.uid,i.value]),l==null||l.activeChildren.add(o.uid),B(()=>{if(r){const h=Me($).findIndex(p=>p[0]===o.uid);$.splice(h,1)}l==null||l.activeChildren.delete(o.uid)})});const u=C(!0);r&&ie(()=>{var y;const c=((y=$.at(-1))==null?void 0:y[0])===o.uid;setTimeout(()=>u.value=c)});const f=P(()=>!s.activeChildren.size);return{globalTop:De(u),localTop:f,stackStyles:P(()=>({zIndex:i.value}))}}function Rt(e){return{teleportTarget:P(()=>{const n=e.value;if(n===!0||!V)return;const o=n===!1?document.body:typeof n=="string"?document.querySelector(n):n;if(o==null)return;let r=o.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",o.appendChild(r)),r})}}function Bt(){return!0}function Pe(e,t,n){if(!e||Ce(e,n)===!1)return!1;const o=ke(t);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const r=(typeof n.value=="object"&&n.value.include||(()=>[]))();return r.push(t),!r.some(l=>l==null?void 0:l.contains(e.target))}function Ce(e,t){return(typeof t.value=="object"&&t.value.closeConditional||Bt)(e)}function It(e,t,n){const o=typeof n.value=="function"?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&Pe(e,t,n)&&setTimeout(()=>{Ce(e,n)&&o&&o(e)},0)}function we(e,t){const n=ke(e);t(document),typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&t(n)}const Dt={mounted(e,t){const n=r=>It(r,e,t),o=r=>{e._clickOutside.lastMousedownWasOutside=Pe(r,e,t)};we(e,r=>{r.addEventListener("click",n,!0),r.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:n,onMousedown:o}},unmounted(e,t){e._clickOutside&&(we(e,n=>{var l;if(!n||!((l=e._clickOutside)!=null&&l[t.instance.$.uid]))return;const{onClick:o,onMousedown:r}=e._clickOutside[t.instance.$.uid];n.removeEventListener("click",o,!0),n.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[t.instance.$.uid])}};function Mt(e){const{modelValue:t,color:n,...o}=e;return _(et,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&_("div",j({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const _t=G({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...mt(),..._e(),...He(),...nt(),...bt(),...Ot(),...Ne(),...lt()},"v-overlay"),qt=Ve()({name:"VOverlay",directives:{ClickOutside:Dt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,..._t()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,t){let{slots:n,attrs:o,emit:r}=t;const l=We(e,"modelValue"),s=P({get:()=>l.value,set:g=>{g&&e.disabled||(l.value=g)}}),{teleportTarget:i}=Rt(P(()=>e.attach||e.contained)),{themeClasses:u}=qe(e),{rtlClasses:f,isRtl:c}=ze(),{hasContent:y,onAfterLeave:h}=ot(e,s),p=$e(P(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:O}=Ft(s,je(e,"zIndex"),e._disableGlobalStack),{activatorEl:k,activatorRef:w,activatorEvents:a,contentEvents:A,scrimEvents:D}=yt(e,{isActive:s,isTop:v}),{dimensionStyles:H}=Ge(e),N=Tt(),{scopeId:q}=Lt();R(()=>e.disabled,g=>{g&&(s.value=!1)});const z=C(),M=C(),{contentStyles:S,updateLocation:E}=wt(e,{isRtl:c,contentEl:M,activatorEl:k,isActive:s});pt(e,{root:z,contentEl:M,activatorEl:k,isActive:s,updateLocation:E});function m(g){r("click:outside",g),e.persistent?x():s.value=!1}function b(){return s.value&&d.value}V&&R(s,g=>{g?window.addEventListener("keydown",T):window.removeEventListener("keydown",T)},{immediate:!0});function T(g){g.key==="Escape"&&d.value&&(e.persistent?x():s.value=!1)}const L=Ue();se(()=>e.closeOnBack,()=>{tt(L,g=>{d.value&&s.value?(g(!1),e.persistent?x():s.value=!1):g()})});const W=C();R(()=>s.value&&(e.absolute||e.contained)&&i.value==null,g=>{if(g){const I=ct(z.value);I&&I!==document.scrollingElement&&(W.value=I.scrollTop)}});function x(){e.noClickAnimation||M.value&&rt(M.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:it})}return Xe(()=>{var g;return _(Qe,null,[(g=n.activator)==null?void 0:g.call(n,{isActive:s.value,props:j({ref:w},ee(a.value),e.activatorProps)}),N.value&&_(Ye,{disabled:!i.value,to:i.value},{default:()=>[y.value&&_("div",j({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,f.value,e.class],style:[O.value,{top:F(W.value)},e.style],ref:z},q,o),[_(Mt,j({color:p,modelValue:s.value&&!!e.scrim},ee(D.value)),null),_(st,{appear:!0,persisted:!0,transition:e.transition,target:k.value,onAfterLeave:()=>{h(),r("afterLeave")}},{default:()=>{var I;return[Ke(_("div",j({ref:M,class:["v-overlay__content",e.contentClass],style:[H.value,S.value]},ee(A.value),e.contentProps),[(I=n.default)==null?void 0:I.call(n,{isActive:s})]),[[Ze,s.value],[Je("click-outside"),{handler:m,closeConditional:b,include:()=>[k.value]}]])]}})])]})])}),{activatorEl:k,animateClick:x,contentEl:M,globalTop:d,localTop:v,updateLocation:E}}});export{qt as V,dt as a,_t as m,Lt as u};
