import styles from './HomePage.module.css';
import { Header } from "components/Header/Header";
import { AuthForm } from 'components/AuthForm/AuthForm';
import { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { AuthFormChange } from 'components/AuthFormChange/AuthFormChange';
import { Block } from 'components/Block/Block';

export const HomePage = (): JSX.Element => {  
    const [authState, setAuthState] = useState<'login' | 'registration'>('login')

	return (
        <>
            <Header />
            <Block type='duo'>
                <Block type='auth'>
                    <AuthForm type={authState} />
                    <AuthFormChange type={authState} onClick={() => {
                        if (authState === 'login') {
                            setAuthState('registration');
                        } else {
                            setAuthState('login')
                        }
                    }} />
                </Block>
                <Block type='image' image='/home_image.png' />
            </Block>
            <Block type='text' color='var(--primary)' />
            <Block type='duo'>
                <Block type='text' color='#000' />
                <Block type='text' color='#ff0000' />
            </Block>
            <Footer />
        </>
    );
};