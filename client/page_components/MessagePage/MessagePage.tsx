import styles from './MessagePage.module.css';
import { BackButton } from 'components/Buttons/BackButton/BackButton';
import { HeaderContent } from 'components/Headers/HeaderContent/HeaderContent';
import { HeaderUserIcon } from 'components/Headers/HeaderUserIcon/HeaderUserIcon';
import { MessageUserInfo } from 'components/Messages/MessageUserInfo/MessageUserInfo';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const MessagePage = (): JSX.Element => {
	const theme = useSelector((state: AppState) => state.theme.theme);

	const username = 'separatrix';

	return (
		<div className={cn(styles.messageWrapper, {
			[styles.darkThemeWrapper]: theme === 'dark',
		})}>
			<BackButton link='/profile' />
			<HeaderContent className={styles.messageHeader} position='left'>
				<HeaderUserIcon className={styles.messageUserIcon} userImage='/rainbow.jpg' />
				<MessageUserInfo user='profile' username={username} />
			</HeaderContent>
		</div>
	);
};