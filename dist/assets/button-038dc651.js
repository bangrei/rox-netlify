import{k as g,o as s,b as f,n as o,C as t,a2 as e,m,$ as W,dP as j,c as u,t as n,Y as _,p as a,a9 as D,aa as z}from"./index-30b66760.js";import{_ as d}from"./_plugin-vue_export-helper-c27b6911.js";import{a as i,V as h}from"./VRow-b0db7b1d.js";import{_ as N}from"./AppCardCode-514fb21c.js";import{V as v}from"./VAlert-31e24687.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./transition-0c6e30e4.js";import"./VDivider-0d474c05.js";const R={__name:"DemoButtonGroup",setup(c){const l=g(1);return(B,p)=>(s(),f(j,{modelValue:m(l),"onUpdate:modelValue":p[0]||(p[0]=r=>W(l)?l.value=r:null),variant:"outlined",color:"primary",divided:""},{default:o(()=>[t(e,{icon:"mdi-format-align-left"}),t(e,{icon:"mdi-format-align-center"}),t(e,{icon:"mdi-format-align-right"}),t(e,{icon:"mdi-format-align-justify"})]),_:1},8,["modelValue"]))}},U={},O={class:"demo-space-x"};function A(c,l){return s(),u("div",O,[t(e,{href:"https://themeselection.com/"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{href:"https://themeselection.com/",target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[n(" Open New Tab ")]),_:1})])}const Y=d(U,[["render",A]]),q={},G={class:"demo-space-x"};function Q(c,l){return s(),u("div",G,[t(e,{to:"alert"},{default:o(()=>[n(" String Literal ")]),_:1}),t(e,{color:"warning",to:{path:"alert"}},{default:o(()=>[n(" Object Path ")]),_:1}),t(e,{color:"success",to:{name:"components-alert"}},{default:o(()=>[n(" Named Router ")]),_:1}),t(e,{color:"secondary",to:{path:"alert",query:{plan:"private"}}},{default:o(()=>[n(" With Query ")]),_:1})])}const F=d(q,[["render",Q]]);const H=c=>(D("data-v-6343ab0a"),c=c(),z(),c),J={class:"demo-space-x"},K=H(()=>a("span",null,"Loading...",-1)),M={class:"custom-loader"},X={__name:"DemoButtonLoaders",setup(c){const l=g([]),B=p=>{l.value[p]=!0,setTimeout(()=>{l.value[p]=!1},3e3)};return(p,r)=>(s(),u("div",J,[t(e,{loading:m(l)[0],disabled:m(l)[0],color:"primary",onClick:r[0]||(r[0]=V=>B(0))},{default:o(()=>[n(" Accept Terms ")]),_:1},8,["loading","disabled"]),t(e,{loading:m(l)[1],disabled:m(l)[1],color:"secondary",onClick:r[1]||(r[1]=V=>B(1))},{default:o(()=>[n(" Upload "),t(_,{end:"",icon:"mdi-cloud-upload-outline"})]),_:1},8,["loading","disabled"]),t(e,{loading:m(l)[2],disabled:m(l)[2],color:"success",onClick:r[2]||(r[2]=V=>B(2))},{loader:o(()=>[K]),default:o(()=>[n(" Loader slot ")]),_:1},8,["loading","disabled"]),t(e,{loading:m(l)[3],disabled:m(l)[3],color:"info",onClick:r[3]||(r[3]=V=>B(3))},{loader:o(()=>[a("span",M,[t(_,{icon:"mdi-cached"})])]),default:o(()=>[n(" Icon Loader ")]),_:1},8,["loading","disabled"]),t(e,{loading:m(l)[4],disabled:m(l)[4],color:"warning",icon:"mdi-cloud-upload-outline",onClick:r[4]||(r[4]=V=>B(4))},null,8,["loading","disabled"])]))}},Z=d(X,[["__scopeId","data-v-6343ab0a"]]),tt={};function ot(c,l){return s(),f(h,null,{default:o(()=>[t(i,{cols:"12",sm:"6"},{default:o(()=>[t(e,{block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1}),t(i,{cols:"12",sm:"6"},{default:o(()=>[t(e,{variant:"outlined",block:""},{default:o(()=>[n(" Block Button ")]),_:1})]),_:1})]),_:1})}const nt=d(tt,[["render",ot]]),et={},at={class:"demo-space-x"};function lt(c,l){return s(),u("div",at,[t(e,{size:"x-large"},{default:o(()=>[n(" Extra large Button ")]),_:1}),t(e,{color:"success",size:"large"},{default:o(()=>[n(" Large Button ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{size:"small",color:"warning"},{default:o(()=>[n(" Small Button ")]),_:1}),t(e,{size:"x-small",color:"error"},{default:o(()=>[n(" Extra small Button ")]),_:1})])}const rt=d(et,[["render",lt]]),ct={},it={class:"demo-space-x"};function st(c,l){return s(),u("div",it,[t(e,{icon:"mdi-briefcase-download-outline",variant:"text"}),t(e,{icon:"mdi-account-plus-outline",variant:"text",color:"secondary"}),t(e,{icon:"mdi-magnify",variant:"text",color:"success"}),t(e,{icon:"mdi-thumb-up-outline",variant:"text",color:"info"}),t(e,{icon:"mdi-star-outline",variant:"text",color:"warning"}),t(e,{icon:"mdi-heart-outline",variant:"text",color:"error"})])}const dt=d(ct,[["render",st]]),ut={},mt={class:"demo-space-x"};function pt(c,l){return s(),u("div",mt,[t(e,null,{default:o(()=>[n(" Accept "),t(_,{end:"",icon:"mdi-checkbox-marked-circle-outline"})]),_:1}),t(e,{color:"secondary"},{default:o(()=>[t(_,{start:"",icon:"mdi-minus-circle-outline"}),n("Cancel ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Upload "),t(_,{end:"",icon:"mdi-cloud-upload-outline"})]),_:1}),t(e,{color:"info"},{default:o(()=>[t(_,{start:"",icon:"mdi-arrow-left"}),n(" Back ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[t(_,{icon:"mdi-wrench-outline"})]),_:1}),t(e,{color:"error"},{default:o(()=>[t(_,{icon:"mdi-cancel"})]),_:1})])}const _t=d(ut,[["render",pt]]),Bt={},Vt={class:"demo-space-x"};function ft(c,l){return s(),u("div",Vt,[t(e,{variant:"tonal"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"tonal"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"tonal"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"tonal"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"tonal"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error",variant:"tonal"},{default:o(()=>[n(" Error ")]),_:1})])}const vt=d(Bt,[["render",ft]]),gt={},ht={class:"demo-space-x"};function xt(c,l){return s(),u("div",ht,[t(e,{variant:"plain"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary",variant:"plain"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success",variant:"plain"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info",variant:"plain"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning",variant:"plain"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error",variant:"plain"},{default:o(()=>[n(" Error ")]),_:1})])}const yt=d(gt,[["render",xt]]),bt={},wt={class:"demo-space-x"};function kt(c,l){return s(),u("div",wt,[t(e,{variant:"text"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"text",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"text",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"text",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"text",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"text",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const St=d(bt,[["render",kt]]),$t={},It={class:"demo-space-x"};function Et(c,l){return s(),u("div",It,[t(e,null,{default:o(()=>[n(" Normal Button ")]),_:1}),t(e,{rounded:"lg",color:"secondary"},{default:o(()=>[n(" Rounded Button ")]),_:1}),t(e,{rounded:0,color:"success"},{default:o(()=>[n(" Tile Button ")]),_:1}),t(e,{rounded:"pill",color:"info"},{default:o(()=>[n(" Pill Button ")]),_:1})])}const Tt=d($t,[["render",Et]]),Pt={},Lt={class:"demo-space-x"};function Ct(c,l){return s(),u("div",Lt,[t(e,{variant:"flat"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"flat",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"flat",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"flat",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"flat",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"flat",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Wt=d(Pt,[["render",Ct]]),jt={},Dt={class:"demo-space-x"};function zt(c,l){return s(),u("div",Dt,[t(e,{variant:"outlined"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{variant:"outlined",color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{variant:"outlined",color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{variant:"outlined",color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{variant:"outlined",color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{variant:"outlined",color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const Nt=d(jt,[["render",zt]]),Rt={},Ut={class:"demo-space-x"};function Ot(c,l){return s(),u("div",Ut,[t(e,{color:"primary"},{default:o(()=>[n(" Primary ")]),_:1}),t(e,{color:"secondary"},{default:o(()=>[n(" Secondary ")]),_:1}),t(e,{color:"success"},{default:o(()=>[n(" Success ")]),_:1}),t(e,{color:"info"},{default:o(()=>[n(" Info ")]),_:1}),t(e,{color:"warning"},{default:o(()=>[n(" Warning ")]),_:1}),t(e,{color:"error"},{default:o(()=>[n(" Error ")]),_:1})])}const At=d(Rt,[["render",Ot]]),Yt={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},qt={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},Gt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      Primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Qt={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    variant="outlined"
    color="primary"
    divided
  >
    <VBtn icon="mdi-format-align-left" />
    <VBtn icon="mdi-format-align-center" />
    <VBtn icon="mdi-format-align-right" />
    <VBtn icon="mdi-format-align-justify" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    variant="outlined"
    color="primary"
    divided
  >
    <VBtn icon="mdi-format-align-left" />
    <VBtn icon="mdi-format-align-center" />
    <VBtn icon="mdi-format-align-right" />
    <VBtn icon="mdi-format-align-justify" />
  </VBtnToggle>
</template>
`},Ft={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="mdi-checkbox-marked-circle-outline"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="mdi-minus-circle-outline"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="mdi-cloud-upload-outline"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="mdi-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="mdi-wrench-outline" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="mdi-cancel" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="mdi-checkbox-marked-circle-outline"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="mdi-minus-circle-outline"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="mdi-cloud-upload-outline"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="mdi-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="mdi-wrench-outline" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="mdi-cancel" />
    </VBtn>
  </div>
</template>
`},Ht={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="mdi-briefcase-download-outline"
      variant="text"
    />

    <VBtn
      icon="mdi-account-plus-outline"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="mdi-magnify"
      variant="text"
      color="success"
    />

    <VBtn
      icon="mdi-thumb-up-outline"
      variant="text"
      color="info"
    />

    <VBtn
      icon="mdi-star-outline"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="mdi-heart-outline"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="mdi-briefcase-download-outline"
      variant="text"
    />

    <VBtn
      icon="mdi-account-plus-outline"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="mdi-magnify"
      variant="text"
      color="success"
    />

    <VBtn
      icon="mdi-thumb-up-outline"
      variant="text"
      color="info"
    />

    <VBtn
      icon="mdi-star-outline"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="mdi-heart-outline"
      variant="text"
      color="error"
    />
  </div>
</template>
`},Jt={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://themeselection.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://themeselection.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://themeselection.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://themeselection.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},Kt={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="mdi-cloud-upload-outline"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="mdi-cached" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="mdi-cloud-upload-outline"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="mdi-cloud-upload-outline"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="mdi-cached" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="mdi-cloud-upload-outline"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>
`},Mt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},Xt={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      Error
    </VBtn>
  </div>
</template>
`},Zt={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},to={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},oo={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},no={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},eo={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      Warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      Error
    </VBtn>
  </div>
</template>
`},ao=a("p",null,[n("The "),a("code",null,"color"),n(" prop is used to change the background color of the alert.")],-1),lo=a("p",null,[n("The "),a("code",null,"outlined"),n(" variant option is used to create outlined buttons.")],-1),ro=a("p",null,[n("The "),a("code",null,"flat"),n(" buttons still maintain their background color, but have no box shadow.")],-1),co=a("p",null,[n("Use the "),a("code",null,"rounded"),n(" prop to control the border radius of buttons.")],-1),io=a("p",null,[n("Use "),a("code",null,"text"),n(" variant option to create text button. Text buttons have no box shadow and no background.")],-1),so=a("p",null,[n("Use "),a("code",null,"plain"),n(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1),uo=a("p",null,[n("Use "),a("code",null,"tonal"),n(" variant option to a create a light background button.")],-1),mo=a("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1),po=a("p",null,[n("Use "),a("code",null,"icon"),n(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")],-1),_o=a("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1),Bo=a("p",null,[n("The "),a("code",null,"block"),n(" prop allows buttons to extend the full available width.")],-1),Vo=a("p",null,[n("Using the "),a("code",null,"loading"),n(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),a("code",null,"v-progress-circular"),n(" component but this can be customized.")],-1),fo=a("p",null,[n("Use "),a("code",null,"to"),n(" prop to create button with router support.")],-1),vo=a("p",null,[n("Designates that the component is a link. This is automatic when using the "),a("code",null,"href"),n(" or "),a("code",null,"to"),n(" prop.")],-1),go=a("p",null,[n(" Wrap buttons with the "),a("code",null,"v-btn-toggle"),n(" component to create a group button. You can add a visual divider between buttons with the "),a("code",null,"divided"),n(" prop. ")],-1),Po={__name:"button",setup(c){return(l,B)=>{const p=At,r=N,V=Nt,x=Wt,y=Tt,b=St,w=yt,k=vt,S=_t,$=dt,I=rt,E=nt,T=Z,P=F,L=Y,C=R;return s(),f(h,null,{default:o(()=>[t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Colors",code:qt},{default:o(()=>[ao,t(p)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Outlined",code:Mt},{default:o(()=>[lo,t(V)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Flat",code:Gt},{default:o(()=>[ro,t(x)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Rounded",code:Zt},{default:o(()=>[co,t(y)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Text",code:no},{default:o(()=>[io,t(b)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Plain",code:Xt},{default:o(()=>[so,t(w)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Tonal",code:eo},{default:o(()=>[uo,t(k)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Icon",code:Ft},{default:o(()=>[mo,t(S)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Icon Only",code:Ht},{default:o(()=>[po,t($)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Sizing",code:oo},{default:o(()=>[_o,t(I)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Block",code:Yt},{default:o(()=>[Bo,t(E)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Loaders",code:Kt},{default:o(()=>[Vo,t(T)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Router",code:to},{default:o(()=>[fo,t(v,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(P)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Link",code:Jt},{default:o(()=>[vo,t(v,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(L)]),_:1},8,["code"])]),_:1}),t(i,{cols:"12"},{default:o(()=>[t(r,{title:"Group",code:Qt},{default:o(()=>[go,t(C)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Po as default};
