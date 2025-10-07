---
title: "paginationIndex"
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

Handlebars helper that returns the index of the current page in a pagination.

## Usage

```handlebars
{{#paginationIndex}}
```

Default value is `1` for pages without pagination.

## Example

```handlebars
<div>
  Page {{#paginationIndex}} of {{#paginationCount}}.
</div>
```

## See Also

- [`#paginationCount`](../paginationcount)