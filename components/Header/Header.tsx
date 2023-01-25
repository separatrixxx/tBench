import Link from 'next/link';
import styles from './Header.module.css';
import Logo from './logo_icon.svg';

export const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}><Logo /></Link>
        </header>
    );
};