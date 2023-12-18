import{V as o}from"./VChip-ca3f8676.js";import{V as $,a as E,b as W,c as w}from"./VList-d87f0460.js";import{V as L}from"./VListItemAction-fc2e2a26.js";import{k as h,r as A,o as c,b as V,n as e,C as i,ah as M,ai as J,t as a,Y as v,m as l,$ as D,c as _,aj as j,ak as T,a5 as B,a3 as N,p as t,y as b}from"./index-30b66760.js";import{V as U}from"./VMenu-55b2ccf7.js";import{V as Y}from"./VCombobox-2cf43ee9.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";import{V as I}from"./VAvatar-2c83efa5.js";import{_ as F}from"./AppCardCode-514fb21c.js";import{a as u,V as R}from"./VRow-b0db7b1d.js";import"./transition-0c6e30e4.js";import"./ssrBoot-050ef406.js";import"./VDivider-0d474c05.js";import"./forwardRefs-a29b5f65.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./easing-9f15041e.js";import"./dialog-transition-9418ede6.js";import"./VSelect-8600eec3.js";import"./VTextField-1e90003c.js";/* empty css                   */import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./VImg-c7c2167a.js";import"./VCounter-e2a77d8b.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./filter-a3cf0501.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";const O={__name:"DemoChipExpandable",setup(m){const s=h(!1);return(C,d)=>{const r=A("IconBtn");return c(),V(U,{modelValue:l(s),"onUpdate:modelValue":d[1]||(d[1]=p=>D(s)?s.value=p:null),transition:"scale-transition"},{activator:e(({props:p})=>[i(o,M(J(p)),{default:e(()=>[a(" VueJS ")]),_:2},1040)]),default:e(()=>[i($,null,{default:e(()=>[i(E,null,{append:e(()=>[i(L,{class:"ms-1"},{default:e(()=>[i(r,{onClick:d[0]||(d[0]=p=>s.value=!1)},{default:e(()=>[i(v,{size:"20",icon:"mdi-close"})]),_:1})]),_:1})]),default:e(()=>[i(W,null,{default:e(()=>[a("VueJS")]),_:1}),i(w,null,{default:e(()=>[a("The Progressive JavaScript Framework")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},q={__name:"DemoChipInSelects",setup(m){const s=h(["Programming","Playing video games","Sleeping"]),C=h(["Streaming","Eating","Programming","Playing video games","Sleeping"]);return(d,r)=>(c(),V(Y,{modelValue:l(s),"onUpdate:modelValue":r[0]||(r[0]=p=>D(s)?s.value=p:null),chips:"",clearable:"",multiple:"","closable-chips":"","clear-icon":"mdi-close-circle-outline",items:l(C),label:"Your favorite hobbies","prepend-icon":"mdi-filter-variant"},null,8,["modelValue","items"]))}},G={},H={class:"demo-space-x"};function K(m,s){return c(),_("div",H,[i(o,{size:"x-small"},{default:e(()=>[a(" x-small chip ")]),_:1}),i(o,{size:"small"},{default:e(()=>[a(" small chip ")]),_:1}),i(o,null,{default:e(()=>[a("Default")]),_:1}),i(o,{size:"large"},{default:e(()=>[a(" large chip ")]),_:1}),i(o,{size:"x-large"},{default:e(()=>[a(" x-large chip ")]),_:1})])}const Q=g(G,[["render",K]]),X={class:"demo-space-x"},Z=t("span",null,"John Doe",-1),ii=t("span",null,"Darcy Nooser",-1),ei=t("span",null,"Felicia Risker",-1),ai=t("span",null,"Minnie Mostly",-1),oi={__name:"DemoChipWithAvatar",setup(m){return(s,C)=>(c(),_("div",X,[i(o,{pill:""},{default:e(()=>[i(I,{start:"",image:l(j)},null,8,["image"]),Z]),_:1}),i(o,{pill:""},{default:e(()=>[i(I,{start:"",image:l(T)},null,8,["image"]),ii]),_:1}),i(o,null,{default:e(()=>[i(I,{start:"",image:l(B)},null,8,["image"]),ei]),_:1}),i(o,null,{default:e(()=>[i(I,{start:"",image:l(N)},null,8,["image"]),ai]),_:1})]))}},ti={},li={class:"demo-space-x"};function si(m,s){return c(),_("div",li,[i(o,null,{default:e(()=>[i(v,{start:"",size:"18",icon:"mdi-account-outline"}),a(" Account ")]),_:1}),i(o,{color:"primary"},{default:e(()=>[i(v,{start:"",size:"18",icon:"mdi-star-outline"}),a(" Premium ")]),_:1}),i(o,{color:"secondary"},{default:e(()=>[i(v,{start:"",size:"18",icon:"mdi-cake"}),a(" 1 Year ")]),_:1}),i(o,{color:"success"},{default:e(()=>[i(v,{start:"",size:"18",icon:"mdi-bell-outline"}),a(" Notification ")]),_:1}),i(o,{color:"info"},{default:e(()=>[i(v,{start:"",size:"18",icon:"mdi-forum-outline"}),a(" Message ")]),_:1}),i(o,{color:"warning"},{default:e(()=>[i(v,{start:"",size:"18",icon:"mdi-alert-outline"}),a(" Warning ")]),_:1}),i(o,{color:"error"},{default:e(()=>[i(v,{start:"",size:"18",icon:"mdi-alert-circle-outline"}),a(" Error ")]),_:1})])}const ri=g(ti,[["render",si]]),ci={class:"demo-space-x"},ni={__name:"DemoChipClosable",setup(m){const s=h(!0),C=h(!0),d=h(!0),r=h(!0),p=h(!0),y=h(!0),S=h(!0);return(x,n)=>(c(),_("div",ci,[l(s)?(c(),V(o,{key:0,closable:"","onClick:close":n[0]||(n[0]=f=>s.value=!l(s))},{default:e(()=>[a(" Default ")]),_:1})):b("",!0),l(C)?(c(),V(o,{key:1,closable:"",color:"primary","onClick:close":n[1]||(n[1]=f=>C.value=!l(C))},{default:e(()=>[a(" Primary ")]),_:1})):b("",!0),l(d)?(c(),V(o,{key:2,closable:"",color:"secondary","onClick:close":n[2]||(n[2]=f=>d.value=!l(d))},{default:e(()=>[a(" Secondary ")]),_:1})):b("",!0),l(r)?(c(),V(o,{key:3,closable:"",color:"success","onClick:close":n[3]||(n[3]=f=>r.value=!l(r))},{default:e(()=>[a(" Success ")]),_:1})):b("",!0),l(p)?(c(),V(o,{key:4,closable:"",color:"info","onClick:close":n[4]||(n[4]=f=>p.value=!l(p))},{default:e(()=>[a(" Info ")]),_:1})):b("",!0),l(y)?(c(),V(o,{key:5,closable:"",color:"warning","onClick:close":n[5]||(n[5]=f=>y.value=!l(y))},{default:e(()=>[a(" Warning ")]),_:1})):b("",!0),l(S)?(c(),V(o,{key:6,closable:"",color:"error","onClick:close":n[6]||(n[6]=f=>S.value=!l(S))},{default:e(()=>[a(" Error ")]),_:1})):b("",!0)]))}},pi={},di={class:"demo-space-x"};function mi(m,s){return c(),_("div",di,[i(o,{label:""},{default:e(()=>[a(" Default ")]),_:1}),i(o,{label:"",color:"primary"},{default:e(()=>[a(" Primary ")]),_:1}),i(o,{label:"",color:"secondary"},{default:e(()=>[a(" Secondary ")]),_:1}),i(o,{label:"",color:"success"},{default:e(()=>[a(" Success ")]),_:1}),i(o,{label:"",color:"info"},{default:e(()=>[a(" Info ")]),_:1}),i(o,{label:"",color:"warning"},{default:e(()=>[a(" Warning ")]),_:1}),i(o,{label:"",color:"error"},{default:e(()=>[a(" Error ")]),_:1})])}const ui=g(pi,[["render",mi]]),hi={},Vi={class:"demo-space-x"};function Ci(m,s){return c(),_("div",Vi,[i(o,{variant:"outlined"},{default:e(()=>[a(" Default ")]),_:1}),i(o,{color:"primary",variant:"outlined"},{default:e(()=>[a(" Primary ")]),_:1}),i(o,{color:"secondary",variant:"outlined"},{default:e(()=>[a(" Secondary ")]),_:1}),i(o,{color:"success",variant:"outlined"},{default:e(()=>[a(" Success ")]),_:1}),i(o,{color:"info",variant:"outlined"},{default:e(()=>[a(" Info ")]),_:1}),i(o,{color:"warning",variant:"outlined"},{default:e(()=>[a(" Warning ")]),_:1}),i(o,{color:"error",variant:"outlined"},{default:e(()=>[a(" Error ")]),_:1})])}const fi=g(hi,[["render",Ci]]),vi={},_i={class:"demo-space-x"};function bi(m,s){return c(),_("div",_i,[i(o,{variant:"elevated"},{default:e(()=>[a(" Default ")]),_:1}),i(o,{color:"primary",variant:"elevated"},{default:e(()=>[a(" Primary ")]),_:1}),i(o,{color:"secondary",variant:"elevated"},{default:e(()=>[a(" Secondary ")]),_:1}),i(o,{color:"success",variant:"elevated"},{default:e(()=>[a(" Success ")]),_:1}),i(o,{color:"info",variant:"elevated"},{default:e(()=>[a(" Info ")]),_:1}),i(o,{color:"warning",variant:"elevated"},{default:e(()=>[a(" Warning ")]),_:1}),i(o,{color:"error",variant:"elevated"},{default:e(()=>[a(" Error ")]),_:1})])}const gi=g(vi,[["render",bi]]),yi={},Si={class:"demo-space-x"};function Ii(m,s){return c(),_("div",Si,[i(o,null,{default:e(()=>[a(" Default ")]),_:1}),i(o,{color:"primary"},{default:e(()=>[a(" Primary ")]),_:1}),i(o,{color:"secondary"},{default:e(()=>[a(" Secondary ")]),_:1}),i(o,{color:"success"},{default:e(()=>[a(" Success ")]),_:1}),i(o,{color:"info"},{default:e(()=>[a(" Info ")]),_:1}),i(o,{color:"warning"},{default:e(()=>[a(" Warning ")]),_:1}),i(o,{color:"error"},{default:e(()=>[a(" Error ")]),_:1})])}const xi=g(yi,[["render",Ii]]),Di={ts:`<script lang="ts" setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<script setup>
const isDefaultChipVisible = ref(true)
const isPrimaryChipVisible = ref(true)
const isSecondaryChipVisible = ref(true)
const isSuccessChipVisible = ref(true)
const isInfoChipVisible = ref(true)
const isWarningChipVisible = ref(true)
const isErrorChipVisible = ref(true)
<\/script>

