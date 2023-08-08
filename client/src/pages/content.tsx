import { ContentPage } from "page_components/ContentPage/ContentPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { setLocale } from 'helpers/locale.helper';
import { pageHelper, userHelper } from 'helpers/pages.helper';
import { User } from "interfaces/user.interface";

function Content(): JSX.Element {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [theme, setTheme] = useState<string>('light');
  
  const userData: User = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    gender: 'male',
  };

  const [user, setUser] = useState<User>(userData);

  useEffect(() => {
    pageHelper(router, setIsAuth, setTheme);
    userHelper(setUser);
  }, [router]);

  if (isAuth) {
    return (
      <>
        <Head>
          <title>tBench - {setLocale(router.locale).content}</title>
        </Head>
        <ContentPage theme={theme} user={user} />
      </>
    );
  } else {
    return (
      <></>
    );
  }
}

export default Content;