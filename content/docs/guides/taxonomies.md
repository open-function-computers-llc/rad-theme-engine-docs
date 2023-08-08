---
title: "Working with Taxonomies"
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
lead: "Creating and querying custom taxonomies is easy with RAD Theme Engine."
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 250
toc: true
---

## Creating

As shown in the [configuration guide](../configuration#custom-post-types), registering taxonomies alongside your custom post types is very straightforward. Simply add the `taxonomies` key to your post type object with a list of slugs to be registered:

<div class="code-heading">config.php</div>

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #9ECBFF;">&quot;custom-post-types&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;icon&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;dashicons-album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;taxonomies&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> [</span><span style="color: #9ECBFF;">&#39;genre&#39;</span><span style="color: #E1E4E8;">],</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">],</span></div><textarea data-torchlight-original="true" style="display: none !important;">"custom-post-types" =&gt; [
    [
        "slug" =&gt; "album",
        "icon" =&gt; "dashicons-album",
        "taxonomies" =&gt; ['genre'],
    ],
],
</textarea></code></pre>

<div class="code-caption">Registering a custom taxonomy.</div>

And just like that, we have a new taxonomy on our admin page:

{{< figure src="/images/taxonomies-creating-example.png" >}}

The display name will automatically be set as a capitalized version of the slug.

## Querying

### Getting all the terms

Similar to the way posts are queried in RAD Theme Engine, you can declare the specific attributes of each term that will be returned.

For example if you want to grab the name, slug, and url for each term in the 'genre' taxonomy:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">$genres </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getTerm</span><span style="color: #E1E4E8;">(</span><span style="color: #9ECBFF;">&#39;genre&#39;</span><span style="color: #E1E4E8;">, [</span><span style="color: #9ECBFF;">&#39;name&#39;</span><span style="color: #E1E4E8;">,</span><span style="color: #9ECBFF;">&#39;slug&#39;</span><span style="color: #E1E4E8;">,</span><span style="color: #9ECBFF;">&#39;url&#39;</span><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">$genres = site()-&gt;getTerm('genre', ['name','slug','url']);
</textarea></code></pre>

<div class="code-caption">Getting the name, slug, and url for each term in the "genre" taxonomy.</div>

Which would result in `$genres` looking like this:

<pre class="torchlight has-focus-lines" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Synth Pop&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;synth_pop&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;url&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;https://my.music.site/genre/synth_pop&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Jazz&quot;</span><span style="color: #E1E4E8;">, </span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;jazz&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line line-focus'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;url&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;https://my.music.site/genre/jazz&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Electronica&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;electronica&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;url&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;https://my.music.site/genre/electronica&quot;</span></div><div class='line'><span style="color: #E1E4E8;">    ],   </span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">[
    [
        "name" =&gt; "Synth Pop",
        "slug" =&gt; "synth_pop",
        "url" =&gt; "https://my.music.site/genre/synth_pop"
    ],
    [
        "name" =&gt; "Jazz", // [tl! focus:2]
        "slug" =&gt; "jazz",
        "url" =&gt; "https://my.music.site/genre/jazz"
    ],
    [
        "name" =&gt; "Electronica",
        "slug" =&gt; "electronica",
        "url" =&gt; "https://my.music.site/genre/electronica"
    ],   
]
</textarea></code></pre>

See more on the [`getTerm` page](../../reference/getterm).

### Getting the terms of a post

Using the `getPostTaxonomy` function we can easily find out which terms of a given taxonomy a post has. Simply supply a `WP_Post` and a taxonomy slug:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">$post_genres </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPostTaxonomy</span><span style="color: #E1E4E8;">(</span><span style="color: #B392F0;">get_post</span><span style="color: #E1E4E8;">(), </span><span style="color: #9ECBFF;">&#39;genre&#39;</span><span style="color: #E1E4E8;">);</span></div><textarea data-torchlight-original="true" style="display: none !important;">$post_genres = site()-&gt;getPostTaxonomy(get_post(), 'genre');
</textarea></code></pre>

<div class="code-caption">Get all the "genre" terms of the current post.</div>

