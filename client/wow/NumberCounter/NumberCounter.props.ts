import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface NumberCounterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	number: number,
	time: number,
	step: number,
}