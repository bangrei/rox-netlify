import{a as u,b as L,V as h,c as w,d as j,e as k}from"./VList-d87f0460.js";import{o as n,b as c,n as t,c as f,F as V,a as b,C as e,Y as _,v as I,t as a,at as N,y as J,a2 as B,p,aj as z,ak as P,a5 as U,a3 as G,k as W,s as S,m as K,$ as Q}from"./index-30b66760.js";import{V as x}from"./VAvatar-2c83efa5.js";import{V as D}from"./VDivider-0d474c05.js";import{V as Y}from"./VBadge-97dc237c.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";import{V as C}from"./VListItemAction-fc2e2a26.js";import{V as T}from"./VCheckbox-475ad393.js";import{_ as q}from"./AppCardCode-514fb21c.js";import{c as r}from"./VCard-db64c41e.js";import{a as g,V as X}from"./VRow-b0db7b1d.js";import"./transition-0c6e30e4.js";import"./ssrBoot-050ef406.js";import"./VImg-c7c2167a.js";import"./VInput-cd4c7816.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./vue.runtime.esm-bundler-eb84b330.js";const Z={__name:"DemoListShaped",setup(v){const l=[{text:"Cupcake sesame snaps dessert marzipan.",icon:"mdi-instagram"},{text:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",icon:"mdi-facebook"},{text:"Bonbon macaroon gummies pie jelly",icon:"mdi-twitter"}];return(o,d)=>(n(),c(h,null,{default:t(()=>[(n(),f(V,null,b(l,(i,s)=>e(u,{key:s,value:i.text,rounded:"shaped"},{prepend:t(()=>[e(_,{icon:i.icon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(L,{textContent:I(i.text)},null,8,["textContent"])]),_:2},1032,["value"])),64))]),_:1}))}},ee={__name:"DemoListProgressList",setup(v){const l=[{avatar:"mdi-react",title:"React is a JavaScript library for building user interfaces",language:"react",amount:90},{avatar:"mdi-bootstrap",title:"Bootstrap is an open source toolkit",language:"bootstrap",amount:80},{avatar:"mdi-vuejs",title:"Vue.js is the Progressive JavaScript Framework",language:"vue",amount:65},{avatar:"mdi-angularjs",title:"Angular implements Functional Programming concepts",language:"angular",amount:75},{avatar:"mdi-language-javascript",title:"JavaScript is the programming language of the Web",language:"javascript",amount:70}],o={react:"info",bootstrap:"primary",vue:"success",angular:"error",javascript:"warning"};return(d,i)=>(n(),c(h,{lines:"two",border:"",rounded:""},{default:t(()=>[(n(),f(V,null,b(l,(s,m)=>(n(),f(V,{key:s.language},[e(u,null,{prepend:t(()=>[e(x,{size:"36",rounded:"",variant:"tonal",icon:s.avatar,color:o[s.language]},null,8,["icon","color"])]),default:t(()=>[e(L,null,{default:t(()=>[a(I(s.title),1)]),_:2},1024),e(w,{class:"mt-2"},{default:t(()=>[e(N,{height:"6",rounded:"","model-value":s.amount,"bg-color":"secondary",color:o[s.language]},null,8,["model-value","color"])]),_:2},1024)]),_:2},1024),m!==l.length-1?(n(),c(D,{key:0})):J("",!0)],64))),64))]),_:1}))}},te={class:"ms-4"},ae={class:"text-xs text-wrap text-disabled"},ie={__name:"DemoListUserList",setup(v){const l=[{avatar:z,name:"Caroline Black",status:"Online",lastVisited:"13 minutes ago"},{avatar:P,name:"Alfred Copeland",status:"Away",lastVisited:"11 minutes ago"},{avatar:U,name:"Celia Schneider",status:"Offline",lastVisited:"9 minutes ago"},{avatar:G,name:"Max Rogan",status:"In Meeting",lastVisited:"28 minutes ago"}],o={Online:"success",Away:"warning",Offline:"secondary","In Meeting":"error"};return(d,i)=>(n(),c(h,{lines:"two",border:"",rounded:""},{default:t(()=>[(n(),f(V,null,b(l,(s,m)=>(n(),f(V,{key:s.name},[e(u,null,{prepend:t(()=>[e(x,{image:s.avatar},null,8,["image"])]),append:t(()=>[e(B,{size:"small"},{default:t(()=>[a(" Add ")]),_:1})]),default:t(()=>[e(L,null,{default:t(()=>[a(I(s.name),1)]),_:2},1024),e(w,{class:"mt-1 me-2"},{default:t(()=>[e(Y,{dot:"",location:"start center","offset-x":"2",color:o[s.status],class:"me-3"},{default:t(()=>[p("span",te,I(s.status),1)]),_:2},1032,["color"]),p("span",ae,I(s.lastVisited),1)]),_:2},1024)]),_:2},1024),m!==l.length-1?(n(),c(D,{key:0})):J("",!0)],64))),64))]),_:1}))}},se=["innerHTML"],le={__name:"DemoListThreeLine",setup(v){const l=[{type:"subheader",title:"Today"},{prependAvatar:z,title:"Brunch this weekend?",subtitle:`<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`},{type:"divider",inset:!0},{prependAvatar:P,title:"Summer BBQ",subtitle:`<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`},{type:"divider",inset:!0},{prependAvatar:U,title:"Oui oui",subtitle:'<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'},{type:"divider",inset:!0},{prependAvatar:G,title:"Birthday gift",subtitle:'<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'}];return(o,d)=>(n(),c(h,{lines:"three",items:l,"item-props":""},{subtitle:t(({subtitle:i})=>[p("div",{innerHTML:i},null,8,se)]),_:1}))}},ne={__name:"DemoListTwoLinesAndSubheader",setup(v){const l=[{color:"blue",icon:"mdi-clipboard-text",subtitle:"Jan 20, 2014",title:"Vacation itinerary"},{color:"amber",icon:"mdi-gesture-tap-button",subtitle:"Jan 10, 2014",title:"Kitchen remodel"}],o=[{subtitle:"Jan 9, 2014",title:"Photos"},{subtitle:"Jan 17, 2014",title:"Recipes"},{subtitle:"Jan 28, 2014",title:"Work"}];return(d,i)=>(n(),c(h,{lines:"two"},{default:t(()=>[e(j,{inset:""},{default:t(()=>[a(" Folders ")]),_:1}),(n(),f(V,null,b(o,s=>e(u,{key:s.title,title:s.title,subtitle:s.subtitle},{prepend:t(()=>[e(x,{color:"secondary",variant:"tonal"},{default:t(()=>[e(_,{size:26,icon:"mdi-folder-outline"})]),_:1})]),append:t(()=>[e(B,{variant:"text",color:"default",icon:"mdi-information-outline"})]),_:2},1032,["title","subtitle"])),64)),e(D,{inset:""}),e(j,{inset:""},{default:t(()=>[a(" Files ")]),_:1}),(n(),f(V,null,b(l,s=>e(u,{key:s.title,title:s.title,subtitle:s.subtitle},{prepend:t(()=>[e(x,{color:"secondary",variant:"tonal"},{default:t(()=>[e(_,{size:26,icon:s.icon},null,8,["icon"])]),_:2},1024)]),append:t(()=>[e(B,{variant:"text",color:"default",icon:"mdi-information-outline"})]),_:2},1032,["title","subtitle"])),64))]),_:1}))}},oe={__name:"DemoListSubGroup",setup(v){const l=W(["Users","Admin"]),o=[["Management","mdi-account-multiple-outline"],["Settings","mdi-cog-outline"]],d=[["Create","mdi-plus-outline"],["Read","mdi-file-outline"],["Update","mdi-update"],["Delete","mdi-delete-outline"]];return(i,s)=>(n(),c(h,{opened:K(l),"onUpdate:opened":s[0]||(s[0]=m=>Q(l)?l.value=m:null)},{default:t(()=>[e(u,{title:"Home",value:"Home"},{prepend:t(()=>[e(_,{size:"24",icon:"mdi-home-outline",class:"me-3"})]),_:1}),e(k,{value:"Users"},{activator:t(({props:m})=>[e(u,S(m,{title:"Users"}),{prepend:t(()=>[e(_,{size:"24",icon:"mdi-account-circle-outline",class:"me-3"})]),_:2},1040)]),default:t(()=>[e(k,{value:"Admin"},{activator:t(({props:m})=>[e(u,S(m,{title:"Admin"}),null,16)]),default:t(()=>[(n(),f(V,null,b(o,([m,y],A)=>e(u,{key:A,value:m,title:m},{prepend:t(()=>[e(_,{size:"24",icon:y,class:"me-3"},null,8,["icon"])]),_:2},1032,["value","title"])),64))]),_:1}),e(k,{value:"Actions"},{activator:t(({props:m})=>[e(u,S(m,{title:"Actions"}),null,16)]),default:t(()=>[(n(),f(V,null,b(d,([m,y],A)=>e(u,{key:A,value:m,title:m},{prepend:t(()=>[e(_,{size:"24",icon:y,class:"me-3"},null,8,["icon"])]),_:2},1032,["value","title"])),64))]),_:1})]),_:1})]),_:1},8,["opened"]))}},re={};function me(v,l){return n(),c(h,{lines:"three",density:"compact","select-strategy":"classic"},{default:t(()=>[e(j,null,{default:t(()=>[a("General")]),_:1}),e(u,{value:"notifications"},{prepend:t(({isActive:o})=>[e(C,{start:""},{default:t(()=>[e(T,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Notifications")]),_:1}),e(w,null,{default:t(()=>[a("Notify me about updates to apps or games that I downloaded")]),_:1})]),_:1}),e(u,{value:"sound"},{prepend:t(({isActive:o})=>[e(C,{start:""},{default:t(()=>[e(T,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Sound")]),_:1}),e(w,null,{default:t(()=>[a("Auto-update apps at any time. Data charges may apply")]),_:1})]),_:1}),e(u,{value:"widgets"},{prepend:t(({isActive:o})=>[e(C,{start:""},{default:t(()=>[e(T,{"model-value":o,color:"primary",class:"mt-2"},null,8,["model-value"])]),_:2},1024)]),default:t(()=>[e(L,null,{default:t(()=>[a("Auto-add widgets")]),_:1}),e(w,null,{default:t(()=>[a("Automatically add home screen widgets when downloads complete")]),_:1})]),_:1})]),_:1})}const ue=E(re,[["render",me]]),pe={__name:"DemoListNav",setup(v){const l=[{title:"My Files",value:1,prependIcon:"mdi-folder-outline"},{title:"Shared with me",value:2,prependIcon:"mdi-account-multiple-outline"},{title:"Starred",value:3,prependIcon:"mdi-star-outline"},{title:"Recent",value:4,prependIcon:"mdi-history"},{title:"Offline",value:5,prependIcon:"mdi-check-circle-outline"},{title:"Uploads",value:6,prependIcon:"mdi-upload-outline"},{title:"Backups",value:7,prependIcon:"mdi-cloud-upload-outline"}];return(o,d)=>(n(),c(h,{nav:"",lines:!1},{default:t(()=>[(n(),f(V,null,b(l,i=>e(u,{key:i.value,value:i.value},{prepend:t(()=>[e(_,{icon:i.prependIcon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(L,null,{default:t(()=>[a(I(i.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},ce={__name:"DemoListDensity",setup(v){const l=[{title:"halvah icing marshmallow",value:1},{title:"Cake caramels donut danish muffin biscuit",value:2},{title:"Chocolate cake pie lollipop",value:3},{title:"Apple pie toffee pudding gummi bears",value:4},{title:"Jujubes chupa chups cheesecake tart",value:5},{title:"Candy fruitcake bonbon sesame snaps dessert",value:6},{title:"Candy wafer tiramisu sugar plum sweet.",value:7},{title:"Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.",value:8}];return(o,d)=>(n(),c(h,{density:"compact",items:l}))}},de={__name:"DemoListRounded",setup(v){const l=[{title:"Cupcake sesame snaps dessert marzipan.",value:1,prependIcon:"mdi-instagram"},{title:"Jelly beans jelly-o gummi bears chupa chups marshmallow.",value:2,prependIcon:"mdi-facebook"},{title:"Bonbon macaroon gummies pie jelly",value:3,prependIcon:"mdi-twitter"},{title:"halvah icing marshmallow",value:4,prependIcon:"mdi-instagram"}];return(o,d)=>(n(),c(h,null,{default:t(()=>[(n(),f(V,null,b(l,i=>e(u,{key:i.title,value:i.value,rounded:"xl"},{prepend:t(()=>[e(_,{icon:i.prependIcon,class:"me-3"},null,8,["icon"])]),default:t(()=>[e(L,null,{default:t(()=>[a(I(i.title),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1}))}},ve={__name:"DemoListBasic",setup(v){const l=["Cras justo odio","Dapibus ac facilisis in","Morbi leo risus","Porta ac consectetur ac"];return(o,d)=>(n(),c(h,{items:l}))}},ge={ts:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`,js:`<template>
  <VList
    lines="three"
    density="compact"
    select-strategy="classic"
  >
    <VListSubheader>General</VListSubheader>

    <VListItem value="notifications">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Notifications</VListItemTitle>
      <VListItemSubtitle>Notify me about updates to apps or games that I downloaded</VListItemSubtitle>
    </VListItem>

    <VListItem value="sound">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Sound</VListItemTitle>
      <VListItemSubtitle>Auto-update apps at any time. Data charges may apply</VListItemSubtitle>
    </VListItem>

    <VListItem value="widgets">
      <template #prepend="{ isActive }">
        <VListItemAction start>
          <VCheckbox
            :model-value="isActive"
            color="primary"
            class="mt-2"
          />
        </VListItemAction>
      </template>

      <VListItemTitle>Auto-add widgets</VListItemTitle>
      <VListItemSubtitle>Automatically add home screen widgets when downloads complete</VListItemSubtitle>
    </VListItem>
  </VList>
</template>
`},fe={ts:`<script setup lang="ts">
const items = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus', 'Porta ac consectetur ac']
<\/script>

<template>
  <VList :items="items" />
</template>
`,js:`<script setup>
const items = [
  'Cras justo odio',
  'Dapibus ac facilisis in',
  'Morbi leo risus',
  'Porta ac consectetur ac',
]
<\/script>

<template>
  <VList :items="items" />
</template>
`},Ve={ts:`<script lang="ts" setup>
const items = [
  { title: 'halvah icing marshmallow', value: 1 },
  { title: 'Cake caramels donut danish muffin biscuit', value: 2 },
  { title: 'Chocolate cake pie lollipop', value: 3 },
  { title: 'Apple pie toffee pudding gummi bears', value: 4 },
  { title: 'Jujubes chupa chups cheesecake tart', value: 5 },
  { title: 'Candy fruitcake bonbon sesame snaps dessert', value: 6 },
  { title: 'Candy wafer tiramisu sugar plum sweet.', value: 7 },
  { title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.', value: 8 },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`,js:`<script setup>
const items = [
  {
    title: 'halvah icing marshmallow',
    value: 1,
  },
  {
    title: 'Cake caramels donut danish muffin biscuit',
    value: 2,
  },
  {
    title: 'Chocolate cake pie lollipop',
    value: 3,
  },
  {
    title: 'Apple pie toffee pudding gummi bears',
    value: 4,
  },
  {
    title: 'Jujubes chupa chups cheesecake tart',
    value: 5,
  },
  {
    title: 'Candy fruitcake bonbon sesame snaps dessert',
    value: 6,
  },
  {
    title: 'Candy wafer tiramisu sugar plum sweet.',
    value: 7,
  },
  {
    title: 'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop.',
    value: 8,
  },
]
<\/script>

<template>
  <VList
    density="compact"
    :items="items"
  />
</template>
`},he={ts:`<script lang="ts" setup>
const items = [
  { title: 'My Files', value: 1, prependIcon: 'mdi-folder-outline' },
  { title: 'Shared with me', value: 2, prependIcon: 'mdi-account-multiple-outline' },
  { title: 'Starred', value: 3, prependIcon: 'mdi-star-outline' },
  { title: 'Recent', value: 4, prependIcon: 'mdi-history' },
  { title: 'Offline', value: 5, prependIcon: 'mdi-check-circle-outline' },
  { title: 'Uploads', value: 6, prependIcon: 'mdi-upload-outline' },
  { title: 'Backups', value: 7, prependIcon: 'mdi-cloud-upload-outline' },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'My Files',
    value: 1,
    prependIcon: 'mdi-folder-outline',
  },
  {
    title: 'Shared with me',
    value: 2,
    prependIcon: 'mdi-account-multiple-outline',
  },
  {
    title: 'Starred',
    value: 3,
    prependIcon: 'mdi-star-outline',
  },
  {
    title: 'Recent',
    value: 4,
    prependIcon: 'mdi-history',
  },
  {
    title: 'Offline',
    value: 5,
    prependIcon: 'mdi-check-circle-outline',
  },
  {
    title: 'Uploads',
    value: 6,
    prependIcon: 'mdi-upload-outline',
  },
  {
    title: 'Backups',
    value: 7,
    prependIcon: 'mdi-cloud-upload-outline',
  },
]
<\/script>

<template>
  <VList
    nav
    :lines="false"
  >
    <VListItem
      v-for="item in items"
      :key="item.value"
      :value="item.value"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},_e={ts:`<script setup lang="ts">
interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'mdi-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'mdi-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'mdi-vuejs',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'mdi-angularjs',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'mdi-language-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            bg-color="secondary"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
const languageProgress = [
  {
    avatar: 'mdi-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'mdi-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'mdi-vuejs',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'mdi-angularjs',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'mdi-language-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem>
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.title }}
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            :model-value="progress.amount"
            bg-color="secondary"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
`},be={ts:`<script lang="ts" setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    prependIcon: 'mdi-instagram',

  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    prependIcon: 'mdi-facebook',
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    prependIcon: 'mdi-twitter',
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    prependIcon: 'mdi-instagram',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="item in items"
      :key="item.title"
      :value="item.value"
      rounded="xl"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    title: 'Cupcake sesame snaps dessert marzipan.',
    value: 1,
    prependIcon: 'mdi-instagram',
  },
  {
    title: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    value: 2,
    prependIcon: 'mdi-facebook',
  },
  {
    title: 'Bonbon macaroon gummies pie jelly',
    value: 3,
    prependIcon: 'mdi-twitter',
  },
  {
    title: 'halvah icing marshmallow',
    value: 4,
    prependIcon: 'mdi-instagram',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="item in items"
      :key="item.title"
      :value="item.value"
      rounded="xl"
    >
      <template #prepend>
        <VIcon
          :icon="item.prependIcon"
          class="me-3"
        />
      </template>

      <VListItemTitle>
        {{ item.title }}
      </VListItemTitle>
    </VListItem>
  </VList>
</template>
`},Le={ts:`<script lang="ts" setup>
const items = [
  { text: 'Cupcake sesame snaps dessert marzipan.', icon: 'mdi-instagram' },
  { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: 'mdi-facebook' },
  { text: 'Bonbon macaroon gummies pie jelly', icon: 'mdi-twitter' },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon
          :icon="item.icon"
          class="me-3"
        />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const items = [
  {
    text: 'Cupcake sesame snaps dessert marzipan.',
    icon: 'mdi-instagram',
  },
  {
    text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.',
    icon: 'mdi-facebook',
  },
  {
    text: 'Bonbon macaroon gummies pie jelly',
    icon: 'mdi-twitter',
  },
]
<\/script>

<template>
  <VList>
    <VListItem
      v-for="(item, i) in items"
      :key="i"
      :value="item.text"
      rounded="shaped"
    >
      <template #prepend>
        <VIcon
          :icon="item.icon"
          class="me-3"
        />
      </template>
      <!-- eslint-disable-next-line vue/no-v-text-v-html-on-component -->
      <VListItemTitle v-text="item.text" />
    </VListItem>
  </VList>
</template>
`},Ie={ts:`<script lang="ts" setup>
const open = ref(['Users', 'Admin'])

const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]

const cruds = [
  ['Create', 'mdi-plus-outline'],
  ['Read', 'mdi-file-outline'],
  ['Update', 'mdi-update'],
  ['Delete', 'mdi-delete-outline'],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      title="Home"
      value="Home"
    >
      <template #prepend>
        <VIcon
          size="24"
          icon="mdi-home-outline"
          class="me-3"
        />
      </template>
    </VListItem>

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Users"
        >
          <template #prepend>
            <VIcon
              size="24"
              icon="mdi-account-circle-outline"
              class="me-3"
            />
          </template>
        </VListItem>
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`,js:`<script setup>
const open = ref([
  'Users',
  'Admin',
])

const admins = [
  [
    'Management',
    'mdi-account-multiple-outline',
  ],
  [
    'Settings',
    'mdi-cog-outline',
  ],
]

const cruds = [
  [
    'Create',
    'mdi-plus-outline',
  ],
  [
    'Read',
    'mdi-file-outline',
  ],
  [
    'Update',
    'mdi-update',
  ],
  [
    'Delete',
    'mdi-delete-outline',
  ],
]
<\/script>

<template>
  <VList v-model:opened="open">
    <VListItem
      title="Home"
      value="Home"
    >
      <template #prepend>
        <VIcon
          size="24"
          icon="mdi-home-outline"
          class="me-3"
        />
      </template>
    </VListItem>

    <VListGroup value="Users">
      <template #activator="{ props }">
        <VListItem
          v-bind="props"
          title="Users"
        >
          <template #prepend>
            <VIcon
              size="24"
              icon="mdi-account-circle-outline"
              class="me-3"
            />
          </template>
        </VListItem>
      </template>

      <VListGroup value="Admin">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Admin"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in admins"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>

      <VListGroup value="Actions">
        <template #activator="{ props }">
          <VListItem
            v-bind="props"
            title="Actions"
          />
        </template>

        <VListItem
          v-for="([title, icon], i) in cruds"
          :key="i"
          :value="title"
          :title="title"
        >
          <template #prepend>
            <VIcon
              size="24"
              :icon="icon"
              class="me-3"
            />
          </template>
        </VListItem>
      </VListGroup>
    </VListGroup>
  </VList>
</template>
`},ye={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  { type: 'subheader', title: 'Today' },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const items = [
  {
    type: 'subheader',
    title: 'Today',
  },
  {
    prependAvatar: avatar1,
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar2,
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar3,
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  {
    type: 'divider',
    inset: true,
  },
  {
    prependAvatar: avatar4,
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
]
<\/script>

<template>
  <VList
    lines="three"
    :items="items"
    item-props
  >
    <template #subtitle="{ subtitle }">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="subtitle" />
    </template>
  </VList>
</template>
`},Ae={ts:`<script lang="ts" setup>
const files = [
  {
    color: 'blue',
    icon: 'mdi-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="mdi-folder-outline"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>
  </VList>
</template>
`,js:`<script setup>
const files = [
  {
    color: 'blue',
    icon: 'mdi-clipboard-text',
    subtitle: 'Jan 20, 2014',
    title: 'Vacation itinerary',
  },
  {
    color: 'amber',
    icon: 'mdi-gesture-tap-button',
    subtitle: 'Jan 10, 2014',
    title: 'Kitchen remodel',
  },
]

const folders = [
  {
    subtitle: 'Jan 9, 2014',
    title: 'Photos',
  },
  {
    subtitle: 'Jan 17, 2014',
    title: 'Recipes',
  },
  {
    subtitle: 'Jan 28, 2014',
    title: 'Work',
  },
]
<\/script>

<template>
  <VList lines="two">
    <VListSubheader inset>
      Folders
    </VListSubheader>

    <VListItem
      v-for="folder in folders"
      :key="folder.title"
      :title="folder.title"
      :subtitle="folder.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            icon="mdi-folder-outline"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>

    <VDivider inset />

    <VListSubheader inset>
      Files
    </VListSubheader>

    <VListItem
      v-for="file in files"
      :key="file.title"
      :title="file.title"
      :subtitle="file.subtitle"
    >
      <template #prepend>
        <VAvatar
          color="secondary"
          variant="tonal"
        >
          <VIcon
            :size="26"
            :icon="file.icon"
          />
        </VAvatar>
      </template>

      <template #append>
        <VBtn
          variant="text"
          color="default"
          icon="mdi-information-outline"
        />
      </template>
    </VListItem>
  </VList>
</template>
`},we={ts:`<script setup lang="ts">
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

interface Status {
  'Online': string
  'Away': string
  'Offline': string
  'In Meeting': string
}

interface Users {
  avatar: string
  name: string
  status: keyof Status
  lastVisited: string
}

const users: Users[] = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor: Status = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1 me-2">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-wrap text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'

const users = [
  {
    avatar: avatar1,
    name: 'Caroline Black',
    status: 'Online',
    lastVisited: '13 minutes ago',
  },
  {
    avatar: avatar2,
    name: 'Alfred Copeland',
    status: 'Away',
    lastVisited: '11 minutes ago',
  },
  {
    avatar: avatar3,
    name: 'Celia Schneider',
    status: 'Offline',
    lastVisited: '9 minutes ago',
  },
  {
    avatar: avatar4,
    name: 'Max Rogan',
    status: 'In Meeting',
    lastVisited: '28 minutes ago',
  },
]

const resolveStatusColor = {
  'Online': 'success',
  'Away': 'warning',
  'Offline': 'secondary',
  'In Meeting': 'error',
}
<\/script>

<template>
  <VList
    lines="two"
    border
    rounded
  >
    <template
      v-for="(user, index) of users"
      :key="user.name"
    >
      <VListItem>
        <template #prepend>
          <VAvatar :image="user.avatar" />
        </template>
        <VListItemTitle>
          {{ user.name }}
        </VListItemTitle>
        <VListItemSubtitle class="mt-1 me-2">
          <VBadge
            dot
            location="start center"
            offset-x="2"
            :color="resolveStatusColor[user.status]"
            class="me-3"
          >
            <span class="ms-4">{{ user.status }}</span>
          </VBadge>

          <span class="text-xs text-wrap text-disabled">{{ user.lastVisited }}</span>
        </VListItemSubtitle>

        <template #append>
          <VBtn size="small">
            Add
          </VBtn>
        </template>
      </VListItem>
      <VDivider v-if="index !== users.length - 1" />
    </template>
  </VList>
</template>
`},xe=p("code",null,"v-list",-1),ke=p("code",null,"v-list-item",-1),Se=p("code",null,"rounded",-1),Ce=p("code",null,"density",-1),Te=p("code",null,"default",-1),je=p("code",null,"comfortable",-1),Be=p("code",null,"compact",-1),De=p("code",null,"nav",-1),Je=p("code",null,"v-list-item",-1),ze=p("code",null,"three-line",-1),Pe=p("code",null,"v-list-group",-1),Ue=p("code",null,"v-list-group",-1),Ge=p("code",null,"v-list-item",-1),it={__name:"list",setup(v){return(l,o)=>{const d=ve,i=q,s=de,m=ce,y=pe,A=ue,M=oe,H=ne,O=le,R=ie,F=ee,$=Z;return n(),c(X,{class:"match-height"},{default:t(()=>[e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Basic","no-padding":"",code:fe},{default:t(()=>[e(r,null,{default:t(()=>[xe,a(" component can contain an avatar, content, actions and much more.")]),_:1}),e(r,null,{default:t(()=>[e(d)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Rounded","no-padding":"",code:be},{default:t(()=>[e(r,null,{default:t(()=>[a("You can make "),ke,a(" rounded using "),Se,a(" prop.")]),_:1}),e(r,null,{default:t(()=>[e(s)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Density",code:Ve,"no-padding":""},{default:t(()=>[e(r,null,{default:t(()=>[a("Use "),Ce,a(" prop to adjusts the spacing within the component. Available options are: "),Te,a(", "),je,a(", and "),Be,a(".")]),_:1}),e(r,null,{default:t(()=>[e(m)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Nav","no-padding":"",code:he},{default:t(()=>[e(r,null,{default:t(()=>[a("Lists can receive an alternative "),De,a(" styling that reduces the width "),Je,a(" takes up as well as adding a border radius.")]),_:1}),e(r,null,{default:t(()=>[e(y)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Action and item group","no-padding":"",code:ge},{default:t(()=>[e(r,null,{default:t(()=>[a("A "),ze,a(" list with actions. Utilizing "),Pe,a(", easily connect actions to your tiles.")]),_:1}),e(r,null,{default:t(()=>[e(A)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Sub Group","no-padding":"",code:Ie},{default:t(()=>[e(r,null,{default:t(()=>[a(" Using the "),Ue,a(" component you can create up to 2 levels in depth using the sub-group prop. ")]),_:1}),e(r,null,{default:t(()=>[e(M)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Two lines and subheader","no-padding":"",code:Ae},{default:t(()=>[e(r,null,{default:t(()=>[a("Lists can contain subheaders, dividers, and can contain 1 or more lines. The subtitle will overflow with ellipsis if it extends past one line.")]),_:1}),e(r,null,{default:t(()=>[e(H)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Three Line","no-padding":"",code:ye},{default:t(()=>[e(r,null,{default:t(()=>[a("For three line lists, the subtitle will clamp vertically at 2 lines and then ellipsis. This feature uses line-clamp and is not supported in all browsers.")]),_:1}),e(r,null,{default:t(()=>[e(O)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"User List","no-padding":"",code:we},{default:t(()=>[e(r,null,{default:t(()=>[e(R)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Progress List","no-padding":"",code:_e},{default:t(()=>[e(r,null,{default:t(()=>[e(F)]),_:1})]),_:1},8,["code"])]),_:1}),e(g,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Shaped","no-padding":"",code:Le},{default:t(()=>[e(r,null,{default:t(()=>[a(" Shaped lists have rounded borders on one side of the "),Ge,a(". ")]),_:1}),e(r,null,{default:t(()=>[e($)]),_:1})]),_:1},8,["code"])]),_:1})]),_:1})}}};export{it as default};
