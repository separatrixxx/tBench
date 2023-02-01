import styles from './InputContent.module.css';
import { BiSearch } from "react-icons/bi";
import { useState } from 'react';
import cn from 'classnames';

export const InputContent = (): JSX.Element => {
    const [searchActive, setSearchActive] = useState<boolean>(false);

    return (
        <label className={styles.labelContent}>
            <span className={cn(styles.iconContent, {
                [styles.iconContentActive]: searchActive,
            })}>
                <BiSearch />
            </span>
            <input className={styles.inputContent}
                onMouseOver={() => setSearchActive(true)}
                onMouseLeave={() => setSearchActive(false)}
                type="text"
                name="search" />
        </label>
    );
};