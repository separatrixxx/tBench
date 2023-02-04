import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BackButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	link: string,
}