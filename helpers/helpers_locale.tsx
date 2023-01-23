import { de } from "locales/de.locale";
import { en } from "locales/en.locale";
import { fr } from "locales/fr.locale";
import { ru } from "locales/ru.locale";
import { zh } from "locales/zh.locale";
import { useRouter } from "next/router";

type localeType = typeof en | typeof ru  | typeof fr | typeof de | typeof zh;

export function setLocale(): localeType {
    const router = useRouter();

    switch (router.locale) {
        case 'ru':
			return ru;
            case 'fr':
                return fr;
        case 'de':
            return de;
        case 'zh':
            return zh;
		default:
			return en;
    }
}