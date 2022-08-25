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

To ensure you can use the function, make sure you followed the instructions on the [initializing](../../getting-started/initializing) page. It's literally one step, you can't mess it up.

You're free to rename the function if it clashes with any other names, but this documentation assumes you've instantiated the `better-wordpress` class into a variable named `$site` and it is referenced by a global function named `site()`.

Calling the `site()` function in any of your theme's php files will return the `ofc/Site` object, a class with a collection of convenient methods to interface with various parts of WordPress.

## Patterns

### Post Fields

One convenient feature of better-wordpress is the ability to define the structure of a returned post object on certain methods.

In implimentation all this means is creating a string array of [`WP_Post`](https://developer.wordpress.org/reference/classes/wp_post/) members you want returned. For example, if I only want to get the `$post_title` and `$post_author` of a post, my fields would look like this:

```php
$fields = ['post_title','post_author']

// Get these fields from post with id 4
$post = site()->getPost(4,$fields)
```

The result of getPost is the following:

```php
[
  "post_title" => "My Blog Post",
  "post_author" => "Escher"
]
```

#### Additional Fields

In addition to any member of the [`WP_Post`](https://developer.wordpress.org/reference/classes/wp_post/) object, better-wordpress comes with a collection of shortcuts for nested properties, meta fields, [Advanced Custom Fields](https://www.advancedcustomfields.com/), and taxonomies. 

Check out this [`getPost` example](../getpost#with-fields) to see some of these fields in action.



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
