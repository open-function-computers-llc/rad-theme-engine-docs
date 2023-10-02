---
title: "Configuration"
description: "Available options to configure"
lead: "RAD Theme Engine makes theme configuration easy."
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 100
toc: true
---

## Getting Started

Unlike the traditional WordPress method of defining your theme options programmatically in the `functions.php` file, RAD Theme Engine opts for a simpler, more centralized approach.

With RAD Theme Engine, options like custom post types, menu locations, options pages, and more can be configured from a single array in the `config.php` file. 

By default, your `config.php` file will look something like this:

<div class="code-heading">config.php</div>

<pre class="torchlight torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'>&nbsp;</div><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// how many words should the wordpress excerpt be</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;excerpt-length&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">100</span><span style="color: #E1E4E8;">,</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// optionally append this css classname to the body_class for guests</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;guest-class&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;null&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// register your individual menu locations</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;menu-locations&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;main-nav&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Main Navigation&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;footer-nav&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Footer Navigation&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// here is where you can define your custom post types</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;custom-post-types&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;thing&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;icon&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;dashicons-tide&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;options&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;supports&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;title&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;editor&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;thumbnail&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;comments&#39;</span><span style="color: #E1E4E8;">]</span></div><div class='line'><span style="color: #E1E4E8;">            ]</span></div><div class='line'><span style="color: #E1E4E8;">        ],</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// optionally adjust a couple of attributes for handlebars here</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;handlebars&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #6A737D;">// if you need to register additional Handlebars Helpers, register them here</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;additional-helpers&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [],</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #6A737D;">// adjust the extension for your handlebars template files, .tpl by default</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #6A737D;">// &quot;template-extension&quot; =&gt; &quot;tpl&quot;,</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// enable individual wordpress features here</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;enable&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;post-thumbnails&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;menus&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #6A737D;">// disable individual wordpress features here</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;disable&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;editor&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">];</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    // how many words should the wordpress excerpt be
    "excerpt-length" =&gt; 100,

    // optionally append this css classname to the body_class for guests
    "guest-class" =&gt; "null",

    // register your individual menu locations
    "menu-locations" =&gt; [
        "main-nav" =&gt; "Main Navigation",
        "footer-nav" =&gt; "Footer Navigation",
    ],

    // here is where you can define your custom post types
    "custom-post-types" =&gt; [
        [
            "slug" =&gt; "thing",
            "icon" =&gt; "dashicons-tide",
            "options" =&gt; [
                "supports" =&gt; ['title', 'editor', 'thumbnail', 'comments']
            ]
        ],
    ],

    // optionally adjust a couple of attributes for handlebars here
    "handlebars" =&gt; [

        // if you need to register additional Handlebars Helpers, register them here
        "additional-helpers" =&gt; [],

        // adjust the extension for your handlebars template files, .tpl by default
        // "template-extension" =&gt; "tpl",
    ],

    // enable individual wordpress features here
    "enable" =&gt; [
        "post-thumbnails",
        "menus",
    ],

    // disable individual wordpress features here
    "disable" =&gt; [
        "editor",
    ],
];
</textarea></code></pre>

<div class="code-caption">The default config.php that comes with rad-theme-engine.</div>

If you ever need to reset your `config.php` file, recall that this example lives in the `vendor/open-function-computers-llc` folder of your project.

### Custom Post types

One of the most convenient features of RAD Theme Engine is the ability to define custom post types without ever leaving the configuration array.

For example, if I wanted to make a custom "Album" post type for my music blog:

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'>&nbsp;</div><div class='line'><span style="color: #9ECBFF;">&quot;custom-post-types&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;icon&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;dashicons-album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;taxonomies&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;genre&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">],</span></div><textarea data-torchlight-original="true" style="display: none !important;">"custom-post-types" =&gt; [
    [
        "slug" =&gt; "album",
        "icon" =&gt; "dashicons-album",
        "taxonomies" =&gt; ['genre'],
    ],
],
</textarea></code></pre>

<div class="code-caption">Declaring a simple custom post type. <a href="https://developer.wordpress.org/resource/dashicons">List of Dashicons.</a></div>

In this configuration, a new custom post type with the name "Album" will be created, along with a "Genre" taxonomy if it doesn't already exist.

A more in-depth configuration would look like this, wherein custom labels are specified and various options are set.

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'>&nbsp;</div><div class='line'><span style="color: #9ECBFF;">&quot;custom-post-types&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;icon&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;dashicons-album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;taxonomies&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;genre&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;options&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;has_archive&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&#39;albums&#39;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;show_in_nav_menus&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">true</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;supports&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;title&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;editor&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;thumbnail&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;labels&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&#39;name&#39;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">_x</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&#39;Albums&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;Post Type General Name&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;text_domain&#39;</span><span style="color: #E1E4E8;">),</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&#39;singular_name&#39;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">_x</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&#39;Albums&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;Post Type Singular Name&#39;</span><span style="color: #E1E4E8;">, </span><span style="color: #9ECBFF;">&#39;text_domain&#39;</span><span style="color: #E1E4E8;">),</span></div><div class='line'><span style="color: #E1E4E8;">            ]</span></div><div class='line'><span style="color: #E1E4E8;">        ]</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">],</span></div><textarea data-torchlight-original="true" style="display: none !important;">"custom-post-types" =&gt; [
    [
        "slug" =&gt; "album",
        "icon" =&gt; "dashicons-album",
        "taxonomies" =&gt; ['genre'],
        "options" =&gt; [
            "has_archive" =&gt; 'albums',
            "show_in_nav_menus" =&gt; true,
            "supports" =&gt; ['title', 'editor', 'thumbnail'],
            "labels" =&gt; [
                'name' =&gt; _x('Albums', 'Post Type General Name', 'text_domain'),
                'singular_name' =&gt; _x('Albums', 'Post Type Singular Name', 'text_domain'),
            ]
        ]
    ],
],
</textarea></code></pre>

