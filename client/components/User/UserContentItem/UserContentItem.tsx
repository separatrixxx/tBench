import { UserContentItemProps } from './UserContentItem.props';
import styles from './UserContentItem.module.css';
import Image from 'next/image';
import { ContentActionsBar } from 'components/Content/ContentActionsBar/ContentActionsBar';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const UserContentItem = ({ type, image, text, postId, date, setType, setActive, setImage, setPostId }: UserContentItemProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    switch (type) {
        case 'image':
            return (
                <div className={cn(styles.userContentItem, {
                    [styles.darkThemeUserContentItem]: theme === 'dark',
                })}>
                    <Image className={styles.userContentImage} draggable='false'
                        loader={() => image ? image : ''}
                        src={image ? image : ''}
                        alt='image'
                        width={1}
                        height={1}
                        unoptimized={true}
                        priority={true}
                        onClick={() => {
                            setType('post');
                            setActive(true);
                            setImage(image);
                        }}
                    />
                    <ContentActionsBar postId={postId} date={date} setType={setType}
                        setActive={setActive} setPostId={setPostId} />
                </div>
            );
        case 'text':
            return (
                <div className={cn(styles.userContentItem, {
                    [styles.darkThemeUserContentItem]: theme === 'dark',
                })}>
                    <p className={cn(styles.userContentText, {
                        [styles.darkThemeUserContentText]: theme === 'dark',
                    })}>{text}</p>
                    <ContentActionsBar postId={postId} date={date} setType={setType}
                        setActive={setActive} setPostId={setPostId} />
                </div>
            );
        case 'both':
            return (
                <div className={cn(styles.userContentItem, {
                    [styles.darkThemeUserContentItem]: theme === 'dark',
                })}>
                    <Image className={styles.userContentImage} draggable='false'
                        loader={() => image ? image : ''}
                        src={image ? image : ''}
                        alt='image'
                        width={1}
                        height={1}
                        unoptimized={true}
                        priority={true}
                        onClick={() => {
                            setType('post');
                            setActive(true);
                            setImage(image);
                        }}
                    />
                    <p className={cn(styles.userContentTextBoth, {
                        [styles.darkThemeUserContentTextBoth]: theme === 'dark',
                    })}>{text}</p>
                    <ContentActionsBar postId={postId} date={date} setType={setType}
                        setActive={setActive} setPostId={setPostId} />
                </div>
            );
        default:
            return <></>;
    }
};