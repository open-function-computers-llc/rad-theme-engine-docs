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

## Downloading SVG Icons

```bash
./vendor/bin/rad get:icon [source] <icon-name>
```

This script will download an SVG icon from the selected library and save it to the `/assets` directory. Default source is [Bootstrap Icons](https://icons.getbootstrap.com/).

### Parameters

| Parameter   | Type     | Required | Description                                                                            |
| ----------- | -------- | -------- | -------------------------------------------------------------------------------------- |
| `source`    | `string` | No       | A flag indicating which icon library to use. Defaults to `bootstrap` if not specified. |
| `icon-name` | `string` | Yes      | The name of the icon to download.                                                      |
{.col1-nowrap}

### Icon Libraries

| Source                    | Icon Library                                                                  |
| ------------------------- | ----------------------------------------------------------------------------- |
| `-bs`, `--bootstrap`      | [Bootstrap Icons](https://icons.getbootstrap.com/)                            |
| `-hi`, `--heroicons`      | [Heroicons](https://heroicons.com/mini) 20px                                  |
| &emsp;`-hi-16`            | [Heroicons](https://heroicons.com/micro) 16px                                 |
| &emsp;`-hi-24`            | [Heroicons](https://heroicons.com/solid) 24px                                 |
| &emsp;`-hi-outline`       | [Heroicons](https://heroicons.com/outline) 24px Outline                       |
| `-md`, `--material`       | [Material Icons](https://fonts.google.com/icons/)                             |
| &emsp;`-md-round`         | [Material Icons](https://fonts.google.com/icons?icon.style=Rounded) Rounded   |
| &emsp;`-md-outline`       | [Material Icons](https://fonts.google.com/icons?icon.style=Outlined) Outlined |
| &emsp;`-md-sharp`         | [Material Icons](https://fonts.google.com/icons?icon.style=Sharp) Sharp       |
| &emsp;`-md-round-outline` | [Material Icons](https://fonts.google.com/icons/) Round Outlined              |
| `-li`, `--lucide`         | [Lucide Icons](https://lucide.dev/icons/)                                     |
| `-e`, `--emoji`           | [Google Noto Emoji](https://icones.js.org/collection/noto)                    |
| `-f`, `--flag`            | [Flagpack](https://flagpack.xyz/docs/flag-index/) (Alpha-2 Code)              |
{.col1-nowrap}

### Examples

```bash
# Download a phone icon from Bootstrap Icons
./vendor/bin/rad get:icon phone

# Download a phone icon from Heroicons
./vendor/bin/rad get:icon -hi phone

# Download a UK flag icon from Flagpack
./vendor/bin/rad get:icon --flag uk

# Download a thumbs-up emoji from Google Noto Emoji
./vendor/bin/rad get:icon --emoji thumbs-up
```

<br />

---

<br />

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

### Example

```bash
# Create a new action at /actions/OnWpLoadedAction.php
./vendor/bin/rad make:action OnWpLoaded
```

<br />

---

<br />

## Creating Handlebars Helpers

```bash
./vendor/bin/rad make:helper [options] <helper-name>
```

This script will create a new helper file at `/helpers/<name>Helper.php` that contains a scaffolded Helper class with a callback function.

Note: The helper function will still need to be manually registered in the `config.php` file. See the [Handlebars Helpers docs](/docs/configuration/handlebars/#configuring) for more information.

### Parameters

| Parameter     | Type     | Required | Description                                                    |
| ------------- | -------- | -------- | -------------------------------------------------------------- |
| `options`     | `string` | No       | Flag for enabling additional options when creating the helper. |
| `helper-name` | `string` | Yes      | The name of the helper to create.                              |
{.col1-nowrap}

### Options

| Option                  | Description                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| `-u`, `--update-config` | **(Experimental)** Automatically update the `config.php` file to include the new helper. |
{.col1-nowrap}


### Examples

```bash
# Create a new helper at /helpers/UserAvatarHelper.php
./vendor/bin/rad make:helper UserAvatar

# Create a new helper at /helpers/UserAvatarHelper.php and update the config.php file
./vendor/bin/rad make:helper --update-config UserAvatar
```

<br />