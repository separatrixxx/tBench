import { HeaderUserIconProps } from './HeaderUserIcon.props';
import styles from './HeaderUserIcon.module.css';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';


export const HeaderUserIcon = ({ user, userImage, className }: HeaderUserIconProps): JSX.Element => {
    return (
        <Link href={'/' + user}>
            <Image className={cn(className, styles.userIcon)} draggable='false'
                loader={() => userImage}
                src={userImage}
                alt='image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
        </Link>
    );
};