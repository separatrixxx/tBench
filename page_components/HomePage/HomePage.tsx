import styles from './HomePage.module.css';
import { Header } from "components/Header/Header";
import { AuthForm } from 'components/AuthForm/AuthForm';
import Image from 'next/image'
import { setLocale } from 'helpers/helpers_locale';
import { useState } from 'react';

export const HomePage = (): JSX.Element => {
    const [authState, setAuthState] = useState<'login' | 'registration'>('login')

	return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Image className={styles.startBlock}
					loader={() => '/home_image.png'}
					src='/home_image.png'
					alt={setLocale().home_image}
					width={1}
					height={1}
                    unoptimized={true}
				/>
                <div className={styles.authBlock}>
                    <AuthForm type={authState} />
                    <h1 className={styles.h} onClick={() => setAuthState('login')}>{setLocale().sign_in}</h1>
                    <h1 className={styles.h} onClick={() => setAuthState('registration')}>{setLocale().sign_up}</h1>
                </div>
            </div>
        </>
    );
};