import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContentActionsBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	postId: number,
	date: string,
	setType: (e: any) => void,
	setActive: (e: any) => void,
	setPostId: (e: any) => void,
}