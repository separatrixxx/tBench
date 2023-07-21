import { DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ForgotFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	email: string,
	setEmail: (e: any) => void,
	password: string,
	setPassword: (e: any) => void,
	pswdType: 'password' | 'text',
	setPswdType: (e: any) => void,
	errorNewEmail: boolean,
	errorNewPassword: boolean,
}