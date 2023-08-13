import styles from './CommentInput.module.css';
import { useState } from 'react';
import Emoji from './emoji.svg';
import Send from './send.svg';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const CommentInput = (): JSX.Element => {
	const theme = useSelector((state: AppState) => state.theme.theme);

	const [comment, setComment] = useState<string>('');

	return (
		<div className={cn(styles.wrapper, {
			[styles.darkThemeWrapper]: theme === 'dark',
		})}>
			<label className={styles.labelComment}>
				<input className={cn(styles.inputComment, {
					[styles.darkThemeInputComment]: theme === 'dark',
				})} type="text"
					name="comment"
					aria-label="comment"
					value={comment}
					onChange={(e) => {
						setComment(e.target.value);
					}} />
				<span className={styles.iconComment}>
					<Emoji />
				</span>
			</label>
			<span className={styles.send}>
				<Send />
			</span>
		</div>
	);
};
