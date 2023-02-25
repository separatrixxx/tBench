import { ChangeThemeProps } from './ChangeTheme.props';
import styles from './ChangeTheme.module.css';
import { BsSun, BsMoon } from "react-icons/bs";
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';
import { useScrollY } from 'hooks/useScrollY';
import { useResizeW } from 'hooks/useResize';

export const ChangeTheme = ({ setTheme }: ChangeThemeProps): JSX.Element => {
    const context = useContext(AppContext);

    const scrollPosition = useScrollY();
    const width = useResizeW();

    let opacity = 1;

    if (width < 1024) {
        opacity = opacity - scrollPosition / 100;
    } else {
        opacity = opacity - scrollPosition / 150;
        console.log(scrollPosition)
    }

    if (context.theme === 'light') {
        return (
            <span className={styles.changeTheme} style={{opacity: opacity}} onClick={() => {
                context.setTheme?.('dark');
                setTheme?.('dark');
                localStorage.setItem('theme', 'dark');
            }}>
                <BsSun />
            </span>
        );
    } else {
        return (
            <span className={cn(styles.changeTheme, styles.darkChangeTheme)} style={{opacity: opacity}} onClick={() => {
                context.setTheme?.('light');
                setTheme?.('light');
                localStorage.setItem('theme', 'light');
            }}>
                <BsMoon />
            </span>
        );
    }
};