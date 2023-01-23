import styles from './LocaleChange.module.css';
import cn from 'classnames';
import { setLocale } from 'helpers/helpers_locale';
import { Htag } from 'components/Htag/Htag';
import { useRouter } from 'next/router';
import { en } from 'locales/en.locale';
import { ru } from 'locales/ru.locale';
import { fr } from 'locales/fr.locale';
import { de } from 'locales/de.locale';
import { zh } from 'locales/zh.locale';
import Link from 'next/link';
import { useState } from 'react';

export const LocaleChange = (): JSX.Element => {
    const router = useRouter();

    const [hidden, setHidden] = useState<boolean>(true);

    const languages = [en, ru, fr, de, zh];
    let langIndex = languages.indexOf(setLocale(router.locale));

    if (langIndex !== -1) {
        languages.splice(langIndex, 1);
    }

	return (
        <>
            <span className={styles.spanLang} onClick={() => setHidden(!hidden)}>
                <Htag tag='lang'>{setLocale(router.locale).language}</Htag>
            </span>
            <div className={cn({
						[styles.hiddenLanguages]: hidden,
						[styles.blockLanguages]: !hidden,
					})}>
                {languages.map(m => (
                    <Link href={router.asPath} locale={m.locale} className={styles.linkLang} 
                        onClick={() => setHidden(true)}>
                        <Htag tag='lang'>{m.language}</Htag>
                    </Link>
                ))}
            </div>
        </>
    );
};