import { ContentListProps } from './ContentList.props';
import styles from './ContentList.module.css';
import { UserContentItem } from 'components/UserContentItem/UserContentItem';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const ContentList = ({ setType, setActive, setImage, setPostId }: ContentListProps): JSX.Element => {
    const context = useContext(AppContext);

    const content1 = {
        id: 1,
        type: 'both' as 'text' | 'image' | 'both',
        image: 'https://c.dns-shop.ru/thumb/st4/fit/760/600/01953b2a8ee70c7e62717184dfa78618/q93_6b65d4a9475fe4f2a153e2fd652f35b3ac33f365c74b735f34b29fd62647a7d8.jpg',
        text: 'Прохожу киберпанк, очень нравится. Надеюсь, такие игры будут выходить почаще. Сюжет вообще огонь...',
        date: '2023-05-05T13:36:28',
    };

    const content2 = {
        id: 2,
        type: 'text' as 'text' | 'image' | 'both',
        image: '',
        text: 'Парни, ситуация - живу в Крыму, пользовался Яндекс инвестициям, потом все перешло в ВТБ, продать акции не могу ибо санкции.' +
            'Вопрос - можете посоветовать брокеров с онлайн открытием счета(ну или крымских). Заранее спасибо!\n' +
            'P.S. По мосту ехать 10+ часов в одну сторону пока не особо хочу',
        date: '2023-03-17T19:04:45',
    };

    const content3 = {
        id: 3,
        type: 'image' as 'text' | 'image' | 'both',
        image: 'https://games.mail.ru/hotbox/content_files/game/2020/06/16/aed1e04647ec4b64ad63215ef6f57898.jpg',
        text: '',
        date: '2023-04-01T20:16:07',
    };

    const content = [content1, content2, content3];

    return (
        <div className={cn(styles.userContentList, {
            [styles.darkThemeUserContentList]: context.theme === 'dark',
        })}>
            {content.map(c => (
                <UserContentItem key={c.id} type={c.type} image={c.image} text={c.text} postId={c.id} date={c.date}
                    setType={setType} setActive={setActive} setImage={setImage} setPostId={setPostId} />
            ))}
        </div>
    );
};