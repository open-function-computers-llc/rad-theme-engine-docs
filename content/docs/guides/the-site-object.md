---
title: "The Site Object"
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 200
toc: true
---

Calling the `site()` function in any of your theme's php files will return the `ofc/Site` object, a class with a collection of convenient methods to interface with various parts of WordPress.

## Patterns

### Post Querying

Developers familiar with the WordPress' [WP_Query](https://developer.wordpress.org/reference/functions/get_posts/) concept of querying for posts will feel right at home with RAD Theme Engine.

If you want to quickly fetch 8 posts of type "product", for example:

```php
$products = site()->getPosts([
  "post_type" => "product",
  "numberposts" => 8
]);
```
<div class="code-caption">A simple post query</div>

But unlike a normal WP_Query, RAD Theme Engine' comes with an additional option to make working with taxonomies easier. Now if I want to grab products that have the "medium" taxonomy equal to the term with slug "vinyl", I would simply use:

```php 
$records = site()->getPosts([
  "post_type" => "product",
  "taxonomy.medium" => "vinyl"
  "numberposts" => 8,
]);
```
<div class="code-caption">A post query with a term specified</div>

Additionally a number of aliases for commonly used fields are added by RAD Theme Engine, which are defined in the [`getPosts` docs](../../reference/getposts#arguments).


### Post Fields

One convenient feature of RAD Theme Engine is the ability to define the structure of a returned post object on certain methods.

In practice this simply means creating a string array of [`WP_Post`](https://developer.wordpress.org/reference/classes/wp_post/) members you want returned. For example, if I only want to get the `$post_title` and `$post_author` of a post, my fields would look like this:

```php
$fields = ['post_title','post_author'];

// Get these fields from post with id 4
$post = site()->getPost(4,$fields);
```

The result of getPost is the following:

```php
[
  "post_title" => "My Blog Post",
  "post_author" => "Escher"
]
```

#### Additional Fields

In addition to any member of the [`WP_Post`](https://developer.wordpress.org/reference/classes/wp_post/) object, RAD Theme Engine comes with a collection of shortcuts for nested properties, meta fields, [Advanced Custom Fields](https://www.advancedcustomfields.com/), and taxonomies. 

Check out this [`getPost` example](../../reference/getpost#with-fields) to see some of these fields in action.



- __`id`__ – Shortcut to return the `$ID`.
- __`title`__ – Shortcut to return the `$post_title`.
- __`name`__ – Shortcut to return the `$post_title`.
- __`url`__ – Uses `get_permalink($id)` to fetch the url of the post.
- __`permalink`__ – Same as `url`.
- __`thumbnail`__ – Uses `get_the_post_thumbnail_url($id)` to get the post thumbnail.
- __`content`__ – Retrieves the content of the post.
- __`excerpt`__ – Retrieves the post excerpt, if enabled.
- __`meta.<key>`__ – Get the value of a specific post meta field.
- __`acf.<key>`__ – Get the value of a specific ACF field for this post.
- __`categories.<member1>,<member2>,...`__ – Get specific members of the [`WP_Term`](https://developer.wordpress.org/reference/classes/wp_term) for each category this post is a part of.
- __`taxonomy.<taxonomy>.<member1>,<member2>,...`__ – Get specific members of the [`WP_Term`](https://developer.wordpress.org/reference/classes/wp_term) for each term within the given taxonomy this post is a part of. See below for members:
  - `term_id`
  - `id` – Alias for `term_id`
  - `link` – The result of `get_term_link()`
  - `name`
  - `title` – Alias for `name`
  - `slug`
  - `description`


### Putting it Together

Now that we know how to create a post query and define it's structure, the logical next step would be to put them together! Luckily with RAD Theme Engine this is super simple, just use the `getPosts` function with both parameters.

If I want to grab the title, url, and thumbnail for all the records I'm selling, for example:

```php
$query = [
  "post_type" => "product",
  "taxonomy.medium" => "vinyl"
];

$fields = [
  "title",
  "url",
  "thumbnail"
];

$records = site()->getPosts($query,$fields);
```
<div class="code-caption">Retrieves 3 fields from all posts matching the given query</div>

Check out the [`getPosts` docs](../../reference/getposts) for more information.