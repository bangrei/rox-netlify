import{aw as h,az as d,aC as b,aF as m,aG as v,aI as f,aK as u,aN as c,C as t,aV as g}from"./index-30b66760.js";const T=h()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...d(),...b(),...m(),...v()},setup(a,n){let{slots:e}=n;const{themeClasses:i}=f(a),{densityClasses:r}=u(a);return c(()=>t(a.tag,{class:["v-table",{"v-table--fixed-height":!!a.height,"v-table--fixed-header":a.fixedHeader,"v-table--fixed-footer":a.fixedFooter,"v-table--has-top":!!e.top,"v-table--has-bottom":!!e.bottom,"v-table--hover":a.hover},i.value,r.value,a.class],style:a.style},{default:()=>{var o,l,s;return[(o=e.top)==null?void 0:o.call(e),e.default?t("div",{class:"v-table__wrapper",style:{height:g(a.height)}},[t("table",null,[e.default()])]):(l=e.wrapper)==null?void 0:l.call(e),(s=e.bottom)==null?void 0:s.call(e)]}})),{}}});export{T as V};