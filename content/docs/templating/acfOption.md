---
title: "acfOption"
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

Handlebars helper to quickly access a global ACF option.

## Usage

```handlebars
{{#acfOption <option>}}
```

| Parameter  | Type     | Description                           |
| ---------- | -------- | ------------------------------------- |
| `<option>` | `string` | The name of the ACF option to access. |

## Example

```handlebars
<div>
  <img src="{{#getAssetURL images/logo.svg}}" alt="Logo" />
  <span>{{#acfOption tagline}}</span>
</div>
```

<div class="code-caption">Where `tagline` is an ACF option defined in WordPress.</div>
