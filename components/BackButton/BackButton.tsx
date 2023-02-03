import { BackButtonProps } from './BackButton.props';
import styles from './BackButton.module.css';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from "react-icons/io";


export const BackButton = ({ link }: BackButtonProps): JSX.Element => {
    const router = useRouter();

	return (
        <div className={styles.backButton}>
            <span className={styles.arrowBack}><IoIosArrowBack /></span>
            <div className={styles.blurBlock} onClick={() => router.push(link)} />
        </div>
    );
};