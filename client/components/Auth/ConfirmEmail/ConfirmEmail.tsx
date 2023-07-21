import { ConfirmEmailProps } from './ConfirmEmaIl.props';
import styles from './confirmEmail.module.css';
import { confirmEmail } from 'helpers/confirm_email.helper';
import { useState } from 'react';
import cn from 'classnames';


export const ConfirmEmail = ({ formType, confCode, setConfCode, authData, router, newEmail, newPassword, setAuthState }: ConfirmEmailProps): JSX.Element => {
	const [isError, setIsError] = useState<boolean>(false);

	let l = '';

	const handleKeyDown = (e: any) => {
		if (e.target.value >= 'a' && e.key <= 'z'
			|| e.key >= 'A' && e.key <= 'A'
			|| e.key >= '0' && e.key <= '9') {
			l = e.key;
		}
	};

	return (
		<input className={cn(styles.confirmEmail, {
			[styles.errorConfirmEmail]: isError,
		})}
			value={confCode}
			onChange={(e) => {
				setConfCode(e.target.value);
				if (confCode.length === 5) {
					confirmEmail(confCode + l, setIsError, formType, authData, router, newEmail, newPassword, setAuthState);
					setConfCode('');
				}
			}}
			onKeyDown={handleKeyDown}
			type="text"
			name="confirm email"
			aria-label="confirm email" />
	);
};