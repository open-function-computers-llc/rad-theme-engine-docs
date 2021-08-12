---
title: "options-pages"
member: true
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 40
toc: true
---

{{< alert icon="👉" text="Requires Advanced Custom Fields (ACF) Pro" />}}

Define your options pages in a simple string array.

## Usage

| Key               | Type    | Required | Default |
| ----------------- | ------- | -------- | ------- |
| `"options-pages"` | `array` | No       | `[]`    |

Each string in the array will be used to create a new options page in that name, with that string also as the slug & menu title.

To register an options page under a custom post type, see the [`custom-post-types`]({{< relref "custom-post-types" >}}) page.

## Example

```
<?php # config.php
return [
    "options-pages" => [
      "general-options",
      "theme-options"
    ],
]
```