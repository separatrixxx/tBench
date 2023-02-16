import styles from './ProfileInfo.module.css';
import { Htag } from 'components/Htag/Htag';
import { ProfileActionsBar } from 'components/ProfileActionsBar/ProfileActionsBar';
import { ProfileImage } from 'components/ProfileImage/ProfileImage';
import { ProfileModal } from 'components/ProfileModal/ProfileModal';
import { ProfileStatsBar } from 'components/ProfileStatsBar/ProfileStatsBar';
import { useContext, useState } from 'react';
import { UserSpecificies } from 'components/UserSpecificies/UserSpecificies';
import { BsCheck } from 'react-icons/bs';
import { AppContext } from 'context/app.context';
import cn from 'classnames';


export const ProfileInfo = (): JSX.Element => {
    const [username, setUsername] = useState<string>('separatrix');
    const [userInfo, setUserInfo] = useState<string>('Я создал это говно, хз, как оно вам. Я, кстати, сепаратриса :)');
    const [active, setActive] = useState<boolean>(false);
    const [type, setType] = useState<'username' | 'info' | 'image' | 'more_info' | 'verify'>('username');

    const context = useContext(AppContext);

    return (
        <div className={styles.profileInfo}>
            <ProfileImage active={active} setActive={setActive} setType={setType} />
            <div className={styles.usernameBlock}>
                <Htag tag='xl' className={cn(styles.username, {
                    [styles.darkThemeText]: context.theme === 'dark',
                })} onClick={() => {
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
            <Htag tag='s' className={cn(styles.userInfo, {
                [styles.darkThemeText]: context.theme === 'dark',
            })} onClick={() => {
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