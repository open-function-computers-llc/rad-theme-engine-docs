---
title: "RAD Scripts"
description: "RAD Theme Engine comes packaged with various scripts to help you get started."
lead: "RAD Theme Engine comes packaged with various scripts to help you get started."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 600
toc: true
---

{{< alert icon="⚠️" text="This feature is still a work in progress." />}}

The `/vendor/bin/rad` command is a tool that provides various actions to accelerate your theme development. Think of it as a mini CLI for RAD Theme Engine.

## Download Bootstrap Icons

```bash
./vendor/bin/rad get-icon <icon-name>
```

This script will download an SVG icon from the [Bootstrap Icons](https://icons.getbootstrap.com/) library and save it to the `/assets` directory.

## Registering WordPress Actions

```bash
./vendor/bin/rad make:action <action-name>
```

This script will create a new action file at `/actions/<name>Action.php`. This will create a new custom implementation of the `RadAction` class, which contains the properties `hookName` and `priority`, as well as a `callback` function.

- The `hookName` property is the name of the WordPress action you are hooking into. [WP Action Reference](https://developer.wordpress.org/apis/hooks/action-reference/).
- The `priority` property is optional and sets the priority of the action. 
- The `callback` function is the function that will be called when the action is triggered.

The name of the action file is arbitrary and does not need to match the name of the WordPress action you are hooking into.

All class definitions that extend the `RadAction` class inside the `/actions` directory are registered with WordPress by RAD Theme Engine when the theme is activated.

Read more about registering actions with RAD Theme Engine in the [actions](/docs/configuration/actions/) docs.