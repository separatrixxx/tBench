import { ProfileStatItemProps } from './ProfileStatItem.props';
import styles from './ProfileStatItem.module.css';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const ProfileStatItem = ({ children }: ProfileStatItemProps): JSX.Element => {
    const context = useContext(AppContext);

    const items = ['#ff0000', '#00ff00', '#0000ff'];

    return (
        <div className={styles.statItems}>
            <div className={styles.items}>
                {items.map(i => (
                    <div key={i} className={cn(styles.item, {
                        [styles.darkThemeItem]: context.theme === 'dark',
                    })} style={{
                        background: i,
                    }} />
                ))}
            </div>
            {children}
        </div>
    );
};