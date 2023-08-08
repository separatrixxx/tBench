import axios, { AxiosResponse } from "axios";
import { User } from "interfaces/user.interface";


export async function searchUser(search: string, setUsers: (e: any) => void) {
	const { data: response }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
        '/get_user?type=username&information=' + search);

    setUsers(response);
}