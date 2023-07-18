import styles from './ProfileActionsBar.module.css';
import { ProfileActionButton } from 'components/ProfileActionButton/ProfileActionButton';
import { useRouter } from 'next/router';
import { useState } from 'react';


export const ProfileActionsBar = (): JSX.Element => {
    const router = useRouter();

    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={styles.profileActionsBar}>
            <ProfileActionButton type='follow' active={active} onClick={() => setActive(!active)} />
            <ProfileActionButton type='message' onClick={() => router.push('/message')} />
        </div>
    );
};