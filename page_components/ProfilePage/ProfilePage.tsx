import { BackButton } from 'components/BackButton/BackButton';
import { ExitButton } from 'components/ExitButton/ExitButton';
import { ProfileInfo } from 'components/ProfileInfo/ProfileInfo';
import styles from './ProfilePage.module.css';

export const ProfilePage = (): JSX.Element => {     
	return (
        <>
            <BackButton link='/content' />
            <ExitButton />
            <ProfileInfo />
        </>
    );
};