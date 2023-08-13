import { ReactNode } from "react";

export interface BlockProps {
    type: 'text' | 'image' | 'duo',
    color?: string,
    image?: string,
    children?: ReactNode,
}