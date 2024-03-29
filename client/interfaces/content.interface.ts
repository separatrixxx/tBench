import { User } from "./user.interface";

export interface Content {
    _id: number,
    publisher: User,
    type: 'image' | 'text' | 'both',
    text: string,
    file: File,
    time: string,
    totalComments: number,
    totalLikes: number,
}
