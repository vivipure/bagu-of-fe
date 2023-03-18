import{_ as a,c as s,o,N as l}from"./chunks/framework.1e6a71f2.js";const y=JSON.parse('{"title":"标签","description":"","frontmatter":{"title":"标签","lang":"zh-CN"},"headers":[],"relativePath":"basic/html/seo.md"}'),e={name:"basic/html/seo.md"},t=l(`<h1 id="seo" tabindex="-1">SEO <a class="header-anchor" href="#seo" aria-label="Permalink to &quot;SEO&quot;">​</a></h1><p>SEO(搜索引擎优化)，通过网站内容和结构的优化，提高网站在搜索引擎的排名</p><h2 id="如何做seo" tabindex="-1">如何做SEO <a class="header-anchor" href="#如何做seo" aria-label="Permalink to &quot;如何做SEO&quot;">​</a></h2><h3 id="代码层面" tabindex="-1">代码层面 <a class="header-anchor" href="#代码层面" aria-label="Permalink to &quot;代码层面&quot;">​</a></h3><ol><li>HTML 标签语义化</li><li>图片标签设置 alt</li><li>优先使用静态页面方便爬虫爬取，SPA 应用可以使用SSG,SSR 等技术进行预渲染</li></ol><h3 id="网站描述" tabindex="-1">网站描述 <a class="header-anchor" href="#网站描述" aria-label="Permalink to &quot;网站描述&quot;">​</a></h3><p>使用meta 标签 keywords 和 description 描述页面的具体信息</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">description</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">keywords</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">...</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>关键词和描述 需要尽可能准确，精简</p><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><ol><li>网站目录设置 sitemap.xml ，标识网站存在的所有链接路径</li><li>设置 Robot.txt, 设置爬虫爬取的规则</li></ol><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h2><ol><li>lighthouse</li></ol><p>Chrome Devtools 中可以使用 lighthouse 测量网站的 SEO 得分，可以根据给出的提示，优化相关代码</p><ol start="2"><li>百度站长工具</li></ol><p><a href="https://ziyuan.baidu.com/" target="_blank" rel="noreferrer">https://ziyuan.baidu.com/</a> 可以到百度站长页面主动去提交收录</p>`,16),n=[t];function p(r,c,i,h,D,F){return o(),s("div",null,n)}const u=a(e,[["render",p]]);export{y as __pageData,u as default};
