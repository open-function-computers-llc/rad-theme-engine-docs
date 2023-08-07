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

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">Welcome to &lt;</span><span style="color: #85E89D;">span</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">style</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;</span><span style="color: #E1E4E8;">color:red&quot;</span><span style="color: #E1E4E8;">&gt;{{title}}&lt;/</span><span style="color: #85E89D;">span</span><span style="color: #E1E4E8;">&gt;!</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;Welcome to &lt;span style="color:red"&gt;{{title}}&lt;/span&gt;!&lt;/xmp&gt;
</textarea></code></pre>

<div class="code-caption">A simple handlebars template</div>

#### Rendering

To render this we need to call the file and supply it with the data it needs. Since I only want to use this template on my home page, I'll add this code to `home.php`:

<div class="code-heading">home.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #79B8FF;">echo</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">render</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;home-title&quot;</span><span style="color: #E1E4E8;">,[</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">get_bloginfo</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;">)</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">echo site()-&gt;render("home-title",[
    "title" =&gt; get_bloginfo("name")
]);
</textarea></code></pre>

<div class="code-caption">Rendering a block of HTML</div>

Recall we added a function in `functions.php` to expose our `Site` object to all the pages, and that's what we're using here.

Here's what we see on the homepage now:

{{< figure src="/images/handlebars-example.png" >}}

Wow! What a site!

#### Loops

Iterating through collections with handlebars is easy, just pass an array into your model and use the `#each` helper.

<div class="code-heading">home.php</div>

<pre class="torchlight has-focus-lines" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line line-focus'><span style="color: #79B8FF;">echo</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">render</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;people-list.tpl&quot;</span><span style="color: #E1E4E8;">,[ </span></div><div class='line line-focus'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;people&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;first&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Gabin&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;last&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Ábel&quot;</span></div><div class='line'><span style="color: #E1E4E8;">        ],</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        [ </span></div><div class='line line-focus'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;first&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Koji&quot;</span><span style="color: #E1E4E8;">, </span></div><div class='line line-focus'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;last&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Hallþóra&quot;</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        ],</span></div><div class='line'><span style="color: #E1E4E8;">        [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;first&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Carmi&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;last&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Surendra&quot;</span></div><div class='line'><span style="color: #E1E4E8;">        ],</span></div><div class='line'><span style="color: #E1E4E8;">    ]</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">echo site()-&gt;render("people-list.tpl",[ // [tl! focus:1]
    "people" =&gt; [
        [
            "first" =&gt; "Gabin",
            "last" =&gt; "Ábel"
        ],
        [ // [tl! focus:3]
            "first" =&gt; "Koji", 
            "last" =&gt; "Hallþóra"
        ],
        [
            "first" =&gt; "Carmi",
            "last" =&gt; "Surendra"
        ],
    ]
]);
</textarea></code></pre>

<div class="code-heading">tpl/people-list.tpl</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">{{#each people}}</span></div><div class='line'><span style="color: #E1E4E8;">    &lt;</span><span style="color: #85E89D;">b</span><span style="color: #E1E4E8;">&gt;{{first}}&lt;/</span><span style="color: #85E89D;">b</span><span style="color: #E1E4E8;">&gt; {{last}}</span></div><div class='line'><span style="color: #E1E4E8;">{{/each}}</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;{{#each people}}
    &lt;b&gt;{{first}}&lt;/b&gt; {{last}}
{{/each}}
&lt;/xmp&gt;
</textarea></code></pre>

<div class="code-caption">A simple loop in handlebars</div>

#### Conditions

With handlebars' `#if` helper, blocks will not render if the condition returns `false`, `null`, `''`, or `[]`.

<div class="code-heading">home.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #79B8FF;">echo</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">render</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;people-list.tpl&quot;</span><span style="color: #E1E4E8;">,[</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;people&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> []</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">echo site()-&gt;render("people-list.tpl",[
    "people" =&gt; []
]);
</textarea></code></pre>

<div class="code-heading">tpl/people-list.tpl</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">{{#if people}}</span></div><div class='line'><span style="color: #E1E4E8;">    First Person: {{people.0.first}}</span></div><div class='line'><span style="color: #E1E4E8;">{{#else}}</span></div><div class='line'><span style="color: #E1E4E8;">    There are no people!</span></div><div class='line'><span style="color: #E1E4E8;">{{/if}}</span></div><textarea data-torchlight-original="true" style="display: none !important;">{{#if people}}
    First Person: {{people.0.first}}
{{#else}}
    There are no people!
{{/if}}
</textarea></code></pre>

<div class="code-caption">An if/else statement in handlebars</div>

See more about handlebars [on the docs](https://github.com/salesforce/handlebars-php).


### Template File Extension

By default Handlebars templates are files that end with `.tpl` and exist inside the `tpl/` folder in the theme root.

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #9ECBFF;">&quot;handlebars&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;template-extension&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;tpl&quot;</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">"handlebars" =&gt; [
    "template-extension" =&gt; "tpl"
]
</textarea></code></pre>
