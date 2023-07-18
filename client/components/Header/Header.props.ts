import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Links } from 'interfaces/components.interface';


export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLBaseElement>, HTMLBaseElement> {
	links: Links[],
}