var U=Object.defineProperty,K=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var w=(n,e,t)=>e in n?U(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,$=(n,e)=>{for(var t in e||(e={}))W.call(e,t)&&w(n,t,e[t]);if(E)for(var t of E(e))X.call(e,t)&&w(n,t,e[t]);return n},k=(n,e)=>K(n,P(e));import{h as b,k as G,d as J,l as M,r as m,o as Q,z as Y,e as a,w as u,H as i,D as f,C as x,A as Z,V as ee,W as te,s as oe}from"./element-plus.60b4d00c.js";import ne from"./config.bd5b2082.js";import{_ as ae,h as le,d as ue,x as h,V as C}from"./index.b7447df2.js";import"./vform3-plus.02952543.js";function se(n){return typeof n!="undefined"}function ie(n){const e=b(n||""),t=b(!1),c=b(!1);return G(e,r=>{se(r)&&(c.value=!0,t.value=re(r))},{immediate:!!n,flush:"sync"}),{clipboardRef:e,isSuccessRef:t,copiedRef:c}}function re(n,{target:e=document.body}={}){const t=document.createElement("textarea"),c=document.activeElement;t.value=n,t.setAttribute("readonly",""),t.style.contain="strict",t.style.position="absolute",t.style.left="-9999px",t.style.fontSize="12pt";const r=document.getSelection();let p;r&&r.rangeCount>0&&(p=r.getRangeAt(0)),e.append(t),t.select(),t.selectionStart=0,t.selectionEnd=n.length;let v=!1;try{v=document.execCommand("copy")}catch(_){throw new Error(_)}return t.remove(),p&&r&&(r.removeAllRanges(),r.addRange(p)),c&&c.focus(),v}const de={class:"text-model"},ce=f("\u7F16\u8F91"),me=f("\u65B0\u589E\u5B50\u7C7B\u578B"),fe=f("\u5B57\u5178\u914D\u7F6E"),pe=f("\u5220\u9664"),_e={name:"dict"},be=J(k($({},_e),{setup(n){const e=M({submitLoading:!1,showEdit:!1,selectRow:null,filterName:"",tableData:[{id:1,name:"\u72B6\u6001",model:"",children:[{id:"1-1",name:"\u670D\u52A1\u72B6\u6001",model:"serviceStatus"},{id:"1-2",name:"\u5728\u7EBF\u72B6\u6001",model:"onlienStatus"}]},{id:2,name:"\u64CD\u4F5C\u7CFB\u7EDF",model:"operatingSystem"}],formData:{name:"",model:""},formItems:[{field:"name",title:"\u5B57\u5178\u540D\u79F0",span:24,itemRender:{name:"$input",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u540D\u79F0"}}},{field:"model",title:"\u5B57\u5178\u7C7B\u578B",span:24,itemRender:{name:"$input",props:{placeholder:"\u8BF7\u8F93\u5165\u5B57\u5178\u7C7B\u578B",disabled:!0}}},{align:"right",span:24,itemRender:{name:"$buttons",children:[{props:{type:"submit",content:"\u63D0\u4EA4",status:"primary"}},{props:{type:"reset",content:"\u91CD\u7F6E"}}]}}]});let t=le(e.tableData);const c=ue("xTree",null),r=()=>{const o=h.toValueString(e.filterName).trim();if(o){const l={children:"children"},g=["name"];e.tableData=h.searchTree(t,d=>g.some(D=>h.toValueString(d[D]).indexOf(o)>-1),l),oe(()=>{c.value.setAllTreeExpand(!0)})}else e.tableData=t},p=h.debounce(function(){r()},100,{leading:!1,trailing:!0}),v=async()=>{await await C.modal.confirm("\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F")==="confirm"&&C.modal.message({content:"\u6D4B\u8BD5\u6570\u636E\uFF0C\u4E0D\u53EF\u5220\u9664",status:"error"})};function _(o,l){e.selectRow=o,e.showEdit=!0,e.formItems[1].itemRender.props.disabled=l}function R(){_(null,!1)}function T(o){_(null,!1)}function A(o){e.formData={name:o.name,model:o.model?o.model:"\u6682\u65E0\u5B57\u5178\u7C7B\u578B"},_(o,!0)}const{clipboardRef:S}=ie(),V=({row:o})=>{S.value=i(o).model},N=b({}),j=()=>{e.submitLoading=!0,setTimeout(()=>{const o=N.value;e.submitLoading=!1,e.showEdit=!1,e.selectRow?(C.modal.message({content:"\u4FDD\u5B58\u6210\u529F",status:"success"}),Object.assign(e.selectRow,e.formData)):(C.modal.message({content:"\u65B0\u589E\u6210\u529F",status:"success"}),o.insert(e.formData))},500)};let B=b(!1);function q(o){B.value=!0}function L(){B.value=!1}return(o,l)=>{const g=m("vxe-input"),d=m("vxe-button"),D=m("vxe-toolbar"),y=m("vxe-table-column"),z=m("el-tooltip"),I=m("vxe-table"),H=m("vxe-form"),O=m("vxe-modal");return Q(),Y("div",null,[a(D,null,{buttons:u(()=>[a(g,{modelValue:i(e).filterName,"onUpdate:modelValue":l[0]||(l[0]=s=>i(e).filterName=s),placeholder:o.$t("buttons.hssearch"),onKeyup:i(p)},null,8,["modelValue","placeholder","onKeyup"])]),tools:u(()=>[a(d,{icon:"fa fa-plus-square-o",status:"primary",onClick:R},{default:u(()=>[f(x(o.$t("buttons.hsadd")),1)]),_:1}),a(d,{icon:"fa fa-folder-open-o",status:"primary",onClick:l[1]||(l[1]=s=>o.$refs.xTree.setAllTreeExpand(!0))},{default:u(()=>[f(x(o.$t("buttons.hsexpendAll")),1)]),_:1}),a(d,{icon:"fa fa-folder-o",status:"primary",onClick:l[2]||(l[2]=s=>o.$refs.xTree.clearTreeExpand())},{default:u(()=>[f(x(o.$t("buttons.hscollapseAll")),1)]),_:1})]),_:1}),a(I,{ref_key:"xTree",ref:c,border:"",resizable:"","tree-config":{children:"children",iconOpen:"fa fa-minus-square-o",iconClose:"fa fa-plus-square-o"},data:i(e).tableData,onCellDblclick:V},{default:u(()=>[a(y,{"tree-node":"",field:"name",title:"\u5B57\u5178\u540D\u79F0"}),a(y,{title:"\u5B57\u5178\u7C7B\u578B"},{default:u(({row:s})=>[a(z,{effect:"dark",content:"\u53CC\u51FB\u590D\u5236\uFF1A"+s.model,placement:"right"},{default:u(()=>[Z("span",de,x(s.model),1)]),_:2},1032,["content"])]),_:1}),a(y,{title:"\u64CD\u4F5C",width:"330",fixed:"right"},{default:u(({row:s})=>[a(d,{type:"text",icon:"fa fa-pencil-square-o",onClick:F=>A(s)},{default:u(()=>[ce]),_:2},1032,["onClick"]),a(d,{type:"text",icon:"fa fa-plus-square-o",onClick:F=>T()},{default:u(()=>[me]),_:2},1032,["onClick"]),ee(a(d,{type:"text",icon:"fa fa-cog",onClick:F=>q()},{default:u(()=>[fe]),_:2},1032,["onClick"]),[[te,s.model]]),a(d,{type:"text",icon:"fa fa-trash-o",onClick:v},{default:u(()=>[pe]),_:1})]),_:1})]),_:1},8,["data"]),a(O,{resize:"",width:"450",modelValue:i(e).showEdit,"onUpdate:modelValue":l[3]||(l[3]=s=>i(e).showEdit=s),title:i(e).selectRow?"\u7F16\u8F91":"\u65B0\u589E",loading:i(e).submitLoading,onHide:l[4]||(l[4]=s=>o.$refs.xForm.reset())},{default:u(()=>[a(H,{ref:"xForm",data:i(e).formData,items:i(e).formItems,"title-align":"right","title-width":"100",onSubmit:j},null,8,["data","items"])]),_:1},8,["modelValue","title","loading"]),a(ne,{drawer:i(B),drawTitle:"\u5B57\u5178\u5217\u8868",onHandleClose:L},null,8,["drawer"])])}}}));var ge=ae(be,[["__scopeId","data-v-3226b49c"]]);export{ge as default};
