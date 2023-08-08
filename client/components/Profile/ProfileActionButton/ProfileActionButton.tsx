import { ProfileActionButtonProps } from './ProfileActionButton.props';
import styles from './ProfileActionButton.module.css';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const ProfileActionButton = ({ type, active, onClick }: ProfileActionButtonProps): JSX.Element => {
    const router = useRouter();

    const context = useContext(AppContext);

    if (type === 'follow') {
        if (active) {
            return (
                <button className={cn(styles.followButtonActive, {
                    [styles.darkThemeFollowButtonActive]: context.theme === 'dark',
                })} onClick={onClick}>
                    {setLocale(router.locale).following}
                </button>
            );
        } else {
            return (
                <button className={cn(styles.followButton, {
                    [styles.darkThemeFollowButton]: context.theme === 'dark',
                })} onClick={onClick}>
                    {setLocale(router.locale).follow}
                </button>
            );
        }
    } else {
        return (
            <button className={cn(styles.messageButton, {
                [styles.darkThemeMessageButton]: context.theme === 'dark',
            })} onClick={onClick}>
                {setLocale(router.locale).message}
            </button>
        );
    }
};