import{g as i,r as f,o as v,c as g,a as e,u as b,k as d,v as c,b as h,w,n as u,d as x,p as k,e as y}from"./index.ded409d8.js";import{a as V}from"./axios.0a901153.js";import{u as C}from"./index.0402c973.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";const l=s=>(k("data-v-dc857ba5"),s=s(),y(),s),I={id:"loginpage",class:"d-flex align-items-center justify-content-center"},S={id:"form-login",class:"d-flex align-items-center flex-column border rounded px-4 py-3 bg-white"},j=l(()=>e("i",{class:"bi bi-arrow-left-circle-fill"},null,-1)),B=[j],N={class:"form-floating mb-3"},T=l(()=>e("label",{for:"username"},"Username",-1)),U={class:"form-floating mb-3"},R={class:"form-floating"},q=l(()=>e("label",{for:"password"},"Senha",-1)),z={__name:"LoginView",setup(s){const{cookies:p}=C(),a=i(""),n=i(""),m=()=>{V.post("https://dummyjson.com/auth/login",{username:a.value,password:n.value},{headers:{"Content-Type":"application/json"}}).then(r=>{p.set("user",r.data),u.go(-1)})};return(r,o)=>{const _=f("RouterLink");return v(),g("div",I,[e("div",S,[e("div",null,[e("button",{class:"btn p-0 mb-2",style:{"font-size":"1.5rem",color:"rgb(98, 0, 143)"},onClick:o[0]||(o[0]=()=>{b(u).go(-1)})},B)]),e("div",N,[d(e("input",{type:"email","onUpdate:modelValue":o[1]||(o[1]=t=>a.value=t),class:"form-control",id:"username",placeholder:"username"},null,512),[[c,a.value]]),T]),e("div",U,[e("div",R,[d(e("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=t=>n.value=t),class:"form-control",id:"password",placeholder:"senha"},null,512),[[c,n.value]]),q])]),e("button",{class:"btn btn-success",onClick:o[3]||(o[3]=t=>m())},"Logar"),h(_,{to:"/userslist"},{default:w(()=>[x("Adquirir usuario")]),_:1})])])}}},$=L(z,[["__scopeId","data-v-dc857ba5"]]);export{$ as default};