<template>
  <div class="demo-space-x">
    <VChip
      v-if="isDefaultChipVisible"
      closable
      @click:close="isDefaultChipVisible = !isDefaultChipVisible"
    >
      Default
    </VChip>

    <VChip
      v-if="isPrimaryChipVisible"
      closable
      color="primary"
      @click:close="isPrimaryChipVisible = !isPrimaryChipVisible"
    >
      Primary
    </VChip>

    <VChip
      v-if="isSecondaryChipVisible"
      closable
      color="secondary"
      @click:close="isSecondaryChipVisible = !isSecondaryChipVisible"
    >
      Secondary
    </VChip>

    <VChip
      v-if="isSuccessChipVisible"
      closable
      color="success"
      @click:close="isSuccessChipVisible = !isSuccessChipVisible"
    >
      Success
    </VChip>

    <VChip
      v-if="isInfoChipVisible"
      closable
      color="info"
      @click:close="isInfoChipVisible = !isInfoChipVisible"
    >
      Info
    </VChip>

    <VChip
      v-if="isWarningChipVisible"
      closable
      color="warning"
      @click:close="isWarningChipVisible = !isWarningChipVisible"
    >
      Warning
    </VChip>

    <VChip
      v-if="isErrorChipVisible"
      closable
      color="error"
      @click:close="isErrorChipVisible = !isErrorChipVisible"
    >
      Error
    </VChip>
  </div>
