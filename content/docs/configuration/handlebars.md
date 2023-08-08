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
weight: 120
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

Organizing your helpers is important, as it's not recommended you write functions directly inside the `config.php` file. Creating a `helpers/` folder is the way we'd suggest doing this, and then creating individual files for helpers used in different templates.

In my `helpers/ShowHelpers.php` file, for example, I wrote this function to generate a rating bar html string from a some given parameters ([here's what it will look like](#results)):

<div class="code-heading">helpers/ShowHelpers.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #6A737D;"># All of your helpers across multiple files should use the same namespace.</span></div><div class='line'><span style="color: #F97583;">namespace</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">ThemeHelpers</span><span style="color: #E1E4E8;">;</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #F97583;">class</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">ShowHelpers</span></div><div class='line'><span style="color: #E1E4E8;">{</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">public</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">static</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">function</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">ratingBar</span><span style="color: #E1E4E8;">()</span></div><div class='line'><span style="color: #E1E4E8;">    {</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">function</span><span style="color: #E1E4E8;"> ($template, $context, $args, $source) {</span></div><div class='line'><span style="color: #E1E4E8;">            $params </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">explode</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot; &quot;</span><span style="color: #E1E4E8;">, $args);</span></div><div class='line'><span style="color: #E1E4E8;">            $r </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">floatval</span><span style="color: #E1E4E8;">($context</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">get</span><span style="color: #E1E4E8;">($params[</span><span style="color: #79B8FF;">0</span><span style="color: #E1E4E8;">]));</span></div><div class='line'><span style="color: #E1E4E8;">            $b </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> $params[</span><span style="color: #79B8FF;">1</span><span style="color: #E1E4E8;">];</span></div><div class='line'><span style="color: #E1E4E8;">            $c </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> $params[</span><span style="color: #79B8FF;">2</span><span style="color: #E1E4E8;">];</span></div><div class='line'><span style="color: #E1E4E8;">            $str </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;&quot;</span><span style="color: #E1E4E8;">;</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #F97583;">foreach</span><span style="color: #E1E4E8;"> (</span><span style="color: #79B8FF;">range</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">1</span><span style="color: #E1E4E8;">, </span><span style="color: #79B8FF;">floor</span><span style="color: #E1E4E8;">($r </span><span style="color: #F97583;">*</span><span style="color: #E1E4E8;"> $b)) </span><span style="color: #F97583;">as</span><span style="color: #E1E4E8;"> $number) {</span></div><div class='line'><span style="color: #E1E4E8;">                $str </span><span style="color: #F97583;">.=</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;</span><span style="color: #E1E4E8;">$c</span><span style="color: #9ECBFF;">&quot;</span><span style="color: #E1E4E8;">;</span></div><div class='line'><span style="color: #E1E4E8;">            }</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #F97583;">foreach</span><span style="color: #E1E4E8;"> (</span><span style="color: #79B8FF;">range</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">ceil</span><span style="color: #E1E4E8;">($r </span><span style="color: #F97583;">*</span><span style="color: #E1E4E8;"> $b), ($b </span><span style="color: #F97583;">*</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">5</span><span style="color: #E1E4E8;">)) </span><span style="color: #F97583;">as</span><span style="color: #E1E4E8;"> $number) {</span></div><div class='line'><span style="color: #E1E4E8;">                $str </span><span style="color: #F97583;">.=</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;</span><span style="color: #E1E4E8;">$c</span><span style="color: #9ECBFF;">&quot;</span><span style="color: #E1E4E8;">;</span></div><div class='line'><span style="color: #E1E4E8;">            }</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> $str;</span></div><div class='line'><span style="color: #E1E4E8;">        };</span></div><div class='line'><span style="color: #E1E4E8;">    }</span></div><div class='line'><span style="color: #E1E4E8;">}</span></div><textarea data-torchlight-original="true" style="display: none !important;"># All of your helpers across multiple files should use the same namespace.
namespace ThemeHelpers;

class ShowHelpers
{
    public static function ratingBar()
    {
        return function ($template, $context, $args, $source) {
            $params = explode(" ", $args);
            $r = floatval($context-&gt;get($params[0]));
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
</textarea></code></pre>

<div class="code-caption">Writing a custom helper</div>

You'll notice the `ratingBar()` function returns a function instead of a value, this is to prevent caching.

You'll also notice that my `$r` variable is defined using `$context->get(...)` while `$b` and `$c` aren't. This is because the first parameter is the name of a variable, while the second and third are just a number and a string. Using `$context->get(...)` will return the value of the variable.

### Importing

Since we're using a custom namespace to declare our functions, we'll use Composer to import these files automagically. In our `composer.json` file:

<div class="code-heading">composer.json</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="json"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">{</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #79B8FF;">&quot;require&quot;</span><span style="color: #E1E4E8;">: {</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #79B8FF;">&quot;open-function-computers-llc/rad-theme-engine&quot;</span><span style="color: #E1E4E8;">: </span><span style="color: #9ECBFF;">&quot;^1.0&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    },</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #79B8FF;">&quot;autoload&quot;</span><span style="color: #E1E4E8;">: {</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #79B8FF;">&quot;psr-4&quot;</span><span style="color: #E1E4E8;">: {</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #79B8FF;">&quot;ThemeHelpers\\&quot;</span><span style="color: #E1E4E8;">: </span><span style="color: #9ECBFF;">&quot;helpers/&quot;</span></div><div class='line'><span style="color: #E1E4E8;">        }</span></div><div class='line'><span style="color: #E1E4E8;">    }</span></div><div class='line'><span style="color: #E1E4E8;">}</span></div><textarea data-torchlight-original="true" style="display: none !important;">{
    "require": {
        "open-function-computers-llc/rad-theme-engine": "^1.0"
    },
    "autoload": {
        "psr-4": {
            "ThemeHelpers\\": "helpers/"
        }
    }
}
</textarea></code></pre>

<div class="code-caption">Updating Composer's autoload to include our custom helpers</div>

The key is the name of the namespace followed by two backslashes, and the value is the folder it's located in.

To install this new namespace into Composer's `autoload.php` file, execute the following command in the base of your theme.

```
composer dump-autoload -o
```

### Configuring

Now in our `config.php` file we can add the following:

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;handlebars&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;additional-helpers&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;ratingBar&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">ThemeHelpers\ShowHelpers</span><span style="color: #F97583;">::</span><span style="color: #B392F0;">ratingBar</span><span style="color: #E1E4E8;">(),</span></div><div class='line'><span style="color: #E1E4E8;">        ],</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">...</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
    "handlebars" =&gt; [
        "additional-helpers" =&gt; [
            "ratingBar" =&gt; ThemeHelpers\ShowHelpers::ratingBar(),
        ],
    ],
    ...
]
</textarea></code></pre>

<div class="code-caption">Registering our custom handlebars helper</div>

### Implementing

From now onwards, we can use this new helper in any of our templates by calling it with a `#ratingBar`. Here's an example of a list of TV Shows, each with a rating displayed:

<div class="code-heading">tpl/show_list.tpl</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">&lt;</span><span style="color: #85E89D;">div</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">class</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;four-col-grid&quot;</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">    {{#each shows}}</span></div><div class='line'><span style="color: #E1E4E8;">    &lt;</span><span style="color: #85E89D;">div</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">        &lt;</span><span style="color: #85E89D;">a</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">href</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;{{url}}&quot;</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">            &lt;</span><span style="color: #85E89D;">img</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">class</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;full-image&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">src</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;{{img}}&quot;</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">            &lt;</span><span style="color: #85E89D;">span</span><span style="color: #E1E4E8;">&gt;{{title}}&lt;/</span><span style="color: #85E89D;">span</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">        &lt;/</span><span style="color: #85E89D;">a</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">        &lt;</span><span style="color: #85E89D;">span</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">class</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;show-item-sub-title&quot;</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">            {{rating}}/5</span><span style="color: #79B8FF;">&amp;nbsp;</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #6A737D;">&lt;!-- Implement my helper --&gt;</span></div><div class='line'><span style="color: #E1E4E8;">            {{#ratingBar rating 2 ▰}}</span></div><div class='line'><span style="color: #E1E4E8;">        &lt;/</span><span style="color: #85E89D;">span</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">    &lt;/</span><span style="color: #85E89D;">div</span><span style="color: #E1E4E8;">&gt;</span></div><div class='line'><span style="color: #E1E4E8;">    {{/each}}</span></div><div class='line'><span style="color: #E1E4E8;">&lt;/</span><span style="color: #85E89D;">div</span><span style="color: #E1E4E8;">&gt;</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;
&lt;div class="four-col-grid"&gt;
    {{#each shows}}
    &lt;div&gt;
        &lt;a href="{{url}}"&gt;
            &lt;img class="full-image" src="{{img}}"&gt;
            &lt;span&gt;{{title}}&lt;/span&gt;
        &lt;/a&gt;
        &lt;span class="show-item-sub-title"&gt;
            {{rating}}/5&nbsp;
            &lt;!-- Implement my helper --&gt;
            {{#ratingBar rating 2 ▰}}
        &lt;/span&gt;
    &lt;/div&gt;
    {{/each}}
&lt;/div&gt;&lt;/xmp&gt;
</textarea></code></pre>

<div class="code-caption">Using our new helper in a handlebars file</div>

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

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #9ECBFF;">&quot;handlebars&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;additional-helpers&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;ratingBar&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">ThemeHelpers\ShowHelpers</span><span style="color: #F97583;">::</span><span style="color: #B392F0;">ratingBar</span><span style="color: #E1E4E8;">(),</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;breadcrumbs&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">ThemeHelpers\GlobalHelpers</span><span style="color: #F97583;">::</span><span style="color: #B392F0;">breadcrumbs</span><span style="color: #E1E4E8;">(),</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;num&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">ThemeHelpers\GlobalHelpers</span><span style="color: #F97583;">::</span><span style="color: #B392F0;">num</span><span style="color: #E1E4E8;">(),</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;asset&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">ThemeHelpers\GlobalHelpers</span><span style="color: #F97583;">::</span><span style="color: #B392F0;">asset</span><span style="color: #E1E4E8;">(),</span></div><div class='line'><span style="color: #E1E4E8;">        ],</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;template-extension&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;view&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;template-directory&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;views&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
"handlebars" =&gt; [
        "additional-helpers" =&gt; [
            "ratingBar" =&gt; ThemeHelpers\ShowHelpers::ratingBar(),
            "breadcrumbs" =&gt; ThemeHelpers\GlobalHelpers::breadcrumbs(),
            "num" =&gt; ThemeHelpers\GlobalHelpers::num(),
            "asset" =&gt; ThemeHelpers\GlobalHelpers::asset(),
        ],
        "template-extension" =&gt; "view",
        "template-directory" =&gt; "views",
    ],
]
</textarea></code></pre>

<div class="code-caption">A theme with several helpers and a custom template extension/directory.</div>