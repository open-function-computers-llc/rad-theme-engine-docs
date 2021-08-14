---
title: "renderMenu($menuLocation)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu: 
  docs:
    parent: "reference"
weight: 90
toc: true
---

Render a menu from a previously defined location

## Usage

```php
site()->renderMenu($menuLocation);
```

### Parameters

| Parameter       | Type     | Required | Description                                                                                                                         |
| --------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `$menuLocation` | `string` | Yes      | The location of the menu to render, as defined in the config under [`menu-locations`](../../configuration/menu.locations) (the key) |

### Returns

| Type     | Description                   |
| -------- | ----------------------------- |
| `string` | Rendered menu, as HTML string |

The [WordPress docs](https://developer.wordpress.org/reference/functions/wp_nav_menu/#more-information) has more information about the structure of the returned HTML.

## Example

First we make sure the menu location is registered in the theme's config.php

```php
<?php # config.php

return [
  "menu-locations" => [
    "main-nav" => "Main Navigation"
    ... // More menu locations
  ]
]
```

Then we echo the rendered menu in the theme's header view:

```php
<?= site()->renderMenu("main-nav"); ?>
```

And that's it!

{{< figure src="/images/menu-example.png" >}}