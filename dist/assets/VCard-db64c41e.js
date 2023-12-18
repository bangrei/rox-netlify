import{aw as k,az as y,be as O,aN as f,C as n,aB as u,aC as p,b0 as g,b1 as j,b3 as z,aP as G,b4 as J,bk as K,bh as Q,bl as U,aD as $,b5 as q,aF as W,aG as X,aH as Y,aI as Z,b7 as ee,aJ as ae,aK as te,aQ as ne,b8 as de,bm as ie,bj as se,bn as le,aL as ce,b6 as re,a0 as I,L as ue,aU as ve,bo as oe,aO as me}from"./index-30b66760.js";import{c as C,V}from"./VAvatar-2c83efa5.js";import{V as be}from"./VImg-c7c2167a.js";const ge=k()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return O({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),ke=C("v-card-subtitle"),ye=C("v-card-title"),fe=k()({name:"VCardItem",props:{appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...y(),...p()},setup(e,i){let{slots:t}=i;return f(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),b=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(ye,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),b&&n(ke,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ce=C("v-card-text"),Ve=k()({name:"VCard",directives:{Ripple:j},props:{appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...z(),...y(),...p(),...G(),...J(),...K(),...Q(),...U(),...$(),...q(),...W(),...X(),...Y({variant:"elevated"})},setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=Z(e),{borderClasses:s}=ee(e),{colorClasses:o,colorStyles:m,variantClasses:b}=ae(e),{densityClasses:l}=te(e),{dimensionStyles:d}=ne(e),{elevationClasses:P}=de(e),{loaderClasses:S}=ie(e),{locationStyles:x}=se(e),{positionClasses:L}=le(e),{roundedClasses:B}=ce(e),c=re(e,t),D=I(()=>e.link!==!1&&c.isLink.value),r=I(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const T=D.value?"a":e.tag,_=!!(a.title||e.title),R=!!(a.subtitle||e.subtitle),w=_||R,E=!!(a.append||e.appendAvatar||e.appendIcon),F=!!(a.prepend||e.prependAvatar||e.prependIcon),H=!!(a.image||e.image),M=w||F||E,N=!!(a.text||e.text);return ue(n(T,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,P.value,S.value,L.value,B.value,b.value,e.class],style:[m.value,d.value,x.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var h;return[H&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(be,{key:"image-img",cover:!0,src:e.image},null)]),n(oe,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),M&&n(fe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),N&&n(Ce,{key:"text"},{default:()=>{var A;return[((A=a.text)==null?void 0:A.call(a))??e.text]}}),(h=a.default)==null?void 0:h.call(a),a.actions&&n(ge,null,{default:a.actions}),me(r.value,"v-card")]}}),[[ve("ripple"),r.value&&e.ripple]])}),{}}});export{Ve as V,fe as a,ye as b,Ce as c,ke as d,ge as e};