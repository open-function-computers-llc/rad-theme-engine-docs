---
title: "Theme Assets"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 400
toc: true
---

The [`getAssetUrl($filename)`](../../reference/getasseturl) function is a convenient method of getting urls for files that exist in your theme's `assets` folder.

## Grabbing File URLs

You can use this helper to pass absolute paths to your handlebars template. Assume that we have some images and documents in our theme code (`assets/main-logo.png, assets/documents/tandc.pdf, etc...`):

<div class="code-heading">index.php</div>

```php
echo site()->render("partials/sidebar", [
    "main-logo" => site()->getAssetURL("main-logo.png"),
    "main-logo-alt" => "Lorem ipsum",
    "terms-pdf" => site()->getAssetURL("documents/tandc.pdf"),
    ...
]);
```

<div class="code-heading">tpl/partials/sidebar.tpl</div>

```html
...
<aside>
    <img src="{{ main-logo }}" alt="{{ main-logo-alt }}" />
    ...
    <p>Download our <a href="{{ terms-pdf }}">Terms and Conditions</a></p>
</aside>
```

See more about the `getAssetURL` function [here](../../reference/getasseturl).


