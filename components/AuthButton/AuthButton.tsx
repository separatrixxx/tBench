import { setLocale } from 'helpers/helpers_locale';
import { AuthButtonProps } from './AuthButton.props';
import styles from './AuthButton.module.css';
import { LoadingDots } from 'components/LoadingDots/LoadingDots';
import { useRouter } from 'next/router';

export const AuthButton = ({ loading, type, onClick }: AuthButtonProps): JSX.Element => {
    const router = useRouter();
    
	if (!loading) {
        if (type === 'login') {
            return (
                <button className={styles.button} onClick={onClick}>{setLocale(router.locale).sign_in}</button>
            );
        } else {
            return (
                <button className={styles.button} onClick={onClick}>{setLocale(router.locale).sign_up}</button>
            );
        }
    } else {
        return (
            <button className={styles.button_loading}>
                <LoadingDots />
            </button>
        );
    }
};