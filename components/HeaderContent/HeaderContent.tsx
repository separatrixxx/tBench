import styles from './HeaderContent.module.css';
import { HeaderUserIcon } from 'components/HeaderUserIcon/HeaderUserIcon';
import { InputContent } from 'components/InputContent/InputContent';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';


export const HeaderContent = (): JSX.Element => {
    const context = useContext(AppContext);

    return (
        <header className={cn(styles.headerContent, {
            [styles.darkThemeHeaderContent]: context.theme === 'dark',
        })}>
            <InputContent />
            <HeaderUserIcon />
        </header>
    );
};