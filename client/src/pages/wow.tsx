import Head from "next/head";
import { WowPage } from 'wow/WowPage/WowPage';


function Wow(): JSX.Element {
	return (
		<>
			<Head>
				<title>tBench - WOW</title>
			</Head>
			<WowPage />
		</>
	);
}

export default Wow;