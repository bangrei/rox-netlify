import{k as s,o as v,b as w,n as o,C as l,m as e,$ as i,a2 as _,t as F,a1 as R,p as M}from"./index-30b66760.js";import{r as n,b as L,i as S,a as $,d as A,l as D,p as E,c as k,f as Y,e as U,u as O}from"./validators-d1aa93b7.js";import{V as y,a}from"./VRow-b0db7b1d.js";import{V as m}from"./VTextField-1e90003c.js";import{V as N}from"./VForm-5a29b781.js";import{_ as j}from"./AppCardCode-514fb21c.js";import"./index-61e4df1a.js";/* empty css                   */import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./easing-9f15041e.js";import"./VImg-c7c2167a.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-e2a77d8b.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VAvatar-2c83efa5.js";import"./VDivider-0d474c05.js";const I={__name:"DemoFormValidationValidationTypes",setup(x){const f=s(""),V=s(""),b=s(""),p=s(""),u=s(""),h=s(""),d=s(""),c=s(""),C=s(""),g=s(""),q=s(""),T=s(""),B=s();return(W,r)=>(v(),w(N,{ref_key:"refForm",ref:B,onSubmit:r[13]||(r[13]=R(()=>{},["prevent"]))},{default:o(()=>[l(y,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(f),"onUpdate:modelValue":r[0]||(r[0]=t=>i(f)?f.value=t:null),"persistent-placeholder":"",placeholder:"This field is required",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(V),"onUpdate:modelValue":r[1]||(r[1]=t=>i(V)?V.value=t:null),"persistent-placeholder":"",placeholder:"Enter Number between 10 & 20",rules:[e(n),e(L)(e(V),10,20)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(b),"onUpdate:modelValue":r[2]||(r[2]=t=>i(b)?b.value=t:null),"persistent-placeholder":"",placeholder:"Must only consist of numbers",rules:[e(n),e(S)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(p),"onUpdate:modelValue":r[3]||(r[3]=t=>i(p)?p.value=t:null),"persistent-placeholder":"",placeholder:"Must match the specified regular expression : ^([0-9]+)$ - numbers only",rules:[e(n),e($)(e(p),"^([0-9]+)$")]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(u),"onUpdate:modelValue":r[4]||(r[4]=t=>i(u)?u.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters",rules:[e(n),e(A)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(h),"onUpdate:modelValue":r[5]||(r[5]=t=>i(h)?h.value=t:null),"persistent-placeholder":"",placeholder:"Length should not be less than the specified length : 3",rules:[e(n),e(D)(e(h),3)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(d),"onUpdate:modelValue":r[6]||(r[6]=t=>i(d)?d.value=t:null),"persistent-placeholder":"",placeholder:"Password Input Field",type:"password",rules:[e(n),e(E)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(c),"onUpdate:modelValue":r[7]||(r[7]=t=>i(c)?c.value=t:null),"persistent-placeholder":"",placeholder:"The digits field must be numeric and exactly contain 3 digits",rules:[e(n),e(D)(e(c),3),e(S)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(C),"onUpdate:modelValue":r[8]||(r[8]=t=>i(C)?C.value=t:null),"persistent-placeholder":"",placeholder:"Repeat password must match",type:"password",rules:[e(n),e(k)(e(C),e(d))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(g),"onUpdate:modelValue":r[9]||(r[9]=t=>i(g)?g.value=t:null),"persistent-placeholder":"",placeholder:"Only alphabetic characters, numbers, dashes or underscores",rules:[e(n),e(Y)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(q),"onUpdate:modelValue":r[10]||(r[10]=t=>i(q)?q.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid email",rules:[e(n),e(U)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(T),"onUpdate:modelValue":r[11]||(r[11]=t=>i(T)?T.value=t:null),"persistent-placeholder":"",placeholder:"Must be a valid url",rules:[e(n),e(O)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(_,{type:"submit",onClick:r[12]||(r[12]=t=>{var P;return(P=e(B))==null?void 0:P.validate()})},{default:o(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},z={__name:"DemoFormValidationValidatingMultipleRules",setup(x){const f=s(""),V=s(""),b=s(),p=s(""),u=s("");return(h,d)=>(v(),w(N,{ref_key:"refForm",ref:b,onSubmit:R(()=>{},["prevent"])},{default:o(()=>[l(y,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(f),"onUpdate:modelValue":d[0]||(d[0]=c=>i(f)?f.value=c:null),placeholder:"Your Name","persistent-placeholder":"",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(V),"onUpdate:modelValue":d[1]||(d[1]=c=>i(V)?V.value=c:null),placeholder:"Your Email","persistent-placeholder":"",rules:[e(n),e(U)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(p),"onUpdate:modelValue":d[2]||(d[2]=c=>i(p)?p.value=c:null),type:"password",placeholder:"Your Password","persistent-placeholder":"",rules:[e(n),e(E)],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(u),"onUpdate:modelValue":d[3]||(d[3]=c=>i(u)?u.value=c:null),type:"password",placeholder:"Confirm Password","persistent-placeholder":"",rules:[e(n),e(k)(e(u),e(p))],autocomplete:"on"},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(_,{type:"submit",onClick:d[4]||(d[4]=c=>{var C;return(C=e(b))==null?void 0:C.validate()})},{default:o(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},G={__name:"DemoFormValidationSimpleFormValidation",setup(x){const f=s(""),V=s(""),b=s();return(p,u)=>(v(),w(N,{ref_key:"refForm",ref:b,onSubmit:R(()=>{},["prevent"])},{default:o(()=>[l(y,null,{default:o(()=>[l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(f),"onUpdate:modelValue":u[0]||(u[0]=h=>i(f)?f.value=h:null),label:"First Name",rules:[e(n)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12",md:"6"},{default:o(()=>[l(m,{modelValue:e(V),"onUpdate:modelValue":u[1]||(u[1]=h=>i(V)?V.value=h:null),label:"Email",rules:[e(n),e(U)]},null,8,["modelValue","rules"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(_,{type:"submit",onClick:u[2]||(u[2]=h=>{var d;return(d=e(b))==null?void 0:d.validate()})},{default:o(()=>[F(" Submit ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},H={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { emailValidator, requiredValidator } from '@validators'

const firstName = ref('')
const email = ref('')

const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const firstName = ref('')
const email = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},J={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { confirmedValidator, emailValidator, passwordValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref<VForm>()
const password = ref('')
const confirmPassword = ref('')
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  confirmedValidator,
  emailValidator,
  passwordValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')
const refForm = ref()
const password = ref('')
const confirmPassword = ref('')
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent="() => {}"
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="name"
          placeholder="Your Name"
          persistent-placeholder
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          placeholder="Your Email"
          persistent-placeholder
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          type="password"
          placeholder="Your Password"
          persistent-placeholder
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          persistent-placeholder
          :rules="[requiredValidator, confirmedValidator(confirmPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},K={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@validators'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  alphaDashValidator,
  alphaValidator,
  betweenValidator,
  confirmedValidator,
  emailValidator,
  integerValidator,
  lengthValidator,
  passwordValidator,
  regexValidator,
  requiredValidator,
  urlValidator,
} from '@validators'

const requiredField = ref('')
const numberBetween10to20 = ref('')
const onlyConsistNumber = ref('')
const matchRegularEx = ref('')
const onlyAlphabeticCharacters = ref('')
const specifiedLength = ref('')
const password = ref('')
const digits = ref('')
const repeatPassword = ref('')
const onlyAlphabeticNumbersDashesUnderscores = ref('')
const email = ref('')
const validURL = ref('')
const refForm = ref()
<\/script>

<template>
  <VForm
    ref="refForm"
    @submit.prevent
  >
    <VRow>
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="requiredField"
          persistent-placeholder
          placeholder="This field is required"
          :rules="[requiredValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="numberBetween10to20"
          persistent-placeholder
          placeholder="Enter Number between 10 & 20"
          :rules="[requiredValidator, betweenValidator(numberBetween10to20, 10, 20)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyConsistNumber"
          persistent-placeholder
          placeholder="Must only consist of numbers"
          :rules="[requiredValidator, integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="matchRegularEx"
          persistent-placeholder
          placeholder="Must match the specified regular expression : ^([0-9]+)$ - numbers only"
          :rules="[requiredValidator, regexValidator(matchRegularEx, '^([0-9]+)$')]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticCharacters"
          persistent-placeholder
          placeholder="Only alphabetic characters"
          :rules="[requiredValidator, alphaValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="specifiedLength"
          persistent-placeholder
          placeholder="Length should not be less than the specified length : 3"
          :rules="[requiredValidator, lengthValidator(specifiedLength, 3)]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="password"
          persistent-placeholder
          placeholder="Password Input Field"
          type="password"
          :rules="[requiredValidator, passwordValidator]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="digits"
          persistent-placeholder
          placeholder="The digits field must be numeric and exactly contain 3 digits"
          :rules="[requiredValidator, lengthValidator(digits, 3), integerValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="repeatPassword"
          persistent-placeholder
          placeholder="Repeat password must match"
          type="password"
          :rules="[requiredValidator, confirmedValidator(repeatPassword, password)]"
          autocomplete="on"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="onlyAlphabeticNumbersDashesUnderscores"
          persistent-placeholder
          placeholder="Only alphabetic characters, numbers, dashes or underscores"
          :rules="[requiredValidator, alphaDashValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          persistent-placeholder
          placeholder="Must be a valid email"
          :rules="[requiredValidator, emailValidator]"
        />
      </VCol>

      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="validURL"
          persistent-placeholder
          placeholder="Must be a valid url"
          :rules="[requiredValidator, urlValidator]"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          @click="refForm?.validate()"
        >
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Q=M("p",null,[F("Use "),M("code",null,"Rules"),F(" prop to validate the input.")],-1),be={__name:"form-validation",setup(x){return(f,V)=>{const b=G,p=j,u=z,h=I;return v(),w(y,null,{default:o(()=>[l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Simple Form Validation",code:H},{default:o(()=>[Q,l(b)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Validating Multiple Rules",code:J},{default:o(()=>[l(u)]),_:1},8,["code"])]),_:1}),l(a,{cols:"12"},{default:o(()=>[l(p,{title:"Validation Types",code:K},{default:o(()=>[l(h)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{be as default};
