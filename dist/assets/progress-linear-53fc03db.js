import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{o as u,c as g,C as e,at as a,k as _,m as v,$ as h,n as l,p as r,v as L,b as y,I as k,aY as $,w as B,t}from"./index-30b66760.js";import{_ as M}from"./AppCardCode-514fb21c.js";import{a as p,V as x}from"./VRow-b0db7b1d.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./transition-0c6e30e4.js";import"./VDivider-0d474c05.js";const I={},D={class:"demo-space-y"};function U(m,o){return u(),g("div",D,[e(a,{color:"rgb(var(--v-theme-primary))","model-value":"75",striped:""}),e(a,{color:"rgb(var(--v-theme-success))","model-value":"55",striped:""}),e(a,{color:"rgb(var(--v-theme-warning))","model-value":"35",striped:""})])}const j=f(I,[["render",U]]),C={class:"demo-space-y"},R={__name:"DemoProgressLinearSlots",setup(m){const o=_(20),c=_(33),i=_(78);return(n,d)=>(u(),g("div",C,[e(a,{modelValue:v(i),"onUpdate:modelValue":d[0]||(d[0]=s=>h(i)?i.value=s:null),color:"primary",height:"8"},null,8,["modelValue"]),e(a,{modelValue:v(o),"onUpdate:modelValue":d[1]||(d[1]=s=>h(o)?o.value=s:null),color:"primary",height:"20"},{default:l(({value:s})=>[r("strong",null,L(Math.ceil(s))+"%",1)]),_:1},8,["modelValue"]),e(a,{modelValue:v(c),"onUpdate:modelValue":d[2]||(d[2]=s=>h(c)?c.value=s:null),height:"20",color:"primary"},{default:l(()=>[r("strong",null,L(Math.ceil(v(c)))+"%",1)]),_:1},8,["modelValue"])]))}},T={},S={class:"demo-space-y"};function N(m,o){return u(),g("div",S,[e(a,{"model-value":"78",height:"8",color:"primary",rounded:""}),e(a,{"model-value":"20",color:"primary",height:"20",rounded:""}),e(a,{"model-value":"33",height:"20",color:"primary",rounded:""})])}const Y=f(T,[["render",N]]),A={};function E(m,o){return u(),y(a,{color:"primary",indeterminate:"",reverse:""})}const q=f(A,[["render",E]]),z={};function F(m,o){return u(),y(a,{indeterminate:"",color:"primary"})}const G=f(z,[["render",F]]),H={class:"demo-space-y"},J={__name:"DemoProgressLinearBuffering",setup(m){const o=_(10),c=_(20),i=_(),n=()=>{clearInterval(i.value),i.value=setInterval(()=>{o.value+=Math.random()*(15-5)+5,c.value+=Math.random()*(15-5)+6},2e3)};return k(n),$(()=>{clearInterval(i.value)}),B(o,()=>{if(o.value<100)return!1;o.value=0,c.value=10,n()}),(d,s)=>(u(),g("div",H,[e(a,{modelValue:v(o),"onUpdate:modelValue":s[0]||(s[0]=V=>h(o)?o.value=V:null),color:"primary",height:"8","buffer-value":v(c)},null,8,["modelValue","buffer-value"])]))}},K={},O={class:"demo-space-y"};function Q(m,o){return u(),g("div",O,[e(a,{"model-value":"15","bg-color":"primary",color:"primary"}),e(a,{"model-value":"30","bg-color":"secondary",color:"secondary"}),e(a,{"model-value":"45","bg-color":"success",color:"success"})])}const W=f(K,[["render",Q]]),X={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />
  </div>
</template>
`},Z={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},ee={ts:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`,js:`<template>
  <VProgressLinear
    indeterminate
    color="primary"
  />
</template>
`},re={ts:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`,js:`<template>
  <VProgressLinear
    color="primary"
    indeterminate
    reverse
  />
</template>
`},oe={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="78"
      height="8"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="20"
      color="primary"
      height="20"
      rounded
    />

    <VProgressLinear
      model-value="33"
      height="20"
      color="primary"
      rounded
    />
  </div>
</template>
`},le={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`},te={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      color="rgb(var(--v-theme-primary))"
      model-value="75"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-success))"
      model-value="55"
      striped
    />

    <VProgressLinear
      color="rgb(var(--v-theme-warning))"
      model-value="35"
      striped
    />
  </div>
</template>
`},ae=r("p",null,[t("Use the props "),r("code",null,"color"),t(" and "),r("code",null,"background-color"),t(" to set colors.")],-1),se=r("p",null,[t("The primary value is controlled by "),r("code",null,"v-model"),t(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),t(" prop.")],-1),ne=r("p",null,[t("for continuously animating progress bar,use prop "),r("code",null,"indeterminate"),t(". This indicates continuous process. ")],-1),ce=r("p",null,[t("Use prop "),r("code",null,"reverse"),t(" to animate continuously in reverse direction. The component also has RTL support.")],-1),ie=r("p",null,[t("The "),r("code",null," rounded "),t(" prop is used to apply a border radius to the v-progress-linear component.")],-1),de=r("p",null,[t("we can bind user input using "),r("code",null,"v-model"),t(".You can also use the default slot for the same.")],-1),ue=r("p",null,[t(" The "),r("code",null,"striped"),t(" prop is used to apply striped background.")],-1),Pe={__name:"progress-linear",setup(m){return(o,c)=>{const i=W,n=M,d=J,s=G,V=q,P=Y,b=R,w=j;return u(),y(x,{class:"match-height"},{default:l(()=>[e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Color",code:Z},{default:l(()=>[ae,e(i)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Buffering",code:X},{default:l(()=>[se,e(d)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Indeterminate",code:ee},{default:l(()=>[ne,e(s)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Reversed",code:re},{default:l(()=>[ce,e(V)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Rounded",code:oe},{default:l(()=>[ie,e(P)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Slots",code:le},{default:l(()=>[de,e(b)]),_:1},8,["code"])]),_:1}),e(p,{cols:"12",md:"6"},{default:l(()=>[e(n,{title:"Striped",code:te},{default:l(()=>[ue,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pe as default};
