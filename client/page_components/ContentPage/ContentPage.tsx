import { ContentPageProps } from './ContentPage.props';
import styles from './ContentPage.module.css';
import { HeaderContent } from 'components/HeaderContent/HeaderContent';
import { AppContextProvider } from 'context/app.context';
import { InputContent } from 'components/InputContent/InputContent';
import { HeaderUserIcon } from 'components/HeaderUserIcon/HeaderUserIcon';
import { ContentList } from 'components/ContentList/ContentList';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ContentModal } from 'components/ContentModal/ContentModal';
import { NotificationsButton } from 'components/NotificationsButton/NotificationsButton';
import { Htag } from 'components/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import cn from 'classnames';


export const ContentPage = ({ theme }: ContentPageProps): JSX.Element => {
    const router = useRouter();

    const [activeContent, setActiveContent] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    const [postId, setPostId] = useState<number>(NaN);
    const [typeContent, setTypeContent] = useState<'post' | 'comments'>('post');
    const [page, setPage] = useState<'content' | 'messages'>('content');

    return (
        <AppContextProvider theme={theme} >
            <div className={cn(styles.contentWrapper, {
                [styles.darkThemeWrapper]: theme === 'dark',
            })}>
                <HeaderContent className={styles.headerContent} position='right'>
                    <InputContent />
                    <NotificationsButton isNotification={true} />
                    <HeaderUserIcon className={styles.contentUserIcon} user='profile' userImage='/rainbow.jpg' />
                </HeaderContent>
                <div className={styles.pagesSwitch}>
                    <Htag tag='xl' className={cn(styles.switchText, {
                        [styles.darkThemeSwitchText]: theme === 'dark',
                        [styles.dontActiveText]: page !== 'content' && theme !== 'dark',
                        [styles.darkThemeDontActiveText]: page !== 'content' && theme === 'dark',
                    })} onClick={() => setPage('content')}>{setLocale(router.locale).content}</Htag>
                    <Htag tag='xl' className={cn(styles.switchText, {
                        [styles.darkThemeSwitchText]: theme === 'dark',
                        [styles.dontActiveText]: page !== 'messages' && theme !== 'dark',
                        [styles.darkThemeDontActiveText]: page !== 'messages' && theme === 'dark',
                    })} onClick={() => setPage('messages')}>{setLocale(router.locale).messages}</Htag>
                </div>
                <ContentList setType={setTypeContent} setActive={setActiveContent} setImage={setImage} setPostId={setPostId} />
                <ContentModal type={typeContent} active={activeContent} setActive={setActiveContent} image={image} postId={postId} />
            </div>
        </AppContextProvider>
    );
};