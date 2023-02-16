import { useRouter } from 'next/router';
import styles from './ExitButton.module.css';
import { IoExitOutline } from "react-icons/io5";
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const ExitButton = (): JSX.Element => {
    const router = useRouter();
    const context = useContext(AppContext);

    return (
        <span className={cn(styles.exitButton, {
            [styles.darkThemeExitButton]: context.theme === 'dark',
        })} onClick={() => {
            router.push('/');
            localStorage.clear();
        }}>
            <IoExitOutline />
        </span>
    );
};