---
title: "excerpt-length"
member: true
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 170
toc: true
---

An excerpt is an optional text associated to a Post, often used as a summary. This option defines how many words should shown in the excerpt.

## Usage

| Key                | Type      | Required | Default |
| ------------------ | --------- | -------- | ------- |
| `"excerpt-length"` | `integer` | No       | `55`    |


## Example

```
<?php # config.php
return [
    "excerpt-length" => 100,
]
```
