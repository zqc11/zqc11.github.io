import{_ as h,u as v}from"./index.b7447df2.js";/* empty css                   */import{d as D,h as b,r as t,b as C,w as e,o as w,e as u,H as i,aW as y,J as A,K as j,A as n,D as p,ba as m}from"./element-plus.60b4d00c.js";import{u as k}from"./upload-filled.81a3a674.js";import"./vform3-plus.02952543.js";const f=s=>(A("data-v-4e6ad48c"),s=s(),j(),s),I=f(()=>n("div",{class:"el-upload__text"},[p("\u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904\u6216"),n("em",null,"\u70B9\u51FB\u9009\u62E9\u6587\u4EF6")],-1)),M=f(()=>n("div",{class:"el-upload__tip"}," \u53EA\u652F\u630110MB\u5927\u5C0F\u4EE5\u5185\u7684DWG\u6587\u4EF6\uFF0C\u6CA1\u6709\u56FE\u7EB8\u8BF7\u76F4\u63A5\u4E0B\u4E00\u6B65 ",-1)),W=p("\u6E05\u7A7A\u5DF2\u9009\u62E9\u6587\u4EF6"),G=p("\u4E0A\u4F20\u56FE\u7EB8\u5E76\u8FDB\u5165\u4E0B\u4E00\u6B65"),N=D({emits:["next"],setup(s,{emit:E}){const a=b(),F=v(),x=()=>{a.value.submit(),F.push("/newTask/formDesign"),E("next",2)},B=()=>{a.value.clearFiles()},g=l=>{const c=l.name.split(".")[1]==="dwg",o=l.size/1024/1024<10;return c||m.error("\u56FE\u7EB8\u6587\u4EF6\u53EA\u652F\u6301dwg\u683C\u5F0F"),o||m.error("\u56FE\u7EB8\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC710MB!"),c&&o};return(l,c)=>{const o=t("el-icon"),_=t("el-button"),d=t("el-col"),r=t("el-row");return w(),C(r,{type:"flex",justify:"center"},{default:e(()=>[u(d,{id:"upload-box",xs:24,sm:24,md:20,lg:20,xl:20},{default:e(()=>[u(i(y),{ref_key:"uploadRef",ref:a,class:"upload",action:"https://jsonplaceholder.typicode.com/posts/","auto-upload":!1,"before-upload":g,accept:".dwg",drag:"",multiple:""},{tip:e(()=>[M]),default:e(()=>[u(o,{class:"el-icon--upload"},{default:e(()=>[u(i(k))]),_:1}),I]),_:1},512),u(r,{gutter:20},{default:e(()=>[u(d,{xs:24,sm:12,md:12,lg:12,xl:12},{default:e(()=>[u(_,{class:"ml-3",type:"default",onClick:B},{default:e(()=>[W]),_:1})]),_:1}),u(d,{xs:24,sm:12,md:12,lg:12,xl:12},{default:e(()=>[u(_,{class:"ml-3",type:"success",onClick:x},{default:e(()=>[G]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});var z=h(N,[["__scopeId","data-v-4e6ad48c"]]);export{z as default};
