import { Htag } from 'components/Htag/Htag';
import { LocaleChange } from 'components/LocaleChange/LocaleChange';
import { setFooterYear } from 'helpers/helpers_footer_year';
import { setLocale } from 'helpers/helpers_locale';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerCopyright}>
                <Htag tag='m'>
                    {'© ' + setFooterYear() + ' tBench. ' + setLocale(router.locale).rights_reserved + '.'}
                </Htag>
                <LocaleChange />
            </div>
            <div className={styles.footerBy}>
                <Htag tag='s'>by separatrix</Htag>
            </div>
        </footer>
    );
};