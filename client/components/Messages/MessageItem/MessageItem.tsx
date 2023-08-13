import { MessageItemProps } from './MessageItem.props';
import styles from './MessageItem.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Htag } from 'components/Common/Htag/Htag';
import { formatTime } from 'helpers/format.helper';
import { Card } from 'components/Common/Card/Card';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';



export const MessageItem = ({ messageId, userImage, username, text, date }: MessageItemProps): JSX.Element => {
	const router = useRouter();

	const theme = useSelector((state: AppState) => state.theme.theme);

	return (
		<Card hover={true}>
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
			<div className={styles.messageBody}>
				<Link href={username} className={styles.link}>
					<Htag tag='s' className={styles.username}>
						{username}
					</Htag>
				</Link>
				<p className={cn(styles.messageText, {
					[styles.darkThemeMessageText]: theme === 'dark',
				})}>{text}</p>
				<Htag tag='xxs' className={cn(styles.dataText, {
					[styles.darkThemeDataText]: theme === 'dark',
				})}>{formatTime(date, router.locale)}</Htag>
			</div>
		</Card>
	);
};