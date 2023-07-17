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

```php
"custom-post-types" => [
    [
        "slug" => "album",
        "icon" => "dashicons-album",
        "taxonomies" => ['genre'],
    ],
],
```

<div class="code-caption">Registering a custom taxonomy.</div>

And just like that, we have a new taxonomy on our admin page:

{{< figure src="/images/taxonomies-creating-example.png" >}}

The display name will automatically be set as a capitalized version of the slug.

## Querying

### Getting all the terms

Similar to the way posts are queried in RAD Theme Engine, you can declare the specific attributes of each term that will be returned.

For example if you want to grab the name, slug, and url for each term in the 'genre' taxonomy:

```php
$genres = site()->getTerm('genre', ['name','slug','url']);
```

<div class="code-caption">Getting the name, slug, and url for each term in the "genre" taxonomy.</div>

Which would result in `$genres` looking like this:

```php
[
    [
        "name" => "Synth Pop",
        "slug" => "synth_pop",
        "url" => "https://my.music.site/genre/synth_pop"
    ],
    [
        "name" => "Jazz",
        "slug" => "jazz",
        "url" => "https://my.music.site/genre/jazz"
    ],
    [
        "name" => "Electronica",
        "slug" => "electronica",
        "url" => "https://my.music.site/genre/electronica"
    ],   
]
```

See more on the [`getTerm` page](../../reference/getterm).

### Getting the terms of a post

Using the `getPostTaxonomy` function we can easily find out which terms of a given taxonomy a post has. Simply supply a `WP_Post` and a taxonomy slug:

```php
$post_genres = site()->getPostTaxonomy(get_post(), 'genre');
```

<div class="code-caption">Get all the "genre" terms of the current post.</div>

And just like that, `$post_genres` is a list of `WP_Term` objects:

```
[
    object(WP_Term) [
        "term_id" => 1,
        "name" => "Synth Pop",
        "slug" => "synth_pop",
        ... // Other WP_Term attributes
    ],
    object(WP_Term) [
        "term_id" => 3,
        "name" => "Electronica",
        "slug" => "electronica",
        ...
    ],
]
```

See more on the [`getPostTaxonomy` page](../../reference/getposttaxonomy).

### Querying posts by terms

Another common use of taxonomies is grabbing every post that has a certain term. With RAD Theme Engine this has never been easier.

As seen in the [Site Object Guide](../the-site-object#post-querying), the key is adding `taxonomy.<slug>` to the query:

```php
$jazz_albums = site()->getPosts([
  "post_type" => "album",
  "taxonomy.genre" => "jazz"
  "numberposts" => -1, // Get every post
]);
```

<div class="code-caption">Get every album post where the genre is "jazz".</div>

Since we only set the first parameter of `getPosts`, `$jazz_albums` will simply be an array of `WP_Post` objects. To see an example with output fields defined, check out this ["Putting it Together" section](../the-site-object#putting-it-together).

Additionally if you want to grab posts for multiple terms, just comma-seperate your string:

```
$jazz_and_electronica_albums = site()->getPosts([
  "post_type" => "album",
  "taxonomy.genre" => "jazz,electronica"
  "numberposts" => -1, // Get every post
]);
```
<div class="code-caption">Get every album post where the genre is either "jazz" or "electronica".</div>

More about querying posts:
- [`getPosts` documentation](../../reference/getposts)
- [The Site Object guide](../guides/the-site-object)