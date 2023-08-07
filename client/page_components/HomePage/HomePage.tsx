import styles from './HomePage.module.css';
import { Header } from "components/Headers/Header/Header";
import { AuthForm } from 'components/Auth/AuthForm/AuthForm';
import { useState } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Block } from 'components/Common/Block/Block';
import { AuthBlock } from 'components/Auth/AuthBlock/AuthBlock';
import { Toaster } from 'react-hot-toast';
import { Links } from 'interfaces/components.interface';


export const HomePage = (): JSX.Element => {
    const links: Links[] = [
        { title: 'About', link: 'about' },
        { title: 'Ecosystem', link: 'ecosystem' },
        { title: 'Explore', link: 'explore' },
    ];

    return (
        <>
            <Header links={links} />
            <Toaster
                position="top-center"
                reverseOrder={true}
                toastOptions={{
                    duration: 2000,
                }}
            />
            <div className={styles.wrapper}>
                <AuthBlock>
                    <AuthForm />
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