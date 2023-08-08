---
title: "getPostTaxonomy($post, $key)"
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

Get a post's terms for a certain taxonomy.

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPostTaxonomy</span><span style="color: #E1E4E8;">($post, $key);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getPostTaxonomy($post, $key);
</textarea></code></pre>

### Parameters

| Parameter | Type      | Required | Description                                             |
| --------- | --------- | -------- | ------------------------------------------------------- |
| `$post`   | `WP_Post` | Yes      | The post to find the terms of                           |
| `$key`    | `string`  | Yes      | The key (aka slug) of the taxonomy to find the terms of |

### Returns

| Type                 | Description                                                                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `WP_Term[] \| false` | An array of [`WP_Term`](https://developer.wordpress.org/reference/classes/wp_term/) objects on success, or `false` if there are no terms or the post does not exist. |
{.col1-nowrap}

## Example

Getting the terms of current post for the taxonomy `'car_type'`

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPostTaxonomy</span><span style="color: #E1E4E8;">(</span><span style="color: #B392F0;">get_post</span><span style="color: #E1E4E8;">(), </span><span style="color: #9ECBFF;">&#39;car_type&#39;</span><span style="color: #E1E4E8;">);</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #6A737D;">// Returns</span></div><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">object</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">WP_Term</span><span style="color: #E1E4E8;">) [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;term_id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">5</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Hatchback&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;hatchback&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #F97583;">...</span><span style="color: #E1E4E8;"> </span><span style="color: #6A737D;">// Other WP_Term attributes</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">object</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">WP_Term</span><span style="color: #E1E4E8;">) [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;term_id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">6</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Sports Car&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;sportscar&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #F97583;">...</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getPostTaxonomy(get_post(), 'car_type');

// Returns
[
    object(WP_Term) [
        "term_id" =&gt; 5,
        "name" =&gt; "Hatchback",
        "slug" =&gt; "hatchback",
        ... // Other WP_Term attributes
    ],
    object(WP_Term) [
        "term_id" =&gt; 6,
        "name" =&gt; "Sports Car",
        "slug" =&gt; "sportscar",
        ...
    ],
    ...
]
</textarea></code></pre>

