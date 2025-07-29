---
title: "flex-file-prefix"
member: true
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 150
toc: true
---

Defines the prefix to use when searching for handlebars templates to render for ACF Flex content fields. Defaults to `flex`.

## Usage

| Key                  | Type     | Required | Default |
| -------------------- | -------- | -------- | ------- |
| `"flex-file-prefix"` | `string` | No       | `flex`  |


## Example

<div class="code-heading">config.php</div>

```php
return [
  "flex-file-prefix" => "acf_block",
]
```

<div class="code-caption">Files used as templates for ACF flex field blocks will be prefixed with 'acf_block'.</div>