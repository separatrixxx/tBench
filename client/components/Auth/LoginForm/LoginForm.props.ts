import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CheckAuthInterface } from 'interfaces/check_auth.interface';


export interface LoginFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	email: string,
	setEmail: (e: any) => void,
	password: string,
	setPassword: (e: any) => void,
	pswdType: 'password' | 'text',
	setPswdType: (e: any) => void,
	error: CheckAuthInterface,
}