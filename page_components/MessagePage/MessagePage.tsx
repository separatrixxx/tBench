import { MessagePageProps } from './MessagePage.props';
import styles from './MessagePage.module.css';
import { BackButton } from 'components/BackButton/BackButton';
import { AppContextProvider } from 'context/app.context';
import cn from 'classnames';


export const MessagePage = ({ theme }: MessagePageProps): JSX.Element => {
	return (
		<AppContextProvider theme={theme}>
			<div className={cn(styles.messageWrapper, {
				[styles.darkThemeWrapper]: theme === 'dark',
			})}>
				<BackButton link='/profile' />
			</div>
		</AppContextProvider>
	);
};