import { useRouter } from 'next/router';
import styles from './ContentPage.module.css';

export const ContentPage = (): JSX.Element => { 
    const router = useRouter();
     
	return (
        <>
            Content
            <br></br>
            <button onClick={() => {
                router.push('/');
                localStorage.clear();
            }}>Sign Out</button>
        </>
    );
};