<div class="code-caption">A more advanced custom post type.</div>

If the `options` parameters look familiar that's because it's the same array that gets passed into [`register_post_type(...)`](https://developer.wordpress.org/reference/functions/register_post_type/) when creating a custom post type the WP way!

Check out the [custom-post-types docs]({{< relref "custom-post-types" >}}) for all the options as well as an even more advanced example.

#### Creating Multiple Post Types

Creating multiple custom post types is simple, just make sure they have unique slugs!

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'>&nbsp;</div><div class='line'><span style="color: #9ECBFF;">&quot;custom-post-types&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;icon&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;dashicons-album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;taxonomies&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;genre&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;options&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #F97583;">...</span><span style="color: #E1E4E8;">]</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;event&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;icon&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;dashicons-megaphone&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;options&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #F97583;">...</span><span style="color: #E1E4E8;">]</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">],</span></div><textarea data-torchlight-original="true" style="display: none !important;">"custom-post-types" =&gt; [
    [
        "slug" =&gt; "album",
        "icon" =&gt; "dashicons-album",
        "taxonomies" =&gt; ['genre'],
        "options" =&gt; [...]
    ],
    [
        "slug" =&gt; "event",
        "icon" =&gt; "dashicons-megaphone",
        "options" =&gt; [...]
    ],
],
</textarea></code></pre>

<div class="code-caption">Declaring multiple custom post types</div>

### Menu Locations

Another common thing that theme developers need to configure are menu locations, and luckily RAD Theme Engine has got that covered too.

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'>&nbsp;</div><div class='line'><span style="color: #9ECBFF;">&quot;menu-locations&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;main-nav&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Main Navigation&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;footer-nav&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Footer Navigation&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">],</span></div><textarea data-torchlight-original="true" style="display: none !important;">"menu-locations" =&gt; [
    "main-nav" =&gt; "Main Navigation",
    "footer-nav" =&gt; "Footer Navigation",
],
</textarea></code></pre>

<div class="code-caption">Declaring menu locations</div>

This configuration will result in your "Menus" > "Manage Locations" page looking like this:

{{< figure src="/images/config-menus-example.png" >}}

That was easy! See the [menu-locations docs]({{< relref "menu-locations" >}}) for more.

### Options Pages

*[Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/) is required to use this option.*

Adding ACF option pages with RAD Theme Engine is dead simple, all it takes is a string!

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'>&nbsp;</div><div class='line'><span style="color: #9ECBFF;">&quot;options-pages&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;Home Page&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;Nav / Footer&quot;</span></div><div class='line'><span style="color: #E1E4E8;">],</span></div><textarea data-torchlight-original="true" style="display: none !important;">"options-pages" =&gt; [
    "Home Page",
    "Nav / Footer"
],
</textarea></code></pre>

<div class="code-caption">Declaring options pages</div>

And just like that, we have two options pages in our sidebar:

{{< figure src="/images/config-options-page-example.png" >}}

Check out the [options-pages docs]({{< relref "menu-locations" >}}) for more.


## All Configuration Options

| Key                                                         | Type    |                                                                                      Description |
| :---------------------------------------------------------- | :------ | -----------------------------------------------------------------------------------------------: |
| [`excerpt-length`]({{< relref "excerpt-length" >}})         | integer | How many words the [WordPress excerpt](https://wordpress.org/support/article/excerpt/) should be |
| [`guest-class`]({{< relref "guest-class" >}})               | string  |  A class to append to the body_class list for unauthenticated users. Set to `"null"` to disable. |
| [`menu-locations`]({{< relref "menu-locations" >}})         | array   |                                                               Register individual menu locations |
| [`options-pages`]({{< relref "options-pages" >}})           | array   |                                                               A list of ACF options pages to add |
| [`custom-post-types`]({{< relref "custom-post-types" >}})   | array   |                                                                        Defines custom post types |
| [`handlebars`]({{< relref "handlebars" >}})                 | array   |                                              Configure handlebars helpers and template extension |
| [`enable`]({{< relref "enable" >}})                         | array   |                                                           A list of WordPress features to enable |
| [`disable`]({{< relref "disable" >}})                       | array   |                                                          A list of WordPress features to disable |
| [`tiny-mce-additions`]({{< relref "tiny-mce-additions" >}}) | array   |                                                              TinyMCE style configuration options |
{.table .table-bordered .col1-nowrap}
