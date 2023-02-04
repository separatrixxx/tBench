import { UserContentItemProps } from './UserContentItem.props';
import styles from './UserContentItem.module.css';
import Image from 'next/image';
import { ContentActionsBar } from 'components/ContentActionsBar/ContentActionsBar';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const UserContentItem = ({ type, image, text }: UserContentItemProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    switch (type) {
		case 'image':
            return (
                <>
                    <div className={styles.userContentItem}>
                        <div className={styles.imageBlock}>
                            <Image className={styles.userContentImage} draggable='false'
                                loader={() => image ? image : ''}
                                src={image ? image : ''}
                                alt='image'
                                fill={true}
                                unoptimized={true}
                                priority={true}
                                onClick={() => setActive(!active)}
                            />
                        </div>
                        <ContentActionsBar />
                    </div>
                    <Modal active={active} setActive={setActive}>
                        <div className={styles.imageBlockFull}>
                            <Image className={styles.userContentImageFull} draggable='false'
                                loader={() => image ? image : ''}
                                src={image ? image : ''}
                                alt='image'
                                fill={true}
                                unoptimized={true}
                                priority={true}
                                onClick={() => setActive(!active)}
                            />
                        </div>
                    </Modal>
                </>
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
                <>
                    <div className={styles.userContentItem}>
                        <div className={styles.imageBlock}>
                            <Image className={styles.userContentImage} draggable='false'
                                loader={() => image ? image : ''}
                                src={image ? image : ''}
                                alt='image'
                                fill={true}
                                unoptimized={true}
                                priority={true}
                                onClick={() => setActive(!active)}
                            />
                        </div>
                        <p className={styles.userContentTextBoth}>{text}</p>
                        <ContentActionsBar />
                    </div>
                    <Modal active={active} setActive={setActive}>
                        <div className={styles.imageBlockFull}>
                            <Image className={styles.userContentImageFull} draggable='false'
                                loader={() => image ? image : ''}
                                src={image ? image : ''}
                                alt='image'
                                fill={true}
                                unoptimized={true}
                                priority={true}
                                onClick={() => setActive(!active)}
                            />
                        </div>
                    </Modal>
                </>
            );;
		default:
			return <></>;
	}
};