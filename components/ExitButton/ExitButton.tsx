import { useRouter } from 'next/router';
import styles from './ExitButton.module.css';
import { IoExitOutline } from "react-icons/io5";


export const ExitButton = (): JSX.Element => {
    const router = useRouter();

	return (
        <span className={styles.exitButton} onClick={() => {
            router.push('/');
            localStorage.clear();
        }}>
            <IoExitOutline />
        </span>
    );
};