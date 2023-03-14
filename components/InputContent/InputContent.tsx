import styles from './InputContent.module.css';
import { BiSearch } from "react-icons/bi";
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const InputContent = (): JSX.Element => {
    const context = useContext(AppContext);

    const [searchActive, setSearchActive] = useState<boolean>(false);

    return (
        <label className={styles.labelContent}>
            <span className={cn(styles.iconContent, {
                [styles.iconContentActive]: searchActive,
            })}>
                <BiSearch />
            </span>
            <input className={cn(styles.inputContent, {
                [styles.darkThemeInputContent]: context.theme === 'dark',
            })}
                onMouseOver={() => setSearchActive(true)}
                onMouseLeave={() => setSearchActive(false)}
                type="text"
                name="search"
                aria-label="search" />
            <div className={styles.searchList}>

            </div>
        </label>
    );
};