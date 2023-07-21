import { AuthFormProps } from './AuthForm.props';
import styles from './AuthForm.module.css';
import { useState } from 'react';
import { AuthButton } from '../AuthButton/AuthButton';
import { CheckAuthInterface } from 'interfaces/check_auth.interface';
import { useRouter } from 'next/router';
import { AuthFormChange } from '../AuthFormChange/AuthFormChange';
import { setLocale } from 'helpers/locale.helper';
import { checkUser } from 'helpers/auth.helper';
import { ConfirmEmail } from '../ConfirmEmail/ConfirmEmail';
import { Htag } from 'components/Common/Htag/Htag';
import { emailSend } from 'helpers/confirm_email.helper';
import { BackAuthForm } from '../BackAuthForm/BackAuthForm';
import { forgotPassword } from 'helpers/forgot_password.helper';
import { LoginForm } from '../LoginForm/LoginForm';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import { ForgotForm } from '../ForgotForm/ForgotForm';
import cn from 'classnames';


export const AuthForm = ({ type, setAuthState, className, ...props }: AuthFormProps): JSX.Element => {
	const router = useRouter();

	const [formType, setFormType] = useState<'login' | 'registration' | 'forgot'>('login');
	const [isSend, setIsSend] = useState<boolean>(false);
	const [secondsCount, setSecondsCount] = useState<number>(10);

	const [username, setUsername] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [gender, setGender] = useState<'male' | 'female' | 'unknown'>('male');

	const [pswdType, setPswdType] = useState<'password' | 'text'>('password');
	const [confPswdType, setConfPswdType] = useState<'password' | 'text'>('password');
	const [newPswdType, setNewPswdType] = useState<'password' | 'text'>('password');

	const [newEmail, setNewEmail] = useState<string>('');
	const [errorNewEmail, setErrorNewEmail] = useState<boolean>(false);
	const [newPassword, setNewPassword] = useState<string>('');
	const [errorNewPassword, setErrorNewPassword] = useState<boolean>(false);

	const [confCode, setConfCode] = useState<string>('');

	const [loading, setLoading] = useState<boolean>(false);

	const errType = {
		ok: false,
		errEmail: false,
		errPassword: false,
		errConfirmPassword: false,
		errFirstName: false,
		errLastName: false,
		errUsername: false,
	};

	const [error, setError] = useState<CheckAuthInterface>(errType);

	const authData = [email, password, confirmPassword, firstName, lastName, username, gender];

	if (type === 'login') {
		return (
			<div className={cn(className, styles.authForm)} {...props}>
				<LoginForm email={email} setEmail={setEmail} password={password} setPassword={setPassword}
					pswdType={pswdType} setPswdType={setPswdType} error={error} />
				<Htag tag='s' className={styles.transitionText} onClick={() => {
					setAuthState('forgot');
					setFormType('forgot');
				}}>
					{setLocale(router.locale).forgot_password + '?'}
				</Htag>
				<AuthButton loading={loading} text={setLocale(router.locale).sign_in}
					onClick={() => checkUser(authData, errType, router, setError, true, setAuthState,
						setLoading, isSend, setIsSend, setSecondsCount)} />
				<AuthFormChange type={'login'} onClick={() => {
					setAuthState('registration');
					setFormType('registration');
				}} />
			</div>
		);
	} else if (type === 'registration') {
		return (
			<div className={cn(className, styles.authForm)} {...props}>
				<RegistrationForm firstName={firstName} setFirstName={setFirstName} lastName={lastName}
					setLastName={setLastName} username={username} setUsername={setUsername} email={email}
					setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword}
					setConfirmPassword={setConfirmPassword} gender={gender} setGender={setGender} pswdType={pswdType}
					setPswdType={setPswdType} confPswdType={confPswdType} setConfPswdType={setConfPswdType} error={error} />
				<AuthButton loading={loading} text={setLocale(router.locale).sign_up}
					onClick={() => checkUser(authData, errType, router, setError, false, setAuthState,
						setLoading, isSend, setIsSend, setSecondsCount)} />
				<AuthFormChange type={'registration'} onClick={() => {
					setAuthState('login');
					setFormType('login');
				}} />
			</div>
		);
	} else if (type === 'forgot') {
		return (
			<div className={cn(className, styles.authForm)} {...props}>
				<BackAuthForm formType={formType} setAuthState={setAuthState} />
				<ForgotForm email={newEmail} setEmail={setNewEmail} password={newPassword} setPassword={setNewPassword}
					pswdType={newPswdType} setPswdType={setNewPswdType} errorNewEmail={errorNewEmail} errorNewPassword={errorNewPassword} />
				<AuthButton loading={loading} text={setLocale(router.locale).change_password}
					onClick={() => forgotPassword(router.locale, newEmail, newPassword, setErrorNewEmail, setErrorNewPassword,
						isSend, setIsSend, setSecondsCount, setAuthState)} />
			</div>
		);
	} else {
		return (
			<div className={cn(className, styles.authForm)} {...props}>
				<BackAuthForm formType={formType} setAuthState={setAuthState} />
				<Htag tag='s' className={styles.confirmText}>{setLocale(router.locale).enter_confirmation_code} <span className={styles.emailText}>
					{email}
				</span>.
				</Htag>
				<ConfirmEmail formType={formType} confCode={confCode} setConfCode={setConfCode} authData={authData} router={router}
					newEmail={newEmail} newPassword={newPassword} setAuthState={setAuthState} />
				<Htag tag='s' className={cn(styles.confirmText, {
					[styles.transitionText]: !isSend,
				})} onClick={() => {
					if (!isSend) {
						emailSend(setIsSend, setSecondsCount, setAuthState, setLoading, authData[0]);
						setIsSend(true);
					}
				}}>
					{isSend
						? setLocale(router.locale).send_email_again + ' ' + setLocale(router.locale).in + ' '
						+ secondsCount + ' ' + setLocale(router.locale).seconds
						: setLocale(router.locale).send_email_again}
				</Htag>
			</div>
		);
	}
};
