import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProfileModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'username' | 'info' | 'image' | 'more_info' | 'verify',
	username: string,
	setUsername: (e: any) => void,
	userInfo: string,
	setUserInfo: (e: any) => void,
	active: boolean,
	setActive: (e: any) => void,
}