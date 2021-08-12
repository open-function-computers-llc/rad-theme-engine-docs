---
title: "render($fileName, $data)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu: 
  docs:
    parent: "reference"
weight: 10
toc: true
---

Render a template with the given data, using handlebars.

## Usage

```php
site()->render($fileName, $data)
```

### Parameters

| Parameter   | Type     | Required | Description                                                       |
| ----------- | -------- | -------- | ----------------------------------------------------------------- |
| `$fileName` | `string` | Yes      | The name of the template, folder and file extension not included. |
| `$data`     | `array`  | Yes      | An associative array of data to pass to the template.             |

### Returns

| Type     | Description        |
| -------- | ------------------ |
| `string` | Compiled HTML code |

## Example

[Rendering a template with handlebars](../../getting-started/handlebars/#rendering) (Getting Started)