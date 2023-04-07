import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UserContentItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'text' | 'image' | 'both',
    image: string,
    text: string,
    setActive: (e: any) => void,
    setImage: (e: any) => void,
}