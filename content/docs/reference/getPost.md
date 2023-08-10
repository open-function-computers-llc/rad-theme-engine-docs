---
title: "getPost($id|WP_Post, $fields)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 305
toc: true
---

Get meta information or specific fields from a post, ACF fields included.

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPost</span><span style="color: #E1E4E8;">($idOrPost, $fields);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getPost($idOrPost, $fields);
</textarea></code></pre>

### Parameters

| Parameter   | Type           | Required | Description                                   |
| ----------- | -------------- | -------- | --------------------------------------------- |
| `$idOrPost` | `int\|WP_Post` | Yes      | A post id or `WP_Post` object                 |
| `$fields`   | `array`        | No       | [Post fields](../the-site-object#post-fields) |

### Returns

| Type    | Description                                                                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | If fields were provided, values will be returned under those keys. Otherwise, only a `post` (`WP_Post`) and `meta` (`array`) field will be returned. |

## Example

Using `getPost` to fetch information about a post with the id 96.

### With Fields

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPost</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">96</span><span style="color: #E1E4E8;">, [</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&#39;id&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&#39;url&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&#39;title&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&#39;acf.miles&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&#39;taxonomy.car_type.slug,name&#39;</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #6A737D;">// Returns</span></div><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">96</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;url&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;http://used.car.site/vehicles/2019-volkswagen-gti-4-door/&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;2019 Volkswagen GTI 4-Door&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;miles&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">3148</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;car_type&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">      </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;hatchback&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">      </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Hatchback&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">      </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;sportscar&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">      </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Sports Car&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ]</span></div><div class='line'><span style="color: #E1E4E8;">  ]</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getPost(96, [
  'id',
  'url',
  'title',
  'acf.miles',
  'taxonomy.car_type.slug,name'
]);

// Returns
[
  "id" =&gt; 96,
  "url" =&gt; "http://used.car.site/vehicles/2019-volkswagen-gti-4-door/",
  "title" =&gt; "2019 Volkswagen GTI 4-Door",
  "miles" =&gt; 3148
  "car_type" =&gt; [
    [
      "slug" =&gt; "hatchback",
      "name" =&gt; "Hatchback"
    ],
    [
      "slug" =&gt; "sportscar",
      "name" =&gt; "Sports Car"
    ]
  ]
]
</textarea></code></pre>

<div class="code-caption">Grabbing various attributes of a single post</div>

### Without Fields

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPost</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">96</span><span style="color: #E1E4E8;">);</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #6A737D;">// Returns</span></div><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;post&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">object</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">WP_Post</span><span style="color: #E1E4E8;">),</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;meta&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;_edit_last&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #79B8FF;">1</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;_edit_lock&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&quot;1626473973:1&quot;</span><span style="color: #E1E4E8;">]</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span><span style="color: #E1E4E8;"> </span><span style="color: #6A737D;">// And many more</span></div><div class='line'><span style="color: #E1E4E8;">  ]</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getPost(96);

// Returns
[
  "post" =&gt; object(WP_Post),
  "meta" =&gt; [
    "_edit_last" =&gt; [1],
    "_edit_lock" =&gt; ["1626473973:1"]
    ... // And many more
  ]
]
</textarea></code></pre>

<div class="code-caption">Getting the entire WP_Post object</div>

