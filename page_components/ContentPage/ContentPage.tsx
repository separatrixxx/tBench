import { ContentPageProps } from './ContentPage.props';
import styles from './ContentPage.module.css';
import { HeaderContent } from 'components/HeaderContent/HeaderContent';
import { AppContextProvider } from 'context/app.context';
import cn from 'classnames';


export const ContentPage = ({ theme }: ContentPageProps): JSX.Element => {
    return (
        <AppContextProvider theme={theme} >
            <div className={cn(styles.contentWrapper, {
                [styles.darkThemeWrapper]: theme === 'dark',
            })}>
                <HeaderContent />
            </div>
        </AppContextProvider>
    );
};