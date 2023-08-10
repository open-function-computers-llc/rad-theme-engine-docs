---
title: "setPostMeta($postID, $data)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 330
toc: true
---

Update a post's meta

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">setPostMeta</span><span style="color: #E1E4E8;">($postID, $data);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;setPostMeta($postID, $data);
</textarea></code></pre>

### Parameters

| Parameter | Type     | Required | Description                                                        |
| --------- | -------- | -------- | ------------------------------------------------------------------ |
| `$postID` | `string` | Yes      | ID of a post to update the meta of.                                |
| `$data`   | `array`  | Yes      | An associative array of keys and values to apply to the post meta. |

## Example

Update `key1` and `key2` of the meta for post with ID `42`

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">setPostMeta</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">42</span><span style="color: #E1E4E8;">, [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;key1&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;value1&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;key2&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;value2&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;setPostMeta(42, [
    "key1" =&gt; "value1",
    "key2" =&gt; "value2",
]);
</textarea></code></pre>

<div class="code-caption">Setting a post's meta fields</div>
