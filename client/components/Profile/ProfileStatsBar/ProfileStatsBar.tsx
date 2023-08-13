import styles from './ProfileStatsBar.module.css';
import { ProfileStat } from '../ProfileStat/ProfileStat';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { setStat } from 'helpers/stat.helper';
import { ProfileStatItem } from '../ProfileStatItem/ProfileStatItem';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const ProfileStatsBar = (): JSX.Element => {
    const router = useRouter();

    const theme = useSelector((state: AppState) => state.theme.theme);

    return (
        <div className={cn(styles.profileStatsBar, {
            [styles.darkThemeProfileStatsBar]: theme === 'dark',
        })}>
            <ProfileStatItem>
                <ProfileStat stat={setStat(344100000)} text={setLocale(router.locale).followers} />
            </ProfileStatItem>
            <ProfileStatItem>
                <ProfileStat stat={setStat(37)} text={setLocale(router.locale).followings} />
            </ProfileStatItem>
            <ProfileStatItem>
                <ProfileStat stat={setStat(1452)} text={setLocale(router.locale).achievements} />
            </ProfileStatItem>
        </div>
    );
};