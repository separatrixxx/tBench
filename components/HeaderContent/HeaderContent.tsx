import { HeaderUserIcon } from 'components/HeaderUserIcon/HeaderUserIcon';
import { InputContent } from 'components/InputContent/InputContent';
import styles from './HeaderContent.module.css';


export const HeaderContent = (): JSX.Element => {    
    return (
        <header className={styles.headerContent}>
            <InputContent />
            <HeaderUserIcon />
        </header>
    );
};