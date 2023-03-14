import Head from 'next/head';
import { ErrorPage } from 'page_components/ErrorPage/ErrorPage';
import { useEffect, useState } from 'react';

export const PageServerFailure = () => {
	const [theme, setTheme] = useState<string>('light');

	useEffect(() => {
		const currentTheme = localStorage.getItem('theme');

		if (currentTheme) {
			setTheme(currentTheme);
		}
	}, []);

	return (
		<>
			<Head>
				<title>{'tBench - 500'}</title>
			</Head>
			<ErrorPage error={500} theme={theme} />
		</>
	);
};

export default PageServerFailure;