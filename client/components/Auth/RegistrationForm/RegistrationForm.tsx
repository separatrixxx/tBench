import { RegistrationFormProps } from './RegistrationForm.props';
import styles from './RegistrationForm.module.css';
import { Input } from 'components/Inputs/Input/Input';
import { InputWithEye } from 'components/Inputs/InputWithEye/InputWithEye';
import { GenderChange } from '../GenderChange/GenderChange';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';
import { useState } from 'react';


export const RegistrationForm = ({ firstName, setFirstName, lastName, setLastName, username, setUsername,
	email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, gender, setGender, error }: RegistrationFormProps): JSX.Element => {
	const router = useRouter();

	const [pswdType, setPswdType] = useState<'password' | 'text'>('password');
	const [confPswdType, setConfPswdType] = useState<'password' | 'text'>('password');

	return (
		<div className={styles.registrationForm}>
			<Input type='text' text={setLocale(router.locale).first_name}
				value={firstName} error={error.errFirstName} eye={false}
				onChange={(e) => setFirstName(e.target.value)} />
			<Input type='text' text={setLocale(router.locale).last_name}
				value={lastName} error={error.errLastName} eye={false}
				onChange={(e) => setLastName(e.target.value)} />
			<Input type='text' text={setLocale(router.locale).username}
				value={username} error={error.errUsername} eye={false}
				onChange={(e) => setUsername(e.target.value)} />
			<Input type='email' text={setLocale(router.locale).email}
				value={email} error={error.errEmail} eye={false}
				onChange={(e) => setEmail(e.target.value)} />
			<InputWithEye onMouseEnter={() => setPswdType('text')}
				onMouseLeave={() => setPswdType('password')}>
				<Input type={pswdType} text={setLocale(router.locale).password}
					value={password} error={error.errPassword} eye={true}
					onChange={(e) => setPassword(e.target.value)} />
			</InputWithEye>
			<InputWithEye onMouseEnter={() => setConfPswdType('text')}
				onMouseLeave={() => setConfPswdType('password')}>
				<Input type={confPswdType} text={setLocale(router.locale).confirm_password}
					value={confirmPassword} error={error.errConfirmPassword} eye={true}
					onChange={(e) => setConfirmPassword(e.target.value)} />
			</InputWithEye>
			<GenderChange gender={gender} setGender={setGender} />
		</div>
	);
};