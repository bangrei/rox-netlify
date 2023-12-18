import{_ as A}from"./DialogCloseBtn-d9d81ae7.js";import{k as g,aW as b,w as $,o as c,b as _,n as a,C as l,t as m,a1 as N,m as d,$ as j,a2 as y,v as U,c as q,F as R,a as O,p as V,x as H,Y as L,y as M}from"./index-30b66760.js";import{V as k,a as B,b as I,d as S,c as E}from"./VCard-db64c41e.js";import{V as T}from"./VForm-5a29b781.js";import{V as w,a as s}from"./VRow-b0db7b1d.js";import{V as u}from"./VTextField-1e90003c.js";import{V as F}from"./VSwitch-8edd9bc4.js";import{V as z}from"./VDialog-39650760.js";import{V as P}from"./VTextarea-350869ad.js";const ol={__name:"UserInfoEditDialog",props:{userData:{type:Object,required:!1,default:()=>({id:0,fullName:"",company:"",role:"",username:"",country:"",contact:"",email:"",currentPlan:"",status:"",avatar:"",taskDone:null,projectDone:null,taxId:"",language:""})},isDialogVisible:{type:Boolean,required:!0}},emits:["submit","update:isDialogVisible"],setup(v,{emit:n}){const i=v,t=g(structuredClone(b(i.userData))),r=g(!1);$(i,()=>{t.value=structuredClone(b(i.userData))});const C=()=>{n("update:isDialogVisible",!1),n("submit",t.value)},f=()=>{t.value=structuredClone(b(i.userData)),n("update:isDialogVisible",!1)},D=p=>{n("update:isDialogVisible",p)};return(p,o)=>{const x=A;return c(),_(z,{width:p.$vuetify.display.smAndDown?"auto":900,"model-value":i.isDialogVisible,"onUpdate:modelValue":D},{default:a(()=>[l(k,{class:"pa-sm-9 pa-5"},{default:a(()=>[l(x,{variant:"text",size:"small",onClick:f}),l(B,{class:"text-center"},{default:a(()=>[l(I,{class:"text-h5 mb-6"},{default:a(()=>[m(" Edit User Information ")]),_:1}),l(S,null,{default:a(()=>[m(" Updating user details will receive a privacy audit. ")]),_:1})]),_:1}),l(E,null,{default:a(()=>[l(T,{class:"mt-6",onSubmit:N(C,["prevent"])},{default:a(()=>[l(w,null,{default:a(()=>[l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).fullName,"onUpdate:modelValue":o[0]||(o[0]=e=>d(t).fullName=e),label:"Full Name"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).username,"onUpdate:modelValue":o[1]||(o[1]=e=>d(t).username=e),label:"Username"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).email,"onUpdate:modelValue":o[2]||(o[2]=e=>d(t).email=e),label:"Billing Email"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).status,"onUpdate:modelValue":o[3]||(o[3]=e=>d(t).status=e),label:"Status"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).taxId,"onUpdate:modelValue":o[4]||(o[4]=e=>d(t).taxId=e),label:"Tax Id"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).contact,"onUpdate:modelValue":o[5]||(o[5]=e=>d(t).contact=e),label:"Contact"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).language,"onUpdate:modelValue":o[6]||(o[6]=e=>d(t).language=e),label:"Language"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).country,"onUpdate:modelValue":o[7]||(o[7]=e=>d(t).country=e),label:"Country"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12"},{default:a(()=>[l(F,{modelValue:d(r),"onUpdate:modelValue":o[8]||(o[8]=e=>j(r)?r.value=e:null),density:"compact",label:"Use as a billing address?"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",class:"d-flex flex-wrap justify-center gap-4"},{default:a(()=>[l(y,{type:"submit"},{default:a(()=>[m(" Submit ")]),_:1}),l(y,{color:"secondary",variant:"tonal",onClick:f},{default:a(()=>[m(" Cancel ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},W=["onClick"],Y={class:"d-flex align-center font-weight-medium gap-2 text-xl mb-1"},Z={class:"d-flex justify-center gap-4"},dl={__name:"AddEditAddressDialog",props:{billingAddress:{type:Object,required:!1,default:()=>({companyName:"",billingEmail:"",taxID:"",vatNumber:"",address:"",contact:"",country:null,state:"",zipCode:null})},isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","submit"],setup(v,{emit:n}){const i=v,t=g(structuredClone(b(i.billingAddress))),r=()=>{n("update:isDialogVisible",!1),t.value=structuredClone(b(i.billingAddress))},C=()=>{n("update:isDialogVisible",!1),n("submit",t.value)},f=g("Home"),D=[{icon:"mdi-home-outline",title:"Home",time:"Delivery Time (7am - 9pm)"},{icon:"mdi-briefcase-outline",title:"Office",time:"Delivery Time (10am - 6pm)"}];return(p,o)=>{const x=A;return c(),_(z,{width:p.$vuetify.display.smAndDown?"auto":900,"model-value":i.isDialogVisible,"onUpdate:modelValue":o[9]||(o[9]=e=>p.$emit("update:isDialogVisible",e))},{default:a(()=>[i.billingAddress?(c(),_(k,{key:0,class:"pa-sm-8 pa-5"},{default:a(()=>[l(x,{variant:"text",size:"small",onClick:r}),l(B,null,{default:a(()=>[l(I,{class:"text-h5 text-center"},{default:a(()=>[m(U(i.billingAddress.address?"Edit":"Add New")+" Address ",1)]),_:1})]),_:1}),l(E,null,{default:a(()=>[l(S,{class:"text-center mb-9"},{default:a(()=>[m(" Edit Address for future billing ")]),_:1}),l(w,null,{default:a(()=>[(c(),q(R,null,O(D,e=>l(s,{key:e.title,cols:"12",sm:"6"},{default:a(()=>[V("div",{class:H(["rounded border cursor-pointer border-opacity-100 pa-4",d(f)===e.title?"bg-light-primary text-primary border-primary":"bg-var-theme-background text-high-emphasis border-secondary"]),onClick:G=>f.value=e.title},[V("div",Y,[l(L,{size:"24",icon:e.icon},null,8,["icon"]),V("span",null,U(e.title),1)]),V("span",null,U(e.time),1)],10,W)]),_:2},1024)),64))]),_:1}),l(T,{class:"mt-4",onSubmit:N(C,["prevent"])},{default:a(()=>[l(w,null,{default:a(()=>[l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).companyName,"onUpdate:modelValue":o[0]||(o[0]=e=>d(t).companyName=e),label:"Company Name"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).billingEmail,"onUpdate:modelValue":o[1]||(o[1]=e=>d(t).billingEmail=e),label:"Email"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).taxID,"onUpdate:modelValue":o[2]||(o[2]=e=>d(t).taxID=e),label:"Tax ID"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).vatNumber,"onUpdate:modelValue":o[3]||(o[3]=e=>d(t).vatNumber=e),label:"VAT Number"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12"},{default:a(()=>[l(P,{modelValue:d(t).address,"onUpdate:modelValue":o[4]||(o[4]=e=>d(t).address=e),rows:"2",label:"Billing Address"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).contact,"onUpdate:modelValue":o[5]||(o[5]=e=>d(t).contact=e),label:"Contact"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).country,"onUpdate:modelValue":o[6]||(o[6]=e=>d(t).country=e),label:"Country"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).state,"onUpdate:modelValue":o[7]||(o[7]=e=>d(t).state=e),label:"State"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",md:"6"},{default:a(()=>[l(u,{modelValue:d(t).zipCode,"onUpdate:modelValue":o[8]||(o[8]=e=>d(t).zipCode=e),label:"Zip Code",type:"number"},null,8,["modelValue"])]),_:1}),l(s,{cols:"12",class:"d-flex flex-wrap gap-4 gap-y-6 flex-column"},{default:a(()=>[V("div",null,[l(F,{label:"Make this default shipping address"})]),V("div",Z,[l(y,{type:"submit"},{default:a(()=>[m(" submit ")]),_:1}),l(y,{variant:"tonal",color:"secondary",onClick:r},{default:a(()=>[m(" Cancel ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})):M("",!0)]),_:1},8,["width","model-value"])}}};export{dl as _,ol as a};