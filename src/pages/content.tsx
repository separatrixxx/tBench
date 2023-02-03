import { ContentPage } from "page_components/ContentPage/ContentPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Content(): JSX.Element | undefined {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean>(false);
  
  useEffect(() => {
		const loggedIn = localStorage.getItem('logged_in');

    if (loggedIn) {
      setIsAuth(true);
    } else {
      router.push('/');
      setIsAuth(false);
    }
	}, []);

  if (isAuth) {
    return (
      <ContentPage />
    );
  } else {
    return (
      <></>
    );
  }
}

export default Content;