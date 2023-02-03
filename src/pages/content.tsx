import { ContentPage } from "page_components/ContentPage/ContentPage";
import { isAuth } from "hooks/isAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Content(): JSX.Element | undefined {
  const router = useRouter();
  const auth = isAuth();

  if (auth) {
    return (
      <ContentPage />
    );
  } else {
    useEffect(() => {
      router.push('/');
    }, []);
  }
}

export default Content;