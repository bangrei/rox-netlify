import{V as u}from"./VAutocomplete-c36443a9.js";import{k as _,o as g,b as h,m as p,$ as C,n as t,C as e,dU as M,Y as N,w as T,s as V,aj as G,ak as I,a5 as D,a3 as F,a4 as W,al as R,am as L,an as H,p as i,t as l}from"./index-30b66760.js";import{V as E}from"./VChip-ca3f8676.js";import{a as O}from"./VList-d87f0460.js";import{a as c,V as y}from"./VRow-b0db7b1d.js";import{_ as q}from"./AppCardCode-514fb21c.js";import"./VSelect-8600eec3.js";import"./VTextField-1e90003c.js";/* empty css                   */import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./easing-9f15041e.js";import"./VImg-c7c2167a.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-e2a77d8b.js";import"./dialog-transition-9418ede6.js";import"./VMenu-55b2ccf7.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./filter-a3cf0501.js";import"./VAvatar-2c83efa5.js";import"./ssrBoot-050ef406.js";import"./VDivider-0d474c05.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";const P={__name:"DemoAutocompleteValidation",setup(f){const a=["foo","bar","fizz","buzz"],s=_(["foo"]),m=[o=>!!o.length||"Select at least one option."];return(o,n)=>(g(),h(u,{modelValue:p(s),"onUpdate:modelValue":n[0]||(n[0]=r=>C(s)?s.value=r:null),items:a,rules:m,multiple:""},null,8,["modelValue"]))}},$={__name:"DemoAutocompleteStateSelector",setup(f){const a=_(!1),s=_(null),m=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];return(o,n)=>(g(),h(u,{modelValue:p(s),"onUpdate:modelValue":n[1]||(n[1]=r=>C(s)?s.value=r:null),hint:p(a)?"Click the icon to save":"Click the icon to edit",items:m,readonly:!p(a),label:`State — ${p(a)?"Editable":"Readonly"}`,"persistent-hint":"","prepend-icon":"mdi-city","menu-props":{maxHeight:"200px"}},{append:t(()=>[e(M,{mode:"out-in"},{default:t(()=>[(g(),h(N,{key:`icon-${p(a)}`,color:p(a)?"success":"info",icon:p(a)?"mdi-check-outline":"mdi-circle-edit-outline",onClick:n[0]||(n[0]=r=>a.value=!p(a))},null,8,["color","icon"]))]),_:1})]),_:1},8,["modelValue","hint","readonly","label"]))}},z={__name:"DemoAutocompleteAsyncItems",setup(f){const a=_(!1),s=_(),m=_(null),o=["Alabama","Alaska","American Samoa","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Federated States of Micronesia","Florida","Georgia","Guam","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Marshall Islands","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Northern Mariana Islands","Ohio","Oklahoma","Oregon","Palau","Pennsylvania","Puerto Rico","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virgin Island","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],n=_(o),r=v=>{a.value=!0,setTimeout(()=>{n.value=o.filter(d=>(d||"").toLowerCase().includes((v||"").toLowerCase())),a.value=!1},500)};return T(s,v=>{v&&v!==m.value&&r(v)}),(v,d)=>(g(),h(u,{modelValue:p(m),"onUpdate:modelValue":d[0]||(d[0]=b=>C(m)?m.value=b:null),search:p(s),"onUpdate:search":d[1]||(d[1]=b=>C(s)?s.value=b:null),loading:p(a),items:p(n),label:"What state are you from?",variant:"underlined","menu-props":{maxHeight:"200px"}},null,8,["modelValue","search","loading","items"]))}},U={__name:"DemoAutocompleteSlots",setup(f){const a=_(["Sandra Adams","Britta Holt"]),s=[{name:"Sandra Adams",group:"Group 1",avatar:G},{name:"Ali Connors",group:"Group 1",avatar:I},{name:"Trevor Hansen",group:"Group 1",avatar:D},{name:"Tucker Smith",group:"Group 1",avatar:F},{name:"Britta Holt",group:"Group 2",avatar:W},{name:"Jane Smith ",group:"Group 2",avatar:R},{name:"John Smith",group:"Group 2",avatar:L},{name:"Sandra Williams",group:"Group 2",avatar:H}];return(m,o)=>(g(),h(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>C(a)?a.value=n:null),chips:"","closable-chips":"",multiple:"",items:s,"item-title":"name","item-value":"name",label:"Select"},{chip:t(({props:n,item:r})=>[e(E,V(n,{"prepend-avatar":r.raw.avatar,text:r.raw.name}),null,16,["prepend-avatar","text"])]),item:t(({props:n,item:r})=>{var v,d,b;return[e(O,V(n,{"prepend-avatar":(v=r==null?void 0:r.raw)==null?void 0:v.avatar,title:(d=r==null?void 0:r.raw)==null?void 0:d.name,subtitle:(b=r==null?void 0:r.raw)==null?void 0:b.group}),null,16,["prepend-avatar","title","subtitle"])]}),_:1},8,["modelValue"]))}},j={__name:"DemoAutocompleteCustomFilter",setup(f){const a=[{name:"Florida",abbr:"FL",id:1},{name:"Georgia",abbr:"GA",id:2},{name:"Nebraska",abbr:"NE",id:3},{name:"California",abbr:"CA",id:4},{name:"New York",abbr:"NY",id:5}];function s(m,o,n){const r=n.title.toLowerCase(),v=n.value.toLowerCase(),d=o.toLocaleLowerCase();return r.includes(d)||v.includes(d)}return(m,o)=>(g(),h(u,{label:"States",items:a,"custom-filter":s,"item-title":"name","item-value":"abbr"}))}},Y={__name:"DemoAutocompleteChips",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(g(),h(u,{label:"States",items:a,chips:"",multiple:""}))}},B={__name:"DemoAutocompleteClearable",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(g(),h(u,{label:"States",items:a,multiple:"",clearable:""}))}},J={__name:"DemoAutocompleteMultiple",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(g(),h(u,{label:"States",items:a,multiple:""}))}},K={__name:"DemoAutocompleteVariant",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(g(),h(y,null,{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"solo",label:"solo",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"outlined",label:"outlined",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"underlined",label:"underlined",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"filled",label:"filled",items:a})]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(u,{variant:"plain",label:"plain",items:a})]),_:1})]),_:1}))}},X={__name:"DemoAutocompleteDensity",setup(f){const a=_(["Florida"]),s=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(m,o)=>(g(),h(u,{modelValue:p(a),"onUpdate:modelValue":o[0]||(o[0]=n=>C(a)?a.value=n:null),label:"States",density:"compact",items:s},null,8,["modelValue"]))}},Q={__name:"DemoAutocompleteBasic",setup(f){const a=["California","Colorado","Florida","Georgia","Texas","Wyoming"];return(s,m)=>(g(),h(u,{label:"States",items:a}))}},Z={ts:`<script setup lang="ts">
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = (query: string) => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`,js:`<script setup>
const loading = ref(false)
const search = ref()
const select = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const items = ref(states)

const querySelections = query => {
  loading.value = true

  // Simulated ajax query
  setTimeout(() => {
    items.value = states.filter(state => (state || '').toLowerCase().includes((query || '').toLowerCase()))
    loading.value = false
  }, 500)
}

watch(search, query => {
  query && query !== select.value && querySelections(query)
})
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="items"
    label="What state are you from?"
    variant="underlined"
    :menu-props="{ maxHeight: '200px' }"
  />
</template>
`},ee={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
  />
</template>
`},ae={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    chips
    multiple
  />
</template>
`},te={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    clearable
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
    clearable
  />
</template>
`},oe={ts:`<script setup lang="ts">
const states = [
  { name: 'Florida', abbr: 'FL', id: 1 },
  { name: 'Georgia', abbr: 'GA', id: 2 },
  { name: 'Nebraska', abbr: 'NE', id: 3 },
  { name: 'California', abbr: 'CA', id: 4 },
  { name: 'New York', abbr: 'NY', id: 5 },
]

function customFilter(item: string, queryText: string, itemText: { title: string; value: string }) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()

  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
  />
</template>
`,js:`<script setup>
const states = [
  {
    name: 'Florida',
    abbr: 'FL',
    id: 1,
  },
  {
    name: 'Georgia',
    abbr: 'GA',
    id: 2,
  },
  {
    name: 'Nebraska',
    abbr: 'NE',
    id: 3,
  },
  {
    name: 'California',
    abbr: 'CA',
    id: 4,
  },
  {
    name: 'New York',
    abbr: 'NY',
    id: 5,
  },
]

function customFilter(item, queryText, itemText) {
  const textOne = itemText.title.toLowerCase()
  const textTwo = itemText.value.toLowerCase()
  const searchText = queryText.toLocaleLowerCase()
  
  return textOne.includes(searchText) || textTwo.includes(searchText)
}
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="states"
    :custom-filter="customFilter"
    item-title="name"
    item-value="abbr"
  />
</template>
`},ie={ts:`<script setup lang="ts">
const select = ref(['Florida'])
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const select = ref(['Florida'])

const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="select"
    label="States"
    density="compact"
    :items="items"
  />
</template>
`},se={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    label="States"
    :items="items"
    multiple
  />
</template>
`},le={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref(['Sandra Adams', 'Britta Holt'])

const people = [
  { name: 'Sandra Adams', group: 'Group 1', avatar: avatar1 },
  { name: 'Ali Connors', group: 'Group 1', avatar: avatar2 },
  { name: 'Trevor Hansen', group: 'Group 1', avatar: avatar3 },
  { name: 'Tucker Smith', group: 'Group 1', avatar: avatar4 },
  { name: 'Britta Holt', group: 'Group 2', avatar: avatar5 },
  { name: 'Jane Smith ', group: 'Group 2', avatar: avatar6 },
  { name: 'John Smith', group: 'Group 2', avatar: avatar7 },
  { name: 'Sandra Williams', group: 'Group 2', avatar: avatar8 },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'
import avatar6 from '@images/avatars/avatar-6.png'
import avatar7 from '@images/avatars/avatar-7.png'
import avatar8 from '@images/avatars/avatar-8.png'

const friends = ref([
  'Sandra Adams',
  'Britta Holt',
])

const people = [
  {
    name: 'Sandra Adams',
    group: 'Group 1',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    group: 'Group 1',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    group: 'Group 1',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    group: 'Group 1',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    group: 'Group 2',
    avatar: avatar5,
  },
  {
    name: 'Jane Smith ',
    group: 'Group 2',
    avatar: avatar6,
  },
  {
    name: 'John Smith',
    group: 'Group 2',
    avatar: avatar7,
  },
  {
    name: 'Sandra Williams',
    group: 'Group 2',
    avatar: avatar8,
  },
]
<\/script>

<template>
  <VAutocomplete
    v-model="friends"
    chips
    closable-chips
    multiple
    :items="people"
    item-title="name"
    item-value="name"
    label="Select"
  >
    <template #chip="{ props, item }">
      <VChip
        v-bind="props"
        :prepend-avatar="item.raw.avatar"
        :text="item.raw.name"
      />
    </template>

    <template #item="{ props, item }">
      <VListItem
        v-bind="props"
        :prepend-avatar="item?.raw?.avatar"
        :title="item?.raw?.name"
        :subtitle="item?.raw?.group"
      />
    </template>
  </VAutocomplete>
</template>
`},ne={ts:`<script setup lang="ts">
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="mdi-city"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`,js:`<script setup>
const isEditing = ref(false)
const selectedState = ref(null)

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
<\/script>

<template>
  <VAutocomplete
    v-model="selectedState"
    :hint="!isEditing ? 'Click the icon to edit' : 'Click the icon to save'"
    :items="states"
    :readonly="!isEditing"
    :label="\`State — \${isEditing ? 'Editable' : 'Readonly'}\`"
    persistent-hint
    prepend-icon="mdi-city"
    :menu-props="{ maxHeight: '200px' }"
  >
    <template #append>
      <VSlideXReverseTransition mode="out-in">
        <VIcon
          :key="\`icon-\${isEditing}\`"
          :color="isEditing ? 'success' : 'info'"
          :icon="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
          @click="isEditing = !isEditing"
        />
      </VSlideXReverseTransition>
    </template>
  </VAutocomplete>
</template>
`},re={ts:`<script setup lang="ts">
const items = ['foo', 'bar', 'fizz', 'buzz']
const values = ref(['foo'])
const nameRules = [(v: string) => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref(['foo'])
const nameRules = [v => !!v.length || 'Select at least one option.']
<\/script>

<template>
  <VAutocomplete
    v-model="values"
    :items="items"
    :rules="nameRules"
    multiple
  />
</template>
`},me={ts:`<script setup lang="ts">
const items = ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 solo variant  -->
      <VAutocomplete
        variant="solo"
        label="solo"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 outlined variant -->
      <VAutocomplete
        variant="outlined"
        label="outlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 underlined variant -->
      <VAutocomplete
        variant="underlined"
        label="underlined"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 filled variant  -->
      <VAutocomplete
        variant="filled"
        label="filled"
        :items="items"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!--  👉 plain variant -->
      <VAutocomplete
        variant="plain"
        label="plain"
        :items="items"
      />
    </VCol>
  </VRow>
</template>
`},ce=i("p",null,[l(" The "),i("code",null," v-autocomplete "),l(" component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically fetching information from an API. ")],-1),pe=i("p",null,[l(" You can use "),i("code",null," density "),l(" prop to adjusts vertical spacing within the component. Available options are: "),i("code",null,"default"),l(", "),i("code",null,"comfortable"),l(", and "),i("code",null,"compact"),l(". ")],-1),ue=i("p",null,[l("Use "),i("code",null,"solo"),l(", "),i("code",null,"outlined"),l(", "),i("code",null,"underlined"),l(", "),i("code",null,"filled"),l(" and "),i("code",null,"plain"),l(" options of "),i("code",null,"variant"),l(" prop to change the look of Autocomplete. ")],-1),de=i("p",null,[l("Use "),i("code",null,"multiple"),l(" prop to select multiple. Accepts array for value")],-1),ve=i("p",null,[l("Use "),i("code",null,"clearable"),l(" prop to add input clear functionality.")],-1),ge=i("p",null,[l("Use "),i("code",null," chips "),l(" prop to use chips in select.")],-1),he=i("p",null,[l("The "),i("code",null," custom-filter "),l(" prop can be used to filter each individual item with custom logic.In example we will filter state based on their name and abbreviations ")],-1),fe=i("p",null,"With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items using their props. ",-1),_e=i("p",null,"Sometimes you need to load data externally based upon a search query. ",-1),be=i("p",null,"Using a combination of v-autocomplete slots and transitions, you can create a stylish toggle able autocomplete field such as below state selector.",-1),Ce=i("p",null,[l("Use "),i("code",null,"rules"),l(" prop to validate autocomplete. Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.")],-1),Je={__name:"autocomplete",setup(f){return(a,s)=>{const m=Q,o=q,n=X,r=K,v=J,d=B,b=Y,A=j,w=U,S=z,x=$,k=P;return g(),h(y,{class:"match-height"},{default:t(()=>[e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:ee},{default:t(()=>[ce,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Density",code:ie},{default:t(()=>[pe,e(n)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"12"},{default:t(()=>[e(o,{title:"Variant",code:me},{default:t(()=>[ue,e(r)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Multiple",code:se},{default:t(()=>[de,e(v)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Clearable",code:te},{default:t(()=>[ve,e(d)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Chips",code:ae},{default:t(()=>[ge,e(b)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom-Filter",code:oe},{default:t(()=>[he,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Slots",code:le},{default:t(()=>[fe,e(w)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Async items",code:Z},{default:t(()=>[_e,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"State Selector",code:ne},{default:t(()=>[be,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"validation",code:re},{default:t(()=>[Ce,e(k)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Je as default};
