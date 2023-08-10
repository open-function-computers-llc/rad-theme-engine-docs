---
title: "excerpt-length"
member: true
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 170
toc: true
---

An excerpt is an optional text associated to a Post, often used as a summary. This option defines how many words should shown in the excerpt.

## Usage

| Key                | Type      | Required | Default |
| ------------------ | --------- | -------- | ------- |
| `"excerpt-length"` | `integer` | No       | `55`    |


## Example

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;excerpt-length&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">100</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
  "excerpt-length" =&gt; 100,
]
</textarea></code></pre>

<div class="code-caption">Setting the excerpt length to 100 characters.</div>