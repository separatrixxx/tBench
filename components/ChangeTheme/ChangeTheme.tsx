import { ChangeThemeProps } from './ChangeTheme.props';
import styles from './ChangeTheme.module.css';
import { BsSun, BsMoon } from "react-icons/bs";
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';
import { motion } from 'framer-motion';


export const ChangeTheme = ({ setTheme, hiddenOptions }: ChangeThemeProps): JSX.Element => {
    const context = useContext(AppContext);

    const variants = {
		visible: {
            marginTop: '0',
            pointerEvents: 'all' as 'all',
            opacity: 1,
		},
		hidden: {
            marginTop: '-40px',
            pointerEvents: 'none' as 'none',
            opacity: 0,
        }
	};

    let Icon;
    let newTheme: string;

    if (context.theme === 'light') {
        Icon = BsMoon;
        newTheme = 'dark';
    } else {
        Icon = BsSun;
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