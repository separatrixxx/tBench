import { CardProps } from './Card.props';
import styles from './Card.module.css';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const Card = ({ children, hover }: CardProps): JSX.Element => {
	const theme = useSelector((state: AppState) => state.theme.theme);

	return (
		<div className={cn(styles.card, {
			[styles.darkThemeCard]: theme === 'dark',
			[styles.cardHover]: hover,
			[styles.darkThemeCardHover]:theme === 'dark' && hover,
		})}>
			{children}
		</div>
	);
};