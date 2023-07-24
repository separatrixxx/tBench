import { ForgotFormProps } from './ForgotForm.props';
import styles from './ForgotForm.module.css';
import { Input } from 'components/Inputs/Input/Input';
import { InputWithEye } from 'components/Inputs/InputWithEye/InputWithEye';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { useState } from 'react';


export const ForgotForm = ({ email, setEmail, password, setPassword, error }: ForgotFormProps): JSX.Element => {
	const router = useRouter();

	const [pswdType, setPswdType] = useState<'password' | 'text'>('password');

	return (
		<div className={styles.forgotForm}>
			<Input type='email' text={setLocale(router.locale).email}
				value={email} error={error.errEmail} eye={false}
				onChange={(e) => setEmail(e.target.value)} />
			<InputWithEye onMouseEnter={() => setPswdType('text')}
				onMouseLeave={() => setPswdType('password')}>
				<Input type={pswdType} text={setLocale(router.locale).new_password}
					value={password} error={error.errPassword} eye={true}
					onChange={(e) => setPassword(e.target.value)} />
			</InputWithEye>
		</div>
	);
};