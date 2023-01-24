import { ReactNode } from "react";

export interface BlockProps {
    type: 'text' | 'image' | 'auth' | 'duo',
    color?: string,
    image?: string,
    children?: ReactNode,
}