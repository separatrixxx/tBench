import { ContentPageProps } from './ContentPage.props';
import styles from './ContentPage.module.css';
import { HeaderContent } from 'components/HeaderContent/HeaderContent';
import { AppContextProvider } from 'context/app.context';
import { InputContent } from 'components/InputContent/InputContent';
import { HeaderUserIcon } from 'components/HeaderUserIcon/HeaderUserIcon';
import cn from 'classnames';


export const ContentPage = ({ theme }: ContentPageProps): JSX.Element => {
    return (
        <AppContextProvider theme={theme} >
            <div className={cn(styles.contentWrapper, {
                [styles.darkThemeWrapper]: theme === 'dark',
            })}>
                <HeaderContent className={styles.headerContent} position='right'>
                    <InputContent />
                    <HeaderUserIcon className={styles.contentUserIcon} user='profile' userImage='/rainbow.jpg' />
                </HeaderContent>
            </div>
        </AppContextProvider>
    );
};