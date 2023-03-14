import { HeaderContentProps } from './HeaderContent.props';
import styles from './HeaderContent.module.css';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';


export const HeaderContent = ({ children, position, className }: HeaderContentProps): JSX.Element => {
    const context = useContext(AppContext);

    return (
        <header className={cn(className, styles.headerContent, {
            [styles.darkThemeHeaderContent]: context.theme === 'dark',
            [styles.headerPositionRight]: position === 'right',
            [styles.headerPositionLeft]: position === 'left',
        })}>
            {children}
        </header>
    );
};