import{r as f,o as u,c as d,a as s,t as p,F as _,p as m,b as g,d as c,e as h,f as v}from"./vendor.efc0b91a.js";const y=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};y();var b="assets/logo.png";var k=(t,r)=>{const n=t.__vccOpts||t;for(const[l,e]of r)n[l]=e;return n};const V={data:()=>({msg:"Hi earth",count:f(0)}),methods:{update(t){console.log(t,this.msg),this.msg=t,console.log(t,this.msg)}}},i=t=>(m("data-v-44538c1b"),t=t(),g(),t),$=i(()=>s("p",null,[c(" Recommended IDE setup: "),s("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VSCode"),c(" + "),s("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),I=i(()=>s("p",null,[s("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),c(" | "),s("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),N=i(()=>s("p",null,[c(" Edit "),s("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1));function S(t,r,n,l,e,o){return u(),d(_,null,[s("h1",{onClick:r[0]||(r[0]=a=>o.update(23))},p(t.msg),1),$,I,s("button",{type:"button",onClick:r[1]||(r[1]=a=>t.count++)},"count is: "+p(t.count),1),N],64)}var H=k(V,[["render",S],["__scopeId","data-v-44538c1b"]]);const L=s("img",{alt:"Vue logo",src:b},null,-1),O={setup(t){return(r,n)=>(u(),d(_,null,[L,h(H,{msg:"Hello Vue 3 + Vite"})],64))}};v(O).mount("#app");
