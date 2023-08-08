import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ProfileActionButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	type: 'follow' | 'message',
	active?: boolean,
	onClick: (e: any) => void,
}