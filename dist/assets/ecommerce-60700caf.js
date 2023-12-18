import{_ as se}from"./CardStatisticsVertical-7540a5c3.js";import{u as oe}from"./useInvoiceStore-e879a6f0.js";import{a as re,k as le}from"./formatters-33197472.js";import{V as ne}from"./VDataTableServer-64897da7.js";import{k as $,a6 as ie,r as ce,m as c,o as m,c as C,C as e,n as t,$ as ue,Y as P,t as _,v as u,s as de,p as a,b as y,y as me,x as pe,a9 as _e,aa as fe,ao as A,N,aq as S,F as E,a as M,a3 as he,an as ge,am as ve,a5 as be,ak as ye,aj as we,ar as b,ap as xe,a2 as $e,ah as K,ai as Z}from"./index-30b66760.js";import{V as ke}from"./VTooltip-d996192b.js";import{V as D}from"./VAvatar-2c83efa5.js";import{V as Te}from"./VImg-c7c2167a.js";import{V as ee}from"./VChip-ca3f8676.js";import{V as Ve}from"./VDivider-0d474c05.js";import{V as T,a as z,b as O,c as k,d as Ce}from"./VCard-db64c41e.js";import{i as Se}from"./illustration-john-2-310a82d3.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import{V as I,a as p}from"./VRow-b0db7b1d.js";import{V as R}from"./vue3-apexcharts.common-7493a8a0.js";import{_ as F}from"./MoreBtn-ede11068.js";import{V as Q,a as q,b as G,c as X}from"./VList-d87f0460.js";import{V as te}from"./VListItemAction-fc2e2a26.js";import{p as Pe,c as Be,a as Ie,w as Ee,b as Me}from"./wallet-4475f912.js";import{V as ze}from"./VBadge-97dc237c.js";import{V as Oe}from"./VSpacer-a17cbd45.js";import"./index-61e4df1a.js";import"./VDataTable-a879dec1.js";import"./VCheckboxBtn-a5502da0.js";import"./VSelectionControl-a507e867.js";import"./VInput-cd4c7816.js";import"./transition-0c6e30e4.js";import"./VSelect-8600eec3.js";import"./VTextField-1e90003c.js";/* empty css                   */import"./VField-027419e4.js";import"./easing-9f15041e.js";import"./forwardRefs-a29b5f65.js";import"./VCounter-e2a77d8b.js";import"./dialog-transition-9418ede6.js";import"./VMenu-55b2ccf7.js";import"./VOverlay-17b4c386.js";import"./lazy-fe618c41.js";import"./filter-a3cf0501.js";import"./VTable-944d2dec.js";import"./vue.runtime.esm-bundler-eb84b330.js";import"./ssrBoot-050ef406.js";const Re={key:0},Le={class:"mb-0"},We={class:"mb-0"},De={class:"mb-0"},Ae={class:"d-flex align-center"},Ne={key:1},Fe={class:"d-flex flex-column"},Ue={class:"text-sm font-weight-medium mb-0"},Je={class:"text-caption"},Ye={key:1,class:"text-high-emphasis"},je={__name:"EcommerceBillingTable",setup(g){const i=oe(),o=$(""),r=$(""),d=$(),f=$(1),n=$(0),l=$([]),V=$([]),w=$({page:1,itemsPerPage:8,sortBy:[],groupBy:[],search:void 0}),x=$(!1),L=[{title:"#ID",key:"id"},{title:"TRENDING",key:"trending",sortable:!1},{title:"CLIENT",key:"client"},{title:"TOTAL",key:"total"},{title:"BALANCE",key:"balance"}],ae=(h,v,Y,s,j)=>{x.value=!0,i.fetchInvoices({q:h,status:v,startDate:Y,endDate:s,options:j}).then(W=>{l.value=W.data.invoices,f.value=W.data.totalPage,n.value=W.data.totalInvoices}).catch(W=>{console.log(W)}),x.value=!1},B=(h,v)=>h===v?{status:"Unpaid",chip:{color:"error"}}:h===0?{status:"Paid",chip:{color:"success"}}:{status:h,chip:{variant:"text"}},J=h=>h==="Partial Payment"?{variant:"warning",icon:"mdi-chart-timeline-variant"}:h==="Paid"?{variant:"success",icon:"mdi-check"}:h==="Downloaded"?{variant:"info",icon:"mdi-arrow-down"}:h==="Draft"?{variant:"secondary",icon:"mdi-content-save-outline"}:h==="Sent"?{variant:"primary",icon:"mdi-email-outline"}:h==="Past Due"?{variant:"error",icon:"mdi-alert-circle-outline"}:{variant:"secondary",icon:"mdi-close"};return ie(()=>{const[h,v]=r.value?r.value.split("to"):"";ae(o.value,d.value,h,v,w.value)}),(h,v)=>{const Y=ce("RouterLink");return c(l)?(m(),C("section",Re,[e(T,{id:"invoice-list"},{default:t(()=>[e(c(ne),{modelValue:c(V),"onUpdate:modelValue":v[0]||(v[0]=s=>ue(V)?V.value=s:null),"items-per-page":c(w).itemsPerPage,"onUpdate:itemsPerPage":v[1]||(v[1]=s=>c(w).itemsPerPage=s),page:c(w).page,"onUpdate:page":v[2]||(v[2]=s=>c(w).page=s),loading:c(x),"items-length":c(n),headers:L,items:c(l),class:"text-no-wrap text-sm","onUpdate:options":v[3]||(v[3]=s=>w.value=s)},{"column.trending":t(()=>[e(P,{size:"22",icon:"mdi-trending-up"})]),"item.id":t(({item:s})=>[e(Y,{to:{name:"apps-invoice-preview-id",params:{id:s.value}}},{default:t(()=>[_(" #"+u(s.raw.id),1)]),_:2},1032,["to"])]),"item.trending":t(({item:s})=>[e(ke,null,{activator:t(({props:j})=>[e(D,de({size:34},j,{color:J(s.raw.invoiceStatus).variant,variant:"tonal"}),{default:t(()=>[e(P,{size:20,icon:J(s.raw.invoiceStatus).icon},null,8,["icon"])]),_:2},1040,["color"])]),default:t(()=>[a("p",Le,u(s.raw.invoiceStatus),1),a("p",We," Balance: "+u(s.raw.balance),1),a("p",De," Due date: "+u(s.raw.dueDate),1)]),_:2},1024)]),"item.client":t(({item:s})=>[a("div",Ae,[e(D,{size:"34",color:s.raw.avatar.length?void 0:J(s.raw.invoiceStatus).variant,variant:s.raw.avatar.length?void 0:"tonal",class:"me-3"},{default:t(()=>[s.raw.avatar.length?(m(),y(Te,{key:0,src:s.raw.avatar},null,8,["src"])):(m(),C("span",Ne,u(c(re)(s.raw.client.name)),1))]),_:2},1032,["color","variant"]),a("div",Fe,[a("h6",Ue,u(s.raw.client.name),1),a("span",Je,u(s.raw.client.companyEmail),1)])])]),"item.total":t(({item:s})=>[_(" $"+u(s.raw.total),1)]),"item.balance":t(({item:s})=>[typeof B(s.raw.balance,s.raw.total).status=="string"?(m(),y(ee,{key:0,color:B(s.raw.balance,s.raw.total).chip.color,density:"comfortable"},{default:t(()=>[_(u(B(s.raw.balance,s.raw.total).status),1)]),_:2},1032,["color"])):(m(),C("span",Ye,u(Number(B(s.raw.balance,s.raw.total).status)>0?`$${B(s.raw.balance,s.raw.total).status}`:`-$${Math.abs(Number(B(s.raw.balance,s.raw.total).status))}`),1))]),bottom:t(()=>[]),_:1},8,["modelValue","items-per-page","page","loading","items-length","items"]),e(Ve)]),_:1})])):me("",!0)}}};const U=g=>(_e("data-v-779fef2f"),g=g(),fe(),g),He=U(()=>a("span",{class:"me-1"},"Congratulations",-1)),Qe=U(()=>a("strong",{class:"me-1"},"John!",-1)),qe=U(()=>a("span",null,"🎉",-1)),Ge=U(()=>a("br",null,null,-1)),Xe=["src"],Ke={__name:"EcommerceCongratulations",setup(g){return(i,o)=>(m(),y(T,{class:"pa-2 overflow-visible"},{default:t(()=>[e(I,{"no-gutters":""},{default:t(()=>[e(p,{cols:"12",sm:"10",md:"6",order:"2","order-sm":"1"},{default:t(()=>[e(z,null,{default:t(()=>[e(O,{class:"text-md-h5"},{default:t(()=>[He,Qe,qe]),_:1})]),_:1}),e(k,{class:"mt-3"},{default:t(()=>[_(" You have done 72% 🤩 more sales today. "),Ge,_(" Check your new raising badge in your profile. ")]),_:1})]),_:1}),e(p,{cols:"12",sm:"2",md:"6",order:"1","order-sm":"2",class:"text-center"},{default:t(()=>[a("img",{src:c(Se),width:"295",class:pe([i.$vuetify.display.xs?"position-relative":"position-absolute","john-illustration flip-in-rtl"])},null,10,Xe)]),_:1})]),_:1})]),_:1}))}},Ze=H(Ke,[["__scopeId","data-v-779fef2f"]]),et=a("h6",{class:"text-h6"}," $35.4k ",-1),tt=a("h6",{class:"text-sm text-center font-weight-medium"}," Total Revenue ",-1),at={__name:"EcommerceLineCharts",setup(g){const i=A(),{theme:o}=N(),r=S(o,()=>i.current.value.colors),d=[{data:[28,58,40,68]}],f=S(o,()=>({grid:{show:!1,padding:{left:-2,top:-10}},chart:{parentHeightOffset:0,type:"line",offsetX:-8,dropShadow:{enabled:!0,top:10,blur:4,color:r.value.primary,opacity:.09},toolbar:{show:!1}},markers:{size:6,colors:"transparent",strokeColors:"transparent",strokeWidth:4,discrete:[{seriesIndex:0,dataPointIndex:d[0].data.length-1,fillColor:r.value.surface,strokeColor:r.value.primary,size:6}],hover:{size:7}},stroke:{width:5,curve:"smooth",lineCap:"round"},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1}},yaxis:{labels:{show:!1}},tooltip:{enabled:!1},colors:[r.value.primary]}));return(n,l)=>(m(),y(T,null,{default:t(()=>[e(k,null,{default:t(()=>[et,e(c(R),{options:c(f),series:d,height:90},null,8,["options"]),tt]),_:1})]),_:1}))}};const st={class:"me-n3"},ot={class:"text-xs"},rt={__name:"EcommerceMeetingSchedule",setup(g){const i=[{profile:he,with:"Call with Woods",dateTime:"21 Jul | 08:20-10:30",type:"Business"},{profile:ge,with:"Call with hilda",dateTime:"24 Jul | 11:30-12:00",type:"Meditation"},{profile:ve,with:"Conference call",dateTime:"28 Jul | 05:00-6:45",type:"Meditation"},{profile:be,with:"Meeting with Mark",dateTime:"03 Aug | 07:00-8:30",type:"Meetup"},{profile:ye,with:"Meeting in Oakland",dateTime:"14 Aug | 04:15-05:30",type:"Business"},{profile:we,with:"Meeting with Carl",dateTime:"05 Oct | 10:00-12:45",type:"Party"}],o={Business:"primary",Meditation:"success",Meetup:"secondary",Party:"warning"};return(r,d)=>{const f=F;return m(),y(T,null,{default:t(()=>[e(z,null,{append:t(()=>[a("div",st,[e(f)])]),default:t(()=>[e(O,null,{default:t(()=>[_("Meeting Schedule")]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(Q,{lines:"two",class:"card-list"},{default:t(()=>[(m(),C(E,null,M(i,n=>e(q,{key:n.type},{prepend:t(()=>[e(D,{start:"",size:38,image:n.profile},null,8,["image"])]),append:t(()=>[e(te,null,{default:t(()=>[e(ee,{density:"compact",color:o[n.type]},{default:t(()=>[a("span",ot,u(n.type),1)]),_:2},1032,["color"])]),_:2},1024)]),default:t(()=>[e(G,{class:"text-sm font-weight-medium mb-1"},{default:t(()=>[_(u(n.with),1)]),_:2},1024),e(X,{class:"text-no-wrap text-xs"},{default:t(()=>[e(P,{start:"",size:"16",icon:"mdi-calendar-blank"}),a("span",null,u(n.dateTime),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}},lt=H(rt,[["__scopeId","data-v-a5748034"]]),nt=a("p",{class:"text-xs mb-1"},[_(" 48% new visitors "),a("br"),_(" this week. ")],-1),it={class:"d-flex align-center"},ct=a("h6",{class:"text-h6"}," 12,480 ",-1),ut=a("span",{class:"text-success font-weight-medium"},"28",-1),dt={__name:"EcommerceNewVisitors",setup(g){const o=A().current.value.colors,r=[{data:[40,60,50,60,90,40,50]}],d={chart:{parentHeightOffset:0,toolbar:{show:!1}},grid:{show:!1,padding:{top:-5,left:-10,right:-7,bottom:-12}},plotOptions:{bar:{borderRadius:4,distributed:!0,columnWidth:"60%",endingShape:"rounded",startingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},colors:[`rgba(${b(o.primary)},0.1)`,`rgba(${b(o.primary)},0.1)`,`rgba(${b(o.primary)},0.1)`,`rgba(${b(o.primary)},0.1)`,o.primary,`rgba(${b(o.primary)},0.1)`,`rgba(${b(o.primary)},0.1)`,`rgba(${b(o.primary)},0.1)`],states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},xaxis:{tickPlacement:"on",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1},categories:["S","M","T","W","T","F","S"]},yaxis:{show:!1},tooltip:{enabled:!1}};return(f,n)=>(m(),y(T,null,{default:t(()=>[e(I,{"no-gutters":""},{default:t(()=>[e(p,{cols:"6"},{default:t(()=>[e(z,null,{default:t(()=>[e(O,null,{default:t(()=>[_("New Visitors")]),_:1})]),_:1}),e(k,{class:"pt-3"},{default:t(()=>[nt,a("div",it,[ct,e(P,{icon:"mdi-chevron-up",size:"24",color:"success"}),ut])]),_:1})]),_:1}),e(p,{cols:"6"},{default:t(()=>[e(k,null,{default:t(()=>[e(c(R),{type:"bar",options:d,series:r,height:148})]),_:1})]),_:1})]),_:1})]),_:1}))}};const mt=a("h6",{class:"text-h6"}," 135k ",-1),pt=a("h6",{class:"text-sm text-center font-weight-medium mt-9"}," Total Sales ",-1),_t={__name:"EcommerceRadialBarCharts",setup(g){const i=A(),{theme:o}=N(),r=S(o,()=>i.current.value.colors),d=S(o,()=>i.current.value.variables),f=[78],n=S(o,()=>({chart:{sparkline:{enabled:!0}},colors:[r.value.info],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"65%"},dataLabels:{name:{show:!1},value:{fontSize:"1.25rem",fontWeight:"600",offsetY:0,color:`rgba(${b(r.value["on-surface"])},${d.value["high-emphasis-opacity"]})`}},track:{background:r.value.background}}},stroke:{lineCap:"round"}}));return(l,V)=>(m(),y(T,null,{default:t(()=>[e(k,null,{default:t(()=>[mt,e(c(R),{id:"stats-radial-bar-chart",options:c(n),series:f,type:"radialBar",height:110},null,8,["options"]),pt]),_:1})]),_:1}))}};const ft=a("h6",{class:"text-h6"}," Total Profit ",-1),ht={class:"mt-n7 me-n3"},gt={__name:"EcommerceTotalProfit",setup(g){const i=A(),{theme:o}=N(),{thresholds:r}=xe(),d=S(o,()=>{const l=$(i.current.value.colors),V=$(i.current.value.variables),w=`rgba(${b(l.value["on-surface"])},${V.value["disabled-opacity"]})`,x=`rgba(${b(String(V.value["border-color"]))},${V.value["border-opacity"]})`;return{chart:{stacked:!0,parentHeightOffset:0,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:10,columnWidth:"35%",endingShape:"rounded",startingShape:"rounded"}},xaxis:{axisTicks:{show:!1},crosshairs:{opacity:0},axisBorder:{show:!1},categories:[2016,2017,2018,2019,2020,2021,2022],labels:{style:{fontSize:"12px",colors:w,fontFamily:"inter"}}},yaxis:{labels:{offsetX:-17,style:{fontSize:"12px",colors:w,fontFamily:"inter"},formatter:L=>L>999?`${(L/1e3).toFixed(0)}k`:`${L}`}},colors:[l.value.primary,l.value.success,l.value.secondary],grid:{borderColor:x,strokeDashArray:7,padding:{top:-1,right:0,left:-12,bottom:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{width:6,curve:"smooth",lineCap:"round",colors:[l.value.surface]},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},responsive:[{breakpoint:r.value.xl,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:r.value.lg,options:{plotOptions:{bar:{columnWidth:"50%"}}}},{breakpoint:r.value.sm,options:{plotOptions:{bar:{columnWidth:"45%"}}}},{breakpoint:430,options:{plotOptions:{bar:{columnWidth:"55%"}}}}]}}),f=[{name:"Product A",data:[29e3,22e3,25e3,18500,29e3,2e4,34500]},{name:"Product B",data:[0,16e3,11e3,15500,0,12500,9500]},{name:"Product C",data:[0,0,0,14e3,0,11500,12e3]}],n=[{avatar:{icon:"mdi-trending-up",color:"success"},title:"$48,568.20",subtitle:"Total Profit"},{avatar:{icon:"mdi-account-outline",color:"primary"},title:"$38,453.25",subtitle:"Total Income"},{avatar:{icon:"mdi-currency-usd",color:"secondary"},title:"$2,453.45",subtitle:"Total Expense"}];return(l,V)=>{const w=F;return m(),y(T,null,{default:t(()=>[e(I,{"no-gutters":""},{default:t(()=>[e(p,{cols:"12",sm:"7",class:"responsive-border"},{default:t(()=>[e(k,null,{default:t(()=>[ft,e(c(R),{type:"bar",options:c(d),series:f,height:280},null,8,["options"])]),_:1})]),_:1}),e(p,{cols:"12",sm:"5"},{default:t(()=>[e(z,null,{append:t(()=>[a("div",ht,[e(w)])]),default:t(()=>[e(O,{class:"text-h5"},{default:t(()=>[_(" $482.85k ")]),_:1}),e(Ce,{class:"mb-2"},{default:t(()=>[_(" Last month balance $234.40k ")]),_:1})]),_:1}),e(k,{class:"pt-2"},{default:t(()=>[e(Q,{class:"card-list"},{default:t(()=>[(m(),C(E,null,M(n,x=>e(q,{key:x.title},{prepend:t(()=>[e(D,{variant:"tonal",color:x.avatar.color,rounded:""},{default:t(()=>[e(P,{icon:x.avatar.icon},null,8,["icon"])]),_:2},1032,["color"])]),default:t(()=>[e(G,{class:"font-weight-medium"},{default:t(()=>[_(u(x.title),1)]),_:2},1024),e(X,null,{default:t(()=>[_(u(x.subtitle),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),e($e,{block:"",class:"mt-6"},{default:t(()=>[_(" View Report ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},vt=a("h6",{class:"text-h6 mb-5"}," Total Sales ",-1),bt=a("span",{class:"text-xs"},"Calculated in last 7 days",-1),yt={class:"d-flex align-center"},wt=a("h6",{class:"text-h6"}," $25,980 ",-1),xt={class:"text-success text-xs text-no-wrap"},$t=a("span",null,"15.6%",-1),kt={__name:"EcommerceTotalSalesCharts",setup(g){const i=A(),{theme:o}=N(),r=S(o,()=>i.current.value.colors),d=S(o,()=>i.current.value.variables),f=S(o,()=>({chart:{sparkline:{enabled:!0},animations:{enabled:!1}},stroke:{width:6,colors:[r.value.surface]},legend:{show:!1},tooltip:{enabled:!1},dataLabels:{enabled:!1},colors:[r.value.primary,r.value.info,r.value.warning,r.value.error],grid:{padding:{top:-7,bottom:5}},states:{hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},plotOptions:{pie:{expandOnClick:!1,donut:{size:"75%",labels:{show:!0,name:{offsetY:-2,formatter:()=>"28%"},value:{offsetY:2,fontSize:"12px",color:`rgba(${b(r.value["on-surface"])},${d.value["medium-emphasis-opacity"]})`,formatter:()=>"1 Quarter"},total:{show:!0,label:"18%",fontSize:"20px",fontWeight:500,color:`rgba(${b(r.value["on-surface"])},${d.value["high-emphasis-opacity"]})`,formatter:()=>"1 Quarter"}}}}}}));return(n,l)=>(m(),y(T,null,{default:t(()=>[e(k,{class:"d-flex justify-space-between align-center gap-3"},{default:t(()=>[a("div",null,[vt,bt,a("div",yt,[wt,a("span",xt,[e(P,{icon:"mdi-chevron-up",size:"24"}),$t])])]),e(c(R),{type:"donut",options:c(f),series:[80,22,30,50],height:120,width:110},null,8,["options"])]),_:1})]),_:1}))}};const Tt={class:"me-n3"},Vt=["src"],Ct={class:"text-base me-3"},St={__name:"EcommerceTransactions",setup(g){const i=[{gateway:"Paypal",for:"Freelance Work",amount:2482,img:Pe},{gateway:"Credit Card",for:"Digital Ocean",amount:-1250,img:Be},{gateway:"Mastercard",for:"Netflix",amount:-99,img:Ie},{gateway:"Wallet",for:"Mac'D",amount:-82,img:Ee},{gateway:"Transfer",for:"Refund",amount:8934,img:Me}],o={Paypal:"error","Credit Card":"success",Mastercard:"warning",Wallet:"primary",Transfer:"info"},r=d=>Math.sign(d)===1?`+${le(d)}`:`-${Math.abs(d)}`;return(d,f)=>{const n=F;return m(),y(T,null,{default:t(()=>[e(z,null,{append:t(()=>[a("div",Tt,[e(n)])]),default:t(()=>[e(O,null,{default:t(()=>[_("Transactions")]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(Q,{class:"card-list"},{default:t(()=>[(m(),C(E,null,M(i,l=>e(q,{key:l.for},{prepend:t(()=>[e(D,{rounded:"",color:o[l.gateway],variant:"tonal",class:"me-3"},{default:t(()=>[a("img",{width:"20",src:l.img,alt:"transition"},null,8,Vt)]),_:2},1032,["color"])]),append:t(()=>[e(te,{class:"font-weight-medium"},{default:t(()=>[a("span",Ct,u(r(l.amount)),1),e(P,{size:24,color:Math.sign(l.amount)===1?"success":"error",icon:Math.sign(l.amount)===1?"mdi-chevron-up":"mdi-chevron-down"},null,8,["color","icon"])]),_:2},1024)]),default:t(()=>[e(G,{class:"font-weight-medium text-sm mb-1"},{default:t(()=>[_(u(l.gateway),1)]),_:2},1024),e(X,{class:"text-xs"},{default:t(()=>[_(u(l.for),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1})]),_:1})}}},Pt=H(St,[["__scopeId","data-v-1ca0216f"]]);const Bt={class:"me-n3"},It={class:"d-flex align-center justify-space-between mb-6"},Et=a("div",null,[a("h3",{class:"text-h3"}," 4,590 "),a("span",{class:"text-xs"},"Total Traffic")],-1),Mt={style:{"max-width":"7.5rem",height:"5rem"}},zt={class:"text-sm font-weight-regular"},Ot={class:"text-sm font-weight-medium me-6"},Rt={class:"text-sm font-weight-medium me-1"},Lt={__name:"EcommerceWebsiteStatistics",setup(g){const i={chart:{type:"bar",parentHeightOffset:0,toolbar:{show:!1},sparkline:{enabled:!0}},grid:{show:!1},colors:["rgba(var(--v-theme-primary))"],plotOptions:{bar:{horizontal:!1,columnWidth:"30%",startingShape:"rounded",endingShape:"rounded",borderRadius:4}},legend:{show:!1},dataLabels:{enabled:!1},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{enabled:!1}},o=[{name:"2020",data:[50,40,110,80,40,60,40]}],r=[{title:"Direct",color:"success",traffic:"86,471",percentage:"-15"},{title:"Organic Search",color:"primary",traffic:"57,484",percentage:"+85"},{title:"Referral",color:"warning",traffic:"2,534",percentage:"+48"},{title:"Mail",color:"error",traffic:"977",percentage:"-36"}];return(d,f)=>{const n=F;return m(),y(T,null,{default:t(()=>[e(z,null,{append:t(()=>[a("div",Bt,[e(n)])]),default:t(()=>[e(O,null,{default:t(()=>[_("Website Statistics")]),_:1})]),_:1}),e(k,{class:"pt-4"},{default:t(()=>[a("div",It,[Et,a("div",Mt,[e(c(R),{options:i,series:o})])]),(m(),C(E,null,M(r,l=>a("div",{key:l.title,class:"statistics-table d-flex align-center"},[e(ze,{color:l.color,variant:"elevated",class:"badge-size"},null,8,["color"]),a("h6",zt,u(l.title),1),e(Oe),a("h6",Ot,u(l.traffic),1),a("h6",Rt,u(l.percentage.slice(1))+"% ",1),e(P,{size:24,color:l.percentage.charAt(0)==="+"?"success":"error"},{default:t(()=>[_(u(l.percentage.charAt(0)==="+"?"mdi-chevron-up":"mdi-chevron-down"),1)]),_:2},1032,["color"])])),64))]),_:1})]),_:1})}}};const Va={__name:"ecommerce",setup(g){const i=[{title:"Transactions",color:"info",icon:"mdi-trending-up",stats:"1.2k",change:38,subtitle:"Daily Transactions"},{title:"Revenue",color:"success",icon:"mdi-currency-usd",stats:"$95.2k",change:12,subtitle:"Revenue Increase"}],o=[{title:"Logistics",color:"error",icon:"mdi-truck-outline",stats:"44.10k",change:12,subtitle:"Revenue Increase"},{title:"Reports",color:"warning",icon:"mdi-check",stats:"268",change:-8,subtitle:"System Bugs"}];return(r,d)=>{const f=se;return m(),y(I,{class:"match-height"},{default:t(()=>[e(p,{cols:"12",md:"6",lg:"8",class:"d-flex flex-column align-self-end"},{default:t(()=>[e(Ze)]),_:1}),(m(),C(E,null,M(i,n=>e(p,{key:n.title,cols:"12",sm:"6",md:"3",lg:"2"},{default:t(()=>[e(f,K(Z(n)),null,16)]),_:2},1024)),64)),e(p,{cols:"12",md:"8"},{default:t(()=>[e(gt)]),_:1}),e(p,{cols:"12",md:"4"},{default:t(()=>[e(I,null,{default:t(()=>[e(p,{cols:"12"},{default:t(()=>[e(kt)]),_:1}),e(p,{cols:"6"},{default:t(()=>[e(at)]),_:1}),e(p,{cols:"6"},{default:t(()=>[e(_t)]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"4"},{default:t(()=>[e(Pt)]),_:1}),e(p,{cols:"12",md:"4"},{default:t(()=>[e(I,null,{default:t(()=>[(m(),C(E,null,M(o,n=>e(p,{key:n.title,cols:"6"},{default:t(()=>[e(f,K(Z(n)),null,16)]),_:2},1024)),64)),e(p,{cols:"12"},{default:t(()=>[e(dt)]),_:1})]),_:1})]),_:1}),e(p,{cols:"12",md:"4"},{default:t(()=>[e(Lt)]),_:1}),e(p,{cols:"12",md:"8"},{default:t(()=>[e(je)]),_:1}),e(p,{cols:"12",md:"4"},{default:t(()=>[e(lt)]),_:1})]),_:1})}}};export{Va as default};
