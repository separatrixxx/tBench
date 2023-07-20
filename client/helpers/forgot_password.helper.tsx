import { ToastError } from 'components/Toast/Toast';
import { setLocale } from './locale.helper';
import { emailSend } from './confirm_email.helper';

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export function forgotPassword(locale: string | undefined, newEmail: string, newPassword: string,
	setErrorNewEmail: (e: any) => void, setErrorNewPassword: (e: any) => void, isSend: boolean, setIsSend: (e: any) => void,
	setSecondsCount: (e: any) => void, setAuthState: (e: any) => void) {
	if (!EMAIL_REGEXP.test(newEmail) || newPassword.length < 8) {
		if (!EMAIL_REGEXP.test(newEmail)) {
			{ ToastError(setLocale(locale).error_email); }
			setErrorNewEmail(true);
		} else {
			setErrorNewEmail(false);
		}

		if (newPassword.length < 8) {
			{ ToastError(setLocale(locale).error_password); }
			setErrorNewPassword(true);
		} else {
			setErrorNewPassword(false);
		}
	} else {
		setErrorNewEmail(false);
		setErrorNewPassword(false);

		if (!isSend) {
			emailSend(setIsSend, setSecondsCount);
			setIsSend(true);
		}

		setAuthState('confirm');
	}
}