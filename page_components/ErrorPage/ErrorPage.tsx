import { setLocale } from "helpers/helpers_locale";
import Link from "next/link";
import { useRouter } from "next/router";
import { ErrorPageProps } from "./ErrorPage.props";

export const ErrorPage = ({ error }: ErrorPageProps): JSX.Element => {
    const router = useRouter();
    
	if (error === 404) {
        return (
            <Link href='/'><p>{setLocale(router.locale).error404}</p></Link>
        );
    } else {
        return (
            <Link href='/'><p>{setLocale(router.locale).error500}</p></Link>
	    );
    }
};