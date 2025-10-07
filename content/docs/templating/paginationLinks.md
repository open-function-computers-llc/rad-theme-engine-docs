---
title: "paginationLinks"
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

Handlebars helper to render a simple pagination element. Uses [`getPaginationLinks(...)`](/docs/reference/getpaginationlinks/) under the hood.

## Usage

```handlebars
{{#paginationLinks}}
```

## Example

```handlebars
<div>

  <!-- Paginated content -->
  <div class="row">
    {{#each products}}
      <div>
        ...
      </div>
    {{/each}}
  </div>

  <!-- Generate pagination links -->
  {{#paginationLinks}}

</div>
```

<div class="code-caption">Where `products` is passed to the template.</div>

## Reference

Renders as two unstyled links in the following format:

```handlebars
<nav class="pagination-links">
  <ul>
    {{#if older }}
      <li><a href="{{ older }}">Next</a></li>
    {{/if}}
    {{#if newer }}
      <li><a href="{{ newer }}">Previous</a></li>
    {{/if}}
  </ul>
</nav>
```