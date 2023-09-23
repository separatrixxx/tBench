import { Htag } from 'components/Common/Htag/Htag';
import styles from './WowPage.module.css';
import { DynamicLine } from 'wow/DynamicLine/DynamicLine';
import { WowCursor } from 'wow/WowCursor/WowCursor';
import { Looking3D } from 'wow/Looking3D/Looking3D';
import { WowButton } from '../WowButton/WowButton';
import Cocacola from './DLElements/cocacola.svg';
import Facebook from './DLElements/facebook.svg';
import Lenta from './DLElements/lenta.svg';
import Megafon from './DLElements/megafon.svg';
import Mts from './DLElements/mts.svg';
import Netflix from './DLElements/netflix.svg';
import Perekrestok from './DLElements/perekrestok.svg';
import Rosbank from './DLElements/rosbank.svg';
import Sber from './DLElements/sber.svg';
import Visa from './DLElements/visa.svg';
import Yandex from './DLElements/yandex.svg';
import Yula from './DLElements/yula.svg';
import { NumberCounter } from 'wow/NumberCounter/NumberCounter';
import { EnterCodeForm } from 'wow/EnterCodeForm/EnterCodeForm';
import { Toaster } from 'react-hot-toast';
import { WowCaptcha } from 'wow/WowCaptcha/WowCaptcha';
import { SimpleMarkdown } from 'wow/SimpleMarkdown/SimpleMarkdown';


export const WowPage = (): JSX.Element => {
	const elements: any = [Cocacola, Facebook, Lenta, Megafon, Mts, Netflix, Perekrestok, Rosbank, Sber, Visa, Yandex, Yula];

	return (
		<>
			<Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
			<div className={styles.wowWrapper}>
				<Htag tag='l' className={styles.text}>Dynamic Line</Htag>
				<DynamicLine type='1' direction='right' speed='medium' elements={elements} />
				<DynamicLine type='2' direction='left' speed='fast' elements={elements} />
				<DynamicLine type='3' direction='right' speed='slow' elements={elements} />
				<Htag tag='l' className={styles.text}>Wow Cursor</Htag>
				<WowCursor />
				<Htag tag='l' className={styles.text}>Enter Code Form</Htag>
				<Htag tag='m' className={styles.textM}>Code is 1234</Htag>
				<EnterCodeForm />
				<Htag tag='l' className={styles.text}>Number Counter //alpha</Htag>
				<NumberCounter id='c1' number={1603} time={7000} step={1} />
				<Htag tag='l' className={styles.text}>Wow Button</Htag>
				<WowButton />
				<Htag tag='l' className={styles.text}>WowCaptcha //alpha</Htag>
				<WowCaptcha />
				<Htag tag='l' className={styles.text}>Simple Markdown //alpha</Htag>
				<SimpleMarkdown />
				{/* <Htag tag='l' className={styles.text}>Looking 3D</Htag>
				<Looking3D /> */}
			</div>
		</>
	);
};