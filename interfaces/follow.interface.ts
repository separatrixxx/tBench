import { User } from "./user.interface";

export interface Follow {
	following: User,
    follower: User,
}