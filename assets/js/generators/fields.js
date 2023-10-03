import { createApp } from 'vue/dist/vue.esm-browser.prod.js';
import hljs from 'highlight.js';
import { capitalize, code_list } from './shared';

var has_mounted = false;

createApp({
    delimiters: ['[[', ']]'],
    data() {
        return {
            templates: [],
            idx_open: null,
            available_post_types: ['page', 'post']
        }
    },
    mounted() {
        // Check for saved state
        let save = window.localStorage.getItem("fields-generator-data")
        if (save) {
            let parsed = JSON.parse(save)
            for (let key in parsed) {
                this[key] = parsed[key]
            }
        }
        // Find available post types from CPT save data
        save = window.localStorage.getItem("config-generator-data")
        if (save) {
            let parsed = JSON.parse(save)
            this.available_post_types.push(...parsed["cpt"].map(c => c['slug']))
        }
        // Has mounted (prevents localStorage from being overwritten with empty default vals)
        has_mounted = true;
        document.getElementById('v-fields-generator').classList.remove("opacity-0")
        document.getElementById('fields-generator-loader').remove()
    },
    computed: {
        code() {
            if (has_mounted)
                window.localStorage.setItem("fields-generator-data", JSON.stringify({
                    templates: this.templates
                }))

            const fixed = (this.templates ?? []).map((template) => {
                template = { ...template } // prevent editing original
                // Custom post type support
                if (template['for'] == '__custom') {
                    template['for'] = template['for_custom'] ?? ''
                    delete template['for_custom']
                }
                // Transform fields
                template.fields = template.fields.map((field) => {
                    field = { ...field } // prevent editing original
                    // Transform image options
                    if (field.type == 'image (json)') {
                        field['type'] = 'image'
                        field['store'] = 'json'
                    } else if (field.type == 'image (url)') {
                        field['type'] = 'image'
                        field['store'] = 'url'
                    }
                    // Fill missing fields
                    if (field.label == '')
                        field['label'] = capitalize(`${field.type} content`)
                    if (field.name == '')
                        field['name'] = `user_${field.type}`
                    return field;
                })
                return template;
            })


            return hljs.highlight(`<?php
            
return ${code_list(fixed, 0, "No templates")}
            `, { language: 'php' }).value
        }
    },
    methods: {
        createTemplate() {
            this.templates.push({
                "for": "page",
                "template": "My Template",
                "name": "Page Content",
                "hidden": [],
                "fields": [],
            })
            this.idx_open = this.templates.length - 1;
        },
        createField(template_idx) {
            this.templates[template_idx].fields.push({
                "type": "text",
                "label": "",
                "name": "",
            })
        },
        delTemplate(idx) {
            if (!confirm("Are you sure you want to delete this template?")) return;
            this.idx_open = null;
            this.templates.splice(idx, 1);
        }
    },
}).mount('#v-fields-generator');