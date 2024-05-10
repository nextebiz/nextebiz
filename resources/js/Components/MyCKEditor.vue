/*
npm install --save @ckeditor/ckeditor5-vue @ckeditor/ckeditor5-build-classic

npm install --save @ckeditor/vite-plugin-ckeditor5 @ckeditor/ckeditor5-vue

npm i --save @ckeditor/ckeditor5-theme-lark

npm install --save @ckeditor/ckeditor5-autoformat @ckeditor/ckeditor5-alignment @ckeditor/ckeditor5-basic-styles @ckeditor/ckeditor5-block-quote @ckeditor/ckeditor5-cloud-services @ckeditor/ckeditor5-essentials
@ckeditor/ckeditor5-heading @ckeditor/ckeditor5-image @ckeditor/ckeditor5-indent @ckeditor/ckeditor5-link @ckeditor/ckeditor5-list @ckeditor/ckeditor5-media-embed @ckeditor/ckeditor5-paragraph
@ckeditor/ckeditor5-paste-from-office @ckeditor/ckeditor5-table @ckeditor/ckeditor5-typing @ckeditor/ckeditor5-code-block @ckeditor/ckeditor5-upload @ckeditor/ckeditor5-font
*/
<template>
    <div>
        <ckeditor :editor="editor" v-model="form.content" :config="editorConfig"></ckeditor>
    </div>
</template>

<script setup>

// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { ClassicEditor } from "@ckeditor/ckeditor5-editor-classic"

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Link } from '@ckeditor/ckeditor5-link';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';


import { Alignment } from '@ckeditor/ckeditor5-alignment';  // Importing the package.
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';
import { Heading } from '@ckeditor/ckeditor5-heading';
import {
    Image,
    ImageCaption,
    ImageStyle,
    ImageResize,
    ImageToolbar,
    ImageUpload,
    ImageInsert
} from '@ckeditor/ckeditor5-image';
import { Indent } from '@ckeditor/ckeditor5-indent';
import { List } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableCellProperties, TableProperties, TableToolbar, TableColumnResize } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { CodeBlock } from '@ckeditor/ckeditor5-code-block';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
import { Font } from '@ckeditor/ckeditor5-font';


import { useForm } from '@inertiajs/vue3';
import { watch } from 'vue';

