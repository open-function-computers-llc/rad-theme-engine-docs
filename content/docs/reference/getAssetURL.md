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
weight: 100
toc: true
---

Render a menu from a previously defined location

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

Embedding an image located at `/assets/gif/globe.gif`

```html
<img 
  src="<?= site()->getAssetURL('gif/globe.gif') ?>" 
  style="float: right;"
>
```

{{< figure src="/images/asset-example.png" >}}
