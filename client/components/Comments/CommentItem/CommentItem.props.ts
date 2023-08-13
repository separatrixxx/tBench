import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CommentItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'text' | 'image' | 'both',
	image: string,
	text: string,
	username: string,
	userImage: string,
	date: string,
}