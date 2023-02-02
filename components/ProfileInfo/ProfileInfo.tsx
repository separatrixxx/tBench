import { Htag } from 'components/Htag/Htag';
import { ProfileActionsBar } from 'components/ProfileActionsBar/ProfileActionsBar';
import { ProfileImage } from 'components/ProfileImage/ProfileImage';
import { ProfileStatsBar } from 'components/ProfileStatsBar/ProfileStatsBar';
import styles from './ProfileInfo.module.css';


export const ProfileInfo = (): JSX.Element => {
    return (
        <div className={styles.profileInfo}>
            <ProfileImage />
            <Htag tag='xl' className={styles.username}>separatrix</Htag>
            <Htag tag='xs' className={styles.userSpecificies}>
                <span className={styles.userSpeciality}>Designer</span>, Moscow
            </Htag>
            <Htag tag='s' className={styles.userInfo}>
                {'Я создал это говно, хз, как оно вам. Я, кстати, сепаратриса :)'}
            </Htag>
            <ProfileStatsBar />
            <ProfileActionsBar />
        </div>
    );
};