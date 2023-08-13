import axios from 'axios';


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

export function timerStart(setSecondsCount: (e: any) => void) {
	let seconds = 30;
	setSecondsCount(seconds);
	const timerId = setInterval(() => {
		seconds -= 1;
		setSecondsCount(seconds);
	}, 1000);
	setTimeout(() => {
		clearInterval(timerId);
	}, 30000);
}

export async function emailSend(setFormType: (e: any) => void,
	setLoading: (e: any) => void, setConfCode: (e: any) => void, email: string) {

	code = confirmCode();
	setConfCode(code);
	setLoading(true);

	await axios.put(process.env.NEXT_PUBLIC_DOMAIN + '/send_code?email=' + email + '&code=' + code)
		.then(function () {
			setFormType('confirm');
			setLoading(false);
		})
		.catch(function (error) {
			console.log("Email send error: " + error);
			setLoading(false);
		});
}