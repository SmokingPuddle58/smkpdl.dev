// https://docs.astro.build/en/recipes/i18n/

export const languages = {
    en: "English",
    hkc: "粵語",
    hkt: "繁體中文",
};

export const defaultLang = "en";

export const ui = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.X": "X",
    },
    hkc: {
        "nav.home": "主頁",
        "nav.about": "關於",
    },
} as const;