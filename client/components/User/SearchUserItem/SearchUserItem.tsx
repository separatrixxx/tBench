import { SearchUserItemProps } from './SearchUserItem.props';
import styles from './SearchUserItem.module.css';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';
import { Htag } from 'components/Common/Htag/Htag';


export const SearchUserItem = ({ firstName, lastName, username }: SearchUserItemProps): JSX.Element => {
    const context = useContext(AppContext);

    return (
        <div className={cn(styles.searchUserItem, {
            [styles.darkThemeSearchUserItem]: context.theme === 'dark',
        })}>
            <Htag tag='l'>{username}</Htag>
        </div>
    );
}
