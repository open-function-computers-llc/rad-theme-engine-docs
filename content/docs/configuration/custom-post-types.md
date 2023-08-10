---
title: "custom-post-types"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 100
toc: true
---

Configure your custom post types and their options pages, all from a single array.

## Usage

| Key                   | Type    | Required | Default |
| --------------------- | ------- | -------- | ------- |
| `"custom-post-types"` | `array` | No       | `[]`    |

Where the array contains a list of associative arrays with the options below:

## Custom Post Type Object

| Key               | Type     | Required |                                                                                                                                                                                                       Description |
| ----------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| `"slug"`          | `string` | Yes      |                                                                                                                                                                             Post type slug, used as an identifier |
| `"icon"`          | `string` | No       |                                                                                                                              A [dashicon](https://developer.wordpress.org/resource/dashicons) to display in menus |
| `"taxonomies"`    | `array`  | No       |                                                                                                                                             A string array of taxonomy identifiers to register for this post type |
| `"disable"`       | `array`  | No       |                                                                                                                                                                             A string array of features to disable |
| `"options-pages"` | `array`  | No       |                                                                                                     A string array of options pages to add to this post type, using [this]({{< relref "options-pages" >}}) syntax |
| `"options"`       | `array`  | No       | An associative array of [options](https://developer.wordpress.org/reference/functions/register_post_type/#parameter-detail-information) to create the post type with, where labels and rewrite options can be set |
{.col1-nowrap}

### Options

The value of the `"options"` field is passed directly into the second parameter of WordPress's `register_post_type($name,$options)` function, and uses [these](https://developer.wordpress.org/reference/functions/register_post_type/#parameter-detail-information) options.

To easily generate options for your custom post type, check out [this website.](https://generatewp.com/post-type/)

### Disable Features

A list of possible features to disable using the `"disabled"` key

| Key       | Description                                           |
| --------- | ----------------------------------------------------- |
| `"yoast"` | Disables the Yoast SEO plugin for just this post type |


## Example

Here is a custom post type for a TV Show with a genre taxonomy, custom labels, and an options page:

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;custom-post-types&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&#39;shows&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;icon&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&#39;dashicons-format-video&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;options-pages&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;show-archive-settings&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;taxonomies&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;genre&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;disable&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;yoast&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;options&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;has_archive&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&#39;shows&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;show_in_nav_menus&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">true</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;supports&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;title&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;editor&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;thumbnail&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;rewrite&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&#39;slug&#39;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&#39;shows&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&#39;with_front&#39;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">true</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&#39;pages&#39;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">true</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&#39;feeds&#39;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">true</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                ],</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;labels&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&#39;name&#39;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">_x</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&#39;TV Shows&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;Post Type General Name&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;text_domain&#39;</span><span style="color: #E1E4E8;">),</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&#39;singular_name&#39;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">_x</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&#39;TV Show&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;Post Type Singular Name&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;text_domain&#39;</span><span style="color: #E1E4E8;">),</span></div><div class='line'><span style="color: #E1E4E8;">                ]</span></div><div class='line'><span style="color: #E1E4E8;">            ]</span></div><div class='line'><span style="color: #E1E4E8;">        ],</span></div><div class='line'><span style="color: #E1E4E8;">    ]</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    "custom-post-types" =&gt; [
        [
            "slug" =&gt; 'shows',
            "icon" =&gt; 'dashicons-format-video',
            "options-pages" =&gt; ['show-archive-settings'],
            "taxonomies" =&gt; ['genre'],
            "disable" =&gt; ['yoast'],
            "options" =&gt; [
                "has_archive" =&gt; 'shows',
                "show_in_nav_menus" =&gt; true,
                "supports" =&gt; ['title', 'editor', 'thumbnail'],
                "rewrite" =&gt; [
                    'slug' =&gt; 'shows',
                    'with_front' =&gt; true,
                    'pages' =&gt; true,
                    'feeds' =&gt; true,
                ],
                "labels" =&gt; [
                    'name' =&gt; _x('TV Shows', 'Post Type General Name', 'text_domain'),
                    'singular_name' =&gt; _x('TV Show', 'Post Type Singular Name', 'text_domain'),
                ]
            ]
        ],
    ]
]
</textarea></code></pre>A new custom post type with the slug "shows"</div>
