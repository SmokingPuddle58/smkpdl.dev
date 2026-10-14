// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import allLanguages from "./src/data/languages.json";
const locales = allLanguages.map(item => item.lang_code)

// https://astro.build/config
export default defineConfig({
    trailingSlash: "always",
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Huninn",
        cssVariable: "--font-huninn",
    }],
    i18n: {
        locales: locales,
        defaultLocale: locales[0],
        routing: {
            prefixDefaultLocale: true,
            fallbackType: "rewrite"
        },
        fallback: {
            "zh-hant": "en"
        },
    }
});
