---
title: "flex"
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

{{< alert icon="👉" text="Requires Advanced Custom Fields (ACF) Pro" />}}

Handlebars helper to render ACF flexible content layouts. Read more about this concept in the [Flexible Content](/docs/guides/flex-content/) guide.

## Usage

```handlebars
{{#flex}}
```

## Example

```handlebars
<nav>
    My Awesome Website!
</nav>

<!-- Page content -->
{{#flex}}

<footer>
    &copy; 2025 My Awesome Website!
</footer>
```