import{_ as n,o as s,c as a,a as e}from"./app-9d1897bb.js";const i={},l=e(`<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vuepress-code-copy --save-dev
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vuepress-code-copy --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> CodeCopyPulgin <span class="token keyword">from</span> <span class="token string">&#39;vuepress-code-copy&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">//</span>
  plugins<span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token function">CodeCopyPulgin</span><span class="token punctuation">(</span>options<span class="token operator">:</span> CopyPulginOptions<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pulginoptions" tabindex="-1"><a class="header-anchor" href="#pulginoptions" aria-hidden="true">#</a> PulginOptions</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">CopyPulginOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * copy btn text
   *
   * 复制按钮字体
   * <span class="token keyword">@default</span> &#39;Copy&#39;
   */</span>
  copyText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * copied text
   *
   * 复制成功字体
   * <span class="token keyword">@default</span> &#39;Copied&#39;
   */</span>
  copiedText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * code selector
   *
   * code的选择器
   * <span class="token keyword">@default</span> &#39;div[class*=&quot;language-&quot;]&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token doc-comment comment">/**
   * page delay (ms)
   *
   * 页面的延时 (ms)
   * <span class="token keyword">@default</span> 300
   */</span>
  pageDelay<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token doc-comment comment">/**
   * copy text color
   *
   * 字体颜色
   * <span class="token keyword">@default</span> &#39;var(--code-ln-color)&#39;
   */</span>
  color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[l];function o(t,d){return s(),a("div",null,c)}const r=n(i,[["render",o],["__file","index.html.vue"]]);export{r as default};
