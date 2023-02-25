import { ProfilePageProps } from './ProfilePage.props';
import styles from './ProfilePage.module.css';
import { BackButton } from 'components/BackButton/BackButton';
import { ChangeTheme } from 'components/ChangeTheme/ChangeTheme';
import { ExitButton } from 'components/ExitButton/ExitButton';
import { ProfileInfo } from 'components/ProfileInfo/ProfileInfo';
import { UserContentList } from 'components/UserContentList/UserContentList';
import { AppContextProvider } from 'context/app.context';
import { useState } from 'react';
import cn from 'classnames';
import { ProfileCover } from 'components/ProfileCover/ProfileCover';
import { ProfileImage } from 'components/ProfileImage/ProfileImage';
import { ProfileModal } from 'components/ProfileModal/ProfileModal';


export const ProfilePage = ({ theme }: ProfilePageProps): JSX.Element => {
    const [themeState, setThemeState] = useState<string>(theme);
    const setTheme = (newTheme: string) => {
        setThemeState(newTheme);
    };

    const [active, setActive] = useState<boolean>(false);
    const [type, setType] = useState<'username' | 'info' | 'image' | 'more_info' | 'verify'>('username');

    return (
        <AppContextProvider theme={theme}>
            <div className={styles.profileWrapper}>
                <BackButton link='/content' />
                <ExitButton />
                <ChangeTheme setTheme={setTheme} />
                <ProfileCover active={active} setActive={setActive} setType={setType}  />
                <ProfileImage active={active} setActive={setActive} setType={setType} />
                <div className={cn(styles.profileInfoWrapper, {
                    [styles.darkThemeProfileInfoWrapper]: themeState === 'dark',
                })}>
                    <ProfileInfo />
                    <UserContentList />
                </div>
                <ProfileModal type={type} active={active} setActive={setActive} />
            </div>
        </AppContextProvider>
    );
};