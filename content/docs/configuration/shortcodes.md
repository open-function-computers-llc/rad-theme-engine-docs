---
title: "shortcodes"
member: true
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "configuration"
weight: 200
toc: true
---

An array of [WordPress shortcodes](https://codex.wordpress.org/Shortcode_API) to register, where the key is the name of the shortcode and the value is the callback function. 

## Usage

| Key                | Type    | Required | Default |
| ------------------ | ------- | -------- | ------- |
| `"shortcodes"` | `array` | No       | `[]`    |

The `key` of the item will act as the identifier and the `value` will be the callback function.

## Example

<div class="code-heading">config.php</div>

```php
return [
    "shortcodes" => [

        // [gallery id="5432" size="small"]

        "gallery" => function ($atts) {

            // Grab attributes, providing a default 
            // for 'size' if it's not set.
            $a = shortcode_atts(array(
		        'size' => 'medium',
	        ), $atts);

            // HTML output
            // Hint: use site()->render(...) to templatize
            return "<a>gallery id = {$a['id']}</a>";
        },
    ],
]
```

<div class="code-caption">Registering a custom shortcode under the name 'gallery'.</div>