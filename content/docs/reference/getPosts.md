---
title: "getPosts($args, $fields)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 306
toc: true
---

Get specific fields or WP_Post objects for multiple posts.

## Usage

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPosts</span><span style="color: #E1E4E8;">($args, $fields);</span></div><textarea data-torchlight-original="true" style="display: none !important;">site()-&gt;getPosts($args, $fields);
</textarea></code></pre>

### Parameters

| Parameter | Type    | Required | Description                                                                                            |
| --------- | ------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `$args`   | `array` | Yes      | An associative array of options to determine which posts to return. See below for a list of arguments. |
| `$fields` | `array` | No       | [Post fields](../the-site-object#post-fields)                                                          |

### Arguments
| Key                  | Type     | Default  | Description                                                                                                        |
| -------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `"numberposts"`      | `int`    | `5`      | Max amount of posts to return                                                                                      |
| `"category"`         | `int`    | `0`      | ID of category to filter by                                                                                        |
| `"orderby"`          | `string` | `"date"` | Field to order results by                                                                                          |
| `"order"`            | `string` | `"DESC"` | Sort direction                                                                                                     |
| `"include"`          | `array`  | `[]`     | List of post IDs to include                                                                                        |
| `"exclude"`          | `array`  | `[]`     | List of post IDs to exclude                                                                                        |
| `"meta_key"`         | `string` | -        | Used with `meta_value`                                                                                             |
| `"meta_value"`       | `string` | -        | Grab posts by a meta value                                                                                         |
| `"post_type"`        | `string` | `"post"` | Grab posts by a post type                                                                                          |
| `"type"`             | `string` | -        | Alias for `"post_type"`                                                                                            |
| `"suppress_filters"` | `bool`   | `true`   | Whether to suppress filters                                                                                        |
| `"taxonomy.<type>"`  | `string` | -        | Returns posts with the defined taxonomies. The `string` is a comma seperated list of values for the taxonomy type. |

As well as anything else that can be passed into WP's [`get_posts`](https://developer.wordpress.org/reference/functions/get_posts/) function.

### Returns

| Type    | Description                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | If fields were provided, values will be returned under those keys. Otherwise, only a `post` (`WP_Post`) and `meta` (`array`) field will be returned for each post. |

## Example

In this example we get the name, mileage and country for vehicles from France or Italy.

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// ...</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;custom-post-types&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;vehicles&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;taxonomies&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&quot;country&quot;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">        ]</span></div><div class='line'><span style="color: #E1E4E8;">    ]</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// ...</span></div><div class='line'><span style="color: #E1E4E8;">];</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    // ...
    "custom-post-types" =&gt; [
        [
            "slug" =&gt; "vehicles",
            "taxonomies" =&gt; ["country"],
        ]
    ]
    // ...
];
</textarea></code></pre>

<div class="code-caption">Registering a custom post type and taxonomy</div>

<pre class="torchlight has-focus-lines" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line line-focus'><span style="color: #6A737D;">// Where you call your lookup </span></div><div class='line line-focus'><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPosts</span><span style="color: #E1E4E8;">([</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;type&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;vehicles&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;taxonomy.country&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;france,italy&quot;</span></div><div class='line line-focus'><span style="color: #E1E4E8;">], [</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;acf.miles&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;taxonomy.country.name&quot;</span></div><div class='line line-focus'><span style="color: #E1E4E8;">]);</span></div><div class='line line-focus'><span style="color: #6A737D;">// Returns</span></div><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;2010 Ferrari 458 Italia&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;miles&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">13802</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;country&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">            [</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Italy&quot;</span></div><div class='line'><span style="color: #E1E4E8;">            ]</span></div><div class='line'><span style="color: #E1E4E8;">        ]</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    [ </span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;2019 Renault Alpine A110 Légende GT&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;miles&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">3211</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;country&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line line-focus'><span style="color: #E1E4E8;">            [</span></div><div class='line line-focus'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;France&quot;</span></div><div class='line line-focus'><span style="color: #E1E4E8;">            ]</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        ]</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;2019 FIAT 124 Spider Abarth&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;miles&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">9304</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;country&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">            [</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Italy&quot;</span></div><div class='line'><span style="color: #E1E4E8;">            ]</span></div><div class='line'><span style="color: #E1E4E8;">        ]</span></div><div class='line'><span style="color: #E1E4E8;">    ]</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">// Where you call your lookup [tl! focus:9]
site()-&gt;getPosts([
    "type" =&gt; "vehicles",
    "taxonomy.country" =&gt; "france,italy"
], [
    "title",
    "acf.miles",
    "taxonomy.country.name"
]);
// Returns
[
    [
        "title" =&gt; "2010 Ferrari 458 Italia",
        "miles" =&gt; 13802,
        "country" =&gt; [
            [
                "name" =&gt; "Italy"
            ]
        ]
    ],
    [ // [tl! focus:8]
        "title" =&gt; "2019 Renault Alpine A110 Légende GT",
        "miles" =&gt; 3211,
        "country" =&gt; [
            [
                "name" =&gt; "France"
            ]
        ]
    ],
    [
        "title" =&gt; "2019 FIAT 124 Spider Abarth",
        "miles" =&gt; 9304,
        "country" =&gt; [
            [
                "name" =&gt; "Italy"
            ]
        ]
    ]
    ...
]
</textarea></code></pre>

<div class="code-caption">Grabbing posts based on post type and taxonomy, only returning certain fields.</div>
