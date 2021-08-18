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

## Example 1

You can use this helper to pass absolute paths to your handlebars template. Assume that we have some images and documents in our theme code (`assets/main-logo.png, assets/documents/tandc.pdf, etc...`):
```php
<?php #index.php

echo site()->render("partials/sidebar", [
    "main-logo" => site()->getAssetURL("main-logo.png"),
    "main-logo-alt" => "Lorem ipsum",
    "terms-pdf" => site()->getAssetURL("documents/tandc.pdf"),
    ...
]);
```

```
#tpl/partials/sidebar.tpl
...
<aside>
    <img src="{{ main-logo }}" alt="{{ main-logo-alt }}" />
    ...
    <p>Download our <a href="{{ terms-pdf }}">Terms and Conditions</a></p>
</aside>
```

## Example 2

You can use this helper inline in your raw HTML to generate an image path:

```html
<img
  src="<?= site()->getAssetURL('gif/globe.gif') ?>"
  style="float: right;"
>
```

{{< figure src="/images/asset-example.png" >}}
