import { UserContentItemProps } from './UserContentItem.props';
import styles from './UserContentItem.module.css';
import Image from 'next/image';
import { ContentActionsBar } from 'components/ContentActionsBar/ContentActionsBar';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';

export const UserContentItem = ({ type, image, text, setActive, setImage }: UserContentItemProps): JSX.Element => {
    const context = useContext(AppContext);

    switch (type) {
        case 'image':
            return (
                <>
                    <div className={cn(styles.userContentItem, {
                        [styles.darkThemeUserContentItem]: context.theme === 'dark',
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
                                setActive(true);
                                setImage(image);
                            }}
                        />
                        <ContentActionsBar />
                    </div>
                </>
            );
        case 'text':
            return (
                <div className={cn(styles.userContentItem, {
                    [styles.darkThemeUserContentItem]: context.theme === 'dark',
                })}>
                    <p className={cn(styles.userContentText, {
                        [styles.darkThemeUserContentText]: context.theme === 'dark',
                    })}>{text}</p>
                    <ContentActionsBar />
                </div>
            );
        case 'both':
            return (
                <>
                    <div className={cn(styles.userContentItem, {
                        [styles.darkThemeUserContentItem]: context.theme === 'dark',
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
                                setActive(true);
                                setImage(image);
                            }}
                        />
                        <p className={cn(styles.userContentTextBoth, {
                            [styles.darkThemeUserContentTextBoth]: context.theme === 'dark',
                        })}>{text}</p>
                        <ContentActionsBar />
                    </div>
                </>
            );
        default:
            return <></>;
    }
};