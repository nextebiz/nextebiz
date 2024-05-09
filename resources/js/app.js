import "./bootstrap";
import "flowbite";

import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createPinia } from "pinia";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

import CKEditor from "@ckeditor/ckeditor5-vue";
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        const captcheKey = props.initialPage.props.recaptcha_site_key;
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(CKEditor)
            .use(createPinia())
            .use(VueReCaptcha, { siteKey: captcheKey,loaderOptions: {useRecaptchaNet: true}})
            .mount(el);
    },
    progress: {
        color: "#ff5a1f",
        delay: 250,
    },
});
