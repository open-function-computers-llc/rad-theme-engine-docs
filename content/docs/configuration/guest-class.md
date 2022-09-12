---
title: "guest-class"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 160
toc: true
---

If you want WordPress to automatically append a class to the body_class list when users are not authenticated, put that class name here.

## Usage

| Key             | Type     | Required | Default   |
| --------------- | -------- | -------- | --------- |
| `"guest-class"` | `string` | No       | `"guest"` |

To remove this functionality altogether, set to `"null"`


## Example

<div class="code-heading">config.php</div>

```
return [
    "guest-class" => "my-custom-class",
]
```

<div class="code-caption">Setting a custom guest class</div>

Also note that we must call the `body_class()` (or `get_body_class()`) function to get these classes wherever our body tag is located in the theme.

<div class="code-heading">header.php</div>

```php
<?php wp_head() ?>

<body <?php body_class() ?>>
```

Now when we visit the site without being logged in:

{{< figure src="/images/guest-class-example.png" >}}
