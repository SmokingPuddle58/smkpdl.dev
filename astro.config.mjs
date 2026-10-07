// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    fonts: [{
        provider: fontProviders.fontsource(),
        name: "Huninn",
        cssVariable: "--font-huninn",
    }],
    i18n: {
        locales: ["en", "zh-hant"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true
        }
    }
});
