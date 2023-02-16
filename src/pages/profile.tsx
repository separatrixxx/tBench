import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { setLocale } from 'helpers/locale.helper';

function Profile(): JSX.Element {
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
          <title>tBench - {setLocale(router.locale).profile}</title>
          <meta name="viewport"></meta>
        </Head>
        <ProfilePage theme={theme} />
      </>
    );
  } else {
    return (
      <></>
    );
  }
}

export default Profile;