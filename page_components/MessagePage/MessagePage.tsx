import { MessagePageProps } from './MessagePage.props';
import styles from './MessagePage.module.css';
import { BackButton } from 'components/BackButton/BackButton';
import { AppContextProvider } from 'context/app.context';
import { HeaderContent } from 'components/HeaderContent/HeaderContent';
import { HeaderUserIcon } from 'components/HeaderUserIcon/HeaderUserIcon';
import { MessageUserInfo } from 'components/MessageUserInfo/MessageUserInfo';
import cn from 'classnames';


export const MessagePage = ({ theme }: MessagePageProps): JSX.Element => {
	const username = 'separatrix';

	return (
		<AppContextProvider theme={theme}>
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