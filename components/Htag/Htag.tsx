import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'l':
			return <h1 className={styles.l}>{children}</h1>;
		case 'm':
			return <h1 className={styles.m}>{children}</h1>;
		case 's':
			return <h2 className={styles.s}>{children}</h2>;
		default:
			return <></>;
	}
};