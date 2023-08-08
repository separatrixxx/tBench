import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ExitButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	hiddenOptions: boolean,
}