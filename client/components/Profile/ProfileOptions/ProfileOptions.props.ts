import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProfileOptionsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setTheme: (newTheme: string) => void,
}