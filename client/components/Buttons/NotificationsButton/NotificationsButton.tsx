import { NotificationsButtonProps } from './NotificationsButton.props';
import styles from './NotificationsButton.module.css';
import { useState } from 'react';
import Bell from './bell.svg';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';



export const NotificationsButton = ({ isNotification }: NotificationsButtonProps): JSX.Element => {
	const theme = useSelector((state: AppState) => state.theme.theme);

	const [notify, setNotify] = useState<boolean>(isNotification);

	return (
		<span className={cn(styles.notificationsButton, {
			[styles.darkThemeNotificationsButton]: theme === 'dark',
			[styles.bell]: notify,
		})}>
			<Bell onClick={() => setNotify(false)} />
			<span className={cn(styles.notify, {
				[styles.darkThemeNotify]: theme === 'dark',
				[styles.visible]: notify,
			})} />
		</span>
	);
};