---
title: "count"
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

Handlebars helper that returns the number of entries in an array or object.

## Usage

```handlebars
{{#count <array>}}
```

| Parameter | Type    | Description                        |
| --------- | ------- | ---------------------------------- |
| `<array>` | `array` | The array to count the entries of. |

## Example

```handlebars
<span>
  Search results: {{#count searchResults}}
</span>
```

<div class="code-caption">Where `searchResults` is an array of search results.</div>