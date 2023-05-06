import styles from './MessagesList.module.css';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';
import { MessageItem } from 'components/MessageItem/MessageItem';

export const MessagesList = (): JSX.Element => {
    const context = useContext(AppContext);

    const message1 = {
        id: 1,
        userImage: 'https://cs12.pikabu.ru/post_img/big/2022/11/08/10/1667929102152124336.jpg',
        username: 'natasha228',
        text: 'Прохожу киберпанк, очень нравится. Надеюсь, такие игры будут выходить почаще. Сюжет вообще огонь...',
        date: '2023-05-05T13:36:28',
    };

    const message2 = {
        id: 2,
        userImage: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg',
        username: 'bruder_pirogen',
        text: 'Ich bin eine Katze',
        date: '2023-05-06T11:13:09',
    };

    const message3 = {
        id: 3,
        userImage: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
        username: 'aboba',
        text: 'Привет, срочно нужно поговорить. Позвони мне, пожалуйста, когда освободишься',
        date: '2023-05-06T16:43:34',
    };

    const messages = [message1, message2, message3];

    return (
        <div className={styles.messagesList}>
            {messages.map(m => (
                <MessageItem key={m.id} messageId={m.id} userImage={m.userImage} username={m.username} text={m.text} date={m.date} />
            ))}
        </div>
    );
};