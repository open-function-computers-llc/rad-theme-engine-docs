---
title: "getAssetURL($filename)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 350
toc: true
---

Generate the URL for any static assets that live in the theme's `assets` directory.

## Usage

```php
site()->getAssetURL($filename);
```

### Parameters

| Parameter   | Type     | Required | Description                                           |
| ----------- | -------- | -------- | ----------------------------------------------------- |
| `$filename` | `string` | Yes      | Location of an asset relative to the `assets/` folder |

### Returns

| Type     | Description               |
| -------- | ------------------------- |
| `string` | Absolute URL of the asset |

## Example

Check out the [guide on theme assets](../../guides/assets) for a couple examples.