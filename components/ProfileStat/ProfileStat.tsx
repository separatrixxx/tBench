import { ProfileStatProps } from './ProfileStat.props';
import styles from './ProfileStat.module.css';
import { Htag } from 'components/Htag/Htag';

export const ProfileStat = ({ stat, text }: ProfileStatProps): JSX.Element => {
    return (
        <div>
            <Htag tag='s' className={styles.profileStatText}>
                <span className={styles.stat}>{stat}</span> {text}
            </Htag>
        </div>
    );
};