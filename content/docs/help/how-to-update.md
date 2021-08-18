---
title: "How to Update"
description: "Regularly update to keep your theme stable and secure."
lead: "Regularly update to keep your theme stable and secure."
date: 2020-11-12T13:26:54+01:00
lastmod: 2020-11-12T13:26:54+01:00
draft: false
images: []
menu:
  docs:
    parent: "help"
weight: 400
toc: true
---

## Check for updates

The [`composer outdated`](https://getcomposer.org/doc/03-cli.md#outdated) command will check the registry to see if your local installation of the package is outdated:

```bash
composer outdated open-function-computers-llc/better-wordpress
```

## Update packages

The [`composer update`](https://getcomposer.org/doc/03-cli.md#update-u) command can update either all of your packages or just `better-wordpress`:

```bash
# All Packages
composer update

# Just better-wordpress
composer update open-function-computers-llc/better-wordpress
```
