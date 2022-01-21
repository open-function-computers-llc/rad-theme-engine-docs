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
weight: 250
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

```php
<?php # config.php

return [
    "custom-post-types" => [
        [
            "slug" => 'shows',
            "icon" => 'dashicons-format-video',
            "options-pages" => ['show-archive-settings'],
            "taxonomies" => ['genre'],
            "disable" => ['yoast'],
            "options" => [
                "has_archive" => 'shows',
                "show_in_nav_menus" => true,
                "supports" => ['title', 'editor', 'thumbnail'],
                "rewrite" => [
                    'slug' => 'shows',
                    'with_front' => true,
                    'pages' => true,
                    'feeds' => true,
                ],
                "labels" => [
                    'name' => _x('TV Shows', 'Post Type General Name', 'text_domain'),
                    'singular_name' => _x('TV Show', 'Post Type Singular Name', 'text_domain'),
                ]
            ]
        ],
    ]
]
```
