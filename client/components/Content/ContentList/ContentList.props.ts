import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContentListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setType: (e: any) => void,
	setActive: (e: any) => void,
	setImage: (e: any) => void,
	setPostId: (e: any) => void,
}