import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface UserSpecificiesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean,
	setActive: (e: any) => void,
	setType: (e: any) => void,
}