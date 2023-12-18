import{_ as d}from"./AppDateTimePicker-8227ee10.js";import{k as u,o as r,b as c,m,$ as _,n,C as l}from"./index-30b66760.js";import{_ as b}from"./AppCardCode-514fb21c.js";import{a as s,V as F}from"./VRow-b0db7b1d.js";import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./easing-9f15041e.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./VDivider-0d474c05.js";const A={__name:"DemoDateTimePickerInline",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Inline",config:{inline:!0}},null,8,["modelValue"])}}},V={__name:"DemoDateTimePickerDisabledRange",setup(p){const e=new Date,i=e.toLocaleString("default",{month:"2-digit"}),a=e.getFullYear(),t=u("");return(o,D)=>{const f=d;return r(),c(f,{modelValue:m(t),"onUpdate:modelValue":D[0]||(D[0]=g=>_(t)?t.value=g:null),label:"Disabled Range",config:{dateFormat:"Y-m-d",disable:[{from:`${m(a)}-${m(i)}-20`,to:`${m(a)}-${m(i)}-25`}]}},null,8,["modelValue","config"])}}},Y={__name:"DemoDateTimePickerHumanFriendly",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Human Friendly",config:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}},v={__name:"DemoDateTimePickerRange",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Range",config:{mode:"range"}},null,8,["modelValue"])}}},$={__name:"DemoDateTimePickerMultipleDates",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Multiple Dates",config:{mode:"multiple",dateFormat:"Y-m-d"}},null,8,["modelValue"])}}},R={__name:"DemoDateTimePickerDateAndTime",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Date & TIme",config:{enableTime:!0,dateFormat:"Y-m-d H:i"}},null,8,["modelValue"])}}},M={__name:"DemoDateTimePickerTimePicker",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Time picker",config:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"}},null,8,["modelValue"])}}},w={__name:"DemoDateTimePickerBasic",setup(p){const e=u("");return(i,a)=>{const t=d;return r(),c(t,{modelValue:m(e),"onUpdate:modelValue":a[0]||(a[0]=o=>_(e)?e.value=o:null),label:"Default"},null,8,["modelValue"])}}},H={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>
`},I={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},j={ts:`<script setup lang="ts">
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},x={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`},C={ts:`<script setup lang="ts">
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},U={ts:`<script setup lang="ts">
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},y={ts:`<script setup lang="ts">
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},h={ts:`<script setup lang="ts">
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},X={__name:"date-time-picker",setup(p){return(e,i)=>{const a=w,t=b,o=M,D=R,f=$,g=v,T=Y,k=V,P=A;return r(),c(F,null,{default:n(()=>[l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Basic",code:H},{default:n(()=>[l(a)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Time Picker",code:h},{default:n(()=>[l(o)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Date and Time",code:I},{default:n(()=>[l(D)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Multiple Dates",code:U},{default:n(()=>[l(f)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Range",code:y},{default:n(()=>[l(g)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Human Friendly",code:x},{default:n(()=>[l(T)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Disabled Range",code:j},{default:n(()=>[l(k)]),_:1},8,["code"])]),_:1}),l(s,{cols:"12",md:"6"},{default:n(()=>[l(t,{title:"Inline",code:C},{default:n(()=>[l(P)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{X as default};
