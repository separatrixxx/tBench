import { AuthBlockProps } from './AuthBlock.props';
import styles from './AuthBlock.module.css';
import Image from 'next/image';

export const AuthBlock = ({ children }: AuthBlockProps): JSX.Element => {
    return (
        <div className={styles.authBlock}>
            {children}
            <Image className={styles.authBlockImage} draggable='false'
                loader={() => '/home_image.png'}
                src='/home_image.png'
                alt='image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
        </div>
    );
};