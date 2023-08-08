import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CheckAuthInterface } from 'interfaces/check_auth.interface';


export interface RegistrationFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	firstName: string,
	setFirstName: (e: any) => void,
	lastName: string,
	setLastName: (e: any) => void,
	username: string,
	setUsername: (e: any) => void,
	email: string,
	setEmail: (e: any) => void,
	password: string,
	setPassword: (e: any) => void,
	confirmPassword: string,
	setConfirmPassword: (e: any) => void,
	gender: 'male' | 'female' | 'unknown',
	setGender: (e: any) => void,
	error: CheckAuthInterface,
}