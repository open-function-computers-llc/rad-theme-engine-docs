---
title: "getTerm($slug, $termFields)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 320
toc: true
---

Get all the registered terms for a given taxonomy.

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getTerm</span><span style="color: #E1E4E8;">($slug, $termFields);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getTerm($slug, $termFields);
</textarea></code></pre>

### Parameters

| Parameter     | Type     | Required | Description                                               |
| ------------- | -------- | -------- | --------------------------------------------------------- |
| `$slug`       | `string` | Yes      | The slug of a taxonomy                                    |
| `$termFields` | `array`  | No       | A string array of fields, see below for possible options. |

##### Possible Fields
- __`term_id`__ – Returns the term's id
- __`id`__ – Shortcut for `term_id`
- __`name`__ – The term's name
- __`title`__ – Same as `name`
- __`slug`__ – The term's slug
- __`url`__ – Returns the result of `get_term_link($term)`
- __`permalink`__ – Same as `url`
- __`term_group`__ – The term's group
- __`taxonomy`__ – The slug of the term's taxonomy (Will always be the same as the `$slug` parameter)
- __`description`__ – The term's description, if set
- __`parent`__ – The term's parent
- __`count`__ – Cached object count for this term

Any member of [WP_Term](https://developer.wordpress.org/reference/classes/wp_term/) can be accessed this way.

### Returns

| Type    | Description                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `array` | If fields were provided, values will be returned under those keys. Otherwise an array of `WP_Term` objects will be returned. |

## Example

Getting the name and slug for all the terms within the `car_type` taxonomy.


<pre class="torchlight has-focus-lines" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line line-focus'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getTerm</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&#39;car_type&#39;</span><span style="color: #E1E4E8;">, [</span><span style="color: #9ECBFF;">&#39;name&#39;</span><span style="color: #E1E4E8;">,</span><span style="color: #9ECBFF;">&#39;slug&#39;</span><span style="color: #E1E4E8;">]); </span></div><div class='line line-focus'><span style="color: #6A737D;">// Returns</span></div><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Hatchback&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;hatchback&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    [ </span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Hyper Car&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;hypercar&quot;</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Sports Car&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;sportscar&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span><span style="color: #E1E4E8;"> </span><span style="color: #6A737D;">// And more</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getTerm('car_type', ['name','slug']); // [tl! focus:1]
// Returns
[
    [
        "name" =&gt; "Hatchback",
        "slug" =&gt; "hatchback"
    ],
    [ // [tl! focus:3]
        "name" =&gt; "Hyper Car",
        "slug" =&gt; "hypercar"
    ],
    [
        "name" =&gt; "Sports Car",
        "slug" =&gt; "sportscar"
    ],
    ... // And more
]
</textarea></code></pre>
