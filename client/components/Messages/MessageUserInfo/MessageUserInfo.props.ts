import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MessageUserInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	user: string,
	username: string,
}