---
title: "enable"
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu: 
  docs:
    parent: "configuration"
weight: 70
toc: true
---

A list of WordPress features to enable.

## Usage

| Key        | Type    | Required | Default |
| ---------- | ------- | -------- | ------- |
| `"enable"` | `array` | No       | `[]`    |

Where `"enable"` is an array of strings selected from the options below.

## Options

| Key                 | Description                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `"post-thumbnails"` | Enables [post thumbnails](https://codex.wordpress.org/Post_Thumbnails)                                              |
| `"menus"`           | Enables WordPress menus. Individual menus can be registered using the [`menu-locations`](../menu-locations) option. |
| `"styleselect"`     |                                                                                                                     |
{.table .table-bordered .col1-nowrap}

## Example

```php
<?php # config.php
return [
    "enable" => ["post-thumbnails","menus"]
]
```