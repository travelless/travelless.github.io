import{d as u,o as t,c as s,F as n,R as l,C as a,b as _,y as c,t as o,a as p,n as h,_ as g}from"./framework.069143a0.js";const f={class:"post-header"},m={class:"post-title"},v=["href"],b=["innerHTML"],y={class:"post-info"},x=["href"],M={class:"pagination"},N=["href"],k=u({__name:"blogs",props:{posts:Array,pageCurrent:Number,pagesNum:Number},setup(r){return(C,B)=>(t(),s(n,null,[(t(!0),s(n,null,l(r.posts,(e,i)=>(t(),s("div",{key:i,class:"post-list"},[a("div",f,[a("div",m,[a("a",{href:_(c)(e.regularPath)},o(e.frontMatter.title),9,v)])]),a("p",{class:"describe",innerHTML:e.frontMatter.intro},null,8,b),a("div",y,[p(o(e.frontMatter.date)+" ",1),(t(!0),s(n,null,l(e.frontMatter.tags,d=>(t(),s("span",null,[a("a",{href:_(c)(`/pages/tags.html?tag=${d}`)},o(d),9,x)]))),256))])]))),128)),a("div",M,[(t(!0),s(n,null,l(r.pagesNum,e=>(t(),s("a",{class:h(["link",{active:r.pageCurrent===e}]),key:e,href:_(c)(e===1?"blogs/index.html":`blogs/page_${e}.html`)},o(e),11,N))),128))])],64))}});const P=g(k,[["__scopeId","data-v-81045d3e"]]);export{P};
