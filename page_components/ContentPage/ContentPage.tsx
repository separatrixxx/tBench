import { ContentPageProps } from './ContentPage.props';
import styles from './ContentPage.module.css';
import { HeaderContent } from 'components/HeaderContent/HeaderContent';
import { AppContextProvider } from 'context/app.context';

export const ContentPage = ({ theme }: ContentPageProps): JSX.Element => {
    return (
        <AppContextProvider theme={theme} >
            <div className={styles.contentWrapper}>
                <HeaderContent />
            </div>
        </AppContextProvider>
    );
};