import{d as x,u as k,j as C,o,D as T,E as d,J as u,I as v,C as t,c,R as p,t as l,b as h,F as m,y as B,a as D}from"./chunks/framework.069143a0.js";function E(_){let e=new Map;return _.forEach(s=>{s.frontMatter.tags.forEach(a=>{e.has(a)?e.get(a).push(s):e.set(a,[s])})}),e=Array.from(e),e.sort(),e}const M={class:"tags"},N=t("div",{class:"T"}," Tags ",-1),b={class:"items"},w=["onClick"],S=["id"],V={class:"posts"},j=["href"],F={class:"post-container"},J=t("div",{class:"post-dot"},null,-1),O={class:"date"},P=x({__name:"navigate",setup(_){const e=k().theme.value.posts,s=E(e),a=C([]);console.log(s);const g=r=>{a.value=r[1],console.log(a.value)};return(r,A)=>{const f=u("el-main"),y=u("el-container");return o(),T(y,{class:"main"},{default:d(()=>[v(f,{class:"body"},{default:d(()=>[t("div",M,[N,t("div",b,[(o(!0),c(m,null,p(h(s),n=>(o(),c("div",{class:"types",onClick:i=>g(n)},[t("a",{class:"item",id:n[1].length.toString()},l(n[0]),9,S)],8,w))),256))])]),t("div",V,[(o(!0),c(m,null,p(a.value,(n,i)=>(o(),c("a",{href:h(B)(n.regularPath),key:i,class:"post"},[t("div",F,[J,D(" "+l(n.frontMatter.title),1)]),t("div",O,l(n.frontMatter.date),1)],8,j))),128))])]),_:1})]),_:1})}}});const L=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home"},"headers":[],"relativePath":"navigate/index.md","lastUpdated":1682621974000}'),$={name:"navigate/index.md"},R=Object.assign($,{setup(_){return(e,s)=>(o(),c("div",null,[v(P)]))}});export{L as __pageData,R as default};
