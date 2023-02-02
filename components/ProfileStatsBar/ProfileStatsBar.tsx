import styles from './ProfileStatsBar.module.css';
import { ProfileStat } from 'components/ProfileStat/ProfileStat';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { setStat } from 'helpers/stat.helper';

export const ProfileStatsBar = (): JSX.Element => {
    const router = useRouter();
    return (
        <div className={styles.profileStatsBar}>
            <ProfileStat stat={setStat(3100000)} text={setLocale(router.locale).followers} />
            <ProfileStat stat={setStat(37)} text={setLocale(router.locale).followings} />
            <ProfileStat stat={setStat(1452)} text={setLocale(router.locale).achievements} />
        </div>
    );
};