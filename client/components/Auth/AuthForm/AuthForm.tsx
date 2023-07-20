import { AuthFormProps } from './AuthForm.props';
import styles from './AuthForm.module.css';
import { Input } from 'components/Inputs/Input/Input';
import { useState } from 'react';
import { AuthButton } from '../AuthButton/AuthButton';
import { CheckAuthInterface } from 'interfaces/check_auth.interface';
import { InputWithEye } from 'components/Inputs/InputWithEye/InputWithEye';
import { useRouter } from 'next/router';
import { AuthFormChange } from '../AuthFormChange/AuthFormChange';
import { setLocale } from 'helpers/locale.helper';
import { checkUser } from 'helpers/auth.helper';
import { GenderChange } from '../GenderChange/GenderChange';
import { ConfirmEmail } from '../ConfirmEmail/ConfirmEmail';
import { Htag } from 'components/Common/Htag/Htag';
import { emailSend } from 'helpers/confirm_email.helper';
import { BackAuthForm } from '../BackAuthForm/BackAuthForm';
import { forgotPassword } from 'helpers/forgot_password.helper';
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

	const [pswdType, setPswdType] = useState<'email' | 'password' | 'text'>('password');
	const [confPswdType, setConfPswdType] = useState<'email' | 'password' | 'text'>('password');

	const [newEmail, setNewEmail] = useState<string>('');
	const [errorNewEmail, setErrorNewEmail] = useState<boolean>(false);
	const [newPassword, setNewPassword] = useState<string>('');
	const [errorNewPassword, setErrorNewPassword] = useState<boolean>(false);

	const [confCode, setConfCode] = useState<string>('');

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

	const changeInputType = () => {
		if (pswdType !== 'text') {
			setPswdType('text');
		} else {
			setPswdType('password');
		}
	};

	if (type === 'login') {
		return (
			<div className={cn(className, styles.authForm)} {...props}>
				<Input type='email' text={setLocale(router.locale).email}
					value={email} error={error.errEmail} eye={false}
					onChange={(e) => setEmail(e.target.value)} />
				<InputWithEye onMouseEnter={() => setPswdType('text')}
					onMouseLeave={() => setPswdType('password')}
					onClick={() => {
						if (pswdType !== 'text') {
							setPswdType('text');
						} else {
							setPswdType('password');
						}
					}}>
					<Input type={pswdType} text={setLocale(router.locale).password}
						value={password} error={error.errPassword} eye={true}
						onChange={(e) => setPassword(e.target.value)} />
				</InputWithEye>
				<Htag tag='s' className={styles.transitionText} onClick={() => {
					setAuthState('forgot');
					setFormType('forgot');
				}}>
					{setLocale(router.locale).forgot_password + '?'}
				</Htag>
				<AuthButton text={setLocale(router.locale).sign_in}
					onClick={() => checkUser(authData, errType, router, setError, true, setAuthState,
						isSend, setIsSend, setSecondsCount)} />
				<AuthFormChange type={'login'} onClick={() => {
					setAuthState('registration');
					setFormType('registration');
				}} />
			</div>
		);
	} else if (type === 'registration') {
		return (
			<div className={cn(className, styles.authForm)} {...props}>
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
					onMouseLeave={() => setPswdType('password')}
					onClick={() => changeInputType}>
					<Input type={pswdType} text={setLocale(router.locale).password}
						value={password} error={error.errPassword} eye={true}
						onChange={(e) => setPassword(e.target.value)} />
				</InputWithEye>
				<InputWithEye onMouseEnter={() => setConfPswdType('text')}
					onMouseLeave={() => setConfPswdType('password')}
					onClick={() => changeInputType}>
					<Input type={confPswdType} text={setLocale(router.locale).confirm_password}
						value={confirmPassword} error={error.errConfirmPassword} eye={true}
						onChange={(e) => setConfirmPassword(e.target.value)} />
				</InputWithEye>
				<GenderChange gender={gender} setGender={setGender} />
				<AuthButton text={setLocale(router.locale).sign_up}
					onClick={() => checkUser(authData, errType, router, setError, false, setAuthState,
						isSend, setIsSend, setSecondsCount)} />
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
				<Input type='email' text={setLocale(router.locale).email}
					value={newEmail} error={errorNewEmail} eye={false}
					onChange={(e) => setNewEmail(e.target.value)} />
				<InputWithEye onMouseEnter={() => setPswdType('text')}
					onMouseLeave={() => setPswdType('password')}
					onClick={() => changeInputType}>
					<Input type={pswdType} text={setLocale(router.locale).new_password}
						value={newPassword} error={errorNewPassword} eye={true}
						onChange={(e) => setNewPassword(e.target.value)} />
				</InputWithEye>
				<AuthButton text={setLocale(router.locale).change_password}
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
				<ConfirmEmail formType={formType} confCode={confCode} setConfCode={setConfCode}
					authData={authData} router={router} newEmail={newEmail} newPassword={newPassword} setAuthState={setAuthState} />
				<Htag tag='s' className={cn(styles.confirmText, {
					[styles.transitionText]: !isSend,
				})} onClick={() => {
					if (!isSend) {
						emailSend(setIsSend, setSecondsCount);
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
