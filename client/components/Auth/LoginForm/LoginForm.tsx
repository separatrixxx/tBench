import { LoginFormProps } from './LoginForm.props';
import styles from './LoginForm.module.css';
import { Input } from 'components/Inputs/Input/Input';
import { InputWithEye } from 'components/Inputs/InputWithEye/InputWithEye';
import { setLocale } from 'helpers/locale.helper';
import { useRouter } from 'next/router';


export const LoginForm = ({ email, setEmail, password, setPassword, pswdType, setPswdType, error }: LoginFormProps): JSX.Element => {
	const router = useRouter();

	return (
		<div className={styles.loginForm}>
			<Input type='email' text={setLocale(router.locale).email}
				value={email} error={error.errEmail} eye={false}
				onChange={(e) => setEmail(e.target.value)} />
			<InputWithEye onMouseEnter={() => setPswdType('text')}
				onMouseLeave={() => setPswdType('password')}>
				<Input type={pswdType} text={setLocale(router.locale).password}
					value={password} error={error.errPassword} eye={true}
					onChange={(e) => setPassword(e.target.value)} />
			</InputWithEye>
		</div>
	);
};