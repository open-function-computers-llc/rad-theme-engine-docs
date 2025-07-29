---
title: "wp-title"
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

Handlebars helper to access WordPress' [`wp_title()`](https://developer.wordpress.org/reference/functions/wp_title/) function from your templates.

## Usage

```handlebars
{{#wp-title}}
```

## Example

```handlebars
<head>
  <title>{{#wp-title}}</title>
</head>
```
