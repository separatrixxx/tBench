import { BackAuthFormProps } from './BackAuthForm.props';
import styles from './BackAuthForm.module.css';
import BackArrow from './back_arrow.svg';


export const BackAuthForm = ({ formType, setAuthState }: BackAuthFormProps): JSX.Element => {
	return (
		<span className={styles.arrowBack} onClick={() => {
			if (formType === 'forgot') {
				setAuthState('login');
			} else {
				setAuthState(formType);
			}
		}}>
			<BackArrow />
		</span>
	);
};