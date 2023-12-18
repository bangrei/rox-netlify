import{V as c}from"./VCombobox-2cf43ee9.js";import{k as d,o as V,b,m as r,$ as u,w as y,aT as I,n as s,C as t,t as i,p as a,v as C}from"./index-30b66760.js";import{a as P,b as D}from"./VList-d87f0460.js";import{a as n,V as _}from"./VRow-b0db7b1d.js";import{V as w}from"./VChip-ca3f8676.js";import{V as U}from"./VAvatar-2c83efa5.js";import{_ as L}from"./AppCardCode-514fb21c.js";import"./VSelect-8600eec3.js";import"./VTextField-1e90003c.js";/* empty css                   */import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./easing-9f15041e.js";import"./VImg-c7c2167a.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-e2a77d8b.js";import"./dialog-transition-9418ede6.js";import"./VMenu-55b2ccf7.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./filter-a3cf0501.js";import"./ssrBoot-050ef406.js";import"./VDivider-0d474c05.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";const k={__name:"DemoComboboxClearable",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Combobox",multiple:"",clearable:""},null,8,["modelValue"]))}},A=a("kbd",null,"enter",-1),R={__name:"DemoComboboxNoDataWithChips",setup(g){const e=["Gaming","Programming","Vue","Vuetify"],m=d(["Vuetify"]),p=d(null);return y(m,l=>{l.length>5&&I(()=>m.value.pop())}),(l,o)=>(V(),b(c,{modelValue:r(m),"onUpdate:modelValue":o[0]||(o[0]=f=>u(m)?m.value=f:null),"search-input":r(p),"onUpdate:searchInput":o[1]||(o[1]=f=>u(p)?p.value=f:null),items:e,"hide-selected":"","hide-no-data":!1,hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":s(()=>[t(P,null,{default:s(()=>[t(D,null,{default:s(()=>[i(' No results matching "'),a("strong",null,C(r(p)),1),i('". Press '),A,i(" to create a new one ")]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"]))}},T={__name:"DemoComboboxMultiple",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(_,null,{default:s(()=>[t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=o=>u(e)?e.value=o:null),items:m,label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=o=>u(e)?e.value=o:null),label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=o=>u(e)?e.value=o:null),items:m,label:"I use selection slot",multiple:""},{selection:s(({item:o})=>[t(w,{class:"mt-1"},{default:s(()=>[t(U,{start:"",color:"primary"},{default:s(()=>[i(C(String(o.title).charAt(0).toUpperCase()),1)]),_:2},1024),i(" "+C(o.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},N={__name:"DemoComboboxVariant",setup(g){const e=d(["Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(_,null,{default:s(()=>[t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,multiple:"",chips:"",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[1]||(l[1]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[2]||(l[2]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[3]||(l[3]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),t(n,{cols:"12"},{default:s(()=>[t(c,{modelValue:r(e),"onUpdate:modelValue":l[4]||(l[4]=o=>u(e)?e.value=o:null),multiple:"",chips:"",items:m,variant:"plain",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},$={__name:"DemoComboboxDensity",setup(g){const e=d(["Vuetify","Programming"]),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m,label:"Combobox",density:"compact",multiple:""},null,8,["modelValue"]))}},S={__name:"DemoComboboxBasic",setup(g){const e=d("Programming"),m=["Programming","Design","Vue","Vuetify"];return(p,l)=>(V(),b(c,{modelValue:r(e),"onUpdate:modelValue":l[0]||(l[0]=o=>u(e)?e.value=o:null),items:m},null,8,["modelValue"]))}},j={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="selectedItem"
    :items="items"
  />
</template>
`},B={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  />
</template>
`},M={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    multiple
  />
</template>
`},W={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip class="mt-1">
            <VAvatar
              start
              color="primary"
            >
              {{ String(item.title).charAt(0).toUpperCase() }}
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip class="mt-1">
            <VAvatar
              start
              color="primary"
            >
              {{ String(item.title).charAt(0).toUpperCase() }}
            </VAvatar>
            {{ item.title }}
          </VChip>
        </template>
      </VCombobox>
    </VCol>
  </VRow>
</template>
`},F={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <VCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </VCombobox>
</template>
`},G={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        chips
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        chips
        :items="items"
        variant="plain"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},O=a("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1),Y=a("p",null,[i(" You can use "),a("code",null,"Density"),i(" prop to reduce combobox height and lower max height of list items. Available options are: "),a("code",null,"default"),i(", "),a("code",null,"comfortable"),i(", and "),a("code",null,"compact"),i(". ")],-1),q=a("p",null,[i("Use "),a("code",null,"solo"),i(", "),a("code",null,"outlined"),i(", "),a("code",null,"underlined"),i(", "),a("code",null,"filled"),i(" and "),a("code",null,"plain"),i(" options of "),a("code",null,"variant"),i(" prop to change the look of combobox. ")],-1),z=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),E=a("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1),H=a("p",null,[i("Use "),a("code",null,"clearable"),i(" prop to clear combobox.")],-1),ye={__name:"combobox",setup(g){return(e,m)=>{const p=S,l=L,o=$,f=N,v=T,h=R,x=k;return V(),b(_,{class:"match-height"},{default:s(()=>[t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Basic",code:j},{default:s(()=>[O,t(p)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Density",code:M},{default:s(()=>[Y,t(o)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Variant",code:G},{default:s(()=>[q,t(f)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Multiple",code:W},{default:s(()=>[z,t(v)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"No data with chips",code:F},{default:s(()=>[E,t(h)]),_:1},8,["code"])]),_:1}),t(n,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Clearable",code:B},{default:s(()=>[H,t(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ye as default};
