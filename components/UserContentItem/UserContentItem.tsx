import { UserContentItemProps } from './UserContentItem.props';
import styles from './UserContentItem.module.css';
import Image from 'next/image';
import { ContentActionsBar } from 'components/ContentActionsBar/ContentActionsBar';

export const UserContentItem = ({ type, image, text }: UserContentItemProps): JSX.Element => {
    switch (type) {
		case 'image':
            return (
                <div className={styles.userContentItem}>
                    <div className={styles.imageBlock}>
                        <Image className={styles.userContentImage} draggable='false'
                            loader={() => image ? image : ''}
                            src={image ? image : ''}
                            alt='image'
                            fill={true}
                            unoptimized={true}
                            priority={true}
                        />
                    </div>
                    <ContentActionsBar />
                </div>
            );
		case 'text':
            return (
                <div className={styles.userContentItem}>
                    <p className={styles.userContentText}>{text}</p>
                    <ContentActionsBar />
                </div>
            );
		case 'both':
            return (
                <div className={styles.userContentItem}>
                    <div className={styles.imageBlock}>
                        <Image className={styles.userContentImage} draggable='false'
                            loader={() => image ? image : ''}
                            src={image ? image : ''}
                            alt='image'
                            fill={true}
                            unoptimized={true}
                            priority={true}
                        />
                    </div>
                    <p className={styles.userContentTextBoth}>{text}</p>
                    <ContentActionsBar />
                </div>
            );;
		default:
			return <></>;
	}
};