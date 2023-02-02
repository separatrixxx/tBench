import { ProfileStatItemProps } from './ProfileStatItem.props';
import styles from './ProfileStatItem.module.css';

export const ProfileStatItem = ({ children }: ProfileStatItemProps): JSX.Element => {
    const items = ['#ff0000', '#00ff00', '#0000ff'];

    return (
        <div className={styles.statItems}>
            <div className={styles.items}>
                {items.map(i => (
                    <div key={i} className={styles.item} style={{
                        background: i,
                    }} />
                ))}
            </div>
            {children}
        </div>
    );
};