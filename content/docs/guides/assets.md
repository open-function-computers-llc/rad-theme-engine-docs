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

The [`#assetURL`](/docs/templating/asseturl/) Handlebars helper is a convenient method of getting urls to files in your theme's `assets` directory.

## Grabbing File URLs

Inside your template files, you can use the `#assetURL` helper to get the URL of a file in your theme's `assets` directory. Assume that we have some images and documents in our theme code (`assets/main-logo.png, assets/documents/tandc.pdf, etc...`):

<div class="code-heading">tpl/page.tpl</div>

```handlebars
...
<aside>
    <img src="{{#assetURL main-logo.png }}" alt="Site Logo" />
    ...
    <p>
        Download our 
        <a href="{{#assetURL documents/tandc.pdf }}">Terms and Conditions</a>
    </p>
</aside>
...
```

<div class="code-caption">Grabbing file URLs from the `assets` directory.</div>

This helper uses RAD's [`getAssetURL(...)`](/docs/reference/getasseturl/) function under the hood to get the URL of the file.

## Grabbing File Contents

You can also use the `#assetContents` helper to get the contents directly from the file. This is useful for files like SVG icons, which you can then render in your template.

<div class="code-heading">tpl/page.tpl</div>

```handlebars
...
<svg class="icon">
    {{#assetContents icons/icon.svg }}
</svg>
...
```

<div class="code-caption">Rendering an SVG icon from the `assets` directory.</div>

## Further Reading

- [Handlebars Helpers](/docs/guides/helpers/)
- [assetURL](/docs/templating/asseturl/) Handlebars Helper
- [assetContents](/docs/templating/assetcontents/) Handlebars Helper
- [getAssetURL](/docs/reference/getasseturl/) PHP Function
- [getAssetContents](/docs/reference/getassetcontent/) PHP Function
- Using [RAD Scripts](/docs/guides/scripts/) to download icons and other assets.