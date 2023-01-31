import { useRouter } from "next/router";
import { ContentPage } from "page_components/ContentPage/ContentPage";
import { useEffect } from "react";

function Content(): JSX.Element {
  const router = useRouter();
  
  useEffect(() => {
    const loggedIn = localStorage.getItem('logged_in');

    if (!loggedIn) {
      router.push('/');
    }
  });
  
  return (
    <ContentPage />
  );
}

export default Content;