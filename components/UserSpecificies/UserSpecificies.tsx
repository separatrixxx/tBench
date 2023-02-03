import styles from './UserSpecificies.module.css';
import { Htag } from 'components/Htag/Htag';
import { IoMdInformationCircleOutline } from "react-icons/io";


export const UserSpecificies = (): JSX.Element => {    
    return (
        <div className={styles.userSpecificiesBlock}>
            <Htag tag='xs' className={styles.userSpecificies}>
                <span className={styles.userSpeciality}>Designer</span>, Moscow
            </Htag>
            <span className={styles.moreInfo}><IoMdInformationCircleOutline /></span>
        </div>
    );
};