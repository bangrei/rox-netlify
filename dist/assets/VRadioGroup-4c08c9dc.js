import{m as $,V as f,a as G,b as A}from"./VSelectionControl-a507e867.js";import{aw as p,aN as V,C as a,s as d,bg as O,aB as c,a_ as h,a0 as k,aX as N,bS as U,F as _}from"./index-30b66760.js";import{m as x,a as m,V as F}from"./VInput-cd4c7816.js";const T=p()({name:"VRadio",props:{...$({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,o){let{slots:s}=o;return V(()=>a(f,d(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),s)),{}}});const X=p()({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...x(),...O(G(),["multiple"]),trueIcon:{type:c,default:"$radioOn"},falseIcon:{type:c,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:s,slots:t}=o;const b=h(),i=k(()=>e.id||`radio-group-${b}`),l=N(e,"modelValue");return V(()=>{const[y,v]=U(s),[I,w]=m.filterProps(e),[g,B]=f.filterProps(e),r=t.label?t.label({label:e.label,props:{for:i.value}}):e.label;return a(m,d({class:["v-radio-group",e.class],style:e.style},y,I,{modelValue:l.value,"onUpdate:modelValue":u=>l.value=u,id:i.value}),{...t,default:u=>{let{id:n,messagesId:P,isDisabled:R,isReadonly:S}=u;return a(_,null,[r&&a(F,{id:n.value},{default:()=>[r]}),a(A,d(g,{id:n.value,"aria-describedby":P.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:R.value,readonly:S.value,"aria-labelledby":r?n.value:void 0,multiple:!1},v,{modelValue:l.value,"onUpdate:modelValue":C=>l.value=C}),t)])}})}),{}}});export{X as V,T as a};
