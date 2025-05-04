---
title: "Fields"
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 200
toc: true
---
RAD allows you to create your own fields in a pages Admin area. This allows you to quickly and eaily build out pages.

## Adding Fields

In your `fields.php` file you can add custom fields for any template. All you need to do is return an array of each templates fields. 

For each template you wish to add fields to, start by specifying the template, and its type like this:

<div class="code-heading">fields.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;for&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;page&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;template&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Home Template&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Home Content&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #9ECBFF;">&quot;hidden&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;WYSIWYG&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><textarea data-torchlight-original="true" style="display: none !important;">[
    "for" =&gt; "page",
    "template" =&gt; "Home Template",
    "name" =&gt; "Home Content",
    "hidden" =&gt; [
        "WYSIWYG",
    ],</textarea></code></pre>
The post type is "page", "Home Template" is the name of the template, and "Home Content" is the header to be displayed on the admin page. Additonally you can choose to hide the default WYSIWYG from the edit page.

From there, you can start defining your fields!

<div class="code-heading">fields.php</div>

<pre class="torchlight has-focus-lines" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #9ECBFF;">&quot;fields&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;type&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;text&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;label&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;First Header&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;header1&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    [ </span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;type&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;image&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;label&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;Header Image&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;headerImage&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;store&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;url&quot;</span></div><div class='line line-focus'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;type&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;file&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;label&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;Description PDF&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;description&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">"fields" =&gt; [
    [
        
        "type"=&gt;"text",
        "label"=&gt;"First Header",
        "name"=&gt;"header1"
    ],
    [ // [tl! focus:5]
        "type"=&gt;"image",
        "label"=&gt;"Header Image",
        "name"=&gt;"headerImage",
        "store"=&gt;"url"
    ],
    [
        "type"=&gt;"file",
        "label"=&gt;"Description PDF",
        "name"=&gt;"description",
    ],
]</textarea></code></pre>


Your final `fields.php` should look something like the following. 

<div class="code-heading">fields.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #F97583;">return</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">        [</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;for&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;page&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;template&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Home Template&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Home Content&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;hidden&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">                </span><span style="color: #9ECBFF;">&quot;WYSIWYG&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">            ],</span></div><div class='line'><span style="color: #E1E4E8;">            </span><span style="color: #9ECBFF;">&quot;fields&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">                [</span></div><div class='line'><span style="color: #E1E4E8;">                    </span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;type&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;text&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;label&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;First Header&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;header1&quot;</span></div><div class='line'><span style="color: #E1E4E8;">                ],</span></div><div class='line'><span style="color: #E1E4E8;">                [ </span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;type&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;image&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;label&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;Header Image&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;headerImage&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;store&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;url&quot;</span></div><div class='line'><span style="color: #E1E4E8;">                ],</span></div><div class='line'><span style="color: #E1E4E8;">                [</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;type&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;file&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;label&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;Description PDF&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                    </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #F97583;">=&gt;</span><span style="color: #9ECBFF;">&quot;description&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">                ],</span></div><div class='line'><span style="color: #E1E4E8;">            ]</span></div><div class='line'><span style="color: #E1E4E8;">        ],</span></div><div class='line'><span style="color: #E1E4E8;">];</span></div><textarea data-torchlight-original="true" style="display: none !important;">return [
        [
            "for" =&gt; "page",
            "template" =&gt; "Home Template",
            "name" =&gt; "Home Content",
            "hidden" =&gt; [
                "WYSIWYG",
            ],
            "fields" =&gt; [
                [
                    
                    "type"=&gt;"text",
                    "label"=&gt;"First Header",
                    "name"=&gt;"header1"
                ],
                [ 
                    "type"=&gt;"image",
                    "label"=&gt;"Header Image",
                    "name"=&gt;"headerImage",
                    "store"=&gt;"url"
                ],
                [
                    "type"=&gt;"file",
                    "label"=&gt;"Description PDF",
                    "name"=&gt;"description",
                ],
            ]
        ],
];
</textarea></code></pre>

## Field Types

The following field types are supported:

