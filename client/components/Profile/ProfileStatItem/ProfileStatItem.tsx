import { ProfileStatItemProps } from './ProfileStatItem.props';
import styles from './ProfileStatItem.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const ProfileStatItem = ({ children }: ProfileStatItemProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    const items = ['#ff0000', '#00ff00', '#0000ff'];

    return (
        <div className={styles.statItems}>
            <div className={styles.items}>
                {items.map(i => (
                    <div key={i} className={cn(styles.item, {
                        [styles.darkThemeItem]: theme === 'dark',
                    })} style={{
                        background: i,
                    }} />
                ))}
            </div>
            {children}
        </div>
    );
};