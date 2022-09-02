---
title: "Configuration"
description: "Available options to configure"
lead: "better-wordpress makes theme configuration easy."
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

Unlike the traditional WordPress method of defining your theme options programmatically in the `functions.php` file, better-wordpress opts for a simpler, more centralized approach.

With better-wordpress, options like custom post types, menu locations, options pages, and more can be configured from a single array in the `config.php` file. 

By default, your `config.php` file will look something like this:

<div class="code-heading">config.php</div>

```php
<?php

return [
    // how many words should the wordpress excerpt be
    "excerpt-length" => 100,

    // optionally append this css classname to the body_class for guests
    "guest-class" => "null",

    // register your individual menu locations
    "menu-locations" => [
        "main-nav" => "Main Navigation",
        "footer-nav" => "Footer Navigation",
    ],

    // here is where you can define your custom post types
    "custom-post-types" => [
        [
            "slug" => "thing",
            "icon" => "dashicons-tide",
            "options" => [
                "supports" => ['title', 'editor', 'thumbnail', 'comments']
            ]
        ],
    ],

    // optionally adjust a couple of attributes for handlebars here
    "handlebars" => [

        // if you need to register additional Handlebars Helpers, register them here
        "additional-helpers" => [],

        // adjust the extension for your handlebars template files, .tpl by default
        // "template-extension" => "tpl",
    ],

    // enable individual wordpress features here
    "enable" => [
        "post-thumbnails",
        "menus",
    ],

    // disable individual wordpress features here
    "disable" => [
        "editor",
    ],
];
```

<div class="code-caption">The default config.php that comes with better-wordpress.</div>

If you ever need to reset your `config.php` file, recall that this example lives in the `vendor/open-function-computers-llc` folder of your project.

### Custom Post types

One of the most convenient features of better-wordpress is the ability to define custom post types without ever leaving the configuration array.

For example, if I wanted to make a custom "Album" post type for my music blog:

<div class="code-heading">config.php</div>

```php
"custom-post-types" => [
    [
        "slug" => "album",
        "icon" => "dashicons-album",
        "taxonomies" => ['genre'],
    ],
],
```

<div class="code-caption">Declaring a simple custom post type. <a href="https://developer.wordpress.org/resource/dashicons">List of Dashicons.</a></div>

In this configuration, a new custom post type with the name "Album" will be created, along with a "Genre" taxonomy if it doesn't already exist.

A more in-depth configuration would look like this, wherein custom labels are specified and various options are set.

<div class="code-heading">config.php</div>

```php
"custom-post-types" => [
    [
        "slug" => "album",
        "icon" => "dashicons-album",
        "taxonomies" => ['genre'],
        "options" => [
            "has_archive" => 'albums',
            "show_in_nav_menus" => true,
            "supports" => ['title', 'editor', 'thumbnail'],
            "labels" => [
                'name' => _x('Albums', 'Post Type General Name', 'text_domain'),
                'singular_name' => _x('Albums', 'Post Type Singular Name', 'text_domain'),
            ]
        ]
    ],
],
```

<div class="code-caption">A more advanced custom post type.</div>

If the `options` parameters look familiar that's because it's the same array that gets passed into [`register_post_type(...)`](https://developer.wordpress.org/reference/functions/register_post_type/) when creating a custom post type the WP way!

Check out the [custom-post-types docs]({{< relref "custom-post-types" >}}) for all the options as well as an even more advanced example.

#### Creating Multiple Post Types

Creating multiple custom post types is simple, just make sure they have unique slugs!

<div class="code-heading">config.php</div>

```php
"custom-post-types" => [
    [
        "slug" => "album",
        "icon" => "dashicons-album",
        "taxonomies" => ['genre'],
        "options" => [...]
    ],
    [
        "slug" => "event",
        "icon" => "dashicons-megaphone",
        "options" => [...]
    ],
],
```

<div class="code-caption">Declaring multiple custom post types</div>

### Menu Locations

Another common thing that theme developers need to configure are menu locations, and luckily better-wordpress has got that covered too.

<div class="code-heading">config.php</div>

```php
"menu-locations" => [
    "main-nav" => "Main Navigation",
    "footer-nav" => "Footer Navigation",
],
```

<div class="code-caption">Declaring menu locations</div>

This configuration will result in your "Menus" > "Manage Locations" page looking like this:

{{< figure src="/images/config-menus-example.png" >}}

That was easy! See the [menu-locations docs]({{< relref "menu-locations" >}}) for more.

### Options Pages

*[Advanced Custom Fields Pro](https://www.advancedcustomfields.com/pro/) is required to use this option.*

Adding ACF option pages with better-wordpress is dead simple, all it takes is a string!

<div class="code-heading">config.php</div>

```php
"options-pages" => [
    "Home Page",
    "Nav / Footer"
],
```

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
