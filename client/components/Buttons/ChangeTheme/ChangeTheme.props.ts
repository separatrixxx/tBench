import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ChangeThemeProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	hiddenOptions: boolean,
}