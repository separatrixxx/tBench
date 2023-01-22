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
					loader={() => '/home_image.png'}
					src='/home_image.png'
					alt='home image'
					width={1}
					height={1}
                    unoptimized={true}
				/>
                <AuthForm />
            </div>
        </>
    );
};