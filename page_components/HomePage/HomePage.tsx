import styles from './HomePage.module.css';
import { Header } from "components/Header/Header";
import { AuthForm } from 'components/AuthForm/AuthForm';

export const HomePage = (): JSX.Element => {
	return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <div className={styles.startBlock}>

                </div>
                <AuthForm />
            </div>
        </>
    );
};