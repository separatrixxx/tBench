import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UserContentItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'text' | 'image' | 'both',
    image: string,
    text: string,
    postId: number,
    date: string,
    setType: (e: any) => void,
    setActive: (e: any) => void,
    setImage: (e: any) => void,
    setPostId: (e: any) => void,
}