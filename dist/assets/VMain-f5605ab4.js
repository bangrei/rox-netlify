import{ap as d,k as v,w as f,aw as c,az as i,bL as b,bM as L,aN as m,C as u,aF as V,bN as p}from"./index-30b66760.js";import{u as k}from"./ssrBoot-050ef406.js";const B=(e=void 0)=>{const{mdAndDown:l,name:a}=d(),s=e||l,t=v(!0);return(()=>{t.value=!s.value})(),f(a,()=>{t.value=!s.value}),{isLeftSidebarOpen:t}};const w=c()({name:"VLayout",props:{...i(),...b()},setup(e,l){let{slots:a}=l;const{layoutClasses:s,layoutStyles:t,getLayoutItem:n,items:o,layoutRef:y}=L(e);return m(()=>{var r;return u("div",{ref:y,class:[s.value,e.class],style:[t.value,e.style]},[(r=a.default)==null?void 0:r.call(a)])}),{getLayoutItem:n,items:o}}});const C=c()({name:"VMain",props:{scrollable:Boolean,...i(),...V({tag:"main"})},setup(e,l){let{slots:a}=l;const{mainStyles:s}=p(),{ssrBootStyles:t}=k();return m(()=>u(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,t.value,e.style]},{default:()=>{var n,o;return[e.scrollable?u("div",{class:"v-main__scroller"},[(n=a.default)==null?void 0:n.call(a)]):(o=a.default)==null?void 0:o.call(a)]}})),{}}});export{C as V,w as a,B as u};
