import styles from './ExitButton.module.css';
import { useRouter } from 'next/router';
import { IoExitOutline } from "react-icons/io5";
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';
import { useResizeW } from 'hooks/useResize';
import { useScrollY } from 'hooks/useScrollY';

export const ExitButton = (): JSX.Element => {
    const router = useRouter();
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

    return (
        <span className={cn(styles.exitButton, {
            [styles.darkThemeExitButton]: context.theme === 'dark',
        })} style={{opacity: opacity}} onClick={() => {
            router.push('/');
            localStorage.clear();
        }}>
            <IoExitOutline />
        </span>
    );
};