import styles from './HomePage.module.css';
import { Header } from "components/Header/Header";
import { AuthForm } from 'components/AuthForm/AuthForm';
import { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { AuthFormChange } from 'components/AuthFormChange/AuthFormChange';
import { Block } from 'components/Block/Block';
import { AuthBlock } from 'components/AuthBlock/AuthBlock';
import { Toaster } from 'react-hot-toast';

export const HomePage = (): JSX.Element => {  
    const [authState, setAuthState] = useState<'login' | 'registration'>('login')

	return (
        <>
            <Header />
            <Toaster
					position="top-center"
					reverseOrder={true}
				/>
            <div className={styles.wrapper}>
                <AuthBlock>
                    <AuthForm type={authState} setAuthState={setAuthState} />
                </AuthBlock>
                <Block type='text' color='var(--primary)' />
                <Block type='duo'>
                    <Block type='text' color='#000000' />
                    <Block type='text' color='#ff0000' />
                </Block>
                <Footer />
            </div>
        </>
    );
};