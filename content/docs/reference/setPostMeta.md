---
title: "setPostMeta($postID, $data)"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 330
toc: true
---

Update a post's meta

## Usage

```php
site()->setPostMeta($postID, $data);
```

### Parameters

| Parameter | Type     | Required | Description                                                        |
| --------- | -------- | -------- | ------------------------------------------------------------------ |
| `$postID` | `string` | Yes      | ID of a post to update the meta of.                                |
| `$data`   | `array`  | Yes      | An associative array of keys and values to apply to the post meta. |

## Example

Update `key1` and `key2` of the meta for post with ID `42`

```php
site()->setPostMeta(42, [
    "key1" => "value1",
    "key2" => "value2",
]);
```
