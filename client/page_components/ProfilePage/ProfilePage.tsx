import { ProfilePageProps } from './ProfilePage.props';
import styles from './ProfilePage.module.css';
import { BackButton } from 'components/Buttons/BackButton/BackButton';
import { ProfileInfo } from 'components/Profile/ProfileInfo/ProfileInfo';
import { UserContentList } from 'components/User/UserContentList/UserContentList';
import { AppContextProvider } from 'context/app.context';
import { useState } from 'react';
import { ProfileCover } from 'components/Profile/ProfileCover/ProfileCover';
import { ProfileImage } from 'components/Profile/ProfileImage/ProfileImage';
import { ProfileModal } from 'components/Profile/ProfileModal/ProfileModal';
import { ProfileOptions } from 'components/Profile/ProfileOptions/ProfileOptions';
import { ContentModal } from 'components/Content/ContentModal/ContentModal';
import cn from 'classnames';


export const ProfilePage = ({ theme, user }: ProfilePageProps): JSX.Element => {
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
    const [postId, setPostId] = useState<number>(NaN);
    const [typeContent, setTypeContent] = useState<'post' | 'comments'>('post');

    return (
        <AppContextProvider theme={theme} user={user}>
            <div className={styles.profileWrapper}>
                <ProfileOptions setTheme={setTheme} />
                <ProfileCover active={active} setActive={setActive} setType={setType} />
                <ProfileImage active={active} setActive={setActive} setType={setType} />
                <div className={cn(styles.profileInfoWrapper, {
                    [styles.darkThemeProfileInfoWrapper]: themeState === 'dark',
                })}>
                    <BackButton link='/content' />
                    <ProfileInfo active={active} setActive={setActive} setType={setType} username={user?.username}
                        userInfo={userInfo} />
                    <UserContentList setType={setTypeContent} setActive={setActiveContent} setImage={setImage} setPostId={setPostId} />
                </div>
                <ProfileModal type={type} active={active} setActive={setActive} username={username} setUsername={setUsername}
                    userInfo={userInfo} setUserInfo={setUserInfo} />
                <ContentModal type={typeContent} active={activeContent} setActive={setActiveContent} image={image} postId={postId} />
            </div>
        </AppContextProvider>
    );
};