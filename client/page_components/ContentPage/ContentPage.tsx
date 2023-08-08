import { ContentPageProps } from './ContentPage.props';
import styles from './ContentPage.module.css';
import { HeaderContent } from 'components/Headers/HeaderContent/HeaderContent';
import { AppContextProvider } from 'context/app.context';
import { InputContent } from 'components/Inputs/InputContent/InputContent';
import { HeaderUserIcon } from 'components/Headers/HeaderUserIcon/HeaderUserIcon';
import { ContentList } from 'components/Content/ContentList/ContentList';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ContentModal } from 'components/Content/ContentModal/ContentModal';
import { NotificationsButton } from 'components/Buttons/NotificationsButton/NotificationsButton';
import { Htag } from 'components/Common/Htag/Htag';
import { setLocale } from 'helpers/locale.helper';
import { motion } from 'framer-motion';
import { MessagesList } from 'components/Messages/MessagesList/MessagesList';
import cn from 'classnames';


export const ContentPage = ({ theme, user }: ContentPageProps): JSX.Element => {
    const router = useRouter();

    const [activeContent, setActiveContent] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    const [postId, setPostId] = useState<number>(NaN);
    const [typeContent, setTypeContent] = useState<'post' | 'comments'>('post');
    const [page, setPage] = useState<'content' | 'messages'>('content');

    const variants = {
        content: {
            transform: 'translate(0%, 0%)',
        },
        messages: {
            transform: 'translate(-100%, 0%)',
        }
    };

    return (
        <AppContextProvider theme={theme} user={user}>
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
                <div className={styles.pagesWrapper}>
                    <motion.div className={styles.contentPage}
                        variants={variants}
                        initial={page === 'content' ? 'content' : 'messages'}
                        transition={{ duration: 0.3 }}
                        animate={page === 'content' ? 'content' : 'messages'}>
                        <ContentList setType={setTypeContent} setActive={setActiveContent} setImage={setImage} setPostId={setPostId} />
                    </motion.div>
                    <motion.div className={styles.messagesPage}
                        variants={variants}
                        initial={page === 'content' ? 'content' : 'messages'}
                        transition={{ duration: 0.3 }}
                        animate={page === 'content' ? 'content' : 'messages'}>
                        <MessagesList />
                    </motion.div>
                </div>
                <ContentModal type={typeContent} active={activeContent} setActive={setActiveContent} image={image} postId={postId} />
            </div>
        </AppContextProvider>
    );
};