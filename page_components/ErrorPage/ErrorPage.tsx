import { ErrorPageProps } from "./ErrorPage.props";
import styles from './ErrorPage.module.css';
import Link from "next/link";
import { useRouter } from "next/router";
import { setLocale } from "helpers/helpers_locale";
import { Htag } from "components/Htag/Htag";

export const ErrorPage = ({ error }: ErrorPageProps): JSX.Element => {    
    const router = useRouter();
    
	if (error === 404) {
        return (
            <div className={styles.errorPage}>
                <Link href='/'>
                    <Htag tag="l" className={styles.errorText}>{setLocale(router.locale).error404}</Htag>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={styles.errorPage}>
                <Link href='/'>
                    <Htag tag="l" className={styles.errorText}>{setLocale(router.locale).error500}</Htag>
                </Link>
            </div>
	    );
    }
};