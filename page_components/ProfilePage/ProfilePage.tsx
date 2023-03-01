import { ProfilePageProps } from './ProfilePage.props';
import styles from './ProfilePage.module.css';
import { BackButton } from 'components/BackButton/BackButton';
import { ProfileInfo } from 'components/ProfileInfo/ProfileInfo';
import { UserContentList } from 'components/UserContentList/UserContentList';
import { AppContextProvider } from 'context/app.context';
import { useState } from 'react';
import cn from 'classnames';
import { ProfileCover } from 'components/ProfileCover/ProfileCover';
import { ProfileImage } from 'components/ProfileImage/ProfileImage';
import { ProfileModal } from 'components/ProfileModal/ProfileModal';
import { ProfileOptions } from 'components/ProfileOptions/ProfileOptions';
import { ContentModal } from 'components/ContentModal/ContentModal';


export const ProfilePage = ({ theme }: ProfilePageProps): JSX.Element => {
    const [themeState, setThemeState] = useState<string>(theme);
    const setTheme = (newTheme: string) => {
        setThemeState(newTheme);
    };

    const [active, setActive] = useState<boolean>(false);
    const [activeContent, setActiveContent] = useState<boolean>(false);
    const [type, setType] = useState<'username' | 'info' | 'image' | 'more_info' | 'verify'>('username');
    const [username, setUsername] = useState<string>('separatrix');
    const [userInfo, setUserInfo] = useState<string>('Я создал это говно, хз, как оно вам. Я, кстати, сепаратриса :)');
    const [image, setImage] = useState<string>('');

    return (
        <AppContextProvider theme={theme}>
            <div className={styles.profileWrapper}>
                <BackButton link='/content' />
                <ProfileOptions setTheme={setTheme} />
                <ProfileCover active={active} setActive={setActive} setType={setType} />
                <ProfileImage active={active} setActive={setActive} setType={setType} />
                <div className={cn(styles.profileInfoWrapper, {
                    [styles.darkThemeProfileInfoWrapper]: themeState === 'dark',
                })}>
                    <ProfileInfo active={active} setActive={setActive} setType={setType} username={username}
                        userInfo={userInfo} />
                    <UserContentList setActive={setActiveContent} setImage={setImage} />
                </div>
                <ProfileModal type={type} active={active} setActive={setActive} username={username} setUsername={setUsername}
                    userInfo={userInfo} setUserInfo={setUserInfo} />
                <ContentModal active={activeContent} setActive={setActiveContent} image={image} />
            </div>
        </AppContextProvider>
    );
};