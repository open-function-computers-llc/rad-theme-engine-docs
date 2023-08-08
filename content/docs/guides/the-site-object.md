---
title: "The Site Object"
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

Calling the `site()` function in any of your theme's php files will return the `ofc/Site` object, a class with a collection of convenient methods to interface with various parts of WordPress.

## Patterns

### Post Querying

Developers familiar with the WordPress' [WP_Query](https://developer.wordpress.org/reference/functions/get_posts/) concept of querying for posts will feel right at home with RAD Theme Engine.

If you want to quickly fetch 8 posts of type "product", for example:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">$products </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPosts</span><span style="color: #E1E4E8;">([</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;post_type&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;product&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;numberposts&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">8</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">$products = site()-&gt;getPosts([
  "post_type" =&gt; "product",
  "numberposts" =&gt; 8
]);
</textarea></code></pre>
<div class="code-caption">A simple post query</div>

But unlike a normal WP_Query, RAD Theme Engine comes with an additional option to make working with taxonomies easier. Now if I want to grab products that have the "medium" taxonomy equal to the term with slug "vinyl", I would simply use:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">$records </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPosts</span><span style="color: #E1E4E8;">([</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;post_type&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;product&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;taxonomy.medium&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;vinyl&quot;</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;numberposts&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">8</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">$records = site()-&gt;getPosts([
  "post_type" =&gt; "product",
  "taxonomy.medium" =&gt; "vinyl"
  "numberposts" =&gt; 8,
]);
</textarea></code></pre>
<div class="code-caption">A post query with a term specified</div>

Additionally a number of aliases for commonly used fields are added by RAD Theme Engine, which are defined in the [`getPosts` docs](../../reference/getposts#arguments).


### Post Fields

One convenient feature of RAD Theme Engine is the ability to define the structure of a returned post object on certain methods.

In practice this simply means creating a string array of [`WP_Post`](https://developer.wordpress.org/reference/classes/wp_post/) members you want returned. For example, if I only want to get the `$post_title` and `$post_author` of a post, my fields would look like this:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">$fields </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;post_title&#39;</span><span style="color: #E1E4E8;">,</span><span style="color: #9ECBFF;">&#39;post_author&#39;</span><span style="color: #E1E4E8;">];</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #6A737D;">// Get these fields from post with id 4 </span></div><div class='line'><span style="color: #E1E4E8;">$post </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPost</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">4</span><span style="color: #E1E4E8;">,$fields);</span></div><textarea data-torchlight-original="true" style="display: none !important;">$fields = ['post_title','post_author'];

// Get these fields from post with id 4 
$post = site()-&gt;getPost(4,$fields);
</textarea></code></pre>

The result of getPost is the following:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;post_title&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;My Blog Post&quot;</span><span style="color: #E1E4E8;">, </span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;post_author&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Escher&quot;</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">[
  "post_title" =&gt; "My Blog Post", 
  "post_author" =&gt; "Escher"
]
</textarea></code></pre>

#### Additional Fields

In addition to any member of the [`WP_Post`](https://developer.wordpress.org/reference/classes/wp_post/) object, RAD Theme Engine comes with a collection of shortcuts for nested properties, meta fields, [Advanced Custom Fields](https://www.advancedcustomfields.com/), and taxonomies. 

Check out this [`getPost` example](../../reference/getpost#with-fields) to see some of these fields in action.



- __`id`__ – Shortcut to return the `$ID`.
- __`title`__ – Shortcut to return the `$post_title`.
- __`name`__ – Shortcut to return the `$post_title`.
- __`url`__ – Uses `get_permalink($id)` to fetch the url of the post.
- __`permalink`__ – Same as `url`.
- __`thumbnail`__ – Uses `get_the_post_thumbnail_url($id)` to get the post thumbnail.
- __`content`__ – Retrieves the content of the post.
- __`excerpt`__ – Retrieves the post excerpt, if enabled.
- __`meta.<key>`__ – Get the value of a specific post meta field.
- __`acf.<key>`__ – Get the value of a specific ACF field for this post.
- __`categories.<member1>,<member2>,...`__ – Get specific members of the [`WP_Term`](https://developer.wordpress.org/reference/classes/wp_term) for each category this post is a part of.
- __`taxonomy.<taxonomy>.<member1>,<member2>,...`__ – Get specific members of the [`WP_Term`](https://developer.wordpress.org/reference/classes/wp_term) for each term within the given taxonomy this post is a part of. See below for members:
  - `term_id`
  - `id` – Alias for `term_id`
  - `link` – The result of `get_term_link()`
  - `name`
  - `title` – Alias for `name`
  - `slug`
  - `description`


### Putting it Together

Now that we know how to create a post query and define it's structure, the logical next step would be to put them together! Luckily with RAD Theme Engine this is super simple, just use the `getPosts` function with both parameters.

If I want to grab the title, url, and thumbnail for all the records I'm selling, for example:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">$query </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;post_type&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;product&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;taxonomy.medium&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;vinyl&quot;</span></div><div class='line'><span style="color: #E1E4E8;">];</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">$fields </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;title&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;url&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;thumbnail&quot;</span></div><div class='line'><span style="color: #E1E4E8;">];</span></div><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">$records </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPosts</span><span style="color: #E1E4E8;">($query,$fields);</span></div><textarea data-torchlight-original="true" style="display: none !important;">$query = [
  "post_type" =&gt; "product",
  "taxonomy.medium" =&gt; "vinyl"
];

$fields = [
  "title",
  "url",
  "thumbnail"
];

$records = site()-&gt;getPosts($query,$fields);
</textarea></code></pre>
<div class="code-caption">Retrieves 3 fields from all posts matching the given query</div>

Check out the [`getPosts` docs](../../reference/getposts) for more information.