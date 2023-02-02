import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProfileStatProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	stat: string,
	text: string,
}