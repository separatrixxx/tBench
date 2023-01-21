import { en } from "locales/en.locale";
import { ru } from "locales/ru.locale";
import Link from "next/link";
import { useRouter } from "next/router";
import { ErrorPageProps } from "./ErrorPage.props";

export const ErrorPage = ({ error }: ErrorPageProps): JSX.Element => {
    const router = useRouter();
    const err = router.locale === 'en' ? en : ru;
	if (error === 404) {
        return (
            <Link href='/'><p>{err.error404}</p></Link>
        );
    } else {
        return (
            <Link href='/'><p>{err.error500}</p></Link>
	    );
    }
};