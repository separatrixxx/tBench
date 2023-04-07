import { HeaderUserIconProps } from './HeaderUserIcon.props';
import styles from './HeaderUserIcon.module.css';
import { useRouter } from 'next/router';
import Image from 'next/image';
import cn from 'classnames';


export const HeaderUserIcon = ({ user, userImage, className }: HeaderUserIconProps): JSX.Element => {
    const router = useRouter();

    return (
        <Image className={cn(className, styles.userIcon)} draggable='false'
            loader={() => userImage}
            src={userImage}
            alt='image'
            width={1}
            height={1}
            unoptimized={true}
            priority={true}
            onClick={() => router.push('/' + user)}
        />
    );
};