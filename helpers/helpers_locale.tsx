import { en } from "locales/en.locale";
import { ru } from "locales/ru.locale";
import { useRouter } from "next/router";

type localeType = typeof en | typeof ru;

export function setLocale(): localeType {
    const router = useRouter();

    switch (router.locale) {
        case 'ru':
			return ru;
		default:
			return en;
    }
}