const editor = ClassicEditor;
const editorConfig = {
    allowedContent: true,
    plugins: [
        Essentials,
        Font,
        Bold,
        Italic,
        Link,

        Paragraph,
        Alignment,  // Adding the package to the list of plugins.
        Autoformat,
        BlockQuote,
        CloudServices,
        Heading,
        Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, ImageResize, ImageInsert,
        Indent,
        List,
        MediaEmbed,
        PasteFromOffice,
        Table, TableToolbar, TableProperties, TableCellProperties, TableColumnResize,
        TextTransformation,
        CodeBlock,
        Base64UploadAdapter

    ],

    toolbar: {
        items: [
            'undo',
            'redo',
            'heading',
            'alignment',  // Displaying the proper UI element in the toolbar.

            '|',
            'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
            '|',

            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',

            '|',
            'outdent',
            'indent',
            '|',
            // 'imageUpload',
            'insertImage',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'codeBlock'
        ]
    },
    language: 'en',
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },

        ]
    },
    image: {
        toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
        ],
        insert: {
            // This is the default configuration, you do not need to provide
            // this configuration key if the list content and order reflects your needs.
            integrations: ['upload', 'assetManager', 'url']
        }
    },
    table: {
        contentToolbar: [
            'tableColumn', 'tableRow', 'mergeTableCells',
            'tableProperties', 'tableCellProperties'
        ],

        tableProperties: {
            // The configuration of the TableProperties plugin.
        },

        tableCellProperties: {
            // The configuration of the TableCellProperties plugin.
        }
    },
    mediaEmbed: {
        previewsInData: true
    },
    fontFamily: {
        options: [
            'default',
            'Roboto',
            'Montserrat',
            'Oswald',
            'Josefin Sans',
            'Bebas Neue',
            'Hind Siliguri',
            'Dancing Script',
            'Nabla',
            "Caveat",
            "Anton",
            "Shadows Into Light",
            'Orbitron',
            'Alfa Slab One',
            'Bungee Spice',
            'Great Vibes',
            'Zeyada',
            'Righteous',
            'Cairo',
            'Arial, Helvetica, sans-serif',
            'Courier New, Courier, monospace',
            'Georgia, serif',
            'Lucida Sans Unicode, Lucida Grande, sans-serif',
            'Tahoma, Geneva, sans-serif',
            'Times New Roman, Times, serif',
            'Trebuchet MS, Helvetica, sans-serif',
            'Verdana, Geneva, sans-serif',
            'Ubuntu, Arial, sans-serif',
            'Ubuntu Mono, Courier New, Courier, monospace',
        ]
    },
    fontColor: {
        colors: [
            // Red variations
            {
                color: 'hsl(0, 75%, 60%)',
                label: 'Red'
            },
            {
                color: 'hsl(0, 75%, 40%)',
                label: 'Dark Red'
            },
            {
                color: 'hsl(0, 75%, 80%)',
                label: 'Light Red'
            },
            {
                color: 'hsl(0, 100%, 50%)',
                label: 'Bright Red'
            },
            {
                color: 'hsl(0, 50%, 50%)',
                label: 'Muted Red'
            },
            // Green variations
            {
                color: 'hsl(120, 75%, 60%)',
                label: 'Green'
            },
            {
                color: 'hsl(120, 75%, 40%)',
                label: 'Dark Green'
            },
            {
                color: 'hsl(120, 75%, 80%)',
                label: 'Light Green'
            },
            {
                color: 'hsl(120, 100%, 25%)',
                label: 'Forest Green'
            },
            {
                color: 'hsl(120, 100%, 50%)',
                label: 'Bright Green'
            },
            // Blue variations
            {
                color: 'hsl(240, 75%, 60%)',
                label: 'Blue'
            },
            {
                color: 'hsl(240, 75%, 40%)',
                label: 'Dark Blue'
            },
            {
                color: 'hsl(240, 75%, 80%)',
                label: 'Light Blue'
            },
            {
                color: 'hsl(240, 100%, 25%)',
                label: 'Navy Blue'
            },
            {
                color: 'hsl(240, 100%, 50%)',
                label: 'Bright Blue'
            },
            // Pink variations
            {
                color: 'hsl(330, 75%, 60%)',
                label: 'Pink'
            },
            {
                color: 'hsl(330, 75%, 40%)',
                label: 'Dark Pink'
            },
            {
                color: 'hsl(330, 75%, 80%)',
                label: 'Light Pink'
            },
            {
                color: 'hsl(330, 100%, 25%)',
                label: 'Deep Pink'
            },
            {
                color: 'hsl(330, 100%, 50%)',
                label: 'Bright Pink'
            },
            // Black variations
            {
                color: 'hsl(0, 0%, 0%)',
                label: 'Black'
            },
            {
                color: 'hsl(0, 0%, 20%)',
                label: 'Dark Gray'
            },
            {
                color: 'hsl(0, 0%, 40%)',
                label: 'Gray'
            },
            {
                color: 'hsl(0, 0%, 80%)',
                label: 'Light Gray'
            },
            {
                color: 'hsl(0, 0%, 100%)',
                label: 'White'
            },
        ]
    },
    fontBackgroundColor: {
        colors: [
            // Red variations
            {
                color: 'hsl(0, 75%, 60%)',
                label: 'Red'
            },
            {
                color: 'hsl(0, 75%, 40%)',
                label: 'Dark Red'
            },
            {
                color: 'hsl(0, 75%, 80%)',
                label: 'Light Red'
            },
            {
                color: 'hsl(0, 100%, 50%)',
                label: 'Bright Red'
            },
            {
                color: 'hsl(0, 50%, 50%)',
                label: 'Muted Red'
            },
            // Green variations
            {
                color: 'hsl(120, 75%, 60%)',
                label: 'Green'
            },
            {
                color: 'hsl(120, 75%, 40%)',
                label: 'Dark Green'
            },
            {
                color: 'hsl(120, 75%, 80%)',
                label: 'Light Green'
            },
            {
                color: 'hsl(120, 100%, 25%)',
                label: 'Forest Green'
            },
            {
                color: 'hsl(120, 100%, 50%)',
                label: 'Bright Green'
            },
            // Blue variations
            {
                color: 'hsl(240, 75%, 60%)',
                label: 'Blue'
            },
            {
                color: 'hsl(240, 75%, 40%)',
                label: 'Dark Blue'
            },
            {
                color: 'hsl(240, 75%, 80%)',
                label: 'Light Blue'
            },
            {
                color: 'hsl(240, 100%, 25%)',
                label: 'Navy Blue'
            },
            {
                color: 'hsl(240, 100%, 50%)',
                label: 'Bright Blue'
            },
            // Pink variations
            {
                color: 'hsl(330, 75%, 60%)',
                label: 'Pink'
            },
            {
                color: 'hsl(330, 75%, 40%)',
                label: 'Dark Pink'
            },
            {
                color: 'hsl(330, 75%, 80%)',
                label: 'Light Pink'
            },
            {
                color: 'hsl(330, 100%, 25%)',
                label: 'Deep Pink'
            },
            {
                color: 'hsl(330, 100%, 50%)',
                label: 'Bright Pink'
            },
            // Black variations
            {
                color: 'hsl(0, 0%, 0%)',
                label: 'Black'
            },
            {
                color: 'hsl(0, 0%, 20%)',
                label: 'Dark Gray'
            },
            {
                color: 'hsl(0, 0%, 40%)',
                label: 'Gray'
            },
            {
                color: 'hsl(0, 0%, 80%)',
                label: 'Light Gray'
            },
            {
                color: 'hsl(0, 0%, 100%)',
                label: 'White'
            },
        ]
    },



}

const props = defineProps({
    content: String
})

const emits = defineEmits(['updateContent']);

const form = useForm({
    content: props.content
})

function updateContent() {
    emits('updateContent', form.content);
}

watch(form, (oldvalue, newvalue) => {
    updateContent()
});

</script>

<style lang="scss" scoped></style>
