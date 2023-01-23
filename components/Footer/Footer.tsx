import { LocaleChange } from 'components/LocaleChange/LocaleChange';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    return (
        <footer className={styles.footer}>
            <LocaleChange />
        </footer>
    );
};