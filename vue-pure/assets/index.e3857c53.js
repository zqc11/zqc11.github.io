var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{s as l}from"./index.6c61e3e9.js";import{d as i,a as u,z as p,U as m,e as c,f as d,J as b,B as f,D as v,I as j}from"./vue.5e6d7e94.js";import"./element-plus.8b2bac93.js";import"./vform3-plus.69c43fab.js";const O=[j("只有admin可看")],y=[j("只有test可看")],g=i((w=((e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))n.call(t,a)&&s(e,a,t[a]);return e})({},{name:"permissionButton"}),t(w,a({setup(e){const t=u(l.getItem("info").username||"admin");function a(e){l.setItem("info",{username:e,accessToken:`eyJhbGciOiJIUzUxMiJ9.${e}`}),window.location.reload()}return(e,r)=>{const o=p("el-radio-button"),n=p("el-radio-group"),s=m("auth");return c(),d("div",null,[b(n,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=e=>t.value=e),onChange:a},{default:f((()=>[b(o,{label:"admin"}),b(o,{label:"test"})])),_:1},8,["modelValue"]),v((c(),d("p",null,O)),[[s,"v-admin"]]),v((c(),d("p",null,y)),[[s,"v-test"]])])}}}))));var w;export{g as default};
