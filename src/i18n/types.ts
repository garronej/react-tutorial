

import type { GenericTranslations } from "i18nifty";

//List the languages you with to support
export const languages = ["en", "fr", "vn"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = typeof languages[number];

export type ComponentKey =
	| typeof import('pages/Account').i18n
	| typeof import('pages/Blog').i18n
	| typeof import('pages/Home').i18n
	| typeof import('App/Header/LanguageSwitcher').i18n
	| typeof import('App/LeftBar/LeftBar').i18n
    ;

export type Translations<L extends Language> = GenericTranslations<ComponentKey, Language, typeof fallbackLanguage, L>;
