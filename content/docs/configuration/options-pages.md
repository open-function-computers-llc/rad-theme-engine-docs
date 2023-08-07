---
title: "options-pages"
member: true
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 110
toc: true
---

{{< alert icon="👉" text="Requires Advanced Custom Fields (ACF) Pro" />}}

Define your options pages in a simple string array.

## Usage

| Key               | Type    | Required | Default |
| ----------------- | ------- | -------- | ------- |
| `"options-pages"` | `array` | No       | `[]`    |

Each string in the array will be used to create a new options page in that name, with that string also as the slug & menu title.

To register an options page under a custom post type, see the [`custom-post-types`]({{< relref "custom-post-types" >}}) page.

## Example

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;options-pages&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;general-options&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;theme-options&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    "options-pages" =&gt; [
        "general-options",
        "theme-options"
    ],
]
</textarea></code></pre>

<div class="code-caption">Registering two custom ACF Pro options pages</div>