import { ReactNode } from 'react';

export interface HtagProps {
	tag: 'l' | 'm' | 's';
	children: ReactNode;
}