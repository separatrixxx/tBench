import styles from './WowCursor.module.css';


export const WowCursor = (): JSX.Element => {
	return (
		<div className={styles.cursorWrapper}>
			<span className={styles.cursor} />
			<span className={styles.aura} />
		</div>
	);
};