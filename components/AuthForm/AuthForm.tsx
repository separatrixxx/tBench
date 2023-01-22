import { AuthFormProps } from './AuthForm.props';
import styles from './AuthForm.module.css';
import cn from 'classnames';
import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { BsEyeFill } from "react-icons/bs";
import { setLocale } from 'helpers/helpers_locale';

export const AuthForm = ({ type, className, ...props }: AuthFormProps): JSX.Element => {
    const [username, setUsername] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [pswdType, setPswdType] = useState<string>('password');
	const [confPswdType, setConfPswdType] = useState<string>('password');

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

	const LoginUser = () => {
		if (!EMAIL_REGEXP.test(email)) {
			alert('Неверный формат E-mail');
		} else if (password.length < 8) {
			alert('Пароль не должен быть короче 8 символов');
		} else {
			alert('E-mail: ' + email + ', password: ' + password);
		}
	};

    const RegisterUser = () => {
		if (username.length === 0 || firstName.length === 0 || lastName.length === 0) {
			alert('Введите имя');
		} else if (!EMAIL_REGEXP.test(email)) {
			alert('Неверный формат E-mail');
		} else if (password.length < 8) {
			alert('Пароль не должен быть короче 8 символов');
		} else if (password !== confirmPassword) {
			alert('Пароли не совпадают');
		} else {
			alert('E-mail: ' + email + ', password: ' + password 
            + ', username: ' + username + ', first name: ' + firstName + ', last name: ' + lastName);
		}
	};
    
	if (type === 'login') {
        return (
            <div className={cn(className, styles.authForm)} {...props}>
				<Input type='email' text={setLocale().email} value={email}
					onChange={(e) => setEmail(e.target.value)} />
				<label className={styles.label}>
					<span className={styles.icon} 
						onMouseEnter={() => setPswdType('text')}
						onMouseLeave={() => setPswdType('password')}
						onClick={() => setPswdType('text')}>
						<BsEyeFill />
					</span>
					<Input type={pswdType} text={setLocale().password} value={password}
						onChange={(e) => setPassword(e.target.value)} />
				</label>
                <button className={styles.button} onClick={LoginUser}>{setLocale().sign_in}</button>
            </div>
        );
    } else {
        return (
            <div className={cn(className, styles.authForm)} {...props}>
                <Input type='text' text={setLocale().first_name} value={firstName}
					onChange={(e) => setFirstName(e.target.value)} />
                <Input type='text' text={setLocale().last_name} value={lastName}
					onChange={(e) => setLastName(e.target.value)} />
				<Input type='text' text={setLocale().username} value={username}
					onChange={(e) => setUsername(e.target.value)} />
				<Input type='email' text={setLocale().email} value={email}
					onChange={(e) => setEmail(e.target.value)} />
				<label className={styles.label}>
					<span className={styles.icon} 
						onMouseEnter={() => setPswdType('text')}
						onMouseLeave={() => setPswdType('password')}
						onClick={() => setPswdType('text')}>
						<BsEyeFill />
					</span>
					<Input type={pswdType} text={setLocale().password} value={password}
						onChange={(e) => setPassword(e.target.value)} />
				</label>
				<label className={styles.label}>
					<span className={styles.icon} 
						onMouseEnter={() => setConfPswdType('text')}
						onMouseLeave={() => setConfPswdType('password')}
						onClick={() => setPswdType('text')}>
						<BsEyeFill />
					</span>
					<Input type={confPswdType} text={setLocale().confirm_password} value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)} />
				</label>
                <button className={styles.button} onClick={RegisterUser}>{setLocale().sign_up}</button>
            </div>
        );
    }
};