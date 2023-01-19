import { Content } from "./content.interface";
import { User } from "./user.interface";

export interface Comment {
	user: User,
    content: Content,
    comment: string,
    file: File,
    time: string,
    edited: boolean,
}