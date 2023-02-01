import styles from './ProfileImage.module.css';
import Image from 'next/image';


export const ProfileImage = (): JSX.Element => {
    return (
        <div className={styles.imageWrapper}>
            <div className={styles.imageRingShadow} />
            <div className={styles.imageRing} />
            <Image className={styles.profileImage} draggable='false'
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