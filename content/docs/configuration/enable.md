---
title: "enable"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 180
toc: true
---

A list of WordPress features to enable.

## Usage

| Key        | Type    | Required | Default |
| ---------- | ------- | -------- | ------- |
| `"enable"` | `array` | No       | `[]`    |

Where `"enable"` is an array of strings selected from the options below.

## Options

| Key                 | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `"post-thumbnails"` | Enables [post thumbnails](https://codex.wordpress.org/Post_Thumbnails)                                              |
| `"menus"`           | Enables WordPress menus. Individual menus can be registered using the [`menu-locations`](../menu-locations) option. |
| `"styleselect"`     | Enables custom tinyMCE styles, declared [here](../tinyMCEAdditions) |
{.table .table-bordered .col1-nowrap}

## Example

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;enable&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&quot;post-thumbnails&quot;</span><span style="color: #E1E4E8;">,</span><span style="color: #9ECBFF;">&quot;menus&quot;</span><span style="color: #E1E4E8;">]</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
  "enable" =&gt; ["post-thumbnails","menus"]
]
</textarea></code></pre>

<div class="code-caption">Enabling menus and post thumbnails in your theme</div>