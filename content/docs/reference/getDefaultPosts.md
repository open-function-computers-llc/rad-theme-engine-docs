---
title: "getDefaultPosts($fields)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu: 
  docs:
    parent: "reference"
weight: 50
toc: true
---

Get an array of the default posts for the page. Equivilent to calling WP's `get_posts()` without any arguments, except with more control over which fields are returned.

## Usage

```php
site()->getDefaultPosts($fields);
```

### Parameters

| Parameter | Type    | Required | Description                                                                                                                                     |
| --------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `$fields` | `array` | No       | A string array of [members](https://developer.wordpress.org/reference/classes/wp_post) to return. See [getPost](../getpost) for special fields. |

### Returns

| Type    | Description                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | If fields were provided, values will be returned under those keys. Otherwise, only a `post` (`WP_Post`) and `meta` (`array`) field will be returned for each post. |

## Example

Using `getDefaultPosts` to get a list of vehicles, called from the archive page.


```php
site()->getDefaultPosts([
  'title',
  'id',
  'acf.price'
]);

// Returns
[
  [
    "title" => "2010 Ferrari 458 Italia",
    "id" => 170,
    "price" => 205000
  ],
  [
    "title" => "2019 Renault Alpine A110 Légende GT",
    "id" => 163,
    "price" => 68700
  ],
  [
    "title" => "2019 MINI Cooper S 2-Door Hardtop",
    "id" => 109,
    "price" => 30129
  ],
  [
    "title" => "2019 FIAT 124 Spider Abarth",
    "id" => 102,
    "price" => 27200
  ],
  ... // And more
]
```
