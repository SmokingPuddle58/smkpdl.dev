// https://docs.astro.build/en/recipes/i18n/

export const languages = {
    en: "English",
    "zh-hant": "繁體中文",
};

export const defaultLang = "en";

export const ui = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.X": "X",
        "nav.webring": "Webrings",
    },
    "zh-hant": {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.X": "X",
        "nav.webring": "Webrings",
    },

} as const;