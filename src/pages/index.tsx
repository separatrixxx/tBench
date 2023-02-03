import { HomePage } from "page_components/HomePage/HomePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Home(): JSX.Element {
  const router = useRouter();
  
  const [isAuth, setIsAuth] = useState<boolean>(true);
  
  useEffect(() => {
		const loggedIn = localStorage.getItem('logged_in');

    if (loggedIn) {
      setIsAuth(true);
      router.push('/content');
    } else {
      setIsAuth(false);
    }
	}, []);

  if (!isAuth) {
    return (
      <HomePage />
    );
  } else {
    return (
      <></>
    );
  }
}

export default Home;

