var d=Object.defineProperty,p=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var a=(o,e,t)=>e in o?d(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,i=(o,e)=>{for(var t in e||(e={}))f.call(e,t)&&a(o,t,e[t]);if(n)for(var t of n(e))D.call(e,t)&&a(o,t,e[t]);return o},c=(o,e)=>p(o,_(e));import{s}from"./index.6c61e3e9.js";import{d as F,a as h,z as E,e as x,f as B,h as u,u as r,J as C,B as b,I as l}from"./vue.5e6d7e94.js";import{Q as y}from"./element-plus.8b2bac93.js";import"./vform3-plus.69c43fab.js";const J=l(" \u5F53\u524D\u89D2\u8272\uFF1A "),w={style:{"font-size":"26px"}},I=u("p",{style:{color:"#ffa500"}}," \u67E5\u770B\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316(\u7CFB\u7EDF\u7BA1\u7406)\uFF0C\u6A21\u62DF\u540E\u53F0\u6839\u636E\u4E0D\u540C\u89D2\u8272\u8FD4\u56DE\u5BF9\u5E94\u8DEF\u7531 ",-1),g=l("\u5207\u6362\u89D2\u8272"),k={name:"permissionPage"},V=F(c(i({},k),{setup(o){let e=h(s.getItem("info").username);function t(){r(e)==="admin"?(s.setItem("info",{username:"test",accessToken:"eyJhbGciOiJIUzUxMiJ9.test"}),window.location.reload()):(s.setItem("info",{username:"admin",accessToken:"eyJhbGciOiJIUzUxMiJ9.admin"}),window.location.reload())}return(v,j)=>{const m=E("el-button");return x(),B("div",null,[u("h4",null,[J,u("span",w,y(r(e)),1),I]),C(m,{type:"primary",onClick:t},{default:b(()=>[g]),_:1})])}}}));export{V as default};
