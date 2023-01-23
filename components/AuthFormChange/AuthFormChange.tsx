import { AuthFormChangeProps } from './AuthFormChange.props';
import styles from './AuthFormChange.module.css';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/helpers_locale';

export const AuthFormChange = ({ type, onClick }: AuthFormChangeProps): JSX.Element => {	
	if (type === 'login') {
		return (
			<div className={styles.formChange}>
				<Htag tag='m'>{setLocale().have_account + ' '}
					<span className={styles.signSpan} onClick={onClick}>{setLocale().sign_up}</span>
				</Htag>
			</div>
		);
	} else {
		return (
			<div className={styles.formChange}>
				<Htag tag='m'>{setLocale().dont_have_account + ' '}
					<span className={styles.signSpan} onClick={onClick}>{setLocale().sign_in}</span>
				</Htag>
			</div>
		);
	}
};