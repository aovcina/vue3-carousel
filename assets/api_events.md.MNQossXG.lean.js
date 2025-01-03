import{_ as e,c as s,a2 as a,o as t}from"./chunks/framework.e-bAZrdY.js";const E=JSON.parse('{"title":"Events","description":"","frontmatter":{},"headers":[],"relativePath":"api/events.md","filePath":"api/events.md"}'),n={name:"api/events.md"};function l(h,i,r,d,o,p){return t(),s("div",null,i[0]||(i[0]=[a(`<h1 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h1><p>Carousel events provide flexibility to intercept and react to navigation changes, offering greater control and customization options.</p><h2 id="how-to-use-events" tabindex="-1">How to Use Events <a class="header-anchor" href="#how-to-use-events" aria-label="Permalink to &quot;How to Use Events&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleInit</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Carousel initialized&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleSlideStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Slide started:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Carousel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">handleInit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">slide-start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">handleSlideStart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Carousel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="event-reference" tabindex="-1">Event Reference <a class="header-anchor" href="#event-reference" aria-label="Permalink to &quot;Event Reference&quot;">​</a></h2><h3 id="before-init" tabindex="-1">@before-init <a class="header-anchor" href="#before-init" aria-label="Permalink to &quot;@before-init&quot;">​</a></h3><p>Triggered before the carousel is initialized. Use this to perform any setup tasks required before the carousel is ready.</p><h3 id="init" tabindex="-1">@init <a class="header-anchor" href="#init" aria-label="Permalink to &quot;@init&quot;">​</a></h3><p>Triggered once the carousel is mounted and fully initialized. This is ideal for executing post-initialization logic.</p><h3 id="slide-start" tabindex="-1">slide-start <a class="header-anchor" href="#slide-start" aria-label="Permalink to &quot;slide-start&quot;">​</a></h3><p>Triggered at the beginning of the sliding function. Emits the following data:</p><ul><li><code>slidingToIndex</code>: The index of the slide the carousel is moving to.</li><li><code>currentSlideIndex</code>: The current slide index before the transition starts.</li><li><code>prevSlideIndex</code>: The index of the slide before the current one.</li><li><code>slidesCount</code>: The total number of slides in the carousel.</li></ul><h3 id="slide-end" tabindex="-1">@slide-end <a class="header-anchor" href="#slide-end" aria-label="Permalink to &quot;@slide-end&quot;">​</a></h3><p>Triggered after the sliding animation completes and the current slide is updated. Emits the following data:</p><ul><li><code>currentSlideIndex</code>: The updated current slide index.</li><li><code>prevSlideIndex</code>: The index of the slide before the transition.</li><li><code>slidesCount</code>: The total number of slides in the carousel.</li></ul><h3 id="loop" tabindex="-1">@loop <a class="header-anchor" href="#loop" aria-label="Permalink to &quot;@loop&quot;">​</a></h3><p>Triggered when the carousel loops over (wraps around), only in wrap-around mode. Emits the following data:</p><ul><li><code>slidingToIndex</code>: The index of the slide the carousel loops to.</li><li><code>currentSlideIndex</code>: The current slide index before the loop occurs.</li></ul><h3 id="drag" tabindex="-1">@drag <a class="header-anchor" href="#drag" aria-label="Permalink to &quot;@drag&quot;">​</a></h3><p>Triggered while the carousel is being dragged, providing live positional data. Emits the following:</p><ul><li><code>x</code>: The horizontal drag position.</li><li><code>y</code>: The vertical drag position.</li></ul><h3 id="slide-registered" tabindex="-1">@slide-registered <a class="header-anchor" href="#slide-registered" aria-label="Permalink to &quot;@slide-registered&quot;">​</a></h3><p>Triggered when a new slide is registered with the carousel. Emits the following data:</p><ul><li><code>slide</code>: The Vue component instance of the registered slide</li><li><code>index</code>: The index position where the slide was registered</li></ul><h3 id="slide-unregistered" tabindex="-1">@slide-unregistered <a class="header-anchor" href="#slide-unregistered" aria-label="Permalink to &quot;@slide-unregistered&quot;">​</a></h3><p>Triggered when a slide is unregistered (removed) from the carousel. Emits the following data:</p><ul><li><code>slide</code>: The Vue component instance of the unregistered slide</li><li><code>index</code>: The index position from which the slide was removed</li></ul><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li>Events are reactive and can be used to trigger animations, analytics, or other custom behaviors.</li><li>Registration events (<code>slide-registered</code>, <code>slide-unregistered</code>) are particularly useful for tracking slide lifecycle and managing external state.</li><li>Ensure your event handlers account for edge cases, such as looping or rapid navigation.</li></ul>`,29)]))}const c=e(n,[["render",l]]);export{E as __pageData,c as default};
