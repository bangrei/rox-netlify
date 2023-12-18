import{_ as w}from"./AppSearchHeader-4473c817.js";import{a as g,V as f}from"./VRow-b0db7b1d.js";import{V as v,c as i}from"./VCard-db64c41e.js";import{V as $}from"./VImg-c7c2167a.js";import{o,b as m,n as t,C as e,c as d,F as b,a as C,p as s,v as h,a2 as V,t as n,r as A,Y as B,k as L,m as _,y as H,a8 as D}from"./index-30b66760.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{V as R}from"./VAvatar-2c83efa5.js";import"./useGenerateImageVariant-8fc05b40.js";import"./VTextField-1e90003c.js";/* empty css                   */import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-e2a77d8b.js";const F={class:"text-h6 my-3"},I={class:"clamp-text mb-3"},k={__name:"HelpCenterLandingArticlesOverview",props:{articles:{type:Array,required:!0}},setup(p){const a=p;return(y,c)=>(o(),m(f,null,{default:t(()=>[e(g,{cols:"12",lg:"10",class:"mx-auto mb-8"},{default:t(()=>[e(f,null,{default:t(()=>[(o(!0),d(b,null,C(a.articles,r=>(o(),m(g,{key:r.title,cols:"12",md:"4"},{default:t(()=>[e(v,{flat:"",border:""},{default:t(()=>[e(i,{class:"text-center"},{default:t(()=>[e($,{src:r.img,"aspect-ratio":"1",width:"58",class:"mx-auto"},null,8,["src"]),s("h6",F,h(r.title),1),s("p",I,h(r.subtitle),1),e(V,{variant:"outlined",to:{name:"pages-help-center-category-subcategory-article",params:{category:"getting-started",subcategory:"account",article:"changing-your-username"}}},{default:t(()=>[n(" Read More ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}},K={},S={class:"bg-var-theme-background py-12"},q=s("h5",{class:"text-h5 text-center mb-4"}," Still need help? ",-1),z=s("p",null,[n(" Our specialists are always happy to help. Contact us during standard business hours or email us "),s("br"),n(" 24/7 and we'll get back to you. ")],-1),O={class:"d-flex justify-center gap-4 flex-wrap"};function T(p,a){return o(),d("div",S,[e(i,{class:"text-center py-8"},{default:t(()=>[q,z,s("div",O,[e(V,null,{default:t(()=>[n("Visit our community")]),_:1}),e(V,null,{default:t(()=>[n("Contact us")]),_:1})])]),_:1})])}const j=N(K,[["render",T]]),E={class:"ps-6",style:{"list-style":"disc"}},M={class:"mt-4"},P={__name:"HelpCenterLandingKnowledgeBase",props:{categories:{type:Array,required:!0}},setup(p){const a=p,y=c=>c.subCategories.map(r=>r.articles.length).reduce((r,u)=>r+u,0);return(c,r)=>{const u=A("RouterLink");return o(),m(f,null,{default:t(()=>[e(g,{cols:"12",lg:"10",class:"mx-auto mb-8"},{default:t(()=>[e(f,null,{default:t(()=>[(o(!0),d(b,null,C(a.categories,l=>(o(),m(g,{key:l.title,cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{title:l.title},{prepend:t(()=>[e(R,{size:"36",rounded:"",color:l.avatarColor,variant:"tonal"},{default:t(()=>[e(B,{icon:l.icon,size:"24"},null,8,["icon"])]),_:2},1032,["color"])]),default:t(()=>[e(i,null,{default:t(()=>[s("ul",E,[(o(!0),d(b,null,C(l.subCategories,x=>(o(),d("li",{key:x.title,class:"text-primary mb-2"},[e(u,{to:{name:"pages-help-center-category-subcategory",params:{category:l.slug,subcategory:x.slug}}},{default:t(()=>[n(h(x.title),1)]),_:2},1032,["to"])]))),128))]),s("div",M,[e(u,{to:{name:"pages-help-center-category-subcategory",params:{category:l.slug,subcategory:l.subCategories[0].slug}},class:"text-sm font-weight-medium"},{default:t(()=>[n(h(y(l))+" articles ",1)]),_:2},1032,["to"])])]),_:2},1024)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})}}},Y=s("h5",{class:"text-h5 text-center mt-8 mb-6"}," Popular Articles ",-1),G=s("h5",{class:"text-h5 text-center mt-8 mb-6"}," Knowledge Base ",-1),J=s("h5",{class:"text-h5 text-center mt-8 mb-6"}," Keep Learning ",-1),pe={__name:"index",setup(p){const a=L();return(()=>D.get("/pages/help-center/landing").then(c=>{a.value=c.data}))(),(c,r)=>{const u=w;return _(a)?(o(),m(v,{key:0},{default:t(()=>[e(u,{title:"Hello, how can we help?",subtitle:"Common troubleshooting topics: eCommerce, Blogging to payment","custom-class":"rounded-0"}),e(i,{class:"py-12"},{default:t(()=>[Y,e(k,{articles:_(a).popularArticles},null,8,["articles"])]),_:1}),s("div",null,[e(i,{class:"bg-var-theme-background py-12"},{default:t(()=>[G,e(P,{categories:_(a).categories},null,8,["categories"])]),_:1})]),e(i,{class:"py-12"},{default:t(()=>[J,e(k,{articles:_(a).keepLearning},null,8,["articles"])]),_:1}),e(j)]),_:1})):H("",!0)}}};export{pe as default};
