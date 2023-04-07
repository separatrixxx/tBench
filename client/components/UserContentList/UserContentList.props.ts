import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface UserContentListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setActive: (e: any) => void,
	setImage: (e: any) => void,
}