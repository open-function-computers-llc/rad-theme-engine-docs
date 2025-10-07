---
title: "queryCount"
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

Handlebars helper that returns the total number of entries returned by a query.

## Usage

```handlebars
{{#queryCount}}
```

## Example

```handlebars
<h1>
  Search results for {{ searchTerm }} - {{#queryCount}} items
</h1>
```

<div class="code-caption">Where `searchTerm` is passed to the template.</div>