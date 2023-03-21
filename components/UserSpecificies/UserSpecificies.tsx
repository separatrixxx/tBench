import { UserSpecificiesProps } from './UserSpecificies.props';
import styles from './UserSpecificies.module.css';
import { Htag } from 'components/Htag/Htag';
import { useContext } from 'react';
import { AppContext } from 'context/app.context';
import Info from './info.svg';
import cn from 'classnames';


export const UserSpecificies = ({ active, setActive, setType }: UserSpecificiesProps): JSX.Element => {
    const context = useContext(AppContext);

    return (
        <div className={cn(styles.userSpecificiesBlock, {
            [styles.darkThemeUserSpecificiesBlock]: context.theme === 'dark',
        })} onClick={() => {
            setType('more_info');
            setActive(!active);
        }}>
            <Htag tag='xs' className={cn(styles.userSpecificies, {
                [styles.darkThemeText]: context.theme === 'dark',
            })}>
                <span className={styles.userSpeciality}>Designer</span>, Moscow
            </Htag>
            <span className={cn(styles.moreInfo, {
                [styles.darkThemeMoreInfo]: context.theme === 'dark',
            })}>
                <Info />
            </span>
        </div>
    );
};