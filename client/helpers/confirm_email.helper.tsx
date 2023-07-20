import { forgotPassword, loginUser, registerUser } from './auth.helper';

export function confirmCode(): string {
	const chars = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
	let confirmationCode = '';

	for (let i = 0; i < 6; i++) {
		const pos = Math.floor(Math.random() * chars.length);
		confirmationCode += chars.substring(pos, pos + 1);
	}

	return confirmationCode;
}

let code: string;

export function emailSend(setIsSend: (e: any) => void, setSecondsCount: (e: any) => void) {
	let seconds = 10;
	setSecondsCount(seconds);
	const timerId = setInterval(() => {
		seconds -= 1;
		setSecondsCount(seconds);
	}, 1000);
	setTimeout(() => {
		setIsSend(false);
		setSecondsCount(5);
		clearInterval(timerId);
	}, 10000);

	code = confirmCode();

	console.log(code);
}

export function confirmEmail(confCode: string, setIsError: (e: any) => void,
	formType: 'login' | 'registration' | 'forgot', authData: Array<string>, router: any,
	newEmail: string, newPassword: string, setAuthState: (e: any) => void) {
	if (confCode !== code) {
		setIsError(true);
	} else {
		setIsError(false);
		setAuthState('login');

		if (formType === 'login') {
			loginUser(authData, router);
		} else if (formType === 'registration') {
			registerUser(authData, router);
		} else {
			forgotPassword(newEmail, newPassword, router);
		}
	}
}