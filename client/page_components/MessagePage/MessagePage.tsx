import { MessagePageProps } from './MessagePage.props';
import styles from './MessagePage.module.css';
import { BackButton } from 'components/Buttons/BackButton/BackButton';
import { AppContextProvider } from 'context/app.context';
import { HeaderContent } from 'components/Headers/HeaderContent/HeaderContent';
import { HeaderUserIcon } from 'components/Headers/HeaderUserIcon/HeaderUserIcon';
import { MessageUserInfo } from 'components/Messages/MessageUserInfo/MessageUserInfo';
import cn from 'classnames';


export const MessagePage = ({ theme, user }: MessagePageProps): JSX.Element => {
	const username = 'separatrix';

	return (
		<AppContextProvider theme={theme} user={user}>
			<div className={cn(styles.messageWrapper, {
				[styles.darkThemeWrapper]: theme === 'dark',
			})}>
				<BackButton link='/profile' />
				<HeaderContent className={styles.messageHeader} position='left'>
					<HeaderUserIcon className={styles.messageUserIcon} user='profile' userImage='/rainbow.jpg' />
					<MessageUserInfo user='profile' username={username} />
				</HeaderContent>
			</div>
		</AppContextProvider>
	);
};