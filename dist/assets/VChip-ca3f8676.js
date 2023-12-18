import{aw as G,ba as W,az as E,bW as Z,aF as z,aG as R,aH as w,aI as F,bX as j,be as Q,X as r,aN as ee,C as l,b1 as ae,aB as h,b2 as x,b3 as le,aC as te,b4 as ne,bY as se,aD as ie,b5 as ce,aE as de,bi as oe,b7 as ue,aJ as re,aK as ve,b8 as fe,aL as me,aM as ke,aX as be,bZ as pe,b6 as ye,a0 as C,L as V,aU as D,aO as he,b_ as Ce,Y as v,b0 as f,M as Ve,F as L,s as Ie}from"./index-30b66760.js";import{V as _}from"./VAvatar-2c83efa5.js";const M=Symbol.for("vuetify:v-chip-group");G()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:W},...E(),...Z({selectedClass:"v-chip--selected"}),...z(),...R(),...w({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:c}=m;const{themeClasses:o}=F(e),{isSelected:t,select:k,next:b,prev:p,selected:y}=j(e,M);return Q({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),ee(()=>l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style},{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:k,next:b,prev:p,selected:y.value})]}})),{}}});const Se=G()({name:"VChip",directives:{Ripple:ae},props:{activeClass:String,appendAvatar:String,appendIcon:h,closable:Boolean,closeIcon:{type:h,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:h,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:x(),onClickOnce:x(),...le(),...E(),...te(),...ne(),...se(),...ie(),...ce(),...de(),...z({tag:"span"}),...R(),...w({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,m){let{attrs:c,emit:o,slots:t}=m;const{t:k}=oe(),{borderClasses:b}=ue(e),{colorClasses:p,colorStyles:y,variantClasses:u}=re(e),{densityClasses:T}=ve(e),{elevationClasses:X}=fe(e),{roundedClasses:$}=me(e),{sizeClasses:K}=ke(e),{themeClasses:O}=F(e),I=be(e,"modelValue"),a=pe(e,M,!1),s=ye(e,c),N=C(()=>e.link!==!1&&s.isLink.value),i=C(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),Y=C(()=>({"aria-label":k(e.closeLabel),onClick(n){I.value=!1,o("click:close",n)}}));function g(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function q(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),g(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),H=!!(d||t.append),J=!!(t.close||e.closable),P=!!(t.filter||e.filter)&&a,S=!!(e.prependIcon||e.prependAvatar),U=!!(S||t.prepend),A=!a||a.isSelected.value;return I.value&&V(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":P,"v-chip--pill":e.pill},O.value,b.value,A?p.value:void 0,T.value,X.value,$.value,K.value,u.value,a==null?void 0:a.selectedClass.value,e.class],style:[A?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:g,onKeydown:i.value&&!N.value&&q},{default:()=>{var B;return[he(i.value,"v-chip"),P&&l(Ce,{key:"filter"},{default:()=>[V(l("div",{class:"v-chip__filter"},[t.filter?V(l(f,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[D("slot"),t.filter,"default"]]):l(v,{key:"filter-icon",icon:e.filterIcon},null)]),[[Ve,a.isSelected.value]])]}),U&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(f,{key:"prepend-defaults",disabled:!S,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(L,null,[e.prependIcon&&l(v,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(_,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),((B=t.default)==null?void 0:B.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text,H&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(f,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(L,null,[e.appendIcon&&l(v,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(_,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),J&&l("div",Ie({key:"close",class:"v-chip__close"},Y.value),[t.close?l(f,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(v,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[D("ripple"),i.value&&e.ripple,null]])}}});export{Se as V};