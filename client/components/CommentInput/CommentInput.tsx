import styles from './CommentInput.module.css';
import { useContext, useState } from 'react';
import { AppContext } from 'context/app.context';
import Emoji from './emoji.svg';
import Send from './send.svg';
import cn from 'classnames';


export const CommentInput = (): JSX.Element => {
	const context = useContext(AppContext);

	const [comment, setComment] = useState<string>('');

	return (
		<div className={cn(styles.wrapper, {
			[styles.darkThemeWrapper]: context.theme === 'dark',
		})}>
			<label className={styles.labelComment}>
				<input className={cn(styles.inputComment, {
					[styles.darkThemeInputComment]: context.theme === 'dark',
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
