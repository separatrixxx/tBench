import { HomePage } from "page_components/HomePage/HomePage";
import { isAuth } from "hooks/isAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Home(): JSX.Element | undefined {
  const router = useRouter();
  const auth = isAuth();

  if (auth) {
    useEffect(() => {
      router.push('/content');
    }, []);
  } else {
    return (
      <HomePage />
    );
  }
}

export default Home;

