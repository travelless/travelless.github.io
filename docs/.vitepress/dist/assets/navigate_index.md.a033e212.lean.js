import{d as p,j as v,o as c,c as u,z as t,t as o,A as g,B as r,E as n,G as d}from"./chunks/framework.7e954154.js";const y=["src"],h={class:"bottom"},f={class:"title"},x={class:"T"},B={class:"time"},b={class:"intro"},i=p({__name:"module",props:{icon:null,title:null,intro:null,type:null},setup(e){const s=e,a=v(new Date().toDateString()),m="../mdBase/"+s.type+"/";return(k,S)=>(c(),u("a",{class:"module",href:m},[t("img",{class:"image",src:e.icon,alt:"image"},null,8,y),t("div",h,[t("div",f,[t("div",x,o(e.title),1),t("div",B,o(a.value),1)]),t("div",b,o(e.intro),1)])]))}});const D={class:"modules"},N={__name:"navigate",setup(e){return(s,l)=>{const a=d("el-main"),_=d("el-container");return c(),g(_,{class:"main"},{default:r(()=>[n(a,null,{default:r(()=>[t("div",D,[n(i,{icon:"/todo.jpg",type:"todo",title:"todoList",intro:"代办事项记录"}),n(i,{icon:"/ts.webp",type:"ts",title:"TS-study",intro:"暂时为ts及相关的学习笔记学习"}),n(i,{icon:"/daily.jpg",type:"daily",title:"日常生活事",intro:"记录一些日常生活的趣事或者思考"})])]),_:1})]),_:1})}}};const C=JSON.parse('{"title":"Navigate","description":"","frontmatter":{"layout":"page","title":"Navigate"},"headers":[],"relativePath":"navigate/index.md"}'),j={name:"navigate/index.md"},$=Object.assign(j,{setup(e){return(s,l)=>(c(),u("div",null,[n(N)]))}});export{C as __pageData,$ as default};