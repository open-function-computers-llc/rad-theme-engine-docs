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

| Parameter   | Type           | Required | Description                                   |
| ----------- | -------------- | -------- | --------------------------------------------- |
| `$idOrPost` | `int\|WP_Post` | Yes      | A post id or `WP_Post` object                 |
| `$fields`   | `array`        | No       | [Post fields](../the-site-object#post-fields) |

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
