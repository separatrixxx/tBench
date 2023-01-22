import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Footer.module.css';

export const Footer = (): JSX.Element => {
    const router = useRouter();
    
    return (
        <footer className={styles.footer}>
            <Link href={router.asPath} locale='en' className={styles.link}>English</Link>
            <Link href={router.asPath} locale='ru' className={styles.link}>Русский</Link>
            <Link href={router.asPath} locale='fr' className={styles.link}>Français</Link>
            <Link href={router.asPath} locale='de' className={styles.link}>Deutsch</Link>
            <Link href={router.asPath} locale='zh' className={styles.link}>中国人</Link>
        </footer>
    );
};