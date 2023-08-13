import { ProfileStatProps } from './ProfileStat.props';
import styles from './ProfileStat.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const ProfileStat = ({ stat, text }: ProfileStatProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    return (
        <Htag tag='s' className={cn(styles.profileStatText, {
            [styles.darkThemeProfileStatText]: theme === 'dark',
        })}>
            <span className={styles.stat}>{stat}</span> {text}
        </Htag>
    );
};