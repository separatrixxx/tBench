import { BackAuthFormProps } from './BackAuthForm.props';
import styles from './BackAuthForm.module.css';
import BackArrow from './back_arrow.svg';


export const BackAuthForm = ({ setType, setFormType, errType, setError }: BackAuthFormProps): JSX.Element => {
	return (
		<span className={styles.arrowBack} onClick={() => {
			if (errType && setError) {
				setError(errType);
			}

			setType('login');
			setFormType('login');
		}}>
			<BackArrow />
		</span>
	);
};