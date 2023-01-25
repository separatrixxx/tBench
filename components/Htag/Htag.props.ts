import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	tag: 'l' | 'm' | 's' | 'xs',
	children: ReactNode,
}