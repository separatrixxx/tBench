import styles from './InputContent.module.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useResizeW } from 'hooks/useResize';
import Search from './search.svg';
import { searchUser } from 'helpers/search_user.helper';
import { User } from 'interfaces/user.interface';
import { SearchUserItem } from 'components/User/SearchUserItem/SearchUserItem';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const InputContent = (): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    const width = useResizeW();

    const [searchActive, setSearchActive] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [flag, setFlag] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => { setFlag(false); });
    });

    const variants = {
        visible: {
            height: 'fit-content',
        },
        hidden: {
            height: '0px',
            border: 'none',
        }
    };

    let radius = '16.5px';

    if (width <= 580) {
        radius = '14px';
    }

    const variantsInput = {
        visible: {
            borderRadius: radius + ' ' + radius + ' 0 0',
        },
        hidden: {
            borderRadius: radius + ' ' + radius + ' ' + radius + ' ' + radius,
        }
    };

    const handleKeyDown = (searchValue: any) => {
        if (+searchValue !== 0) {
            setFlag(true);
        } else {
            setFlag(false);
        }
    };

    const [users, setUsers] = useState<User[]>();

    return (
        <label className={styles.labelContent}>
            <span className={cn(styles.iconContent, {
                [styles.iconContentActive]: searchActive,
            })}>
                <Search />
            </span>
            <motion.input className={cn(styles.inputContent, {
                [styles.darkThemeInputContent]: theme === 'dark',
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
                onChange={(e) => {
                    setSearch(e.target.value);
                    handleKeyDown(e.target.value);
                    searchUser(e.target.value, setUsers);
                }}
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
                {users ? users.map(u => (
                    <SearchUserItem key={u.username} firstName={u.firstName} lastName={u.lastName} username={u.username} />
                )) : <></>}
            </motion.div>
        </label>
    );
};
