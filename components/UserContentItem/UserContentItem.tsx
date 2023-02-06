import { UserContentItemProps } from './UserContentItem.props';
import styles from './UserContentItem.module.css';
import Image from 'next/image';
import { ContentActionsBar } from 'components/ContentActionsBar/ContentActionsBar';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import { useResizeW, useResizeH } from 'hooks/useResize';
import cn from "classnames";

export const UserContentItem = ({ type, image, text }: UserContentItemProps): JSX.Element => {
    const [active, setActive] = useState<boolean>(false);

    const width = useResizeW();
    const height = useResizeH();

    switch (type) {
		case 'image':
            return (
                <>
                    <div className={styles.userContentItem}>
                        <Image className={styles.userContentImage} draggable='false'
                            loader={() => image ? image : ''}
                            src={image ? image : ''}
                            alt='image'
                            width={1}
                            height={1}
                            unoptimized={true}
                            priority={true}
                            onClick={() => setActive(!active)}
                        />
                        <ContentActionsBar />
                    </div>
                    <Modal active={active} setActive={setActive}>
                        <Image className={cn(styles.userContentImageFull, {
                            [styles.widthFull]: width > height,
                            [styles.heightFull]: width < height,
                        })} draggable='false'
                            loader={() => image ? image : ''}
                            src={image ? image : ''}
                            alt='image'
                            width={1}
                            height={1}
                            unoptimized={true}
                            priority={true}
                            onClick={() => setActive(!active)}
                        />
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
                        <Image className={styles.userContentImage} draggable='false'
                            loader={() => image ? image : ''}
                            src={image ? image : ''}
                            alt='image'
                            width={1}
                            height={1}
                            unoptimized={true}
                            priority={true}
                            onClick={() => setActive(!active)}
                        />
                        <p className={styles.userContentTextBoth}>{text}</p>
                        <ContentActionsBar />
                    </div>
                    <Modal active={active} setActive={setActive}>
                        <Image className={cn(styles.userContentImageFull, {
                            [styles.widthFull]: width > height,
                            [styles.heightFull]: width < height,
                        })} draggable='false'
                            loader={() => image ? image : ''}
                            src={image ? image : ''}
                            alt='image'
                            width={1}
                            height={1}
                            unoptimized={true}
                            priority={true}
                            onClick={() => setActive(!active)}
                        />
                    </Modal>
                </>
            );
		default:
			return <></>;
	}
};