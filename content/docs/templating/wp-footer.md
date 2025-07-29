---
title: "wp-footer"
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

Handlebars helper to access WordPress' [`wp_footer()`](https://developer.wordpress.org/reference/functions/wp_footer/) function from your templates.

## Usage

```handlebars
{{#wp-footer}}
```

## Example

```handlebars
<div>
  <h1>Hello World</h1>
</div>

<!-- WordPress generated footer elements -->
{{#wp-footer}}
```