import{d as _,r,o as e,c as t,t as n,f as c,F as d,i as p,e as a,h as m,j as D}from"./app.da02a832.js";const f={key:0},k={key:1},v={key:2},B={key:3},g=["href"],E={key:4},y=_({__name:"Download",setup(i){const o=r("loading"),u=r(),F=`https://ksbking.gitee.io/data/league-tool/latest.json?_=${Date.now()}`;return fetch(F).then(s=>s.json()).then(s=>{o.value="ok",u.value=s}).catch(()=>{o.value="fail"}),(s,j)=>(e(),t(d,null,[u.value?(e(),t("p",f,"\u516C\u544A\uFF1A"+n(u.value.notice),1)):c("",!0),u.value?(e(),t("h2",k,"\u6700\u65B0\u7248\u672C\uFF1A"+n(u.value.version)+"\uFF08"+n(u.value.time)+"\uFF09",1)):c("",!0),o.value==="loading"?(e(),t("p",v,"\u6B63\u5728\u52A0\u8F7D\u2026\u2026")):o.value==="ok"?(e(),t("ul",B,[(e(!0),t(d,null,p(u.value.download,(l,h)=>(e(),t("li",{key:h},[a("a",{href:l.url,target:"_blank",rel:"noreferrer"},n(l.name),9,g)]))),128))])):(e(),t("p",E,"\u52A0\u8F7D\u5931\u8D25\u2026\u2026"))],64))}}),C=a("h1",{id:"\u4E0B\u8F7D",tabindex:"-1"},[D("\u4E0B\u8F7D "),a("a",{class:"header-anchor",href:"#\u4E0B\u8F7D","aria-hidden":"true"},"#")],-1),A=a("div",{class:"danger custom-block"},[a("p",{class:"custom-block-title"},"\u76EE\u524D\u5DF2\u5931\u6548"),a("p",null,[a("strong",null,"\u7531\u4E8E\u8054\u76DF\u6700\u8FD1\u66F4\u65B0\u65B0\u673A\u5236\uFF0C\u5BFC\u81F4\u65E7\u65B9\u5F0F\u65E0\u6CD5\u4F7F\u7528")])],-1),x=JSON.parse('{"title":"\u4E0B\u8F7D","description":"","frontmatter":{"title":"\u4E0B\u8F7D"},"headers":[],"relativePath":"projects/league-tool/download.md","lastUpdated":1664858402000}'),b={name:"projects/league-tool/download.md"},N=_({...b,setup(i){return(o,u)=>(e(),t("div",null,[C,A,m(y)]))}});export{x as __pageData,N as default};