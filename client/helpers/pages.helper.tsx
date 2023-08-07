import axios, { AxiosResponse } from "axios";
import { User } from "interfaces/user.interface";

export function indexPageHelper(router: any, setIsAuth: (e: any) => void) {
	const loggedIn = localStorage.getItem('logged_in');

	if (loggedIn) {
		setIsAuth(true);
		router.push('/content');
	} else {
		setIsAuth(false);
	}
}

export function pageHelper(router: any, setIsAuth: (e: any) => void, setTheme: (e: any) => void) {
	const loggedIn = localStorage.getItem('logged_in');
	const currentTheme = localStorage.getItem('theme');

	if (loggedIn) {
		setIsAuth(true);
	} else {
		setIsAuth(false);
		router.push('/');
	}

	if (currentTheme) {
		setTheme(currentTheme);
	}
}

export async function userHelper(setUser: (e: any) => void) {
	const loggedIn = localStorage.getItem('logged_in');
	const email = localStorage.getItem('email');

	if (loggedIn && email) {
		const { data: response }: AxiosResponse<User[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/get_user?type=email&information=' + email);

		setUser(response[0]);
	}
}