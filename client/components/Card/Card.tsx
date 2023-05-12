import { CardProps } from './Card.props';
import styles from './Card.module.css';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';


export const Card = ({ children, hover }: CardProps): JSX.Element => {
	const context = useContext(AppContext);

	return (
		<div className={cn(styles.card, {
			[styles.darkThemeCard]: context.theme === 'dark',
			[styles.cardHover]: hover,
			[styles.darkThemeCardHover]: context.theme === 'dark' && hover,
		})}>
			{children}
		</div>
	);
};