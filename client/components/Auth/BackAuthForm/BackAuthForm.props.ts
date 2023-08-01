import { DetailedHTMLProps, HTMLAttributes } from "react";
import { CheckAuthInterface } from "interfaces/check_auth.interface";


export interface BackAuthFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	formType: 'login' | 'registration' | 'forgot',
	setAuthState: (e: any) => void,
	errType?: CheckAuthInterface,
	setError?: (e: any) => void,
}