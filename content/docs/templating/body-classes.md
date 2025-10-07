---
title: "body-classes"
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

Handlebars helper to access WordPress' [`body_class()`](https://developer.wordpress.org/reference/functions/body_class/) function from your templates.

## Usage

```handlebars
{{#body-classes}}
```

## Example

```handlebars
<body {{#body-classes}}>
  <h1>Hello World</h1>
</body>
```