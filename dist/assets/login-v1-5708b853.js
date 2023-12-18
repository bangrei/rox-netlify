import{k as c,r as g,o as w,c as k,C as e,n as t,p as s,m as a,J as d,t as n,v as f,a1 as y,a2 as v}from"./index-30b66760.js";import{_ as C}from"./AuthProvider-06c8da81.js";import{u as T}from"./useGenerateImageVariant-8fc05b40.js";import{V as N}from"./VNodeRenderer-3442d069.js";import{a as R,b as B,c as I,d as L}from"./auth-v1-tree-5358ed01.js";import{b as _}from"./route-block-83d24a4e.js";import{a as M,b as P,c as V,V as j}from"./VCard-db64c41e.js";import{V as D}from"./VForm-5a29b781.js";import{V as F,a as i}from"./VRow-b0db7b1d.js";import{V as b}from"./VTextField-1e90003c.js";import{V as S}from"./VCheckbox-475ad393.js";import{V as h}from"./VDivider-0d474c05.js";import{V as p}from"./VImg-c7c2167a.js";import"./VAvatar-2c83efa5.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./forwardRefs-a29b5f65.js";/* empty css                   */import"./VField-027419e4.js";import"./easing-9f15041e.js";import"./VCounter-e2a77d8b.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";const U={class:"auth-wrapper d-flex align-center justify-center pa-4"},E={class:"d-flex"},$={class:"text-h5 mb-1"},z={class:"text-capitalize"},G=s("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),J={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},W=s("span",null,"New on our platform?",-1),q=s("span",{class:"mx-4"},"or",-1),A={__name:"login-v1",setup(H){const l=c({email:"",password:"",remember:!1}),x=T(L,I),m=c(!1);return(K,o)=>{const u=g("RouterLink");return w(),k("div",U,[e(j,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:t(()=>[e(M,{class:"justify-center"},{prepend:t(()=>[s("div",E,[e(a(N),{nodes:a(d).app.logo},null,8,["nodes"])])]),default:t(()=>[e(P,{class:"font-weight-medium text-2xl text-uppercase"},{default:t(()=>[n(f(a(d).app.title),1)]),_:1})]),_:1}),e(V,{class:"pt-2"},{default:t(()=>[s("h5",$,[n(" Welcome to "),s("span",z,f(a(d).app.title)+"! 👋🏻 ",1)]),G]),_:1}),e(V,null,{default:t(()=>[e(D,{onSubmit:y(()=>{},["prevent"])},{default:t(()=>[e(F,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(b,{modelValue:a(l).email,"onUpdate:modelValue":o[0]||(o[0]=r=>a(l).email=r),autofocus:"",label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:t(()=>[e(b,{modelValue:a(l).password,"onUpdate:modelValue":o[1]||(o[1]=r=>a(l).password=r),label:"Password",type:a(m)?"text":"password","append-inner-icon":a(m)?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":o[2]||(o[2]=r=>m.value=!a(m))},null,8,["modelValue","type","append-inner-icon"]),s("div",J,[e(S,{modelValue:a(l).remember,"onUpdate:modelValue":o[3]||(o[3]=r=>a(l).remember=r),label:"Remember me"},null,8,["modelValue"]),e(u,{class:"text-primary ms-2 mb-1",to:{name:"pages-authentication-forgot-password-v1"}},{default:t(()=>[n(" Forgot Password? ")]),_:1})]),e(v,{block:"",type:"submit"},{default:t(()=>[n(" Login ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:t(()=>[W,e(u,{class:"text-primary ms-2",to:{name:"pages-authentication-register-v1"}},{default:t(()=>[n(" Create an account ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:t(()=>[e(h),q,e(h)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:t(()=>[e(C)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),e(p,{class:"auth-footer-start-tree d-none d-md-block",src:a(R),width:250},null,8,["src"]),e(p,{src:a(B),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(p,{class:"auth-footer-mask d-none d-md-block",src:a(x)},null,8,["src"])])}}};typeof _=="function"&&_(A);export{A as default};