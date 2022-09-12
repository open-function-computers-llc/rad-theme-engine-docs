---
title: "getPostTaxonomy($post, $key)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 310
toc: true
---

Get a post's terms for a certain taxonomy.

## Usage

```php
site()->getPostTaxonomy($post, $key);
```

### Parameters

| Parameter | Type      | Required | Description                                             |
| --------- | --------- | -------- | ------------------------------------------------------- |
| `$post`   | `WP_Post` | Yes      | The post to find the terms of                           |
| `$key`    | `string`  | Yes      | The key (aka slug) of the taxonomy to find the terms of |

### Returns

| Type                 | Description                                                                                                                                                          |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `WP_Term[] \| false` | An array of [`WP_Term`](https://developer.wordpress.org/reference/classes/wp_term/) objects on success, or `false` if there are no terms or the post does not exist. |
{.col1-nowrap}

## Example

Getting the terms of current post for the taxonomy `'car_type'`

```php
site()->getPostTaxonomy(get_post(), 'car_type');

// Returns
[
    object(WP_Term) [
        "term_id" => 5,
        "name" => "Hatchback",
        "slug" => "hatchback",
        ... // Other WP_Term attributes
    ],
    object(WP_Term) [
        "term_id" => 6,
        "name" => "Sports Car",
        "slug" => "sportscar",
        ...
    ],
    ...
]
```

