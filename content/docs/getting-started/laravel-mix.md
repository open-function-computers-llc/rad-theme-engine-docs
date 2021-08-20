---
title: "Laravel Mix"
description: "Install Laravel Mix, a powerful and easily configurable module bundler."
lead: "Install Laravel Mix, a powerful and easily configurable module bundler."
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

{{< alert icon="👉" text="These steps are only necessary for advanced installations. 'composer create' will do all this for you. This still might be good information to know." />}}

## Install

In the root of your theme, run the following command to install `laravel-mix`.

```bash
npm i laravel-mix
```

## Configure

Next, still in the root of your theme, create a new file called `webpack.mix.js` and add the code below:

```js
// webpack.mix.js

let mix = require('laravel-mix');

mix.js('src/app.js', 'dist').setPublicPath('dist').version();
```

This will tell laravel-mix to compile `src/app.js` and output it in the `dist` folder. The addition of `.version()` will generate a random hash to append to the filename, forcing browsers to update their cache. To add other types of files, check out [these examples](https://laravel-mix.com/docs/6.0/examples).

## Compile

To compile once:

```bash
npx mix
```

To watch for changes:
```bash
npx mix watch
```

## Including Scripts/Styles

better-wordpress will automatically look for Laravel Mix's `mix-manifest.json` in the `dist` folder and register/enqueue any javascript or css it finds there.

The only requirement on your end is to include the `wp_head()` function in your theme's `<head>` element. For example:

```html
<!doctype html> <!-- header.php -->
<html <?php language_attributes(); ?>>

<head>
  ...
  <?php wp_head(); ?>
  ...
</head>

<body <?php body_class(); ?>>
```


