---
title: "wp-header"
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

Handlebars helper to access WordPress' [`wp_head()`](https://developer.wordpress.org/reference/functions/wp_head/) function from your templates.

## Usage

```handlebars
{{#wp-header}}
```

## Example

```handlebars
<head>
  <title>{{#wp-title}}</title>

  <!-- WordPress generated head elements -->
  {{#wp-header}}
</head>

```

<div class="code-caption">Example in conjunction with the `wp-title` helper.</div>