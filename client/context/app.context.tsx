import { User } from 'interfaces/user.interface';
import { createContext, PropsWithChildren, useState } from 'react';

export interface IAppContext {
	theme: string;
	setTheme?: (newTheme: string) => void;
	user: User;
	setUser?: (newUser: User) => void;
}
const userData: User = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    gender: 'male',
}

export const AppContext = createContext<IAppContext>({ theme: '', user: userData });

export const AppContextProvider = ({ theme, user, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	const [themeState, setThemeState] = useState<string>(theme);
	const setTheme = (newTheme: string) => {
		setThemeState(newTheme);
	};

	const [userState, setUserState] = useState<User>(user);
	const setUser = (newUser: User) => {
		setUserState(newUser);
	};

	return <AppContext.Provider value={{ theme: themeState, setTheme, user: userState, setUser }}>
		{children}
	</AppContext.Provider>;
};