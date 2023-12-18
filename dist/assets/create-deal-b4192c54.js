import{_ as F}from"./AppStepper-f708818b.js";import{_ as $}from"./AppDateTimePicker-8227ee10.js";import{V as D,a as i}from"./VRow-b0db7b1d.js";import{V}from"./VTextField-1e90003c.js";import{V as k}from"./VTextarea-350869ad.js";import{V as b}from"./VSelect-8600eec3.js";import{V as v}from"./VCheckbox-475ad393.js";import{V as x}from"./VForm-5a29b781.js";import{k as _,w as y,o as f,b as c,n as a,C as e,m as t,p as n,t as C,x as B,$ as A,a2 as w,Y as P}from"./index-30b66760.js";import{V as N}from"./VChip-ca3f8676.js";import{V as h}from"./VSwitch-8edd9bc4.js";import{V as T}from"./VImg-c7c2167a.js";import{_ as R}from"./CustomRadiosWithIcon-3f897256.js";import{c as S,V as I}from"./VCard-db64c41e.js";import{V as M,a as U}from"./VWindowItem-25e445b0.js";import"./VSlideGroup-caf298cf.js";import"./VField-027419e4.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./easing-9f15041e.js";/* empty css                   */import"./forwardRefs-a29b5f65.js";import"./VCounter-e2a77d8b.js";import"./VList-d87f0460.js";import"./ssrBoot-050ef406.js";import"./VAvatar-2c83efa5.js";import"./VDivider-0d474c05.js";import"./dialog-transition-9418ede6.js";import"./VMenu-55b2ccf7.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./VRadioGroup-4c08c9dc.js";const O=n("h6",{class:"text-sm font-weight-medium mb-2"}," Notify Users ",-1),G={class:"d-flex align-center flex-wrap gap-x-3"},E={__name:"DealDetails",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(p,{emit:m}){const o=_(p.formData),u=["Apple iPhone 12 Pro Max (256GB)","Apple iPhone 12 Pro (512GB)","Apple iPhone 11 Pro Max (256GB)","Apple iPhone 11 (64GB)","Apple iPhone 12 Mini (256GB)","OnePlus Nord CE 56 (128GB)"];return y(o,()=>{m("update:formData",o.value)}),(d,l)=>{const g=$;return f(),c(x,null,{default:a(()=>[e(D,null,{default:a(()=>[e(i,{cols:"12",sm:"6"},{default:a(()=>[e(V,{modelValue:t(o).title,"onUpdate:modelValue":l[0]||(l[0]=s=>t(o).title=s),label:"Deal Title"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:""},{default:a(()=>[e(V,{modelValue:t(o).code,"onUpdate:modelValue":l[1]||(l[1]=s=>t(o).code=s),label:"Deal Code"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(k,{modelValue:t(o).description,"onUpdate:modelValue":l[2]||(l[2]=s=>t(o).description=s),label:"Deal Description",rows:"4","auto-grow":""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(D,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(b,{modelValue:t(o).offeredUItems,"onUpdate:modelValue":l[3]||(l[3]=s=>t(o).offeredUItems=s),multiple:"",chips:"",label:"Offered Items",items:u},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(b,{modelValue:t(o).cartCondition,"onUpdate:modelValue":l[4]||(l[4]=s=>t(o).cartCondition=s),label:"Cart Condition",items:["Cart must contain all selected Downloads","Cart needs one or more of the selected Downloads"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(g,{modelValue:t(o).dealDuration,"onUpdate:modelValue":l[5]||(l[5]=s=>t(o).dealDuration=s),label:"Deal Duration",config:{mode:"range"}},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[O,n("div",G,[e(v,{modelValue:t(o).notification.email,"onUpdate:modelValue":l[6]||(l[6]=s=>t(o).notification.email=s),label:"Email",value:"email"},null,8,["modelValue"]),e(v,{modelValue:t(o).notification.sms,"onUpdate:modelValue":l[7]||(l[7]=s=>t(o).notification.sms=s),label:"SMS",value:"sms"},null,8,["modelValue"]),e(v,{modelValue:t(o).notification.pushNotification,"onUpdate:modelValue":l[8]||(l[8]=s=>t(o).notification.pushNotification=s),label:"Push Notification",value:"push-notification"},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1})}}},q="/assets/create-deal-review-complete-686852bb.png",W=n("h5",{class:"text-h5 mb-4"}," Almost done! 🚀 ",-1),L=n("p",{class:"text-base"}," Confirm your deal details information and submit to create it. ",-1),j={class:"text-base"},z=n("tr",null,[n("td",{style:{width:"202px"}},[n("p",{class:"font-weight-medium mb-2"}," Deal Type ")]),n("td",null,[n("p",{class:"mb-2"}," Percentage ")])],-1),Y=n("tr",null,[n("td",null,[n("p",{class:"font-weight-medium mb-2"}," Amount ")]),n("td",null,[n("p",{class:"mb-2"}," 25% ")])],-1),H=n("td",null,[n("p",{class:"font-weight-medium mb-2"}," Deal Code ")],-1),J={class:"mb-2"},K=n("tr",null,[n("td",null,[n("p",{class:"font-weight-medium mb-2"}," Deal Title ")]),n("td",null,[n("p",{class:"mb-2"}," Black friday sale, 25% OFF ")])],-1),Q=n("tr",null,[n("td",null,[n("p",{class:"font-weight-medium mb-2"}," Deal Duration ")]),n("td",null,[n("p",{class:"mb-2"}," 2021-07-14 to 2021-07-30 ")])],-1),X={class:"border rounded pa-4 pb-0"},Z={__name:"DealReviewComplete",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(p,{emit:m}){const o=_(p.formData);return y(o,()=>{m("update:formData",o.value)}),(u,d)=>(f(),c(D,null,{default:a(()=>[e(i,{cols:"12",md:"7"},{default:a(()=>[W,L,n("table",j,[z,Y,n("tr",null,[H,n("td",null,[n("p",J,[e(N,{density:"compact",color:"warning"},{default:a(()=>[C(" 25PEROFF ")]),_:1})])])]),K,Q]),e(h,{modelValue:t(o).isDealDetailsConfirmed,"onUpdate:modelValue":d[0]||(d[0]=l=>t(o).isDealDetailsConfirmed=l),label:"I have confirmed the deal details.",class:"mb-3"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"5"},{default:a(()=>[n("div",X,[e(T,{width:"178",src:t(q),class:"mx-auto"},null,8,["src"])])]),_:1})]),_:1}))}},ee="/assets/shopping-girl-b9b9cf51.png",le={__name:"DealType",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(p,{emit:m}){const r=p,o=[{icon:"mdi-tag-outline",title:"Percentage",desc:"Create a deal which offer uses some % off (i.e 5% OFF) on total.",value:"percentage"},{icon:"mdi-currency-usd",title:"Flat Amount",desc:"Create a deal which offer uses some flat amount (i.e $5 OFF) on total.",value:"flat"},{icon:"mdi-account-outline",title:"Prime member",desc:"Create prime member only deal to encourage the prime members.",value:"prime"}],u=_(r.formData);return y(u,()=>{m("update:formData",u.value)}),(d,l)=>{const g=R;return f(),c(x,null,{default:a(()=>[e(D,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(T,{src:t(ee),class:"border rounded"},null,8,["src"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(g,{"selected-radio":t(u).Offer,"onUpdate:selectedRadio":l[0]||(l[0]=s=>t(u).Offer=s),"radio-content":o,"grid-column":{cols:"12",sm:"4"}},null,8,["selected-radio"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(V,{modelValue:t(u).discount,"onUpdate:modelValue":l[1]||(l[1]=s=>t(u).discount=s),type:"number",label:"Discount",hint:"Enter the discount percentage. 10 = 10%","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(b,{modelValue:t(u).region,"onUpdate:modelValue":l[2]||(l[2]=s=>t(u).region=s),label:"Region",items:["Asia","Europe","Africa","Australia","North America","South America"],hint:"Select applicable regions for the deal.","persistent-hint":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},te={__name:"DealUsage",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(p,{emit:m}){const o=_(p.formData);return y(o,()=>{m("update:formData",o.value)}),(u,d)=>(f(),c(x,null,{default:a(()=>[e(D,null,{default:a(()=>[e(i,{cols:"12",sm:"6"},{default:a(()=>[e(b,{modelValue:t(o).userType,"onUpdate:modelValue":d[0]||(d[0]=l=>t(o).userType=l),label:"User Type",items:["All","Registered","Unregistered","Prime Member"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(V,{modelValue:t(o).maxUsers,"onUpdate:modelValue":d[1]||(d[1]=l=>t(o).maxUsers=l),label:"Max Users",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(V,{modelValue:t(o).cartAmount,"onUpdate:modelValue":d[2]||(d[2]=l=>t(o).cartAmount=l),label:"Minimum Cart Amount",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(V,{modelValue:t(o).promotionFree,"onUpdate:modelValue":d[3]||(d[3]=l=>t(o).promotionFree=l),label:"Promotion Fee",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(b,{modelValue:t(o).paymentMethod,"onUpdate:modelValue":d[4]||(d[4]=l=>t(o).paymentMethod=l),label:"Payment Method",items:["Any","Credit Card","Net Banking","Wallet"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:a(()=>[e(b,{modelValue:t(o).dealStatus,"onUpdate:modelValue":d[5]||(d[5]=l=>t(o).dealStatus=l),label:"Deal Status",items:["Active","Inactive","Suspended","Abandoned"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(h,{modelValue:t(o).isSingleUserCustomer,"onUpdate:modelValue":d[6]||(d[6]=l=>t(o).isSingleUserCustomer=l),label:"Limit this discount to a single-use per customer?"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}))}},oe={class:"d-flex justify-sm-space-between gap-4 flex-wrap justify-center mt-5"},Oe={__name:"create-deal",setup(p){const m=[{title:"Deal Type",subtitle:"Choose type of deal"},{title:"Deal Details",subtitle:"Provide deal details"},{title:"Deal Usage",subtitle:"Limitations & Offers"},{title:"Review & Complete",subtitle:"Launch a deal"}],r=_(0),o=_({dealType:{Offer:"percentage",discount:null,region:void 0},dealDetails:{title:"",code:"",description:"",offeredUItems:[],cartCondition:void 0,dealDuration:"",notification:{email:!1,sms:!1,pushNotification:!1}},dealUsage:{userType:void 0,maxUsers:null,cartAmount:null,promotionFree:null,paymentMethod:void 0,dealStatus:void 0,isSingleUserCustomer:!1},dealReviewComplete:{isDealDetailsConfirmed:!0}}),u=()=>{console.log("createDealData :>> ",o.value)};return(d,l)=>{const g=F;return f(),c(I,null,{default:a(()=>[e(D,{"no-gutters":""},{default:a(()=>[e(i,{cols:"12",md:"4",lg:"3",class:B(d.$vuetify.display.mdAndUp?"border-e":"border-b")},{default:a(()=>[e(S,null,{default:a(()=>[e(g,{"current-step":t(r),"onUpdate:currentStep":l[0]||(l[0]=s=>A(r)?r.value=s:null),direction:"vertical",items:m},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(i,{cols:"12",md:"8",lg:"9"},{default:a(()=>[e(S,null,{default:a(()=>[e(M,{modelValue:t(r),"onUpdate:modelValue":l[5]||(l[5]=s=>A(r)?r.value=s:null),class:"disable-tab-transition"},{default:a(()=>[e(U,null,{default:a(()=>[e(le,{"form-data":t(o).dealType,"onUpdate:formData":l[1]||(l[1]=s=>t(o).dealType=s)},null,8,["form-data"])]),_:1}),e(U,null,{default:a(()=>[e(E,{"form-data":t(o).dealDetails,"onUpdate:formData":l[2]||(l[2]=s=>t(o).dealDetails=s)},null,8,["form-data"])]),_:1}),e(U,null,{default:a(()=>[e(te,{"form-data":t(o).dealUsage,"onUpdate:formData":l[3]||(l[3]=s=>t(o).dealUsage=s)},null,8,["form-data"])]),_:1}),e(U,null,{default:a(()=>[e(Z,{"form-data":t(o).dealReviewComplete,"onUpdate:formData":l[4]||(l[4]=s=>t(o).dealReviewComplete=s)},null,8,["form-data"])]),_:1})]),_:1},8,["modelValue"]),n("div",oe,[e(w,{color:t(r)===0?"secondary":"default",variant:"outlined",disabled:t(r)===0,onClick:l[6]||(l[6]=s=>r.value--)},{default:a(()=>[e(P,{icon:"mdi-arrow-left",start:"",class:"flip-in-rtl"}),C(" Previous ")]),_:1},8,["color","disabled"]),m.length-1===t(r)?(f(),c(w,{key:0,color:"success","append-icon":"mdi-check",onClick:u},{default:a(()=>[C(" submit ")]),_:1})):(f(),c(w,{key:1,onClick:l[7]||(l[7]=s=>r.value++)},{default:a(()=>[C(" Next "),e(P,{icon:"mdi-arrow-right",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Oe as default};