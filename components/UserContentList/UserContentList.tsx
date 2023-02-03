import styles from './UserContentList.module.css';
import { UserContentItem } from 'components/UserContentItem/UserContentItem';

export const UserContentList = (): JSX.Element => {
    let content1 = {
        type: 'both' as 'text' | 'image' | 'both',
        image: 'https://c.dns-shop.ru/thumb/st4/fit/760/600/01953b2a8ee70c7e62717184dfa78618/q93_6b65d4a9475fe4f2a153e2fd652f35b3ac33f365c74b735f34b29fd62647a7d8.jpg',
        text: 'Прохожу киберпанк, очень нравится. Надеюсь, такие игры будут выходить почаще. Сюжет вообще огонь...',
    };

    let content2 = {
        type: 'text' as 'text' | 'image' | 'both',
        image: '',
        text: 'Парни, ситуация - живу в Крыму, пользовался Яндекс инвестициям, потом все перешло в ВТБ, продать акции не могу ибо санкции.' +
        'Вопрос - можете посоветовать брокеров с онлайн открытием счета(ну или крымских). Заранее спасибо!\n' +
        'P.S. По мосту ехать 10+ часов в одну сторону пока не особо хочу',
    };

    let content3 = {
        type: 'image' as 'text' | 'image' | 'both',
        image: 'https://games.mail.ru/hotbox/content_files/game/2020/06/16/aed1e04647ec4b64ad63215ef6f57898.jpg',
        text: '',
    };

    let content = [content1, content2, content3];

	return (
        <div className={styles.userContentList}>
            {content.map(c => (
                <UserContentItem type={c.type} image={c.image} text={c.text} />
            ))}
        
        </div>
    );
};