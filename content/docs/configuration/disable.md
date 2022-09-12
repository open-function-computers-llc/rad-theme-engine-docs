---
title: "disable"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 190
toc: true
---

A list of WordPress features to enable.

## Usage

| Key         | Type    | Required | Default |
| ----------- | ------- | -------- | ------- |
| `"disable"` | `array` | No       | `[]`    |

Where `"disable"` is an array of strings selected from the options below.

## Options

| Key        | Description                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| `"editor"` | Disables WordPress's editor on the admin page. Helpful if you don't want people breaking your theme. |
{.table .table-bordered .col1-nowrap}

## Example

<div class="code-heading">config.php</div>

```php
return [
    "disable" => ["editor"]
]
```

<div class="code-caption">Disabling the WordPress editor</div>