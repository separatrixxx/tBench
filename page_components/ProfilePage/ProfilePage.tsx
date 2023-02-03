import { BackButton } from 'components/BackButton/BackButton';
import { ExitButton } from 'components/ExitButton/ExitButton';
import { ProfileInfo } from 'components/ProfileInfo/ProfileInfo';
import { UserContentList } from 'components/UserContentList/UserContentList';
import styles from './ProfilePage.module.css';

export const ProfilePage = (): JSX.Element => {     
	return (
        <div className={styles.profileWrapper}>
            <BackButton link='/content' />
            <ExitButton />
            <ProfileInfo />
            <UserContentList />
        </div>
    );
};