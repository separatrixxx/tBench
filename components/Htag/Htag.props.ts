import { ReactNode } from 'react';

export interface HtagProps {
	tag: 'lang' | 'l' | 'm' | 's',
	children: ReactNode,
}