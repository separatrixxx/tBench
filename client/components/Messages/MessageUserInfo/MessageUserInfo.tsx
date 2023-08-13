import { MessageUserInfoProps } from './MessageUserInfo.props';
import styles from './MessageUserInfo.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { useRouter } from 'next/router';
import { setLocale } from 'helpers/locale.helper';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const MessageUserInfo = ({ user, username }: MessageUserInfoProps): JSX.Element => {
	const router = useRouter();

	const theme = useSelector((state: AppState) => state.theme.theme);

	return (
		<Link href={'/' + user} className={cn(styles.messageUserInfoBlock, {
			[styles.darkThemeMessageUserInfoBlock]: theme === 'dark',
		})}>
			<Htag tag='s' className={styles.username}>
				{username}
			</Htag>
			<Htag tag='xxs' className={cn(styles.lastSeen, {
				[styles.darkThemeText]: theme === 'dark',
			})}>
				{setLocale(router.locale).last_seen + " 18:33"}
			</Htag>
		</Link>
	);
};