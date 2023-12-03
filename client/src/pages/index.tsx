import { HomePage } from "page_components/HomePage/HomePage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { indexPageHelper } from 'helpers/pages.helper';


function Home(): JSX.Element {
  const router = useRouter();

  const [isAuth, setIsAuth] = useState<boolean>(true);

  useEffect(() => {
    indexPageHelper(router, setIsAuth);
  }, [router]);

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

