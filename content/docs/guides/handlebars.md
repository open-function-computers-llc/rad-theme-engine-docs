---
title: "Handlebars"
description: "RAD Theme Engine comes with handlebars-php as a dependancy, here's how to use it."
lead: "RAD Theme Engine comes with <a href='https://github.com/salesforce/handlebars-php'>handlebars-php</a> as a dependancy, here's how to use and configure it."
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 300
toc: true
---

### Usage

Firstly, create a new template file in the `tpl/` folder. For this example we'll name the file `home-title.tpl`. For a complete guide on how to use Handlebars templating syntax, check out [the handlebars-php repository](https://github.com/salesforce/handlebars-php).

<div class="code-heading">tpl/home-title.tpl</div>

```handlebars
Welcome to {{title}}!
```

<div class="code-caption">A simple handlebars template</div>

#### Rendering

To render this we need to call the file and supply it with the data it needs. Since I only want to use this template on my home page, I'll add this code to `home.php`:

<div class="code-heading">home.php</div>

```php
echo site()->render("home-title",[
    "title" => get_bloginfo("name")
]);
```

<div class="code-caption">Rendering a block of HTML</div>

Recall we added a function in `functions.php` to expose our `Site` object to all the pages, and that's what we're using here.

Here's what we see on the homepage now:

{{< figure src="/images/handlebars-example.png" >}}

Wow! What a site!

#### Loops

Iterating through collections with handlebars is easy, just pass an array into your model and use the `#each` helper.

<div class="code-heading">home.php</div>

```php
echo site()->render("people-list.tpl",[
    "people" => [
        [
            "first" => "Gabin",
            "last" => "Ábel"
        ],
        [
            "first" => "Koji", 
            "last" => "Hallþóra"
        ],
        [
            "first" => "Carmi",
            "last" => "Surendra"
        ],
    ]
]);
```

<div class="code-heading">tpl/people-list.tpl</div>

```handlebars
{{#each people}}
    {{first}} {{last}}
{{/each}}
```

<div class="code-caption">A simple loop in handlebars</div>

#### Conditions

With handlebars' `#if` helper, blocks will not render if the condition returns `false`, `null`, `''`, or `[]`.

<div class="code-heading">home.php</div>

```php
echo site()->render("people-list.tpl",[
    "people" => []
]);
```

<div class="code-heading">tpl/people-list.tpl</div>

```handlebars
{{#if people}}
    First Person: {{people.0.first}}
{{#else}}
    There are no people!
{{/if}}
```

<div class="code-caption">An if/else statement in handlebars</div>

See more about handlebars [on the docs](https://github.com/salesforce/handlebars-php).


### Template File Extension

By default Handlebars templates are files that end with `.tpl` and exist inside the `tpl/` folder in the theme root.

<div class="code-heading">config.php</div>

```php
"handlebars" => [
    "template-extension" => "tpl"
]
```

### Helpers

All of your helpers across multiple files should use the same namespace.

```php
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
                $str .= "$c";
            }
            foreach (range(ceil($r * $b), ($b * 5)) as $number) {
                $str .= "$c";
            }
            return $str;
        };
    }
}
```

### Autoload

```json
{
    "require": {
        "open-function-computers-llc/rad-theme-engine": "^1.0"
    },
    "autoload": {
        "psr-4": {
            "ThemeHelpers\\": "helpers/"
        }
    }
}
```

### Configuration

```php
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

### Usage in Templates

```handlebars
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
```˝
