import { ChangeThemeProps } from './ChangeTheme.props';
import styles from './ChangeTheme.module.css';
import { BsSun, BsMoon } from "react-icons/bs";
import { useContext, useState } from 'react';
import { AppContext } from 'context/app.context';

export const ChangeTheme = ({ setTheme }: ChangeThemeProps): JSX.Element => {
    const context = useContext(AppContext);

    if (context.theme === 'light') {
        return (
            <span className={styles.changeTheme} onClick={() => {
                context.setTheme?.('dark');
                setTheme?.('dark');
                localStorage.setItem('theme', 'dark');
            }}>
                <BsSun />
            </span>
        );
    } else {
        return (
            <span className={styles.changeTheme} onClick={() => {
                context.setTheme?.('light');
                setTheme?.('light');
                localStorage.setItem('theme', 'light');
            }}>
                <BsMoon />
            </span>
        );
    }
};