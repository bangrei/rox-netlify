import{k as s,o as k,b as h,n as l,C as e,t as w,a1 as N,m as a,$ as n,p as C,x as W,c as Q,F as X,a as ee,v as le,Y as oe,L as te,M as ae,a2 as F}from"./index-30b66760.js";import{a as A,b as Y,c as j,V as se}from"./VExpansionPanel-eec4fdbd.js";import{V as _}from"./VForm-5a29b781.js";import{V as x,a as o}from"./VRow-b0db7b1d.js";import{V as m}from"./VTextField-1e90003c.js";import{V as ne}from"./VTextarea-350869ad.js";import{V as E}from"./VSelect-8600eec3.js";import{V as de}from"./VInput-cd4c7816.js";import{V as G,a as T}from"./VRadioGroup-4c08c9dc.js";import{V as Z}from"./VDivider-0d474c05.js";import{a as K,V as re}from"./VTabs-7c012160.js";import{c as J,V as me}from"./VCard-db64c41e.js";import{V as ie,a as O}from"./VWindowItem-25e445b0.js";import{r as U,e as ue}from"./validators-d1aa93b7.js";import{V as R}from"./VCheckbox-475ad393.js";import{V as ce}from"./VAutocomplete-c36443a9.js";import{_ as Ve}from"./AppCardCode-514fb21c.js";import"./lazy-fe618c41.js";import"./forwardRefs-a29b5f65.js";/* empty css                   */import"./VField-027419e4.js";import"./easing-9f15041e.js";import"./VImg-c7c2167a.js";import"./transition-0c6e30e4.js";import"./VCounter-e2a77d8b.js";import"./VList-d87f0460.js";import"./ssrBoot-050ef406.js";import"./VAvatar-2c83efa5.js";import"./dialog-transition-9418ede6.js";import"./VMenu-55b2ccf7.js";import"./VOverlay-17b4c386.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./VChip-ca3f8676.js";import"./VSlideGroup-caf298cf.js";import"./index-61e4df1a.js";import"./filter-a3cf0501.js";import"./vue.runtime.esm-bundler-eb84b330.js";const pe=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),C("h6",{class:"text-base font-weight-medium"}," Free ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1),fe=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h5",{class:"text-base font-weight-medium"}," Express "),C("h6",{class:"text-base font-weight-medium"}," $5.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1),be=C("div",{class:"w-100"},[C("div",{class:"d-flex justify-space-between"},[C("h6",{class:"text-base font-weight-medium"}," Overnight "),C("h6",{class:"text-base font-weight-medium"}," $10.00 ")]),C("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1),Ce={class:"me-1"},ve={class:"d-flex gap-4"},we={__name:"DemoFormLayoutCollapsible",setup(g){const V=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],f=s("home"),u=s("standard"),i=s("credit-debit-card"),b=s(0),y=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"mdi-credit-card-outline"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"mdi-help-circle-outline"}];return(r,t)=>(k(),h(se,{modelValue:a(b),"onUpdate:modelValue":t[6]||(t[6]=d=>n(b)?b.value=d:null)},{default:l(()=>[e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Delivery Address")]),_:1}),e(j,{class:"mt-4"},{default:l(()=>[e(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Full Name"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Phone No",type:"number"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(ne,{label:"Address",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Pincode",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Landmark"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"City"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{items:V,label:"State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(de,{class:"mb-3"},{default:l(()=>[w(" Address Type ")]),_:1}),e(G,{modelValue:a(f),"onUpdate:modelValue":t[0]||(t[0]=d=>n(f)?f.value=d:null),inline:""},{default:l(()=>[C("div",null,[e(T,{label:"Home (All day delivery)",value:"home"}),e(T,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Delivery Options")]),_:1}),e(j,{class:"mt-4"},{default:l(()=>[e(G,{modelValue:a(u),"onUpdate:modelValue":t[4]||(t[4]=d=>n(u)?u.value=d:null),class:"delivery-options"},{default:l(()=>[C("div",{class:W(["delivery-option d-flex rounded-t",a(u)==="standard"?"active":""]),onClick:t[1]||(t[1]=d=>u.value="standard")},[e(T,{inline:"",value:"standard",class:"mt-n4"}),pe],2),C("div",{class:W(["delivery-option d-flex",a(u)==="express"?"active":""]),onClick:t[2]||(t[2]=d=>u.value="express")},[e(T,{inline:"",class:"mt-n4",value:"express"}),fe],2),C("div",{class:W(["delivery-option d-flex rounded-b",a(u)==="overnight"?"active":""]),onClick:t[3]||(t[3]=d=>u.value="overnight")},[e(T,{inline:"",class:"mt-n4",value:"overnight"}),be],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(A,null,{default:l(()=>[e(Y,null,{default:l(()=>[w("Payment Method")]),_:1}),e(j,{class:"mt-4"},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(_,null,{default:l(()=>[C("div",null,[e(G,{modelValue:a(i),"onUpdate:modelValue":t[5]||(t[5]=d=>n(i)?i.value=d:null),inline:""},{default:l(()=>[C("div",null,[(k(),Q(X,null,ee(y,d=>e(T,{key:d.radioValue,value:d.radioValue},{label:l(()=>[C("span",Ce,le(d.radioLabel),1),e(oe,{size:"18",icon:d.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),te(e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{label:"Card Number",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Name"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(m,{label:"Expiry Date",type:"string"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(m,{label:"CVV Code",type:"number"})]),_:1})]),_:1},512),[[ae,a(i)==="credit-debit-card"]])]),_:1})]),_:1})]),_:1}),e(Z,{class:"my-5"}),C("div",ve,[e(F,null,{default:l(()=>[w("Place Order")]),_:1}),e(F,{color:"secondary",variant:"tonal"},{default:l(()=>[w(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},ye={__name:"DemoFormLayoutFormWithTabs",setup(g){const V=s("personal-info"),f=s(""),u=s(""),i=s(),b=s(""),y=s(),r=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],t=["English","German","French","Spanish","Portuguese","Russian","Korean"],d=s(""),v=s(""),P=s(""),L=s(""),S=s(""),D=s(""),z=s(""),M=s(""),H=s(""),$=s(""),q=s([]),I=s(!1),B=s(!1);return(Ye,c)=>(k(),Q(X,null,[e(re,{modelValue:a(V),"onUpdate:modelValue":c[0]||(c[0]=p=>n(V)?V.value=p:null)},{default:l(()=>[e(K,{value:"personal-info"},{default:l(()=>[w(" Personal Info ")]),_:1}),e(K,{value:"account-details"},{default:l(()=>[w(" Account Details ")]),_:1}),e(K,{value:"social-links"},{default:l(()=>[w(" Social Links ")]),_:1})]),_:1},8,["modelValue"]),e(me,{flat:""},{default:l(()=>[e(J,null,{default:l(()=>[e(ie,{modelValue:a(V),"onUpdate:modelValue":c[19]||(c[19]=p=>n(V)?V.value=p:null),class:"disable-tab-transition"},{default:l(()=>[e(O,{value:"personal-info"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":c[1]||(c[1]=p=>n(f)?f.value=p:null),label:"First name"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":c[2]||(c[2]=p=>n(u)?u.value=p:null),label:"Last name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:a(i),"onUpdate:modelValue":c[3]||(c[3]=p=>n(i)?i.value=p:null),items:r,label:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(E,{modelValue:a(q),"onUpdate:modelValue":c[4]||(c[4]=p=>n(q)?q.value=p:null),items:t,multiple:"",chips:"",clearable:"",label:"Language"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":c[5]||(c[5]=p=>n(b)?b.value=p:null),label:"Birth Date",placeholder:"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(y),"onUpdate:modelValue":c[6]||(c[6]=p=>n(y)?y.value=p:null),type:"number",label:"Phone No."},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"account-details"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(d),"onUpdate:modelValue":c[7]||(c[7]=p=>n(d)?d.value=p:null),label:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(v),"onUpdate:modelValue":c[8]||(c[8]=p=>n(v)?v.value=p:null),label:"Email",suffix:"@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(P),"onUpdate:modelValue":c[9]||(c[9]=p=>n(P)?P.value=p:null),label:"Password",type:a(I)?"text":"password","append-inner-icon":a(I)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":c[10]||(c[10]=p=>I.value=!a(I))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(L),"onUpdate:modelValue":c[11]||(c[11]=p=>n(L)?L.value=p:null),label:"Confirm Password",type:a(B)?"text":"password","append-inner-icon":a(B)?"mdi-eye-outline":"mdi-eye-off-outline","onClick:appendInner":c[12]||(c[12]=p=>B.value=!a(B))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(O,{value:"social-links"},{default:l(()=>[e(_,{class:"mt-2"},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(S),"onUpdate:modelValue":c[13]||(c[13]=p=>n(S)?S.value=p:null),label:"Twitter"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(D),"onUpdate:modelValue":c[14]||(c[14]=p=>n(D)?D.value=p:null),label:"Facebook"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(z),"onUpdate:modelValue":c[15]||(c[15]=p=>n(z)?z.value=p:null),label:"Google+"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(M),"onUpdate:modelValue":c[16]||(c[16]=p=>n(M)?M.value=p:null),label:"LinkedIn"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(H),"onUpdate:modelValue":c[17]||(c[17]=p=>n(H)?H.value=p:null),label:"Instagram"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a($),"onUpdate:modelValue":c[18]||(c[18]=p=>n($)?$.value=p:null),label:"Quora"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(Z),e(J,{class:"d-flex gap-4"},{default:l(()=>[e(F,null,{default:l(()=>[w("Submit")]),_:1}),e(F,{color:"secondary",variant:"tonal"},{default:l(()=>[w(" Cancel ")]),_:1})]),_:1})]),_:1})],64))}},xe={__name:"DemoFormLayoutFormValidation",setup(g){const V=s(""),f=s(""),u=["Item 1","Item 2","Item 3","Item 4"],i=s(),b=s(!1),y=s();return(r,t)=>(k(),h(_,{ref_key:"form",ref:y,"lazy-validation":""},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(V),"onUpdate:modelValue":t[0]||(t[0]=d=>n(V)?V.value=d:null),rules:[a(U)],label:"Name",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":t[1]||(t[1]=d=>n(f)?f.value=d:null),rules:[a(ue),a(U)],label:"E-mail",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(E,{modelValue:a(i),"onUpdate:modelValue":t[2]||(t[2]=d=>n(i)?i.value=d:null),items:u,rules:[a(U)],label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(b),"onUpdate:modelValue":t[3]||(t[3]=d=>n(b)?b.value=d:null),rules:[a(U)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(F,{color:"success",onClick:t[4]||(t[4]=d=>{var v;return(v=a(y))==null?void 0:v.validate()})},{default:l(()=>[w(" Validate ")]),_:1}),e(F,{color:"error",onClick:t[5]||(t[5]=d=>{var v;return(v=a(y))==null?void 0:v.reset()})},{default:l(()=>[w(" Reset Form ")]),_:1}),e(F,{color:"warning",onClick:t[6]||(t[6]=d=>{var v;return(v=a(y))==null?void 0:v.resetValidation()})},{default:l(()=>[w(" Reset Validation ")]),_:1})]),_:1})]),_:1})]),_:1},512))}},Fe={__name:"DemoFormLayoutFormHint",setup(g){const V=s(""),f=s(""),u=s(),i=s(!1),b=["foo","bar","fizz","buzz"],y=s([]);return(r,t)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(V),"onUpdate:modelValue":t[0]||(t[0]=d=>n(V)?V.value=d:null),label:"Username",placeholder:"Username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":t[1]||(t[1]=d=>n(f)?f.value=d:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":t[2]||(t[2]=d=>n(u)?u.value=d:null),label:"Password",type:"password","persistent-hint":"",placeholder:"Password",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(ce,{modelValue:a(y),"onUpdate:modelValue":t[3]||(t[3]=d=>n(y)?y.value=d:null),items:b,chips:"",multiple:"",label:"Autocomplete"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(i),"onUpdate:modelValue":t[4]||(t[4]=d=>n(i)?i.value=d:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},_e={__name:"DemoFormLayoutMultipleColumn",setup(g){const V=s(""),f=s(""),u=s(""),i=s(""),b=s(""),y=s(""),r=s(!1);return(t,d)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(V),"onUpdate:modelValue":d[0]||(d[0]=v=>n(V)?V.value=v:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":d[1]||(d[1]=v=>n(f)?f.value=v:null),label:"Last Name",placeholder:"Last Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(y),"onUpdate:modelValue":d[2]||(d[2]=v=>n(y)?y.value=v:null),label:"Email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":d[3]||(d[3]=v=>n(u)?u.value=v:null),label:"City",placeholder:"City"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":d[4]||(d[4]=v=>n(i)?i.value=v:null),label:"Country",placeholder:"Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(m,{modelValue:a(b),"onUpdate:modelValue":d[5]||(d[5]=v=>n(b)?b.value=v:null),label:"Company",placeholder:"Company"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(r),"onUpdate:modelValue":d[6]||(d[6]=v=>n(r)?r.value=v:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},ke={__name:"DemoFormLayoutVerticalFormWithIcons",setup(g){const V=s(""),f=s(""),u=s(),i=s(),b=s(!1);return(y,r)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(V),"onUpdate:modelValue":r[0]||(r[0]=t=>n(V)?V.value=t:null),"prepend-inner-icon":"mdi-account-outline",label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":r[1]||(r[1]=t=>n(f)?f.value=t:null),"prepend-inner-icon":"mdi-email-outline",label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":r[2]||(r[2]=t=>n(u)?u.value=t:null),"prepend-inner-icon":"mdi-cellphone",label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":r[3]||(r[3]=t=>n(i)?i.value=t:null),"prepend-inner-icon":"mdi-lock-outline",label:"Password",type:"password",placeholder:"Password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(b),"onUpdate:modelValue":r[4]||(r[4]=t=>n(b)?b.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},ge={__name:"DemoFormLayoutVerticalForm",setup(g){const V=s(""),f=s(""),u=s(),i=s(),b=s(!1);return(y,r)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(V),"onUpdate:modelValue":r[0]||(r[0]=t=>n(V)?V.value=t:null),label:"First Name",placeholder:"First Name"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(f),"onUpdate:modelValue":r[1]||(r[1]=t=>n(f)?f.value=t:null),label:"Email",type:"email",placeholder:"Email"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(u),"onUpdate:modelValue":r[2]||(r[2]=t=>n(u)?u.value=t:null),label:"Mobile",type:"number",placeholder:"Number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(m,{modelValue:a(i),"onUpdate:modelValue":r[3]||(r[3]=t=>n(i)?i.value=t:null),label:"Password",type:"password",placeholder:"Password"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(R,{modelValue:a(b),"onUpdate:modelValue":r[4]||(r[4]=t=>n(b)?b.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},he=C("label",{for:"firstNameHorizontalIcons"},"First Name",-1),Ne=C("label",{for:"emailHorizontalIcons"},"Email",-1),Re=C("label",{for:"mobileHorizontalIcons"},"Mobile",-1),Te=C("label",{for:"passwordHorizontalIcons"},"Password",-1),Pe={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(g){const V=s(""),f=s(""),u=s(),i=s(),b=s(!1);return(y,r)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[he]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"firstNameHorizontalIcons",modelValue:a(V),"onUpdate:modelValue":r[0]||(r[0]=t=>n(V)?V.value=t:null),"prepend-inner-icon":"mdi-account-outline",placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ne]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"emailHorizontalIcons",modelValue:a(f),"onUpdate:modelValue":r[1]||(r[1]=t=>n(f)?f.value=t:null),"prepend-inner-icon":"mdi-email-outline",placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Re]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"mobileHorizontalIcons",modelValue:a(u),"onUpdate:modelValue":r[2]||(r[2]=t=>n(u)?u.value=t:null),type:"number","prepend-inner-icon":"mdi-cellphone",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Te]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"passwordHorizontalIcons",modelValue:a(i),"onUpdate:modelValue":r[3]||(r[3]=t=>n(i)?i.value=t:null),"prepend-inner-icon":"mdi-lock-outline",type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(R,{modelValue:a(b),"onUpdate:modelValue":r[4]||(r[4]=t=>n(b)?b.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},Le=C("label",{for:"firstName"},"First Name",-1),Ie=C("label",{for:"email"},"Email",-1),Be=C("label",{for:"mobile"},"Mobile",-1),Ue=C("label",{for:"password"},"Password",-1),Ee={__name:"DemoFormLayoutHorizontalForm",setup(g){const V=s(""),f=s(""),u=s(),i=s(),b=s(!1);return(y,r)=>(k(),h(_,{onSubmit:N(()=>{},["prevent"])},{default:l(()=>[e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Le]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"firstName",modelValue:a(V),"onUpdate:modelValue":r[0]||(r[0]=t=>n(V)?V.value=t:null),placeholder:"First Name","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ie]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"email",modelValue:a(f),"onUpdate:modelValue":r[1]||(r[1]=t=>n(f)?f.value=t:null),placeholder:"Email","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Be]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"mobile",modelValue:a(u),"onUpdate:modelValue":r[2]||(r[2]=t=>n(u)?u.value=t:null),type:"number",placeholder:"Number","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"},{default:l(()=>[Ue]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(m,{id:"password",modelValue:a(i),"onUpdate:modelValue":r[3]||(r[3]=t=>n(i)?i.value=t:null),type:"password",placeholder:"Password","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9"},{default:l(()=>[e(R,{modelValue:a(b),"onUpdate:modelValue":r[4]||(r[4]=t=>n(b)?b.value=t:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{"offset-md":"3",cols:"12",md:"9",class:"d-flex gap-4"},{default:l(()=>[e(F,{type:"submit"},{default:l(()=>[w(" Submit ")]),_:1}),e(F,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[w(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]))}},Se={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},De={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components/VForm'
import { emailValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},ze={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},Me={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},He={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="mdi-account-outline"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="mdi-email-outline"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="mdi-cellphone"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="mdi-lock-outline"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="mdi-account-outline"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="mdi-email-outline"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="mdi-cellphone"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="mdi-lock-outline"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},$e={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},qe={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},We={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="mdi-account-outline"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="mdi-email-outline"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="mdi-cellphone"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="mdi-lock-outline"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="mdi-account-outline"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="mdi-email-outline"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="mdi-cellphone"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="mdi-lock-outline"
          label="Password"
          type="password"
          placeholder="Password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Ae=C("h4",{class:"text-h6 mb-5"}," Collapsible Section ",-1),Pl={__name:"form-layouts",setup(g){return(V,f)=>{const u=Ee,i=Ve,b=Pe,y=ge,r=ke,t=_e,d=Fe,v=xe,P=ye,L=we;return k(),Q("div",null,[e(x,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form",code:Me},{default:l(()=>[e(u)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form with Icons",code:He},{default:l(()=>[e(b)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form",code:qe},{default:l(()=>[e(y)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form with Icons",code:We},{default:l(()=>[e(r)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Multiple Column",code:$e},{default:l(()=>[e(t)]),_:1},8,["code"])]),_:1})]),_:1}),e(x,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Hint",code:Se},{default:l(()=>[e(d)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Validation",code:De},{default:l(()=>[e(v)]),_:1},8,["code"])]),_:1})]),_:1}),e(x,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Form with Tabs","no-padding":"",code:ze},{default:l(()=>[e(P)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[Ae,e(L)]),_:1})]),_:1})])}}};export{Pl as default};
