var x=Object.defineProperty,V=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var c=(t,e,o)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))B.call(e,o)&&c(t,o,e[o]);if(d)for(var o of d(e))E.call(e,o)&&c(t,o,e[o]);return t},m=(t,e)=>V(t,w(e));import{s as p}from"./index.d4962771.js";import{d as C,h as j,r as f,a2 as k,o as s,z as a,e as i,w as D,V as h,D as v}from"./element-plus.60b4d00c.js";import"./vform3-plus.c0178479.js";const I=v("\u53EA\u6709admin\u53EF\u770B"),J=[I],U=v("\u53EA\u6709test\u53EF\u770B"),z=[U],A={name:"permissionButton"},G=C(m(_({},A),{setup(t){const e=j(p.getItem("info").username||"admin");function o(n){p.setItem("info",{username:n,accessToken:`eyJhbGciOiJIUzUxMiJ9.${n}`}),window.location.reload()}return(n,l)=>{const u=f("el-radio-button"),b=f("el-radio-group"),r=k("auth");return s(),a("div",null,[i(b,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=g=>e.value=g),onChange:o},{default:D(()=>[i(u,{label:"admin"}),i(u,{label:"test"})]),_:1},8,["modelValue"]),h((s(),a("p",null,J)),[[r,"v-admin"]]),h((s(),a("p",null,z)),[[r,"v-test"]])])}}}));export{G as default};
