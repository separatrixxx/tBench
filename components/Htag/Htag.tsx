import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import cn from 'classnames';

export const Htag = ({ tag, children, className }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'l':
			return <h1 className={cn(className, styles.l)}>{children}</h1>;
		case 'm':
			return <h1 className={cn(className, styles.m)}>{children}</h1>;
		case 's':
			return <h2 className={cn(className, styles.s)}>{children}</h2>;
		case 'xs':
			return <h2 className={cn(className, styles.xs)}>{children}</h2>;
		default:
			return <></>;
	}
};