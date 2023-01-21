import { en } from "locales/en.locale";
import { ru } from "locales/ru.locale";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Header } from "./Header/Header";
import { LayoutProps } from "./Layout.props";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    const router = useRouter();
    const t = router.locale === 'en' ? en : ru;
	return (
		<>
			<Header />
            <Link href={router.asPath} locale="ru"><p>ru</p></Link>
            <Link href={router.asPath} locale="en"><p>en</p></Link>
            {t.title + 'tBench'}
        </>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};