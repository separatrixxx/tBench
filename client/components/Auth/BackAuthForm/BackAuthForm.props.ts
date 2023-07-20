import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BackAuthFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	formType: 'login' | 'registration' | 'forgot',
	setAuthState: (e: any) => void,
}