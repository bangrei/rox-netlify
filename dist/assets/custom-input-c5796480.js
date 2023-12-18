import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{a as b,V as x}from"./VRow-b0db7b1d.js";import{V as f}from"./VInput-cd4c7816.js";import{V as $}from"./VCheckbox-475ad393.js";import{k as g,aW as I,w as y,m as u,o as i,b as d,n as a,c as h,F as R,a as W,s as V,C as n,x as j,p,$ as m,y as k,B as w,Y as q,v as C}from"./index-30b66760.js";import{a as A,V as F}from"./VRadioGroup-4c08c9dc.js";import{_ as E}from"./CustomRadiosWithIcon-3f897256.js";import{V as z}from"./VSpacer-a17cbd45.js";import{_ as L}from"./AppCardCode-514fb21c.js";import{_ as O}from"./CustomRadios-875eec3c.js";import"./transition-0c6e30e4.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VDivider-0d474c05.js";const P=["src"],N={__name:"CustomCheckboxesWithImage",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{emit:l}){const o=r,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&u(t)?(i(),d(x,{key:0,modelValue:u(t),"onUpdate:modelValue":s[1]||(s[1]=e=>m(t)?t.value=e:null)},{default:a(()=>[(i(!0),h(R,null,W(o.checkboxContent,e=>(i(),d(b,V({key:e.value},r.gridColumn),{default:a(()=>[n(f,{class:j(["custom-input custom-checkbox rounded cursor-pointer w-100",u(t).includes(e.value)?"active":""])},{default:a(()=>[p("div",null,[n($,{modelValue:u(t),"onUpdate:modelValue":s[0]||(s[0]=_=>m(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])]),p("img",{src:e.bgImage,alt:"bg-img",class:"custom-checkbox-image"},null,8,P)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1},8,["modelValue"])):k("",!0)}},T=v(N,[["__scopeId","data-v-a1c60617"]]),S="/assets/background-1-ceba94e3.jpg",U="/assets/background-2-d22b51b2.jpg",D="/assets/background-3-fdf5581c.jpg",Y={__name:"DemoCustomInputCustomCheckboxesWithImage",setup(r){const l=[{bgImage:S,value:"basic"},{bgImage:U,value:"premium"},{bgImage:D,value:"enterprise"}],o=g(["basic"]);return(t,c)=>{const s=T;return i(),d(s,{"selected-checkbox":u(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>m(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}};const H=["src"],J={__name:"CustomRadiosWithImage",props:{selectedRadio:{type:String,required:!0},radioContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedRadio"],setup(r,{emit:l}){const o=r,t=g(structuredClone(I(o.selectedRadio)));return y(t,()=>{l("update:selectedRadio",t.value)}),(c,s)=>o.radioContent?(i(),d(F,{key:0,modelValue:u(t),"onUpdate:modelValue":s[0]||(s[0]=e=>m(t)?t.value=e:null)},{default:a(()=>[n(x,null,{default:a(()=>[(i(!0),h(R,null,W(o.radioContent,e=>(i(),d(b,V({key:e.bgImage},r.gridColumn),{default:a(()=>[n(f,{class:j(["custom-input custom-radio rounded cursor-pointer w-100",u(t)===e.value?"active":""])},{default:a(()=>[p("img",{src:e.bgImage,alt:"bg-img",class:"custom-radio-image"},null,8,H),n(A,{value:e.value},null,8,["value"])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:1})]),_:1},8,["modelValue"])):k("",!0)}},K=v(J,[["__scopeId","data-v-a92ca850"]]),M={__name:"DemoCustomInputCustomRadiosWithImage",setup(r){const l=[{bgImage:S,value:"basic"},{bgImage:U,value:"premium"},{bgImage:D,value:"enterprise"}],o=g("basic");return(t,c)=>{const s=K;return i(),d(s,{"selected-radio":u(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>m(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const Q={class:"d-flex flex-column align-center text-center gap-2"},X={class:"cr-title text-base"},Z={class:"text-sm mb-0"},ee={__name:"CustomCheckboxesWithIcon",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{emit:l}){const o=r,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&u(t)?(i(),d(x,{key:0,modelValue:u(t),"onUpdate:modelValue":s[1]||(s[1]=e=>m(t)?t.value=e:null)},{default:a(()=>[(i(!0),h(R,null,W(o.checkboxContent,e=>(i(),d(b,V({key:e.title},r.gridColumn),{default:a(()=>[n(f,{class:j(["custom-input custom-checkbox-icon rounded cursor-pointer",u(t).includes(e.value)?"active":""])},{default:a(()=>[w(c.$slots,"default",{item:e},()=>[p("div",Q,[n(q,{size:"32",icon:e.icon,class:"text-high-emphasis"},null,8,["icon"]),p("h6",X,C(e.title),1),p("p",Z,C(e.desc),1)])],!0),p("div",null,[n($,{modelValue:u(t),"onUpdate:modelValue":s[0]||(s[0]=_=>m(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])])]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3},8,["modelValue"])):k("",!0)}},te=v(ee,[["__scopeId","data-v-b1177065"]]),oe={__name:"DemoCustomInputCustomCheckboxesWithIcon",setup(r){const l=[{title:"Backup",desc:"Backup every file from your project.",value:"backup",icon:"mdi-server"},{title:"Encrypt",desc:"Translate your data to encrypted text.",value:"encrypt",icon:"mdi-shield-outline"},{title:"Site Lock",desc:"Security tool to protect your website.",value:"site-lock",icon:"mdi-lock-outline"}],o=g(["basic"]);return(t,c)=>{const s=te;return i(),d(s,{"selected-checkbox":u(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>m(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-checkbox"])}}},se={__name:"DemoCustomInputCustomRadiosWithIcon",setup(r){const l=[{title:"Starter",desc:"A simple start for everyone.",value:"starter",icon:"mdi-rocket-launch-outline"},{title:"Standard",desc:"For small to medium businesses.",value:"standard",icon:"mdi-account-outline"},{title:"Enterprise",desc:"Solution for big organizations.",value:"enterprise",icon:"mdi-crown-outline"}],o=g("basic");return(t,c)=>{const s=E;return i(),d(s,{"selected-radio":u(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>m(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"4",cols:"12"}},null,8,["selected-radio"])}}};const ce={class:"flex-grow-1"},ne={class:"d-flex align-center mb-1"},ae={class:"cr-title text-base"},le={key:0,class:"text-sm text-disabled"},ue={class:"text-sm mb-0"},ie={__name:"CustomCheckboxes",props:{selectedCheckbox:{type:Array,required:!0},checkboxContent:{type:Array,required:!0},gridColumn:{type:null,required:!1}},emits:["update:selectedCheckbox"],setup(r,{emit:l}){const o=r,t=g(structuredClone(I(o.selectedCheckbox)));return y(t,()=>{l("update:selectedCheckbox",t.value)}),(c,s)=>o.checkboxContent&&u(t)?(i(),d(x,{key:0,modelValue:u(t),"onUpdate:modelValue":s[1]||(s[1]=e=>m(t)?t.value=e:null)},{default:a(()=>[(i(!0),h(R,null,W(o.checkboxContent,e=>(i(),d(b,V({key:e.title},r.gridColumn),{default:a(()=>[n(f,{class:j(["custom-input custom-checkbox rounded cursor-pointer",u(t).includes(e.value)?"active":""])},{default:a(()=>[p("div",null,[n($,{modelValue:u(t),"onUpdate:modelValue":s[0]||(s[0]=_=>m(t)?t.value=_:null),value:e.value},null,8,["modelValue","value"])]),w(c.$slots,"default",{item:e},()=>[p("div",ce,[p("div",ne,[p("h6",ae,C(e.title),1),n(z),e.subtitle?(i(),h("span",le,C(e.subtitle),1)):k("",!0)]),p("p",ue,C(e.desc),1)])],!0)]),_:2},1032,["class"])]),_:2},1040))),128))]),_:3},8,["modelValue"])):k("",!0)}},re=v(ie,[["__scopeId","data-v-218e11e3"]]),de={__name:"DemoCustomInputCustomCheckboxes",setup(r){const l=[{title:"Discount",subtitle:"20%",desc:"Wow! Get 20% off on your next purchase!",value:"discount"},{title:"Updates",subtitle:"Free",desc:"Get Updates regarding related products.",value:"updates"}],o=g(["basic"]);return(t,c)=>{const s=re;return i(),d(s,{"selected-checkbox":u(o),"onUpdate:selectedCheckbox":c[0]||(c[0]=e=>m(o)?o.value=e:null),"checkbox-content":l,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-checkbox"])}}},me={__name:"DemoCustomInputCustomRadios",setup(r){const l=[{title:"Basic",desc:"Get 2 projects with 2 team members.",value:"basic"},{title:"Premium",subtitle:"$5.00",desc:"Get 8 projects with 8 team members.",value:"premium"}],o=g("basic");return(t,c)=>{const s=O;return i(),d(s,{"selected-radio":u(o),"onUpdate:selectedRadio":c[0]||(c[0]=e=>m(o)?o.value=e:null),"radio-content":l,"grid-column":{sm:"6",cols:"12"}},null,8,["selected-radio"])}}},pe={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Discount',
    subtitle: '20%',
    desc: 'Wow! Get 20% off on your next purchase!',
    value: 'discount',
  },
  {
    title: 'Updates',
    subtitle: 'Free',
    desc: 'Get Updates regarding related products.',
    value: 'updates',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxes
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},be={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const checkboxContent: CustomInputContent[] = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'mdi-server',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'mdi-shield-outline',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'mdi-lock-outline',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const checkboxContent = [
  {
    title: 'Backup',
    desc: 'Backup every file from your project.',
    value: 'backup',
    icon: 'mdi-server',
  },
  {
    title: 'Encrypt',
    desc: 'Translate your data to encrypted text.',
    value: 'encrypt',
    icon: 'mdi-shield-outline',
  },
  {
    title: 'Site Lock',
    desc: 'Security tool to protect your website.',
    value: 'site-lock',
    icon: 'mdi-lock-outline',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithIcon
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},ge={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const checkboxContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedCheckbox = ref(['basic'])
<\/script>

<template>
  <CustomCheckboxesWithImage
    v-model:selected-checkbox="selectedCheckbox"
    :checkbox-content="checkboxContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},_e={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Basic',
    desc: 'Get 2 projects with 2 team members.',
    value: 'basic',
  },
  {
    title: 'Premium',
    subtitle: '$5.00',
    desc: 'Get 8 projects with 8 team members.',
    value: 'premium',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadios
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '6', cols: '12' }"
  />
</template>
`},Ce={ts:`<script setup lang="ts">
import type { CustomInputContent } from '@core/types'

const radioContent: CustomInputContent[] = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'mdi-rocket-launch-outline',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'mdi-account-outline',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'mdi-crown-outline',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
const radioContent = [
  {
    title: 'Starter',
    desc: 'A simple start for everyone.',
    value: 'starter',
    icon: 'mdi-rocket-launch-outline',
  },
  {
    title: 'Standard',
    desc: 'For small to medium businesses.',
    value: 'standard',
    icon: 'mdi-account-outline',
  },
  {
    title: 'Enterprise',
    desc: 'Solution for big organizations.',
    value: 'enterprise',
    icon: 'mdi-crown-outline',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithIcon
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},he={ts:`<script setup lang="ts">
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent: { bgImage: string; value: string }[] = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`,js:`<script setup>
import bg1 from '@images/pages/background-1.jpg'
import bg2 from '@images/pages/background-2.jpg'
import bg3 from '@images/pages/background-3.jpg'

const radioContent = [
  {
    bgImage: bg1,
    value: 'basic',
  },
  {
    bgImage: bg2,
    value: 'premium',
  },
  {
    bgImage: bg3,
    value: 'enterprise',
  },
]

const selectedRadio = ref('basic')
<\/script>

<template>
  <CustomRadiosWithImage
    v-model:selected-radio="selectedRadio"
    :radio-content="radioContent"
    :grid-column="{ sm: '4', cols: '12' }"
  />
</template>
`},Ae={__name:"custom-input",setup(r){return(l,o)=>{const t=me,c=L,s=de,e=se,_=oe,B=M,G=Y;return i(),d(x,null,{default:a(()=>[n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios",code:_e},{default:a(()=>[n(t)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes",code:pe},{default:a(()=>[n(s)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios With Icon",code:Ce},{default:a(()=>[n(e)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes With Icon",code:be},{default:a(()=>[n(_)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Radios With Image",code:he},{default:a(()=>[n(B)]),_:1},8,["code"])]),_:1}),n(b,{cols:"12",md:"6"},{default:a(()=>[n(c,{title:"Custom Checkboxes With Image",code:ge},{default:a(()=>[n(G)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ae as default};
