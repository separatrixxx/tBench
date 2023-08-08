import { ProfileInfoProps } from './ProfileInfo.props';
import styles from './ProfileInfo.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { ProfileActionsBar } from '../ProfileActionsBar/ProfileActionsBar';
import { ProfileStatsBar } from '../ProfileStatsBar/ProfileStatsBar';
import { useContext } from 'react';
import { UserSpecificies } from 'components/User/UserSpecificies/UserSpecificies';
import { AppContext } from 'context/app.context';
import Check from './check.svg';
import cn from 'classnames';


export const ProfileInfo = ({ active, setActive, setType, username, userInfo }: ProfileInfoProps): JSX.Element => {
    const context = useContext(AppContext);

    return (
        <div className={styles.profileInfo}>
            <div className={styles.usernameBlock}>
                <Htag tag='xl' className={cn(styles.username, {
                    [styles.darkThemeText]: context.theme === 'dark',
                    [styles.pulse]: !username,
                    [styles.darkThemePulse]: !username && context.theme === 'dark',
                })} onClick={() => {
                    setType('username');
                    setActive(!active);
                }}>
                    {username}
                </Htag>
                <h1 className={styles.verify} onClick={() => {
                    setType('verify');
                    setActive(!active);
                }}>
                    <Check />
                </h1>
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
        </div>
    );
};