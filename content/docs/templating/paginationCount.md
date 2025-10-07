---
title: "paginationCount"
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

Handlebars helper that returns the total number of pages in a pagination.

## Usage

```handlebars
{{#paginationCount}}
```

## Example

```handlebars
<div>
  Page {{#paginationIndex}} of {{#paginationCount}}.
</div>
```

## See Also

- [`#paginationIndex`](../paginationindex)