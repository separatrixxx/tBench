import { ProfileActionButton } from 'components/ProfileActionButton/ProfileActionButton';
import { useState } from 'react';
import styles from './ProfileActionsBar.module.css';


export const ProfileActionsBar = (): JSX.Element => {    
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={styles.profileActionsBar}>
            <ProfileActionButton type='follow' active={active} onClick={() => setActive(!active)} />
            <ProfileActionButton type='message' onClick={() => {}} />
        </div>
    );
};