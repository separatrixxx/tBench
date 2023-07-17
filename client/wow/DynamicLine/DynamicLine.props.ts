import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface DynamicLineProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: '1' | '2' | '3',
	direction: 'right' | 'left',
	speed: 'fast' | 'medium' | 'slow',
	elements: any[];
}