import styles from './HomePage.module.css';
import { Header } from "components/Header/Header";
import { AuthForm } from 'components/AuthForm/AuthForm';
import Image from 'next/image'

export const HomePage = (): JSX.Element => {
	return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Image className={styles.startBlock}
					loader={() => '/home_image.jpeg'}
					src='/home_image.jpeg'
					alt='home image'
					width={1}
					height={1}
				/>
                <AuthForm />
            </div>
        </>
    );
};