import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProfileStatProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	stat: string,
	text: string,
}