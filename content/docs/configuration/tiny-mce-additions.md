---
title: "tiny-mce-additions"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 140
toc: true
---

{{< alert icon="👉" text="'styleselect' must be listed as an <a href='../enable'>enabled feature</a> to use this option." />}}

Define custom formats for your theme's tinyMCE text fields.

## Usage

| Key                  | Type    | Required | Default |
| -------------------- | ------- | -------- | ------- |
| `"tiny-mce-additions"` | `array` | No       | `[]`    |

Where `"tiny-mce-additions"` is a list of objects, each with the options below.

### Format Options

These options come from [the WordPress Codex](https://codex.wordpress.org/TinyMCE_Custom_Styles#Registering_Custom_Styles) and the [tinyMCE docs](https://www.tiny.cloud/docs-3x/reference/Configuration3x/Configuration3x@formats/).

| Key            | Type      | Description                                                                                                                                                         |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"title"`      | `string`  | The name of the style, which will appear in the tinyMCE style selection dropdown menu.                                                                              |
| `"inline"`     | `string`  | Name of the inline element to produce, e.g `"span"`. The current text selection will be wrapped in this inline element.                                             |
| `"block"`      | `string`  | Name of the block element to produce for example `“h1″`. Existing block elements within the selection gets replaced with the new block element.                     |
| `"selector"`   | `string`  | CSS 3 selector pattern to find elements within the selection by. This can be used to apply classes to specific elements or complex things like odd rows in a table. |
| `"classes"`    | `string`  | Space separated list of classes to apply to the selected elements or the new inline/block element.                                                                  |
| `"styles"`     | `string`  | Name/value object with CSS style items to apply such as color etc.                                                                                                  |
| `"attributes"` | `string`  | Name/value object with attributes to apply to the selected elements or the new inline/block element.                                                                |
| `"exact"`      | `boolean` | Disables the merge similar styles feature when used. This is needed for some CSS inheritance issues such as text-decoration for underline/strikethough.             |
| `"wrapper"`    | `boolean` | State that tells that the current format is a container format for block elements. For example a div wrapper or blockquote.                                         |

## Example

This custom format will apply the `custom-checkbox-list` class to all `<ul>` elements within the selected HTML.

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;enable&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&quot;styleselect&quot;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;tiny-mce-additions&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">      [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Checkbox List&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;selector&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;ul&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;classes&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;custom-checkbox-list&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">      ]</span></div><div class='line'><span style="color: #E1E4E8;">    ]</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    "enable" =&gt; ["styleselect"],
    "tiny-mce-additions" =&gt; [
      [
        "title" =&gt; "Checkbox List",
        "selector" =&gt; "ul",
        "classes" =&gt; "custom-checkbox-list",
      ]
    ]
]
</textarea></code></pre>

<div class="code-caption">Creating a new TinyMCE style, "Checkbox List"</div>

Now in the editor we see our newly defined format:

{{< figure src="/images/tinymce-example.png" >}}

Note that the extended toolbar (farthest right button) must be enabled to see this option.
