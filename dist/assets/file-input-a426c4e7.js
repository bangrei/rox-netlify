import{m as se,f as ce,V as ue}from"./VField-027419e4.js";import{m as pe,u as re,a as O}from"./VInput-cd4c7816.js";import{f as de}from"./forwardRefs-a29b5f65.js";import{aw as me,c2 as _e,bi as fe,aX as he,a0 as z,dT as Y,k as g,w as W,aN as Fe,bS as Ve,C as e,s as N,F as j,aT as ve,bU as be,o as p,b as r,m as U,$ as X,n as o,c as ge,a as Ie,t,v as ye,p as n}from"./index-30b66760.js";import{V as q}from"./VChip-ca3f8676.js";import{V as Ce}from"./VCounter-e2a77d8b.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";import{a as c,V as G}from"./VRow-b0db7b1d.js";import{_ as we}from"./AppCardCode-514fb21c.js";import"./easing-9f15041e.js";import"./transition-0c6e30e4.js";import"./VAvatar-2c83efa5.js";import"./VImg-c7c2167a.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./VCard-db64c41e.js";import"./VDivider-0d474c05.js";const u=me()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:l=>typeof l=="boolean"||[1e3,1024].includes(l)},...pe({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:l=>_e(l).every(a=>a!=null&&typeof a=="object")},...se({clearable:!0})},emits:{"click:control":l=>!0,"mousedown:control":l=>!0,"update:focused":l=>!0,"update:modelValue":l=>!0},setup(l,a){let{attrs:_,emit:f,slots:i}=a;const{t:h}=fe(),m=he(l,"modelValue"),{isFocused:b,focus:x,blur:A}=re(l),S=z(()=>typeof l.showSize!="boolean"?l.showSize:void 0),k=z(()=>(m.value??[]).reduce((s,d)=>{let{size:y=0}=d;return s+y},0)),$=z(()=>Y(k.value,S.value)),I=z(()=>(m.value??[]).map(s=>{const{name:d="",size:y=0}=s;return l.showSize?`${d} (${Y(y,S.value)})`:d})),B=z(()=>{var d;const s=((d=m.value)==null?void 0:d.length)??0;return l.showSize?h(l.counterSizeString,s,$.value):h(l.counterString,s)}),D=g(),L=g(),V=g();function R(){var s;V.value!==document.activeElement&&((s=V.value)==null||s.focus()),b.value||x()}function H(s){M(s)}function J(s){f("mousedown:control",s)}function M(s){var d;(d=V.value)==null||d.click(),f("click:control",s)}function K(s){s.stopPropagation(),R(),ve(()=>{m.value=[],be(l["onClick:clear"],s)})}return W(m,s=>{(!Array.isArray(s)||!s.length)&&V.value&&(V.value.value="")}),Fe(()=>{const s=!!(i.counter||l.counter),d=!!(s||i.details),[y,Q]=Ve(_),[{modelValue:zl,...Z}]=O.filterProps(l),[ee]=ce(l);return e(O,N({ref:D,modelValue:m.value,"onUpdate:modelValue":C=>m.value=C,class:["v-file-input",l.class],style:l.style,"onClick:prepend":H},y,Z,{focused:b.value}),{...i,default:C=>{let{id:P,isDisabled:w,isDirty:T,isReadonly:le,isValid:te}=C;return e(ue,N({ref:L,"prepend-icon":l.prependIcon,onMousedown:J,onClick:M,"onClick:clear":K,"onClick:prependInner":l["onClick:prependInner"],"onClick:appendInner":l["onClick:appendInner"]},ee,{id:P.value,active:T.value||b.value,dirty:T.value,disabled:w.value,focused:b.value,error:te.value===!1}),{...i,default:ne=>{var E;let{props:{class:oe,...ie}}=ne;return e(j,null,[e("input",N({ref:V,type:"file",readonly:le.value,disabled:w.value,multiple:l.multiple,name:l.name,onClick:v=>{v.stopPropagation(),R()},onChange:v=>{if(!v.target)return;const ae=v.target;m.value=[...ae.files??[]]},onFocus:R,onBlur:A},ie,Q),null),e("div",{class:oe},[!!((E=m.value)!=null&&E.length)&&(i.selection?i.selection({fileNames:I.value,totalBytes:k.value,totalBytesReadable:$.value}):l.chips?I.value.map(v=>e(q,{key:v,size:"small",color:l.color},{default:()=>[v]})):I.value.join(", "))])])}})},details:d?C=>{var P,w;return e(j,null,[(P=i.details)==null?void 0:P.call(i,C),s&&e(j,null,[e("span",null,null),e(Ce,{active:!!((w=m.value)!=null&&w.length),value:B.value},i.counter)])])}:void 0})}),de({},D,L,V)}}),ze={__name:"DemoFileInputLoading",setup(l){const a=g(),_=g(!0);return W(a,()=>{_.value=!a.value[0]}),(f,i)=>(p(),r(u,{modelValue:U(a),"onUpdate:modelValue":i[0]||(i[0]=h=>X(a)?a.value=h:null),loading:U(_),color:"primary",label:"File input"},null,8,["modelValue","loading"]))}},Se={__name:"DemoFileInputSelectionSlot",setup(l){const a=g([]);return(_,f)=>(p(),r(u,{modelValue:U(a),"onUpdate:modelValue":f[0]||(f[0]=i=>X(a)?a.value=i:null),multiple:"",placeholder:"Upload your documents",label:"File input","prepend-icon":"mdi-paperclip"},{selection:o(({fileNames:i})=>[(p(!0),ge(j,null,Ie(i,h=>(p(),r(q,{key:h,label:"",size:"small",variant:"outlined",color:"primary",class:"me-2"},{default:o(()=>[t(ye(h),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},ke={__name:"DemoFileInputValidation",setup(l){const a=[_=>!_||!_.length||_[0].size<1e6||"Avatar size should be less than 1 MB!"];return(_,f)=>(p(),r(u,{rules:a,label:"Avatar",accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an avatar","prepend-icon":"mdi-camera-outline"}))}},$e={};function De(l,a){return p(),r(u,{"show-size":"",label:"File input"})}const Pe=F($e,[["render",De]]),je={};function xe(l,a){return p(),r(u,{label:"File input","prepend-icon":"mdi-camera-outline"})}const Ae=F(je,[["render",xe]]),Be={};function Re(l,a){return p(),r(u,{multiple:"",label:"File input"})}const Ne=F(Be,[["render",Re]]),Ue={};function Le(l,a){return p(),r(u,{"show-size":"",counter:"",multiple:"",label:"File input"})}const Me=F(Ue,[["render",Le]]),Te={};function Ee(l,a){return p(),r(u,{chips:"",label:"File input w/ chips"})}const Oe=F(Te,[["render",Ee]]),Ye={};function We(l,a){return p(),r(u,{accept:"image/*",label:"File input"})}const Xe=F(Ye,[["render",We]]),qe={};function Ge(l,a){return p(),r(G,null,{default:o(()=>[e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Outlined"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Filled",variant:"filled"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Solo",variant:"solo"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Plain",variant:"plain"})]),_:1}),e(c,{cols:"12",sm:"6"},{default:o(()=>[e(u,{label:"Underlined",variant:"underlined",density:"default"})]),_:1})]),_:1})}const He=F(qe,[["render",Ge]]),Je={};function Ke(l,a){return p(),r(u,{label:"File input",density:"compact"})}const Qe=F(Je,[["render",Ke]]),Ze={};function el(l,a){return p(),r(u,{label:"File input"})}const ll=F(Ze,[["render",el]]),tl={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},nl={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},ol={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},il={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},al={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},sl={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},cl={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},ul={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="mdi-camera-outline"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="mdi-camera-outline"
  />
</template>
`},pl={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="mdi-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="mdi-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},rl={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},dl={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera-outline"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="mdi-camera-outline"
  />
</template>
`},ml={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},_l=n("p",null,[t("The "),n("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),fl=n("p",null,[t("You can reduces the file input height with "),n("code",null,"density"),t(" prop. Available options are: "),n("code",null,"default"),t(", "),n("code",null,"comfortable"),t(", and "),n("code",null,"compact"),t(".")],-1),hl=n("p",null,[t("use "),n("code",null,"solo"),t(", "),n("code",null,"filled"),t(", "),n("code",null,"outlined"),t(", "),n("code",null,"plain"),t(" and "),n("code",null,"underlined"),t(" option of "),n("code",null,"variant"),t(" prop to change the look of file input.")],-1),Fl=n("p",null,[n("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),Vl=n("p",null,[t("Use "),n("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),vl=n("p",null,[t("When using the "),n("code",null,"show-size"),t(" property along with "),n("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),bl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),n("code",null,"multiple"),t(" prop. ")],-1),gl=n("p",null,[t(" The "),n("code",null,"v-file-input"),t(" has a default "),n("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),Il=n("p",null,[t("The displayed size of the selected file(s) can be configured with the "),n("code",null,"show-size"),t(" property.")],-1),yl=n("p",null,[t("You can use the "),n("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),Cl=n("p",null,[t("Using the "),n("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),wl=n("p",null,[t("Use "),n("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),Ol={__name:"file-input",setup(l){return(a,_)=>{const f=ll,i=we,h=Qe,m=He,b=Xe,x=Oe,A=Me,S=Ne,k=Ae,$=Pe,I=ke,B=Se,D=ze;return p(),r(G,{class:"match-height"},{default:o(()=>[e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Basic",code:nl},{default:o(()=>[_l,e(f)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Density",code:al},{default:o(()=>[fl,e(h)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12"},{default:o(()=>[e(i,{title:"Variant",code:ml},{default:o(()=>[hl,e(m)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Accept",code:tl},{default:o(()=>[Fl,e(b)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Chips",code:ol},{default:o(()=>[Vl,e(x)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Counter",code:il},{default:o(()=>[vl,e(A)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Multiple",code:cl},{default:o(()=>[bl,e(S)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Prepend icon",code:ul},{default:o(()=>[gl,e(k)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Show size",code:rl},{default:o(()=>[Il,e($)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Validation",code:dl},{default:o(()=>[yl,e(I)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Selection slot",code:pl},{default:o(()=>[Cl,e(B)]),_:1},8,["code"])]),_:1}),e(c,{cols:"12",md:"6"},{default:o(()=>[e(i,{title:"Loading",code:sl},{default:o(()=>[wl,e(D)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Ol as default};
