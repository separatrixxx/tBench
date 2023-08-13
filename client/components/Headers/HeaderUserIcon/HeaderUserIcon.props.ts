import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderUserIconProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	user: string,
	userImage: string,
}