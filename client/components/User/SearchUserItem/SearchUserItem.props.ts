import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SearchUserItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    firstName: string,
    lastName: string,
    username: string,
}