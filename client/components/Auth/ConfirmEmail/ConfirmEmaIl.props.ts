import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { AuthDataInterface } from 'interfaces/check_auth.interface';


export interface ConfirmEmailProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	formType: 'login' | 'registration' | 'forgot',
	code: string,
	setAuthState: (e: any) => void,
	router: any,
	data: AuthDataInterface,
	newPassword: string,
}