import{aw as k,az as O,aP as q,aQ as x,aN as P,C as a,a0 as b,aR as W,k as S,w as z,aS as A,aT as H,L as C,aU as L,F as U,aV as Q,M as G}from"./index-30b66760.js";import{m as J,M as y}from"./transition-0c6e30e4.js";function K(e){return{aspectStyles:b(()=>{const u=Number(e.aspectRatio);return u?{paddingBottom:String(1/u*100)+"%"}:void 0})}}const X=k()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...O(),...q()},setup(e,u){let{slots:i}=u;const{aspectStyles:n}=K(e),{dimensionStyles:m}=x(e);return P(()=>{var r;return a("div",{class:["v-responsive",e.class],style:[m.value,e.style]},[a("div",{class:"v-responsive__sizer",style:n.value},null),(r=i.additional)==null?void 0:r.call(i),i.default&&a("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});function Y(e,u){if(!W)return;const i=u.modifiers||{},n=u.value,{handler:m,options:r}=typeof n=="object"?n:{handler:n,options:{}},l=new IntersectionObserver(function(){var f;let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],g=arguments.length>1?arguments[1]:void 0;const s=(f=e._observe)==null?void 0:f[u.instance.$.uid];if(!s)return;const o=v.some(_=>_.isIntersecting);m&&(!i.quiet||s.init)&&(!i.once||o||s.init)&&m(o,v,g),o&&i.once?j(e,u):s.init=!0},r);e._observe=Object(e._observe),e._observe[u.instance.$.uid]={init:!1,observer:l},l.observe(e)}function j(e,u){var n;const i=(n=e._observe)==null?void 0:n[u.instance.$.uid];i&&(i.observer.unobserve(e),delete e._observe[u.instance.$.uid])}const Z={mounted:Y,unmounted:j},p=Z,ae=k()({name:"VImg",directives:{intersect:p},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...O(),...J()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,u){let{emit:i,slots:n}=u;const m=S(""),r=S(),l=S(e.eager?"loading":"idle"),v=S(),g=S(),s=b(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),o=b(()=>s.value.aspect||v.value/g.value||0);z(()=>e.src,()=>{f(l.value!=="idle")}),z(o,(t,c)=>{!t&&c&&r.value&&h(r.value)}),A(()=>f());function f(t){if(!(e.eager&&t)&&!(W&&!t&&!e.eager)){if(l.value="loading",s.value.lazySrc){const c=new Image;c.src=s.value.lazySrc,h(c,null)}s.value.src&&H(()=>{var c,d;if(i("loadstart",((c=r.value)==null?void 0:c.currentSrc)||s.value.src),(d=r.value)!=null&&d.complete){if(r.value.naturalWidth||I(),l.value==="error")return;o.value||h(r.value,null),_()}else o.value||h(r.value),R()})}}function _(){var t;R(),l.value="loaded",i("load",((t=r.value)==null?void 0:t.currentSrc)||s.value.src)}function I(){var t;l.value="error",i("error",((t=r.value)==null?void 0:t.currentSrc)||s.value.src)}function R(){const t=r.value;t&&(m.value=t.currentSrc||t.src)}let w=-1;function h(t){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const d=()=>{clearTimeout(w);const{naturalHeight:V,naturalWidth:$}=t;V||$?(v.value=$,g.value=V):!t.complete&&l.value==="loading"&&c!=null?w=window.setTimeout(d,c):(t.currentSrc.endsWith(".svg")||t.currentSrc.startsWith("data:image/svg+xml"))&&(v.value=1,g.value=1)};d()}const N=b(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),B=()=>{var d;if(!s.value.src||l.value==="idle")return null;const t=a("img",{class:["v-img__img",N.value],src:s.value.src,srcset:s.value.srcset,alt:e.alt,sizes:e.sizes,ref:r,onLoad:_,onError:I},null),c=(d=n.sources)==null?void 0:d.call(n);return a(y,{transition:e.transition,appear:!0},{default:()=>[C(c?a("picture",{class:"v-img__picture"},[c,t]):t,[[G,l.value==="loaded"]])]})},F=()=>a(y,{transition:e.transition},{default:()=>[s.value.lazySrc&&l.value!=="loaded"&&a("img",{class:["v-img__img","v-img__img--preload",N.value],src:s.value.lazySrc,alt:e.alt},null)]}),M=()=>n.placeholder?a(y,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!n.error)&&a("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,D=()=>n.error?a(y,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&a("div",{class:"v-img__error"},[n.error()])]}):null,E=()=>e.gradient?a("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,T=S(!1);{const t=z(o,c=>{c&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{T.value=!0})}),t())})}return P(()=>C(a(X,{class:["v-img",{"v-img--booting":!T.value},e.class],style:[{width:Q(e.width==="auto"?v.value:e.width)},e.style],aspectRatio:o.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>a(U,null,[a(B,null,null),a(F,null,null),a(E,null,null),a(M,null,null),a(D,null,null)]),default:n.default}),[[L("intersect"),{handler:f,options:e.options},null,{once:!0}]])),{currentSrc:m,image:r,state:l,naturalWidth:v,naturalHeight:g}}});export{p as I,ae as V,X as a};