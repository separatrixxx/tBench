import { MessageUserInfoProps } from './MessageUserInfo.props';
import styles from './MessageUserInfo.module.css';
import { Htag } from 'components/Htag/Htag';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import Link from 'next/link';
import cn from 'classnames';


export const MessageUserInfo = ({ user, username }: MessageUserInfoProps): JSX.Element => {
	const router = useRouter();

	const context = useContext(AppContext);

	return (
		<Link href={'/' + user} className={cn(styles.messageUserInfoBlock, {
			[styles.darkThemeMessageUserInfoBlock]: context.theme === 'dark',
		})}>
			<Htag tag='s' className={styles.username}>
				{username}
			</Htag>
			<Htag tag='xxs' className={cn(styles.lastSeen, {
				[styles.darkThemeText]: context.theme === 'dark',
			})}>
				{setLocale(router.locale).last_seen + " 18:33"}
			</Htag>
		</Link>
	);
};