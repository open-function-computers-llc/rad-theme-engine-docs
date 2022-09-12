---
title: "enable"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 180
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
| `"styleselect"`     | Enables custom tinyMCE styles, declared [here](../tinyMCEAdditions) |
{.table .table-bordered .col1-nowrap}

## Example

<div class="code-heading">config.php</div>

```php
return [
  "enable" => ["post-thumbnails","menus"]
]
```

<div class="code-caption">Enabling menus and post thumbnails in your theme</div>