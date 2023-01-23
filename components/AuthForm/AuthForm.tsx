import { AuthFormProps } from './AuthForm.props';
import styles from './AuthForm.module.css';
import cn from 'classnames';
import { Input } from 'components/Input/Input';
import { useState } from 'react';
import { setLocale } from 'helpers/helpers_locale';
import { useRouter } from 'next/router';
import { AuthButton } from 'components/AuthButton/AuthButton';
import { checkAuth } from 'helpers/helpers_check_auth';
import { checkAuthInterface } from 'interfaces/check_auth.interface';
import { InputWithEye } from 'components/InputWithEye/InputWithEye';

export const AuthForm = ({ type, className, ...props }: AuthFormProps): JSX.Element => {
	const router = useRouter();
	
    const [username, setUsername] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [pswdType, setPswdType] = useState<string>('password');
	const [confPswdType, setConfPswdType] = useState<string>('password');

	const [loading, setLoading] = useState<boolean>(false);

	const [error, setError] = useState<checkAuthInterface>({
		ok: false,
		errEmail: false,
		errPassword: false,
		errConfirmPassword: false,
		errFirstName: false,
		errLastName: false,
		errUsername: false,
	});

	let authData = [email, password, confirmPassword, firstName, lastName, username];

	const LoginUser = () => {
		if (!checkAuth(authData).ok) {
			setError(checkAuth(authData));
		} else {
			setLoading(true);
			setTimeout(() => {
				alert('E-mail: ' + email + ', password: ' + password);
				setLoading(false);
			}, 2000);
		}
	};

    const RegisterUser = () => {
		if (!checkAuth(authData).ok) {
			setError(checkAuth(authData));
		} else {
			setLoading(true);
			setTimeout(() => {
				alert('E-mail: ' + email + ', password: ' + password 
            	+ ', username: ' + username + ', first name: ' + firstName + ', last name: ' + lastName)
				setLoading(false);
			}, 2000);
		}
	};

	const changeInputType = () => {
		if (pswdType !== 'text') {
			setPswdType('text');
		} else {
			setPswdType('password');
		}
	}
    
	if (type === 'login') {
        return (
            <div className={cn(className, styles.authForm)} {...props}>
				<Input type='email' text={setLocale(router.locale).email}
					value={email} error={error.errEmail}
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
							value={password} error={error.errPassword}
							onChange={(e) => setPassword(e.target.value)} />
				</InputWithEye>
                <AuthButton loading={loading} type='login' onClick={LoginUser} />
            </div>
        );
    } else {
        return (
            <div className={cn(className, styles.authForm)} {...props}>
                <Input type='text' text={setLocale(router.locale).first_name}
					value={firstName} error={error.errFirstName}
					onChange={(e) => setFirstName(e.target.value)} />
                <Input type='text' text={setLocale(router.locale).last_name}
					value={lastName} error={error.errLastName}
					onChange={(e) => setLastName(e.target.value)} />
				<Input type='text' text={setLocale(router.locale).username}
					value={username} error={error.errUsername}
					onChange={(e) => setUsername(e.target.value)} />
				<Input type='email' text={setLocale(router.locale).email}
					value={email} error={error.errEmail}
					onChange={(e) => setEmail(e.target.value)} />
				<InputWithEye onMouseEnter={() => setPswdType('text')}
                    onMouseLeave={() => setPswdType('password')}
                    onClick={() => changeInputType}>
					<Input type={pswdType} text={setLocale(router.locale).password}
							value={password} error={error.errPassword}
							onChange={(e) => setPassword(e.target.value)} />
				</InputWithEye>
				<InputWithEye onMouseEnter={() => setConfPswdType('text')}
                    onMouseLeave={() => setConfPswdType('password')}
                    onClick={() => changeInputType}>
					<Input type={confPswdType} text={setLocale(router.locale).confirm_password}
						value={confirmPassword} error={error.errConfirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)} />
				</InputWithEye>
                <AuthButton loading={loading} type='registration' onClick={RegisterUser} />
            </div>
        );
    }
};