/* empty css                   */import{m as q,f as G,V as H}from"./VField-027419e4.js";import{m as J,u as K,a as b}from"./VInput-cd4c7816.js";import{I as Q}from"./VImg-c7c2167a.js";import{f as W}from"./forwardRefs-a29b5f65.js";import{aA as Y,aw as Z,aX as $,a0 as m,k as x,aN as ee,bS as te,C as n,s as V,L as ne,aU as le,F as y,bT as ae,aT as p,bU as oe}from"./index-30b66760.js";import{V as ue}from"./VCounter-e2a77d8b.js";const ie=["color","file","time","date","datetime-local","week","month"],re=Y({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...J(),...q()},"v-text-field"),ye=Z()({name:"VTextField",directives:{Intersect:Q},inheritAttrs:!1,props:re(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,w){let{attrs:v,emit:C,slots:l}=w;const u=$(e,"modelValue"),{isFocused:r,focus:S,blur:T}=K(e),A=m(()=>typeof e.counterValue=="function"?e.counterValue(u.value):(u.value??"").toString().length),D=m(()=>{if(v.maxlength)return v.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function R(t,a){var o,i;!e.autofocus||!t||(i=(o=a[0].target)==null?void 0:o.focus)==null||i.call(o)}const g=x(),h=x(),s=x(),B=m(()=>ie.includes(e.type)||e.persistentPlaceholder||r.value);function d(){var t;s.value!==document.activeElement&&((t=s.value)==null||t.focus()),r.value||S()}function M(t){C("mousedown:control",t),t.target!==s.value&&(d(),t.preventDefault())}function N(t){d(),C("click:control",t)}function _(t){t.stopPropagation(),d(),p(()=>{u.value=null,oe(e["onClick:clear"],t)})}function E(t){var o;const a=t.target;if(u.value=a.value,(o=e.modelModifiers)!=null&&o.trim&&["text","search","password","tel","url"].includes(e.type)){const i=[a.selectionStart,a.selectionEnd];p(()=>{a.selectionStart=i[0],a.selectionEnd=i[1]})}}return ee(()=>{const t=!!(l.counter||e.counter||e.counterValue),a=!!(t||l.details),[o,i]=te(v),[{modelValue:se,...U}]=b.filterProps(e),[j]=G(e);return n(b,V({ref:g,modelValue:u.value,"onUpdate:modelValue":c=>u.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},o,U,{focused:r.value}),{...l,default:c=>{let{id:f,isDisabled:k,isDirty:F,isReadonly:z,isValid:L}=c;return n(H,V({ref:h,onMousedown:M,onClick:N,"onClick:clear":_,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},j,{id:f.value,active:B.value||F.value,dirty:F.value||e.dirty,disabled:k.value,focused:r.value,error:L.value===!1}),{...l,default:O=>{let{props:{class:P,...X}}=O;const I=ne(n("input",V({ref:s,value:u.value,onInput:E,autofocus:e.autofocus,readonly:z.value,disabled:k.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:T},X,i),null),[[le("intersect"),{handler:R},null,{once:!0}]]);return n(y,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),l.default?n("div",{class:P,"data-no-activator":""},[l.default(),I]):ae(I,{class:P}),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:a?c=>{var f;return n(y,null,[(f=l.details)==null?void 0:f.call(l,c),t&&n(y,null,[n("span",null,null),n(ue,{active:e.persistentCounter||r.value,value:A.value,max:D.value},l.counter)])])}:void 0})}),W({},g,h,s)}});export{ye as V,re as m};