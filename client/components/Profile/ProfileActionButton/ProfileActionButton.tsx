import { ProfileActionButtonProps } from './ProfileActionButton.props';
import styles from './ProfileActionButton.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const ProfileActionButton = ({ type, active, onClick }: ProfileActionButtonProps): JSX.Element => {
    const router = useRouter();

    const theme = useSelector((state: AppState) => state.theme.theme);

    if (type === 'follow') {
        if (active) {
            return (
                <button className={cn(styles.followButtonActive, {
                    [styles.darkThemeFollowButtonActive]: theme === 'dark',
                })} onClick={onClick}>
                    {setLocale(router.locale).following}
                </button>
            );
        } else {
            return (
                <button className={cn(styles.followButton, {
                    [styles.darkThemeFollowButton]: theme === 'dark',
                })} onClick={onClick}>
                    {setLocale(router.locale).follow}
                </button>
            );
        }
    } else {
        return (
            <button className={cn(styles.messageButton, {
                [styles.darkThemeMessageButton]: theme === 'dark',
            })} onClick={onClick}>
                {setLocale(router.locale).message}
            </button>
        );
    }
};