* Text
* Textarea
* Number
* Image
    * Can be stored as URL or JSON
    * URL will just store the image, whereas JSON will store all of its details
* File
* WYSIWYG Editor

Once these steps are complete, the fields you added will show up to the "Edit Page" area for each post using the specified template. 


## Implementing Into Templates

Now that we have our fields in the admin area, we need to actually get them onto each post. To do this, we will need to create two files, a `.tpl` file and a `.php` file. The `.php` file will grab all of the fields and send them to the `.tpl` file which will use handlebars to render a page based on the fields.

The specifc name of the `.php` file does not matter, but let's keep using a home page template as an example, and call the file `tpl-home.php`. This file should live in the themes root directory (`your-theme-name/tpl-home.php`). This file is very simple. All it needs is a name, the fields to send to a template, and the template name. It should look something like this:

<div class="code-heading">tpl-home.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #6A737D;">/**</span></div><div class='line'><span style="color: #6A737D;"> * Template Name:Home Template</span></div><div class='line'><span style="color: #6A737D;"> */</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">echo</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">render</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&quot;home&quot;</span><span style="color: #E1E4E8;">, </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPost</span><span style="color: #E1E4E8;">($post, </span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;rad.header1&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;rad.headerImage&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;rad.description&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">    ]  </span></div><div class='line'><span style="color: #E1E4E8;">));</span></div><textarea data-torchlight-original="true" style="display: none !important;">/**
 * Template Name:Home Template
 */

 echo site()-&gt;render("home", site()-&gt;getPost($post, 
    [
        "rad.header1",
        "rad.headerImage",
        "rad.description",
    ]  
));</textarea></code></pre>

That is all you need! "home" is the name of the template to be renderded, "header1", "headerImage", and "description" are the names of the fields that were defined earlier in the `fields.php` file. These must be prefaced with "rad." to work properly. Additionally, you can add things like a header or footer partial template above or below the `echo site()` block depending on where you want it.

Finally, we must make the template itself. In the `your-theme-name/tpl` folder create a file with <i>the same name</i> as specified in the `fields.php` folder. For this example, we would create a file named `home.tpl`. This file should be the HTML for the page, and to use our variables we should wrap their name in two curly braces. So this:

<div class="code-heading">home.tpl</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">&lt;</span><span style="color: #85E89D;">img</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">class</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;home-header-img&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">src</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;{{ headerImage }}&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">alt</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;Header Image&quot;</span><span style="color: #E1E4E8;">/&gt;</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;&lt;img class="home-header-img" src="{{ headerImage }}" alt="Header Image"/&gt;&lt;/xmp&gt;</textarea></code></pre>

and..

<div class="code-heading">home.tpl</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">&lt;</span><span style="color: #85E89D;">h1</span><span style="color: #E1E4E8;">&gt;{{ header1 }}&lt;/</span><span style="color: #85E89D;">h1</span><span style="color: #E1E4E8;">&gt;</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;&lt;h1&gt;{{ header1 }}&lt;/h1&gt;&lt;/xmp&gt;</textarea></code></pre>

will populate those fields with whatever was input into the admin area for `headerImage` and `header1`. 

If you are using the WYSIWYG Editor, you will need to use three curly braces instead of two. This makes sure the HTML gets rendered. If you just use two, you will see HTML tags on the page, so somehthing like this:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="html"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">&lt;</span><span style="color: #85E89D;">div</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">class</span><span style="color: #E1E4E8;">=</span><span style="color: #9ECBFF;">&quot;wysiwyg-content&quot;</span><span style="color: #E1E4E8;">&gt;{{{ yourWYSIWYGField }}}&lt;/</span><span style="color: #85E89D;">div</span><span style="color: #E1E4E8;">&gt;</span></div><textarea data-torchlight-original="true" style="display: none !important;">&lt;xmp&gt;&lt;div class="wysiwyg-content"&gt;{{{ yourWYSIWYGField }}}&lt;/div&gt;&lt;/xmp&gt;</textarea></code></pre>




That's it! You can keep adding fields for new or existing templates, and they're that easy to set up!