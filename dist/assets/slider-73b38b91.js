import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{k as V,a0 as k,o as _,c as S,p as a,v as R,m as n,C as e,n as t,b as f,K as T,y as I,cd as L,Y as O,a2 as y,$ as u,F as D,a9 as Y,aa as E,t as c}from"./index-30b66760.js";import{V as N}from"./VAvatar-2c83efa5.js";import{V as p}from"./VSlider-737935a1.js";import{a as G}from"./VImg-c7c2167a.js";import{a as m,V as b}from"./VRow-b0db7b1d.js";import{V as C}from"./VTextField-1e90003c.js";import{_ as K}from"./AppCardCode-514fb21c.js";import"./VSliderTrack-6c91cf23.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";/* empty css                   */import"./VField-027419e4.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-e2a77d8b.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VDivider-0d474c05.js";const q=v=>(Y("data-v-0d3399b5"),v=v(),E(),v),H={class:"d-flex justify-space-between ma-4"},J=["textContent"],Q=q(()=>a("span",{class:"subheading font-weight-light me-1"},"BPM",-1)),z=40,$=218,W={__name:"DemoSliderAppendAndPrepend",setup(v){const l=V(40),s=V(!1),i=k(()=>l.value<100?"primary":l.value<125?"success":l.value<140?"info":l.value<175?"warning":"error"),r=k(()=>`${60/l.value}s`),o=()=>{l.value>z&&(l.value-=1)},d=()=>{l.value<$&&(l.value+=1)};return(g,x)=>(_(),S(D,null,[a("div",H,[a("div",null,[a("span",{class:"text-6xl font-weight-light",textContent:R(n(l))},null,8,J),Q,e(L,null,{default:t(()=>[n(s)?(_(),f(N,{key:0,color:n(i),style:T({animationDuration:n(r)}),class:"mb-1 v-avatar--metronome",size:"12"},null,8,["color","style"])):I("",!0)]),_:1})]),a("div",null,[e(y,{color:n(i),icon:"",elevation:"0",onClick:x[0]||(x[0]=h=>s.value=!n(s))},{default:t(()=>[e(O,{size:"large",icon:n(s)?"mdi-pause":"mdi-play"},null,8,["icon"])]),_:1},8,["color"])])]),e(p,{modelValue:n(l),"onUpdate:modelValue":x[1]||(x[1]=h=>u(l)?l.value=h:null),color:n(i),step:1,min:z,max:$,"track-color":"secondary"},{prepend:t(()=>[e(y,{size:"small",variant:"text",icon:"mdi-minus",color:n(i),onClick:o},null,8,["color"])]),append:t(()=>[e(y,{size:"small",variant:"text",icon:"mdi-plus",color:n(i),onClick:d},null,8,["color"])]),_:1},8,["modelValue","color"])],64))}},X=w(W,[["__scopeId","data-v-0d3399b5"]]),Z={class:"d-flex gap-4"},ee={class:"d-flex gap-4"},le={class:"d-flex gap-4"},te={__name:"DemoSliderAppendTextField",setup(v){const l=V(161),s=V(105),i=V(255);return(r,o)=>(_(),S(D,null,[e(G,{style:T({background:`rgb(${n(l)}, ${n(s)}, ${n(i)})`}),height:"150px"},null,8,["style"]),e(b,{class:"mt-5"},{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[a("div",Z,[e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>u(l)?l.value=d:null),max:255,step:1,"prepend-icon":"mdi-alpha-r"},null,8,["modelValue"]),e(C,{modelValue:n(l),"onUpdate:modelValue":o[1]||(o[1]=d=>u(l)?l.value=d:null),type:"number",variant:"outlined",density:"compact",style:{"max-inline-size":"5rem"},max:255},null,8,["modelValue"])])]),_:1}),e(m,{cols:"12"},{default:t(()=>[a("div",ee,[e(p,{modelValue:n(s),"onUpdate:modelValue":o[2]||(o[2]=d=>u(s)?s.value=d:null),max:255,step:1,"prepend-icon":"mdi-alpha-g"},null,8,["modelValue"]),e(C,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=d=>u(s)?s.value=d:null),variant:"outlined",type:"number",style:{"max-inline-size":"5rem"},density:"compact",max:255},null,8,["modelValue"])])]),_:1}),e(m,{cols:"12"},{default:t(()=>[a("div",le,[e(p,{modelValue:n(i),"onUpdate:modelValue":o[4]||(o[4]=d=>u(i)?i.value=d:null),max:255,step:1,"prepend-icon":"mdi-alpha-b"},null,8,["modelValue"]),e(C,{modelValue:n(i),"onUpdate:modelValue":o[5]||(o[5]=d=>u(i)?i.value=d:null),type:"number",variant:"outlined",style:{"max-inline-size":"5rem"},density:"compact",max:255},null,8,["modelValue"])])]),_:1})]),_:1})],64))}},oe={__name:"DemoSliderVertical",setup(v){const l=V(10);return(s,i)=>(_(),f(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>u(l)?l.value=r:null),direction:"vertical"},null,8,["modelValue"]))}},ae=a("div",{class:"text-caption"}," Show ticks when using slider ",-1),se=a("div",{class:"text-caption"}," Always show ticks ",-1),ie=a("div",{class:"text-caption"}," Tick size ",-1),ne=a("div",{class:"text-caption"}," Tick labels ",-1),de={__name:"DemoSliderTicks",setup(v){const l=V(0),s=V(1),i={0:"Figs",1:"Lemon",2:"Pear",3:"Apple"};return(r,o)=>(_(),f(b,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[ae,e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>u(l)?l.value=d:null),step:10,"show-ticks":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[se,e(p,{modelValue:n(l),"onUpdate:modelValue":o[1]||(o[1]=d=>u(l)?l.value=d:null),step:10,"show-ticks":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[ie,e(p,{modelValue:n(l),"onUpdate:modelValue":o[2]||(o[2]=d=>u(l)?l.value=d:null),step:10,"show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[ne,e(p,{modelValue:n(s),"onUpdate:modelValue":o[3]||(o[3]=d=>u(s)?s.value=d:null),ticks:i,max:3,step:"1","show-ticks":"always","tick-size":"4"},null,8,["modelValue"])]),_:1})]),_:1}))}},re=a("div",{class:"text-caption"}," Show thumb when using slider ",-1),ce=a("div",{class:"text-caption"}," Always show thumb label ",-1),me=a("div",{class:"text-caption"}," Custom thumb size ",-1),ue=a("div",{class:"text-caption"}," Custom thumb label ",-1),pe={__name:"DemoSliderThumb",setup(v){const l=["😭","😢","☹️","🙁","😐","🙂","😊","😁","😄","😍"],s=V(45);return(i,r)=>(_(),f(b,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[re,e(p,{modelValue:n(s),"onUpdate:modelValue":r[0]||(r[0]=o=>u(s)?s.value=o:null),"thumb-label":""},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[ce,e(p,{modelValue:n(s),"onUpdate:modelValue":r[1]||(r[1]=o=>u(s)?s.value=o:null),"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[me,e(p,{modelValue:n(s),"onUpdate:modelValue":r[2]||(r[2]=o=>u(s)?s.value=o:null),"thumb-size":30,"thumb-label":"always"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[ue,e(p,{modelValue:n(s),"onUpdate:modelValue":r[3]||(r[3]=o=>u(s)?s.value=o:null),"thumb-label":"always"},{"thumb-label":t(({modelValue:o})=>[c(R(l[Math.min(Math.floor(o/10),9)]),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},Ve={};function ve(v,l){return _(),f(p,{step:10,"show-ticks":"","thumb-size":13,"tick-size":3,"track-size":2})}const _e=w(Ve,[["render",ve]]),fe={class:"d-flex gap-4"},be={__name:"DemoSliderMinAndMax",setup(v){const l=V(-50),s=V(90),i=V(40);return(r,o)=>(_(),S("div",fe,[e(p,{modelValue:n(i),"onUpdate:modelValue":o[0]||(o[0]=d=>u(i)?i.value=d:null),max:n(s),min:n(l),step:1},null,8,["modelValue","max","min"]),e(C,{modelValue:n(i),"onUpdate:modelValue":o[1]||(o[1]=d=>u(i)?i.value=d:null),variant:"outlined",density:"compact","hide-details":"",type:"number",style:{"max-inline-size":"5rem"},max:n(s)},null,8,["modelValue","max"])]))}},xe={__name:"DemoSliderValidation",setup(v){const l=V(30),s=[i=>i<=40||"Only 40 in stock"];return(i,r)=>(_(),f(p,{modelValue:n(l),"onUpdate:modelValue":r[0]||(r[0]=o=>u(l)?l.value=o:null),error:n(l)>40,rules:s,step:10,"thumb-label":"always","show-ticks":""},null,8,["modelValue","error"]))}},he={__name:"DemoSliderStep",setup(v){const l=V(0);return(s,i)=>(_(),f(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>u(l)?l.value=r:null),min:0,max:1,step:.2,"thumb-label":""},null,8,["modelValue"]))}},Ce={__name:"DemoSliderIcons",setup(v){const l=V(0),s=V(0),i=V(10);return(r,o)=>(_(),f(b,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>u(l)?l.value=d:null),"prepend-icon":"mdi-volume"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=d=>u(s)?s.value=d:null),"append-icon":"mdi-alarm"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>u(i)?i.value=d:null),"append-icon":"mdi-magnify-plus-outline","prepend-icon":"mdi-magnify-minus-outline"},null,8,["modelValue"])]),_:1})]),_:1}))}},ye=a("div",{class:"text-caption"}," color ",-1),we=a("div",{class:"text-caption"}," track-color ",-1),Se=a("div",{class:"text-caption"}," thumb-color ",-1),ge={__name:"DemoSliderColors",setup(v){const l=V(25),s=V(75),i=V(50);return(r,o)=>(_(),f(b,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[ye,e(p,{modelValue:n(l),"onUpdate:modelValue":o[0]||(o[0]=d=>u(l)?l.value=d:null),color:"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[we,e(p,{modelValue:n(s),"onUpdate:modelValue":o[1]||(o[1]=d=>u(s)?s.value=d:null),"track-color":"error"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:t(()=>[Se,e(p,{modelValue:n(i),"onUpdate:modelValue":o[2]||(o[2]=d=>u(i)?i.value=d:null),"thumb-color":"error","thumb-label":"always"},null,8,["modelValue"])]),_:1})]),_:1}))}},ke={},ze=a("div",{class:"text-caption"}," Disabled ",-1),$e=a("div",{class:"text-caption"}," Readonly ",-1);function Re(v,l){return _(),f(b,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[ze,e(p,{disabled:"",label:"Disabled","model-value":30})]),_:1}),e(m,{cols:"12"},{default:t(()=>[$e,e(p,{readonly:"",label:"Readonly","model-value":30})]),_:1})]),_:1})}const Te=w(ke,[["render",Re]]),De={__name:"DemoSliderBasic",setup(v){const l=V(30);return(s,i)=>(_(),f(b,null,{default:t(()=>[e(m,{cols:"12"},{default:t(()=>[e(p)]),_:1}),e(m,{cols:"12"},{default:t(()=>[e(p,{modelValue:n(l),"onUpdate:modelValue":i[0]||(i[0]=r=>u(l)?l.value=r:null)},null,8,["modelValue"])]),_:1})]),_:1}))}},Ue={ts:`<script lang="ts" setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'

  return 'error'
})

const animationDuration = computed(() => {
  return \`\${60 / bpm.value}s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`,js:`<script setup>
const bpm = ref(40)
const min = 40
const max = 218
const isPlaying = ref(false)

const color = computed(() => {
  if (bpm.value < 100)
    return 'primary'
  if (bpm.value < 125)
    return 'success'
  if (bpm.value < 140)
    return 'info'
  if (bpm.value < 175)
    return 'warning'
  
  return 'error'
})

const animationDuration = computed(() => {
  return \`\${ 60 / bpm.value }s\`
})

const decrement = () => {
  if (bpm.value > min)
    bpm.value -= 1
}

const increment = () => {
  if (bpm.value < max)
    bpm.value += 1
}
<\/script>

<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <span
        class="text-6xl font-weight-light"
        v-text="bpm"
      />
      <span class="subheading font-weight-light me-1">BPM</span>

      <VFadeTransition>
        <VAvatar
          v-if="isPlaying"
          :color="color"
          :style="{
            animationDuration,
          }"
          class="mb-1 v-avatar--metronome"
          size="12"
        />
      </VFadeTransition>
    </div>

    <div>
      <VBtn
        :color="color"
        icon
        elevation="0"
        @click="isPlaying = !isPlaying"
      >
        <VIcon
          size="large"
          :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
        />
      </VBtn>
    </div>
  </div>

  <VSlider
    v-model="bpm"
    :color="color"
    :step="1"
    :min="min"
    :max="max"
    track-color="secondary"
  >
    <template #prepend>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-minus"
        :color="color"
        @click="decrement"
      />
    </template>

    <template #append>
      <VBtn
        size="small"
        variant="text"
        icon="mdi-plus"
        :color="color"
        @click="increment"
      />
    </template>
  </VSlider>
</template>

<style lang="scss" scoped>
  @keyframes metronome-example {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-name: metronome-example;
  }
</style>
`},Ae={ts:`<script lang="ts" setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-r"
        />
        <VTextField
          v-model="redColorValue"
          type="number"
          variant="outlined"
          density="compact"
          style="max-inline-size: 5rem;"
          :max="255"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-g"
        />
        <VTextField
          v-model="greenColorValue"
          variant="outlined"
          type="number"
          style="max-inline-size: 5rem;"
          density="compact"
          :max="255"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          variant="outlined"
          style="max-inline-size: 5rem;"
          density="compact"
          :max="255"
        />
      </div>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const redColorValue = ref(161)
const greenColorValue = ref(105)
const blueColorValue = ref(255)
<\/script>

<template>
  <VResponsive
    :style="{ background: \`rgb(\${redColorValue}, \${greenColorValue}, \${blueColorValue})\` }"
    height="150px"
  />

  <VRow class="mt-5">
    <VCol cols="12">
      <!-- R -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="redColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-r"
        />
        <VTextField
          v-model="redColorValue"
          type="number"
          variant="outlined"
          density="compact"
          style="max-inline-size: 5rem;"
          :max="255"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- G -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="greenColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-g"
        />
        <VTextField
          v-model="greenColorValue"
          variant="outlined"
          type="number"
          style="max-inline-size: 5rem;"
          density="compact"
          :max="255"
        />
      </div>
    </VCol>

    <VCol cols="12">
      <!-- B -->
      <div class="d-flex gap-4">
        <VSlider
          v-model="blueColorValue"
          :max="255"
          :step="1"
          prepend-icon="mdi-alpha-b"
        />
        <VTextField
          v-model="blueColorValue"
          type="number"
          variant="outlined"
          style="max-inline-size: 5rem;"
          density="compact"
          :max="255"
        />
      </div>
    </VCol>
  </VRow>
</template>
`},Fe={ts:`<script setup lang="ts">
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderValue = ref(30)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider />
    </VCol>

    <VCol cols="12">
      <VSlider v-model="sliderValue" />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script lang="ts" setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const sliderColorValue = ref(25)
const sliderTrackColorValue = ref(75)
const sliderThumbColorValue = ref(50)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        color
      </div>
      <VSlider
        v-model="sliderColorValue"
        color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        track-color
      </div>
      <VSlider
        v-model="sliderTrackColorValue"
        track-color="error"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        thumb-color
      </div>
      <VSlider
        v-model="sliderThumbColorValue"
        thumb-color="error"
        thumb-label="always"
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Disabled
      </div>
      <VSlider
        disabled
        label="Disabled"
        :model-value="30"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Readonly
      </div>
      <VSlider
        readonly
        label="Readonly"
        :model-value="30"
      />
    </VCol>
  </VRow>
</template>
`},Pe={ts:`<script lang="ts" setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="mdi-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="mdi-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="mdi-magnify-plus-outline"
        prepend-icon="mdi-magnify-minus-outline"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const mediaSlider = ref(0)
const alarmSlider = ref(0)
const zoomInOut = ref(10)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSlider
        v-model="mediaSlider"
        prepend-icon="mdi-volume"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="alarmSlider"
        append-icon="mdi-alarm"
      />
    </VCol>

    <VCol cols="12">
      <VSlider
        v-model="zoomInOut"
        append-icon="mdi-magnify-plus-outline"
        prepend-icon="mdi-magnify-minus-outline"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<script lang="ts" setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex gap-4">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <VTextField
      v-model="slider"
      variant="outlined"
      density="compact"
      hide-details
      type="number"
      style="max-inline-size: 5rem;"
      :max="max"
    />
  </div>
</template>
`,js:`<script setup>
const min = ref(-50)
const max = ref(90)
const slider = ref(40)
<\/script>

<template>
  <div class="d-flex gap-4">
    <VSlider
      v-model="slider"
      :max="max"
      :min="min"
      :step="1"
    />

    <VTextField
      v-model="slider"
      variant="outlined"
      density="compact"
      hide-details
      type="number"
      style="max-inline-size: 5rem;"
      :max="max"
    />
  </div>
</template>
`},Ie={ts:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="13"
    :tick-size="3"
    :track-size="2"
  />
</template>
`,js:`<template>
  <VSlider
    :step="10"
    show-ticks
    :thumb-size="13"
    :tick-size="3"
    :track-size="2"
  />
</template>
`},Le={ts:`<script lang="ts" setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`,js:`<script setup>
const value = ref(0)
<\/script>

<template>
  <VSlider
    v-model="value"
    :min="0"
    :max="1"
    :step="0.2"
    thumb-label
  />
</template>
`},Oe={ts:`<script lang="ts" setup>
const satisfactionEmojis = ['😭', '😢', '☹️', '🙁', '😐', '🙂', '😊', '😁', '😄', '😍']
const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const satisfactionEmojis = [
  '😭',
  '😢',
  '☹️',
  '🙁',
  '😐',
  '🙂',
  '😊',
  '😁',
  '😄',
  '😍',
]

const slider = ref(45)
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show thumb when using slider
      </div>
      <VSlider
        v-model="slider"
        thumb-label
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb size
      </div>
      <VSlider
        v-model="slider"
        :thumb-size="30"
        thumb-label="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Custom thumb label
      </div>
      <VSlider
        v-model="slider"
        thumb-label="always"
      >
        <template #thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </VSlider>
    </VCol>
  </VRow>
</template>
`},Ye={ts:`<script lang="ts" setup>
const value = ref(0)
const fruits = ref(1)
const ticksLabels = { 0: 'Figs', 1: 'Lemon', 2: 'Pear', 3: 'Apple' }
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const value = ref(0)
const fruits = ref(1)

const ticksLabels = {
  0: 'Figs',
  1: 'Lemon',
  2: 'Pear',
  3: 'Apple',
}
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <div class="text-caption">
        Show ticks when using slider
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Always show ticks
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick size
      </div>
      <VSlider
        v-model="value"
        :step="10"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>

    <VCol cols="12">
      <div class="text-caption">
        Tick labels
      </div>
      <VSlider
        v-model="fruits"
        :ticks="ticksLabels"
        :max="3"
        step="1"
        show-ticks="always"
        tick-size="4"
      />
    </VCol>
  </VRow>
</template>
`},Ee={ts:`<script lang="ts" setup>
const value = ref(30)
const rules = [(v: number) => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`,js:`<script setup>
const value = ref(30)
const rules = [v => v <= 40 || 'Only 40 in stock']
<\/script>

<template>
  <VSlider
    v-model="value"
    :error="value > 40"
    :rules="rules"
    :step="10"
    thumb-label="always"
    show-ticks
  />
</template>
`},Ne={ts:`<script lang="ts" setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const value = ref(10)
<\/script>

<template>
  <VSlider
    v-model="value"
    direction="vertical"
  />
</template>
`},Ge=a("p",null,[c("The "),a("code",null,"v-slider"),c(" component is a better visualization of the number input.")],-1),Ke=a("p",null,[c("You cannot interact with "),a("code",null,"disabled"),c(" and "),a("code",null,"readonly"),c(" sliders.")],-1),qe=a("p",null,[c("You can set the colors of the slider using the props "),a("code",null,"color"),c(", "),a("code",null,"track-color"),c(" and "),a("code",null,"thumb-color"),c(".")],-1),He=a("p",null,[c("You can add icons to the slider with the "),a("code",null,"append-icon"),c(" and "),a("code",null,"prepend-icon"),c(" props.")],-1),Je=a("p",null,[c("Using the "),a("code",null,"step"),c(" prop you can control the precision of the slider, and how much it should move each step.")],-1),Qe=a("p",null,[c("Vuetify includes simple validation through the "),a("code",null,"rules"),c(" prop.")],-1),We=a("p",null,[c("You can set "),a("code",null,"min"),c(" and "),a("code",null,"max"),c(" values of sliders.")],-1),Xe=a("p",null,[c("Use "),a("code",null,"thumb-size"),c(", "),a("code",null,"tick-size"),c(", and "),a("code",null,"track-size"),c(" prop to increase and decrease the size of thumb, tick and track. ")],-1),Ze=a("p",null,[c("You can display a thumb label while sliding or always with the "),a("code",null,"thumb-label"),c(" prop.")],-1),el=a("p",null,"Tick marks represent predetermined values to which the user can move the slider.",-1),ll=a("p",null,[c(" You can use the "),a("code",null,"vertical"),c(" prop to switch sliders to a vertical orientation. ")],-1),tl=a("p",null,[c("Sliders can be combined with other components in its "),a("code",null,"append"),c(" slot, such as "),a("code",null,"v-text-field"),c(", to add additional functionality to the component.")],-1),ol=a("p",null,[c("Use slots such as "),a("code",null,"append"),c(" and "),a("code",null,"prepend"),c(" to easily customize the "),a("code",null,"v-slider"),c(" to fit any situation.")],-1),wl={__name:"slider",setup(v){return(l,s)=>{const i=De,r=K,o=Te,d=ge,g=Ce,x=he,h=xe,U=be,A=_e,F=pe,j=de,B=oe,P=te,M=X;return _(),f(b,{class:"match-height"},{default:t(()=>[e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Basic",code:Fe},{default:t(()=>[Ge,e(i)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Disabled and Readonly",code:Be},{default:t(()=>[Ke,e(o)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Colors",code:je},{default:t(()=>[qe,e(d)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Icons",code:Pe},{default:t(()=>[He,e(g)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Step",code:Le},{default:t(()=>[Je,e(x)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Validation",code:Ee},{default:t(()=>[Qe,e(h)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Min and Max",code:Me},{default:t(()=>[We,e(U)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Size",code:Ie},{default:t(()=>[Xe,e(A)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Thumb",code:Oe},{default:t(()=>[Ze,e(F)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Ticks",code:Ye},{default:t(()=>[el,e(j)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Vertical",code:Ne},{default:t(()=>[ll,e(B)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append text field",code:Ae},{default:t(()=>[tl,e(P)]),_:1},8,["code"])]),_:1}),e(m,{cols:"12",md:"6"},{default:t(()=>[e(r,{title:"Append and prepend",code:Ue},{default:t(()=>[ol,e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{wl as default};
