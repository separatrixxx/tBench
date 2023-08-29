import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MetaMaskButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	hiddenOptions: boolean,
}