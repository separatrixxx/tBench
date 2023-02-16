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


export const ProfilePage = ({ theme }: ProfilePageProps): JSX.Element => {
    const [themeState, setThemeState] = useState<string>(theme);
    const setTheme = (newTheme: string) => {
        setThemeState(newTheme);
    };

    return (
        <AppContextProvider theme={theme}>
            <div className={cn(styles.profileWrapper, {
                [styles.darkThemeWrapper]: themeState === 'dark',
            })}>
                <BackButton link='/content' />
                <ExitButton />
                <ChangeTheme setTheme={setTheme} />
                <ProfileInfo />
                <UserContentList />
            </div>
        </AppContextProvider>
    );
};