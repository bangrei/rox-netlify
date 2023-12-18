import{_ as A}from"./DialogCloseBtn-d9d81ae7.js";import{k as b,o as h,b as x,n as a,C as e,a2 as d,ah as S,ai as P,t as n,m as g,$ as f,aA as Z,az as G,aF as ee,aw as J,aN as q,b3 as se,b4 as re,aD as ne,aG as ce,bd as ue,X as F,b7 as de,b8 as me,aL as pe,aI as ge,a0 as Y,be as ae,b0 as z,aV as I,as as be,aH as fe,p as v,Y as Ve,s as ve,c as O,F as M,w as he,at as ke,a as ye}from"./index-30b66760.js";import{V as k,c as C,e as T,a as Ce,b as De}from"./VCard-db64c41e.js";import{V as le,a as V}from"./VRow-b0db7b1d.js";import{V as _}from"./VTextField-1e90003c.js";import{V as D}from"./VSpacer-a17cbd45.js";import{V as y}from"./VDialog-39650760.js";import{V as we}from"./VImg-c7c2167a.js";import{V as K,d as Q,a as L}from"./VList-d87f0460.js";import{V as U}from"./VDivider-0d474c05.js";import{V as N}from"./VListItemAction-fc2e2a26.js";import{V as $}from"./VCheckbox-475ad393.js";import{V as Be,a as _e}from"./VRadioGroup-4c08c9dc.js";import{_ as Te}from"./AppCardCode-514fb21c.js";import"./VAvatar-2c83efa5.js";/* empty css                   */import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-e2a77d8b.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./dialog-transition-9418ede6.js";import"./ssrBoot-050ef406.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./vue.runtime.esm-bundler-eb84b330.js";const xe={__name:"DemoDialogForm",setup(s){const o=b(!1),l=b(""),t=b(""),i=b(""),r=b(""),p=b(""),m=b(),w=b([]);return(j,c)=>{const B=A;return h(),x(y,{modelValue:g(o),"onUpdate:modelValue":c[10]||(c[10]=u=>f(o)?o.value=u:null),"max-width":"600"},{activator:a(({props:u})=>[e(d,S(P(u)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(k,{title:"User Profile"},{default:a(()=>[e(B,{variant:"text",size:"small",onClick:c[0]||(c[0]=u=>o.value=!1)}),e(C,null,{default:a(()=>[e(le,null,{default:a(()=>[e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(_,{modelValue:g(l),"onUpdate:modelValue":c[1]||(c[1]=u=>f(l)?l.value=u:null),label:"First Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(_,{modelValue:g(t),"onUpdate:modelValue":c[2]||(c[2]=u=>f(t)?t.value=u:null),label:"Middle Name"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6",md:"4"},{default:a(()=>[e(_,{modelValue:g(i),"onUpdate:modelValue":c[3]||(c[3]=u=>f(i)?i.value=u:null),label:"Last Name","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(_,{modelValue:g(r),"onUpdate:modelValue":c[4]||(c[4]=u=>f(r)?r.value=u:null),label:"Email"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12"},{default:a(()=>[e(_,{modelValue:g(p),"onUpdate:modelValue":c[5]||(c[5]=u=>f(p)?p.value=u:null),label:"Password",type:"password"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(_,{modelValue:g(m),"onUpdate:modelValue":c[6]||(c[6]=u=>f(m)?m.value=u:null),label:"Age",type:"number"},null,8,["modelValue"])]),_:1}),e(V,{cols:"12",sm:"6"},{default:a(()=>[e(_,{modelValue:g(w),"onUpdate:modelValue":c[7]||(c[7]=u=>f(w)?w.value=u:null),label:"Interests"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(T,null,{default:a(()=>[e(D),e(d,{color:"error",onClick:c[8]||(c[8]=u=>o.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(d,{color:"success",onClick:c[9]||(c[9]=u=>o.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}};const je=Z({text:String,...G(),...ee()},"v-toolbar-title"),te=J()({name:"VToolbarTitle",props:je(),setup(s,o){let{slots:l}=o;return q(()=>{const t=!!(l.default||l.text||s.text);return e(s.tag,{class:["v-toolbar-title",s.class],style:s.style},{default:()=>{var i;return[t&&e("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():s.text,(i=l.default)==null?void 0:i.call(l)])]}})}),{}}}),Ae=[null,"prominent","default","comfortable","compact"],Le=Z({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:s=>Ae.includes(s)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...se(),...G(),...re(),...ne(),...ee({tag:"header"}),...ce()},"v-toolbar"),Se=J()({name:"VToolbar",props:Le(),setup(s,o){var u;let{slots:l}=o;const{backgroundColorClasses:t,backgroundColorStyles:i}=ue(F(s,"color")),{borderClasses:r}=de(s),{elevationClasses:p}=me(s),{roundedClasses:m}=pe(s),{themeClasses:w}=ge(s),j=b(!!(s.extended||(u=l.extension)!=null&&u.call(l))),c=Y(()=>parseInt(Number(s.height)+(s.density==="prominent"?Number(s.height):0)-(s.density==="comfortable"?8:0)-(s.density==="compact"?16:0),10)),B=Y(()=>j.value?parseInt(Number(s.extensionHeight)+(s.density==="prominent"?Number(s.extensionHeight):0)-(s.density==="comfortable"?4:0)-(s.density==="compact"?8:0),10):0);return ae({VBtn:{variant:"text"}}),q(()=>{var H;const oe=!!(s.title||l.title),ie=!!(l.image||s.image),R=(H=l.extension)==null?void 0:H.call(l);return j.value=!!(s.extended||R),e(s.tag,{class:["v-toolbar",{"v-toolbar--absolute":s.absolute,"v-toolbar--collapse":s.collapse,"v-toolbar--flat":s.flat,"v-toolbar--floating":s.floating,[`v-toolbar--density-${s.density}`]:!0},t.value,r.value,p.value,m.value,w.value,s.class],style:[i.value,s.style]},{default:()=>[ie&&e("div",{key:"image",class:"v-toolbar__image"},[l.image?e(z,{key:"image-defaults",disabled:!s.image,defaults:{VImg:{cover:!0,src:s.image}}},l.image):e(we,{key:"image-img",cover:!0,src:s.image},null)]),e(z,{defaults:{VTabs:{height:I(c.value)}}},{default:()=>{var E,W,X;return[e("div",{class:"v-toolbar__content",style:{height:I(c.value)}},[l.prepend&&e("div",{class:"v-toolbar__prepend"},[(E=l.prepend)==null?void 0:E.call(l)]),oe&&e(te,{key:"title",text:s.title},{text:l.title}),(W=l.default)==null?void 0:W.call(l),l.append&&e("div",{class:"v-toolbar__append"},[(X=l.append)==null?void 0:X.call(l)])])]}}),e(z,{defaults:{VTabs:{height:I(B.value)}}},{default:()=>[e(be,null,{default:()=>[j.value&&e("div",{class:"v-toolbar__extension",style:{height:I(B.value)}},[R])]})]})]})}),{contentHeight:c,extensionHeight:B}}}),Pe=J()({name:"VToolbarItems",props:{...G(),...fe({variant:"text"})},setup(s,o){let{slots:l}=o;return ae({VBtn:{color:F(s,"color"),height:"inherit",variant:F(s,"variant")}}),q(()=>{var t;return e("div",{class:["v-toolbar-items",s.class],style:s.style},[(t=l.default)==null?void 0:t.call(l)])}),{}}}),Ie={__name:"DemoDialogFullscreen",setup(s){const o=b(!1);return(l,t)=>(h(),x(y,{modelValue:g(o),"onUpdate:modelValue":t[2]||(t[2]=i=>f(o)?o.value=i:null),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition"},{activator:a(({props:i})=>[e(d,S(P(i)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(k,null,{default:a(()=>[v("div",null,[e(Se,{color:"primary"},{default:a(()=>[e(d,{icon:"",variant:"plain",onClick:t[0]||(t[0]=i=>o.value=!1)},{default:a(()=>[e(Ve,{color:"white",icon:"mdi-close"})]),_:1}),e(te,null,{default:a(()=>[n("Settings")]),_:1}),e(D),e(Pe,null,{default:a(()=>[e(d,{variant:"text",onClick:t[1]||(t[1]=i=>o.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),e(K,{lines:"two"},{default:a(()=>[e(Q,null,{default:a(()=>[n("User Controls")]),_:1}),e(L,{title:"Content filtering",subtitle:"Set the content filtering level to restrict apps that can be downloaded"}),e(L,{title:"Password",subtitle:"Require password for purchase or use password to restrict purchase"})]),_:1}),e(U),e(K,{lines:"two","select-strategy":"classic"},{default:a(()=>[e(Q,null,{default:a(()=>[n("General")]),_:1}),e(L,{title:"Notifications",subtitle:"Notify me about updates to apps or games that I downloaded",value:"Notifications"},{prepend:a(({isActive:i})=>[e(N,{start:""},{default:a(()=>[e($,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(L,{title:"Sound",subtitle:"Auto-update apps at any time. Data charges may apply",value:"Sound"},{prepend:a(({isActive:i})=>[e(N,{start:""},{default:a(()=>[e($,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1}),e(L,{title:"Auto-add widgets",subtitle:"Automatically add home screen widgets",value:"Auto-add widgets"},{prepend:a(({isActive:i})=>[e(N,{start:""},{default:a(()=>[e($,{"model-value":i,color:"primary"},null,8,["model-value"])]),_:2},1024)]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ze={__name:"DemoDialogOverflowed",setup(s){const o=b(!1);return(l,t)=>{const i=A;return h(),x(y,{modelValue:g(o),"onUpdate:modelValue":t[3]||(t[3]=r=>f(o)?o.value=r:null),class:"v-dialog-sm"},{activator:a(({props:r})=>[e(d,ve({color:"primary"},r),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(k,{title:"Use Google's location service?"},{default:a(()=>[e(i,{variant:"text",size:"small",onClick:t[0]||(t[0]=r=>o.value=!1)}),e(C,null,{default:a(()=>[n(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy. Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet. Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate. Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll. Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie. ")]),_:1}),e(T,null,{default:a(()=>[e(D),e(d,{color:"error",onClick:t[1]||(t[1]=r=>o.value=!1)},{default:a(()=>[n(" Disagree ")]),_:1}),e(d,{color:"success",onClick:t[2]||(t[2]=r=>o.value=!1)},{default:a(()=>[n(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Ne={__name:"DemoDialogNesting",setup(s){const o=b(!1),l=b(!1);return(t,i)=>{const r=A;return h(),O(M,null,[e(d,{onClick:i[0]||(i[0]=p=>o.value=!0)},{default:a(()=>[n(" Open Dialog ")]),_:1}),e(y,{modelValue:g(o),"onUpdate:modelValue":i[4]||(i[4]=p=>f(o)?o.value=p:null),class:"v-dialog-sm"},{default:a(()=>[e(k,{title:"Dialog"},{default:a(()=>[e(r,{variant:"text",size:"small",onClick:i[1]||(i[1]=p=>o.value=!1)}),e(C,null,{default:a(()=>[n(" Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding. ")]),_:1}),e(T,null,{default:a(()=>[e(D),e(d,{color:"error",onClick:i[2]||(i[2]=p=>o.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(d,{onClick:i[3]||(i[3]=p=>l.value=!g(l))},{default:a(()=>[n(" Open Dialog 2 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(y,{modelValue:g(l),"onUpdate:modelValue":i[7]||(i[7]=p=>f(l)?l.value=p:null),class:"v-dialog-sm text-center"},{default:a(()=>[e(k,{title:"Dialog 2"},{default:a(()=>[e(r,{variant:"text",size:"small",onClick:i[5]||(i[5]=p=>l.value=!1)}),e(C,null,{default:a(()=>[n("I'm a nested dialog.")]),_:1}),e(T,null,{default:a(()=>[e(D),e(d,{onClick:i[6]||(i[6]=p=>l.value=!1)},{default:a(()=>[n(" Close ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}},$e=v("p",{class:"mb-2"}," Please stand by ",-1),Fe={__name:"DemoDialogLoader",setup(s){const o=b(!1);return he(o,l=>{l&&setTimeout(()=>{o.value=!1},4e3)}),(l,t)=>(h(),O(M,null,[e(d,{disabled:g(o),onClick:t[0]||(t[0]=i=>o.value=!0)},{default:a(()=>[n(" Start loading ")]),_:1},8,["disabled"]),e(y,{modelValue:g(o),"onUpdate:modelValue":t[1]||(t[1]=i=>f(o)?o.value=i:null),width:"300"},{default:a(()=>[e(k,{color:"primary",width:"300"},{default:a(()=>[e(C,{class:"pt-3"},{default:a(()=>[$e,e(ke,{indeterminate:"",class:"mb-0"})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}},Ue={__name:"DemoDialogScrollable",setup(s){const o=[{label:"Bahamas, The",value:"bahamas"},{label:"Bahrain",value:"bahrain"},{label:"Bangladesh",value:"bangladesh"},{label:"Barbados",value:"barbados"},{label:"Belarus",value:"belarus"},{label:"Belgium",value:"belgium"},{label:"Belize",value:"belize"},{label:"Benin",value:"benin"},{label:"Bhutan",value:"bhutan"},{label:"Bolivia",value:"bolivia"},{label:"Bosnia and Herzegovina",value:"bosnia"},{label:"Botswana",value:"botswana"},{label:"Brazil",value:"brazil"},{label:"Brunei",value:"brunei"},{label:"Bulgaria",value:"bulgaria"},{label:"Burkina Faso",value:"burkina"}],l=b(""),t=b(!1);return(i,r)=>{const p=A;return h(),x(y,{modelValue:g(t),"onUpdate:modelValue":r[4]||(r[4]=m=>f(t)?t.value=m:null),scrollable:"","max-width":"350"},{activator:a(({props:m})=>[e(d,S(P(m)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(k,null,{default:a(()=>[e(p,{variant:"text",size:"small",onClick:r[0]||(r[0]=m=>t.value=!1)}),e(Ce,null,{default:a(()=>[e(De,null,{default:a(()=>[n("Select Country")]),_:1})]),_:1}),e(U),e(C,{style:{"block-size":"300px"}},{default:a(()=>[e(Be,{modelValue:g(l),"onUpdate:modelValue":r[1]||(r[1]=m=>f(l)?l.value=m:null),inline:!1},{default:a(()=>[(h(),O(M,null,ye(o,m=>e(_e,{key:m.label,label:m.label,value:m.value,color:"primary"},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(U),e(T,{class:"pt-3"},{default:a(()=>[e(D),e(d,{color:"error",onClick:r[2]||(r[2]=m=>t.value=!1)},{default:a(()=>[n(" Close ")]),_:1}),e(d,{color:"success",onClick:r[3]||(r[3]=m=>t.value=!1)},{default:a(()=>[n(" Save ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Ge={__name:"DemoDialogPersistent",setup(s){const o=b(!1);return(l,t)=>{const i=A;return h(),x(y,{modelValue:g(o),"onUpdate:modelValue":t[3]||(t[3]=r=>f(o)?o.value=r:null),persistent:"",class:"v-dialog-sm"},{activator:a(({props:r})=>[e(d,S(P(r)),{default:a(()=>[n(" Open Dialog ")]),_:2},1040)]),default:a(()=>[e(k,{title:"Use Google's location service?"},{default:a(()=>[e(i,{variant:"text",size:"small",onClick:t[0]||(t[0]=r=>o.value=!1)}),e(C,null,{default:a(()=>[n(" Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running. ")]),_:1}),e(T,null,{default:a(()=>[e(D),e(d,{color:"error",onClick:t[1]||(t[1]=r=>o.value=!1)},{default:a(()=>[n(" Disagree ")]),_:1}),e(d,{color:"success",onClick:t[2]||(t[2]=r=>o.value=!1)},{default:a(()=>[n(" Agree ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Je={__name:"DemoDialogBasic",setup(s){const o=b(!1);return(l,t)=>{const i=A;return h(),x(y,{modelValue:g(o),"onUpdate:modelValue":t[2]||(t[2]=r=>f(o)?o.value=r:null),width:"500"},{activator:a(({props:r})=>[e(d,S(P(r)),{default:a(()=>[n(" Click Me ")]),_:2},1040)]),default:a(()=>[e(k,{title:"Privacy Policy"},{default:a(()=>[e(i,{variant:"text",size:"small",onClick:t[0]||(t[0]=r=>o.value=!1)}),e(C,null,{default:a(()=>[n(" Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. ")]),_:1}),e(T,null,{default:a(()=>[e(D),e(d,{onClick:t[1]||(t[1]=r=>o.value=!1)},{default:a(()=>[n(" I accept ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},qe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    width="500"
  >
    <!-- Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Click Me
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Privacy Policy">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogVisible = false">
          I accept
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Oe={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref<string[]>([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="age"
              label="Age"
              type="number"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="interest"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const age = ref()
const interest = ref([])
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    max-width="600"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="User Profile">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        <VRow>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="firstName"
              label="First Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="middleName"
              label="Middle Name"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
            md="4"
          >
            <VTextField
              v-model="lastName"
              label="Last Name"
              persistent-hint
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="email"
              label="Email"
            />
          </VCol>
          <VCol cols="12">
            <VTextField
              v-model="password"
              label="Password"
              type="password"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="age"
              label="Age"
              type="number"
            />
          </VCol>
          <VCol
            cols="12"
            sm="6"
          >
            <VTextField
              v-model="interest"
              label="Interests"
            />
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Me={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="mdi-close"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <!-- Toolbar -->
      <div>
        <VToolbar color="primary">
          <VBtn
            icon
            variant="plain"
            @click="isDialogVisible = false"
          >
            <VIcon
              color="white"
              icon="mdi-close"
            />
          </VBtn>

          <VToolbarTitle>Settings</VToolbarTitle>

          <VSpacer />

          <VToolbarItems>
            <VBtn
              variant="text"
              @click="isDialogVisible = false"
            >
              Save
            </VBtn>
          </VToolbarItems>
        </VToolbar>
      </div>

      <!-- List -->
      <VList lines="two">
        <VListSubheader>User Controls</VListSubheader>
        <VListItem
          title="Content filtering"
          subtitle="Set the content filtering level to restrict apps that can be downloaded"
        />
        <VListItem
          title="Password"
          subtitle="Require password for purchase or use password to restrict purchase"
        />
      </VList>

      <VDivider />

      <!-- List -->
      <VList
        lines="two"
        select-strategy="classic"
      >
        <VListSubheader>General</VListSubheader>

        <VListItem
          title="Notifications"
          subtitle="Notify me about updates to apps or games that I downloaded"
          value="Notifications"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Sound"
          subtitle="Auto-update apps at any time. Data charges may apply"
          value="Sound"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>

        <VListItem
          title="Auto-add widgets"
          subtitle="Automatically add home screen widgets"
          value="Auto-add widgets"
        >
          <template #prepend="{ isActive }">
            <VListItemAction start>
              <VCheckbox
                :model-value="isActive"
                color="primary"
              />
            </VListItemAction>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VDialog>
</template>

<style lang="scss">
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform 0.2s ease-in-out;
}
</style>
`},Re={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return

  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        <p class="mb-2">
          Please stand by
        </p>
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)

watch(isDialogVisible, value => {
  if (!value)
    return
  setTimeout(() => {
    isDialogVisible.value = false
  }, 4000)
})
<\/script>

<template>
  <!-- Dialog Activator -->
  <VBtn
    :disabled="isDialogVisible"
    @click="isDialogVisible = true"
  >
    Start loading
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    width="300"
  >
    <VCard
      color="primary"
      width="300"
    >
      <VCardText class="pt-3">
        <p class="mb-2">
          Please stand by
        </p>
        <VProgressLinear
          indeterminate
          class="mb-0"
        />
      </VCardText>
    </VCard>
  </VDialog>
</template>
`},He={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm text-center"
  >
    <VCard title="Dialog 2">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogTwoShow = false"
      />

      <VCardText>I'm a nested dialog.</VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
const isDialogTwoShow = ref(false)
<\/script>

<template>
  <VBtn @click="isDialogVisible = true">
    Open Dialog
  </VBtn>

  <!-- Dialog -->
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <VCard title="Dialog">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn @click="isDialogTwoShow = !isDialogTwoShow">
          Open Dialog 2
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- Dialog 2 -->
  <VDialog
    v-model="isDialogTwoShow"
    class="v-dialog-sm text-center"
  >
    <VCard title="Dialog 2">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogTwoShow = false"
      />

      <VCardText>I'm a nested dialog.</VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn @click="isDialogTwoShow = false">
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Ee={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn
        color="primary"
        v-bind="props"
      >
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies. Candy tootsie roll sweet lemon drops tart cotton candy jujubes topping chupa chups. Biscuit icing pastry chocolate bar lollipop. Lemon drops oat cake chocolate cake dessert chocolate. Carrot cake ice cream bonbon tart tootsie roll cupcake dessert gingerbread. Apple pie dessert sweet candy bonbon. Sugar plum gummies powder brownie dessert candy canes candy canes candy.

        Sweet liquorice danish jujubes tart marshmallow cake. Danish chocolate bar icing dessert bonbon. Chocolate liquorice candy donut shortbread bonbon jujubes tart. Marshmallow cupcake marzipan icing pie dragée toffee. Cupcake soufflé pastry oat cake icing sesame snaps oat cake. Lollipop cheesecake cake tiramisu chocolate cake croissant. Donut candy canes sweet roll ice cream toffee gingerbread. Jelly-o biscuit oat cake cheesecake jujubes. Pudding chocolate biscuit gummies sesame snaps. Lemon drops candy canes chupa chups pudding muffin jujubes cupcake danish. Wafer chocolate oat cake sweet chocolate muffin. Pie dragée soufflé oat cake toffee dragée gummi bears. Jelly-o chocolate jelly fruitcake tart muffin icing sweet.

        Gummies pie lollipop carrot cake gingerbread sweet. Marshmallow tiramisu chocolate cake cake marshmallow. Pudding fruitcake shortbread biscuit powder cake. Dragée cookie cheesecake chupa chups toffee wafer. Wafer donut pudding chocolate shortbread cheesecake. Cupcake sweet roll lollipop chupa chups donut croissant carrot cake chocolate cake. Toffee soufflé biscuit gingerbread fruitcake. Jelly beans pudding jelly-o gingerbread apple pie ice cream. Muffin halvah cookie topping muffin sugar plum. Bonbon dessert cake tiramisu marzipan apple pie. Jelly beans caramels icing cake cake tiramisu dessert dessert jelly-o. Halvah ice cream cotton candy chupa chups cheesecake pudding cheesecake cupcake gummies. Croissant cookie candy canes cake chocolate.

        Pie cotton candy caramels sweet cake liquorice. Bear claw oat cake candy danish jelly-o fruitcake muffin sugar plum cupcake. Pudding cake cake lollipop chupa chups topping apple pie jelly oat cake. Pie candy canes tiramisu gummies icing cotton candy fruitcake marshmallow dragée. Pudding caramels muffin cookie cookie cupcake brownie ice cream. Liquorice lemon drops lemon drops cotton candy biscuit jelly-o jujubes topping. Lemon drops sweet dragée dessert sugar plum chocolate topping sugar plum oat cake. Muffin candy canes bonbon cotton candy liquorice gingerbread sesame snaps chocolate bar. Muffin gingerbread sesame snaps cake donut pie gingerbread soufflé croissant. Topping tart shortbread toffee jelly-o gingerbread cheesecake cupcake cake. Pudding powder icing marshmallow bear claw sesame snaps carrot cake. Jelly beans dessert tiramisu shortbread gummi bears gummies cotton candy. Tiramisu liquorice cookie pastry caramels icing tootsie roll.

        Pudding croissant tootsie roll jelly-o jelly beans gummi bears. Shortbread candy canes biscuit candy donut marshmallow candy canes. Fruitcake marshmallow chocolate bar sweet roll tart gummi bears brownie cupcake dragée. Cheesecake gummies sesame snaps soufflé jelly beans halvah bonbon tootsie roll. Sesame snaps marzipan cupcake candy cheesecake lollipop. Donut candy jelly-o liquorice topping gummi bears halvah. Pie sweet sweet jujubes bear claw marshmallow pudding lollipop tiramisu. Tiramisu tootsie roll topping chocolate cake tootsie roll cotton candy brownie. Jelly beans biscuit caramels cake toffee toffee lemon drops dessert. Toffee chupa chups tart bonbon brownie cake shortbread. Gummies marshmallow topping dragée chocolate bar. Chupa chups donut cheesecake cookie fruitcake muffin. Jelly-o cupcake cheesecake chocolate bar cupcake wafer. Liquorice muffin marzipan cotton candy cake lemon drops cake brownie.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},We={ts:`<script lang="ts" setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard title="Use Google's location service?">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </VCardText>

      <VCardActions>
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Disagree
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Agree
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Xe={ts:`<script lang="ts" setup>
const countryList = [
  { label: 'Bahamas, The', value: 'bahamas' },
  { label: 'Bahrain', value: 'bahrain' },
  { label: 'Bangladesh', value: 'bangladesh' },

  { label: 'Barbados', value: 'barbados' },
  { label: 'Belarus', value: 'belarus' },
  { label: 'Belgium', value: 'belgium' },
  { label: 'Belize', value: 'belize' },
  { label: 'Benin', value: 'benin' },
  { label: 'Bhutan', value: 'bhutan' },
  { label: 'Bolivia', value: 'bolivia' },
  { label: 'Bosnia and Herzegovina', value: 'bosnia' },

  { label: 'Botswana', value: 'botswana' },
  { label: 'Brazil', value: 'brazil' },
  { label: 'Brunei', value: 'brunei' },
  { label: 'Bulgaria', value: 'bulgaria' },
  { label: 'Burkina Faso', value: 'burkina' },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardItem>
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardActions class="pt-3">
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`,js:`<script setup>
const countryList = [
  {
    label: 'Bahamas, The',
    value: 'bahamas',
  },
  {
    label: 'Bahrain',
    value: 'bahrain',
  },
  {
    label: 'Bangladesh',
    value: 'bangladesh',
  },
  {
    label: 'Barbados',
    value: 'barbados',
  },
  {
    label: 'Belarus',
    value: 'belarus',
  },
  {
    label: 'Belgium',
    value: 'belgium',
  },
  {
    label: 'Belize',
    value: 'belize',
  },
  {
    label: 'Benin',
    value: 'benin',
  },
  {
    label: 'Bhutan',
    value: 'bhutan',
  },
  {
    label: 'Bolivia',
    value: 'bolivia',
  },
  {
    label: 'Bosnia and Herzegovina',
    value: 'bosnia',
  },
  {
    label: 'Botswana',
    value: 'botswana',
  },
  {
    label: 'Brazil',
    value: 'brazil',
  },
  {
    label: 'Brunei',
    value: 'brunei',
  },
  {
    label: 'Bulgaria',
    value: 'bulgaria',
  },
  {
    label: 'Burkina Faso',
    value: 'burkina',
  },
]

const selectedCountry = ref('')
const isDialogVisible = ref(false)
<\/script>

<template>
  <VDialog
    v-model="isDialogVisible"
    scrollable
    max-width="350"
  >
    <!-- Dialog Activator -->
    <template #activator="{ props }">
      <VBtn v-bind="props">
        Open Dialog
      </VBtn>
    </template>

    <!-- Dialog Content -->
    <VCard>
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="isDialogVisible = false"
      />

      <VCardItem>
        <VCardTitle>Select Country</VCardTitle>
      </VCardItem>

      <VDivider />
      <VCardText style="block-size: 300px;">
        <VRadioGroup
          v-model="selectedCountry"
          :inline="false"
        >
          <VRadio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
            color="primary"
          />
        </VRadioGroup>
      </VCardText>

      <VDivider />

      <VCardActions class="pt-3">
        <VSpacer />
        <VBtn
          color="error"
          @click="isDialogVisible = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
`},Ye=v("p",null,"A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.",-1),Ke=v("p",null,[n("Use "),v("code",null,"persistent"),n(" prop to create persistent dialog.")],-1),Qe=v("p",null,[n("Use "),v("code",null,"scrollable"),n(" prop to create scrollable dialog.")],-1),Ze=v("p",null,[n("The "),v("code",null,"v-dialog"),n(" component makes it easy to create a customized loading experience for your application.")],-1),ea=v("p",null,"Dialogs can be nested: you can open one dialog from another.",-1),aa=v("p",null,"Modals that do not fit within the available window space will scroll the container.",-1),la=v("p",null,"Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.",-1),ta=v("p",null,"Just a simple example of a form in a dialog.",-1),Pa={__name:"dialog",setup(s){return(o,l)=>{const t=Je,i=Te,r=Ge,p=Ue,m=Fe,w=Ne,j=ze,c=Ie,B=xe;return h(),x(le,null,{default:a(()=>[e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Basic",code:qe},{default:a(()=>[Ye,e(t)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Persistent",code:We},{default:a(()=>[Ke,e(r)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Scrollable",code:Xe},{default:a(()=>[Qe,e(p)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Loader",code:Re},{default:a(()=>[Ze,e(m)]),_:1},8,["code"])]),_:1}),e(V,{col:"12",md:"6"},{default:a(()=>[e(i,{title:"Nesting",code:He},{default:a(()=>[ea,e(w)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Overflowed",code:Ee},{default:a(()=>[aa,e(j)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Fullscreen",code:Me},{default:a(()=>[la,e(c)]),_:1},8,["code"])]),_:1}),e(V,{cols:"12",md:"6"},{default:a(()=>[e(i,{title:"Form",code:Oe},{default:a(()=>[ta,e(B)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Pa as default};
