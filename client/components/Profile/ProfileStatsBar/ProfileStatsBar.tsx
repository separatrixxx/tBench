import styles from './ProfileStatsBar.module.css';
import { ProfileStat } from '../ProfileStat/ProfileStat';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { setStat } from 'helpers/stat.helper';
import { ProfileStatItem } from '../ProfileStatItem/ProfileStatItem';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const ProfileStatsBar = (): JSX.Element => {
    const router = useRouter();

    const context = useContext(AppContext);

    return (
        <div className={cn(styles.profileStatsBar, {
            [styles.darkThemeProfileStatsBar]: context.theme === 'dark',
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