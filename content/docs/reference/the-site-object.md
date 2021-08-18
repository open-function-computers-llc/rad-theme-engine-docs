---
title: "The Site Object"
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "reference"
weight: 300
toc: false
---

To ensure you can use the function, make sure you followed the instructions on the [initializing](../../getting-started/initializing) page. It's literally one step, you can't mess it up.

You're free to rename the function if it clashes with any other names, but this documentation assumes you've instantiated the `better-wordpress` class into a variable named `$site` and it is referenced by a global function named `site()`.

Calling the `site()` function in any of your theme's php files will return the `ofc/Site` object, a class with a collection of convenient methods to interface with various parts of WordPress.
