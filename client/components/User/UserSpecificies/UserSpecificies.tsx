import { UserSpecificiesProps } from './UserSpecificies.props';
import styles from './UserSpecificies.module.css';
import { Htag } from 'components/Common/Htag/Htag';
import Info from './info.svg';
import { useSelector } from 'react-redux';
import { AppState } from '@/pages/store';
import cn from 'classnames';


export const UserSpecificies = ({ active, setActive, setType }: UserSpecificiesProps): JSX.Element => {
    const theme = useSelector((state: AppState) => state.theme.theme);

    return (
        <div className={cn(styles.userSpecificiesBlock, {
            [styles.darkThemeUserSpecificiesBlock]: theme === 'dark',
        })} onClick={() => {
            setType('more_info');
            setActive(!active);
        }}>
            <Htag tag='xs' className={cn(styles.userSpecificies, {
                [styles.darkThemeText]: theme === 'dark',
            })}>
                <span className={styles.userSpeciality}>Designer</span>, Moscow
            </Htag>
            <span className={cn(styles.moreInfo, {
                [styles.darkThemeMoreInfo]: theme === 'dark',
            })}>
                <Info />
            </span>
        </div>
    );
};