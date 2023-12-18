import{k as u,r as x,o as v,c as b,C as e,n as a,p as r,m as t,J as c,t as d,v as g,a1 as k,a2 as w}from"./index-30b66760.js";import{_ as C}from"./AuthProvider-06c8da81.js";import{u as T}from"./useGenerateImageVariant-8fc05b40.js";import{V as I}from"./VNodeRenderer-3442d069.js";import{a as M,b as P,c as S,d as U}from"./auth-v1-tree-5358ed01.js";import{b as f}from"./route-block-83d24a4e.js";import{a as B,b as L,c as V,V as N}from"./VCard-db64c41e.js";import{V as R}from"./VForm-5a29b781.js";import{V as j,a as i}from"./VRow-b0db7b1d.js";import{V as m}from"./VTextField-1e90003c.js";import{V as D}from"./VCheckbox-475ad393.js";import{V as A}from"./VInput-cd4c7816.js";import{V as _}from"./VDivider-0d474c05.js";import{V as p}from"./VImg-c7c2167a.js";import"./VAvatar-2c83efa5.js";import"./forwardRefs-a29b5f65.js";/* empty css                   */import"./VField-027419e4.js";import"./easing-9f15041e.js";import"./VCounter-e2a77d8b.js";import"./transition-0c6e30e4.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";const E={class:"auth-wrapper d-flex align-center justify-center pa-4"},F={class:"d-flex"},$=r("h5",{class:"text-h5 mb-1"}," Adventure starts here 🚀 ",-1),G=r("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),J={class:"d-flex align-center mt-1 mb-4"},q=r("span",{class:"me-1"},"I agree to",-1),z=r("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),H=r("span",null,"Already have an account?",-1),K=r("span",{class:"mx-4"},"or",-1),O={__name:"register-v1",setup(Q){const o=u({username:"",email:"",password:"",privacyPolicies:!1}),y=T(U,S),n=u(!1);return(W,s)=>{const h=x("RouterLink");return v(),b("div",E,[e(N,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:a(()=>[e(B,{class:"justify-center"},{prepend:a(()=>[r("div",F,[e(t(I),{nodes:t(c).app.logo},null,8,["nodes"])])]),default:a(()=>[e(L,{class:"font-weight-medium text-2xl text-uppercase"},{default:a(()=>[d(g(t(c).app.title),1)]),_:1})]),_:1}),e(V,{class:"pt-2"},{default:a(()=>[$,G]),_:1}),e(V,null,{default:a(()=>[e(R,{onSubmit:k(()=>{},["prevent"])},{default:a(()=>[e(j,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:t(o).username,"onUpdate:modelValue":s[0]||(s[0]=l=>t(o).username=l),autofocus:"",label:"Username"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:t(o).email,"onUpdate:modelValue":s[1]||(s[1]=l=>t(o).email=l),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(m,{modelValue:t(o).password,"onUpdate:modelValue":s[2]||(s[2]=l=>t(o).password=l),label:"Password",type:t(n)?"text":"password","append-inner-icon":t(n)?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":s[3]||(s[3]=l=>n.value=!t(n))},null,8,["modelValue","type","append-inner-icon"]),r("div",J,[e(D,{id:"privacy-policy",modelValue:t(o).privacyPolicies,"onUpdate:modelValue":s[4]||(s[4]=l=>t(o).privacyPolicies=l),inline:""},null,8,["modelValue"]),e(A,{for:"privacy-policy",style:{opacity:"1"}},{default:a(()=>[q,z]),_:1})]),e(w,{block:"",type:"submit"},{default:a(()=>[d(" Sign up ")]),_:1})]),_:1}),e(i,{cols:"12",class:"text-center text-base"},{default:a(()=>[H,e(h,{class:"text-primary ms-2",to:{name:"pages-authentication-login-v1"}},{default:a(()=>[d(" Sign in instead ")]),_:1})]),_:1}),e(i,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(_),K,e(_)]),_:1}),e(i,{cols:"12",class:"text-center"},{default:a(()=>[e(C)]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1}),e(p,{class:"auth-footer-start-tree d-none d-md-block",src:t(M),width:250},null,8,["src"]),e(p,{src:t(P),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(p,{class:"auth-footer-mask d-none d-md-block",src:t(y)},null,8,["src"])])}}};typeof f=="function"&&f(O);export{O as default};
