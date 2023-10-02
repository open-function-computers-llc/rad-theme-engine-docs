---
title: "guest-class"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 160
toc: true
---

If you want WordPress to automatically append a class to the body_class list when users are not authenticated, put that class name here.

## Usage

| Key             | Type     | Required | Default   |
| --------------- | -------- | -------- | --------- |
| `"guest-class"` | `string` | No       | `"guest"` |

To remove this functionality altogether, set to `"null"`


## Example

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;guest-class&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;my-custom-class&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    "guest-class" =&gt; "my-custom-class",
]
</textarea></code></pre>

<div class="code-caption">Setting a custom guest class</div>

Also note that we must call the `body_class()` (or `get_body_class()`) function to get these classes wherever our body tag is located in the theme.

<div class="code-heading">header.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">&lt;?php </span><span style="color: #B392F0;">wp_head</span><span style="color: #E1E4E8;">() ?&gt;</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">&lt;</span><span style="color: #85E89D;">body</span><span style="color: #E1E4E8;"> &lt;?php </span><span style="color: #B392F0;">body_class</span><span style="color: #E1E4E8;">() ?&gt;&gt;</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;&lt;?php wp_head() ?&gt;

&lt;body &lt;?php body_class() ?&gt;&gt;&lt;/xmp&gt;
</textarea></code></pre>}}
