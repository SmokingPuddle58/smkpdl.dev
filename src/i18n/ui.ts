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
        "nav.twitter": "Twitter",
    },
    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
    },
} as const;