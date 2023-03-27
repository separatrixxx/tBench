import { ProfileCoverProps } from './ProfileCover.props';
import styles from './ProfileCover.module.css';
import Image from 'next/image';


export const ProfileCover = ({ active, setActive, setType }: ProfileCoverProps): JSX.Element => {
    const cover = '/cover.jpg';

    return (
        <Image className={styles.profileCover} draggable='false'
            loader={() => cover}
            src={cover}
            alt='image'
            width={1000}
            height={1000}
            unoptimized={true}
            priority={true}
            onClick={() => {
                setType('image');
                setActive(!active);
            }}
        />
    );
};