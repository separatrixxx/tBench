import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MessageItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    messageId: number,
    userImage: string,
    username: string,
    text: string,
    date: string,
}