---
title: "Configuration"
description: "Available options to configure "
lead: "Available options to configure"
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 10
toc: false
---

| Key                                                         | Type    |                                                                                      Description |
| :---------------------------------------------------------- | :------ | -----------------------------------------------------------------------------------------------: |
| [`excerpt-length`]({{< relref "excerpt-length" >}})         | integer | How many words the [WordPress excerpt](https://wordpress.org/support/article/excerpt/) should be |
| [`guest-class`]({{< relref "guest-class" >}})               | string  |  A class to append to the body_class list for unauthenticated users. Set to `"null"` to disable. |
| [`menu-locations`]({{< relref "menu-locations" >}})         | array   |                                                               Register individual menu locations |
| [`options-pages`]({{< relref "options-pages" >}})           | array   |                                                               A list of ACF options pages to add |
| [`custom-post-types`]({{< relref "custom-post-types" >}})   | array   |                                                                        Defines custom post types |
| [`handlebars`]({{< relref "handlebars" >}})                 | array   |                                              Configure handlebars helpers and template extension |
| [`enable`]({{< relref "enable" >}})                         | array   |                                                           A list of WordPress features to enable |
| [`disable`]({{< relref "disable" >}})                       | array   |                                                          A list of WordPress features to disable |
| [`tiny-mce-additions`]({{< relref "tiny-mce-additions" >}}) | array   |                                                              TinyMCE style configuration options |
{.table .table-bordered .col1-nowrap}
