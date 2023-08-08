---
title: "render($fileName, $data)"
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

Render a template with the given data, using handlebars.

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">render</span><span style="color: #E1E4E8;">($fileName, $data);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;render($fileName, $data);
</textarea></code></pre>

### Parameters

| Parameter   | Type     | Required | Description                                                       |
| ----------- | -------- | -------- | ----------------------------------------------------------------- |
| `$fileName` | `string` | Yes      | The name of the template, folder and file extension not included. |
| `$data`     | `array`  | Yes      | An associative array of data to pass to the template.             |

### Returns

| Type     | Description        |
| -------- | ------------------ |
| `string` | Compiled HTML code |

## Example

[Rendering a template with handlebars](../../getting-started/handlebars/#rendering) (Getting Started)
