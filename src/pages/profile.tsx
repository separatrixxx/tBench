import { ProfilePage } from "page_components/ProfilePage/ProfilePage";
import { isAuth } from "hooks/isAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Profile(): JSX.Element | undefined {
  const router = useRouter();
  const auth = isAuth();

  if (auth) {
    return (
      <ProfilePage />
    );
  } else {
    useEffect(() => {
      router.push('/');
    }, []);
  }
}

export default Profile;