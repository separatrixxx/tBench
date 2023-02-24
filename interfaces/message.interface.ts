import { User } from "./user.interface";

export interface Message {
    _id: number,
    isSeen: boolean,
    message: string,
    file: File,
    time: string,
    sender: User,
    receiver: User,
    edited: boolean,
}
