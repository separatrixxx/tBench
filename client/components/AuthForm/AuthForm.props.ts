import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AuthFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'login' | 'registration' | 'forgot' | 'confirm',
	setAuthState: (e: any) => void,
}