import { UserInfoProps } from './UserInfo.props';
import styles from './UserInfo.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { UserSpecificies } from 'components/User/UserSpecificies/UserSpecificies';
import Check from './check.svg';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import { ProfileStatsBar } from 'components/Profile/ProfileStatsBar/ProfileStatsBar';
import { ProfileActionsBar } from 'components/Profile/ProfileActionsBar/ProfileActionsBar';
import cn from 'classnames';


export const UserInfo = ({ active, setActive, setType, username, userInfo }: UserInfoProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    return (
        <div className={styles.profileInfo}>
            <div className={styles.usernameBlock}>
                <Htag tag='xl' className={cn(styles.username, {
                    [styles.darkThemeText]: theme === 'dark',
                    [styles.pulse]: !username,
                    [styles.darkThemePulse]: !username && theme === 'dark',
                })}>
                    {username}
                </Htag>
                <h1 className={styles.verify}>
                    <Check />
                </h1>
            </div>
            <UserSpecificies active={active} setActive={setActive} setType={setType} />
            <Htag tag='s' className={cn(styles.userInfo, {
                [styles.darkThemeText]: theme === 'dark',
            })}>{userInfo}</Htag>
            <ProfileStatsBar />
            <ProfileActionsBar />
        </div>
    );
};