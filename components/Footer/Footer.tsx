import { LocaleChange } from 'components/LocaleChange/LocaleChange';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    const router = useRouter();

    return (
        <footer className={styles.footer}>
            <LocaleChange locale={router.locale} />
        </footer>
    );
};