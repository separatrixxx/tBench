import { Htag } from 'components/Htag/Htag';
import styles from './WowPage.module.css';
import { DynamicLine } from 'wow/DynamicLine/DynamicLine';


export const WowPage = (): JSX.Element => {
	return (
		<div className={styles.wowWrapper}>
			<Htag tag='l' className={styles.text}>Dynamic Line</Htag>
			<DynamicLine />
		</div>
	);
};