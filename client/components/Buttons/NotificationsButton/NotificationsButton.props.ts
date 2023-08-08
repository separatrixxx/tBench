import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface NotificationsButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	isNotification: boolean,
}