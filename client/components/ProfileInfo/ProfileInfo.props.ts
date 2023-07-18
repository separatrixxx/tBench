import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProfileInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean,
	setActive: (e: any) => void,
	setType: (e: any) => void,
	username: string,
	userInfo: string,
}