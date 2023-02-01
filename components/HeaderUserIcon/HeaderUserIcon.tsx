import { useRouter } from 'next/router';
import styles from './HeaderUserIcon.module.css';
import Image from 'next/image';


export const HeaderUserIcon = (): JSX.Element => {
    const router = useRouter();

    return (
        <Image className={styles.userIcon} draggable='false'
            loader={() => '/home_image.png'}
            src='/home_image.png'
            alt='image'
            width={1}
            height={1}
            unoptimized={true}
            priority={true}
            onClick={() => router.push('/profile')}
        />
    );
};