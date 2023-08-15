import axios, { AxiosResponse } from "axios";
import { User } from "interfaces/user.interface";

const user1: User = {
    firstName: 'Nikita',
    lastName: 'Lokhmatov',
    username: 'separatrix',
    email: 'nikitalochmatov@gmail.com',
    gender: 'male',
};

const user2: User = {
    firstName: 'Nicholas',
    lastName: 'Barton',
    username: 'bbarton',
    email: 'barton@gmail.com',
    gender: 'male',
};

const user3: User = {
    firstName: 'Loresa',
    lastName: 'Sucklover',
    username: 'elanoide_s',
    email: 'elanoide89@gmail.com',
    gender: 'female',
};

const user4: User = {
    firstName: 'Love',
    lastName: 'Bart',
    username: 'lover',
    email: 'lover@gmail.com',
    gender: 'female',
};

const user5: User = {
    firstName: 'Itan',
    lastName: 'Kerimov',
    username: 'ikerimov',
    email: 'ikerimov@gmail.com',
    gender: 'male',
};

const users: User[] = [user1, user2, user3, user4, user5];


export async function searchUser(search: string, setUsers: (e: any) => void) {
	// const { data: response }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
    //     '/get_user?type=username&information=' + search);

    // setUsers(response);

    let newUsers: User[] = [];

    if (+search !== 0) {
        for (let u of users) {
            if (u.firstName.toLowerCase().startsWith(search.toLowerCase())
                || u.lastName.toLowerCase().startsWith(search.toLowerCase())
                || u.username.toLowerCase().startsWith(search.toLowerCase())) {
                newUsers.push(u);
                console.log(u);
            }
        }
    }

    setUsers(newUsers);
}