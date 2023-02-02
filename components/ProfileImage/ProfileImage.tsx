import styles from './ProfileImage.module.css';
import Image from 'next/image';


export const ProfileImage = (): JSX.Element => {
    return (
        <div className={styles.imageWrapper}>
            <div className={styles.imageRingShadow} />
            <div className={styles.imageRing} />
            <Image className={styles.profileImage} draggable='false'
                loader={() => '/rainbow.jpg'}
                src='/rainbow.jpg'
                alt='image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
        </div>
    );
};