import { NotificationsButtonProps } from './NotificationsButton.props';
import styles from './NotificationsButton.module.css';
import { useContext, useState } from 'react';
import { AppContext } from 'context/app.context';
import Bell from './bell.svg';
import cn from 'classnames';


export const NotificationsButton = ({ isNotification }: NotificationsButtonProps): JSX.Element => {
	const context = useContext(AppContext);

	const [notify, setNotify] = useState<boolean>(isNotification);

	return (
		<span className={cn(styles.notificationsButton, {
			[styles.darkThemeNotificationsButton]: context.theme === 'dark',
			[styles.bell]: notify,
		})}>
			<Bell onClick={() => setNotify(false)} />
			<span className={cn(styles.notify, {
				[styles.darkThemeNotify]: context.theme === 'dark',
				[styles.visible]: notify,
			})} />
		</span>
	);
};