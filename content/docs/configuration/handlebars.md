---
title: "handlebars"
member: true
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 260
toc: true
---

Configure the Handlebars file extension and add custom helpers to your templates.

## Usage

| Key                      | Type     | Required | Default |
| ------------------------ | -------- | -------- | ------- |
| `"handlebars"`           | `array`  | No       | `[]`    |
| ↳ `"additional-helpers"` | `array`  | No       | `[]`    |
| ↳ `"template-extension"` | `string` | No       | `"tpl"` |
| ↳ `"template-directory"` | `string` | No       | `"tpl"` |

The value of the `"handlebars"` field is an associative array containing two optional items to configure.

## Additional Helpers

Handlebars helpers are methods inside your template files to perform php code and return something for a given input. See the [handlebars-php docs](https://github.com/salesforce/handlebars-php#other-helpers) for some included helpers, otherwise here's an example of how to write your own.

### Writing

Organizing your helpers is important, as it's not reccomended you write functions directly inside the `config.php` file. Creating a `helpers/` folder is the way we'd suggest doing this, and then creating individual files for helpers used in different templates.

In my `helpers/ShowHelpers.php` file, for example, I wrote this function to generate a rating bar html string from a some given parameters ([here's what it will look like](#results)):

```php
<?php # helpers/ShowHelpers.php

# All of your helpers across multiple files should use the same namespace.
namespace ThemeHelpers;

class ShowHelpers
{
    public static function ratingBar()
    {
        return function ($template, $context, $args, $source) {
            $params = explode(" ", $args);
            $r = floatval($context->get($params[0]));
            $b = $params[1];
            $c = $params[2];
            $str = "";
            foreach (range(1, floor($r * $b)) as $number) {
                $str .= "<a style='color:gold'>$c</a>";
            }
            foreach (range(ceil($r * $b), ($b * 5)) as $number) {
                $str .= "<a style='color:grey'>$c</a>";
            }
            return $str;
        };
    }
}
```

You'll notice the `ratingBar()` function returns a function instead of a value, this is to prevent caching.

You'll also notice that my `$r` variable is defined using `$context->get(...)` while `$b` and `$c` aren't. This is because the first parameter is the name of a variable, while the second and third are just a number and a string. Using `$context->get(...)` will return the value of the variable.

### Importing

Since we're using a custom namespace to declare our functions, we'll use Composer to import these files automagically. In our `composer.json` file:

```json
{
    "require": {
        "open-function-computers-llc/better-wordpress": "^1.0"
    },
    "autoload": {
        "psr-4": {
            "ThemeHelpers\\": "helpers/"
        }
    }
}
```
The key is the name of the namespace followed by two backslashes, and the value is the folder it's located in.

To install this new namespace into Composer's `autoload.php` file, execute the following command in the base of your theme.

```
composer dump-autoload -o
```

### Configuring

Now in our `config.php` file we can add the following:

```php
<?php # config.php

return [
    "handlebars" => [
        "additional-helpers" => [
            "ratingBar" => ThemeHelpers\ShowHelpers::ratingBar(),
        ],
    ],
    ...
]
```

### Implementing

From now onwards, we can use this new helper in any of our templates by calling it with a `#ratingBar`. Here's an example of a list of TV Shows, each with a rating displayed:

```html
<div class="four-col-grid">
    {{#each shows}}
    <div>
        <a href="{{url}}">
            <img class="full-image" src="{{img}}">
            <span>{{title}}</span>
        </a>
        <span class="show-item-sub-title">
            {{rating}}/5&nbsp;
            <!-- Implement my helper -->
            {{#ratingBar rating 2 ▰}}
        </span>
    </div>
    {{/each}}
</div>
```

Like I mentioned before, `rating` is a variable, more specifically a member of `show`, that was passed into this template using `$site->view(...)`.

### Results

Finally, here's what gets rendered. Yours might look a little nicer, but at least you can see how all the variables came into play. The `2` parameter is what made the bar 10 characters long instead of the normal 5, if that wasn't apparent.

{{< figure src="/images/handlebars-helper-example.png" >}}

## Template Extension

To change your template extension from the default (`.tpl`) [here](../../getting-started/handlebars/#template-file-extension) are some instructions.

## Template Directory

Changing `template-directory` will change where handlebars looks for your template files.

## Example

This is a theme configuration with a couple additional helpers, a custom `.view` template extension, where template files will live in the `views` folder instead of `tpl`.

```php
<?php # config.php

return [
"handlebars" => [
        "additional-helpers" => [
            "ratingBar" => ThemeHelpers\ShowHelpers::ratingBar(),
            "breadcrumbs" => ThemeHelpers\GlobalHelpers::breadcrumbs(),
            "num" => ThemeHelpers\GlobalHelpers::num(),
            "asset" => ThemeHelpers\GlobalHelpers::asset(),
        ],
        "template-extension" => "view",
        "template-directory" => "views",
    ],
]
```
