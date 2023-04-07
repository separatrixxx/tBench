import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ContentListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	setActive: (e: any) => void,
	setImage: (e: any) => void,
}