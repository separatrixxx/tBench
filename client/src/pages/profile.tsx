import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { setLocale } from 'helpers/locale.helper';
import { pageHelper, userHelper } from 'helpers/pages.helper';
import { useDispatch } from 'react-redux';


function Profile(): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
		pageHelper(router, dispatch, setIsAuth);
		userHelper(dispatch);
	}, [router, dispatch]);

  if (isAuth) {
    return (
      <>
        <Head>
          <title>tBench - {setLocale(router.locale).profile}</title>
        </Head>
        <ProfilePage />
      </>
    );
  } else {
    return (
      <></>
    );
  }
}

export default Profile;