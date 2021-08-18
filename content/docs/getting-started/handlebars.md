---
title: "Handlebars"
description: "better-wordpress comes with handlebars-php as a dependancy, here's how to use it."
lead: "better-wordpress comes with <a href='https://github.com/salesforce/handlebars-php'>handlebars-php</a> as a dependancy, here's how to use and configure it."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 130
toc: true
---

### Usage

Firstly, create a new template file in the `tpl/` folder. For this example we'll name the file `home-title.tpl`. For a complete guide on how to use Handlebars templating syntax, check out [the handlebars-php repository](https://github.com/salesforce/handlebars-php).

```
<!-- tpl/home-title.tpl -->

Welcome to <span style="color:red">{{title}}</span>!
```

#### Rendering

To render this we need to call the file and supply it with the data it needs. Since I only want to use this template on my home page, I'll add this code to `home.php`:

```
<?php #home.php

echo site()->render("home-title",[
    "title" => get_bloginfo("name")
]);
```

Recall we added a function in `functions.php` to expose our `Site` object to all the pages, and that's what we're using here.

Here's what we see on the homepage now:

{{< figure src="/images/handlebars-example.png" >}}

Wow! What a site!

### Template File Extension

{{< alert icon="👉" text="By default both the template file extension and folder are both `tpl`. You can change either of these defaults in the `handlebars` <a href='/docs/configuration/handlebars/'>configuration</a>." />}}

By default Handlebars templates are files that end with `.tpl` and exist inside the `tpl/` folder in the theme root.

```
<?php #config.php
return [
    "handlebars" => [
        "template-extension" => "tpl"
    ]
]
```
