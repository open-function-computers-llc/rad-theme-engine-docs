---
title: "getPaginationLinks()"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 310
toc: true
---

Get pagination links based on the current page

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPaginationLinks</span><span style="color: #E1E4E8;">();</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getPaginationLinks();
</textarea></code></pre>

### Returns

| Type              | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `array`           | -                                                                                           |
| ↳ `"older"`       | `string\|false` – URL to the previous posts page, or false if there aren't any older posts. |
| ↳ `"newer"`       | `string\|false` – URL to the next posts page, or false if there aren't any newer posts.     |
| ↳ `"totalPages"`  | `int` – Total amount of pages                                                               |
| ↳ `"currentPage"` | `int` – Index of the current page, starting at `1`                                          |
{.col1-nowrap}

## Example

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPaginationLinks</span><span style="color: #E1E4E8;">();</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #6A737D;">// Results</span></div><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;older&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;http://my.epic.site/blog/page/3/&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;newer&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;http://my.epic.site/blog/&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;totalPages&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">3</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;currentPage&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">2</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getPaginationLinks();

// Results
[
    "older" =&gt; "http://my.epic.site/blog/page/3/",
    "newer" =&gt; "http://my.epic.site/blog/",
    "totalPages" =&gt; 3,
    "currentPage" =&gt; 2
]
</textarea></code></pre>

Passing pagination links into a template is very easy:

<div class="code-heading">archive.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #79B8FF;">echo</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">view</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;blog-archive&quot;</span><span style="color: #E1E4E8;">, [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;pagination&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPaginationLinks</span><span style="color: #E1E4E8;">(),</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">echo site()-&gt;view("blog-archive", [
    "pagination" =&gt; site()-&gt;getPaginationLinks(),
]);
</textarea></code></pre>

<div class="code-caption">Rendering the "blog-archive" handlebars view with pagination links</div>

<div class="code-heading">tpl/blog-archive.tpl</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">...</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">{{#if pagination.older }}</span></div><div class='line'><span style="color: #E1E4E8;">    &lt;</span><span style="color: #85E89D;">a</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">href</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;{{ pagination.older }}&quot;</span><span style="color: #E1E4E8;">&gt;Older Posts&lt;/</span><span style="color: #85E89D;">a</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">{{/if}}</span></div><div class='line'><span style="color: #E1E4E8;">{{#if pagination.newer }}</span></div><div class='line'><span style="color: #E1E4E8;">    &lt;</span><span style="color: #85E89D;">a</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">href</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;{{ pagination.newer }}&quot;</span><span style="color: #E1E4E8;">&gt;Newer Posts&lt;/</span><span style="color: #85E89D;">a</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">{{/if}}</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;...

{{#if pagination.older }}
    &lt;a href="{{ pagination.older }}"&gt;Older Posts&lt;/a&gt;
{{/if}}
{{#if pagination.newer }}
    &lt;a href="{{ pagination.newer }}"&gt;Newer Posts&lt;/a&gt;
{{/if}}&lt;/xmp&gt;
</textarea></code></pre>

<div class="code-caption">Handlebars code to display the links</div>