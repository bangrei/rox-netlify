import{f as w,k as v,w as I,m as o,o as r,b as c,n as e,C as t,p as V,v as p,$ as y,c as m,a as f,F as _,y as C,t as T,Y as g,a2 as B,a8 as D,a9 as L,aa as N}from"./index-30b66760.js";import{b as x}from"./route-block-83d24a4e.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import{V as z,a as R}from"./VTabs-7c012160.js";import{a as h,V as F}from"./VRow-b0db7b1d.js";import{V as H,a as U}from"./VWindowItem-25e445b0.js";import{V as W,c as A}from"./VCard-db64c41e.js";import{V as E}from"./VAvatar-2c83efa5.js";import{V as Y,a as $,b as j}from"./VList-d87f0460.js";import"./VSlideGroup-caf298cf.js";import"./easing-9f15041e.js";import"./lazy-fe618c41.js";import"./transition-0c6e30e4.js";import"./ssrBoot-050ef406.js";import"./VImg-c7c2167a.js";import"./VDivider-0d474c05.js";const q=i=>(L("data-v-91edb9c1"),i=i(),N(),i),G={class:"text-xl font-weight-medium mb-3"},J={class:"text-sm"},K=q(()=>V("span",null,"Back to help center",-1)),k={__name:"index",setup(i){const b=w(),l=v(),s=v("");return I(s,()=>D.get("/pages/help-center/subcategory",{params:{category:b.params.category,subcategory:b.params.subcategory}}).then(u=>{l.value=u.data.data,s.value=u.data.activeTab}),{immediate:!0}),(u,n)=>o(l)?(r(),c(F,{key:0},{default:e(()=>[t(h,{cols:"12",md:"4"},{default:e(()=>[V("h6",G,p(o(l).title),1),t(z,{modelValue:o(s),"onUpdate:modelValue":n[0]||(n[0]=a=>y(s)?s.value=a:null),direction:"vertical",class:"v-tabs-pill"},{default:e(()=>[(r(!0),m(_,null,f(o(l).subCategories,a=>(r(),c(R,{key:a.slug,value:a.slug,to:{name:"pages-help-center-category-subcategory",params:{category:o(l).slug,subcategory:a.slug}}},{default:e(()=>[T(p(a.title),1)]),_:2},1032,["value","to"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(h,{cols:"12",md:"8"},{default:e(()=>[t(H,{modelValue:o(s),"onUpdate:modelValue":n[1]||(n[1]=a=>y(s)?s.value=a:null),class:"disable-tab-transition"},{default:e(()=>[(r(!0),m(_,null,f(o(l).subCategories,a=>(r(),c(U,{key:a.slug,value:a.slug},{default:e(()=>[t(W,{title:a.title},{prepend:e(()=>[t(E,{color:"primary",variant:"tonal",rounded:"",size:"34"},{default:e(()=>[t(g,{icon:a.icon,size:"24"},null,8,["icon"])]),_:2},1024)]),default:e(()=>[t(A,null,{default:e(()=>[t(Y,{class:"card-list mb-4"},{default:e(()=>[(r(!0),m(_,null,f(a.articles,d=>(r(),c($,{key:d.slug,to:{name:"pages-help-center-category-subcategory-article",params:{category:o(l).slug,subcategory:a.slug,article:d.slug}}},{prepend:e(()=>[t(g,{icon:"mdi-arrow-right",size:"14",class:"text-disabled flip-in-rtl me-2"})]),default:e(()=>[t(j,{class:"text-primary"},{default:e(()=>[V("span",J,p(d.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024),t(B,{variant:"outlined",to:{name:"pages-help-center"}},{default:e(()=>[t(g,{icon:"mdi-arrow-left",class:"flip-in-rtl me-2"}),K]),_:1})]),_:2},1024)]),_:2},1032,["title"])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})):C("",!0)}};typeof x=="function"&&x(k);const de=S(k,[["__scopeId","data-v-91edb9c1"]]);export{de as default};