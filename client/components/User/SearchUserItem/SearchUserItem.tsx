import { SearchUserItemProps } from './SearchUserItem.props';
import styles from './SearchUserItem.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const SearchUserItem = ({ firstName, lastName, username }: SearchUserItemProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    return (
        <div className={cn(styles.searchUserItem, {
            [styles.darkThemeSearchUserItem]: theme === 'dark',
        })}>
            <Htag tag='l'>{username}</Htag>
        </div>
    );
};
