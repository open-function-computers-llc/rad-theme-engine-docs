---
title: "assetContents"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "templating"
toc: true
---

Handlebars helper that returns the contents of an asset, relative to your theme's `assets` directory. Uses [`getAssetContents(...)`](/docs/reference/getassetcontent/) under the hood.

## Usage

```handlebars
{{#assetContents <filename>}}
```

| Parameter    | Type     | Description                                                             |
| ------------ | -------- | ----------------------------------------------------------------------- |
| `<filename>` | `string` | The filename of the asset, relative to your theme's `assets` directory. |

## Example

```handlebars
<div class="logo">
  {{#assetContents images/logo.svg}}
</div>
```

<div class="code-caption">Where `images/logo.svg` is a file in your theme's `assets` directory.</div>