import{_ as B}from"./AppDateTimePicker-8227ee10.js";import{a as m,V as $}from"./VRow-b0db7b1d.js";import{V as T}from"./VSelect-8600eec3.js";import{V as U}from"./VTextarea-350869ad.js";import{V as y}from"./VTextField-1e90003c.js";import{V as I}from"./VTooltip-d996192b.js";import{k as C,aW as P,w as k,a0 as S,r as R,o as v,c as g,p as e,C as t,n as l,m as d,$ as Y,t as b,v as n,x,Y as j,F as N,b as F,J as A,y as E,a as M,a2 as q}from"./index-30b66760.js";import{V as z,c as f}from"./VCard-db64c41e.js";import{u as O}from"./useInvoiceStore-e879a6f0.js";import{V as H}from"./VNodeRenderer-3442d069.js";import{V as h}from"./VDivider-0d474c05.js";const L={class:"add-products-header mb-2 d-none d-md-flex ps-5 pe-16"},W=e("h6",{class:"text-sm font-weight-medium"}," Item ",-1),J=e("h6",{class:"text-sm font-weight-medium"}," Cost ",-1),G=e("h6",{class:"text-sm font-weight-medium"}," Hours ",-1),K=e("h6",{class:"text-sm font-weight-medium"}," Price ",-1),Q={class:"pa-5 flex-grow-1"},X={class:"text-body-2 mt-5"},Z=e("p",{class:"mb-1"}," Discount ",-1),ee=e("span",null,"0%",-1),te={class:"mx-2"},se={class:"my-2"},oe=e("span",{class:"d-inline d-md-none"},"Price: ",-1),le={class:"text-body-1"},ae={__name:"InvoiceProductEdit",props:{id:{type:Number,required:!0},data:{type:Object,required:!0,default:()=>({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(D,{emit:s}){const V=D,_=[{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,hours:1,description:"Vuetify admin template."},{title:"App Development",cost:32,hours:1,description:"Native App Development."}],u=C("App Customization"),c=C(structuredClone(P(V.data)));k(u,()=>{const p=_.filter(o=>o.title===u.value);c.value=p[0]});const i=()=>{s("removeProduct",V.id)},a=S(()=>Number(c.value.cost)*Number(c.value.hours));return k(a,()=>{s("totalAmount",a.value)},{immediate:!0}),(p,o)=>{const w=R("IconBtn");return v(),g(N,null,[e("div",L,[t($,{class:"font-weight-medium"},{default:l(()=>[t(m,{cols:"12",md:"6"},{default:l(()=>[W]),_:1}),t(m,{cols:"12",md:"2"},{default:l(()=>[J]),_:1}),t(m,{cols:"12",md:"2"},{default:l(()=>[G]),_:1}),t(m,{cols:"12",md:"2"},{default:l(()=>[K]),_:1})]),_:1})]),t(z,{flat:"",border:"",class:"d-flex flex-sm-row flex-column-reverse"},{default:l(()=>[e("div",Q,[t($,null,{default:l(()=>[t(m,{cols:"12",md:"6"},{default:l(()=>[t(T,{modelValue:d(u),"onUpdate:modelValue":o[0]||(o[0]=r=>Y(u)?u.value=r:null),items:_,"item-title":"title","item-value":"title",label:"Select Item",class:"mb-5",density:"compact"},null,8,["modelValue"]),t(U,{modelValue:d(c).description,"onUpdate:modelValue":o[1]||(o[1]=r=>d(c).description=r),rows:"3",label:"Description",placeholder:"Description",density:"compact"},null,8,["modelValue"])]),_:1}),t(m,{cols:"12",md:"2",sm:"4"},{default:l(()=>[t(y,{modelValue:d(c).cost,"onUpdate:modelValue":o[2]||(o[2]=r=>d(c).cost=r),type:"number",label:"Cost",density:"compact"},null,8,["modelValue"]),e("div",X,[Z,ee,e("span",te,[b(" 0% "),t(I,{activator:"parent"},{default:l(()=>[b("Tax 1")]),_:1})]),e("span",null,[b(" 0% "),t(I,{activator:"parent"},{default:l(()=>[b("Tax 2")]),_:1})])])]),_:1}),t(m,{cols:"12",md:"2",sm:"4"},{default:l(()=>[t(y,{modelValue:d(c).hours,"onUpdate:modelValue":o[3]||(o[3]=r=>d(c).hours=r),type:"number",label:"Hours",density:"compact"},null,8,["modelValue"])]),_:1}),t(m,{cols:"12",md:"2",sm:"4"},{default:l(()=>[e("p",se,[oe,e("span",le,"$"+n(d(a)),1)])]),_:1})]),_:1})]),e("div",{class:x(["d-flex flex-column item-actions pa-1",p.$vuetify.display.smAndUp?"border-s":"border-b"])},[t(w,{onClick:i},{default:l(()=>[t(j,{size:20,icon:"mdi-close"})]),_:1})],2)]),_:1})],64)}}},ne={class:"mb-6"},ie={class:"d-flex align-center mb-6"},de={class:"text-xl text-uppercase"},ce=e("p",{class:"mb-0"}," Office 149, 450 South Brand Brooklyn ",-1),me=e("p",{class:"mb-0"}," San Diego County, CA 91905, USA ",-1),ue=e("p",{class:"mb-0"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),re={class:"mb-3"},pe={class:"d-flex align-center text-h6 justify-sm-end mb-4"},_e=e("span",{class:"me-3",style:{"inline-size":"6rem"}},"Invoice:",-1),fe={class:"d-flex align-center justify-sm-end mb-4"},he=e("span",{class:"me-3",style:{"inline-size":"6rem"}},"Date Issued:",-1),ve={style:{"inline-size":"9.5rem"}},be={class:"d-flex align-center justify-sm-end mb-0"},xe=e("span",{class:"me-3",style:{"inline-size":"6rem"}},"Due Date:",-1),ye={style:{"min-inline-size":"9.5rem"}},Ve={class:"mb-4 mb-sm-0",style:{"inline-size":"15.5rem"}},ge=e("h6",{class:"text-sm font-weight-medium mb-3"}," Invoice To: ",-1),De={class:"mb-1"},we={class:"mb-1"},Ce={key:0,class:"mb-1"},$e={class:"mb-1"},Ie={class:"mb-1"},ke=e("h6",{class:"text-sm font-weight-medium mb-3"}," Bill To: ",-1),Ae=e("td",{class:"pe-6"}," Total Due: ",-1),Te=e("td",{class:"pe-6"}," Bank Name: ",-1),Ue=e("td",{class:"pe-6"}," Country: ",-1),Ne=e("td",{class:"pe-6"}," IBAN: ",-1),ze=e("td",{class:"pe-6"}," SWIFT Code: ",-1),Be={class:"mb-6 mb-sm-0"},Pe={class:"d-flex align-center mb-4"},Se=e("h6",{class:"text-sm font-weight-medium me-2"}," Salesperson: ",-1),Re={class:"w-100"},Ye=e("td",{class:"pe-16"}," Subtotal: ",-1),je=e("h6",{class:"text-sm font-weight-medium"}," $1800 ",-1),Fe=[je],Ee=e("td",{class:"pe-16"}," Discount: ",-1),Me=e("h6",{class:"text-sm font-weight-medium"}," $28 ",-1),qe=[Me],Oe=e("td",{class:"pe-16"}," Tax: ",-1),He=e("h6",{class:"text-sm font-weight-medium"}," 21% ",-1),Le=[He],We={class:"w-100"},Je=e("td",null,"Total:",-1),Ge=e("h6",{class:"text-sm font-weight-medium"}," $1690 ",-1),Ke=[Ge],Qe=e("p",{class:"text-base font-weight-medium mb-1"}," Note: ",-1),ct={__name:"InvoiceEditable",props:{data:{type:null,required:!0}},setup(D){const s=D,V=O(),_=C([]);V.fetchClients().then(i=>{_.value=i.data}).catch(i=>{console.log(i)});const u=()=>{s.data.purchasedProducts.push({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})},c=i=>{s.data.purchasedProducts.splice(i,1)};return(i,a)=>{const p=B;return v(),F(z,null,{default:l(()=>[t(f,{class:"d-flex flex-wrap justify-space-between gap-y-5 flex-column flex-sm-row"},{default:l(()=>[e("div",ne,[e("div",ie,[t(d(H),{nodes:d(A).app.logo,class:"me-3"},null,8,["nodes"]),e("h6",de,n(d(A).app.title),1)]),ce,me,ue]),e("div",re,[e("h6",pe,[_e,e("span",null,[t(y,{modelValue:s.data.invoice.id,"onUpdate:modelValue":a[0]||(a[0]=o=>s.data.invoice.id=o),disabled:"",prefix:"#",density:"compact",style:{"inline-size":"9.5rem"}},null,8,["modelValue"])])]),e("p",fe,[he,e("span",ve,[t(p,{modelValue:s.data.invoice.issuedDate,"onUpdate:modelValue":a[1]||(a[1]=o=>s.data.invoice.issuedDate=o),density:"compact",placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])]),e("p",be,[xe,e("span",ye,[t(p,{modelValue:s.data.invoice.dueDate,"onUpdate:modelValue":a[2]||(a[2]=o=>s.data.invoice.dueDate=o),density:"compact",placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])])])]),_:1}),t(h,{class:"mb-2"}),t(f,{class:"d-flex flex-wrap justify-space-between flex-column flex-sm-row gap-y-5"},{default:l(()=>[e("div",Ve,[ge,t(T,{modelValue:s.data.invoice.client,"onUpdate:modelValue":a[3]||(a[3]=o=>s.data.invoice.client=o),items:d(_),"item-title":"name","item-value":"name",placeholder:"Select Customer","return-object":"",class:"mb-5",density:"compact"},null,8,["modelValue","items"]),e("p",De,n(s.data.invoice.client.name),1),e("p",we,n(s.data.invoice.client.company),1),s.data.invoice.client.address?(v(),g("p",Ce,n(s.data.invoice.client.address)+", "+n(s.data.invoice.client.country),1)):E("",!0),e("p",$e,n(s.data.invoice.client.contact),1),e("p",Ie,n(s.data.invoice.client.companyEmail),1)]),e("div",null,[ke,e("table",null,[e("tbody",null,[e("tr",null,[Ae,e("td",null,n(s.data.paymentDetails.totalDue),1)]),e("tr",null,[Te,e("td",null,n(s.data.paymentDetails.bankName),1)]),e("tr",null,[Ue,e("td",null,n(s.data.paymentDetails.country),1)]),e("tr",null,[Ne,e("td",null,n(s.data.paymentDetails.iban),1)]),e("tr",null,[ze,e("td",null,n(s.data.paymentDetails.swiftCode),1)])])])])]),_:1}),t(h),t(f,{class:"add-products-form"},{default:l(()=>[(v(!0),g(N,null,M(s.data.purchasedProducts,(o,w)=>(v(),g("div",{key:o.title,class:"mb-4"},[t(ae,{id:w,data:o,onRemoveProduct:c},null,8,["id","data"])]))),128)),t(q,{size:"small","prepend-icon":"mdi-plus",onClick:u},{default:l(()=>[b(" Add Item ")]),_:1})]),_:1}),t(h,{class:"my-2"}),t(f,{class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},{default:l(()=>[e("div",Be,[e("div",Pe,[Se,t(y,{modelValue:s.data.salesperson,"onUpdate:modelValue":a[4]||(a[4]=o=>s.data.salesperson=o),style:{"inline-size":"8rem"},density:"compact"},null,8,["modelValue"])]),t(y,{modelValue:s.data.thanksNote,"onUpdate:modelValue":a[5]||(a[5]=o=>s.data.thanksNote=o),placeholder:"Thanks for your business",density:"compact"},null,8,["modelValue"])]),e("div",null,[e("table",Re,[e("tr",null,[Ye,e("td",{class:x(i.$vuetify.locale.isRtl?"text-start":"text-end")},Fe,2)]),e("tr",null,[Ee,e("td",{class:x(i.$vuetify.locale.isRtl?"text-start":"text-end")},qe,2)]),e("tr",null,[Oe,e("td",{class:x(i.$vuetify.locale.isRtl?"text-start":"text-end")},Le,2)])]),t(h,{class:"mt-4 mb-3"}),e("table",We,[e("tr",null,[Je,e("td",{class:x(i.$vuetify.locale.isRtl?"text-start":"text-end")},Ke,2)])])])]),_:1}),t(h,{class:"mt-2"}),t(f,null,{default:l(()=>[Qe,t(U,{modelValue:s.data.note,"onUpdate:modelValue":a[6]||(a[6]=o=>s.data.note=o),rows:2},null,8,["modelValue"])]),_:1})]),_:1})}}};export{ct as _};