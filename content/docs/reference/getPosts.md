---
title: "getPosts($args, $fields)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 306
toc: true
---

Get specific fields or WP_Post objects for multiple posts.

## Usage

```php
site()->getPosts($args, $fields);
```

### Parameters

| Parameter | Type    | Required | Description                                                                                                                                     |
| --------- | ------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `$args`   | `array` | Yes      | An associative array of options to determine which posts to return. See below for a list of arguments.                                          |
| `$fields` | `array` | No       | A string array of [members](https://developer.wordpress.org/reference/classes/wp_post) to return. See [getPost](../getpost) for special fields. |

### Arguments
| Key                  | Type     | Default  | Description                                                                                                        |
| -------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `"numberposts"`      | `int`    | `5`      | Max amount of posts to return                                                                                      |
| `"category"`         | `int`    | `0`      | ID of category to filter by                                                                                        |
| `"orderby"`          | `string` | `"date"` | Field to order results by                                                                                          |
| `"order"`            | `string` | `"DESC"` | Sort direction                                                                                                     |
| `"include"`          | `array`  | `[]`     | List of post IDs to include                                                                                        |
| `"exclude"`          | `array`  | `[]`     | List of post IDs to exclude                                                                                        |
| `"meta_key"`         | `string` | -        | Used with `meta_value`                                                                                             |
| `"meta_value"`       | `string` | -        | Grab posts by a meta value                                                                                         |
| `"post_type"`        | `string` | `"post"` | Grab posts by a post type                                                                                          |
| `"type"`             | `string` | -        | Alias for `"post_type"`                                                                                            |
| `"suppress_filters"` | `bool`   | `true`   | Whether to suppress filters                                                                                        |
| `"taxonomy.<type>"`  | `string` | -        | Returns posts with the defined taxonomies. The `string` is a comma seperated list of values for the taxonomy type. |

As well as anything else that can be passed into WP's [`get_posts`](https://developer.wordpress.org/reference/functions/get_posts/) function.

### Returns

| Type    | Description                                                                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `array` | If fields were provided, values will be returned under those keys. Otherwise, only a `post` (`WP_Post`) and `meta` (`array`) field will be returned for each post. |

## Example

In this example we get the name, mileage and country for vehicles from France or Italy.

```php
site()->getPosts([
    "type" => "vehicles",
    "taxonomy.country" => "france,italy"
], [
    "title",
    "acf.miles",
    "taxonomy.country.name"
]);

// Returns
[
    [
        "title" => "2010 Ferrari 458 Italia",
        "miles" => 13802,
        "country" => [
            [
                "name" => "Italy"
            ]
        ]
    ],
    [
        "title" => "2019 Renault Alpine A110 Légende GT",
        "miles" => 3211,
        "country" => [
            [
                "name" => "France"
            ]
        ]
    ],
    [
        "title" => "2019 FIAT 124 Spider Abarth",
        "miles" => 9304,
        "country" => [
            [
                "name" => "Italy"
            ]
        ]
    ]
]
```
