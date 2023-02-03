import { useEffect, useState } from 'react';

export const isAuth = (): boolean => {
	const [isAuth, setIsAuth] = useState<boolean>(false);

	useEffect(() => {
		const loggedIn = localStorage.getItem('logged_in');

        if (loggedIn) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
	}, []);

	return isAuth;
};