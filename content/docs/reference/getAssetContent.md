---
title: "getAssetContents($filename)"
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

Read the contents of a file and return it as a string. Useful for serializing things like SVG files directly into templates.

## Usage

```php
site()->getAssetContents($filename);
```

### Parameters

| Parameter   | Type     | Required | Description                                           |
| ----------- | -------- | -------- | ----------------------------------------------------- |
| `$filename` | `string` | Yes      | Location of an asset relative to the `assets/` folder |

### Returns

| Type     | Description               |
| -------- | ------------------------- |
| `string` | The contents of the file. |

## Example

Check out the [guide on theme assets](../../guides/assets) for a couple examples.