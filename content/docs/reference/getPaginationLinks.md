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
weight: 110
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
| ↳ `"currentPage"` | `int` – Index of the current page, starting at `0`                                          |
{.col1-nowrap}

## Example

```php
site()->getPaginationLinks();

// Results
coming soon
```
