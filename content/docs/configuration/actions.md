---
title: "actions"
member: true
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 100
toc: true
---

The `"actions"` configuration option is a convenient way to register [WordPress hooks](https://developer.wordpress.org/apis/hooks/action-reference/). Simply pass the hook name, an optional priority value, and a function to call when the hook is triggered.

## Usage

| Key         | Type    | Required | Default |
| ----------- | ------- | -------- | ------- |
| `"actions"` | `array` | No       | `[]`    |

Where `"actions"` is an array of objects that follow this structure:

## Action Object

```php
// The Action Object

[
    "hook" => "wp_loaded",
    "priority" => 50,
    "callback" => function() { ... }
]

// Evaluates to:
add_action("wp_loaded", function() { ... }, 50);
```

| Key          | Type       | Required | Description                                                                                                                 |
| ------------ | ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `"hook"`     | `string`   | Yes      | The name of the [WordPress hook](https://developer.wordpress.org/apis/hooks/action-reference/) to register upon.            |
| `"callback"` | `function` | Yes      | The callback function to trigger when this hook is called.                                                                  |
| `"priority"` | `integer`  | No       | An optional priority value. Defaults to `99`, meaning it will likely run after any other functions registered to this hook. |

## Example

<div class="code-heading">config.php</div>

```php
return [
  "actions" => [

    // Register an action to be performed after init
    [
        "hook" => "init"
        "priority" => 60
        "callback" => function() { ... }
    ],

    // Register an action to be performed after get_header
    // Priority will default to 99
    [
        "hook" => "get_header"
        "callback" => function() { ... }
    ],

    // PRO TIP: Hooks can also be registered using this shorthand syntax
    // Useful when priority isn't necessary
    "get_header" => function() { ... }
  ],
]
```

<div class="code-caption">Registering several hooks. The two <code>get_header</code> hooks will be registered in order of definition, so the first one will run before the second.</div>