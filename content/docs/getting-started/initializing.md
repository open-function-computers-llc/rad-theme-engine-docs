---
title: "Initializing"
description: "Get better-wordpress up and running in your theme"
lead: "Get better-wordpress up and running in your theme"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 120
toc: true
---

### Getting Started

To start using better-wordpress in your theme, add the following code to `functions.php`:

```php
<?php

# Imports all Composer packages
require __DIR__ . '/vendor/autoload.php';

use ofc\Site;

# Declare a new Site object
$site = new Site();

# Allow the Site object to be accessed in other files
function site()
{
    global $site;
    return $site;
}
```

Optionally, an array can be passed directly into the `Site` constructor, overriding `config.php`. Here's what that looks like:

```php
# Declare a new Site object
$site = new Site([
  "excerpt-length" => 100,
  "guest-class" => "null",
  "menu-locations" => [
        "main-nav" => "Main Navigation",
        "footer-nav" => "Footer Navigation",
    ],
  ... # Other options
]);
```

For most use cases it's best to use the `config.php` file, especially if you plan on adding custom post types as the array can get pretty large.

### Handlebars

Next, [learn how to render a page]({{< relref "handlebars" >}}) with Handlebars.
