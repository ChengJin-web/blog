import{_ as s,c as a,o as n,a as l}from"./app.46bcdc5e.js";const A=JSON.parse('{"title":"viewport 布局适配","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.安装安装postcss-px-to-viewport-8-plugin","slug":"_1-安装安装postcss-px-to-viewport-8-plugin","link":"#_1-安装安装postcss-px-to-viewport-8-plugin","children":[]},{"level":2,"title":"2.在项目目录下创建postcss.config.js","slug":"_2-在项目目录下创建postcss-config-js","link":"#_2-在项目目录下创建postcss-config-js","children":[]}],"relativePath":"blog/viewport_adaptation.md","lastUpdated":1676537230000}'),p={name:"blog/viewport_adaptation.md"},o=l(`<h1 id="viewport-布局适配" tabindex="-1">viewport 布局适配 <a class="header-anchor" href="#viewport-布局适配" aria-hidden="true">#</a></h1><h2 id="_1-安装安装postcss-px-to-viewport-8-plugin" tabindex="-1">1.安装安装postcss-px-to-viewport-8-plugin <a class="header-anchor" href="#_1-安装安装postcss-px-to-viewport-8-plugin" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">    yarn add </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">D postcss</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">px</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">viewport</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-在项目目录下创建postcss-config-js" tabindex="-1">2.在项目目录下创建postcss.config.js <a class="header-anchor" href="#_2-在项目目录下创建postcss-config-js" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">postcss-px-to-viewport-8-plugin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">unitToConvert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 需要转换的单位，默认为&quot;px&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">viewportWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">750</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 设计稿的视口宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">unitPrecision</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 单位转换后保留的精度</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">propList</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">!font-size</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 能转化为vw的属性列表,!font-size表示font-size后面的单位不会被转换</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">viewportUnit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vw</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 希望使用的视口单位</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">fontViewportUnit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vw</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 字体使用的视口单位</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">selectorBlackList</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">keep-px]</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 下面配置表示类名中含有&#39;keep-px&#39;都不会被转换</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">minPixelValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 设置最小的转换数值，如果为1的话，只有大于1的值会被转换</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">mediaQuery</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 媒体查询里的单位是否需要转换单位</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">replace</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//  是否直接更换属性值，而不添加备用属性</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exclude</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">node_modules</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 忽略某些文件夹下的文件或特定文件，例如 &#39;node_modules&#39; 下的文件</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">include</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">src</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 如果设置了include，那将只有匹配到的文件才会被转换</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">landscape</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">landscapeUnit</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vw</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 横屏时使用的单位</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">landscapeWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1338</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 横屏时使用的视口宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div>`,5),t=[o];function e(c,r,D,y,i,F){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{A as __pageData,d as default};
