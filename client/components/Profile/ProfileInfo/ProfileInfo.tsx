import { ProfileInfoProps } from './ProfileInfo.props';
import styles from './ProfileInfo.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { ProfileStatsBar } from '../ProfileStatsBar/ProfileStatsBar';
import { UserSpecificies } from 'components/User/UserSpecificies/UserSpecificies';
import Check from './check.svg';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const ProfileInfo = ({ active, setActive, setType, username, userInfo }: ProfileInfoProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    return (
        <div className={styles.profileInfo}>
            <div className={styles.usernameBlock}>
                <Htag tag='xl' className={cn(styles.username, {
                    [styles.darkThemeText]: theme === 'dark',
                    [styles.pulse]: !username,
                    [styles.darkThemePulse]: !username && theme === 'dark',
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
                [styles.darkThemeText]: theme === 'dark',
            })} onClick={() => {
                setType('info');
                setActive(!active);
            }}>
                {userInfo}
            </Htag>
            <ProfileStatsBar />
        </div>
    );
};