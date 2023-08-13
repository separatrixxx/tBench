import { ChangeThemeProps } from './ChangeTheme.props';
import styles from './ChangeTheme.module.css';
import Sun from './sun.svg';
import Moon from './moon.svg';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import { setTheme } from 'features/theme/themeSlice';
import cn from 'classnames';


export const ChangeTheme = ({ hiddenOptions }: ChangeThemeProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);
    const dispatch = useDispatch();
    

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

    if (theme === 'light') {
        Icon = Moon;
        newTheme = 'dark';
    } else {
        Icon = Sun;
        newTheme = 'light';
    }

    return (
        <motion.span className={cn(styles.changeTheme, {
            [styles.darkChangeTheme]: theme === 'dark',
        })} onClick={() => {
            dispatch(setTheme(newTheme));
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