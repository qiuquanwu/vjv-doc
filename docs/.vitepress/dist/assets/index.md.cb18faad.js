import{r as u,o as p,c as e,a as o,u as t,C as r,b as n,d as c,e as k}from"./app.1e41a7a0.js";const i={class:"box"},d={setup(l){let a={name:"qiu",age:18,isMan:!1,date:new Date,fn:()=>{},arr:[1,2,5]};const s=u(a);return(y,h)=>(p(),e("div",i,[o(t(r),{value:t(s),copyable:"",boxed:"",sort:""},null,8,["value"])]))}},_=n("h1",{id:"\u4F7F\u7528\u6587\u6863",tabindex:"-1"},[c("\u4F7F\u7528\u6587\u6863 "),n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u6587\u6863","aria-hidden":"true"},"#")],-1),g=n("h3",{id:"\u9884\u89C8",tabindex:"-1"},[c("\u9884\u89C8 "),n("a",{class:"header-anchor",href:"#\u9884\u89C8","aria-hidden":"true"},"#")],-1),m=k(`<h3 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h3><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>JsonViewer</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jsonData<span class="token punctuation">&quot;</span></span> <span class="token attr-name">copyable</span> <span class="token attr-name">boxed</span> <span class="token attr-name">sort</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>JsonViewer<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue3-json-viewer&quot;</span>
<span class="token keyword">import</span> <span class="token string">&quot;vue3-json-viewer/dist/index.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;qiu&quot;</span><span class="token punctuation">,</span><span class="token comment">//\u5B57\u7B26\u4E32</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span><span class="token comment">//\u6570\u7EC4</span>
  <span class="token literal-property property">isMan</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token comment">//\u5E03\u5C14\u503C</span>
  <span class="token literal-property property">date</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> jsonData <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,2),b='{"title":"\u4F7F\u7528\u6587\u6863","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u9884\u89C8","slug":"\u9884\u89C8"},{"level":3,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801"}],"relativePath":"index.md","lastUpdated":1644466481709}',v={},w=Object.assign(v,{setup(l){return(a,s)=>(p(),e("div",null,[_,g,o(d),m]))}});export{b as __pageData,w as default};