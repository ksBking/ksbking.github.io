import{_ as s,c as a,o as e,a as n}from"./app.da02a832.js";const F=JSON.parse('{"title":"Node.js","description":"","frontmatter":{"group":"code","title":"Node.js"},"headers":[{"level":2,"title":"\u5FEB\u6377\u94FE\u63A5","slug":"\u5FEB\u6377\u94FE\u63A5","link":"#\u5FEB\u6377\u94FE\u63A5","children":[]},{"level":2,"title":"\u4EC0\u4E48\u662F Node.js\uFF1F","slug":"\u4EC0\u4E48\u662F-node-js\uFF1F","link":"#\u4EC0\u4E48\u662F-node-js\uFF1F","children":[]},{"level":2,"title":"Node.js \u7684\u5DE5\u4F5C\u539F\u7406","slug":"node-js-\u7684\u5DE5\u4F5C\u539F\u7406","link":"#node-js-\u7684\u5DE5\u4F5C\u539F\u7406","children":[{"level":3,"title":"Node.js \u4F53\u7CFB\u7ED3\u6784","slug":"node-js-\u4F53\u7CFB\u7ED3\u6784","link":"#node-js-\u4F53\u7CFB\u7ED3\u6784","children":[]},{"level":3,"title":"\u5B89\u88C5\u548C\u4F7F\u7528 Node.js","slug":"\u5B89\u88C5\u548C\u4F7F\u7528-node-js","link":"#\u5B89\u88C5\u548C\u4F7F\u7528-node-js","children":[]}]},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u9700\u8981 Node.js\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u9700\u8981-node-js\uFF1F","link":"#\u4E3A\u4EC0\u4E48\u9700\u8981-node-js\uFF1F","children":[{"level":3,"title":"\u591A\u7528\u9014\u6280\u672F","slug":"\u591A\u7528\u9014\u6280\u672F","link":"#\u591A\u7528\u9014\u6280\u672F","children":[]},{"level":3,"title":"JavaScript","slug":"javascript","link":"#javascript","children":[]},{"level":3,"title":"\u793E\u533A","slug":"\u793E\u533A","link":"#\u793E\u533A","children":[]},{"level":3,"title":"\u5F00\u6E90","slug":"\u5F00\u6E90","link":"#\u5F00\u6E90","children":[]}]},{"level":2,"title":"\u5173\u4E8E Node.js","slug":"\u5173\u4E8E-node-js","link":"#\u5173\u4E8E-node-js","children":[]}],"relativePath":"docs/nodejs/index.md","lastUpdated":1666017254000}'),o={name:"docs/nodejs/index.md"},l=n(`<h1 id="node-js" tabindex="-1">Node.js <a class="header-anchor" href="#node-js" aria-hidden="true">#</a></h1><p>Node.js \u662F\u4E00\u4E2A\u514D\u8D39\u3001\u5F00\u653E\u3001\u8DE8\u5E73\u53F0\u7684 JavaScript \u8FD0\u884C\u73AF\u5883\uFF0C\u5141\u8BB8\u5F00\u53D1\u8005\u5728\u6D4F\u89C8\u5668\u4E4B\u5916\u7F16\u5199\u547D\u4EE4\u884C\u5DE5\u5177\u548C\u670D\u52A1\u5668\u7AEF\u811A\u672C\u3002</p><h2 id="\u5FEB\u6377\u94FE\u63A5" tabindex="-1">\u5FEB\u6377\u94FE\u63A5 <a class="header-anchor" href="#\u5FEB\u6377\u94FE\u63A5" aria-hidden="true">#</a></h2><ul><li><a href="https://nodejs.org/zh-cn/" target="_blank" rel="noreferrer">\u5B98\u65B9\u7F51\u7AD9</a></li><li><a href="https://nodejs.dev/en/" target="_blank" rel="noreferrer">\u5B98\u65B9\u7F51\u7AD9\uFF08\u65B0\uFF09</a></li><li><a href="https://nodejs.org/zh-cn/docs/" target="_blank" rel="noreferrer">\u5B98\u65B9\u6587\u6863</a></li><li><a href="https://nodejs.dev/en/download/" target="_blank" rel="noreferrer">\u5B98\u65B9\u6587\u6863\uFF08\u65B0\uFF09</a></li><li><a href="https://nodejs.org/zh-cn/download/" target="_blank" rel="noreferrer">\u5B98\u7F51\u4E0B\u8F7D</a></li><li><a href="https://nodejs.dev/en/api/" target="_blank" rel="noreferrer">\u5B98\u7F51\u4E0B\u8F7D\uFF08\u65B0\uFF09</a></li></ul><h2 id="\u4EC0\u4E48\u662F-node-js\uFF1F" tabindex="-1">\u4EC0\u4E48\u662F Node.js\uFF1F <a class="header-anchor" href="#\u4EC0\u4E48\u662F-node-js\uFF1F" aria-hidden="true">#</a></h2><p>Node.js\uFF08\u7B80\u79F0 Node\uFF09\u662F\u5F00\u6E90\u670D\u52A1\u5668\u7AEF JavaScript \u8FD0\u884C\u65F6\u73AF\u5883\u3002\u53EF\u4EE5\u4F7F\u7528 Node.js \u5728\u6D4F\u89C8\u5668\u4EE5\u5916\u7684\u591A\u4E2A\u4F4D\u7F6E\uFF08\u4F8B\u5982\u670D\u52A1\u5668\u4E0A\uFF09\u8FD0\u884C JavaScript \u5E94\u7528\u7A0B\u5E8F\u548C\u4EE3\u7801\u3002</p><p>Node.js \u662F\u540D\u4E3A <a href="https://nodejs.dev/en/learn/the-v8-javascript-engine/" target="_blank" rel="noreferrer">V8</a> \u7684 JavaScript \u5F15\u64CE\u7684\u5305\u88C5\u5668\uFF0C\u5B83\u652F\u6301\u8BB8\u591A\u6D4F\u89C8\u5668\uFF0C\u5305\u62EC Google Chrome\u3001Opera \u548C Microsoft Edge\u3002\u901A\u8FC7\u5728\u6D4F\u89C8\u5668\u5916\u4F7F\u7528 V8 \u5F15\u64CE\uFF0C\u53EF\u4EE5\u4F7F\u7528 Node.js \u6765\u8FD0\u884C JavaScript\u3002Node.js \u8FD8\u5305\u542B\u5728\u670D\u52A1\u5668\u4E0A\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u53EF\u80FD\u9700\u8981\u7684\u8BB8\u591A V8 \u4F18\u5316\u3002\u4F8B\u5982\uFF0CNode.js \u6DFB\u52A0\u4E86\u201C\u7F13\u51B2\u533A\u201D\u7C7B\uFF0C\u4F7F V8 \u53EF\u4EE5\u5904\u7406\u6587\u4EF6\u3002\u8FD9\u4F7F Node.js \u6210\u4E3A\u4E86\u6784\u5EFA Web \u670D\u52A1\u5668\u7B49\u7684\u4E0D\u9519\u9009\u62E9\u3002</p><p>\u5373\u4F7F\u4F60\u4ECE\u672A\u4F7F\u7528\u8FC7 JavaScript \u4F5C\u4E3A\u4E3B\u8981\u7F16\u7A0B\u8BED\u8A00\uFF0C\u4E5F\u53EF\u9009\u62E9\u5B83\u6765\u7F16\u5199\u529F\u80FD\u5F3A\u5927\u7684\u6A21\u5757\u5316\u5E94\u7528\u7A0B\u5E8F\u3002JavaScript \u8FD8\u5177\u6709\u4E00\u4E9B\u72EC\u7279\u7684\u4F18\u52BF\u3002\u4F8B\u5982\uFF0C\u7531\u4E8E\u6D4F\u89C8\u5668\u4F7F\u7528 JavaScript\uFF0C\u56E0\u6B64\u4F60\u53EF\u4EE5\u4F7F\u7528 Node.js \u5728\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u5668\u4E4B\u95F4\u5171\u4EAB\u7A97\u4F53\u9A8C\u8BC1\u89C4\u5219\u7B49\u903B\u8F91\u3002</p><p>\u968F\u7740\u5355\u9875\u5E94\u7528\u7A0B\u5E8F\u7684\u5174\u8D77\uFF0CJavaScript \u53D8\u5F97\u8D8A\u6765\u8D8A\u91CD\u8981\uFF0C\u5E76\u652F\u6301\u5E7F\u6CDB\u4F7F\u7528\u7684 JavaScript \u5BF9\u8C61\u8868\u793A\u6CD5\uFF08JSON\uFF09\u6570\u636E\u4EA4\u6362\u683C\u5F0F\u3002\u8BB8\u591A NoSQL \u6570\u636E\u5E93\u6280\u672F\uFF08\u4F8B\u5982 CouchDB \u548C MongoDB\uFF09\u4E5F\u5C06 JavaScript \u548C JSON \u7528\u4F5C\u67E5\u8BE2\u548C\u67B6\u6784\u683C\u5F0F\u3002Node.js \u4F7F\u7528\u8BB8\u591A\u65B0\u5F0F\u670D\u52A1\u548C\u6846\u67B6\u6240\u4F7F\u7528\u7684\u8BED\u8A00\u548C\u6280\u672F\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528 Node.js \u751F\u6210\u4EE5\u4E0B\u7C7B\u578B\u7684\u5E94\u7528\u7A0B\u5E8F\uFF1A</p><ul><li>HTTP Web \u670D\u52A1\u5668</li><li>\u5FAE\u670D\u52A1\u6216\u65E0\u670D\u52A1\u5668 API \u540E\u7AEF</li><li>\u7528\u4E8E\u6570\u636E\u5E93\u8BBF\u95EE\u548C\u67E5\u8BE2\u7684\u9A71\u52A8\u7A0B\u5E8F</li><li>\u4EA4\u4E92\u5F0F\u547D\u4EE4\u884C\u63A5\u53E3</li><li>\u684C\u9762\u5E94\u7528\u7A0B\u5E8F</li><li>\u5B9E\u65F6\u7269\u8054\u7F51\uFF08IoT\uFF09\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u5E93</li><li>\u9002\u7528\u4E8E\u684C\u9762\u5E94\u7528\u7A0B\u5E8F\u7684\u63D2\u4EF6</li><li>\u7528\u4E8E\u6587\u4EF6\u5904\u7406\u6216\u7F51\u7EDC\u8BBF\u95EE\u7684 Shell \u811A\u672C</li><li>\u673A\u5668\u5B66\u4E60\u5E93\u548C\u6A21\u578B</li></ul><p>Node.js \u73AF\u5883\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E2A npm \u6CE8\u518C\u8868\uFF0C\u53EF\u7528\u4E8E\u5171\u4EAB\u4F60\u81EA\u5DF1\u7684 Node.js \u5E93\u3002</p><h2 id="node-js-\u7684\u5DE5\u4F5C\u539F\u7406" tabindex="-1">Node.js \u7684\u5DE5\u4F5C\u539F\u7406 <a class="header-anchor" href="#node-js-\u7684\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a></h2><p>Node.js \u57FA\u4E8E\u5355\u7EBF\u7A0B\u4E8B\u4EF6\u5FAA\u73AF\u3002\u6B64\u4F53\u7CFB\u7ED3\u6784\u6A21\u578B\u53EF\u9AD8\u6548\u5730\u5904\u7406\u5E76\u53D1\u64CD\u4F5C\u3002\u5E76\u53D1\u662F\u6307\u4E8B\u4EF6\u5FAA\u73AF\u5728\u5B8C\u6210\u5176\u4ED6\u5DE5\u4F5C\u4E4B\u540E\u6267\u884C JavaScript \u56DE\u53EB\u51FD\u6570\u7684\u80FD\u529B\u3002</p><p>\u5728\u6B64\u4F53\u7CFB\u7ED3\u6784\u6A21\u578B\u4E2D\uFF1A</p><ul><li>\u5355\u7EBF\u7A0B\u662F\u6307 JavaScript \u53EA\u6709\u4E00\u4E2A\u8C03\u7528\u5806\u6808\uFF0C\u4E00\u6B21\u53EA\u80FD\u6267\u884C\u4E00\u9879\u4EFB\u52A1\u3002</li><li>\u4E8B\u4EF6\u5FAA\u73AF\u8FD0\u884C\u4EE3\u7801\uFF0C\u6536\u96C6\u548C\u5904\u7406\u4E8B\u4EF6\uFF0C\u5E76\u5728\u4E8B\u4EF6\u961F\u5217\u4E2D\u8FD0\u884C\u4E0B\u4E00\u4E2A\u5B50\u4EFB\u52A1\u3002</li></ul><p>\u6B64\u4E0A\u4E0B\u6587\u4E2D\u7684\u7EBF\u7A0B\u662F\u64CD\u4F5C\u7CFB\u7EDF\u53EF\u4EE5\u72EC\u7ACB\u7BA1\u7406\u7684\u5355\u4E2A\u7F16\u7A0B\u6307\u4EE4\u5E8F\u5217\u3002</p><p>\u5728 Node.js \u4E2D\uFF0CI/O \u64CD\u4F5C\uFF08\u4F8B\u5982\uFF0C\u8BFB\u53D6\u78C1\u76D8\u6587\u4EF6\u6216\u5BF9\u5176\u5199\u5165\uFF0C\u6216\u8005\u5BF9\u8FDC\u7A0B\u670D\u52A1\u5668\u8FDB\u884C\u7F51\u7EDC\u8C03\u7528\uFF09\u88AB\u89C6\u4E3A\u963B\u6B62\u64CD\u4F5C\u3002\u963B\u6B62\u64CD\u4F5C\u4F1A\u963B\u6B62\u6240\u6709\u540E\u7EED\u4EFB\u52A1\uFF0C\u76F4\u5230\u8BE5\u64CD\u4F5C\u5B8C\u6210\uFF0C\u7136\u540E\u624D\u80FD\u7EE7\u7EED\u4E0B\u4E00\u4E2A\u64CD\u4F5C\u3002\u5728\u975E\u963B\u6B62\u6A21\u578B\u4E2D\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u53EF\u4EE5\u540C\u65F6\u8FD0\u884C\u591A\u4E2A I/O \u64CD\u4F5C\u3002</p><p>\u540D\u79F0\u201C\u4E8B\u4EF6\u5FAA\u73AF\u201D\u63CF\u8FF0\u201C\u5FD9\u788C-\u7B49\u5F85\u201D\u673A\u5236\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u8BE5\u673A\u5236\u4EE5\u540C\u6B65\u65B9\u5F0F\u7B49\u5F85\u6D88\u606F\u5230\u8FBE\uFF0C\u7136\u540E\u518D\u5904\u7406\u6D88\u606F\u3002\u4E0B\u9762\u663E\u793A\u4E86\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u5B9E\u73B0\uFF1A</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre><code><span class="line"><span style="color:#89DDFF;">while</span><span style="color:#A6ACCD;"> (queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wait</span><span style="color:#A6ACCD;">()) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">queue</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">process</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="node-js-\u4F53\u7CFB\u7ED3\u6784" tabindex="-1">Node.js \u4F53\u7CFB\u7ED3\u6784 <a class="header-anchor" href="#node-js-\u4F53\u7CFB\u7ED3\u6784" aria-hidden="true">#</a></h3><p>Node.js \u4F7F\u7528\u4E8B\u4EF6\u9A71\u52A8\u7684\u4F53\u7CFB\u7ED3\u6784\uFF0C\u5176\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF\u5904\u7406\u7F16\u6392\uFF0C\u8F85\u52A9\u89D2\u8272\u6C60\u963B\u6B62\u4EFB\u52A1\u3002\u4E8B\u4EF6\u5FAA\u73AF\u4F7F Node.js \u80FD\u591F\u5904\u7406\u5E76\u53D1\u64CD\u4F5C\u3002\u4E0B\u56FE\u5927\u81F4\u8BF4\u660E\u4E86\u4E8B\u4EF6\u5FAA\u73AF\u7684\u5DE5\u4F5C\u539F\u7406\uFF1A</p><p><img src="https://learn.microsoft.com/zh-cn/training/advocates/intro-to-nodejs/media/event-loop.svg" alt="\u663E\u793A Node.js \u5982\u4F55\u4F7F\u7528\u4E8B\u4EF6\u9A71\u52A8\u7684\u4F53\u7CFB\u7ED3\u6784\u7684\u5173\u7CFB\u56FE\uFF0C\u5176\u4E2D\u7684\u4E8B\u4EF6\u5FAA\u73AF\u5904\u7406\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u8F85\u52A9\u89D2\u8272\u6C60\u963B\u6B62\u4EFB\u52A1\u3002"></p><p>\u4E8B\u4EF6\u5FAA\u73AF\u7684\u4E3B\u8981\u9636\u6BB5\u5305\u62EC\uFF1A</p><ul><li>\u8BA1\u65F6\u5668\u5904\u7406\u7531 setTimeout() \u548C setInterval() \u8BA1\u5212\u7684\u56DE\u53EB\u3002</li><li>\u56DE\u53EB\u8FD0\u884C\u6302\u8D77\u7684\u56DE\u53EB\u3002</li><li>\u8F6E\u8BE2\u68C0\u7D22\u4F20\u5165\u7684 I/O \u4E8B\u4EF6\u5E76\u8FD0\u884C\u4E0E I/O \u76F8\u5173\u7684\u56DE\u53EB\u3002</li><li>\u68C0\u67E5\u5141\u8BB8\u5B8C\u6210\u8F6E\u8BE2\u9636\u6BB5\u540E\u7ACB\u5373\u8FD0\u884C\u56DE\u53EB\u3002</li><li>\u5173\u95ED\u56DE\u53EB\u5173\u95ED\u4E8B\u4EF6\uFF08\u4F8B\u5982 socket.destroy()\uFF09\u548C\u56DE\u53EB\uFF08\u4F8B\u5982 socket.on(&#39;close&#39;, ...)\uFF09\u3002</li></ul><p>Node.js \u4F7F\u7528\u5DE5\u4F5C\u7EBF\u7A0B\u6C60\u6765\u5904\u7406\u963B\u6B62\u4EFB\u52A1\uFF0C\u4F8B\u5982\u963B\u6B62 I/O \u64CD\u4F5C\u4EE5\u53CA\u5360\u7528\u5927\u91CF CPU \u7684\u4EFB\u52A1\u3002</p><p>\u603B\u800C\u8A00\u4E4B\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u8FD0\u884C\u4E3A\u4E8B\u4EF6\u6CE8\u518C\u7684 JavaScript \u56DE\u53EB\uFF0C\u8FD8\u8D1F\u8D23\u5B9E\u73B0\u975E\u963B\u6B62\u5F02\u6B65\u8BF7\u6C42\uFF08\u5982\u7F51\u7EDC I/O\uFF09\u3002</p><h4 id="\u6027\u80FD" tabindex="-1">\u6027\u80FD <a class="header-anchor" href="#\u6027\u80FD" aria-hidden="true">#</a></h4><p>JavaScript \u53EF\u4EE5\u4EA7\u751F\u4E0E\u4F4E\u7EA7\u8BED\u8A00\uFF08\u4F8B\u5982 C\uFF09\u76F8\u540C\u7684\u6027\u80FD\u7ED3\u679C\uFF0C\u56E0\u4E3A V8 \u5F15\u64CE\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002Node.js \u8FD8\u5229\u7528\u4E86 JavaScript \u72EC\u7279\u7684\u4E8B\u4EF6\u9A71\u52A8\u7279\u6027\uFF0C\u53EF\u4EE5\u5FEB\u901F\u9AD8\u6548\u5730\u7F16\u5199\u670D\u52A1\u5668\u4EFB\u52A1\u3002</p><h4 id="\u5F02\u6B65\u7F16\u7A0B" tabindex="-1">\u5F02\u6B65\u7F16\u7A0B <a class="header-anchor" href="#\u5F02\u6B65\u7F16\u7A0B" aria-hidden="true">#</a></h4><p>\u4E3A\u652F\u6301\u529F\u80FD\u5F3A\u5927\u7684\u57FA\u4E8E\u4E8B\u4EF6\u7684\u7F16\u7A0B\u6A21\u578B\uFF0CNode.js \u63D0\u4F9B\u4E86\u4E00\u7EC4\u5185\u7F6E\u7684\u975E\u963B\u6B62 I/O API \u6765\u5904\u7406\u6587\u4EF6\u7CFB\u7EDF\u548C\u6570\u636E\u5E93\u64CD\u4F5C\u7B49\u5E38\u89C1\u4EFB\u52A1\u3002\u8FD9\u4E9B API \u7531 libuv \u5E93\u63D0\u4F9B\u3002\u5F53\u4F60\u8BF7\u6C42 Node.js \u8BFB\u53D6\u78C1\u76D8\u4E2D\u7684\u6587\u4EF6\u5185\u5BB9\u65F6\uFF0CNode.js \u4E0D\u4F1A\u963B\u6B62\u7B49\u5F85\u78C1\u76D8\u548C\u6587\u4EF6\u63CF\u8FF0\u7B26\u51C6\u5907\u5C31\u7EEA\u3002\u5F53\u6587\u4EF6\u51C6\u5907\u5C31\u7EEA\u65F6\uFF0C\u975E\u963B\u6B62 I/O \u63A5\u53E3\u5C06\u901A\u77E5 Node.js\u3002\u5F53\u89E6\u53D1\u9F20\u6807\u6216\u952E\u76D8\u4E8B\u4EF6\uFF0C\u6216\u8005\u4ECE\u8FDC\u7A0B\u7EC8\u7ED3\u70B9\u63A5\u6536\u5230 XMLHttpRequest\uFF08XHR\uFF09\u54CD\u5E94\u65F6\uFF0C\u8BE5\u975E\u963B\u6B62 I/O \u7684\u5DE5\u4F5C\u65B9\u5F0F\u4E0E\u6D4F\u89C8\u5668\u901A\u77E5\u4EE3\u7801\u65F6\u7684\u65B9\u5F0F\u76F8\u540C\u3002</p><p><img src="https://learn.microsoft.com/zh-cn/training/advocates/intro-to-nodejs/media/architecture.svg" alt="\u663E\u793A Node.js \u7528\u4E8E\u5904\u7406\u5E38\u89C1\u4EFB\u52A1\u7684\u4E00\u7EC4\u5185\u7F6E\u7684\u975E\u963B\u6B62 I/O API \u7684\u56FE\u8868\u3002"></p><h3 id="\u5B89\u88C5\u548C\u4F7F\u7528-node-js" tabindex="-1">\u5B89\u88C5\u548C\u4F7F\u7528 Node.js <a class="header-anchor" href="#\u5B89\u88C5\u548C\u4F7F\u7528-node-js" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u901A\u8FC7\u591A\u79CD\u65B9\u5F0F\u6765\u5B89\u88C5 Node.js\u3002\u4EE5\u4E0B\u4ECB\u7ECD\u4E86\u4E00\u4E9B\u6700\u5E38\u89C1\u7684\u65B9\u5F0F\uFF1A</p><ul><li><p>\u901A\u8FC7\u53EF\u6267\u884C\u6587\u4EF6\u8FDB\u884C\u5B89\u88C5\uFF1ANode.js \u4E0B\u8F7D\u9875 <a href="https://nodejs.org/zh-cn/download/" target="_blank" rel="noreferrer">https://nodejs.org/zh-cn/download/</a> \u63D0\u4F9B\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5B89\u88C5\u5305\u3002</p></li><li><p>\u901A\u8FC7 Brew \u5B89\u88C5\uFF1A<a href="https://brew.sh/" target="_blank" rel="noreferrer">Homebrew</a>\uFF08\u7B80\u79F0 Brew\uFF09\u662F\u9002\u7528\u4E8E Linux \u548C macOS \u7684\u5E38\u7528\u5305\u7BA1\u7406\u5668\u3002</p></li><li><p>\u901A\u8FC7 nvm \u5B89\u88C5\uFF1A<a href="https://nodejs.org/en/download/package-manager/#nvm" target="_blank" rel="noreferrer">\u8282\u70B9\u7248\u672C\u7BA1\u7406\u5668\uFF08nvm\uFF09</a>\u4E0D\u4EC5\u6709\u52A9\u4E8E\u5B89\u88C5\u6240\u9700\u7684 Node.js \u7248\u672C\uFF0C\u8FD8\u6709\u52A9\u4E8E\u7BA1\u7406\u5B89\u88C5\u3002\u672C\u90E8\u5206\u4E0D\u4F1A\u4ECB\u7ECD nvm \u9009\u9879\u3002</p></li></ul><h4 id="\u901A\u8FC7\u53EF\u6267\u884C\u6587\u4EF6\u8FDB\u884C\u5B89\u88C5" tabindex="-1">\u901A\u8FC7\u53EF\u6267\u884C\u6587\u4EF6\u8FDB\u884C\u5B89\u88C5 <a class="header-anchor" href="#\u901A\u8FC7\u53EF\u6267\u884C\u6587\u4EF6\u8FDB\u884C\u5B89\u88C5" aria-hidden="true">#</a></h4><p>\u4EE5\u4E0B\u9875\u9762\u6458\u5F55\u81EA<code>https://nodejs.org/zh-cn/download/</code>\u4E0B\u8F7D\u4F4D\u7F6E\u4E2D\u7684\u201C\u5B89\u88C5\u201D\u9875\uFF1A</p><p><img src="https://learn.microsoft.com/zh-cn/training/advocates/intro-to-nodejs/media/install-page.png" alt="Node.js \u5B89\u88C5\u9875\u7684\u5C4F\u5E55\u622A\u56FE\uFF0C\u663E\u793A\u53EF\u7528\u5B89\u88C5\u7A0B\u5E8F\u548C\u6E90\u4EE3\u7801\u3002"></p><p>\u8BF7\u6CE8\u610F\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\uFF08\u5982 Windows\u3001macOS \u548C Linux\uFF09\u53EF\u4F7F\u7528\u7684\u5404\u79CD\u5B89\u88C5\u7A0B\u5E8F\u3002 \u4F60\u8FD8\u53EF\u4EE5\u4E0B\u8F7D\u4E24\u4E2A\u4E0D\u540C\u7684\u6E90\u4EE3\u7801\u7248\u672C\uFF1A</p><ul><li><p>LTS \u662F\u957F\u671F\u652F\u6301\u7684\u7F29\u5199\uFF0C\u88AB\u63CF\u8FF0\u4E3A\u201C\u63A8\u8350\u7ED9\u5927\u591A\u6570\u7528\u6237\u201D\u3002LTS \u9002\u7528\u4E8E\u53EF\u80FD\u65E0\u6CD5\u8FDB\u884C\u9891\u7E41\u66F4\u65B0\u6216\u4E0D\u9700\u8981\u9891\u7E41\u66F4\u65B0\u7684\u4F01\u4E1A\u3002</p></li><li><p>\u5F53\u524D\u8868\u793A\u6E90\u4EE3\u7801\u5904\u4E8E\u79EF\u6781\u5F00\u53D1\u9636\u6BB5\u3002 \u53EF\u80FD\u4F1A\u6DFB\u52A0\u529F\u80FD\u4EE5\u53CA\u51FA\u73B0\u4E2D\u65AD\u6027\u53D8\u66F4\u3002 \u4EE3\u7801\u5E94\u9075\u5FAA\u8BED\u4E49\u7248\u672C\u63A7\u5236\u3002</p></li></ul><p>\u6839\u636E\u4F60\u7684\u516C\u53F8\u7684\u8981\u6C42\u9009\u62E9\u7248\u672C\u3002 \u4F8B\u5982\uFF0C\u5982\u679C\u9700\u8981\u7ECF\u5E38\u66F4\u65B0\uFF0C\u5219\u5F53\u524D\u7248\u672C\u53EF\u80FD\u9002\u5408\u4F60\u3002</p><p>\u82E5\u8981\u8BE6\u7EC6\u4E86\u89E3\u5404\u79CD\u7248\u672C\u7C7B\u578B\uFF0C\u8BF7\u53C2\u9605<a href="https://github.com/nodejs/node#release-types" target="_blank" rel="noreferrer">\u7248\u672C\u7C7B\u578B</a>\u3002</p><h4 id="\u9A8C\u8BC1\u5B89\u88C5" tabindex="-1">\u9A8C\u8BC1\u5B89\u88C5 <a class="header-anchor" href="#\u9A8C\u8BC1\u5B89\u88C5" aria-hidden="true">#</a></h4><p>\u5B89\u88C5 Node.js \u540E\uFF0C\u8BF7\u5728\u7EC8\u7AEF\u4E2D\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u4EE5\u9A8C\u8BC1\u5B89\u88C5\u662F\u5426\u6210\u529F\uFF1A</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">node --version</span></span>
<span class="line"></span></code></pre></div><p>\u8BE5\u547D\u4EE4\u5E94\u4EE5\u4EE5\u4E0B\u683C\u5F0F\u663E\u793A\u5F53\u524D\u7248\u672C\uFF1A</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">v[major version].[minor version].[patch version]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u6B64\u793A\u4F8B\u4E2D\u7684\u62EC\u53F7 <code>[]</code> \u6307\u793A\u7ED3\u679C\u53EF\u80FD\u4F1A\u6709\u6240\u4E0D\u540C\uFF0C\u5177\u4F53\u53D6\u51B3\u4E8E\u7CFB\u7EDF\u4E0A\u5B89\u88C5\u7684\u7248\u672C\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u9700\u8981-node-js\uFF1F" tabindex="-1">\u4E3A\u4EC0\u4E48\u9700\u8981 Node.js\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u9700\u8981-node-js\uFF1F" aria-hidden="true">#</a></h2><p>Node.js \u662F\u8BB8\u591A\u516C\u53F8\u3001\u521D\u521B\u516C\u53F8\u548C\u653F\u5E9C\u7EC4\u7EC7\u4F7F\u7528\u6700\u5E7F\u6CDB\u7684\u6280\u672F\u4E4B\u4E00\u3002 \u5176\u4E2D\u5305\u62EC Netflix\u3001Trello\u3001Walmart\u3001Uber\u3001eBay \u548C NASA \u7B49\u5927\u578B\u4F01\u4E1A\u3002</p><p>Node.js \u662F JavaScript \u8FD0\u884C\u65F6\uFF0C\u7279\u6B8A\u60C5\u51B5\u4E0B\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u4E0A\uFF08\u901A\u5E38\u662F\u5728\u975E\u6D4F\u89C8\u5668\u4F4D\u7F6E\u4E0A\uFF09\u8FD0\u884C JavaScript \u5E94\u7528\u7A0B\u5E8F\u548C\u4EE3\u7801\u3002 Node.js \u662F\u57FA\u4E8E\u4E8B\u4EF6\u9A71\u52A8\u7684 I/O \u8303\u4F8B\u7684\u5355\u7EBF\u7A0B\u3001\u975E\u963B\u6B62\u7684\u8FD0\u884C\u65F6\u3002 \u975E\u963B\u6B62\u7279\u6027\u5177\u6709\u91CD\u8981\u610F\u4E49\uFF0C\u4F8B\u5982\uFF0C\u5F53\u8FDC\u7A0B\u5BA2\u6237\u7AEF\u53D1\u51FA\u8BF7\u6C42\u65F6\uFF0C\u4F7F\u7528 JavaScript \u7F16\u5199\u5E76\u5728 Node.js \u4E0A\u8FD0\u884C\u7684\u670D\u52A1\u5668\u5C06\u5904\u7406\u8BE5\u8BF7\u6C42\uFF0C\u7136\u540E\u6784\u9020\u5E76\u8FD4\u56DE\u54CD\u5E94\uFF0C\u63A5\u7740\u7EE7\u7EED\u5904\u7406\u4E0B\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u4E0D\u4F1A\u8FDB\u884C\u963B\u6B62\u4E14\u65E0\u9700\u7B49\u5F85\u5176\u4ED6\u4EFB\u52A1\u5B8C\u6210\u3002</p><h3 id="\u591A\u7528\u9014\u6280\u672F" tabindex="-1">\u591A\u7528\u9014\u6280\u672F <a class="header-anchor" href="#\u591A\u7528\u9014\u6280\u672F" aria-hidden="true">#</a></h3><p>Node.js \u53EF\u7528\u4E8E\u6784\u5EFA\u5404\u79CD\u53EF\u76F4\u63A5\u7528\u4E8E\u751F\u4EA7\u7684\u5E94\u7528\u7A0B\u5E8F\u3002 \u8FD9\u4E9B\u5E94\u7528\u7684\u8303\u56F4\u4ECE\u4F20\u7EDF\u7684\u8F7B\u91CF\u7EA7\u5927\u6D41\u91CF\u804A\u5929\u7A0B\u5E8F\u5230\u547D\u4EE4\u884C\u5DE5\u5177\u548C Web \u670D\u52A1\u5668\u3002 Node.js \u7ECF\u8FC7\u91CD\u65B0\u8BBE\u8BA1\uFF0C\u53EF\u4EE5\u5904\u7406\u5927\u91CF\u5E76\u53D1\u8BF7\u6C42\u3002</p><h3 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-hidden="true">#</a></h3><p>\u201C\u6240\u6709\u53EF\u4EE5\u4F7F\u7528 JavaScript \u7F16\u5199\u7684\u5E94\u7528\u7A0B\u5E8F\u6700\u7EC8\u90FD\u5C06\u4F7F\u7528 JavaScript \u7F16\u5199\u3002\u201D \u2013 Jeff Atwood\uFF0C\u4F5C\u8005\u3001\u4F01\u4E1A\u5BB6\u3001StackOverflow \u7684\u8054\u5408\u521B\u59CB\u4EBA\u3002</p><p>\u5982\u4ECA\uFF0C\u8BB8\u591A\u975E\u6D4F\u89C8\u5668\u4F4D\u7F6E\u4E0A\u7684\u5E94\u7528\u7A0B\u5E8F\u90FD\u662F\u4F7F\u7528 JavaScript \u7F16\u5199\u7684\uFF0C\u6216\u8005\u652F\u6301 JavaScript \u4F5C\u4E3A\u4F18\u5148\u8BED\u8A00\uFF0C\u5305\u62EC\uFF1A</p><ul><li>Visual Studio Code \u548C Atom \u7B49\u4EE3\u7801\u7F16\u8F91\u5668\uFF0C\u662F\u4F7F\u7528 JavaScript \u6216 TypeScript\uFF08\u5177\u6709\u9759\u6001\u7C7B\u578B\u7684 JavaScript \u7684\u8D85\u96C6\uFF09\u7F16\u5199\u7684\u3002 \u8FD9\u4E9B\u7F16\u8F91\u5668\u53EF\u4EE5\u8FD0\u884C\u5D4C\u5165\u5F0F\u7248\u672C\u7684 Node.js \u8FD0\u884C\u65F6\u3002</li><li>\u8BB8\u591A\u7269\u8054\u7F51 (IoT) \u548C\u5B9E\u65F6\u5E94\u7528\u7A0B\u5E8F\uFF0C\u662F\u4F7F\u7528 JavaScript \u7F16\u5199\u7684\uFF0C\u5E76\u4E14\u57FA\u4E8E Node.js \u5728\u670D\u52A1\u5668\u6216\u8005\u901A\u8FC7\u5FAE\u63A7\u5236\u5668\u548C\u82AF\u7247\u4E0A\u7CFB\u7EDF (SoC) \u5E73\u53F0\uFF08\u4F8B\u5982 Puck.js \u6216 Tessel\uFF09\u8FD0\u884C\u3002</li><li>NativeScript \u7B49\u6280\u672F\uFF0C\u53EF\u4EE5\u4F7F\u7528 JavaScript \u6216 TypeScript \u6784\u5EFA\u9AD8\u6027\u80FD\u7684\u672C\u673A\u79FB\u52A8\u5E94\u7528\u7A0B\u5E8F\u3002</li><li>\u8BB8\u591A\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5728\u5176\u63D2\u4EF6\u7CFB\u7EDF\uFF08\u4F8B\u5982 Sketch\u3001Adobe XD \u548C Google Apps Script\uFF09\u4E2D\u4F7F\u7528 JavaScript\u3002</li></ul><h3 id="\u793E\u533A" tabindex="-1">\u793E\u533A <a class="header-anchor" href="#\u793E\u533A" aria-hidden="true">#</a></h3><p>\u793E\u533A\u5DF2\u4E3A Node.js \u6784\u5EFA\u4E86\u903E\u4E00\u767E\u4E07\u4E2A\u6A21\u5757\u548C\u5E93\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u6A21\u5757\u548C\u5E93\u53D1\u5E03\u5230\u4E86\u8282\u70B9\u5305\u7BA1\u7406\u5668 (npm)\u3002 \u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u8F7B\u677E\u4E0B\u8F7D\u8FD9\u4E9B\u6A21\u5757\u5E76\u5C06\u5176\u96C6\u6210\u5230\u4ED6\u4EEC\u7684\u73B0\u6709\u9879\u76EE\u4E2D\u3002 \u53EF\u5728 Node.js \u4E0A\u8FD0\u884C\u7684\u5E94\u7528\u7A0B\u5E8F\u5305\u62EC\u547D\u4EE4\u884C\u5DE5\u5177\u3001\u6846\u67B6\u3001Web \u670D\u52A1\u5668\u7B49\u3002</p><h3 id="\u5F00\u6E90" tabindex="-1">\u5F00\u6E90 <a class="header-anchor" href="#\u5F00\u6E90" aria-hidden="true">#</a></h3><p>Node.js \u662F\u53D7 OpenJS Foundation \u652F\u6301\u7684\u5F00\u6E90\u6280\u672F\u3002 \u4E00\u4E2A\u6D3B\u8DC3\u7684\u5927\u578B\u5F00\u6E90\u793E\u533A\u548C\u5176\u4E2D\u7684\u8D21\u732E\u8005\u6B63\u5728\u4E0D\u65AD\u52AA\u529B\u6539\u8FDB\u548C\u4F18\u5316\u8BE5\u6280\u672F\u3002 \u9876\u7EA7\u793E\u533A\u59D4\u5458\u4F1A\u5728\u793E\u533A\u53D1\u5C55\u5DE5\u4F5C\u65B9\u9762\u5177\u6709\u6743\u5A01\u3002</p><h2 id="\u5173\u4E8E-node-js" tabindex="-1">\u5173\u4E8E Node.js <a class="header-anchor" href="#\u5173\u4E8E-node-js" aria-hidden="true">#</a></h2><p>\u4F5C\u4E3A\u4E00\u4E2A\u5F02\u6B65\u4E8B\u4EF6\u9A71\u52A8\u7684 JavaScript \u8FD0\u884C\u65F6\uFF0CNode.js \u88AB\u8BBE\u8BA1\u7528\u6765\u6784\u5EFA\u53EF\u6269\u5C55\u7684\u7F51\u7EDC\u5E94\u7528\u3002\u5728\u4E0B\u9762\u7684\u201CHello World\u201D\u793A\u4F8B\u4E2D\uFF0C\u53EF\u4EE5\u5E76\u53D1\u5904\u7406\u8BB8\u591A\u8FDE\u63A5\uFF0C\u6BCF\u4E00\u4E2A\u8FDE\u63A5\u90FD\u4F1A\u89E6\u53D1\u4E00\u4E2A\u56DE\u8C03\uFF0C\u800C\u5F53\u6CA1\u6709\u53EF\u505A\u7684\u4E8B\u60C5\u65F6\uFF0CNode.js \u5C31\u4F1A\u8FDB\u5165\u4F11\u7720\u72B6\u6001\u3002</p><div class="language-JavaScript"><button title="Copy Code" class="copy"></button><span class="lang">JavaScript</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> http </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">http</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> hostname </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> port </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> server </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> http</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">createServer</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">req</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">statusCode</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setHeader</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/plain</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">end</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">server</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(port</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> hostname</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Server running at http://</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">hostname</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">port</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD9\u4E0E\u5F53\u4ECA\u6BD4\u8F83\u5E38\u89C1\u7684\u91C7\u7528\u64CD\u4F5C\u7CFB\u7EDF\u7EBF\u7A0B\u7684\u5E76\u53D1\u6A21\u578B\u5F62\u6210\u4E86\u9C9C\u660E\u5BF9\u6BD4\u3002\u57FA\u4E8E\u7EBF\u7A0B\u7684\u7F51\u7EDC\u6548\u7387\u76F8\u5BF9\u8F83\u4F4E\u4E14\u66F4\u96BE\u4EE5\u4F7F\u7528\u3002\u6B64\u5916\uFF0C\u7531\u4E8E\u6CA1\u6709\u9501\uFF0CNode.js \u7684\u7528\u6237\u4E0D\u7528\u62C5\u5FC3\u8FDB\u7A0B\u6B7B\u9501\u7684\u95EE\u9898\u3002Node.js \u4E2D\u51E0\u4E4E\u6CA1\u6709\u51FD\u6570\u76F4\u63A5\u6267\u884C I/O \u64CD\u4F5C\uFF08\u9664\u975E\u4F60\u4F7F\u7528 Node.js \u6807\u51C6\u5E93\u4E2D\u7684\u540C\u6B65\u51FD\u6570\u7248\u672C\uFF09\uFF0C\u5176\u8FDB\u7A0B\u4ECE\u4E0D\u4F1A\u88AB\u963B\u585E\uFF0C\u56E0\u6B64\u7528 Node.js \u6765\u5F00\u53D1\u53EF\u6269\u5C55\u7CFB\u7EDF\u662F\u975E\u5E38\u5408\u7406\u7684\u3002</p><p>\u5982\u679C\u4F60\u5BF9\u4E0A\u9762\u7684\u63CF\u8FF0\u6709\u4E00\u4E9B\u4E0D\u7406\u89E3\u5730\u65B9\uFF0C\u8FD9\u91CC\u6709\u4E00\u7BC7\u4E13\u95E8\u5173\u4E8E<a href="https://nodejs.org/zh-cn/docs/guides/blocking-vs-non-blocking/" target="_blank" rel="noreferrer">\u963B\u585E\u5BF9\u6BD4\u975E\u963B\u585E</a>\u7684\u6587\u7AE0\u4F9B\u4F60\u53C2\u8003\u3002</p><hr><p>Node.js \u5728\u8BBE\u8BA1\u4E0A\u7C7B\u4F3C\u4E8E Ruby \u7684 <a href="https://github.com/eventmachine/eventmachine" target="_blank" rel="noreferrer">Event Machine</a> \u6216 Python \u7684 <a href="https://twistedmatrix.com/trac/" target="_blank" rel="noreferrer">Twisted</a> \u4E4B\u7C7B\u7684\u7CFB\u7EDF\u3002\u4F46 Node.js \u66F4\u6DF1\u5165\u5730\u8003\u8651\u4E86\u4E8B\u4EF6\u6A21\u578B\uFF0C\u5B83\u5C06<a href="https://twistedmatrix.com/trac/" target="_blank" rel="noreferrer">\u4E8B\u4EF6\u5FAA\u73AF</a>\u4F5C\u4E3A\u4E00\u4E2A\u8FD0\u884C\u65F6\u7ED3\u6784\u800C\u4E0D\u662F\u4F5C\u4E3A\u4E00\u4E2A\u5E93\u6765\u5448\u73B0\u3002\u5728\u5176\u4ED6\u7CFB\u7EDF\u4E2D\uFF0C\u603B\u662F\u6709\u4E00\u4E2A\u963B\u585E\u8C03\u7528\u6765\u542F\u52A8\u4E8B\u4EF6\u5FAA\u73AF\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u8981\u6267\u884C\u7684\u884C\u4E3A\u662F\u901A\u8FC7\u811A\u672C\u5F00\u59CB\u65F6\u7684\u56DE\u8C03\u6765\u5B9A\u4E49\u7684\uFF0C\u7136\u540E\u901A\u8FC7<code>EventMachine::run()</code>\u8FD9\u6837\u7684\u963B\u585E\u8C03\u7528\u6765\u542F\u52A8\u670D\u52A1\u5668\u3002\u800C\u5728 Node.js \u4E2D\uFF0C\u6CA1\u6709\u8FD9\u79CD\u542F\u52A8\u4E8B\u4EF6\u5FAA\u73AF\u7684\u8C03\u7528\u3002Node.js \u5728\u6267\u884C\u8F93\u5165\u811A\u672C\u540E\u76F4\u63A5\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF\uFF0C\u5F53\u6CA1\u6709\u66F4\u591A\u7684\u56DE\u8C03\u8981\u6267\u884C\u65F6\uFF0CNode.js \u5C31\u4F1A\u9000\u51FA\u4E8B\u4EF6\u5FAA\u73AF\u3002\u8FD9\u79CD\u884C\u4E3A\u5C31\u50CF\u6D4F\u89C8\u5668\u7684 JavaScript \u4E00\u6837\u2014\u2014\u4E8B\u4EF6\u5FAA\u73AF\u5BF9\u7528\u6237\u662F\u9690\u85CF\u7684\u3002</p><p>HTTP \u662F Node.js \u4E2D\u7684\u4E00\u7B49\u516C\u6C11\uFF0C\u8BBE\u8BA1\u65F6\u8003\u8651\u5230\u4E86\u6D41\u5F0F\u548C\u4F4E\u5EF6\u8FDF\uFF0C\u8FD9\u4F7F\u5F97 Node.js \u975E\u5E38\u9002\u5408\u4F5C\u4E3A\u7F51\u7EDC\u5E93\u6216\u6846\u67B6\u7684\u57FA\u7840\u3002</p><p>Node.js \u88AB\u8BBE\u8BA1\u6210\u5355\u7EBF\u7A0B\u8FD0\u884C\uFF0C\u4F46\u8FD9\u5E76\u4E0D\u610F\u5473\u7740\u4F60\u65E0\u6CD5\u5229\u7528\u5230 CPU \u7684\u591A\u4E2A\u6838\u5FC3\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 <a href="https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options" target="_blank" rel="noreferrer">child_process.fork()</a> API \u6765\u751F\u6210\u5B50\u8FDB\u7A0B\uFF0C\u5E76\u4E14\u5B83\u88AB\u8BBE\u8BA1\u6210\u975E\u5E38\u6613\u4E8E\u901A\u4FE1\u3002\u800C\u5EFA\u7ACB\u5728\u540C\u4E00\u4E2A\u63A5\u53E3\u4E4B\u4E0A\u7684 <a href="https://nodejs.org/api/cluster.html" target="_blank" rel="noreferrer">cluster</a> \u6A21\u5757\u5141\u8BB8\u4F60\u5728\u8FDB\u7A0B\u4E4B\u95F4\u5171\u4EAB\u5957\u63A5\u5B57\uFF08sockets\uFF09\uFF0C\u4EE5\u5B9E\u73B0\u6838\u5FC3\u7684\u8D1F\u8F7D\u5747\u8861\u3002</p>`,70),p=[l];function r(t,c,i,d,h,D){return e(),a("div",null,p)}const j=s(o,[["render",r]]);export{F as __pageData,j as default};
