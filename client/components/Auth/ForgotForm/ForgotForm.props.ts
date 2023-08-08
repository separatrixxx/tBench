import { CheckAuthInterface } from 'interfaces/check_auth.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ForgotFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	email: string,
	setEmail: (e: any) => void,
	password: string,
	setPassword: (e: any) => void,
	error: CheckAuthInterface,
}