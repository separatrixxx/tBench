import { ConfirmEmailProps } from './ConfirmEmaIl.props';
import styles from './ConfirmEmail.module.css';
import { useState } from 'react';
import { forgotPassword, loginUser, registerUser } from 'helpers/auth.helper';


export const ConfirmEmail = ({ formType, code, setAuthState, router, data, newPassword }: ConfirmEmailProps): JSX.Element => {
	const [confCode, setConfCode] = useState<string>('');

	let l = '';

	const handleKeyDown = (e: any) => {
		if (e.target.value >= 'a' && e.key <= 'z'
			|| e.key >= 'A' && e.key <= 'A'
			|| e.key >= '0' && e.key <= '9') {
			l = e.key;
		}
	};

	const confirm = (e: any) => {
		if (confCode.length < 6 && (e.target.value >= 'a' && e.key <= 'z'
		|| e.key >= 'A' && e.key <= 'A'
		|| e.key >= '0' && e.key <= '9')) {
			setConfCode(e.target.value);
			
			if (confCode.length === 5) {
				console.log(code);
				console.log(confCode + l);
				if (confCode + l === code) {
					if (formType === 'login') {
						loginUser(data, router);
						setAuthState('login');
					} else if (formType === 'registration') {
						registerUser(data, router);
						setAuthState('registration');
					} else {
						forgotPassword(data, newPassword, router);
						setAuthState('login');
					}
				} else {
					setConfCode('');
				}
			}
		}
	};

	return (
		<input className={styles.confirmEmail}
			value={confCode}
			onChange={confirm}
			onKeyDown={handleKeyDown}
			type="text"
			name="confirm email"
			aria-label="confirm email" />
	);
};