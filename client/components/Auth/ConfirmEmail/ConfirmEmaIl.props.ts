import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ConfirmEmailProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	formType: 'login' | 'registration' | 'forgot',
	confCode: string,
	setConfCode: (e: any) => void,
	authData: Array<string>,
	router: any,
	newEmail: string,
	newPassword: string,
	setAuthState: (e: any) => void,
}