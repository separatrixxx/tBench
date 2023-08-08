import { Htag } from 'components/Common/Htag/Htag';
import styles from './AuthBoringTitle.module.css';
import React from 'react';


const AuthBoringTitle = (): JSX.Element => {
    const titles: string[] = ["Wow, it's real?!", 'separatrix', 'biggvladik', 'Web3.0?..', 'Boring Title',
        'Decentralized', 'Sorry for the bugs :(', 'Mother Russia', 'Follow the 🐇', 'Ладно ._.'];

    const pos = Math.floor(Math.random() * titles.length);

    return (
        <div className={styles.boringWrapper} style={{ left: -titles[pos].length * 3.5 + 10 }}>
            <Htag tag='l' className={styles.boringTitle}>{titles[pos]}</Htag>
        </div>
    );
};

export default React.memo(AuthBoringTitle);