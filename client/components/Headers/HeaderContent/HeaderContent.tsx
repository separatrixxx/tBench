import { HeaderContentProps } from './HeaderContent.props';
import styles from './HeaderContent.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollY } from 'hooks/useScrollY';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';



export const HeaderContent = ({ children, position, className }: HeaderContentProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    const [lastScroll, setLastScroll] = useState<number>(0);
    const [flag, setFlag] = useState<boolean>(false);

    const scrollPosition = useScrollY();

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

    return (
        <motion.header className={cn(className, styles.headerContent, {
            [styles.darkThemeHeaderContent]: theme === 'dark',
            [styles.headerPositionRight]: position === 'right',
            [styles.headerPositionLeft]: position === 'left',
        })}
            variants={variants}
            initial={flag ? 'hidden' : 'visible'}
            transition={{ duration: 0.3 }}
            animate={flag ? 'hidden' : 'visible'}>
            {children}
        </motion.header>
    );
};