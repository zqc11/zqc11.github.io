import{_ as V,u as D,O as E}from"./index.2c7e36b3.js";import{d as k,h as _,l as f,r as n,z as A,e as t,w as l,H as o,o as w,D as c}from"./element-plus.5e3a2ffc.js";import"./vform3-plus.79b63deb.js";const z={id:"base-info"},j=c("\u4E0B\u4E00\u6B65"),q=c("\u91CD\u7F6E"),R=k({emits:["next"],setup(T,{emit:b}){const B=D(),F=_(""),d=_(),u=f({title:"",desc:"",type:""}),v=f({title:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D41\u7A0B\u540D\u79F0",trigger:"blur"},{min:1,max:10,message:"\u957F\u5EA6\u9650\u5236\u57281\u523010\u4E2A\u5B57\u7B26",trigger:"blur"}],type:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D41\u7A0B\u7C7B\u578B",trigger:"blur"}],desc:[{required:!1,message:"",trigger:"blur"}]}),x=s=>{!s||s.validate(e=>{if(e)E().setBaseInfo(u),B.push("/newTask/flowChart"),b("next",1);else return!1})},g=s=>{!s||s.resetFields()};return(s,e)=>{const i=n("el-input"),a=n("el-form-item"),m=n("el-option"),y=n("el-select"),p=n("el-button"),C=n("el-form");return w(),A("div",z,[t(C,{ref_key:"ruleFormRef",ref:d,model:o(u),rules:o(v),"label-width":"120px",class:"ruleForm",size:F.value},{default:l(()=>[t(a,{label:"\u6D41\u7A0B\u540D\u79F0",prop:"title"},{default:l(()=>[t(i,{modelValue:o(u).title,"onUpdate:modelValue":e[0]||(e[0]=r=>o(u).title=r)},null,8,["modelValue"])]),_:1}),t(a,{label:"\u6D41\u7A0B\u7C7B\u578B",prop:"type"},{default:l(()=>[t(y,{modelValue:o(u).type,"onUpdate:modelValue":e[1]||(e[1]=r=>o(u).type=r),placeholder:"\u9009\u62E9\u7C7B\u578B"},{default:l(()=>[t(m,{label:"\u56FE\u7EB8",value:"blueprint"}),t(m,{label:"\u666E\u901A",value:"ordinary"})]),_:1},8,["modelValue"])]),_:1}),t(a,{label:"\u6D41\u7A0B\u63CF\u8FF0",prop:"desc"},{default:l(()=>[t(i,{modelValue:o(u).desc,"onUpdate:modelValue":e[2]||(e[2]=r=>o(u).desc=r),type:"textarea"},null,8,["modelValue"])]),_:1}),t(a,null,{default:l(()=>[t(p,{type:"primary",onClick:e[3]||(e[3]=r=>x(d.value))},{default:l(()=>[j]),_:1}),t(p,{onClick:e[4]||(e[4]=r=>g(d.value))},{default:l(()=>[q]),_:1})]),_:1})]),_:1},8,["model","rules","size"])])}}});var N=V(R,[["__scopeId","data-v-bb9242be"]]);export{N as default};
