---
title: "Theme Assets"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 160
toc: true
---

The [`getAssetUrl($filename)`](../../reference/getasseturl) function is a convenient method of getting urls for files that exist in your theme's `assets` folder.

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

```html
<!-- tpl/partials/sidebar.tpl -->
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
