import{_ as e,c as t,o as r,a as n}from"./app.9c9d8a6a.js";const s="/assets/setting-screenshot-1.a47dfcb4.webp",o="/assets/setting-screenshot-2.8dfd56db.webp",l="/assets/setting-screenshot-3.c47cee8e.webp",i="/assets/setting-screenshot-4.4796059c.webp",d="/assets/setting-screenshot-5.85a07380.webp",k=JSON.parse('{"title":"设置","description":"","frontmatter":{"group":"optimize","title":"设置"},"headers":[{"level":2,"title":"任务栏内容","slug":"任务栏内容","link":"#任务栏内容","children":[]},{"level":2,"title":"桌面图标设置","slug":"桌面图标设置","link":"#桌面图标设置","children":[]},{"level":2,"title":"关闭用户账户控制通知","slug":"关闭用户账户控制通知","link":"#关闭用户账户控制通知","children":[]},{"level":2,"title":"关闭 Windows Defender 防火墙","slug":"关闭-windows-defender-防火墙","link":"#关闭-windows-defender-防火墙","children":[]},{"level":2,"title":"关闭 Microsoft Defender 防火墙","slug":"关闭-microsoft-defender-防火墙","link":"#关闭-microsoft-defender-防火墙","children":[]},{"level":2,"title":"关闭 Windows 安全中心","slug":"关闭-windows-安全中心","link":"#关闭-windows-安全中心","children":[]},{"level":2,"title":"关闭操作中心通知","slug":"关闭操作中心通知","link":"#关闭操作中心通知","children":[]}],"relativePath":"docs/windows/setting.md","lastUpdated":1666017254000}'),g={name:"docs/windows/setting.md"},a=n('<h1 id="设置" tabindex="-1">设置 <a class="header-anchor" href="#设置" aria-hidden="true">#</a></h1><h2 id="任务栏内容" tabindex="-1">任务栏内容 <a class="header-anchor" href="#任务栏内容" aria-hidden="true">#</a></h2><ul><li>右键任务栏区域 <ul><li><strong>搜索</strong> &gt; <strong>隐藏</strong></li><li>取消 <strong>显示“任务栏视图”按钮</strong></li><li>取消 <strong>在任务栏上显示人脉</strong></li></ul></li><li>右键任务栏图标，按需选择“从任务栏取消固定”</li><li>常用软件固定到任务栏 <ul><li>Microsoft Edge</li><li>文件资源管理器</li></ul></li></ul><h2 id="桌面图标设置" tabindex="-1">桌面图标设置 <a class="header-anchor" href="#桌面图标设置" aria-hidden="true">#</a></h2><p><a href="ms-settings:themes"> 打开个性化设置</a><br> 可通过<strong>手动打开</strong>方式或<strong>快速打开</strong>方式以打开<strong>桌面图标设置</strong></p><ul><li><strong>手动打开</strong></li></ul><ol><li>打开<strong>设置</strong> &gt; <strong>个性化</strong> &gt; <strong>主题</strong></li><li>在<strong>主题</strong> &gt; <strong>相关设置</strong>中，选择<strong>桌面图标设置</strong></li><li>选择你希望显示在桌面上的图标，然后选择“应用”和“确定”</li></ol><p><img src="'+s+`" alt=""></p><ul><li><strong>快速打开</strong></li></ul><ol><li><code>Win</code> + <code>R</code> 打开<strong>运行</strong>（或右键<strong>开始</strong>按钮，选择<strong>运行</strong>）</li><li>运行以下命令可快速打开“桌面图标设置”</li></ol><div class="language-cmd"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">C:\\Windows\\system32\\rundll32.exe shell32.dll,Control_RunDLL desk.cpl,,</span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><h2 id="关闭用户账户控制通知" tabindex="-1">关闭用户账户控制通知 <a class="header-anchor" href="#关闭用户账户控制通知" aria-hidden="true">#</a></h2><ol><li>打开<strong>控制面板</strong>（可通过<code>Win</code> + <code>R</code> 打开<strong>运行</strong>，输入<code>control</code>打开“控制面板”）</li><li>查看方式选择<strong>类别</strong></li><li>点击<strong>系统和安全</strong> &gt; <strong>安全和维护</strong> &gt; <strong>更改用户账户控制设置</strong></li><li>将滑块拉到最底下的<strong>从不通知</strong>，并点击“确定”</li><li>在弹出的“你要允许此应用对你的设备进行更改吗？”点击“是” <img src="`+o+'" alt=""></li></ol><h2 id="关闭-windows-defender-防火墙" tabindex="-1">关闭 Windows Defender 防火墙 <a class="header-anchor" href="#关闭-windows-defender-防火墙" aria-hidden="true">#</a></h2><ol><li>打开<strong>控制面板</strong>（可通过<code>Win</code> + <code>R</code> 打开<strong>运行</strong>，输入<code>control</code>打开“控制面板”）</li><li>查看方式选择<strong>类别</strong></li><li>点击<strong>系统和安全</strong> &gt; <strong>Windows Defender 防火墙</strong>，在左侧找到<strong>启用或关闭 Windows Defender 防火墙</strong></li><li>两个都勾选“关闭 Windows Defender 防火墙”，然后选择“确定” <img src="'+l+'" alt=""></li></ol><h2 id="关闭-microsoft-defender-防火墙" tabindex="-1">关闭 Microsoft Defender 防火墙 <a class="header-anchor" href="#关闭-microsoft-defender-防火墙" aria-hidden="true">#</a></h2><p><a href="ms-settings:windowsdefender"> 打开 Windows 安全中心设置</a></p><ol><li>打开<strong>设置</strong> &gt; <strong>更新和安全</strong> &gt; <strong>Windows 安全中心</strong> &gt; <strong>防火墙和网络保护</strong></li><li>依次进入<strong>域网络</strong>、<strong>专用网络</strong>、<strong>公用网络</strong>页面关闭<strong>Microsoft Defender 防火墙</strong><img src="'+i+'" alt=""></li></ol><h2 id="关闭-windows-安全中心" tabindex="-1">关闭 Windows 安全中心 <a class="header-anchor" href="#关闭-windows-安全中心" aria-hidden="true">#</a></h2><p><a href="ms-settings:windowsdefender"> 打开 Windows 安全中心设置</a></p><ol><li><p>打开<strong>设置</strong> &gt; <strong>更新和安全</strong> &gt; <strong>Windows 安全中心</strong> &gt; <strong>病毒和威胁防护</strong></p></li><li><p>点击“<strong>病毒和威胁防护</strong>”<strong>设置</strong> &gt; <strong>管理设置</strong></p></li><li><p>关闭<strong>实时保护</strong>、<strong>云提供的保护</strong>、<strong>自动提交样本</strong>和<strong>纂改防护</strong></p></li><li><p>使用工具永久关闭安全中心，以下工具任选一个使用</p><ul><li><p><a href="https://www.sordum.org/9480/defender-control-v2-1/" target="_blank" rel="noreferrer"><strong>Defender Control (dfControl)</strong></a></p><ul><li><a href="https://www.sordum.org/files/downloads.php?st-defender-control" target="_blank" rel="noreferrer">从 官方网站 下载</a></li><li><a href="https://www.xitongzhijia.net/soft/243200.html" target="_blank" rel="noreferrer">从 系统之家 下载</a></li><li><a href="http://www.aichunjing.com/soft/2019-09-08/786.html" target="_blank" rel="noreferrer">从 爱纯净下载站 下载</a></li></ul></li></ul><p>下载完成后解压，运行“dfControl.exe”，点击<strong>停用 Windows Defender</strong><img src="'+d+'" alt=""></p><ul><li><p><a href="https://github.com/qtkite/defender-control" target="_blank" rel="noreferrer"><strong>Defender Control</strong></a></p><ul><li><a href="https://github.com/qtkite/defender-control/releases" target="_blank" rel="noreferrer">从 GitHub 下载</a></li></ul></li></ul><p>下载后双击运行即可禁用 Defender 或启用 Defender</p><ul><li><code>disable-defender.exe</code>(禁用 Defender)</li><li><code>enable-defender.exe</code>(启用 Defender)</li></ul></li></ol><h2 id="关闭操作中心通知" tabindex="-1">关闭操作中心通知 <a class="header-anchor" href="#关闭操作中心通知" aria-hidden="true">#</a></h2><ol><li>右键托盘<strong>通知图标</strong></li><li>选择<strong>专注助手</strong> &gt; <strong>仅闹钟</strong></li></ol>',23),c=[a];function h(f,p,w,u,_,m){return r(),t("div",null,c)}const D=e(g,[["render",h]]);export{k as __pageData,D as default};
