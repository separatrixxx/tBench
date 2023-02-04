import styles from './ProfileInfo.module.css';
import { Htag } from 'components/Htag/Htag';
import { ProfileActionsBar } from 'components/ProfileActionsBar/ProfileActionsBar';
import { ProfileImage } from 'components/ProfileImage/ProfileImage';
import { ProfileModal } from 'components/ProfileModal/ProfileModal';
import { ProfileStatsBar } from 'components/ProfileStatsBar/ProfileStatsBar';
import { useState } from 'react';
import { UserSpecificies } from 'components/UserSpecificies/UserSpecificies';
import { BsCheck } from 'react-icons/bs';


export const ProfileInfo = (): JSX.Element => {
    const [username, setUsername] = useState<string>('separatrix');
    const [userInfo, setUserInfo] = useState<string>('Я создал это говно, хз, как оно вам. Я, кстати, сепаратриса :)');
    const [active, setActive] = useState<boolean>(false);
    const [type, setType] = useState<'username' | 'info' | 'image' | 'more_info' | 'verify'>('username');
    
    return (
        <div className={styles.profileInfo}>
            <ProfileImage active={active} setActive={setActive} setType={setType} />
            <div className={styles.usernameBlock}>
                <Htag tag='xl' className={styles.username} onClick={() => {
                    setType('username');
                    setActive(!active);
                }}>
                    {username}
                </Htag>
                <Htag tag='xl' className={styles.verify} onClick={() => {
                    setType('verify');
                    setActive(!active);
                }}>
                    <BsCheck />
                </Htag>
            </div>
            <UserSpecificies active={active} setActive={setActive} setType={setType} />
            <Htag tag='s' className={styles.userInfo} onClick={() => {
                setType('info');
                setActive(!active);
            }}>
                {userInfo}
            </Htag>
            <ProfileStatsBar />
            <ProfileActionsBar />
            <ProfileModal type={type} username={username} setUsername={setUsername} userInfo={userInfo}
                setUserInfo={setUserInfo} active={active} setActive={setActive} />
        </div>
    );
};