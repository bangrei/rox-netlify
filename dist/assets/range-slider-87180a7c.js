import{m as Q,u as Z,a as ee,V as le,b as W,g as Y}from"./VSliderTrack-6c91cf23.js";import{b as ae,m as te,u as se,a as E,V as oe}from"./VInput-cd4c7816.js";import{aw as ue,k as _,aX as ne,a0 as X,aN as ie,C as a,F as re,s as de,o as S,b as R,m as $,$ as w,n as r,Y as ce,p as d,t as p}from"./index-30b66760.js";import{_ as me}from"./AppCardCode-514fb21c.js";import{a as k,V as pe}from"./VRow-b0db7b1d.js";import"./transition-0c6e30e4.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./VDivider-0d474c05.js";const x=ue()({name:"VRangeSlider",props:{...ae(),...te(),...Q(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,s){let{slots:u,emit:o}=s;const l=_(),n=_(),h=_();function M(c){if(!l.value||!n.value)return;const v=Y(c,l.value.$el,e.direction),f=Y(c,n.value.$el,e.direction),i=Math.abs(v),m=Math.abs(f);return i<m||i===m&&v<0?l.value.$el:n.value.$el}const B=Z(e),t=ne(e,"modelValue",void 0,c=>c!=null&&c.length?c.map(v=>B.roundValue(v)):[0,0]),{activeThumbRef:V,hasLabels:q,max:I,min:j,mousePressed:G,onSliderMousedown:H,onSliderTouchstart:J,position:z,trackContainerRef:K}=ee({props:e,steps:B,onSliderStart:()=>{o("start",t.value)},onSliderEnd:c=>{var i;let{value:v}=c;const f=V.value===((i=l.value)==null?void 0:i.$el)?[v,t.value[1]]:[t.value[0],v];t.value=f,o("end",f)},onSliderMove:c=>{var m,b,y,D;let{value:v}=c;const[f,i]=t.value;!e.strict&&f===i&&f!==j.value&&(V.value=v>f?(m=n.value)==null?void 0:m.$el:(b=l.value)==null?void 0:b.$el,(y=V.value)==null||y.focus()),V.value===((D=l.value)==null?void 0:D.$el)?t.value=[Math.min(v,i),i]:t.value=[f,Math.max(f,v)]},getActiveThumb:M}),{isFocused:P,focus:L,blur:N}=se(e),A=X(()=>z(t.value[0])),O=X(()=>z(t.value[1]));return ie(()=>{const[c,v]=E.filterProps(e),f=!!(e.label||u.label||u.prepend);return a(E,de({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!u["tick-label"]||q.value,"v-slider--focused":P.value,"v-slider--pressed":G.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:h},c,{focused:P.value}),{...u,prepend:f?i=>{var m,b;return a(re,null,[((m=u.label)==null?void 0:m.call(u,i))??e.label?a(oe,{class:"v-slider__label",text:e.label},null):void 0,(b=u.prepend)==null?void 0:b.call(u,i)])}:void 0,default:i=>{var y,D;let{id:m,messagesId:b}=i;return a("div",{class:"v-slider__container",onMousedown:H,onTouchstartPassive:J},[a("input",{id:`${m.value}_start`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:t.value[0]},null),a("input",{id:`${m.value}_stop`,name:e.name||m.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:t.value[1]},null),a(le,{ref:K,start:A.value,stop:O.value},{"tick-label":u["tick-label"]}),a(W,{ref:l,"aria-describedby":b.value,focused:P&&V.value===((y=l.value)==null?void 0:y.$el),modelValue:t.value[0],"onUpdate:modelValue":g=>t.value=[g,t.value[1]],onFocus:g=>{var T,C,F,U;L(),V.value=(T=l.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[1]===j.value&&g.relatedTarget!==((C=n.value)==null?void 0:C.$el)&&((F=l.value)==null||F.$el.blur(),(U=n.value)==null||U.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:j.value,max:t.value[1],position:A.value},{"thumb-label":u["thumb-label"]}),a(W,{ref:n,"aria-describedby":b.value,focused:P&&V.value===((D=n.value)==null?void 0:D.$el),modelValue:t.value[1],"onUpdate:modelValue":g=>t.value=[t.value[0],g],onFocus:g=>{var T,C,F,U;L(),V.value=(T=n.value)==null?void 0:T.$el,t.value[0]===t.value[1]&&t.value[0]===I.value&&g.relatedTarget!==((C=l.value)==null?void 0:C.$el)&&((F=n.value)==null||F.$el.blur(),(U=l.value)==null||U.$el.focus())},onBlur:()=>{N(),V.value=void 0},min:t.value[0],max:I.value,position:O.value},{"thumb-label":u["thumb-label"]})])}})}),{}}}),ve={__name:"DemoRangeSliderVertical",setup(e){const s=_([20,40]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),direction:"vertical"},null,8,["modelValue"]))}},fe={__name:"DemoRangeSliderThumbLabel",setup(e){const s=["Winter","Spring","Summer","Fall"],u=["mdi-snowflake","mdi-leaf","mdi-fire","mdi-water"],o=_([1,2]);return(l,n)=>(S(),R(x,{modelValue:$(o),"onUpdate:modelValue":n[0]||(n[0]=h=>w(o)?o.value=h:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":r(({modelValue:h})=>[a(ce,{icon:u[h]},null,8,["icon"])]),_:1},8,["modelValue"]))}},Ve={__name:"DemoRangeSliderStep",setup(e){const s=_([20,40]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),step:"10"},null,8,["modelValue"]))}},_e={__name:"DemoRangeSliderColor",setup(e){const s=_([10,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),color:"success","track-color":"secondary"},null,8,["modelValue"]))}},be={__name:"DemoRangeSliderDisabled",setup(e){const s=_([30,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},he={__name:"DemoRangeSliderBasic",setup(e){const s=_([10,60]);return(u,o)=>(S(),R(x,{modelValue:$(s),"onUpdate:modelValue":o[0]||(o[0]=l=>w(s)?s.value=l:null)},null,8,["modelValue"]))}},ge={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Se={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['mdi-snowflake', 'mdi-leaf', 'mdi-fire', 'mdi-water']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'mdi-snowflake',
  'mdi-leaf',
  'mdi-fire',
  'mdi-water',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},we={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},xe=d("p",null,[p("The "),d("code",null,"v-slider"),p(" component is a better visualization of the number input.")],-1),ye=d("p",null,[p("You cannot interact with "),d("code",null,"disabled"),p(" sliders.")],-1),De=d("p",null,[p("Use "),d("code",null,"color"),p(" prop to the sets the slider color. "),d("code",null,"track-color"),p(" prop to sets the color of slider's unfilled track.")],-1),Te=d("p",null,[d("code",null,"v-range-slider"),p(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),Ce=d("p",null,[p(" Using the "),d("code",null,"tick-labels"),p(" prop along with the "),d("code",null,"thumb-label"),p(" slot, you can create a very customized solution. ")],-1),Fe=d("p",null,[p("You can use the "),d("code",null,"vertical"),p(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),We={__name:"range-slider",setup(e){return(s,u)=>{const o=he,l=me,n=be,h=_e,M=Ve,B=fe,t=ve;return S(),R(pe,null,{default:r(()=>[a(k,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Basic",code:ge},{default:r(()=>[xe,a(o)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Disabled",code:Re},{default:r(()=>[ye,a(n)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Color",code:Se},{default:r(()=>[De,a(h)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Step",code:ke},{default:r(()=>[Te,a(M)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Thumb label",code:$e},{default:r(()=>[Ce,a(B)]),_:1},8,["code"])]),_:1}),a(k,{cols:"12",md:"6"},{default:r(()=>[a(l,{title:"Vertical",code:we},{default:r(()=>[Fe,a(t)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{We as default};
