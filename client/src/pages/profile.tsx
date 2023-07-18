import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { setLocale } from 'helpers/locale.helper';
import { pageHelper } from 'helpers/pages.helper';

function Profile(): JSX.Element {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
    pageHelper(router, setIsAuth, setTheme);
  }, [router]);

  if (isAuth) {
    return (
      <>
        <Head>
          <title>tBench - {setLocale(router.locale).profile}</title>
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