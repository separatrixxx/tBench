import { ProfileActionButtonProps } from './ProfileActionButton.props';
import styles from './ProfileActionButton.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';

export const ProfileActionButton = ({ type, active, onClick }: ProfileActionButtonProps): JSX.Element => {
    const router = useRouter();
    
    if (type === 'follow') {
        if (active) {
            return (
                <button className={styles.followButtonActive} onClick={onClick}>
                    {setLocale(router.locale).following}
                </button>
            );
        } else {
            return (
                <button className={styles.followButton} onClick={onClick}>
                    {setLocale(router.locale).follow}
                </button>
            );
        }
    } else {
        return (
            <button className={styles.messageButton} onClick={onClick}>
                {setLocale(router.locale).message}
            </button>
        );
    }
};