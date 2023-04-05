import styles from './DynamicLine.module.css';
import cn from 'classnames';


export const DynamicLine = (): JSX.Element => {
	return (
		<div className={styles.lineWrapper}>
			<span className={cn(styles.line, styles.red)} />
			<span className={cn(styles.line, styles.blue)} />
		</div>
	);
};