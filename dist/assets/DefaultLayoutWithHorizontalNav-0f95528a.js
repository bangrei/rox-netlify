import{o as b,c as W,F as gt,a as zt,b as R,e as N,f as It,i as Vt,j as lt,k as O,w as pt,l as ne,m as d,n as S,p as k,q as I,s as G,t as Mt,v as vt,x as Z,y as Ft,d as oe,z as ie,A as ae,B as F,C as P,D as re,E as le,G as se,H as ce,I as ue,J as j,K as dt,L as Lt,M as Ct,T as Bt,N as de,r as Pt}from"./index-30b66760.js";import me from"./NavBarI18n-0062835b.js";import pe from"./NavBarNotifications-9f573144.js";import fe from"./NavbarShortcuts-a217b104.js";import he from"./NavbarThemeSwitcher-07bd5533.js";import ge from"./NavSearchBar-bb437091.js";import ve from"./UserProfile-a8f94054.js";import{V as ye}from"./VNodeRenderer-3442d069.js";import{c as be,a as we}from"./casl-de2d4de2.js";import{V as xe}from"./VSpacer-a17cbd45.js";import"./VMenu-55b2ccf7.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./easing-9f15041e.js";import"./transition-0c6e30e4.js";import"./dialog-transition-9418ede6.js";import"./VList-d87f0460.js";import"./ssrBoot-050ef406.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./VDivider-0d474c05.js";import"./vue3-perfect-scrollbar.esm-a93fe39d.js";import"./formatters-33197472.js";import"./index-61e4df1a.js";import"./VBadge-97dc237c.js";import"./VCard-db64c41e.js";import"./VTooltip-d996192b.js";import"./VListItemAction-fc2e2a26.js";import"./VRow-b0db7b1d.js";import"./shepherd.esm-7d7e64e6.js";import"./_plugin-vue_export-helper-c27b6911.js";const ke={class:"nav-items"},Re={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(t){const e=o=>"children"in o?Ce:Wt;return(o,n)=>(b(),W("ul",ke,[(b(!0),W(gt,null,zt(t.navItems,(r,a)=>(b(),R(N(e(r)),{key:a,item:r},null,8,["item"]))),128))]))}},_e={class:"nav-group-label"},Le=oe({name:"HorizontalNavGroup"}),Ce=Object.assign(Le,{props:{item:{type:null,required:!0},childrenAtEnd:{type:Boolean,required:!1,default:!1},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,o=It(),n=Vt(),{dynamicI18nProps:r,isAppRtl:a}=lt(),i=O(!1);return pt(()=>o.path,()=>{const l=ne(e.item.children,n);i.value=l},{immediate:!0}),(l,u)=>d(be)(t.item)?(b(),R(d(Ye),{key:0,"is-rtl":d(a),class:Z(["nav-group",[{active:d(i),"children-at-end":t.childrenAtEnd,"sub-item":t.isSubItem,disabled:t.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":t.childrenAtEnd},{content:S(()=>[(b(!0),W(gt,null,zt(t.item.children,s=>(b(),R(N("children"in s?"HorizontalNavGroup":d(Wt)),{key:s.title,item:s,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:S(()=>[k("div",_e,[(b(),R(N(d(I).app.iconRenderer||"div"),G({class:"nav-item-icon"},t.item.icon||d(I).verticalNav.defaultNavItemIconProps),null,16)),(b(),R(N(d(I).app.enableI18n?"i18n-t":"span"),G(d(r)(t.item.title,"span"),{class:"nav-item-title"}),{default:S(()=>[Mt(vt(t.item.title),1)]),_:1},16)),(b(),R(N(d(I).app.iconRenderer||"div"),G(d(I).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):Ft("",!0)}}),Pe={class:"layout-navbar"},Se={class:"navbar-content-container"},Te={class:"layout-horizontal-nav"},$e={class:"horizontal-nav-content-container"},Ee={class:"layout-page-content"},Ae={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(t){const{y:e}=ie(),{width:o}=ae(),n=Vt(),r=O(!1);n.beforeEach(()=>{r.value=!0}),n.afterEach(()=>{r.value=!1});const{_layoutClasses:a,isNavbarBlurEnabled:i}=lt();return(l,u)=>(b(),W("div",{class:Z(["layout-wrapper",d(a)(d(o),d(e))])},[k("div",{class:Z(["layout-navbar-and-nav-container",d(i)&&"header-blur"])},[k("div",Pe,[k("div",Se,[F(l.$slots,"navbar")])]),k("div",Te,[k("div",$e,[P(d(Re),{"nav-items":t.navItems},null,8,["nav-items"])])])],2),k("main",Ee,[l.$slots["content-loading"]?(b(),W(gt,{key:0},[d(r)?F(l.$slots,"content-loading",{key:0}):F(l.$slots,"default",{key:1})],64)):F(l.$slots,"default",{key:1})])],2))}},Wt={__name:"HorizontalNavLink",props:{item:{type:null,required:!0},isSubItem:{type:Boolean,required:!1,default:!1}},setup(t){const e=t,{dynamicI18nProps:o}=lt();return(n,r)=>d(we)(t.item.action,t.item.subject)?(b(),W("li",{key:0,class:Z(["nav-link",[{"sub-item":e.isSubItem,disabled:t.item.disable}]])},[(b(),R(N(t.item.to?"RouterLink":"a"),G(d(le)(t.item),{class:{"router-link-active router-link-exact-active":d(re)(t.item,n.$router)}}),{default:S(()=>[(b(),R(N(d(I).app.iconRenderer||"div"),G({class:"nav-item-icon"},t.item.icon||d(I).verticalNav.defaultNavItemIconProps),null,16)),(b(),R(N(d(I).app.enableI18n?"i18n-t":"span"),G({class:"nav-item-title"},d(o)(t.item.title,"span")),{default:S(()=>[Mt(vt(t.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):Ft("",!0)}};function yt(t){return t.split("-")[1]}function Ht(t){return t==="y"?"height":"width"}function U(t){return t.split("-")[0]}function bt(t){return["top","bottom"].includes(U(t))?"x":"y"}function St(t,e,o){let{reference:n,floating:r}=t;const a=n.x+n.width/2-r.width/2,i=n.y+n.height/2-r.height/2,l=bt(e),u=Ht(l),s=n[u]/2-r[u]/2,m=l==="x";let c;switch(U(e)){case"top":c={x:a,y:n.y-r.height};break;case"bottom":c={x:a,y:n.y+n.height};break;case"right":c={x:n.x+n.width,y:i};break;case"left":c={x:n.x-r.width,y:i};break;default:c={x:n.x,y:n.y}}switch(yt(e)){case"start":c[l]-=s*(o&&m?-1:1);break;case"end":c[l]+=s*(o&&m?-1:1)}return c}const Ne=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:a=[],platform:i}=o,l=a.filter(Boolean),u=await(i.isRTL==null?void 0:i.isRTL(e));let s=await i.getElementRects({reference:t,floating:e,strategy:r}),{x:m,y:c}=St(s,n,u),p=n,f={},g=0;for(let h=0;h<l.length;h++){const{name:v,fn:y}=l[h],{x:w,y:x,data:T,reset:$}=await y({x:m,y:c,initialPlacement:n,placement:p,strategy:r,middlewareData:f,rects:s,platform:i,elements:{reference:t,floating:e}});m=w??m,c=x??c,f={...f,[v]:{...f[v],...T}},$&&g<=50&&(g++,typeof $=="object"&&($.placement&&(p=$.placement),$.rects&&(s=$.rects===!0?await i.getElementRects({reference:t,floating:e,strategy:r}):$.rects),{x:m,y:c}=St(s,p,u)),h=-1)}return{x:m,y:c,placement:p,strategy:r,middlewareData:f}};function De(t){return typeof t!="number"?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(t):{top:t,right:t,bottom:t,left:t}}function it(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function qt(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:a,rects:i,elements:l,strategy:u}=t,{boundary:s="clippingAncestors",rootBoundary:m="viewport",elementContext:c="floating",altBoundary:p=!1,padding:f=0}=e,g=De(f),h=l[p?c==="floating"?"reference":"floating":c],v=it(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(h)))==null||o?h:h.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(l.floating)),boundary:s,rootBoundary:m,strategy:u})),y=c==="floating"?{...i.floating,x:n,y:r}:i.reference,w=await(a.getOffsetParent==null?void 0:a.getOffsetParent(l.floating)),x=await(a.isElement==null?void 0:a.isElement(w))&&await(a.getScale==null?void 0:a.getScale(w))||{x:1,y:1},T=it(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:u}):y);return{top:(v.top-T.top+g.top)/x.y,bottom:(T.bottom-v.bottom+g.bottom)/x.y,left:(v.left-T.left+g.left)/x.x,right:(T.right-v.right+g.right)/x.x}}const ze=Math.min,Ie=Math.max;function Tt(t,e,o){return Ie(t,ze(e,o))}const Ve=["top","right","bottom","left"];Ve.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);const Me={left:"right",right:"left",bottom:"top",top:"bottom"};function at(t){return t.replace(/left|right|bottom|top/g,e=>Me[e])}function Fe(t,e,o){o===void 0&&(o=!1);const n=yt(t),r=bt(t),a=Ht(r);let i=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(i=at(i)),{main:i,cross:at(i)}}const Be={start:"end",end:"start"};function mt(t){return t.replace(/start|end/g,e=>Be[e])}const We=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:n,middlewareData:r,rects:a,initialPlacement:i,platform:l,elements:u}=e,{mainAxis:s=!0,crossAxis:m=!0,fallbackPlacements:c,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:g=!0,...h}=t,v=U(n),y=U(i)===i,w=await(l.isRTL==null?void 0:l.isRTL(u.floating)),x=c||(y||!g?[at(i)]:function(L){const D=at(L);return[mt(L),D,mt(D)]}(i));c||f==="none"||x.push(...function(L,D,q,M){const z=yt(L);let C=function(K,ut,Zt){const Rt=["left","right"],_t=["right","left"],te=["top","bottom"],ee=["bottom","top"];switch(K){case"top":case"bottom":return Zt?ut?_t:Rt:ut?Rt:_t;case"left":case"right":return ut?te:ee;default:return[]}}(U(L),q==="start",M);return z&&(C=C.map(K=>K+"-"+z),D&&(C=C.concat(C.map(mt)))),C}(i,g,f,w));const T=[i,...x],$=await qt(e,h),nt=[];let J=((o=r.flip)==null?void 0:o.overflows)||[];if(s&&nt.push($[v]),m){const{main:L,cross:D}=Fe(n,a,w);nt.push($[L],$[D])}if(J=[...J,{placement:n,overflows:nt}],!nt.every(L=>L<=0)){var wt,xt;const L=(((wt=r.flip)==null?void 0:wt.index)||0)+1,D=T[L];if(D)return{data:{index:L,overflows:J},reset:{placement:D}};let q=(xt=J.filter(M=>M.overflows[0]<=0).sort((M,z)=>M.overflows[1]-z.overflows[1])[0])==null?void 0:xt.placement;if(!q)switch(p){case"bestFit":{var kt;const M=(kt=J.map(z=>[z.placement,z.overflows.filter(C=>C>0).reduce((C,K)=>C+K,0)]).sort((z,C)=>z[1]-C[1])[0])==null?void 0:kt[0];M&&(q=M);break}case"initialPlacement":q=i}if(n!==q)return{reset:{placement:q}}}return{}}}};function He(t){return t==="x"?"y":"x"}const qe=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:a=!0,crossAxis:i=!1,limiter:l={fn:v=>{let{x:y,y:w}=v;return{x:y,y:w}}},...u}=t,s={x:o,y:n},m=await qt(e,u),c=bt(U(r)),p=He(c);let f=s[c],g=s[p];if(a){const v=c==="y"?"bottom":"right";f=Tt(f+m[c==="y"?"top":"left"],f,f-m[v])}if(i){const v=p==="y"?"bottom":"right";g=Tt(g+m[p==="y"?"top":"left"],g,g-m[v])}const h=l.fn({...e,[c]:f,[p]:g});return{...h,data:{x:h.x-o,y:h.y-n}}}}};function _(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function E(t){return _(t).getComputedStyle(t)}function Ot(t){return t instanceof _(t).Node}function H(t){return Ot(t)?(t.nodeName||"").toLowerCase():""}let ot;function jt(){if(ot)return ot;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(ot=t.brands.map(e=>e.brand+"/"+e.version).join(" "),ot):navigator.userAgent}function A(t){return t instanceof _(t).HTMLElement}function V(t){return t instanceof _(t).Element}function $t(t){return typeof ShadowRoot>"u"?!1:t instanceof _(t).ShadowRoot||t instanceof ShadowRoot}function tt(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(r)}function Oe(t){return["table","td","th"].includes(H(t))}function ft(t){const e=/firefox/i.test(jt()),o=E(t),n=o.backdropFilter||o.WebkitBackdropFilter;return o.transform!=="none"||o.perspective!=="none"||!!n&&n!=="none"||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"||["transform","perspective"].some(r=>o.willChange.includes(r))||["paint","layout","strict","content"].some(r=>{const a=o.contain;return a!=null&&a.includes(r)})}function ht(){return/^((?!chrome|android).)*safari/i.test(jt())}function st(t){return["html","body","#document"].includes(H(t))}const Et=Math.min,Q=Math.max,rt=Math.round;function Gt(t){const e=E(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=A(t),a=r?t.offsetWidth:o,i=r?t.offsetHeight:n,l=rt(o)!==a||rt(n)!==i;return l&&(o=a,n=i),{width:o,height:n,fallback:l}}function Ut(t){return V(t)?t:t.contextElement}const Yt={x:1,y:1};function Y(t){const e=Ut(t);if(!A(e))return Yt;const o=e.getBoundingClientRect(),{width:n,height:r,fallback:a}=Gt(e);let i=(a?rt(o.width):o.width)/n,l=(a?rt(o.height):o.height)/r;return i&&Number.isFinite(i)||(i=1),l&&Number.isFinite(l)||(l=1),{x:i,y:l}}function et(t,e,o,n){var r,a;e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),l=Ut(t);let u=Yt;e&&(n?V(n)&&(u=Y(n)):u=Y(t));const s=l?_(l):window,m=ht()&&o;let c=(i.left+(m&&((r=s.visualViewport)==null?void 0:r.offsetLeft)||0))/u.x,p=(i.top+(m&&((a=s.visualViewport)==null?void 0:a.offsetTop)||0))/u.y,f=i.width/u.x,g=i.height/u.y;if(l){const h=_(l),v=n&&V(n)?_(n):n;let y=h.frameElement;for(;y&&n&&v!==h;){const w=Y(y),x=y.getBoundingClientRect(),T=getComputedStyle(y);x.x+=(y.clientLeft+parseFloat(T.paddingLeft))*w.x,x.y+=(y.clientTop+parseFloat(T.paddingTop))*w.y,c*=w.x,p*=w.y,f*=w.x,g*=w.y,c+=x.x,p+=x.y,y=_(y).frameElement}}return it({width:f,height:g,x:c,y:p})}function B(t){return((Ot(t)?t.ownerDocument:t.document)||window.document).documentElement}function ct(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Xt(t){return et(B(t)).left+ct(t).scrollLeft}function X(t){if(H(t)==="html")return t;const e=t.assignedSlot||t.parentNode||$t(t)&&t.host||B(t);return $t(e)?e.host:e}function Jt(t){const e=X(t);return st(e)?e.ownerDocument.body:A(e)&&tt(e)?e:Jt(e)}function Kt(t,e){var o;e===void 0&&(e=[]);const n=Jt(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),a=_(n);return r?e.concat(a,a.visualViewport||[],tt(n)?n:[]):e.concat(n,Kt(n))}function At(t,e,o){let n;if(e==="viewport")n=function(i,l){const u=_(i),s=B(i),m=u.visualViewport;let c=s.clientWidth,p=s.clientHeight,f=0,g=0;if(m){c=m.width,p=m.height;const h=ht();(!h||h&&l==="fixed")&&(f=m.offsetLeft,g=m.offsetTop)}return{width:c,height:p,x:f,y:g}}(t,o);else if(e==="document")n=function(i){const l=B(i),u=ct(i),s=i.ownerDocument.body,m=Q(l.scrollWidth,l.clientWidth,s.scrollWidth,s.clientWidth),c=Q(l.scrollHeight,l.clientHeight,s.scrollHeight,s.clientHeight);let p=-u.scrollLeft+Xt(i);const f=-u.scrollTop;return E(s).direction==="rtl"&&(p+=Q(l.clientWidth,s.clientWidth)-m),{width:m,height:c,x:p,y:f}}(B(t));else if(V(e))n=function(i,l){const u=et(i,!0,l==="fixed"),s=u.top+i.clientTop,m=u.left+i.clientLeft,c=A(i)?Y(i):{x:1,y:1};return{width:i.clientWidth*c.x,height:i.clientHeight*c.y,x:m*c.x,y:s*c.y}}(e,o);else{const i={...e};if(ht()){var r,a;const l=_(t);i.x-=((r=l.visualViewport)==null?void 0:r.offsetLeft)||0,i.y-=((a=l.visualViewport)==null?void 0:a.offsetTop)||0}n=i}return it(n)}function Qt(t,e){const o=X(t);return!(o===e||!V(o)||st(o))&&(E(o).position==="fixed"||Qt(o,e))}function Nt(t,e){return A(t)&&E(t).position!=="fixed"?e?e(t):t.offsetParent:null}function Dt(t,e){const o=_(t);if(!A(t))return o;let n=Nt(t,e);for(;n&&Oe(n)&&E(n).position==="static";)n=Nt(n,e);return n&&(H(n)==="html"||H(n)==="body"&&E(n).position==="static"&&!ft(n))?o:n||function(r){let a=X(r);for(;A(a)&&!st(a);){if(ft(a))return a;a=X(a)}return null}(t)||o}function je(t,e,o){const n=A(e),r=B(e),a=et(t,!0,o==="fixed",e);let i={scrollLeft:0,scrollTop:0};const l={x:0,y:0};if(n||!n&&o!=="fixed")if((H(e)!=="body"||tt(r))&&(i=ct(e)),A(e)){const u=et(e,!0);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else r&&(l.x=Xt(r));return{x:a.left+i.scrollLeft-l.x,y:a.top+i.scrollTop-l.y,width:a.width,height:a.height}}const Ge={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const a=o==="clippingAncestors"?function(s,m){const c=m.get(s);if(c)return c;let p=Kt(s).filter(v=>V(v)&&H(v)!=="body"),f=null;const g=E(s).position==="fixed";let h=g?X(s):s;for(;V(h)&&!st(h);){const v=E(h),y=ft(h);y||v.position!=="fixed"||(f=null),(g?!y&&!f:!y&&v.position==="static"&&f&&["absolute","fixed"].includes(f.position)||tt(h)&&!y&&Qt(s,h))?p=p.filter(w=>w!==h):f=v,h=X(h)}return m.set(s,p),p}(e,this._c):[].concat(o),i=[...a,n],l=i[0],u=i.reduce((s,m)=>{const c=At(e,m,r);return s.top=Q(c.top,s.top),s.right=Et(c.right,s.right),s.bottom=Et(c.bottom,s.bottom),s.left=Q(c.left,s.left),s},At(e,l,r));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:n}=t;const r=A(o),a=B(o);if(o===a)return e;let i={scrollLeft:0,scrollTop:0},l={x:1,y:1};const u={x:0,y:0};if((r||!r&&n!=="fixed")&&((H(o)!=="body"||tt(a))&&(i=ct(o)),A(o))){const s=et(o);l=Y(o),u.x=s.x+o.clientLeft,u.y=s.y+o.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-i.scrollLeft*l.x+u.x,y:e.y*l.y-i.scrollTop*l.y+u.y}},isElement:V,getDimensions:function(t){return Gt(t)},getOffsetParent:Dt,getDocumentElement:B,getScale:Y,async getElementRects(t){let{reference:e,floating:o,strategy:n}=t;const r=this.getOffsetParent||Dt,a=this.getDimensions;return{reference:je(e,await r(o),n),floating:{x:0,y:0,...await a(o)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>E(t).direction==="rtl"},Ue=(t,e,o)=>{const n=new Map,r={platform:Ge,...o},a={...r.platform,_c:n};return Ne(t,e,{...r,platform:a})},Ye={__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,required:!1,default:!1},tag:{type:String,required:!1,default:"div"},contentContainerTag:{type:String,required:!1,default:"div"},isRtl:{type:Boolean,required:!1}},setup(t){const e=t,o=O(),n=O(),r=O({left:"0px",top:"0px"}),a=async()=>{const{x:p,y:f}=await Ue(o.value,n.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[We({boundary:document.querySelector("body")}),qe({boundary:document.querySelector("body")})]});r.value.left=`${p}px`,r.value.top=`${f}px`};se(I.horizontalNav.type).toMatch(p=>p==="static").then(()=>{ce("scroll",a)});const i=O(!1),l=()=>{i.value=!0,a()},u=()=>{i.value=!1};ue(a);const{isAppRtl:s,appContentWidth:m}=lt();pt([s,m],a);const c=It();return pt(()=>c.fullPath,u),(p,f)=>(b(),W("div",{class:Z(["nav-popper",[{"popper-inline-end":t.popperInlineEnd,"show-content":d(i)}]])},[k("div",{ref_key:"refPopperContainer",ref:o,class:"popper-triggerer",onMouseenter:l,onMouseleave:u},[F(p.$slots,"default")],544),d(j).horizontalNav.transition?typeof d(j).horizontalNav.transition=="string"?(b(),R(Bt,{key:1,name:d(j).horizontalNav.transition},{default:S(()=>[Lt(k("div",{ref_key:"refPopper",ref:n,class:"popper-content",style:dt(d(r)),onMouseenter:l,onMouseleave:u},[k("div",null,[F(p.$slots,"content")])],36),[[Ct,d(i)]])]),_:3},8,["name"])):(b(),R(N(d(j).horizontalNav.transition),{key:2},{default:S(()=>[Lt(k("div",{ref_key:"refPopper",ref:n,class:"popper-content",style:dt(d(r)),onMouseenter:l,onMouseleave:u},[k("div",null,[F(p.$slots,"content")])],36),[[Ct,d(i)]])]),_:3})):(b(),W("div",{key:0,ref_key:"refPopper",ref:n,class:"popper-content",style:dt(d(r)),onMouseenter:l,onMouseleave:u},[k("div",null,[F(p.$slots,"content")])],36))],2))}},Xe=[{title:"Apps",icon:{icon:"mdi-package-variant"},children:[{title:"Email",icon:{icon:"mdi-email-outline"},to:"apps-email"},{title:"Chat",icon:{icon:"mdi-message-outline"},to:"apps-chat"},{title:"Calendar",to:"apps-calendar",icon:{icon:"mdi-calendar-blank"}},{title:"Invoice",icon:{icon:"mdi-file-document-outline"},children:[{title:"List",to:"apps-invoice-list"},{title:"Preview",to:{name:"apps-invoice-preview-id",params:{id:"5036"}}},{title:"Edit",to:{name:"apps-invoice-edit-id",params:{id:"5036"}}},{title:"Add",to:"apps-invoice-add"}]},{title:"User",icon:{icon:"mdi-account-outline"},children:[{title:"List",to:"apps-user-list"},{title:"View",to:{name:"apps-user-view-id",params:{id:21}}}]},{title:"Roles & Permissions",icon:{icon:"mdi-shield-account-outline"},children:[{title:"Roles",to:"apps-roles"},{title:"Permissions",to:"apps-permissions"}]}]}],Je=[{title:"Charts",icon:{icon:"mdi-chart-donut"},children:[{title:"Apex Chart",to:"charts-apex-chart",icon:{icon:"mdi-chart-bell-curve"}},{title:"Chartjs",to:"charts-chartjs",icon:{icon:"mdi-chart-bell-curve-cumulative"}}]}],Ke=[{title:"Dashboards",icon:{icon:"mdi-home-outline"},children:[{title:"CRM",to:"dashboards-crm",icon:{icon:"mdi-chart-donut"}},{title:"Analytics",to:"dashboards-analytics",icon:{icon:"mdi-chart-timeline-variant"}},{title:"eCommerce",to:"dashboards-ecommerce",icon:{icon:"mdi-cart-outline"}}]}],Qe=[{title:"Forms",icon:{icon:"mdi-checkbox-multiple-outline"},children:[{title:"Form Elements",icon:{icon:"mdi-content-copy"},children:[{title:"Autocomplete",to:"forms-autocomplete"},{title:"Checkbox",to:"forms-checkbox"},{title:"Combobox",to:"forms-combobox"},{title:"Date Time Picker",to:"forms-date-time-picker"},{title:"File Input",to:"forms-file-input"},{title:"Radio",to:"forms-radio"},{title:"Custom Input",to:"forms-custom-input"},{title:"Range Slider",to:"forms-range-slider"},{title:"Rating",to:"forms-rating"},{title:"Select",to:"forms-select"},{title:"Slider",to:"forms-slider"},{title:"Switch",to:"forms-switch"},{title:"Textarea",to:"forms-textarea"},{title:"Textfield",to:"forms-textfield"}]},{title:"Form Layouts",icon:{icon:"mdi-checkbox-marked-circle-outline"},to:"forms-form-layouts"},{title:"Form Wizard",icon:{icon:"mdi-align-vertical-distribute"},children:[{title:"Numbered",to:"forms-form-wizard-numbered"},{title:"Icons",to:"forms-form-wizard-icons"}]},{title:"Form Validation",icon:{icon:"mdi-checkbox-marked-circle-outline"},to:"forms-form-validation"}]}],Ze=[{title:"Others",icon:{icon:"mdi-dots-horizontal"},children:[{title:"Access Control",icon:{icon:"mdi-shield-outline"},to:"access-control",action:"read",subject:"AclDemo"},{title:"Nav Levels",icon:{icon:"mdi-menu"},children:[{title:"Level 2.1",to:null},{title:"Level 2.2",children:[{title:"Level 3.1",to:null},{title:"Level 3.2",to:null}]}]},{title:"Disabled Menu",to:null,icon:{icon:"mdi-eye-off-outline"},disable:!0},{title:"Raise Support",href:"https://themeselection.com/support/",icon:{icon:"mdi-lifebuoy"},target:"_blank"},{title:"Documentation",href:"https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/documentation/",icon:{icon:"mdi-file-document-outline"},target:"_blank"}]}],tn=[{title:"Pages",icon:{icon:"mdi-file-outline"},children:[{title:"User Profile",icon:{icon:"mdi-account-circle-outline"},to:{name:"pages-user-profile-tab",params:{tab:"profile"}}},{title:"Account Settings",icon:{icon:"mdi-cog-outline"},to:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"FAQ",icon:{icon:"mdi-help-circle-outline"},to:"pages-faq"},{title:"Help Center",icon:{icon:"mdi-help-circle-outline"},to:"pages-help-center"},{title:"Pricing",icon:{icon:"mdi-currency-usd"},to:"pages-pricing"},{title:"Misc",icon:{icon:"mdi-file-outline"},children:[{title:"Coming Soon",to:"pages-misc-coming-soon"},{title:"Under Maintenance",to:"pages-misc-under-maintenance",target:"_blank"},{title:"Page Not Found - 404",to:"pages-misc-not-found",target:"_blank"},{title:"Not Authorized - 401",to:"pages-misc-not-authorized",target:"_blank"},{title:"Server Error - 500",to:"pages-misc-internal-server-error",target:"_blank"}]},{title:"Authentication",icon:{icon:"mdi-lock-outline"},children:[{title:"Login",children:[{title:"Login v1",to:"pages-authentication-login-v1",target:"_blank"},{title:"Login v2",to:"pages-authentication-login-v2",target:"_blank"}]},{title:"Register",children:[{title:"Register v1",to:"pages-authentication-register-v1",target:"_blank"},{title:"Register v2",to:"pages-authentication-register-v2",target:"_blank"},{title:"Register Multi-Steps",to:"pages-authentication-register-multi-steps",target:"_blank"}]},{title:"Verify Email",children:[{title:"Verify Email v1",to:"pages-authentication-verify-email-v1",target:"_blank"},{title:"Verify Email v2",to:"pages-authentication-verify-email-v2",target:"_blank"}]},{title:"Forgot Password",children:[{title:"Forgot Password v1",to:"pages-authentication-forgot-password-v1",target:"_blank"},{title:"Forgot Password v2",to:"pages-authentication-forgot-password-v2",target:"_blank"}]},{title:"Reset Password",children:[{title:"Reset Password v1",to:"pages-authentication-reset-password-v1",target:"_blank"},{title:"Reset Password v2",to:"pages-authentication-reset-password-v2",target:"_blank"}]},{title:"Two Steps",children:[{title:"Two Steps v1",to:"pages-authentication-two-steps-v1",target:"_blank"},{title:"Two Steps v2",to:"pages-authentication-two-steps-v2",target:"_blank"}]}]},{title:"Wizard Pages",icon:{icon:"mdi-ray-start-vertex-end"},children:[{title:"Checkout",to:{name:"wizard-examples-checkout"}},{title:"Property Listing",to:{name:"wizard-examples-property-listing"}},{title:"Create Deal",to:{name:"wizard-examples-create-deal"}}]},{title:"Dialog Examples",icon:{icon:"mdi-content-copy"},to:"pages-dialog-examples"}]}],en=[{title:"Tables",icon:{icon:"mdi-table"},children:[{title:"Simple Table",icon:{icon:"mdi-grid-large"},to:"tables-simple-table"},{title:"Data Table",icon:{icon:"mdi-grid"},to:"tables-data-table"}]}],nn=[{title:"User Interface",icon:{icon:"mdi-layers-outline"},children:[{title:"Icons",icon:{icon:"mdi-eye-outline"},to:"pages-icons"},{title:"Typography",icon:{icon:"mdi-alpha-t-box-outline"},to:"pages-typography"},{title:"Cards",icon:{icon:"mdi-credit-card-outline"},children:[{title:"Basic",to:"pages-cards-card-basic"},{title:"Advance",to:"pages-cards-card-advance"},{title:"Statistics",to:"pages-cards-card-statistics"},{title:"Widgets",to:"pages-cards-card-widgets"},{title:"Gamification",to:"pages-cards-card-gamification"},{title:"Actions",to:"pages-cards-card-actions"}]},{title:"Components",icon:{icon:"mdi-archive-outline"},children:[{title:"Alert",to:"components-alert"},{title:"Avatar",to:"components-avatar"},{title:"Badge",to:"components-badge"},{title:"Button",to:"components-button"},{title:"Chip",to:"components-chip"},{title:"Dialog",to:"components-dialog"},{title:"Expansion Panel",to:"components-expansion-panel"},{title:"List",to:"components-list"},{title:"Menu",to:"components-menu"},{title:"Pagination",to:"components-pagination"},{title:"Progress Circular",to:"components-progress-circular"},{title:"Progress Linear",to:"components-progress-linear"},{title:"Snackbar",to:"components-snackbar"},{title:"Tabs",to:"components-tabs"},{title:"Timeline",to:"components-timeline"},{title:"Tooltip",to:"components-tooltip"}]}]}],on=[...Ke,...Xe,...tn,...nn,...Qe,...en,...Je,...Ze],an={class:"font-weight-medium leading-normal text-xl text-uppercase"},Mn={__name:"DefaultLayoutWithHorizontalNav",setup(t){const{appRouteTransition:e}=de();return(o,n)=>{const r=Pt("RouterLink"),a=Pt("RouterView");return b(),R(d(Ae),{"nav-items":d(on)},{navbar:S(()=>[P(r,{to:"/",class:"d-flex align-center gap-x-3"},{default:S(()=>[P(d(ye),{nodes:d(j).app.logo},null,8,["nodes"]),k("h1",an,vt(d(j).app.title),1)]),_:1}),P(xe),P(ge,{"trigger-btn-class":"ms-lg-n3"}),P(me),P(he),P(fe),P(pe,{class:"me-2"}),P(ve)]),default:S(()=>[P(a,null,{default:S(({Component:i})=>[P(Bt,{name:d(e),mode:"out-in"},{default:S(()=>[(b(),R(N(i)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{Mn as default};
