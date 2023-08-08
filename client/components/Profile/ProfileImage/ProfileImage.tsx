import { ProfileImageProps } from './ProfileImage.props';
import styles from './ProfileImage.module.css';
import Image from 'next/image';


export const ProfileImage = ({ active, setActive, setType }: ProfileImageProps): JSX.Element => {
    const image = '/rainbow.jpg';

    return (
        <div className={styles.imageWrapper}>
            <div className={styles.imageRingShadow} />
            <div className={styles.imageRing} />
            <Image className={styles.profileImage} draggable='false'
                loader={() => image}
                src={image}
                alt='image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
                onClick={() => {
                    setType('image');
                    setActive(!active);
                }}
            />
        </div>
    );
};