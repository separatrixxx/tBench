import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

function Profile(): JSX.Element {
  const router = useRouter();
  
  const [isAuth, setIsAuth] = useState<boolean>(false);
  
  useEffect(() => {
		const loggedIn = localStorage.getItem('logged_in');

    if (loggedIn) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
      router.push('/');
    }
	}, [router]);

  if (isAuth) {
    return (
      <>
        <Head>
          <title>tBench - Profile</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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