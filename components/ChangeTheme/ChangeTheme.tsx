import { ChangeThemeProps } from './ChangeTheme.props';
import styles from './ChangeTheme.module.css';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import Sun from './sun.svg';
import Moon from './moon.svg';
import { motion } from 'framer-motion';
import cn from 'classnames';


export const ChangeTheme = ({ setTheme, hiddenOptions }: ChangeThemeProps): JSX.Element => {
    const context = useContext(AppContext);

    const variants = {
        visible: {
            marginTop: '0',
            pointerEvents: ("all" as React.CSSProperties["pointerEvents"]),
            opacity: 1,
        },
        hidden: {
            marginTop: '-40px',
            pointerEvents: ("none" as React.CSSProperties["pointerEvents"]),
            opacity: 0,
        }
    };

    let Icon;
    let newTheme: string;

    if (context.theme === 'light') {
        Icon = Moon;
        newTheme = 'dark';
    } else {
        Icon = Sun;
        newTheme = 'light';
    }

    return (
        <motion.span className={cn(styles.changeTheme, {
            [styles.darkChangeTheme]: context.theme === 'dark',
        })} onClick={() => {
            context.setTheme?.(newTheme);
            setTheme?.(newTheme);
            localStorage.setItem('theme', newTheme);
        }}
            variants={variants}
            initial={!hiddenOptions ? 'visible' : 'hidden'}
            transition={{ duration: 0.3 }}
            animate={!hiddenOptions ? 'visible' : 'hidden'}>
            <Icon />
        </motion.span>
    );
};