import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface HeaderButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	open: boolean,
    setOpen: (e: any) => void,
}