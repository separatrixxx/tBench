import { Htag } from 'components/Htag/Htag';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';
import Logo from './logo_icon.svg';
import Burger from './burger.svg';
import Close from './close.svg';
import cn from 'classnames';

export const Header = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}><Logo /></Link>
            <div className={cn(styles.headerBlock, {
						[styles.openBlock]: open,
					})}>
                <Htag tag='xs' className={styles.text}>About</Htag>
                <Htag tag='xs' className={styles.text}>Ecosystem</Htag>
                <Htag tag='xs' className={styles.text}>Explore</Htag>
            </div>
            <span className={cn(styles.burger, {
						[styles.openBlock]: !open,
                        [styles.closeBlock]: open,
				    })} onClick={() => setOpen(!open)}>
                      <Burger />
            </span>
            <span className={cn(styles.close, {
						[styles.openBlock]: open,
                        [styles.closeBlock]: !open,
				    })} onClick={() => setOpen(!open)}>
                      <Close />
            </span>
        </header>
    );
};