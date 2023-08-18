import { HeaderUserIconProps } from './HeaderUserIcon.props';
import styles from './HeaderUserIcon.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import cn from 'classnames';


export const HeaderUserIcon = ({ userImage, className }: HeaderUserIconProps): JSX.Element => {
    const user = useSelector((state: AppState) => state.user.user);
    
    return (
        <Link href={'/' + user.username}>
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