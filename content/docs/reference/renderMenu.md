---
title: "renderMenu($menuLocation)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 340
toc: true
---

Render a menu from a previously defined location

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">renderMenu</span><span style="color: #E1E4E8;">($menuLocation);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;renderMenu($menuLocation);
</textarea></code></pre>

### Parameters

| Parameter       | Type     | Required | Description                                                                                                                         |
| --------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `$menuLocation` | `string` | Yes      | The location of the menu to render, as defined in the config under [`menu-locations`](../../configuration/menu.locations) (the key) |

### Returns

| Type     | Description                   |
| -------- | ----------------------------- |
| `string` | Rendered menu, as HTML string |

The [WordPress docs](https://developer.wordpress.org/reference/functions/wp_nav_menu/#more-information) has more information about the structure of the returned HTML.

## Example

First we make sure the menu location <a href="/docs/configuration/menu-locations/">is registered in the theme's config.php</a>:

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;menu-locations&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;main-nav&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Main Navigation&quot;</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #F97583;">...</span><span style="color: #E1E4E8;"> </span><span style="color: #6A737D;">// More menu locations</span></div><div class='line'><span style="color: #E1E4E8;">    ]</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    "menu-locations" =&gt; [
        "main-nav" =&gt; "Main Navigation"
        ... // More menu locations
    ]
]
</textarea></code></pre>

<div class="code-caption">Registering a menu location</div>

Then we echo the rendered menu in the theme's header view:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">&lt;?= </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">renderMenu</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;main-nav&quot;</span><span style="color: #E1E4E8;">); ?&gt;</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;&lt;&lt;/xmp&gt;?= site()-&gt;renderMenu("main-nav"); ?&gt;
</textarea></code></pre>

<div class="code-caption">Rendering a menu via its location</div>

And that's it!

{{< figure src="/images/menu-example.png" >}}
