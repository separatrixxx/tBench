import styles from './InputContent.module.css';
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import { motion } from 'framer-motion';
import cn from 'classnames';


export const InputContent = (): JSX.Element => {
    const context = useContext(AppContext);

    const [searchActive, setSearchActive] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => { setFlag(false); });
    });

    const variants = {
        visible: {
            height: '100px',
        },
        hidden: {
            height: '0px',
            border: 'none',
        }
    };

    const variantsInput = {
        visible: {
            borderRadius: '20px 20px 0 0',
        },
        hidden: {
            borderRadius: '20px 20px 20px 20px',
        }
    };

    const handleKeyDown = (e: any) => {
        if (e.key == 'Enter') {
            if (+search !== 0) {
                setFlag(true);
            } else {
                setFlag(false);
            }
        }
    };

    return (
        <label className={styles.labelContent}>
            <span className={cn(styles.iconContent, {
                [styles.iconContentActive]: searchActive,
            })}>
                <BiSearch />
            </span>
            <motion.input className={cn(styles.inputContent, {
                [styles.darkThemeInputContent]: context.theme === 'dark',
            })} variants={variantsInput}
                initial={flag ? 'visible' : 'hidden'}
                transition={{ duration: 0.05 }}
                animate={flag ? 'visible' : 'hidden'}
                onMouseOver={() => setSearchActive(true)}
                onMouseLeave={() => setSearchActive(false)}
                type="text"
                name="search"
                aria-label="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                onClick={() => {
                    if (+search !== 0) {
                        setFlag(true);
                    }
                }} />
            <motion.div className={styles.searchList}
                variants={variants}
                initial={flag ? 'visible' : 'hidden'}
                transition={{ duration: 0.3 }}
                animate={flag ? 'visible' : 'hidden'}>
            </motion.div>
        </label>
    );
};