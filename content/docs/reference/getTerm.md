---
title: "getTerm($slug,$fields)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu: 
  docs:
    parent: "reference"
weight: 60
toc: true
---

Get all the registered terms for a given taxonomy.

## Usage

```php
site()->getTerm($slug,$fields)
```

### Parameters

| Parameter | Type     | Required | Description                                               |
| --------- | -------- | -------- | --------------------------------------------------------- |
| `$slug`   | `string` | Yes      | The slug of a taxonomy                                    |
| `$fields` | `array`  | No       | A string array of fields, see below for possible options. |

##### Possible Fields
- __`term_id`__ – Returns the term's id
- __`id`__ – Shortcut for `term_id`
- __`name`__ – The term's name
- __`title`__ – Same as `name`
- __`slug`__ – The term's slug
- __`url`__ – Returns the result of `get_term_link($term)`
- __`permalink`__ – Same as `url`
- __`term_group`__ – The term's group
- __`taxonomy`__ – The slug of the term's taxonomy (Will always be the same as the `$slug` parameter)
- __`description`__ – The term's description, if set
- __`parent`__ – The term's parent
- __`count`__ – Cached object count for this term

Any member of [WP_Term](https://developer.wordpress.org/reference/classes/wp_term/) can be accessed this way.

### Returns

| Type    | Description                                                                                                                  |
| ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `array` | If fields were provided, values will be returned under those keys. Otherwise an array of `WP_Term` objects will be returned. |

## Example

Getting the name and slug for all the terms within the `car_type` taxonomy.


```php
site()->getTerm('car_type', ['name','slug'])

// Returns
[
  [
    "name" => "Hatchback",
    "slug" => "hatchback"
  ],
  [
    "name" => "Hyper Car",
    "slug" => "hypercar"
  ],
  [
    "name" => "Sports Car",
    "slug" => "sportscar"
  ],
  ... // And more
]
```
