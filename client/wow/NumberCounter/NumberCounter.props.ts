import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NumberCounterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	id: string,
	number: number,
	time: number,
	step: number,
}