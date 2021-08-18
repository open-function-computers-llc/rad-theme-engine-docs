---
title: "getPaginationLinks()"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 310
toc: true
---

Get pagination links based on the current page

## Usage

```php
site()->getPaginationLinks();
```

### Returns

| Type              | Description                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `array`           | -                                                                                           |
| ↳ `"older"`       | `string\|false` – URL to the previous posts page, or false if there aren't any older posts. |
| ↳ `"newer"`       | `string\|false` – URL to the next posts page, or false if there aren't any newer posts.     |
| ↳ `"totalPages"`  | `int` – Total amount of pages                                                               |
| ↳ `"currentPage"` | `int` – Index of the current page, starting at `1`                                          |
{.col1-nowrap}

## Example

```php
site()->getPaginationLinks();

// Results
[
    "older" => "http://my.epic.site/blog/page/3/",
    "newer" => "http://my.epic.site/blog/",
    "totalPages" => 3,
    "currentPage" => 2
]
```

Passing pagination links into a template is very easy:

```php
echo site()->view("blog-archive", [
    "pagination" => site()->getPaginationLinks(),
]);
```

```html
<!-- tpl/blog-archive.tpl -->

...

{{#if pagination.older }}
    <a href="{{ pagination.older }}">Older Posts</a>
{{/if}}
{{#if pagination.newer }}
    <a href="{{ pagination.newer }}">Newer Posts</a>
{{/if}}
```
