import { UserSpecificiesProps } from './UserSpecificies.props';
import styles from './UserSpecificies.module.css';
import { Htag } from 'components/Htag/Htag';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import cn from 'classnames';


export const UserSpecificies = ({ active, setActive, setType }: UserSpecificiesProps): JSX.Element => {
    const context = useContext(AppContext);

    return (
        <div className={styles.userSpecificiesBlock}>
            <Htag tag='xs' className={cn(styles.userSpecificies, {
                [styles.darkThemeText]: context.theme === 'dark',
            })}>
                <span className={styles.userSpeciality}>Designer</span>, Moscow
            </Htag>
            <span className={cn(styles.moreInfo, {
                [styles.darkThemeText]: context.theme === 'dark',
            })} onClick={() => {
                setType('more_info');
                setActive(!active);
            }}>
                <IoMdInformationCircleOutline />
            </span>
        </div>
    );
};