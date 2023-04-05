import { Htag } from 'components/Htag/Htag';
import styles from './WowPage.module.css';
import { DynamicLine } from 'wow/DynamicLine/DynamicLine';
import { WowCursor } from 'wow/WowCursor/WowCursor';


export const WowPage = (): JSX.Element => {
	return (
		<div className={styles.wowWrapper}>
			<Htag tag='l' className={styles.text}>Dynamic Line</Htag>
			<DynamicLine type='1' direction='right' speed='medium' />
			<DynamicLine type='2' direction='left' speed='fast' />
			<DynamicLine type='3' direction='right' speed='slow' />
			<Htag tag='l' className={styles.text}>Wow Cursor</Htag>
			<WowCursor />
		</div>
	);
};