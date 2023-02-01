import { Htag } from 'components/Htag/Htag';
import { ProfileImage } from 'components/ProfileImage/ProfileImage';
import styles from './ProfileInfo.module.css';


export const ProfileInfo = (): JSX.Element => {
    return (
        <div className={styles.profileInfo}>
            <ProfileImage />
            <Htag tag='xl' className={styles.username}>separatrix</Htag>
            <Htag tag='xs' className={styles.userSpecificies}>Designer, Moscow</Htag>
            <Htag tag='s' className={styles.userInfo}>
                {'Я создал это говно, хз, как оно вам. Я, кстати, сепаратриса :)'}
            </Htag>
        </div>
    );
};