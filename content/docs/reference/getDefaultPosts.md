---
title: "getDefaultPosts($fields)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 307
toc: true
---

Get an array of the default posts for the page. Equivilent to calling WP's `get_posts()` without any arguments, except with more control over which fields are returned.

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getDefaultPosts</span><span style="color: #E1E4E8;">($fields);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getDefaultPosts($fields);
</textarea></code></pre>

### Parameters

| Parameter | Type    | Required | Description                                   |
| --------- | ------- | -------- | --------------------------------------------- |
| `$fields` | `array` | No       | [Post fields](../the-site-object#post-fields) |

### Returns

| Type    | Description                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | If fields were provided, values will be returned under those keys. Otherwise, only a `post` (`WP_Post`) and `meta` (`array`) field will be returned for each post. |

## Example

Using `getDefaultPosts` to get a list of vehicles, called from the archive page `archive-vehicle.php`.


<pre class="torchlight has-focus-lines" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line line-focus'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getDefaultPosts</span><span style="color: #E1E4E8;">([ </span></div><div class='line line-focus'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&#39;title&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&#39;id&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&#39;acf.price&#39;</span></div><div class='line line-focus'><span style="color: #E1E4E8;">]);</span></div><div class='line line-focus'><span style="color: #6A737D;">// Returns</span></div><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;2010 Ferrari 458 Italia&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">170</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;price&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">205000</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    [ </span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;2019 Renault Alpine A110 Légende GT&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">163</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;price&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">68700</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;2019 MINI Cooper S 2-Door Hardtop&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">109</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;price&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">30129</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;2019 FIAT 124 Spider Abarth&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">102</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;price&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">27200</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span><span style="color: #E1E4E8;"> </span><span style="color: #6A737D;">// And more</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getDefaultPosts([ // [tl! focus:5]
  'title',
  'id',
  'acf.price'
]);
// Returns
[
    [
        "title" =&gt; "2010 Ferrari 458 Italia",
        "id" =&gt; 170,
        "price" =&gt; 205000
    ],
    [ // [tl! focus:4]
        "title" =&gt; "2019 Renault Alpine A110 Légende GT",
        "id" =&gt; 163,
        "price" =&gt; 68700
    ],
    [
        "title" =&gt; "2019 MINI Cooper S 2-Door Hardtop",
        "id" =&gt; 109,
        "price" =&gt; 30129
    ],
    [
        "title" =&gt; "2019 FIAT 124 Spider Abarth",
        "id" =&gt; 102,
        "price" =&gt; 27200
    ],
    ... // And more
]
</textarea></code></pre>

<div class="code-caption">Grabbing the title, id, and price of the default posts for this location.</div>
