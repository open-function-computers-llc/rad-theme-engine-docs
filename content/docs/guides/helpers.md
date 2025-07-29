---
title: "Handlebars Helpers"
description: "RAD Theme Engine is easy to extend with the help of custom PHP code via helpers!"
lead: "Helpers make it easy to accelerate your development by adding custom PHP code to your templates."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 300
toc: true
---

<div class="code-heading">tpl/page.tpl</div>

```handlebars
<!DOCTYPE html>
  <html lang="en">
  <head>

    <title>{{#wp-title}}</title>

    {{#wp-header}}
  </head>
  <body {{#body-classes}}>
    <header>
      <h1>{{#acfOption "site_title"}}</h1>
    </header>

    {{#flex}}

    {{#wp-footer}}
  </body>
</html>
```

<div class="code-caption">Example of various helpers in action.</div>



## RAD Helpers

RAD Theme Engine comes with a set of built-in helpers that can be used in your handlebars templates.

| Name               | Description                                   |
| ------------------ | --------------------------------------------- |
| [`#acfOption`]({{< relref "acfOption" >}})       | Render ACF options via their field name.      |
| [`#assetContents`]({{< relref "assetContents" >}})   | Render the contents of an asset file.         |
| [`#assetURL`]({{< relref "assetURL" >}})        | Render the URL of an asset file.              |
| [`#body-classes`]({{< relref "body-classes" >}})    | Render the body classes for the current page. |
| [`#count`]({{< relref "count" >}})           | Render the number of items in an array.       |
| [`#flex`]({{< relref "flex" >}})            | Render ACF flexible content layouts.          |
| [`#nl2br`]({{< relref "nl2br" >}})           | Convert newlines to `<br />` tags.            |
| [`#paginationLinks`]({{< relref "paginationLinks" >}}) | Render pagination links.                      |
| [`#queryCount`]({{< relref "queryCount" >}})      | Render the total number of items in a query.  |
| [`#wp-footer`]({{< relref "wp-footer" >}})       | Render the WordPress footer.                  |
| [`#wp-header`]({{< relref "wp-header" >}})       | Render the WordPress head.                    |
| [`#wp-title`]({{< relref "wp-title" >}})        | Render the WordPress title.                   |



## Creating a Custom Helper

Additional handlebars helpers can be defined in your `config.php` file. Read more about this in the [Handlebars](/docs/configuration/handlebars/) guide.

## Further Reading

- [Handlebars Configuration Docs](/docs/configuration/handlebars/)
- [Handlebars Docs](https://handlebarsjs.com/guide/)
- [RAD Theme Engine Example Theme](https://github.com/open-function-computers-llc/rad-theme-engine-example-theme)

