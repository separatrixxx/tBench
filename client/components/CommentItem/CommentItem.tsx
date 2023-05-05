import { CommentItemProps } from './CommentItem.props';
import styles from './CommentItem.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import { Htag } from 'components/Htag/Htag';
import { formatTime } from 'helpers/format.helper';
import Link from 'next/link';
import cn from 'classnames';


export const CommentItem = ({ type, image, text, username, userImage, date }: CommentItemProps): JSX.Element => {
	const router = useRouter();

	const context = useContext(AppContext);

	switch (type) {
		case 'image':
			return (
				<div className={styles.commentBlock}>
					<Link href={username}>
						<Image className={styles.profileImage} draggable='false'
							loader={() => userImage}
							src={userImage}
							alt='profile image'
							width={1}
							height={1}
							unoptimized={true}
							priority={true}
						/>
					</Link>
					<div className={styles.commentBody}>
						<Link href={username} className={styles.link}>
							<Htag tag='s' className={styles.username}>
								{username}
							</Htag>
						</Link>
						<Image className={styles.commentImage} draggable='false'
							loader={() => image}
							src={image}
							alt='comment image'
							width={1}
							height={1}
							unoptimized={true}
							priority={true}
						/>
						<Htag tag='xxs' className={cn(styles.dataText, {
							[styles.darkThemeDataText]: context.theme === 'dark',
						})}>{formatTime(date, router.locale)}</Htag>
					</div>
				</div>
			);
		case 'text':
			return (
				<div className={styles.commentBlock}>
					<Link href={username}>
						<Image className={styles.profileImage} draggable='false'
							loader={() => userImage}
							src={userImage}
							alt='profile image'
							width={1}
							height={1}
							unoptimized={true}
							priority={true}
						/>
					</Link>
					<div className={styles.commentBody}>
						<Link href={username} className={styles.link}>
							<Htag tag='s' className={styles.username}>
								{username}
							</Htag>
						</Link>
						<p className={cn(styles.commentText, {
							[styles.darkThemeCommentText]: context.theme === 'dark',
						})}>{text}</p>
						<Htag tag='xxs' className={cn(styles.dataText, {
							[styles.darkThemeDataText]: context.theme === 'dark',
						})}>{formatTime(date, router.locale)}</Htag>
					</div>
				</div>
			);
		case 'both':
			return (
				<div className={styles.commentBlock}>
					<Link href={username}>
						<Image className={styles.profileImage} draggable='false'
							loader={() => userImage}
							src={userImage}
							alt='profile image'
							width={1}
							height={1}
							unoptimized={true}
							priority={true}
						/>
					</Link>
					<div className={styles.commentBody}>
						<Link href={username} className={styles.link}>
							<Htag tag='s' className={styles.username}>
								{username}
							</Htag>
						</Link>
						<p className={cn(styles.commentText, {
							[styles.darkThemeCommentText]: context.theme === 'dark',
						})}>{text}</p>
						<Image className={styles.commentImage} draggable='false'
							loader={() => image}
							src={image}
							alt='comment image'
							width={1}
							height={1}
							unoptimized={true}
							priority={true}
						/>
						<Htag tag='xxs' className={cn(styles.dataText, {
							[styles.darkThemeDataText]: context.theme === 'dark',
						})}>{formatTime(date, router.locale)}</Htag>
					</div>
				</div>
			);
		default:
			return <></>;
	}
};