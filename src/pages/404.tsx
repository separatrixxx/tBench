import Head from 'next/head';
import { ErrorPage } from 'page_components/ErrorPage/ErrorPage';

export const PageNotFound = () => {
	return (
		<>
			<Head>
				<title>{'tBench - 404'}</title>
			</Head>
            <ErrorPage error={404} />
		</>
	);
};

export default PageNotFound;