import { MessageItemProps } from './MessageItem.props';
import styles from './MessageItem.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import Link from 'next/link';
import { Htag } from 'components/Htag/Htag';
import { formatTime } from 'helpers/format.helper';
import cn from 'classnames';


export const MessageItem = ({ messageId, userImage, username, text, date }: MessageItemProps): JSX.Element => {
    const router = useRouter();

    const context = useContext(AppContext);

    return (
        <div className={cn(styles.messageItemBlock, {
            [styles.darkThemeMessageItemBlock]: context.theme === 'dark',
        })}>
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
					[styles.darkThemeMessageText]: context.theme === 'dark',
				})}>{text}</p>
				<Htag tag='xxs' className={cn(styles.dataText, {
					[styles.darkThemeDataText]: context.theme === 'dark',
				})}>{formatTime(date, router.locale)}</Htag>
			</div>
        </div>
    );
};