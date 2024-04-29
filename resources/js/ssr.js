import "./bootstrap";
import "flowbite";

import "../css/app.css";

import { createSSRApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";
import { createPinia } from "pinia";

import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'

import CKEditor from "@ckeditor/ckeditor5-vue";
const appName = import.meta.env.VITE_APP_NAME || "Laravel";


createServer(page =>
  createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    page,
    render: renderToString,
    // resolve: name => {
    //   const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    //   return pages[`./Pages/${name}.vue`]
    // },

    resolve: (name) =>
    resolvePageComponent(
        `./Pages/${name}.vue`,
        import.meta.glob("./Pages/**/*.vue")
    ),
    setup({ el, App, props, plugin }) {
        return createSSRApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(CKEditor)
            .use(createPinia())
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
  }),
)
