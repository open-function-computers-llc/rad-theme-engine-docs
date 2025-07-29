---
title: "assetURL"
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

Handlebars helper that returns the URL of an asset, relative to your theme's `assets` directory. Uses [`getAssetURL(...)`](/docs/reference/getasseturl/) under the hood.

## Usage

```handlebars
{{#assetURL <filename>}}
```

| Parameter    | Type     | Description                                                             |
| ------------ | -------- | ----------------------------------------------------------------------- |
| `<filename>` | `string` | The filename of the asset, relative to your theme's `assets` directory. |

## Example

```handlebars
<img src="{{#assetURL images/logo.png}}" alt="Logo" />
```

<div class="code-caption">Where `images/logo.png` is a file in your theme's `assets` directory.</div>