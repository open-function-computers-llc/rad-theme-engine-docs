---
title: "Theme Assets"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 400
toc: true
---

The [`getAssetUrl($filename)`](../../reference/getasseturl) function is a convenient method of getting urls for files that exist in your theme's `assets` folder.

## Grabbing File URLs

You can use this helper to pass absolute paths to your handlebars template. Assume that we have some images and documents in our theme code (`assets/main-logo.png, assets/documents/tandc.pdf, etc...`):

<div class="code-heading">index.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #79B8FF;">echo</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">render</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;partials/sidebar&quot;</span><span style="color: #E1E4E8;">, [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;main-logo&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getAssetURL</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;main-logo.png&quot;</span><span style="color: #E1E4E8;">),</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;main-logo-alt&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Lorem ipsum&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;terms-pdf&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getAssetURL</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;documents/tandc.pdf&quot;</span><span style="color: #E1E4E8;">),</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">echo site()-&gt;render("partials/sidebar", [
    "main-logo" =&gt; site()-&gt;getAssetURL("main-logo.png"),
    "main-logo-alt" =&gt; "Lorem ipsum",
    "terms-pdf" =&gt; site()-&gt;getAssetURL("documents/tandc.pdf"),
    ...
]);
</textarea></code></pre>

<div class="code-heading">tpl/partials/sidebar.tpl</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">...</span></div><div class='line'><span style="color: #E1E4E8;">&lt;</span><span style="color: #85E89D;">aside</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">    &lt;</span><span style="color: #85E89D;">img</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">src</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;{{ main-logo }}&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">alt</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;{{ main-logo-alt }}&quot;</span><span style="color: #E1E4E8;"> /&gt;</span></div><div class='line'><span style="color: #E1E4E8;">    ...</span></div><div class='line'><span style="color: #E1E4E8;">    &lt;</span><span style="color: #85E89D;">p</span><span style="color: #E1E4E8;">&gt;Download our &lt;</span><span style="color: #85E89D;">a</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">href</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;{{ terms-pdf }}&quot;</span><span style="color: #E1E4E8;">&gt;Terms and Conditions&lt;/</span><span style="color: #85E89D;">a</span><span style="color: #E1E4E8;">&gt;&lt;/</span><span style="color: #85E89D;">p</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">&lt;/</span><span style="color: #85E89D;">aside</span><span style="color: #E1E4E8;">&gt;</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;...
&lt;aside&gt;
    &lt;img src="{{ main-logo }}" alt="{{ main-logo-alt }}" /&gt;
    ...
    &lt;p&gt;Download our &lt;a href="{{ terms-pdf }}"&gt;Terms and Conditions&lt;/a&gt;&lt;/p&gt;
&lt;/aside&gt;&lt;/xmp&gt;
</textarea></code></pre>

See more about the `getAssetURL` function [here](../../reference/getasseturl).