</template>
`},ki={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      Default
    </VChip>

    <VChip color="primary">
      Primary
    </VChip>

    <VChip color="secondary">
      Secondary
    </VChip>

    <VChip color="success">
      Success
    </VChip>

    <VChip color="info">
      Info
    </VChip>

    <VChip color="warning">
      Warning
    </VChip>

    <VChip color="error">
      Error
    </VChip>
  </div>
</template>
`},Pi={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="elevated">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="elevated"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="elevated"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="elevated"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="elevated"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="elevated"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="elevated"
    >
      Error
    </VChip>
  </div>
</template>
`},zi={ts:`<script lang="ts" setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="mdi-close"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`,js:`<script setup>
const isMenuVisible = ref(false)
<\/script>

<template>
  <VMenu
    v-model="isMenuVisible"
    transition="scale-transition"
  >
    <!-- v-menu activator -->
    <template #activator="{ props }">
      <VChip v-bind="props">
        VueJS
      </VChip>
    </template>

    <!-- v-menu list -->
    <VList>
      <VListItem>
        <VListItemTitle>VueJS</VListItemTitle>
        <VListItemSubtitle>The Progressive JavaScript Framework</VListItemSubtitle>

        <template #append>
          <VListItemAction class="ms-1">
            <IconBtn @click="isMenuVisible = false">
              <VIcon
                size="20"
                icon="mdi-close"
              />
            </IconBtn>
          </VListItemAction>
        </template>
      </VListItem>
    </VList>
  </VMenu>
</template>
`},$i={ts:`<script lang="ts" setup>
const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
const items = ref(['Streaming', 'Eating', 'Programming', 'Playing video games', 'Sleeping'])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="mdi-close-circle-outline"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="mdi-filter-variant"
  />
</template>
`,js:`<script setup>
const chips = ref([
  'Programming',
  'Playing video games',
  'Sleeping',
])

const items = ref([
  'Streaming',
  'Eating',
  'Programming',
  'Playing video games',
  'Sleeping',
])
<\/script>

<template>
  <VCombobox
    v-model="chips"
    chips
    clearable
    multiple
    closable-chips
    clear-icon="mdi-close-circle-outline"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="mdi-filter-variant"
  />
</template>
`},Ei={ts:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip label>
      Default
    </VChip>

    <VChip
      label
      color="primary"
    >
      Primary
    </VChip>

    <VChip
      label
      color="secondary"
    >
      Secondary
    </VChip>

    <VChip
      label
      color="success"
    >
      Success
    </VChip>

    <VChip
      label
      color="info"
    >
      Info
    </VChip>

    <VChip
      label
      color="warning"
    >
      Warning
    </VChip>

    <VChip
      label
      color="error"
    >
      Error
    </VChip>
  </div>
</template>
`},Wi={ts:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip variant="outlined">
      Default
    </VChip>

    <VChip
      color="primary"
      variant="outlined"
    >
      Primary
    </VChip>

    <VChip
      color="secondary"
      variant="outlined"
    >
      Secondary
    </VChip>

    <VChip
      color="success"
      variant="outlined"
    >
      Success
    </VChip>

    <VChip
      color="info"
      variant="outlined"
    >
      Info
    </VChip>

    <VChip
      color="warning"
      variant="outlined"
    >
      Warning
    </VChip>

    <VChip
      color="error"
      variant="outlined"
    >
      Error
    </VChip>
  </div>
</template>
`},wi={ts:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip size="x-small">
      x-small chip
    </VChip>

    <VChip size="small">
      small chip
    </VChip>

    <VChip>Default</VChip>

    <VChip size="large">
      large chip
    </VChip>

    <VChip size="x-large">
      x-large chip
    </VChip>
  </div>
</template>
`},Li={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VChip pill>
      <VAvatar
        start
        :image="avatar1"
      />
      <span>John Doe</span>
    </VChip>

    <VChip pill>
      <VAvatar
        start
        :image="avatar2"
      />
      <span>Darcy Nooser</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar3"
      />
      <span>Felicia Risker</span>
    </VChip>

    <VChip>
      <VAvatar
        start
        :image="avatar4"
      />
      <span>Minnie Mostly</span>
    </VChip>
  </div>
</template>
`},Ai={ts:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="18"
        icon="mdi-account-outline"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="18"
        icon="mdi-star-outline"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="18"
        icon="mdi-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="18"
        icon="mdi-bell-outline"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="18"
        icon="mdi-forum-outline"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="18"
        icon="mdi-alert-outline"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="18"
        icon="mdi-alert-circle-outline"
      />
      Error
    </VChip>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VChip>
      <VIcon
        start
        size="18"
        icon="mdi-account-outline"
      />
      Account
    </VChip>

    <VChip color="primary">
      <VIcon
        start
        size="18"
        icon="mdi-star-outline"
      />
      Premium
    </VChip>

    <VChip color="secondary">
      <VIcon
        start
        size="18"
        icon="mdi-cake"
      />
      1 Year
    </VChip>

    <VChip color="success">
      <VIcon
        start
        size="18"
        icon="mdi-bell-outline"
      />
      Notification
    </VChip>

    <VChip color="info">
      <VIcon
        start
        size="18"
        icon="mdi-forum-outline"
      />
      Message
    </VChip>

    <VChip color="warning">
      <VIcon
        start
        size="18"
        icon="mdi-alert-outline"
      />
      Warning
    </VChip>

    <VChip color="error">
      <VIcon
        start
        size="18"
        icon="mdi-alert-circle-outline"
      />
      Error
    </VChip>
  </div>
</template>
`},Mi=t("p",null,[a("Use "),t("code",null,"color"),a(" prop to change the background color of chips.")],-1),Ji=t("p",null,[a("Use "),t("code",null,"elevated"),a(" variant option to create filled chips.")],-1),ji=t("p",null,[a("Use "),t("code",null,"outlined"),a(" variant option to create outline border chips.")],-1),Ti=t("p",null,[a("Label chips use the "),t("code",null,"v-card"),a(" border-radius. Use "),t("code",null,"label"),a(" prop to create label chips.")],-1),Bi=t("p",null,[a("Closable chips can be controlled with a "),t("code",null,"v-model"),a(".")],-1),Ni=t("p",null,"Chips can use text or any icon available in the Material Icons font library.",-1),Ui=t("p",null,[a("Use "),t("code",null,"pill"),a(" prop to remove the "),t("code",null,"v-avatar"),a(" padding.")],-1),Yi=t("p",null,[a("The "),t("code",null,"v-chip"),a(" component can have various sizes from "),t("code",null,"x-small"),a(" to "),t("code",null,"x-large"),a(".")],-1),Fi=t("p",null,[a("Selects can use "),t("code",null,"chips"),a(" to display the selected data. Try adding your own tags below.")],-1),Ri=t("p",null,[a("Chips can be combined with "),t("code",null,"v-menu"),a(" to enable a specific set of actions for a chip.")],-1),ye={__name:"chip",setup(m){return(s,C)=>{const d=xi,r=F,p=gi,y=fi,S=ui,x=ni,n=ri,f=oi,k=Q,P=q,z=O;return c(),V(R,{class:"match-height"},{default:e(()=>[i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"Color",code:ki},{default:e(()=>[Mi,i(d)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"Elevated",code:Pi},{default:e(()=>[Ji,i(p)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"Outlined",code:Wi},{default:e(()=>[ji,i(y)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"Label",code:Ei},{default:e(()=>[Ti,i(S)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"Closable",code:Di},{default:e(()=>[Bi,i(x)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"With Icon",code:Ai},{default:e(()=>[Ni,i(n)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"With Avatar",code:Li},{default:e(()=>[Ui,i(f)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"Sizes",code:wi},{default:e(()=>[Yi,i(k)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"In Selects",code:$i},{default:e(()=>[Fi,i(P)]),_:1},8,["code"])]),_:1}),i(u,{cols:"12",md:"6"},{default:e(()=>[i(r,{title:"Expandable",code:zi},{default:e(()=>[Ri,i(z)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ye as default};
