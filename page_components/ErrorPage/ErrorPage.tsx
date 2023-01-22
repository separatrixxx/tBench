import { setLocale } from "helpers/helpers_locale";
import Link from "next/link";
import { ErrorPageProps } from "./ErrorPage.props";

export const ErrorPage = ({ error }: ErrorPageProps): JSX.Element => {
	if (error === 404) {
        return (
            <Link href='/'><p>{setLocale().error404}</p></Link>
        );
    } else {
        return (
            <Link href='/'><p>{setLocale().error500}</p></Link>
	    );
    }
};