import{aw as F,bh as R,bl as A,aD as j,aH as L,aG as M,bg as q,aX as H,bj as N,bn as J,aI as W,aJ as G,aL as h,k as V,w as O,I as z,aN as X,C as a,aO as Y,b0 as K,s as D,o as _,c as x,n as t,t as e,a2 as u,m as S,$ as p,Y as B,F as T,b as Q,p as m}from"./index-30b66760.js";import{m as Z,u as aa,V as U}from"./VOverlay-17b4c386.js";import{f as ta}from"./forwardRefs-a29b5f65.js";import{_ as ea}from"./AppCardCode-514fb21c.js";import{a as g,V as na}from"./VRow-b0db7b1d.js";import"./lazy-fe618c41.js";import"./easing-9f15041e.js";import"./transition-0c6e30e4.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./VDivider-0d474c05.js";const f=F()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...R({location:"bottom"}),...A(),...j(),...L(),...M(),...q(Z({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":d=>!0},setup(d,l){let{slots:c}=l;const n=H(d,"modelValue"),{locationStyles:i}=N(d),{positionClasses:b}=J(d),{scopeId:v}=aa(),{themeClasses:s}=W(d),{colorClasses:k,colorStyles:I,variantClasses:w}=G(d),{roundedClasses:o}=h(d),r=V();O(n,C),O(()=>d.timeout,C),z(()=>{n.value&&C()});let $=-1;function C(){window.clearTimeout($);const y=Number(d.timeout);!n.value||y===-1||($=window.setTimeout(()=>{n.value=!1},y))}function P(){window.clearTimeout($)}return X(()=>{const[y]=U.filterProps(d);return a(U,D({ref:r,class:["v-snackbar",{"v-snackbar--active":n.value,"v-snackbar--multi-line":d.multiLine&&!d.vertical,"v-snackbar--vertical":d.vertical},b.value,d.class],style:d.style},y,{modelValue:n.value,"onUpdate:modelValue":E=>n.value=E,contentProps:D({class:["v-snackbar__wrapper",s.value,k.value,o.value,w.value],style:[i.value,I.value],onPointerenter:P,onPointerleave:C},y.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},v),{default:()=>[Y(!1,"v-snackbar"),c.default&&a("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[c.default()]),c.actions&&a(K,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[a("div",{class:"v-snackbar__actions"},[c.actions()])]})],activator:c.activator})}),ta({},r)}}),la={class:"demo-space-x"},ia={__name:"DemoSnackbarTransition",setup(d){const l=V(!1),c=V(!1),n=V(!1);return(i,b)=>(_(),x("div",la,[a(u,{onClick:b[0]||(b[0]=v=>l.value=!0)},{default:t(()=>[e(" fade snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":b[1]||(b[1]=v=>p(l)?l.value=v:null),transition:"fade-transition",location:"top start"},{default:t(()=>[e(" I'm a fade transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[2]||(b[2]=v=>c.value=!0)},{default:t(()=>[e(" Scale snackbar ")]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":b[3]||(b[3]=v=>p(c)?c.value=v:null),transition:"scale-transition",location:"bottom end"},{default:t(()=>[e(" I'm a scale transition snackbar. ")]),_:1},8,["modelValue"]),a(u,{onClick:b[4]||(b[4]=v=>n.value=!0)},{default:t(()=>[e(" scroll y reverse ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":b[5]||(b[5]=v=>p(n)?n.value=v:null),transition:"scroll-y-reverse-transition",location:"top end"},{default:t(()=>[e(" I'm a scroll y reverse transition snackbar. ")]),_:1},8,["modelValue"])]))}},oa={class:"demo-space-x"},sa={__name:"DemoSnackbarVariants",setup(d){const l=V(!1),c=V(!1),n=V(!1),i=V(!1),b=V(!1);return(v,s)=>(_(),x("div",oa,[a(u,{onClick:s[0]||(s[0]=k=>l.value=!0)},{default:t(()=>[e(" Default ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":s[1]||(s[1]=k=>p(l)?l.value=k:null),location:"top start"},{default:t(()=>[e(" Jelly chocolate bar candy canes apple pie. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[2]||(s[2]=k=>c.value=!0)},{default:t(()=>[e(" tonal ")]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":s[3]||(s[3]=k=>p(c)?c.value=k:null),location:"top end",variant:"tonal"},{default:t(()=>[e(" Ice cream cake candy canes. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[4]||(s[4]=k=>n.value=!0)},{default:t(()=>[e(" Text ")]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":s[5]||(s[5]=k=>p(n)?n.value=k:null),location:"end center",variant:"text"},{default:t(()=>[e(" Pie icing biscuit soufflé liquorice topping. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[6]||(s[6]=k=>i.value=!0)},{default:t(()=>[e(" Outlined ")]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":s[7]||(s[7]=k=>p(i)?i.value=k:null),location:"bottom end",variant:"outlined",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"]),a(u,{onClick:s[8]||(s[8]=k=>b.value=!0)},{default:t(()=>[e(" Flat ")]),_:1}),a(f,{modelValue:S(b),"onUpdate:modelValue":s[9]||(s[9]=k=>p(b)?b.value=k:null),location:"bottom start",variant:"flat",color:"error"},{default:t(()=>[e(" Oat cake caramels sesame snaps candy. ")]),_:1},8,["modelValue"])]))}},ra={class:"demo-space-x"},ca={__name:"DemoSnackbarPosition",setup(d){const l=V(!1),c=V(!1),n=V(!1),i=V(!1),b=V(!1),v=V(!1),s=V(!1),k=V(!1),I=V(!1);return(w,o)=>(_(),x("div",ra,[a(u,{icon:"",variant:"text",onClick:o[0]||(o[0]=r=>c.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-up"})]),_:1}),a(f,{modelValue:S(c),"onUpdate:modelValue":o[1]||(o[1]=r=>p(c)?c.value=r:null),location:"top"},{default:t(()=>[e(" I'm a top snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[2]||(o[2]=r=>n.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-top-right"})]),_:1}),a(f,{modelValue:S(n),"onUpdate:modelValue":o[3]||(o[3]=r=>p(n)?n.value=r:null),location:"top end"},{default:t(()=>[e(" I'm a top right snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[4]||(o[4]=r=>s.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-right"})]),_:1}),a(f,{modelValue:S(s),"onUpdate:modelValue":o[5]||(o[5]=r=>p(s)?s.value=r:null),location:"end center"},{default:t(()=>[e(" I'm a center end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[6]||(o[6]=r=>i.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-bottom-right"})]),_:1}),a(f,{modelValue:S(i),"onUpdate:modelValue":o[7]||(o[7]=r=>p(i)?i.value=r:null),location:"bottom end"},{default:t(()=>[e(" I'm a bottom end snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[8]||(o[8]=r=>b.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-down"})]),_:1}),a(f,{modelValue:S(b),"onUpdate:modelValue":o[9]||(o[9]=r=>p(b)?b.value=r:null)},{default:t(()=>[e(" I'm a bottom snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[10]||(o[10]=r=>v.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-bottom-left"})]),_:1}),a(f,{modelValue:S(v),"onUpdate:modelValue":o[11]||(o[11]=r=>p(v)?v.value=r:null),location:"bottom start"},{default:t(()=>[e(" I'm a bottom start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[12]||(o[12]=r=>k.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-left"})]),_:1}),a(f,{modelValue:S(k),"onUpdate:modelValue":o[13]||(o[13]=r=>p(k)?k.value=r:null),location:"start center"},{default:t(()=>[e(" I'm a center start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[14]||(o[14]=r=>l.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-top-left"})]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":o[15]||(o[15]=r=>p(l)?l.value=r:null),location:"top start"},{default:t(()=>[e(" I'm a top start snackbar. ")]),_:1},8,["modelValue"]),a(u,{icon:"",variant:"text",onClick:o[16]||(o[16]=r=>I.value=!0)},{default:t(()=>[a(B,{icon:"mdi-arrow-collapse-all"})]),_:1}),a(f,{modelValue:S(I),"onUpdate:modelValue":o[17]||(o[17]=r=>p(I)?I.value=r:null),location:"center"},{default:t(()=>[e(" I'm a center snackbar. ")]),_:1},8,["modelValue"])]))}},ba={__name:"DemoSnackbarVertical",setup(d){const l=V(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[3]||(n[3]=i=>p(l)?l.value=i:null),vertical:""},{actions:t(()=>[a(u,{color:"success",onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Undo ")]),_:1}),a(u,{color:"error",onClick:n[2]||(n[2]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy. ")]),_:1},8,["modelValue"])],64))}},ua={__name:"DemoSnackbarTimeout",setup(d){const l=V(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[1]||(n[1]=i=>p(l)?l.value=i:null),timeout:2e3},{default:t(()=>[e(" My timeout is set to 2000. ")]),_:1},8,["modelValue"])],64))}},da={__name:"DemoSnackbarMultiLine",setup(d){const l=V(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[2]||(n[2]=i=>p(l)?l.value=i:null),"multi-line":""},{actions:t(()=>[a(u,{color:"error",onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" I am a multi-line snackbar. I can have more than one line. This is another line that is quite long. ")]),_:1},8,["modelValue"])],64))}},ma={__name:"DemoSnackbarWithAction",setup(d){const l=V(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[2]||(n[2]=i=>p(l)?l.value=i:null)},{actions:t(()=>[a(u,{color:"error",onClick:n[1]||(n[1]=i=>l.value=!1)},{default:t(()=>[e(" Close ")]),_:1})]),default:t(()=>[e(" Hello, I'm a snackbar with actions. ")]),_:1},8,["modelValue"])],64))}},ka={__name:"DemoSnackbarBasic",setup(d){const l=V(!1);return(c,n)=>(_(),x(T,null,[a(u,{onClick:n[0]||(n[0]=i=>l.value=!0)},{default:t(()=>[e(" Open Snackbar ")]),_:1}),a(f,{modelValue:S(l),"onUpdate:modelValue":n[1]||(n[1]=i=>p(l)?l.value=i:null)},{default:t(()=>[e(" Hello, I'm a snackbar ")]),_:1},8,["modelValue"])],64))}},Va={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- SnackBar -->
  <VSnackbar v-model="isSnackbarVisible">
    Hello, I'm a snackbar
  </VSnackbar>
</template>
`},Sa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    multi-line
  >
    I am a multi-line snackbar. I can have more than one line. This is another line that is quite long.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},pa={ts:`<script lang="ts" setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="mdi-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="mdi-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="mdi-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="mdi-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarTopStartVisible = ref(false)
const isSnackbarTopVisible = ref(false)
const isSnackbarTopEndVisible = ref(false)
const isSnackbarBottomEndVisible = ref(false)
const isSnackbarBottomVisible = ref(false)
const isSnackbarBottomStartVisible = ref(false)
const isSnackbarEndVisible = ref(false)
const isSnackbarStartVisible = ref(false)
const isSnackbarCenteredVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- top  -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopVisible = true"
    >
      <VIcon icon="mdi-arrow-up" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopVisible"
      location="top"
    >
      I'm a top snackbar.
    </VSnackbar>

    <!-- top end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopEndVisible = true"
    >
      <VIcon icon="mdi-arrow-top-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopEndVisible"
      location="top end"
    >
      I'm a top right snackbar.
    </VSnackbar>

    <!-- center end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarEndVisible = true"
    >
      <VIcon icon="mdi-arrow-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarEndVisible"
      location="end center"
    >
      I'm a center end snackbar.
    </VSnackbar>

    <!-- bottom end -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomEndVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-right" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomEndVisible"
      location="bottom end"
    >
      I'm a bottom end snackbar.
    </VSnackbar>

    <!-- bottom -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomVisible = true"
    >
      <VIcon icon="mdi-arrow-down" />
    </VBtn>

    <VSnackbar v-model="isSnackbarBottomVisible">
      I'm a bottom snackbar.
    </VSnackbar>

    <!-- bottom start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarBottomStartVisible = true"
    >
      <VIcon icon="mdi-arrow-bottom-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarBottomStartVisible"
      location="bottom start"
    >
      I'm a bottom start snackbar.
    </VSnackbar>

    <!-- center start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarStartVisible = true"
    >
      <VIcon icon="mdi-arrow-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarStartVisible"
      location="start center"
    >
      I'm a center start snackbar.
    </VSnackbar>

    <!-- top start -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarTopStartVisible = true"
    >
      <VIcon icon="mdi-arrow-top-left" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarTopStartVisible"
      location="top start"
    >
      I'm a top start snackbar.
    </VSnackbar>

    <!-- center -->
    <VBtn
      icon
      variant="text"
      @click="isSnackbarCenteredVisible = true"
    >
      <VIcon icon="mdi-arrow-collapse-all" />
    </VBtn>

    <VSnackbar
      v-model="isSnackbarCenteredVisible"
      location="center"
    >
      I'm a center snackbar.
    </VSnackbar>
  </div>
</template>
`},fa={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar
    v-model="isSnackbarVisible"
    :timeout="2000"
  >
    My timeout is set to 2000.
  </VSnackbar>
</template>
`},va={ts:`<script lang="ts" setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isSnackbarFadeVisible = ref(false)
const isSnackbarScaleVisible = ref(false)
const isSnackbarScrollReverseVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- fade -->
    <VBtn @click="isSnackbarFadeVisible = true">
      fade snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarFadeVisible"
      transition="fade-transition"
      location="top start"
    >
      I'm a fade transition snackbar.
    </VSnackbar>

    <!-- scale -->
    <VBtn @click="isSnackbarScaleVisible = true">
      Scale snackbar
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScaleVisible"
      transition="scale-transition"
      location="bottom end"
    >
      I'm a scale transition snackbar.
    </VSnackbar>

    <!-- scroll y reverse -->
    <VBtn @click="isSnackbarScrollReverseVisible = true">
      scroll y reverse
    </VBtn>

    <VSnackbar
      v-model="isSnackbarScrollReverseVisible"
      transition="scroll-y-reverse-transition"
      location="top end"
    >
      I'm a scroll y reverse transition snackbar.
    </VSnackbar>
  </div>
</template>
`},Ba={ts:`<script lang="ts" setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`,js:`<script setup>
const isDefaultSnackbarVisible = ref(false)
const isTonalSnackbarVisible = ref(false)
const isTextSnackbarVisible = ref(false)
const isOutlinedSnackbarVisible = ref(false)
const isFlatSnackbarVisible = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <!-- Default toggle btn -->
    <VBtn @click="isDefaultSnackbarVisible = true">
      Default
    </VBtn>

    <!-- Default snackbar -->
    <VSnackbar
      v-model="isDefaultSnackbarVisible"
      location="top start"
    >
      Jelly chocolate bar candy canes apple pie.
    </VSnackbar>

    <!-- tonal toggle btn -->
    <VBtn @click="isTonalSnackbarVisible = true">
      tonal
    </VBtn>

    <!-- tonal snackbar -->
    <VSnackbar
      v-model="isTonalSnackbarVisible"
      location="top end"
      variant="tonal"
    >
      Ice cream cake candy canes.
    </VSnackbar>

    <!-- Text toggle btn -->
    <VBtn @click="isTextSnackbarVisible = true">
      Text
    </VBtn>

    <!-- Text snackbar -->
    <VSnackbar
      v-model="isTextSnackbarVisible"
      location="end center"
      variant="text"
    >
      Pie icing biscuit soufflé liquorice topping.
    </VSnackbar>

    <!-- Outline toggle btn -->
    <VBtn @click="isOutlinedSnackbarVisible = true">
      Outlined
    </VBtn>

    <!-- Outline snackbar -->
    <VSnackbar
      v-model="isOutlinedSnackbarVisible"
      location="bottom end"
      variant="outlined"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>

    <!-- flat toggle btn -->
    <VBtn @click="isFlatSnackbarVisible = true">
      Flat
    </VBtn>

    <!-- flat snackbar -->
    <VSnackbar
      v-model="isFlatSnackbarVisible"
      location="bottom start"
      variant="flat"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </VSnackbar>
  </div>
</template>
`},_a={ts:`<script lang="ts" setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisible = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisible = true">
    Open Snackbar
  </VBtn>

  <VSnackbar
    v-model="isSnackbarVisible"
    vertical
  >
    Sugar plum chocolate bar halvah sesame snaps apple pie donut croissant marshmallow. Sweet roll donut gummies sesame snaps icing bear claw tiramisu cotton candy.

    <template #actions>
      <VBtn
        color="success"
        @click="isSnackbarVisible = false"
      >
        Undo
      </VBtn>

      <VBtn
        color="error"
        @click="isSnackbarVisible = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},Ia={ts:`<script lang="ts" setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`,js:`<script setup>
const isSnackbarVisibility = ref(false)
<\/script>

<template>
  <VBtn @click="isSnackbarVisibility = true">
    Open Snackbar
  </VBtn>

  <!-- Snackbar -->
  <VSnackbar v-model="isSnackbarVisibility">
    Hello, I'm a snackbar with actions.

    <template #actions>
      <VBtn
        color="error"
        @click="isSnackbarVisibility = false"
      >
        Close
      </VBtn>
    </template>
  </VSnackbar>
</template>
`},ga=m("p",null,[e("The "),m("code",null,"v-snackbar"),e(" component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.")],-1),xa=m("p",null,[e("Use "),m("code",null,"actions"),e(" slot to add action button. A "),m("code",null,"v-snackbar"),e(" in its simplest form displays a temporary and closable notification to the user.")],-1),ya=m("p",null,[e("The "),m("code",null,"multi-line"),e(" property extends the height of the "),m("code",null,"v-snackbar"),e(" to give you a little more room for content.")],-1),Ta=m("p",null,[e("The "),m("code",null,"timeout"),e(" property lets you customize the delay before the "),m("code",null,"v-snackbar"),e(" is hidden.")],-1),wa=m("p",null,[e("The "),m("code",null,"vertical"),e(" property allows you to stack the content of your "),m("code",null,"v-snackbar"),e(".")],-1),Ca=m("p",null,[e("Use "),m("code",null,"location"),e(" prop to change the position of snackbar.")],-1),$a=m("p",null,[e("Apply different styles to the snackbar using props such as "),m("code",null,"shaped"),e(", "),m("code",null,"rounded"),e(", "),m("code",null,"color"),e(", "),m("code",null,"text"),e(", "),m("code",null,"outlined"),e(", "),m("code",null,"tile"),e(" and more.")],-1),Oa=m("p",null,"Use transition prop to sets the component transition.",-1),Ja={__name:"snackbar",setup(d){return(l,c)=>{const n=ka,i=ea,b=ma,v=da,s=ua,k=ba,I=ca,w=sa,o=ia;return _(),Q(na,{class:"match-height"},{default:t(()=>[a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Basic",code:Va},{default:t(()=>[ga,a(n)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"With Action",code:Ia},{default:t(()=>[xa,a(b)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Multi Line",code:Sa},{default:t(()=>[ya,a(v)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Timeout",code:fa},{default:t(()=>[Ta,a(s)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Vertical",code:_a},{default:t(()=>[wa,a(k)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Position",code:pa},{default:t(()=>[Ca,a(I)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Variants",code:Ba},{default:t(()=>[$a,a(w)]),_:1},8,["code"])]),_:1}),a(g,{cols:"12",md:"6"},{default:t(()=>[a(i,{title:"Transition",code:va},{default:t(()=>[Oa,a(o)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ja as default};
