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

```php
site()->getPost($idOrPost, $fields);
```

### Parameters

| Parameter   | Type           | Required | Description                                                                                                                     |
| ----------- | -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `$idOrPost` | `int\|WP_Post` | Yes      | A post id or `WP_Post` object                                                                                                   |
| `$fields`   | `array`        | No       | A string array of [members](https://developer.wordpress.org/reference/classes/wp_post) to return. See below for special fields. |

##### Special fields
- __`id`__ – Shortcut to return the post id.
- __`title`__ – Shortcut to return the `post_title`.
- __`name`__ – Same as `title`.
- __`url`__ – Uses `get_permalink($id)` to fetch the url of the post.
- __`permalink`__ – Same as `url`.
- __`thumbnail`__ – Uses `get_the_post_thumbnail_url($id)` to get the post thumbnail.
- __`content`__ – Retrieves the content of the post.
- __`excerpt`__ – Retrieves the post excerpt, if enabled.
- __`meta.<key>`__ – Get the value of a specific post meta field.
- __`acf.<key>`__ – Get the value of a specific ACF field for this post.
- __`categories.<member1>,<member2>,...`__ – Get specific members of the [`WP_Term`](https://developer.wordpress.org/reference/classes/wp_term) for each category this post is a part of.
- __`taxonomy.<taxonomy>.<member1>,<member2>,...`__ – Get specific members of the [`WP_Term`](https://developer.wordpress.org/reference/classes/wp_term) for each category within the given taxonomy this post is a part of.

### Returns

| Type    | Description                                                                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array` | If fields were provided, values will be returned under those keys. Otherwise, only a `post` (`WP_Post`) and `meta` (`array`) field will be returned. |

## Example

Using `getPost` to fetch information about a post with the id 96.

### With Fields

```php
site()->getPost(96, [
  'id',
  'url',
  'title',
  'acf.miles',
  'taxonomy.car_type.slug,name'
]);

// Returns
[
  "id" => 96,
  "url" => "http://used.car.site/vehicles/2019-volkswagen-gti-4-door/",
  "title" => "2019 Volkswagen GTI 4-Door",
  "miles" => 3148
  "car_type" => [
    [
      "slug" => "hatchback",
      "name" => "Hatchback"
    ],
    [
      "slug" => "sportscar",
      "name" => "Sports Car"
    ]
  ]
]
```

### Without Fields

```php
site()->getPost(96);

// Returns
[
  "post" => object(WP_Post),
  "meta" => [
    "_edit_last" => [1],
    "_edit_lock" => ["1626473973:1"]
    ... // And many more
  ]
]
```
