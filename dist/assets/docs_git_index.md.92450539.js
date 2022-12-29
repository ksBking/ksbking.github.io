import{_ as a,c as s,o as e,a as n}from"./app.9c9d8a6a.js";const b=JSON.parse('{"title":"Git","description":"","frontmatter":{"group":"code","title":"Git"},"headers":[{"level":2,"title":"快捷链接","slug":"快捷链接","link":"#快捷链接","children":[{"level":3,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]},{"level":3,"title":"同时推送到多个仓库","slug":"同时推送到多个仓库","link":"#同时推送到多个仓库","children":[]}]}],"relativePath":"docs/git/index.md","lastUpdated":1666017254000}'),t={name:"docs/git/index.md"},l=n(`<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h1><p>Git 是一个<a href="https://git-scm.com/about/free-and-open-source" target="_blank" rel="noreferrer">免费和开源</a>的分布式版本控制系统，旨在以速度和效率处理从小型到大型项目的所有内容。</p><p>Git <a href="https://git-scm.com/doc" target="_blank" rel="noreferrer">易于学习</a>，<a href="https://git-scm.com/about/small-and-fast" target="_blank" rel="noreferrer">占用空间小，性能快如闪电</a>。它优于 SCM 工具，如 Subversion、CVS、Perforce 和 ClearCase，具有<a href="https://git-scm.com/about/branching-and-merging" target="_blank" rel="noreferrer">廉价的本地分支</a>，<a href="https://git-scm.com/about/staging-area" target="_blank" rel="noreferrer">方便的暂存区域</a>，和<a href="https://git-scm.com/about/distributed" target="_blank" rel="noreferrer">多个工作流</a>等功能。</p><h2 id="快捷链接" tabindex="-1">快捷链接 <a class="header-anchor" href="#快捷链接" aria-hidden="true">#</a></h2><ul><li><a href="https://git-scm.com/" target="_blank" rel="noreferrer">官方网站</a></li><li><a href="https://git-scm.com/book/zh/v2" target="_blank" rel="noreferrer">官方文档</a></li><li><a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">下载地址</a></li></ul><h3 id="全局配置" tabindex="-1">全局配置 <a class="header-anchor" href="#全局配置" aria-hidden="true">#</a></h3><p>配置个人的用户名和电子邮箱</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git config --global user.name ksBking</span></span>
<span class="line"><span style="color:#A6ACCD;">git config --global user.email user@example.com</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="同时推送到多个仓库" tabindex="-1">同时推送到多个仓库 <a class="header-anchor" href="#同时推送到多个仓库" aria-hidden="true">#</a></h3><ol><li>查看当前远程仓库</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">origin  https://github.com/ksBking/ksbking.github.io.git (fetch)</span></span>
<span class="line"><span style="color:#A6ACCD;">origin  https://github.com/ksBking/ksbking.github.io.git (push)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>添加远程仓库</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">git remote set-url --add origin https://gitee.com/ksbking/ksbking.git</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol><li>再次查看当前远程仓库</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">origin  https://github.com/ksBking/ksbking.github.io.git (fetch)</span></span>
<span class="line"><span style="color:#A6ACCD;">origin  https://github.com/ksBking/ksbking.github.io.git (push)</span></span>
<span class="line"><span style="color:#A6ACCD;">origin  https://gitee.com/ksbking/ksbking.git (push)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,16),i=[l];function r(o,p,c,g,h,d){return e(),s("div",null,i)}const k=a(t,[["render",r]]);export{b as __pageData,k as default};
