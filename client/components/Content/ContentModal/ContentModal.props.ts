import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContentModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'post' | 'comments',
	active: boolean,
	setActive: (e: any) => void,
	image: string,
	postId: number,
}