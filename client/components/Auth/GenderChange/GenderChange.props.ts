import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface GenderChangeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	gender: 'male' | 'female' | 'unknown',
	setGender: (e: any) => void,
}