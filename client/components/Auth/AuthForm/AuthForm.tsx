import styles from './AuthForm.module.css';
import { useState } from 'react';
import { AuthButton } from '../AuthButton/AuthButton';
import { AuthDataInterface, CheckAuthInterface } from 'interfaces/check_auth.interface';
import { useRouter } from 'next/router';
import { AuthFormChange } from '../AuthFormChange/AuthFormChange';
import { setLocale } from 'helpers/locale.helper';
import { ConfirmEmail } from '../ConfirmEmail/ConfirmEmail';
import { Htag } from 'components/Common/Htag/Htag';
import { emailSend, timerStart } from 'helpers/confirm_email.helper';
import { BackAuthForm } from '../BackAuthForm/BackAuthForm';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import { ForgotForm } from '../ForgotForm/ForgotForm';
import { checkAuth } from 'helpers/check_auth.helper';
import cn from 'classnames';
import { AuthBoringTitle } from '../AuthBoringTitle/AuthBoringTitle';


export const AuthForm = (): JSX.Element => {
	const router = useRouter();

	const [type, setType] = useState<'login' | 'registration' | 'forgot'>('login');
	const [formType, setFormType] = useState<'login' | 'registration' | 'forgot' | 'confirm'>('login');
	const [secondsCount, setSecondsCount] = useState<number>(10);

	const [username, setUsername] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [gender, setGender] = useState<'male' | 'female' | 'unknown'>('male');

	
	const [newPassword, setNewPassword] = useState<string>('');

	const [confCode, setConfCode] = useState<string>('');

	const [loading, setLoading] = useState<boolean>(false);

	const errType: CheckAuthInterface = {
		errFirstName: false,
		errLastName: false,
		errUsername: false,
		errEmail: false,
		errPassword: false,
		errConfirmPassword: false,
	};

	const [error, setError] = useState<CheckAuthInterface>(errType);

	if (formType === 'login') {
		const loginData: AuthDataInterface = {
			email: email,
			password: password,
		};

		return (
			<div className={cn(styles.authForm)}>
				<AuthBoringTitle />
				<LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} />
				<Htag tag='s' className={styles.transitionText} onClick={() => {
					setType('forgot');
					setFormType('forgot');
					setError(errType);
				}}>
					{setLocale(router.locale).forgot_password + '?'}
				</Htag>
				<AuthButton loading={loading} text={setLocale(router.locale).sign_in}
					onClick={() => checkAuth(loginData, router.locale, setError, formType, setLoading, setSecondsCount,
						setFormType, setConfCode)} />
				<AuthFormChange type={'login'} onClick={() => {
					setType('registration');
					setFormType('registration');
					setError(errType);
				}} />
			</div>
		);
	} else if (formType === 'registration') {
		const registrationData: AuthDataInterface = {
			firstName: firstName,
			lastName: lastName,
			username: username,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
		};

		return (
			<div className={cn(styles.authForm)}>
				<RegistrationForm firstName={firstName} setFirstName={setFirstName} lastName={lastName}
					setLastName={setLastName} username={username} setUsername={setUsername} email={email}
					setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword}
					setConfirmPassword={setConfirmPassword} gender={gender} setGender={setGender} error={error} />
				<AuthButton loading={loading} text={setLocale(router.locale).sign_up}
					onClick={() => checkAuth(registrationData, router.locale, setError, formType, setLoading, setSecondsCount,
						setFormType, setConfCode)} />
				<AuthFormChange type={'registration'} onClick={() => {
					setType('login');
					setFormType('login');
					setError(errType);
				}} />
			</div>
		);
	} else if (formType === 'forgot') {
		const forgotData: AuthDataInterface = {
			email: email,
			password: newPassword,
		};

		return (
			<div className={cn(styles.authForm)}>
				<BackAuthForm setType={setType} setFormType={setFormType} errType={errType} setError={setError} />
				<ForgotForm email={email} setEmail={setEmail} password={newPassword} setPassword={setNewPassword}
					error={error} />
				<AuthButton loading={loading} text={setLocale(router.locale).change_password}
					onClick={() => checkAuth(forgotData, router.locale, setError, formType, setLoading, setSecondsCount,
						setFormType, setConfCode)} />
			</div>
		);
	} else {
		const data: AuthDataInterface = {
			firstName: firstName,
			lastName: lastName,
			username: username,
			email: email,
			password: password,
			confirmPassword: confirmPassword,
			gender: gender,
		};

		return (
			<div className={cn(styles.authForm)}>
				{/* <BackAuthForm formType={formType} setAuthState={setAuthState} /> */}
				<Htag tag='s' className={styles.confirmText}>{setLocale(router.locale).enter_confirmation_code} <span className={styles.emailText}>
					{email}
				</span>.
				</Htag>
				<ConfirmEmail type={type} code={confCode} setAuthState={setFormType} router={router} data={data}
					newPassword={newPassword}  />
				<Htag tag='s' className={cn(styles.confirmText, {
					[styles.transitionText]: secondsCount === 0,
				})} onClick={() => {
					if (secondsCount === 0) {
						timerStart(setSecondsCount);
						emailSend(setFormType, setLoading, setConfCode, email);
					}
				}}>
					{secondsCount !== 0
						? setLocale(router.locale).send_email_again + ' ' + setLocale(router.locale).in + ' '
						+ secondsCount + ' ' + setLocale(router.locale).seconds
						: setLocale(router.locale).send_email_again}
				</Htag>
			</div>
		);
	}
};
