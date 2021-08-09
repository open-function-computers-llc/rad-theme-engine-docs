---
title: "custom-post-types"
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu: 
  docs:
    parent: "configuration"
weight: 50
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
| `"taxonomies"`    | `array`  | No       |                                                                                                                                              A string list of taxonomy identifiers to register for this post type |
| `"disable"`       | `array`  | No       |                                                                                                                                                                              A string list of features to disable |
| `"options-pages"` | `array`  | No       |                                                                                                      A string list of options pages to add to this post type, using [this]({{< relref "options-pages" >}}) syntax |
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

Here is a custom post type for a TV Show with custom labels and option pages:

```
<?php # config.php

return [
  "custom-post-types" => [
    [
      "slug" => 'shows',
      "icon" => 'dashicons-format-video',
      "options-pages" => ['show-archive-settings'],
      "disable" => ['yoast'],
      "options" => [
        "has_archive" => 'shows',
        "show_in_nav_menus" => true,
        "supports" => ['title', 'editor', 'thumbnail',],
        "rewrite" => [
          'slug' => 'shows',
          'with_front' => true,
          'pages' => true,
          'feeds' => true,
        ],
        "labels" => [
          'name' => _x('TV Shows', 'Post Type General Name', 'text_domain'),
          'singular_name' => _x('TV Show', 'Post Type Singular Name', 'text_domain'),
          'menu_name' => __('TV Shows', 'text_domain'),
          'name_admin_bar' => __('TV Show', 'text_domain'),
          'archives' => __('TV Shows Archives', 'text_domain'),
          'attributes' => __('Item Attributes', 'text_domain'),
          'parent_item_colon' => __('Parent Item:', 'text_domain'),
          'all_items' => __('All TV Shows', 'text_domain'),
          'add_new_item' => __('Add New TV Show', 'text_domain'),
          'add_new' => __('Add New', 'text_domain'),
          'new_item' => __('New Show', 'text_domain'),
          'edit_item' => __('Edit Show', 'text_domain'),
          'update_item' => __('Update Show', 'text_domain'),
          'view_item' => __('View Show', 'text_domain'),
          'view_items' => __('View TV Shows', 'text_domain'),
          'search_items' => __('Search Item', 'text_domain'),
          'not_found' => __('Not found', 'text_domain'),
          'not_found_in_trash' => __('Not found in Trash', 'text_domain'),
          'featured_image' => __('Featured Image', 'text_domain'),
          'set_featured_image' => __('Set featured image', 'text_domain'),
          'remove_featured_image' => __('Remove featured image', 'text_domain'),
          'use_featured_image' => __('Use as featured image', 'text_domain'),
          'insert_into_item' => __('Insert into item', 'text_domain'),
          'uploaded_to_this_item' => __('Uploaded to this item', 'text_domain'),
          'items_list' => __('TV Shows list', 'text_domain'),
          'items_list_navigation' => __('TV Shows list navigation', 'text_domain'),
          'filter_items_list' => __('Filter TV Shows list', 'text_domain'),
        ]
      ]
    ],
  ]
]
```