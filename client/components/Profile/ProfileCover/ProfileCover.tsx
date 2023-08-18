import { ProfileCoverProps } from './ProfileCover.props';
import styles from './ProfileCover.module.css';
import Image from 'next/image';
import cn from 'classnames';


export const ProfileCover = ({ active, setActive, setType, isProfile }: ProfileCoverProps): JSX.Element => {
    const cover = '/cover.jpg';

    return (
        <Image className={cn(styles.userCover, {
            [styles.profileCover]: isProfile,
        })} draggable='false'
            loader={() => cover}
            src={cover}
            alt='image'
            width={1}
            height={1}
            unoptimized={true}
            priority={true}
            onClick={() => {
                if (isProfile) {
                    setType('image');
                    setActive(!active);
                }
            }}
        />
    );
};