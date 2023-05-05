import { ContentPageProps } from './ContentPage.props';
import styles from './ContentPage.module.css';
import { HeaderContent } from 'components/HeaderContent/HeaderContent';
import { AppContextProvider } from 'context/app.context';
import { InputContent } from 'components/InputContent/InputContent';
import { HeaderUserIcon } from 'components/HeaderUserIcon/HeaderUserIcon';
import { ContentList } from 'components/ContentList/ContentList';
import { useState } from 'react';
import { ContentModal } from 'components/ContentModal/ContentModal';
import cn from 'classnames';
import { NotificationsButton } from 'components/NotificationsButton/NotificationsButton';


export const ContentPage = ({ theme }: ContentPageProps): JSX.Element => {
    const [activeContent, setActiveContent] = useState<boolean>(false);
    const [image, setImage] = useState<string>('');
    const [postId, setPostId] = useState<number>(NaN);
    const [typeContent, setTypeContent] = useState<'post' | 'comments'>('post');

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
                <ContentList setType={setTypeContent} setActive={setActiveContent} setImage={setImage} setPostId={setPostId} />
                <ContentModal type={typeContent} active={activeContent} setActive={setActiveContent} image={image} postId={postId} />
            </div>
        </AppContextProvider>
    );
};