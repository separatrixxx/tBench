import Head from 'next/head';
import { ErrorPage } from 'page_components/ErrorPage/ErrorPage';

export const PageNotFound = () => {
	return (
		<>
			<Head>
				<title>{'tBench - 500'}</title>
			</Head>
            <ErrorPage error={500} />
		</>
	);
};

export default PageNotFound;