And just like that, `$post_genres` is a list of `WP_Term` objects:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">[</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">object</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">WP_Term</span><span style="color: #E1E4E8;">) [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;term_id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">1</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Synth Pop&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;synth_pop&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #F97583;">...</span><span style="color: #E1E4E8;"> </span><span style="color: #6A737D;">// Other WP_Term attributes</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">    </span><span style="color: #F97583;">object</span><span style="color: #E1E4E8;">(</span><span style="color: #79B8FF;">WP_Term</span><span style="color: #E1E4E8;">) [</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;term_id&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #79B8FF;">3</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;name&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;Electronica&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #9ECBFF;">&quot;slug&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;electronica&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">        </span><span style="color: #F97583;">...</span></div><div class='line'><span style="color: #E1E4E8;">    ],</span></div><div class='line'><span style="color: #E1E4E8;">]</span></div><textarea data-torchlight-original="true" style="display: none !important;">[
    object(WP_Term) [
        "term_id" =&gt; 1,
        "name" =&gt; "Synth Pop",
        "slug" =&gt; "synth_pop",
        ... // Other WP_Term attributes
    ],
    object(WP_Term) [
        "term_id" =&gt; 3,
        "name" =&gt; "Electronica",
        "slug" =&gt; "electronica",
        ...
    ],
]
</textarea></code></pre>

See more on the [`getPostTaxonomy` page](../../reference/getposttaxonomy).

### Querying posts by terms

Another common use of taxonomies is grabbing every post that has a certain term. With RAD Theme Engine this has never been easier.

As seen in the [Site Object Guide](../the-site-object#post-querying), the key is adding `taxonomy.<slug>` to the query:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'><span style="color: #E1E4E8;">$jazz_albums </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPosts</span><span style="color: #E1E4E8;">([</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;post_type&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;taxonomy.genre&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;jazz&quot;</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;numberposts&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">-</span><span style="color: #79B8FF;">1</span><span style="color: #E1E4E8;">, </span><span style="color: #6A737D;">// Get every post</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">$jazz_albums = site()-&gt;getPosts([
  "post_type" =&gt; "album",
  "taxonomy.genre" =&gt; "jazz"
  "numberposts" =&gt; -1, // Get every post
]);
</textarea></code></pre>

<div class="code-caption">Get every album post where the genre is "jazz".</div>

Since we only set the first parameter of `getPosts`, `$jazz_albums` will simply be an array of `WP_Post` objects. To see an example with output fields defined, check out this ["Putting it Together" section](../the-site-object#putting-it-together).

Additionally if you want to grab posts for multiple terms, just comma-seperate your string:

<pre class="torchlight" style="background-color: #24292e; --theme-selection-background: #39414a;" data-torchlight-processed="3449c9e5e332f1dbb81505cd739fbf3f"><code data-language="php"><!-- Syntax highlighted by torchlight.dev --><div class='line'>&nbsp;</div><div class='line'><span style="color: #E1E4E8;">$jazz_and_electronica_albums </span><span style="color: #F97583;">=</span><span style="color: #E1E4E8;"> </span><span style="color: #B392F0;">site</span><span style="color: #E1E4E8;">()</span><span style="color: #F97583;">-&gt;</span><span style="color: #B392F0;">getPosts</span><span style="color: #E1E4E8;">([</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;post_type&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;album&quot;</span><span style="color: #E1E4E8;">,</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;taxonomy.genre&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #9ECBFF;">&quot;jazz,electronica&quot;</span></div><div class='line'><span style="color: #E1E4E8;">  </span><span style="color: #9ECBFF;">&quot;numberposts&quot;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">=&gt;</span><span style="color: #E1E4E8;"> </span><span style="color: #F97583;">-</span><span style="color: #79B8FF;">1</span><span style="color: #E1E4E8;">, </span><span style="color: #6A737D;">// Get every post</span></div><div class='line'><span style="color: #E1E4E8;">]);</span></div><textarea data-torchlight-original="true" style="display: none !important;">$jazz_and_electronica_albums = site()-&gt;getPosts([
  "post_type" =&gt; "album",
  "taxonomy.genre" =&gt; "jazz,electronica"
  "numberposts" =&gt; -1, // Get every post
]);
</textarea></code></pre>
<div class="code-caption">Get every album post where the genre is either "jazz" or "electronica".</div>

More about querying posts:
- [`getPosts` documentation](../../reference/getposts)
- [The Site Object guide](../guides/the-site-object)