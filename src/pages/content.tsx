import { ContentPage } from "page_components/ContentPage/ContentPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { setLocale } from 'helpers/locale.helper';

function Content(): JSX.Element {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    const loggedIn = localStorage.getItem('logged_in');
    const currentTheme = localStorage.getItem('theme');

    if (loggedIn) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      router.push('/');
    }

    if (currentTheme) {
      setTheme(currentTheme);
    }
  }, [router]);

  if (isAuth) {
    return (
      <>
        <Head>
          <title>tBench - {setLocale(router.locale).content}</title>
        </Head>
        <ContentPage theme={theme} />
      </>
    );
  } else {
    return (
      <></>
    );
  }
}

export default Content;