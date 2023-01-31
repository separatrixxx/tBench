import { useRouter } from "next/router";
import { HomePage } from "page_components/HomePage/HomePage";
import { useEffect } from "react";

function Home(): JSX.Element {
  const router = useRouter();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('logged_in');

    if (loggedIn) {
      router.push('/content');
    }
  });

  return (
    <HomePage />
  );
}

export default Home;

