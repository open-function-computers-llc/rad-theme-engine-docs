---
title: "Flexible Content"
date: 2021-07-26T13:19:20-07:00
lastmod: 2021-07-26T13:19:20-07:00
draft: false
images: []
menu:
  docs:
    parent: "guides"
weight: 500
toc: true
---

{{< alert icon="👉" text="Requires Advanced Custom Fields (ACF) Pro" />}}

ACF's [Flexible Content](https://www.advancedcustomfields.com/resources/flexible-content/) feature is a powerful way to create flexible content layouts in WordPress. It allows you to create reusable content blocks that can be used in multiple places on your site. RAD Theme Engine provides a simple way to access and render these content blocks in your templates.

## Creating a Flexible Content Field

To create a new flexible content field, select the "Flexible Content" field type in the ACF field group settings.

You can then add as many flexible content layouts as you want to the field group. Each layout can have its own set of fields and a unique name, the latter of which will be used to reference the layout in your templates.

{{< figure src="/images/acf-interface.png" >}}

<div class="code-caption">Source: ACF</div>

## Templating Flex Content

RAD Theme Engine provides a simple way to organize and render flexible content fields in your templates.

### Template Files Structure

Each layout defined in ACF will have its own template, which will be used to render the content block. The template name is the same as the layout name, but with the `flex_` prefix. For example, if you have a layout called `hero`, the template name will be `flex_hero.tpl`. 

As the number of layouts grow, your `/tpl` directory will start to look something like this:

```
/tpl
├── ...
├── flex_hero.tpl
├── flex_cta.tpl
├── flex_image.tpl
├── flex_text.tpl
├── flex_video.tpl
└── ...
```

<div class="code-caption">Example of a `/tpl` directory with 5 flex content layouts.</div>

{{< alert icon="👉" text="The `flex_` prefix can be configured in your config.php file." />}}

### Template File Content

The template file will receive all the fields defined in the layout on the ACF interface. For example, if you have a layout called `hero` with a title, description, and image field, the template file will receive the following variables:

<div class="code-heading">tpl/flex_hero.tpl</div>

```handlebars
<div>
  <h1>{{title}}</h1>
  <p>{{description}}</p>
  <img src="{{image}}" alt="{{title}}" />
</div>
```

<div class="code-caption">Example of a template file for the `hero` layout.</div>

## Rendering Flex Content

Now to tie it all together. To render the flexible content field in your template, simply use the `#flex` helper on the page associated with the flexible content field.

<div class="code-heading">tpl/page.tpl</div>

```handlebars
<nav>
    My Awesome Website!
</nav>

<!-- Page content -->
{{#flex}}

<footer>
    &copy; 2025 My Awesome Website!
</footer>
```

## Further Reading

- [`#flex` helper](/docs/templating/flex/)
- [ACF Flexible Content Docs](https://www.advancedcustomfields.com/resources/flexible-content/)
- [RAD Theme Engine Example Theme](https://github.com/open-function-computers-llc/rad-theme-engine-example-theme)

