import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HeaderContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	children: ReactNode,
	position: 'right' | 'left',
}