import{M as r,d as u,Q as o,a6 as c,u as d,q as l,k as f,a7 as m,a8 as h,a9 as A,a5 as _,aa as g,ab as v,ac as P,ad as y,ae as w,af as C,ag as E,ah as R,ai as D}from"./chunks/framework.069143a0.js";import{t as b}from"./chunks/theme.205b71c2.js";const T={...b,enhanceApp:async({app:e,router:t,siteData:a,isServer:n})=>{r(()=>import("./chunks/index.ca64e6c4.js"),["assets/chunks/index.ca64e6c4.js","assets/chunks/framework.069143a0.js","assets/chunks/commonjsHelpers.725317a4.js"]).then(p=>{e.use(p)})}};function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(T),O=u({name:"VitePressApp",setup(){const{site:e}=d();return l(()=>{f(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),m(),h(),A(),s.setup&&s.setup(),()=>_(s.Layout)}});async function S(){const e=L(),t=x();t.provide(g,e);const a=v(e.route);return t.provide(P,a),t.component("Content",y),t.component("ClientOnly",w),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:C}),{app:t,router:e,data:a}}function x(){return E(O)}function L(){let e=o,t;return R(a=>{let n=D(a);return e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),o&&(e=!1),r(()=>import(n),[])},s.NotFound)}o&&S().then(({app:e,router:t,data:a})=>{t.go().then(()=>{c(t.route,a.site),e.mount("#app")})});export{S as createApp};