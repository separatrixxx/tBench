import axios from 'axios';
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

export async function emailSend(setIsSend: (e: any) => void, setSecondsCount: (e: any) => void,
	setAuthState: (e: any) => void, setLoading: (e: any) => void, email: string) {
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

	console.log('c ' + code);
	setLoading(true);

	await axios.put(process.env.NEXT_PUBLIC_DOMAIN + '/send_code?email=' + email + '&code=' + code)
		.then(function () {
			setAuthState('confirm');
			setLoading(false);
		})
		.catch(function (error) {
			console.log("Email send error: " + error);
			setLoading(false);
		});
}

export function confirmEmail(confCode: string, setIsError: (e: any) => void,
	formType: 'login' | 'registration' | 'forgot', authData: Array<string>, router: any,
	newEmail: string, newPassword: string, setAuthState: (e: any) => void) {
	console.log(code);
	console.log('cc ' + confCode);
	if (confCode !== code) {
		setIsError(true);
	} else {
		setIsError(false);

		if (formType === 'login') {
			loginUser(authData, router);
			setAuthState('login');
		} else if (formType === 'registration') {
			registerUser(authData, router);
			setAuthState('registration');
		} else {
			forgotPassword(newEmail, newPassword, router);
			setAuthState('login');
		}
	}
}