import{V as D}from"./VNodeRenderer-3442d069.js";import{k as _,o as u,b as V,n as l,C as e,Y as w,s as P,t as o,cd as U,m as d,au as S,J as q,a2 as j,x as N,c as L,y as B,$ as b,p as t}from"./index-30b66760.js";import{V as E}from"./VTooltip-d996192b.js";import{V as s}from"./VTextField-1e90003c.js";import{a as i,V as v}from"./VRow-b0db7b1d.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{r as W,e as z}from"./validators-d1aa93b7.js";import{V as H}from"./VForm-5a29b781.js";import{_ as Y}from"./AppCardCode-514fb21c.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./easing-9f15041e.js";import"./transition-0c6e30e4.js";import"./forwardRefs-a29b5f65.js";/* empty css                   */import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./VImg-c7c2167a.js";import"./VCounter-e2a77d8b.js";import"./index-61e4df1a.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VAvatar-2c83efa5.js";import"./VDivider-0d474c05.js";const O={key:0,class:"ms-3"},J={__name:"DemoTextfieldIconSlots",setup(x){const n=_("Hey!"),c=_(!1),p=()=>{c.value=!0,n.value="Wait for it...",setTimeout(()=>{c.value=!1,n.value="You've clicked me!"},2e3)};return(a,f)=>(u(),V(s,{modelValue:d(n),"onUpdate:modelValue":f[0]||(f[0]=r=>b(n)?n.value=r:null),clearable:"","clear-icon":"mdi-close-circle-outline",label:"Message",type:"text"},{prepend:l(()=>[e(E,{location:"bottom"},{activator:l(({props:r})=>[e(w,P(r,{icon:"mdi-help-circle-outline"}),null,16)]),default:l(()=>[o(" I'm a tooltip ")]),_:1})]),"append-inner":l(()=>[e(U,{"leave-absolute":""},{default:l(()=>[d(c)?(u(),V(S,{key:0,size:"24",color:"info",indeterminate:""})):(u(),V(d(D),{key:1,nodes:d(q).app.logo},null,8,["nodes"]))]),_:1})]),append:l(()=>[e(j,{size:a.$vuetify.display.smAndDown?"small":"large",icon:a.$vuetify.display.smAndDown,class:N(a.$vuetify.display.smAndDown?"mt-n1":"mt-n3"),onClick:p},{default:l(()=>[e(w,{icon:"mdi-target"}),a.$vuetify.display.mdAndUp?(u(),L("span",O,"Click me")):B("",!0)]),_:1},8,["size","icon","class"])]),_:1},8,["modelValue"]))}},G={__name:"DemoTextfieldPasswordInput",setup(x){const n=_(!1),c=_(!0),p=_("Password"),a=_("wqfasds"),f={required:r=>!!r||"Required.",min:r=>r.length>=8||"Min 8 characters"};return(r,m)=>(u(),V(v,null,{default:l(()=>[e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d(p),"onUpdate:modelValue":m[0]||(m[0]=h=>b(p)?p.value=h:null),"append-inner-icon":d(n)?"mdi-eye-off-outline":"mdi-eye-outline",rules:[f.required,f.min],type:d(n)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",counter:"","onClick:appendInner":m[1]||(m[1]=h=>n.value=!d(n))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:l(()=>[e(s,{modelValue:d(a),"onUpdate:modelValue":m[2]||(m[2]=h=>b(a)?a.value=h:null),"append-inner-icon":d(c)?"mdi-eye-off-outline":"mdi-eye-outline",rules:[f.required,f.min],type:d(c)?"text":"password",name:"input-10-2",label:"Visible",hint:"At least 8 characters","onClick:appendInner":m[3]||(m[3]=h=>c.value=!d(c))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1})]),_:1}))}},K={},Q=t("strong",null,"icon",-1);function X(x,n){return u(),V(s,null,{label:l(()=>[o(" What about  "),Q,o(" here? "),e(w,{icon:"mdi-file-find-outline"})]),_:1})}const Z=g(K,[["render",X]]),ee={__name:"DemoTextfieldIconEvents",setup(x){const n=_("Hey!"),c=_(!0),p=_(0),a=()=>{c.value=!c.value},f=()=>{n.value=""},r=()=>{p.value=0},m=()=>{r(),f()};return(h,C)=>(u(),V(s,{modelValue:d(n),"onUpdate:modelValue":C[0]||(C[0]=T=>b(n)?n.value=T:null),clearable:"",type:"text",label:"Message",color:"primary","clear-icon":"mdi-close-circle-outline","append-icon":d(n)?"mdi-send-outline":"mdi-microphone","append-inner-icon":d(c)?"mdi-map-marker-outline":"mdi-map-marker-off-outline","onClick:appendInner":a,"onClick:append":m,"onClick:clear":f},null,8,["modelValue","append-icon","append-inner-icon"]))}},le={__name:"DemoTextfieldValidation",setup(x){const n=_("");return(c,p)=>(u(),V(H,null,{default:l(()=>[e(s,{modelValue:d(n),"onUpdate:modelValue":p[0]||(p[0]=a=>b(n)?n.value=a:null),rules:[d(W),d(z)],label:"E-mail"},null,8,["modelValue","rules"])]),_:1}))}},te={};function oe(x,n){return u(),V(s,{label:"Regular","single-line":""})}const ne=g(te,[["render",oe]]),ae={__name:"DemoTextfieldPrefixesAndSuffixes",setup(x){const n=_(10.05),c=_(28.02),p=_("example"),a=_("04:56");return(f,r)=>(u(),V(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(n),"onUpdate:modelValue":r[0]||(r[0]=m=>b(n)?n.value=m:null),label:"Amount",prefix:"$",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(c),"onUpdate:modelValue":r[1]||(r[1]=m=>b(c)?c.value=m:null),label:"Weight",suffix:"lbs",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(p),"onUpdate:modelValue":r[2]||(r[2]=m=>b(p)?p.value=m:null),label:"Email address",suffix:"@gmail.com"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(a),"onUpdate:modelValue":r[3]||(r[3]=m=>b(a)?a.value=m:null),label:"Label Text",type:"time",suffix:"PST"},null,8,["modelValue"])]),_:1})]),_:1}))}},ie={};function se(x,n){return u(),V(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Prepend","prepend-icon":"mdi-map-marker-outline"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Prepend Inner","prepend-inner-icon":"mdi-map-marker-outline"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Append","append-icon":"mdi-map-marker-outline"})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Append Inner","append-inner-icon":"mdi-map-marker-outline"})]),_:1})]),_:1})}const re=g(ie,[["render",se]]),de={};function ce(x,n){return u(),V(s,{color:"success",label:"First name"})}const me=g(de,[["render",ce]]),pe={};function ue(x,n){return u(),V(s,{label:"Regular",clearable:""})}const fe=g(pe,[["render",ue]]),Ve={__name:"DemoTextfieldCounter",setup(x){const n=_("Preliminary report"),c=_("California is a state in the western United States"),p=[a=>a.length<=25||"Max 25 characters"];return(a,f)=>(u(),V(v,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(n),"onUpdate:modelValue":f[0]||(f[0]=r=>b(n)?n.value=r:null),rules:p,counter:"25",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{modelValue:d(c),"onUpdate:modelValue":f[1]||(f[1]=r=>b(c)?c.value=r:null),rules:p,counter:"",maxlength:"25",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1}))}},_e={};function xe(x,n){return u(),V(v,null,{default:l(()=>[e(i,null,{default:l(()=>[e(s,{label:"Disabled",disabled:""})]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(s,{label:"Readonly",readonly:""})]),_:1})]),_:1})}const be=g(_e,[["render",xe]]),ge={};function he(x,n){return u(),V(v,null,{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Outlined"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Filled",variant:"filled"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Solo",variant:"solo"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Plain",variant:"plain"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const ve=g(ge,[["render",he]]),Ce={};function Te(x,n){return u(),V(s,{label:"Compact",density:"compact"})}const we=g(Ce,[["render",Te]]),ye={};function Fe(x,n){return u(),V(s,{label:"Regular"})}const ke=g(ye,[["render",Fe]]),Re={ts:`<template>
  <VTextField label="Regular" />
</template>
`,js:`<template>
  <VTextField label="Regular" />
</template>
`},$e={ts:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`},Ie={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Me={ts:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`,js:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`},Ae={ts:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`,js:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`},De={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="mdi-close-circle-outline"
    :append-icon="message ? 'mdi-send-outline' : 'mdi-microphone'"
    :append-inner-icon="marker ? 'mdi-map-marker-outline' : 'mdi-map-marker-off-outline'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="mdi-close-circle-outline"
    :append-icon="message ? 'mdi-send-outline' : 'mdi-microphone'"
    :append-inner-icon="marker ? 'mdi-map-marker-outline' : 'mdi-map-marker-off-outline'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},Pe={ts:`<script lang="ts" setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="mdi-help-circle-outline"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        :icon="$vuetify.display.smAndDown"
        :class="$vuetify.display.smAndDown ? 'mt-n1' : 'mt-n3'"
        @click="clickMe"
      >
        <VIcon icon="mdi-target" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <VTextField
    v-model="message"
    clearable
    clear-icon="mdi-close-circle-outline"
    label="Message"
    type="text"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="mdi-help-circle-outline"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        :icon="$vuetify.display.smAndDown"
        :class="$vuetify.display.smAndDown ? 'mt-n1' : 'mt-n3'"
        @click="clickMe"
      >
        <VIcon icon="mdi-target" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`},Ue={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="mdi-map-marker-outline"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="mdi-map-marker-outline"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="mdi-map-marker-outline"
      />
    </VCol>
  </VRow>
</template>
`},Se={ts:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="mdi-file-find-outline" />
    </template>
  </VTextField>
</template>
`,js:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="mdi-file-find-outline" />
    </template>
  </VTextField>
</template>
`},qe={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`},Ne={ts:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`},Le={ts:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
import { emailValidator, requiredValidator } from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`},Ee={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},We=t("p",null,"Text fields components are used for collecting user provided information.",-1),ze=t("p",null,[o("The "),t("code",null,"density"),o(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),t("code",null,"default"),o(", "),t("code",null,"comfortable"),o(", and "),t("code",null,"compact"),o(".")],-1),He=t("p",null,[o("Use "),t("code",null,"solo"),o(", "),t("code",null,"filled"),o(", "),t("code",null,"outlined"),o(", "),t("code",null,"plain"),o(" and "),t("code",null,"underlined"),o(" option of "),t("code",null,"variant"),o(" prop to change the look of the textfield. ")],-1),Ye=t("p",null,"Text fields can be disabled or readonly.",-1),Oe=t("p",null,[o("Use a "),t("code",null,"counter"),o(" prop to inform a user of the character limit.")],-1),Je=t("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Ge=t("p",null,[o("Use "),t("code",null,"color"),o(" prop to change the input border color.")],-1),Ke=t("p",null,[o("You can add icons to the text field with "),t("code",null,"prepend-icon"),o(", "),t("code",null,"append-icon"),o(" and "),t("code",null,"append-inner-icon"),o(" and "),t("code",null,"prepend-inner-icon"),o(" props.")],-1),Qe=t("p",null,[o("The "),t("code",null,"prefix"),o(" and "),t("code",null,"suffix"),o(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),Xe=t("p",null,[t("code",null,"single-line"),o(" text fields do not float their label on focus or with data.")],-1),Ze=t("p",null,[o("Vuetify includes simple validation through the "),t("code",null,"rules"),o(" prop.")],-1),el=t("p",null,[t("code",null,"click:prepend"),o(", "),t("code",null,"click:append"),o(", "),t("code",null,"click:append-inner"),o(", and "),t("code",null,"click:clear"),o(" will be emitted when you click on the respective icon")],-1),ll=t("p",null,[o("Text field label can be defined in "),t("code",null,"label"),o(" slot - that will allow to use HTML content.")],-1),tl=t("p",null,[o("Using the HTML input "),t("code",null,"type"),o(" password can be used with an appended icon and callback to control the visibility.")],-1),ol=t("p",null,[o("Instead of using "),t("code",null,"prepend"),o("/"),t("code",null,"append"),o("/"),t("code",null,"append-inner"),o(" icons you can use slots to extend input's functionality.")],-1),Rl={__name:"textfield",setup(x){return(n,c)=>{const p=ke,a=Y,f=we,r=ve,m=be,h=Ve,C=fe,T=me,y=re,F=ae,k=ne,R=le,$=ee,I=Z,M=G,A=J;return u(),V(v,{class:"match-height"},{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Basic",code:Re},{default:l(()=>[We,e(p)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Density",code:Ae},{default:l(()=>[ze,e(f)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(a,{title:"Variant",code:Ee},{default:l(()=>[He,e(r)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"State",code:Le},{default:l(()=>[Ye,e(m)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Counter",code:Ie},{default:l(()=>[Oe,e(h)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Clearable",code:$e},{default:l(()=>[Je,e(C)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Custom Colors",code:Me},{default:l(()=>[Ge,e(T)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icons",code:Ue},{default:l(()=>[Ke,e(y)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Prefixes and suffixes",code:je},{default:l(()=>[Qe,e(F)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Single line",code:Ne},{default:l(()=>[Xe,e(k)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Validation",code:Be},{default:l(()=>[Ze,e(R)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon events",code:De},{default:l(()=>[el,e($)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Label Slot",code:Se},{default:l(()=>[ll,e(I)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Password input",code:qe},{default:l(()=>[tl,e(M)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Icon slots",code:Pe},{default:l(()=>[ol,e(A)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Rl as default};
