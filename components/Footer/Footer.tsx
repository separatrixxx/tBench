import { Htag } from 'components/Htag/Htag';
import { LocaleChange } from 'components/LocaleChange/LocaleChange';
import { setFooterYear } from 'helpers/footer_year.helper';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <footer className={styles.footer}>
            <div className={styles.footerCopyright}>
                <Htag tag='s'>
                    {'© ' + setFooterYear() + ' tBench. ' + setLocale(router.locale).rights_reserved + '.'}
                </Htag>
                <LocaleChange />
            </div>
            <div className={styles.footerBy}>
                <Htag tag='xs'>by separatrix</Htag>
            </div>
        </footer>
    );
};