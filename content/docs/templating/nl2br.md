---
title: "nl2br"
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

Handlebars helper that converts newlines (`\n`) to `<br />` tags.

## Usage

```handlebars
{{#nl2br <string>}}
```

| Parameter  | Type     | Description                    |
| ---------- | -------- | ------------------------------ |
| `<string>` | `string` | The string to convert to HTML. |

## Example

Sending a multiline string to a template and using the `nl2br` helper will convert the newlines to `<br />` tags.

<div class="code-heading">index.php</div>

```php
<?php

echo site->render('index', [
  'content' => 'This is a\nmultiline\nstring.',
]);
```

<div class="code-heading">tpl/index.tpl</div>

```handlebars
<div>
  {{#nl2br content}}
</div>
```
