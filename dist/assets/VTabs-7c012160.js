import{m as U,a as w}from"./VSlideGroup-caf298cf.js";import{aw as M,bg as Y,dL as q,b9 as F,a0 as z,k as V,aN as G,a2 as E,C as m,s as k,aC as K,aF as L,aX as O,aK as W,bd as j,X as l,be as J,aV as Q}from"./index-30b66760.js";import{a as Z,s as p}from"./easing-9f15041e.js";const R=Symbol.for("vuetify:v-tabs"),ee=M()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...Y(q({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,t){let{slots:o,attrs:b}=t;const{textColorClasses:y,textColorStyles:h}=F(e,"sliderColor"),a=z(()=>e.direction==="horizontal"),c=V(!1),f=V(),s=V();function X(x){var T,B;let{value:u}=x;if(c.value=u,u){const C=(B=(T=f.value)==null?void 0:T.$el.parentElement)==null?void 0:B.querySelector(".v-tab--selected .v-tab__slider"),S=s.value;if(!C||!S)return;const _=getComputedStyle(C).color,n=C.getBoundingClientRect(),r=S.getBoundingClientRect(),g=a.value?"x":"y",v=a.value?"X":"Y",$=a.value?"right":"bottom",i=a.value?"width":"height",D=n[g],N=r[g],d=D>N?n[$]-r[$]:n[g]-r[g],A=Math.sign(d)>0?a.value?"right":"bottom":Math.sign(d)<0?a.value?"left":"top":"center",H=(Math.abs(d)+(Math.sign(d)<0?n[i]:r[i]))/Math.max(n[i],r[i]),I=n[i]/r[i],P=1.5;Z(S,{backgroundColor:[_,""],transform:[`translate${v}(${d}px) scale${v}(${I})`,`translate${v}(${d/P}px) scale${v}(${(H-1)/P+1})`,""],transformOrigin:Array(3).fill(A)},{duration:225,easing:p})}}return G(()=>{const[x]=E.filterProps(e);return m(E,k({symbol:R,ref:f,class:["v-tab",e.class],style:e.style,tabindex:c.value?0:-1,role:"tab","aria-selected":String(c.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},x,b,{"onGroup:selected":X}),{default:()=>{var u;return[((u=o.default)==null?void 0:u.call(o))??e.text,!e.hideSlider&&m("div",{ref:s,class:["v-tab__slider",y.value],style:h.value},null)]}})}),{}}});function te(e){return e?e.map(t=>typeof t=="string"?{title:t,value:t}:t):[]}const ne=M()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...U({mandatory:"force"}),...K(),...L()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:o}=t;const b=O(e,"modelValue"),y=z(()=>te(e.items)),{densityClasses:h}=W(e),{backgroundColorClasses:a,backgroundColorStyles:c}=j(l(e,"bgColor"));return J({VTab:{color:l(e,"color"),direction:l(e,"direction"),stacked:l(e,"stacked"),fixed:l(e,"fixedTabs"),sliderColor:l(e,"sliderColor"),hideSlider:l(e,"hideSlider")}}),G(()=>{const[f]=w.filterProps(e);return m(w,k(f,{modelValue:b.value,"onUpdate:modelValue":s=>b.value=s,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},h.value,a.value,e.class],style:[{"--v-tabs-height":Q(e.height)},c.value,e.style],role:"tablist",symbol:R}),{default:()=>[o.default?o.default():y.value.map(s=>m(ee,k(s,{key:s.title}),null))]})}),{}}});export{ne as V,ee as a};