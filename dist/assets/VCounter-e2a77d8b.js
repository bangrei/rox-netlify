import{aw as i,az as u,c1 as r,a0 as s,aN as l,C as n,L as m,M as c}from"./index-30b66760.js";import{m as v,M as d}from"./transition-0c6e30e4.js";const C=i()({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...u(),...v({transition:{component:r}})},setup(e,o){let{slots:a}=o;const t=s(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return l(()=>n(d,{transition:e.transition},{default:()=>[m(n("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:t.value,max:e.max,value:e.value}):t.value]),[[c,e.active]])]})),{}}});export{C as V};