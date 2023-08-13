import axios, { AxiosResponse } from "axios";
import { User } from "interfaces/user.interface";
import { setTheme } from '../features/theme/themeSlice'
import { setUser } from "features/user/userSlice";


export function indexPageHelper(router: any, setIsAuth: (e: any) => void) {
	const loggedIn = localStorage.getItem('logged_in');

	if (loggedIn) {
		setIsAuth(true);
		router.push('/content');
	} else {
		setIsAuth(false);
	}
}

export function pageHelper(router: any, dispatch: any, setIsAuth: (e: any) => void) {
	const loggedIn = localStorage.getItem('logged_in');
	const currentTheme = localStorage.getItem('theme');

	if (loggedIn) {
		setIsAuth(true);
	} else {
		setIsAuth(false);
		router.push('/');
	}

	if (currentTheme) {
		dispatch(setTheme(currentTheme));
	}
}

export async function userHelper(dispatch: any) {
	const loggedIn = localStorage.getItem('logged_in');
	const username = localStorage.getItem('username');

	if (loggedIn && username) {
		const { data: response }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_user?type=username&information=' + username);

		dispatch(setUser(response[0]));
	}
}