---
title: "menuArray($menuLocation)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 175
toc: true
---

Fetch a menu from a previously defined location, as a multi-dimensional array.

## Usage

```php
site()->menuArray($menuLocation);
```

### Parameters

| Parameter       | Type     | Required | Description                                                                                                                         |
| --------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `$menuLocation` | `string` | Yes      | The location of the menu to render, as defined in the config under [`menu-locations`](../../configuration/menu.locations) (the key) |

### Returns

| Type    | Description                                                  |
| ------- | ------------------------------------------------------------ |
| `array` | A list of menu items, following the structure defined below. |

### Menu Item Object

```php
// An example menu item object

[
    "id" => 01234,
    "title" => "Page Title",
    "url" => "/page/url",
    "hasChildren" => true,
    "children" => [
        [
            "id" => 01235,
            "title" => "About",
            "url" => "/page/about",
            "hasChildren" => false,
            "children" => []
        ],
        [
            "id" => 01236,
            "title" => "Contact",
            "url" => "/page/contact",
            "hasChildren" => false,
            "children" => []
        ],
    ],
]
```

| Key             | Type      | Description                             |
| --------------- | --------- | --------------------------------------- |
| `"id"`          | `integer` | Page ID                                 |
| `"title"`       | `string`  | Page Title                              |
| `"url"`         | `string`  | Page URL (absolute)                     |
| `"hasChildren"` | `boolean` | Whether this entry has child menu items |
| `"children"`    | `array`   | Child menu items, empty if none         |

## Example

First we make sure the menu location <a href="/docs/configuration/menu-locations/">is registered in the theme's config.php</a>:

<div class="code-heading">config.php</div>

```php
return [
    "menu-locations" => [
        "main-nav" => "Main Navigation"
        ... // More menu locations
    ]
]
```

<div class="code-caption">Registering a menu location</div>

Then we grab the menu using menuArray:

```php
site()->menuArray("main-nav");
```

<div class="code-caption">Grabbing a menu via its location</div>

The output will follow the structure of the [example above](#menu-item-object).
