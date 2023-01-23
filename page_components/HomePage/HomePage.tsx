import styles from './HomePage.module.css';
import { Header } from "components/Header/Header";
import { AuthForm } from 'components/AuthForm/AuthForm';
import Image from 'next/image'
import { setLocale } from 'helpers/helpers_locale';
import { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { useRouter } from 'next/router';
import { AuthFormChange } from 'components/AuthFormChange/AuthFormChange';

export const HomePage = (): JSX.Element => {
    const router = useRouter();
    
    const [authState, setAuthState] = useState<'login' | 'registration'>('login')

	return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Image className={styles.startBlock} draggable='false'
					loader={() => '/home_image.png'}
					src='/home_image.png'
					alt={setLocale(router.locale).home_image}
					width={1}
					height={1}
                    unoptimized={true}
				/>
                <div className={styles.authBlock}>
                    <AuthForm type={authState} />
                    <AuthFormChange type={authState} onClick={() => {
                        if (authState === 'login') {
                            setAuthState('registration');
                        } else {
                            setAuthState('login')
                        }
                    }} />
                </div>
            </div>
            <Footer />
        </>
    );
};