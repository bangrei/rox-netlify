import{a as l,V as T}from"./VTabs-7c012160.js";import{k,w as N,o as u,c as d,C as e,n as t,F as p,a as g,m,b as I,t as s,v as w,$ as V,p as n,a2 as x,Y as h}from"./index-30b66760.js";import{a as f,V as y}from"./VWindowItem-25e445b0.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{a as b,V as W}from"./VRow-b0db7b1d.js";import{_ as A}from"./AppCardCode-514fb21c.js";import"./VSlideGroup-caf298cf.js";import"./easing-9f15041e.js";import"./lazy-fe618c41.js";import"./transition-0c6e30e4.js";import"./ssrBoot-050ef406.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./VDivider-0d474c05.js";const O={class:"text-center mt-9"},U={__name:"DemoTabsDynamic",setup(v){const a=k(3),c=k(0);return N(a,i=>{c.value=i-1}),(i,o)=>(u(),d(p,null,[e(T,{modelValue:m(c),"onUpdate:modelValue":o[0]||(o[0]=r=>V(c)?c.value=r:null)},{default:t(()=>[(u(!0),d(p,null,g(m(a),r=>(u(),I(l,{key:r,value:r},{default:t(()=>[s(" Tab "+w(r),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),n("div",O,[e(x,{disabled:!m(a),variant:"text",onClick:o[1]||(o[1]=r=>a.value--)},{default:t(()=>[s(" Remove Tab ")]),_:1},8,["disabled"]),e(x,{variant:"text",onClick:o[2]||(o[2]=r=>a.value++)},{default:t(()=>[s(" Add Tab ")]),_:1})])],64))}},R={class:"text-center"},E="Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.",M={__name:"DemoTabsProgrammaticNavigation",setup(v){const a=k(0),c=["Appetizers","Entrees","Deserts","Cocktails"],i=c.length,o=()=>{a.value!==1&&(a.value-=1)},r=()=>{a.value!==i&&(a.value+=1)};return(P,q)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":q[0]||(q[0]=_=>V(a)?a.value=_:null),grow:""},{default:t(()=>[(u(!0),d(p,null,g(c.length,_=>(u(),I(l,{key:_,value:_},{default:t(()=>[s(w(c[_-1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":q[1]||(q[1]=_=>V(a)?a.value=_:null),class:"mt-5"},{default:t(()=>[(u(!0),d(p,null,g(c.length,_=>(u(),I(f,{key:_,value:_},{default:t(()=>[s(w(E))]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),n("div",R,[e(x,{variant:"text",disabled:m(a)===1,onClick:o},{default:t(()=>[s(" Previous ")]),_:1},8,["disabled"]),e(x,{variant:"text",disabled:m(a)===m(i),onClick:r},{default:t(()=>[s(" Next ")]),_:1},8,["disabled"])])],64))}},H="hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.",G={__name:"DemoTabsGrow",setup(v){const a=k("Appetizers"),c=["Appetizers","Entrees","Deserts","Cocktails"];return(i,o)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":o[0]||(o[0]=r=>V(a)?a.value=r:null),grow:""},{default:t(()=>[(u(),d(p,null,g(c,r=>e(l,{key:r,value:r},{default:t(()=>[s(w(r),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":o[1]||(o[1]=r=>V(a)?a.value=r:null),class:"mt-6"},{default:t(()=>[(u(),d(p,null,g(c,r=>e(f,{key:r,value:r},{default:t(()=>[s(w(H))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},L={};function Y(v,a){return u(),I(T,{"fixed-tabs":""},{default:t(()=>[e(l,null,{default:t(()=>[s(" Fixed Tab 1 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 2 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 3 ")]),_:1}),e(l,null,{default:t(()=>[s(" Fixed Tab 4 ")]),_:1})]),_:1})}const J=C(L,[["render",Y]]),K={};function Q(v,a){return u(),I(T,{"next-icon":"mdi-arrow-right","prev-icon":"mdi-arrow-left"},{default:t(()=>[(u(),d(p,null,g(10,c=>e(l,{key:c},{default:t(()=>[s(" Item "+w(c),1)]),_:2},1024)),64))]),_:1})}const X=C(K,[["render",Q]]),Z={};function ee(v,a){return u(),I(T,null,{default:t(()=>[(u(),d(p,null,g(10,c=>e(l,{key:c,value:c},{default:t(()=>[s(" Item "+w(c),1)]),_:2},1032,["value"])),64))]),_:1})}const te=C(Z,[["render",ee]]),ae={};function se(v,a){return u(),d(p,null,[e(T,null,{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(T,{"align-tabs":"center"},{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1}),e(T,{"align-tabs":"end"},{default:t(()=>[e(l,null,{default:t(()=>[s("Home")]),_:1}),e(l,null,{default:t(()=>[s("Service")]),_:1}),e(l,null,{default:t(()=>[s("Account")]),_:1})]),_:1})],64)}const oe=C(ae,[["render",se]]),ne=n("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),ie=n("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),le=n("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),ue=n("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),ce=n("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),re=n("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),me={__name:"DemoTabsVerticalPill",setup(v){const a=k(0);return(c,i)=>(u(),I(W,null,{default:t(()=>[e(b,{cols:"12",sm:"4"},{default:t(()=>[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=o=>V(a)?a.value=o:null),direction:"vertical",class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-account-outline"}),s(" Option 1 ")]),_:1}),e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-lock-outline",size:22}),s(" Option 2 ")]),_:1}),e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-access-point",size:22}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"8"},{default:t(()=>[e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=o=>V(a)?a.value=o:null)},{default:t(()=>[e(f,null,{default:t(()=>[ne,ie]),_:1}),e(f,null,{default:t(()=>[le,ue]),_:1}),e(f,null,{default:t(()=>[ce,re]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},de=n("p",null," Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero. ",-1),pe=n("p",{class:"mb-0"}," Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio. ",-1),be=n("p",null," Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis. ",-1),Ve=n("p",{class:"mb-0"}," Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. ",-1),Te=n("p",null," Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. ",-1),ve=n("p",{class:"mb-0"}," Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis. ",-1),_e={__name:"DemoTabsVertical",setup(v){const a=k(0);return(c,i)=>(u(),I(W,null,{default:t(()=>[e(b,{cols:"12",sm:"4"},{default:t(()=>[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=o=>V(a)?a.value=o:null),direction:"vertical"},{default:t(()=>[e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-account-outline"}),s(" Option 1 ")]),_:1}),e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-lock-outline",size:22}),s(" Option 2 ")]),_:1}),e(l,null,{default:t(()=>[e(h,{start:"",icon:"mdi-access-point",size:22}),s(" Option 3 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(b,{cols:"12",sm:"8"},{default:t(()=>[e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=o=>V(a)?a.value=o:null)},{default:t(()=>[e(f,null,{default:t(()=>[de,pe]),_:1}),e(f,null,{default:t(()=>[be,Ve]),_:1}),e(f,null,{default:t(()=>[Te,ve]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}},fe=n("span",null,"Recent",-1),ge=n("span",null,"Favorites",-1),we=n("span",null,"Nearby",-1),he="Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.",ke={__name:"DemoTabsStacked",setup(v){const a=k("tab-1");return(c,i)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=o=>V(a)?a.value=o:null),grow:"",stacked:""},{default:t(()=>[e(l,{value:"tab-1"},{default:t(()=>[e(h,{icon:"mdi-phone",class:"mb-2"}),fe]),_:1}),e(l,{value:"tab-2"},{default:t(()=>[e(h,{icon:"mdi-heart-outline",class:"mb-2"}),ge]),_:1}),e(l,{value:"tab-3"},{default:t(()=>[e(h,{icon:"mdi-account-box-outline",class:"mb-2"}),we]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=o=>V(a)?a.value=o:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,g(3,o=>e(f,{key:o,value:`tab-${o}`},{default:t(()=>[s(w(he))]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])],64))}},Ie="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",ye={__name:"DemoTabsBasicPill",setup(v){const a=k(0);return(c,i)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=o=>V(a)?a.value=o:null),class:"v-tabs-pill"},{default:t(()=>[e(l,null,{default:t(()=>[s("Tab One")]),_:1}),e(l,null,{default:t(()=>[s("Tab Two")]),_:1}),e(l,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=o=>V(a)?a.value=o:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,g(3,o=>e(f,{key:o},{default:t(()=>[s(w(Ie))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},qe="Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.",xe={__name:"DemoTabsBasic",setup(v){const a=k(0);return(c,i)=>(u(),d(p,null,[e(T,{modelValue:m(a),"onUpdate:modelValue":i[0]||(i[0]=o=>V(a)?a.value=o:null)},{default:t(()=>[e(l,null,{default:t(()=>[s("Tab One")]),_:1}),e(l,null,{default:t(()=>[s("Tab Two")]),_:1}),e(l,null,{default:t(()=>[s("Tab Three")]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:m(a),"onUpdate:modelValue":i[1]||(i[1]=o=>V(a)?a.value=o:null),class:"mt-5"},{default:t(()=>[(u(),d(p,null,g(3,o=>e(f,{key:o},{default:t(()=>[s(w(qe))]),_:2},1024)),64))]),_:1},8,["modelValue"])],64))}},Ce={ts:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`,js:`<template>
  <!-- Default -->
  <VTabs>
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- Center -->
  <VTabs align-tabs="center">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>

  <!-- End -->
  <VTabs align-tabs="end">
    <VTab>Home</VTab>
    <VTab>Service</VTab>
    <VTab>Account</VTab>
  </VTabs>
</template>
`},We={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},Pe={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},De={ts:`<template>
  <VTabs
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs
    next-icon="mdi-arrow-right"
    prev-icon="mdi-arrow-left"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},Se={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},je={ts:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs fixed-tabs>
    <VTab>
      Fixed Tab 1
    </VTab>
    <VTab>
      Fixed Tab 2
    </VTab>
    <VTab>
      Fixed Tab 3
    </VTab>
    <VTab>
      Fixed Tab 4
    </VTab>
  </VTabs>
</template>
`},Fe={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice dragée macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},$e={ts:`<template>
  <VTabs>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`,js:`<template>
  <VTabs>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
</template>
`},ze={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},Be={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="mdi-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="mdi-heart-outline"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="mdi-account-box-outline"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="mdi-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="mdi-heart-outline"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="mdi-account-box-outline"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},Ne={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab>
          <VIcon
            start
            icon="mdi-account-outline"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-lock-outline"
            :size="22"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-access-point"
            :size="22"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab>
          <VIcon
            start
            icon="mdi-account-outline"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-lock-outline"
            :size="22"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-access-point"
            :size="22"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},Ae={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="mdi-account-outline"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-lock-outline"
            :size="22"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-access-point"
            :size="22"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="mdi-account-outline"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-lock-outline"
            :size="22"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="mdi-access-point"
            :size="22"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="12"
      sm="8"
    >
      <VWindow v-model="currentTab">
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},Oe=n("p",null,[s("The "),n("code",null,"v-tabs"),s(" component is used for hiding content behind a selectable item.")],-1),Ue=n("p",null,[s("Use our custom class "),n("code",null,".v-tabs-pill"),s(" along with "),n("code",null,"v-tabs"),s(" component to style pill tabs.")],-1),Re=n("p",null,[s("Using "),n("code",null,"stacked"),s(" prop you can have buttons that use both icons and text.")],-1),Ee=n("p",null,[s("The "),n("code",null,"vertical"),s(" prop allows for "),n("code",null,"v-tab"),s(" components to stack vertically.")],-1),Me=n("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),He=n("p",null,[s("Use "),n("code",null,"align-tabs"),s(" prop to change the tabs alignment.")],-1),Ge=n("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),Le=n("p",null,[n("code",null,"prev-icon"),s(" and "),n("code",null,"next-icon"),s(" props can be used for applying custom pagination icons.")],-1),Ye=n("p",null,[s("The "),n("code",null,"fixed-tabs"),s(" prop forces "),n("code",null,"v-tab"),s(" to take up all available space up to the maximum width (300px).")],-1),Je=n("p",null,[s("The "),n("code",null,"grow"),s(" prop will make the tab items take up all available space with no limit.")],-1),Ke=n("p",null,[s("Tabs can be dynamically added and removed. This allows you to update to any number and the "),n("code",null,"v-tabs"),s(" component will react.")],-1),pt={__name:"tabs",setup(v){return(a,c)=>{const i=xe,o=A,r=ye,P=ke,q=_e,_=me,D=oe,S=te,j=X,F=J,$=G,z=M,B=U;return u(),I(W,{class:"match-height"},{default:t(()=>[e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:We},{default:t(()=>[Oe,e(i)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic Pill",code:Pe},{default:t(()=>[Ue,e(r)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Stacked",code:Be},{default:t(()=>[Re,e(P)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical",code:Ne},{default:t(()=>[Ee,e(q)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical Pill",code:Ae},{default:t(()=>[Me,e(_)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Alignment",code:Ce},{default:t(()=>[He,e(D)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Pagination",code:$e},{default:t(()=>[Ge,e(S)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom Icons",code:De},{default:t(()=>[Le,e(j)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(o,{title:"Fixed",code:je},{default:t(()=>[Ye,e(F)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12"},{default:t(()=>[e(o,{title:"Grow",code:Fe},{default:t(()=>[Je,e($)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Programmatic Navigation",code:ze},{default:t(()=>[e(z)]),_:1},8,["code"])]),_:1}),e(b,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Dynamic",code:Se},{default:t(()=>[Ke,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{pt as default};
