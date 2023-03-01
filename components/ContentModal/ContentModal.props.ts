import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContentModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	active: boolean,
	setActive: (e: any) => void,
	image: string,
}