import { Htag } from 'components/Htag/Htag';
import styles from './WowPage.module.css';
import { DynamicLine } from 'wow/DynamicLine/DynamicLine';
import { WowCursor } from 'wow/WowCursor/WowCursor';
import { Looking3D } from 'wow/Looking3D/Looking3D';
import { WowButton } from '../WowButton/WowButton';


export const WowPage = (): JSX.Element => {
	return (
		<div className={styles.wowWrapper}>
			<Htag tag='l' className={styles.text}>Dynamic Line</Htag>
			<DynamicLine type='1' direction='right' speed='medium' />
			<DynamicLine type='2' direction='left' speed='fast' />
			<DynamicLine type='3' direction='right' speed='slow' />
			<Htag tag='l' className={styles.text}>Wow Cursor</Htag>
			<WowCursor />
			<Htag tag='l' className={styles.text}>Wow Button</Htag>
			<WowButton />
			{/* <Htag tag='l' className={styles.text}>Looking 3D</Htag>
			<Looking3D /> */}
		</div>
	);
};