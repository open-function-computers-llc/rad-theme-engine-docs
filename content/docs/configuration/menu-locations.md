---
title: "menu-locations"
member: true
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 130
toc: true
---

An associative array of menu locations to register.

## Usage

| Key                | Type    | Required | Default |
| ------------------ | ------- | -------- | ------- |
| `"menu-locations"` | `array` | No       | `[]`    |

The `key` of the item will act as the identifier (like a slug) and the `value` will be the descriptive text.

## Example

```
<?php # config.php
return [
    "menu-locations" => [
        "main-nav" => "Main Navigation",
        "footer-nav" => "Footer Navigation",
    ],
]
```
