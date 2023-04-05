import styles from './Header.module.css';
import { Htag } from 'components/Htag/Htag';
import Link from 'next/link';
import { useState } from 'react';
import Logo from './logo_icon.svg';
import { useScrollY } from 'hooks/useScrollY';
import { useResizeW } from 'hooks/useResize';
import { motion } from 'framer-motion';
import { BurgerMenu } from 'components/BurgerMenu/BurgenMenu';


export const Header = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [lastScroll, setLastScroll] = useState<number>(0);
    const [flag, setFlag] = useState<boolean>(false);

    const scrollPosition = useScrollY();
    const width = useResizeW();

    if (scrollPosition - lastScroll >= 200 && scrollPosition > lastScroll) {
        setFlag(true);
        setLastScroll(scrollPosition);
    } else if (scrollPosition < lastScroll) {
        setFlag(false);
        setLastScroll(scrollPosition);
    }

    const variants = {
        visible: {
            transform: 'translate(0%, 0%)',
        },
        hidden: {
            transform: 'translate(0%, -100%)',
        }
    };

    const variantsBlock = {
        visible: {
            height: 'fit-content',
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        },
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
            }
        }
    };

    if (width > 1024) {
        variantsBlock.visible.transition.duration = 0;
        variantsBlock.hidden.transition.duration = 0;
    }

    return (
        <motion.header className={styles.header}
            variants={variants}
            initial={flag ? 'hidden' : 'visible'}
            transition={{ duration: 0.3 }}
            animate={flag ? 'hidden' : 'visible'}>
            <Link href='/' className={styles.logo}><Logo /></Link>
            <motion.div className={styles.headerBlock}
                variants={variantsBlock}
                initial={open || width > 1024 ? 'visible' : 'hidden'}
                animate={open || width > 1024 ? 'visible' : 'hidden'}>
                <Htag tag='xs' className={styles.text}>About</Htag>
                <Htag tag='xs' className={styles.text}>Ecosystem</Htag>
                <Htag tag='xs' className={styles.text}>Explore</Htag>
            </motion.div>
            <BurgerMenu open={open} setOpen={setOpen} />
        </motion.header>
    );
};