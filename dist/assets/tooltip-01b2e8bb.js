import{o as s,c as _,C as o,n as t,t as n,a2 as l,m,a3 as g,Y as u,s as T,p as a,k as $,b as f}from"./index-30b66760.js";import{V as i}from"./VTooltip-d996192b.js";import{V as S}from"./VImg-c7c2167a.js";import{V as H}from"./VAvatar-2c83efa5.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as b}from"./AppCardCode-514fb21c.js";import{a as d,V as D}from"./VRow-b0db7b1d.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./easing-9f15041e.js";import"./transition-0c6e30e4.js";import"./forwardRefs-a29b5f65.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VDivider-0d474c05.js";const k={class:"demo-space-x"},E=a("span",null,"Tooltip on Icon",-1),I={__name:"DemoTooltipTooltipOnVariousElements",setup(c){return(e,V)=>(s(),_("div",k,[o(l,null,{default:t(()=>[n(" Button "),o(i,{location:"top",activator:"parent"},{default:t(()=>[n(" Tooltip ")]),_:1})]),_:1}),o(H,{color:"info"},{default:t(()=>[o(S,{src:m(g)},null,8,["src"]),o(i,{location:"top",activator:"parent"},{default:t(()=>[n(" Tooltip on Avatar ")]),_:1})]),_:1}),o(i,{location:"top"},{activator:t(({props:r})=>[o(u,T(r,{size:"30",icon:"mdi-account-outline"}),null,16)]),default:t(()=>[E]),_:1})]))}},A={},w={class:"demo-space-x"},j=a("span",null,"Scale Transition",-1),C=a("span",null,"Scroll X Transition",-1),F=a("span",null,"Scroll Y Transition",-1);function X(c,e){return s(),_("div",w,[o(l,null,{default:t(()=>[n(" scale transition "),o(i,{location:"top",transition:"scale-transition",activator:"parent"},{default:t(()=>[j]),_:1})]),_:1}),o(l,null,{default:t(()=>[n(" scroll X transition "),o(i,{location:"top",activator:"parent",transition:"scroll-x-transition"},{default:t(()=>[C]),_:1})]),_:1}),o(l,null,{default:t(()=>[n(" scroll y transition "),o(i,{location:"top",activator:"parent",transition:"scroll-y-transition"},{default:t(()=>[F]),_:1})]),_:1})])}const M=v(A,[["render",X]]),P={class:"demo-space-x"},Y=a("span",null,"Programmatic tooltip",-1),z={__name:"DemoTooltipVModelSupport",setup(c){const e=$(!1);return(V,r)=>(s(),_("div",P,[o(l,{onClick:r[0]||(r[0]=p=>e.value=!m(e))},{default:t(()=>[n(" toggle tooltip ")]),_:1}),o(i,{"model-value":m(e),location:"top"},{activator:t(({props:p})=>[o(u,T(p,{icon:"mdi-instagram"}),null,16)]),default:t(()=>[Y]),_:1},8,["model-value"])]))}},N={},L=a("span",null,"Open Delay On Hover",-1),U=a("span",null,"Open Delay On Hover",-1);function R(c,e){return s(),f(l,{variant:"outlined"},{default:t(()=>[L,n(),o(i,{"open-delay":"500",location:"top",activator:"parent"},{default:t(()=>[U]),_:1})]),_:1})}const q=v(N,[["render",R]]),G={},J={class:"demo-space-x"},K=a("span",null,"Open On Hover",-1),Q=a("span",null,"Open On click",-1),W=a("span",null,"Open On Hover + Focus",-1);function Z(c,e){return s(),_("div",J,[o(l,{variant:"outlined"},{default:t(()=>[K,o(i,{activator:"parent",location:"top"},{default:t(()=>[n(" Open On Hover ")]),_:1})]),_:1}),o(l,{variant:"outlined",color:"primary"},{default:t(()=>[Q,o(i,{"open-on-click":"","open-on-hover":!1,location:"top",activator:"parent"},{default:t(()=>[n(" Open On click ")]),_:1})]),_:1}),o(l,{variant:"outlined"},{default:t(()=>[W,o(i,{"open-on-focus":"",location:"top",activator:"parent"},{default:t(()=>[n(" Open On Hover + Focus ")]),_:1})]),_:1})])}const oo=v(G,[["render",Z]]),to={},no={class:"demo-space-x"};function ao(c,e){return s(),_("div",no,[o(l,{variant:"tonal"},{default:t(()=>[n(" Tooltip on End "),o(i,{activator:"parent",location:"end"},{default:t(()=>[n(" End Tooltip ")]),_:1})]),_:1}),o(l,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Start "),o(i,{activator:"parent",location:"start"},{default:t(()=>[n(" Start Tooltip ")]),_:1})]),_:1}),o(l,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Top "),o(i,{activator:"parent",location:"top"},{default:t(()=>[n(" Top Tooltip ")]),_:1})]),_:1}),o(l,{variant:"tonal"},{default:t(()=>[n(" Tooltip on Bottom "),o(i,{activator:"parent",location:"bottom"},{default:t(()=>[n(" Bottom Tooltip ")]),_:1})]),_:1})])}const io=v(to,[["render",ao]]),lo={ts:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`,js:`<template>
  <!-- Delay on open -->
  <VBtn variant="outlined">
    <span>Open Delay On Hover</span> <VTooltip
      open-delay="500"
      location="top"
      activator="parent"
    >
      <span>Open Delay On Hover</span>
    </VTooltip>
  </VBtn>
</template>
`},eo={ts:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- open on hover -->
    <VBtn variant="outlined">
      <span>Open On Hover</span>
      <VTooltip
        activator="parent"
        location="top"
      >
        Open On Hover
      </VTooltip>
    </VBtn>

    <!-- open on click -->
    <VBtn
      variant="outlined"
      color="primary"
    >
      <span>Open On click</span>

      <VTooltip
        open-on-click
        :open-on-hover="false"
        location="top"
        activator="parent"
      >
        Open On click
      </VTooltip>
    </VBtn>

    <!-- open on focus -->
    <VBtn variant="outlined">
      <span>Open On Hover + Focus</span>
      <VTooltip
        open-on-focus
        location="top"
        activator="parent"
      >
        Open On Hover + Focus
      </VTooltip>
    </VBtn>
  </div>
</template>
`},po={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Tooltip on End
      <VTooltip
        activator="parent"
        location="end"
      >
        End Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Start
      <VTooltip
        activator="parent"
        location="start"
      >
        Start Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Top
      <VTooltip
        activator="parent"
        location="top"
      >
        Top Tooltip
      </VTooltip>
    </VBtn>

    <VBtn variant="tonal">
      Tooltip on Bottom
      <VTooltip
        activator="parent"
        location="bottom"
      >
        Bottom Tooltip
      </VTooltip>
    </VBtn>
  </div>
</template>
`},so={ts:`<script setup lang="ts">
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="mdi-account-outline"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
import avatar4 from '@images/avatars/avatar-4.png'
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn>
      Button
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip
      </VTooltip>
    </VBtn>

    <VAvatar color="info">
      <VImg :src="avatar4" />
      <VTooltip
        location="top"
        activator="parent"
      >
        Tooltip on Avatar
      </VTooltip>
    </VAvatar>

    <VTooltip location="top">
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          size="30"
          icon="mdi-account-outline"
        />
      </template>
      <span>Tooltip on Icon</span>
    </VTooltip>
  </div>
</template>
`},co={ts:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <!-- Scale transition -->
    <VBtn>
      scale transition
      <VTooltip
        location="top"
        transition="scale-transition"
        activator="parent"
      >
        <span>Scale Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll x transition -->
    <VBtn>
      scroll X transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-x-transition"
      >
        <span>Scroll X Transition</span>
      </VTooltip>
    </VBtn>

    <!-- Scroll y transition -->
    <VBtn>
      scroll y transition
      <VTooltip
        location="top"
        activator="parent"
        transition="scroll-y-transition"
      >
        <span>Scroll Y Transition</span>
      </VTooltip>
    </VBtn>
  </div>
</template>
`},ro={ts:`<script lang="ts" setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="mdi-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`,js:`<script setup>
const isTooltipVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn @click="isTooltipVisible = !isTooltipVisible">
      toggle tooltip
    </VBtn>

    <VTooltip
      :model-value="isTooltipVisible"
      location="top"
    >
      <template #activator="{ props }">
        <VIcon
          v-bind="props"
          icon="mdi-instagram"
        />
      </template>
      <span>Programmatic tooltip</span>
    </VTooltip>
  </div>
</template>
`},_o=a("p",null,[n("Use the "),a("code",null,"location"),n(" prop to specify on which side of the element the tooltip should show")],-1),vo=a("p",null,[n("Delay (in ms) after which tooltip opens (when "),a("code",null,"open-on-hover"),n(" prop is set to true)")],-1),mo=a("p",null,[n("Tooltip visibility can be programmatically changed using "),a("code",null,"v-model"),n(".")],-1),Vo=a("p",null,[n("Use "),a("code",null,"transition"),n(" prop to sets the component transition.")],-1),uo=a("p",null,"Tooltips can wrap any element.",-1),Io={__name:"tooltip",setup(c){return(e,V)=>{const r=io,p=b,B=oo,O=q,h=z,x=M,y=I;return s(),f(D,null,{default:t(()=>[o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Location",code:po},{default:t(()=>[_o,o(r)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Events",code:eo},{default:t(()=>[o(B)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Delay On Hover",code:lo},{default:t(()=>[vo,o(O)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"V-Model Support",code:ro},{default:t(()=>[mo,o(h)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Transition",code:co},{default:t(()=>[Vo,o(x)]),_:1},8,["code"])]),_:1}),o(d,{cols:"12"},{default:t(()=>[o(p,{title:"Tooltip on Various Elements",code:so},{default:t(()=>[uo,o(y)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Io as default};
