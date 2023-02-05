import { ContentPage } from "page_components/ContentPage/ContentPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

function Content(): JSX.Element {
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
	}, []);

  if (isAuth) {
    return (
      <>
        <Head>
          <title>tBench - Content</title>
        </Head>
        <ContentPage />
      </>
    );
  } else {
    return (
      <></>
    );
  }
}

export default Content;