import{_ as d}from"./MoreBtn-ede11068.js";import{c,V as _}from"./VCard-db64c41e.js";import{V as f}from"./VAvatar-2c83efa5.js";import{aq as h,o,b as i,n as s,C as t,Y as g,y as l,p as a,v as r,c as x,x as V,m}from"./index-30b66760.js";import{V as y}from"./VSpacer-a17cbd45.js";const C={class:"text-sm font-weight-medium mb-1"},S={key:0,class:"d-flex align-center mb-1"},q={class:"font-weight-medium text-h6 me-2"},b={class:"text-caption"},$={__name:"CardStatisticsVertical",props:{title:{type:String,required:!0},color:{type:String,required:!1,default:"primary"},icon:{type:String,required:!0},stats:{type:String,required:!0},change:{type:Number,required:!0},subtitle:{type:String,required:!0}},setup(u){const e=u,n=h(()=>e.change,()=>Math.sign(e.change)===1);return(k,v)=>{const p=d;return o(),i(_,null,{default:s(()=>[t(c,{class:"d-flex align-center"},{default:s(()=>[e.icon?(o(),i(f,{key:0,size:"40",color:e.color,class:"elevation-2"},{default:s(()=>[t(g,{icon:e.icon,size:"24"},null,8,["icon"])]),_:1},8,["color"])):l("",!0),t(y),t(p,{class:"me-n3 mt-n1"})]),_:1}),t(c,null,{default:s(()=>[a("h6",C,r(e.title),1),e.change?(o(),x("div",S,[a("span",q,r(e.stats),1),a("span",{class:V([m(n)?"text-success":"text-error","text-caption"])},r(m(n)?`+${e.change}`:e.change)+"% ",3)])):l("",!0),a("span",b,r(e.subtitle),1)]),_:1})]),_:1})}}};export{$ as _};