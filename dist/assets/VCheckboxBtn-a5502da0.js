import{m as s,V as d}from"./VSelectionControl-a507e867.js";import{aA as f,aB as I,aw as k,aX as o,a0 as c,aN as x,C as V,s as b}from"./index-30b66760.js";const h=f({indeterminate:Boolean,indeterminateIcon:{type:I,default:"$checkboxIndeterminate"},...s({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),y=k()({name:"VCheckboxBtn",props:h(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,l){let{slots:i}=l;const n=o(e,"indeterminate"),t=o(e,"modelValue");function r(a){n.value&&(n.value=!1)}const u=c(()=>e.indeterminate?e.indeterminateIcon:e.falseIcon),m=c(()=>e.indeterminate?e.indeterminateIcon:e.trueIcon);return x(()=>V(d,b(e,{modelValue:t.value,"onUpdate:modelValue":[a=>t.value=a,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",inline:!0,falseIcon:u.value,trueIcon:m.value,"aria-checked":e.indeterminate?"mixed":void 0}),i)),{}}});export{y as V,h as m};
