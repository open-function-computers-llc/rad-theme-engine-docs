---
title: "disable"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 190
toc: true
---

A list of WordPress features to enable.

## Usage

| Key         | Type    | Required | Default |
| ----------- | ------- | -------- | ------- |
| `"disable"` | `array` | No       | `[]`    |

Where `"disable"` is an array of strings selected from the options below.

## Options

| Key            | Description                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `"editor"`     | Disables WordPress's editor on the admin page. Helpful if you don't want people breaking your theme.                     |
| `"customizer"` | If you aren't enabling fields in the admin customizer, you might as well remove the link and functionality.              |
| `"gutenberg"`  | This will take you back to the standard WYSIWYG editor instead of the new block editor. Helpful for strict site designs. |
{.table .table-bordered .col1-nowrap}

## Example

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;disable&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&quot;editor&quot;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&quot;customizer&quot;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&quot;gutenberg&quot;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    ...
    "disable" =&gt; ["editor", "customizer", "gutenberg"],
    ...
]
</textarea></code></pre>

<div class="code-caption">Disabling the WordPress editor</div>
