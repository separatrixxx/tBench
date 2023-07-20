import { ProfileStatProps } from './ProfileStat.props';
import styles from './ProfileStat.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const ProfileStat = ({ stat, text }: ProfileStatProps): JSX.Element => {
    const context = useContext(AppContext);

    return (
        <Htag tag='s' className={cn(styles.profileStatText, {
            [styles.darkThemeProfileStatText]: context.theme === 'dark',
        })}>
            <span className={styles.stat}>{stat}</span> {text}
        </Htag>
    );
};