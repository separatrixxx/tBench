import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface InputModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	type: 'input' | 'area',
	text: string,
	value: string,
	onChange: (e: any) => void,
	onKeyDown: (e: any) => void,
}