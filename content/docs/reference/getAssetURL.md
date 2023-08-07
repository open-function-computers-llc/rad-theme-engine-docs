---
title: "getAssetURL($filename)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 350
toc: true
---

Generate the URL for any static assets that live in the theme's `assets` directory.

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getAssetURL</span><span style="color: #E1E4E8;">($filename);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getAssetURL($filename);
</textarea></code></pre>

### Parameters

| Parameter   | Type     | Required | Description                                           |
| ----------- | -------- | -------- | ----------------------------------------------------- |
| `$filename` | `string` | Yes      | Location of an asset relative to the `assets/` folder |

### Returns

| Type     | Description               |
| -------- | ------------------------- |
| `string` | Absolute URL of the asset |

## Example

Check out the [guide on theme assets](../../guides/assets) for a couple examples.