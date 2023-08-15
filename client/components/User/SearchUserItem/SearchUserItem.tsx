import { SearchUserItemProps } from './SearchUserItem.props';
import styles from './SearchUserItem.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { useSelector } from 'react-redux';
import { AppState } from 'features/store/store';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';


export const SearchUserItem = ({ firstName, lastName, username }: SearchUserItemProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);
    const router = useRouter();

    const image = '/rainbow.jpg';

    return (
        <div className={cn(styles.searchUserItem, {
            [styles.darkThemeSearchUserItem]: theme === 'dark',
        })} onClick={() => router.push('/profile')}>
            <Image className={styles.searchUserImage} draggable='false'
                loader={() => image ? image : ''}
                src={image ? image : ''}
                alt='image'
                width={1}
                height={1}
                unoptimized={true}
                priority={true}
            />
            <div className={styles.userInfo}>
                <Htag tag='s' className={styles.name}>{firstName + ' ' + lastName}</Htag>
                <Htag tag='s'>{username}</Htag>
            </div>
        </div>
    );
};
