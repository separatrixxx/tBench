import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ProfileStatItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode,
}