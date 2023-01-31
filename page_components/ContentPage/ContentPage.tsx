import styles from './ContentPage.module.css';

export const ContentPage = (): JSX.Element => {  
	return (
        <>
            Content
            <br></br>
            <button onClick={() => {
                localStorage.clear();
                window.location.reload();
            }}>Sign Out</button>
        </>
    );
};